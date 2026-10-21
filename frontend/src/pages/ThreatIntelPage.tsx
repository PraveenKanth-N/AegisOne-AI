import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const ThreatIntelPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getThreatIntelligence) {
          const res = await api.getThreatIntelligence();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load ThreatIntelPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/20 pb-space-sm">
<div className="flex items-center gap-2 text-xs font-label-code text-on-surface-variant">
<span className="hover:text-on-surface cursor-pointer">Console</span>
<span>/</span>
<span className="hover:text-on-surface cursor-pointer">Intelligence</span>
<span>/</span>
<span className="text-primary font-semibold">Threat Feed</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-2 bg-surface-container-lowest px-2.5 py-1 rounded border border-outline-variant/40 text-xs font-label-code">
<span className="text-on-surface-variant/70">ACTIVE TARGET:</span>
<span className="text-primary font-medium">college-placement-v2.1 [LOCAL FIXTURE]</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant" >expand_more</span>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-xs font-label-code text-on-surface flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-sm" >hub</span>
<span>Manage Sources</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-xs font-label-code text-secondary flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-sm" >sync</span>
<span>Refresh Intelligence</span>
</button>
</div>
</div>
</div>

<section className="flex flex-col gap-2">
<div className="flex items-center gap-2 font-label-badge text-label-badge text-primary uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>CONTEXTUAL THREAT INTELLIGENCE · INVENTORY-AWARE ADVISORY MATCHING · PROVENANCE TRACKING</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
              Threat Intelligence &amp; Security Knowledge Feed
            </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
              Connect trusted vulnerability intelligence and upstream CVE disclosures directly to your registered application attack surface. Real-time deterministic matching via AST &amp; lockfile provenance.
            </p>
</div>

<div className="bg-surface-container-lowest/90 border border-outline-variant/40 px-3 py-1.5 rounded flex items-center gap-2.5 font-label-code text-[11px] self-start md:self-auto shrink-0">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-on-surface-variant">LAST SYNC: <strong className="text-on-surface font-semibold">14:22:10 UTC</strong> (via NVD, GitHub Advisory DB, PyPA Feed)</span>
<span className="text-outline">|</span>
<span className="text-secondary font-semibold">3 ACTIVE SOURCES SYNCHRONIZED</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest/90 border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="font-label-code text-xs">TRACKED ADVISORIES</span>
<span className="material-symbols-outlined text-sm" >feed</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">148</span>
<span className="font-label-code text-xs text-on-surface-variant">Advisories</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 truncate" title="Scoped to: Python, FastAPI, PyMySQL, Node.js, Celery, Redis">
            Scoped to: Python, FastAPI, PyMySQL, Celery, Redis
          </p>
<div className="mt-3 flex items-center gap-1.5 text-[11px] font-label-code text-secondary">
<span className="material-symbols-outlined text-xs" >check_circle</span>
<span>Ecosystem Manifest Active</span>
</div>
</div>

<div className="bg-surface-container-lowest/90 border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="font-label-code text-xs">POTENTIALLY RELEVANT</span>
<span className="material-symbols-outlined text-sm text-tertiary" >rule</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">11</span>
<span className="font-label-code text-xs text-on-surface-variant">Potential Matches</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 truncate">
            Matching packages in application lockfile
          </p>
<div className="mt-3 flex items-center gap-1.5 text-[11px] font-label-code text-primary">
<span className="material-symbols-outlined text-xs" >filter_alt</span>
<span>Awaiting Taint Validation</span>
</div>
</div>

<div className="bg-surface-container-lowest/90 border border-primary-container/40 rounded p-space-md relative overflow-hidden group shadow-[0_0_15px_rgba(255,83,87,0.15)] hover:border-primary-container transition-all">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary-container/10 pointer-events-none blur-xl"></div>
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="font-label-code text-xs text-primary-container font-semibold">HIGH-PRIORITY VERIFIED</span>
<span className="material-symbols-outlined text-base text-primary-container"  style={{ "fontVariationSettings": "'FILL' 1" }}>warning</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary-container font-bold">3</span>
<span className="font-label-code text-xs text-primary">Urgent Action Required</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 truncate">
            Exploited in wild + verified affected version range
          </p>
<div className="mt-3 flex items-center gap-1.5 text-[11px] font-label-code text-primary-container font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span>Direct Ingress Path Reachable</span>
</div>
</div>

<div className="bg-surface-container-lowest/90 border border-outline-variant/30 rounded p-space-md relative overflow-hidden group hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="font-label-code text-xs">SOURCE SYNC HEALTH</span>
<span className="material-symbols-outlined text-sm text-secondary" >hub</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">3/3</span>
<span className="font-label-code text-xs text-secondary font-medium">Healthy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 truncate">
            0 sync failures · latency 340ms avg
          </p>
<div className="mt-3 flex items-center gap-1.5 text-[11px] font-label-code text-secondary">
<span className="material-symbols-outlined text-xs"  style={{ "fontVariationSettings": "'FILL' 1" }}>verified</span>
<span>ED25519 Manifests Valid</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg"  style={{ "fontVariationSettings": "'FILL' 1" }}>crisis_alert</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Priority Intelligence &amp; Active Exploits</h2>
</div>
<span className="font-label-badge text-label-badge text-primary-container bg-error-container/40 border border-outline-variant px-2 py-0.5 rounded">
              CRITICAL INTERCEPT
            </span>
</div>

<div className="flex flex-col gap-space-sm">

<div className="bg-surface-container-low border-l-4 border-l-primary-container border-y border-r border-outline-variant/30 p-space-md rounded-r hover:bg-surface-container transition-all relative">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-primary">CVE-2024-34069</span>
<span className="font-label-code text-[11px] text-on-surface-variant/70">GHSA-4p3c-2877</span>
<span className="bg-primary-container text-on-primary-container font-headline-sm text-xs px-2 py-0.5 rounded font-bold">CVSS 9.1</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1 leading-snug">
                    PyMySQL Unparameterized Query Injection Boundary Escape
                  </h3>
</div>
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-error-container text-on-error-container border border-primary-container/40 uppercase whitespace-nowrap">
                  KNOWN EXPLOITED
                </span>
</div>
<div className="mt-2.5 text-xs text-on-surface-variant flex flex-col gap-1 font-body-sm">
<div className="flex items-center gap-1.5 text-primary">
<span className="material-symbols-outlined text-xs" >target</span>
<span className="font-label-code text-[11px]">Verified Affected in: <span className="underline">/api/v1/students/search.py:42</span></span>
</div>
<p className="text-on-surface-variant/80 text-[12px]">
                  Flaw allows string boundary escape in legacy raw execution helper, permitting unauthorized extraction of student academic transcripts and PII.
                </p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-code">
<span className="text-on-surface-variant/60">Source: NIST NVD · CISA KEV Published</span>
<button className="text-primary hover:text-primary-fixed flex items-center gap-1">
<span>Inspect Taint Path</span>
<span className="material-symbols-outlined text-xs" >arrow_forward</span>
</button>
</div>
</div>

<div className="bg-surface-container-low border-l-4 border-l-tertiary-container border-y border-r border-outline-variant/30 p-space-md rounded-r hover:bg-surface-container transition-all">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-tertiary">CVE-2024-21503</span>
<span className="font-label-code text-[11px] text-on-surface-variant/70">GHSA-927v-9q29</span>
<span className="bg-tertiary-container text-on-tertiary-container font-headline-sm text-xs px-2 py-0.5 rounded font-bold">CVSS 8.8</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1 leading-snug">
                    Celery Broker Pickle Deserialization Remote Code Execution
                  </h3>
</div>
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-high text-primary border border-outline-variant uppercase whitespace-nowrap">
                  PUBLIC POC
                </span>
</div>
<div className="mt-2.5 text-xs text-on-surface-variant flex flex-col gap-1 font-body-sm">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-xs" >shield</span>
<span className="font-label-code text-[11px]">Compensating eBPF Control: Active (Port 6379 Isolated)</span>
</div>
<p className="text-on-surface-variant/80 text-[12px]">
                  Async task payload handling allows arbitrary pickle deserialization when Redis message queue security credentials are intercepted.
                </p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-code">
<span className="text-on-surface-variant/60">Source: GitHub Advisory Database</span>
<button className="text-secondary hover:text-secondary-fixed flex items-center gap-1">
<span>View Mitigation Policy</span>
<span className="material-symbols-outlined text-xs" >arrow_forward</span>
</button>
</div>
</div>

<div className="bg-surface-container-low border-l-4 border-l-outline border-y border-r border-outline-variant/30 p-space-md rounded-r hover:bg-surface-container transition-all">
<div className="flex items-start justify-between gap-2">
<div>
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-on-surface">CVE-2023-46136</span>
<span className="font-label-code text-[11px] text-on-surface-variant/70">GHSA-w5w7-72xf</span>
<span className="bg-surface-container-highest text-on-surface font-headline-sm text-xs px-2 py-0.5 rounded font-bold">CVSS 7.5</span>
</div>
<h3 className="font-headline-sm text-[15px] text-on-surface mt-1 leading-snug">
                    FastAPI Pydantic v1 Schema Validation Bypass on Nested Payload
                  </h3>
</div>
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container text-on-surface-variant border border-outline-variant/40 uppercase whitespace-nowrap">
                  PATCH AVAILABLE
                </span>
</div>
<div className="mt-2.5 text-xs text-on-surface-variant flex flex-col gap-1 font-body-sm">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-xs" >swap_horiz</span>
<span className="font-label-code text-[11px]">Upgrade Candidate: v0.104.1 (Current: v0.98.0)</span>
</div>
<p className="text-on-surface-variant/80 text-[12px]">
                  Multipart form boundaries parsed inconsistently could lead to unprocessed validation guards on recruitment applicant upload routes.
                </p>
</div>
<div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-xs font-label-code">
<span className="text-on-surface-variant/60">Source: PyPA Advisory Feed</span>
<button className="text-on-surface-variant hover:text-on-surface flex items-center gap-1">
<span>Review Dependency Diff</span>
<span className="material-symbols-outlined text-xs" >arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg"  style={{ "fontVariationSettings": "'FILL' 1" }}>developer_board</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Relevant to Your Inventory (Asset Matching)</h2>
</div>
<span className="font-label-badge text-label-badge text-secondary bg-surface-container-high border border-outline-variant/40 px-2 py-0.5 rounded">
              DETERMINISTIC LINKAGE
            </span>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-xs font-label-code">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant/70">
<th className="py-2 px-2 font-medium">ADVISORY ID</th>
<th className="py-2 px-2 font-medium">INSTALLED DEP &amp; RANGE</th>
<th className="py-2 px-2 font-medium">INGRESS ENDPOINT</th>
<th className="py-2 px-2 font-medium">APPLICABILITY</th>
<th className="py-2 px-2 font-medium text-right">ACTION</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-2 font-semibold text-primary">CVE-2024-34069</td>
<td className="py-2.5 px-2">
<div className="text-on-surface font-medium">PyMySQL 1.0.2</div>
<div className="text-[10px] text-primary">Affected: &lt; 1.1.0</div>
</td>
<td className="py-2.5 px-2 text-on-surface-variant font-mono text-[11px]">
                    POST /api/v1/students/search
                  </td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-badge text-[10px] bg-error-container text-on-error-container border border-primary-container/40">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      VERIFIED AFFECTED
                    </span>
</td>
<td className="py-2.5 px-2 text-right">
<button className="px-2 py-1 rounded bg-primary-container/20 hover:bg-primary-container/40 text-primary border border-primary-container/30 transition-colors">
                      Remediate
                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-2 font-semibold text-tertiary">CVE-2024-21503</td>
<td className="py-2.5 px-2">
<div className="text-on-surface font-medium">celery 5.2.7</div>
<div className="text-[10px] text-tertiary">Affected: &lt; 5.3.6</div>
</td>
<td className="py-2.5 px-2 text-on-surface-variant font-mono text-[11px]">
                    QUEUE celery@worker-cluster
                  </td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-high text-secondary border border-secondary/30">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      COMPENSATED
                    </span>
</td>
<td className="py-2.5 px-2 text-right">
<button className="px-2 py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant/30 transition-colors">
                      Verify Guard
                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-2 font-semibold text-on-surface">CVE-2023-46136</td>
<td className="py-2.5 px-2">
<div className="text-on-surface font-medium">fastapi 0.98.0</div>
<div className="text-[10px] text-outline">Affected: &lt; 0.104.1</div>
</td>
<td className="py-2.5 px-2 text-on-surface-variant font-mono text-[11px]">
                    POST /api/v1/auth/token
                  </td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                      POTENTIAL MATCH
                    </span>
</td>
<td className="py-2.5 px-2 text-right">
<button className="px-2 py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface border border-outline-variant/30 transition-colors">
                      Trace
                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-2 font-semibold text-on-surface-variant">CVE-2023-28856</td>
<td className="py-2.5 px-2">
<div className="text-on-surface font-medium">redis-py 4.5.4</div>
<div className="text-[10px] text-on-surface-variant/70">Affected: &lt; 4.5.5</div>
</td>
<td className="py-2.5 px-2 text-on-surface-variant font-mono text-[11px]">
                    INTERNAL redis:6379
                  </td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container text-on-surface-variant/70 border border-outline-variant/20">
                      ISOLATED NET
                    </span>
</td>
<td className="py-2.5 px-2 text-right">
<button className="px-2 py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant border border-outline-variant/30 transition-colors">
                      Audit
                    </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-surface-container-low border border-outline-variant/20 p-2.5 rounded flex items-center justify-between text-xs font-label-code">
<span className="text-on-surface-variant">
              Lockfile scanned: <code className="text-secondary">backend/requirements.txt (SHA256: 9b2d...f04c)</code>
</span>
<span className="text-primary font-medium">84 Dependencies Scanned</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant/30 rounded flex flex-col overflow-hidden">

<div className="p-space-md border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-md bg-surface-container-low/50">
<div className="flex flex-wrap items-center gap-space-sm flex-1">

<div className="relative min-w-[240px]">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-base" >search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded py-1 pl-8 pr-2 text-xs font-label-code text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary-container" placeholder="Filter by CVE / package name..." type="text"/>
</div>

<div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant/40 rounded p-0.5 text-xs font-label-code">
<span className="text-on-surface-variant/70 px-2 py-0.5">SEVERITY:</span>
<button className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">All</button>
<button className="px-2 py-0.5 rounded text-primary hover:bg-surface-container-high transition-colors">Critical</button>
<button className="px-2 py-0.5 rounded text-tertiary hover:bg-surface-container-high transition-colors">High</button>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors">Medium</button>
</div>

<div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant/40 rounded p-0.5 text-xs font-label-code">
<span className="text-on-surface-variant/70 px-2 py-0.5">APPLICABILITY:</span>
<button className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-semibold border border-primary-container/30">Verified (3)</button>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors">Potential (11)</button>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:bg-surface-container-high transition-colors">Compensated</button>
</div>

<div className="flex items-center gap-1 bg-surface-container-lowest border border-outline-variant/40 rounded p-0.5 text-xs font-label-code">
<span className="text-on-surface-variant/70 px-2 py-0.5">SOURCE:</span>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:text-on-surface">NVD</button>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:text-on-surface">GHSA</button>
<button className="px-2 py-0.5 rounded text-on-surface-variant hover:text-on-surface">PyPA</button>
</div>
</div>

<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-xs font-label-code text-on-surface flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm" >file_download</span>
<span>Export Intel JSON</span>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-xs">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant/70 bg-surface-container-lowest font-label-code text-[11px] uppercase tracking-wider">
<th className="py-3 px-3">CVE / ADVISORY ID</th>
<th className="py-3 px-3">VULNERABILITY TITLE</th>
<th className="py-3 px-3">AFFECTED COMPONENT</th>
<th className="py-3 px-3">CVSS &amp; VECTOR</th>
<th className="py-3 px-3">EXPLOITATION</th>
<th className="py-3 px-3">MATCHES</th>
<th className="py-3 px-3">APPLICABILITY</th>
<th className="py-3 px-3">SOURCE</th>
<th className="py-3 px-3 text-right">ACTIONS</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-label-code">

<tr className="bg-surface-container-low/90 relative border-l-2 border-l-primary-container shadow-[inset_0_0_12px_rgba(255,83,87,0.1)] transition-colors">
<td className="py-3 px-3">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span className="font-bold text-primary">CVE-2024-34069</span>
</div>
<div className="text-[10px] text-on-surface-variant/60 font-mono">GHSA-4p3c-2877-9hff</div>
</td>
<td className="py-3 px-3 font-body-sm font-medium text-on-surface max-w-xs truncate">
                  PyMySQL Format String Concatenation &amp; SQL Boundary Escape
                </td>
<td className="py-3 px-3">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">PyMySQL</span>
<span className="text-[11px] text-on-surface-variant/70 ml-1">pip</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary-container font-bold text-[11px]">9.1</span>
<span className="text-[10px] text-on-surface-variant/60">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1 text-[11px] text-primary font-semibold">
<span className="material-symbols-outlined text-xs"  style={{ "fontVariationSettings": "'FILL' 1" }}>flag</span>
                    CISA KEV Listed
                  </span>
</td>
<td className="py-3 px-3 font-bold text-primary">1 Endpoint</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-error-container text-on-error-container border border-primary-container/40">
                    VERIFIED AFFECTED
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">NVD 2.0</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 hover:text-primary transition-colors" title="Inspect Deep-Dive">
<span className="material-symbols-outlined text-base" >visibility</span>
</button>
<button className="p-1 hover:text-primary transition-colors" title="Graph Context">
<span className="material-symbols-outlined text-base" >share</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<span className="font-bold text-tertiary">CVE-2024-21503</span>
<div className="text-[10px] text-on-surface-variant/60 font-mono">GHSA-927v-9q29-xxxx</div>
</td>
<td className="py-3 px-3 font-body-sm font-medium text-on-surface max-w-xs truncate">
                  Celery Worker Pickle Task Ingestion Remote Code Execution
                </td>
<td className="py-3 px-3">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">celery</span>
<span className="text-[11px] text-on-surface-variant/70 ml-1">pip</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-tertiary-container text-on-tertiary-container font-bold text-[11px]">8.8</span>
<span className="text-[10px] text-on-surface-variant/60">CVSS:3.1/AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-xs" >terminal</span>
                    Public PoC
                  </span>
</td>
<td className="py-3 px-3 text-on-surface">1 Worker</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-high text-secondary border border-secondary/30">
                    COMPENSATED
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">GitHub DB</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 hover:text-secondary transition-colors" title="Inspect">
<span className="material-symbols-outlined text-base" >visibility</span>
</button>
<button className="p-1 hover:text-secondary transition-colors" title="Graph">
<span className="material-symbols-outlined text-base" >share</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<span className="font-bold text-on-surface">CVE-2023-46136</span>
<div className="text-[10px] text-on-surface-variant/60 font-mono">GHSA-w5w7-72xf-xxxx</div>
</td>
<td className="py-3 px-3 font-body-sm font-medium text-on-surface max-w-xs truncate">
                  FastAPI Form-Data Parser Multi-Part Content Truncation Bypass
                </td>
<td className="py-3 px-3">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">fastapi</span>
<span className="text-[11px] text-on-surface-variant/70 ml-1">pip</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-bold text-[11px]">7.5</span>
<span className="text-[10px] text-on-surface-variant/60">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-[11px] text-on-surface-variant/60">None Reported</span>
</td>
<td className="py-3 px-3 text-on-surface">3 Endpoints</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container text-on-surface-variant border border-outline-variant/40">
                    POTENTIAL MATCH
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">PyPA Feed</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 hover:text-on-surface transition-colors" title="Inspect">
<span className="material-symbols-outlined text-base" >visibility</span>
</button>
<button className="p-1 hover:text-on-surface transition-colors" title="Graph">
<span className="material-symbols-outlined text-base" >share</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-3">
<span className="font-bold text-on-surface">CVE-2023-30608</span>
<div className="text-[10px] text-on-surface-variant/60 font-mono">GHSA-p5w8-wqfh-xxxx</div>
</td>
<td className="py-3 px-3 font-body-sm font-medium text-on-surface max-w-xs truncate">
                  sqlparse Regular Expression Denial of Service (ReDoS) via Nested Comments
                </td>
<td className="py-3 px-3">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">sqlparse</span>
<span className="text-[11px] text-on-surface-variant/70 ml-1">pip</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-bold text-[11px]">7.5</span>
<span className="text-[10px] text-on-surface-variant/60">CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</span>
</div>
</td>
<td className="py-3 px-3">
<span className="text-[11px] text-on-surface-variant/60">None Reported</span>
</td>
<td className="py-3 px-3 text-on-surface-variant/60">0 (Transitive)</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-surface-container-lowest text-on-surface-variant/60 border border-outline-variant/20">
                    UNAFFECTED
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">NVD 2.0</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 hover:text-on-surface transition-colors" title="Inspect">
<span className="material-symbols-outlined text-base" >visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 border-t border-outline-variant/30 flex items-center justify-between text-xs font-label-code text-on-surface-variant bg-surface-container-lowest">
<span>Showing 1 to 4 of 148 tracked intelligence advisories</span>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface disabled:opacity-40" disabled>Previous</button>
<span className="px-2 py-1 text-on-surface font-bold bg-surface-container-highest rounded">1</span>
<button className="px-2 py-1 rounded hover:bg-surface-container-high text-on-surface-variant">2</button>
<button className="px-2 py-1 rounded hover:bg-surface-container-high text-on-surface-variant">3</button>
<button className="px-2 py-1 rounded hover:bg-surface-container-high text-on-surface">Next</button>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border-2 border-primary-container/40 rounded p-space-lg relative overflow-hidden shadow-[0_0_24px_rgba(255,83,87,0.15)]">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md border-b border-outline-variant/30 pb-space-md">
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-badge text-xs bg-error-container text-on-error-container border border-primary-container/40 uppercase font-bold tracking-wider">
                SELECTED ADVISORY INSPECTOR
              </span>
<span className="font-label-code text-xs text-primary font-bold">CVE-2024-34069</span>
<span className="text-on-surface-variant/40">·</span>
<span className="font-label-code text-xs text-on-surface-variant">GHSA-4p3c-2877-9hff</span>
<span className="text-on-surface-variant/40">·</span>
<span className="bg-primary-container text-on-primary-container font-headline-sm text-xs px-2 py-0.5 rounded font-bold">CVSS 9.1 CRITICAL</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mt-1">
              PyMySQL Format String Concatenation &amp; Boundary Escape
            </h2>
</div>

<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-3 py-1.5 rounded text-xs font-headline-sm uppercase text-white bg-primary-container hover:bg-tertiary-container shadow-[0_0_12px_rgba(255,83,87,0.4)] flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm"  style={{ "fontVariationSettings": "'FILL' 1" }}>build</span>
<span>Open in Remediation Workspace</span>
</button>
<button className="px-3 py-1.5 rounded text-xs font-label-code text-secondary bg-surface-container-high hover:bg-surface-container-highest border border-secondary/40 flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm" >account_tree</span>
<span>View in Knowledge Graph</span>
</button>
<button className="px-3 py-1.5 rounded text-xs font-label-code text-on-surface bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm" >rule</span>
<span>Inspect Finding FND-8902</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-md">

<div className="bg-surface-container-low/70 border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-code text-xs mb-2">
<span className="material-symbols-outlined text-sm text-secondary" >menu_book</span>
<span className="font-semibold text-on-surface">1. OFFICIAL STATEMENT</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                "In PyMySQL prior to 1.1.0, user input interpolation using legacy format string markers within cursors allows bypassing client-side parameter sanitization under default charset collations."
              </p>
</div>
<div className="mt-4 pt-2 border-t border-outline-variant/20 font-label-code text-[11px]">
<a className="text-secondary hover:underline flex items-center gap-1" href="https://nvd.nist.gov" target="_blank">
<span>NVD Canonical URL</span>
<span className="material-symbols-outlined text-xs" >open_in_new</span>
</a>
</div>
</div>

<div className="bg-surface-container-low/70 border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-code text-xs mb-2">
<span className="material-symbols-outlined text-sm text-primary" >inventory_2</span>
<span className="font-semibold text-on-surface">2. INVENTORY ANALYSIS</span>
</div>
<div className="space-y-1.5 font-label-code text-xs">
<div className="flex justify-between">
<span className="text-on-surface-variant/70">Observed In:</span>
<span className="text-on-surface font-semibold">requirements.txt:14</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant/70">Pinned Version:</span>
<span className="text-primary font-bold">PyMySQL 1.0.2</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant/70">Vulnerable Range:</span>
<span className="text-on-surface">&gt;=0.9.0, &lt;1.1.0</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant/70">Fixed In:</span>
<span className="text-secondary font-bold">1.1.0</span>
</div>
</div>
</div>
<div className="mt-4 pt-2 border-t border-outline-variant/20">
<span className="px-2 py-0.5 rounded font-label-badge text-[10px] bg-error-container text-on-error-container border border-primary-container/30 uppercase font-semibold">
                DETERMINISTIC HIT
              </span>
</div>
</div>

<div className="bg-surface-container-low/70 border border-outline-variant/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-code text-xs mb-2">
<span className="material-symbols-outlined text-sm text-primary-container"  style={{ "fontVariationSettings": "'FILL' 1" }}>psychology</span>
<span className="font-semibold text-on-surface">3. AI ANALYST SYNTHESIS</span>
</div>
<div className="space-y-1 font-body-sm text-[12px] text-on-surface-variant">
<p><strong className="text-on-surface">Asset:</strong> Student Search Service</p>
<p><strong className="text-on-surface">Exposure:</strong> Public Ingress Route</p>
<p><strong className="text-on-surface">Blast Radius:</strong> Direct SQL access to PostgreSQL student credentials table.</p>
</div>
</div>
<div className="mt-4 pt-2 border-t border-outline-variant/20 font-label-code text-[11px] text-primary">
              CONFIDENCE SCORE: 98.4%
            </div>
</div>

<div className="bg-surface-container-low/70 border border-primary-container/30 rounded p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-1.5 text-primary-container font-label-code text-xs mb-2">
<span className="material-symbols-outlined text-sm"  style={{ "fontVariationSettings": "'FILL' 1" }}>gavel</span>
<span className="font-semibold text-on-surface">4. DEFENSIVE ACTION</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Apply parameterized query patch <code className="text-primary font-label-code font-semibold">#P-8902 v2</code> or upgrade PyMySQL to <code className="text-secondary font-label-code">1.1.0</code> in requirements.txt. Re-run AST Taint Scan SCN-8092 to verify resolution.
              </p>
</div>
<div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center justify-between font-label-code text-[11px]">
<span className="text-on-surface-variant/70">Patch Effort:</span>
<span className="text-secondary font-semibold">~10 min (Zero-Downtime)</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-lg">

<div className="bg-surface-container-lowest border border-outline-variant/30 rounded p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Technology Exposure</span>
<span className="font-label-badge text-label-badge text-on-surface-variant">BY CVE DENSITY</span>
</div>
<div className="space-y-3 pt-1">

<div>
<div className="flex justify-between text-xs font-label-code mb-1">
<span className="text-on-surface font-semibold">PyMySQL (v1.0.2)</span>
<span className="text-primary font-bold">1 Critical / 1 Total</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ "width": "100%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-label-code mb-1">
<span className="text-on-surface font-semibold">Celery (v5.2.7)</span>
<span className="text-tertiary font-bold">1 High / 2 Total</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{ "width": "75%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-label-code mb-1">
<span className="text-on-surface font-semibold">FastAPI (v0.98.0)</span>
<span className="text-on-surface-variant font-bold">1 Medium / 1 Total</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-surface-variant h-full rounded-full" style={{ "width": "45%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-label-code mb-1">
<span className="text-on-surface font-semibold">Nginx (v1.24.0)</span>
<span className="text-secondary font-bold">0 Vulnerabilities</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ "width": "10%" }}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant/30 rounded p-space-md flex flex-col justify-between gap-space-sm">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base" >cloud_sync</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Intelligence Source Provenance &amp; Cryptographic Attestation</span>
</div>
<div className="flex items-center gap-1.5 font-label-badge text-label-badge text-secondary bg-surface-container-high px-2 py-0.5 rounded border border-secondary/30">
<span className="material-symbols-outlined text-xs"  style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
<span>ED25519 INTEL MANIFEST SIGNED</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-label-code text-xs">
<thead>
<tr className="text-on-surface-variant/70 border-b border-outline-variant/30 text-[11px]">
<th className="py-2">FEED SOURCE</th>
<th className="py-2">HEALTH STATUS</th>
<th className="py-2">LAST SYNC</th>
<th className="py-2">INGESTED RECORDS</th>
<th className="py-2 text-right">SIGNATURE HASH</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">
<tr>
<td className="py-2.5 font-medium text-on-surface">NIST National Vulnerability Database (NVD 2.0)</td>
<td className="py-2.5">
<span className="text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Healthy (310ms)
                    </span>
