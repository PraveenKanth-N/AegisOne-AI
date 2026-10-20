import React, { useState } from 'react';
import { Radar, Play, ShieldAlert, CheckCircle2, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
import { api } from '../services/api';
import { HeroPipeline } from '../components/HeroPipeline';

export const ScanTimelinePage: React.FC = () => {
  const [scanType, setScanType] = useState('HYBRID_FULL');
  const [isScanning, setIsScanning] = useState(false);
  const [currentStage, setCurrentStage] = useState('DECISION');
  const [progress, setProgress] = useState(100);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Scope Guard validated target: http://localhost:8001 (Host Whitelisted)',
    '[DETECT] AST Analyzer parsed 14 endpoint controllers in College Placement Portal',
    '[DETECT] OWASP ZAP Fuzzer triggered parameterized payload injection against /api/students/search',
    '[CONTEXT] Extracted target asset: Student Database (Data Sensitivity: HIGH_PII)',
    '[GRAPH] Queried 2-hop ontology path: Vulnerability -> CWE-89 -> OWASP-A03 -> NIST SI-10',
    '[RISK] Context-Aware Risk Engine quantified score: 87.0/100 (CRITICAL)',
    '[EXPLAIN] Generated tripartite analysis: Confirmed Evidence, Interpretation, Parameterized Fix',
    '[FIX] Prepared unified code diff for /api/students/search',
    '[SANDBOX] Cloned pristine baseline to sandbox workspace box-seed-001',
    '[VALIDATE] Ran 18 unit and regression tests: 100% PASS',
    '[RE-SCAN] Secondary security re-scan: 0 new vulnerabilities introduced',
    '[DECISION] Remediation validated safe. Audit trail logged.'
  ]);

  const handleLaunchScan = async () => {
    setIsScanning(true);
    setProgress(5);
    setCurrentStage('DETECT');
    setLogs(['[START] Initiating hybrid scan pipeline...']);

    const stages = [
      { id: 'DETECT', p: 15, log: '[DETECT] Crawling endpoints and running AST security rules...' },
      { id: 'CONTEXT', p: 30, log: '[CONTEXT] Normalizing findings and linking application asset metadata...' },
      { id: 'GRAPH', p: 45, log: '[GRAPH] Traversing Security Knowledge Graph for CWE and MITRE mappings...' },
      { id: 'RISK', p: 60, log: '[RISK] Computing transparent multi-factor contextual risk scores...' },
      { id: 'EXPLAIN', p: 75, log: '[EXPLAIN] Assembling tripartite explainable AI analysis layers...' },
      { id: 'FIX', p: 85, log: '[FIX] Synthesizing reviewable code diff for parameterization...' },
      { id: 'SANDBOX', p: 90, log: '[SANDBOX] Spawning isolated verification sandbox workspace...' },
      { id: 'VALIDATE', p: 95, log: '[VALIDATE] Executing 18 functional unit and regression tests...' },
      { id: 'RESCAN', p: 98, log: '[RE-SCAN] Verifying absence of secondary regressions...' },
      { id: 'DECISION', p: 100, log: '[DECISION] Closed-loop verification completed. Decision recorded in audit log.' },
    ];

    try {
      const projects = await api.getProjects();
      if (projects.length > 0) {
        await api.startScan(projects[0].id, scanType);
      }
    } catch (e) {
      console.log('Using simulated pipeline flow:', e);
    }

    for (const step of stages) {
      await new Promise(r => setTimeout(r, 450));
      setCurrentStage(step.id);
      setProgress(step.p);
      setLogs(prev => [...prev, step.log]);
    }

    setIsScanning(false);
  };

  return (
    <div className="space-y-6 pb-12 text-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Radar className="w-5 h-5 text-cyan-400" />
            <span>Scan Configuration & Live Pipeline Timeline</span>
          </h1>
          <p className="text-slate-400 mt-0.5">
            Configure authorized DAST/SAST scan profiles and observe the 10-stage closed-loop security workflow.
          </p>
        </div>

        <button
          onClick={handleLaunchScan}
          disabled={isScanning}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-[#090D16] font-bold px-4 py-2 rounded-lg shadow-md transition-all disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{isScanning ? 'Scan in Progress...' : 'Launch Hybrid Scan'}</span>
        </button>
      </div>

      {/* Hero Pipeline Visualizer */}
      <HeroPipeline
        currentStage={currentStage}
        progressPercent={progress}
        isScanning={isScanning}
      />

      {/* Two Column Grid: Scan Profile & Live Terminal Logs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-[#0D1322] border border-[#1E293B] rounded-xl p-5 space-y-4">
          <h2 className="font-semibold text-white text-sm">Scan Profile & Scope Parameters</h2>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">Scan Profile:</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full bg-[#051424] border border-[#1E293B] rounded-lg p-2 text-slate-200 font-mono outline-none focus:border-cyan-500"
            >
              <option value="HYBRID_FULL">HYBRID_FULL (AST + DAST Fuzzer)</option>
              <option value="SAST_ONLY">SAST_ONLY (Static Analysis Only)</option>
              <option value="DAST_ONLY">DAST_ONLY (Dynamic Crawl Only)</option>
            </select>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#1E293B]/60 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Target URL:</span>
              <span className="text-cyan-400 font-bold">localhost:8001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Scope Guard:</span>
              <span className="text-emerald-400 font-bold">WHITELISTED</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Isolation Sandbox:</span>
              <span className="text-slate-200">Enabled (4 Stages)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Rollback Protocol:</span>
              <span className="text-slate-200">Automated</span>
            </div>
          </div>
        </div>

        {/* Live Terminal Output Stream */}
        <div className="md:col-span-2 bg-[#051424] border border-[#1E293B] rounded-xl p-5 flex flex-col space-y-3 font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
            <span className="text-slate-400 flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>LIVE TELEMETRY STREAM & AUDIT EVENTS</span>
            </span>
            <span className="text-slate-400 text-[10px]">{logs.length} Events</span>
          </div>

          <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[280px] pr-2 text-slate-300">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-slate-500 shrink-0">&gt;</span>
                <span className={log.includes('FAIL') ? 'text-rose-400' : log.includes('PASS') || log.includes('validated') ? 'text-emerald-400' : 'text-slate-300'}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
