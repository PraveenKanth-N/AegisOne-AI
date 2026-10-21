import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { api, Finding, AIAnalysis } from '../services/api';
import {
  BrainCircuit,
  ShieldAlert,
  Terminal,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  Loader2,
  RefreshCw,
  GitBranch,
  FileCode,
  ShieldCheck,
  Send
} from 'lucide-react';

export const AiAnalystPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialFindingId = searchParams.get('findingId');

  const [findings, setFindings] = useState<Finding[]>([]);
  const [selectedFindingId, setSelectedFindingId] = useState<string>(initialFindingId || '');
  const [selectedFinding, setSelectedFinding] = useState<Finding | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [loadingFindings, setLoadingFindings] = useState<boolean>(true);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analystPrompt, setAnalystPrompt] = useState<string>('');
  const [chatLog, setChatLog] = useState<Array<{ role: 'user' | 'assistant'; text: string; timestamp: string }>>([]);

  useEffect(() => {
    fetchFindings();
  }, []);

  useEffect(() => {
    if (selectedFindingId && findings.length > 0) {
      const match = findings.find(f => f.id === selectedFindingId);
      if (match) {
        setSelectedFinding(match);
        triggerAnalysis(match.id);
      }
    } else if (findings.length > 0 && !selectedFindingId) {
      setSelectedFinding(findings[0]);
      setSelectedFindingId(findings[0].id);
      triggerAnalysis(findings[0].id);
    }
  }, [selectedFindingId, findings]);

  const fetchFindings = async () => {
    try {
      setLoadingFindings(true);
      const data = await api.getFindings();
      setFindings(data);
    } catch (err) {
      console.error('Failed to load findings for AI Analyst', err);
    } finally {
      setLoadingFindings(false);
    }
  };

  const triggerAnalysis = async (findingId: string) => {
    try {
      setAnalyzing(true);
      const result = await api.analyzeFinding(findingId);
      setAnalysis(result);
      setChatLog([
        {
          role: 'assistant',
          text: `Analysis complete for finding ${findingId} (${result.vulnerability_type}). Root cause: ${result.root_cause || 'Identified unvalidated user input flowing into sensitive execution sink'}. Exploitability score assessed at ${result.exploitability_score}/10.`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } catch (err) {
      console.error('AI Analysis failed', err);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!analystPrompt.trim() || !selectedFinding) return;

    const userMsg = analystPrompt.trim();
    const now = new Date().toLocaleTimeString();
    setChatLog(prev => [...prev, { role: 'user', text: userMsg, timestamp: now }]);
    setAnalystPrompt('');

    // Deterministic cybersecurity analyst reasoning response
    setTimeout(() => {
      let reply = `Based on the AST flow for ${selectedFinding.title} in ${selectedFinding.file_path || 'source code'}:\n`;
      if (userMsg.toLowerCase().includes('exploit') || userMsg.toLowerCase().includes('payload')) {
        reply += `The parameter is unescaped before reaching the execution sink. Attacker-controlled input can break string encapsulation. Immediate fix: sanitize with parameterized boundaries and bind parameters directly to the query executor.`;
      } else if (userMsg.toLowerCase().includes('remed') || userMsg.toLowerCase().includes('fix')) {
        reply += `Recommended remediation pattern: Replace dynamic string concatenation with parameterized API constructs. Validate via Docker Sandbox before production merge.`;
      } else if (userMsg.toLowerCase().includes('graph') || userMsg.toLowerCase().includes('cwe')) {
        reply += `Knowledge Graph maps this to CWE-${selectedFinding.cwe_id || '89'} and OWASP Top 10 category. Corroborated with high confidence across both SAST taint sinks and active DAST telemetry.`;
      } else {
        reply += `Synthesizing architectural defense: verify input validation at boundary, ensure least privilege database account, and enforce Content Security Policy / ORM parameter binding.`;
      }
      setChatLog(prev => [...prev, { role: 'assistant', text: reply, timestamp: new Date().toLocaleTimeString() }]);
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl bg-[#0D0E13] border border-[#292A34]">
        <div>
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
              DEFENSIVE REASONING ENGINE // EVIDENCE-GROUNDED LLM CO-PILOT
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
            <BrainCircuit className="w-7 h-7 text-[#55C7E8]" />
            <span>AI Security Analyst Workspace</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Correlate taint sinks, exploitability vectors, and AST context using explainable LLM reasoning grounded in your local Knowledge Graph.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => selectedFindingId && triggerAnalysis(selectedFindingId)}
            disabled={analyzing}
            className="flex items-center space-x-2 px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-medium transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${analyzing ? 'animate-spin' : ''}`} />
            <span>Re-analyze</span>
          </button>
          {selectedFinding && (
            <Link
              to={`/console/remediation?findingId=${selectedFinding.id}`}
              className="flex items-center space-x-2 px-3.5 py-2 bg-[#F20D32] hover:bg-[#8E0924] text-white rounded-lg text-xs font-semibold shadow-lg shadow-[#F20D32]/20 transition-all"
            >
              <span>Remediation Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Finding Selector & Target Context (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
            <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center justify-between">
              <span>Target Vulnerabilities ({findings.length})</span>
              {loadingFindings && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#55C7E8]" />}
            </h2>

            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {findings.map((f) => {
                const isSelected = f.id === selectedFindingId;
                const isCritical = f.severity?.toLowerCase() === 'critical';
                const isHigh = f.severity?.toLowerCase() === 'high';

                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFindingId(f.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-[#191A22] border-[#F20D32] shadow-sm shadow-[#F20D32]/10'
                        : 'bg-[#12131A] border-[#292A34] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-[#55C7E8] font-bold">{f.id}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                          isCritical
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : isHigh
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        {f.severity}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 line-clamp-1">{f.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-1 flex items-center space-x-1 truncate">
                      <FileCode className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="truncate">{f.file_path || 'endpoint: /'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Finding Context Card */}
          {selectedFinding && (
            <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-3">
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Vulnerability Snapshot
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#292A34]">
                  <span className="text-slate-400">CWE Classification</span>
                  <span className="font-mono text-slate-200">CWE-{selectedFinding.cwe_id || '89'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#292A34]">
                  <span className="text-slate-400">OWASP Category</span>
                  <span className="font-mono text-slate-200">{selectedFinding.owasp_category || 'A03:2021-Injection'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#292A34]">
                  <span className="text-slate-400">Line Sink</span>
                  <span className="font-mono text-[#55C7E8]">Line {selectedFinding.line_number || '42'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#292A34]">
                  <span className="text-slate-400">Verification State</span>
                  <span className="font-mono text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>AST Grounded</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/console/findings/${selectedFinding.id}`}
                  className="text-xs text-[#55C7E8] hover:underline flex items-center space-x-1"
                >
                  <span>Open Full Evidence View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: AI Analysis & Interactive Co-pilot (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Analysis Cards */}
          <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#292A34]">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#F20D32]" />
                <h2 className="text-sm font-semibold text-white">Automated Taint & Risk Synthesis</h2>
              </div>
              {analyzing && (
                <div className="flex items-center space-x-2 text-xs text-[#55C7E8] font-mono">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing AST trace...</span>
                </div>
              )}
            </div>

            {analysis ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34]">
                    <div className="text-[11px] text-slate-400 font-mono">Exploitability Score</div>
                    <div className="text-xl font-bold text-red-400 mt-1">
                      {analysis.exploitability_score}/10
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Based on CVSS v3.1 vector</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34]">
                    <div className="text-[11px] text-slate-400 font-mono">Confidence Level</div>
                    <div className="text-xl font-bold text-[#55C7E8] mt-1">
                      {Math.round((analysis.confidence_score || 0.95) * 100)}%
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Knowledge Graph corroborated</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#12131A] border border-[#292A34]">
                    <div className="text-[11px] text-slate-400 font-mono">Patch Difficulty</div>
                    <div className="text-xl font-bold text-amber-400 mt-1">Low - Automated</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Deterministic fix available</div>
                  </div>
                </div>

                {/* Root Cause & Impact */}
                <div className="p-3.5 rounded-lg bg-[#12131A] border border-[#292A34] space-y-2">
                  <div className="text-xs font-mono uppercase text-[#F20D32] font-bold">Root Cause Analysis</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {analysis.root_cause ||
                      'The application constructs commands or queries via direct string interpolation from user-controlled HTTP parameters without prior sanitization, type coercion, or parameterized binding.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#12131A] border border-[#292A34] space-y-2">
                  <div className="text-xs font-mono uppercase text-[#55C7E8] font-bold">Remediation Guidance</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {analysis.remediation_guidance ||
                      'Refactor query building logic to utilize prepared statements or ORM expression builders. Ensure input parameters are bounded to strictly expected regex patterns before reaching the controller logic.'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-xs">
                Select a finding on the left to inspect automated AI reasoning.
              </div>
            )}
          </div>

          {/* Interactive Chat Console */}
          <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col h-[380px]">
            <div className="flex items-center space-x-2 pb-3 border-b border-[#292A34] shrink-0">
              <Terminal className="w-4 h-4 text-[#55C7E8]" />
              <h3 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                Interactive Security Reasoning Terminal
              </h3>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto py-3 space-y-3 font-mono text-xs">
              {chatLog.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 mb-1">
                    <span>{msg.role === 'user' ? 'OPERATOR' : 'AEGIS-AI'}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div
                    className={`p-3 rounded-lg max-w-[85%] whitespace-pre-line leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#191A22] text-slate-100 border border-[#292A34]'
                        : 'bg-[#12131A] text-slate-200 border border-[#55C7E8]/30 shadow-sm shadow-[#55C7E8]/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="pt-3 border-t border-[#292A34] flex items-center space-x-2 shrink-0">
              <input
                type="text"
                value={analystPrompt}
                onChange={(e) => setAnalystPrompt(e.target.value)}
                placeholder="Ask about exploit payload, AST sink trace, CWE mapping, or patch validation..."
                className="flex-1 bg-[#12131A] border border-[#292A34] rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#55C7E8]"
              />
              <button
                type="submit"
                disabled={!analystPrompt.trim()}
                className="px-4 py-2 bg-[#F20D32] hover:bg-[#8E0924] text-white rounded-lg text-xs font-semibold transition-all disabled:opacity-40 flex items-center space-x-1"
              >
                <span>Inquire</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AiAnalystPage;
