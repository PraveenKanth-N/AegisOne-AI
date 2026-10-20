"""
Comprehensive End-to-End Security Workflow Tests for AegisOne AI
Validates the complete 11-step closed-loop security workflow:
1. Scope verification & project selection
2. Scan execution & background pipeline tracking
3. Finding normalization & evidence persistence
4. Contextual risk engine calculation
5. Knowledge graph 2-hop traversal
6. Explainable AI tripartite analysis (Evidence / Interpretation / Fix)
7. Monaco-style remediation proposal generation
8. Sandbox 4-stage validation (Clean patch pass)
9. Bad AI fix detection (Secondary flaw & regression)
10. Automated rollback execution
11. Immutable audit trail logging
"""
import pytest
import asyncio
from httpx import ASGITransport, AsyncClient
from backend.app.main import app
from backend.app.core.database import init_db
from backend.app.seed import seed_database

@pytest.mark.asyncio
async def test_full_security_decision_workflow():
    # 0. Ensure database initialized and seeded with College Placement Portal
    await init_db()
    await seed_database()
    transport = ASGITransport(app=app)

    async with AsyncClient(transport=transport, base_url="http://test") as client:
        # Step 1: Verify Scope Guard and Target Registration
        proj_resp = await client.get("/api/v1/projects")
        assert proj_resp.status_code == 200
        projects = proj_resp.json()
        assert len(projects) >= 1
        college_portal = next((p for p in projects if "College Placement" in p["name"]), projects[0])
        assert college_portal["authorization_status"] == "AUTHORIZED"
        assert "localhost" in college_portal["target_url"]

        # Scope Guard check: Attempting to register non-whitelisted external domain must be rejected
        unauth_resp = await client.post("/api/v1/projects", json={
            "name": "External Target",
            "target_url": "https://unauthorized-victim-site.com",
            "environment": "production"
        })
        assert unauth_resp.status_code == 403

        # Step 2: Trigger Security Scan Pipeline
        scan_resp = await client.post(f"/api/v1/scans/project/{college_portal['id']}", json={
            "scan_type": "HYBRID_FULL"
        })
        assert scan_resp.status_code == 201
        scan_data = scan_resp.json()
        scan_id = scan_data["id"]
        assert scan_data["status"] == "RUNNING"

        # Wait briefly for background pipeline stages to process
        await asyncio.sleep(3.5)

        # Poll scan status
        scan_check = await client.get(f"/api/v1/scans/{scan_id}")
        assert scan_check.status_code == 200
        assert scan_check.json()["progress_percent"] == 100
        assert scan_check.json()["status"] == "COMPLETED"

        # Step 3: Verify Normalized Findings and Evidence
        findings_resp = await client.get("/api/v1/findings")
        assert findings_resp.status_code == 200
        findings = findings_resp.json()
        assert len(findings) >= 3

        # Locate SQL Injection finding (CWE-89)
        sqli_finding = next((f for f in findings if f["cwe_id"] == "CWE-89"), None)
        assert sqli_finding is not None
        assert sqli_finding["risk_level"] == "CRITICAL"
        assert sqli_finding["affected_endpoint"] == "/api/students/search"

        # Check evidence attached to finding
        ev_resp = await client.get(f"/api/v1/findings/{sqli_finding['id']}/evidence")
        assert ev_resp.status_code == 200
        evidences = ev_resp.json()
        assert len(evidences) >= 1
        assert "1=1" in evidences[0]["raw_payload"]
        assert evidences[0]["confidence"] >= 0.90

        # Step 4: Verify Contextual Risk Engine Breakdown
        risk_resp = await client.get(f"/api/v1/findings/{sqli_finding['id']}/risk-detail")
        assert risk_resp.status_code == 200
        risk_data = risk_resp.json()
        assert risk_data["finding_id"] == sqli_finding["id"]
        assert risk_data["final_score"] >= 80.0
        assert risk_data["risk_level"] == "CRITICAL"
        assert "Asset Criticality" in risk_data["breakdown"]
        assert "Technical Severity" in risk_data["breakdown"]

        # Step 5: Verify Knowledge Graph Ontology & Subgraph Retrieval
        graph_resp = await client.get("/api/v1/graph")
        assert graph_resp.status_code == 200
        graph_data = graph_resp.json()
        assert len(graph_data["nodes"]) >= 10
        assert len(graph_data["edges"]) >= 10

        subgraph_resp = await client.get("/api/v1/graph/finding/CWE-89")
        assert subgraph_resp.status_code == 200
        subgraph = subgraph_resp.json()
        assert any(n["id"] == "CWE-89" for n in subgraph["nodes"])

        # Step 6: Verify AI Security Analyst Tripartite Analysis
        ai_resp = await client.post(f"/api/v1/ai/analyze/{sqli_finding['id']}")
        assert ai_resp.status_code == 200
        ai_data = ai_resp.json()
        # Layer 1: Confirmed Evidence
        assert len(ai_data["confirmed_evidence"]) >= 1
        # Layer 2: Contextual AI Interpretation
        assert len(ai_data["ai_interpretation"]) > 20
        # Layer 3: Actionable Recommendation
        assert "parameter" in ai_data["recommended_fix"].lower()
        assert ai_data["validation_required"] is True

        # Step 7: Generate Reviewable Remediation Code Diff
        rem_resp = await client.post(f"/api/v1/remediations/finding/{sqli_finding['id']}/generate")
        assert rem_resp.status_code == 201
        rem_data = rem_resp.json()
        rem_id = rem_data["id"]
        assert "original_code" in rem_data
        assert "proposed_code" in rem_data
        assert "%s" in rem_data["proposed_code"]
        assert rem_data["status"] == "PROPOSED"

        # Step 8: Sandbox 4-Stage Verification (Scenario A: Clean Fix)
        sandbox_clean = await client.post(f"/api/v1/sandbox/validate/{rem_id}?simulate_bad_fix=false")
        assert sandbox_clean.status_code == 201
        clean_run_id = sandbox_clean.json()["id"]

        # Wait for sandbox async execution
        await asyncio.sleep(2.5)
        clean_status = await client.get(f"/api/v1/sandbox/run/{clean_run_id}")
        assert clean_status.status_code == 200
        c_data = clean_status.json()
        assert c_data["status"] == "PASSED"
        assert c_data["syntax_check"] == "PASS"
        assert c_data["regression_tests"] == "PASS"
        assert c_data["ast_verification"] == "PASS"
        assert c_data["security_rescan"] == "PASS"
        assert c_data["rollback_executed"] is False

        # Step 9 & 10: Sandbox Bad AI Fix Demonstration & Automated Rollback (Scenario B)
        # Generate another remediation to test flawed patch rejection
        rem_bad_resp = await client.post(f"/api/v1/remediations/finding/{sqli_finding['id']}/generate")
        assert rem_bad_resp.status_code == 201
        bad_rem_id = rem_bad_resp.json()["id"]

        sandbox_bad = await client.post(f"/api/v1/sandbox/validate/{bad_rem_id}?simulate_bad_fix=true")
        assert sandbox_bad.status_code == 201
        bad_run_id = sandbox_bad.json()["id"]

        await asyncio.sleep(2.5)
        bad_status = await client.get(f"/api/v1/sandbox/run/{bad_run_id}")
        assert bad_status.status_code == 200
        b_data = bad_status.json()
        assert b_data["status"] == "FAILED"
        assert b_data["regression_tests"] == "FAIL"
        assert b_data["security_rescan"] == "FAIL"
        assert b_data["rollback_executed"] is True
        assert "CRITICAL FAILURE" in b_data["failure_reason"]

        # Step 11: Verify Audit Trail Ledger
        audit_resp = await client.get("/api/v1/audit")
        assert audit_resp.status_code == 200
        audit_logs = audit_resp.json()
        assert len(audit_logs) >= 4
        # Confirm audit event for rejection and rollback
        assert any("REMEDIATION_REJECTED" in log["event_type"] for log in audit_logs)
        assert any("ROLLBACK" in log["description"] or "rollback" in log["description"].lower() for log in audit_logs)
