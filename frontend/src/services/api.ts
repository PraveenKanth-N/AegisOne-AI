import {
  Project, Asset, Scan, Finding, Evidence,
  Remediation, ValidationRun, DashboardSummary, AuditLog
} from '../types';

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
  startScan: (projectId: string, scanType: string = 'HYBRID_FULL') =>
    fetchJSON<Scan>(`/scans/project/${projectId}`, {
      method: 'POST',
      body: JSON.stringify({ scan_type: scanType }),
    }),
  getScan: (scanId: string) => fetchJSON<Scan>(`/scans/${scanId}`),
  getScanFindings: (scanId: string) => fetchJSON<Finding[]>(`/scans/${scanId}/findings`),
  getProjectScans: (projectId: string) => fetchJSON<Scan[]>(`/scans/project/${projectId}/all`),

  // Findings
  getFindings: () => fetchJSON<Finding[]>('/findings'),
  getFinding: (id: string) => fetchJSON<Finding>(`/findings/${id}`),
  getEvidence: (findingId: string) => fetchJSON<Evidence[]>(`/findings/${findingId}/evidence`),
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
};
