"""
AegisOne AI - Main Backend Application Entrypoint
FastAPI server providing security orchestration, AI reasoning,
knowledge graph querying, and sandbox validation APIs.
"""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.core.config import settings
from backend.app.core.database import init_db
from backend.app.seed import seed_database
from backend.app.api.v1 import api_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Ensure database schema is created and seeded with demo data
    print("[AegisOne AI] Starting up backend services...")
    await init_db()
    await seed_database()
    yield
    print("[AegisOne AI] Shutting down backend services...")

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="An AI Copilot for Secure Web Application Development using Explainable Risk Analysis, Security Knowledge Graph, and Sandbox Validation.",
    lifespan=lifespan
)

# Configure Cross-Origin Resource Sharing (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API v1 routes
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {
        "platform": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "OPERATIONAL",
        "docs_url": "/docs",
        "scope_guard": {
            "authorized_targets": settings.ALLOWED_TARGET_HOSTS,
            "status": "ACTIVE_ENFORCEMENT"
        },
        "pipeline_stages": [
            "DETECT", "CONTEXT", "GRAPH", "RISK",
            "EXPLAIN", "FIX", "SANDBOX", "VALIDATE", "RESCAN", "DECISION"
        ]
    }

@app.get("/api/health")
async def health_check():
    return {
        "status": "HEALTHY",
        "service": "AegisOne Backend",
        "database": "CONNECTED",
        "knowledge_graph": "ONLINE (NetworkX/Neo4j)",
        "ai_engine": f"READY ({settings.AI_PROVIDER.upper()})"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
