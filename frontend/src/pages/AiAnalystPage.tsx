import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AiAnalystPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getFindings) {
          const res = await api.getFindings();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load AiAnalystPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<div className="px-space-lg pt-4 pb-3 border-b border-outline-variant/30 bg-surface-container-low/40">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center space-x-2">
<span className="font-label-badge text-[10px] text-primary tracking-widest uppercase font-semibold">DEFENSIVE REASONING ENGINE · DEMO FIXTURE DATA</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container border border-outline-variant/30 text-[9px] font-label-badge text-outline">v4.2-eval</span>
</div>
<div className="flex items-center space-x-3 text-label-badge text-[11px]">
<span className="text-outline">Scope: <span className="text-on-surface font-semibold">AUTHORIZED SECURITY ANALYSIS (strict sandbox)</span></span>
<span className="text-outline">·</span>
<span className="text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
            Integrity Status: Evidence Grounded (100% cited)
          </span>
</div>
</div>
<div className="flex items-end justify-between">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">AI Security Analyst</h1>
<p className="font-body-sm text-body-sm text-outline mt-0.5">
            Investigate application vulnerabilities with evidence-backed explanations, contextual risk analysis, and reviewable defensive recommendations.
          </p>
</div>

<div className="flex items-center space-x-2 bg-surface-container-lowest border border-outline-variant/60 rounded px-3 py-1.5 shadow-sm">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-code text-[11px] text-outline uppercase">Active Finding:</span>
<span className="font-label-code text-[12px] text-primary font-bold">#FND-8902: SQL Injection</span>
</div>
<span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-12 gap-0 overflow-hidden" style={{ "height": "calc(100vh - 128px)" }}>



<section className="col-span-12 xl:col-span-2 lg:col-span-3 border-r border-outline-variant/30 p-3 overflow-y-auto custom-scrollbar flex flex-col space-y-4 bg-surface-container-lowest/60">

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] text-outline uppercase tracking-wider font-semibold">ACTIVE TARGET FINDING</span>
<span className="px-1.5 py-0.2 rounded bg-error-container/40 text-primary-container border border-primary-container/40 font-label-badge text-[9px] font-bold">CRIT 9.2 CVSS</span>
</div>
<div className="p-3 rounded bg-surface-container-low border border-primary-container/30 space-y-2 relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-20 h-20 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-start justify-between">
<div>
<span className="font-label-code text-[11px] text-primary font-bold">#FND-8902</span>
<h3 className="font-headline-sm text-[13px] text-on-surface font-semibold leading-snug">SQL Injection in UserProfileQuery</h3>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 border-t border-outline-variant/30 text-[11px] font-label-code">
<div>
<span className="text-outline text-[9px] block uppercase">Contextual Risk</span>
<span className="text-primary-container font-bold text-[13px]">8.6 <span className="text-[9px] text-outline">/ 10</span></span>
</div>
<div>
<span className="text-outline text-[9px] block uppercase">Affected DB</span>
<span className="text-on-surface font-medium truncate block">PostgreSQL Auth</span>
</div>
</div>
<div className="text-[10px] font-label-code text-outline pt-1 border-t border-outline-variant/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">data_object</span>
<span className="truncate">/api/v1/auth/profile.py:42</span>
</div>

<div className="pt-1 text-[9px] font-label-code space-y-1">
<span className="text-outline uppercase text-[8.5px] block font-semibold">Taint Reachability Chain:</span>
<div className="p-1.5 rounded bg-surface-container-lowest/80 border border-outline-variant/30 text-on-surface space-y-0.5">
<div className="text-secondary truncate">→ Ingress Gateway (Port 443)</div>
<div className="text-on-surface truncate">→ FastAPI Controller Profile</div>
<div className="text-primary font-semibold truncate">→ Taint Sink (Line 42)</div>
<div className="text-tertiary-container truncate">→ Tier-1 Auth DB (FERPA PII)</div>
</div>
</div>

<div className="pt-1 flex flex-wrap gap-1">
<span className="px-1 py-0.5 rounded bg-surface-container-high text-[9px] font-label-code text-outline">CWE-798 JWT</span>
<span className="px-1 py-0.5 rounded bg-surface-container-high text-[9px] font-label-code text-outline">CWE-79 XSS</span>
</div>
</div>
</div>

