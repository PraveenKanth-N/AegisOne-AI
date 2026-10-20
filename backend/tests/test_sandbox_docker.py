"""
Unit & Integration Tests for Phase 16: Docker Sandbox Validation & Fallback
Tests both real Docker probes, in-process fallback, and mocked Docker container execution.
"""
import pytest
import asyncio
from unittest.mock import patch, MagicMock, AsyncMock
from httpx import ASGITransport, AsyncClient

from backend.app.main import app
from backend.app.core.database import init_db
from backend.app.seed import seed_database
from backend.app.services.sandbox_service import (
    check_docker_available,
    DockerSandboxRunner,
    InProcessSandboxRunner,
    execute_sandbox_validation_task
)

@pytest.mark.asyncio
async def test_docker_probe_live():
    """Probes the live Docker daemon status on the host (honestly detects stopped daemon)."""
    is_avail, reason = await check_docker_available(timeout=2.0)
    assert isinstance(is_avail, bool)
    assert isinstance(reason, str)
    assert len(reason) > 0


@pytest.mark.asyncio
async def test_docker_status_endpoint():
    """Verifies that the /api/v1/sandbox/docker-status endpoint exposes genuine isolation metadata."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        res = await client.get("/api/v1/sandbox/docker-status")
        assert res.status_code == 200
        data = res.json()
        assert "docker_available" in data
        assert "isolation_supported" in data
        assert "security_policy" in data
        assert data["isolation_supported"] in ["CONTAINER_ISOLATED", "IN_PROCESS_SIMULATION"]


def test_in_process_honest_simulation_metadata():
    """Verifies that InProcessSandboxRunner does not claim container isolation."""
    valid_code = "def search(dept): return db.execute('SELECT * FROM students WHERE dept = %s', (dept,))"
    res = InProcessSandboxRunner.run_deterministic(valid_code, is_bad_fix=False)
    assert res["execution_mode"] == "IN_PROCESS_SIMULATION"
    assert res["isolation_level"] == "UNISOLATED_HOST"
    assert res["container_id"] is None
    assert res["production_eligible"] is False
    assert "sim-inproc-" in res["sandbox_id"]
    assert res["syntax_pass"] is True
    assert res["regression_pass"] is True
    assert res["security_pass"] is True
    assert res["policy_verdict"] == "EDUCATIONAL_DEMO_PASSED_REQUIRES_MANUAL_REVIEW"


def test_in_process_syntax_failure():
    """Verifies that InProcessSandboxRunner genuinely parses AST and rejects syntax errors."""
    broken_code = "def search(dept): return db.execute(SELECT * FROM students"  # Syntax error
    res = InProcessSandboxRunner.run_deterministic(broken_code, is_bad_fix=False)
    assert res["syntax_pass"] is False
    assert res["regression_pass"] is False
    assert res["policy_verdict"] == "REJECTED_SYNTAX_ERROR"
    assert "SyntaxError" in res["failure_reason"]


def test_in_process_flawed_fix_rejection():
    """Verifies that a deliberately flawed fix is rejected with contract regression."""
    code = "def search(dept): return db.execute('SELECT * FROM students WHERE dept = %s', (dept,))"
    res = InProcessSandboxRunner.run_deterministic(code, is_bad_fix=True)
    assert res["syntax_pass"] is True
    assert res["regression_pass"] is False
    assert res["policy_verdict"] == "REJECTED_SECURITY_REGRESSION"
    assert "CWE-200" in res["failure_reason"]


@pytest.mark.asyncio
async def test_mocked_docker_container_clean_pass():
    """Mocks a successful Docker container execution and verifies isolation metadata."""
    mock_proc = MagicMock()
    mock_proc.returncode = 0
    mock_proc.communicate = MagicMock(return_value=asyncio.sleep(
        0.01,
        result=(b"STAGE_SYNTAX:PASS\nSTAGE_REGRESSION:PASS\nSTAGE_SECURITY:PASS\nALL_STAGES:PASS\n", b"")
    ))

    with patch("asyncio.create_subprocess_exec", return_value=mock_proc):
        result = await DockerSandboxRunner.run_in_container(
            target_code="def query(): pass",
            patch_code="def query(): return %s",
            is_bad_fix=False
        )
        assert result["execution_mode"] == "DOCKER_CONTAINER"
        assert result["isolation_level"] == "CONTAINER_ISOLATED"
        assert result["production_eligible"] is True
        assert result["exit_code"] == 0
        assert result["syntax_pass"] is True
        assert result["regression_pass"] is True
        assert result["security_pass"] is True
        assert result["policy_verdict"] == "APPROVED_CONTAINER_ISOLATED"


@pytest.mark.asyncio
async def test_mocked_docker_container_regression_failure():
    """Mocks Docker container returning a nonzero exit code (e.g. regression failure)."""
    mock_proc = MagicMock()
    mock_proc.returncode = 2
    mock_proc.communicate = MagicMock(return_value=asyncio.sleep(
        0.01,
        result=(b"STAGE_SYNTAX:PASS\nSTAGE_REGRESSION:FAIL:Contract regression\n", b"")
    ))

    with patch("asyncio.create_subprocess_exec", return_value=mock_proc):
        result = await DockerSandboxRunner.run_in_container(
            target_code="def query(): pass",
            patch_code="def query(): return %s",
            is_bad_fix=True
        )
        assert result["execution_mode"] == "DOCKER_CONTAINER"
        assert result["isolation_level"] == "CONTAINER_ISOLATED"
        assert result["production_eligible"] is False
        assert result["exit_code"] == 2
        assert result["syntax_pass"] is True
        assert result["regression_pass"] is False
        assert result["policy_verdict"] == "REJECTED_VALIDATION_FAILURE"


@pytest.mark.asyncio
async def test_mocked_docker_container_timeout():
    """Mocks a container timeout and verifies timeout abortion."""
    async def timeout_communicate():
        raise asyncio.TimeoutError()

    mock_proc = MagicMock()
    mock_proc.communicate = timeout_communicate

    with patch("asyncio.create_subprocess_exec", return_value=mock_proc):
        result = await DockerSandboxRunner.run_in_container(
            target_code="def query(): pass",
            patch_code="def query(): while True: pass",
            is_bad_fix=False
        )
        assert result["execution_mode"] == "DOCKER_CONTAINER"
        assert result["production_eligible"] is False
        assert result["policy_verdict"] == "REJECTED_EXECUTION_TIMEOUT"
        assert "timed out" in result["output"]


@pytest.mark.asyncio
async def test_mocked_docker_creation_failure():
    """Mocks container creation failing (e.g. missing image or runtime error)."""
    with patch("asyncio.create_subprocess_exec", side_effect=RuntimeError("Cannot connect to Docker endpoint")):
        result = await DockerSandboxRunner.run_in_container(
            target_code="def query(): pass",
            patch_code="def query(): pass",
            is_bad_fix=False
        )
        assert result["execution_mode"] == "DOCKER_CONTAINER"
        assert result["production_eligible"] is False
        assert result["policy_verdict"] == "REJECTED_CONTAINER_ERROR"
        assert "Container launch error" in result["output"]
