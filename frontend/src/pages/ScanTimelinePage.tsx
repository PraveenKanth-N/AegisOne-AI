import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ScanTimelinePage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getTimeline) {
          const res = await api.getTimeline();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ScanTimelinePage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">



<section className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 relative overflow-hidden shadow-2xl backdrop-blur-xl">

<div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-primary-container/10 filter blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 left-1/3 w-96 h-40 rounded-full bg-secondary/5 filter blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div className="space-y-1.5">
<div className="flex items-center flex-wrap gap-2.5">
<span className="text-label-badge font-label-badge text-[12px] px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/50 text-primary font-bold">
                SCN-8092
              </span>
<div className="flex items-center gap-2 px-3 py-0.5 rounded bg-secondary-container/20 border border-secondary/40 text-secondary text-label-badge font-label-badge text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary pulse-cyan"></span>
<span>RUNNING (STAGE 4/5 · AST TAINT &amp; DYNAMIC RE-SCAN)</span>
</div>
<span className="text-label-code font-label-code text-on-surface-variant/70 text-[11px] flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary" >sync</span>
                POLLING ACTIVE (2s)
              </span>
</div>
<h1 className="text-headline-md font-headline-md text-on-surface tracking-tight flex items-center gap-2 pt-1">
              Live Scan Execution &amp; Findings Stream
            </h1>
<p className="text-body-md font-body-md text-on-surface-variant max-w-4xl">
              Track real-time assessment progress, inspect evidence-grounded findings as they emerge, and review runtime execution telemetry.
            </p>
</div>

<div className="flex flex-col sm:flex-row xl:flex-col gap-2 pt-2 xl:pt-0 shrink-0 font-label-code text-[11px] text-on-surface-variant">
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/20">
<span className="material-symbols-outlined text-[15px] text-secondary" >hub</span>
<span className="text-on-surface">Target:</span>
<span className="text-primary truncate">college-placement-v2.1</span>
<span className="text-on-surface-variant/60">(FastAPI/PyMySQL :8001)</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/20">
<span className="material-symbols-outlined text-[15px] text-on-surface-variant" >timer</span>
<span>Started: <strong className="text-on-surface">14:15:02 UTC</strong></span>
<span className="text-outline-variant">|</span>
<span>Elapsed: <strong className="text-secondary">01m 24s</strong></span>
<span className="text-outline-variant">|</span>
<span>Profile: <span className="text-on-surface">Controlled Lab</span></span>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between text-[11px] font-label-code text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim" >verified</span>
<span>Authorized Scope: <span className="text-on-surface font-medium">7 In-Scope Endpoints</span></span>
<span className="text-outline-variant">•</span>
<span className="text-on-surface-variant/70">1 Excluded (<code className="text-primary-fixed-dim bg-surface-container-high px-1 rounded">/admin/internal-metrics</code>)</span>
</div>
<div className="flex items-center gap-3 text-[11px]">
<span>Deterministic Policy: <span className="text-secondary">DP-SW-401-STRICT</span></span>
<span className="text-outline-variant">•</span>
<span>gVisor Sandbox: <span className="text-emerald-400 font-semibold">Active &amp; Isolated</span></span>
</div>
</div>
</section>



<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant/60 transition-all">
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1">
<span className="font-medium">Checks Completed</span>
<span className="material-symbols-outlined text-[16px] text-secondary" >fact_check</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-headline-lg font-headline-lg text-on-surface">6 / 8</span>
<span className="text-label-badge font-label-badge text-secondary text-xs">75% EXECUTED</span>
</div>

<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mb-2">
<div className="bg-gradient-to-r from-secondary to-primary-container h-full rounded-full" style={{ "width": "75%" }}></div>
</div>
<p className="text-[11px] font-label-code text-on-surface-variant/80">
            5 Passed · 1 Detected · 2 In-Flight
          </p>
</div>

<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant/60 transition-all">
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1">
<span className="font-medium">Findings Observed</span>
<span className="material-symbols-outlined text-[16px] text-primary" >bug_report</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-headline-lg font-headline-lg text-primary">2 Findings</span>
<span className="text-label-badge font-label-badge text-amber-400 text-xs">+1 Provisional</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mb-2">
<div className="bg-primary-container h-full rounded-full" style={{ "width": "60%" }}></div>
</div>
<p className="text-[11px] font-label-code text-on-surface-variant/80">
            1 High-Risk CWE-89 · 1 Candidate XSS · 0 Suppressed
          </p>
</div>

<div className="p-4 rounded-lg bg-surface-container-lowest border border-primary-container/40 relative group cursor-pointer hover:border-primary transition-all shadow-[0_0_15px_rgba(242,13,50,0.1)]">
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1">
<span className="font-medium text-primary">Critical &amp; High</span>
<span className="w-2 h-2 rounded-full bg-primary-container pulse-crimson"></span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-headline-lg font-headline-lg text-primary">1 Critical</span>
<span className="text-label-badge font-label-badge text-primary-fixed-dim text-xs">CWE-89 SQLi</span>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code text-on-surface-variant/90 pt-1 border-t border-outline-variant/20">
<span>CVSS 9.2 · Exploit Validated</span>
<span className="text-primary group-hover:underline flex items-center">Drill-Down →</span>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant/60 transition-all">
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-1">
<span className="font-medium">Execution Latency &amp; Health</span>
<span className="material-symbols-outlined text-[16px] text-emerald-400" >health_and_safety</span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-headline-lg font-headline-lg text-on-surface">1m 24s</span>
<span className="text-label-badge font-label-badge text-emerald-400 text-xs">0 FAULTS</span>
</div>
<p className="text-[11px] font-label-code text-on-surface-variant/80">
            Mem 312MB / 1.0 CPU · gVisor Sandbox OK
          </p>
<div className="flex items-center gap-1.5 text-[10px] font-label-code text-secondary mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Target responsive (RTT: 4.2ms)</span>
</div>
</div>
</section>



<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">



<div className="lg:col-span-7 space-y-6">

<div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary" >route</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Execution Pipeline Stage Tracker</h2>
</div>
<span className="text-label-badge font-label-badge text-secondary text-[11px] px-2 py-0.5 rounded bg-secondary-container/20 border border-secondary/30">
                ACTIVE PIPELINE #8092-A
              </span>
</div>

<div className="space-y-2.5 font-label-code text-[12px]">

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[14px]" >check</span>
</div>
<div>
<span className="text-on-surface font-medium">Stage 1: Scope &amp; Target Handshake</span>
<span className="block text-[11px] text-on-surface-variant/70">14ms · sha:d894e77 baseline locked</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-label-badge font-label-badge text-[10px]">
                  PASSED
                </span>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[14px]" >check</span>
</div>
<div>
<span className="text-on-surface font-medium">Stage 2: Passive Headers &amp; CORS Scan</span>
<span className="block text-[11px] text-on-surface-variant/70">180ms · 3/3 checks clean &amp; compliant</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-label-badge font-label-badge text-[10px]">
                  PASSED
                </span>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[14px]" >check</span>
</div>
<div>
<span className="text-on-surface font-medium">Stage 3: SBOM &amp; Dependency Integrity</span>
<span className="block text-[11px] text-on-surface-variant/70">420ms · 0 CVEs in requirements.txt (42 audited)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-label-badge font-label-badge text-[10px]">
                  PASSED
                </span>
</div>

<div className="p-3 rounded bg-surface-container-low border-2 border-primary-container relative overflow-hidden shadow-[0_0_20px_rgba(242,13,50,0.15)]">
<div className="flex items-center justify-between gap-2 relative z-10">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary shrink-0 animate-spin">
<span className="material-symbols-outlined text-[14px]" >sync</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-on-surface font-semibold">Stage 4: Web Application Security (AST Taint)</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container pulse-crimson"></span>
</div>
<span className="block text-[11px] text-primary-fixed-dim">Current Stage · Synthesizing taint graph on /api/v1/students/search</span>
</div>
</div>
<span className="px-2.5 py-0.5 rounded bg-primary-container text-on-primary-container font-headline-sm font-bold text-[10px] tracking-wider animate-pulse">
                    RUNNING
                  </span>
</div>

<div className="mt-2.5 pt-2 border-t border-outline-variant/30 flex items-center justify-between text-[11px] text-on-surface-variant">
<span>Analyzing AST sink paths: 4 / 7 routes complete</span>
<span className="text-secondary">57% sub-stage</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low/50 border border-outline-variant/20 flex items-center justify-between gap-2 opacity-65">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[14px]" >hourglass_top</span>
</div>
<div>
<span className="text-on-surface font-medium">Stage 5: Dynamic Probe &amp; Normalization</span>
<span className="block text-[11px] text-on-surface-variant/70">Pending Stage 4 completion · Behavioral confirmation sweep</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface-variant text-label-badge font-label-badge text-[10px]">
                  QUEUED
                </span>
</div>
</div>
</div>

<div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary" >crisis_alert</span>
                  Live Findings Discovered Stream
                </h2>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">Real-time vulnerability findings flagged by AST analysis and live fuzzing probes.</p>
</div>
<span className="text-label-badge font-label-badge text-[11px] text-on-surface-variant">2 EMERGENCE NODES</span>
</div>

<div className="space-y-3">

<div className="p-4 rounded-lg bg-surface-container-low border-2 border-primary-container shadow-[0_0_20px_rgba(242,13,50,0.18)] cursor-pointer relative">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-badge font-bold text-[10px] tracking-wider uppercase">
                        CONFIRMED
                      </span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest border border-primary/40 text-primary font-label-badge font-semibold text-[10px]">
                        CRITICAL · CVSS 9.2
                      </span>
<span className="text-label-badge font-label-badge text-[10px] text-secondary">
                        Contextual Risk: 8.6/10
                      </span>
</div>
<h3 className="text-headline-sm font-headline-sm text-white pt-1">
                      CWE-89: SQL Injection in Search Controller
                    </h3>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-on-surface-variant shrink-0">
                    14:15:38 UTC (+36s)
                  </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant">
<div>
<span className="text-on-surface-variant/70">Asset:</span>
<span className="text-primary-fixed-dim font-medium ml-1">/api/v1/students/search.py:42</span>
</div>
<div>
<span className="text-on-surface-variant/70">Check:</span>
<span className="text-on-surface ml-1">Aegis AST Taint Analyzer v4.2 (PySQL-01)</span>
</div>
</div>
<p className="mt-2 text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
<strong className="text-primary font-medium">Evidence Preview:</strong> User parameter <code className="text-primary bg-surface-container-highest px-1 py-0.5 rounded">query</code> is concatenated directly into raw SQL execution statement without parameterized query binding or input sanitation.
                </p>
<div className="mt-3 flex items-center justify-between text-[11px] font-label-code text-primary">
<span className="flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]" >center_focus_strong</span>
                    SELECTED FOR DEEP INSPECTION
                  </span>
<span className="text-secondary text-[11px] flex items-center gap-1">
                    Exploit Proof Generated <span className="material-symbols-outlined text-[12px]" >chevron_right</span>
</span>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/50 transition-all cursor-pointer">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-label-badge font-bold text-[10px] tracking-wider uppercase">
                        PROVISIONAL
                      </span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest border border-outline-variant/40 text-amber-200 font-label-badge font-semibold text-[10px]">
                        MEDIUM · CVSS 6.1
                      </span>
</div>
<h3 className="text-headline-sm font-headline-sm text-on-surface pt-1">
                      CWE-79: Cross-Site Scripting (Reflected Candidate)
                    </h3>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-on-surface-variant shrink-0">
                    14:16:04 UTC (+62s)
                  </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant">
<div>
<span className="text-on-surface-variant/70">Asset:</span>
<span className="text-on-surface font-medium ml-1">/profile/bio [GET, POST]</span>
</div>
<div>
<span className="text-on-surface-variant/70">Check:</span>
<span className="text-on-surface ml-1">Core Lexer Engine v2.0</span>
</div>
</div>
<p className="mt-2 text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Status: Awaiting secondary payload reflection verification in Stage 5 dynamic probe sweep. Raw HTML echo detected in response header stream.
                </p>
</div>
</div>
</div>

<div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary" >biotech</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Selected Finding Deep Inspection</h2>
</div>
<span className="text-label-badge font-label-badge text-[11px] text-primary font-bold">CWE-89 SINK TRACE</span>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-label-code text-[11px] text-on-surface-variant">
<span>Vulnerable AST Location: <code className="text-primary font-semibold">search.py (Lines 40-44)</code></span>
<span className="text-on-surface-variant/70">Dialect: Python 3.11 / PyMySQL</span>
</div>
<div className="p-3.5 rounded bg-surface-container-lowest border border-outline-variant/40 font-label-code text-[12px] leading-relaxed overflow-x-auto text-on-surface">
<div className="text-on-surface-variant/50"># Line 41: Untrusted user input ingress from FastAPI Request</div>
<div className="text-on-surface-variant"><span className="text-secondary">query</span> = request.query_params.get(<span className="text-emerald-400">"q"</span>)</div>
<div className="text-on-surface-variant/50"># Line 42: Taint Sink - Formatted string interpolated into SQL execute</div>
<div className="bg-primary-container/20 text-white p-1 rounded border-l-2 border-primary-container my-1 font-semibold">
<span className="text-primary">&gt;&gt;</span> db.execute(f<span className="text-emerald-300">"SELECT * FROM students WHERE id = '<span className="text-primary font-bold">&#123;user_input&#125;</span>'"</span>)
                </div>
<div className="text-on-surface-variant">records = db.fetchall()</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30">
<div className="flex items-center gap-1.5 text-secondary text-label-badge font-label-badge text-[11px] mb-1">
<span className="material-symbols-outlined text-[14px]" >visibility</span>
                  OBSERVED EVIDENCE
                </div>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Scanner injected probe <code className="text-primary bg-surface-container px-1 py-0.2 rounded font-label-code text-[11px]">' OR '1'='1</code> resulting in raw SQLite/MySQL syntax error code 1064 and unrestricted record yield of all 1,280 student profiles.
                </p>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30">
<div className="flex items-center gap-1.5 text-primary text-label-badge font-label-badge text-[11px] mb-1">
<span className="material-symbols-outlined text-[14px]" >psychology</span>
                  RISK ENGINE INTERPRETATION
                </div>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  5-hop attack path reaches backend database with unconstrained PII exposure (Student IDs, SSN hashes, placement GPA). Exploitation requires 0 privileges and is remotely reachable via public HTTP.
                </p>
</div>
</div>

<div className="pt-3 border-t border-outline-variant/20 flex flex-wrap gap-2.5">
<button className="px-3.5 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm font-semibold text-body-sm hover:shadow-[0_0_12px_rgba(242,13,50,0.4)] transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" >build</span>
                Open in Remediation Workspace
              </button>
<button className="px-3.5 py-2 rounded bg-surface-container-high border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary transition-all font-body-md text-body-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" >account_tree</span>
                Trace in Knowledge Graph
              </button>
<button className="px-3.5 py-2 rounded bg-surface-container-high border border-outline-variant text-on-surface hover:border-primary transition-all font-body-md text-body-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" >smart_toy</span>
                Ask AI Analyst
              </button>
</div>
</div>
</div>



<div className="lg:col-span-5 space-y-6">

<div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary" >terminal</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Execution Event Stream</h2>
</div>

<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-label-badge font-label-badge text-[10px] text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary pulse-cyan"></span>
                  AUTO-FOLLOW: ON
                </span>
<button className="px-2 py-0.5 rounded bg-surface-container-high hover:bg-surface-variant text-on-surface-variant hover:text-on-surface text-[10px] font-label-code">
                  Latest
                </button>
</div>
</div>

<div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] font-label-code border-b border-outline-variant/20">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-bold border-b border-primary">
                ALL (28)
              </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                LIFECYCLE (6)
              </button>
