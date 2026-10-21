import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const PoliciesPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getPolicies) {
          const res = await api.getPolicies();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load PoliciesPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="px-space-lg py-space-md max-w-[1440px] mx-auto space-y-space-md">

<div className="relative rounded-lg border border-outline-variant/30 bg-[#101015] p-5 overflow-hidden tactical-subsurface">
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center space-x-2">
<span className="text-label-badge font-label-badge text-primary px-2 py-0.5 rounded bg-primary-container/10 border border-primary-container/30 uppercase tracking-widest">
                EVIDENCE-GROUNDED COMPLIANCE · DETERMINISTIC CONTROL MAPPING · AUDIT TRACEABILITY
              </span>
</div>
<h1 className="text-headline-lg font-headline-lg text-white mt-1.5 flex items-center space-x-3">
<span>Security Policies &amp; Compliance Mapping</span>
<span className="text-label-code font-label-code text-xs px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30 text-secondary font-normal">v4.0.3 L2 MAPPED</span>
</h1>
<p className="text-body-sm font-body-sm text-on-surface-variant max-w-3xl mt-1">
              Map technical findings and verified remediation to security frameworks, evaluate control coverage, review exceptions, and maintain defensible audit trails for code repository <code className="text-label-code font-label-code text-secondary bg-[#08080B] px-1 py-0.5 rounded border border-white/10">college-placement-v2.1</code>.
            </p>
</div>

<div className="flex flex-wrap items-center gap-2 bg-[#08080B]/90 p-2 rounded border border-outline-variant/30">
<span className="text-label-code font-label-code text-outline text-xs px-1">Active Framework:</span>
<button className="px-2.5 py-1 rounded bg-[#F20D32]/20 border border-primary-container text-white text-label-code font-label-code text-xs flex items-center space-x-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span>OWASP ASVS v4.0.3 (L2)</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant text-label-code font-label-code text-xs transition-colors">
              OWASP Top 10 (2021)
            </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant text-label-code font-label-code text-xs transition-colors">
              NIST CSF 2.0
            </button>
<button className="p-1 rounded bg-surface-container text-outline hover:text-white border border-outline-variant/40">
<span className="material-symbols-outlined text-[16px]" >tune</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between hover:border-outline transition-colors relative group">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-label-code font-label-code text-xs text-outline">Configured Frameworks</span>
<span className="material-symbols-outlined text-secondary text-[20px]" >account_tree</span>
</div>
<div className="mt-2">
<div className="flex items-baseline space-x-2">
<span className="text-headline-lg font-headline-lg text-white">3</span>
<span className="text-label-code font-label-code text-xs text-secondary">Active Pipelines</span>
</div>
<div className="text-body-sm font-body-sm text-outline mt-1 truncate">
              64 mapped controls · ASVS, Top 10, NIST PR.DS
            </div>
</div>
<div className="mt-3 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "100%" }}></div>
</div>
</div>

<div className="rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between hover:border-outline transition-colors relative">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-label-code font-label-code text-xs text-outline">Assessed Controls</span>
<span className="material-symbols-outlined text-outline text-[20px]" >fact_check</span>
</div>
<div className="mt-2">
<div className="flex items-baseline space-x-2">
<span className="text-headline-lg font-headline-lg text-white">28</span>
<span className="text-body-sm font-body-sm text-outline">/ 64 Total</span>
<span className="text-label-badge font-label-badge text-secondary text-xs ml-auto">43.8%</span>
</div>
<div className="text-body-sm font-body-sm text-outline mt-1 flex justify-between">
<span>14 AST/Dynamic</span>
<span className="text-outline">·</span>
<span>14 Manual/Hybrid</span>
</div>
</div>
<div className="mt-3 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "43.8%" }}></div>
</div>
</div>

<div className="rounded border border-primary-container/40 bg-[#101015] p-4 flex flex-col justify-between hover:border-primary-container transition-colors relative tactical-glow-crimson">
<div className="flex items-center justify-between text-primary">
<span className="text-label-code font-label-code text-xs text-primary font-semibold">Controls Requiring Attention</span>
<span className="material-symbols-outlined text-primary text-[20px]" >warning</span>
</div>
<div className="mt-2">
<div className="flex items-baseline space-x-2">
<span className="text-headline-lg font-headline-lg text-primary">5</span>
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/30">CRITICAL GAPS</span>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant mt-1 truncate">
              3 linked active CWEs (SQLi, Key, XSS) · 2 unverified
            </div>
</div>
<div className="mt-3 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-primary-container h-full" style={{ "width": "17.8%" }}></div>
</div>
</div>

<div className="rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between hover:border-outline transition-colors relative">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-label-code font-label-code text-xs text-outline">Evidence Coverage</span>
<span className="material-symbols-outlined text-[#45D49A] text-[20px]" >verified</span>
</div>
<div className="mt-2">
<div className="flex items-baseline space-x-2">
<span className="text-headline-lg font-headline-lg text-white">22</span>
<span className="text-body-sm font-body-sm text-outline">/ 28 Assessed</span>
<span className="text-label-badge font-label-badge text-[#45D49A] text-xs ml-auto">78.6%</span>
</div>
<div className="text-body-sm font-body-sm text-outline mt-1 truncate">
              Deterministic AST taint or sandbox replay verified
            </div>
</div>
<div className="mt-3 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-[#45D49A] h-full" style={{ "width": "78.6%" }}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-5 rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[18px]" >donut_large</span>
<span className="text-headline-sm font-headline-sm text-white">Control Assessment Coverage</span>
</div>
<span className="text-label-badge font-label-badge text-outline text-xs">64 SCOPED</span>
</div>

<div className="mt-4">
<div className="text-label-code font-label-code text-xs text-on-surface-variant mb-1.5 flex justify-between">
<span>Distribution Status</span>
<span className="text-outline">Scope: college-placement-v2.1</span>
</div>
<div className="h-3.5 w-full rounded bg-[#08080B] flex overflow-hidden border border-outline-variant/30 p-0.5 space-x-0.5">
<div className="bg-[#45D49A] rounded-sm" style={{ "width": "28.1%" }} title="Supported by Evidence (18)"></div>
<div className="bg-[#F20D32] rounded-sm" style={{ "width": "7.8%" }} title="Control Gap Identified (5)"></div>
<div className="bg-[#FFB84D] rounded-sm" style={{ "width": "7.8%" }} title="Evidence Incomplete (5)"></div>
<div className="bg-secondary rounded-sm" style={{ "width": "6.2%" }} title="Needs Manual Review (4)"></div>
<div className="bg-surface-variant rounded-sm" style={{ "width": "50.1%" }} title="Not Assessed / Out of Scope (32)"></div>
</div>
</div>

<div className="mt-4 space-y-2 text-label-code font-label-code text-xs">
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/40 border border-white/5">
<div className="flex items-center space-x-2">
<span className="w-2.5 h-2.5 rounded-sm bg-[#45D49A]"></span>
<span className="text-on-surface">Supported by Evidence</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-white font-semibold">18 controls</span>
<span className="text-outline">28.1%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/40 border border-primary-container/20">
<div className="flex items-center space-x-2">
<span className="w-2.5 h-2.5 rounded-sm bg-[#F20D32]"></span>
<span className="text-primary font-medium">Control Gap Identified</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-primary font-semibold">5 controls</span>
<span className="text-primary-fixed-dim">7.8%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/40 border border-white/5">
<div className="flex items-center space-x-2">
<span className="w-2.5 h-2.5 rounded-sm bg-[#FFB84D]"></span>
<span className="text-on-surface">Evidence Incomplete</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-white font-semibold">5 controls</span>
<span className="text-outline">7.8%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/40 border border-white/5">
<div className="flex items-center space-x-2">
<span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
<span className="text-on-surface">Needs Manual Review</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-white font-semibold">4 controls</span>
<span className="text-outline">6.2%</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/20 border border-white/5 opacity-70">
<div className="flex items-center space-x-2">
<span className="w-2.5 h-2.5 rounded-sm bg-surface-variant"></span>
<span className="text-outline">Not Assessed / Scoped Later</span>
</div>
<div className="flex items-center space-x-3">
<span className="text-outline">32 controls</span>
<span className="text-outline">50.0%</span>
</div>
</div>
</div>
</div>

<div className="mt-4 p-2.5 rounded bg-[#08080B] border border-outline-variant/30 flex items-start space-x-2 text-body-sm font-body-sm">
<span className="material-symbols-outlined text-outline text-[16px] mt-0.5" >info</span>
<p className="text-outline text-xs">
<strong className="text-on-surface font-semibold">Epistemic Standard:</strong> Automated AST taint alone is not legal or contractual attestation. All ASVS high-assurance controls require sandbox runtime reproduction and verified cryptographic replay hashes.
            </p>
</div>
</div>

<div className="lg:col-span-7 rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[18px]" >crisis_alert</span>
<span className="text-headline-sm font-headline-sm text-white">Priority Control Gaps Requiring Immediate Remediation</span>
</div>
<span className="text-label-badge font-label-badge px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/30">
                ACTION REQUIRED (5)
              </span>
</div>

<div className="mt-3 space-y-2.5">

<div className="p-3 rounded border border-primary-container/50 bg-[#191A22] relative overflow-hidden group hover:border-primary-container transition-colors">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F20D32]"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center space-x-2">
<span className="text-label-code font-label-code text-xs px-2 py-0.5 rounded bg-[#8E0924] text-white font-bold">#1 CRITICAL</span>
<span className="text-label-code font-label-code text-white font-bold">ASVS 5.3.4: Parameterized Query Verification</span>
</div>
<span className="text-label-badge font-label-badge text-secondary text-xs">CWE-89 SQL INJECTION</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 text-xs">
                  Raw SQL concatenation in <code className="text-label-code font-label-code text-primary bg-[#08080B] px-1 py-0.5 rounded">/api/v1/students/search.py:42</code> allows arbitrary sqlite dialect exfiltration.
                </p>
