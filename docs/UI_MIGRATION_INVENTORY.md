# AegisOne AI — 20-Page UI Migration Inventory & Source Map
**Design System**: Aegis Sentinel Dark (`#08080B`, `#12131A`, `#191A22`, `#F20D32`, `#55C7E8`, `#45D49A`, `#FFB84D`)  
**Stitch Source Directory**: `D:\AegisOne-AI\stitch_aegisone_ai_landing_page\stitch_aegisone_ai_landing_page`  
**Target React Application Root**: `D:\AegisOne-AI\frontend\src`

---

## 1. Canonical 20-Page Mapping Matrix

| No. | Page Title | Target Route | Stitch Source Folder | Target Component | Status |
|:---:|:---|:---|:---|:---|:---:|
| **01** | **Cinematic Landing Page** | `/` | `aegisone_ai_cinematic_research_landing_page` | `pages/LandingPage.tsx` | Migrated / Integrated |
| **02** | **Security Command Center** | `/console` | `aegisone_ai_interactive_security_command_center` | `pages/DashboardPage.tsx` | Migrated / Integrated |
| **03** | **Vulnerability Findings Explorer** | `/console/findings` | `aegisone_ai_vulnerability_findings_explorer` | `pages/FindingsPage.tsx` | Migrated / Integrated |
| **04** | **Interactive Security Knowledge Graph** | `/console/knowledge-graph` | `aegisone_ai_interactive_security_knowledge_graph` | `pages/KnowledgeGraphPage.tsx` | Migrated / Integrated |
| **05** | **AI Security Analyst Workspace** | `/console/ai-analyst` | `aegisone_ai_ai_security_analyst_workspace` | `pages/AiAnalystPage.tsx` | Migrated / Integrated |
| **06** | **Source Code Remediation Workspace** | `/console/remediation` | `aegisone_ai_source_code_remediation_workspace` | `pages/RemediationPage.tsx` | Migrated / Integrated |
| **07** | **Sandbox Validation & Rollback Center** | `/console/sandbox` | `aegisone_ai_sandbox_validation_rollback_center` | `pages/SandboxPage.tsx` | Migrated / Integrated |
| **08** | **Security Posture & Research Evaluation** | `/console/posture` | `aegisone_ai_before_after_security_posture_research_evaluation` | `pages/ComparisonPage.tsx` | Migrated / Integrated |
| **09** | **Security Reports & Audit Evidence Center** | `/console/reports` | `aegisone_ai_security_reports_audit_evidence_center` | `pages/ReportsPage.tsx` | Migrated / Integrated |
| **10** | **Application Inventory & Attack Surface** | `/console/inventory` | `aegisone_ai_application_inventory_attack_surface` | `pages/InventoryPage.tsx` | Migrated / Integrated |
| **11** | **Scan Configuration & Authorized Assessment** | `/console/scans/configure` | `aegisone_ai_scan_configuration_authorized_assessment` | `pages/ScanConfigPage.tsx` | Migrated / Integrated |
| **12** | **Live Scan Execution & Findings Stream** | `/console/scans/live` | `aegisone_ai_live_scan_execution_findings_stream` | `pages/ScanTimelinePage.tsx` | Migrated / Integrated |
| **13** | **Finding Detail & Evidence Verification** | `/console/findings/:findingId` | `aegisone_ai_finding_detail_evidence_verification` | `pages/FindingDetailPage.tsx` | Migrated / Integrated |
| **14** | **Security Policies & Compliance Mapping** | `/console/policies` | `aegisone_ai_security_policies_compliance_mapping` | `pages/PoliciesPage.tsx` | Migrated / Integrated |
| **15** | **Threat Intelligence & Security Feed** | `/console/threat-intelligence` | `aegisone_ai_threat_intelligence_security_knowledge_feed` | `pages/ThreatIntelPage.tsx` | Migrated / Integrated |
| **16** | **User, Roles & Access Administration** | `/console/admin/access` | `aegisone_ai_user_roles_access_control_administration` | `pages/AccessControlPage.tsx` | Migrated / Integrated |
| **17** | **Integration Hub & System Health** | `/console/admin/integrations` | `aegisone_ai_integration_hub_system_health` | `pages/IntegrationsPage.tsx` | Migrated / Integrated |
| **18** | **Global Settings & Security Configuration** | `/console/admin/settings` | `aegisone_ai_global_settings_security_configuration` | `pages/SettingsPage.tsx` | Migrated / Integrated |
| **19** | **Research Experiments & Benchmark Lab** | `/console/research` | `aegisone_ai_research_experiments_benchmark_lab` | `pages/ResearchLabPage.tsx` | Migrated / Integrated |
| **20** | **Analyst Profile & Personal Activity** | `/console/account` | `aegisone_ai_analyst_profile_personal_activity` | `pages/AccountPage.tsx` | Migrated / Integrated |

### Backward Compatibility / Specialized Labs Routes
- `/console/pcap`: Network Packet Dissection Lab (`pages/PcapPage.tsx`)
- `/console/email-lab`: SPF / DKIM / DMARC Security Lab (`pages/EmailPage.tsx`)
- `/console/crypto-lab`: Toy Cryptographic Demonstration Lab (`pages/CryptoLabPage.tsx`)
- `/console/audit`: Cryptographic SHA-256 Audit Ledger (`pages/AuditPage.tsx`)
- `/console/scans`: Automatically links to `/console/scans/live`

---

## 2. Shared Assets & Design Tokens

- **Hero Graphic**: `frontend/public/assets/sentinel_hero.png` (migrated from `cinematic_3d_render_of_an_advanced_defensive_ai_security_core_sentinel/screen.png`)
- **Cyber Core Graphic**: `frontend/public/assets/cyber_core.png` (migrated from `0ba08c12_34c9_41a2_8479_0bdeb3664117.jpg/screen.png`)
- **Design Tokens**: Defined in `frontend/src/index.css` under `:root` with Aegis Sentinel Dark palette.
- **Typography**: Space Grotesk (Headings), Inter (Body & UI), JetBrains Mono (Technical telemetry).
- **Icons**: Material Symbols Outlined + Lucide React.
