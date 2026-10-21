import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const RemediationPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getRemediations) {
          const res = await api.getRemediations();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load RemediationPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<section className="border-b border-outline-variant/20 bg-surface-container-low/60 px-space-lg py-space-md">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div>

<div className="flex items-center space-x-2 text-[10px] font-label-badge tracking-widest text-secondary-fixed-dim uppercase">
<span className="material-symbols-outlined text-[14px]" >shield</span>
<span>DEFENSIVE SECURE CODING · SANDBOX-GATED FIXES · CANDIDATE #P-8902</span>
</div>

<h1 className="text-headline-md font-headline-md text-on-surface font-bold tracking-tight mt-1 flex items-center gap-3">
            Source Code Remediation Workspace
            <span className="text-xs font-label-badge font-semibold bg-tertiary-container/20 text-tertiary border border-tertiary/40 px-2.5 py-0.5 rounded tracking-wide">
              CANDIDATE READY
            </span>
</h1>

<p className="text-body-sm font-body-sm text-outline mt-1 max-w-4xl">
            Review defensive code changes, inspect their security rationale, and validate every candidate in an isolated environment before acceptance.
          </p>
</div>

<div className="flex flex-wrap items-center gap-2">

<div className="flex items-center space-x-1.5 bg-surface-container-highest/60 border border-outline-variant/40 px-2.5 py-1 rounded text-label-badge font-label-badge text-[10px]">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="text-tertiary">REVIEW REQUIRED</span>
</div>
<div className="flex items-center space-x-1.5 bg-surface-container-highest/60 border border-secondary/30 px-2.5 py-1 rounded text-label-badge font-label-badge text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="text-secondary">SANDBOX: READY</span>
</div>
<div className="flex items-center space-x-1.5 bg-surface-container-highest/60 border border-outline-variant/30 px-2.5 py-1 rounded text-label-badge font-label-badge text-[10px]">
<span className="text-outline">AST TAINT:</span>
<span className="text-on-surface">PARAMETERIZED</span>
</div>

<div className="flex items-center space-x-2 ml-2">
<button className="px-2.5 py-1 rounded border border-outline-variant/40 text-on-surface text-body-sm font-body-sm hover:border-secondary hover:text-secondary transition-colors">
              Review Evidence Brief
            </button>
<button className="px-2.5 py-1 rounded border border-outline-variant/40 text-on-surface text-body-sm font-body-sm hover:border-primary transition-colors">
              View Audit Trail
            </button>
<button className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_14px_rgba(255,83,87,0.3)] hover:opacity-95 transition-opacity flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >deployed_code</span>
<span>Dispatch to Sandbox</span>
</button>
</div>
</div>
</div>
</section>

<div className="flex-1 grid grid-cols-12 gap-0">

<section className="col-span-12 lg:col-span-3 xl:col-span-2 border-r border-outline-variant/20 bg-surface-container-lowest p-space-md flex flex-col space-y-space-md custom-scroll overflow-y-auto">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-sm space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] font-label-badge text-primary-container font-bold px-1.5 py-0.5 bg-primary-container/10 border border-primary-container/30 rounded">
              CRIT 9.2 CVSS
            </span>
<span className="text-[10px] font-label-code text-outline">CTX: 8.6/10</span>
</div>
<div>
<h2 className="text-body-sm font-headline-sm font-bold text-on-surface leading-snug">
              CWE-89: SQL Injection in UserProfileQuery
            </h2>
<div className="text-[11px] font-label-code text-on-surface-variant mt-0.5 truncate" title="search_students">
              fn: search_students()
            </div>
</div>
<div className="bg-surface-container-lowest p-1.5 rounded border border-outline-variant/20 text-[11px] font-label-code text-secondary break-all">
            /api/v1/students/search.py
          </div>
<div className="flex items-center justify-between text-[10px] font-label-code pt-1 border-t border-outline-variant/20">
<span className="text-outline">Engine: FastAPI/PyMySQL</span>
<a className="text-secondary hover:underline flex items-center gap-0.5" href="#taint">
<span>AST Taint #9042</span>
<span className="material-symbols-outlined text-[11px]" >open_in_new</span>
</a>
</div>
</div>

<div>
<div className="text-[11px] font-label-code text-outline uppercase tracking-wider mb-2 flex items-center justify-between">
<span>Remediation Candidates</span>
<span className="text-secondary text-[10px]">2 versions</span>
</div>
<div className="space-y-1.5">

