"""
AegisOne AI - Findings API
Provides evidence retrieval, contextual risk detail, and finding status management.
"""
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func

from backend.app.core.database import get_db
from backend.app.models import Finding, Evidence, Asset
from backend.app.schemas import FindingResponse, EvidenceResponse
from backend.app.services.risk_engine import (
    RiskFactors, compute_risk, sensitivity_to_factor, exposure_to_factor
)

router = APIRouter(prefix="/findings", tags=["Findings"])

@router.get("", response_model=List[FindingResponse])
async def list_findings(
    status: Optional[str] = None,
    risk_level: Optional[str] = None,
    db: AsyncSession = Depends(get_db)
):
    q = select(Finding)
    if status:
        q = q.where(Finding.status == status)
    if risk_level:
        q = q.where(Finding.risk_level == risk_level)
    q = q.order_by(Finding.contextual_risk_score.desc())
    result = await db.execute(q)
    return result.scalars().all()

@router.get("/{finding_id}", response_model=FindingResponse)
async def get_finding(finding_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Finding).where(Finding.id == finding_id))
    finding = result.scalar_one_or_none()
    if not finding:
        raise HTTPException(404, "Finding not found")
    return finding

@router.get("/{finding_id}/evidence", response_model=List[EvidenceResponse])
async def get_evidence(finding_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Evidence).where(Evidence.finding_id == finding_id))
    return result.scalars().all()

@router.get("/{finding_id}/risk-detail")
async def get_risk_detail(finding_id: str, db: AsyncSession = Depends(get_db)):
    """Returns the full mathematical risk breakdown for a finding."""
    result = await db.execute(select(Finding).where(Finding.id == finding_id))
    finding = result.scalar_one_or_none()
    if not finding:
        raise HTTPException(404, "Finding not found")
    
    asset = None
    if finding.asset_id:
        ar = await db.execute(select(Asset).where(Asset.id == finding.asset_id))
        asset = ar.scalar_one_or_none()
    
    ev_result = await db.execute(select(Evidence).where(Evidence.finding_id == finding_id))
    evidences = ev_result.scalars().all()
    avg_confidence = sum(e.confidence for e in evidences) / len(evidences) if evidences else 0.9
    
    factors = RiskFactors(
        technical_severity=finding.technical_severity,
        exploitability=0.85,
        asset_criticality=asset.criticality if asset else 0.8,
        data_sensitivity=sensitivity_to_factor(asset.data_sensitivity if asset else "HIGH_PII"),
        exposure=exposure_to_factor(asset.exposure if asset else "EXTERNAL"),
        confidence=avg_confidence
    )
    risk = compute_risk(factors)
    
    return {
        "finding_id": finding_id,
        "final_score": risk.score,
        "risk_level": risk.level,
        "breakdown": risk.breakdown,
        "factor_inputs": {
            "technical_severity": factors.technical_severity,
            "exploitability": factors.exploitability,
            "asset_criticality": factors.asset_criticality,
            "data_sensitivity": factors.data_sensitivity,
            "exposure": factors.exposure,
            "confidence": factors.confidence,
        }
    }