<button className="px-2.5 py-1 rounded text-primary hover:bg-surface-container transition-colors font-medium">
                FINDINGS (4)
              </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                CHECKS (14)
              </button>
<button className="px-2.5 py-1 rounded text-amber-300 hover:bg-surface-container transition-colors">
                WARNINGS (1)
              </button>
</div>

<div className="h-[430px] rounded bg-[#08080B] p-3.5 border border-outline-variant/30 font-label-code text-[11px] leading-relaxed overflow-y-auto space-y-2 select-text">

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:02.102]</span>
<span className="text-secondary shrink-0 font-bold">[LIFECYCLE]</span>
<span className="text-on-surface">Scan SCN-8092 queued by <span className="text-primary-fixed-dim">Analyst_442</span></span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:02.240]</span>
<span className="text-secondary shrink-0 font-bold">[SCOPE]</span>
<span>Authorized target verified: <code className="text-on-surface">college-placement-v2.1</code> on port 8001</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:02.890]</span>
<span className="text-on-surface-variant shrink-0 font-bold">[CHECK:INIT]</span>
<span>Executing Stage 01 Scope &amp; Whitelist Policy SW-401</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:03.110]</span>
<span className="text-emerald-400 shrink-0 font-bold">[CHECK:PASS]</span>
<span>TLS 1.3 Strict Transport verified on localhost:8001</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:05.420]</span>
<span className="text-secondary shrink-0 font-bold">[SBOM]</span>
<span>Scanned 42 python packages via NIST NVD. 0 vulnerabilities found</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant">
<span className="text-on-surface-variant/40 shrink-0">[14:15:22.010]</span>
<span className="text-secondary-fixed-dim shrink-0 font-bold">[AST:START]</span>
<span>Initializing PySQL-01 AST Taint dialect analyzer on 7 routes</span>
</div>

