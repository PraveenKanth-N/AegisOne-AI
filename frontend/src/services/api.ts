import {
  Project, Asset, Scan, Finding, Evidence,
  Remediation, ValidationRun, DashboardSummary, AuditLog
} from '../types';

export type {
  Project, Asset, Scan, Finding, Evidence,
  Remediation, ValidationRun, DashboardSummary, AuditLog
};

export interface AIAnalysis {
  finding_id: string;
  vulnerability_type?: string;
  exploitability_score?: number;
  confidence_score?: number;
  root_cause?: string;
  remediation_guidance?: string;
}

export interface FindingEvidence {
  id?: string;
  finding_id: string;
  tool_name: string;
  raw_snippet?: string;
  raw_payload?: string;
  confidence: number;
}

export interface RiskDetail {
  finding_id: string;
  contextual_risk_score?: number;
  risk_level?: string;
  cvss_vector?: string;
}

export interface Policy {
  id: string;
  name: string;
  framework: string;
  version: string;
  description: string;
  status: string;
  control_count: number;
  passing_controls: number;
  compliance_score: number;
  controls?: any[];
}

export interface ThreatIntel {
  cisa_kev: any[];
  cve_correlations: any[];
  feeds_active: any[];
  summary: {
    total_cves_monitored: number;
    active_exploits_count: number;
    epss_high_risk_count: number;
  };
}

export interface AccessControl {
  users: any[];
  roles: any[];
  security_policies: any;
}

export interface SystemIntegrations {
  integrations: any[];
  system_status: {
    overall_health: string;
    services_online: number;
    services_total: number;
  };
}

export interface ResearchBenchmarks {
  research_questions: any[];
  benchmark_comparison: any[];
  dataset_info: any;
}

const BASE_URL = '/api/v1';

async function fetchJSON<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.detail?.message || err.detail || err.message || 'API request failed');
  }
  return res.json();
}

export const api = {
  // Dashboard
  getDashboardSummary: () => fetchJSON<DashboardSummary>('/dashboard/summary'),
  getTimeline: () => fetchJSON<any[]>('/dashboard/timeline'),
  getAttackSurface: () => fetchJSON<Asset[]>('/dashboard/attack-surface'),

  // Projects
  getProjects: () => fetchJSON<Project[]>('/projects'),
  getProject: (id: string) => fetchJSON<Project>(`/projects/${id}`),
  createProject: (data: Partial<Project>) => fetchJSON<Project>('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Scans
  startScan: (
    projectIdOrConfig: string | { project_id?: string; target_url?: string; scan_type?: string },
    scanType: string = 'HYBRID_FULL'
  ) => {
    if (typeof projectIdOrConfig === 'string') {
      return fetchJSON<Scan>(`/scans/project/${projectIdOrConfig}`, {
        method: 'POST',
        body: JSON.stringify({ scan_type: scanType }),
      });
    } else {
      const pId = projectIdOrConfig.project_id || 'default';
      return fetchJSON<Scan>(`/scans/project/${pId}`, {
        method: 'POST',
        body: JSON.stringify({
          scan_type: projectIdOrConfig.scan_type || scanType,
          target_url: projectIdOrConfig.target_url
        }),
      });
    }
  },
  getScan: (scanId: string) => fetchJSON<Scan>(`/scans/${scanId}`),
  getScanFindings: (scanId: string) => fetchJSON<Finding[]>(`/scans/${scanId}/findings`),
  getProjectScans: (projectId: string) => fetchJSON<Scan[]>(`/scans/project/${projectId}/all`),

  // Findings
  getFindings: () => fetchJSON<Finding[]>('/findings'),
  getFinding: (id: string) => fetchJSON<Finding>(`/findings/${id}`),
  getEvidence: (findingId: string) => fetchJSON<Evidence[]>(`/findings/${findingId}/evidence`),
  getFindingEvidence: (findingId: string) => fetchJSON<any>(`/findings/${findingId}/evidence`),
  getRiskDetail: (findingId: string) => fetchJSON<any>(`/findings/${findingId}/risk-detail`),

  // AI Security Analyst
  analyzeFinding: (findingId: string) => fetchJSON<any>(`/ai/analyze/${findingId}`, { method: 'POST' }),

  // Remediations & Sandbox
  getRemediations: (findingId?: string) =>
    fetchJSON<Remediation[]>(`/remediations${findingId ? `?finding_id=${findingId}` : ''}`),
  getRemediation: (id: string) => fetchJSON<Remediation>(`/remediations/${id}`),
  generateRemediation: (findingId: string) =>
    fetchJSON<Remediation>(`/remediations/finding/${findingId}/generate`, { method: 'POST' }),
  rollbackRemediation: (id: string) =>
    fetchJSON<any>(`/remediations/${id}/rollback`, { method: 'POST' }),
  validateRemediation: (id: string, simulateBadFix: boolean = false) =>
    fetchJSON<ValidationRun>(`/sandbox/validate/${id}?simulate_bad_fix=${simulateBadFix}`, { method: 'POST' }),
  getValidationRun: (runId: string) => fetchJSON<ValidationRun>(`/sandbox/run/${runId}`),
  getRemediationRuns: (remediationId: string) =>
    fetchJSON<ValidationRun[]>(`/sandbox/remediation/${remediationId}`),
  getDockerStatus: () => fetchJSON<any>('/sandbox/docker-status'),

  // Knowledge Graph
  getGraph: () => fetchJSON<any>('/graph'),
  getSubgraph: (cweId: string) => fetchJSON<any>(`/graph/finding/${cweId}`),
  getNodeDetail: (nodeId: string) => fetchJSON<any>(`/graph/node/${nodeId}`),

  // Academic Labs
  analyzePcap: () => fetchJSON<any>('/pcap/analyze', { method: 'POST' }),
  analyzeEmail: (data: any) => fetchJSON<any>('/email/analyze', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  calculateGCD: (a: number, b: number) => fetchJSON<any>('/crypto/gcd', {
    method: 'POST',
    body: JSON.stringify({ a, b }),
  }),
  calculateRSA: (p: number, q: number, message: number) => fetchJSON<any>('/crypto/rsa', {
    method: 'POST',
    body: JSON.stringify({ p, q, message }),
  }),
  calculateDH: (p: number, g: number, alice_private: number, bob_private: number) => fetchJSON<any>('/crypto/diffie-hellman', {
    method: 'POST',
    body: JSON.stringify({ p, g, alice_private, bob_private }),
  }),

  // Audit
  getAuditLogs: () => fetchJSON<AuditLog[]>('/audit'),
  verifyAuditChain: () => fetchJSON<any>('/audit/verify-chain'),

  // Compliance & Threat Intelligence
  getPolicies: () => fetchJSON<any>('/policies'),
  getThreatIntelligence: () => fetchJSON<any>('/threat-intelligence'),

  // Administration & Research
  getSystemIntegrations: () => fetchJSON<any>('/admin/integrations'),
  getAccessControl: () => fetchJSON<any>('/admin/access'),
  getResearchBenchmarks: () => fetchJSON<any>('/research/benchmarks'),
  getReports: () => fetchJSON<any[]>('/reports'),
  getSettings: () => fetchJSON<any>('/settings'),
};
