import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getAuditLogs) {
          const res = await api.getAuditLogs();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load AccountPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">




<section className="space-y-4">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-outline-variant/30 pb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-label-badge font-label-badge text-primary-container text-[11px] uppercase tracking-wider bg-primary-container/10 px-2 py-0.5 rounded border border-primary-container/30">
                Active Tactical Session
              </span>
<span className="text-label-code font-label-code text-on-surface-variant/70 text-[11px]">
                Node ID: sec-wkstn-442-va
              </span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
              My Workspace
            </h1>
<p className="text-body-md font-body-md text-on-surface-variant mt-0.5">
              Personal security queue, attributed activity chronology, and workstation preferences
            </p>
</div>

<div className="flex items-center gap-2 self-start md:self-auto bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/40">
<span className="material-symbols-outlined text-[16px] text-secondary" >radar</span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant">Active Target:</span>
<span className="text-label-code font-label-code text-xs text-secondary font-semibold">college-placement-v2.1</span>
<span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse ml-1"></span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-4 p-4 rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary-container/5 blur-2xl pointer-events-none"></div>
<div className="flex items-start gap-3.5">

<div className="relative">
<div className="w-14 h-14 rounded-lg bg-surface-container-high border-2 border-primary-container flex items-center justify-center text-primary font-headline-md font-bold text-lg crimson-glow">
                  KJ
                </div>
<div className="absolute -bottom-1 -right-1 bg-surface-container-lowest p-0.5 rounded">
<span className="material-symbols-outlined text-[14px] text-secondary" >token</span>
</div>
</div>

<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-on-surface">Kevin John</span>
<span className="text-label-badge font-label-badge text-[10px] text-primary bg-primary-container/15 px-1.5 py-0.2 rounded border border-primary-container/30">LEAD</span>
</div>
<p className="text-label-code font-label-code text-xs text-on-surface-variant">
                  Handle: <span className="text-primary font-semibold">Analyst_442</span> · Tier-1 Operator
                </p>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 text-[11px] mt-0.5">
                  UID: <span className="font-label-code text-on-surface">usr-8902-secops</span>
</p>
</div>
</div>

<div className="mt-4 pt-3 border-t border-outline-variant/20 flex flex-col gap-1.5 text-label-code font-label-code text-[11px]">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-secondary" >key</span>
                  FIPS-140 Hardware Key:
                </span>
<span className="text-secondary font-medium">YubiKey 5C NFC (Enrolled)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant" >fingerprint</span>
                  Session ID:
                </span>
<span className="text-on-surface font-mono text-[10px]">sess-894e-20250518</span>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-primary-container/50 transition-colors flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="text-label-code font-label-code text-xs text-on-surface-variant">Assigned Security Queue</span>
<span className="material-symbols-outlined text-[18px] text-primary" >assignment_late</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span>4 Findings</span>
<span className="text-label-badge font-label-badge text-[10px] text-primary-container font-semibold">ACTION REQ</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 text-[11px]">
                  2 Critical · 1 High · 1 Under gVisor Replay
                </p>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
<div className="bg-primary-container w-1/2"></div>
<div className="bg-tertiary-container w-1/4"></div>
<div className="bg-secondary w-1/4"></div>
</div>
</div>

<div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-tertiary-container/50 transition-colors flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="text-label-code font-label-code text-xs text-on-surface-variant">Awaiting Dual-Signoff</span>
<span className="material-symbols-outlined text-[18px] text-tertiary" >draw</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span>2 Patches</span>
<span className="text-label-badge font-label-badge text-[10px] text-tertiary bg-tertiary/10 px-1.5 py-0.2 rounded border border-tertiary/30">M-OF-N PENDING</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 text-[11px] truncate">
                  Dual cryptographic sign-off for #P-8902 &amp; #P-2150
                </p>
</div>
<div className="flex items-center gap-1.5 text-label-code font-label-code text-[10px] text-on-surface-variant">
<span className="text-secondary font-medium">1 of 2 signatures collected</span>
<span className="text-outline-variant">·</span>
<span className="text-tertiary">Requires Key Touch</span>
</div>
</div>

<div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-secondary/50 transition-colors flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="text-label-code font-label-code text-xs text-on-surface-variant">Recent Verifications</span>
<span className="material-symbols-outlined text-[18px] text-secondary" >verified</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span>14 Cleared</span>
<span className="text-label-badge font-label-badge text-[10px] text-secondary bg-secondary/10 px-1.5 py-0.2 rounded border border-secondary/30">PASS 100%</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 text-[11px]">
                  Past 7 days across test fixtures &amp; AST suites
                </p>
</div>
<div className="flex items-center justify-between text-label-code font-label-code text-[10px] text-on-surface-variant">
<span>0 Regressions reported</span>
<span className="text-secondary">F1 Metric: 0.929</span>
</div>
</div>

<div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-primary-container/50 transition-colors flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="text-label-code font-label-code text-xs text-on-surface-variant">Unread Security Alerts</span>
<span className="material-symbols-outlined text-[18px] text-primary-container animate-pulse" >notification_important</span>
</div>
<div className="my-2">
<div className="text-headline-md font-headline-md text-on-surface flex items-baseline gap-2">
<span>3 Alerts</span>
<span className="text-label-badge font-label-badge text-[10px] text-primary-container bg-primary-container/15 px-1.5 py-0.2 rounded border border-primary-container/30">1 KEV CRITICAL</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant/80 text-[11px] truncate">
                  1 KEV exploit match · 1 sandbox drift · 1 worker mem
                </p>
</div>
<div className="flex items-center gap-1.5 text-label-code font-label-code text-[10px] text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span>Immediate triage advised</span>
</div>
</div>
</div>
</div>
</section>



<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">



<div className="lg:col-span-8 space-y-6">

<div className="rounded-lg bg-surface-container-low border border-outline-variant/40 p-space-md">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary" >task_alt</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface">Assigned Security Queue &amp; Priority Actions</h2>
</div>

<div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded border border-outline-variant/30 text-label-code font-label-code text-xs">
<button className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-medium border border-outline-variant/40">
                  All (4)
                </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                  Critical (2)
                </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                  Awaiting Sign-off (1)
                </button>
<button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors">
                  Sandbox Pending (1)
                </button>
</div>
</div>

<div className="divide-y divide-outline-variant/20 mt-1">

<div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 group">
<div className="space-y-1.5 flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container/60 text-primary-fixed text-label-badge font-label-badge text-[10px]">
                      SEV 9.1 CRITICAL
                    </span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant">CWE-89</span>
<span className="text-outline-variant">·</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold truncate">
                      TC-8902 / FND-8902: Unparameterized PyMySQL Injection
                    </span>
</div>
<div className="flex flex-wrap items-center gap-3 text-label-code font-label-code text-xs text-on-surface-variant">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<span className="material-symbols-outlined text-[14px]" >code</span>
                      search.py:42
                    </span>
<span className="text-outline-variant">·</span>
<span className="text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" >inventory_2</span>
                      Sandbox Patch #P-8902 Ready for Dual-Signature
                    </span>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-auto shrink-0">
<span className="text-label-badge font-label-badge text-[10px] text-secondary bg-secondary-container/20 px-2 py-1 rounded border border-secondary/30">
                    Dual-Sign: 1/2
                  </span>
<button className="px-3 py-1.5 rounded bg-primary-container hover:bg-tertiary-container text-on-primary-container text-label-code font-label-code font-semibold text-xs tracking-wider transition-colors crimson-glow-strong flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]" >rate_review</span>
<span>Review Patch &amp; Sign</span>
</button>
</div>
</div>

<div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 group">
<div className="space-y-1.5 flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary-container/60 text-tertiary text-label-badge font-label-badge text-[10px]">
                      SEV 8.8 HIGH
                    </span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant">CWE-502</span>
<span className="text-outline-variant">·</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold truncate">
                      TC-5021 / FND-5021: Celery Broker Insecure Deserialization
                    </span>
</div>
<div className="flex flex-wrap items-center gap-3 text-label-code font-label-code text-xs text-on-surface-variant">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<span className="material-symbols-outlined text-[14px]" >dns</span>
                      tasks.worker_broker:118
                    </span>
<span className="text-outline-variant">·</span>
<span className="text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" >shield</span>
                      Compensating eBPF Guard Active
                    </span>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-auto shrink-0">
<button className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-code font-label-code text-xs border border-outline-variant/40 transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary" >policy</span>
<span>Inspect eBPF Rule</span>
</button>
</div>
</div>

<div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 group">
<div className="space-y-1.5 flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/60 text-on-surface-variant text-label-badge font-label-badge text-[10px]">
                      SEV 7.2 MEDIUM
                    </span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant">CWE-798</span>
<span className="text-outline-variant">·</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold truncate">
                      TC-7988 / FND-7988: Hardcoded JWT Secret in Test Mock
                    </span>
</div>
<div className="flex flex-wrap items-center gap-3 text-label-code font-label-code text-xs text-on-surface-variant">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<span className="material-symbols-outlined text-[14px]" >biotech</span>
                      tests/test_auth_mock.py:19
                    </span>
<span className="text-outline-variant">·</span>
<span className="text-on-surface-variant">Status: Triage Required</span>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-auto shrink-0">
<button className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-code font-label-code text-xs border border-outline-variant/40 transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-on-surface-variant" >account_tree</span>
<span>Verify AST Context</span>
</button>
</div>
</div>

<div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 group">
<div className="space-y-1.5 flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 border border-secondary-container/50 text-secondary text-label-badge font-label-badge text-[10px]">
                      COMPLIANCE AUDIT
                    </span>
<span className="text-label-code font-label-code text-xs text-on-surface-variant">ASVS v4.0.3 L2</span>
<span className="text-outline-variant">·</span>
<span className="text-label-code font-label-code text-xs text-on-surface font-semibold truncate">
                      REP-2025-0518: Q2 ASVS Level 2 Regulatory Audit Manifest
                    </span>
</div>
<div className="flex flex-wrap items-center gap-3 text-label-code font-label-code text-xs text-on-surface-variant">
<span className="flex items-center gap-1 text-on-surface-variant/80">
<span className="material-symbols-outlined text-[14px]" >assignment</span>
                      Controls Cleared: 48/52
                    </span>
<span className="text-outline-variant">·</span>
<span className="text-tertiary">Status: Pending Operator Attestation</span>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-auto shrink-0">
<button className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-secondary text-label-code font-label-code text-xs border border-outline-variant/40 transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]" >verified_user</span>
<span>Attest &amp; Export</span>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary" >history</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Recently Accessed Security Resources</h3>
</div>
<span className="text-label-code font-label-code text-xs text-on-surface-variant/70">Session Context: college-placement-v2.1</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<a className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-secondary/50 transition-all group flex items-start gap-3" href="#kg-path-3">
<div className="p-2 rounded bg-surface-container-high text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]" >hub</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-label-code font-label-code text-xs font-semibold text-on-surface group-hover:text-secondary transition-colors truncate">
                    Knowledge Graph / Exploit Path #3
                  </div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-[11px] truncate mt-0.5">
                    Direct Ingress → Controller → FERPA PII Table
                  </p>
