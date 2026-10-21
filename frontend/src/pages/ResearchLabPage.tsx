import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ResearchLabPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getResearchBenchmarks) {
          const res = await api.getResearchBenchmarks();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ResearchLabPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">




<section className="bg-surface-container-low/70 border border-outline-variant/30 rounded-lg p-space-lg relative overflow-hidden backdrop-blur-md">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-container via-secondary to-transparent opacity-80"></div>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-space-md border-b border-outline-variant/30">
<div>
<div className="flex items-center gap-3">
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">Research Experiments &amp; Benchmark Lab</h1>
<span className="text-label-badge font-label-badge px-2 py-0.5 bg-primary-container/20 border border-primary-container/50 text-primary rounded">Page 19</span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant mt-1 max-w-4xl">
              Systematic evaluation of detection quality, explainable risk prioritization, knowledge graph uplift, and sandbox remediation efficacy against ground truth.
            </p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span className="text-label-code font-label-code text-[11px] text-on-surface-variant">REPRODUCIBILITY COMPLIANT · ED25519 RUN HASH VERIFIED · DEMO DATA LABELED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-md">

<div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-label-badge font-label-badge text-primary">RQ1: RISK PRIORITIZATION</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-2">Graph context vs severity-only baseline</p>
<div className="flex items-center justify-between text-label-code text-[11px] pt-1.5 border-t border-outline-variant/20">
<span className="text-on-surface-variant">State:</span>
<span className="text-secondary font-semibold">RESULTS AVAILABLE · +24.2% MRR Uplift</span>
</div>
</div>

<div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-label-badge font-label-badge text-primary">RQ2: EXPLAINABILITY</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-2">Evidence-grounded vs generic LLM advice</p>
<div className="flex items-center justify-between text-label-code text-[11px] pt-1.5 border-t border-outline-variant/20">
<span className="text-on-surface-variant">State:</span>
<span className="text-secondary font-semibold">RESULTS AVAILABLE · 91.4% Reviewer Agreement</span>
</div>
</div>

<div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-label-badge font-label-badge text-primary">RQ3: REMEDIATION EFFICACY</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-2">Deterministic patch vs raw codegen</p>
<div className="flex items-center justify-between text-label-code text-[11px] pt-1.5 border-t border-outline-variant/20">
<span className="text-on-surface-variant">State:</span>
<span className="text-secondary font-semibold">RESULTS AVAILABLE · 78.6% Zero-Regression Pass</span>
</div>
</div>

<div className="p-3 bg-surface-container-lowest/80 border border-outline-variant/30 rounded hover:border-primary-container/60 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-label-badge font-label-badge text-primary">RQ4: SANDBOX VERIFICATION</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-2">gVisor exploit replay vs static-only check</p>
<div className="flex items-center justify-between text-label-code text-[11px] pt-1.5 border-t border-outline-variant/20">
<span className="text-on-surface-variant">State:</span>
<span className="text-secondary font-semibold">RESULTS AVAILABLE · 100% Exploit Neutralization</span>
</div>
</div>
</div>
</section>



<section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">SAMPLES</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-on-surface">120 Cases</span>
</div>
<span className="text-[10px] font-label-code text-on-surface-variant">84 Vuln · 36 Clean</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">PRECISION</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-secondary">94.2%</span>
</div>
<span className="text-[10px] font-label-code text-secondary">+18.4% vs Baseline</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">RECALL</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-secondary">91.7%</span>
</div>
<span className="text-[10px] font-label-code text-secondary">+12.5% vs Baseline</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between border-l-2 border-l-primary-container">
<span className="text-label-badge font-label-badge text-primary">F1 SCORE</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-primary">0.929</span>
</div>
<span className="text-[10px] font-label-code text-primary">Baseline: 0.781 (Δ +0.148)</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">FALSE POS. RATE</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-on-surface">4.8%</span>
</div>
<span className="text-[10px] font-label-code text-on-surface-variant">Down from 22.2%</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">REMEDIATION RATE</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-secondary">78.6%</span>
</div>
<span className="text-[10px] font-label-code text-secondary">22/28 Passed gVisor</span>
</div>

<div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<span className="text-label-badge font-label-badge text-on-surface-variant">REGRESSION RATE</span>
<div className="my-1">
<span className="text-headline-md font-headline-md text-on-surface">0.0%</span>
</div>
<span className="text-[10px] font-label-code text-secondary">0/28 Leaks/Breaks</span>
</div>
</section>



<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">balance</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Baseline Comparison Workspace</h2>
</div>
<span className="text-label-badge font-label-badge text-[11px] text-on-surface-variant">N=120 SAMPLES · CROSS-VALIDATION</span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-label-code text-[11px] text-on-surface-variant uppercase">
<th className="py-2 px-2 font-medium">Evaluation Method</th>
<th className="py-2 px-2 font-medium">Precision</th>
<th className="py-2 px-2 font-medium">Recall</th>
<th className="py-2 px-2 font-medium">F1 Score</th>
<th className="py-2 px-2 font-medium">FPR</th>
<th className="py-2 px-2 font-medium">MRR</th>
<th className="py-2 px-2 font-medium">Sandbox Pass</th>
</tr>
</thead>
<tbody className="text-body-sm font-body-sm divide-y divide-outline-variant/20 font-label-code">

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-2">
<div className="font-medium text-on-surface font-body-sm">Method A: Severity Baseline</div>
<div className="text-[10px] text-on-surface-variant font-label-code">Rule-engine AST pattern match</div>
</td>
<td className="py-2.5 px-2 text-on-surface">75.8%</td>
<td className="py-2.5 px-2 text-on-surface">79.2%</td>
<td className="py-2.5 px-2 text-on-surface">0.781</td>
<td className="py-2.5 px-2 text-primary">22.2%</td>
<td className="py-2.5 px-2 text-on-surface">0.640</td>
<td className="py-2.5 px-2 text-on-surface-variant">N/A (Static)</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-2">
<div className="font-medium text-on-surface font-body-sm">Method B: Context Heuristics</div>
<div className="text-[10px] text-on-surface-variant font-label-code">AST + Reachability tags only</div>
</td>
<td className="py-2.5 px-2 text-on-surface">82.4%</td>
<td className="py-2.5 px-2 text-on-surface">84.5%</td>
<td className="py-2.5 px-2 text-on-surface">0.834</td>
<td className="py-2.5 px-2 text-on-surface">14.1%</td>
<td className="py-2.5 px-2 text-on-surface">0.715</td>
<td className="py-2.5 px-2 text-on-surface">42.8%</td>
</tr>

<tr className="bg-surface-container-high/40 border-l-2 border-l-primary-container">
<td className="py-2.5 px-2">
<div className="font-bold text-primary font-body-sm flex items-center gap-1.5">
<span>Method C: AegisOne AI</span>
<span className="text-[9px] bg-primary-container text-on-primary-container px-1 rounded uppercase font-label-badge font-bold">STATE</span>
</div>
<div className="text-[10px] text-on-surface-variant font-label-code">Knowledge Graph + AST + Grounded LLM</div>
</td>
<td className="py-2.5 px-2 text-secondary font-bold">94.2%</td>
<td className="py-2.5 px-2 text-secondary font-bold">91.7%</td>
<td className="py-2.5 px-2 text-primary font-bold">0.929</td>
<td className="py-2.5 px-2 text-secondary font-bold">4.8%</td>
<td className="py-2.5 px-2 text-secondary font-bold">0.882</td>
<td className="py-2.5 px-2 text-secondary font-bold">78.6%</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/30 flex flex-col gap-2.5">
<span className="text-label-badge font-label-badge text-on-surface-variant text-[11px] uppercase">Mean Reciprocal Rank (MRR) Delta Performance</span>

<div className="flex items-center gap-3">
<span className="w-24 text-[11px] font-label-code text-on-surface-variant">Method A</span>
<div className="flex-1 bg-surface-container h-2 rounded overflow-hidden">
<div className="bg-outline-variant h-full" style={{ "width": "64%" }}></div>
</div>
<span className="w-12 text-right text-[11px] font-label-code text-on-surface-variant">0.640</span>
</div>

<div className="flex items-center gap-3">
<span className="w-24 text-[11px] font-label-code text-on-surface-variant">Method B</span>
<div className="flex-1 bg-surface-container h-2 rounded overflow-hidden">
<div className="bg-surface-bright h-full" style={{ "width": "71.5%" }}></div>
</div>
<span className="w-12 text-right text-[11px] font-label-code text-on-surface-variant">0.715</span>
</div>

<div className="flex items-center gap-3">
<span className="w-24 text-[11px] font-label-code text-primary font-bold">AegisOne AI</span>
<div className="flex-1 bg-surface-container h-2 rounded overflow-hidden">
<div className="bg-primary-container h-full crimson-glow" style={{ "width": "88.2%" }}></div>
</div>
<span className="w-12 text-right text-[11px] font-label-code text-primary font-bold">0.882</span>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">grid_view</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Detection Quality &amp; Confusion Matrix</h2>
</div>
<span className="text-label-code text-[11px] text-on-surface-variant">N=120 LABELED TEST CASES</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">

<div className="md:col-span-7 flex flex-col gap-2">
<div className="text-[11px] font-label-code text-on-surface-variant text-center pb-1">
                  PREDICTED POSITIVE vs GROUND TRUTH
                </div>
<div className="grid grid-cols-2 gap-2">

<div className="p-3 bg-surface-container-high/60 border border-secondary/40 rounded flex flex-col items-center justify-center text-center">
<span className="text-[10px] font-label-badge text-secondary">TRUE POSITIVE (TP)</span>
<span className="text-headline-lg font-headline-lg text-secondary my-1">77</span>
<span className="text-[10px] font-label-code text-on-surface-variant">Vuln &amp; Correctly Caught</span>
</div>

<div className="p-3 bg-surface-container-high/60 border border-outline-variant/30 rounded flex flex-col items-center justify-center text-center">
<span className="text-[10px] font-label-badge text-primary">FALSE POSITIVE (FP)</span>
<span className="text-headline-lg font-headline-lg text-primary my-1">2</span>
<span className="text-[10px] font-label-code text-on-surface-variant">Clean Flagged as Vuln</span>
</div>

<div className="p-3 bg-surface-container-high/60 border border-outline-variant/30 rounded flex flex-col items-center justify-center text-center">
<span className="text-[10px] font-label-badge text-primary">FALSE NEGATIVE (FN)</span>
<span className="text-headline-lg font-headline-lg text-primary my-1">7</span>
<span className="text-[10px] font-label-code text-on-surface-variant">Missed True Vulnerabilities</span>
</div>

<div className="p-3 bg-surface-container-high/60 border border-outline-variant/30 rounded flex flex-col items-center justify-center text-center">
<span className="text-[10px] font-label-badge text-on-surface">TRUE NEGATIVE (TN)</span>
<span className="text-headline-lg font-headline-lg text-on-surface my-1">34</span>
<span className="text-[10px] font-label-code text-on-surface-variant">Clean Controls Passed</span>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col justify-between p-3 bg-surface-container rounded border border-outline-variant/20">
<span className="text-label-badge font-label-badge text-on-surface-variant mb-2">CWE COVERAGE PROFILE</span>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] font-label-code">
<span className="text-on-surface">SQLi (CWE-89)</span>
<span className="text-secondary font-bold">32 / 32 (100%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "100%" }}></div>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code">
<span className="text-on-surface">Deserialization (CWE-502)</span>
<span className="text-secondary font-bold">18 / 20 (90.0%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "90%" }}></div>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code">
<span className="text-on-surface">Hardcoded Keys (CWE-798)</span>
<span className="text-secondary font-bold">15 / 16 (93.7%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "93.7%" }}></div>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code">
<span className="text-on-surface">Stored XSS (CWE-79)</span>
<span className="text-secondary font-bold">12 / 16 (75.0%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "75%" }}></div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/30 text-[10px] font-label-code text-on-surface-variant mt-2">
                  GROUND TRUTH: Labeled via Automated AST Oracle + Dual Human Consensus
                </div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/30">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant">SAMPLE CASE TRACE LOG</span>
