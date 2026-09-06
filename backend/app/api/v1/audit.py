"""
AegisOne AI - Audit Log API
Provides immutable records of all scanning, AI proposals,
sandbox executions, rollbacks, and administrative actions.
"""
from typing import List, Optional
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models.audit_log import AuditLog
from backend.app.schemas import AuditLogResponse

router = APIRouter(prefix="/audit", tags=["Audit Logs"])

@router.get("", response_model=List[AuditLogResponse])
async def list_audit_logs(
    project_id: Optional[str] = None,
    severity: Optional[str] = None,
    limit: int = 50,
    db: AsyncSession = Depends(get_db)
):
    q = select(AuditLog)
    if project_id:
        q = q.where(AuditLog.project_id == project_id)
    if severity:
        q = q.where(AuditLog.severity == severity)
    q = q.order_by(AuditLog.created_at.desc()).limit(limit)
    result = await db.execute(q)
    return result.scalars().all()