<div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-label-code font-label-code text-xs">
<div className="flex items-center space-x-2 text-outline">
<span>Artifact: <code className="text-on-surface">EVID-9042</code></span>
<span>·</span>
<span className="text-[#45D49A]">Sandbox Patch Candidate #P-8902 v2 Verified</span>
</div>
<button className="text-primary hover:underline flex items-center space-x-1 font-semibold">
<span>Inspect Remediation</span>
<span className="material-symbols-outlined text-[14px]" >arrow_forward</span>
</button>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-low hover:border-outline-variant transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center space-x-2">
<span className="text-label-code font-label-code text-xs px-2 py-0.5 rounded bg-surface-container-high text-[#FFB84D] font-bold">#2 HIGH</span>
<span className="text-label-code font-label-code text-white font-medium">ASVS 3.2.1: Secret Key &amp; Credential Storage</span>
</div>
<span className="text-label-badge font-label-badge text-outline text-xs">CWE-798 HARDCODED KEY</span>
</div>
<p className="text-body-sm font-body-sm text-outline mt-1 text-xs">
                  Hardcoded JWT HMAC salt constant discovered in <code className="text-label-code font-label-code text-on-surface">static/js/auth.js:14</code>. AST taint active.
                </p>
<div className="mt-2 flex items-center justify-between text-label-code font-label-code text-xs text-outline">
<span>State: Unresolved · Assigned to SecOps Sprint</span>
<span className="text-primary-fixed-dim">Action: Vault Integration Required</span>
</div>
</div>