<div className="space-y-1.5 flex-1">
<div className="flex items-center justify-between pb-1">
<span className="font-label-badge text-[10px] text-outline uppercase tracking-wider font-semibold">INVESTIGATION SESSIONS</span>
<button className="text-outline hover:text-primary transition-colors text-label-badge text-[11px] flex items-center">
<span className="material-symbols-outlined text-[13px]">add</span>
</button>
</div>
<div className="space-y-1 font-label-code text-[11px]">

<div className="p-2 rounded bg-surface-container-low border border-primary-container/40 border-l-2 border-l-primary-container cursor-pointer transition-all">
<div className="flex items-center justify-between text-primary font-semibold text-[11px]">
<span className="truncate">SQLi Taint Reachability</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
</div>
<div className="text-[9px] text-outline truncate mt-0.5">Finding #FND-8902 · Active triage</div>
</div>

<div className="p-2 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors text-on-surface-variant">
<div className="truncate text-[11px]">Auth JWT Key Hardcoding</div>
<div className="text-[9px] text-outline truncate mt-0.5">#FND-7981 · Resolved</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors text-on-surface-variant">
<div className="truncate text-[11px]">Ingress Header Taint Vector</div>
<div className="text-[9px] text-outline truncate mt-0.5">#FND-3190 · In review</div>
</div>
<div className="p-2 rounded bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/20 cursor-pointer transition-colors text-on-surface-variant">
<div className="truncate text-[11px]">Deserialization Memory Probe</div>
<div className="text-[9px] text-outline truncate mt-0.5">#FND-5021 · Standby</div>
</div>
</div>
</div>

<div className="pt-2 border-t border-outline-variant/30 space-y-1.5 font-label-code text-[10px]">
<span className="font-label-badge text-[9px] text-outline uppercase tracking-wider block font-semibold">ANALYSIS INTEGRITY</span>
<div className="flex items-center justify-between text-outline">
<span>Evidence Retrieval:</span>
<span className="text-secondary font-semibold">Complete (4)</span>
</div>
<div className="flex items-center justify-between text-outline">
<span>Citation Resolution:</span>
<span className="text-secondary font-semibold">Deterministic (100%)</span>
</div>
<div className="flex items-center justify-between text-outline">
<span>Graph Context:</span>
<span className="text-on-surface">Mapped (2 Hops)</span>
</div>
<div className="flex items-center justify-between text-outline">
<span>Schema Validation:</span>
<span className="text-primary font-semibold">Enforced</span>
</div>
</div>
</section>



<section className="col-span-12 xl:col-span-6 lg:col-span-5 flex flex-col h-full border-r border-outline-variant/30 bg-surface-container-lowest">

<div className="px-space-md py-2 border-b border-outline-variant/30 bg-surface-container-low/30 flex items-center justify-between flex-shrink-0">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">forum</span>
<span className="font-label-code text-[12px] text-on-surface font-semibold">Session: #SESS-8902-A · SQL Injection Triage</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-[9px] font-label-badge text-outline">THREAD LOCKED TO CONTEXT</span>
</div>
<div className="flex items-center space-x-2">
<button className="px-2 py-0.5 rounded border border-outline-variant/40 hover:text-on-surface text-outline text-[11px] font-label-badge transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">clear_all</span> Clear
            </button>
<button className="px-2 py-0.5 rounded border border-outline-variant/40 hover:text-on-surface text-outline text-[11px] font-label-badge transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">download</span> Export Notes
            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-space-md space-y-space-md">

<div className="flex items-start justify-end space-x-2">
<div className="max-w-[85%] rounded bg-surface-container-high border border-outline-variant/40 p-3 space-y-1">
<div className="flex items-center justify-between text-[10px] font-label-badge text-outline pb-1 border-b border-outline-variant/20">
<span className="font-semibold text-primary">OPERATOR QUERY</span>
<span>10:42:18 UTC</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
                Why is this SQL injection finding prioritized at 8.6 Critical when static CVSS is only 6.4? Cite confirmed evidence, explain the graph reachability, and draft a verified remediation plan.
              </p>
</div>
<div className="w-7 h-7 rounded bg-surface-container-highest border border-outline-variant/40 flex items-center justify-center text-on-surface flex-shrink-0">
<span className="material-symbols-outlined text-[16px]">person</span>
</div>
</div>

