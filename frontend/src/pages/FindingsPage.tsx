import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const FindingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getFindings) {
          const res = await api.getFindings();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load FindingsPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 pb-2 border-b border-outline-variant/20">
<div>
<div className="flex items-center gap-2.5 mb-1.5">
<span className="font-label-badge text-label-badge text-[10px] text-primary bg-primary-container/15 px-2 py-0.5 rounded border border-primary-container/30">
              EVIDENCE-FIRST APPLICATION SECURITY · DEMONSTRATION FIXTURE DATA
            </span>
<span className="font-label-badge text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
              STRICT TAINT VALIDATION
            </span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">Vulnerability Findings Explorer</h1>
<p className="text-body-md font-body-md text-on-surface-variant/80 mt-1 max-w-3xl">
            Investigate confirmed security evidence, understand contextual risk, and trace every recommendation to its verified source in AST syntax.
          </p>
</div>

<div className="flex flex-wrap items-center gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-[17px] text-outline">search</span>
<input className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container rounded pl-8 pr-3 py-1.5 text-label-code font-label-code text-xs text-on-surface w-64 lg:w-72 focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="Search title, CWE, endpoint, AST hash..." type="text"/>
</div>
<select className="bg-surface-container-lowest border border-outline-variant/50 text-on-surface text-label-code font-label-code text-xs rounded py-1.5 pl-2.5 pr-7 focus:border-primary-container focus:outline-none">
<option>Severity: All (14)</option>
<option>Critical (2)</option>
<option>High (5)</option>
<option>Medium (4)</option>
<option>Low (3)</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant/50 text-on-surface text-label-code font-label-code text-xs rounded py-1.5 pl-2.5 pr-7 focus:border-primary-container focus:outline-none">
<option>Status: Confirmed Taint</option>
<option>In Sandbox (4)</option>
<option>Awaiting Review (3)</option>
<option>Verified Fix (2)</option>
</select>
<button className="bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 rounded text-label-code font-label-code text-xs flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">filter_list</span>
<span>Filters (3)</span>
</button>
<button className="text-outline hover:text-primary text-label-code font-label-code text-xs underline underline-offset-4 px-1">
            Reset filters
          </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-3">

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3 relative overflow-hidden group hover:border-primary-container/40 transition-colors">
<div className="absolute -right-6 -bottom-6 w-16 h-16 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-outline text-[10px] uppercase tracking-wider">Critical</span>
<span className="material-symbols-outlined text-primary-container text-[16px]">warning</span>
</div>
<div className="text-headline-md font-headline-md text-primary font-bold mt-1">02</div>
<div className="text-body-sm font-body-sm text-on-surface-variant/70 text-[11px] mt-0.5">Active triage, CVSS ≥ 9.0</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3 relative overflow-hidden group hover:border-tertiary-container/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-outline text-[10px] uppercase tracking-wider">High Risk</span>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">crisis_alert</span>
</div>
<div className="text-headline-md font-headline-md text-tertiary-fixed font-bold mt-1">05</div>
<div className="text-body-sm font-body-sm text-on-surface-variant/70 text-[11px] mt-0.5">Contextual priority elevated</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3 relative overflow-hidden group hover:border-secondary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-outline text-[10px] uppercase tracking-wider">Evidence Verified</span>
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
</div>
<div className="text-headline-md font-headline-md text-secondary font-bold mt-1">11 / 14</div>
<div className="text-body-sm font-body-sm text-on-surface-variant/70 text-[11px] mt-0.5">Strict AST proofs validated</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3 relative overflow-hidden group hover:border-amber-400/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-outline text-[10px] uppercase tracking-wider">Awaiting Review</span>
<span className="material-symbols-outlined text-amber-400 text-[16px]">hourglass_top</span>
</div>
<div className="text-headline-md font-headline-md text-amber-300 font-bold mt-1">03</div>
<div className="text-body-sm font-body-sm text-on-surface-variant/70 text-[11px] mt-0.5">Analyst confirmation req.</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3 relative overflow-hidden group hover:border-emerald-400/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-outline text-[10px] uppercase tracking-wider">Remediation Pending</span>
<span className="material-symbols-outlined text-emerald-400 text-[16px]">terminal</span>
</div>
<div className="text-headline-md font-headline-md text-emerald-300 font-bold mt-1">04</div>
<div className="text-body-sm font-body-sm text-on-surface-variant/70 text-[11px] mt-0.5">In sandbox test pipeline</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-start">

<div className="lg:col-span-3 flex flex-col gap-2 bg-surface-container-low/40 border border-outline-variant/30 rounded p-3 h-full max-h-[820px] overflow-hidden">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<span className="font-headline-sm text-xs font-semibold uppercase tracking-wider text-on-surface">Target Taint Feeds</span>
<span className="font-label-badge text-[10px] text-outline">14 Findings</span>
</div>
<div className="flex flex-col gap-2 overflow-y-auto custom-scroll pr-1 mt-1">

<div className="p-3 rounded border-l-4 border-primary-container bg-surface-container border-y border-r border-outline-variant/40 cursor-pointer shadow-[0_0_15px_rgba(255,83,87,0.1)] transition-all">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] font-bold text-primary bg-primary-container/20 px-1.5 py-0.5 rounded border border-primary-container/30">CRIT 9.2 · CVSS</span>
<span className="font-label-badge text-[9px] text-secondary flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> CONFIRMED TAINT
                </span>