<div className="flex items-start gap-2 bg-primary-container/15 p-1 rounded border-l-2 border-primary-container text-white">
<span className="text-on-surface-variant/60 shrink-0">[14:15:38.840]</span>
<span className="text-primary shrink-0 font-bold">[FINDING:CRIT]</span>
<span>AST Taint sink reached: cursor.execute at search.py:42 (CWE-89)</span>
</div>

<div className="flex items-start gap-2 text-amber-300">
<span className="text-on-surface-variant/40 shrink-0">[14:15:44.200]</span>
<span className="text-amber-400 shrink-0 font-bold">[WARN]</span>
<span>Route /admin/internal-metrics dropped: explicit whitelist exclusion</span>
</div>

<div className="flex items-start gap-2 bg-amber-500/10 p-1 rounded border-l-2 border-amber-400 text-amber-200">
<span className="text-on-surface-variant/60 shrink-0">[14:16:04.120]</span>
<span className="text-amber-300 shrink-0 font-bold">[FINDING:PROV]</span>
<span>Possible unescaped bio parameter reflected in /profile/bio</span>
</div>

<div className="flex items-start gap-2 text-secondary animate-pulse">
<span className="text-on-surface-variant/40 shrink-0">[14:16:18.990]</span>
<span className="text-secondary shrink-0 font-bold">[AST:POLL]</span>
<span>Stage 04 in progress: 4/7 endpoints verified... synthesizing graph</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant/70">
<span className="text-on-surface-variant/40 shrink-0">[14:16:21.004]</span>
<span className="text-on-surface-variant shrink-0 font-medium">[SANDBOX]</span>
<span>eBPF probe egress counters: 0 dropped, 142 packets inspected</span>
</div>

