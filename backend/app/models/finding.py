import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Finding(Base):
    __tablename__ = "findings"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    scan_id = Column(String(36), ForeignKey("scans.id"), nullable=False)
    asset_id = Column(String(36), ForeignKey("assets.id"), nullable=True)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    technical_severity = Column(Float, default=5.0) # 0.0 - 10.0
    contextual_risk_score = Column(Float, default=50.0) # 0.0 - 100.0
    risk_level = Column(String(20), default="HIGH") # CRITICAL, VERY_HIGH, HIGH, MODERATE, LOW
    cwe_id = Column(String(50), nullable=True) # e.g. CWE-89
    owasp_category = Column(String(100), nullable=True) # e.g. A03:2021-Injection
    affected_endpoint = Column(String(255), nullable=True) # e.g. /api/students/search
    affected_parameter = Column(String(100), nullable=True) # e.g. department
    status = Column(String(30), default="OPEN") # OPEN, IN_REMEDIATION, VALIDATED, REJECTED
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Relationships
    scan = relationship("Scan", back_populates="findings")
    asset = relationship("Asset", back_populates="findings")
    evidence = relationship("Evidence", back_populates="finding", cascade="all, delete-orphan")
    remediations = relationship("Remediation", back_populates="finding", cascade="all, delete-orphan")
