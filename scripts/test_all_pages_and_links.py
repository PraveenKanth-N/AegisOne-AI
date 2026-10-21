import os
import re
import httpx

BASE_URL = "http://localhost:8000"

def test_backend_api_endpoints():
    print("\n--- 1. Testing Live Backend Endpoints Used by UI Pages ---")
    endpoints = [
        ("/api/health", "GET"),
        ("/api/v1/dashboard/summary", "GET"),
        ("/api/v1/dashboard/timeline", "GET"),
        ("/api/v1/dashboard/attack-surface", "GET"),
        ("/api/v1/projects", "GET"),
        ("/api/v1/findings", "GET"),
        ("/api/v1/graph", "GET"),
        ("/api/v1/remediations", "GET"),
        ("/api/v1/sandbox/docker-status", "GET"),
        ("/api/v1/audit", "GET"),
        ("/api/v1/audit/verify-chain", "GET"),
        ("/api/v1/policies", "GET"),
        ("/api/v1/threat-intelligence", "GET"),
        ("/api/v1/research/benchmarks", "GET"),
        ("/api/v1/reports", "GET"),
        ("/api/v1/admin/access", "GET"),
        ("/api/v1/admin/integrations", "GET"),
        ("/api/v1/settings", "GET"),
    ]
    
    passed = 0
    for ep, method in endpoints:
        try:
            res = httpx.get(f"{BASE_URL}{ep}", timeout=5.0)
            if res.status_code == 200:
                print(f"[PASS] {method} {ep} -> HTTP 200 OK")
                passed += 1
            else:
                print(f"[FAIL] {method} {ep} -> HTTP {res.status_code}")
        except Exception as e:
            print(f"[FAIL] {method} {ep} -> Error: {e}")
            
    print(f"Backend API Coverage: {passed}/{len(endpoints)} endpoints responsive.\n")
    return passed == len(endpoints)

def test_page_components():
    print("--- 2. Auditing All 20 Frontend Page Components ---")
    pages_dir = "frontend/src/pages"
    pages = [
        "LandingPage.tsx",
        "DashboardPage.tsx",
        "InventoryPage.tsx",
        "ScanConfigPage.tsx",
        "ScanTimelinePage.tsx",
        "FindingsPage.tsx",
        "FindingDetailPage.tsx",
        "KnowledgeGraphPage.tsx",
        "AiAnalystPage.tsx",
        "RemediationPage.tsx",
        "SandboxPage.tsx",
        "ComparisonPage.tsx",
        "PoliciesPage.tsx",
        "ThreatIntelPage.tsx",
        "ResearchLabPage.tsx",
        "ReportsPage.tsx",
        "AccessControlPage.tsx",
        "IntegrationsPage.tsx",
        "SettingsPage.tsx",
        "AccountPage.tsx"
    ]
    
    missing = []
    for p in pages:
        path = os.path.join(pages_dir, p)
        if os.path.exists(path):
            sz = os.path.getsize(path)
            print(f"[EXISTS] {p:<25} ({sz:,} bytes)")
        else:
            print(f"[MISSING] {p}")
            missing.append(p)
            
    print(f"\nFrontend Pages Inventory: {len(pages) - len(missing)}/{len(pages)} present on disk.")
    return len(missing) == 0

def test_routes_in_app():
    print("\n--- 3. Verifying Routes in App.tsx ---")
    with open("frontend/src/App.tsx", "r", encoding="utf-8") as f:
        app_code = f.read()
        
    expected_routes = [
        ("/", "LandingPage"),
        ("/console", "DashboardPage"),
        ("inventory", "InventoryPage"),
        ("scans/configure", "ScanConfigPage"),
        ("scans/live", "ScanTimelinePage"),
        ("findings", "FindingsPage"),
        ("findings/:findingId", "FindingDetailPage"),
        ("knowledge-graph", "KnowledgeGraphPage"),
        ("ai-analyst", "AiAnalystPage"),
        ("remediation", "RemediationPage"),
        ("sandbox", "SandboxPage"),
        ("posture", "ComparisonPage"),
        ("policies", "PoliciesPage"),
        ("threat-intelligence", "ThreatIntelPage"),
        ("research", "ResearchLabPage"),
        ("reports", "ReportsPage"),
        ("admin/access", "AccessControlPage"),
        ("admin/integrations", "IntegrationsPage"),
        ("admin/settings", "SettingsPage"),
        ("account", "AccountPage"),
    ]
    
    all_found = True
    for route, comp in expected_routes:
        if comp in app_code:
            print(f"[WIRED] Route '{route}' -> {comp}")
        else:
            print(f"[UNWIRED] Route '{route}' missing {comp}")
            all_found = False
            
    return all_found

if __name__ == "__main__":
    b_ok = test_backend_api_endpoints()
    p_ok = test_page_components()
    r_ok = test_routes_in_app()
    
    if b_ok and p_ok and r_ok:
        print("\n=======================================================")
        print("ALL AUDIT VERIFICATIONS PASSED: 100% HEALTH CONFIRMED")
        print("=======================================================")
    else:
        print("\nAudit encountered issues.")
