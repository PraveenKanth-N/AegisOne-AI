import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const IntegrationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getSystemIntegrations) {
          const res = await api.getSystemIntegrations();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load IntegrationsPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<section className="bg-surface-container-low border border-outline-variant/40 rounded p-space-md relative overflow-hidden backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.5)]">

<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-10 -bottom-10 w-60 h-60 bg-secondary/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">

<div className="flex items-start gap-4">
<div className="mt-0.5 w-10 h-10 rounded bg-[#FFB84D]/10 border border-[#FFB84D]/40 flex items-center justify-center text-[#FFB84D] shrink-0 shadow-[0_0_14px_rgba(255,184,77,0.25)]">
<span className="material-symbols-outlined text-2xl">warning</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex flex-wrap items-center gap-2.5">
<span className="px-2 py-0.5 rounded bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30 text-label-badge font-label-badge font-bold tracking-wider">
                  DEGRADED (1 NON-BLOCKING)
                </span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant/80">
                  9 / 10 Core Services Healthy · Python Backend &amp; SQLite Online
                </span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-sm">
                External Threat Intel Sync is currently rate-limited (<code className="text-label-code font-label-code text-[#FFB84D] font-mono bg-surface-container-high px-1 py-0.5 rounded">HTTP 429</code> from PyPA). Core AST Taint Analyzer and gVisor Execution Sandbox remain 100% operational and unaffected.
              </p>
<div className="flex items-center gap-2 text-label-badge font-label-badge text-xs text-on-surface-variant/60 mt-0.5">
<span className="material-symbols-outlined text-xs">schedule</span>
<span>Last Health Check: 14:26:40 UTC (Auto-poll 30s)</span>
<span>•</span>
<span className="font-mono text-secondary">Agent: aegis-worker-node-va02</span>
</div>
</div>
</div>

<div className="flex items-center gap-2.5 shrink-0 self-start lg:self-center">
<button className="px-3.5 py-2 rounded bg-surface-container-high border border-outline-variant/60 hover:border-secondary hover:text-secondary text-on-surface text-label-code font-label-code text-xs flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm">data_object</span>
<span>Export Diagnostic Manifest</span>
</button>
<button className="px-4 py-2 rounded bg-primary-container hover:bg-[#F20D32] text-white text-label-code font-label-code text-xs font-semibold flex items-center gap-2 shadow-[0_0_18px_rgba(242,13,50,0.4)] transition-all">
<span className="material-symbols-outlined text-base animate-spin">refresh</span>
<span>Run Full Diagnostic Sweep</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">

<div className="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/70 rounded p-space-md flex flex-col justify-between transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant/70 text-xs">SERVICES CHECKED</span>
<span className="material-symbols-outlined text-on-surface-variant/50 text-base">fact_check</span>
</div>
<div>
<div className="text-headline-md font-headline-md text-on-surface tracking-tight font-bold">10 Checked</div>
<div className="flex items-center gap-2 mt-1 text-label-code font-label-code text-xs">
<span className="text-[#45D49A] font-semibold">9 Healthy</span>
<span className="text-on-surface-variant/40">/</span>
<span className="text-[#FFB84D] font-semibold">1 Degraded</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-3">
<div className="bg-[#45D49A] h-full" style={{ "width": "90%" }}></div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/70 rounded p-space-md flex flex-col justify-between transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant/70 text-xs">AI ANALYSIS ENGINE</span>
<span className="w-2 h-2 rounded-full bg-[#45D49A] shadow-[0_0_8px_rgba(69,212,154,0.6)]"></span>
</div>
<div>
<div className="text-headline-md font-headline-md text-[#45D49A] tracking-tight font-bold">ONLINE</div>
<div className="text-label-code font-label-code text-xs text-on-surface-variant/80 mt-1 truncate" title="Claude 3.5 Sonnet / GPT-4o fallback">
              Claude 3.5 Sonnet (Primary)
            </div>
</div>
<div className="flex items-center justify-between mt-3 text-label-badge font-label-badge text-[11px] text-on-surface-variant/70">
<span>Lat: <strong className="text-secondary font-mono font-normal">420ms</strong></span>
<span>Quota: <strong className="text-[#45D49A] font-mono font-normal">84% Free</strong></span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/70 rounded p-space-md flex flex-col justify-between transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant/70 text-xs">GRAPH ONTOLOGY</span>
<span className="w-2 h-2 rounded-full bg-[#45D49A] shadow-[0_0_8px_rgba(69,212,154,0.6)]"></span>
</div>
<div>
<div className="text-headline-md font-headline-md text-on-surface tracking-tight font-bold">HEALTHY</div>
<div className="text-label-code font-label-code text-xs text-on-surface-variant/80 mt-1">
              NetworkX In-Memory v3.2
            </div>
</div>
<div className="flex items-center justify-between mt-3 text-label-badge font-label-badge text-[11px] text-on-surface-variant/70">
<span className="font-mono text-on-surface-variant">1,420N / 4.8kE</span>
<span>Lookup: <strong className="text-[#45D49A] font-mono font-normal">1.8ms</strong></span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/70 rounded p-space-md flex flex-col justify-between transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant/70 text-xs">PERSISTENCE (SQLITE)</span>
<span className="w-2 h-2 rounded-full bg-[#45D49A] shadow-[0_0_8px_rgba(69,212,154,0.6)]"></span>
</div>
<div>
<div className="text-headline-md font-headline-md text-on-surface tracking-tight font-bold">SYNCHRONIZED</div>
<div className="text-label-code font-label-code text-xs text-on-surface-variant/80 mt-1">
              WAL Mode · 48.2 MB Store
            </div>
</div>
<div className="flex items-center justify-between mt-3 text-label-badge font-label-badge text-[11px] text-on-surface-variant/70">
<span>Checkpoint: <strong className="text-secondary font-mono font-normal">0.4ms</strong></span>
<span className="text-[#45D49A] font-mono">0 Corruption</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/70 rounded p-space-md flex flex-col justify-between transition-all">
<div className="flex items-center justify-between mb-2">
<span className="text-label-badge font-label-badge text-on-surface-variant/70 text-xs">TASK QUEUE (CELERY)</span>
<span className="w-2 h-2 rounded-full bg-[#FFB84D] shadow-[0_0_8px_rgba(255,184,77,0.6)]"></span>
</div>
<div>
<div className="text-headline-md font-headline-md text-on-surface tracking-tight font-bold">DRAINED</div>
<div className="text-label-code font-label-code text-xs text-on-surface-variant/80 mt-1">
              4 Concurrency · 0 Backlog
            </div>
</div>
<div className="flex items-center justify-between mt-3 text-label-badge font-label-badge text-[11px] text-on-surface-variant/70">
<span className="font-mono text-[#FFB84D]">Mem: 78%</span>
<span>Rate: <strong className="text-on-surface font-mono font-normal">12 tasks/m</strong></span>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/40 rounded p-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-outline-variant/30 gap-2">
<div>
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-on-surface font-semibold">Pre-flight Assessment Readiness Matrix</span>
<span className="px-2 py-0.5 rounded text-[10px] font-label-badge font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
                READY FOR ASSESSMENT (STAGE 1-5 CLEARED)
              </span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs mt-0.5">
              Automated authorization validation check targeting repository <strong className="text-primary font-mono font-medium">college-placement-v2.1</strong>
</p>
</div>
<div className="flex items-center gap-2 text-label-badge font-label-badge text-xs">
<span className="text-on-surface-variant/70">Subsystem Signature:</span>
<span className="font-mono text-secondary px-2 py-0.5 bg-surface-container-high rounded border border-outline-variant/30">ED25519-7F89A</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">

<div className="bg-surface-container border border-outline-variant/30 rounded p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-xs font-label-code mb-1">
<span className="text-on-surface-variant font-medium">AST Taint Engine</span>
<span className="text-[#45D49A] font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span>
                  PASSED
                </span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant/80">PySQL-01 dialect verified. Cross-file lexical taint graph ready.</p>
</div>
<div className="mt-2 text-[10px] font-label-badge text-secondary font-mono">v4.2.0 dialect loaded</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-xs font-label-code mb-1">
<span className="text-on-surface-variant font-medium">gVisor Sandbox</span>
<span className="text-[#45D49A] font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span>
                  PASSED
                </span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant/80">MicroVM jail isolated. Loopback network bound to port 8001.</p>
</div>
<div className="mt-2 text-[10px] font-label-badge text-secondary font-mono">Seccomp profile armed</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-xs font-label-code mb-1">
<span className="text-on-surface-variant font-medium">Evidence Store</span>
<span className="text-[#45D49A] font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span>
                  PASSED
                </span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant/80">SQLite WAL active. Cryptographic proof hashing enabled.</p>
</div>
<div className="mt-2 text-[10px] font-label-badge text-secondary font-mono">0 locks · 0 corrupted</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-xs font-label-code mb-1">
<span className="text-on-surface-variant font-medium">AI Reasoning Engine</span>
<span className="text-[#45D49A] font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">check_circle</span>
                  PASSED
                </span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant/80">Adversarial prompt injection filter enabled &amp; benchmarked.</p>
</div>
<div className="mt-2 text-[10px] font-label-badge text-secondary font-mono">Claude 3.5 Active</div>
</div>

<div className="bg-surface-container border border-outline-variant/30 rounded p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between text-xs font-label-code mb-1">
<span className="text-on-surface-variant font-medium">Dynamic Fuzzing</span>
<span className="text-[#FFB84D] font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-sm">warning</span>
                  WARNING
                </span>
</div>
<p className="text-[11px] font-body-sm text-on-surface-variant/80">Celery worker pool RAM usage at 78%. Non-blocking threshold.</p>
</div>
<div className="mt-2 text-[10px] font-label-badge text-[#FFB84D] font-mono">Auto-purge scheduled</div>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/40 rounded overflow-hidden">

<div className="p-space-md border-b border-outline-variant/30 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-on-surface font-semibold">Integration &amp; Service Registry</span>
<span className="text-label-badge font-label-badge text-xs px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface-variant">
              10 Services Active
            </span>
</div>

<div className="flex items-center flex-wrap gap-1 text-label-badge font-label-badge text-xs overflow-x-auto pb-1 lg:pb-0">
<button className="px-2.5 py-1 rounded bg-primary-container text-white font-semibold shadow-sm">All (10)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">AI Providers (2)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">Security Scanners (2)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">Data &amp; Storage (2)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">Graph &amp; Ontology (1)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">Background Workers (1)</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors">External Intel (2)</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-surface-container-lowest/70 border-b border-outline-variant/30 text-on-surface-variant/70 text-label-badge font-label-badge uppercase tracking-wider">
<th className="py-2.5 px-4 font-semibold">Service / Subsystem</th>
<th className="py-2.5 px-3 font-semibold">Category</th>
<th className="py-2.5 px-3 font-semibold">State</th>
<th className="py-2.5 px-3 font-semibold">Health &amp; Telemetry</th>
<th className="py-2.5 px-3 font-semibold">Last Heartbeat</th>
<th className="py-2.5 px-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-label-code">

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">api</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">Aegis Core Python API</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">FastAPI 0.110 · Internal Core Backend</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Core Engine</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">Port 8000 · 4.2ms RTT</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:38 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-sm">psychology</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">Anthropic Claude 3.5 Sonnet</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Primary Reasoning &amp; Patch Diffing</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">AI Provider</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">Token Latency 412ms · 99.9% Up</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:25:10 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Telemetry</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-sm">hub</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">OpenAI GPT-4o</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Secondary Verification Fallback</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">AI Provider</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/15 text-secondary border border-secondary/30">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    STANDBY
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">380ms Latency · Ready on failover</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:20:00 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Test Ping</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[#45D49A]">
<span className="material-symbols-outlined text-sm">grain</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">NetworkX Ontology Engine</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">In-Memory DiGraph AST Pipeline</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Graph &amp; Memory</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">1,420 Nodes · 1.8ms Query</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:39 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Dump Graph</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-sm">database</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">SQLite WAL Database</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Local Evidence &amp; Findings Persistence</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Data &amp; Storage</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">48.2MB Size · WAL 0.4ms</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:40 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Checkpoint</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-sm">rule</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">AST Taint Static Analyzer</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">PySQL &amp; Custom Lexer Ruleset</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Security Scanner</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">84.1% Rules Loaded · 0 Syntax Errors</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:12 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Reload Rules</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">layers</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">gVisor MicroVM Sandbox</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Dynamic Replay &amp; Exploit Verification</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Execution Sandbox</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">Port 8001 Isolated · Jail Locked</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:00 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Container Logs</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-[#FFB84D]">
<span className="material-symbols-outlined text-sm">reorder</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">Celery Task Worker</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Redis 7 In-Memory Async Worker Pool</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">Background Worker</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFB84D]"></span>
                    DEGRADED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-[#FFB84D]">Worker RAM 78% · 0 Deadlocks</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:26:35 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-[#FFB84D]/20 hover:bg-[#FFB84D]/30 border border-[#FFB84D]/40 text-[11px] text-[#FFB84D] transition-all">Purge Queue</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-sm">cloud_sync</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">NVD / NIST CVE API</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Upstream Vulnerability &amp; CPE Sync</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">External Intel</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#45D49A]"></span>
                    CONNECTED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/90">Last Delta: 34 CVEs synced</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:22:10 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Sync Now</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-3 px-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-sm">rss_feed</span>
</div>
<div>
<div className="text-on-surface font-semibold text-xs">PyPA Advisory Feed</div>
<div className="text-[11px] text-on-surface-variant/60 font-mono">Python Ecosystem Threat Data</div>
</div>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant">External Intel</td>
<td className="py-3 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFB84D]"></span>
                    RATE-LIMITED
                  </span>
</td>
<td className="py-3 px-3 font-mono text-[#FFB84D]">HTTP 429 · Backoff 120s</td>
<td className="py-3 px-3 font-mono text-on-surface-variant/70">14:18:42 UTC</td>
<td className="py-3 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Retry Key</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/40 rounded p-space-md">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
<div>
<span className="text-headline-sm font-headline-sm text-on-surface font-semibold">Service Dependency Architecture</span>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs mt-0.5">
              Live left-to-right topological propagation flow across workflow pipelines and storage fabrics
            </p>
</div>
<div className="flex items-center gap-3 text-label-badge font-label-badge text-xs">
<span className="flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span> Nominal Path
            </span>
<span className="flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-[#FFB84D]"></span> Rate Limiting
            </span>
<span className="flex items-center gap-1.5 text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Active Focus
            </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="flex flex-col gap-3">
<div className="text-label-badge font-label-badge text-xs text-on-surface-variant/70 uppercase tracking-wider pb-1 border-b border-outline-variant/20 flex items-center justify-between">
<span>1. Application Workflows</span>
<span className="font-mono text-primary-container text-[11px]">CLIENT LAYER</span>
</div>
<div className="space-y-2.5">
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between hover:border-secondary transition-all cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Authorized Security Scan</span>
</div>
<span className="material-symbols-outlined text-xs text-on-surface-variant">arrow_forward</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-secondary/60 shadow-[0_0_12px_rgba(85,199,232,0.15)] flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-xs font-label-code font-semibold text-white">AI Security Analyst</span>
</div>
<span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between hover:border-secondary transition-all cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Knowledge Graph Exploration</span>
</div>
<span className="material-symbols-outlined text-xs text-on-surface-variant">arrow_forward</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between hover:border-secondary transition-all cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Sandbox Validation Harness</span>
</div>
<span className="material-symbols-outlined text-xs text-on-surface-variant">arrow_forward</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between hover:border-secondary transition-all cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Audit &amp; Telemetry Export</span>
</div>
<span className="material-symbols-outlined text-xs text-on-surface-variant">arrow_forward</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="text-label-badge font-label-badge text-xs text-on-surface-variant/70 uppercase tracking-wider pb-1 border-b border-outline-variant/20 flex items-center justify-between">
<span>2. Platform Middleware</span>
<span className="font-mono text-secondary text-[11px]">KERNEL CORE</span>
</div>
<div className="space-y-2.5">
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">FastAPI Router Engine</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant/70">8000</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-[#FFB84D]/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FFB84D]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Celery Task Queue (Redis)</span>
</div>
<span className="text-[10px] font-mono text-[#FFB84D]">78% MEM</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">AST Taint Lexer Pipeline</span>
</div>
<span className="text-[10px] font-mono text-[#45D49A]">PASS</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">NetworkX DiGraph Memory</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant/70">1.8ms</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">gVisor Sandbox Agent</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant/70">8001</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="text-label-badge font-label-badge text-xs text-on-surface-variant/70 uppercase tracking-wider pb-1 border-b border-outline-variant/20 flex items-center justify-between">
<span>3. Storage &amp; Upstream Intel</span>
<span className="font-mono text-[#45D49A] text-[11px]">DATA STORE</span>
</div>
<div className="space-y-2.5">
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">SQLite Database (WAL)</span>
</div>
<span className="text-[10px] font-mono text-[#45D49A]">0.4ms</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-secondary/50 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">Anthropic Claude API</span>
</div>
<span className="text-[10px] font-mono text-secondary">412ms</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">gVisor Kernel Sandbox</span>
</div>
<span className="text-[10px] font-mono text-[#45D49A]">Jail Nom</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#45D49A]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">NVD CVE Stream Sync</span>
</div>
<span className="text-[10px] font-mono text-on-surface-variant/70">Synced</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-[#FFB84D]/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FFB84D]"></span>
<span className="text-xs font-label-code font-semibold text-on-surface">PyPA Advisory Feed</span>
</div>
<span className="text-[10px] font-mono text-[#FFB84D]">429 Backoff</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low border border-outline-variant/40 rounded overflow-hidden">

<div className="p-space-md border-b border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<span className="text-headline-sm font-headline-sm text-on-surface font-semibold">Live System Health Ledger</span>
<div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#45D49A]/10 border border-[#45D49A]/30 text-label-badge font-label-badge text-xs text-[#45D49A]">
<span className="material-symbols-outlined text-sm">verified</span>
<span>ED25519 SIGNATURE VERIFIED</span>
</div>
</div>
<div className="flex items-center gap-2 text-label-code font-label-code text-xs">
<span className="text-on-surface-variant/60">Ledger Hash:</span>
<code className="text-secondary bg-surface-container px-2 py-0.5 rounded font-mono border border-outline-variant/30">0x8a92...e41f</code>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-surface-container-lowest/70 border-b border-outline-variant/30 text-on-surface-variant/70 text-label-badge font-label-badge uppercase tracking-wider">
<th className="py-2.5 px-4 font-semibold">Timestamp</th>
<th className="py-2.5 px-3 font-semibold">Subsystem</th>
<th className="py-2.5 px-3 font-semibold">Severity</th>
<th className="py-2.5 px-3 font-semibold">Code</th>
<th className="py-2.5 px-4 font-semibold">Sanitized Diagnostic Event</th>
<th className="py-2.5 px-4 font-semibold text-right">Payload</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-label-code">

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant/80">14:26:32 UTC</td>
<td className="py-2.5 px-3 text-on-surface">PyPA Feed Sync</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30">WARN</span>
</td>
<td className="py-2.5 px-3 font-mono text-secondary">INTEL-SYNC-429</td>
<td className="py-2.5 px-4 text-on-surface-variant font-mono">
                  Upstream PyPA returned HTTP 429 Too Many Requests. Exponential backoff engaged: next retry in 120s.
                </td>
<td className="py-2.5 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect Payload</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant/80">14:25:50 UTC</td>
<td className="py-2.5 px-3 text-on-surface">Celery Worker</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFB84D]/15 text-[#FFB84D] border border-[#FFB84D]/30">WARN</span>
</td>
<td className="py-2.5 px-3 font-mono text-secondary">WORKER-MEM-HIGH</td>
<td className="py-2.5 px-4 text-on-surface-variant font-mono">
                  Redis worker thread PID:8912 memory footprint at 78.4%. Scheduled garbage collection sweep queued.
                </td>
<td className="py-2.5 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect Payload</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant/80">14:24:12 UTC</td>
<td className="py-2.5 px-3 text-on-surface">SQLite Store</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">INFO</span>
</td>
<td className="py-2.5 px-3 font-mono text-[#45D49A]">WAL-CHECKPOINT-OK</td>
<td className="py-2.5 px-4 text-on-surface-variant font-mono">
                  Database checkpoint flush completed cleanly in 0.41ms. 142 pages committed to disk. 0 corruption signals.
                </td>
<td className="py-2.5 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect Payload</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant/80">14:22:04 UTC</td>
<td className="py-2.5 px-3 text-on-surface">Claude 3.5 Engine</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">INFO</span>
</td>
<td className="py-2.5 px-3 font-mono text-[#45D49A]">LLM-INFERENCE-NOMINAL</td>
<td className="py-2.5 px-4 text-on-surface-variant font-mono">
                  Completed AST patch generation request session ID: `ses_882b`. Response verified against injection guard.
                </td>
<td className="py-2.5 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect Payload</button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/30 transition-colors">
<td className="py-2.5 px-4 font-mono text-on-surface-variant/80">14:20:18 UTC</td>
<td className="py-2.5 px-3 text-on-surface">gVisor Sandbox</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#45D49A]/15 text-[#45D49A] border border-[#45D49A]/30">INFO</span>
</td>
<td className="py-2.5 px-3 font-mono text-[#45D49A]">SANDBOX-CONTAINER-UP</td>
<td className="py-2.5 px-4 text-on-surface-variant font-mono">
                  MicroVM container instance `runsc-jail-90` initialized. Network egress rules locked to local loopback 127.0.0.1.
                </td>
<td className="py-2.5 px-4 text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-[11px] text-on-surface-variant hover:text-primary transition-all">Inspect Payload</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

    </div>
  );
};

export default IntegrationsPage;