<span className="text-label-badge font-label-badge text-[9px] text-on-surface-variant/60 block mt-1">Updated 18m ago</span>
</div>
</a>

<a className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-primary-container/50 transition-all group flex items-start gap-3" href="#gvisor-8001">
<div className="p-2 rounded bg-surface-container-high text-primary-container group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]" >deployed_code</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-label-code font-label-code text-xs font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                    Sandbox Container #gVisor-8001
                  </div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-[11px] truncate mt-0.5">
                    MicroVM execution trace · Port 8001
                  </p>
<span className="text-label-badge font-label-badge text-[9px] text-secondary block mt-1">State: Active Replay</span>
</div>
</a>

<a className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-secondary/50 transition-all group flex items-start gap-3" href="#bench-lab">
<div className="p-2 rounded bg-surface-container-high text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]" >science</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-label-code font-label-code text-xs font-semibold text-on-surface group-hover:text-secondary transition-colors truncate">
                    Benchmark Lab / SEC-BENCH-COLLEGE-V2.1
                  </div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-[11px] truncate mt-0.5">
                    120 test cases · Verified F1: 0.929
                  </p>
<span className="text-label-badge font-label-badge text-[9px] text-on-surface-variant/60 block mt-1">Completed 1h ago</span>
</div>
</a>

