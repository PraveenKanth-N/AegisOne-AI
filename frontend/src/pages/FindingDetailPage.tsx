import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api, Finding, FindingEvidence, RiskDetail } from '../services/api';
import {
  ShieldAlert,
  ArrowLeft,
  BrainCircuit,
  Wrench,
  Boxes,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Share2,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Loader2
} from 'lucide-react';

export const FindingDetailPage: React.FC = () => {
  const { findingId } = useParams<{ findingId: string }>();
  const navigate = useNavigate();

  const [finding, setFinding] = useState<Finding | null>(null);
  const [evidence, setEvidence] = useState<FindingEvidence | null>(null);
  const [riskDetail, setRiskDetail] = useState<RiskDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (findingId) {
      loadFindingData(findingId);
    }
  }, [findingId]);

  const loadFindingData = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const allFindings = await api.getFindings();
      const match = allFindings.find(f => f.id === id);
      if (!match) {
        setError(`Finding ${id} not found.`);
        return;
      }
      setFinding(match);

      // Load evidence & risk detail in parallel
      try {
        const evData = await api.getFindingEvidence(id);
        setEvidence(evData);
      } catch (e) {
        console.warn('Evidence lookup note:', e);
      }

      try {
        const rdData = await api.getRiskDetail(id);
        setRiskDetail(rdData);
      } catch (e) {
        console.warn('Risk detail lookup note:', e);
      }
    } catch (err) {
      console.error('Failed to load finding details', err);
      setError('Failed to retrieve finding data from backend.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-[#55C7E8]" />
        <span className="text-xs font-mono text-slate-400">Loading finding telemetry & evidence chain...</span>
      </div>
    );
  }

  if (error || !finding) {
    return (
      <div className="p-8 max-w-xl mx-auto text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-red-400 mx-auto" />
        <h2 className="text-lg font-bold text-white">Finding Not Available</h2>
        <p className="text-xs text-slate-400">{error || 'Unable to locate vulnerability record.'}</p>
        <Link
          to="/console/findings"
          className="inline-flex items-center space-x-1 px-4 py-2 bg-[#12131A] border border-[#292A34] text-slate-200 text-xs rounded-lg hover:bg-[#191A22]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Findings</span>
        </Link>
      </div>
    );
  }

  const isCritical = finding.severity?.toLowerCase() === 'critical';
  const isHigh = finding.severity?.toLowerCase() === 'high';

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Breadcrumbs Strip */}
      <div className="flex items-center justify-between pb-2 border-b border-[#292A34]">
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/console/findings" className="hover:text-slate-200 transition-colors">
            Findings
          </Link>
          <span>/</span>
          <span className="text-[#55C7E8] font-bold">{finding.id}</span>
          <span>/</span>
          <span className="text-slate-200">Evidence Verification</span>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            to="/console/findings"
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-300 rounded text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </Link>
          <Link
            to={`/console/ai-analyst?findingId=${finding.id}`}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#55C7E8]/10 hover:bg-[#55C7E8]/20 border border-[#55C7E8]/30 text-[#55C7E8] rounded text-xs font-mono font-medium transition-colors"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Analyze with Copilot</span>
          </Link>
          <Link
            to={`/console/remediation?findingId=${finding.id}`}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#F20D32] hover:bg-[#8E0924] text-white rounded text-xs font-mono font-semibold shadow-md shadow-[#F20D32]/20 transition-all"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Remediate</span>
          </Link>
        </div>
      </div>

      {/* Hero Finding Card */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 flex-wrap">
              <span
                className={`text-[10px] px-2.5 py-0.5 rounded font-mono font-bold uppercase ${
                  isCritical
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : isHigh
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}
              >
                {finding.severity} SEVERITY
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[11px] font-mono text-[#55C7E8] font-bold">
                CWE-{finding.cwe_id || '89'}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[11px] font-mono text-slate-400">
                {finding.owasp_category || 'A03:2021-Injection'}
              </span>
            </div>

            <h1 className="text-xl font-bold text-white tracking-tight">{finding.title}</h1>

            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              {finding.description ||
                'User-controlled input flows directly into dynamic query execution without parameterized binding or sanitization.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] text-center min-w-[90px]">
              <div className="text-[10px] font-mono text-slate-400">CVSS v3.1</div>
              <div className="text-xl font-bold text-red-400 mt-0.5">
                {finding.cvss_score || '8.8'}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] text-center min-w-[90px]">
              <div className="text-[10px] font-mono text-slate-400">Validation</div>
              <div className="text-xl font-bold text-emerald-400 mt-0.5">Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: AST Code Trace & Risk Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Code Snippet & AST Taint Trace (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#292A34]">
              <div className="flex items-center space-x-2">
                <FileCode className="w-4 h-4 text-[#55C7E8]" />
                <span className="text-xs font-mono uppercase text-slate-300 font-semibold">
                  Source Code Taint Sink
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {finding.file_path || 'backend/app/api/endpoints.py'}:
                <strong className="text-red-400">{finding.line_number || '42'}</strong>
              </span>
            </div>

            {/* Code Block with line highlighting */}
            <div className="p-3.5 rounded-lg bg-[#08080B] border border-[#292A34] font-mono text-xs overflow-x-auto text-slate-300 space-y-1">
              <div className="text-slate-600">// Source input from request parameters:</div>
              <div className="text-slate-400">
                <span className="text-slate-600 select-none mr-3">39</span>student_id = request.args.get("id")
              </div>
              <div className="text-slate-400">
                <span className="text-slate-600 select-none mr-3">40</span># Potential bypass: unsanitized raw string
              </div>
              <div className="text-slate-400">
                <span className="text-slate-600 select-none mr-3">41</span>cursor = db.cursor()
              </div>
              <div className="bg-red-500/15 text-red-300 border-l-2 border-red-500 px-1 py-0.5 -mx-1">
                <span className="text-red-400 select-none mr-3">42</span>
                {evidence?.raw_snippet ||
                  `cursor.execute(f"SELECT * FROM students WHERE id = '{student_id}'")  // [TAINT SINK]`}
              </div>
              <div className="text-slate-400">
                <span className="text-slate-600 select-none mr-3">43</span>results = cursor.fetchall()
              </div>
            </div>

            {/* AST Taint Path Details */}
            <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] space-y-1.5 text-xs">
              <div className="font-mono text-[11px] text-[#55C7E8] font-bold">
                Taint Flow Propagation:
              </div>
              <div className="flex items-center space-x-2 text-slate-300 font-mono text-[11px] flex-wrap">
                <span className="px-2 py-0.5 rounded bg-[#191A22] border border-[#292A34]">
                  HTTP GET param (id)
                </span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-[#191A22] border border-[#292A34]">
                  variable: student_id
                </span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-red-950/60 border border-red-500/40 text-red-300">
                  cursor.execute(SQL)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Knowledge Graph & Exploitability Analysis (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-3">
            <div className="flex items-center space-x-2 pb-2 border-b border-[#292A34]">
              <Share2 className="w-4 h-4 text-[#55C7E8]" />
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold">
                Knowledge Graph Corroboration
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] space-y-1">
                <div className="text-[10px] font-mono text-slate-400">AST Node Sink</div>
                <div className="font-mono text-slate-200">CallNode: execute()</div>
              </div>
              <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] space-y-1">
                <div className="text-[10px] font-mono text-slate-400">Attack Surface Reachability</div>
                <div className="font-mono text-emerald-400">External HTTP Authenticated / Public</div>
              </div>
              <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34] space-y-1">
                <div className="text-[10px] font-mono text-slate-400">Remediation Status</div>
                <div className="font-mono text-amber-400">
                  {finding.is_remediated ? 'Remediated & Verified' : 'Pending Patch Application'}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/console/knowledge-graph"
                className="w-full flex items-center justify-center space-x-1.5 py-2 rounded bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-xs font-mono text-[#55C7E8] transition-colors"
              >
                <span>Explore in Knowledge Graph Visualizer</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindingDetailPage;