</div>
<h3 className="font-headline-sm text-[13px] font-bold text-on-surface mt-2 leading-snug">
                CWE-89: SQL Injection in UserProfileQuery
              </h3>
<div className="font-label-code text-[11px] text-outline mt-1.5 truncate">
                /api/v1/auth/profile.py:42
              </div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-on-surface-variant">
<span>Risk: <strong className="text-primary-container">8.6 HIGH</strong></span>
<span className="text-outline">Tier-1 Auth DB</span>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container/60 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] font-bold text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">MED 6.4 · CVSS</span>
<span className="font-label-badge text-[9px] text-emerald-400">IN SANDBOX</span>
</div>
<h3 className="font-headline-sm text-[13px] font-medium text-on-surface mt-2 leading-snug">
                CWE-79: Stored XSS in Student Bio Forum
              </h3>
<div className="font-label-code text-[11px] text-outline mt-1.5 truncate">
                /src/components/BioView.tsx:88
              </div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-on-surface-variant">
<span>Risk: <strong className="text-amber-300">6.4 MED</strong></span>
<span className="text-outline">Frontend Ingress</span>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container/60 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] font-bold text-primary bg-primary-container/20 px-1.5 py-0.5 rounded border border-primary-container/30">CRIT 9.2 · CVSS</span>
<span className="font-label-badge text-[9px] text-amber-300">AWAITING REMEDIATION</span>
</div>
<h3 className="font-headline-sm text-[13px] font-medium text-on-surface mt-2 leading-snug">
                CWE-798: Hardcoded JWT Signing Secret
              </h3>
<div className="font-label-code text-[11px] text-outline mt-1.5 truncate">
                /services/auth.js:14
              </div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-on-surface-variant">
<span>Risk: <strong className="text-primary-container">9.2 CRIT</strong></span>
<span className="text-outline">Identity Cluster</span>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container/60 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] font-bold text-secondary bg-secondary/15 px-1.5 py-0.5 rounded border border-secondary/20">LOW 3.2 · CVSS</span>
<span className="font-label-badge text-[9px] text-emerald-400">VALIDATED FIX</span>
</div>
<h3 className="font-headline-sm text-[13px] font-medium text-on-surface mt-2 leading-snug">
                CWE-319: Cleartext Transmission of Sensitive Cookie
              </h3>
<div className="font-label-code text-[11px] text-outline mt-1.5 truncate">
                /etc/nginx/default.conf:19
              </div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-on-surface-variant">
<span>Risk: <strong className="text-secondary">3.2 LOW</strong></span>
<span className="text-outline">Edge Reverse Proxy</span>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-lowest/60 hover:bg-surface-container/60 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] font-bold text-tertiary-fixed bg-tertiary-container/20 px-1.5 py-0.5 rounded border border-tertiary-container/30">HIGH 8.9 · CVSS</span>
<span className="font-label-badge text-[9px] text-secondary">TAINT VERIFIED</span>
</div>
<h3 className="font-headline-sm text-[13px] font-medium text-on-surface mt-2 leading-snug">
                CWE-502: Deserialization of Untrusted Resume Data
              </h3>
<div className="font-label-code text-[11px] text-outline mt-1.5 truncate">
                /workers/resume_parser.py:104
              </div>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-on-surface-variant">
