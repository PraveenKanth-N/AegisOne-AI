"""
AegisOne AI - Sandbox Validation Center API
Implements isolated sandbox testing, multi-stage verification,
regression testing, secondary security re-scanning, and automated rollback.
Supports genuine Docker container isolation with honest in-process fallback.
"""
import uuid
import asyncio
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models import Remediation, ValidationRun
from backend.app.schemas import ValidationRunResponse
from backend.app.services.audit_logger import log_event
from backend.app.services.sandbox_service import (
    check_docker_available,
    execute_sandbox_validation_task
)

router = APIRouter(prefix="/sandbox", tags=["Sandbox Validation"])


@router.get("/docker-status")
async def get_docker_status():
    """Returns the live availability of Docker container daemon and isolation support."""
    available, reason = await check_docker_available()
    return {
        "docker_available": available,
        "isolation_supported": "CONTAINER_ISOLATED" if available else "IN_PROCESS_SIMULATION",
        "detail": reason,
        "base_image": "python:3.12-slim" if available else "local_python_runtime",
        "security_policy": {
            "network": "DISABLED (--network none)" if available else "HOST_SHARED",
            "non_root": True if available else False,
            "memory_limit": "256m" if available else "UNCONSTRAINED",
            "production_eligible_on_pass": True if available else False
        }
    }


@router.post("/validate/{remediation_id}", response_model=ValidationRunResponse, status_code=201)
async def validate_remediation(
    remediation_id: str,
    background_tasks: BackgroundTasks,
    simulate_bad_fix: bool = False,
    db: AsyncSession = Depends(get_db)
):
    """Submits a remediation patch to the isolated sandbox for multi-stage verification."""
    result = await db.execute(select(Remediation).where(Remediation.id == remediation_id))
    rem = result.scalar_one_or_none()
    if not rem:
        raise HTTPException(404, "Remediation not found")
    
    docker_available, docker_reason = await check_docker_available()
    
    if docker_available:
        sandbox_ref = f"box-{uuid.uuid4().hex[:8]}"
        exec_mode = "DOCKER_CONTAINER"
        iso_level = "CONTAINER_ISOLATED"
    else:
        sandbox_ref = f"sim-inproc-{uuid.uuid4().hex[:8]}"
        exec_mode = "IN_PROCESS_SIMULATION"
        iso_level = "UNISOLATED_HOST"

    vrun = ValidationRun(
        remediation_id=remediation_id,
        sandbox_id=sandbox_ref,
        execution_mode=exec_mode,
        isolation_level=iso_level,
        container_id=None,
        production_eligible=False,
        status="RUNNING",
        syntax_check="PENDING",
        regression_tests="PENDING",
        ast_verification="PENDING",
        security_rescan="PENDING",
        rollback_executed=False
    )
    db.add(vrun)
    rem.status = "IN_SANDBOX"
    await db.flush()
    await db.refresh(vrun)
    
    await log_event(
        db, "SANDBOX_VALIDATION_DISPATCHED",
        f"Remediation {remediation_id} dispatched ({exec_mode}, {iso_level}, Bad AI Demo: {simulate_bad_fix})",
        resource_id=vrun.id, resource_type="ValidationRun"
    )
    await db.commit()
    
    # Dispatch sandbox validation asynchronously on the event loop
    asyncio.create_task(execute_sandbox_validation_task(vrun.id, simulate_bad_fix))
    return vrun


@router.get("/run/{run_id}", response_model=ValidationRunResponse)
async def get_validation_run(run_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ValidationRun).where(ValidationRun.id == run_id))
    vrun = result.scalar_one_or_none()
    if not vrun:
        raise HTTPException(404, "Validation run not found")
    return vrun


@router.get("/remediation/{remediation_id}", response_model=List[ValidationRunResponse])
async def get_remediation_runs(remediation_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(ValidationRun).where(ValidationRun.remediation_id == remediation_id)
        .order_by(ValidationRun.created_at.desc())
    )
    return result.scalars().all()
