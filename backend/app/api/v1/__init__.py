from fastapi import APIRouter

from backend.app.api.v1.auth import router as auth_router
from backend.app.api.v1.projects import router as projects_router
from backend.app.api.v1.scans import router as scans_router
from backend.app.api.v1.findings import router as findings_router
from backend.app.api.v1.remediations import router as remediations_router
from backend.app.api.v1.sandbox import router as sandbox_router
from backend.app.api.v1.dashboard import router as dashboard_router
from backend.app.api.v1.audit import router as audit_router
from backend.app.api.v1.graph import router as graph_router
from backend.app.api.v1.ai import router as ai_router
from backend.app.api.v1.pcap import router as pcap_router
from backend.app.api.v1.email import router as email_router
from backend.app.api.v1.crypto import router as crypto_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(projects_router)
api_router.include_router(scans_router)
api_router.include_router(findings_router)
api_router.include_router(remediations_router)
api_router.include_router(sandbox_router)
api_router.include_router(dashboard_router)
api_router.include_router(audit_router)
api_router.include_router(graph_router)
api_router.include_router(ai_router)
api_router.include_router(pcap_router)
api_router.include_router(email_router)
api_router.include_router(crypto_router)
