from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models import Project, Asset
from backend.app.schemas import ProjectCreate, ProjectResponse, AssetCreate, AssetResponse

router = APIRouter(prefix="/projects", tags=["Projects"])

AUTHORIZED_HOSTS = {"localhost", "127.0.0.1", "host.docker.internal", "college-placement-portal", "vulnerable-lab"}

def _check_scope(url: str) -> bool:
    """ScopeGuard: ensures target is in the authorized whitelist."""
    from urllib.parse import urlparse
    host = urlparse(url).hostname or ""
    return host in AUTHORIZED_HOSTS

@router.post("", response_model=ProjectResponse, status_code=201)
async def create_project(project_in: ProjectCreate, db: AsyncSession = Depends(get_db)):
    if not _check_scope(project_in.target_url):
        raise HTTPException(403, f"SCOPE VIOLATION: Target '{project_in.target_url}' is not in the authorized scope. Only localhost and lab environments are permitted.")
    
    project = Project(
        name=project_in.name,
        description=project_in.description,
        target_url=project_in.target_url,
        environment=project_in.environment,
        authorization_status="AUTHORIZED"
    )
    db.add(project)
    await db.flush()
    await db.refresh(project)
    return project

@router.get("", response_model=List[ProjectResponse])
async def list_projects(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).order_by(Project.created_at.desc()))
    return result.scalars().all()

@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).where(Project.id == project_id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Project not found")
    return project

@router.post("/{project_id}/assets", response_model=AssetResponse, status_code=201)
async def create_asset(project_id: str, asset_in: AssetCreate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).where(Project.id == project_id))
    if not result.scalar_one_or_none():
        raise HTTPException(404, "Project not found")
    
    asset = Asset(project_id=project_id, **asset_in.model_dump())
    db.add(asset)
    await db.flush()
    await db.refresh(asset)
    return asset

@router.get("/{project_id}/assets", response_model=List[AssetResponse])
async def list_assets(project_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Asset).where(Asset.project_id == project_id))
    return result.scalars().all()
