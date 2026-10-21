import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bug,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Brain,
  Wrench,
  Share2,
  Lock,
  Code
} from 'lucide-react';
import { api } from '../services/api';
import { Finding, Evidence } from '../types';

export const FindingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [findings, setFindings] = useState<Finding[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [evidenceMap, setEvidenceMap] = useState<Record<string, Evidence[]>>({});
  const [aiAnalysisMap, setAiAnalysisMap] = useState<Record<string, any>>({});
  const [riskDetailMap, setRiskDetailMap] = useState<Record<string, any>>({});
  const [loadingAI, setLoadingAI] = useState<string | null>(null);

  useEffect(() => {
    loadFindings();
  }, []);

  const loadFindings = async () => {
    try {
      const data = await api.getFindings();
      setFindings(data);
      if (data.length > 0) {
        setExpandedId(data[0].id);
        fetchFindingDetails(data[0].id);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFindingDetails = async (id: string) => {
    try {
      const ev = await api.getEvidence(id);
      setEvidenceMap(prev => ({ ...prev, [id]: ev }));
      const risk = await api.getRiskDetail(id);
      setRiskDetailMap(prev => ({ ...prev, [id]: risk }));
    } catch (e) {
      console.error(e);
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      fetchFindingDetails(id);
    }
  };

  const handleAskAI = async (id: string) => {
    setLoadingAI(id);
    try {
      const res = await api.analyzeFinding(id);
      setAiAnalysisMap(prev => ({ ...prev, [id]: res }));
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAI(null);
    }
  };

  const getSeverityBadge = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">CRITICAL</span>;
      case 'VERY_HIGH':
      case 'HIGH':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">HIGH</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">MODERATE</span>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Bug className="w-5 h-5 text-rose-400" />
            <span>Vulnerability Findings Explorer</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Normalized security evidence mapped to Knowledge Graph ontology and contextual risk scores.
          </p>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Total Detected: <strong className="text-white">{findings.length}</strong>
        </div>
      </div>

      {/* Findings List */}
      <div className="space-y-4">
        {findings.map((finding) => {
          const isExpanded = expandedId === finding.id;
          const evList = evidenceMap[finding.id] || [];
          const aiAnalysis = aiAnalysisMap[finding.id];
          const riskDetail = riskDetailMap[finding.id];

          return (
            <div
              key={finding.id}
              className={`bg-slate-900/80 border rounded-xl overflow-hidden transition-all duration-200 ${
                isExpanded ? 'border-sky-500/40 shadow-lg shadow-sky-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Header Row */}
              <div
                onClick={() => toggleExpand(finding.id)}
                className="p-4 cursor-pointer flex items-center justify-between select-none"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-base font-bold font-mono text-rose-400">{finding.contextual_risk_score}</span>
                    <span className="text-[9px] text-slate-400 uppercase font-mono">RISK</span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                        {finding.title}
                      </h3>
                      {getSeverityBadge(finding.risk_level || 'MEDIUM')}
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                        {finding.cwe_id}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                      <span>Endpoint: <code className="text-sky-300">{finding.affected_endpoint}</code></span>
                      <span>Parameter: <code className="text-amber-300">{finding.affected_parameter}</code></span>
                      <span>Status: <strong className="text-slate-200 uppercase">{finding.status}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-slate-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 space-y-4 text-xs">
                  {/* Vulnerability Description */}
                  <div>
                    <span className="font-semibold text-slate-300 block mb-1">Vulnerability Description:</span>
                    <p className="text-slate-400 leading-relaxed">{finding.description}</p>
                  </div>

                  {/* Tripartite Evidence & AI Section */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Layer 1: Confirmed Evidence */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5">
                      <div className="flex items-center space-x-2 text-sky-400 mb-2 font-semibold">
                        <Code className="w-3.5 h-3.5" />
                        <span>LAYER 1: CONFIRMED TOOL EVIDENCE</span>
                      </div>
                      {evList.length > 0 ? (
                        evList.map((ev, i) => (
                          <div key={i} className="space-y-1 font-mono text-[11px] text-slate-300">
                            <div><span className="text-slate-400">Scanner:</span> {ev.tool_name} (Confidence: {Math.round(ev.confidence * 100)}%)</div>
                            <div><span className="text-slate-400">Payload:</span> <code className="text-rose-400 bg-slate-950 px-1 rounded">{ev.raw_payload}</code></div>
                          </div>
                        ))
                      ) : (
                        <span className="text-slate-400">Evidence normalized from AST static rules.</span>
                      )}
                    </div>

                    {/* Layer 2: Contextual Risk Breakdown */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5">
                      <div className="flex items-center space-x-2 text-amber-400 mb-2 font-semibold">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>LAYER 2: CONTEXTUAL RISK BREAKDOWN</span>
                      </div>
                      {riskDetail ? (
                        <div className="space-y-1.5">
                          {Object.entries(riskDetail.breakdown).map(([k, v]) => (
                            <div key={k} className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">{k}:</span>
                              <span className="font-mono text-slate-200 font-semibold">{String(v)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-400">Calculating factor breakdown...</span>
                      )}
                    </div>
                  </div>

                  {/* Layer 3: AI Security Analyst Reasoning */}
                  <div className="bg-slate-900/90 border border-sky-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-indigo-400 font-semibold">
                        <Brain className="w-4 h-4" />
                        <span>LAYER 3: EXPLAINABLE AI SECURITY ANALYST</span>
                      </div>
                      {!aiAnalysis && (
                        <button
                          onClick={() => handleAskAI(finding.id)}
                          disabled={loadingAI === finding.id}
                          className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-[11px] px-2.5 py-1 rounded transition-colors disabled:opacity-50"
                        >
                          {loadingAI === finding.id ? 'Reasoning...' : 'Request GraphRAG Analysis'}
                        </button>
                      )}
                    </div>

                    {aiAnalysis ? (
                      <div className="space-y-2.5 text-slate-300">
                        <div>
                          <strong className="text-slate-200 block mb-0.5">Why This Matters (Contextual Threat):</strong>
                          <p className="text-slate-400 leading-relaxed">{aiAnalysis.ai_interpretation}</p>
                        </div>
                        <div>
                          <strong className="text-slate-200 block mb-0.5">Recommended Secure Action:</strong>
                          <p className="text-emerald-400 font-mono text-[11px]">{aiAnalysis.recommended_fix}</p>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Graph Reference: {aiAnalysis.graph_context}
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-400 italic">
                        Click "Request GraphRAG Analysis" to query the Security Knowledge Graph and produce an explainable threat assessment.
                      </p>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      onClick={() => navigate('/knowledge-graph')}
                      className="flex items-center space-x-1.5 text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>Trace in Knowledge Graph</span>
                    </button>
                    <button
                      onClick={() => navigate('/remediation')}
                      className="flex items-center space-x-1.5 text-xs bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium px-3.5 py-1.5 rounded-lg shadow-sm transition-all"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>View Code Diff & Dispatch to Sandbox</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
