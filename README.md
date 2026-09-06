# AegisOne AI 🛡️
### An AI Copilot for Secure Web Application Development using Explainable Risk Analysis, Security Knowledge Graph, and Sandbox Validation

[![Security Decision Workflow](https://img.shields.io/badge/Workflow-Closed--Loop%20Verification-blue.svg)](#)
[![Defense in Depth](https://img.shields.io/badge/Security-Defensive%20Scope%20Guard-green.svg)](#)
[![Knowledge Graph](https://img.shields.io/badge/Ontology-Neo4j%20%2B%20NetworkX-purple.svg)](#)
[![Validation](https://img.shields.io/badge/Sandbox-Automated%20Rollback-orange.svg)](#)

---

## 1. Project Purpose & Core Contribution

Modern security tools generate thousands of fragmented alerts, while generic generative AI models hallucinate insecure fixes or introduce new zero-day vulnerabilities when trusted blindly.

**AegisOne AI** is a defensive cybersecurity research prototype and developer security copilot that solves this challenge through a closed-loop, verifiable decision pipeline:

```
DETECT
  ↓
UNDERSTAND
  ↓
CONTEXTUALIZE
  ↓
PRIORITIZE
  ↓
EXPLAIN
  ↓
RECOMMEND
  ↓
SANDBOX
  ↓
VALIDATE
  ↓
RE-SCAN
  ↓
ACCEPT / REJECT & ROLLBACK
```

### Key Research Contributions:
1. **Evidence-Grounded AI Reasoning**: Strict separation between *Confirmed Tool Evidence*, *AI Contextual Interpretation*, and *Actionable Recommendations*.
2. **Security Knowledge Graph**: Graph-derived ontological traversals linking Vulnerability ↔ CWE ↔ OWASP ↔ Attack Technique ↔ Asset ↔ Mitigation ↔ Security Control.
3. **Context-Aware Risk Engine**: Transparent multi-factor risk quantification replacing crude CVSS scores.
4. **Isolated Sandbox Validation & Automated Rollback**: Every AI patch is deployed into an isolated sandbox, evaluated with regression test suites, static analysis, and re-scanned. Unsafe or broken fixes are automatically rejected and rolled back.

---

## 2. Platform Architecture

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS, React Flow (Knowledge Graph), Monaco Editor (Code Diff), Framer Motion, Lucide React, Recharts.
- **Backend**: Python 3.14, FastAPI, Pydantic v2, SQLAlchemy 2.0 Async, aiosqlite / PostgreSQL.
- **Knowledge Graph**: Neo4j Community Edition with transparent NetworkX in-memory fallback.
- **Security Engine**: OWASP ZAP crawler/fuzzer, Semgrep/AST pattern matcher, Scope Guard boundary enforcement.
- **Sandbox Engine**: Process-isolated test runner, AST patch validator, regression test suite, rollback controller.
- **Academic Labs**: Cryptography Lab (CO1/CO3), PCAP Network Analyzer (CO2/CO4), Phishing Analyzer (CO5/CO6), Vulnerable College Placement Portal.

---

## 3. Quick Start (Local Development)

### Prerequisites:
- Python 3.11+ (Python 3.14 verified)
- Node.js 20+ (Node v24 verified)

### 1. Backend Setup:
```powershell
cd D:\AegisOne-AI
.\venv\Scripts\Activate.ps1
uvicorn backend.app.main:app --reload --port 8000
```

### 2. Frontend Setup:
```powershell
cd D:\AegisOne-AI\frontend
npm run dev
```

### 3. Vulnerable Demonstration Lab:
```powershell
cd D:\AegisOne-AI
.\venv\Scripts\python.exe vulnerable-lab\app.py
```

Access the Web Console at: `http://localhost:5173`
FastAPI OpenAPI Documentation at: `http://localhost:8000/docs`
Vulnerable Lab at: `http://localhost:8001`
