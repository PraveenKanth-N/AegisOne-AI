import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ScanConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getProjects) {
          const res = await api.getProjects();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ScanConfigPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="max-w-[1440px] mx-auto px-space-lg py-space-md space-y-space-md">

<div className="bg-surface-container-low/60 border border-outline-variant/30 rounded p-space-md relative overflow-hidden backdrop-blur-sm">

<div className="absolute -top-24 -right-12 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -left-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
<div>

<div className="flex items-center gap-2 mb-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="text-label-badge font-label-badge text-primary-container tracking-wider uppercase text-[10px]">
                AUTHORIZED ASSESSMENT ENGINE · STRICT LAB SCOPE ENFORCEMENT · KERNEL v4.2
              </span>
</div>
<h2 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
              Configure Security Assessment
            </h2>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 mt-1 max-w-3xl">
              Define an authorized target scope, select supported defensive checks, configure execution safety safeguards, and confirm explicit authorization before launching.
            </p>
</div>

<div className="flex flex-wrap items-center gap-2 self-start md:self-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 text-label-badge font-label-badge text-[11px] text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              TARGET: <span className="text-secondary font-mono">college-placement-v2.1</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 text-label-badge font-label-badge text-[11px] text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              SCOPE: <span className="text-primary-container font-mono">STRICT BOUNDARIES</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 text-label-badge font-label-badge text-[11px] text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              SANDBOX: <span className="text-secondary font-mono">PRIMED</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 border border-primary-container/30 text-label-badge font-label-badge text-[11px] text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
              STATUS: CONFIGURATION IN PROGRESS
            </span>
</div>
</div>

<div className="mt-6 pt-5 border-t border-outline-variant/20">
<div className="grid grid-cols-5 gap-2 lg:gap-3 text-label-code font-label-code text-xs">

<div className="flex items-center gap-2 p-2 rounded bg-surface-container/50 border border-secondary/30">
<div className="w-6 h-6 rounded-full bg-secondary/15 border border-secondary flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="truncate">
<span className="text-[10px] text-secondary font-semibold block leading-tight">STAGE 01</span>
<span className="text-on-surface font-medium truncate">01 Application</span>
</div>
</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container/50 border border-secondary/30">
<div className="w-6 h-6 rounded-full bg-secondary/15 border border-secondary flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="truncate">
<span className="text-[10px] text-secondary font-semibold block leading-tight">STAGE 02</span>
<span className="text-on-surface font-medium truncate">02 Scope</span>
</div>
</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-high/70 border border-primary-container shadow-[0_0_15px_rgba(255,83,87,0.25)] relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-[0_0_8px_rgba(255,83,87,0.6)]">
                03
              </div>
<div className="truncate pl-0.5">
<span className="text-[10px] text-primary-container font-semibold block leading-tight tracking-wider">CURRENT STAGE</span>
<span className="text-white font-bold truncate">03 Checks</span>
</div>
</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant/30 opacity-75">
<div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant/40 flex items-center justify-center text-on-surface-variant text-xs shrink-0 font-mono">
                04
              </div>
<div className="truncate">
<span className="text-[10px] text-on-surface-variant/70 block leading-tight">PENDING</span>
<span className="text-on-surface-variant truncate">04 Safety</span>
</div>
</div>

<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant/30 opacity-75">
<div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant/40 flex items-center justify-center text-on-surface-variant text-xs shrink-0 font-mono">
                05
              </div>
<div className="truncate">
<span className="text-[10px] text-on-surface-variant/70 block leading-tight">GATE</span>
<span className="text-on-surface-variant truncate">05 Review &amp; Submit</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-8 space-y-space-md">

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-sm relative">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">domain_verification</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold">Stage 01 Target Locked</span>
</div>
<button className="text-label-code font-label-code text-[11px] text-secondary hover:underline">Modify</button>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded bg-surface-container border border-outline-variant/40 shrink-0">
<span className="material-symbols-outlined text-[20px] text-primary-container">hub</span>
</div>
<div className="space-y-0.5 text-xs font-label-code">
<p className="font-bold text-on-surface">college-placement-v2.1</p>
<p className="text-on-surface-variant text-[11px]">Runtime: Python 3.11 / FastAPI · Local Port 8001</p>
<div className="flex items-center gap-2 pt-1 text-[10px] text-on-surface-variant/70">
<span className="px-1.5 py-0.5 rounded bg-surface-container">5 App Modules</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary">gVisor Sandbox Ready</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-sm relative">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">rule</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold">Stage 02 Scope Boundaries</span>
</div>
<button className="text-label-code font-label-code text-[11px] text-secondary hover:underline">Edit Scope</button>
</div>
<div className="space-y-1.5 text-xs font-label-code">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Active In-Scope Routes:</span>
<span className="text-secondary font-semibold font-mono">7 of 14 Endpoints</span>
</div>

<div className="flex flex-wrap gap-1 text-[10px]">
<span className="px-1.5 py-0.5 bg-surface-container border border-outline-variant/40 rounded text-on-surface font-mono">/api/v1/students/search</span>
<span className="px-1.5 py-0.5 bg-surface-container border border-outline-variant/40 rounded text-on-surface font-mono">/api/v1/auth/login</span>
<span className="px-1.5 py-0.5 bg-surface-container border border-outline-variant/40 rounded text-on-surface font-mono">/api/v1/students/profile</span>
<span className="px-1.5 py-0.5 bg-error-container/20 border border-error-container/40 rounded text-error font-mono flex items-center gap-1">
<span className="material-symbols-outlined text-[10px]">block</span>
                    1 Excluded
                  </span>
</div>
<p className="text-[10px] text-on-surface-variant/60 italic pt-0.5">Strict Whitelist Policy SW-401 enforced at kernel boundary proxy.</p>
</div>
</div>
</div>

<div className="bg-surface-container-low/80 border border-outline-variant/40 rounded p-space-md space-y-space-md">

<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-outline-variant/30 gap-2">
<div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">fact_check</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                    Stage 03: Defensive Assessment Checks
                  </h3>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs mt-0.5">
                  Select and tune non-destructive diagnostic analyzers validated against the target attack surface.
                </p>
</div>

<div className="flex items-center gap-1.5 text-label-code font-label-code text-xs self-start sm:self-center">
<span className="text-on-surface-variant text-[11px] mr-1">Presets:</span>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface text-[11px]">Minimal</button>
<button className="px-2 py-1 rounded bg-primary-container/20 border border-primary-container/50 text-primary font-semibold text-[11px]">Standard Lab</button>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface text-[11px]">Select All</button>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-label-code font-label-code text-xs font-semibold text-primary">
<span className="material-symbols-outlined text-[16px] text-primary">code_blocks</span>
<span>CATEGORY 01: WEB APPLICATION SECURITY (AST &amp; TAINT)</span>
</div>
<span className="text-[11px] font-label-code text-on-surface-variant/70 font-mono">4 Selected</span>
</div>
<div className="grid grid-cols-1 gap-2.5">

<div className="bg-surface-container border-2 border-primary-container/60 rounded p-space-sm hover:border-primary-container transition-all flex items-start justify-between relative shadow-[0_0_12px_rgba(255,83,87,0.1)]">
<div className="flex items-start gap-3">
<input defaultChecked className="mt-1 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 h-4 w-4" type="checkbox"/>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm font-semibold text-sm text-on-surface">SQL Injection Detection &amp; AST Analysis</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container/20 border border-primary-container/40 text-[10px] font-label-badge text-primary uppercase">CWE-89 Active</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-[10px] font-label-badge text-secondary font-mono">PySQL-01 Taint Dialect</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                        Conducts static syntactic AST tracing and controlled parameter boundary evaluation on database queries. Identified in <code className="text-secondary font-label-code bg-surface-container-lowest px-1 py-0.5 rounded">/students/search.py:42</code>.
                      </p>
<div className="flex items-center gap-3 text-[11px] font-label-code text-on-surface-variant/70 pt-0.5">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Engine: Aegis AST Taint v4.2</span>
<span className="text-outline-variant">·</span>
<span className="text-on-surface font-medium">Intensity: Safe Deterministic Probe</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest border border-secondary/30 text-[10px] font-label-code text-secondary font-bold">CONFIGURED</span>
</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant transition-all flex items-start justify-between">
<div className="flex items-start gap-3">
<input defaultChecked className="mt-1 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 h-4 w-4" type="checkbox"/>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm font-semibold text-sm text-on-surface">Cross-Site Scripting (XSS) AST Detection</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-[10px] font-label-badge text-on-surface-variant font-mono">CWE-79 Scope</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                        Evaluates template context reflection, unescaped DOM payloads, and sanitization filters across all 7 in-scope endpoints.
                      </p>
<div className="flex items-center gap-3 text-[11px] font-label-code text-on-surface-variant/70 pt-0.5">
<span>Engine: Core Lexer Engine v2.0</span>
<span className="text-outline-variant">·</span>
<span>Intensity: Low Impact</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant/30 text-[10px] font-label-code text-on-surface font-medium">AVAILABLE</span>
</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant transition-all flex items-start justify-between">
<div className="flex items-start gap-3">
<input defaultChecked className="mt-1 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 h-4 w-4" type="checkbox"/>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm font-semibold text-sm text-on-surface">Input Validation &amp; Type Boundary Check</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-[10px] font-label-badge text-on-surface-variant font-mono">Pydantic Schema</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs">
                        Validates coercion resilience, unexpected array inputs, and schema boundary handling on JSON request bodies.
                      </p>
<div className="flex items-center gap-3 text-[11px] font-label-code text-on-surface-variant/70 pt-0.5">
<span>Engine: Schema Integrity Guard</span>
<span className="text-outline-variant">·</span>
<span>Intensity: Passive Static</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant/30 text-[10px] font-label-code text-on-surface font-medium">AVAILABLE</span>
</div>
</div>

<div className="bg-surface-container/60 border border-outline-variant/20 rounded p-space-sm hover:border-outline-variant/40 transition-all flex items-start justify-between opacity-90">
<div className="flex items-start gap-3">
<input className="mt-1 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 h-4 w-4" type="checkbox"/>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm font-semibold text-sm text-on-surface-variant">Broken Object Level Access Control (BOLA / IDOR)</span>
<span className="px-1.5 py-0.2 rounded bg-error-container/30 border border-error-container/50 text-[10px] font-label-badge text-error uppercase">Needs 2nd Role Token</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant/70 text-xs">
                        Checks horizontal privilege escalation across student ID tokens. Requires dual-identity session seeding to execute securely.
                      </p>
<div className="flex items-center gap-3 text-[11px] font-label-code text-on-surface-variant/60 pt-0.5">
<span className="text-error flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">warning</span>Dual Bearer Tokens Missing</span>
</div>
</div>
</div>
<button className="px-2 py-1 rounded bg-surface-container border border-outline-variant/40 text-[10px] font-label-code text-secondary hover:border-secondary">Configure Token</button>
</div>
</div>
</div>

<div className="space-y-2.5 pt-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-label-code font-label-code text-xs font-semibold text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">network_check</span>
<span>CATEGORY 02: CONFIGURATION, HEADERS &amp; TRANSPORT</span>
</div>
<span className="text-[11px] font-label-code text-on-surface-variant/70 font-mono">3 Selected</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">

<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant">
<div className="flex items-start justify-between">
<input defaultChecked className="rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 h-4 w-4" type="checkbox"/>
<span className="text-[9px] font-label-badge bg-surface-container-lowest text-secondary px-1.5 py-0.2 rounded font-mono">TLS 1.3 / HSTS</span>
</div>
<h4 className="font-headline-sm font-semibold text-xs text-on-surface mt-2">HTTP Strict Transport &amp; TLS</h4>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-1 leading-snug">Verifies forced HTTPS redirection, HSTS preloading, and cipher suite parameters.</p>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant">
<div className="flex items-start justify-between">
<input defaultChecked className="rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 h-4 w-4" type="checkbox"/>
<span className="text-[9px] font-label-badge bg-surface-container-lowest text-secondary px-1.5 py-0.2 rounded font-mono">HttpOnly / SameSite</span>
</div>
<h4 className="font-headline-sm font-semibold text-xs text-on-surface mt-2">Cookie Security &amp; Session Flags</h4>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-1 leading-snug">Audits Secure, HttpOnly, and SameSite=Lax/Strict directives on auth tokens.</p>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant">
<div className="flex items-start justify-between">
<input defaultChecked className="rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 h-4 w-4" type="checkbox"/>
<span className="text-[9px] font-label-badge bg-surface-container-lowest text-secondary px-1.5 py-0.2 rounded font-mono">Origin Wildcard</span>
</div>
<h4 className="font-headline-sm font-semibold text-xs text-on-surface mt-2">CORS Origin Isolation</h4>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-1 leading-snug">Tests pre-flight OPTIONS responses for wildcard reflections and null origins.</p>
</div>
</div>
</div>

<div className="space-y-2.5 pt-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-label-code font-label-code text-xs font-semibold text-on-surface">
<span className="material-symbols-outlined text-[16px]">inventory_2</span>
<span>CATEGORY 03: DEPENDENCY &amp; SBOM INTEGRITY</span>
</div>
<span className="text-[11px] font-label-code text-on-surface-variant/70 font-mono">1 Selected</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
<div className="bg-surface-container border border-outline-variant/30 rounded p-space-sm hover:border-outline-variant flex items-start gap-3">
<input defaultChecked className="mt-0.5 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 h-4 w-4" type="checkbox"/>
<div>
<h4 className="font-headline-sm font-semibold text-xs text-on-surface">SBOM Package Vulnerability Scanner</h4>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-0.5">Reconciles requirements.txt and lockfile packages against the NIST NVD database.</p>
<span className="inline-block mt-1 text-[10px] font-label-code text-secondary font-mono">FastAPI 0.104.1 · SQLAlchemy 2.0.23</span>
</div>
</div>
<div className="bg-surface-container/50 border border-outline-variant/20 rounded p-space-sm hover:border-outline-variant/30 flex items-start gap-3 opacity-80">
<input className="mt-0.5 rounded bg-surface-container-lowest border-outline-variant text-primary-container focus:ring-0 h-4 w-4" type="checkbox"/>
<div>
<h4 className="font-headline-sm font-semibold text-xs text-on-surface">Container Base Image Layer Audit</h4>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-0.5">Inspects alpine/debian minimal layers for unpatched CVE glibc vulnerabilities.</p>
<span className="inline-block mt-1 text-[10px] font-label-code text-on-surface-variant/60 font-mono">Local Daemon Access Required</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-3">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<h3 className="text-headline-sm font-headline-sm text-sm text-on-surface font-semibold">
                  Stage 04 Safeguards &amp; Lab Isolation Enforcer
                </h3>
</div>
<span className="text-[11px] font-label-badge bg-surface-container px-2 py-0.5 rounded text-secondary font-mono border border-secondary/30">
                ACTIVE LAB CONTAINER
              </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-label-code">
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 space-y-1">
<span className="text-[10px] text-on-surface-variant block uppercase tracking-wider">Rate Limiting &amp; Concurrency</span>
<p className="font-bold text-on-surface font-mono">Max 10 req/s · Timeout 2500ms</p>
<p className="text-[11px] text-on-surface-variant/70">Zero DoS or volumetric payload generation. Strict sequential probe mode.</p>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 space-y-1">
<span className="text-[10px] text-on-surface-variant block uppercase tracking-wider">Rollback Sandbox Gate</span>
<p className="font-bold text-secondary font-mono">Auto-Abort on Container Drift &gt; 500ms</p>
<p className="text-[11px] text-on-surface-variant/70">Ephemeral gVisor execution worker tears down instantly on fault exception.</p>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 space-y-1">
<span className="text-[10px] text-on-surface-variant block uppercase tracking-wider">Kernel Proxy Whitelist</span>
<p className="font-bold text-on-surface font-mono">Port 8001 Loopback Interface Only</p>
<p className="text-[11px] text-on-surface-variant/70">All external egress traffic dropped deterministically via eBPF filters.</p>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 space-y-1">
<span className="text-[10px] text-on-surface-variant block uppercase tracking-wider">Execution Profile</span>
<p className="font-bold text-primary font-mono">Controlled Lab Assessment</p>
<p className="text-[11px] text-on-surface-variant/70">Non-destructive test vectors. No permanent database state mutation.</p>
</div>
</div>
</div>
</div>


<div className="lg:col-span-4 space-y-space-md lg:sticky lg:top-16">

<div className="bg-surface-container-low/90 border border-outline-variant/40 rounded p-space-md space-y-space-sm relative shadow-xl backdrop-blur-md">

<div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
<span className="text-label-code font-label-code text-xs text-on-surface font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary-container">speed</span>
                ASSESSMENT READINESS
              </span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-[10px] font-label-badge text-secondary font-mono">READY FOR REVIEW</span>
</div>
</div>

<div className="space-y-2.5 text-xs font-label-code">
<div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
<span className="text-on-surface-variant">Target Scope</span>
<span className="text-on-surface font-semibold font-mono">1 Target App (FastAPI)</span>
</div>
<div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
<span className="text-on-surface-variant">Eligible Endpoints</span>
<span className="text-on-surface font-mono"><span className="text-secondary font-bold">7 In-Scope</span> · 1 Excluded</span>
</div>
<div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
<span className="text-on-surface-variant">Defensive Checks</span>
<span className="text-on-surface font-mono"><span className="text-primary font-bold">8 of 12</span> Active</span>
</div>
<div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
<span className="text-on-surface-variant">Estimated Runtime</span>
<span className="text-on-surface font-mono text-secondary font-semibold">45s – 90s</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-on-surface-variant">Safety Boundary</span>
<span className="text-primary-container font-mono font-bold">Strict Lab Isolated</span>
</div>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/30 space-y-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[18px]">verified_user</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-bold uppercase tracking-wider">
                  Authorization &amp; Consent Gate
                </span>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-primary-container/40">
<label className="flex items-start gap-2.5 cursor-pointer">
<input defaultChecked className="mt-0.5 rounded bg-surface-container border-outline-variant text-primary-container focus:ring-0 focus:ring-offset-0 h-4 w-4 shrink-0" type="checkbox"/>
<span className="text-[11px] font-body-sm text-on-surface-variant leading-relaxed select-none">
                    I confirm that I am authorized to assess <strong className="text-on-surface font-mono">college-placement-v2.1</strong> and all included endpoints within designated lab boundaries. No external assets will be probed.
                  </span>
</label>
</div>

<div className="p-2 rounded bg-surface-container border border-outline-variant/30 text-[10px] font-label-code text-on-surface-variant space-y-1">
<div className="flex items-center justify-between">
<span>Operator: <span className="text-on-surface font-semibold">Analyst_442</span></span>
<span className="text-secondary">SecOps Lead</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant/70">
<span>Audit Key: <code className="text-on-surface font-mono">ED25519-Verified</code></span>
<span>Kernel Epoch: 4.2.19</span>
</div>
</div>

<div className="space-y-2 pt-2">
<button className="w-full py-2.5 px-4 rounded bg-primary-container hover:bg-primary-container/90 text-white font-headline-sm text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(255,83,87,0.45)] transition-all transform active:scale-[0.99]">
<span className="material-symbols-outlined text-[18px]" style={{ "fontVariationSettings": "'FILL' 1" }}>shield</span>
<span>Review &amp; Launch Assessment</span>
</button>
<div className="grid grid-cols-2 gap-2">
<button className="py-1.5 px-2 rounded border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code font-label-code text-xs text-on-surface-variant bg-surface-container transition-colors text-center">
                    Save as Template
                  </button>
<button className="py-1.5 px-2 rounded border border-outline-variant/40 hover:border-error hover:text-error text-label-code font-label-code text-xs text-on-surface-variant bg-surface-container transition-colors text-center">
                    Reset Config
                  </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-sm space-y-2">
<div className="flex items-center gap-2 text-label-code font-label-code text-xs font-semibold text-secondary">
<span className="material-symbols-outlined text-[16px]">info</span>
<span>Scope Diagnostics &amp; Directives</span>
</div>
<div className="space-y-2 text-[11px] font-label-code">
<div className="p-2 rounded bg-surface-container border-l-2 border-primary-container flex items-start gap-2">
<span className="material-symbols-outlined text-primary-container text-[14px] mt-0.5 shrink-0">priority_high</span>
<p className="text-on-surface-variant leading-tight">
<strong className="text-on-surface">CWE-89 Focal Point:</strong> Endpoint <code className="text-primary font-mono">/students/search</code> has an active unmitigated finding; deep AST taint check prioritised.
                </p>
</div>
<div className="p-2 rounded bg-surface-container border-l-2 border-outline-variant flex items-start gap-2">
<span className="material-symbols-outlined text-outline text-[14px] mt-0.5 shrink-0">block</span>
<p className="text-on-surface-variant leading-tight">
<strong className="text-on-surface">Scope Shield:</strong> Route <code className="text-on-surface-variant font-mono">/admin/internal-metrics</code> was automatically excluded by Whitelist Policy #SW-401.
                </p>
</div>
</div>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between text-[10px] font-label-code text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Deterministic Probe Guarantee
            </span>
<span className="text-secondary font-mono">0 Volumetric Tests</span>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ScanConfigPage;