<div className="p-3 rounded border border-outline-variant/30 bg-surface-container-low hover:border-outline-variant transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center space-x-2">
<span className="text-label-code font-label-code text-xs px-2 py-0.5 rounded bg-surface-container-high text-[#FFB84D] font-bold">#3 HIGH</span>
<span className="text-label-code font-label-code text-white font-medium">ASVS 5.2.2: Stored &amp; Reflected Contextual Encoding</span>
</div>
<span className="text-label-badge font-label-badge text-outline text-xs">CWE-79 STORED XSS</span>
</div>
<p className="text-body-sm font-body-sm text-outline mt-1 text-xs">
                  Raw unescaped markdown output rendering inside <code className="text-label-code font-label-code text-on-surface">/templates/profile/bio.html:88</code>.
                </p>
</div>

<div className="p-2.5 rounded border border-outline-variant/20 bg-surface-container-low/60 flex items-center justify-between text-xs text-label-code font-label-code">
<div className="flex items-center space-x-2">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-outline">#4 MED</span>
<span className="text-on-surface">ASVS 8.3.1: Sensitive Data Exposure &amp; FERPA PII</span>
</div>
<span className="text-outline">Data in Transit eBPF Audit Required</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded border border-outline-variant/30 bg-[#101015] overflow-hidden">

<div className="p-4 border-b border-outline-variant/30 bg-[#12131A] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
<div className="flex flex-wrap items-center gap-2.5">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-2 top-2 text-outline text-[16px]" >filter_list</span>
<input className="w-full bg-[#08080B] border border-outline-variant/40 rounded py-1 pl-8 pr-2 text-label-code font-label-code text-xs text-on-surface placeholder:text-outline/50 focus:border-primary-container focus:outline-none" placeholder="Filter by ASVS, CWE, tag..." type="text"/>
</div>

<select className="bg-[#08080B] border border-outline-variant/40 rounded py-1 px-2.5 text-label-code font-label-code text-xs text-on-surface focus:outline-none">
<option>Category: All Chapters (V1-V14)</option>
<option >V5: Validation, Sanitization &amp; Encoding</option>
<option>V3: Session Management</option>
<option>V8: Data Protection</option>
</select>
<select className="bg-[#08080B] border border-outline-variant/40 rounded py-1 px-2.5 text-label-code font-label-code text-xs text-on-surface focus:outline-none">
<option>Status: All Statuses (5)</option>
<option>Gaps Identified Only (5)</option>
<option>Supported by Evidence (18)</option>
<option>Evidence Incomplete (5)</option>
</select>
</div>
<div className="flex items-center space-x-2 ml-auto">
<span className="text-label-code font-label-code text-outline text-xs">Showing 6 of 64 controls</span>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-xs text-on-surface flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]" >download</span>
<span>Audit CSV</span>
</button>
<button className="px-3 py-1 rounded bg-[#F20D32] hover:bg-[#8E0924] text-white text-xs font-headline-sm flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]" >add</span>
<span>+ Configure Framework / Policy</span>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 bg-[#0E0E11] text-label-code font-label-code text-xs text-outline">
<th className="py-2.5 px-3 w-8">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</th>
<th className="py-2.5 px-3 w-32">Control ID</th>
<th className="py-2.5 px-3">Control Requirement &amp; Description</th>
<th className="py-2.5 px-3 w-28">Framework</th>
<th className="py-2.5 px-3 w-40">Assessment Status</th>
<th className="py-2.5 px-3 w-44">Linked Technical Findings</th>
<th className="py-2.5 px-3 w-36">Evidence Artifacts</th>
<th className="py-2.5 px-3 w-28">Owner</th>
<th className="py-2.5 px-3 text-right w-24">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 text-body-sm font-body-sm">

<tr className="bg-surface-container-low/80 border-l-2 border-primary-container hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-3 px-3">
<input defaultChecked className="rounded bg-[#08080B] border-primary-container text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-primary">ASVS-5.3.4</div>
<div className="text-[10px] text-outline font-label-code">Level 2 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">Parameterized Query Verification &amp; Data Sanitization</div>
<div className="text-xs text-on-surface-variant truncate max-w-md">Verify query parameterized APIs are used to prevent SQL Injection in all data abstraction layers.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">OWASP L2</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-[#F20D32]/20 border border-primary-container text-primary flex items-center w-max space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#F20D32] animate-ping"></span>
<span>GAP IDENTIFIED</span>
</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center space-x-1.5">
<span className="text-label-code font-label-code text-xs px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/30">1 CRIT [FND-8902]</span>
</div>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-secondary flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >attachment</span>
<span>4 Deterministic</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">Analyst_442</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white" title="Inspect Control">
<span className="material-symbols-outlined text-[18px]" >visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-white">ASVS-3.2.1</div>
<div className="text-[10px] text-outline font-label-code">Level 1 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">Secret Key, Token &amp; Password Material Storage</div>
<div className="text-xs text-outline truncate max-w-md">Verify secrets are never stored unencrypted in codebase repository or client-side assets.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">OWASP L1</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-[#FFB84D]/20 border border-[#FFB84D]/40 text-[#FFB84D] flex items-center w-max space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFB84D]"></span>
<span>GAP IDENTIFIED</span>
</span>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs px-1.5 py-0.5 rounded bg-[#FFB84D]/10 text-[#FFB84D] border border-[#FFB84D]/30">1 HIGH [FND-798]</span>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-outline flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >attachment</span>
<span>1 Secret Trace</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">SecOps_Lead</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined text-[18px]" >more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-white">ASVS-5.1.1</div>
<div className="text-[10px] text-outline font-label-code">Level 1 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">Input Validation Architecture &amp; Strict Allow-listing</div>
<div className="text-xs text-outline truncate max-w-md">Verify input validation is enforced server-side using strict data typings and schema models.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">OWASP L1</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-[#45D49A]/20 border border-[#45D49A]/40 text-[#45D49A] flex items-center w-max space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
<span>SUPPORTED</span>
</span>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">0 Findings Active</span>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-[#45D49A] flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >task_alt</span>
<span>12 Pydantic Schemas</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">Automated AST</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined text-[18px]" >more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-white">ASVS-13.2.3</div>
<div className="text-[10px] text-outline font-label-code">Level 2 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">RESTful Web API Authentication &amp; Bearer Header Verification</div>
<div className="text-xs text-outline truncate max-w-md">Verify stateless tokens are validated for cryptographic signature before payload evaluation.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">OWASP L2</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-[#45D49A]/20 border border-[#45D49A]/40 text-[#45D49A] flex items-center w-max space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
<span>SUPPORTED</span>
</span>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">0 Findings Active</span>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-[#45D49A] flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >task_alt</span>
<span>FastAPI Depends() Proof</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">SecOps_Lead</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined text-[18px]" >more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-white">ASVS-8.3.1</div>
<div className="text-[10px] text-outline font-label-code">Level 2 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">FERPA Educational Records PII Encryption at Rest &amp; In-Flight</div>
<div className="text-xs text-outline truncate max-w-md">Verify sensitive educational GPA and placement scores are encrypted using authenticated ciphers.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">NIST PR.DS</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-secondary/20 border border-secondary/40 text-secondary flex items-center w-max space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>INCOMPLETE</span>
</span>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">No Hard Finding</span>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-[#FFB84D] flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >sync_problem</span>
<span>Needs eBPF Dump</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">Analyst_442</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined text-[18px]" >more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-[#08080B] border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code font-bold text-white">ASVS-14.4.1</div>
<div className="text-[10px] text-outline font-label-code">Level 1 Req</div>
</td>
<td className="py-3 px-3">
<div className="font-medium text-white">Third-Party Library SBOM &amp; Dependency Quarantine Verification</div>
<div className="text-xs text-outline truncate max-w-md">Verify all third-party Python packages have no unpatched CVEs &gt; 7.0 in production builds.</div>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface border border-white/5">OWASP L1</span>
</td>
<td className="py-3 px-3">
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-surface-variant text-on-surface flex items-center w-max space-x-1">
<span className="material-symbols-outlined text-[14px]" >rate_review</span>
<span>NEEDS REVIEW</span>
</span>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">0 Blockers</span>
</td>
<td className="py-3 px-3">
<div className="text-label-code font-label-code text-xs text-outline flex items-center space-x-1">
<span className="material-symbols-outlined text-[15px]" >receipt_long</span>
<span>CycloneDX SBOM</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-label-code font-label-code text-xs text-outline">AppSec_Admin</span>
</td>
<td className="py-3 px-3 text-right">
<button className="p-1 text-on-surface-variant hover:text-white">
<span className="material-symbols-outlined text-[18px]" >more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded border border-primary-container/40 bg-[#12131A] p-5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-4 border-b border-outline-variant/30 gap-3">
<div>
<div className="flex items-center space-x-3">
<span className="text-label-code font-label-code text-sm font-bold text-primary bg-[#8E0924]/40 px-2.5 py-0.5 rounded border border-primary-container/40">
                SELECTED CONTROL INSPECTOR: ASVS-5.3.4
              </span>
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-[#F20D32]/20 text-primary border border-primary-container/30">
                STATUS: GAP REMEDIATED IN SANDBOX (AWAITING PROD ATTESTATION)
              </span>
</div>
<h2 className="text-headline-md font-headline-md text-white mt-1.5">
              Verify that query parameterized APIs are used to prevent SQL Injection
            </h2>
</div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 rounded bg-[#08080B] hover:bg-surface-container border border-outline-variant/40 text-on-surface text-body-sm font-body-sm flex items-center space-x-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px]" >bug_report</span>
<span>Review in Findings Explorer</span>
</button>
<button className="px-3 py-1.5 rounded bg-[#F20D32] hover:bg-[#8E0924] text-white text-body-sm font-headline-sm flex items-center space-x-1.5 shadow-[0_0_12px_rgba(242,13,50,0.35)] transition-all">
<span className="material-symbols-outlined text-[16px]" >developer_mode</span>
<span>Open Remediation Workspace</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

<div className="space-y-3.5">
<div className="text-label-code font-label-code text-xs text-outline font-semibold uppercase tracking-wider flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary" >menu_book</span>
<span>Requirement Provenance</span>
</div>
<div className="p-3.5 rounded bg-[#08080B] border border-outline-variant/30 space-y-2 text-body-sm font-body-sm">
<div className="text-white font-medium">OWASP ASVS v4.0.3 · Chapter 5: Validation &amp; Sanitization</div>
<p className="text-on-surface-variant text-xs leading-relaxed">
                "Verify that all database queries are constructed using parameterization or object relational mapping (ORM), and never by concatenating or interpolating untrusted input into raw SQL queries."
              </p>
<div className="pt-2 border-t border-white/5 flex items-center justify-between text-label-code font-label-code text-[11px] text-outline">
<span>Verification Rigor: Deterministic AST</span>
<span className="text-secondary">Level 2 Enforcement</span>
</div>
</div>

<div className="p-3.5 rounded bg-surface-container-low border border-primary-container/30 space-y-2">
<div className="flex items-center justify-between text-label-code font-label-code text-xs">
<span className="text-primary font-bold">DIRECT LINKED FINDING</span>
<span className="px-1.5 py-0.5 rounded bg-[#F20D32]/20 text-primary border border-primary-container/40">CRITICAL · 9.8 CVSS</span>
</div>
<div className="text-white font-medium text-sm">FND-8902: CWE-89 SQL Injection in Student Search</div>
<div className="text-xs text-outline font-label-code truncate">
                File: <code className="text-on-surface">/api/v1/students/search.py:42</code>
</div>
<div className="text-xs text-outline font-label-code">
                Function: <code className="text-on-surface">get_students_by_keyword(query: str)</code>
</div>
</div>
</div>

<div className="space-y-3.5">
<div className="text-label-code font-label-code text-xs text-outline font-semibold uppercase tracking-wider flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary" >account_balance</span>
<span>Supporting Evidence Ledger (3 Artifacts)</span>
</div>
<div className="space-y-2">

<div className="p-2.5 rounded bg-[#08080B] border border-outline-variant/30 flex items-start space-x-2.5 text-xs">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5" >data_object</span>
<div className="flex-1 truncate">
<div className="flex items-center justify-between">
<span className="text-label-code font-label-code text-white font-semibold">EVID-9042: AST Taint Trace</span>
<span className="text-label-badge font-label-badge text-outline">STATIC AST</span>
</div>
<div className="text-outline truncate mt-0.5">Taint Source: request.args['q'] -&gt; Sink: cursor.execute()</div>
<div className="text-[10px] text-secondary font-label-code mt-1">Hash: sha256:d8f4...91ec</div>
</div>
</div>

<div className="p-2.5 rounded bg-[#08080B] border border-primary-container/30 flex items-start space-x-2.5 text-xs">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5" >terminal</span>
<div className="flex-1 truncate">
<div className="flex items-center justify-between">
<span className="text-label-code font-label-code text-white font-semibold">EVID-SQLMAP-01: Exploit Replay</span>
<span className="text-label-badge font-label-badge text-primary">DYNAMIC REPLAY</span>
</div>
<div className="text-on-surface-variant truncate mt-0.5">Probe <code className="text-primary">' OR '1'='1</code> yielded 1,280 student records.</div>
<div className="text-[10px] text-outline font-label-code mt-1">Executed: 2025-05-14 09:42:12 UTC</div>
</div>
</div>

<div className="p-2.5 rounded bg-[#08080B] border border-[#45D49A]/30 flex items-start space-x-2.5 text-xs">
<span className="material-symbols-outlined text-[#45D49A] text-[18px] mt-0.5" >check_circle</span>
<div className="flex-1 truncate">
<div className="flex items-center justify-between">
<span className="text-label-code font-label-code text-white font-semibold">EVID-DIFF-8902: Patch Verification</span>
<span className="text-label-badge font-label-badge text-[#45D49A]">GVISOR VERIFIED</span>
</div>
<div className="text-outline truncate mt-0.5">Patch #P-8902 v2 passed 18 regression test vectors.</div>
<div className="text-[10px] text-[#45D49A] font-label-code mt-1">Zero regression · 100% Parameterized</div>
</div>
</div>
</div>
</div>

<div className="space-y-3.5">
<div className="text-label-code font-label-code text-xs text-outline font-semibold uppercase tracking-wider flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary" >verified_user</span>
<span>Epistemological Distinction</span>
</div>
<div className="p-3.5 rounded bg-[#08080B] border border-outline-variant/30 space-y-3 text-xs">
<div>
<span className="text-label-code font-label-code text-primary font-semibold block">1. Observed Evidence:</span>
<p className="text-on-surface-variant mt-0.5">
                  Static AST scanner identified unsafe string formatting in Python code; confirmed by dynamic query probe yielding unescaped database tuples.
                </p>
</div>
<div className="pt-2 border-t border-white/5">
<span className="text-label-code font-label-code text-[#45D49A] font-semibold block">2. Remediation Proof:</span>
<p className="text-on-surface-variant mt-0.5">
                  Patch candidate rewritten with parameterized SQL bindings: <code className="text-on-surface font-label-code">cursor.execute("SELECT * FROM students WHERE name LIKE %s", (f"%&#123;q&#125;%",))</code>.
                </p>
</div>
<div className="pt-2 border-t border-white/5">
<span className="text-label-code font-label-code text-secondary font-semibold block">3. Formal Attestation Gate:</span>
<p className="text-outline mt-0.5">
                  Remediation verified in sandbox isolation. Awaiting merge to <code className="text-on-surface">main</code> branch and deployment to <code className="text-on-surface">PROD-CLUSTER-01</code> to grant final compliant status.
                </p>
</div>
</div>

<button className="w-full py-2 rounded bg-surface-container-high hover:bg-surface-bright border border-outline-variant/40 text-on-surface text-label-code font-label-code text-xs flex items-center justify-center space-x-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px]" >rate_review</span>
<span>Record Manual Review Sign-off</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-7 rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[#FFB84D] text-[18px]" >shield_with_heart</span>
<span className="text-headline-sm font-headline-sm text-white">Active Policy Exceptions &amp; Compensating Controls</span>
</div>
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-surface-container text-outline border border-white/5">
                1 APPROVED EXCEPTION
              </span>
</div>

<div className="mt-3.5 p-3 rounded border border-outline-variant/30 bg-surface-container-low/70 space-y-2">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center space-x-2">
<span className="text-label-code font-label-code text-xs px-2 py-0.5 rounded bg-[#FFB84D]/20 text-[#FFB84D] border border-[#FFB84D]/40 font-bold">
                    EXP-2025-014
                  </span>
<span className="text-label-code font-label-code text-white font-medium">Legacy Celery Broker Deserialization</span>
</div>
<span className="text-label-badge font-label-badge text-outline text-xs">EXPIRES: 2025-06-30</span>
</div>
<p className="text-body-sm font-body-sm text-outline text-xs leading-relaxed">
                Exception granted for Pickle serialization protocol on internal worker queue due to legacy dependency constraints on Python 3.9 runtime.
              </p>

<div className="p-2.5 rounded bg-[#08080B] border border-secondary/20 flex items-start space-x-2 text-xs">
<span className="material-symbols-outlined text-secondary text-[16px] mt-0.5" >security_update_good</span>
<div>
<span className="text-label-code font-label-code text-secondary font-semibold">Compensating Control Active:</span>
<p className="text-on-surface-variant text-[11px] mt-0.5">
                    Network eBPF loopback isolation policy enforced. Broker port <code className="text-white">6379</code> is only bound to unix socket and strictly forbidden from all external and cross-pod egress.
                  </p>
</div>
</div>
<div className="pt-2 border-t border-white/5 flex items-center justify-between text-label-code font-label-code text-xs text-outline">
<span>Authorized Approver: <strong className="text-on-surface">SecOps_Lead (Kevin John)</strong></span>
<span className="text-secondary cursor-pointer hover:underline">View Policy Waiver Doc #PW-84</span>
</div>
</div>
</div>

<div className="mt-3 text-[11px] text-outline flex items-center justify-between">
<span>Next compliance recertification window opens in 42 days.</span>
<button className="text-primary hover:underline font-label-code text-xs">+ Request Policy Waiver</button>
</div>
</div>

<div className="lg:col-span-5 rounded border border-outline-variant/30 bg-[#101015] p-4 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[18px]" >history</span>
<span className="text-headline-sm font-headline-sm text-white">Audit Chronology &amp; Sign-offs</span>
</div>
<span className="text-label-badge font-label-badge text-outline text-xs">IMMUTABLE LOG</span>
</div>

<div className="mt-3.5 space-y-3 relative pl-4 border-l border-outline-variant/30 text-xs">

<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary-container border-2 border-[#101015]"></div>
<div className="text-label-code font-label-code text-white font-medium">Patch Candidate #P-8902 v2 Verified</div>
<div className="text-outline text-[11px]">gVisor replay verified SQL parameterization. Gap remediated in sandbox.</div>
<div className="text-label-badge font-label-badge text-primary-fixed-dim text-[10px] mt-0.5">Today, 14:22 UTC · AegisOne Copilot</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-[#101015]"></div>
<div className="text-label-code font-label-code text-white font-medium">Framework Assignment: OWASP ASVS v4.0.3 L2</div>
<div className="text-outline text-[11px]">Scope baseline synchronized for repo college-placement-v2.1.</div>
<div className="text-label-badge font-label-badge text-outline text-[10px] mt-0.5">Yesterday, 18:04 UTC · Analyst_442</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#45D49A] border-2 border-[#101015]"></div>
<div className="text-label-code font-label-code text-white font-medium">ASVS-5.1.1 Marked SUPPORTED</div>
<div className="text-outline text-[11px]">12 Pydantic schema validation models attached as proof.</div>
<div className="text-label-badge font-label-badge text-outline text-[10px] mt-0.5">2 days ago · Automated AST Engine</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#FFB84D] border-2 border-[#101015]"></div>
<div className="text-label-code font-label-code text-white font-medium">Exception EXP-2025-014 Approved</div>
<div className="text-outline text-[11px]">Loopback isolation confirmed via eBPF probe telemetry.</div>
<div className="text-label-badge font-label-badge text-outline text-[10px] mt-0.5">3 days ago · SecOps_Lead</div>
</div>
</div>
</div>
<div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-xs">
<span className="text-outline">Log Signature: ed25519:7c9f...a812</span>
<button className="text-secondary hover:underline flex items-center space-x-1">
<span>Full Audit Trail</span>
<span className="material-symbols-outlined text-[12px]" >chevron_right</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default PoliciesPage;
