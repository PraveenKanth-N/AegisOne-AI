import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Evidence(Base):
    __tablename__ = "evidence"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    finding_id = Column(String(36), ForeignKey("findings.id"), nullable=False)
    tool_name = Column(String(50), nullable=False) # OWASP ZAP, Semgrep SAST
    raw_payload = Column(Text, nullable=True)
    request_dump = Column(Text, nullable=True)
    response_dump = Column(Text, nullable=True)
    confidence = Column(Float, default=0.95) # 0.0 - 1.0
    evidence_hash = Column(String(64), nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Relationships
    finding = relationship("Finding", back_populates="evidence")
