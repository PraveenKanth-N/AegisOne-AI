import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ComparisonPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getDashboardSummary) {
          const res = await api.getDashboardSummary();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ComparisonPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="max-w-[1440px] mx-auto px-6 py-6 space-y-6">



<section className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest/85 backdrop-blur-md p-6 relative overflow-hidden shadow-2xl">
<div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge tracking-wider bg-primary-container/20 text-primary border border-primary-container/40">
                EMPIRICAL SECURITY EVALUATION
              </span>
<span className="text-outline-variant">·</span>
<span className="text-[11px] font-label-code text-secondary tracking-tight">DETERMINISTIC METRICS</span>
<span className="text-outline-variant">·</span>
<span className="text-[11px] font-label-code text-on-surface-variant/80">BENCHMARK RUN #EVAL-2025-0518</span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Before/After Security Posture &amp; Research Evaluation
            </h1>
<p className="text-body-md font-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              Compare the baseline security state against the validated candidate, inspect evidence changes, and evaluate remediation outcomes without fabricated metrics.
            </p>

<div className="flex flex-wrap items-center gap-2 pt-2">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101015] border border-outline-variant/40 text-label-code font-label-code text-[11px]">
<span className="text-outline font-semibold">BASELINE:</span>
<span className="text-on-surface">SCN-8092</span>
<span className="text-secondary">(sha:d894e77)</span>
</div>
<span className="text-outline-variant">→</span>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101015] border border-outline-variant/40 text-label-code font-label-code text-[11px]">
<span className="text-outline font-semibold">CANDIDATE:</span>
<span className="text-primary font-bold">#P-8902 v2</span>
<span className="text-secondary">(sha256:7bc9029)</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#45D49A]/10 border border-[#45D49A]/30 text-label-code font-label-code text-[11px] text-[#45D49A]">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                SANDBOX RUN: VR-2025-0518-8902 [PASSED]
              </div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 lg:self-start">
<button className="px-4 py-2 rounded text-label-code font-label-code text-[12px] bg-primary-container text-white font-bold hover:bg-inverse-primary transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(242,13,50,0.45)]">
<span className="material-symbols-outlined text-[16px]" >compare</span>
              Compare Security State
            </button>
<button className="px-4 py-2 rounded text-label-code font-label-code text-[12px] border border-outline-variant/40 text-on-surface hover:text-secondary hover:border-secondary transition-all flex items-center justify-center gap-2 bg-surface-container-low">
<span className="material-symbols-outlined text-[16px]" >fact_check</span>
              View Validation Evidence
            </button>
<button className="p-2 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container border border-outline-variant/30 flex items-center justify-center" title="Export Evaluation Report (JSON/CSV)">
<span className="material-symbols-outlined text-[18px]" >ios_share</span>
</button>
</div>
</div>
</section>



<section className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div className="md:col-span-5 p-4 rounded-xl bg-[#101015] border border-outline-variant/30 hover:border-outline-variant/60 transition-all flex flex-col justify-between">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-[10px] font-label-badge uppercase px-2 py-0.5 rounded bg-surface-container-high text-outline">BASELINE FIXTURE</span>
<span className="text-body-md font-headline-sm font-semibold text-on-surface">Scan SCN-8092</span>
</div>
<span className="text-label-code font-label-code text-[11px] text-outline">14:15 UTC</span>
</div>
<div className="grid grid-cols-2 gap-2 text-label-code font-label-code text-[12px] pt-2 border-t border-outline-variant/20">
<div>
<span className="text-outline text-[11px] block">TOTAL FINDINGS</span>
<span className="text-on-surface font-bold text-headline-sm">14</span>
<span className="text-primary text-[11px] ml-1">(7 Critical/High)</span>
</div>
<div>
<span className="text-outline text-[11px] block">AST COVERAGE</span>
<span className="text-secondary font-bold text-headline-sm">94.2%</span>
<span className="text-outline text-[11px] ml-1">Deterministic</span>
</div>
</div>
</div>

<div className="md:col-span-2 flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 text-center">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]" >sync_alt</span>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-secondary tracking-widest uppercase">AST RULES: PySQL-01</span>
<span className="text-[10px] font-body-sm text-outline mt-0.5">Zero probe depth delta</span>
</div>

