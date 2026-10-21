import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api, Project } from '../services/api';
import {
  ShieldAlert,
  Play,
  Server,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  Radio,
  FileCode,
  Globe,
  Share2,
  Boxes,
  Loader2,
  Info,
  Clock
} from 'lucide-react';

export const ScanConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [targetUrl, setTargetUrl] = useState<string>('http://localhost:8001');
  const [scanType, setScanType] = useState<string>('hybrid');
  const [enableSast, setEnableSast] = useState<boolean>(true);
  const [enableDast, setEnableDast] = useState<boolean>(true);
  const [enableKg, setEnableKg] = useState<boolean>(true);
  const [enableDockerSandbox, setEnableDockerSandbox] = useState<boolean>(true);
  const [rateLimitRps, setRateLimitRps] = useState<number>(20);
  const [authorizedConfirmation, setAuthorizedConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data);
      if (data.length > 0) {
        setSelectedProjectId(data[0].id);
        if (data[0].target_url) {
          setTargetUrl(data[0].target_url);
        }
      }
    } catch (err) {
      console.error('Failed to load projects', err);
    }
  };

  const handleStartScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorizedConfirmation) {
      setErrorMsg('You must certify authorized assessment of this target scope.');
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);
      const res = await api.startScan({
        project_id: selectedProjectId || undefined,
        target_url: targetUrl,
        scan_type: scanType
      });

      // Jump straight to Live Scan Execution stream
      navigate('/console/scans/live');
    } catch (err: any) {
      console.error('Scan trigger failed', err);
      setErrorMsg(err.response?.data?.detail || 'Failed to initialize scan engine. Check Scope Guard logs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
                DEFENSE KERNEL // AUTHORIZED SCOPE CONFIGURATION
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
              <Sliders className="w-7 h-7 text-[#55C7E8]" />
              <span>Configure Security Assessment</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Define target boundaries, select analysis modules, configure Scope Guard constraints, and initiate an authenticated multi-phase security evaluation.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/console/scans/live"
              className="px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-mono font-medium transition-colors flex items-center space-x-1.5"
            >
              <Clock className="w-3.5 h-3.5 text-[#55C7E8]" />
              <span>Scan Timeline</span>
            </Link>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Configuration Form */}
      <form onSubmit={handleStartScan} className="space-y-6">
        {/* Section 1: Target Definition */}
        <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
          <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center space-x-2">
            <Server className="w-4 h-4 text-[#55C7E8]" />
            <span>Target Specification & Scope Binding</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Target Project / Application
              </label>
              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="w-full bg-[#12131A] border border-[#292A34] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#55C7E8]"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.target_url})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Target URL / Host Endpoint
              </label>
              <input
                type="text"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="http://localhost:8001"
                className="w-full bg-[#12131A] border border-[#292A34] rounded-lg px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#55C7E8]"
                required
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
            <Lock className="w-4 h-4 shrink-0" />
            <span>Scope Guard Status: <strong>Strict Lab Mode Active</strong>. External public networks are strictly blocked.</span>
          </div>
        </div>

        {/* Section 2: Engine Selection */}
        <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
          <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-[#55C7E8]" />
            <span>Assessment Engines & Modalities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => setScanType('hybrid')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                scanType === 'hybrid'
                  ? 'bg-[#191A22] border-[#F20D32] shadow-sm shadow-[#F20D32]/10'
                  : 'bg-[#12131A] border-[#292A34] hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">Full Hybrid Spectrum</span>
                <Radio className={`w-4 h-4 ${scanType === 'hybrid' ? 'text-[#F20D32]' : 'text-slate-600'}`} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Correlates Semgrep AST static taint sinks with active ZAP DAST probes and builds a unified knowledge graph.
              </p>
            </div>

            <div
              onClick={() => setScanType('sast')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                scanType === 'sast'
                  ? 'bg-[#191A22] border-[#55C7E8] shadow-sm shadow-[#55C7E8]/10'
                  : 'bg-[#12131A] border-[#292A34] hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">Static AST Only (SAST)</span>
                <Radio className={`w-4 h-4 ${scanType === 'sast' ? 'text-[#55C7E8]' : 'text-slate-600'}`} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapid structural code analysis tracing input sources, sanitize blocks, and dangerous sinks.
              </p>
            </div>

            <div
              onClick={() => setScanType('dast')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                scanType === 'dast'
                  ? 'bg-[#191A22] border-amber-500 shadow-sm shadow-amber-500/10'
                  : 'bg-[#12131A] border-[#292A34] hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">Dynamic Active (DAST)</span>
                <Radio className={`w-4 h-4 ${scanType === 'dast' ? 'text-amber-500' : 'text-slate-600'}`} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live HTTP fuzzing verifying endpoint response codes, SQL injection reflection, and headers.
              </p>
            </div>
          </div>

          {/* Module checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <label className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#12131A] border border-[#292A34] cursor-pointer">
              <input
                type="checkbox"
                checked={enableSast}
                onChange={(e) => setEnableSast(e.target.checked)}
                className="rounded border-[#292A34] text-[#F20D32] focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">Semgrep AST Rules</span>
            </label>

            <label className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#12131A] border border-[#292A34] cursor-pointer">
              <input
                type="checkbox"
                checked={enableDast}
                onChange={(e) => setEnableDast(e.target.checked)}
                className="rounded border-[#292A34] text-[#F20D32] focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">ZAP Active Fuzzer</span>
            </label>

            <label className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#12131A] border border-[#292A34] cursor-pointer">
              <input
                type="checkbox"
                checked={enableKg}
                onChange={(e) => setEnableKg(e.target.checked)}
                className="rounded border-[#292A34] text-[#F20D32] focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">Knowledge Graph Linker</span>
            </label>

            <label className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#12131A] border border-[#292A34] cursor-pointer">
              <input
                type="checkbox"
                checked={enableDockerSandbox}
                onChange={(e) => setEnableDockerSandbox(e.target.checked)}
                className="rounded border-[#292A34] text-[#F20D32] focus:ring-0"
              />
              <span className="text-xs text-slate-300 font-medium">Docker Sandbox Ready</span>
            </label>
          </div>
        </div>

        {/* Section 3: Safe Mode & Explicit Authorization */}
        <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
          <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center space-x-2">
            <Lock className="w-4 h-4 text-[#F20D32]" />
            <span>Safety Constraints & Authorization Guarantee</span>
          </h2>

          <div className="p-4 rounded-lg bg-[#12131A] border border-[#292A34] space-y-3">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="authCheck"
                checked={authorizedConfirmation}
                onChange={(e) => setAuthorizedConfirmation(e.target.checked)}
                className="mt-0.5 rounded border-[#292A34] text-[#F20D32] focus:ring-0"
                required
              />
              <label htmlFor="authCheck" className="text-xs text-slate-300 leading-relaxed cursor-pointer">
                <strong>I hereby certify authorization:</strong> This target is a locally hosted vulnerable practice environment (<code className="text-[#55C7E8]">http://localhost:8001</code>) or approved staging asset. All automated probes, AST inspections, and sandboxed validations are strictly bounded by AegisOne Scope Guard.
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-2">
            <Link
              to="/console"
              className="px-4 py-2.5 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-300 rounded-lg text-xs font-medium transition-colors"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={loading || !authorizedConfirmation}
              className="px-6 py-2.5 bg-[#F20D32] hover:bg-[#8E0924] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F20D32]/25 transition-all disabled:opacity-40 flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Initializing Scan...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch Assessment</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ScanConfigPage;