<span>Risk: <strong className="text-tertiary-fixed">8.9 HIGH</strong></span>
<span className="text-outline">Async Worker Pod</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-4">

<div className="bg-surface-container-low/70 border border-outline-variant/30 rounded p-4 relative overflow-hidden">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2">
<span className="font-label-badge text-label-badge text-[10px] text-primary bg-primary-container/20 px-2 py-0.5 rounded border border-primary-container/30">#FND-8902</span>
<span className="font-label-badge text-label-badge text-[10px] text-secondary bg-secondary/15 px-2 py-0.5 rounded border border-secondary/20">CWE-89</span>
<span className="text-xs font-label-code text-emerald-400 flex items-center gap-1 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> CONFIRMED TAINT FLOW
                  </span>
</div>
<h2 className="text-headline-md font-headline-md text-on-surface font-bold mt-2">
                  SQL Injection in UserProfileQuery
                </h2>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-label-code font-label-code text-[11px] text-on-surface-variant/80 mt-2">
<span>Target: <strong className="text-on-surface">DB Cluster (PostgreSQL)</strong></span>
<span>Endpoint: <strong className="text-primary-fixed">/api/v1/auth/profile.py:42</strong></span>
<span>Scan: <strong className="text-outline">#SCN-8092</strong></span>
<span>Observed: <strong className="text-outline">2025-05-18 14:21 UTC</strong></span>
</div>
</div>
<div className="flex sm:flex-col items-end justify-between gap-2 self-start bg-surface-container-lowest/80 border border-outline-variant/40 p-2.5 rounded min-w-[130px]">
<div className="text-[10px] font-label-badge text-outline uppercase tracking-wider">Contextual Risk</div>
<div className="text-headline-md font-headline-md text-primary font-bold leading-none">8.6<span className="text-xs text-outline font-normal">/10</span></div>
<div className="text-[9px] font-label-code text-primary-fixed-dim">Tier-1 Auth Database</div>
</div>
</div>

<div className="flex items-center gap-1 mt-4 pt-3 border-t border-outline-variant/20 overflow-x-auto custom-scroll">
<button className="px-3 py-1.5 rounded text-xs font-headline-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors">Overview</button>
<button className="px-3 py-1.5 rounded text-xs font-headline-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors">Request / Response</button>
<button className="px-3 py-1.5 rounded text-xs font-headline-sm font-semibold bg-primary-container/20 text-primary border border-primary-container/30 transition-colors">Source / AST Code</button>
<button className="px-3 py-1.5 rounded text-xs font-headline-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors">Artifacts &amp; Hashes</button>
<button className="px-3 py-1.5 rounded text-xs font-headline-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors">Audit History</button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/40 rounded overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 bg-surface-container-low border-b border-outline-variant/30 text-label-code font-label-code text-xs">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[15px] text-primary">data_object</span>
<span>/api/v1/auth/profile.py</span>
<span className="text-outline">· Python 3.11 AST Reachability</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-primary bg-primary-container/20 px-1.5 py-0.5 rounded border border-primary-container/30">TAINT SINK AT LINE 42</span>
</div>
</div>
<div className="p-4 font-label-code text-xs overflow-x-auto bg-[#0a0a0d] leading-6 select-text">
<div className="flex text-on-surface-variant/40">
<span className="w-8 select-none text-outline text-right pr-3">39</span>
<span><span className="text-purple-400">from</span> core.database <span className="text-purple-400">import</span> get_db_pool</span>
</div>
<div className="flex text-on-surface-variant/40">
<span className="w-8 select-none text-outline text-right pr-3">40</span>
<span></span>
</div>
<div className="flex text-on-surface-variant">
<span className="w-8 select-none text-outline text-right pr-3">41</span>
<span><span className="text-blue-400">def</span> <span className="text-yellow-300">get_student</span>(student_id: <span className="text-emerald-400">str</span>):</span>
</div>

<div className="flex bg-primary-container/15 border-l-2 border-primary-container -mx-4 px-4 py-1 my-0.5 items-center">
<span className="w-8 select-none text-primary font-bold text-right pr-3">42</span>
<span className="text-primary font-semibold flex-1">
                  query = <span className="text-amber-200">f"SELECT * FROM users WHERE id = '&#123;student_id&#125;'"</span> <span className="text-[11px] text-primary-fixed-dim bg-primary-container/30 px-1.5 py-0.2 rounded ml-2 font-normal">← [TAINT SINK: String formatting bypassing param binding]</span>
