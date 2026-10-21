import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getSettings) {
          const res = await api.getSettings();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load SettingsPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="max-w-[1440px] mx-auto p-space-lg space-y-space-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/20 pb-4 pt-2">
<div>
<div className="flex items-center space-x-2 mb-1">
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40">KERNEL CONTROL PLANE</span>
<span className="text-label-badge font-label-badge text-on-surface-variant font-mono">ASVS-LEVEL-2 STRICT</span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
            Global Settings &amp; Security Configuration
          </h1>
<p className="text-body-md font-body-md text-on-surface-variant max-w-4xl mt-1">
            Central administrative control plane for application behavior, security assessment limits, AI reasoning policies, and data retention governance.
          </p>
</div>
<div className="mt-4 md:mt-0 flex items-center space-x-2">
<div className="text-right">
<div className="text-label-badge font-label-badge text-on-surface-variant">ACTIVE POLICY STATE</div>
<div className="text-label-code font-label-code text-secondary font-semibold">ENFORCED (DETERMINISTIC)</div>
</div>
<div className="w-10 h-10 rounded bg-surface-container-low border border-outline-variant/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]" >policy</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-md rounded bg-[#12131A] border border-primary-container/40 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">Configuration State</span>
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<span className="text-headline-sm font-headline-sm text-primary font-bold">PENDING REVIEW</span>
</div>
<div className="mt-1 flex items-center text-body-sm font-body-sm text-on-surface-variant/90">
<span className="material-symbols-outlined text-[14px] text-primary mr-1" >sync_problem</span>
<span>2 unsaved changes staged</span>
</div>
</div>

<div className="p-space-md rounded bg-[#12131A] border border-[#292A34] hover:border-outline-variant/60 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">Active Guardrails</span>
<span className="material-symbols-outlined text-secondary text-[18px]" >shield_lock</span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<span className="text-headline-sm font-headline-sm text-secondary font-bold">14 Enforced</span>
</div>
<div className="mt-1 text-body-sm font-body-sm text-on-surface-variant/90 truncate">
            Deterministic AST &amp; gVisor Sandbox gates active
          </div>
</div>

<div className="p-space-md rounded bg-[#12131A] border border-[#292A34] hover:border-outline-variant/60 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">Security Warnings</span>
<span className="material-symbols-outlined text-[#FFB84D] text-[18px]" >warning</span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<span className="text-headline-sm font-headline-sm text-[#FFB84D] font-bold">1 Non-blocking</span>
</div>
<div className="mt-1 text-body-sm font-body-sm text-on-surface-variant/90 truncate">
            Crawl depth increased in lab profile (Depth: 4)
          </div>
</div>

<div className="p-space-md rounded bg-[#12131A] border border-[#292A34] hover:border-outline-variant/60 transition-colors">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">Config Hash &amp; Audit</span>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]" >tag</span>
</div>
<div className="mt-2 font-mono text-label-code font-label-code text-on-surface font-semibold truncate">
            v4.2.8-prod · sha256:4f8e...921a
          </div>
<div className="mt-1 text-body-sm font-body-sm text-on-surface-variant/80 truncate">
            Modified 14:10 UTC by Analyst_442
          </div>
</div>
</div>



<div className="grid grid-cols-12 gap-space-lg items-start">

<div className="col-span-12 lg:col-span-3 sticky top-20 space-y-space-md">
<div className="rounded bg-[#12131A] border border-[#292A34] p-space-sm">
<div className="px-3 py-2 text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider border-b border-[#292A34]">
              Configuration Sections
            </div>
<nav className="space-y-1 mt-2">

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-general">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >tune</span>
<span>General</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">UTC+0</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm bg-[#191A22] border-l-2 border-primary text-primary font-semibold shadow-sm" href="#section-security">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px] text-primary" >verified_user</span>
<span>Security Defaults</span>
</div>
<span className="text-label-badge font-label-badge px-1.5 py-0.2 rounded bg-primary-container/20 text-primary border border-primary-container/30">1 STAGED</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-scanning">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >radar</span>
<span>Scanning Limits</span>
</div>
<span className="text-label-badge font-label-badge px-1.5 py-0.2 rounded bg-[#FFB84D]/20 text-[#FFB84D] border border-[#FFB84D]/30">1 WARN</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-ai">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >smart_toy</span>
<span>AI &amp; Reasoning</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-sandbox">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >terminal</span>
<span>Remediation &amp; Sandbox</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">gVisor</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-retention">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >database</span>
<span>Data &amp; Retention</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">WAL</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-notifications">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >notifications</span>
<span>Notifications</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">Webhooks</span>
</a>

<a className="flex items-center justify-between px-3 py-2 rounded text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40 transition-colors" href="#section-advanced">
<div className="flex items-center space-x-2.5">
<span className="material-symbols-outlined text-[16px]" >memory</span>
<span>Advanced &amp; Telemetry</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">Workers: 8</span>
</a>
</nav>
</div>

<div className="rounded bg-[#12131A] border border-primary-container/40 p-space-md space-y-3">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-primary uppercase font-bold tracking-wider">Pending Modifications</span>
<span className="text-label-badge font-label-badge px-1.5 py-0.5 rounded bg-primary-container text-white">2 Staged</span>
</div>
<div className="space-y-2 text-label-code font-label-code">
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/30">
<div className="flex items-center justify-between text-on-surface">
<span>Verification Gate</span>
<span className="text-primary font-bold">[MANDATORY]</span>
</div>
<div className="text-[11px] text-on-surface-variant mt-0.5">AST Trace &amp; Exploit Replay gate enforced</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/30">
<div className="flex items-center justify-between text-on-surface">
<span>Lab Scan Depth</span>
<span className="text-[#FFB84D] font-bold">[3 ➔ 4]</span>
</div>
<div className="text-[11px] text-on-surface-variant mt-0.5">Target scope spider recursion depth</div>
</div>
</div>
<div className="text-[11px] text-on-surface-variant font-body-sm flex items-center justify-between pt-1 border-t border-[#292A34]">
<span>Staged by Analyst_442</span>
<span className="text-secondary font-mono">14:10 UTC</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-9 space-y-space-lg">



<section className="rounded bg-[#12131A] border border-[#292A34] overflow-hidden" id="section-security">
<div className="px-space-lg py-space-md bg-[#191A22] border-b border-[#292A34] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]" >gite</span>
</div>
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">1. Security Defaults &amp; Verification Gates</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">Deterministic conditions required before any vulnerability or remediation can be accepted.</p>
</div>
</div>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-secondary-container/20 text-secondary border border-secondary-container/30">
                KERNEL INTEGRITY ACTIVE
              </span>
</div>
<div className="p-space-lg space-y-space-md">

<div className="p-space-md rounded bg-[#191A22] border border-primary-container/40 space-y-2">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center space-x-2">
<span className="text-body-md font-body-md font-semibold text-on-surface">Evidence Requirement for Vulnerability Confirmation</span>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40">STAGED MODIFICATION</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                      Requires deterministic AST taint trace or isolated sandbox exploit replay before findings graduate to <code className="font-mono text-primary font-bold">CONFIRMED</code>.
                    </p>
</div>

<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-primary-container focus:outline-none">
<span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="mt-2 p-2 rounded bg-surface-container-lowest border border-secondary/20 flex items-center space-x-2 text-label-code font-label-code">
<span className="material-symbols-outlined text-secondary text-[16px]" >info</span>
<span className="text-secondary text-[12px]">Cyan Directive: Heuristic inferences without taint proofs will remain tagged as <span className="text-white font-bold">PROVISIONAL_HYPOTHESIS</span>.</span>
</div>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] flex items-center justify-between">
<div>
<div className="text-body-md font-body-md font-semibold text-on-surface">Epistemic Distinction Display</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    AI reasoning must render explicit cryptographic demarcations separating <span className="text-secondary font-mono font-semibold">Observed Evidence</span>, <span className="text-[#FFB84D] font-mono font-semibold">AI Inference</span>, and <span className="text-[#45D49A] font-mono font-semibold">Validation Proof</span>.
                  </p>
