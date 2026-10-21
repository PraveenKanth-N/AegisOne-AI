"""
AegisOne AI - Global Platform Settings API
Manages system configuration, Scope Guard whitelist,
AI engine provider selection, and container sandbox limits.
"""
from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

from backend.app.core.config import settings

router = APIRouter(prefix="/settings", tags=["Global Settings"])

class SettingsUpdate(BaseModel):
    allowed_targets: List[str]
    ai_provider: str
    sandbox_timeout_seconds: int

@router.get("")
async def get_settings():
    return {
        "platform_name": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "environment": "academic_demonstration",
        "scope_guard": {
            "authorized_target_hosts": settings.ALLOWED_TARGET_HOSTS,
            "enforcement_mode": "STRICT_BLOCK",
            "allow_external_scans": False
        },
        "ai_analyst": {
            "provider": settings.AI_PROVIDER,
            "live_key_configured": bool(settings.OPENAI_API_KEY),
            "model": "gpt-4o",
            "temperature": 0.2
        },
        "sandbox": {
            "default_image": "python:3.12-slim",
            "memory_limit": "256m",
            "cpu_limit": "0.5",
            "pids_limit": 64,
            "network_mode": "none",
            "timeout_seconds": 30
        }
    }
