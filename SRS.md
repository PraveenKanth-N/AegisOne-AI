# Software Requirements Specification (SRS) for AegisOne AI
### Standard: IEEE 830-1998 Aligned Research Prototype

## 1. Introduction
### 1.1 Purpose
AegisOne AI is a defensive cybersecurity research platform designed to bridge the gap between static/dynamic security tool outputs and automated AI-driven remediation. It addresses the critical risk of AI hallucinations in security-critical code by wrapping LLM recommendations in an automated, sandbox-validated verification loop.

### 1.2 Scope
- Automated ingestion and normalization of DAST (OWASP ZAP) and SAST (Semgrep/AST) evidence.
- Ontological graph reasoning for context-aware risk prioritization.
- Deterministic, evidence-grounded AI explanation and patch generation.
- Isolated sandbox execution, functional regression testing, AST verification, and automated rollback upon validation failure.
- Defensive network packet analysis, email analysis, and educational cryptography modules.
- Strict operational boundary restricting scanning exclusively to authorized localhost and isolated lab environments.

## 2. Overall Description
### 2.1 User Characteristics
- **Security Analysts & DevSecOps Engineers**: Require prioritized, explainable vulnerabilities with verifiable evidence.
- **Application Developers**: Require clear remediation guidance and regression-tested code diffs.
- **Academic Researchers & Viva Examiners**: Require reproducible experimental metrics, architectural transparency, and defensible security workflows.

### 2.2 System Constraints
- **Safety Boundary**: Hardcoded Scope Guard blocks any target URI not resolving to localhost, 127.0.0.1, or declared Docker lab containers.
- **Anti-Hallucination**: The AI layer cannot execute unverified shell commands. All recommended patches must pass isolated sandbox compilation and test suites before being merged.

## 3. Specific Requirements
### 3.1 Functional Requirements (FR)
- **FR-01 (Scope Enforcement)**: System MUST validate target URL against authorized whitelist before initiating scan.
- **FR-02 (Multi-Source Ingestion)**: System MUST ingest and normalize findings from ZAP and Semgrep into unified Pydantic schemas.
- **FR-03 (Knowledge Graph Traversal)**: System MUST resolve ontology links between Vulnerability, CWE, OWASP, Asset, Attack Technique, and Mitigation.
- **FR-04 (Context-Aware Scoring)**: System MUST compute a 0-100 risk score incorporating asset criticality, exposure, and data sensitivity.
- **FR-05 (Tripartite AI Display)**: System MUST visually partition AI output into Confirmed Evidence, AI Interpretation, and Actionable Recommendation.
- **FR-06 (Sandbox Verification)**: System MUST apply patches to an isolated sandbox and execute automated test suites.
- **FR-07 (Automated Rollback)**: If a patch fails compilation, breaks regression tests, or introduces new flaws, the system MUST reject the patch, restore baseline code, and record an audit log.

### 3.2 Non-Functional Requirements (NFR)
- **NFR-01 (Auditability)**: All scan events, AI recommendations, and sandbox validation outcomes must be recorded in an immutable audit log.
- **NFR-02 (Performance)**: In-memory Knowledge Graph traversals must complete in under 50 milliseconds.
- **NFR-03 (Fault Tolerance)**: System must gracefully degrade from Neo4j to NetworkX, and from Live LLM to Deterministic Mock AI without throwing unhandled exceptions.
