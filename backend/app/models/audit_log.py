import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, DateTime
from backend.app.core.database import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    event_type = Column(String(80), nullable=False, index=True)
    actor = Column(String(100), default="system")
    project_id = Column(String(36), nullable=True, index=True)
    resource_id = Column(String(36), nullable=True)
    resource_type = Column(String(50), nullable=True)
    description = Column(Text, nullable=False)
    severity = Column(String(20), default="INFO")  # INFO, WARNING, CRITICAL
    metadata_json = Column(Text, nullable=True)  # JSON blob of extra context
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), index=True)
