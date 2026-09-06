"""
AegisOne AI - Audit Logger
Records all security-sensitive events to the immutable audit log.
"""
import json
from datetime import datetime, timezone
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.models.audit_log import AuditLog

async def log_event(
    db: AsyncSession,
    event_type: str,
    description: str,
    severity: str = "INFO",
    actor: str = "system",
    project_id: str = None,
    resource_id: str = None,
    resource_type: str = None,
    metadata: dict = None
):
    entry = AuditLog(
        event_type=event_type,
        actor=actor,
        project_id=project_id,
        resource_id=resource_id,
        resource_type=resource_type,
        description=description,
        severity=severity,
        metadata_json=json.dumps(metadata) if metadata else None,
    )
    db.add(entry)
    # Don't flush here - let caller manage transaction
