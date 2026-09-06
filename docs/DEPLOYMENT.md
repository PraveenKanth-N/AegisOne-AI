# AegisOne AI — Deployment & Infrastructure Guide

## 1. Native Windows / Localhost Deployment
```powershell
# 1. Start backend server (port 8000)
cd D:\AegisOne-AI
.\venv\Scripts\python.exe -m uvicorn backend.app.main:app --port 8000 --reload

# 2. Start vulnerable target lab (port 8001)
cd D:\AegisOne-AI
.\venv\Scripts\python.exe vulnerable-lab\app.py

# 3. Start frontend development server (port 5173)
cd D:\AegisOne-AI\frontend
npm run dev
```

## 2. Docker Compose Deployment
```bash
docker compose up -d --build
```
This deploys:
- `backend`: FastAPI API server on `:8000`
- `frontend`: Nginx / Vite production build on `:5173`
- `vulnerable-lab`: Intentionally vulnerable College Placement Portal on `:8001`
- `postgres`: PostgreSQL 16 on `:5432`
- `neo4j`: Neo4j Community Edition 5 on `:7474` and `:7687`
