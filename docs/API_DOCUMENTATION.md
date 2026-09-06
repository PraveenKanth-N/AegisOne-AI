# AegisOne AI — REST & Event API Documentation
### Version: 1.0.0 | OpenAPI 3.1.0 Compliant

## 1. Authentication & Session Management
- `POST /api/v1/auth/register`: Register security engineer account with PBKDF2-HMAC-SHA256 hashed credentials.
- `POST /api/v1/auth/login`: Issue HS256 JWT access token with 8-hour TTL.

## 2. Project & Scope Guard
- `POST /api/v1/projects`: Register target application. Enforces strict Scope Guard host whitelist (`localhost`, `127.0.0.1`, `college-placement-portal`). Rejects external domains with HTTP 403.
- `GET /api/v1/projects`: List active projects and authorization statuses.
- `POST /api/v1/projects/{id}/assets`: Declare application components (Database, Authentication, REST API, UI).

## 3. Security Scanners & Decision Pipeline
- `POST /api/v1/scans/project/{project_id}`: Trigger asynchronous 10-stage security pipeline (`DETECT -> CONTEXT -> GRAPH -> RISK -> EXPLAIN -> FIX -> SANDBOX -> VALIDATE -> RESCAN -> DECISION`).
- `GET /api/v1/scans/{scan_id}`: Poll live scan status, current pipeline stage, and completion percentage.
- `GET /api/v1/scans/{scan_id}/findings`: Retrieve normalized vulnerability findings.

## 4. Findings & Contextual Risk Detail
- `GET /api/v1/findings`: Filter findings by severity (CRITICAL, HIGH, MODERATE, LOW) and status.
- `GET /api/v1/findings/{id}/evidence`: Fetch raw tool evidence (scanner payloads, dumps, and confidence metrics).
- `GET /api/v1/findings/{id}/risk-detail`: Retrieve full mathematical factor breakdown:
  $$\text{Risk Score} = \min\left(100, \, \left( S_{\text{tech}} \times 4.0 + E_{\text{xploit}} \times 2.0 + C_{\text{asset}} \times 2.5 + D_{\text{sens}} \times 1.5 + X_{\text{pos}} \times 1.0 \right) \times C_{\text{onfidence}} \right)$$

## 5. Explainable AI Security Analyst
- `POST /api/v1/ai/analyze/{finding_id}`: GraphRAG-assisted reasoning returning tripartite output:
  1. `confirmed_evidence`: Tool findings only.
  2. `ai_interpretation`: Contextual reasoning grounded in Knowledge Graph.
  3. `recommended_fix`: Validated remediation guidance.

## 6. Remediations & Sandbox Validation
- `POST /api/v1/remediations/finding/{id}/generate`: Propose secure code patch and compute unified diff.
- `POST /api/v1/sandbox/validate/{remediation_id}?simulate_bad_fix=false`: Dispatch patch to isolated sandbox and execute 4-stage verification (Syntax, Regression Tests, AST Check, Re-scan).
- `POST /api/v1/remediations/{id}/rollback`: Trigger automated rollback restoring baseline code.

## 7. Knowledge Graph
- `GET /api/v1/graph`: Complete graph serialized for React Flow.
- `GET /api/v1/graph/finding/{cwe_id}`: 2-hop contextual subgraph for target CWE.

## 8. Academic Labs (CO1 - CO6)
- `POST /api/v1/pcap/analyze`: Packet capture anomaly detection (TCP SYN flood, port scan).
- `POST /api/v1/email/analyze`: Phishing heuristic evaluator (SPF/DKIM, domain typosquatting).
- `POST /api/v1/crypto/gcd`: Euclidean & Extended GCD with Bézout coefficients.
- `POST /api/v1/crypto/rsa`: RSA keygen, encryption, and decryption step trace.
- `POST /api/v1/crypto/diffie-hellman`: Diffie-Hellman symmetric key negotiation simulation.
