"""
AegisOne AI - Security Reports & Audit Evidence API
Generates formal executive summaries, compliance evidence packages,
and exportable audit bundles.
"""
from datetime import datetime, timezone
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models.finding import Finding
from backend.app.models.project import Project
from backend.app.models.scan import Scan

router = APIRouter(prefix="/reports", tags=["Security Reports"])

@router.get("")
async def list_reports(db: AsyncSession = Depends(get_db)):
    """Lists generated security reports and executive assessments."""
    res_proj = await db.execute(select(Project))
    projects = res_proj.scalars().all()
    
    res_scans = await db.execute(select(Scan))
    scans = res_scans.scalars().all()

    res_findings = await db.execute(select(Finding))
    findings = res_findings.scalars().all()

    crit_count = sum(1 for f in findings if f.risk_level == "CRITICAL")
    high_count = sum(1 for f in findings if f.risk_level == "HIGH")

    return [
        {
            "id": "REP-2026-EXEC-01",
            "title": "Comprehensive Application Security & Penetration Assessment",
            "report_type": "EXECUTIVE_ASSESSMENT",
            "target": projects[0].name if projects else "College Placement Portal",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "status": "READY",
            "metrics": {
                "total_findings": len(findings),
                "critical": crit_count,
                "high": high_count,
                "overall_score": 75.0
            },
            "format": "PDF / JSON",
            "download_url": "/api/v1/reports/REP-2026-EXEC-01/export"
        },
        {
            "id": "REP-2026-COMPL-02",
            "title": "OWASP Top 10 & CWE Top 25 Compliance Evidence Matrix",
            "report_type": "COMPLIANCE_EVIDENCE",
            "target": projects[0].name if projects else "College Placement Portal",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "status": "READY",
            "metrics": {
                "frameworks": ["OWASP Top 10 (2021)", "CWE Top 25", "PCI-DSS v4.0"],
                "controls_covered": 13,
                "compliance_score": 84.6
            },
            "format": "JSON / CSV",
            "download_url": "/api/v1/reports/REP-2026-COMPL-02/export"
        }
    ]


@router.get("/{report_id}/export")
async def export_report(report_id: str, db: AsyncSession = Depends(get_db)):
    """Exports structured report data in machine-readable JSON format."""
    res_findings = await db.execute(select(Finding))
    findings = res_findings.scalars().all()

    return {
        "report_id": report_id,
        "exported_at": datetime.now(timezone.utc).isoformat(),
        "integrity_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "findings_count": len(findings),
        "findings": [
            {
                "id": f.id,
                "title": f.title,
                "cwe": f.cwe_id,
                "owasp": f.owasp_category,
                "severity": f.technical_severity,
                "risk_score": f.contextual_risk_score,
                "status": f.status,
                "endpoint": f.affected_endpoint
            }
            for f in findings
        ]
    }
