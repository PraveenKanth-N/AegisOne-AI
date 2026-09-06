import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Asset(Base):
    __tablename__ = "assets"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    project_id = Column(String(36), ForeignKey("projects.id"), nullable=False)
    name = Column(String(100), nullable=False)
    asset_type = Column(String(50), default="REST_API") # Database, Authentication, REST_API, UI, File_Storage
    criticality = Column(Float, default=0.7) # 0.0 - 1.0
    exposure = Column(String(30), default="EXTERNAL") # EXTERNAL, INTERNAL, RESTRICTED
    data_sensitivity = Column(String(30), default="HIGH_PII") # HIGH_PII, CREDENTIALS, MEDIUM, PUBLIC
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Relationships
    project = relationship("Project", back_populates="assets")
    findings = relationship("Finding", back_populates="asset")
