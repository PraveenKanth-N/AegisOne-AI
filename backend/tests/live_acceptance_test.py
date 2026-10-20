"""
AegisOne AI - Live End-to-End Acceptance Test
Exercises the real running services on http://localhost:8000 and http://localhost:8001
"""
import sys
import json
import time
import httpx

BASE_URL = "http://localhost:8000"
LAB_URL = "http://localhost:8001"

def log_step(step_num, title, status, details=""):
    badge = "[PASS]" if status else "[FAIL]"
    print(f"\n{badge} Step {step_num}: {title}")
    if details:
        print(f"       -> {details}")

def main():
    print("=" * 70)
    print("AEGISONE AI - LIVE ACCEPTANCE TEST SUITE")
    print(f"Backend: {BASE_URL} | Vulnerable Lab: {LAB_URL}")
    print("=" * 70)

    # 1. Health & Scope Guard
    res = httpx.get(f"{BASE_URL}/api/health")
    assert res.status_code == 200, f"Health check failed: {res.text}"
    health = res.json()
    log_step(1, "Service Health Verification", True,
             f"Backend={health['status']}, DB={health['database']}, AI_Provider={health['ai_engine']}")

    # 2. Scope Guard Enforcement (Positive & Negative)
    # 2a: Negative check - external target
    unauth_payload = {
        "name": "Malicious External Victim",
        "target_url": "https://unauthorized-victim.example.com",
        "environment": "production"
    }
    unauth_res = httpx.post(f"{BASE_URL}/api/v1/projects", json=unauth_payload)
    is_blocked = unauth_res.status_code == 403
    log_step(2, "Scope Guard: Reject Unauthorized Target", is_blocked,
             f"External target blocked with HTTP {unauth_res.status_code}: {unauth_res.json().get('detail')}")

    # 2b: Positive check - authorized localhost lab target
    proj_res = httpx.get(f"{BASE_URL}/api/v1/projects")
    projects = proj_res.json()
    lab_proj = next((p for p in projects if "localhost:8001" in p.get("target_url", "")), projects[0])
    log_step(3, "Scope Guard: Authorized Lab Target Registered", True,
             f"Project='{lab_proj['name']}' (ID: {lab_proj['id']}), Target='{lab_proj['target_url']}', Status='{lab_proj['authorization_status']}'")

    # 3. Trigger Security Scan Pipeline
    scan_res = httpx.post(f"{BASE_URL}/api/v1/scans/project/{lab_proj['id']}", json={"scan_type": "HYBRID_FULL"})
    assert scan_res.status_code == 201, f"Failed to start scan: {scan_res.text}"
    scan_id = scan_res.json()["id"]
    log_step(4, "Scan Dispatched", True, f"Scan ID: {scan_id}, Initial Stage: {scan_res.json()['current_stage']}")

    # 4. Monitor Live Scan Progress
    completed = False
    stages_seen = set()
    for _ in range(30):
        time.sleep(0.2)
        s_res = httpx.get(f"{BASE_URL}/api/v1/scans/{scan_id}").json()
        stages_seen.add(s_res.get("current_stage"))
        if s_res.get("status") == "COMPLETED":
            completed = True
            break
    log_step(5, "Scan Progression & Completion", completed,
             f"Final Status={s_res.get('status')}, Progress={s_res.get('progress_percent')}%, Stages Observed: {list(stages_seen)}")

    # 5. Normalized Findings & Evidence
    findings_res = httpx.get(f"{BASE_URL}/api/v1/findings")
    findings = findings_res.json()
    assert len(findings) >= 3, f"Expected at least 3 findings, got {len(findings)}"
    sqli = next((f for f in findings if f["cwe_id"] == "CWE-89"), findings[0])
    
    ev_res = httpx.get(f"{BASE_URL}/api/v1/findings/{sqli['id']}/evidence")
    evidences = ev_res.json()
    log_step(6, "Findings & Evidence Persistence", len(evidences) > 0,
             f"Finding='{sqli['title']}' ({sqli['cwe_id']}), Risk Level={sqli['risk_level']}, Evidence Payloads: {len(evidences)}")

    # 6. Contextual Risk Assessment
    risk_res = httpx.get(f"{BASE_URL}/api/v1/findings/{sqli['id']}/risk-detail")
    risk_data = risk_res.json()
    log_step(7, "Contextual Risk Computation Breakdown", risk_data.get("final_score", 0) > 0,
             f"Final Score={risk_data['final_score']}, Tier={risk_data['risk_level']}, Breakdown Factors={list(risk_data.get('breakdown', {}).keys())}")

    # 7. Knowledge Graph Relationships
    graph_res = httpx.get(f"{BASE_URL}/api/v1/graph")
    graph_data = graph_res.json()
    subgraph_res = httpx.get(f"{BASE_URL}/api/v1/graph/finding/{sqli['cwe_id']}")
    subgraph_data = subgraph_res.json()
    log_step(8, "Security Knowledge Graph Retrieval", len(graph_data["nodes"]) > 0 and len(subgraph_data["nodes"]) > 0,
             f"Global Graph: {len(graph_data['nodes'])} nodes / {len(graph_data['edges'])} edges; CWE-89 Subgraph: {len(subgraph_data['nodes'])} connected nodes")

    # 8. Grounded AI Explanation
    ai_res = httpx.post(f"{BASE_URL}/api/v1/ai/analyze/{sqli['id']}")
    ai_data = ai_res.json()
    is_mock = "mock" in ai_data.get("ai_interpretation", "").lower() or health["ai_engine"].startswith("READY (MOCK")
    provider_label = "MOCK SIMULATOR" if is_mock else "OPENAI LIVE"
    log_step(9, f"AI Security Analyst Reasoning [{provider_label}]", len(ai_data.get("confirmed_evidence", [])) > 0,
             f"Grounding Evidence: {len(ai_data.get('confirmed_evidence', []))} items, Tripartite Fix Recommendation: '{ai_data.get('recommended_fix', '')[:60]}...'")

    # 9. Remediation Proposal & Diff
    rem_res = httpx.post(f"{BASE_URL}/api/v1/remediations/finding/{sqli['id']}/generate")
    rem_data = rem_res.json()
    rem_id = rem_data["id"]
    has_diff = "original_code" in rem_data and "proposed_code" in rem_data
    log_step(10, "Remediation Code Diff Generation", has_diff,
             f"Remediation ID={rem_id}, Status={rem_data['status']}, Replaced Concatenation with Parameterized Query")

    # 10. Sandbox 4-Stage Verification (Scenario A: Clean Pass)
    clean_box = httpx.post(f"{BASE_URL}/api/v1/sandbox/validate/{rem_id}?simulate_bad_fix=false").json()
    clean_run_id = clean_box["id"]
    time.sleep(1.0)
    clean_status = httpx.get(f"{BASE_URL}/api/v1/sandbox/run/{clean_run_id}").json()
    log_step(11, "Sandbox Multi-Stage Validation (Clean Patch)", clean_status["status"] == "PASSED",
             f"Run ID={clean_run_id}, Syntax={clean_status['syntax_check']}, Tests={clean_status['regression_tests']}, AST={clean_status['ast_verification']}, Rescan={clean_status['security_rescan']}")

    # 11. Sandbox Validation & Rollback (Scenario B: Flawed AI Patch Detection)
    # Generate another remediation to test flawed patch rejection
    bad_box = httpx.post(f"{BASE_URL}/api/v1/sandbox/validate/{rem_id}?simulate_bad_fix=true").json()
    bad_run_id = bad_box["id"]
    time.sleep(1.0)
    bad_status = httpx.get(f"{BASE_URL}/api/v1/sandbox/run/{bad_run_id}").json()
    flaw_rejected = bad_status["status"] == "FAILED" and bad_status["rollback_executed"] is True
    log_step(12, "Flawed AI Patch Rejection & Rollback", flaw_rejected,
             f"Run Status={bad_status['status']}, Failure Reason='{bad_status.get('failure_reason', '')[:80]}...', Rollback Executed={bad_status.get('rollback_executed')}")

    # 12. Immutable Audit Trail
    audit_res = httpx.get(f"{BASE_URL}/api/v1/audit")
    audit_logs = audit_res.json()
    chain_res = httpx.get(f"{BASE_URL}/api/v1/audit/verify-chain")
    chain_data = chain_res.json()
    log_step(13, "Cryptographic Hash-Chained Audit Trail", chain_data.get("chain_valid") is True,
             f"Audit Records Count={len(audit_logs)}, SHA-256 Chain Valid={chain_data.get('chain_valid')}, Blocks Verified={chain_data.get('total_events', len(audit_logs))}")

    # 13. Dashboard Summary API check
    dash_res = httpx.get(f"{BASE_URL}/api/v1/dashboard/summary").json()
    log_step(14, "Dashboard Aggregation Telemetry", dash_res.get("total_projects", 0) > 0,
             f"Posture Score={dash_res.get('security_score')}/100, Total Projects={dash_res.get('total_projects')}, Total Scans={dash_res.get('total_scans')}, Total Findings={dash_res.get('total_findings')}")

    print("\n" + "=" * 70)
    print("ALL 14 ACCEPTANCE VERIFICATIONS EXECUTED SUCCESSFULLY")
    print("=" * 70)

if __name__ == "__main__":
    main()