<div className="flex items-start space-x-2">
<div className="w-7 h-7 rounded bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary flex-shrink-0 shadow-[0_0_10px_rgba(255,83,87,0.3)]">
<span className="material-symbols-outlined text-[16px]">smart_toy</span>
</div>
<div className="flex-1 rounded bg-surface-container-low border border-outline-variant/40 p-4 space-y-space-md shadow-lg">

<div className="p-3 rounded bg-surface-container-lowest border-l-2 border-primary-container border-t border-r border-b border-outline-variant/30 space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-badge text-[10px] text-primary uppercase font-bold tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">crisis_alert</span>
                    DIRECT ANSWER
                  </span>
<span className="font-label-code text-[10px] text-outline">Deterministic Evaluation</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                  Finding <strong className="text-primary font-label-code">#FND-8902</strong> is prioritized at <strong className="text-primary-container">8.6 Contextual Risk</strong> because static analysis confirms an unsanitized request parameter (<code className="text-secondary font-label-code text-[12px] bg-surface-container px-1 py-0.5 rounded">'student_id'</code>) is interpolated directly into an SQL execution string in an unauthenticated FastAPI endpoint that directly interfaces with the Tier-1 PostgreSQL Auth DB containing restricted <strong className="text-tertiary-container">FERPA PII</strong> records.
                </p>
</div>

<div className="space-y-2">
<div className="flex items-center space-x-2">
<span className="px-2 py-0.5 rounded bg-secondary-container/20 border border-secondary text-secondary font-label-badge text-[10px] font-bold">
                    LAYER 1: CONFIRMED EVIDENCE
                  </span>
