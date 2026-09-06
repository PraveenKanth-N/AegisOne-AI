# AegisOne AI — Testing Strategy & Quality Assurance

## 1. Testing Pyramid
AegisOne AI implements a comprehensive testing suite:
- **Unit Tests**: Context-Aware Risk Engine, Scope Guard URL validator, Cryptography mathematical operations.
- **Integration Tests**: FastAPI async test client, SQLite async database queries, Knowledge Graph traversals.
- **Sandbox Validation Tests**: Multi-stage patch testing, regression verification, rollback controllers.
- **Frontend Build Validation**: TypeScript compiler checks (`tsc -b`), Vite bundling, React component unit checks.

## 2. Running Automated Tests
```powershell
# Run backend pytest test suite
cd D:\AegisOne-AI
.\venv\Scripts\python.exe -m pytest backend/tests -v

# Run frontend production build test
cd D:\AegisOne-AI\frontend
npm run build
```
