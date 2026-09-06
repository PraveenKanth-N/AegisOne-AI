# AegisOne AI — Defensive Security Model & Scope Guard Policy

## 1. Non-Negotiable Safety Boundary
AegisOne AI is exclusively a defensive application security platform. The system actively enforces:
- **Scope Guard Filtering**: Scanning engines refuse connection attempts to any domain or IP not in `ALLOWED_TARGET_HOSTS` (`localhost`, `127.0.0.1`, `host.docker.internal`).
- **Prohibition of Malicious Payloads**: No credential-stealing, destructive DDoS, or unauthorized exploits are implemented.
- **Synthesized Data Only**: All network traffic (PCAP) and phishing emails are synthetic benchmarks designed for defense analysis.

## 2. Platform Hardening
- **Authentication**: Salted PBKDF2-HMAC-SHA256 with 100,000 rounds.
- **Session Security**: HS256 JWT tokens.
- **Database Access**: SQLAlchemy parameterized prepared statements with async engine.
- **Subprocess Isolation**: Tests run in ephemeral sandboxes; zero execution of unsanitized LLM strings.