<span className="text-[11px] font-label-code text-on-surface-variant">Showing 3 representative instances</span>
</div>
<div className="flex flex-col gap-1.5 font-label-code text-[11px]">
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-secondary font-bold">TC-8902</span>
<span className="text-on-surface">search.py:42</span>
<span className="text-on-surface-variant">CWE-89</span>
</div>
<div className="flex items-center gap-3">
<span className="px-1.5 py-0.5 bg-secondary/10 text-secondary border border-secondary/30 rounded text-[10px]">PREDICTED: VULN</span>
<span className="text-on-surface-variant">ACTUAL: VULN</span>
<span className="text-secondary font-bold">TP</span>
</div>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-secondary font-bold">TC-5021</span>
<span className="text-on-surface">session_loader.py:19</span>
<span className="text-on-surface-variant">CWE-502</span>
</div>
<div className="flex items-center gap-3">
<span className="px-1.5 py-0.5 bg-secondary/10 text-secondary border border-secondary/30 rounded text-[10px]">PREDICTED: VULN</span>
<span className="text-on-surface-variant">ACTUAL: VULN</span>
<span className="text-secondary font-bold">TP</span>
</div>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">TC-7988</span>
<span className="text-on-surface">mock_signer.py:8</span>
<span className="text-on-surface-variant">CWE-798</span>
</div>
<div className="flex items-center gap-3">
<span className="px-1.5 py-0.5 bg-primary-container/20 text-primary border border-primary-container/40 rounded text-[10px]">PREDICTED: VULN</span>
<span className="text-on-surface-variant">ACTUAL: CLEAN (TEST_MOCK)</span>
<span className="text-primary font-bold">FP</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Prioritization Uplift Case</h2>
</div>
<span className="text-label-code text-[11px] text-primary font-semibold">RQ1 EMPIRICAL PROOF</span>
</div>

