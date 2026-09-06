import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Activity,
  ArrowUpRight,
  Clock,
  Server,
  Database,
  Lock,
  Boxes
} from 'lucide-react';
import { api } from '../services/api';
import { DashboardSummary } from '../types';
import { HeroPipeline } from '../components/HeroPipeline';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState<DashboardSummary>({
    total_projects: 1,
    total_scans: 1,
    total_findings: 3,
    critical_count: 2,
    high_count: 1,
    medium_count: 0,
    low_count: 0,
    validated_fixes: 1,
    rejected_fixes: 0,
    security_score: 87.0
  });
  const [timeline, setTimeline] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentStage, setCurrentStage] = useState('DECISION');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const s = await api.getDashboardSummary();
      setSummary(s);
      const t = await api.getTimeline();
      setTimeline(t);
    } catch (e) {
      console.log('Using default telemetry:', e);
    }
  };

  const handleLaunchScan = async () => {
    setIsScanning(true);
    setCurrentStage('DETECT');
    try {
      const projects = await api.getProjects();
      if (projects.length > 0) {
        await api.startScan(projects[0].id);
      }
      // Simulate visual pipeline progression
      const stages = ['DETECT', 'CONTEXT', 'GRAPH', 'RISK', 'EXPLAIN', 'FIX', 'SANDBOX', 'VALIDATE', 'RESCAN', 'DECISION'];
      for (let i = 0; i < stages.length; i++) {
        setCurrentStage(stages[i]);
        await new Promise(r => setTimeout(r, 400));
      }
      await loadData();
    } catch (e) {
      console.error(e);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Welcome & Mission Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <span>Security Operations Command Center</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-medium">
              LIVE TELEMETRY
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Active Project: <strong className="text-slate-200">College Placement Portal</strong> • Target: <code className="text-sky-400">http://localhost:8001</code>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate('/knowledge-graph')}
            className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors"
          >
            <span>Explore Knowledge Graph</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button
            onClick={() => navigate('/sandbox')}
            className="text-xs bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors"
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Sandbox Center</span>
          </button>
        </div>
      </div>

      {/* Hero Security Pipeline */}
      <HeroPipeline
        currentStage={currentStage}
        progressPercent={isScanning ? 65 : 100}
        isScanning={isScanning}
      />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-5 gap-4">
        {/* Security Score */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider">Security Score</span>
            <ShieldAlert className="w-4 h-4 text-sky-400" />
          </div>
          <div className="my-2 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white font-mono">{summary.security_score}</span>
            <span className="text-xs text-slate-400 font-mono">/ 100</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${summary.security_score}%` }}
            />
          </div>
        </div>

        {/* Critical Vulnerabilities */}
        <div className="bg-slate-900/80 border border-rose-500/20 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-rose-400">Critical Risks</span>
            <AlertTriangle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-rose-400 font-mono">{summary.critical_count}</span>
          </div>
          <span className="text-[11px] text-slate-400">CWE-89 (SQLi), CWE-798</span>
        </div>

        {/* High Severity */}
        <div className="bg-slate-900/80 border border-amber-500/20 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-amber-400">High Risks</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-amber-400 font-mono">{summary.high_count}</span>
          </div>
          <span className="text-[11px] text-slate-400">CWE-79 (Stored XSS)</span>
        </div>

        {/* Validated Remediations */}
        <div className="bg-slate-900/80 border border-emerald-500/20 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-emerald-400">Validated Fixes</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-emerald-400 font-mono">{summary.validated_fixes}</span>
          </div>
          <span className="text-[11px] text-emerald-400/80">Sandbox Verified & Rescanned</span>
        </div>

        {/* Rejected AI Fixes */}
        <div className="bg-slate-900/80 border border-purple-500/20 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-purple-400">Rejected Fixes</span>
            <XCircle className="w-4 h-4 text-purple-400" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-purple-400 font-mono">{summary.rejected_fixes}</span>
          </div>
          <span className="text-[11px] text-slate-400">Auto-Rollback Triggered</span>
        </div>
      </div>

      {/* Main Grid: Attack Surface Map & Real-Time Security Timeline */}
      <div className="grid grid-cols-3 gap-6">
        {/* Attack Surface Explorer */}
        <div className="col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Server className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">Target Application Attack Surface Map</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">3 Critical Components</span>
          </div>

          <div className="space-y-3">
            {/* Component 1 */}
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-lg flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-rose-500/10 text-rose-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-slate-200">Student Database (Placement & CGPA)</span>
                    <span className="text-[10px] bg-rose-500/20 text-rose-400 px-1.5 py-0.2 rounded font-mono">HIGH PII</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Exposed via /api/students/search • Criticality 1.0</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-rose-400 font-bold">1 Finding</span>
                <span className="block text-[10px] text-slate-400 font-mono">SQLi (Score 87)</span>
              </div>
            </div>

            {/* Component 2 */}
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-lg flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-amber-500/10 text-amber-400">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-slate-200">Authentication & Session Service</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.2 rounded font-mono">CREDENTIALS</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Exposed via /auth/login • Criticality 0.95</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-emerald-400 font-bold">Fix Validated</span>
                <span className="block text-[10px] text-slate-400 font-mono">CWE-798 Patch</span>
              </div>
            </div>

            {/* Component 3 */}
            <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-lg flex items-center justify-between hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-sky-500/10 text-sky-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-slate-200">Recruiter REST API</span>
                    <span className="text-[10px] bg-sky-500/20 text-sky-400 px-1.5 py-0.2 rounded font-mono">MEDIUM</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Exposed via /profile/view • Criticality 0.75</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-amber-400 font-bold">1 Finding</span>
                <span className="block text-[10px] text-slate-400 font-mono">XSS (Score 68)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Security Timeline */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">Live Operation Timeline</h3>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">AUDIT READY</span>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto pr-1 max-h-[220px]">
            {timeline.length > 0 ? (
              timeline.map((event, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200 block text-[11px]">{event.event_type}</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                  <div>
                    <span className="text-slate-200 font-medium">REMEDIATION_VALIDATED</span>
                    <p className="text-[11px]">Remediation for CWE-798 successfully validated in sandbox box-seed-001.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5" />
                  <div>
                    <span className="text-slate-200 font-medium">SCAN_COMPLETED</span>
                    <p className="text-[11px]">Baseline scan completed. 3 findings normalized and linked to graph.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5" />
                  <div>
                    <span className="text-slate-200 font-medium">SCOPE_VERIFIED</span>
                    <p className="text-[11px]">Authorized target http://localhost:8001 confirmed by Scope Guard.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
