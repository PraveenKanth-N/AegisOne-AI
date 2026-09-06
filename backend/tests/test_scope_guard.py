"""
Unit Tests for AegisOne AI Scope Guard
Verifies strict enforcement of authorized target host whitelist.
"""
import pytest
from fastapi import HTTPException
from backend.app.services.scope_guard import verify_target

def test_authorized_localhost_target():
    res = verify_target("http://localhost:8001")
    assert res["authorized"] is True
    assert res["status"] == "AUTHORIZED"
    assert "SAFE TO SCAN" in res["badge"]

def test_authorized_127_target():
    res = verify_target("http://127.0.0.1:8000/api")
    assert res["authorized"] is True

def test_unauthorized_external_target_blocked():
    with pytest.raises(HTTPException) as exc_info:
        verify_target("https://google.com")
    assert exc_info.value.status_code == 403
    assert "SCOPE_VIOLATION" in exc_info.value.detail["error"]