<a className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 hover:border-primary-container/50 transition-all group flex items-start gap-3" href="#threat-intel">
<div className="p-2 rounded bg-surface-container-high text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]" >bug_report</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-label-code font-label-code text-xs font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                    Threat Intel / CVE-2024-34069
                  </div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-[11px] truncate mt-0.5">
                    PyMySQL format string boundary escape
                  </p>
<span className="text-label-badge font-label-badge text-[9px] text-primary-container block mt-1">KEV Flagged (CISA)</span>
</div>
</a>
</div>
</div>

<div className="rounded-lg bg-surface-container-low border border-outline-variant/40 p-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-on-surface" >timeline</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Personal Activity Chronology</h3>
</div>
<div className="flex items-center gap-2 text-label-code font-label-code text-[11px] text-on-surface-variant">
<span>Attributed: <strong className="text-primary">Analyst_442</strong></span>
<span className="text-outline-variant">·</span>
<span className="text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" >lock</span>
                  Merkle-Chained
                </span>
</div>
</div>

<div className="relative pl-6 pt-4 space-y-6 before:absolute before:left-[11px] before:top-5 before:bottom-3 before:w-[2px] before:bg-outline-variant/30">

<div className="relative group">
<div className="absolute -left-[19px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-primary-container group-hover:scale-125 transition-transform"></div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-label-code font-label-code text-xs text-on-surface-variant font-semibold">14:48:02 UTC</span>
<span className="text-label-badge font-label-badge text-[9px] px-1.5 py-0.2 rounded bg-primary-container/20 text-primary-fixed border border-primary-container/40">SANDBOX_PROMOTE</span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/60 font-mono">sig: ed25519:7b0f...3a91</span>
</div>
<p className="text-body-md font-body-md text-on-surface text-sm">
                    Promoted Patch <strong className="font-label-code text-primary">#P-8902</strong> to gVisor Sandbox (MicroVM isolation test passed without capability leak).
                  </p>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[19px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-secondary group-hover:scale-125 transition-transform"></div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-label-code font-label-code text-xs text-on-surface-variant font-semibold">14:10:22 UTC</span>
<span className="text-label-badge font-label-badge text-[9px] px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary border border-secondary/40">CONFIG_UPDATE</span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/60 font-mono">sig: sha256:4f8e...921a</span>
</div>
<p className="text-body-md font-body-md text-on-surface text-sm">
                    Updated Global Security Config (<code className="font-label-code text-xs text-secondary bg-surface-container-high px-1 py-0.5 rounded">verify.evidence_req -&gt; STRICT_MANDATORY</code>).
                  </p>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[19px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-outline group-hover:scale-125 transition-transform"></div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-label-code font-label-code text-xs text-on-surface-variant font-semibold">13:45:10 UTC</span>
<span className="text-label-badge font-label-badge text-[9px] px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/40">SCAN_TRIGGER</span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/60 font-mono">sig: sha256:d894...2b01</span>
</div>
<p className="text-body-md font-body-md text-on-surface text-sm">
                    Triggered Authorized Scan <span className="font-label-code text-on-surface font-semibold">SCN-8092</span> on cluster target <span className="text-secondary font-label-code">college-placement-v2.1</span>.
                  </p>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[19px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-primary group-hover:scale-125 transition-transform"></div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-label-code font-label-code text-xs text-on-surface-variant font-semibold">11:20:18 UTC</span>
<span className="text-label-badge font-label-badge text-[9px] px-1.5 py-0.2 rounded bg-primary-container/20 text-primary-fixed border border-primary-container/40">AST_TAINT_CONFIRM</span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/60 font-mono">sig: ed25519:8a92...e41f</span>
</div>
<p className="text-body-md font-body-md text-on-surface text-sm">
                    Confirmed AST taint trace in <code className="font-label-code text-xs text-on-surface bg-surface-container-high px-1 py-0.5 rounded">/api/v1/students/search.py</code> at line 42.
                  </p>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[19px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-secondary group-hover:scale-125 transition-transform"></div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-label-code font-label-code text-xs text-on-surface-variant font-semibold">Yesterday 17:30 UTC</span>
<span className="text-label-badge font-label-badge text-[9px] px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary border border-secondary/40">COMPLIANCE_ATTEST</span>
</div>
<p className="text-body-md font-body-md text-on-surface text-sm">
                    Verified <strong className="text-on-surface">ASVS 4.0.3 Section 5</strong> (Validation &amp; Encoding Controls) across all staging controllers.
                  </p>
</div>
</div>
</div>
</div>
</div>



<div className="lg:col-span-4 space-y-6">

<div className="rounded-lg bg-surface-container-low border border-outline-variant/40 p-space-md">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary" >notifications</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Operational Alerts</h3>
</div>
<button className="text-label-code font-label-code text-[11px] text-secondary hover:underline">
                Mark All Read
              </button>
</div>

<div className="space-y-3 mt-3">

<div className="p-3 rounded bg-surface-container-lowest border-l-2 border-primary-container border-y border-r border-outline-variant/30 space-y-1">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-[10px] text-primary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                    CRITICAL EXPLOIT LINKAGE
                  </span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/70">12m ago</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface text-xs leading-relaxed">
<span className="font-label-code text-primary font-semibold">CVE-2024-34069</span> matching <code className="font-label-code text-[11px] bg-surface-container-high px-1 rounded">PyMySQL 1.0.2</code> in active lockfile <code className="font-label-code text-[11px] text-on-surface-variant">requirements.txt</code>.
                </p>
</div>

<div className="p-3 rounded bg-surface-container-lowest border-l-2 border-tertiary-container border-y border-r border-outline-variant/30 space-y-1">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-[10px] text-tertiary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                    SANDBOX DUAL-SIGNOFF REQ
                  </span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/70">34m ago</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface text-xs leading-relaxed">
                  Patch <span className="font-label-code text-on-surface font-semibold">#P-8902</span> requires second operator signature before Git push to release pipeline.
                </p>
</div>

<div className="p-3 rounded bg-surface-container-lowest border-l-2 border-secondary border-y border-r border-outline-variant/30 space-y-1">
<div className="flex items-center justify-between">
<span className="text-label-badge font-label-badge text-[10px] text-secondary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    BENCHMARK COMPLETE
                  </span>
<span className="text-label-code font-label-code text-[10px] text-on-surface-variant/70">1h ago</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface text-xs leading-relaxed">
                  Run <span className="font-label-code text-secondary">RUN-2025-0518-EVAL42</span> completed with F1 0.929 across 120 regression vectors.
                </p>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container-low border border-outline-variant/40 p-space-md space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-on-surface" >tune</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Workstation Preferences</h3>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-on-surface-variant/70">LOCAL OPERATOR</span>
</div>

<div className="space-y-3.5 text-label-code font-label-code text-xs">

<div className="space-y-1">
<label className="text-on-surface-variant block text-[11px]">Default Assessment Scope</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-xs text-on-surface font-label-code focus:border-primary-container focus:ring-0">
<option >college-placement-v2.1 (Local Fixture)</option>
<option>fintech-core-v3.0 (Staging)</option>
<option>identity-provider-v1.4 (Sandbox)</option>
</select>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<span className="text-on-surface font-medium text-xs">Telemetry Verbosity</span>
<span className="text-[10px] text-on-surface-variant/70">Verbose AST &amp; Trace Logs</span>
</div>

<button className="w-10 h-5 bg-primary-container rounded-full p-0.5 transition-colors relative flex items-center justify-end" type="button">
<div className="w-4 h-4 rounded-full bg-on-primary-container shadow-sm"></div>
</button>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex flex-col">
<span className="text-on-surface font-medium text-xs">Sandbox Auto-Rollback</span>
<span className="text-[10px] text-on-surface-variant/70">Rollback container on warning</span>
</div>

<button className="w-10 h-5 bg-primary-container rounded-full p-0.5 transition-colors relative flex items-center justify-end" type="button">
<div className="w-4 h-4 rounded-full bg-on-primary-container shadow-sm"></div>
</button>
</div>

<div className="space-y-1 pt-1">
<label className="text-on-surface-variant block text-[11px]">Hardware Attestation Re-Prompt</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-2.5 py-1.5 text-xs text-on-surface font-label-code focus:border-primary-container focus:ring-0">
<option>Every 15 Minutes</option>
<option >Every 60 Minutes</option>
<option>Every 4 Hours</option>
<option>On Destructive Operations Only</option>
</select>
</div>

<div className="space-y-1.5 pt-1">
<label className="text-on-surface-variant block text-[11px]">Theme Contrast Profile</label>
<div className="grid grid-cols-2 gap-2 text-label-code text-[11px]">
<div className="p-2 rounded bg-surface-container-high border-2 border-primary-container flex items-center justify-between">
<span className="text-on-surface font-semibold">Obsidian Crimson</span>
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
</div>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between opacity-60">
<span className="text-on-surface-variant">Cyber Cyan HUD</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full py-2 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-code font-semibold border border-outline-variant/40 transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary" >save</span>
<span>Save Preferences</span>
</button>
<p className="text-center text-[10px] text-on-surface-variant/60 font-label-code mt-1.5">
                  Verified local persistence (IndexedDB encrypted)
                </p>
</div>
</div>
</div>

<div className="rounded-lg bg-surface-container-low border border-outline-variant/40 p-space-md space-y-3.5">
<div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary" >encrypted</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Account Security &amp; Provenance</h3>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-secondary bg-secondary-container/20 px-1.5 py-0.2 rounded border border-secondary/30">
                ACTIVE
              </span>
</div>

<div className="space-y-2.5 text-label-code font-label-code text-xs">
<div>
<span className="text-on-surface-variant text-[11px] block">Current Auth State:</span>
<span className="text-on-surface font-semibold flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-secondary" >verified_user</span>
                  WebAuthn Hardware Authenticated (YubiKey 5C NFC)
                </span>
</div>
<div className="pt-1 border-t border-outline-variant/20">
<span className="text-on-surface-variant text-[11px] block">Cryptographic Token Digest:</span>
<span className="font-mono text-secondary text-[11px] break-all">ed25519:7b0f8821ec390a...3a91</span>
</div>
<div className="pt-1 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="text-on-surface-variant text-[11px] block">Egress IP:</span>
<span className="text-on-surface text-[11px]">10.0.4.12 (Internal WireGuard VPN)</span>
</div>
<span className="material-symbols-outlined text-[16px] text-secondary" >vpn_lock</span>
</div>
<div className="pt-1 border-t border-outline-variant/20 flex items-center justify-between">
<div>
<span className="text-on-surface-variant text-[11px] block">Session TTL:</span>
<span className="text-primary font-semibold text-[11px]">03:42:18 remaining</span>
</div>
<span className="text-label-badge font-label-badge text-[9px] bg-primary-container/20 text-primary-fixed px-1.5 py-0.5 rounded">
                  AUTO-LOCK
                </span>
</div>
</div>

<div className="pt-2 space-y-2">
<button className="w-full py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface text-label-code font-medium text-xs border border-outline-variant/40 transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant" >key_off</span>
<span>Rotate Hardware Session Keys</span>
</button>
<button className="w-full py-1.5 rounded bg-error-container/20 hover:bg-error-container/40 text-error text-label-code font-medium text-xs border border-outline-variant/40 transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[14px]" >logout</span>
<span>Revoke Other Sessions</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default AccountPage;
