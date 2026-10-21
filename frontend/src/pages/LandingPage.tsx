import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0e0e11] text-[#e5e1e6] font-sans antialiased min-h-screen selection:bg-[#ff5357] selection:text-[#5c000b] relative">




<header className="sticky top-0 z-50 w-full bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
<div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">

<div className="flex items-center gap-3">
<a className="flex items-center gap-2 group" href="/console">
<div className="w-8 h-8 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary-container group-hover:border-primary-container transition-colors shadow-[0_0_12px_rgba(255,83,87,0.2)]">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>shield</span>
</div>
<span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-on-surface tracking-wider">AegisOne AI</span>
</a>
<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant/60 font-label-badge text-label-badge text-primary uppercase">
          v0.9.4 Prototype
        </span>
</div>

<nav className="hidden md:flex items-center gap-6 font-label-code text-label-code">
<a className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-150" href="#pipeline">Platform</a>
<a className="text-on-surface-variant font-medium pb-1 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-150" href="#pipeline">Security Pipeline</a>
<a className="text-on-surface-variant font-medium pb-1 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-150" href="#research">Research</a>
<a className="text-on-surface-variant font-medium pb-1 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-150" href="#labs">Labs</a>
<a className="text-on-surface-variant font-medium pb-1 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-150" href="#docs">Docs</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden lg:inline-flex text-on-surface-variant hover:text-primary font-label-code text-label-code transition-colors" href="#workflow">
          Explore workflow
        </a>
<button className="flex items-center gap-2 bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline-sm text-body-sm font-bold px-4 py-2 rounded transition-all duration-150 active:scale-95 shadow-[0_0_16px_rgba(255,83,87,0.35)]">
<span className="material-symbols-outlined text-[16px]">terminal</span>
<span>Open Command Center</span>
</button>
</div>
</div>
</header>



<section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden max-w-7xl mx-auto px-6">

<div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary-container/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/60 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-primary">
            EXPLAINABLE SECURITY · VERIFIED REMEDIATION
          </span>
</div>

<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface leading-tight">
          Security fixes should be 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary drop-shadow-[0_0_25px_rgba(255,83,87,0.4)]">
            proven safe
          </span> 
          before they ship.
        </h1>

<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          AegisOne AI connects application evidence, contextual risk intelligence, and AI-assisted remediation with isolated validation—so security recommendations are tested before they are trusted.
        </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="flex items-center gap-2 bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline-sm text-body-md font-bold px-6 py-3.5 rounded transition-all duration-150 shadow-[0_0_20px_rgba(255,83,87,0.45)] group" href="/console">
<span>Open Security Command Center</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant hover:border-secondary text-on-surface font-headline-sm text-body-md px-6 py-3.5 rounded transition-all duration-150" href="#pipeline">
<span>Explore the Validation Workflow</span>
</a>
</div>

<div className="flex items-center gap-4 text-outline font-label-code text-label-code pt-1">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Defensive research prototype
          </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Authorized lab environments
          </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span> Closed-loop verification
          </span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative mx-auto max-w-md lg:max-w-none tactical-border bg-surface-container-lowest p-3 rounded-lg overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent z-10"></div>

<div className="absolute top-4 right-4 z-20 flex flex-col items-end opacity-70 font-label-badge text-label-badge text-primary-container">
<span>SYS_DEF_09</span>
<span className="text-[9px] text-outline">SEC_VAL_ON</span>
</div>

<div className="relative w-full aspect-square rounded overflow-hidden">
<img className="w-full h-full object-cover object-center filter contrast-125 saturate-110" data-alt="A cinematic, high-definition cybernetic tactical helmet floating in deep black atmospheric space. Illuminated by aggressive crimson and deep red internal HUD glows, intricate fiber carbon panels, and subtle cyan lens reflections. Evoking advanced defensive cyber security operations, high precision engineering, and elite threat intelligence command centers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgtkYQTxFWyN7n9VGtaNFni_HF2Uh2OPLjmnSzlT5ycr_4Pvmh-qdlyxawDdISsdEgD6MGuupP6d_X-yk0Qs8tBXaeP6SGn6q2aFkLKI4qm1E-6BrA25U2wy-JjJpTnW_Egt30hjPFAigg3eyH7vQtHsQMAyoRCZ0Weis_HgnHzfeamU15St8jjO08L4WizwXXCZvGDwkW_RcrpYfNkCGj27Qf3LCH8ZKGkVH7fcuojILh2TQRAYqi"/>
</div>

<div className="absolute top-6 left-6 z-20 bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/60 px-3 py-1.5 rounded shadow-lg flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface">
              VERIFICATION STATE: <span className="text-emerald-400 font-bold">ISOLATED_PASSED</span>
</span>
</div>

<div className="absolute bottom-24 right-4 z-20 bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/60 px-3 py-1.5 rounded shadow-lg flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface">
              POLICY: <span className="text-secondary font-bold">ZERO_UNCHECKED_PATCHES</span>
</span>
</div>

<div className="absolute bottom-6 left-6 z-20 bg-surface-container-low/95 backdrop-blur-md border border-primary-container/40 px-3.5 py-2 rounded shadow-[0_0_15px_rgba(255,83,87,0.25)] flex items-center gap-2.5">
<div className="px-1.5 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary-container font-label-code text-[11px] font-bold">
              -74.2%
            </div>
<div className="flex flex-col">
<span className="font-label-badge text-[10px] text-outline uppercase tracking-wider">RISK REDUCTION</span>
<span className="font-label-code text-label-code text-on-surface font-semibold">CVSS-EQ IMPACT</span>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="w-full border-y border-outline-variant/30 bg-surface-container-lowest/60 backdrop-blur-sm py-10 px-6" id="research">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col gap-2 p-4 rounded bg-surface-container-low/40 border border-outline-variant/20 hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-bold">Pillar 01</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Evidence-Grounded Findings</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Deterministic AST taint flows and runtime traces; scanner and source-code verified validation proof.</p>
</div>

<div className="flex flex-col gap-2 p-4 rounded bg-surface-container-low/40 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">hub</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-bold">Pillar 02</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Contextual Risk Analysis</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Prioritizes via asset tiers, data sensitivity, and network path reachability, beyond raw CVSS scores.</p>
</div>

<div className="flex flex-col gap-2 p-4 rounded bg-surface-container-low/40 border border-outline-variant/20 hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-bold">Pillar 03</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Explainable AI Reasoning</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Transparent multi-step inference chains with explicit uncertainty bounds and documented constraints.</p>
</div>

<div className="flex flex-col gap-2 p-4 rounded bg-surface-container-low/40 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-bold">Pillar 04</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Validated Remediation</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Pre-flight ephemeral container execution to verify fix efficacy and prevent secondary regressions.</p>
</div>
</div>
</section>



<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container-low rounded border border-outline-variant/50 mb-3">
        THE CORE CHALLENGE
      </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-4">
        Finding a vulnerability is only half the job.
      </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
        A suggested patch can introduce regressions, miss the underlying architectural weakness, or inadvertently open a secondary attack path. AegisOne AI treats every proposed fix as an untrusted hypothesis that must earn validation.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-stretch">

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center gap-1 bg-surface-container-high border border-outline-variant px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
<span className="font-label-badge text-[10px] text-on-surface uppercase tracking-wider whitespace-nowrap">ISOLATED DEFENSIVE BARRIER</span>
</div>

<div className="bg-surface-container-lowest border border-error-container/80 rounded-lg p-6 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(147,0,10,0.15)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-error-container text-on-error font-label-badge text-label-badge font-bold uppercase rounded-bl">
          UNTESTED HYPOTHESIS · REJECTED
        </div>
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-error">warning</span>
<span className="font-headline-sm text-headline-sm text-error">Generic LLM Patch Generation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            A naive patch attempts to wrap user input with generic string sanitization, but introduces a secondary server-side request forgery (SSRF) and breaks UTF-8 encoding.
          </p>
<div className="bg-surface-container-high/60 border border-outline-variant/40 rounded p-4 font-label-code text-label-code mb-4 overflow-x-auto">
<div className="text-error font-bold mb-1">// PATCH #9812 - Unverified Candidate</div>
<div className="text-on-surface-variant"><span className="text-outline">43</span> - const result = await db.query(`SELECT * FROM users WHERE id = '$&#123;userId&#125;'`);</div>
<div className="text-error bg-error-container/20 px-1 py-0.5 rounded"><span className="text-error font-bold">43</span> + const safeId = userId.replace(/'/g, ''); // Inadequate sanitizer</div>
<div className="text-error bg-error-container/20 px-1 py-0.5 rounded"><span className="text-error font-bold">44</span> + const result = await fetch(`http://internal-api/user/$&#123;safeId&#125;`); // SSRF created</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-label-code text-error">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">cancel</span> Regression: High (CVE-2024-SSRF)
          </span>
<span className="font-bold">STATUS: BLOCKED</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary-container/80 rounded-lg p-6 relative flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(19,158,189,0.15)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-secondary-container text-on-secondary font-label-badge text-label-badge font-bold uppercase rounded-bl">
          AEGISONE CLOSED-LOOP ENGINE
        </div>
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary">verified</span>
<span className="font-headline-sm text-headline-sm text-secondary">Evidence-Grounded &amp; Sandbox Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            AST engine converts vulnerable string queries into verified prepared statements with strict parameter binding, automatically passing test suites in an isolated sandbox.
          </p>
<div className="bg-surface-container-high/60 border border-outline-variant/40 rounded p-4 font-label-code text-label-code mb-4 overflow-x-auto">
<div className="text-secondary font-bold mb-1">// VALIDATED REMEDIATION #9812-PASS</div>
<div className="text-on-surface-variant"><span className="text-outline">43</span> - const result = await db.query(`SELECT * FROM users WHERE id = '$&#123;userId&#125;'`);</div>
<div className="text-secondary-fixed bg-secondary-container/20 px-1 py-0.5 rounded"><span className="text-secondary font-bold">43</span> + const query = 'SELECT id, role, pii_hash FROM users WHERE id = $1';</div>
<div className="text-secondary-fixed bg-secondary-container/20 px-1 py-0.5 rounded"><span className="text-secondary font-bold">44</span> + const result = await db.query(query, [userId]);</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between text-body-sm font-label-code text-secondary">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Sandbox Test Suite: 18/18 Passing
          </span>
<span className="font-bold">STATUS: VALIDATED SAFE</span>
</div>
</div>
</div>
</section>



<section className="py-24 border-t border-outline-variant/30 bg-surface-container-lowest/30" id="pipeline">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/40">
            DETERMINISTIC VERIFICATION
          </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
            The Ten-Stage Security Pipeline
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">From initial AST detection to a defensible engineering decision.</p>
</div>
<div className="mt-4 md:mt-0 font-label-code text-label-code text-outline">
          STAGE_INDEX: <span className="text-primary font-bold">01 THROUGH 10</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary-container font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 01</span>
<span className="material-symbols-outlined text-[18px]">radar</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">DETECT</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Discover candidate security issues in an authorized target application.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Raw AST Trace</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 02</span>
<span className="material-symbols-outlined text-[18px]">layers</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">CONTEXTUALIZE</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Associate findings with affected application assets and data sensitivity.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Tier Asset Profile</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-secondary transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-secondary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 03</span>
<span className="material-symbols-outlined text-[18px]">account_tree</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-secondary transition-colors">CONNECT</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Map relevant relationships through the security knowledge graph.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Ontological Graph</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary-container font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 04</span>
<span className="material-symbols-outlined text-[18px]">analytics</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">PRIORITIZE</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Calculate contextual risk using documented multi-factor metrics.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Dynamic Risk Score</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-secondary transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-secondary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 05</span>
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-secondary transition-colors">EXPLAIN</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Produce evidence-grounded explanations and identify uncertainty.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Inference Chain</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 06</span>
<span className="material-symbols-outlined text-[18px]">build</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">REMEDIATE</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Prepare an inspectable, reviewable, syntax-safe code change candidate.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Proposed Patch Diff</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary-container font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 07</span>
<span className="material-symbols-outlined text-[18px]">developer_board</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">SANDBOX</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Execute validation workflow in an isolated ephemeral test environment.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Container Container ID</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-secondary transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-secondary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 08</span>
<span className="material-symbols-outlined text-[18px]">task_alt</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-secondary transition-colors">VALIDATE</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Run applicable unit/integration tests and record empirical execution results.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Test Execution Log</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-primary-container transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-primary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 09</span>
<span className="material-symbols-outlined text-[18px]">find_replace</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-primary transition-colors">RE-SCAN</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Verify that original issue is resolved and no secondary flaws exist.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Secondary Audit Clean</span>
</div>

<div className="p-4 rounded bg-surface-container-low border border-outline-variant/40 hover:border-secondary transition-all group flex flex-col justify-between h-48">
<div>
<div className="flex justify-between items-center text-secondary font-label-badge text-label-badge mb-2">
<span className="font-bold">STAGE 10</span>
<span className="material-symbols-outlined text-[18px]">gavel</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold group-hover:text-secondary transition-colors">DECIDE</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1">Present defensible decision package for human approval or automated merge.</p>
</div>
<span className="font-label-code text-[10px] text-outline">OUTPUT: Signed Audit Policy</span>
</div>
</div>
</div>
</section>



<section className="py-24 max-w-7xl mx-auto px-6" id="console-simulator">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
<span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest px-3 py-1 bg-surface-container-low rounded border border-outline-variant/40 mb-2">
        SIMULATED WORKSTATION
      </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">
        Interactive Security Command Center
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Illustrative interface preview · Demonstration data from authorized laboratory fixture.
      </p>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

<div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-error-container"></span>
<span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
<span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
<span className="ml-4 font-label-code text-body-sm text-outline">aegisone-cli // session #941-prod-target</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="font-label-badge text-label-badge text-on-surface-variant">TARGET: auth-service-v2.prod</span>
</div>
</div>

<div className="flex border-b border-outline-variant/40 bg-surface-container-lowest px-4">
<button className="px-5 py-3 font-label-code text-label-code text-primary font-bold border-b-2 border-primary flex items-center gap-2" id="tab-overview-btn" >
<span className="material-symbols-outlined text-[16px]">dashboard</span> Overview
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-findings-btn" >
<span className="material-symbols-outlined text-[16px]">bug_report</span> Findings (14)
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-remediation-btn" >
<span className="material-symbols-outlined text-[16px]">auto_fix_high</span> Remediation (8)
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-validation-btn" >
<span className="material-symbols-outlined text-[16px]">verified</span> Validation Logs
        </button>
</div>

<div className="p-6">

<div className="space-y-6" id="tab-overview">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-surface-container-low p-4 rounded border border-outline-variant/40">
<span className="font-label-badge text-label-badge text-outline uppercase">Total Findings</span>
<div className="font-display-hero text-[32px] text-on-surface font-bold mt-1">14</div>
<span className="font-label-code text-[11px] text-outline">Across 3 service boundaries</span>
</div>
<div className="bg-surface-container-low p-4 rounded border border-primary-container/40">
<span className="font-label-badge text-label-badge text-primary-container uppercase">Critical Prioritized</span>
<div className="font-display-hero text-[32px] text-primary-container font-bold mt-1">02</div>
<span className="font-label-code text-[11px] text-primary-container">Exposed attack surface</span>
</div>
<div className="bg-surface-container-low p-4 rounded border border-secondary/40">
<span className="font-label-badge text-label-badge text-secondary uppercase">Validated Patches</span>
<div className="font-display-hero text-[32px] text-secondary font-bold mt-1">08</div>
<span className="font-label-code text-[11px] text-secondary">Closed-loop verified</span>
</div>
<div className="bg-surface-container-low p-4 rounded border border-outline-variant/40">
<span className="font-label-badge text-label-badge text-emerald-400 uppercase">Rollback Safety Index</span>
<div className="font-display-hero text-[32px] text-emerald-400 font-bold mt-1">100%</div>
<span className="font-label-code text-[11px] text-outline">Zero downtime regressions</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 bg-surface-container-low p-5 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<h4 className="font-headline-sm text-[16px] text-on-surface font-semibold mb-3">Target Risk Profile</h4>
<div className="space-y-3 font-label-code text-body-sm">
<div>
<div className="flex justify-between text-outline mb-1">
<span className="text-error font-bold">Critical (2)</span>
<span>14%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-primary-container h-full w-[14%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-outline mb-1">
<span className="text-primary font-bold">High (4)</span>
<span>28%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-primary h-full w-[28%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-outline mb-1">
<span className="text-secondary font-bold">Medium (5)</span>
<span>36%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-secondary h-full w-[36%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-outline mb-1">
<span className="text-outline font-bold">Low (3)</span>
<span>22%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-outline h-full w-[22%]"></div>
</div>
</div>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/30 text-outline font-label-badge text-label-badge">
                CORPUS: OWASP BENCHMARK 2024
              </div>
</div>

<div className="lg:col-span-8 bg-surface-container-low p-5 rounded border border-primary-container/40 relative">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary-container font-label-badge text-label-badge uppercase">
                      CRITICAL RISK 8.9 / 10
                    </span>
<span className="font-label-code text-[12px] text-outline">SEC-ID: #CWE-89-904</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-2 font-bold">
                    CWE-89: Direct SQL Injection in UserProfileQuery
                  </h4>
</div>
<div className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-label-badge text-label-badge flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  REMEDIATION READY
                </div>
</div>

<div className="mt-4 bg-surface-container-lowest p-3.5 rounded border border-outline-variant/30 font-label-code text-body-sm">
<div className="text-outline text-[11px] mb-1">LIVE TAINT FLOW TRACE:</div>
<div className="text-on-surface-variant">
<span className="text-error font-bold">req.params.username</span> → <span className="text-error">authController.ts:88</span> → <span className="text-error font-bold">db.rawQuery()</span> at repository.ts:142
                </div>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-outline-variant/30">
<div className="flex items-center gap-4 text-on-surface-variant font-label-code text-body-sm">
<span>Scope: <strong className="text-on-surface">auth-edge-cluster</strong></span>
<span>Impact: <strong className="text-primary">Data Exfiltration</strong></span>
</div>
<button className="px-4 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold flex items-center gap-1.5 hover:bg-inverse-primary transition-all" >
<span>Inspect Patch Proposal</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="tab-findings">
<div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-code text-body-sm font-bold text-on-surface">CWE-89: SQL Injection in UserProfileQuery</span>
</div>
<div className="flex items-center gap-3 font-label-code text-body-sm">
<span className="text-primary-container font-bold">CVSS: 9.1</span>
<span className="text-outline">Tier 0 Asset</span>
<span className="text-secondary">Patch Generated</span>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-code text-body-sm font-bold text-on-surface">CWE-918: SSRF in WebhookVerificationHandler</span>
</div>
<div className="flex items-center gap-3 font-label-code text-body-sm">
<span className="text-primary-container font-bold">CVSS: 8.6</span>
<span className="text-outline">Tier 1 Asset</span>
<span className="text-secondary">Patch Generated</span>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded border border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-label-code text-body-sm font-bold text-on-surface">CWE-79: Reflected XSS in AuditLogFormatter</span>
</div>
<div className="flex items-center gap-3 font-label-code text-body-sm">
<span className="text-primary font-bold">CVSS: 7.2</span>
<span className="text-outline">Tier 2 Asset</span>
<span className="text-emerald-400">Sandbox Passed</span>
</div>
</div>
</div>

<div className="hidden space-y-4" id="tab-remediation">
<div className="flex items-center justify-between bg-surface-container-low p-3 rounded border border-outline-variant/40">
<span className="font-label-code text-body-sm text-on-surface">Target File: <strong className="text-primary">src/services/userAuth.ts</strong></span>
<span className="font-label-badge text-label-badge text-secondary">PROPOSED DIFF #08A</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-label-code text-label-code">
<div className="bg-surface-container-high p-4 rounded border border-error-container/60">
<div className="text-error font-bold mb-2">Original Vulnerable Code</div>
<div className="text-on-surface-variant leading-relaxed">
                42 | async function getUser(username) &#123;<br/>
                43 | <span className="bg-error-container/30 text-error font-bold">const q = "SELECT * FROM users WHERE u = '" + username + "'";</span><br/>
                44 | return await db.raw(q);<br/>
                45 | &#125;
              </div>
</div>
<div className="bg-surface-container-high p-4 rounded border border-secondary-container/60">
<div className="text-secondary font-bold mb-2">Synthesized Validated Patch</div>
<div className="text-on-surface leading-relaxed">
                42 | async function getUser(username: string) &#123;<br/>
                43 | <span className="bg-secondary-container/30 text-secondary font-bold">const q = "SELECT id, role FROM users WHERE u = $1";</span><br/>
                44 | <span className="bg-secondary-container/30 text-secondary font-bold">return await db.query(q, [validator.escape(username)]);</span><br/>
                45 | &#125;
              </div>
</div>
</div>
</div>

<div className="hidden font-label-code text-label-code bg-surface-container-high p-4 rounded border border-outline-variant/40 space-y-1" id="tab-validation">
<div className="text-outline">[SANDBOX-SPINUP] Container id: #sbx-8812c initialized in 120ms</div>
<div className="text-on-surface-variant">[TEST-RUN] Executing 18 integration tests in /tests/auth/...</div>
<div className="text-emerald-400 font-bold">[PASSED] test_sql_injection_probe_rejected ... OK</div>
<div className="text-emerald-400 font-bold">[PASSED] test_standard_user_login_valid ... OK</div>
<div className="text-emerald-400 font-bold">[PASSED] test_unicode_username_sanitization ... OK</div>
<div className="text-secondary">[RE-SCAN] Static AST clean. Zero regressions detected.</div>
<div className="text-primary font-bold">[DECISION] Policy Engine verified recommendation. Ready for merge.</div>
</div>
</div>
</div>
</section>



<section className="py-24 border-t border-outline-variant/30 bg-surface-container-lowest/40">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/40">
          PRIORITIZATION MATRIX
        </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
          Severity tells you what is wrong. Context helps explain why it matters.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Why technical CVSS alone is insufficient. How asset tier, data sensitivity, and network exposure shift real-world defense postures.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-primary-container font-label-code text-label-code mb-2">
<span>FACTOR 01</span>
<span className="font-bold">SCORE: 9.1</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Technical Severity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Base CVSS score capturing flaw mechanics, confidentiality, integrity, and availability impact.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-primary-container h-full w-[91%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-primary font-label-code text-label-code mb-2">
<span>FACTOR 02</span>
<span className="font-bold">HIGH</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Exploitability</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Presence of known weaponized exploits or public proof-of-concept repositories in adversarial circulation.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-secondary font-label-code text-label-code mb-2">
<span>FACTOR 03</span>
<span className="font-bold">TIER 0</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Asset Criticality</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Service centrality and direct blast-radius affecting operational uptime or core databases.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-secondary h-full w-[95%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-secondary font-label-code text-label-code mb-2">
<span>FACTOR 04</span>
<span className="font-bold">RESTRICTED</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Data Sensitivity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Direct access to regulatory-classified customer PII, secret keys, financial ledgers, or session tokens.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-secondary h-full w-[80%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-primary font-label-code text-label-code mb-2">
<span>FACTOR 05</span>
<span className="font-bold">EDGE_PUBLIC</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Exposure Surface</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Whether the attack path is reachable unauthenticated from the public WAN or isolated in VPC subnets.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-primary h-full w-[88%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center text-emerald-400 font-label-code text-label-code mb-2">
<span>FACTOR 06</span>
<span className="font-bold">CONFIRMED</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Evidence Confidence</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Deterministic execution trace proving live exploitability rather than heuristic hypothesis.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="w-full bg-surface-container-high h-2 rounded overflow-hidden">
<div className="bg-emerald-400 h-full w-[100%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest px-3 py-1 bg-surface-container-low rounded border border-outline-variant/40">
          ONTOLOGICAL REASONING
        </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
          Security Knowledge Graph
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Connect findings to the systems, attack techniques, and defensive controls that matter.</p>
</div>
<div className="text-outline font-label-code text-label-code">Click nodes to inspect relationship schema</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 relative overflow-hidden min-h-[420px] flex items-center justify-center">

<div className="absolute w-[400px] h-[400px] rounded-full border border-secondary/15 pointer-events-none flex items-center justify-center">
<div className="w-[280px] h-[280px] rounded-full border border-primary/10"></div>
<div className="radar-beam absolute inset-0 bg-gradient-to-tr from-primary-container/10 via-transparent to-transparent rounded-full pointer-events-none"></div>
</div>

<svg className="w-full h-[380px] relative z-10" viewBox="0 0 600 380">

<line stroke="#ff5357" stroke-dasharray="4,4" stroke-width="1.5" x1="300" x2="160" y1="190" y2="100"></line>
<line stroke="#65d4f6" stroke-width="1.5" x1="300" x2="440" y1="190" y2="100"></line>
<line stroke="#e8bcb9" stroke-width="1.5" x1="300" x2="140" y1="190" y2="280"></line>
<line stroke="#65d4f6" stroke-dasharray="4,4" stroke-width="1.5" x1="300" x2="460" y1="190" y2="280"></line>
<line stroke="#ff5357" stroke-width="1.5" x1="300" x2="300" y1="190" y2="60"></line>

<g className="cursor-pointer group" >
<circle className="group-hover:fill-primary-container/20 transition-all filter drop-shadow-[0_0_12px_rgba(255,83,87,0.5)]" cx="300" cy="190" fill="#201f23" r="32" stroke="#ff5357" stroke-width="2"></circle>
<text fill="#ffb3af" font-family="Space Grotesk" font-size="11" font-weight="700" text-anchor="middle" x="300" y="195">FINDING</text>
</g>

<g className="cursor-pointer group" >
<circle className="group-hover:stroke-primary transition-all" cx="300" cy="60" fill="#201f23" r="24" stroke="#ff5357" stroke-width="1.5"></circle>
<text fill="#e5e1e6" font-family="JetBrains Mono" font-size="9" text-anchor="middle" x="300" y="64">CWE-89</text>
</g>

<g className="cursor-pointer group" >
<circle className="group-hover:stroke-primary transition-all" cx="160" cy="100" fill="#201f23" r="26" stroke="#ff5357" stroke-width="1.5"></circle>
<text fill="#ffb3af" font-family="JetBrains Mono" font-size="9" text-anchor="middle" x="160" y="104">T1190</text>
</g>

<g className="cursor-pointer group" >
<circle className="group-hover:stroke-secondary-fixed transition-all" cx="440" cy="100" fill="#201f23" r="26" stroke="#65d4f6" stroke-width="1.5"></circle>
<text fill="#65d4f6" font-family="JetBrains Mono" font-size="9" text-anchor="middle" x="440" y="104">users_db</text>
</g>

<g className="cursor-pointer group" >
<circle className="group-hover:stroke-outline transition-all" cx="140" cy="280" fill="#201f23" r="26" stroke="#af8785" stroke-width="1.5"></circle>
<text fill="#e5e1e6" font-family="JetBrains Mono" font-size="8" text-anchor="middle" x="140" y="284">PreparedStmt</text>
</g>

<g className="cursor-pointer group" >
<circle className="group-hover:stroke-secondary-fixed transition-all" cx="460" cy="280" fill="#201f23" r="26" stroke="#65d4f6" stroke-width="1.5"></circle>
<text fill="#65d4f6" font-family="JetBrains Mono" font-size="9" text-anchor="middle" x="460" y="284">WAF-4092</text>
</g>
</svg>
</div>

<div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 min-h-[420px] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
<span className="font-label-badge text-label-badge text-primary uppercase font-bold" id="inspect-category">VULNERABILITY NODE</span>
<span className="font-label-code text-body-sm text-outline" id="inspect-id">NODE_ID #ROOT</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-4" id="inspect-title">
            SQL Injection in UserProfileQuery
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed" id="inspect-desc">
            Central finding node discovered via static AST taint flow tracing. Connected upstream to ATT&amp;CK technique T1190 and downstream to Tier 0 database schema users_replica.
          </p>
<div className="mt-6 space-y-3 font-label-code text-body-sm">
<div className="bg-surface-container-high p-3 rounded">
<span className="text-outline block text-[11px]">ASSOCIATED ENTITY</span>
<span className="text-on-surface font-semibold" id="inspect-entity">Postgres RDS // Primary Cluster</span>
</div>
<div className="bg-surface-container-high p-3 rounded">
<span className="text-outline block text-[11px]">DEFENSIVE IMPLICATION</span>
<span className="text-primary font-semibold" id="inspect-implication">Requires parameterized query refactor before pull request merge.</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/30 font-label-badge text-label-badge text-outline flex items-center justify-between">
<span>GRAPH ENGINE v2.4</span>
<span className="text-secondary">NEO4J / CYPHER QUERYABLE</span>
</div>
</div>
</div>
</section>



<section className="py-24 border-t border-outline-variant/30 bg-surface-container-lowest/30">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/40">
          REASONING INTEGRITY
        </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
          AI can propose the fix. Evidence decides whether it earns trust.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Transparent multi-layer reasoning coupled with side-by-side AST verification.
        </p>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden mb-12 shadow-2xl">
<div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant/40 flex items-center justify-between font-label-code text-body-sm">
<span className="text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">code</span>
            diff // src/controllers/userController.ts
          </span>
<span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-label-badge text-label-badge">
            SYNTAX VERIFIED
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 font-label-code text-label-code p-4">

<div className="space-y-1 pr-0 md:pr-4">
<div className="text-error font-bold mb-2">// Vulnerable Implementation (AST Taint Confirmed)</div>
<div className="text-on-surface-variant"><span className="text-outline">41</span> export async function fetchProfile(req: Request) &#123;</div>
<div className="text-on-surface-variant"><span className="text-outline">42</span> const &#123; id &#125; = req.params;</div>
<div className="bg-error-container/20 text-error px-2 py-1 rounded line-through">
<span className="text-outline mr-2">43</span> const q = `SELECT * FROM profiles WHERE id = '$&#123;id&#125;'`;
            </div>
<div className="bg-error-container/20 text-error px-2 py-1 rounded line-through">
<span className="text-outline mr-2">44</span> const [record] = await db.raw(q);
            </div>
<div className="text-on-surface-variant"><span className="text-outline">45</span> return record;</div>
<div className="text-on-surface-variant"><span className="text-outline">46</span> &#125;</div>
</div>

<div className="space-y-1 pl-0 md:pl-4 pt-4 md:pt-0">
<div className="text-secondary font-bold mb-2">// Verified Candidate Patch (Parameterized AST)</div>
<div className="text-on-surface-variant"><span className="text-outline">41</span> export async function fetchProfile(req: Request) &#123;</div>
<div className="text-on-surface-variant"><span className="text-outline">42</span> const &#123; id &#125; = req.params;</div>
<div className="bg-secondary-container/20 text-secondary px-2 py-1 rounded">
<span className="text-outline mr-2">43</span> const query = 'SELECT id, handle, bio FROM profiles WHERE id = $1';
            </div>
<div className="bg-secondary-container/20 text-secondary px-2 py-1 rounded">
<span className="text-outline mr-2">44</span> const [record] = await db.query(query, [id]);
            </div>
<div className="text-on-surface-variant"><span className="text-outline">45</span> return record;</div>
<div className="text-on-surface-variant"><span className="text-outline">46</span> &#125;</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-primary mb-3">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
<span className="font-label-badge text-label-badge uppercase font-bold">LAYER 01</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Confirmed Evidence</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Static taint flow engine tracked raw string input from HTTP request body parameter directly to raw SQL query concatenation at line 43.
            </p>
</div>
<span className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-[11px] text-outline">DETERMINISTIC CONFIDENCE: 1.0</span>
</div>

<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-secondary mb-3">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span className="font-label-badge text-label-badge uppercase font-bold">LAYER 02</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">AI Interpretation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Model inferred high vulnerability likelihood under unauthenticated public access. Risk of full credential dump and arbitrary database table drops.
            </p>
</div>
<span className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-[11px] text-outline">REASONING UNCERTAINTY: &lt; 0.05</span>
</div>

<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-emerald-400 mb-3">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
<span className="font-label-badge text-label-badge uppercase font-bold">LAYER 03</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Defensible Validation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              Synthesized parameterized query builder. Re-scan executed in ephemeral container confirms 14/14 unit tests pass with zero newly introduced CWEs.
            </p>
</div>
<span className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-[11px] text-emerald-400 font-bold">VERIFIED PRODUCTION READY</span>
</div>
</div>
</div>
</section>



<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div className="max-w-2xl">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/40">
          SAFETY GUARANTEES
        </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
          A plausible patch can still be an unsafe patch.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Real-world failure simulation: How AegisOne intercepts subtle regressions and ensures zero-downtime rollback before human review.
        </p>
</div>
<div className="mt-4 md:mt-0 px-3 py-1.5 rounded bg-error-container/20 border border-error-container text-error font-label-code text-body-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">gavel</span>
        POLICY: REJECT_ON_REGRESSION
      </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40 flex flex-col justify-between h-64">
<div>
<span className="font-label-code text-body-sm text-outline font-bold">STEP 01</span>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold mt-2">Plausible LLM Patch</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-2">AI suggests fix resolving SQL injection by introducing asynchronous locking mutex.</p>
</div>
<span className="font-label-badge text-[10px] text-outline uppercase">PROPOSAL GENERATED</span>
</div>

<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40 flex flex-col justify-between h-64">
<div>
<span className="font-label-code text-body-sm text-secondary font-bold">STEP 02</span>
<h3 className="font-headline-sm text-[16px] text-on-surface font-semibold mt-2">Sandbox Stress Run</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-2">Isolated ephemeral container executes concurrency stress benchmark under simulated 5k rps.</p>
</div>
<span className="font-label-badge text-[10px] text-secondary uppercase">RUNNING BENCHMARK</span>
</div>

<div className="bg-surface-container-low p-5 rounded border border-error-container flex flex-col justify-between h-64">
<div>
<span className="font-label-code text-body-sm text-error font-bold">STEP 03</span>
<h3 className="font-headline-sm text-[16px] text-error font-semibold mt-2">Secondary Failure</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-2">Memory leak detected. Container RAM spikes to 98.4% and encounters event-loop thread deadlock.</p>
</div>
<span className="font-label-badge text-[10px] text-error uppercase font-bold">DEADLOCK TRIGGERED</span>
</div>

<div className="bg-surface-container-low p-5 rounded border border-error-container flex flex-col justify-between h-64">
<div>
<span className="font-label-code text-body-sm text-error font-bold">STEP 04</span>
<h3 className="font-headline-sm text-[16px] text-error font-semibold mt-2">Patch Rejected</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-2">Policy engine tags patch as unsafe. Pull request generation is permanently terminated.</p>
</div>
<span className="font-label-badge text-[10px] text-error uppercase font-bold">HARD_REJECT</span>
</div>

<div className="bg-surface-container-low p-5 rounded border border-emerald-500/50 flex flex-col justify-between h-64">
<div>
<span className="font-label-code text-body-sm text-emerald-400 font-bold">STEP 05</span>
<h3 className="font-headline-sm text-[16px] text-emerald-400 font-semibold mt-2">Instant Rollback</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-2">Ephemeral sandbox destroyed in 240ms. Baseline production environment remains fully unharmed.</p>
</div>
<span className="font-label-badge text-[10px] text-emerald-400 uppercase font-bold">BASELINE STABLE</span>
</div>
</div>
</section>



<section className="py-24 border-t border-outline-variant/30 bg-surface-container-lowest/50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12">
<span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest px-3 py-1 bg-surface-container-low rounded border border-outline-variant/40">
          SCIENTIFIC REPRODUCIBILITY
        </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
          Built to be evaluated, not merely demonstrated.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Strict evaluation methodology against standardized benchmark suites. Rigorous statistical transparency with published experiment boundaries.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40">
<span className="font-label-code text-[11px] text-outline block">Detection Coverage</span>
<div className="font-display-hero text-[36px] text-on-surface font-bold mt-2">94.2%</div>
<span className="font-label-badge text-[10px] text-secondary">OWASP Suite v1.2</span>
<p className="font-label-code text-[10px] text-outline mt-2">Example metric — not a measured result</p>
</div>
<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40">
<span className="font-label-code text-[11px] text-outline block">False Positive Rate</span>
<div className="font-display-hero text-[36px] text-primary font-bold mt-2">3.8%</div>
<span className="font-label-badge text-[10px] text-outline">AST Filtered</span>
<p className="font-label-code text-[10px] text-outline mt-2">Example metric — not a measured result</p>
</div>
<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40">
<span className="font-label-code text-[11px] text-outline block">Sandbox Patch Pass Rate</span>
<div className="font-display-hero text-[36px] text-emerald-400 font-bold mt-2">82.4%</div>
<span className="font-label-badge text-[10px] text-emerald-400">First-attempt valid</span>
<p className="font-label-code text-[10px] text-outline mt-2">Example metric — not a measured result</p>
</div>
<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40">
<span className="font-label-code text-[11px] text-outline block">Unsafe Patch Rejection</span>
<div className="font-display-hero text-[36px] text-primary-container font-bold mt-2">99.1%</div>
<span className="font-label-badge text-[10px] text-primary-container">Regression caught</span>
<p className="font-label-code text-[10px] text-outline mt-2">Example metric — not a measured result</p>
</div>
<div className="bg-surface-container-low p-5 rounded border border-outline-variant/40">
<span className="font-label-code text-[11px] text-outline block">Rollback Latency</span>
<div className="font-display-hero text-[36px] text-secondary font-bold mt-2">&lt;350ms</div>
<span className="font-label-badge text-[10px] text-secondary">Container purge</span>
<p className="font-label-code text-[10px] text-outline mt-2">Awaiting experiment data</p>
</div>
</div>

<div className="p-4 rounded bg-surface-container-high/50 border border-outline-variant/30 font-label-code text-body-sm text-on-surface-variant flex items-center justify-between">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">science</span>
          Benchmarks derived from synthetic test fixtures and standardized CVE corpora under closed defensive lab supervision.
        </span>
<span className="text-outline font-bold">REPRODUCIBILITY SPEC: IEEE-CYBER-88</span>
</div>
</div>
</section>



<section className="py-24 max-w-7xl mx-auto px-6" id="labs">
<div className="max-w-3xl mb-12">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/40">
        AUTHORIZED TESTBEDS
      </span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-3">
        Defensive Lab Environments
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
        Isolated sandbox runtimes engineered for deterministic vulnerability reproduction, safe exploitation testing, and patch validation.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[28px]">web</span>
<span className="font-label-code text-[11px] text-primary uppercase">LAB_01 // ACTIVE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Web Application Security Lab</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          Standardized OWASP Top 10 target harness with customizable injection vulnerabilities, CSRF, and prototype pollution test vectors.
        </p>
<div className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-body-sm text-outline">
          Stack: Node.js, Express, Postgres 15, Redis
        </div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 hover:border-secondary/60 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-secondary text-[28px]">hub</span>
<span className="font-label-code text-[11px] text-secondary uppercase">LAB_02 // ACTIVE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Security Knowledge Graph Lab</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          Graph ontological reasoning harness for complex lateral movement mapping, MITRE ATT&amp;CK alignment, and attack surface discovery.
        </p>
<div className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-body-sm text-outline">
          Stack: Neo4j Graph Engine, Cypher v5, GraphQL
        </div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[28px]">developer_board</span>
<span className="font-label-code text-[11px] text-primary uppercase">LAB_03 // ACTIVE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Remediation Sandbox Lab</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          MicroVM and gVisor isolated test execution runner for rapid automated regression validation, performance profiling, and safety checks.
        </p>
<div className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-body-sm text-outline">
          Stack: Firecracker MicroVM, Docker, gVisor Runsc
        </div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/40 hover:border-secondary/60 transition-colors">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-secondary text-[28px]">key</span>
<span className="font-label-code text-[11px] text-secondary uppercase">LAB_04 // ACTIVE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Cryptographic Defensive Analysis</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          Automated auditing harness for cipher suite misconfigurations, weak PRNG token generation, and post-quantum algorithm readiness.
        </p>
<div className="mt-4 pt-3 border-t border-outline-variant/30 font-label-code text-body-sm text-outline">
          Stack: OpenSSL 3.2, Rustls, TLS 1.3 Audit Rig
        </div>
</div>
</div>

<div className="p-4 rounded-lg bg-error-container/15 border border-error-container/50 flex items-center gap-4">
<span className="material-symbols-outlined text-error text-[24px]">policy</span>
<div className="font-label-code text-body-sm text-on-surface">
<strong className="text-error uppercase">Compliance &amp; Ethical Scope Advisory:</strong>
        Scan only applications and code repositories you own or are explicitly authorized to test. External network sweeps and unconsented security scans remain strictly prohibited.
      </div>
</div>
</section>



<section className="relative py-28 border-t border-outline-variant/30 overflow-hidden bg-gradient-to-b from-surface-container-lowest to-surface-container">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,83,87,0.15)_0%,transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest px-3 py-1 bg-surface-container rounded border border-outline-variant/50 mb-4">
        RESEARCH PROTOTYPE v0.9.4
      </span>
<h2 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface leading-tight">
        Make every security decision <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">
          defensible.
        </span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
        Connect application evidence, explain real risk, inspect code remediation, and validate changes before accepting them.
      </p>
<div className="flex flex-wrap items-center justify-center gap-4 mt-8">
<a className="flex items-center gap-2 bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline-sm text-body-md font-bold px-8 py-4 rounded transition-all duration-150 shadow-[0_0_24px_rgba(255,83,87,0.45)] group" href="/console">
<span>Open Security Command Center</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant hover:border-secondary text-on-surface font-headline-sm text-body-md px-8 py-4 rounded transition-all duration-150" href="#pipeline">
<span>Explore the Research Workflow</span>
</a>
</div>
</div>
</section>

<footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
<div className="w-full px-8 py-16 max-w-7xl mx-auto flex flex-col gap-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

<div className="lg:col-span-2 space-y-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>shield</span>
</div>
<span className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">AegisOne AI</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
            AegisOne AI is an academic cybersecurity research platform dedicated to deterministic software defense and explainable AI verification.
          </p>
<div className="font-label-code text-[11px] text-outline">
            BUILD: 2025.04-RC2 · DEFENSIVE VERIFICATION RIG
          </div>
</div>

<div className="space-y-3">
<h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Platform</h4>
<ul className="space-y-2 font-label-code text-label-code">
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#pipeline">Architecture Specs</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="/console">Threat Telemetry</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#research">Model Disclosure</a></li>
</ul>
</div>

<div className="space-y-3">
<h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Research &amp; Labs</h4>
<ul className="space-y-2 font-label-code text-label-code">
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#labs">Adversarial Research</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#labs">Defensive Labs</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="#docs">Documentation</a></li>
</ul>
</div>

<div className="space-y-3">
<h4 className="font-headline-sm text-[16px] text-on-surface font-bold">Trust &amp; Integrity</h4>
<ul className="space-y-2 font-label-code text-label-code">
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="/console">Security Bug Bounty</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="/console">Responsible Disclosure</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors duration-150" href="/console">Status Monitor</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-body-sm font-body-sm text-on-surface-variant">
<div>
          © 2025 AegisOne AI Systems Inc. Defensible Editorial Engineering. All vectors verified.
        </div>
<div className="flex items-center gap-6 font-label-code text-label-code">
<span className="flex items-center gap-1.5 text-emerald-400">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> ALL SYSTEMS OPERATIONAL
          </span>
</div>
</div>
</div>
</footer>





    </div>
  );
};

export default LandingPage;