<div className="p-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded mb-3">
<div className="flex items-center justify-between">
<span className="text-label-code font-bold text-on-surface">TC-8902: SQL Injection in search.py</span>
<span className="text-label-badge text-primary bg-primary-container/20 px-1.5 py-0.5 rounded">CWE-89</span>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant mt-1">
                Baseline standard AST heuristic placed this at <span className="text-on-surface font-semibold">#8 (Medium)</span> due to internal service assumption. Knowledge Graph elevation re-ranked to <span className="text-primary font-bold">#1 CRITICAL</span>.
              </p>
</div>

<div className="flex flex-col gap-2 p-3 bg-surface-container-high/40 rounded border border-outline-variant/20 font-label-code text-[11px]">
<span className="text-[10px] font-label-badge text-on-surface-variant uppercase">INTERCEPTED CALL GRAPH ATTACK CHAIN:</span>

<div className="flex items-center gap-2 text-on-surface">
<span className="w-5 h-5 rounded bg-surface-container flex items-center justify-center border border-outline-variant/40 text-[10px] text-secondary">01</span>
<span>Public Ingress Gateway</span>
<span className="text-[10px] text-on-surface-variant">(/api/v2/students/query)</span>
</div>
<div className="pl-2.5 text-outline-variant text-[12px]">↓ [Unauthenticated Route]</div>