</div>

<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-[#45D49A] focus:outline-none">
<span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-surface-container-lowest shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] flex items-center justify-between">
<div>
<div className="flex items-center space-x-2">
<span className="text-body-md font-body-md font-semibold text-on-surface">Autonomous Code Mutation Gate</span>
<span className="text-label-badge font-label-badge px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/30">M-of-N REQUIRED</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    Prohibits automated PR patch merges directly to upstream repositories without dual-operator cryptographic ED25519 signatures.
                  </p>
</div>

<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-primary-container focus:outline-none">
<span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] flex items-center justify-between">
<div>
<div className="flex items-center space-x-2">
<span className="text-body-md font-body-md font-semibold text-on-surface">External Threat Intel Provenance</span>
<span className="text-label-badge font-label-badge px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/30">STRICT SIGNED</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    Automatically discards or isolates unsigned CVE/CWE advisory enrichment from untrusted relays.
                  </p>
</div>

<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-[#45D49A] focus:outline-none">
<span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-surface-container-lowest shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</section>



<section className="rounded bg-[#12131A] border border-[#292A34] overflow-hidden" id="section-scanning">
<div className="px-space-lg py-space-md bg-[#191A22] border-b border-[#292A34] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-secondary-container/20 border border-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]" >speed</span>
</div>
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">2. Assessment &amp; Scanning Safety Limits</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">Throttling boundaries to prevent accidental denial of service on staging clusters.</p>
</div>
</div>
<span className="text-label-badge font-label-badge text-on-surface-variant font-mono">TARGET: college-placement-v2.1</span>
</div>
<div className="p-space-lg space-y-space-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<div className="flex items-center justify-between">
<label className="text-body-md font-body-md font-semibold text-on-surface">Max Ingress Concurrency</label>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono">10 REQ/SEC</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">Rate-limit per worker thread targeting HTTP/gRPC ingress.</p>
<div className="pt-2 flex items-center space-x-3">
<input className="w-full accent-[#55C7E8] bg-surface-variant h-1.5 rounded-lg appearance-none cursor-pointer" max="50" min="1" type="range" value="10"/>
<span className="text-label-code font-label-code text-on-surface w-8 text-right font-mono">10</span>
</div>
<div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
<span>1 req/s (Gentle)</span>
<span className="text-primary">Safe boundary: ≤ 25 req/s</span>
<span>50 req/s</span>
</div>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<div className="flex items-center justify-between">
<label className="text-body-md font-body-md font-semibold text-on-surface">Sandbox Execution Timeout</label>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono">120 SECONDS</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">gVisor runtime termination threshold for dynamic probes.</p>
<div className="pt-2 flex items-center space-x-3">
<input className="w-full accent-primary-container bg-surface-variant h-1.5 rounded-lg appearance-none cursor-pointer" max="300" min="30" step="10" type="range" value="120"/>
<span className="text-label-code font-label-code text-on-surface w-10 text-right font-mono">120s</span>
</div>
<div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
<span>30s</span>
<span className="text-[#FFB84D]">Warning trigger at &gt;180s</span>
<span>300s</span>
</div>
</div>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<label className="block text-body-md font-body-md font-semibold text-on-surface">Default AST Taint Dialect</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="p-3 rounded bg-[#191A22] border border-primary-container/60 cursor-pointer flex items-center justify-between">
<div>
<div className="text-body-sm font-body-sm font-semibold text-on-surface">Python 3.11 AST / PySQL v4.2</div>
<div className="text-[11px] text-on-surface-variant font-mono">Active Target Dialect</div>
</div>
<span className="material-symbols-outlined text-primary text-[18px]" >check_circle</span>
</div>
<div className="p-3 rounded bg-surface-container-lowest border border-[#292A34] hover:border-outline-variant/50 cursor-pointer flex items-center justify-between opacity-70">
<div>
<div className="text-body-sm font-body-sm text-on-surface">TypeScript / ECMAScript 2023</div>
<div className="text-[11px] text-on-surface-variant font-mono">V8 Tree-Sitter Core</div>
</div>
</div>
<div className="p-3 rounded bg-surface-container-lowest border border-[#292A34] hover:border-outline-variant/50 cursor-pointer flex items-center justify-between opacity-70">
<div>
<div className="text-body-sm font-body-sm text-on-surface">Golang 1.22 SSA Engine</div>
<div className="text-[11px] text-on-surface-variant font-mono">Static Single Assignment</div>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-body-md font-body-md font-semibold text-on-surface">Prohibited Test Vectors (Negative Guardrails)</div>
<div className="text-body-sm font-body-sm text-on-surface-variant">The kernel halts scan actions immediately if payloads match these prohibited signatures.</div>
</div>
<span className="text-label-badge font-label-badge text-primary font-mono uppercase">Zero-Tolerance Enforced</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
<label className="flex items-start space-x-2.5 p-2.5 rounded bg-[#191A22] border border-[#292A34] cursor-pointer">
<input defaultChecked className="mt-0.5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary-container" type="checkbox"/>
<div className="text-body-sm font-body-sm">
<div className="text-on-surface font-medium">Destructive DDL Probes</div>
<div className="text-[11px] text-on-surface-variant font-mono">DROP, TRUNCATE, ALTER TABLE</div>
</div>
</label>
<label className="flex items-start space-x-2.5 p-2.5 rounded bg-[#191A22] border border-[#292A34] cursor-pointer">
<input defaultChecked className="mt-0.5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary-container" type="checkbox"/>
<div className="text-body-sm font-body-sm">
<div className="text-on-surface font-medium">Volumetric DDoS Fuzzing</div>
<div className="text-[11px] text-on-surface-variant font-mono">Socket exhaustion / amplification</div>
</div>
</label>
<label className="flex items-start space-x-2.5 p-2.5 rounded bg-[#191A22] border border-[#292A34] cursor-pointer">
<input defaultChecked className="mt-0.5 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary-container" type="checkbox"/>
<div className="text-body-sm font-body-sm">
<div className="text-on-surface font-medium">Unauth Mass Stuffing</div>
<div className="text-[11px] text-on-surface-variant font-mono">Credential dictionary blasting</div>
</div>
</label>
</div>
</div>
</div>
</section>



<section className="rounded bg-[#12131A] border border-[#292A34] overflow-hidden" id="section-ai">
<div className="px-space-lg py-space-md bg-[#191A22] border-b border-[#292A34] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]" >neurology</span>
</div>
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">3. AI Model &amp; Reasoning Guardrails</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">Inference constraints, prompt injection shields, and verifiable token grounding.</p>
</div>
</div>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-[#45D49A]/20 text-[#45D49A] border border-[#45D49A]/30">
                PROMPT FILTER: ARMED
              </span>
</div>
<div className="p-space-lg space-y-space-md">

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded bg-[#191A22] border border-outline-variant/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" >psychology</span>
</div>
<div>
<div className="text-body-md font-body-md font-semibold text-on-surface">
                      Anthropic Claude 3.5 Sonnet (Primary)
                    </div>
<div className="text-body-sm font-body-sm text-on-surface-variant">
                      Deterministic Fallback: <span className="font-mono text-secondary">gVisor Local Rule Engine (Offline)</span>
</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="text-right">
<div className="text-label-badge font-label-badge text-on-surface-variant">API ORCHESTRATION</div>
<div className="text-label-code font-label-code text-[#45D49A] font-semibold flex items-center justify-end space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
<span>CONNECTED</span>
</div>
</div>
<button className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/30 text-body-sm font-body-sm text-on-surface hover:text-white transition-colors">
                    Rotate Key
                  </button>
</div>
</div>

<div className="p-space-md rounded bg-[#191A22] border border-primary-container/40 flex items-center justify-between">
<div>
<div className="flex items-center space-x-2">
<span className="text-body-md font-body-md font-semibold text-on-surface">Adversarial Prompt-Injection Defense</span>
<span className="text-label-badge font-label-badge px-1.5 py-0.5 rounded bg-primary-container text-white">ACTIVE SHIELD</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                    Intercepts manipulated AST strings or adversarial token sequences that attempt to coerce the reasoning engine into bypassing scope.
                  </p>
</div>

<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-primary-container focus:outline-none">
<span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<div className="flex items-center justify-between">
<label className="text-body-md font-body-md font-semibold text-on-surface">Explanation Hallucination Suppression</label>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-[#191A22] text-secondary font-mono">0.10 TEMPERATURE</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                  Clamps generative drift. The engine cannot hypothesize vulnerabilities without quoting exact file paths and source AST line ranges.
                </p>
<div className="pt-2 flex items-center space-x-3">
<input className="w-full accent-secondary bg-surface-variant h-1.5 rounded-lg appearance-none cursor-pointer" max="0.7" min="0.0" step="0.05" type="range" value="0.10"/>
<span className="text-label-code font-label-code text-secondary font-mono font-bold">0.10</span>
</div>
<div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
<span className="text-secondary font-bold">Strict 0.0 (Zero Creativity)</span>
<span className="text-on-surface">Current: Grounded Evidence Only</span>
<span>0.70 (Exploratory / Unsafe)</span>
</div>
</div>
</div>
</section>



<section className="rounded bg-[#12131A] border border-[#292A34] overflow-hidden" id="section-retention">
<div className="px-space-lg py-space-md bg-[#191A22] border-b border-[#292A34] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-surface-variant border border-outline-variant/40 flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]" >archive</span>
</div>
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">4. Data Governance &amp; Evidence Retention</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">Cryptographic storage, SQLite WAL archival pruning, and audit log immutability.</p>
</div>
</div>
<span className="text-label-badge font-label-badge text-on-surface-variant font-mono">ENCRYPTION: AES-256-GCM</span>
</div>
<div className="p-space-lg space-y-space-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<label className="block text-body-md font-body-md font-semibold text-on-surface">Vulnerability Evidence Manifests</label>
<p className="text-body-sm font-body-sm text-on-surface-variant">Storage retention period for SQLite WAL databases containing AST traces.</p>
<select className="mt-2 block w-full rounded bg-[#191A22] border border-[#292A34] text-body-sm font-body-sm text-on-surface py-2 px-3 focus:border-primary-container focus:ring-0">
<option >180 Days (Compliance ASVS Level 2)</option>
<option>90 Days (Standard Corporate)</option>
<option>365 Days (Extended Regulatory)</option>
<option>Indefinite (Legal Hold Freeze)</option>
</select>
</div>

<div className="p-space-md rounded bg-surface-container-lowest border border-[#292A34] space-y-2">
<label className="block text-body-md font-body-md font-semibold text-on-surface">Replay Sandbox Diffs &amp; Logs</label>
<p className="text-body-sm font-body-sm text-on-surface-variant">Ephemeral container execution traces and raw network PCAP dumps.</p>
<select className="mt-2 block w-full rounded bg-[#191A22] border border-[#292A34] text-body-sm font-body-sm text-on-surface py-2 px-3 focus:border-primary-container focus:ring-0">
<option >30 Days auto-purge</option>
<option>14 Days auto-purge</option>
<option>60 Days auto-purge</option>
<option>Never purge (High Storage Footprint)</option>
</select>
</div>
</div>

<div className="p-space-md rounded bg-[#191A22] border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center space-x-3">
<span className="material-symbols-outlined text-secondary text-[24px]" >verified</span>
<div>
<div className="text-body-sm font-body-sm font-semibold text-on-surface">Manual Merkle Root Notarization</div>
<div className="text-[11px] text-on-surface-variant font-mono">Last Checkpoint: 2025-02-23 00:00:01 UTC · Block #89,412</div>
</div>
</div>
<button className="px-3.5 py-1.5 rounded bg-surface-container-high hover:bg-surface-variant border border-secondary/40 text-secondary hover:text-white text-body-sm font-body-sm transition-all duration-150 flex items-center space-x-1.5 self-start sm:self-auto font-mono text-[12px]">
<span className="material-symbols-outlined text-[16px]" >fingerprint</span>
<span>Trigger Cryptographic Log Checkpoint (ED25519)</span>
</button>
</div>
</div>
</section>



<section className="rounded bg-[#12131A] border border-[#292A34] overflow-hidden">
<div className="px-space-lg py-space-md bg-[#191A22] border-b border-[#292A34] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded bg-surface-variant border border-outline-variant/40 flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]" >history</span>
</div>
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Recent Configuration Changes Audit Ledger</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">Immutable administrative telemetry synced with primary security SIEM.</p>
</div>
</div>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">
                MERKLE VERIFIED
              </span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-label-code font-label-code border-collapse">
<thead>
<tr className="bg-surface-container-lowest/70 border-b border-[#292A34] text-on-surface-variant text-[11px] uppercase tracking-wider">
<th className="py-2.5 px-4">Timestamp (UTC)</th>
<th className="py-2.5 px-4">Setting Key</th>
<th className="py-2.5 px-4">Prior Value</th>
<th className="py-2.5 px-4">New / Staged Value</th>
<th className="py-2.5 px-4">Operator / Actor</th>
<th className="py-2.5 px-4 text-right">Merkle Event Hash</th>
</tr>
</thead>
<tbody className="divide-y divide-[#292A34]/50 text-body-sm font-body-sm">

<tr className="bg-[#191A22]/40 hover:bg-[#191A22] transition-colors">
<td className="py-2.5 px-4 font-mono text-primary text-[12px] font-semibold">14:10:22 STAGED</td>
<td className="py-2.5 px-4 font-mono text-on-surface font-medium">verify.evidence_req</td>
<td className="py-2.5 px-4 font-mono text-on-surface-variant">HEURISTIC_ALLOWED</td>
<td className="py-2.5 px-4 font-mono text-primary font-bold">STRICT_MANDATORY</td>
<td className="py-2.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[11px] font-mono">Analyst_442</span>
</td>
<td className="py-2.5 px-4 font-mono text-[11px] text-right text-on-surface-variant/70">f9a1...3b08</td>
</tr>

<tr className="bg-[#191A22]/40 hover:bg-[#191A22] transition-colors">
<td className="py-2.5 px-4 font-mono text-[#FFB84D] text-[12px] font-semibold">13:58:04 STAGED</td>
<td className="py-2.5 px-4 font-mono text-on-surface font-medium">scan.crawl_depth</td>
<td className="py-2.5 px-4 font-mono text-on-surface-variant">3 (Standard)</td>
<td className="py-2.5 px-4 font-mono text-[#FFB84D] font-bold">4 (Lab Staging)</td>
<td className="py-2.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[11px] font-mono">Analyst_442</span>
</td>
<td className="py-2.5 px-4 font-mono text-[11px] text-right text-on-surface-variant/70">81e3...a49d</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant text-[12px]">11:24:19 UTC</td>
<td className="py-2.5 px-4 font-mono text-on-surface">sandbox.exec_timeout</td>
<td className="py-2.5 px-4 font-mono text-on-surface-variant">90s</td>
<td className="py-2.5 px-4 font-mono text-[#45D49A]">120s</td>
<td className="py-2.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[11px] font-mono">Analyst_442</span>
</td>
<td className="py-2.5 px-4 font-mono text-[11px] text-right text-secondary">0x4e21...cc19</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant text-[12px]">09:12:44 UTC</td>
<td className="py-2.5 px-4 font-mono text-on-surface">governance.mutation_gate</td>
<td className="py-2.5 px-4 font-mono text-on-surface-variant">SINGLE_OPERATOR</td>
<td className="py-2.5 px-4 font-mono text-[#45D49A]">M_OF_N_DUAL_SIG</td>
<td className="py-2.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-[11px] font-mono">SecOps_Lead</span>
</td>
<td className="py-2.5 px-4 font-mono text-[11px] text-right text-secondary">0x918a...22fd</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant text-[12px]">00:00:02 UTC</td>
<td className="py-2.5 px-4 font-mono text-on-surface">ruleset.asvs_profile</td>
<td className="py-2.5 px-4 font-mono text-on-surface-variant">v4.0.2-strict</td>
<td className="py-2.5 px-4 font-mono text-on-surface font-semibold">v4.0.3-strict</td>
<td className="py-2.5 px-4">
<span className="px-2 py-0.5 rounded bg-surface-variant text-secondary text-[11px] font-mono">SYSTEM_DAEMON</span>
</td>
<td className="py-2.5 px-4 font-mono text-[11px] text-right text-secondary">0x12bb...8801</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-2.5 bg-surface-container-lowest border-t border-[#292A34] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-on-surface-variant">
<div className="flex items-center space-x-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span>Ledger synchronised with AWS KMS Hardware Enclave (Region: us-east-1)</span>
</div>
<div className="mt-1 sm:mt-0 text-on-surface">
                Merkle State Tree: <span className="text-secondary font-bold">HEX-VALIDATED 0x8F9...</span>
</div>
</div>
</section>
</div>
</div>
</div>

    </div>
  );
};

export default SettingsPage;