<div className="md:col-span-5 p-4 rounded-xl bg-[#101015] border border-primary-container/40 hover:border-primary-container transition-all flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-[10px] font-label-badge uppercase px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/30">CANDIDATE v2</span>
<span className="text-body-md font-headline-sm font-semibold text-primary">#P-8902 v2</span>
<span className="text-[10px] font-label-code text-[#45D49A] bg-[#45D49A]/10 px-1.5 py-0.5 rounded">gVisor Validated</span>
</div>
<span className="text-label-code font-label-code text-[11px] text-outline">14:48 UTC</span>
</div>
<div className="grid grid-cols-2 gap-2 text-label-code font-label-code text-[12px] pt-2 border-t border-outline-variant/20">
<div>
<span className="text-outline text-[11px] block">CANDIDATE FINDINGS</span>
<span className="text-on-surface font-bold text-headline-sm">13</span>
<span className="text-[#45D49A] text-[11px] ml-1">(-1 Resolved, 0 New)</span>
</div>
<div>
<span className="text-outline text-[11px] block">AST COVERAGE</span>
<span className="text-secondary font-bold text-headline-sm">94.2%</span>
<span className="text-outline text-[11px] ml-1">Identical Parity</span>
</div>
</div>
</div>
</section>



<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">

<div className="p-4 rounded-xl bg-[#12131A] border border-outline-variant/30 hover:border-[#45D49A]/50 transition-all flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-label-badge font-label-badge text-[10px] tracking-wider uppercase">
<span>FINDINGS COUNT</span>
<span className="text-[#45D49A] flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >trending_down</span> -7.1%
            </span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span className="text-on-surface-variant line-through text-[16px]">14</span>
<span className="text-primary-container text-[14px]">→</span>
<span className="text-[#45D49A] font-bold">13</span>
</div>
</div>
<div className="text-label-code font-label-code text-[11px] text-[#45D49A] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
            -1 Resolved, 0 Injected
          </div>
</div>

<div className="p-4 rounded-xl bg-[#12131A] border border-outline-variant/30 hover:border-[#45D49A]/50 transition-all flex flex-col justify-between shadow-[0_0_14px_rgba(69,212,154,0.06)]">
<div className="flex items-center justify-between text-outline text-label-badge font-label-badge text-[10px] tracking-wider uppercase">
<span>CONTEXTUAL RISK</span>
<span className="text-[#45D49A] flex items-center gap-0.5 font-bold">
<span className="material-symbols-outlined text-[12px]" >arrow_downward</span> -7.4 PTS
            </span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span className="text-on-surface-variant line-through text-[16px]">8.6</span>
<span className="text-primary-container text-[14px]">→</span>
<span className="text-[#45D49A] font-bold">1.2</span>
<span className="text-outline text-[11px]">/ 10</span>
</div>
</div>
<div className="text-label-code font-label-code text-[11px] text-on-surface-variant truncate" title="Exploit Path Decoupled">
            Exploit Path Decoupled
          </div>
</div>

<div className="p-4 rounded-xl bg-[#12131A] border border-outline-variant/30 hover:border-[#45D49A]/50 transition-all flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-label-badge font-label-badge text-[10px] tracking-wider uppercase">
<span>CRITICAL &amp; HIGH</span>
<span className="text-[#45D49A] text-[11px] font-bold">-1 SEV-1</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span className="text-primary line-through text-[16px]">07</span>
<span className="text-primary-container text-[14px]">→</span>
<span className="text-on-surface font-bold">06</span>
</div>
</div>
<div className="text-label-code font-label-code text-[11px] text-[#45D49A] truncate" title="CWE-89 SQLi Neutralized">
            CWE-89 Neutralized
          </div>
</div>

<div className="p-4 rounded-xl bg-[#12131A] border border-outline-variant/30 hover:border-secondary/50 transition-all flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-label-badge font-label-badge text-[10px] tracking-wider uppercase">
<span>AST TAINT SINKS</span>
<span className="text-secondary font-mono text-[11px]">PySQL-01</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span className="text-primary line-through text-[16px]">1 Active</span>
<span className="text-primary-container text-[14px]">→</span>
<span className="text-secondary font-bold">0 Active</span>
</div>
</div>
<div className="text-label-code font-label-code text-[11px] text-secondary truncate" title="Trace #9042 Neutralized in AST">
            Trace #9042 Neutralized
          </div>
