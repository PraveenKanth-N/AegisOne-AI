import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const DashboardPage: React.FC = () => {
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
        console.error('Failed to load DashboardPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">




<section className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/20 pb-space-lg">
<div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary text-label-badge font-label-badge mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
            DEFENSIVE SECURITY WORKSPACE
          </div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
            Security Operations Command Center
          </h1>
<p className="text-body-md font-body-md text-on-surface-variant mt-1 max-w-2xl">
            Understand application exposure, investigate evidence, and verify remediation across authorized lab targets.
          </p>
</div>
<div className="flex items-center space-x-3 self-start md:self-center">
<button className="px-4 py-2 rounded text-label-code font-label-code text-xs font-semibold bg-primary-container text-on-primary-container hover:brightness-110 tactical-glow flex items-center space-x-1.5 transition-all">
<span className="material-symbols-outlined text-sm" >settings_suggest</span>
<span>Configure Scan</span>
</button>
<button className="px-4 py-2 rounded text-label-code font-label-code text-xs font-semibold border border-secondary text-secondary hover:bg-secondary/10 flex items-center space-x-1.5 transition-all">
<span className="material-symbols-outlined text-sm" >analytics</span>
<span>View Latest Report</span>
</button>
</div>
</section>



<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-primary-container/50 transition-all">
<div className="flex items-center justify-between text-outline text-xs">
<span className="text-label-code font-label-code uppercase tracking-wider">Contextual Posture</span>
<span className="material-symbols-outlined text-sm"  title="Based on asset exposure and confirmed exploit paths">shield_with_heart</span>
</div>
<div className="mt-2 flex items-baseline justify-between">
<div>
<div className="text-3xl font-headline-lg font-bold text-primary">78<span className="text-xs text-outline font-normal">/100</span></div>
<div className="text-label-badge font-label-badge text-primary-fixed-dim mt-0.5">Elevated Risk</div>
</div>

<svg className="w-16 h-8 text-primary stroke-current fill-none" viewBox="0 0 64 32">
<path d="M0 26 L12 20 L24 24 L36 12 L48 18 L64 6" stroke-linecap="round" stroke-width="2"></path>
</svg>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-[11px] text-on-surface-variant">
<span className="text-primary-container font-semibold">-4 pts</span>
<span className="text-outline">from baseline</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-outline text-xs">
<span className="text-label-code font-label-code uppercase tracking-wider">Confirmed Findings</span>
<span className="material-symbols-outlined text-sm" >warning</span>
</div>
<div className="mt-2 flex items-baseline justify-between">
<div className="text-3xl font-headline-lg font-bold text-on-surface">14</div>
<span className="text-label-badge font-label-badge text-outline text-[11px]">ACTIVE TRIAGE</span>
</div>

<div className="mt-3 flex h-1.5 w-full rounded overflow-hidden bg-surface-container-high gap-0.5">
<div className="bg-primary-container w-[14%]" title="Critical: 2"></div>
<div className="bg-tertiary-container w-[36%]" title="High: 5"></div>
<div className="bg-secondary w-[28%]" title="Medium: 4"></div>
<div className="bg-outline w-[22%]" title="Low: 3"></div>
</div>
<div className="mt-2 flex items-center justify-between text-label-code font-label-code text-[10px] text-outline">
<span className="text-primary font-bold">2 Crit</span>
<span className="text-tertiary">5 High</span>
<span className="text-secondary">4 Med</span>
<span>3 Low</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-outline text-xs">
<span className="text-label-code font-label-code uppercase tracking-wider">Assets at Risk</span>
<span className="material-symbols-outlined text-sm" >dns</span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<div className="text-3xl font-headline-lg font-bold text-on-surface">6</div>
<span className="text-body-sm font-body-sm text-outline">/ 18 mapped</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20">
<div className="text-label-code font-label-code text-[11px] text-primary truncate font-medium">
              Auth &amp; Student DB Cluster
            </div>
<div className="text-[10px] text-outline mt-0.5">Highest exposure vector</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-secondary/40 transition-all">
<div className="flex items-center justify-between text-outline text-xs">
<span className="text-label-code font-label-code uppercase tracking-wider">Remediation Validation</span>
<span className="material-symbols-outlined text-sm text-secondary" >task_alt</span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<div className="text-3xl font-headline-lg font-bold text-secondary">8</div>
<span className="text-body-sm font-body-sm text-outline">tested</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-[11px]">
<span className="text-secondary font-semibold">6 Passed</span>
<span className="text-primary-container">1 Rejected</span>
<span className="text-outline">1 Review</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-outline text-xs">
<span className="text-label-code font-label-code uppercase tracking-wider">Verification Coverage</span>
<span className="material-symbols-outlined text-sm" >fact_check</span>
</div>
<div className="mt-2 flex items-baseline space-x-2">
<div className="text-3xl font-headline-lg font-bold text-on-surface">84.6%</div>
<span className="text-body-sm font-body-sm text-outline">applicable</span>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-[11px] text-outline">
<span className="text-on-surface font-mono">38 passed</span>
<span className="text-primary-container font-mono">3 failed</span>
<span className="text-outline/70 font-mono">4 skipped</span>
</div>
</div>
</section>



<section className="bg-surface-container-low border border-outline-variant/30 rounded p-space-lg space-y-4 relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
<div>
<div className="flex items-center space-x-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">
                AegisOne Closed-Loop Security Decision Pipeline
              </h2>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
              Deterministic 10-stage verifiable orchestration loop from discovery through sandbox validation to governance decision.
            </p>
</div>
<div className="flex items-center space-x-2 text-label-code font-label-code text-xs">
<span className="text-outline">Target Hash:</span>
<span className="font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/30">7f2a89..c04</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 pt-2">

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative group">
<div className="text-label-code font-label-code text-[10px] text-outline">01</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">DETECT</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>240ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">02</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5 truncate">CONTEXT</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>180ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">03</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">CONNECT</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>310ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">04</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">PRIORITIZE</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>90ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">05</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">EXPLAIN</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>450ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">06</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">REMEDIATE</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>620ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">07</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">SANDBOX</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>1.2s</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">08</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">VALIDATE</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>890ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border border-secondary/30 rounded p-2 text-center relative">
<div className="text-label-code font-label-code text-[10px] text-outline">09</div>
<div className="text-label-code font-label-code font-bold text-xs text-on-surface mt-0.5">RE-SCAN</div>
<div className="text-[10px] font-mono text-secondary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" >check_circle</span>
<span>410ms</span>
</div>
</div>

<div className="bg-surface-container-lowest border-2 border-primary-container rounded p-2 text-center relative tactical-glow">
<div className="text-label-code font-label-code text-[10px] text-primary">10</div>
<div className="text-label-code font-label-code font-bold text-xs text-primary mt-0.5">DECIDE</div>
<div className="text-[10px] font-mono text-primary mt-1 flex items-center justify-center gap-0.5">
<span className="material-symbols-outlined text-[12px] animate-pulse" >pending</span>
<span>Human Gate</span>
</div>
</div>
</div>

<div className="mt-3 bg-surface-container-lowest rounded border border-outline-variant/30 p-3 flex flex-col md:flex-row items-center justify-between text-label-code font-label-code text-xs gap-3">
<div className="flex items-center space-x-3 w-full md:w-auto">
<span className="text-outline">Active Inspection:</span>
<span className="text-on-surface bg-surface-container px-2 py-0.5 rounded font-mono">Input: AST Taint Path #9042</span>
<span className="text-outline">→</span>
<span className="text-secondary bg-surface-container px-2 py-0.5 rounded font-mono">Output: Parameterized Prepared Stmt</span>
</div>
<div className="flex items-center space-x-4 w-full md:w-auto justify-end">
<span className="text-[11px] text-outline">Audit Verification Hash: <code className="text-secondary">sha256:d894e..89b</code></span>
<button className="text-primary hover:underline text-[11px] flex items-center gap-1">
<span>View Execution Logs</span>
<span className="material-symbols-outlined text-xs" >arrow_forward</span>
</button>
</div>
</div>
</section>



<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Security Posture Over Time</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                  Contextual Risk Score vs. Static CVSS Raw Exposure
                </p>
</div>
<div className="flex items-center space-x-1 bg-surface-container-lowest p-1 rounded border border-outline-variant/20 text-label-code font-label-code text-xs">
<button className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">24h</button>
<button className="px-2.5 py-0.5 rounded text-outline hover:text-on-surface">7d</button>
<button className="px-2.5 py-0.5 rounded text-outline hover:text-on-surface">30d</button>
</div>
</div>

<div className="h-56 w-full relative pt-2">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 200">
<defs>
<linearGradient id="primaryGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ff5357" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#ff5357" stop-opacity="0.0"></stop>
</linearGradient>
<linearGradient id="cyanGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#65d4f6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#65d4f6" stop-opacity="0.0"></stop>
</linearGradient>
</defs>

<line stroke="#353438" stroke-dasharray="3 3" stroke-width="0.8" x1="0" x2="700" y1="40" y2="40"></line>
<line stroke="#353438" stroke-dasharray="3 3" stroke-width="0.8" x1="0" x2="700" y1="90" y2="90"></line>
<line stroke="#353438" stroke-dasharray="3 3" stroke-width="0.8" x1="0" x2="700" y1="140" y2="140"></line>

<polygon fill="url(#primaryGrad)" points="0,170 70,150 140,160 210,130 280,145 350,110 420,125 490,90 560,95 630,70 700,60 700,200 0,200"></polygon>
<polygon fill="url(#cyanGrad)" points="0,120 70,110 140,115 210,100 280,105 350,90 420,95 490,75 560,70 630,55 700,45 700,200 0,200"></polygon>

<path d="M0,120 L70,110 L140,115 L210,100 L280,105 L350,90 L420,95 L490,75 L560,70 L630,55 L700,45" fill="none" stroke="#ff5357" stroke-dasharray="4 4" stroke-width="2"></path>

<path d="M0,170 L70,150 L140,160 L210,130 L280,145 L350,110 L420,125 L490,90 L560,95 L630,70 L700,60" fill="none" stroke="#65d4f6" stroke-width="2.5"></path>

<circle className="animate-ping" cx="700" cy="60" fill="#65d4f6" r="4"></circle>
<circle cx="700" cy="60" fill="#65d4f6" r="4"></circle>
<circle cx="700" cy="45" fill="#ff5357" r="4"></circle>
</svg>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-outline-variant/20 text-label-code font-label-code text-xs">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1.5">
<span className="w-3 h-0.5 bg-secondary"></span>
<span className="text-on-surface">Contextual Risk (7.8)</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-3 h-0.5 bg-primary-container border-b border-dashed border-primary"></span>
<span className="text-outline">Raw Static CVSS (8.8)</span>
</div>
</div>
<span className="text-[11px] text-outline font-mono">1.0 Delta Explained by Network Isolation</span>
</div>
</div>

<div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Severity Distribution</h3>
<span className="material-symbols-outlined text-outline text-sm" >pie_chart</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
              Categorized by contextual impact calculation
            </p>
<div className="flex items-center justify-center relative py-2">

<svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#5e3f3d" stroke-dasharray="251.2" stroke-dashoffset="0" stroke-width="14"></circle>

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#65d4f6" stroke-dasharray="251.2" stroke-dashoffset="55.2" stroke-width="14"></circle>

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#f65c67" stroke-dasharray="251.2" stroke-dashoffset="125.6" stroke-width="14"></circle>

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#ff5357" stroke-dasharray="251.2" stroke-dashoffset="216.0" stroke-width="14"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-headline-md font-headline-md font-bold text-on-surface">14</span>
<span className="text-[10px] text-outline uppercase font-mono">Total Issues</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pt-3 border-t border-outline-variant/20 text-label-code font-label-code text-xs">
<div className="flex items-center space-x-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-primary-container"></span>
<span className="text-on-surface">Critical: <strong className="text-primary font-mono">14% (2)</strong></span>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary-container"></span>
<span className="text-on-surface">High: <strong className="text-tertiary font-mono">36% (5)</strong></span>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
<span className="text-on-surface">Medium: <strong className="text-secondary font-mono">28% (4)</strong></span>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-outline-variant"></span>
<span className="text-on-surface">Low: <strong className="text-outline font-mono">22% (3)</strong></span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Finding Lifecycle Funnel</h3>
<span className="text-label-badge font-label-badge text-secondary bg-secondary/10 px-2 py-0.5 rounded">6 VALIDATED</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
              Attrition of vulnerabilities from raw scanner noise to sandbox-verified patch.
            </p>
<div className="space-y-2 text-label-code font-label-code text-xs">

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-outline">Detected by Static Analyzer</span>
<span className="text-on-surface font-mono">24 (100%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-outline w-[100%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-outline">Evidence Reviewed (AST &amp; Taint Path Verified)</span>
<span className="text-on-surface font-mono">19 (79.1%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-outline w-[79%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-outline">Contextualized (Reachability &amp; Isolation Confirmed)</span>
<span className="text-on-surface font-mono">16 (66.6%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-outline-variant w-[66%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-outline">Remediation Proposed by AI Analyst</span>
<span className="text-on-surface font-mono">11 (45.8%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-secondary-container w-[45%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-outline">Sandbox Isolation Tested</span>
<span className="text-on-surface font-mono">8 (33.3%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-secondary w-[33%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[11px] mb-1">
<span className="text-secondary font-semibold">Fully Validated &amp; Passed Sandbox</span>
<span className="text-secondary font-mono font-bold">6 (25.0%)</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-secondary w-[25%]"></div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-[11px] text-outline">
<span>Filter noise rejected: <strong className="text-primary-container">8 false positives</strong></span>
<span>Regression prevented: <strong className="text-primary-container">2 rejected patches</strong></span>
</div>
</div>

<div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Live Security Event Timeline</h3>
<div className="flex items-center space-x-1.5 text-xs text-primary font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
<span>AUDIT_LOG_STREAM</span>
</div>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-3">
              Real-time telemetry and validation transitions.
            </p>
<div className="space-y-3 font-label-code text-xs">

<div className="flex items-start space-x-3 p-2 rounded bg-surface-container-lowest border-l-2 border-primary-container border-t border-r border-b border-outline-variant/20">
<span className="text-outline font-mono text-[11px] mt-0.5">14:24:10</span>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary-container/20 text-primary border border-primary-container/40">REMEDIATION_REJECTED</span>
<span className="text-outline text-[11px]">#SCN-8092</span>
</div>
<p className="text-on-surface-variant text-[11px] mt-1 leading-snug">
                    Patch P-104 caused regression on student auth session tokens in sandbox container #3.
                  </p>
</div>
</div>

<div className="flex items-start space-x-3 p-2 rounded bg-surface-container-lowest border-l-2 border-secondary border-t border-r border-b border-outline-variant/20">
<span className="text-outline font-mono text-[11px] mt-0.5">14:23:45</span>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-secondary/20 text-secondary border border-secondary/40">VALIDATION_PASSED</span>
<span className="text-outline text-[11px]">#SCN-8091</span>
</div>
<p className="text-on-surface-variant text-[11px] mt-1 leading-snug">
                    CWE-89 SQL injection mitigation verified. No taint leak detected across 50 simulated requests.
                  </p>
</div>
</div>

<div className="flex items-start space-x-3 p-2 rounded bg-surface-container-lowest border-l-2 border-tertiary-container border-t border-r border-b border-outline-variant/20">
<span className="text-outline font-mono text-[11px] mt-0.5">14:21:02</span>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-tertiary-container/20 text-tertiary border border-tertiary-container/40">GRAPH_EDGE_ADDED</span>
<span className="text-outline text-[11px]">#KG-3301</span>
</div>
<p className="text-on-surface-variant text-[11px] mt-1 leading-snug">
                    Knowledge Graph confirmed public exposure of auth service via nginx gateway reverse-proxy.
                  </p>
</div>
</div>
</div>
</div>
<div className="pt-2 text-right">
<a className="text-label-code font-label-code text-[11px] text-secondary hover:underline" href="#/">
              Inspect Full Telemetry Buffer →
            </a>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-3">
<div className="flex items-center justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Asset Exposure Matrix</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">
              System components ranked by asset criticality and verified threat surfaces.
            </p>
</div>
<span className="text-label-code font-label-code text-xs text-outline font-mono">6 of 18 Flagged</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-label-code font-label-code text-xs">
<thead>
<tr className="border-b border-outline-variant/30 text-outline uppercase text-[10px] tracking-wider">
<th className="py-2 px-3">Asset Name</th>
<th className="py-2 px-3">Criticality Tier</th>
<th className="py-2 px-3">Data Sensitivity</th>
<th className="py-2 px-3">Public Exposure</th>
<th className="py-2 px-3">Confirmed Issues</th>
<th className="py-2 px-3">Contextual Risk</th>
<th className="py-2 px-3">Scan State</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 text-on-surface-variant">
<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary" >storage</span>
                  Auth &amp; Student DB Cluster
                </td>
<td className="py-2.5 px-3"><span className="px-1.5 py-0.5 rounded bg-primary-container/20 text-primary font-bold">TIER 1 (CORE)</span></td>
<td className="py-2.5 px-3 text-primary-fixed-dim">RESTRICTED PII</td>
<td className="py-2.5 px-3"><span className="text-primary font-mono">ISOLATED [VPC]</span></td>
<td className="py-2.5 px-3 font-mono font-bold text-primary">3 High / 1 Crit</td>
<td className="py-2.5 px-3"><span className="text-primary font-bold">8.9 / 10</span></td>
<td className="py-2.5 px-3"><span className="text-secondary flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Verified</span></td>
</tr>
<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-secondary" >web</span>
                  Placement Portal Web App
                </td>
<td className="py-2.5 px-3"><span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface">TIER 2</span></td>
<td className="py-2.5 px-3 text-outline">CONFIDENTIAL</td>
<td className="py-2.5 px-3"><span className="text-primary-container font-mono">PUBLIC EDGE</span></td>
<td className="py-2.5 px-3 font-mono text-tertiary">2 Med / 1 Low</td>
<td className="py-2.5 px-3"><span className="text-tertiary font-bold">6.4 / 10</span></td>
<td className="py-2.5 px-3"><span className="text-secondary flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Verified</span></td>
</tr>
<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-3 font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-outline" >cloud_queue</span>
                  Resume Processing Daemon
                </td>
<td className="py-2.5 px-3"><span className="px-1.5 py-0.5 rounded bg-surface-container text-outline">TIER 3</span></td>
<td className="py-2.5 px-3 text-outline">INTERNAL</td>
<td className="py-2.5 px-3"><span className="text-outline font-mono">INTERNAL WORKER</span></td>
<td className="py-2.5 px-3 font-mono text-outline">1 Low</td>
<td className="py-2.5 px-3"><span className="text-outline font-bold">3.2 / 10</span></td>
<td className="py-2.5 px-3"><span className="text-outline flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Clean</span></td>
</tr>
</tbody>
</table>
</div>
</section>



<section className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
<div>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Priority Findings</h2>
<p className="text-body-sm font-body-sm text-on-surface-variant">
              Triage, verify AST evidence, and approve automated remediation proposals.
            </p>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 rounded border border-outline-variant hover:border-on-surface text-label-code font-label-code text-xs flex items-center gap-1 text-on-surface transition-colors">
<span className="material-symbols-outlined text-sm" >file_download</span>
<span>Export CSV</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-label-code font-label-code text-xs">

<div className="flex flex-wrap items-center gap-2">

<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-sm text-outline" >search</span>
<input className="bg-surface-container-lowest border border-outline-variant/40 rounded pl-8 pr-3 py-1.5 text-xs text-on-surface placeholder-outline focus:outline-none focus:border-primary w-64 font-mono" placeholder="Search CWE, file path, symbol..." type="text"/>
</div>

<div className="flex items-center space-x-1 bg-surface-container-lowest p-1 rounded border border-outline-variant/30">
<button className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface font-semibold">All (14)</button>
<button className="px-2.5 py-0.5 rounded text-primary hover:bg-surface-container">Critical (2)</button>
<button className="px-2.5 py-0.5 rounded text-tertiary hover:bg-surface-container">High (5)</button>
<button className="px-2.5 py-0.5 rounded text-secondary hover:bg-surface-container">Med (4)</button>
<button className="px-2.5 py-0.5 rounded text-outline hover:bg-surface-container">Low (3)</button>
</div>
</div>

<div className="flex items-center space-x-2">
<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-xs text-on-surface font-label-code focus:outline-none">
<option>Asset: All Clusters</option>
<option>Auth &amp; Student DB</option>
<option>Placement Portal Web</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-xs text-on-surface font-label-code focus:outline-none">
<option>Status: All States</option>
<option>Validation Passed</option>
<option>In Sandbox</option>
<option>Awaiting Remediation</option>
</select>
</div>
</div>

<div className="border border-outline-variant/30 rounded overflow-hidden">
<table className="w-full text-left text-label-code font-label-code text-xs">
<thead className="bg-surface-container-lowest border-b border-outline-variant/30 text-outline uppercase text-[10px] tracking-wider">
<tr>
<th className="py-2.5 px-3">Vulnerability / Finding</th>
<th className="py-2.5 px-3">Risk Level</th>
<th className="py-2.5 px-3">Target Asset</th>
<th className="py-2.5 px-3">Source Location</th>
<th className="py-2.5 px-3">Validation Status</th>
<th className="py-2.5 px-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 bg-surface-container-low/40">

<tr className="bg-surface-container-high/40 border-l-2 border-primary-container">
<td className="py-3 px-3">
<div className="font-bold text-on-surface flex items-center gap-1.5">
<span className="text-primary font-mono">CWE-89</span>
<span>SQL Injection in UserProfileQuery</span>
</div>
<div className="text-[11px] text-outline mt-0.5">Unsanitized student_id parameter directly concatenated</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40 font-bold">
                    8.6 HIGH
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">DB Cluster (PostgreSQL)</td>
<td className="py-3 px-3 font-mono text-secondary text-[11px]">/api/v1/auth/profile.py:42</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30 flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]" >verified</span>
<span>Validation Passed</span>
</span>
</td>
<td className="py-3 px-3 text-right space-x-1">
<button className="px-2 py-1 rounded bg-secondary text-on-secondary font-bold hover:brightness-110 transition-all text-[11px]">
                    Inspect Diff
                  </button>
<button className="px-2 py-1 rounded border border-outline-variant hover:text-secondary hover:border-secondary transition-all text-[11px]">
                    Open Graph
                  </button>
</td>
</tr>

<tr className="bg-surface-container-lowest">
<td className="p-3" colSpan={6}>
<div className="bg-surface-container-low rounded border border-outline-variant/30 p-3 space-y-3">
<div className="flex items-center justify-between text-[11px] border-b border-outline-variant/20 pb-2">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-sm text-secondary" >difference</span>
<span className="font-bold text-on-surface">Synthesized Mitigation Patch: #P-8902</span>
<span className="text-outline">· Deterministic Mock Sandbox Container #2</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-secondary font-mono">✓ 0 Regressions Detected</span>
<span className="text-outline">|</span>
<span className="text-primary font-mono">AST Taint: RESOLVED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono text-[11px]">

<div className="p-2 rounded bg-surface-container-lowest border border-primary-container/30">
<div className="text-primary text-[10px] uppercase font-bold mb-1 flex items-center justify-between">
<span>Vulnerable AST Strike Zone</span>
<span className="material-symbols-outlined text-xs" >close</span>
</div>
<div className="text-on-surface-variant/80">
<span className="text-outline">41 |</span> def get_student(student_id):<br/>
<span className="text-primary-container font-bold bg-primary-container/10">42 -   query = f"SELECT * FROM users WHERE id = '&#123;student_id&#125;'"</span><br/>
<span className="text-outline">43 |</span>   return db.execute(query)
                        </div>
</div>

<div className="p-2 rounded bg-surface-container-lowest border border-secondary/30">
<div className="text-secondary text-[10px] uppercase font-bold mb-1 flex items-center justify-between">
<span>Verified Neural Mitigation</span>
<span className="material-symbols-outlined text-xs" >check</span>
</div>
<div className="text-on-surface-variant/80">
<span className="text-outline">41 |</span> def get_student(student_id):<br/>
<span className="text-secondary font-bold bg-secondary/10">42 +   query = "SELECT * FROM users WHERE id = %s"</span><br/>
<span className="text-secondary font-bold bg-secondary/10">43 +   return db.execute(query, (student_id,))</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-1 text-[11px] text-outline">
<span>Rollback Test: Passed (Zero residual artifacts on sandbox reset)</span>
<button className="px-3 py-1 bg-primary-container text-on-primary-container font-bold rounded hover:brightness-110">
                        Commit to Staging Branch
                      </button>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3 px-3">
<div className="font-bold text-on-surface flex items-center gap-1.5">
<span className="text-secondary font-mono">CWE-79</span>
<span>Stored XSS in Student Bio Forum</span>
</div>
<div className="text-[11px] text-outline mt-0.5">Rendered markdown content lacks sanitized sanitization filter</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary border border-secondary/30 font-bold">
                    6.4 MED
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">Web Frontend</td>
<td className="py-3 px-3 font-mono text-outline text-[11px]">/src/components/BioView.tsx:88</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-outline border border-outline-variant/30 flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px] animate-spin" >autorenew</span>
<span>In Sandbox</span>
</span>
</td>
<td className="py-3 px-3 text-right space-x-1">
<button className="px-2 py-1 rounded border border-outline-variant hover:text-secondary hover:border-secondary transition-all text-[11px]">
                    Inspect Diff
                  </button>
<button className="px-2 py-1 rounded border border-outline-variant hover:text-on-surface text-[11px]">
                    Open Graph
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3 px-3">
<div className="font-bold text-on-surface flex items-center gap-1.5">
<span className="text-primary font-mono">CWE-798</span>
<span>Hardcoded JWT Signing Secret</span>
</div>
<div className="text-[11px] text-outline mt-0.5">Static HMAC passphrase committed to source tree</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-bold tactical-glow">
                    9.2 CRIT
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">Config Repository</td>
<td className="py-3 px-3 font-mono text-outline text-[11px]">/services/auth.js:14</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-primary-container/10 text-primary border border-primary-container/30 flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]" >error</span>
<span>Awaiting Remediation</span>
</span>
</td>
<td className="py-3 px-3 text-right space-x-1">
<button className="px-2 py-1 rounded bg-primary-container text-on-primary-container font-bold hover:brightness-110 text-[11px]">
                    Synthesize Fix
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3 px-3">
<div className="font-bold text-on-surface flex items-center gap-1.5">
<span className="text-outline font-mono">CWE-319</span>
<span>Cleartext Transmission of Sensitive Cookie</span>
</div>
<div className="text-[11px] text-outline mt-0.5">Missing Secure and SameSite flags in Nginx ingress headers</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-outline border border-outline-variant/30 font-bold">
                    3.2 LOW
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">Gateway / Ingress</td>
<td className="py-3 px-3 font-mono text-outline text-[11px]">/etc/nginx/default.conf:19</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/30 flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]" >check</span>
<span>Validated Fix</span>
</span>
</td>
<td className="py-3 px-3 text-right space-x-1">
<button className="px-2 py-1 rounded border border-outline-variant hover:text-secondary text-[11px]">
                    Inspect Diff
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
</section>



<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-3">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Contextual Risk Decomposition</h3>
<span className="text-label-code font-label-code text-xs text-outline font-mono">Formula: v3.4 Tactical</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-label-code font-label-code text-xs pt-1">
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Technical Severity</div>
<div className="text-lg font-bold text-primary font-mono mt-0.5">9.1 / 10</div>
<div className="text-[10px] text-outline mt-1">CVSSv3 Base Vector</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Exploitability</div>
<div className="text-lg font-bold text-tertiary font-mono mt-0.5">HIGH</div>
<div className="text-[10px] text-outline mt-1">Proof of Concept Verified</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Asset Criticality</div>
<div className="text-lg font-bold text-primary-container font-mono mt-0.5">TIER-1</div>
<div className="text-[10px] text-outline mt-1">Core Auth Store</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Data Sensitivity</div>
<div className="text-lg font-bold text-on-surface font-mono mt-0.5">RESTRICTED</div>
<div className="text-[10px] text-outline mt-1">PII &amp; Student Records</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Exposure Surface</div>
<div className="text-lg font-bold text-tertiary-container font-mono mt-0.5">EDGE_PUBLIC</div>
<div className="text-[10px] text-outline mt-1">Ingress Proxied</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/20">
<div className="text-outline text-[10px] uppercase">Evidence Confidence</div>
<div className="text-lg font-bold text-secondary font-mono mt-0.5">CONFIRMED 1.0</div>
<div className="text-[10px] text-outline mt-1">AST Taint Intercepted</div>
</div>
</div>
</div>

<div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-3">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-2">
<h3 className="text-headline-sm font-headline-sm text-on-surface">Remediation Validation Ledger</h3>
<span className="text-label-code font-label-code text-xs text-secondary font-mono">Sandbox Daemon #04 Active</span>
</div>
<div className="space-y-2 text-label-code font-label-code text-xs">
<div className="p-2 rounded bg-surface-container-lowest flex items-center justify-between border border-outline-variant/20">
<div>
<div className="text-on-surface font-semibold">Patch Candidate #P-8902</div>
<div className="text-[10px] text-outline">Runtime: 620ms · 42 Integration Checks</div>
</div>
<div className="text-right">
<span className="text-secondary font-bold">100% PASS</span>
<div className="text-[10px] text-outline">Rollback Safe</div>
</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest flex items-center justify-between border border-outline-variant/20">
<div>
<div className="text-on-surface font-semibold">Patch Candidate #P-7911</div>
<div className="text-[10px] text-outline">Runtime: 410ms · 18 UI Regression Checks</div>
</div>
<div className="text-right">
<span className="text-secondary font-bold">100% PASS</span>
<div className="text-[10px] text-outline">Rollback Safe</div>
</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest flex items-center justify-between border border-primary-container/30">
<div>
<div className="text-primary font-semibold">Patch Candidate #P-104</div>
<div className="text-[10px] text-outline">Runtime: 1.2s · Session Token Test Failed</div>
</div>
<div className="text-right">
<span className="text-primary font-bold">REGRESSION TRIPPED</span>
<div className="text-[10px] text-primary-container">Auto-Rollback Triggered</div>
</div>
</div>
</div>
</div>
</section>



<section className="bg-surface-container-low border border-outline-variant/30 rounded p-space-md space-y-4">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

<div className="space-y-1.5">
<div className="text-label-code font-label-code text-xs font-bold text-outline uppercase tracking-wider">
              AegisOne Defense Kernel Status
            </div>
<div className="flex flex-wrap items-center gap-3 text-label-code font-label-code text-xs">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Backend API: <strong className="text-secondary">ONLINE</strong>
</span>
<span className="text-outline/40">•</span>
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Graph Engine: <strong className="text-secondary">ONLINE</strong>
</span>
<span className="text-outline/40">•</span>
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                AI Provider: <strong className="text-secondary">MOCK_DETERMINISTIC</strong>
</span>
<span className="text-outline/40">•</span>
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                Scanner: <strong className="text-outline">IDLE</strong>
</span>
<span className="text-outline/40">•</span>
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Sandbox Daemon: <strong className="text-secondary">READY</strong>
</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-xs text-on-surface transition-colors">
              Register Target
            </button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-xs text-on-surface transition-colors">
              Configure Scan
            </button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-xs text-on-surface transition-colors">
              Inspect Knowledge Graph
            </button>
<button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-xs text-on-surface transition-colors">
              Run Sandbox Validation
            </button>
<button className="px-3 py-1.5 rounded bg-primary-container text-on-primary-container font-bold text-label-code font-label-code text-xs hover:brightness-110 tactical-glow transition-all">
              Export Dossier
            </button>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between text-body-sm font-body-sm text-[11px] text-outline">
<div>
            AegisOne Defense Platform · Authorized Operator Clearance: <strong>LEVEL-4 SOAR</strong>
</div>
<div className="mt-1 sm:mt-0 font-mono text-[10px]">
            POLICY ENFORCEMENT: STRICT_LAB_WHITELIST · NO EXTERNAL PROBES PERMITTED
          </div>
</div>
</section>

    </div>
  );
};

export default DashboardPage;