<div className="p-2.5 rounded bg-surface-container-low border-l-2 border-primary-container border-t border-r border-b border-outline-variant/40 cursor-pointer shadow-[0_0_12px_rgba(255,83,87,0.12)]">
<div className="flex items-center justify-between">
<span className="text-body-sm font-label-code font-bold text-primary">#P-8902 (v2)</span>
<span className="text-[9px] font-label-badge bg-primary-container/20 text-primary-container px-1 py-0.5 rounded border border-primary-container/30">SELECTED</span>
</div>
<div className="text-[11px] font-body-sm text-on-surface mt-1">Parameterized Prepared Stmt</div>
<div className="text-[10px] font-label-code text-outline mt-0.5">Generates zero AST mutation</div>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex items-center justify-between">
<span className="text-body-sm font-label-code text-on-surface-variant">#P-8901 (v1)</span>
<span className="text-[9px] font-label-badge bg-error-container/40 text-error px-1 py-0.5 rounded">REJECTED</span>
</div>
<div className="text-[11px] font-body-sm text-outline mt-1">ORM Raw Escaping</div>
<div className="text-[10px] font-label-code text-error mt-0.5">Sandbox pool deadlock</div>
</div>
</div>
</div>

<div className="pt-2">
<div className="text-[11px] font-label-code text-outline uppercase tracking-wider mb-2">Pre-Validation Checklist</div>
<ul className="space-y-2 text-body-sm font-body-sm text-[12px]">
<li className="flex items-start space-x-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<span>Candidate diff syntax valid</span>
</li>
<li className="flex items-start space-x-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<span>Evidence linked: #9042 taint</span>
</li>
<li className="flex items-start space-x-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<span>Authorized lab scope confirmed</span>
</li>
<li className="flex items-start space-x-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<span>Docker sandbox container warm</span>
</li>
<li className="flex items-start space-x-2 text-primary">
<span className="material-symbols-outlined text-primary-container text-[16px] mt-0.5" >offline_bolt</span>
<div>
<span className="text-on-surface">Rollback snapshot primed</span>
<div className="text-[10px] font-label-code text-outline truncate" title="sha256:d894e771c99f">sha256:d894e771c...</div>
</div>
</li>
</ul>
</div>

<div className="mt-auto pt-3 border-t border-outline-variant/20">
<div className="flex items-center space-x-2 text-[10px] font-label-code text-outline">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Aegis AST Guard v4.2 Active</span>
</div>
</div>
</section>

<section className="col-span-12 lg:col-span-9 xl:col-span-7 border-r border-outline-variant/20 flex flex-col bg-surface-container-lowest">

<div className="border-b border-outline-variant/20 bg-surface-container-low px-space-md py-2.5 flex flex-wrap items-center justify-between gap-2">

<div className="flex items-center space-x-3">
<div className="flex items-center space-x-2 bg-surface-container-lowest px-2.5 py-1 rounded border-t-2 border-primary-container border-x border-b border-outline-variant/40">
<span className="material-symbols-outlined text-[15px] text-secondary" >code</span>
<span className="text-label-code font-label-code text-[12px] text-on-surface font-semibold">app/api/v1/students/search.py</span>
<span className="text-[10px] font-label-code text-outline">(Python 3.11)</span>
</div>

<div className="flex items-center space-x-2 text-[10px] font-label-badge">
<span className="text-outline">1 FILE CHANGED</span>
<span className="text-secondary font-bold">+3 ADDITIONS</span>
<span className="text-primary-container font-bold">-2 REMOVALS</span>
</div>
</div>

<div className="flex items-center space-x-2">
<span className="hidden sm:inline-block text-[10px] font-label-badge bg-tertiary-container/10 border border-tertiary-container/30 text-tertiary px-2 py-0.5 rounded">
              ILLUSTRATIVE CANDIDATE — NOT YET COMMITTED
            </span>
<div className="flex items-center space-x-1">
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" title="Expand Diff">
<span className="material-symbols-outlined text-[16px]" >open_in_full</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" title="Copy Code">
<span className="material-symbols-outlined text-[16px]" >content_copy</span>
</button>
<button className="p-1 rounded text-outline hover:text-primary-container hover:bg-surface-container-high/40 transition-colors" title="Discard Candidate">
<span className="material-symbols-outlined text-[16px]" >delete</span>
</button>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20 font-label-code text-[12px] bg-surface-container-lowest overflow-x-auto custom-scroll">

<div className="flex flex-col">

