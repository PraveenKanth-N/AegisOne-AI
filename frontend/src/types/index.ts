export interface Project {
  id: string;
  name: string;
  description?: string;
  target_url: string;
  environment: string;
  authorization_status: string;
  created_at: string;
}

export interface Asset {
  id: string;
  project_id: string;
  name: string;
  asset_type: string;
  criticality: number;
  exposure: string;
  data_sensitivity: string;
  vulnerability_count?: number;
}

export interface Scan {
  id: string;
  project_id: string;
  scan_type: string;
  status: string;
  target_url: string;
  current_stage: string;
  progress_percent: number;
  summary?: string;
  started_at: string;
  completed_at?: string;
}

export interface Finding {
  id: string;
  scan_id: string;
  asset_id?: string;
  title: string;
  description: string;
  technical_severity: number;
  contextual_risk_score: number;
  risk_level: string;
  cwe_id?: string;
  owasp_category?: string;
  affected_endpoint?: string;
  affected_parameter?: string;
  status: string;
  created_at: string;
}

export interface Evidence {
  id: string;
  finding_id: string;
  tool_name: string;
  raw_payload?: string;
  confidence: number;
  created_at: string;
}

export interface Remediation {
  id: string;
  finding_id: string;
  original_code: string;
  proposed_code: string;
  diff?: string;
  status: string;
  ai_model?: string;
  explanation?: string;
  business_impact?: string;
  created_at: string;
}

export interface ValidationRun {
  id: string;
  remediation_id: string;
  sandbox_id?: string;
  status: string;
  syntax_check: string;
  regression_tests: string;
  ast_verification: string;
  security_rescan: string;
  test_output?: string;
  failure_reason?: string;
  new_vulnerabilities?: string;
  rollback_executed: boolean;
  created_at: string;
  completed_at?: string;
}

export interface DashboardSummary {
  total_projects: number;
  total_scans: number;
  total_findings: number;
  critical_count: number;
  high_count: number;
  medium_count: number;
  low_count: number;
  validated_fixes: number;
  rejected_fixes: number;
  security_score: number;
  last_scan_at?: string;
}

export interface AuditLog {
  id: string;
  event_type: string;
  actor: string;
  project_id?: string;
  description: string;
  severity: string;
  created_at: string;
}
