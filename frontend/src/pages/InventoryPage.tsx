import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const InventoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getAttackSurface) {
          const res = await api.getAttackSurface();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load InventoryPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">

<div className="p-space-lg max-w-[1440px] mx-auto space-y-space-lg">

<section className="border-b border-outline-variant/20 pb-5">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="font-label-badge text-label-badge text-primary-container uppercase tracking-widest flex items-center gap-2 mb-1.5">
<span className="w-1.5 h-1.5 bg-primary-container rounded-sm"></span>
              ASSET INTELLIGENCE · ATTACK SURFACE MAPPING · DETERMINISTIC SCOPE RECONNAISSANCE
            </div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
              Application Inventory &amp; Attack Surface
            </h1>
<p className="font-body-md text-body-md text-on-surface-variant/80 mt-1 max-w-3xl">
              Discover registered applications, explore exposure pathways, inspect connected security evidence, and evaluate contextual risk across authorized assets.
            </p>
</div>

<div className="flex items-center gap-2.5">
<button className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/40 hover:border-secondary/60 text-on-surface hover:text-secondary rounded font-label-code text-xs transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" >travel_explore</span>
              Import / Discover Assets
            </button>
<button className="px-3.5 py-1.5 bg-surface-container-high border border-primary-container/50 hover:bg-surface-variant text-primary font-label-code text-xs rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" >add_circle</span>
              + Register Application
            </button>
</div>
</div>

<div className="mt-4 px-3.5 py-2 bg-surface-container-low border-l-2 border-primary-container border-y border-r border-outline-variant/25 rounded-r flex flex-wrap items-center justify-between gap-2 text-xs font-label-code">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary-container text-sm" >adjust</span>
<span className="text-on-surface-variant">ACTIVE LAB TARGET:</span>
<span className="text-primary font-bold">college-placement-v2.1</span>
<span className="text-on-surface-variant/70">(Local Lab 8001)</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant text-[11px]">
<span><strong className="text-on-surface font-semibold">5</strong> Registered Apps</span>
<span className="text-outline-variant">·</span>
<span><strong className="text-secondary font-semibold">38</strong> Discovered Assets</span>
<span className="text-outline-variant">·</span>
<span><strong className="text-primary-container font-semibold">12</strong> Internet-Facing</span>
<span className="text-outline-variant">·</span>
<span className="text-[#45D49A] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span> Live Telemetry Synchronized
            </span>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4 relative overflow-hidden group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start">
<span className="font-label-badge text-label-badge text-on-surface-variant/70 uppercase">Registered Applications</span>
<span className="material-symbols-outlined text-on-surface-variant/40 text-lg group-hover:text-primary transition-colors" >deployed_code</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="font-headline-lg text-headline-lg font-bold text-on-surface">5</div>
<div className="font-label-code text-xs text-[#45D49A]">4 Active · 1 Staging</div>
</div>
<div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant/75 truncate" title="college-placement-v2.1, identity-gateway, student-portal, payment-broker, telemetry-worker">
            college-placement-v2.1, identity-gateway, student-portal, payment-broker...
          </div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4 relative overflow-hidden group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start">
<span className="font-label-badge text-label-badge text-on-surface-variant/70 uppercase">Discovered Assets</span>
<span className="material-symbols-outlined text-secondary text-lg" >hub</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="font-headline-lg text-headline-lg font-bold text-secondary">38</div>
<div className="font-label-code text-xs text-on-surface-variant">across 5 apps</div>
</div>
<div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant/75 truncate">
            14 API Endpoints, 8 Web Routes, 6 DB Sinks, 6 Services
          </div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4 relative overflow-hidden group hover:border-outline-variant/60 transition-colors">
<div className="flex justify-between items-start">
<span className="font-label-badge text-label-badge text-on-surface-variant/70 uppercase">Internet-Facing Assets</span>
<span className="material-symbols-outlined text-primary-container text-lg" >public</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="font-headline-lg text-headline-lg font-bold text-primary-container">12</div>
<div className="font-label-code text-xs text-primary-fixed-dim">Exposed to Ingress</div>
</div>
<div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant/75 truncate">
            3 High Exposure, 9 Reverse-Proxied via Nginx
          </div>
</div>

<div className="bg-surface-container-low border border-primary-container/40 rounded p-4 relative overflow-hidden crimson-glow">
<div className="flex justify-between items-start">
<span className="font-label-badge text-label-badge text-primary-container uppercase font-semibold">Assets With Findings</span>
<span className="material-symbols-outlined text-primary-container text-lg" >production_quantity_limits</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="font-headline-lg text-headline-lg font-bold text-primary">7</div>
<div className="font-label-code text-xs text-error font-semibold">2 CRIT · 3 HIGH · 2 MED</div>
</div>
<div className="mt-3 pt-2.5 border-t border-outline-variant/20 font-label-code text-[11px] text-on-surface-variant/80 truncate">
            CWE-89 (SQLi), CWE-798 (Secrets), CWE-79 (XSS)
          </div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between overflow-hidden">

<div className="px-4 py-3 border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-2 bg-surface-container-lowest/60">
<div>
<div className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base" >polyline</span>
                Attack Surface Topology
              </div>
<div className="font-label-code text-[11px] text-on-surface-variant">Deterministic Graph: Application → Ingress → Direct Sinks</div>
</div>

<div className="flex items-center gap-1.5 font-label-code text-xs">
<button className="px-2 py-1 bg-surface-container-high/60 hover:bg-surface-container-high rounded text-on-surface-variant hover:text-on-surface text-[11px] border border-outline-variant/30">
                Fit View
              </button>
<button className="px-2 py-1 bg-surface-container-high/60 hover:bg-surface-container-high rounded text-on-surface-variant hover:text-on-surface text-[11px] border border-outline-variant/30">
                100%
              </button>
<button className="px-2 py-1 bg-surface-container-high/60 hover:bg-surface-container-high rounded text-primary text-[11px] border border-primary-container/30">
                Exposed Only
              </button>
<button className="px-2 py-1 bg-surface-container hover:bg-surface-variant rounded text-secondary text-[11px] border border-secondary/40 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" >open_in_new</span>
                Knowledge Graph
              </button>
</div>
</div>

<div className="topology-grid p-6 relative min-h-[380px] flex items-center justify-center overflow-x-auto">

<div className="flex items-center justify-between w-full min-w-[580px] gap-6 relative">

<div className="flex flex-col items-center z-10">
<div className="p-3 bg-surface-container-high border-2 border-primary-container/60 rounded-lg shadow-lg w-40 text-center relative group cursor-pointer hover:border-primary-container transition-all">
<div className="w-2 h-2 rounded-full bg-primary-container absolute -top-1 -right-1 crimson-pulse"></div>
<span className="font-label-badge text-[9px] text-on-surface-variant uppercase">Root Target</span>
<div className="font-label-code text-xs font-bold text-on-surface truncate mt-0.5">college-placement</div>
<div className="font-label-code text-[10px] text-primary">v2.1 · Local Lab</div>
</div>
</div>

<div className="flex-1 h-[2px] bg-gradient-to-r from-primary-container to-secondary/80 relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"></div>
</div>

<div className="flex flex-col items-center z-10">
<div className="p-2.5 bg-surface-container border border-secondary/50 rounded-lg w-44 text-center">
<div className="flex items-center justify-center gap-1 text-[10px] font-label-code text-secondary font-semibold">
<span className="material-symbols-outlined text-xs" >cloud_queue</span>
                    PUBLIC INGRESS
                  </div>
<div className="font-label-code text-xs text-on-surface font-semibold truncate mt-1">portal.college.internal</div>
<div className="font-label-code text-[10px] text-on-surface-variant">Port :8001 / Nginx</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center relative">
<div className="w-full h-[2px] bg-outline-variant/60"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 w-4">
<div className="w-full h-[2px] bg-error"></div>
<div className="w-full h-[2px] bg-outline-variant/60"></div>
<div className="w-full h-[2px] bg-outline-variant/60"></div>
</div>
</div>

<div className="flex flex-col gap-3 z-10">

<div className="p-2.5 bg-surface-container border-2 border-primary-container rounded shadow-md w-48 relative cursor-pointer bg-surface-container-high/60">
<span className="absolute -top-2 right-2 px-1.5 py-0.2 bg-error text-on-error font-label-badge text-[9px] rounded font-bold uppercase">
                    CRIT CWE-89
                  </span>
<div className="font-label-code text-xs font-bold text-primary truncate">/api/v1/students/search</div>
<div className="font-label-code text-[10px] text-on-surface-variant flex items-center justify-between mt-1">
<span>GET Param Query</span>
<span className="text-error font-semibold">Risk 8.6</span>
</div>

<div className="mt-1.5 pt-1 border-t border-outline-variant/30 flex items-center gap-1 text-[9px] font-label-code text-on-surface-variant">
<span className="material-symbols-outlined text-[10px] text-error" >subdirectory_arrow_right</span>
<span>Direct: pg-auth-primary</span>
</div>
</div>

<div className="p-2 bg-surface-container-low border border-outline-variant/30 rounded w-48 opacity-85">
<div className="font-label-code text-xs text-on-surface truncate">/api/v1/auth/profile</div>
<div className="font-label-code text-[10px] text-[#45D49A] flex items-center justify-between">
<span>JWT Verified</span>
<span>Clean</span>
</div>
</div>

<div className="p-2 bg-surface-container-low border border-outline-variant/30 rounded w-48 opacity-75">
<div className="font-label-code text-xs text-on-surface truncate">/worker/queue.py</div>
<div className="font-label-code text-[10px] text-tertiary-fixed flex items-center justify-between">
<span>Celery / Redis</span>
<span>1 High Sink</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 py-2.5 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-wrap items-center justify-between gap-3 text-[11px] font-label-code">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Public Ingress
              </span>
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span> Internal Route
              </span>
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span> Critical Sink (Crimson)
              </span>
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#45D49A]"></span> Verified Decoupled
              </span>
<span className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#2a292d] border border-outline-variant"></span> DB Entity
              </span>
</div>
<div className="text-[10px] text-on-surface-variant/60">
              Generated via deterministic AST/CFG traversal
            </div>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/30 rounded flex flex-col justify-between">
<div className="px-4 py-3 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-lowest/60">
<div>
<div className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-base" >warning</span>
                Immediate Attention
              </div>
<div className="font-label-code text-[11px] text-on-surface-variant">Ranked Priority Action Queue</div>
</div>
<span className="font-label-badge text-xs px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">
              4 UNRESOLVED
            </span>
</div>

<div className="divide-y divide-outline-variant/20 overflow-y-auto max-h-[440px] custom-scroll">

<div className="p-3.5 hover:bg-surface-container-high/40 transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-primary-container bg-surface-container-highest px-1.5 py-0.5 rounded">#1</span>
<span className="font-label-code text-xs font-bold text-primary truncate max-w-[210px]" title="/api/v1/students/search">
                    /api/v1/students/search
                  </span>
</div>
<span className="font-label-badge text-[10px] px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary-container/40 uppercase">
                  INTERNET-FACING
                </span>
</div>
<div className="mt-1.5 flex items-center gap-2 text-xs font-label-code text-on-surface-variant">
<span className="text-error font-semibold">CWE-89 SQL Injection</span>
<span>·</span>
<span className="text-on-surface">Context Risk: <strong className="text-primary-container font-bold">8.6/10</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 line-clamp-1">
                Direct raw query interpolation with unsanitized 'search' parameter against student records database.
              </p>
<div className="mt-2.5 flex items-center justify-between">
<span className="font-label-code text-[10px] text-outline">API Endpoint · AST-EP-402</span>
<button className="px-2.5 py-1 bg-primary-container text-on-primary-container text-xs font-label-code font-bold rounded hover:opacity-90 transition-opacity">
                  Triage Finding
                </button>
</div>
</div>

<div className="p-3.5 hover:bg-surface-container-high/40 transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">#2</span>
<span className="font-label-code text-xs font-semibold text-on-surface truncate max-w-[210px]" title="/services/auth.js:14">
                    /services/auth.js:14
                  </span>
</div>
<span className="font-label-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/30 uppercase">
                  INTERNAL
                </span>
</div>
<div className="mt-1.5 flex items-center gap-2 text-xs font-label-code text-on-surface-variant">
<span className="text-primary font-semibold">CWE-798 Hardcoded JWT</span>
<span>·</span>
<span className="text-on-surface">CVSS: <strong className="text-primary font-bold">9.2</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 line-clamp-1">
                Static HMAC secret key embedded in source control module. Allows arbitrary token forging.
              </p>
<div className="mt-2.5 flex items-center justify-between">
<span className="font-label-code text-[10px] text-outline">Auth Module · AST-GW-101</span>
<button className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container border border-outline-variant/40 text-on-surface text-xs font-label-code rounded transition-colors">
                  Inspect
                </button>
</div>
</div>

<div className="p-3.5 hover:bg-surface-container-high/40 transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">#3</span>
<span className="font-label-code text-xs font-semibold text-on-surface truncate max-w-[210px]" title="/src/BioView.tsx">
                    /src/BioView.tsx
                  </span>
</div>
<span className="font-label-badge text-[10px] px-1.5 py-0.5 rounded bg-secondary-container/20 text-secondary border border-secondary/30 uppercase">
                  CLIENT ROUTE
                </span>
</div>
<div className="mt-1.5 flex items-center gap-2 text-xs font-label-code text-on-surface-variant">
<span className="text-tertiary font-semibold">CWE-79 Stored XSS</span>
<span>·</span>
<span className="text-on-surface">Context Risk: <strong className="text-tertiary-fixed font-bold">6.4</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 line-clamp-1">
                Unescaped HTML profile bio markup directly rendered into student supervisor portal view.
              </p>
<div className="mt-2.5 flex items-center justify-between">
<span className="font-label-code text-[10px] text-outline">React Component · AST-UI-204</span>
<button className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container border border-outline-variant/40 text-on-surface text-xs font-label-code rounded transition-colors">
                  Inspect
                </button>
</div>
</div>

<div className="p-3.5 hover:bg-surface-container-high/40 transition-colors">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-code text-xs font-bold text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded">#4</span>
<span className="font-label-code text-xs font-semibold text-on-surface truncate max-w-[210px]" title="worker/queue.py:18">
                    worker/queue.py:18
                  </span>
</div>
<span className="font-label-badge text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/30 uppercase">
                  ISOLATED VPC
                </span>
</div>
<div className="mt-1.5 flex items-center gap-2 text-xs font-label-code text-on-surface-variant">
<span className="text-primary font-semibold">CWE-502 Deserialization</span>
<span>·</span>
<span className="text-on-surface">Context Risk: <strong className="text-primary font-bold">8.9</strong></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 line-clamp-1">
                Untrusted pickle load trigger inside async report daemon receiving telemetry payloads.
              </p>
<div className="mt-2.5 flex items-center justify-between">
<span className="font-label-code text-[10px] text-outline">Worker Script · AST-WK-309</span>
<button className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container border border-outline-variant/40 text-on-surface text-xs font-label-code rounded transition-colors">
                  Inspect
                </button>
</div>
</div>
</div>
<div className="p-3 border-t border-outline-variant/30 bg-surface-container-lowest/60 text-center">
<button className="font-label-code text-xs text-primary hover:text-primary-fixed flex items-center justify-center gap-1 w-full">
<span>View all 7 flagged components</span>
<span className="material-symbols-outlined text-xs" >chevron_right</span>
</button>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/30 rounded overflow-hidden">

<div className="p-4 border-b border-outline-variant/30 bg-surface-container-lowest/60 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">

<div className="relative flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-base" >search</span>
<input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant/40 focus:border-primary-container focus:ring-0 text-on-surface font-label-code text-xs rounded transition-colors placeholder:text-on-surface-variant/40" placeholder="Filter by name, route, host, technology, or asset ID..." type="text" value="AST-EP-402"/>
</div>

<div className="flex flex-wrap items-center gap-2 font-label-code text-xs">

<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-on-surface text-xs focus:border-primary-container">
<option>Asset Type: All (38)</option>
<option>Endpoints (14)</option>
<option>Web Routes (8)</option>
<option>DB Sinks (6)</option>
<option>Microservices (6)</option>
</select>

<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-on-surface text-xs focus:border-primary-container">
<option>Exposure: All (38)</option>
<option >Internet-Facing (12)</option>
<option>Internal / VPC (20)</option>
<option>Restricted DB (6)</option>
</select>

<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-on-surface text-xs focus:border-primary-container">
<option>Status: Open Findings (7)</option>
<option>All Statuses</option>
<option>Neutralized (12)</option>
<option>Clean / Verified (19)</option>
</select>

<select className="bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-on-surface text-xs focus:border-primary-container">
<option>Sort: Contextual Risk</option>
<option>Finding Severity</option>
<option>Asset Name</option>
</select>

<button className="px-3 py-1.5 bg-surface-container border border-outline-variant/40 hover:bg-surface-variant text-on-surface rounded flex items-center gap-1 text-xs">
<span className="material-symbols-outlined text-xs" >file_download</span>
              CSV/JSON
            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-label-code text-xs whitespace-nowrap">
<thead className="bg-surface-container-high/40 text-on-surface-variant border-b border-outline-variant/30 uppercase text-[10px] tracking-wider">
<tr>
<th className="py-3 px-3 w-8">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</th>
<th className="py-3 px-3">Asset Name &amp; Identifier</th>
<th className="py-3 px-3">Type</th>
<th className="py-3 px-3">Parent App</th>
<th className="py-3 px-3">Route / Hostname / Sink</th>
<th className="py-3 px-3">Env</th>
<th className="py-3 px-3">Exposure</th>
<th className="py-3 px-3">Findings</th>
<th className="py-3 px-3">Risk</th>
<th className="py-3 px-3">Last Scanned</th>
<th className="py-3 px-3">Status</th>
<th className="py-3 px-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="bg-primary-container/10 border-l-2 border-primary-container hover:bg-primary-container/15 transition-colors">
<td className="py-3 px-3">
<input defaultChecked className="rounded bg-surface-container-lowest border-primary-container text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-bold text-on-surface">Student Search Controller</div>
<div className="text-[10px] text-primary">AST-EP-402</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface text-[10px]">API Endpoint</span>
</td>
<td className="py-3 px-3 text-on-surface-variant font-medium">college-placement-v2.1</td>
<td className="py-3 px-3 font-semibold text-primary">/api/v1/students/search.py:42</td>
<td className="py-3 px-3 text-on-surface-variant">Local Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-error-container/40 text-error border border-error/30 font-label-badge text-[10px]">
                    INTERNET-FACING
                  </span>
</td>
<td className="py-3 px-3">
<span className="font-bold text-primary-container">1 CRITICAL</span>
<span className="text-[10px] text-outline-variant ml-1">(CWE-89)</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5 font-bold text-primary-container">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    8.6 / 10
                  </div>
</td>
<td className="py-3 px-3 text-on-surface-variant/80">14:48 UTC (SCN-8092)</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[10px] font-bold">
                    REVIEW REQUIRED
                  </span>
</td>
<td className="py-3 px-3 text-right">
<div className="flex items-center justify-end gap-1.5">
<button className="px-2 py-1 bg-surface-container-highest hover:bg-surface-variant text-primary rounded text-[11px] font-medium border border-primary-container/30">
                      Inspect Details
                    </button>
<button className="p-1 hover:text-primary rounded text-on-surface-variant" title="Open Analyst">
<span className="material-symbols-outlined text-sm" >smart_toy</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">User Authentication Gateway</div>
<div className="text-[10px] text-outline">AST-GW-101</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Microservice</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">identity-gateway</td>
<td className="py-3 px-3 text-on-surface-variant">https://auth.lab.internal:8443</td>
<td className="py-3 px-3 text-on-surface-variant">Staging</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error border border-error/30 font-label-badge text-[10px]">
                    PUBLIC INGRESS
                  </span>
</td>
<td className="py-3 px-3">
<span className="font-bold text-tertiary">1 HIGH</span>
<span className="text-[10px] text-outline-variant ml-1">(CWE-798)</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5 text-tertiary font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    7.8 / 10
                  </div>
</td>
<td className="py-3 px-3 text-on-surface-variant/80">14:15 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">
                    TRIAGED
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">Student Profile Bio Component</div>
<div className="text-[10px] text-outline">AST-UI-204</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Frontend Route</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">student-portal</td>
<td className="py-3 px-3 text-on-surface-variant">/profile/bio [GET, POST]</td>
<td className="py-3 px-3 text-on-surface-variant">Local Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-badge text-[10px]">
                    INTERNAL
                  </span>
</td>
<td className="py-3 px-3">
<span className="font-bold text-tertiary-fixed">1 MEDIUM</span>
<span className="text-[10px] text-outline-variant ml-1">(CWE-79)</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5 text-on-surface font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                    6.4 / 10
                  </div>
</td>
<td className="py-3 px-3 text-on-surface-variant/80">13:50 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary-container/30 text-secondary-fixed text-[10px]">
                    IN SANDBOX
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">PostgreSQL Primary Auth DB</div>
<div className="text-[10px] text-outline">AST-DB-001</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Database Node</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">college-placement-v2.1</td>
<td className="py-3 px-3 text-on-surface-variant font-mono">pg-auth-primary:5432 (Tier-1)</td>
<td className="py-3 px-3 text-on-surface-variant">Production Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-[#45D49A]/10 text-[#45D49A] border border-[#45D49A]/30 font-label-badge text-[10px]">
                    RESTRICTED VPC
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">
<span>0 DIRECT</span>
<span className="text-[10px] text-primary-fixed ml-1">(Sink Target)</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
                    4.2 / 10
                  </div>
</td>
<td className="py-3 px-3 text-on-surface-variant/80">14:48 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-[#45D49A] text-[10px]">
                    SECURE HOST
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">Async Report Queue Worker</div>
<div className="text-[10px] text-outline">AST-WK-309</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Background Daemon</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">telemetry-worker</td>
<td className="py-3 px-3 text-on-surface-variant">redis-queue:6379 / worker.py</td>
<td className="py-3 px-3 text-on-surface-variant">Local Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/30 font-label-badge text-[10px]">
                    ISOLATED LOOPBACK
                  </span>
</td>
<td className="py-3 px-3">
<span className="font-bold text-tertiary">1 HIGH</span>
<span className="text-[10px] text-outline-variant ml-1">(CWE-502)</span>
</td>
<td className="py-3 px-3">
<div className="flex items-center gap-1.5 text-tertiary font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    6.8 / 10
                  </div>
</td>
<td className="py-3 px-3 text-on-surface-variant/80">12:30 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">
                    AWAITING RE-SCAN
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">Session Cookie Handler</div>
<div className="text-[10px] text-outline">AST-CK-112</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">Middleware</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">college-placement-v2.1</td>
<td className="py-3 px-3 text-on-surface-variant">/nginx/default.conf:28</td>
<td className="py-3 px-3 text-on-surface-variant">Local Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-error-container/30 text-error border border-error/30 font-label-badge text-[10px]">
                    INTERNET-FACING
                  </span>
</td>
<td className="py-3 px-3 text-on-surface-variant">
<span>1 LOW</span>
<span className="text-[10px] text-outline-variant ml-1">(CWE-319)</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">3.2 / 10</td>
<td className="py-3 px-3 text-on-surface-variant/80">14:15 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">
                    UNCHANGED
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-3">
<input className="rounded bg-surface-container-lowest border-outline-variant/60 text-primary-container focus:ring-0" type="checkbox"/>
</td>
<td className="py-3 px-3">
<div className="font-medium text-on-surface">Academic Records Transcript API</div>
<div className="text-[10px] text-outline">AST-EP-409</div>
</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[10px]">API Endpoint</span>
</td>
<td className="py-3 px-3 text-on-surface-variant">college-placement-v2.1</td>
<td className="py-3 px-3 text-on-surface-variant">/api/v1/records/transcript</td>
<td className="py-3 px-3 text-on-surface-variant">Local Lab</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-badge text-[10px]">
                    INTERNAL AUTH
                  </span>
</td>
<td className="py-3 px-3 text-[#45D49A]">0 FINDINGS</td>
<td className="py-3 px-3 text-[#45D49A]">1.1 / 10</td>
<td className="py-3 px-3 text-on-surface-variant/80">14:48 UTC</td>
<td className="py-3 px-3">
<span className="px-2 py-0.5 rounded bg-[#45D49A]/20 text-[#45D49A] text-[10px] font-semibold">
                    CLEAN VERIFIED
                  </span>
</td>
<td className="py-3 px-3 text-right">
<button className="px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface rounded text-[11px] border border-outline-variant/30">
                    Inspect Details
                  </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-outline-variant/30 bg-surface-container-lowest/60 flex flex-wrap items-center justify-between gap-2 font-label-code text-xs text-on-surface-variant">
<div>Showing <strong className="text-on-surface">1 - 7</strong> of <strong className="text-on-surface">38</strong> Discovered Assets</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 bg-surface-container border border-outline-variant/40 rounded text-on-surface-variant/50 cursor-not-allowed">Previous</button>
<button className="px-2.5 py-1 bg-primary-container text-on-primary-container rounded font-bold">1</button>
<button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded text-on-surface">2</button>
<button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded text-on-surface">3</button>
<button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded text-on-surface">Next</button>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-primary-container/40 rounded overflow-hidden crimson-glow">

<div className="px-5 py-4 border-b border-outline-variant/30 bg-surface-container-lowest flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-xl" >terminal</span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Student Search Controller
                </h3>
<span className="font-label-code text-xs px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold border border-primary-container/30">
                  AST-EP-402
                </span>
<span className="font-label-badge text-[10px] px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold uppercase">
                  REVIEW REQUIRED
                </span>
</div>
<div className="font-label-code text-xs text-on-surface-variant flex items-center gap-2 mt-1">
<span>Type: <strong className="text-on-surface">API Endpoint</strong></span>
<span>·</span>
<span className="text-error font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Exposure: INTERNET-FACING (Public Ingress)
                </span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 font-label-code text-xs">
<button className="px-3 py-1.5 bg-primary-container hover:bg-opacity-90 text-on-primary-container font-bold rounded flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,83,87,0.3)]">
<span className="material-symbols-outlined text-sm" >smart_toy</span>
              Open in AI Security Analyst
            </button>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-variant text-secondary border border-secondary/40 rounded flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" >hub</span>
              View in Knowledge Graph
            </button>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/40 rounded flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" >build</span>
              Remediation Lab
            </button>
<button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-variant text-on-surface border border-outline-variant/40 rounded flex items-center gap-1.5" title="Trigger Isolated Re-Scan">
<span className="material-symbols-outlined text-sm" >replay</span>
              Re-Scan
            </button>
</div>
</div>

<div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-6 font-label-code text-xs">

<div className="space-y-4">
<div className="font-label-badge text-on-surface-variant uppercase tracking-wider text-[11px] pb-1 border-b border-outline-variant/20 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs" >info</span>
              Asset Configuration
            </div>
<div className="bg-surface-container-lowest p-3.5 rounded border border-outline-variant/20 space-y-2.5">
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Parent Application:</div>
<div className="text-on-surface font-semibold">college-placement-v2.1</div>
</div>
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Target Endpoint Base:</div>
<div className="text-secondary font-mono">http://localhost:8001/api/v1/students/search</div>
</div>
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Tech Stack &amp; Frameworks:</div>
<div className="text-on-surface">Python 3.11 · FastAPI · PyMySQL · Uvicorn</div>
</div>
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Data Sensitivity Tier:</div>
<div className="text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs" >lock</span>
                  Restricted Student PII (FERPA Protected)
                </div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="font-label-badge text-primary-container uppercase tracking-wider text-[11px] pb-1 border-b border-outline-variant/20 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs" >shield_with_heart</span>
              Security Posture &amp; Proofs
            </div>
<div className="bg-surface-container-lowest p-3.5 rounded border border-primary-container/30 space-y-2.5">
<div className="flex items-center justify-between">
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Active Vulnerability:</div>
<div className="text-primary font-bold">CWE-89 SQL Injection</div>
</div>
<div className="text-right">
<div className="text-[10px] text-on-surface-variant/70 uppercase">Contextual Risk:</div>
<div className="text-primary-container font-bold text-sm">8.6 / 10</div>
</div>
</div>
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Deterministic Evidence:</div>
<div className="text-on-surface text-[11px] bg-surface-container p-1.5 rounded border border-outline-variant/30 font-mono">
                  AST Taint Trace #9042: Source parameter 'query' reaches execute() without bind-params.
                </div>
</div>
<div>
<div className="text-[10px] text-on-surface-variant/70 uppercase">Sandbox Verification State:</div>
<div className="text-[#45D49A] flex items-center gap-1 text-[11px]">
<span className="material-symbols-outlined text-xs" >check_circle</span>
                  Patch Candidate #P-8902 v2 Validated in gVisor
                </div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="font-label-badge text-secondary uppercase tracking-wider text-[11px] pb-1 border-b border-outline-variant/20 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs" >route</span>
              Connected Ingress Pipeline
            </div>
<div className="bg-surface-container-lowest p-3.5 rounded border border-outline-variant/20">
<div className="space-y-2">

<div className="flex items-center gap-2 text-[11px]">
<span className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-secondary text-[10px]">1</span>
<span className="text-on-surface-variant">Public Proxy (Port 443 / Nginx)</span>
</div>
<div className="w-[1px] h-3 bg-outline-variant/40 ml-2.5"></div>

<div className="flex items-center gap-2 text-[11px]">
<span className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-secondary text-[10px]">2</span>
<span className="text-on-surface-variant">FastAPI Router (/api/v1/students)</span>
</div>
<div className="w-[1px] h-3 bg-error ml-2.5"></div>

<div className="flex items-center gap-2 text-[11px] bg-primary-container/10 p-1.5 rounded border border-primary-container/40">
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-[10px] font-bold">3</span>
<span className="text-primary font-bold">THIS ENDPOINT: search_students()</span>
</div>
<div className="w-[1px] h-3 bg-error ml-2.5"></div>

<div className="flex items-center gap-2 text-[11px]">
<span className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container text-[10px]">4</span>
<span className="text-on-surface">PostgreSQL Auth DB (students table)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<span className="font-headline-sm text-sm font-semibold text-on-surface">Asset Type Composition</span>
<span className="font-label-code text-xs text-on-surface-variant">38 Total Assets</span>
</div>

<div className="mt-4 h-2.5 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="bg-primary-container" style={{ "width": "37%" }} title="API Endpoints: 37%"></div>
<div className="bg-secondary" style={{ "width": "21%" }} title="Frontend Routes: 21%"></div>
<div className="bg-[#45D49A]" style={{ "width": "16%" }} title="Database Nodes: 16%"></div>
<div className="bg-[#FFB84D]" style={{ "width": "16%" }} title="Microservices: 16%"></div>
<div className="bg-outline-variant" style={{ "width": "10%" }} title="Middleware: 10%"></div>
</div>

<div className="mt-4 space-y-2 font-label-code text-xs">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span>API Endpoints</span>
</span>
<span className="text-on-surface font-semibold">14 (37%)</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Frontend Routes</span>
</span>
<span className="text-on-surface font-semibold">8 (21%)</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span>Database Nodes / Sinks</span>
</span>
<span className="text-on-surface font-semibold">6 (16%)</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FFB84D]"></span>
<span>Microservices</span>
</span>
<span className="text-on-surface font-semibold">6 (16%)</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span>Middleware / Proxies</span>
</span>
<span className="text-on-surface font-semibold">4 (10%)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<span className="font-headline-sm text-sm font-semibold text-on-surface">Exposure Distribution</span>
<span className="font-label-code text-xs text-primary-container font-semibold">31.5% Internet-Facing</span>
</div>

<div className="mt-4 space-y-3 font-label-code text-xs">
<div>
<div className="flex justify-between text-on-surface mb-1">
<span className="text-error font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
                  Internet-Facing
                </span>
<span>12 Assets (31.5%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full" style={{ "width": "31.5%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-on-surface mb-1">
<span className="text-secondary font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Internal / Private VPC
                </span>
<span>16 Assets (42.1%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ "width": "42.1%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-on-surface mb-1">
<span className="text-[#45D49A] font-semibold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
                  Restricted DB Tier
                </span>
<span>6 Assets (15.8%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-[#45D49A] h-full" style={{ "width": "15.8%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-on-surface mb-1">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  Isolated Loopback
                </span>
<span>4 Assets (10.6%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-outline-variant h-full" style={{ "width": "10.6%" }}></div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded p-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
<span className="font-headline-sm text-sm font-semibold text-on-surface">Technology Footprint</span>
<span className="font-label-code text-xs text-error font-semibold">7 Vulnerabilities</span>
</div>
<div className="mt-4 space-y-2.5 font-label-code text-xs">
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="font-bold text-on-surface">Python 3.11 / FastAPI</div>
<div className="text-[10px] text-on-surface-variant">14 Endpoints, Async Core</div>
</div>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container text-[11px] font-bold">
                2 Findings
              </span>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="font-bold text-on-surface">Node.js 18 / Express</div>
<div className="text-[10px] text-on-surface-variant">Auth Gateway Service</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container text-[11px] font-bold">
                1 Finding
              </span>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="font-bold text-on-surface">PostgreSQL 15 Enterprise</div>
<div className="text-[10px] text-on-surface-variant">Primary Relational Storage</div>
</div>
<span className="px-2 py-0.5 rounded bg-[#45D49A]/20 text-[#45D49A] text-[11px] font-bold">
                0 Direct
              </span>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="font-bold text-on-surface">Redis 7 &amp; Celery Daemon</div>
<div className="text-[10px] text-on-surface-variant">Broker &amp; Background Tasks</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container text-[11px] font-bold">
                1 Finding
              </span>
</div>
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
<div>
<div className="font-bold text-on-surface">Nginx 1.24 Reverse Proxy</div>
<div className="text-[10px] text-on-surface-variant">Ingress Routing Layer</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[11px]">
                1 Finding
              </span>
</div>
</div>
</div>
</section>

<footer className="pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between text-xs font-label-code text-on-surface-variant/60 pb-8">
<div>
          AegisOne AI Autonomous Defense Kernel · Application Inventory &amp; Attack Surface v4.2.1
        </div>
<div className="flex items-center gap-4">
<span>Target Fixture: college-placement-v2.1</span>
<span>Scope Status: DETERMINISTIC LOCK</span>
<span className="text-[#45D49A] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span> SOC Real-Time Feed
          </span>
</div>
</footer>
</div>

    </div>
  );
};

export default InventoryPage;