<div className="bg-surface-container-low/70 px-space-md py-1.5 border-b border-outline-variant/20 flex items-center justify-between text-[11px] font-label-code text-outline">
<div className="flex items-center space-x-2 text-primary-container font-semibold">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>ORIGINAL VULNERABLE CODE</span>
</div>
<span className="text-[10px] text-primary/80">AST TAINT CONFIRMED</span>
</div>

<div className="p-3 leading-relaxed font-label-code overflow-x-auto space-y-0.5">
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">38</span>
<span className="text-secondary">def</span><span className="text-on-surface"> search_students():</span>
</div>
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">39</span>
<span className="text-on-surface">    dept = request.args.get(<span className="text-secondary-fixed">"department"</span>, <span className="text-secondary-fixed">""</span>)</span>
</div>
<div className="flex items-baseline bg-primary-container/10 border-l-2 border-primary-container py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-primary-container font-bold">40</span>
<span className="text-primary-container font-medium">    <span className="italic"># [VULNERABLE AST TAINT SINK] Raw f-string interpolation</span></span>
</div>
<div className="flex items-baseline bg-primary-container/15 text-primary border-l-2 border-primary-container py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-primary-container font-bold">- 41</span>
<span>    <span className="text-outline">query = (</span></span>
</div>
<div className="flex items-baseline bg-primary-container/15 text-primary border-l-2 border-primary-container py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-primary-container font-bold">- 42</span>
<span>        <span className="text-secondary-fixed">"SELECT id, name, gpa, resume_url FROM students "</span></span>
</div>
<div className="flex items-baseline bg-primary-container/15 text-primary border-l-2 border-primary-container py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-primary-container font-bold">- 43</span>
<span>        <span className="text-tertiary-container font-bold">f"WHERE department = '&#123;dept&#125;'"</span></span>
</div>
<div className="flex items-baseline bg-primary-container/15 text-primary border-l-2 border-primary-container py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-primary-container font-bold">- 44</span>
<span>    <span className="text-outline">)</span></span>
</div>
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">45</span>
<span className="text-on-surface">    cursor.execute(query)</span>
</div>
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">46</span>
<span className="text-on-surface">    <span className="text-secondary">return</span> jsonify(cursor.fetchall())</span>
</div>

<div className="flex items-baseline text-outline/40 pt-4 text-[11px]">
<span className="w-8 select-none text-right pr-3 text-outline/20">47</span>
<span># end route definition</span>
</div>
</div>

<div className="mt-auto m-3 p-2.5 rounded bg-surface-container-low border border-primary-container/30 text-[11px] font-body-sm text-outline">
<div className="text-primary-container font-label-code font-bold flex items-center gap-1.5 mb-1">
<span className="material-symbols-outlined text-[14px]" >warning</span>
<span>SINK TRACE IDENTIFIED</span>
</div>
              User input from parameter <code className="text-secondary font-label-code">department</code> is concatenated into dynamic SQL AST without parameterization, enabling Boolean &amp; Time-based blind exfiltration.
            </div>
</div>

<div className="flex flex-col bg-surface-container-lowest">

<div className="bg-surface-container-low/70 px-space-md py-1.5 border-b border-outline-variant/20 flex items-center justify-between text-[11px] font-label-code text-outline">
<div className="flex items-center space-x-2 text-secondary font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>PROPOSED DEFENSIVE CANDIDATE</span>
</div>
<span className="text-[10px] font-label-code text-secondary">#P-8902</span>
</div>

<div className="p-3 leading-relaxed font-label-code overflow-x-auto space-y-0.5">
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">38</span>
<span className="text-secondary">def</span><span className="text-on-surface"> search_students():</span>
</div>
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">39</span>
<span className="text-on-surface">    dept = request.args.get(<span className="text-secondary-fixed">"department"</span>, <span className="text-secondary-fixed">""</span>)</span>
</div>
<div className="flex items-baseline bg-secondary-container/10 border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">40</span>
<span className="text-secondary font-medium">    <span className="italic"># [DEFENSIVE FIX] Parameterized query separated from data</span></span>
</div>
<div className="flex items-baseline bg-secondary-container/15 text-on-surface border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">+ 41</span>
<span>    <span className="text-outline">query = (</span></span>
</div>
<div className="flex items-baseline bg-secondary-container/15 text-on-surface border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">+ 42</span>
<span>        <span className="text-secondary-fixed">"SELECT id, name, gpa, resume_url "</span></span>
</div>
<div className="flex items-baseline bg-secondary-container/15 text-on-surface border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">+ 43</span>
<span>        <span className="text-secondary-fixed">"FROM students WHERE department = %s"</span></span>
</div>
<div className="flex items-baseline bg-secondary-container/15 text-on-surface border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">+ 44</span>
<span>    <span className="text-outline">)</span></span>
</div>
<div className="flex items-baseline bg-secondary-container/15 text-on-surface border-l-2 border-secondary py-0.5">
<span className="w-8 select-none text-right pr-3 text-[11px] text-secondary font-bold">+ 45</span>
<span>    cursor.execute(query, <span className="text-secondary font-bold">(dept,)</span>)</span>
</div>
<div className="flex items-baseline text-outline/50 hover:bg-surface-container-low/30">
<span className="w-8 select-none text-right pr-3 text-[11px] text-outline/40">46</span>
<span className="text-on-surface">    <span className="text-secondary">return</span> jsonify(cursor.fetchall())</span>
</div>