<div className="flex items-center space-x-1">
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-secondary border border-secondary/30">[EVID #9042]</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-secondary border border-secondary/30">[AST-TRACE]</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-secondary border border-secondary/30">[HTTP-PROBE]</span>
</div>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-1.5 font-body-sm text-body-sm text-on-surface">
<div className="flex items-start space-x-1.5">
<span className="text-secondary font-bold font-label-code">•</span>
<div className="flex-1">
                      AST Taint analysis traced parameter <code className="text-secondary font-label-code text-[11px]">'req.params.student_id'</code> entering <code className="font-label-code text-[11px]">/api/v1/auth/profile.py</code> at line 41 with zero sanitization or type coercion.
                      <span className="ml-1 text-secondary font-label-code text-[10px] cursor-pointer hover:underline">[EVID #9042]</span>
</div>
</div>
<div className="flex items-start space-x-1.5">
<span className="text-secondary font-bold font-label-code">•</span>
<div className="flex-1">
                      Line 42 executes f-string query: <code className="font-label-code text-primary text-[11px] bg-surface-container px-1 py-0.5 rounded">query = f"SELECT * FROM users WHERE id = '&#123;student_id&#125;'"</code> via <code className="font-label-code text-[11px]">db.execute(query)</code>.
                      <span className="ml-1 text-secondary font-label-code text-[10px] cursor-pointer hover:underline">[SOURCE-LOC #42]</span>
</div>
</div>
<div className="flex items-start space-x-1.5">
<span className="text-secondary font-bold font-label-code">•</span>
<div className="flex-1">
                      Active verification probe divergence detected in error logs upon single-quote payload insertion (<code className="text-primary font-label-code text-[11px]">'PG::SyntaxError'</code>).
                      <span className="ml-1 text-secondary font-label-code text-[10px] cursor-pointer hover:underline">[LOG-OBS #104]</span>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center space-x-2">
<span className="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary-container text-tertiary font-label-badge text-[10px] font-bold">
                    LAYER 2: CONTEXTUAL INTERPRETATION
                  </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-tertiary border border-tertiary/30">[HEURISTIC GRAPH INFERENCE]</span>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/30 font-body-sm text-body-sm text-on-surface leading-relaxed">
                  The security knowledge graph confirms this endpoint is routed directly from the public Nginx ingress gateway (Port 443) without intervening WAF or authentication token validation. Reachability reaches sensitive FERPA student records, elevating base CVSS 6.4 to Contextual Risk 8.6.
                </div>
</div>

<div className="space-y-1.5">
<div className="flex items-center space-x-2">
<span className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant text-outline font-label-badge text-[10px] font-bold">
                    LAYER 3: UNCERTAINTY &amp; MISSING CONTEXT
                  </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-outline border border-outline-variant/30">[VERIFICATION GAPS]</span>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-start space-x-1.5">
<span className="text-outline font-label-code">•</span>
<span><strong>Uncertainty 1:</strong> Downstream ORM connection pool pooling mechanisms have not been regression-tested against batch parameter binding.</span>
</div>
<div className="flex items-start space-x-1.5">
<span className="text-outline font-label-code">•</span>
<span><strong>Uncertainty 2:</strong> Secondary read replicas in the disaster recovery VPC have not received the schema synchronization check.</span>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary font-label-badge text-[10px] font-bold">
                      LAYER 4: DEFENSIVE REMEDIATION PLAN
                    </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-primary border border-primary/30">[CANDIDATE #P-8902]</span>
</div>
<span className="font-label-badge text-[10px] text-secondary">Parameterized Query Binding</span>
</div>

<div className="rounded border border-outline-variant/40 bg-surface-container-lowest overflow-hidden font-label-code text-[12px]">
<div className="px-3 py-1 bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-between text-outline text-[10px]">
<span>patch_profile_query.py (Diff Preview)</span>
<span>Python 3.11</span>
</div>
<div className="p-2.5 space-y-1">
<div className="bg-error-container/20 text-error px-2 py-1 rounded flex items-center space-x-2 border-l-2 border-error">
<span className="text-error font-bold select-none">- 42</span>
<span className="truncate">query = f"SELECT * FROM users WHERE id = '&#123;student_id&#125;'"</span>
</div>
<div className="bg-secondary-container/20 text-secondary px-2 py-1 rounded flex items-center space-x-2 border-l-2 border-secondary">
<span className="text-secondary font-bold select-none">+ 42</span>
<span className="truncate">query = "SELECT * FROM users WHERE id = %s"; db.execute(query, (student_id,))</span>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center space-x-2">
<span className="px-2 py-0.5 rounded bg-secondary-container/15 border border-secondary text-secondary font-label-badge text-[10px] font-bold">
                    LAYER 5: VALIDATION GATES REQUIRED
                  </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container font-label-code text-[9px] text-secondary border border-secondary/30">[DEFENSE GATES]</span>
</div>
<div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-1 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[14px]">check_circle</span>
<span>Gate 1: AST Lint Rule <code className="font-label-code text-secondary text-[11px]">PySQL-01</code> pass.</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[14px]">check_circle</span>
<span>Gate 2: Sandbox Container #03 42 unit/regression integration checks pass.</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-secondary text-[14px]">check_circle</span>
<span>Gate 3: Dynamic re-scan with sqlmap blind payload showing zero syntax diversion.</span>
</div>
</div>
</div>

<div className="pt-2 border-t border-outline-variant/30 flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded bg-primary-container text-white font-headline-sm text-body-sm font-bold shadow-[0_0_12px_rgba(255,83,87,0.3)] hover:bg-primary-container/90 transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">construction</span>
                  Open Remediation Workspace
                </button>
<button className="px-3 py-1.5 rounded border border-outline-variant/50 hover:border-secondary hover:text-secondary text-on-surface-variant font-label-badge text-[11px] transition-colors flex items-center gap-1 bg-surface-container-low/60">
<span className="material-symbols-outlined text-[15px]">hub</span>
                  View in Knowledge Graph
                </button>
<button className="px-3 py-1.5 rounded border border-outline-variant/50 hover:border-secondary hover:text-secondary text-on-surface-variant font-label-badge text-[11px] transition-colors flex items-center gap-1 bg-surface-container-low/60">
<span className="material-symbols-outlined text-[15px]">play_circle</span>
                  Run Sandbox Validation
                </button>
<button className="px-3 py-1.5 rounded border border-outline-variant/50 hover:text-on-surface text-outline font-label-badge text-[11px] transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">summarize</span>
                  Export Evidence Brief
                </button>
</div>
</div>
</div>
</div>

<div className="p-space-md border-t border-outline-variant/30 bg-surface-container-low/60 space-y-2 flex-shrink-0">

<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center space-x-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/50 font-label-code text-[10px] text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">filter_alt</span>
                Context: [Finding #FND-8902 · profile.py:42]
              </span>
</div>

<div className="flex items-center space-x-1.5 font-label-badge text-[10px]">
<span className="text-outline text-[9px] uppercase">Suggest:</span>
<button className="px-2 py-0.5 rounded bg-surface-container-high hover:border-primary border border-transparent text-on-surface transition-colors">Show taint source</button>
<button className="px-2 py-0.5 rounded bg-surface-container-high hover:border-primary border border-transparent text-on-surface transition-colors">Explain PII impact</button>
<button className="px-2 py-0.5 rounded bg-surface-container-high hover:border-primary border border-transparent text-on-surface transition-colors">Compare fix candidates</button>
</div>
</div>

<div className="relative rounded border border-outline-variant/50 bg-surface-container-lowest focus-within:border-primary transition-all">
<textarea className="w-full bg-transparent border-0 px-3 py-2 text-body-sm font-body-sm text-on-surface placeholder:text-outline/70 focus:ring-0 resize-none font-label-code" placeholder="Ask about the selected finding, evidence, affected assets, or remediation..." rows={2}></textarea>
<div className="px-3 py-1.5 border-t border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center space-x-2">
<button className="text-outline hover:text-on-surface transition-colors p-1" title="Attach Evidence">
<span className="material-symbols-outlined text-[16px]">attach_file</span>
</button>
<button className="text-outline hover:text-on-surface transition-colors p-1" title="Select AST Artifact">
<span className="material-symbols-outlined text-[16px]">code</span>
</button>
</div>
<button className="px-3 py-1 rounded bg-primary-container text-white font-headline-sm text-[12px] font-bold shadow-[0_0_10px_rgba(255,83,87,0.3)] hover:bg-primary-container/90 transition-all flex items-center gap-1">
<span>Send</span>
<span className="material-symbols-outlined text-[14px]">shield</span>
</button>
</div>
</div>

<div className="text-[10px] font-label-badge text-outline flex items-center gap-1 justify-center">
<span className="material-symbols-outlined text-[12px]">info</span>
            AI-generated explanations are advisory. Review evidence and execute sandbox validation before committing patches.
          </div>
</div>
</section>



<section className="col-span-12 xl:col-span-4 lg:col-span-4 p-3 overflow-y-auto custom-scrollbar flex flex-col space-y-3 bg-surface-container-lowest/80">

<div className="flex items-center space-x-1 border-b border-outline-variant/30 pb-2">
<button className="px-2.5 py-1 rounded bg-surface-container-high border-b-2 border-primary text-primary font-label-badge text-[11px] font-bold">
            All Evidence (4)
          </button>
<button className="px-2.5 py-1 rounded text-outline hover:text-on-surface font-label-badge text-[11px] transition-colors">
            Source AST
          </button>
<button className="px-2.5 py-1 rounded text-outline hover:text-on-surface font-label-badge text-[11px] transition-colors">
            Graph Path
          </button>
<button className="px-2.5 py-1 rounded text-outline hover:text-on-surface font-label-badge text-[11px] transition-colors">
            Risk Factors
          </button>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">account_tree</span>
<span className="font-headline-sm text-[12px] text-on-surface font-bold">AST Taint Trace #9042</span>
</div>
<span className="px-1.5 py-0.2 rounded bg-secondary-container/20 text-secondary border border-secondary/30 font-label-badge text-[9px]">Verified</span>
</div>
<p className="font-body-sm text-[11px] text-outline">
            Taint parameter source <code className="text-secondary font-label-code text-[11px]">'student_id'</code> flows directly into unparameterized database query sink without escaping.
          </p>
<div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/20 font-label-code text-[10px] space-y-1">
<div className="text-outline truncate">Sink: <span className="text-primary font-semibold">student_id -&gt; db.execute()</span></div>
<div className="text-outline truncate">SHA256: <span className="text-on-surface">d894e771c990b7a8...</span></div>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-primary text-[16px]">terminal</span>
<span className="font-headline-sm text-[12px] text-on-surface font-bold">Source Code Inspection</span>
</div>
<span className="font-label-code text-[10px] text-outline">/api/v1/auth/profile.py</span>
</div>
<div className="rounded bg-surface-container-lowest border border-outline-variant/30 p-2 font-label-code text-[11px] overflow-x-auto custom-scrollbar">
<div className="text-outline/70">39  @router.get("/profile")</div>
<div className="text-outline/70">40  async def get_profile(student_id: str):</div>
<div className="text-outline">41      # Unsanitized input vector</div>
<div className="bg-error-container/30 text-error px-1 py-0.5 rounded border-l-2 border-primary-container">
              42      query = f"SELECT * FROM users WHERE id = '&#123;student_id&#125;'"
            </div>
<div className="text-primary">43      return db.execute(query).fetchall()</div>
<div className="text-outline/70">44  </div>
<div className="text-outline/70">45  # End of controller</div>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">polyline</span>
<span className="font-headline-sm text-[12px] text-on-surface font-bold">Graph Reachability Path</span>
</div>
<span className="font-label-badge text-[9px] text-outline">5-HOP EXPLOIT CHAIN</span>
</div>
<div className="space-y-1.5 font-label-code text-[11px] pt-1">

<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-[10px] text-outline">1</div>
<div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20 flex-1 flex items-center justify-between">
<span>Public Ingress Proxy (Port 443)</span>
<span className="text-outline text-[9px]">Edge</span>
</div>
</div>

<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-[10px] text-outline">2</div>
<div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20 flex-1 flex items-center justify-between">
<span>FastAPI Profile Router Controller</span>
<span className="text-outline text-[9px]">App Layer</span>
</div>
</div>

<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded-full bg-primary-container/20 border border-primary-container flex items-center justify-center text-[10px] text-primary font-bold">3</div>
<div className="p-1.5 rounded bg-surface-container-lowest border border-primary-container/40 flex-1 flex items-center justify-between text-primary">
<span>Taint Sink: student_id (Line 42)</span>
<span className="text-primary text-[9px] font-bold">VULNERABLE</span>
</div>
</div>

<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded-full bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-[10px] text-outline">4</div>
<div className="p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20 flex-1 flex items-center justify-between">
<span>PostgreSQL Primary Auth Database</span>
<span className="text-outline text-[9px]">Data Store</span>
</div>
</div>

<div className="flex items-center space-x-2">
<div className="w-5 h-5 rounded-full bg-tertiary-container/20 border border-tertiary-container flex items-center justify-center text-[10px] text-tertiary font-bold">5</div>
<div className="p-1.5 rounded bg-surface-container-lowest border border-tertiary-container/40 flex-1 flex items-center justify-between text-tertiary">
<span>FERPA Student Records &amp; SSN</span>
<span className="text-tertiary text-[9px] font-bold">RESTRICTED PII</span>
</div>
</div>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-primary text-[16px]">analytics</span>
<span className="font-headline-sm text-[12px] text-on-surface font-bold">Contextual Risk Breakdown</span>
</div>
<span className="text-primary font-label-code text-[11px] font-bold">8.6 / 10</span>
</div>
<div className="space-y-2 pt-1 font-label-code text-[11px]">
<div>
<div className="flex justify-between text-[10px] text-outline mb-0.5">
<span>Technical Severity</span>
<span className="text-primary">9.1</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ "width": "91%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-outline mb-0.5">
<span>Exploitability Factor</span>
<span className="text-primary">HIGH (Public Exposure)</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ "width": "85%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-outline mb-0.5">
<span>Asset Criticality</span>
<span className="text-secondary">TIER-1 (Auth DB)</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ "width": "95%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-outline mb-0.5">
<span>Data Sensitivity</span>
<span className="text-tertiary">RESTRICTED FERPA PII</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{ "width": "90%" }}></div>
</div>
</div>
</div>
</div>

<div className="p-3 rounded bg-surface-container-low border border-outline-variant/30 space-y-2">
<span className="font-label-badge text-[10px] text-outline uppercase font-semibold">ACTION HANDOFF</span>
<div className="space-y-1.5">
<button className="w-full py-1.5 px-2 rounded bg-primary-container text-white font-headline-sm text-body-sm font-bold shadow-[0_0_12px_rgba(255,83,87,0.3)] hover:bg-primary-container/90 transition-all flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[15px]">build</span>
              Open Remediation Workspace
            </button>
<button className="w-full py-1.5 px-2 rounded border border-outline-variant/50 hover:text-on-surface text-on-surface-variant font-label-badge text-[11px] transition-colors flex items-center justify-center gap-1.5 bg-surface-container-lowest">
<span className="material-symbols-outlined text-[15px]">rate_review</span>
              Mark for Analyst Review
            </button>
<button className="w-full py-1.5 px-2 rounded border border-outline-variant/50 hover:text-secondary text-outline font-label-badge text-[11px] transition-colors flex items-center justify-center gap-1.5 bg-surface-container-lowest">
<span className="material-symbols-outlined text-[15px]">download</span>
              Download Telemetry JSON
            </button>
</div>
</div>
</section>
</div>

    </div>
  );
};

export default AiAnalystPage;