<div className="flex items-start gap-2 text-on-surface-variant/70">
<span className="text-on-surface-variant/40 shrink-0">[14:16:24.410]</span>
<span className="text-on-surface-variant shrink-0 font-medium">[RUNTIME]</span>
<span>Heartbeat ACK received from worker daemon node-worker-04</span>
</div>
</div>

<div className="flex items-center justify-between text-label-code text-[10px] text-on-surface-variant/80 pt-1">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Socket: wss://aegis-telemetry/stream/8092 (Connected)
              </span>
<span>Buffer: 120 / 5,000 lines</span>
</div>
</div>

<div className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary" >policy</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Effective Scope &amp; Safety Safeguards</h2>
</div>
<span className="text-label-badge font-label-badge text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">
                HARD LOCKED
              </span>
</div>
<div className="space-y-3 font-label-code text-[12px]">
<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<span className="text-on-surface-variant">Target Host</span>
<span className="text-primary font-medium">college-placement-v2.1</span>
</div>
<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<span className="text-on-surface-variant">Network Boundary</span>
<span className="text-secondary font-medium">Loopback 127.0.0.1:8001 Only</span>
</div>
<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<span className="text-on-surface-variant">Enforced Rate Limit</span>
<span className="text-on-surface font-medium">Max 10 req/s · Strict</span>
</div>
<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<span className="text-on-surface-variant">Timeout Threshold</span>
<span className="text-on-surface font-medium">2500ms max per probe</span>
</div>
<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<span className="text-on-surface-variant">Network Isolation</span>
<span className="text-emerald-400 font-medium">eBPF Egress Blocked (All External)</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/40 space-y-1 text-label-code text-[11px]">
<div className="text-on-surface-variant/80 flex items-center justify-between">
<span>Authorization Signature:</span>
<span className="text-emerald-400">VERIFIED</span>
</div>
<div className="text-on-surface truncate">
                Signed by <strong className="text-primary">Analyst_442</strong> under ED25519 Token
              </div>
