# AegisOne AI — Architectural Decisions & Fallback Policy (DECISIONS.md)

## Decision 1: Scope Guard Target Boundary
- **Policy**: Active scanning and test execution are strictly restricted to `localhost`, `127.0.0.1`, `host.docker.internal`, and explicitly authorized lab hostnames (`college-placement-portal`).
- **Enforcement**: `backend/app/services/scope_guard.py` raises HTTP 403 `SCOPE_VIOLATION` for any unauthorized host.

## Decision 2: Dual-Mode Database Architecture
- **Primary Development**: Async SQLite (`sqlite+aiosqlite:///D:/AegisOne-AI/aegisone.db`) for zero-configuration, instant portability.
- **Enterprise / Production**: Async PostgreSQL via `DATABASE_URL` environment variable.

## Decision 3: Security Knowledge Graph Fallback
- **Primary**: Neo4j Community Edition 5.x via official Bolt driver (`bolt://localhost:7687`).
- **Fallback**: In-memory NetworkX directed graph (`DiGraph`) populated with curated security ontology (`knowledge_graph/ontology.py`), enabling deterministic 2-hop traversals, shortest-path queries, and subgraphs with <5ms latency without requiring a running Neo4j daemon.

## Decision 4: AI Provider Abstraction & Anti-Hallucination Guardrails
- **Provider**: Abstraction layer supporting OpenAI API via environment variable `OPENAI_API_KEY`.
- **Offline / Demo Mode**: Deterministic GraphRAG mock provider (`AI_PROVIDER=mock`) grounded in confirmed scanner evidence and ontology paths.
- **Tripartite Separation**: All AI analyses are partitioned into 3 distinct visual layers:
  1. `Confirmed Evidence`: Scanner payloads and AST locations only.
  2. `AI Interpretation`: Contextual risk reasoning grounded in knowledge graph.
  3. `Recommendation`: Actionable remediation patch candidate.
- **Anti-Hallucination Policy**: If tool evidence is insufficient, the system returns: *"Insufficient evidence to confidently determine this."*

## Decision 5: Isolated Sandbox Validation & Rollback
- **Safety Policy**: AI-generated code patches are never deployed directly to production.
- **Verification Stages**:
  1. Syntax / Compilation Check.
  2. Functional Regression Testing.
  3. AST Pattern Verification.
  4. Secondary DAST Security Re-scan.
- **Rollback**: If any stage fails or introduces a secondary flaw, automated rollback is executed immediately, restoring the pristine baseline code and logging the rejection event in the immutable audit log.
