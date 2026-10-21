# AegisOne AI — UI & Backend Capability Audit

This audit evaluates the functional readiness of the backend for each of the 20 canonical Stitch UI pages.

## Capability Classification Matrix

| Page No. | Page Title | Route | Backend API State | Classification | Evidence & Grounding Details |
|:---:|:---|:---|:---:|:---:|:---|
| **01** | Cinematic Landing Page | `/` | `/api/health`, `/` | **IMPLEMENTED** | Root platform telemetry, pipeline stages list, authorized scope guard status. |
| **02** | Security Command Center | `/console` | `/api/v1/dashboard/summary`, `/api/v1/dashboard/timeline`, `/api/v1/dashboard/attack-surface` | **IMPLEMENTED** | Computes real posture score, severity metrics, and recent scans. |
| **03** | Vulnerability Findings Explorer | `/console/findings` | `/api/v1/findings`, `/api/v1/findings/{id}/risk-detail` | **IMPLEMENTED** | Real findings querying, filtering by severity/CWE, risk factor breakdown. |
| **04** | Interactive Security Knowledge Graph | `/console/knowledge-graph` | `/api/v1/graph`, `/api/v1/graph/finding/{cwe_id}` | **IMPLEMENTED** | Real NetworkX directed graph nodes, edges, subgraphs, mitigations. |
| **05** | AI Security Analyst Workspace | `/console/ai-analyst` | `/api/v1/ai/analyze/{finding_id}` | **IMPLEMENTED** | Tripartite evidence-grounded AI analysis (Confirmed Evidence &rarr; Interpretation &rarr; Fix). |
| **06** | Source Code Remediation Workspace | `/console/remediation` | `/api/v1/remediations`, `/api/v1/remediations/finding/{id}/generate` | **IMPLEMENTED** | Side-by-side colorized code diffs replacing vulnerable code with parameterized queries. |
| **07** | Sandbox Validation & Rollback Center | `/console/sandbox` | `/api/v1/sandbox/validate/{id}`, `/api/v1/sandbox/run/{id}`, `/api/v1/sandbox/docker-status` | **IMPLEMENTED** | 4-stage validation (Syntax, Regression, AST, Security Rescan) with Docker & In-Process fallback. |
| **08** | Security Posture & Research Evaluation | `/console/posture` | `/api/v1/dashboard/summary`, `/api/v1/findings` | **IMPLEMENTED** | Before vs. after posture delta, MTTR telemetry, resolved vs. remaining issues. |
| **09** | Security Reports & Audit Evidence Center | `/console/reports` | `/api/v1/reports`, `/api/v1/audit` | **IMPLEMENTED** | Formal report generation, compliance summaries, SHA-256 audit ledger. |
| **10** | Application Inventory & Attack Surface | `/console/inventory` | `/api/v1/projects`, `/api/v1/projects/{id}` | **IMPLEMENTED** | Registered assets, business criticality, exposure, data sensitivity. |
| **11** | Scan Configuration & Assessment | `/console/scans/configure` | `/api/v1/projects`, `/api/v1/scans/project/{id}` | **IMPLEMENTED** | Target scope validation, scan type selection (`HYBRID_FULL`, `SAST_AST`, `DAST_FUZZ`). |
| **12** | Live Scan Execution & Findings Stream | `/console/scans/live` | `/api/v1/scans/{id}`, `/api/v1/scans/{id}/findings` | **IMPLEMENTED** | Asynchronous 10-stage pipeline execution, live percentage polling. |
| **13** | Finding Detail & Evidence Verification | `/console/findings/:findingId` | `/api/v1/findings/{id}`, `/api/v1/findings/{id}/evidence` | **IMPLEMENTED** | Raw exploit payloads, confidence scores, CVSS technical severity. |
| **14** | Security Policies & Compliance Mapping | `/console/policies` | `/api/v1/policies` | **IMPLEMENTED** | Maps active findings to OWASP Top 10, CWE Top 25, NIST SP 800-53, PCI-DSS v4.0. |
| **15** | Threat Intelligence & Security Feed | `/console/threat-intelligence` | `/api/v1/threat-intelligence` | **IMPLEMENTED** | Curated CVE & KEV advisories matched against local asset technologies. |
| **16** | User, Roles & Access Administration | `/console/admin/access` | `/api/v1/auth/users`, `/api/v1/auth/roles` | **IMPLEMENTED** | Role-Based Access Control (RBAC), Security Lead / Developer / Auditor roles. |
| **17** | Integration Hub & System Health | `/console/admin/integrations` | `/api/v1/admin/integrations`, `/api/v1/sandbox/docker-status` | **IMPLEMENTED** | Real-time dependency health probes (Docker, SQLite, NetworkX, AST, AI Engine). |
| **18** | Global Settings & Security Configuration | `/console/admin/settings` | `/api/v1/settings` | **IMPLEMENTED** | Scope Guard whitelist editor, AI provider switch, scan thresholds. |
| **19** | Research Experiments & Benchmark Lab | `/console/research` | `/api/v1/research/benchmarks` | **IMPLEMENTED** | Academic evaluation: Precision, Recall, F1, Detection Latency, Remediation Soundness. |
| **20** | Analyst Profile & Personal Activity | `/console/account` | `/api/v1/auth/me`, `/api/v1/audit` | **IMPLEMENTED** | Current user profile, personal activity stream, MFA status, API tokens. |
