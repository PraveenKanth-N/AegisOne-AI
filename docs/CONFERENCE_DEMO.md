# AegisOne AI — Conference & Viva Live Demonstration Script
### 5-Minute Technical Demonstration Walkthrough

## Step 1: Open Dashboard & Show Scope Guard (0:00 - 0:45)
- Open browser at `http://localhost:5173`.
- Point to the **Scope Guard Banner**: *"Notice the green banner: 'AUTHORIZED LOCAL TARGET — SAFE TO SCAN'. AegisOne enforces a non-negotiable defensive boundary. Only authorized localhost and isolated lab environments are permitted."*
- Highlight the **Command Center KPI Cards**: Security Score (87/100), Critical findings (3), Validated Fixes (1).

## Step 2: Trigger Live Security Scan & Hero Pipeline (0:45 - 1:45)
- Click **Launch Hybrid Scan** on the top bar.
- Watch the **Hero Security Decision Pipeline** animate through its 10 stages:
  `DETECT -> CONTEXT -> GRAPH -> RISK -> EXPLAIN -> FIX -> SANDBOX -> VALIDATE -> RESCAN -> DECISION`.
- Show how each stage transitions dynamically from QUEUED to RUNNING to DONE.

## Step 3: Inspect Findings & Contextual Risk (1:45 - 2:30)
- Navigate to **Findings Explorer** (`/findings`).
- Select **SQL Injection in Student Search Endpoint** (Score 87/100).
- Open the card and highlight the **Tripartite Separation**:
  1. *Layer 1 (Confirmed Evidence)*: Raw payload `' OR 1=1 --` with 98% confidence.
  2. *Layer 2 (Contextual Risk)*: Explain why score is 87/100 (Asset Criticality 1.0 on Student Database with HIGH_PII data sensitivity).
  3. *Layer 3 (AI Analyst)*: Click *Request GraphRAG Analysis* to view explainable reasoning.

## Step 4: Explore the Knowledge Graph (2:30 - 3:15)
- Click **Trace in Knowledge Graph** (`/knowledge-graph`).
- Pan and zoom through the React Flow graph.
- Click `SQL Injection` -> observe connected `CWE-89` -> `OWASP-A03` -> `Student Database` -> `Parameterized Queries` -> `NIST SI-10`.
- Point out: *"The AI did not invent this relationship. It is traversing a curated, deterministic security ontology."*

## Step 5: Source Code Diff & Sandbox Validation (3:15 - 4:15)
- Navigate to **Remediation Diff** (`/remediation`).
- Inspect the side-by-side Monaco Diff Viewer showing vulnerable string interpolation vs. parameterized query.
- Click **Dispatch Patch to Isolated Sandbox**.
- On the **Sandbox Center** (`/sandbox`), watch the 4 stages verify: Syntax PASS -> Regression PASS -> AST PASS -> Re-scan PASS. Result: **VALIDATED SAFE**.

## Step 6: The "WOW" Moment — Bad AI Fix Rejection & Rollback (4:15 - 5:00)
- Click **Demonstrate Bad AI Fix Rejection & Rollback**.
- Watch the Sandbox execute: Stage 2 (Regression Tests) detects an authentication regression and data leakage flaw.
- The platform flashes: **REMEDIATION REJECTED — SECURITY VALIDATION FAILED**.
- Show the automated rollback execution restoring the pristine baseline code and recording the incident in the **Audit Trail** (`/audit`).
- Conclude: *"AegisOne proves that generative AI can be securely harnessed for DevSecOps through closed-loop sandbox verification."*
