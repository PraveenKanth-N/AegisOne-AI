import React from 'react';
import { GitCompare, ShieldCheck, ShieldAlert, CheckCircle2, ArrowRight, TrendingDown } from 'lucide-react';

export const ComparisonPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <GitCompare className="w-5 h-5 text-sky-400" />
            <span>Before vs. After Security Posture Comparison</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Empirical verification comparing application baseline against sandbox-validated remediation.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono font-semibold">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>Risk Score Reduced: -37.0 Points</span>
        </div>
      </div>

      {/* Side-by-Side Comparison Columns */}
      <div className="grid grid-cols-2 gap-6">
        {/* BEFORE Column */}
        <div className="bg-slate-900/80 border border-rose-500/30 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <div className="flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">BEFORE REMEDIATION (BASELINE)</h2>
            </div>
            <span className="text-xs font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-bold">HIGH RISK</span>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Contextual Risk Score:</span>
              <span className="text-xl font-bold font-mono text-rose-400">87.0 / 100</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Open Critical Vulnerabilities:</span>
              <span className="text-base font-bold font-mono text-rose-400">3 Flaws</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Target Database Exposure:</span>
              <span className="text-xs font-mono text-rose-400">Unrestricted SQLi (CWE-89)</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Admin Authentication:</span>
              <span className="text-xs font-mono text-rose-400">Hardcoded Static Password</span>
            </div>
          </div>
        </div>

        {/* AFTER Column */}
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">AFTER VALIDATED REMEDIATION</h2>
            </div>
            <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">SECURE POSTURE</span>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Contextual Risk Score:</span>
              <span className="text-xl font-bold font-mono text-emerald-400">50.0 / 100</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Vulnerabilities Resolved:</span>
              <span className="text-base font-bold font-mono text-emerald-400">1 Validated Fix</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Regression Tests Passed:</span>
              <span className="text-xs font-mono text-emerald-400">18/18 Tests (0 Broken)</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Secondary Security Re-Scan:</span>
              <span className="text-xs font-mono text-emerald-400">0 New Flaws Introduced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
