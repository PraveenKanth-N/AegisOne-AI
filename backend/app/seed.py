"""
AegisOne AI - Database Initialization & Seed Script
Seeds realistic academic demo data for the College Placement Portal,
ensuring the platform is immediately interactive and ready for demonstration.
"""
import asyncio
from datetime import datetime, timezone
from sqlalchemy import select

from backend.app.core.database import init_db, AsyncSessionLocal
from backend.app.core.security import get_password_hash
from backend.app.models import (
    User, Project, Asset, Scan, Finding, Evidence,
    Remediation, ValidationRun, AuditLog
)

async def seed_database():
    print("[AegisOne AI] Initializing database tables...")
    await init_db()
    
    async with AsyncSessionLocal() as db:
        # Check if already seeded
        user_res = await db.execute(select(User).where(User.username == "lead_sec_engineer"))
        if user_res.scalar_one_or_none():
            print("[AegisOne AI] Database already contains seed data. Skipping.")
            return

        print("[AegisOne AI] Creating default security user...")
        user = User(
            username="lead_sec_engineer",
            email="engineer@aegisone.lab",
            hashed_password=get_password_hash("AegisSecurity2026!"),
            role="security_engineer"
        )
        db.add(user)
        await db.flush()

        print("[AegisOne AI] Creating College Placement Portal project...")
        project = Project(
            name="College Placement Portal",
            description="Institutional recruitment & campus placement web application with student resume database and company job matching engine.",
            target_url="http://localhost:8001",
            environment="local_lab",
            authorization_status="AUTHORIZED",
            owner_id=user.id
        )
        db.add(project)
        await db.flush()

        print("[AegisOne AI] Creating critical application assets...")
        asset_db = Asset(
            project_id=project.id,
            name="Student Database (Placement & CGPA)",
            asset_type="Database",
            criticality=1.0,
            exposure="EXTERNAL",
            data_sensitivity="HIGH_PII"
        )
        asset_auth = Asset(
            project_id=project.id,
            name="Authentication & Session Service",
            asset_type="Authentication",
            criticality=0.95,
            exposure="EXTERNAL",
            data_sensitivity="CREDENTIALS"
        )
        asset_api = Asset(
            project_id=project.id,
            name="Recruiter REST API",
            asset_type="REST_API",
            criticality=0.75,
            exposure="EXTERNAL",
            data_sensitivity="MEDIUM"
        )
        db.add_all([asset_db, asset_auth, asset_api])
        await db.flush()

        print("[AegisOne AI] Creating baseline security scan record...")
        scan = Scan(
            project_id=project.id,
            scan_type="HYBRID_FULL",
            status="COMPLETED",
            target_url=project.target_url,
            current_stage="DECISION",
            progress_percent=100,
            summary="Initial baseline hybrid scan completed. 3 high-priority vulnerabilities identified.",
            completed_at=datetime.now(timezone.utc)
        )
        db.add(scan)
        await db.flush()

        print("[AegisOne AI] Creating security findings & evidence...")
        # Finding 1: SQL Injection
        f_sqli = Finding(
            scan_id=scan.id,
            asset_id=asset_db.id,
            title="SQL Injection in Student Search Endpoint",
            description="The '/api/students/search' endpoint concatenates the user-supplied 'department' query parameter directly into SQL queries without parameterized binding.",
            technical_severity=9.1,
            contextual_risk_score=87.0,
            risk_level="CRITICAL",
            cwe_id="CWE-89",
            owasp_category="A03:2021-Injection",
            affected_endpoint="/api/students/search",
            affected_parameter="department",
            status="OPEN"
        )
        db.add(f_sqli)
        await db.flush()

        ev_sqli = Evidence(
            finding_id=f_sqli.id,
            tool_name="OWASP ZAP Fuzzer",
            raw_payload="department=' OR 1=1 -- &limit=100",
            request_dump="GET /api/students/search?department=%27+OR+1%3D1+-- HTTP/1.1\nHost: localhost:8001",
            response_dump="HTTP/1.1 200 OK\n[{\"id\": 1, \"name\": \"Alex Mercer\", \"cgpa\": 3.9}, ...]",
            confidence=0.98,
            evidence_hash="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        )
        db.add(ev_sqli)

        # Finding 2: Stored XSS
        f_xss = Finding(
            scan_id=scan.id,
            asset_id=asset_api.id,
            title="Stored XSS in Student Bio Presentation",
            description="User-supplied HTML bio field is displayed to recruiters without context-aware output escaping.",
            technical_severity=7.4,
            contextual_risk_score=68.0,
            risk_level="VERY_HIGH",
            cwe_id="CWE-79",
            owasp_category="A03:2021-Injection (XSS)",
            affected_endpoint="/profile/update",
            affected_parameter="bio",
            status="IN_REMEDIATION"
        )
        db.add(f_xss)
        await db.flush()

        ev_xss = Evidence(
            finding_id=f_xss.id,
            tool_name="Semgrep AST Analyzer",
            raw_payload="<script>alert(document.domain)</script>",
            confidence=0.95
        )
        db.add(ev_xss)

        # Finding 3: Hardcoded Admin Password
        f_pass = Finding(
            scan_id=scan.id,
            asset_id=asset_auth.id,
            title="Hardcoded Administrative Secret",
            description="Administrative fallback password 'admin123' hardcoded in application configuration file.",
            technical_severity=8.2,
            contextual_risk_score=84.0,
            risk_level="CRITICAL",
            cwe_id="CWE-798",
            owasp_category="A07:2021-Identification & Auth Failures",
            affected_endpoint="/auth/login",
            affected_parameter="password",
            status="VALIDATED"
        )
        db.add(f_pass)
        await db.flush()

        ev_pass = Evidence(
            finding_id=f_pass.id,
            tool_name="Semgrep Secret Scanner",
            raw_payload="DEFAULT_ADMIN_PASS = 'admin123'",
            confidence=1.0
        )
        db.add(ev_pass)

        # Seed 1 Validated Remediation & 1 Proposal
        rem_pass = Remediation(
            finding_id=f_pass.id,
            original_code="DEFAULT_ADMIN_PASS = 'admin123'",
            proposed_code="ADMIN_HASH = os.getenv('ADMIN_PASSWORD_HASH')",
            diff="--- hardcoded\n+++ env_hash",
            status="VALIDATED",
            ai_model="AegisOne GraphRAG Engine",
            explanation="Extracted secret into environment variable and enforced PBKDF2 verification.",
            business_impact="Eliminated static administrative credential compromise."
        )
        db.add(rem_pass)
        await db.flush()

        vrun_pass = ValidationRun(
            remediation_id=rem_pass.id,
            sandbox_id="box-seed-001",
            status="PASSED",
            syntax_check="PASS",
            regression_tests="PASS",
            ast_verification="PASS",
            security_rescan="PASS",
            test_output="All 18 regression tests passed. 0 new issues.",
            rollback_executed=False,
            completed_at=datetime.now(timezone.utc)
        )
        db.add(vrun_pass)

        # Audit logs
        log1 = AuditLog(
            event_type="APPLICATION_INITIALIZED",
            actor="system",
            project_id=project.id,
            description="AegisOne AI security platform initialized with College Placement Portal project.",
            severity="INFO"
        )
        log2 = AuditLog(
            event_type="REMEDIATION_VALIDATED",
            actor="system",
            project_id=project.id,
            resource_id=rem_pass.id,
            resource_type="Remediation",
            description="Remediation for CWE-798 successfully validated in sandbox box-seed-001.",
            severity="INFO"
        )
        db.add_all([log1, log2])
        await db.commit()
        print("[AegisOne AI] Database seeded successfully!")

if __name__ == "__main__":
    asyncio.run(seed_database())
