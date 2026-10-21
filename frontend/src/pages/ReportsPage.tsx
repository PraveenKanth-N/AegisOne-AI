import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ReportsPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getReports) {
          const res = await api.getReports();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ReportsPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="max-w-[1440px] mx-auto px-6 py-6 space-y-6">

<section className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5 overflow-hidden">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
<p className="font-label-badge text-label-badge text-[10px] tracking-widest text-primary uppercase">EVIDENCE-BACKED REPORTING · TRACEABLE DECISIONS · REPRODUCIBLE ASSESSMENTS</p>
</div>
<h2 className="text-headline-lg font-headline-lg tracking-tight text-on-surface">Security Reports & Audit Evidence Center</h2>
<p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mt-1">
              Build traceable security assessments from deterministic findings, concrete supporting evidence, AST patch logic, and containerized validation outcomes.
            </p>

<div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-outline-variant/20 font-label-code text-label-code text-xs">
<span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-on-surface">
<span className="text-on-surface-variant">Project:</span> college-placement-v2.1
              </span>
<span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-on-surface">
<span className="text-on-surface-variant">Target:</span> Local Lab (Port 8001)
              </span>
<span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-secondary">
<span className="text-on-surface-variant">Scans Available:</span> 14 Runs
              </span>
<span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/30 text-[#45D49A]">
<span className="text-on-surface-variant">Validation Runs:</span> 8 Complete
              </span>
<span className="px-2.5 py-1 rounded bg-surface-container-high/80 text-on-surface-variant border border-outline-variant/30">
                Last Report: <strong className="text-on-surface font-mono">SREP-2025-0518-A</strong> (14:52 UTC)
              </span>
</div>
</div>

<div className="flex items-center gap-2.5 self-start lg:self-center">
<button className="px-3.5 py-2 rounded bg-surface-container-high border border-outline-variant/40 hover:border-secondary/50 text-on-surface text-label-code font-label-code text-xs font-semibold flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">history</span>
              Report History
            </button>
<button className="px-3.5 py-2 rounded bg-surface-container-high border border-outline-variant/40 hover:border-secondary/50 text-secondary text-label-code font-label-code text-xs font-semibold flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">folder_zip</span>
              Export Signed Bundle (ZIP)
            </button>
<button className="px-4 py-2 rounded bg-primary-container text-on-primary font-headline-sm text-xs font-bold tracking-wider hover:brightness-110 flex items-center gap-1.5 shadow-[0_0_16px_rgba(255,83,87,0.35)] transition-all">
<span className="material-symbols-outlined text-sm font-bold">add</span>
              + CREATE REPORT
            </button>
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-5 items-start">



<div className="col-span-12 lg:col-span-3 space-y-4">

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<span className="text-label-badge font-label-badge text-primary uppercase text-[11px] tracking-wider">Report Templates</span>
<span className="material-symbols-outlined text-xs text-on-surface-variant">description</span>
</div>
<div className="space-y-1.5 text-xs">

<div className="p-2.5 rounded bg-surface-container-low border-l-2 border-primary-container border-t border-r border-b border-outline-variant/30 cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-headline-sm font-semibold text-primary">Technical Vulnerability</span>
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px] mt-1">Deep AST diffs, taint reachability, and gVisor sandbox outputs.</p>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm font-medium text-on-surface">Executive Summary</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px] mt-1">High-level risk matrix, SLA drift, regulatory posture.</p>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm font-medium text-on-surface">Remediation Validation</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px] mt-1">Before-vs-after regression test suites and container runtime logs.</p>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm font-medium text-on-surface">Research Evaluation</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px] mt-1">Model decision heuristics, chain-of-thought grounding.</p>
</div>

<div className="p-2.5 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm font-medium text-on-surface">Cryptographic Audit Bundle</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
</div>
<p className="text-body-sm text-on-surface-variant text-[11px] mt-1">ED25519 signatures, Merkle verification trees, raw telemetry.</p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 space-y-3">
<span className="text-label-badge font-label-badge text-secondary uppercase text-[11px] tracking-wider block">Scope Boundaries</span>
<div className="space-y-2 text-xs font-label-code">
<div>
<label className="text-[10px] text-on-surface-variant block uppercase">Evaluation Run</label>
<div className="mt-1 px-2.5 py-1.5 rounded bg-surface-container-low border border-outline-variant/30 text-on-surface flex items-center justify-between">
<span>#EVAL-2025-0518</span>
<span className="text-primary text-[10px]">LATEST</span>
</div>
</div>
<div>
<label className="text-[10px] text-on-surface-variant block uppercase">Target Commit Window</label>
<div className="mt-1 px-2.5 py-1.5 rounded bg-surface-container-low border border-outline-variant/30 text-on-surface flex items-center justify-between">
<span className="text-[11px] text-on-surface-variant">SCN-8092 → <strong className="text-secondary font-mono">#P-8902 v2</strong></span>
<span className="material-symbols-outlined text-xs">commit</span>
</div>
</div>
</div>