</td>
<td className="py-2.5 text-on-surface-variant">14:20:04 UTC</td>
<td className="py-2.5 text-on-surface">62 records parsed</td>
<td className="py-2.5 text-right font-mono text-[11px] text-on-surface-variant/80">0x3f4a...89bd</td>
</tr>
<tr>
<td className="py-2.5 font-medium text-on-surface">GitHub Advisory Database (GHSA)</td>
<td className="py-2.5">
<span className="text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Healthy (280ms)
                    </span>
</td>
<td className="py-2.5 text-on-surface-variant">14:22:10 UTC</td>
<td className="py-2.5 text-on-surface">54 records parsed</td>
<td className="py-2.5 text-right font-mono text-[11px] text-on-surface-variant/80">0x7c12...4e19</td>
</tr>
<tr>
<td className="py-2.5 font-medium text-on-surface">Python Packaging Advisory Feed (PyPA OSV)</td>
<td className="py-2.5">
<span className="text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Healthy (420ms)
                    </span>
</td>
<td className="py-2.5 text-on-surface-variant">14:15:38 UTC</td>
<td className="py-2.5 text-on-surface">32 records parsed</td>
<td className="py-2.5 text-right font-mono text-[11px] text-on-surface-variant/80">0x99e0...b6aa</td>
</tr>
</tbody>
</table>
</div>
<div className="pt-2 border-t border-outline-variant/20 flex flex-wrap items-center justify-between text-[11px] font-label-code text-on-surface-variant/70">
<span>Root Trust Anchor: Aegis Intelligence Registry (AIR-256)</span>
<span>Next automatic re-poll in: 07m 50s</span>
</div>
</div>
</section>

    </div>
  );
};

export default ThreatIntelPage;
