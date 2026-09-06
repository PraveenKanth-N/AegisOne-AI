import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Scan(Base):
    __tablename__ = "scans"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    project_id = Column(String(36), ForeignKey("projects.id"), nullable=False)
    scan_type = Column(String(50), default="HYBRID_FULL") # ZAP_ACTIVE, SEMGREP_SAST, HYBRID_FULL
    status = Column(String(30), default="QUEUED") # QUEUED, RUNNING, COMPLETED, FAILED, SCOPE_BLOCKED
    target_url = Column(String(255), nullable=False)
    current_stage = Column(String(50), default="DETECT") # DETECT, CONTEXT, GRAPH, RISK, EXPLAIN, FIX, SANDBOX, VALIDATE, RESCAN, DECISION
    progress_percent = Column(Integer, default=0)
    summary = Column(Text, nullable=True)
    started_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    completed_at = Column(DateTime, nullable=True)
    
    # Relationships
    project = relationship("Project", back_populates="scans")
    findings = relationship("Finding", back_populates="scan", cascade="all, delete-orphan")
