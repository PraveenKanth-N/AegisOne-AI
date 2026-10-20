import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class ValidationRun(Base):
    __tablename__ = "validation_runs"
    
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    remediation_id = Column(String(36), ForeignKey("remediations.id"), nullable=False)
    sandbox_id = Column(String(36), nullable=True)
    status = Column(String(30), default="PENDING")  # PENDING, RUNNING, PASSED, FAILED, ROLLED_BACK
    
    # Phase 16 Isolation & Sandbox Metadata
    execution_mode = Column(String(30), default="IN_PROCESS_SIMULATION")  # DOCKER_CONTAINER, IN_PROCESS_SIMULATION
    isolation_level = Column(String(30), default="UNISOLATED_HOST")       # CONTAINER_ISOLATED, UNISOLATED_HOST
    container_id = Column(String(64), nullable=True)                     # Real Docker container ID (None if simulated)
    production_eligible = Column(Boolean, default=False)                 # True ONLY if genuine container isolation passed
    policy_verdict = Column(String(50), nullable=True)                   # APPROVED_SANDBOX_ISOLATED, EDUCATIONAL_DEMO_REQUIRES_REVIEW, etc.
    checks_executed = Column(Text, nullable=True)                        # JSON list of actually executed check types
    
    # Stage results
    syntax_check = Column(String(20), default="PENDING")       # PENDING, PASS, FAIL
    regression_tests = Column(String(20), default="PENDING")
    ast_verification = Column(String(20), default="PENDING")
    security_rescan = Column(String(20), default="PENDING")
    
    # Details
    test_output = Column(Text, nullable=True)
    failure_reason = Column(Text, nullable=True)
    new_vulnerabilities = Column(Text, nullable=True)  # JSON list of new issues found
    rollback_executed = Column(Boolean, default=False)
    
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    completed_at = Column(DateTime, nullable=True)
    
    remediation = relationship("Remediation", back_populates="validation_runs")
