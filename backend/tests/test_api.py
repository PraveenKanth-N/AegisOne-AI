"""
Integration Tests for AegisOne AI FastAPI Endpoints
"""
import pytest
from httpx import ASGITransport, AsyncClient
from backend.app.main import app

@pytest.mark.asyncio
async def test_root_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert data["platform"] == "AegisOne AI"
        assert "DETECT" in data["pipeline_stages"]

@pytest.mark.asyncio
async def test_health_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/health")
        assert response.status_code == 200
        assert response.json()["status"] == "HEALTHY"

@pytest.mark.asyncio
async def test_dashboard_summary():
    from backend.app.core.database import init_db
    from backend.app.seed import seed_database
    await init_db()
    await seed_database()
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/v1/dashboard/summary")
        assert response.status_code == 200
        data = response.json()
        assert data["total_projects"] >= 1
        assert data["total_findings"] >= 1
        assert "security_score" in data

@pytest.mark.asyncio
async def test_crypto_gcd():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.post("/api/v1/crypto/gcd", json={"a": 48, "b": 18})
        assert response.status_code == 200
        assert response.json()["gcd"] == 6