</span>
</div>
<div className="flex text-on-surface-variant">
<span className="w-8 select-none text-outline text-right pr-3">43</span>
<span> <span className="text-purple-400">return</span> db.<span className="text-yellow-300">execute</span>(query)</span>
</div>
<div className="flex text-on-surface-variant/40">
<span className="w-8 select-none text-outline text-right pr-3">44</span>
<span></span>
</div>
<div className="flex text-on-surface-variant/50">
<span className="w-8 select-none text-outline text-right pr-3">45</span>
<span><span className="text-outline"># AST Engine Rule: PySQL-01 | Confidence: 1.00 Deterministic Flow</span></span>
</div>
</div>
<div className="p-3 bg-surface-container-low/70 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-2 text-label-code font-label-code text-[11px]">
<span className="text-on-surface-variant">AST Taint Trace #9042: <span className="text-secondary">req.params.student_id</span> → <span className="text-primary">db.execute()</span></span>
<span className="text-emerald-400 flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Direct Reachability Verified
              </span>
</div>
</div>

<div className="grid grid-cols-1 gap-3">

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5 flex gap-3">
<div className="w-7 h-7 rounded bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[16px]">biotech</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-xs font-bold text-on-surface uppercase tracking-wider">Layer 1: Confirmed Evidence</span>
<span className="font-label-badge text-[9px] text-secondary bg-secondary/10 px-1 rounded">SCANNER VERIFIED</span>
</div>
<p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Deterministic AST taint engine observed direct concatenation of unsanitized HTTP parameter <code className="text-secondary font-label-code">student_id</code> into SQL syntax. Active verification probe confirmed divergence in database error codes upon single-quote insertion.
                </p>
</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5 flex gap-3">
<div className="w-7 h-7 rounded bg-primary-container/15 border border-primary-container/30 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[16px]">psychology</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-xs font-bold text-on-surface uppercase tracking-wider">Layer 2: AI Interpretation</span>
<span className="font-label-badge text-[9px] text-primary bg-primary-container/10 px-1 rounded">DETERMINISTIC KERNEL</span>
</div>
<p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  High exploitability score assigned due to unauthenticated edge accessibility via gateway proxy. An external adversary can extract raw password hashes and student FERPA/PII records without session authentication tokens.
                </p>
</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5 flex gap-3">
<div className="w-7 h-7 rounded bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
<span className="material-symbols-outlined text-[16px]">build_circle</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-xs font-bold text-on-surface uppercase tracking-wider">Layer 3: Recommended Action</span>
<span className="font-label-badge text-[9px] text-emerald-400 bg-emerald-400/10 px-1 rounded">AUTOMATED AST REFACTOR</span>
</div>
<p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Replace dynamic string formatting with parameterized binding: <code className="text-emerald-300 font-label-code">cursor.execute("SELECT * FROM users WHERE id = %s", (student_id,))</code>. Execute regression container to ensure downstream schemas remain valid.
                </p>
</div>
</div>
</div>

