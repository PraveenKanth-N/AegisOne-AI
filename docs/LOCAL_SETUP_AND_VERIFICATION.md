# AegisOne AI — Local Setup and Verification Guide

This guide provides step-by-step instructions to run, test, and demonstrate AegisOne AI on Windows.

---

## 1. Prerequisites

- **Python 3.11+** (virtual environment located at `D:\AegisOne-AI\venv`)
- **Node.js 18+ & npm** (installed on host)
- **PowerShell 5.1+ or PowerShell 7**
- **Docker Desktop** (optional for real containerized sandbox validation; in-process honest simulation executes seamlessly if Docker is inactive)

---

## 2. Quickstart (One-Click Launch)

To start all 3 services simultaneously (Backend, Frontend, and Vulnerable College Placement Portal):

```powershell
cd D:\AegisOne-AI
powershell -ExecutionPolicy Bypass -File scripts\start_all.ps1
```

Once started:
- **Public Landing Page**: [http://localhost:5173](http://localhost:5173)
- **Security Operations Console**: [http://localhost:5173/console](http://localhost:5173/console)
- **FastAPI Interactive Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Vulnerable Practice Lab**: [http://localhost:8001](http://localhost:8001)

---

## 3. Manual Step-by-Step Launch (Separate Consoles)

If you prefer starting each service in its own terminal window for detailed logging:

### Terminal 1: Vulnerable College Placement Portal (Port 8001)
```powershell
cd D:\AegisOne-AI
$env:PYTHONPATH="."
.\venv\Scripts\python.exe vulnerable-lab\app.py
```

### Terminal 2: AegisOne AI Backend Defense Kernel (Port 8000)
```powershell
cd D:\AegisOne-AI
$env:PYTHONPATH="."
.\venv\Scripts\python.exe -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```

### Terminal 3: React / Vite Tactical Frontend (Port 5173)
```powershell
cd D:\AegisOne-AI\frontend
npm run dev
```

---

## 4. Running the Verification Test Suite

### 1. Backend Pytest Suite (20 Tests)
```powershell
cd D:\AegisOne-AI
$env:PYTHONPATH="."
.\venv\Scripts\pytest.exe backend/tests/ -v
```
*Expected: 20 passed (100% pass rate).*

### 2. Frontend Production TypeScript & Vite Compilation
```powershell
cd D:\AegisOne-AI\frontend
npm run build
```
*Expected: Clean compilation in ~1.1s.*

### 3. Live End-to-End Acceptance Test
With all 3 services running:
```powershell
cd D:\AegisOne-AI
$env:PYTHONPATH="."
.\venv\Scripts\python.exe scripts\live_acceptance_test.py
```
*Expected: 14/14 checks passed.*

---

## 5. Exploring the 20 Canonical Pages

1. **Cinematic Landing Page** (`/`):
   - Hero graphics, architecture highlights, research motivations, and interactive console launch button.
2. **Command Center** (`/console`):
   - Executive telemetry, real-time posture index, finding breakdown, and recent activity log.
3. **Application Inventory** (`/console/inventory`):
   - Asset table with criticality metrics, exposure status, and data sensitivity.
4. **Configure Assessment** (`/console/scans/configure`):
   - Scope Guard target selector, engine configuration (SAST, DAST, KG), and explicit authorization checklist.
5. **Scan Execution Stream** (`/console/scans/live`):
   - Live multi-stage scan progress bar, stage logs, and streaming findings.
6. **Vulnerability Explorer** (`/console/findings`):
   - Filterable catalog of findings with risk levels, CWE tags, and one-click actions.
7. **Finding Detail & Evidence** (`/console/findings/:findingId`):
   - Code AST taint sink trace, line highlighting, and Knowledge Graph corroboration.
8. **Interactive Security Knowledge Graph** (`/console/knowledge-graph`):
   - Force-directed interactive network visualization mapping code nodes to attack paths.
9. **AI Security Analyst Workspace** (`/console/ai-analyst`):
   - Exploitability assessment, root cause synthesis, and conversational security inquiry terminal.
10. **Remediation Lab** (`/console/remediation`):
    - Side-by-side AST-grounded diff viewer with automated patch generation.
11. **Sandbox Validation Center** (`/console/sandbox`):
    - Docker containerized syntax, unit, and regression testing with rollback capability.
12. **Before / After Comparison** (`/console/posture`):
    - Risk delta evaluation demonstrating score reduction from pre-remediation to post-remediation.
13. **Security Policies & Compliance** (`/console/policies`):
    - OWASP ASVS v4.0.3, CWE Top 25, and PCI-DSS v4.0 control mappings.
14. **Threat Intelligence Feed** (`/console/threat-intelligence`):
    - CISA KEV matching, NVD vulnerability cross-referencing, and FIRST EPSS exploit probability scores.
15. **Research Experiments Lab** (`/console/research`):
    - Quantitative benchmarking tables (Precision, Recall, F1) across 4 research questions.
16. **Security Reports & Audit Evidence** (`/console/reports`):
    - Executive and technical report generator with downloadable JSON exports.
17. **User Roles & Access Control** (`/console/admin/access`):
    - Granular RBAC table, permission matrix, and operator invitation dialog.
18. **Integration Hub & System Health** (`/console/admin/integrations`):
    - Core defense mesh health probes, latency counters, and test connection buttons.
19. **Global Platform Settings** (`/console/admin/settings`):
    - Scope Guard strict host enforcement toggles and security timeout controls.
20. **Analyst Workspace Profile** (`/console/account`):
    - Ed25519 cryptographic key signature, operator clearance level, and personal activity log.