<div className="flex items-baseline text-outline/40 pt-4 text-[11px]">
<span className="w-8 select-none text-right pr-3 text-outline/20">47</span>
<span># end route definition</span>
</div>
</div>

<div className="mt-auto m-3 p-2.5 rounded bg-surface-container-low border border-secondary/30 text-[11px] font-body-sm text-outline">
<div className="text-secondary font-label-code font-bold flex items-center gap-1.5 mb-1">
<span className="material-symbols-outlined text-[14px]" >verified</span>
<span>AST GRAMMAR NEUTRALIZED</span>
</div>
              The SQL driver prepares and compiles the template schema prior to receiving client parameters. Escaped as pure scalar literals.
            </div>
</div>
</div>

<div className="border-t border-outline-variant/30 bg-surface-container-low/90 p-space-md flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center space-x-3">
<button className="px-4 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold shadow-[0_0_18px_rgba(255,83,87,0.4)] hover:opacity-95 transition-all flex items-center space-x-2">
<span className="material-symbols-outlined text-[18px]" >rocket_launch</span>
<span>Dispatch Candidate to Isolated Sandbox</span>
</button>
<button className="px-3 py-2 rounded border border-tertiary-container/60 text-tertiary font-body-sm text-[13px] hover:bg-tertiary-container/10 transition-colors flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px]" >history</span>
<span>Demonstrate Unsafe Patch Rejection</span>
</button>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-2 rounded border border-outline-variant/40 text-on-surface text-body-sm text-[13px] hover:border-secondary hover:text-secondary transition-colors flex items-center space-x-1">
<span className="material-symbols-outlined text-[16px]" >edit</span>
<span>Edit Manual Adjustments</span>
</button>
</div>
</div>
</section>

<section className="col-span-12 xl:col-span-3 bg-surface-container-lowest p-space-md flex flex-col space-y-space-md custom-scroll overflow-y-auto">

<div className="bg-surface-container-low border border-outline-variant/25 rounded p-3.5 space-y-2.5">
<div className="flex items-center justify-between pb-1.5 border-b border-outline-variant/20">
<h3 className="text-body-sm font-headline-sm font-bold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]" >psychology</span>
<span>Why This Change Matters</span>
</h3>
<span className="text-[10px] font-label-badge text-secondary-fixed-dim">PRINCIPLE</span>
</div>

<div>
<div className="text-[11px] font-label-code text-outline uppercase font-semibold">Security Rationale</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-[12px] leading-relaxed mt-0.5">
              Parameterized Query separation guarantees that attacker inputs cannot mutate SQL AST semantics. Literal parameters are bounded outside syntax tokens.
            </p>
</div>

<div className="bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
<div className="text-[10px] font-label-code text-tertiary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" >info</span>
<span>POTENTIAL SIDE EFFECTS</span>
</div>
<p className="text-[11px] font-body-sm text-outline mt-0.5">
              Requires DB adapter placeholder conformance (<code className="text-secondary font-label-code">%s</code> vs <code className="text-secondary font-label-code">?</code>) and 1-element tuple notation <code className="text-on-surface font-label-code">(dept,)</code>.
            </p>
</div>

<div className="flex items-center justify-between text-[11px] font-label-code pt-1 text-outline">
<span>Evidence Grounding:</span>
<span className="text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" >link</span>
              AST Taint Trace #9042
            </span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/25 rounded p-3.5 space-y-3">
