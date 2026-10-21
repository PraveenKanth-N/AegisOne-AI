import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AccessControlPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getAccessControl) {
          const res = await api.getAccessControl();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load AccessControlPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">




<div className="relative rounded-lg p-6 bg-surface-container-lowest border border-outline-variant/30 overflow-hidden">

<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-error-container/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-label-badge font-label-badge bg-primary-container/10 border border-primary-container/40 text-primary uppercase tracking-widest">
                RBAC ENFORCEMENT
              </span>
<span className="text-outline-variant">·</span>
<span className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">
                PRIVILEGED OPERATIONS GOVERNANCE
              </span>
<span className="text-outline-variant">·</span>
<span className="text-label-badge font-label-badge text-secondary uppercase tracking-wider">
                ZERO-TRUST AUDIT TRAIL
              </span>
</div>
<h1 className="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
              User, Roles &amp; Access Control Administration
            </h1>
<p className="text-body-md font-body-md text-on-surface-variant max-w-4xl">
              Manage verified operator identities, granular RBAC permissions, multi-party authorization thresholds, and privileged execution boundaries for <span className="text-on-surface font-label-code text-body-sm font-semibold text-secondary">college-placement-v2.1</span> defense systems.
            </p>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="px-3.5 py-2 rounded border border-outline-variant/40 bg-surface-container-low hover:border-secondary hover:text-secondary text-label-code font-label-code text-on-surface-variant transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-base">data_object</span>
<span>Export IAM Matrix (JSON)</span>
</button>
<button className="px-3.5 py-2 rounded border border-outline-variant/40 bg-surface-container-low hover:border-outline text-label-code font-label-code text-on-surface transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-base">policy</span>
<span>Audit Access History</span>
</button>
<button className="px-4 py-2 rounded bg-primary-container text-on-primary-fixed text-label-code font-label-code font-bold hover:shadow-[0_0_18px_rgba(242,13,50,0.5)] transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-base">person_add</span>
<span>+ Invite User</span>
</button>
</div>
</div>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded p-4 bg-surface-container-lowest border border-outline-variant/30 relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="text-label-badge font-label-badge uppercase tracking-wider">Registered Accounts</span>
<span className="material-symbols-outlined text-secondary text-base">manage_accounts</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md text-on-surface font-bold">14</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Operators enrolled</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-label-badge font-label-badge text-on-surface-variant">
<span className="text-secondary">11 Active</span>
<span>2 Pending MFA</span>
<span className="text-primary-container">1 Suspended</span>
</div>
</div>

<div className="rounded p-4 bg-surface-container-lowest border border-outline-variant/30 relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="text-label-badge font-label-badge uppercase tracking-wider">Privileged Roles</span>
<span className="material-symbols-outlined text-primary text-base">admin_panel_settings</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md text-on-surface font-bold">4 Elevated</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Tiers defined</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-label-badge font-label-badge text-on-surface-variant truncate">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface">SuperAdmin</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface">SecOps</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface">Agent</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface">Auditor</span>
</div>
</div>

<div className="rounded p-4 bg-surface-container-lowest border border-primary-container/30 bg-primary-container/5 relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="text-label-badge font-label-badge uppercase tracking-wider text-primary">Access Reviews Due</span>
<span className="material-symbols-outlined text-primary-container text-base">notification_important</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md text-primary font-bold">2 Scheduled</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Action Required</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-label-badge font-label-badge">
<span className="text-on-surface font-label-code">Analyst_108 <span className="text-error">(Token)</span></span>
<span className="text-on-surface font-label-code">Dev_Lead_04 <span className="text-error">(Drift)</span></span>
</div>
</div>

<div className="rounded p-4 bg-surface-container-lowest border border-outline-variant/30 relative overflow-hidden">
<div className="flex items-center justify-between text-on-surface-variant mb-2">
<span className="text-label-badge font-label-badge uppercase tracking-wider">Recent Access Changes</span>
<span className="material-symbols-outlined text-secondary text-base">published_with_changes</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-headline-md font-headline-md text-on-surface font-bold">18 Events</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Rolling 24h</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-label-badge font-label-badge text-on-surface-variant">
<span className="text-secondary font-medium">3 Escalations</span>
<span className="text-primary-container">1 Revoked</span>
<span>14 Sign-ins</span>
</div>
</div>
</div>



<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">



<div className="lg:col-span-8 space-y-6">

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 overflow-hidden">

<div className="p-4 border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-3 bg-surface-container-low/50">
<div className="flex flex-wrap items-center gap-3 flex-1">

<div className="relative min-w-[240px] flex-1 max-w-sm">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-base">search</span>
<input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-label-code font-label-code text-on-surface focus:outline-none focus:border-primary-container placeholder:text-on-surface-variant/40 text-xs" placeholder="Filter by operator handle, UID, or scope..." type="text"/>
</div>

<select className="px-2.5 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-label-code font-label-code text-on-surface text-xs focus:border-primary-container focus:outline-none">
<option>Role: All Tiers</option>
<option>SuperAdmin</option>
<option>SecOps Lead</option>
<option>Security Analyst</option>
<option>Developer</option>
<option>Auditor</option>
</select>

<select className="px-2.5 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-label-code font-label-code text-on-surface text-xs focus:border-primary-container focus:outline-none">
<option>Status: Any</option>
<option>Active</option>
<option>Pending MFA</option>
<option>Suspended</option>
</select>

<select className="px-2.5 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded text-label-code font-label-code text-on-surface text-xs focus:border-primary-container focus:outline-none">
<option>Auth: WebAuthn / FIDO2</option>
<option>OIDC / Okta SSO</option>
<option>Ed25519 Token</option>
</select>
</div>
<div className="flex items-center gap-2 text-label-badge font-label-badge text-on-surface-variant">
<span>Showing 6 of 14</span>
</div>
</div>

<div className="overflow-x-auto custom-scroll">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider bg-surface-container-lowest">
<th className="py-3 px-4 font-semibold">Operator / Identity</th>
<th className="py-3 px-3 font-semibold">Assigned Role</th>
<th className="py-3 px-3 font-semibold">Security State</th>
<th className="py-3 px-3 font-semibold">Authorized Scopes</th>
<th className="py-3 px-3 font-semibold">Last Sign-in</th>
<th className="py-3 px-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-body-sm text-xs">

<tr className="bg-surface-container-high/40 border-l-2 border-primary-container hover:bg-surface-container-high/60 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 border border-primary-container/60 flex items-center justify-center font-label-code text-primary font-bold">
                          KJ
                        </div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface flex items-center gap-1.5">
                            Analyst_442
                            <span className="px-1.5 py-0.2 rounded text-[10px] bg-primary-container/20 text-primary border border-primary-container/40">FOCUSED</span>
</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Kevin John · uid:usr-8902</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 font-label-code font-medium text-primary">
<span className="material-symbols-outlined text-sm">shield</span>
                        SecOps Lead &amp; Admin
                      </span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        ACTIVE · WebAuthn HW
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface">Global (All 16 Nodes)</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="text-secondary font-medium">14:48 UTC</span> (Active)
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-fixed font-label-code text-[11px] font-bold hover:bg-primary transition-colors">
                        Inspect
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-sm">smart_toy</span>
</div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface">Aegis_Copilot_Daemon</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Worker Principal · id:spn-ast-40</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="font-label-code text-on-surface-variant text-[11px]">Autonomous Remediation Worker</span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        CONSTRAINED LAB ONLY
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface">gVisor Sandbox 8001</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
                      14:52 UTC (AST Engine)
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2 py-1 rounded border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code text-[11px]">
                        Edit
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-on-surface font-label-code text-xs">
                          ER
                        </div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface">Dev_Elena_R</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Elena Rostova · uid:usr-4109</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="font-label-code text-on-surface-variant text-[11px]">Security Developer</span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        ACTIVE · FIDO2
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface">college-placement-v2.1</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
                      Yesterday 18:20 UTC
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2 py-1 rounded border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code text-[11px]">
                        Edit
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-on-surface font-label-code text-xs">
                          AV
                        </div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface">Auditor_Vance</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Arthur Vance · uid:usr-6391</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="font-label-code text-on-surface-variant text-[11px]">Compliance Auditor</span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        ACTIVE · SSO Okta
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface">Read-Only ASVS / Reports</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
                      3 days ago
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2 py-1 rounded border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code text-[11px]">
                        Edit
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-on-surface font-label-code text-xs">
                          IM
                        </div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface">Intern_Marcus</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Marcus Vance · uid:usr-7720</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="font-label-code text-on-surface-variant text-[11px]">Triage Analyst</span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-tertiary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        PENDING MFA ATTESTATION
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="px-1.5 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-on-surface">Read-Only Findings</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
                      Never
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2 py-1 rounded border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code text-[11px]">
                        Edit
                      </button>
</td>
</tr>

<tr className="hover:bg-surface-container-high/20 transition-colors opacity-70">
<td className="py-3.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-error-container/20 border border-error-container/40 flex items-center justify-center text-primary font-label-code text-xs">
                          LW
                        </div>
<div>
<div className="font-headline-sm text-sm font-semibold text-on-surface line-through">Legacy_Worker_09</div>
<div className="text-label-code text-on-surface-variant text-[11px]">Batch Pipe · id:spn-old-09</div>
</div>
</div>
</td>
<td className="py-3.5 px-3">
<span className="font-label-code text-on-surface-variant text-[11px]">Legacy Ingestion</span>
</td>
<td className="py-3.5 px-3">
<div className="flex items-center gap-1.5 font-label-code text-[11px] text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                        SUSPENDED · Token Expired
                      </div>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
<span className="text-primary-container">Revoked</span>
</td>
<td className="py-3.5 px-3 font-label-code text-on-surface-variant">
                      2025-05-10
                    </td>
<td className="py-3.5 px-4 text-right">
<button className="px-2 py-1 rounded border border-primary-container/40 text-primary-container text-label-code text-[11px] hover:bg-primary-container hover:text-white">
                        Reinstate
                      </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 border-t border-outline-variant/30 flex items-center justify-between text-label-badge font-label-badge text-on-surface-variant bg-surface-container-low/30">
<div>ED25519 Identity Signature Matrix verified at block height #892,104</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded border border-outline-variant/30 hover:bg-surface-container-high" disabled>Prev</button>
<span className="text-primary font-bold">1</span>
<button className="px-2 py-1 rounded border border-outline-variant/30 hover:bg-surface-container-high">2</button>
<button className="px-2 py-1 rounded border border-outline-variant/30 hover:bg-surface-container-high">Next</button>
</div>
</div>
</div>



<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-5 space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">grid_view</span>
                  Granular RBAC Permission &amp; Capability Matrix
                </h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">Cross-role capability mapping against critical pipeline operations.</p>
</div>
<span className="px-2 py-1 rounded bg-surface-container text-label-badge font-label-badge text-on-surface-variant border border-outline-variant/30">
                M-of-N MULTI-PARTY POLICY ARMED
              </span>
</div>

<div className="overflow-x-auto custom-scroll">
<table className="w-full text-left text-xs font-label-code">
<thead>
<tr className="border-b border-outline-variant/30 text-label-badge text-on-surface-variant uppercase tracking-wider">
<th className="py-2.5 px-3 font-semibold">Capability Category / Operation</th>
<th className="py-2.5 px-2 text-center font-semibold text-primary">SuperAdmin</th>
<th className="py-2.5 px-2 text-center font-semibold text-on-surface">SecOps</th>
<th className="py-2.5 px-2 text-center font-semibold text-on-surface">Analyst</th>
<th className="py-2.5 px-2 text-center font-semibold text-on-surface">Dev</th>
<th className="py-2.5 px-2 text-center font-semibold text-on-surface">Auditor</th>
<th className="py-2.5 px-2 text-center font-semibold text-secondary">AI Agent</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20">

<tr className="bg-surface-container-high/20">
<td className="py-1.5 px-3 text-label-badge uppercase font-bold text-secondary" colSpan={7}>
                      Pipeline Assessment &amp; Scanning
                    </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-on-surface flex items-center justify-between">
<span>TRIGGER LIVE CLUSTER SCAN</span>
<span className="text-[10px] text-primary-container px-1 rounded bg-primary-container/10 border border-primary-container/30">HIGH-RISK</span>
</td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
</tr>
<tr>
<td className="py-2 px-3 text-on-surface-variant">Inspect Vulnerability Knowledge Graph</td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
</tr>

<tr className="bg-surface-container-high/20">
<td className="py-1.5 px-3 text-label-badge uppercase font-bold text-secondary" colSpan={7}>
                      Remediation &amp; Sandbox Mutation
                    </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-on-surface flex items-center justify-between">
<span>PUSH PATCH TO LAB SANDBOX (8001)</span>
<span className="text-[10px] text-tertiary px-1 rounded bg-tertiary/10 border border-tertiary/30">M-of-2 REQUIRED</span>
</td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
</tr>
<tr>
<td className="py-2 px-3 text-on-surface flex items-center justify-between">
<span>APPROVE POLICY EXCEPTION</span>
<span className="text-[10px] text-primary-container px-1 rounded bg-primary-container/10 border border-primary-container/30">M-of-2 SIGNED</span>
</td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
</tr>

<tr className="bg-surface-container-high/20">
<td className="py-1.5 px-3 text-label-badge uppercase font-bold text-secondary" colSpan={7}>
                      Privileged IAM Governance
                    </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-on-surface flex items-center justify-between">
<span>REVOKE OPERATOR CREDENTIALS</span>
<span className="text-[10px] text-primary-container px-1 rounded bg-primary-container/10 border border-primary-container/30">CRITICAL</span>
</td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-secondary"><span className="material-symbols-outlined text-sm">check_circle</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
<td className="py-2.5 px-2 text-center text-outline-variant"><span className="material-symbols-outlined text-sm">block</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>



<div className="lg:col-span-4 space-y-6">

<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-5 space-y-5">

<div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high border-2 border-primary-container flex items-center justify-center font-headline-md text-primary font-bold shadow-[0_0_12px_rgba(242,13,50,0.3)]">
                  KJ
                </div>
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">Kevin John</h3>
<div className="text-label-code font-label-code text-primary font-medium text-xs">Analyst_442 · SecOps Lead</div>
<div className="text-label-badge font-label-badge text-on-surface-variant/70">UID: usr-8902-secops</div>
</div>
</div>
<span className="px-2 py-0.5 rounded text-label-badge font-label-badge bg-secondary/10 border border-secondary/40 text-secondary">
                ACTIVE
              </span>
</div>

<div className="space-y-3">
<div className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">
                Effective Capability Grants
              </div>
<div className="space-y-2 text-xs font-label-code">
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 flex items-start justify-between">
<div>
<div className="text-on-surface font-semibold">Global Scan Triggering</div>
<div className="text-on-surface-variant text-[11px]">eBPF Rate-Limited (10 req/min)</div>
</div>
<span className="text-secondary font-bold">GRANTED</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 flex items-start justify-between">
<div>
<div className="text-on-surface font-semibold">AST &amp; Dynamic Sandbox Push</div>
<div className="text-on-surface-variant text-[11px]">gVisor Isolated Container #8001</div>
</div>
<span className="text-secondary font-bold">GRANTED</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 flex items-start justify-between">
<div>
<div className="text-on-surface font-semibold">Policy Exception Sign-off</div>
<div className="text-on-surface-variant text-[11px]">Dual-Operator Required (2/2 Signed)</div>
</div>
<span className="text-tertiary font-bold">M-of-2</span>
</div>
<div className="p-2.5 rounded bg-surface-container border border-outline-variant/30 flex items-start justify-between">
<div>
<div className="text-on-surface font-semibold">IAM Administration</div>
<div className="text-on-surface-variant text-[11px]">Self-Lockout Protected</div>
</div>
<span className="text-primary font-bold">SUPERADMIN</span>
</div>
</div>
</div>

<div className="p-4 rounded bg-primary-container/10 border border-primary-container/40 space-y-2.5">
<div className="flex items-center gap-2 text-primary font-headline-sm text-xs font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-base">lock_clock</span>
                Privileged Operations Safeguards
              </div>
<p className="text-body-sm font-body-sm text-on-surface-variant text-xs">
<strong className="text-on-surface">Multi-Party Authorization (M-of-N):</strong> Any mutation to live cluster policies or sandbox egress requires 2 independent cryptographically signed tokens.
              </p>
<div className="pt-2 border-t border-primary-container/20 text-label-badge font-label-badge text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-primary-container">shield_with_heart</span>
<span>Self-Lockout Prevention: CANNOT REMOVE FINAL ADMIN</span>
</div>
</div>

<div className="space-y-3 pt-2">
<div className="text-label-badge font-label-badge text-on-surface-variant uppercase tracking-wider">
                Active Session &amp; Key Provenance
              </div>
<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2 text-xs font-label-code">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Session ID:</span>
<span className="text-on-surface font-mono">sess-894e-20250518</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Egress IP:</span>
<span className="text-secondary font-mono">10.0.4.12 (Internal VPN)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Hardware Token:</span>
<span className="text-on-surface">YubiKey 5C NFC</span>
</div>
<div className="flex justify-between items-center text-[11px]">
<span className="text-on-surface-variant">Attestation Standard:</span>
<span className="text-secondary">FIPS 140-2 Level 3</span>
</div>
<div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center text-[10px] text-on-surface-variant">
<span>Signature Digest:</span>
<span className="font-mono text-outline-variant">ed25519:7b0f...3a91</span>
</div>
</div>
</div>

<div className="space-y-2 pt-2">
<button className="w-full py-2 px-3 rounded bg-surface-container border border-outline-variant/40 hover:border-secondary hover:text-secondary text-label-code font-label-code text-xs text-on-surface transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">key</span>
                Re-authenticate Hardware Token
              </button>
<button className="w-full py-2 px-3 rounded bg-surface-container border border-outline-variant/40 hover:border-outline text-label-code font-label-code text-xs text-on-surface transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">edit_note</span>
                Modify Role Scope &amp; Groups
              </button>
<button className="w-full py-2 px-3 rounded bg-error-container/40 border border-primary-container text-primary hover:bg-error-container text-label-code font-label-code text-xs font-bold transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">power_settings_new</span>
                Revoke All Active Sessions
              </button>
</div>
</div>
</div>
</div>



<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-5 space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-3">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold">
                Access Audit Chronology &amp; Ledger
              </h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">Real-time immutable ledger tracking privileged identity mutations and token attestations.</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-secondary/10 border border-secondary/30 text-secondary text-label-badge font-label-badge flex items-center gap-1.5 font-bold">
<span className="material-symbols-outlined text-xs">verified</span>
              ALL 1,842 IAM TRANSACTIONS MERKLE-VERIFIED
            </span>
</div>
</div>

<div className="space-y-2.5 font-label-code text-xs">

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-outline-variant/40 transition-colors">
<div className="flex items-start md:items-center gap-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary text-[11px] font-semibold shrink-0">14:48:02 UTC</span>
<span className="text-on-surface">
<strong className="text-primary">Analyst_442</strong> elevated scope for <span className="text-secondary font-mono">gVisor Sandbox #P-8902 v2</span> validation.
              </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant text-[11px] shrink-0 font-mono">
<span className="text-outline-variant truncate max-w-xs">Signed: sha256:d894e77...2b01</span>
<span className="material-symbols-outlined text-secondary text-sm">lock</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-outline-variant/40 transition-colors">
<div className="flex items-start md:items-center gap-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-semibold shrink-0">14:15:00 UTC</span>
<span className="text-on-surface">
                Automated Service Principal <strong className="text-secondary">Aegis_Copilot_Daemon</strong> authenticated for <span className="font-mono">SCN-8092 AST execution</span>.
              </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant text-[11px] shrink-0 font-mono">
<span className="text-outline-variant truncate max-w-xs">mTLS Session: #tok-89102</span>
<span className="material-symbols-outlined text-secondary text-sm">smart_toy</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-outline-variant/40 transition-colors">
<div className="flex items-start md:items-center gap-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-semibold shrink-0">Yesterday 17:30 UTC</span>
<span className="text-on-surface">
                Suspended <strong className="text-primary-container line-through">Legacy_Worker_09</strong> due to expired token rotation window policy (30d threshold).
              </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant text-[11px] shrink-0 font-mono">
<span className="text-primary-container">REVOCATION APPLIED</span>
<span className="material-symbols-outlined text-primary text-sm">block</span>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-outline-variant/40 transition-colors">
<div className="flex items-start md:items-center gap-3">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-semibold shrink-0">2 days ago</span>
<span className="text-on-surface">
<strong className="text-on-surface">Auditor_Vance</strong> granted temporary read-only export access to <span className="text-on-surface font-mono">ASVS v4.0.3 compliance ledger</span>.
              </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant text-[11px] shrink-0 font-mono">
<span className="text-outline-variant">Authorized by Analyst_442</span>
<span className="material-symbols-outlined text-secondary text-sm">assignment_turned_in</span>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default AccessControlPage;