<div className="text-on-surface-variant/60 text-[10px] truncate">
                Token: sha256:d894e77b02914bc8a834190c4bf4
              </div>
</div>
</div>
</div>
</section>



<section className="p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary" >table_chart</span>
              Check-Level Results Table
            </h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">
              Comprehensive status of the 8 defensive checks configured for Assessment Profile SCN-8092.
            </p>
</div>
<div className="flex items-center gap-2">
<span className="text-label-code text-[11px] text-on-surface-variant">Summary:</span>
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px]">5 PASSED</span>
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-badge font-bold text-[10px]">1 DETECTED</span>
<span className="px-2 py-0.5 rounded bg-secondary/20 border border-secondary/40 text-secondary font-label-badge text-[10px]">1 RUNNING</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-badge text-[10px]">1 QUEUED</span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-label-code text-[12px] border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant/80 text-[11px] uppercase tracking-wider">
<th className="py-2.5 px-3">Check Name</th>
<th className="py-2.5 px-3">Category</th>
<th className="py-2.5 px-3">Status Badge</th>
<th className="py-2.5 px-3">Duration</th>
<th className="py-2.5 px-3">Findings Yield</th>
<th className="py-2.5 px-3">Target Endpoint</th>
<th className="py-2.5 px-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="hover:bg-surface-container-low transition-colors bg-primary-container/5">
<td className="py-3 px-3 font-medium text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  SQL Injection AST Taint Analyzer
                </td>