<div className="pt-2 border-t border-outline-variant/20 space-y-1.5">
<span className="text-[10px] text-on-surface-variant uppercase block font-label-code">Finding Inclusions</span>
<label className="flex items-center gap-2 text-xs text-on-surface cursor-pointer">
<input defaultChecked className="rounded border-outline-variant bg-surface-container text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Confirmed Findings (13)</span>
</label>
<label className="flex items-center gap-2 text-xs text-on-surface cursor-pointer">
<input defaultChecked className="rounded border-outline-variant bg-surface-container text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>AST Taint Sinks (1 Neutralized)</span>
</label>
<label className="flex items-center gap-2 text-xs text-on-surface cursor-pointer">
<input defaultChecked className="rounded border-outline-variant bg-surface-container text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Graph Reachability Traces</span>
</label>
<label className="flex items-center gap-2 text-xs text-on-surface cursor-pointer">
<input defaultChecked className="rounded border-outline-variant bg-surface-container text-primary-container focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span>Container Sandbox Runs (18/18)</span>
</label>
</div>

<div className="pt-2 border-t border-outline-variant/20 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[10px] text-on-surface-variant uppercase font-label-code">Redaction Controls</span>
<span className="text-[9px] px-1 rounded bg-[#45D49A]/20 text-[#45D49A] border border-[#45D49A]/30">ENFORCED</span>
</div>
<div className="space-y-1.5 text-xs text-on-surface">
<div className="flex items-center justify-between">
<span className="text-[11px]">Redact JWT & Secret Keys</span>
<div className="w-7 h-4 bg-primary-container/80 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px]">Redact Internal IP / DB</span>
<div className="w-7 h-4 bg-primary-container/80 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px]">Sanitize FERPA Student Data</span>
<div className="w-7 h-4 bg-primary-container/80 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
</div>
</div>
</div>

<div className="pt-2 border-t border-outline-variant/20">
<span className="text-[10px] text-on-surface-variant uppercase font-label-code block mb-1.5">Output Format</span>
<div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded border border-outline-variant/30 text-center text-label-code text-[11px]">
<div className="py-1 rounded bg-surface-container-high text-primary font-bold border border-primary-container/40">PDF</div>
<div className="py-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer">CSV</div>
<div className="py-1 rounded text-on-surface-variant hover:text-on-surface cursor-pointer">JSON</div>
</div>
</div>
</div>
</div>



<div className="col-span-12 lg:col-span-6 space-y-3">

<div className="flex items-center justify-between px-3 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-t-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">visibility</span>
<span className="text-label-code font-label-code text-xs text-on-surface">DOCUMENT CANVAS (PAGE 1 OF 4)</span>
</div>
<div className="flex items-center gap-3 text-xs text-on-surface-variant font-label-code">
<button className="hover:text-primary flex items-center gap-1"><span className="material-symbols-outlined text-sm">zoom_out</span></button>
<span>100% (FIT)</span>
<button className="hover:text-primary flex items-center gap-1"><span className="material-symbols-outlined text-sm">zoom_in</span></button>
<span className="border-l border-outline-variant/30 h-3"></span>
<button className="hover:text-primary flex items-center gap-1"><span className="material-symbols-outlined text-sm">print</span> Print</button>
</div>
</div>

<div className="bg-[#0b0b0e] border border-outline-variant/40 rounded-b-lg p-6 sm:p-8 space-y-6 shadow-2xl relative">

<div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container rounded-full"></span>
<span className="font-label-badge text-label-badge text-primary-container">CLASSIFICATION: STRICT LAB DEMO FIXTURE · TLP:AMBER</span>
</div>
<span className="font-label-code text-label-code text-on-surface-variant text-[11px]">REF: REP-2025-0518-8902</span>
</div>

<div className="space-y-2">
<div className="flex items-start justify-between">
<div>
<h3 className="text-headline-md font-headline-md text-on-surface tracking-tight uppercase">CONFIDENTIAL TECHNICAL SECURITY ASSESSMENT & REMEDIATION AUDIT</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">Deterministic vulnerability report and verified zero-regression remediation proof.</p>
</div>
<div className="text-right font-label-code text-[11px] text-on-surface-variant">
<div className="text-on-surface font-semibold">AEGISONE AI DEFENSE KERNEL</div>
<div>VERSION: v4.2.0-STABLE</div>
<div>DATE: 2025-05-18 14:52:11 UTC</div>
</div>
</div>

