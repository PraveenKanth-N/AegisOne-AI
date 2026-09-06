# AegisOne AI — Interactive Demonstration Guide

## Quick Access Endpoints
- **Web Command Center**: `http://localhost:5173`
- **FastAPI OpenAPI Interactive Docs**: `http://localhost:8000/docs`
- **College Placement Portal (Target Lab)**: `http://localhost:8001`

## Demonstration Scenarios
1. **Scenario A (Vulnerability Detection)**: Launch a scan on the College Placement Portal and watch the 10-stage pipeline detect SQL Injection (CWE-89), Stored XSS (CWE-79), and Hardcoded Password (CWE-798).
2. **Scenario B (Knowledge Graph Traversal)**: Open `/knowledge-graph` and inspect why SQL Injection connects to Parameterized Queries and NIST SI-10 controls.
3. **Scenario C (Sandbox Verification)**: Dispatch the secure fix to the sandbox, watch 18 tests pass, and observe status change to `VALIDATED`.
4. **Scenario D (Bad AI Fix Rejection)**: Trigger the bad AI fix demo on `/sandbox`, watch the system detect broken authentication and secondary leakage, and observe automated rollback execution.
5. **Scenario E (Academic Modules)**: Test the PCAP Analyzer on `/pcap`, Email Phishing Heuristics on `/email-lab`, and RSA / Diffie-Hellman on `/crypto-lab`.
