from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field

# ─── Auth Schemas ────────────────────────────────────────────────────────────
class UserCreate(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: str
    password: str = Field(..., min_length=8)
    role: str = "security_engineer"

class UserResponse(BaseModel):
    id: str
    username: str
    email: str
    role: str
    is_active: bool
    created_at: datetime
    model_config = {"from_attributes": True}

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class LoginRequest(BaseModel):
    username: str
    password: str

# ─── Project Schemas ─────────────────────────────────────────────────────────
class ProjectCreate(BaseModel):
    name: str = Field(..., min_length=3, max_length=100)
    description: Optional[str] = None
    target_url: str
    environment: str = "local_lab"

class ProjectResponse(BaseModel):
    id: str
    name: str
    description: Optional[str]
    target_url: str
    environment: str
    authorization_status: str
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Asset Schemas ───────────────────────────────────────────────────────────
class AssetCreate(BaseModel):
    name: str
    asset_type: str = "REST_API"
    criticality: float = Field(0.7, ge=0.0, le=1.0)
    exposure: str = "EXTERNAL"
    data_sensitivity: str = "HIGH_PII"

class AssetResponse(BaseModel):
    id: str
    project_id: str
    name: str
    asset_type: str
    criticality: float
    exposure: str
    data_sensitivity: str
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Scan Schemas ─────────────────────────────────────────────────────────────
class ScanCreate(BaseModel):
    scan_type: str = "HYBRID_FULL"

class ScanResponse(BaseModel):
    id: str
    project_id: str
    scan_type: str
    status: str
    target_url: str
    current_stage: str
    progress_percent: int
    summary: Optional[str]
    started_at: datetime
    completed_at: Optional[datetime]
    model_config = {"from_attributes": True}

# ─── Finding Schemas ──────────────────────────────────────────────────────────
class FindingResponse(BaseModel):
    id: str
    scan_id: str
    asset_id: Optional[str]
    title: str
    description: str
    technical_severity: float
    contextual_risk_score: float
    risk_level: str
    cwe_id: Optional[str]
    owasp_category: Optional[str]
    affected_endpoint: Optional[str]
    affected_parameter: Optional[str]
    status: str
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Evidence Schemas ─────────────────────────────────────────────────────────
class EvidenceResponse(BaseModel):
    id: str
    finding_id: str
    tool_name: str
    raw_payload: Optional[str]
    confidence: float
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Remediation Schemas ──────────────────────────────────────────────────────
class RemediationCreate(BaseModel):
    original_code: str
    proposed_code: str

class RemediationResponse(BaseModel):
    id: str
    finding_id: str
    original_code: str
    proposed_code: str
    status: str
    explanation: Optional[str]
    business_impact: Optional[str]
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Validation Run Schemas ────────────────────────────────────────────────────
class ValidationRunResponse(BaseModel):
    id: str
    remediation_id: str
    status: str
    syntax_check: str
    regression_tests: str
    ast_verification: str
    security_rescan: str
    failure_reason: Optional[str]
    rollback_executed: bool
    created_at: datetime
    completed_at: Optional[datetime]
    model_config = {"from_attributes": True}

# ─── Audit Log Schemas ─────────────────────────────────────────────────────────
class AuditLogResponse(BaseModel):
    id: str
    event_type: str
    actor: str
    project_id: Optional[str]
    description: str
    severity: str
    created_at: datetime
    model_config = {"from_attributes": True}

# ─── Dashboard Summary ─────────────────────────────────────────────────────────
class DashboardSummary(BaseModel):
    total_projects: int
    total_scans: int
    total_findings: int
    critical_count: int
    high_count: int
    medium_count: int
    low_count: int
    validated_fixes: int
    rejected_fixes: int
    security_score: float
    last_scan_at: Optional[datetime]

# ─── AI Analysis Schemas ───────────────────────────────────────────────────────
class AIAnalysisRequest(BaseModel):
    finding_id: str

class AIAnalysisResponse(BaseModel):
    finding_id: str
    confirmed_evidence: List[str]   # Raw scanner evidence only
    ai_interpretation: str          # AI's contextual reasoning
    risk_reasoning: str             # Why the risk level was assigned
    recommended_fix: str            # Proposed remediation
    business_impact: str
    confidence: float               # Evidence-derived confidence 0.0-1.0
    validation_required: bool
    cwe_references: List[str]
    owasp_references: List[str]
    graph_context: Optional[str]    # Knowledge graph reasoning path