</div>

<div className="p-4 rounded-xl bg-[#12131A] border border-outline-variant/30 hover:border-[#45D49A]/50 transition-all flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-label-badge font-label-badge text-[10px] tracking-wider uppercase">
<span>REGRESSION SUITE</span>
<span className="text-[#45D49A] flex items-center gap-1 font-bold">
<span className="material-symbols-outlined text-[13px]" >check_circle</span> 100%
            </span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-[#45D49A] font-bold">
              18 / 18 Passed
            </div>
</div>
<div className="text-label-code font-label-code text-[11px] text-outline truncate">
            0 Regressions · 240ms Rollback
          </div>
</div>
</section>



<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">



<div className="lg:col-span-8 space-y-6">

<div className="p-5 rounded-xl bg-[#12131A] border border-outline-variant/30">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Security Posture Timeline &amp; Trajectory</h3>
<p className="text-body-sm font-body-sm text-outline">Empirical trajectory across historical scans and rollback candidate triggers</p>
</div>

<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex rounded-lg bg-surface-container-lowest p-0.5 border border-outline-variant/30 text-label-code font-label-code text-[11px]">
<button className="px-2.5 py-1 rounded bg-primary-container text-white font-bold">Contextual Risk</button>
<button className="px-2.5 py-1 rounded text-outline hover:text-on-surface">Critical Findings</button>
<button className="px-2.5 py-1 rounded text-outline hover:text-on-surface">Taint Sinks</button>
</div>
<div className="inline-flex rounded bg-surface-container-high px-2 py-1 text-[11px] font-label-code text-on-surface-variant border border-outline-variant/30">
<span>24h View</span>
</div>
</div>
</div>

<div className="mt-4 relative h-64 w-full bg-surface-container-lowest rounded-lg border border-outline-variant/20 p-4 overflow-hidden flex flex-col justify-between">

<div className="absolute inset-0 grid grid-rows-4 w-full h-full pointer-events-none opacity-20">
<div className="border-b border-outline"></div>
<div className="border-b border-outline"></div>
<div className="border-b border-outline"></div>
<div></div>
</div>

<svg className="absolute inset-0 w-full h-full p-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 200">
<defs>
<linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F20D32" stop-opacity="0.35"></stop>
<stop offset="60%" stop-color="#55C7E8" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#45D49A" stop-opacity="0.0"></stop>
</linearGradient>
</defs>

<path d="M 50 120 L 220 115 L 380 40 L 460 115 L 650 170 L 650 190 L 50 190 Z" fill="url(#chartGradient)"></path>

<line opacity="0.6" stroke="#45D49A" stroke-dasharray="4 4" stroke-width="1.2" x1="50" x2="650" y1="160" y2="160"></line>

<path d="M 50 120 L 220 115 L 380 40 L 460 115 L 650 170" fill="none" stroke="#F20D32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>


<circle cx="50" cy="120" fill="#12131A" r="4.5" stroke="#F20D32" stroke-width="2"></circle>

<circle cx="220" cy="115" fill="#12131A" r="4.5" stroke="#F20D32" stroke-width="2"></circle>

<circle cx="380" cy="40" fill="#F20D32" r="6" stroke="#FFFFFF" stroke-width="2"></circle>

<circle cx="460" cy="115" fill="#12131A" r="4.5" stroke="#55C7E8" stroke-width="2"></circle>

<circle cx="650" cy="170" fill="#45D49A" r="6" stroke="#FFFFFF" stroke-width="2.5"></circle>
</svg>

<div className="relative z-10 flex justify-between text-[11px] font-label-code text-outline mt-auto pt-2 border-t border-outline-variant/20">
<div>
<span className="text-on-surface font-semibold">SCN-8088</span>
<span className="block text-[10px] text-outline">Risk: 8.2</span>
</div>
<div>
<span className="text-on-surface font-semibold">SCN-8090</span>
<span className="block text-[10px] text-outline">Risk: 8.4</span>
</div>
<div className="text-center">
<span className="text-primary font-bold">SCN-8091 [FAILED #P-8901]</span>
<span className="block text-[10px] text-primary">Spike: 9.8 (Auto-Rollback 238ms)</span>
</div>
<div>
<span className="text-on-surface font-semibold">SCN-8092 (Baseline)</span>
<span className="block text-[10px] text-outline">Risk: 8.6</span>
</div>
<div className="text-right">
<span className="text-[#45D49A] font-bold">CANDIDATE #P-8902 v2</span>
<span className="block text-[10px] text-[#45D49A]">Risk: 1.2 (Decoupled)</span>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between text-[11px] font-label-code text-outline px-1">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
                Target Safe Baseline: Risk Score &lt; 2.0 (Threshold strictly met)
              </span>
<span className="text-secondary font-mono">Rollback latency: 238ms · Zero dirty state</span>
</div>
</div>

<div className="rounded-xl bg-[#12131A] border border-outline-variant/30 overflow-hidden">
<div className="p-5 border-b border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Finding-Level Delta Matrix</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-[#45D49A]/10 text-[#45D49A] border border-[#45D49A]/30">0 REGRESSIONS</span>
</div>
<p className="text-body-sm font-body-sm text-outline">Differential breakdown across static AST rule sweeps and active taint sinks</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<input className="bg-[#08080B] text-label-code font-label-code text-[11px] text-on-surface pl-7 pr-3 py-1.5 rounded border border-outline-variant/30 focus:border-primary-container focus:ring-0 w-44" placeholder="Filter CWE or path..." type="text"/>
<span className="material-symbols-outlined text-[14px] text-outline absolute left-2 top-2" >search</span>
</div>
<button className="px-2.5 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-label-code font-label-code text-[11px] text-on-surface hover:text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" >filter_list</span> All Sinks
                </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/20 bg-surface-container-lowest text-[10px] font-label-badge tracking-wider text-outline uppercase">
<th className="py-3 px-4">Finding &amp; CWE Location</th>
<th className="py-3 px-3">Baseline State</th>
<th className="py-3 px-3">Candidate State</th>
<th className="py-3 px-3">Delta / Class</th>
<th className="py-3 px-3">Verification Hash</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/15 text-body-sm font-body-sm">

<tr className="hover:bg-surface-container-high/30 transition-colors bg-[#45D49A]/[0.02]">
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[#45D49A] text-[16px] mt-0.5" >check_circle</span>
<div>
<div className="font-headline-sm text-on-surface text-[13px] font-semibold flex items-center gap-1.5">
                            CWE-89 SQL Injection
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-label-badge bg-primary-container/20 text-primary">SEV-1</span>
</div>
<div className="text-[11px] font-label-code text-outline mt-0.5 font-mono">
                            UserProfileQuery · /search.py:42
                          </div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="text-[11px] font-label-code text-primary font-semibold">8.6 Critical</div>
<div className="text-[10px] font-label-code text-outline">Taint Sink #9042 Active</div>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-[#45D49A]/20 text-[#45D49A] font-bold border border-[#45D49A]/40">
                        RESOLVED
                      </span>
<div className="text-[10px] font-label-code text-outline mt-0.5">Param Binding</div>
</td>
<td className="py-3.5 px-3">
<span className="text-[#45D49A] font-label-code font-bold text-[12px]">-8.6</span>
<span className="block text-[10px] font-label-code text-[#45D49A]">Neutralized</span>
</td>
<td className="py-3.5 px-3">
<span className="text-secondary font-label-code text-[11px] font-mono hover:underline cursor-pointer">sha256:7bc9029</span>
<div className="text-[9px] text-outline font-label-code">PyTest 18/18 Pass</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded text-label-code font-label-code text-[11px] bg-secondary-container/20 text-secondary border border-secondary-container/40 hover:bg-secondary-container/30 transition-all">
                        View Diff
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5" >report</span>
<div>
<div className="font-headline-sm text-on-surface text-[13px] font-semibold flex items-center gap-1.5">
                            CWE-798 Hardcoded JWT Secret
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-label-badge bg-primary-container/20 text-primary">SEV-1</span>
</div>
<div className="text-[11px] font-label-code text-outline mt-0.5 font-mono">
                            /services/auth.js:14
                          </div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="text-[11px] font-label-code text-primary font-semibold">9.2 Critical</div>
<div className="text-[10px] font-label-code text-outline">Plaintext in Repo</div>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                        UNCHANGED
                      </span>
<div className="text-[10px] font-label-code text-outline mt-0.5">Awaiting KMS Patch</div>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[12px]">0.0</span>
<span className="block text-[10px] font-label-code text-outline">Stationary</span>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[11px] font-mono">sha256:4a11e82</span>
<div className="text-[9px] text-outline font-label-code">Unmodified</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded text-label-code font-label-code text-[11px] border border-outline-variant/30 text-on-surface hover:text-primary transition-all">
                        Investigate
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[#FFB84D] text-[16px] mt-0.5" >pending</span>
<div>
<div className="font-headline-sm text-on-surface text-[13px] font-semibold flex items-center gap-1.5">
                            CWE-79 Stored XSS in Bio Forum
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-label-badge bg-[#FFB84D]/20 text-[#FFB84D]">SEV-2</span>
</div>
<div className="text-[11px] font-label-code text-outline mt-0.5 font-mono">
                            /src/BioView.tsx
                          </div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="text-[11px] font-label-code text-[#FFB84D] font-semibold">6.4 Medium</div>
<div className="text-[10px] font-label-code text-outline">Unsanitized v-html</div>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30">
                        IN SANDBOX
                      </span>
<div className="text-[10px] font-label-code text-outline mt-0.5">Candidate #P-7911</div>
</td>
<td className="py-3.5 px-3">
<span className="text-[#FFB84D] font-label-code text-[12px]">Pending</span>
<span className="block text-[10px] font-label-code text-outline">Queued Worker</span>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[11px] font-mono">sha256:90f12ba</span>
<div className="text-[9px] text-[#FFB84D] font-label-code">Validating AST</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded text-label-code font-label-code text-[11px] border border-outline-variant/30 text-on-surface hover:text-[#FFB84D] transition-all">
                        View Stage
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-outline text-[16px] mt-0.5" >info</span>
<div>
<div className="font-headline-sm text-on-surface text-[13px] font-semibold flex items-center gap-1.5">
                            CWE-319 Cleartext Cookie
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-label-badge bg-surface-container text-outline">SEV-3</span>
</div>
<div className="text-[11px] font-label-code text-outline mt-0.5 font-mono">
                            /nginx/default.conf
                          </div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="text-[11px] font-label-code text-outline font-semibold">3.2 Low</div>
<div className="text-[10px] font-label-code text-outline">Missing Secure flag</div>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                        UNCHANGED
                      </span>
<div className="text-[10px] font-label-code text-outline mt-0.5">Deferred Scope</div>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[12px]">0.0</span>
<span className="block text-[10px] font-label-code text-outline">Stationary</span>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[11px] font-mono">sha256:c023d88</span>
<div className="text-[9px] text-outline font-label-code">Unmodified</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded text-label-code font-label-code text-[11px] border border-outline-variant/30 text-on-surface hover:text-outline transition-all">
                        View Config
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5" >warning</span>
<div>
<div className="font-headline-sm text-on-surface text-[13px] font-semibold flex items-center gap-1.5">
                            CWE-502 Untrusted Deserialization
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-label-badge bg-primary-container/20 text-primary">SEV-1</span>
</div>
<div className="text-[11px] font-label-code text-outline mt-0.5 font-mono">
                            /worker/queue.py:18 (pickle.loads)
                          </div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<div className="text-[11px] font-label-code text-primary font-semibold">8.9 High</div>
<div className="text-[10px] font-label-code text-outline">Insecure Pickling</div>
</td>
<td className="py-3.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                        UNCHANGED
                      </span>
<div className="text-[10px] font-label-code text-outline mt-0.5">Isolated VPC</div>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[12px]">0.0</span>
<span className="block text-[10px] font-label-code text-outline">Stationary</span>
</td>
<td className="py-3.5 px-3">
<span className="text-outline font-label-code text-[11px] font-mono">sha256:e8812c9</span>
<div className="text-[9px] text-outline font-label-code">Unmodified</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded text-label-code font-label-code text-[11px] border border-outline-variant/30 text-on-surface hover:text-primary transition-all">
                        Investigate
                      </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 bg-surface-container-lowest border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-label-code text-outline">
<span className="flex items-center gap-1.5 text-[#45D49A]">
<span className="material-symbols-outlined text-[14px]" >verified</span>
                Zero newly introduced weaknesses detected across AST static re-scan &amp; SQLMap synthetic fuzzing.
              </span>
<span className="text-on-surface-variant/70 font-mono">5 of 14 Findings Displayed</span>
</div>
</div>
</div>



<div className="lg:col-span-4 space-y-6">

<div className="p-5 rounded-xl bg-[#12131A] border border-outline-variant/30">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Contextual Risk Breakdown</h3>
<span className="text-[10px] font-label-badge bg-secondary/10 text-secondary px-2 py-0.5 rounded border border-secondary/30">GRAPH DECOUPLING</span>
</div>
<div className="mt-4 space-y-3.5 text-label-code font-label-code text-[11px]">

<div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<div className="flex justify-between text-outline text-[10px] font-label-badge uppercase mb-1">
<span>EXPLOITABILITY</span>
<span className="text-[#45D49A] font-bold">SEVERED</span>
</div>
<div className="flex items-center justify-between">
<span className="text-primary line-through">HIGH (Taint Reached)</span>
<span className="text-outline-variant">→</span>
<span className="text-[#45D49A] font-bold">NEUTRALIZED (Param Binding)</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<div className="flex justify-between text-outline text-[10px] font-label-badge uppercase mb-1">
<span>ASSET CRITICALITY</span>
<span className="text-outline">STATIC</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span>TIER-1 AUTH DB</span>
<span className="text-outline">(Unchanged Parity)</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<div className="flex justify-between text-outline text-[10px] font-label-badge uppercase mb-1">
<span>EXPOSURE SURFACE</span>
<span className="text-outline">STATIC</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span>PUBLIC INGRESS</span>
<span className="text-outline">(Unchanged Parity)</span>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<div className="flex justify-between text-outline text-[10px] font-label-badge uppercase mb-1">
<span>ATTACK GRAPH PATH</span>
<span className="text-secondary font-bold">BLOCKED HOP 3</span>
</div>
<div className="flex items-center justify-between">
<span className="text-primary line-through">5 HOPS (EXPOSED)</span>
<span className="text-outline-variant">→</span>
<span className="text-secondary font-bold">SEVERED AT HOP 3</span>
</div>
<p className="text-[9px] text-outline mt-1 font-body-sm leading-tight">AST Sink eliminated; query parser cannot reach SQL engine.</p>
</div>

<div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<div className="flex justify-between text-outline text-[10px] font-label-badge uppercase mb-1">
<span>EVIDENCE CONFIDENCE</span>
<span className="text-[#45D49A]">1.0 DETERMINISTIC</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span>PySQL-01 Dialect</span>
<span className="text-[10px] text-[#45D49A]">Zero Heuristics</span>
</div>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-[#12131A] border border-outline-variant/30">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Validation Chain</h3>
<span className="text-[10px] font-label-code text-[#45D49A] flex items-center gap-1 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span> VERIFIED
              </span>
</div>

<div className="mt-4 space-y-3 font-label-code text-[11px] relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30">
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[10px] text-outline shrink-0 z-10">01</span>
<div>
<span className="text-primary font-bold">[DETECTED]</span>
<p className="text-on-surface text-[11px]">SCN-8092 AST Taint Trace #9042</p>
<span className="text-[9px] text-outline">14:15:02 UTC · Source: request.args['q']</span>
</div>
</div>
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[10px] text-outline shrink-0 z-10">02</span>
<div>
<span className="text-secondary font-bold">[ANALYZED]</span>
<p className="text-on-surface text-[11px]">AI Security Analyst Session #SESS-8902-A</p>
<span className="text-[9px] text-outline">14:18:40 UTC · Contextual risk 8.6 assessed</span>
</div>
</div>
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[10px] text-outline shrink-0 z-10">03</span>
<div>
<span className="text-[#FFB84D] font-bold">[REMEDIATED]</span>
<p className="text-on-surface text-[11px]">Candidate #P-8902 (v2 Parameterized Binding)</p>
<span className="text-[9px] text-outline">14:32:11 UTC · Diff: cursor.execute(..., (val,))</span>
</div>
</div>
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[10px] text-outline shrink-0 z-10">04</span>
<div>
<span className="text-[#45D49A] font-bold">[SANDBOX TESTED]</span>
<p className="text-on-surface text-[11px]">Container worker-04 (18/18 PyTest passed)</p>
<span className="text-[9px] text-outline">14:42:05 UTC · 0 regressions · 100% exit code 0</span>
</div>
</div>
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[10px] text-outline shrink-0 z-10">05</span>
<div>
<span className="text-[#45D49A] font-bold">[SECURITY RE-SCAN]</span>
<p className="text-on-surface text-[11px]">Dynamic SQLMap probe (0 SQLi vectors injected)</p>
<span className="text-[9px] text-outline">14:48:32 UTC · 42 synthetic vectors blocked</span>
</div>
</div>
<div className="flex items-start gap-3 relative">
<span className="w-6 h-6 rounded-full bg-[#45D49A]/20 border border-[#45D49A]/50 flex items-center justify-center text-[10px] text-[#45D49A] font-bold shrink-0 z-10">✓</span>
<div>
<span className="text-[#45D49A] font-bold">[DECISION]</span>
<p className="text-[#45D49A] text-[11px] font-bold">READY FOR FORMAL MERGE APPROVAL</p>
<span className="text-[9px] text-outline">14:50:00 UTC · Policy Gate: SEC-GATE-V4 PASSED</span>
</div>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-[#12131A] border border-outline-variant/30">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Prototype Benchmark</h3>
<span className="text-[10px] font-label-code text-outline font-mono">N=42 INJECTIONS</span>
</div>
<div className="mt-4 space-y-2.5 text-label-code font-label-code text-[11px]">
<div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
<span className="text-outline">Auto Sandbox Rollback Rate</span>
<span className="text-[#45D49A] font-bold">100% (e.g. #P-8901 in 238ms)</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
<span className="text-outline">False Positive Reduction</span>
<span className="text-secondary font-bold">-34.2% (Graph Gated)</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-outline-variant/15">
<span className="text-outline">Mean Validation Runtime</span>
<span className="text-on-surface font-bold">1.42s / candidate</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-outline">AST Engine Version</span>
<span className="text-outline-variant font-mono">Tree-Sitter v0.20.8-py</span>
</div>
</div>

<div className="mt-3 p-2 rounded bg-surface-container-lowest border border-outline-variant/20 text-[10px] font-body-sm text-outline leading-tight">
<strong>Evaluation Disclaimer:</strong> Metrics strictly grounded in synthetic lab environment benchmarks. Zero unvalidated extrapolation.
            </div>
</div>
</div>
</div>



<footer className="mt-8 border border-outline-variant/30 rounded-xl bg-surface-container-lowest p-5 text-label-code font-label-code">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-[12px] font-semibold text-on-surface">Cryptographic Audit Ledger Validated</span>
<span className="text-outline text-[11px]">· ED25519 Signed</span>
</div>
<div className="text-[11px] text-outline flex flex-wrap gap-x-4 gap-y-1 font-mono">
<span>Run ID: <strong className="text-on-surface">VR-2025-0518-8902</strong></span>
<span>Operator: <span className="text-secondary">Analyst_442</span></span>
<span>Baseline SHA: <span className="text-outline-variant">d894e771c990b7a8</span></span>
<span>Candidate SHA: <span className="text-primary font-bold">sha256:7bc9029a4e1...</span></span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface hover:text-secondary hover:border-secondary transition-all text-[11px] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]" >data_object</span>
              Download JSON Evidence
            </button>
<button className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface hover:text-secondary hover:border-secondary transition-all text-[11px] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]" >table_view</span>
              Export CSV Diff
            </button>
<button className="px-3.5 py-1.5 rounded bg-primary-container text-white font-bold hover:bg-inverse-primary transition-all text-[11px] flex items-center gap-1.5 shadow-[0_0_12px_rgba(242,13,50,0.35)]">
<span className="material-symbols-outlined text-[14px]" >verified</span>
              Signed Verification Report
            </button>
</div>
</div>
</footer>
</div>

    </div>
  );
};

export default ComparisonPage;