<div className="flex items-center justify-between pb-1.5 border-b border-outline-variant/20">
<h3 className="text-body-sm font-headline-sm font-bold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]" >flaky</span>
<span>Sandbox Validation Pipeline</span>
</h3>
<span className="text-[10px] font-label-badge text-primary-container">3 / 4 READY</span>
</div>

<div className="space-y-2.5">

<div className="flex items-start space-x-2.5">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<div className="flex-1 text-[12px]">
<div className="flex items-center justify-between font-label-code">
<span className="text-on-surface font-semibold">Stage 1: AST Syntax &amp; Lint Check</span>
<span className="text-[10px] text-secondary font-label-badge">PASSED</span>
</div>
<div className="text-[11px] text-outline font-label-code">PySQL-01 dialect verified · 42ms</div>
</div>
</div>

<div className="flex items-start space-x-2.5">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<div className="flex-1 text-[12px]">
<div className="flex items-center justify-between font-label-code">
<span className="text-on-surface font-semibold">Stage 2: Functional Regression</span>
<span className="text-[10px] text-secondary font-label-badge">PASSED</span>
</div>
<div className="text-[11px] text-outline font-label-code">18/18 Unit &amp; Integration tests · 310ms</div>
</div>
</div>

<div className="flex items-start space-x-2.5">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5"  style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
<div className="flex-1 text-[12px]">
<div className="flex items-center justify-between font-label-code">
<span className="text-on-surface font-semibold">Stage 3: Static AST Security Scan</span>
<span className="text-[10px] text-secondary font-label-badge">PASSED</span>
</div>
<div className="text-[11px] text-outline font-label-code">0 New CWEs · Taint sink removed</div>
</div>
</div>

<div className="flex items-start space-x-2.5">
<span className="material-symbols-outlined text-tertiary text-[16px] mt-0.5" >hourglass_empty</span>
<div className="flex-1 text-[12px]">
<div className="flex items-center justify-between font-label-code">
<span className="text-on-surface font-semibold">Stage 4: Dynamic SQLMap Probe</span>
<span className="text-[10px] text-tertiary font-label-badge">AWAITING RUN</span>
</div>
<div className="text-[11px] text-outline font-label-code">Synthetic payload re-scan in sandbox</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-error-container/40 rounded p-3.5 space-y-2">
<div className="flex items-center space-x-1.5 text-primary-container text-body-sm font-headline-sm font-bold">
<span className="material-symbols-outlined text-[16px]" >lock_reset</span>
<span>Automated Rollback Guarantee</span>
</div>
<p className="text-body-sm font-body-sm text-[12px] text-outline leading-snug">
            Previous candidate <code className="text-on-surface font-label-code">#P-8901</code> was rejected during Stage 2 due to connection pool deadlocks. Instantaneous <span className="text-secondary font-label-code">240ms container rollback</span> was validated and verified.
          </p>
</div>

<div className="bg-surface-container-low border border-outline-variant/25 rounded p-3.5 space-y-3 mt-auto">
<div className="text-[11px] font-label-code text-outline uppercase tracking-wider flex items-center justify-between">
<span>Audit Ledger &amp; Handoff</span>
<span className="material-symbols-outlined text-[14px]" >history_edu</span>
</div>
<div className="space-y-1 text-[11px] font-label-code">
<div className="flex justify-between">
<span className="text-outline">Candidate ID:</span>
<span className="text-on-surface font-semibold">#P-8902-v2</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Operator:</span>
<span className="text-secondary">Analyst_442</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Baseline SHA:</span>
<span className="text-on-surface truncate max-w-[130px]" title="d894e771c99f821e">d894e771c99...</span>
</div>
<div className="flex justify-between">
<span className="text-outline">State:</span>
<span className="text-tertiary font-bold">AWAITING SANDBOX RUN</span>
</div>
</div>

<div className="pt-2 border-t border-outline-variant/20">
<button className="w-full py-2 rounded bg-surface-container-highest/60 text-outline border border-outline-variant/30 text-body-sm font-headline-sm font-semibold opacity-60 cursor-not-allowed flex items-center justify-center space-x-1.5" disabled title="Run Stage 4 Sandbox to unlock acceptance">
<span className="material-symbols-outlined text-[16px]" >lock</span>
<span>Accept &amp; Push to Lab Repo</span>
</button>
<div className="text-[10px] font-body-sm text-outline text-center mt-1.5">
              Unlocks automatically upon Stage 4 Dynamic Probe clearance.
            </div>
</div>
</div>
</section>
</div>

    </div>
  );
};

export default RemediationPage;
