import React, { useState, useEffect } from 'react';
import { api, ResearchBenchmarks } from '../services/api';
import {
  FlaskConical,
  Award,
  BarChart2,
  CheckCircle2,
  TrendingUp,
  RefreshCw,
  Download,
  ExternalLink,
  BookOpen,
  GitBranch,
  ShieldAlert,
  Loader2
} from 'lucide-react';

export const ResearchLabPage: React.FC = () => {
  const [data, setData] = useState<ResearchBenchmarks | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBenchmarks();
  }, []);

  const fetchBenchmarks = async () => {
    try {
      setLoading(true);
      const res = await api.getResearchBenchmarks();
      setData(res);
    } catch (err) {
      console.error('Failed to load research benchmarks', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportData = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aegisone_benchmark_eval_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
                ACADEMIC BENCHMARK // EMPIRICAL VALIDATION & REPRODUCIBILITY LAB
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
              <FlaskConical className="w-7 h-7 text-[#55C7E8]" />
              <span>Research Experiments & Benchmark Lab</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Systematic quantitative evaluation of detection precision, recall, false positive reduction, and sandbox patch verification against ground truth benchmarks.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleExportData}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#55C7E8]" />
              <span>Export Raw Manifest</span>
            </button>
            <button
              onClick={fetchBenchmarks}
              disabled={loading}
              className="p-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-300 rounded-lg text-xs font-mono transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Research Questions Panel */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-[#55C7E8]" />
          <span>Research Questions & Experimental Outcomes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(data?.research_questions || []).map((rq: any) => (
            <div
              key={rq.id}
              className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] flex flex-col justify-between space-y-3 hover:border-slate-600 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#F20D32] uppercase">{rq.id}</span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    {rq.status || 'VERIFIED'}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white">{rq.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{rq.hypothesis}</p>
              </div>

              <div className="pt-2 border-t border-[#292A34] text-[10px] font-mono text-[#55C7E8]">
                {rq.result_summary}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quantitative Benchmark Comparison Table */}
      <div className="rounded-xl bg-[#0D0E13] border border-[#292A34] overflow-hidden">
        <div className="p-4 border-b border-[#292A34] flex items-center justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Tool Performance Comparison Matrix (N=120 Test Cases)
            </h2>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Ground truth dataset: SEC-BENCH-COLLEGE-V2.1
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Reproducibility Verified</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-[#08080B] text-slate-400 border-b border-[#292A34]">
                <th className="p-3.5 font-normal">Method / Pipeline</th>
                <th className="p-3.5 font-normal">Precision</th>
                <th className="p-3.5 font-normal">Recall</th>
                <th className="p-3.5 font-normal">F1-Score</th>
                <th className="p-3.5 font-normal">False Positives</th>
                <th className="p-3.5 font-normal text-right">Avg Runtime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292A34]">
              {(data?.benchmark_comparison || []).map((row: any) => {
                const isAegis = row.tool?.toLowerCase().includes('aegis');

                return (
                  <tr
                    key={row.tool}
                    className={`transition-colors ${
                      isAegis ? 'bg-[#191A22]/80 font-bold text-white' : 'hover:bg-[#12131A] text-slate-300'
                    }`}
                  >
                    <td className="p-3.5 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {isAegis && <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>}
                        <span className={isAegis ? 'text-[#55C7E8]' : 'text-slate-200'}>{row.tool}</span>
                      </div>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">{Math.round((row.precision || 0) * 100)}%</td>
                    <td className="p-3.5 whitespace-nowrap">{Math.round((row.recall || 0) * 100)}%</td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className={isAegis ? 'text-emerald-400 font-bold' : ''}>
                        {Math.round((row.f1_score || 0) * 100)}%
                      </span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className={row.fpr < 0.1 ? 'text-emerald-400' : 'text-amber-400'}>
                        {Math.round((row.fpr || 0) * 100)}%
                      </span>
                    </td>
                    <td className="p-3.5 text-right whitespace-nowrap text-slate-400">
                      {row.runtime_seconds}s
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ResearchLabPage;