<td className="py-3 px-3 text-on-surface-variant">Code / AST Taint</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-badge font-bold text-[10px] uppercase">
                    Findings Detected
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">36.2s</td>
<td className="py-3 px-3 text-primary font-bold">1 Critical (CWE-89)</td>
<td className="py-3 px-3 text-primary-fixed-dim">/api/v1/students/search</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary-container hover:text-white transition-all text-[11px]">
                    Inspect
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary pulse-cyan"></span>
                  Cross-Site Scripting Fuzzer
                </td>
<td className="py-3 px-3 text-on-surface-variant">Dynamic Fuzzing</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary/20 border border-secondary/40 text-secondary font-label-badge text-[10px] uppercase">
                    Running
                  </span>
</td>
<td className="py-3 px-3 text-secondary">22.4s (active)</td>
<td className="py-3 px-3 text-amber-300">1 Provisional (CWE-79)</td>
<td className="py-3 px-3 text-on-surface-variant">/profile/bio</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container-high hover:text-secondary transition-all text-[11px]">
                    Stream
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Input Validation &amp; Type Coercion
                </td>
<td className="py-3 px-3 text-on-surface-variant">Pydantic Schema</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px] uppercase">
                    Passed
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">142ms</td>
<td className="py-3 px-3 text-emerald-400">0 Findings</td>
<td className="py-3 px-3 text-on-surface-variant">7 Routes (All)</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:text-on-surface text-[11px]">
                    Logs
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  HTTP Security Headers Audit
                </td>
<td className="py-3 px-3 text-on-surface-variant">Passive Compliance</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px] uppercase">
                    Passed
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">64ms</td>
<td className="py-3 px-3 text-emerald-400">0 Findings</td>
<td className="py-3 px-3 text-on-surface-variant">Host Level</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:text-on-surface text-[11px]">
                    Logs
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Cookie Flags &amp; Session Entropy
                </td>
<td className="py-3 px-3 text-on-surface-variant">Session Security</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px] uppercase">
                    Passed
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">88ms</td>
<td className="py-3 px-3 text-emerald-400">0 Findings</td>
<td className="py-3 px-3 text-on-surface-variant">/auth/session</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:text-on-surface text-[11px]">
                    Logs
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  CORS Origin Isolation Matrix
                </td>
<td className="py-3 px-3 text-on-surface-variant">Network Policy</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px] uppercase">
                    Passed
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">95ms</td>
<td className="py-3 px-3 text-emerald-400">0 Findings</td>
<td className="py-3 px-3 text-on-surface-variant">Options Pre-flight</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:text-on-surface text-[11px]">
                    Logs
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  SBOM Dependency Vulnerability Scanner
                </td>
<td className="py-3 px-3 text-on-surface-variant">Supply Chain</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-label-badge text-[10px] uppercase">
                    Passed
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">420ms</td>
<td className="py-3 px-3 text-emerald-400">0 CVEs (42 pkgs)</td>
<td className="py-3 px-3 text-on-surface-variant">requirements.txt</td>
<td className="py-3 px-3 text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:text-on-surface text-[11px]">
                    SBOM
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors opacity-70">
<td className="py-3 px-3 font-medium text-on-surface flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-on-surface-variant"></span>
                  Container Image &amp; Runtime Hardening Audit
                </td>
<td className="py-3 px-3 text-on-surface-variant">Infrastructure</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-badge text-[10px] uppercase">
                    Queued
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">Pending Stg 5</td>
<td className="py-3 px-3 text-on-surface-variant">--</td>
<td className="py-3 px-3 text-on-surface-variant">Dockerfile / Linux ns</td>
<td className="py-3 px-3 text-right">
<span className="text-on-surface-variant/50 text-[11px]">Wait</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>

    </div>
  );
};

export default ScanTimelinePage;
