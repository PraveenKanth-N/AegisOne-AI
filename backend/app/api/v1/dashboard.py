"""
AegisOne AI - Dashboard & Executive Metrics API
Aggregates high-density cybersecurity telemetry, security score,
risk distribution, and recent security event timeline.
"""
from typing import Dict, Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func

from backend.app.core.database import get_db
from backend.app.models import Project, Scan, Finding, Remediation, ValidationRun, AuditLog, Asset
from backend.app.schemas import DashboardSummary

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/summary", response_model=DashboardSummary)
async def get_dashboard_summary(db: AsyncSession = Depends(get_db)):
    proj_count = await db.scalar(select(func.count(Project.id))) or 0
    scan_count = await db.scalar(select(func.count(Scan.id))) or 0
    finding_count = await db.scalar(select(func.count(Finding.id))) or 0
    
    crit_count = await db.scalar(select(func.count(Finding.id)).where(Finding.risk_level == "CRITICAL")) or 0
    high_count = await db.scalar(select(func.count(Finding.id)).where(Finding.risk_level == "VERY_HIGH" or Finding.risk_level == "HIGH")) or 0
    med_count = await db.scalar(select(func.count(Finding.id)).where(Finding.risk_level == "MODERATE")) or 0
    low_count = await db.scalar(select(func.count(Finding.id)).where(Finding.risk_level == "LOW")) or 0
    
    val_count = await db.scalar(select(func.count(Remediation.id)).where(Remediation.status == "VALIDATED")) or 0
    rej_count = await db.scalar(select(func.count(Remediation.id)).where(Remediation.status == "REJECTED" or Remediation.status == "ROLLED_BACK")) or 0
    
    last_scan = await db.scalar(select(Scan.started_at).order_by(Scan.started_at.desc()).limit(1))
    
    # Compute overall security score: 100 - weighted penalties + remediation bonus
    penalties = (crit_count * 15.0) + (high_count * 8.0) + (med_count * 3.0) + (low_count * 1.0)
    bonus = min(20.0, val_count * 5.0)
    base_score = max(10.0, min(100.0, 100.0 - penalties + bonus)) if finding_count > 0 else 95.0
    
    return DashboardSummary(
        total_projects=proj_count,
        total_scans=scan_count,
        total_findings=finding_count,
        critical_count=crit_count,
        high_count=high_count,
        medium_count=med_count,
        low_count=low_count,
        validated_fixes=val_count,
        rejected_fixes=rej_count,
        security_score=round(base_score, 1),
        last_scan_at=last_scan
    )

@router.get("/timeline")
async def get_activity_timeline(limit: int = 15, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(AuditLog).order_by(AuditLog.created_at.desc()).limit(limit)
    )
    logs = result.scalars().all()
    return [
        {
            "id": log.id,
            "event_type": log.event_type,
            "description": log.description,
            "severity": log.severity,
            "actor": log.actor,
            "timestamp": log.created_at.isoformat() if log.created_at else None
        }
        for log in logs
    ]

@router.get("/attack-surface")
async def get_attack_surface(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Asset))
    assets = result.scalars().all()
    
    surface = []
    for asset in assets:
        fc = await db.scalar(select(func.count(Finding.id)).where(Finding.asset_id == asset.id)) or 0
        surface.append({
            "id": asset.id,
            "name": asset.name,
            "asset_type": asset.asset_type,
            "criticality": asset.criticality,
            "exposure": asset.exposure,
            "data_sensitivity": asset.data_sensitivity,
            "vulnerability_count": fc
        })
    return surface
