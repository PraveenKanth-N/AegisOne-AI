import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const SandboxPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getDockerStatus) {
          const res = await api.getDockerStatus();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load SandboxPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="p-space-lg max-w-[1520px] w-full mx-auto space-y-5">



<section className="border border-outline-variant/30 rounded bg-surface-container-lowest p-space-md relative overflow-hidden">

<div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-16 w-64 h-64 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="text-label-badge font-label-badge text-primary-fixed-dim text-[11px] tracking-wider uppercase">
                ISOLATED VERIFICATION ENGINE · AUTOMATED RECOVERY · DETERMINISTIC SANDBOX DAEMON v4.2
              </span>
<span className="px-1.5 py-0.2 text-[9px] font-label-badge bg-primary-container/20 text-primary border border-primary-container/30 rounded">SEC_ZONE_0</span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              Sandbox Validation &amp; Rollback Center
            </h1>
<p className="text-body-sm font-body-sm text-outline max-w-3xl leading-relaxed">
              Test proposed security fixes in isolated container runtimes, detect regressions, verify AST taint neutralization, and execute automated rollback when candidates fail validation.
            </p>

<div className="pt-2 flex flex-wrap items-center gap-2 text-label-code text-xs">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                ACTIVE SANDBOX: <strong className="text-secondary font-semibold">sandbox-worker-04 [WARM]</strong>
</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">progress_activity</span>
                STATE: <strong className="text-primary font-semibold">STAGE 4 DYNAMIC PROBE</strong>
</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container border border-primary-container/40 text-primary font-medium">
<span className="material-symbols-outlined text-[14px] text-primary">history</span>
                ROLLBACK READY: <span className="font-label-badge text-primary">240ms SNAPSHOT PRIMED</span>
</span>
</div>
</div>

<div className="flex flex-wrap xl:flex-col items-stretch justify-center gap-2 min-w-[210px]">
<button className="px-3.5 py-2 rounded bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-headline-sm text-xs font-bold tracking-tight shadow-[0_0_15px_rgba(255,83,87,0.3)] flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "'FILL' 1" }}>play_arrow</span>
              Run Safe Validation
            </button>
<button className="px-3.5 py-2 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface font-body-sm text-xs flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm text-primary">gavel</span>
              Demonstrate Unsafe Fix Rejection
            </button>
<button className="px-3.5 py-1.5 text-center text-outline hover:text-on-surface font-label-code text-[11px] flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-xs">history_edu</span>
              View Validation History
            </button>
</div>
</div>
</section>



<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

<div className="p-3.5 rounded bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-[11px] font-label-badge uppercase">
<span>Active Sandbox</span>
<span className="material-symbols-outlined text-secondary text-sm">developer_board</span>
</div>
<div className="my-2">
<div className="text-headline-sm font-headline-sm text-on-surface tracking-tight">sandbox-worker-04</div>
<div className="text-[11px] font-label-code text-secondary mt-0.5">Isolated Docker gVisor</div>
</div>
<div className="text-[10px] font-label-code text-outline flex items-center justify-between border-t border-outline-variant/20 pt-1.5">
<span>Mem: 512MB / 1.0 CPU</span>
<span className="text-secondary">Loopback Only</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-lowest border border-primary-container/40 flex flex-col justify-between tactical-glow">
<div className="flex items-center justify-between text-primary-fixed-dim text-[11px] font-label-badge uppercase">
<span>Validation Stage</span>
<span className="material-symbols-outlined text-primary text-sm animate-spin">refresh</span>
</div>
<div className="my-2">
<div className="text-headline-sm font-headline-sm text-primary tracking-tight">Stage 4 / 4</div>
<div className="text-[11px] font-label-code text-on-surface-variant mt-0.5">Dynamic Security Re-Scan</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-1">
<div className="bg-primary-container h-full w-[88%]"></div>
</div>
<div className="text-[10px] font-label-code text-outline flex justify-between mt-1">
<span>SQLMap Synthetic Fuzz</span>
<span className="text-primary font-bold">88% Complete</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-[11px] font-label-badge uppercase">
<span>Functional &amp; Regression</span>
<span className="material-symbols-outlined text-secondary text-sm">fact_check</span>
</div>
<div className="my-2">
<div className="text-headline-sm font-headline-sm text-on-surface tracking-tight">18 / 18 PASSED</div>
<div className="text-[11px] font-label-code text-secondary mt-0.5">Unit: 12/12 · Functional: 6/6</div>
</div>
<div className="text-[10px] font-label-code text-outline flex items-center justify-between border-t border-outline-variant/20 pt-1.5">
<span>0 Failures</span>
<span className="text-on-surface font-semibold">310ms Runtime</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-[11px] font-label-badge uppercase">
<span>Re-Scan Sinks</span>
<span className="material-symbols-outlined text-primary text-sm">shield_with_heart</span>
</div>
<div className="my-2">
<div className="text-headline-sm font-headline-sm text-on-surface tracking-tight">0 Sinks Detected</div>
<div className="text-[11px] font-label-code text-secondary mt-0.5">CWE-89 AST Neutralized</div>
</div>
<div className="text-[10px] font-label-code text-outline flex items-center justify-between border-t border-outline-variant/20 pt-1.5">
<span>0 New Weaknesses</span>
<span className="text-secondary font-semibold">94.2% Coverage</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between">
<div className="flex items-center justify-between text-outline text-[11px] font-label-badge uppercase">
<span>Recovery &amp; Rollback</span>
<span className="material-symbols-outlined text-tertiary-container text-sm">published_with_changes</span>
</div>
<div className="my-2">
<div className="text-headline-sm font-headline-sm text-on-surface tracking-tight">SNAPSHOT ARMED</div>
<div className="text-[11px] font-label-code text-outline truncate mt-0.5">sha256:d894e771c99...</div>
</div>
<div className="text-[10px] font-label-code text-outline flex items-center justify-between border-t border-outline-variant/20 pt-1.5">
<span>Verified Rollback</span>
<span className="text-primary font-bold">240ms Target</span>
</div>
</div>
</section>



<section className="p-4 rounded bg-surface-container-lowest border border-outline-variant/30">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">linear_scale</span>
<span className="text-xs font-label-badge uppercase tracking-wider text-on-surface">Deterministic Verification Pipeline Sequence</span>
</div>
<span className="text-[11px] font-label-code text-outline">Candidate: <strong className="text-on-surface font-semibold">#P-8902</strong> (Parameterized SQL Query)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-label-badge text-outline">STAGE 01</span>
<span className="inline-flex items-center gap-1 text-[10px] font-label-badge text-secondary bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20">
<span className="material-symbols-outlined text-[11px]">check_circle</span> PASSED
                </span>
</div>
<div className="text-xs font-headline-sm font-bold text-on-surface">Prep &amp; Scope Check</div>
<p className="text-[11px] font-body-sm text-outline mt-1 leading-snug">
                Isolated gVisor runtime created. Clean baseline snapshot locked.
              </p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-outline flex justify-between">
<span>Duration: 42ms</span>
<span className="text-on-surface">sha:d894e77</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-label-badge text-outline">STAGE 02</span>
<span className="inline-flex items-center gap-1 text-[10px] font-label-badge text-secondary bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20">
<span className="material-symbols-outlined text-[11px]">check_circle</span> PASSED
                </span>
</div>
<div className="text-xs font-headline-sm font-bold text-on-surface">Syntax &amp; Regressions</div>
<p className="text-[11px] font-body-sm text-outline mt-1 leading-snug">
                Python AST parser clean. 18/18 PyTest functional cases passed.
              </p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-outline flex justify-between">
<span>Duration: 310ms</span>
<span className="text-on-surface">PySQL-01 dialect</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-label-badge text-outline">STAGE 03</span>
<span className="inline-flex items-center gap-1 text-[10px] font-label-badge text-secondary bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20">
<span className="material-symbols-outlined text-[11px]">check_circle</span> PASSED
                </span>
</div>
<div className="text-xs font-headline-sm font-bold text-on-surface">Static AST Security</div>
<p className="text-[11px] font-body-sm text-outline mt-1 leading-snug">
                Taint sink #9042 absent. Zero unverified AST side-effects identified.
              </p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/20 text-[10px] font-label-code text-outline flex justify-between">
<span>Duration: 185ms</span>
<span className="text-on-surface">0 Taint Paths</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-primary-container flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-primary-container/20 blur-xl"></div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-label-badge text-primary-container font-bold">STAGE 04 · FINAL</span>
<span className="inline-flex items-center gap-1 text-[10px] font-label-badge text-primary bg-primary-container/20 px-1.5 py-0.5 rounded border border-primary-container/30">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> EXECUTING
                </span>
</div>
<div className="text-xs font-headline-sm font-bold text-primary">Dynamic Security Re-Scan</div>
<p className="text-[11px] font-body-sm text-on-surface-variant mt-1 leading-snug">
                SQLMap synthetic payload probe testing candidate runtime injection resilience.
              </p>
</div>
<div className="mt-2 pt-2 border-t border-outline-variant/30 text-[10px] font-label-code text-outline flex justify-between items-center">
<span className="text-primary font-semibold">Elapsed: 620ms</span>
<span className="text-on-surface">Probe: 44/50</span>
</div>
</div>
</div>
</section>



<section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">



<div className="lg:col-span-3 space-y-4">

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-3">
<div className="flex items-center justify-between">
<span className="text-[11px] font-label-badge text-primary uppercase font-bold tracking-wider">Candidate Under Test</span>
<span className="text-[10px] font-label-code px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface border border-outline-variant/30">v2.1</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-headline-sm font-headline-sm text-on-surface">#P-8902</span>
<span className="text-xs font-label-code text-secondary font-medium">CWE-89 Remediation</span>
</div>
<p className="text-xs font-body-sm text-outline mt-0.5">
                Target: <span className="font-label-code text-on-surface">/api/v1/students/search.py:42</span>
</p>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="text-[10px] font-label-badge text-outline uppercase">Pre-Fix Risk</div>
<div className="text-xs font-label-code text-primary font-bold">8.6 / 10 (HIGH)</div>
</div>
<span className="material-symbols-outlined text-outline text-sm">arrow_forward</span>
<div className="text-right">
<div className="text-[10px] font-label-badge text-outline uppercase">Post-Fix Projected</div>
<div className="text-xs font-label-code text-secondary font-bold">1.2 / 10 (LOW)</div>
</div>
</div>

<div className="space-y-1.5 pt-1">
<div className="text-[10px] font-label-badge text-outline uppercase tracking-wider">Container Verification Gates</div>
<div className="flex items-center justify-between text-[11px] font-label-code text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span>
                  Scope Whitelist Valid
                </span>
<span className="text-secondary text-[10px]">VERIFIED</span>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span>
                  Taint Sink Neutralized
                </span>
<span className="text-secondary text-[10px]">VERIFIED</span>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span>
                  Regression Tests (18/18)
                </span>
<span className="text-secondary text-[10px]">PASSED</span>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[13px] text-primary animate-pulse">pending</span>
                  SQLMap Synthetic Probe
                </span>
<span className="text-primary text-[10px]">IN PROGRESS</span>
</div>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-2.5">
<div className="flex items-center justify-between">
<span className="text-[11px] font-label-badge text-outline uppercase tracking-wider">Candidate Iterations</span>
<span className="text-[10px] font-label-code text-outline">3 items</span>
</div>

<div className="p-2 rounded bg-surface-container-low border border-primary-container/40 relative">
<div className="flex items-center justify-between">
<span className="text-xs font-label-code font-bold text-on-surface">#P-8902 (v2 · Parameterized)</span>
<span className="text-[9px] font-label-badge bg-primary-container/20 text-primary px-1 py-0.2 rounded border border-primary-container/30">ACTIVE</span>
</div>
<p className="text-[11px] font-body-sm text-outline mt-1">Direct query parameterization via SQLAlchemy driver bindings.</p>
<div className="text-[10px] font-label-code text-secondary mt-1">Stage 4 in progress</div>
</div>

<div className="p-2 rounded bg-surface-container-low border border-error-container/30 opacity-80">
<div className="flex items-center justify-between">
<span className="text-xs font-label-code font-semibold text-error">#P-8901 (v1 · ORM Raw Escaping)</span>
<span className="text-[9px] font-label-badge bg-error-container/20 text-error px-1 py-0.2 rounded border border-error-container/40">REJECTED</span>
</div>
<p className="text-[11px] font-body-sm text-outline mt-1">Regression detected: ORM connection pool lockup in Stage 2.</p>
<div className="text-[10px] font-label-code text-primary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">replay</span>
                240ms Auto-Rollback Executed
              </div>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 opacity-60">
<div className="flex items-center justify-between">
<span className="text-xs font-label-code text-on-surface">#P-7911 (XSS DOMPurify)</span>
<span className="text-[9px] font-label-badge bg-secondary/10 text-secondary px-1 py-0.2 rounded">MERGED</span>
</div>
<div className="text-[10px] font-label-code text-outline mt-1">Validated 2h ago · 0 regressions</div>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3 space-y-2 text-xs font-label-code">
<div className="flex items-center gap-1.5 text-outline text-[11px] font-label-badge uppercase">
<span className="material-symbols-outlined text-xs text-secondary">memory</span>
              Sandbox Isolation Specs
            </div>
<div className="text-[11px] text-on-surface-variant space-y-1">
<div className="flex justify-between">
<span className="text-outline">Runtime Engine:</span>
<span className="text-on-surface">gVisor runsc (sandboxed syscall)</span>
</div>
<div className="flex justify-between">
<span className="text-outline">PID Isolation:</span>
<span className="text-secondary">Strict (chroot + seccomp)</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Network Egress:</span>
<span className="text-primary font-semibold">BLOCKED (Loopback Only)</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Ephemeral Storage:</span>
<span className="text-on-surface">2.0 GB tmpfs (Non-persistent)</span>
</div>
</div>
</div>
</div>



<div className="lg:col-span-6 space-y-4">

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col">

<div className="bg-surface-container-low px-3 py-2 border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-1 text-xs font-label-code">
<button className="px-2.5 py-1 rounded bg-surface-container text-primary font-semibold border-b-2 border-primary flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Live Execution Stream
                </button>
<button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
                  Regression Tests (18/18)
                </button>
<button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface transition-colors">
                  Re-Scan Diff
                </button>
</div>

<div className="flex items-center gap-2 text-outline text-[11px] font-label-code">
<span className="inline-flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[13px]">tune</span>
                  AUTO-SCROLL ON
                </span>
<button className="hover:text-on-surface p-1" title="Copy Log Buffer">
<span className="material-symbols-outlined text-[14px]">content_copy</span>
</button>
<button className="hover:text-on-surface p-1" title="Clear Console">
<span className="material-symbols-outlined text-[14px]">block</span>
</button>
</div>
</div>

<div className="px-3 py-1.5 bg-surface-container-lowest border-b border-outline-variant/20 flex items-center gap-2 text-[10px] font-label-badge overflow-x-auto">
<span className="text-outline uppercase">Filter:</span>
<button className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant/40">ALL EVENTS (48)</button>
<button className="px-1.5 py-0.5 rounded text-outline hover:text-on-surface">EXECUTION</button>
<button className="px-1.5 py-0.5 rounded text-secondary bg-secondary/10 border border-secondary/20">PYTEST (18)</button>
<button className="px-1.5 py-0.5 rounded text-primary bg-primary-container/10 border border-primary-container/30">SECURITY SCAN</button>
<button className="px-1.5 py-0.5 rounded text-outline hover:text-on-surface">ROLLBACK ENGINE</button>
</div>

<div className="p-3 bg-surface-container-lowest font-label-code text-[11px] leading-relaxed space-y-1.5 h-64 overflow-y-auto selection:bg-primary-container/40">
<div className="text-outline flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.012Z]</span>
<span className="text-secondary">[INIT]</span>
<span>Spawning container runtime: gVisor runsc sandbox-worker-04 ... OK</span>
</div>
<div className="text-outline flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.054Z]</span>
<span className="text-secondary">[SNAPSHOT]</span>
<span>Baseline capture: sha256:d894e771c990b7a8 (Commit: college-placement-v2.1@head)</span>
</div>
<div className="text-outline flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.096Z]</span>
<span className="text-secondary">[DIFF]</span>
<span>Applying proposed patch #P-8902 to /api/v1/students/search.py (+8 -4 lines)</span>
</div>
<div className="text-on-surface-variant flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.210Z]</span>
<span className="text-on-surface">[STAGE 01]</span>
<span>Scope verification check: file strictly bounded within Whitelist Scope: VALID</span>
</div>
<div className="text-on-surface-variant flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.405Z]</span>
<span className="text-secondary">[STAGE 02]</span>
<span>Running PyTest regression suite (18 items): pytest tests/test_student_search.py</span>
</div>
<div className="text-outline pl-8 text-[10px] space-y-0.5">
<span className="text-secondary block">.... tests/test_student_search.py::test_empty_query PASSED [ 5%]</span>
<span className="text-secondary block">.... tests/test_student_search.py::test_filter_by_department PASSED [22%]</span>
<span className="text-secondary block">.... tests/test_student_search.py::test_utf8_name_handling PASSED [50%]</span>
<span className="text-secondary block">.... tests/test_student_search.py::test_pagination_offsets PASSED [77%]</span>
<span className="text-secondary block">.... tests/test_student_search.py::test_connection_pool_under_burst PASSED [100%]</span>
</div>
<div className="text-secondary flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.715Z]</span>
<span className="text-secondary">[STAGE 02]</span>
<span>PyTest finished in 310ms: 18 passed, 0 failed, 0 warnings. REGRESSION CLEAR.</span>
</div>
<div className="text-on-surface flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:01.900Z]</span>
<span className="text-on-surface">[STAGE 03]</span>
<span>Static AST Semantic Re-Taint: evaluating AST node &lt;FunctionDef: get_students_by_keyword&gt;</span>
</div>
<div className="text-secondary flex items-start gap-2">
<span className="text-outline/60 select-none">[14:32:02.085Z]</span>
<span className="text-secondary">[AST SINK]</span>
<span>Sink verification: cursor.execute(text(:query), &#123;"query": param&#125;) detected. String interpolation removed.</span>
</div>
<div className="text-primary flex items-start gap-2 font-medium">
<span className="text-outline/60 select-none">[14:32:02.320Z]</span>
<span className="text-primary">[STAGE 04]</span>
<span>Executing dynamic synthetic probe: sqlmap --batch -u "http://127.0.0.1:8001/api/v1/students/search?q=*" --level=3</span>
</div>
<div className="text-outline pl-8 text-[10px] space-y-0.5">
<span className="block">Payload #1: <code className="text-on-surface-variant">' OR '1'='1</code> -&gt; HTTP 200 OK (0 injected records returned)</span>
<span className="block">Payload #2: <code className="text-on-surface-variant">') UNION SELECT NULL, version(), NULL--</code> -&gt; HTTP 200 OK (Parameter bound safely)</span>
<span className="text-primary block animate-pulse">Running heuristic boolean blind injection probe (44/50 completed)...</span>
</div>
</div>

<div className="p-2 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-label-code">
<span className="text-outline flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                Socket: <span className="text-on-surface">/var/run/aegis/sandbox-04.sock</span>
</span>
<span className="text-secondary">gVisor Sandbox: ACTIVE · PID: 80921</span>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-2.5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xs font-headline-sm font-bold text-on-surface">Security Re-Scan Before / After Audit Matrix</h3>
<p className="text-[11px] font-body-sm text-outline">Deterministic diff verification between baseline state and proposed patch</p>
</div>
<span className="text-[10px] font-label-badge bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded">
                94.2% VERIFIED COVERAGE
              </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-[11px] font-label-code border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-outline text-[10px] uppercase font-label-badge">
<th className="py-1.5 px-2">Vulnerability / Sink</th>
<th className="py-1.5 px-2">Before Candidate</th>
<th className="py-1.5 px-2">After Candidate</th>
<th className="py-1.5 px-2">Diff Impact</th>
<th className="py-1.5 px-2 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 text-on-surface-variant">
<tr>
<td className="py-2 px-2 font-medium text-on-surface">
                      CWE-89 SQLi (search.py:42)
                    </td>
<td className="py-2 px-2 text-primary font-mono text-[10px]">
                      Taint Sink Active (f-string)
                    </td>
<td className="py-2 px-2 text-secondary font-mono text-[10px]">
                      Neutralized (Param Query)
                    </td>
<td className="py-2 px-2 text-outline">
                      Sanitized AST
                    </td>
<td className="py-2 px-2 text-right">
<span className="inline-flex items-center gap-1 text-[9px] font-label-badge bg-secondary/15 text-secondary px-1.5 py-0.5 rounded border border-secondary/30">
<span className="material-symbols-outlined text-[10px]">check</span> RESOLVED
                      </span>
</td>
</tr>
<tr>
<td className="py-2 px-2 font-medium text-on-surface">
                      ORM Pool Deadlock
                    </td>
<td className="py-2 px-2 text-outline text-[10px]">
                      None
                    </td>
<td className="py-2 px-2 text-secondary text-[10px]">
                      Zero regression observed
                    </td>
<td className="py-2 px-2 text-outline">
                      Concurrency stable
                    </td>
<td className="py-2 px-2 text-right">
<span className="inline-flex items-center gap-1 text-[9px] font-label-badge bg-secondary/15 text-secondary px-1.5 py-0.5 rounded border border-secondary/30">
<span className="material-symbols-outlined text-[10px]">check</span> PASSED
                      </span>
</td>
</tr>
<tr>
<td className="py-2 px-2 font-medium text-on-surface">
                      New Introduced Weaknesses
                    </td>
<td className="py-2 px-2 text-outline text-[10px]">
                      None detected
                    </td>
<td className="py-2 px-2 text-secondary text-[10px]">
                      0 introduced
                    </td>
<td className="py-2 px-2 text-outline">
                      No side-effects
                    </td>
<td className="py-2 px-2 text-right">
<span className="inline-flex items-center gap-1 text-[9px] font-label-badge bg-secondary/15 text-secondary px-1.5 py-0.5 rounded border border-secondary/30">
<span className="material-symbols-outlined text-[10px]">shield</span> CLEAN
                      </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="pt-2 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded bg-primary-container text-on-primary-container text-xs font-headline-sm font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(255,83,87,0.3)]">
<span className="material-symbols-outlined text-xs">bolt</span>
                  Execute Final Dynamic Probe
                </button>
<button className="px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface text-xs font-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-primary">fast_rewind</span>
                  Trigger Controlled Rollback Test
                </button>
</div>
<button className="text-xs font-label-code text-outline hover:text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-xs">receipt_long</span>
                Export Full Audit Bundle
              </button>
</div>
</div>
</div>



<div className="lg:col-span-3 space-y-4">

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-3">
<div className="flex items-center justify-between">
<span className="text-[11px] font-label-badge text-outline uppercase tracking-wider">Mandatory Gate Ledger</span>
<span className="text-[10px] font-label-badge text-primary bg-primary-container/20 px-1.5 py-0.2 rounded border border-primary-container/30">3 OF 4 CLEARED</span>
</div>
<div className="space-y-2">

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between text-xs">
<div>
<div className="font-headline-sm font-semibold text-on-surface">Gate 1: AST Syntax &amp; Lint</div>
<div className="text-[10px] font-label-code text-outline">Python 3.11 Grammar validated</div>
</div>
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between text-xs">
<div>
<div className="font-headline-sm font-semibold text-on-surface">Gate 2: 18/18 PyTest Cases</div>
<div className="text-[10px] font-label-code text-outline">Regression &amp; functional passed</div>
</div>
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 flex items-center justify-between text-xs">
<div>
<div className="font-headline-sm font-semibold text-on-surface">Gate 3: Taint Neutralization</div>
<div className="text-[10px] font-label-code text-outline">AST sink #9042 verified absent</div>
</div>
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
</div>

<div className="p-2 rounded bg-surface-container-low border border-primary-container/40 flex items-center justify-between text-xs tactical-glow">
<div>
<div className="font-headline-sm font-bold text-primary">Gate 4: Dynamic SQLi Probe</div>
<div className="text-[10px] font-label-code text-on-surface-variant">Synthetic SQLMap Probe (88%)</div>
</div>
<span className="material-symbols-outlined text-primary text-base animate-spin">sync</span>
</div>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-2.5">
<div className="flex items-center gap-2 text-primary font-label-badge text-[11px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-base">history</span>
              Deterministic Rollback Guarantee
            </div>
<p className="text-xs font-body-sm text-outline leading-relaxed">
              Any test regression or newly introduced AST defect triggers immediate container termination, restoring the baseline commit within <strong>240ms</strong>.
            </p>

<div className="p-2.5 rounded bg-surface-container-low border border-outline-variant/20 space-y-1.5">
<div className="flex items-center justify-between text-[10px] font-label-badge">
<span className="text-primary font-bold">CASE STUDY: CANDIDATE #P-8901</span>
<span className="text-outline">FAILED IN STAGE 2</span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant">
                Unsafe ORM patch caused connection pool exhaustion. AegisOne aborted deployment in <strong className="text-primary">238ms</strong> with zero production impact.
              </p>
<div className="text-[10px] font-label-code text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-secondary">verified</span>
                Verified Rollback Log #RB-4109
              </div>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3.5 space-y-3">
<div className="flex items-center justify-between">
<span className="text-[11px] font-label-badge text-outline uppercase tracking-wider">Decision Handoff</span>
<span className="text-[10px] font-label-badge text-outline bg-surface-container px-1.5 py-0.5 rounded">STATUS</span>
</div>
<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 text-center">
<span className="text-xs font-label-code text-primary font-bold">AWAITING FINAL GATE CLEARANCE</span>
<div className="text-[10px] font-body-sm text-outline mt-0.5">Stage 4 probe must conclude at 100%</div>
</div>
<div className="space-y-2">

<button className="w-full py-2 rounded bg-surface-container-high text-outline cursor-not-allowed font-headline-sm text-xs font-semibold flex items-center justify-center gap-1.5 border border-outline-variant/20" disabled>
<span className="material-symbols-outlined text-sm">lock</span>
                Accept &amp; Merge Candidate Fix
              </button>

<button className="w-full py-2 rounded bg-surface-container hover:bg-surface-container-high text-error font-headline-sm text-xs font-semibold flex items-center justify-center gap-1.5 border border-error-container/40 transition-colors">
<span className="material-symbols-outlined text-sm">cancel</span>
                Force Abort &amp; Purge Sandbox
              </button>
</div>
</div>

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-3 space-y-1.5 text-[10px] font-label-code text-outline">
<div className="flex justify-between">
<span>Verification Run ID:</span>
<span className="text-on-surface">VR-2025-0518-8902</span>
</div>
<div className="flex justify-between">
<span>Operator Signature:</span>
<span className="text-on-surface">Analyst_442 (ED25519)</span>
</div>
<div className="flex justify-between">
<span>Deterministic Hash:</span>
<span className="text-secondary truncate ml-2">sha256:7bc9029a1...</span>
</div>
</div>
</div>
</section>
</div>

    </div>
  );
};

export default SandboxPage;