<div className="flex flex-wrap gap-1.5 pt-2 font-label-code text-[10px]">
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface">AST Static Graph Analysis</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-secondary">Neo4j Reachability Map</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[#45D49A]">Docker gVisor Sandbox</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-primary">SQLMap Probe Replay</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-lowest border-l-2 border-primary-container border-y border-r border-outline-variant/20 space-y-1.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">verified</span>
<h4 className="font-headline-sm text-xs font-semibold uppercase text-primary tracking-wider">Executive Digest</h4>
</div>
<p className="text-body-sm text-on-surface leading-relaxed text-[13px]">
                Deterministic analysis of codebase <span className="font-mono text-secondary">college-placement-v2.1</span> identified a critical <span className="text-primary font-semibold">CWE-89 SQL Injection</span> vulnerability in the student registry lookup pipeline. Candidate patch <span className="font-mono text-on-surface">#P-8902 v2</span> successfully replaced dynamic string interpolation with AST-level parameterized query wrappers. The remediation passed 18/18 containerized regression suites with zero new attack vectors introduced.
              </p>
</div>

<div className="border border-outline-variant/30 rounded p-4 space-y-4 bg-surface-container-lowest/60">

<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40 font-label-badge text-[10px]">CRITICAL · CVSS 9.2</span>
<span className="font-label-code font-bold text-xs text-on-surface">#FND-8902: CWE-89 SQL Injection</span>
</div>
<span className="font-label-code text-[11px] text-[#45D49A] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                  STATUS: NEUTRALIZED
                </span>
</div>

<div className="font-label-code text-xs space-y-1">
<div className="text-on-surface-variant text-[11px]">
                  Vulnerable Target: <span className="text-on-surface font-mono">/api/v1/students/search.py:42</span>
</div>
<div className="text-on-surface-variant text-[11px]">
                  Taint Sink: <span className="text-secondary font-mono">db.execute(f"SELECT * FROM students WHERE id = '&#123;user_input&#125;'")</span>
</div>
</div>

<div className="rounded bg-black/80 border border-outline-variant/30 font-label-code text-xs overflow-hidden">
<div className="bg-surface-container-high px-3 py-1 text-[10px] text-on-surface-variant flex justify-between items-center border-b border-outline-variant/20">
<span>PATCH DIFF · CANDIDATE #P-8902 v2</span>
<span className="text-[#45D49A]">+3 additions / -2 removals</span>
</div>
<div className="p-3 text-[11px] space-y-1 leading-snug">
<div className="text-error-container line-through opacity-80">- query = f"SELECT * FROM students WHERE id = '&#123;student_id&#125;'"</div>
<div className="text-error-container line-through opacity-80">- cursor.execute(query)</div>
<div className="text-[#45D49A]">+ query = "SELECT * FROM students WHERE id = :student_id"</div>
<div className="text-[#45D49A]">+ cursor.execute(query, &#123;"student_id": validated_id&#125;)</div>
<div className="text-[#45D49A]">+ audit_logger.log_query_execution(query_hash=sha256(query))</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 text-center font-label-code text-xs">
<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20">
<div className="text-on-surface-variant text-[10px]">PyTest Suite</div>
<div className="text-[#45D49A] font-bold text-sm mt-0.5">18 / 18 PASS</div>
</div>
<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20">
<div className="text-on-surface-variant text-[10px]">CWE Resurfacing</div>
<div className="text-on-surface font-bold text-sm mt-0.5">0 NEW CWE</div>
</div>
<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20">
<div className="text-on-surface-variant text-[10px]">Rollback Readiness</div>
<div className="text-secondary font-bold text-sm mt-0.5">240ms SNAP</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 text-xs">
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] font-label-badge text-secondary block mb-1">OBSERVED EVIDENCE</span>
<p className="text-body-sm text-on-surface-variant text-[11px]">SQLMap probe returned 500 internal database trace with unescaped quote parameter at payload injection offset 0x4A.</p>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] font-label-badge text-primary block mb-1">COMPUTED RISK SCORE</span>
<p className="text-body-sm text-on-surface-variant text-[11px]">Contextual CVSS dropped from 8.6 (Unauthenticated RCE potential) to 1.2 (Residual operational trace).</p>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] font-label-badge text-[#45D49A] block mb-1">AI EXPLANATION HEURISTIC</span>
<p className="text-body-sm text-on-surface-variant text-[11px]">Synthesized solution bounds query variables strictly into SQL engine bind parameters without runtime string concat.</p>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] font-label-badge text-on-surface block mb-1">OPERATOR SIGN-OFF</span>
<p className="text-body-sm text-on-surface-variant text-[11px]">Approved for deployment under Change Request CR-9942. Verified by SecOps lead Analyst_442.</p>
</div>
</div>

<div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-[10px] font-label-code text-on-surface-variant">
<div>
<span>ED25519 SIGNATURE: </span>
<span className="font-mono text-on-surface">sha256:7bc9029af182e00a94c63d9...</span>
</div>
<div>PAGE 1 OF 4</div>
</div>
</div>
</div>