<div className="flex items-center gap-2 text-on-surface">
<span className="w-5 h-5 rounded bg-surface-container flex items-center justify-center border border-outline-variant/40 text-[10px] text-secondary">02</span>
<span>Direct Student DB Entity Controller</span>
<span className="text-[10px] text-on-surface-variant">(search.py:42)</span>
</div>
<div className="pl-2.5 text-outline-variant text-[12px]">↓ [Taint Concatenation to raw SQL]</div>

<div className="flex items-center gap-2 text-primary font-bold">
<span className="w-5 h-5 rounded bg-primary-container/20 flex items-center justify-center border border-primary-container/50 text-[10px] text-primary">03</span>
<span>FERPA PII Table Exfiltration Target</span>
<span className="text-[10px] bg-primary-container text-on-primary-container px-1 rounded">CRITICAL UPLIFT</span>
</div>
</div>
<div className="mt-3 text-label-code text-[11px] text-secondary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">trending_up</span>
<span>MRR Uplift Contribution: +0.242 on this sample cohort</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">rule_folder</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Remediation Lifecycle (N=28)</h2>
</div>
<span className="text-label-badge font-label-badge text-on-surface-variant">RQ3 &amp; RQ4</span>
</div>
<div className="flex flex-col gap-3">

<div>
<div className="flex justify-between text-label-code text-[11px] mb-1">
<span className="text-on-surface">1. Patches Proposed</span>
<span className="text-secondary font-bold">28 / 28 (100%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "100%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-label-code text-[11px] mb-1">
<span className="text-on-surface">2. Sandbox Deployed (gVisor)</span>
<span className="text-secondary font-bold">28 / 28 (100%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "100%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-label-code text-[11px] mb-1">
<span className="text-on-surface">3. Dynamic Exploit Replay Blocked</span>
<span className="text-secondary font-bold">26 / 28 (92.8%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "92.8%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-label-code text-[11px] mb-1">
<span className="text-on-surface font-semibold text-primary">4. Zero Regression Passed</span>
<span className="text-primary font-bold">22 / 28 (78.6%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden">
<div className="bg-primary-container h-full" style={{ "width": "78.6%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-label-code text-[11px] mb-1">
<span className="text-on-surface">5. Operator Dual-Signed</span>
<span className="text-secondary font-bold">22 / 28 (78.6%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "78.6%" }}></div>
</div>
</div>
</div>
<div className="mt-3 p-2 bg-surface-container-lowest border border-outline-variant/30 rounded text-[10px] font-label-code text-on-surface-variant flex items-center justify-between">
<span>SANDBOX ENGINE: gVisor MicroVM v2025.1</span>
<span className="text-secondary">ISOLATION: FULL</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">fingerprint</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Reproducibility &amp; Manifest</h2>
</div>
<span className="text-label-badge text-secondary font-label-badge">VERIFIED</span>
</div>
<div className="space-y-2 font-label-code text-[11px]">
<div className="flex justify-between">
<span className="text-on-surface-variant">RUN ID:</span>
<span className="text-on-surface font-bold">RUN-2025-0518-EVAL42</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">DATASET HASH:</span>
<span className="text-secondary">sha256:8f4e229a...01b</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">EVAL SEED:</span>
<span className="text-on-surface">42 (Deterministic PRNG)</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">ENVIRONMENT:</span>
<span className="text-on-surface">gVisor MicroVM + Python 3.11 AST</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2">
<button className="flex-1 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded text-label-code text-[11px] text-on-surface transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">code</span>
<span>Download JSON</span>
</button>
<button className="flex-1 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded text-label-code text-[11px] text-secondary transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[15px]">verified</span>
<span>Verify ED25519</span>
</button>
</div>
</div>
</div>
</section>



<section className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md mb-8">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">history</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Experiment Run Registry</h2>
</div>
<div className="flex items-center gap-3">
<span className="text-label-code text-[11px] text-on-surface-variant">TOTAL RUNS: 4 LOGGED</span>
<button className="text-label-code text-[11px] text-primary hover:underline">Filter Registry</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse font-label-code text-[12px]">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant text-[11px] uppercase">
<th className="py-2.5 px-3 font-medium">Run ID</th>
<th className="py-2.5 px-3 font-medium">Experiment Name</th>
<th className="py-2.5 px-3 font-medium">Method</th>
<th className="py-2.5 px-3 font-medium">Dataset</th>
<th className="py-2.5 px-3 font-medium">Status</th>
<th className="py-2.5 px-3 font-medium">Samples</th>
<th className="py-2.5 px-3 font-medium">F1</th>
<th className="py-2.5 px-3 font-medium">Duration</th>
<th className="py-2.5 px-3 font-medium">Operator</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="bg-surface-container-high/30 hover:bg-surface-container-high/60 transition-colors">
<td className="py-2.5 px-3 text-primary font-bold">RUN-2025-0518-EVAL42</td>
<td className="py-2.5 px-3 text-on-surface font-body-sm font-medium">Full Graph + Sandbox Eval</td>
<td className="py-2.5 px-3 text-on-surface-variant">Method C (AegisOne)</td>
<td className="py-2.5 px-3 text-on-surface-variant">SEC-BENCH-COLLEGE-V2.1</td>
<td className="py-2.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-secondary/15 text-secondary border border-secondary/30">COMPLETED</span>
</td>
<td className="py-2.5 px-3 text-on-surface">120</td>
<td className="py-2.5 px-3 text-secondary font-bold">0.929</td>
<td className="py-2.5 px-3 text-on-surface-variant">4m 12s</td>
<td className="py-2.5 px-3 text-on-surface">Analyst_442</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 text-on-surface">RUN-2025-0518-EVAL41</td>
<td className="py-2.5 px-3 text-on-surface font-body-sm">Context-Heuristic Sweep</td>
<td className="py-2.5 px-3 text-on-surface-variant">Method B (Heuristics)</td>
<td className="py-2.5 px-3 text-on-surface-variant">SEC-BENCH-COLLEGE-V2.1</td>
<td className="py-2.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-secondary/15 text-secondary border border-secondary/30">COMPLETED</span>
</td>
<td className="py-2.5 px-3 text-on-surface">120</td>
<td className="py-2.5 px-3 text-on-surface font-semibold">0.834</td>
<td className="py-2.5 px-3 text-on-surface-variant">1m 45s</td>
<td className="py-2.5 px-3 text-on-surface">Analyst_442</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 text-on-surface">RUN-2025-0517-EVAL40</td>
<td className="py-2.5 px-3 text-on-surface font-body-sm">Severity-Only Static Run</td>
<td className="py-2.5 px-3 text-on-surface-variant">Method A (AST Rules)</td>
<td className="py-2.5 px-3 text-on-surface-variant">SEC-BENCH-COLLEGE-V2.1</td>
<td className="py-2.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-secondary/15 text-secondary border border-secondary/30">COMPLETED</span>
</td>
<td className="py-2.5 px-3 text-on-surface">120</td>
<td className="py-2.5 px-3 text-on-surface font-semibold">0.781</td>
<td className="py-2.5 px-3 text-on-surface-variant">0m 32s</td>
<td className="py-2.5 px-3 text-on-surface">Analyst_442</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 text-on-surface">RUN-2025-0516-EVAL39</td>
<td className="py-2.5 px-3 text-on-surface font-body-sm">Zero-Shot Baseline</td>
<td className="py-2.5 px-3 text-on-surface-variant">Ungrounded LLM</td>
<td className="py-2.5 px-3 text-on-surface-variant">SEC-BENCH-COLLEGE-V2.0</td>
<td className="py-2.5 px-3">
<span className="px-2 py-0.5 rounded text-[10px] bg-outline-variant/30 text-on-surface-variant border border-outline-variant/40">ARCHIVED</span>
</td>
<td className="py-2.5 px-3 text-on-surface">100</td>
<td className="py-2.5 px-3 text-on-surface">0.692</td>
<td className="py-2.5 px-3 text-on-surface-variant">6m 08s</td>
<td className="py-2.5 px-3 text-on-surface">SecOps_Lead</td>
</tr>
</tbody>
</table>
</div>
</section>

    </div>
  );
};

export default ResearchLabPage;