<div className="bg-surface-container-low/40 border border-outline-variant/30 rounded p-3.5">
<span className="font-headline-sm text-xs font-semibold uppercase tracking-wider text-outline block mb-3">Telemetry Lifecycle &amp; Verification Chain</span>
<div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-label-code font-label-code text-[11px]">
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-[9px] text-outline">14:15:02 UTC</div>
<div className="text-on-surface font-semibold mt-0.5">Detected</div>
<div className="text-[9px] text-secondary">Aegis Ingress</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-[9px] text-outline">14:16:20 UTC</div>
<div className="text-on-surface font-semibold mt-0.5">AST Verified</div>
<div className="text-[9px] text-secondary">Taint Match</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-[9px] text-outline">14:18:00 UTC</div>
<div className="text-primary font-semibold mt-0.5">Tier 1 Flag</div>
<div className="text-[9px] text-primary">Context 8.6</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-[9px] text-outline">14:20:10 UTC</div>
<div className="text-emerald-400 font-semibold mt-0.5">Patch #P-8902</div>
<div className="text-[9px] text-emerald-400">Generated</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-[9px] text-outline">14:22:00 UTC</div>
<div className="text-amber-300 font-semibold mt-0.5">Sandbox Arm</div>
<div className="text-[9px] text-amber-300">Pending Eval</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-4">

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<span className="font-headline-sm text-xs font-bold uppercase tracking-wider text-on-surface">Contextual Risk Breakdown</span>
<span className="font-label-badge text-[10px] text-primary-container font-semibold">Priority 8.6</span>
</div>
<div className="mt-3 flex flex-col gap-2.5">

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Exploitability</span>
<span className="text-primary font-bold">HIGH (Taint Verified)</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-primary-container h-full w-[92%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Asset Criticality</span>
<span className="text-primary font-bold">TIER-1 CORE</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-primary-container h-full w-[95%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Data Sensitivity</span>
<span className="text-tertiary font-bold">RESTRICTED PII</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-tertiary-container h-full w-[88%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Exposure Surface</span>
<span className="text-tertiary font-bold">EDGE_PUBLIC</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-tertiary-container h-full w-[80%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Evidence Confidence</span>
<span className="text-secondary font-bold">1.0 (CONFIRMED)</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-secondary h-full w-[100%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] font-label-code">
<span className="text-on-surface-variant">Existing Mitigations</span>
<span className="text-amber-300 font-bold">PARTIAL (Bypassed)</span>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded mt-1 overflow-hidden">
<div className="bg-amber-400 h-full w-[35%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5">
<span className="font-headline-sm text-xs font-bold uppercase tracking-wider text-on-surface block mb-2.5">Attack Surface Chain</span>
<div className="flex flex-col gap-2 font-label-code text-[11px]">
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-outline">language</span>
<span className="text-on-surface">Ingress Gateway (Nginx Proxy)</span>
</div>
<div className="flex justify-center text-outline text-[12px] -my-1">↓</div>
<div className="p-2 rounded bg-surface-container-lowest border border-primary-container/30 flex items-center gap-2 bg-primary-container/5">
<span className="material-symbols-outlined text-[15px] text-primary">route</span>
<span className="text-primary font-semibold">/api/v1/auth/profile</span>
</div>
<div className="flex justify-center text-outline text-[12px] -my-1">↓</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-secondary">database</span>
<span className="text-on-surface">PostgreSQL Auth DB (Tier 1)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-3.5">
<span className="font-headline-sm text-xs font-bold uppercase tracking-wider text-on-surface block mb-2.5">Adversary &amp; Framework Mapping</span>
<div className="flex flex-col gap-2 text-label-code font-label-code text-[11px]">
<div className="flex items-center justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-on-surface-variant">OWASP Top 10</span>
<span className="text-primary font-semibold">A03:2021-Injection</span>
</div>
<div className="flex items-center justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-on-surface-variant">MITRE ATT&amp;CK</span>
<span className="text-secondary font-semibold">T1190 (Public Edge)</span>
</div>
<div className="flex items-center justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-on-surface-variant">CAPEC Mapping</span>
<span className="text-tertiary-fixed font-semibold">CAPEC-66 (SQLi)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low/80 border border-primary-container/30 rounded p-3.5 relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary">Patch Candidate #P-8902</span>
<span className="font-label-badge text-[9px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">100% SANDBOX PASS</span>
</div>
<div className="font-label-code text-[11px] text-on-surface-variant/90 mt-2 bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
              42 Automated Integration Checks Passed. Zero Syntax Regressions Observed.
            </div>

<div className="flex flex-col gap-2 mt-3.5">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary-container font-headline-sm font-semibold text-xs py-2 rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_0_16px_rgba(255,83,87,0.35)]">
<span className="material-symbols-outlined text-[16px]">build</span>
<span>Review Remediation Candidate</span>
</button>
<div className="grid grid-cols-2 gap-1.5">
<button className="bg-surface-container-high/60 hover:bg-surface-container-high text-on-surface border border-outline-variant/30 text-[11px] font-label-code py-1.5 rounded flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">hub</span> Graph Trace
                </button>
<button className="bg-surface-container-high/60 hover:bg-surface-container-high text-on-surface border border-outline-variant/30 text-[11px] font-label-code py-1.5 rounded flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">replay</span> Re-Scan
                </button>
</div>
<button className="bg-surface-container-lowest hover:bg-surface-container-high text-outline hover:text-on-surface border border-outline-variant/20 text-[11px] font-label-code py-1.5 rounded flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">flag</span> Mark for Analyst Review
              </button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default FindingsPage;