<div className="col-span-12 lg:col-span-3 space-y-4">

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
<span className="text-label-badge font-label-badge text-[#45D49A] uppercase text-[11px] tracking-wider">Report Integrity Status</span>
<span className="material-symbols-outlined text-sm text-[#45D49A]">verified_user</span>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Evidence Grounding:</span>
<span className="font-label-code text-[#45D49A] font-semibold">100% RESOLVED (4/4)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Fabricated Hallucinations:</span>
<span className="font-label-code text-[#45D49A] font-semibold">0 DETECTED</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Enforced Redactions:</span>
<span className="font-label-code text-secondary font-semibold">3 PRIVACY POLICIES</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant">Deterministic Hash:</span>
<span className="font-label-code text-on-surface font-mono text-[10px]">sha256:d894e77...</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 space-y-3">
<span className="text-label-badge font-label-badge text-primary uppercase text-[11px] tracking-wider block">Evidence Manifest Ledger</span>
<div className="space-y-2 text-xs font-label-code">

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">EVID-9042</span>
<span className="text-[9px] px-1 rounded bg-[#45D49A]/20 text-[#45D49A]">VERIFIED</span>
</div>
<div className="text-[11px] text-on-surface mt-1">AST Taint Trace Manifest</div>
<div className="text-[10px] text-on-surface-variant opacity-70">Sink: /students/search.py:42</div>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">EVID-DIFF-8902</span>
<span className="text-[9px] px-1 rounded bg-secondary/20 text-secondary">GVISOR TESTED</span>
</div>
<div className="text-[11px] text-on-surface mt-1">Patch Candidate #P-8902</div>
<div className="text-[10px] text-on-surface-variant opacity-70">Parameter Binding Solution</div>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">EVID-SANDBOX-04</span>
<span className="text-[9px] px-1 rounded bg-[#45D49A]/20 text-[#45D49A]">LOGS ATTACHED</span>
</div>
<div className="text-[11px] text-on-surface mt-1">PyTest 18/18 Execution Stream</div>
<div className="text-[10px] text-on-surface-variant opacity-70">Exit code: 0 · 0 regressions</div>
</div>

<div className="p-2 rounded bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 transition-colors">
<div className="flex items-center justify-between">
<span className="text-secondary font-bold">EVID-SQLMAP-01</span>
<span className="text-[9px] px-1 rounded bg-primary/20 text-primary">SYNTHETIC VERIFIED</span>
</div>
<div className="text-[11px] text-on-surface mt-1">Dynamic SQLi Probe Replay</div>
<div className="text-[10px] text-on-surface-variant opacity-70">Payload neutralized at HTTP 200</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 space-y-3">
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase text-[11px] tracking-wider block">Assessment Sequence</span>
<div className="relative pl-4 space-y-3 border-l border-outline-variant/30 font-label-code text-xs">
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#45D49A]"></span>
<div className="text-on-surface font-semibold text-[11px]">Scan Initiated</div>
<div className="text-[10px] text-on-surface-variant">14:15:02 UTC · Automated Daemon</div>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div className="text-on-surface font-semibold text-[11px]">Taint Sink Triaged</div>
<div className="text-[10px] text-on-surface-variant">14:22:18 UTC · AST Analyzer</div>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<div className="text-on-surface font-semibold text-[11px]">Remediation Patch Proposed</div>
<div className="text-[10px] text-on-surface-variant">14:35:44 UTC · Candidate #P-8902</div>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#45D49A]"></span>
<div className="text-on-surface font-semibold text-[11px]">Sandbox Pass (18/18)</div>
<div className="text-[10px] text-on-surface-variant">14:48:09 UTC · Docker gVisor Run</div>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<div className="text-on-surface font-semibold text-[11px]">Report Compiled & Signed</div>
<div className="text-[10px] text-on-surface-variant">14:52:11 UTC · Analyst_442</div>
</div>
</div>
</div>

<div className="space-y-2 pt-1">
<button className="w-full py-2.5 px-4 rounded bg-primary-container hover:brightness-110 text-on-primary font-headline-sm font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(255,83,87,0.35)] transition-all">
<span className="material-symbols-outlined text-sm font-bold">picture_as_pdf</span>
              Download PDF Report
            </button>
<button className="w-full py-2 px-4 rounded bg-surface-container-high border border-outline-variant/40 hover:border-secondary/60 text-secondary font-label-code text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm">enhanced_encryption</span>
              Export Raw Evidence ZIP (ED25519)
            </button>
<button className="w-full py-1.5 px-4 rounded bg-transparent hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-code text-[11px] flex items-center justify-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm">data_object</span>
              Inspect JSON Manifest
            </button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default ReportsPage;
