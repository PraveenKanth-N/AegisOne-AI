import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Remediation(Base):
    __tablename__ = "remediations"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    finding_id = Column(String(36), ForeignKey("findings.id"), nullable=False)
    original_code = Column(Text, nullable=False)
    proposed_code = Column(Text, nullable=False)
    diff = Column(Text, nullable=True)
    status = Column(String(30), default="PROPOSED") # PROPOSED, IN_SANDBOX, VALIDATED, REJECTED, ROLLED_BACK
    ai_model = Column(String(50), default="AegisOne GraphRAG Engine")
    explanation = Column(Text, nullable=True)
    business_impact = Column(Text, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Relationships
    finding = relationship("Finding", back_populates="remediations")
    validation_runs = relationship("ValidationRun", back_populates="remediation", cascade="all, delete-orphan")
