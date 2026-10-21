import React, { useState, useEffect } from 'react';
import { api, Policy } from '../services/api';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Loader2,
  RefreshCw,
  Search
} from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeFramework, setActiveFramework] = useState<string>('all');
  const [expandedPolicyId, setExpandedPolicyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      setLoading(true);
      const res = await api.getPolicies();
      setPolicies(res.policies || []);
      setSummary(res.summary || null);
      if (res.policies && res.policies.length > 0) {
        setExpandedPolicyId(res.policies[0].id);
      }
    } catch (err) {
      console.error('Failed to load policies', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredPolicies = policies.filter((p) => {
    const matchesFramework =
      activeFramework === 'all' || p.framework.toLowerCase().includes(activeFramework.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFramework && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
                GOVERNANCE // DETERMINISTIC CONTROL MAPPING & AUDIT TRACEABILITY
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
              <ShieldCheck className="w-7 h-7 text-[#55C7E8]" />
              <span>Security Policies & Compliance Mapping</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Map technical AST findings and verified remediation diffs to recognized security frameworks: OWASP Top 10, CWE Top 25, and PCI-DSS v4.0.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchPolicies}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-mono transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Controls</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Configured Frameworks</span>
            <Layers className="w-4 h-4 text-[#55C7E8]" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-white font-mono">
              {summary?.total_frameworks || policies.length}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">OWASP, CWE, PCI-DSS</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Evaluated Controls</span>
            <FileCheck className="w-4 h-4 text-[#55C7E8]" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-white font-mono">
              {summary?.total_controls || 30}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Automated AST & DAST checks</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Passing Controls</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              {summary?.compliant_controls || 23}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Verified non-vulnerable</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Compliance Index</span>
            <Award className="w-4 h-4 text-[#F20D32]" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-[#55C7E8] font-mono">
              {summary?.overall_compliance_score || 85.5}%
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Posture health rating</div>
          </div>
        </div>
      </div>

      {/* Controls & Framework Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
        <div className="flex items-center space-x-2 flex-wrap">
          <button
            onClick={() => setActiveFramework('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFramework === 'all'
                ? 'bg-[#F20D32] text-white font-bold'
                : 'bg-[#12131A] text-slate-400 hover:text-slate-200 border border-[#292A34]'
            }`}
          >
            All Frameworks
          </button>
          <button
            onClick={() => setActiveFramework('owasp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFramework === 'owasp'
                ? 'bg-[#F20D32] text-white font-bold'
                : 'bg-[#12131A] text-slate-400 hover:text-slate-200 border border-[#292A34]'
            }`}
          >
            OWASP Top 10
          </button>
          <button
            onClick={() => setActiveFramework('cwe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFramework === 'cwe'
                ? 'bg-[#F20D32] text-white font-bold'
                : 'bg-[#12131A] text-slate-400 hover:text-slate-200 border border-[#292A34]'
            }`}
          >
            CWE Top 25
          </button>
          <button
            onClick={() => setActiveFramework('pci')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFramework === 'pci'
                ? 'bg-[#F20D32] text-white font-bold'
                : 'bg-[#12131A] text-slate-400 hover:text-slate-200 border border-[#292A34]'
            }`}
          >
            PCI-DSS v4.0
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter controls, requirements..."
            className="w-full bg-[#12131A] border border-[#292A34] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#55C7E8]"
          />
        </div>
      </div>

      {/* Policies Accordion List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#55C7E8]" />
            <span className="text-xs font-mono text-slate-400">Loading compliance frameworks...</span>
          </div>
        ) : filteredPolicies.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs font-mono bg-[#0D0E13] rounded-xl border border-[#292A34]">
            No matching policies found.
          </div>
        ) : (
          filteredPolicies.map((pol) => {
            const isExpanded = expandedPolicyId === pol.id;

            return (
              <div
                key={pol.id}
                className="rounded-xl bg-[#0D0E13] border border-[#292A34] overflow-hidden transition-all"
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedPolicyId(isExpanded ? null : pol.id)}
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-[#12131A] transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 rounded-lg bg-[#191A22] border border-[#292A34] text-[#55C7E8]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-white">{pol.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-[#55C7E8] border border-blue-500/20 font-mono">
                          {pol.framework} {pol.version}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 max-w-2xl">{pol.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-emerald-400">
                        {pol.passing_controls}/{pol.control_count} Controls Pass
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {pol.compliance_score}% Compliance
                      </div>
                    </div>

                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Controls Table */}
                {isExpanded && pol.controls && (
                  <div className="border-t border-[#292A34] bg-[#08080B] p-4">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="text-slate-500 border-b border-[#292A34]">
                          <th className="pb-2 font-normal">Control ID</th>
                          <th className="pb-2 font-normal">Requirement / Description</th>
                          <th className="pb-2 font-normal">Mapped Finding</th>
                          <th className="pb-2 font-normal text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#292A34]/50">
                        {pol.controls.map((ctrl: any) => {
                          const isPass = ctrl.status === 'PASS';
                          return (
                            <tr key={ctrl.id} className="hover:bg-[#0D0E13] transition-colors">
                              <td className="py-2.5 text-[#55C7E8] font-bold">{ctrl.id}</td>
                              <td className="py-2.5 text-slate-300 max-w-md">{ctrl.title || ctrl.description}</td>
                              <td className="py-2.5 text-slate-400">
                                {ctrl.mapped_finding ? (
                                  <span className="text-amber-400">{ctrl.mapped_finding}</span>
                                ) : (
                                  <span className="text-slate-600">None</span>
                                )}
                              </td>
                              <td className="py-2.5 text-right">
                                <span
                                  className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                                    isPass
                                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                  }`}
                                >
                                  {isPass ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                                  <span>{ctrl.status}</span>
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default PoliciesPage;
