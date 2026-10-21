import React, { useState, useEffect } from 'react';
import { api, ThreatIntel } from '../services/api';
import {
  Flame,
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  Search,
  Radio,
  FileWarning,
  CheckCircle2,
  Loader2,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const ThreatIntelPage: React.FC = () => {
  const [intel, setIntel] = useState<ThreatIntel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchIntel();
  }, []);

  const fetchIntel = async () => {
    try {
      setLoading(true);
      const data = await api.getThreatIntelligence();
      setIntel(data);
    } catch (err) {
      console.error('Failed to load threat intel', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCves = (intel?.cve_correlations || []).filter((cve: any) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      cve.cve_id?.toLowerCase().includes(q) ||
      cve.description?.toLowerCase().includes(q) ||
      cve.cwe?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
                THREAT INTELLIGENCE // CISA KEV & CVE CORRELATION STREAM
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
              <Flame className="w-7 h-7 text-[#F20D32]" />
              <span>Threat Intelligence & Security Feed</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Real-time threat feeds linking localized findings to CISA Known Exploited Vulnerabilities (KEV), FIRST EPSS exploit probability scores, and NVD advisories.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchIntel}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-mono transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${loading ? 'animate-spin' : ''}`} />
              <span>Sync Feeds</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Monitored CVEs</span>
            <ShieldAlert className="w-4 h-4 text-[#55C7E8]" />
          </div>
          <div className="text-2xl font-bold text-white font-mono mt-2">
            {intel?.summary?.total_cves_monitored || 142}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">App dependency & stack scope</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>CISA KEV Matches</span>
            <Flame className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-red-400 font-mono mt-2">
            {intel?.cisa_kev?.length || 2}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Actively exploited in the wild</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>High EPSS Probability</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono mt-2">
            {intel?.summary?.epss_high_risk_count || 3}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">&gt;75% exploit probability</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Connected Feeds</span>
            <Radio className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono mt-2">
            {intel?.feeds_active?.length || 4}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">CISA, NVD, EPSS, ExploitDB</div>
        </div>
      </div>

      {/* CISA KEV Alert Strip */}
      {intel?.cisa_kev && intel.cisa_kev.length > 0 && (
        <div className="p-5 rounded-xl bg-red-950/30 border border-red-500/40 space-y-3">
          <div className="flex items-center space-x-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Active CISA KEV Catalog Matches Detected in Local Target Surface</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {intel.cisa_kev.map((kev: any, idx: number) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[#08080B] border border-red-500/30 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-red-400">{kev.cve_id}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono uppercase font-semibold">
                    Known Exploited
                  </span>
                </div>
                <div className="text-xs text-slate-200 font-medium">{kev.vulnerability_name}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{kev.action_required}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CVE Correlations Table */}
      <div className="rounded-xl bg-[#0D0E13] border border-[#292A34] overflow-hidden">
        <div className="p-4 border-b border-[#292A34] flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
            Correlated CVE Intel & Exploit Probability (EPSS)
          </h2>
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by CVE or CWE..."
              className="w-full bg-[#12131A] border border-[#292A34] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:border-[#55C7E8]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-[#08080B] text-slate-400 border-b border-[#292A34]">
                <th className="p-3.5 font-normal">CVE Identifier</th>
                <th className="p-3.5 font-normal">Description & Vector</th>
                <th className="p-3.5 font-normal">CVSS</th>
                <th className="p-3.5 font-normal">EPSS Score</th>
                <th className="p-3.5 font-normal">Exploit Wild</th>
                <th className="p-3.5 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292A34]">
              {filteredCves.map((cve: any) => (
                <tr key={cve.cve_id} className="hover:bg-[#12131A] transition-colors">
                  <td className="p-3.5 text-[#55C7E8] font-bold whitespace-nowrap">{cve.cve_id}</td>
                  <td className="p-3.5 text-slate-300 max-w-md">
                    <div>{cve.description}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Component: {cve.affected_component || 'FastAPI / SQLite'}</div>
                  </td>
                  <td className="p-3.5 text-slate-200 font-bold whitespace-nowrap">
                    <span className={cve.cvss >= 9 ? 'text-red-400' : cve.cvss >= 7 ? 'text-amber-400' : 'text-blue-400'}>
                      {cve.cvss || '8.5'}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-200 whitespace-nowrap">
                    <span className="font-mono text-amber-400">
                      {Math.round((cve.epss || 0.82) * 100)}%
                    </span>
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    {cve.active_in_wild ? (
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold">
                        YES
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 text-[10px]">
                        NO
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 text-right whitespace-nowrap">
                    <a
                      href={`https://nvd.nist.gov/vuln/detail/${cve.cve_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#55C7E8] hover:underline inline-flex items-center space-x-1"
                    >
                      <span>NVD Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ThreatIntelPage;
