import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Project(Base):
    __tablename__ = "projects"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(100), index=True, nullable=False)
    description = Column(Text, nullable=True)
    target_url = Column(String(255), nullable=False)
    environment = Column(String(50), default="local_lab") # local_lab, docker_stage, staging
    authorization_status = Column(String(30), default="AUTHORIZED") # AUTHORIZED, PENDING_VERIFICATION, BLOCKED
    owner_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    
    # Relationships
    assets = relationship("Asset", back_populates="project", cascade="all, delete-orphan")
    scans = relationship("Scan", back_populates="project", cascade="all, delete-orphan")
