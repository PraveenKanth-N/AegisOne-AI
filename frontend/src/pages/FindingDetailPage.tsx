import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const FindingDetailPage: React.FC = () => {
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
        console.error('Failed to load FindingDetailPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<div className="bg-[#0E0E11] border-b border-[#292A34] px-4 md:px-8 py-2.5 flex flex-wrap items-center justify-between gap-y-2">

<div className="flex items-center gap-x-2 text-[12px] font-label-code">
<span className="text-on-surface-variant">Console</span>
<span className="text-outline">/</span>
<span className="text-on-surface-variant">Findings</span>
<span className="text-outline">/</span>
<span className="text-primary font-bold">FND-8902</span>
<span className="text-outline">/</span>
<span className="text-on-surface">Detail &amp; Verification</span>
<span className="ml-2 px-2 py-0.5 rounded text-[10px] font-label-badge bg-primary-container/15 text-primary border border-primary/30 uppercase tracking-wider">
          EVIDENCE-GROUNDED TRIAGE
        </span>
</div>

<div className="flex items-center gap-x-2 text-label-code text-[11px]">
<button className="px-2.5 py-1 rounded bg-[#12131A] border border-[#292A34] text-on-surface-variant hover:text-on-surface hover:border-outline transition-colors flex items-center gap-x-1">
<span className="material-symbols-outlined text-[14px]">arrow_back</span>
          Back to Findings
        </button>
<button className="px-2.5 py-1 rounded bg-[#12131A] border border-[#292A34] text-secondary hover:border-secondary transition-colors flex items-center gap-x-1">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
          Open Source Scan (SCN-8092)
        </button>
</div>
</div>

<div className="p-4 md:p-8 max-w-[1520px] w-full mx-auto flex flex-col gap-y-6">

<section className="relative rounded-lg p-5 md:p-6 bg-gradient-to-r from-[#14080B] via-[#101015] to-[#12131A] border border-[#292A34] overflow-hidden crimson-glow">

<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/10 blur-3xl pointer-events-none rounded-full"></div>
<div className="absolute -left-10 bottom-0 w-60 h-60 bg-secondary/5 blur-2xl pointer-events-none rounded-full"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="flex flex-col gap-y-2">

<div className="flex items-center gap-x-2 flex-wrap">
<span className="text-[11px] font-label-badge tracking-wider uppercase text-primary font-bold">
                EVIDENCE VERIFICATION WORKSPACE
              </span>
<span className="text-outline text-[12px]">•</span>
<span className="text-[11px] font-label-code text-on-surface-variant">DETERMINISTIC TAINT TRACE #9042</span>
<span className="text-outline text-[12px]">•</span>
<span className="text-[11px] font-label-code text-secondary font-medium">EP-AST-402</span>
</div>

<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight font-bold flex items-center gap-x-3 flex-wrap">
<span>CWE-89: SQL Injection in Student Search Controller</span>
</h1>

<div className="flex flex-wrap items-center gap-2 mt-1 font-label-code text-[11px]">

<span className="px-2.5 py-1 rounded bg-[#68000e] text-[#ffdad6] border border-[#ff5357] font-bold flex items-center gap-x-1.5 shadow-[0_0_10px_rgba(255,83,87,0.25)]">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                CRITICAL (CVSS 9.2)
              </span>

<span className="px-2.5 py-1 rounded bg-[#003642] text-secondary border border-secondary/40 font-semibold flex items-center gap-x-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                CONFIRMED · REPRODUCIBLE
              </span>

<span className="px-2.5 py-1 rounded bg-[#101015] border border-[#292A34] text-on-surface font-label-code">
<span className="text-outline">FILE:</span> /api/v1/students/search.py:42
              </span>

<span className="px-2.5 py-1 rounded bg-[#101015] border border-[#292A34] text-on-surface-variant font-label-code">
                Aegis AST Taint Analyzer v4.2 (PySQL-01)
              </span>

<span className="px-2.5 py-1 rounded bg-[#101015] border border-[#292A34] text-outline font-label-code">
                SCN-8092
              </span>
</div>
</div>

<div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
<button className="px-3.5 py-2 rounded bg-primary-container text-on-primary-fixed font-headline-sm font-bold text-[13px] uppercase tracking-wider flex items-center gap-x-1.5 hover:brightness-110 transition-all shadow-[0_0_16px_rgba(255,83,87,0.45)]">
<span className="material-symbols-outlined text-[16px]" style={{ "fontVariationSettings": "'FILL' 1" }}>task_alt</span>
              Verify Finding
            </button>
<button className="px-3.5 py-2 rounded bg-[#191A22] border border-[#292A34] hover:border-secondary hover:text-secondary text-on-surface font-body-md text-[13px] font-medium flex items-center gap-x-1.5 transition-all">
<span className="material-symbols-outlined text-[16px]">build_circle</span>
              Start Remediation
            </button>
<button className="px-3 py-2 rounded bg-[#191A22] border border-[#292A34] hover:border-primary-container text-on-surface font-body-md text-[13px] flex items-center gap-x-1.5 transition-all">
<span className="material-symbols-outlined text-[16px] text-primary">smart_toy</span>
              Ask AI Analyst
            </button>
<button className="p-2 rounded bg-[#191A22] border border-[#292A34] hover:text-primary text-on-surface-variant transition-colors" title="Export Evidence Bundle (ZIP)">
<span className="material-symbols-outlined text-[18px]">archive</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="bg-[#12131A] border border-[#292A34] p-4 rounded-lg relative overflow-hidden group hover:border-[#5e3f3d] transition-all">
<div className="flex items-center justify-between text-outline mb-2">
<span className="text-label-badge font-label-badge uppercase text-[10px] tracking-wider">Evidence Artifacts</span>
<span className="material-symbols-outlined text-secondary text-[18px]">inventory_2</span>
</div>
<div className="text-headline-md font-headline-md font-bold text-on-surface flex items-baseline gap-x-2">
<span>4 Captured</span>
<span className="text-label-code text-[11px] text-secondary font-medium">100% Deterministic</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">
            HTTP Req/Resp, AST Taint Graph, SQLite Syntax Trace, Python AST Sink.
          </p>
<div className="w-full bg-[#1b1b1f] h-1 mt-3 rounded overflow-hidden">
<div className="bg-secondary h-full w-full"></div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] p-4 rounded-lg relative overflow-hidden group hover:border-[#5e3f3d] transition-all">
<div className="flex items-center justify-between text-outline mb-2">
<span className="text-label-badge font-label-badge uppercase text-[10px] tracking-wider">Verification State</span>
<span className="material-symbols-outlined text-[#45D49A] text-[18px]">verified</span>
</div>
<div className="text-headline-md font-headline-md font-bold text-[#45D49A] flex items-baseline gap-x-2">
<span>Confirmed</span>
<span className="text-label-code text-[11px] text-on-surface font-medium">(Deterministic)</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">
            Verified by <span className="text-on-surface font-label-code">Analyst_442</span> via AST Taint &amp; SQLMap Replay.
          </p>
<div className="w-full bg-[#1b1b1f] h-1 mt-3 rounded overflow-hidden">
<div className="bg-[#45D49A] h-full w-full"></div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] p-4 rounded-lg relative overflow-hidden group hover:border-[#5e3f3d] transition-all">
<div className="flex items-center justify-between text-outline mb-2">
<span className="text-label-badge font-label-badge uppercase text-[10px] tracking-wider">Contextual Risk Score</span>
<span className="material-symbols-outlined text-primary-container text-[18px]">warning</span>
</div>
<div className="text-headline-md font-headline-md font-bold text-primary flex items-baseline gap-x-2">
<span>8.6</span>
<span className="text-label-code text-[12px] text-outline">/ 10</span>
<span className="text-label-badge text-[10px] bg-error-container text-on-error-container px-1 rounded ml-1">TIER-1 EXPOSURE</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">
            Unauthenticated exploit reachability directly leads to Student PII records.
          </p>
<div className="w-full bg-[#1b1b1f] h-1 mt-3 rounded overflow-hidden">
<div className="bg-primary-container h-full w-[86%]"></div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] p-4 rounded-lg relative overflow-hidden group hover:border-[#5e3f3d] transition-all">
<div className="flex items-center justify-between text-outline mb-2">
<span className="text-label-badge font-label-badge uppercase text-[10px] tracking-wider">Remediation Status</span>
<span className="material-symbols-outlined text-secondary text-[18px]">auto_fix_high</span>
</div>
<div className="text-headline-md font-headline-md font-bold text-secondary flex items-baseline gap-x-2">
<span>Patch Validated</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5">
            Candidate <span className="font-label-code text-on-surface">#P-8902 v2</span> passed 18/18 regression tests in gVisor sandbox.
          </p>
<div className="w-full bg-[#1b1b1f] h-1 mt-3 rounded overflow-hidden">
<div className="bg-secondary-container h-full w-full"></div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">



<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-y-6">

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-4">
<div className="flex items-center justify-between border-b border-[#292A34] pb-3">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-primary text-[19px]">fact_check</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface font-semibold tracking-tight">
                  Evidence &amp; Verification Overview
                </h2>
</div>
<span className="text-label-badge font-label-badge text-[10px] text-outline uppercase tracking-wider">
                EPISTEMIC CONFIDENCE: 99.4%
              </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="bg-[#0E0E11] border border-[#292A34] p-3.5 rounded flex flex-col gap-y-2 border-t-2 border-t-secondary">
<div className="flex items-center gap-x-1.5 text-secondary text-label-badge uppercase font-bold text-[10px] tracking-wider">
<span className="material-symbols-outlined text-[14px]">visibility</span>
                  Observed Evidence
                </div>
<p className="text-[12px] font-body-sm text-on-surface-variant leading-relaxed">
                  Scanner probe <code className="text-primary font-label-code bg-[#191A22] px-1 py-0.5 rounded text-[11px]">' OR '1'='1</code> passed via query param <code className="text-on-surface font-label-code">q</code> yielded unhandled SQLite syntax error 1064 and unconstrained record yield of <span className="text-on-surface font-bold">1,280 student profiles</span>.
                </p>
</div>

<div className="bg-[#0E0E11] border border-[#292A34] p-3.5 rounded flex flex-col gap-y-2 border-t-2 border-t-primary-container">
<div className="flex items-center gap-x-1.5 text-primary-container text-label-badge uppercase font-bold text-[10px] tracking-wider">
<span className="material-symbols-outlined text-[14px]">psychology</span>
                  Engine Interpretation
                </div>
<p className="text-[12px] font-body-sm text-on-surface-variant leading-relaxed">
                  Direct string concatenation into DB cursor execute without parameterized query binding exposes high blast radius access to FERPA protected PII with zero authentication required.
                </p>
</div>

<div className="bg-[#0E0E11] border border-[#292A34] p-3.5 rounded flex flex-col gap-y-2 border-t-2 border-t-[#FFB84D]">
<div className="flex items-center gap-x-1.5 text-[#FFB84D] text-label-badge uppercase font-bold text-[10px] tracking-wider">
<span className="material-symbols-outlined text-[14px]">help_outline</span>
                  Limitations &amp; Scope
                </div>
<p className="text-[12px] font-body-sm text-on-surface-variant leading-relaxed">
                  Zero volumetric DoS probes conducted; probe execution was strictly non-destructive within loopback boundary. Write vectors (INSERT/UPDATE) were not tested in sandbox.
                </p>
</div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] rounded-lg overflow-hidden flex flex-col">

<div className="bg-[#0E0E11] border-b border-[#292A34] px-4 pt-3 flex flex-wrap items-center justify-between gap-y-2">
<div className="flex items-center gap-x-1 overflow-x-auto text-[12px] font-label-code">

<button className="px-3.5 py-2 border-b-2 border-primary-container text-primary font-bold flex items-center gap-x-1.5 bg-[#191A22]/50">
<span className="material-symbols-outlined text-[15px]">code</span>
                  Source Location &amp; AST Taint
                </button>

<button className="px-3.5 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface flex items-center gap-x-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">arrow_upward</span>
                  HTTP Request
                </button>

<button className="px-3.5 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface flex items-center gap-x-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                  HTTP Response
                </button>

<button className="px-3.5 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface flex items-center gap-x-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">history_edu</span>
                  Scanner Logs
                </button>
</div>

<div className="flex items-center gap-x-2 pb-2 text-on-surface-variant text-[11px] font-label-code">
<span className="text-outline">search.py:40-45</span>
<button className="p-1 hover:text-on-surface hover:bg-[#191A22] rounded" title="Copy Snippet">
<span className="material-symbols-outlined text-[15px]">content_copy</span>
</button>
<button className="p-1 hover:text-on-surface hover:bg-[#191A22] rounded" title="Full Screen View">
<span className="material-symbols-outlined text-[15px]">fullscreen</span>
</button>
</div>
</div>

<div className="p-4 bg-[#08080B] font-label-code text-[12px] custom-scrollbar overflow-x-auto">
<div className="flex items-center justify-between pb-3 mb-2 border-b border-[#292A34] text-[11px] text-outline">
<div className="flex items-center gap-x-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#F20D32]/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#FFB84D]/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#45D49A]/80"></span>
<span className="ml-2 font-mono text-on-surface-variant">src/controllers/students/search.py</span>
</div>
<span className="text-secondary font-mono">AST SINK DETECTED: Call(Name(execute))</span>
</div>

<table className="w-full border-collapse font-mono leading-relaxed select-text">
<tbody>

<tr className="text-outline/60 hover:bg-[#12131A]">
<td className="w-10 pr-4 text-right select-none opacity-40">38</td>
<td className="pl-2 text-on-surface-variant"><span className="text-secondary">@router</span>.get(<span className="text-[#ffdad9]">"/search"</span>, tags=[<span className="text-[#ffdad9]">"students"</span>])</td>
</tr>

<tr className="text-outline/60 hover:bg-[#12131A]">
<td className="w-10 pr-4 text-right select-none opacity-40">39</td>
<td className="pl-2 text-on-surface-variant"><span className="text-secondary">async def</span> <span className="text-[#55C7E8]">search_students</span>(request: Request, db: DatabaseSession = Depends()):</td>
</tr>

<tr className="text-outline/60 hover:bg-[#12131A]">
<td className="w-10 pr-4 text-right select-none opacity-40">40</td>
<td className="pl-2 text-outline italic">    # Unsanitized student query parameter binding</td>
</tr>

<tr className="bg-secondary/10 border-l-4 border-secondary text-on-surface">
<td className="w-10 pr-4 text-right select-none font-bold text-secondary">41</td>
<td className="pl-2 py-0.5">
                          query = request.query_params.get(<span className="text-[#ffdad9]">"q"</span>)
                      <span className="ml-3 px-2 py-0.5 rounded text-[10px] bg-secondary/20 text-secondary border border-secondary/40 font-bold uppercase">
                        [TAINT SOURCE] user_input
                      </span>
</td>
</tr>

<tr className="bg-primary-container/15 border-l-4 border-primary-container text-on-surface">
<td className="w-10 pr-4 text-right select-none font-bold text-primary">42</td>
<td className="pl-2 py-0.5">
                          db.execute(<span className="text-primary font-bold">f"SELECT * FROM students WHERE id = '&#123;query&#125;'"</span>)
                      <span className="ml-3 px-2 py-0.5 rounded text-[10px] bg-[#68000e] text-[#ffdad6] border border-primary-container font-bold uppercase shadow-[0_0_8px_rgba(255,83,87,0.3)]">
                        [CRITICAL SINK] cwe-89
                      </span>
</td>
</tr>

<tr className="text-outline/60 hover:bg-[#12131A]">
<td className="w-10 pr-4 text-right select-none opacity-40">43</td>
<td className="pl-2 text-on-surface-variant">    records = db.fetchall()</td>
</tr>

<tr className="text-outline/60 hover:bg-[#12131A]">
<td className="w-10 pr-4 text-right select-none opacity-40">44</td>
<td className="pl-2 text-on-surface-variant">    <span className="text-secondary">return</span> &#123;<span className="text-[#ffdad9]">"status"</span>: <span className="text-[#ffdad9]">"success"</span>, <span className="text-[#ffdad9]">"data"</span>: records&#125;</td>
</tr>
</tbody>
</table>

<div className="mt-4 pt-3 border-t border-[#292A34] grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
<div className="bg-[#12131A] p-3 rounded border border-[#292A34]">
<div className="flex items-center justify-between text-outline mb-1 font-label-badge uppercase">
<span>Replay HTTP Request</span>
<span className="text-secondary">200 OK</span>
</div>
<pre className="text-on-surface-variant font-label-code overflow-x-auto whitespace-pre-wrap">GET /api/v1/students/search?q=%27+OR+%271%27%3D%271 HTTP/1.1
Host: placement-api.local:8001
User-Agent: AegisSentinel-Engine/4.2
Accept: application/json
Authorization: Bearer [REDACTED_EPHEMERAL_TOKEN]</pre>
</div>
<div className="bg-[#12131A] p-3 rounded border border-[#292A34]">
<div className="flex items-center justify-between text-outline mb-1 font-label-badge uppercase">
<span>DB Execution Log &amp; Leakage</span>
<span className="text-primary font-bold">1,280 Rows</span>
</div>
<pre className="text-on-surface-variant font-label-code overflow-x-auto whitespace-pre-wrap">DEBUG: sqlite3.Cursor.execute
QUERY: SELECT * FROM students WHERE id = '' OR '1'='1'
STATUS: Full table scan executed (0.014s).
RESULT: FERPA Records leaked [ID: 9012, SSN: XXX-XX-4912]</pre>
</div>
</div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-4">
<div className="flex items-center justify-between border-b border-[#292A34] pb-3">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-secondary text-[19px]">biotech</span>
<h2 className="text-headline-sm font-headline-sm text-on-surface font-semibold tracking-tight">
                  Reproduction &amp; Safe Verification Plan
                </h2>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-label-code bg-secondary/15 text-secondary border border-secondary/30">
                CONTAINER ISOLATION: gVisor · 8001
              </span>
</div>

<div className="space-y-3">

<div className="flex items-start gap-x-3 p-3 bg-[#0E0E11] rounded border border-[#292A34]">
<div className="w-6 h-6 rounded-full bg-[#191A22] border border-[#292A34] flex items-center justify-center text-[11px] font-label-code text-secondary font-bold shrink-0 mt-0.5">
                  1
                </div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="text-[13px] font-headline-sm font-medium text-on-surface">Verify Target Asset Ingress Endpoint</span>
<span className="text-[11px] font-label-code text-[#45D49A] flex items-center gap-x-1">
<span className="material-symbols-outlined text-[13px]">check</span> PASS
                    </span>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant mt-0.5">
                    Confirmed socket availability on <code className="text-on-surface font-label-code">127.0.0.1:8001/api/v1/students/search</code> within the unshared network namespace.
                  </p>
</div>
</div>

<div className="flex items-start gap-x-3 p-3 bg-[#0E0E11] rounded border border-[#292A34]">
<div className="w-6 h-6 rounded-full bg-[#191A22] border border-[#292A34] flex items-center justify-center text-[11px] font-label-code text-secondary font-bold shrink-0 mt-0.5">
                  2
                </div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="text-[13px] font-headline-sm font-medium text-on-surface">Inject Deterministic SQL Taint Probe</span>
<span className="text-[11px] font-label-code text-[#45D49A] flex items-center gap-x-1">
<span className="material-symbols-outlined text-[13px]">check</span> EXPLOITED
                    </span>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant mt-0.5">
                    Fired non-destructive boolean bypass probe: <code className="text-primary font-label-code">' OR '1'='1</code>. Observed unrestricted return of entire students table without token authentication.
                  </p>
</div>
</div>

<div className="flex items-start gap-x-3 p-3 bg-[#0E0E11] rounded border border-[#292A34]">
<div className="w-6 h-6 rounded-full bg-[#191A22] border border-[#292A34] flex items-center justify-center text-[11px] font-label-code text-secondary font-bold shrink-0 mt-0.5">
                  3
                </div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="text-[13px] font-headline-sm font-medium text-on-surface">Observe DB Cursor &amp; Taint Propagation Graph</span>
<span className="text-[11px] font-label-code text-[#45D49A] flex items-center gap-x-1">
<span className="material-symbols-outlined text-[13px]">check</span> GRAPH BOUND
                    </span>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant mt-0.5">
                    Traced AST graph from AST variable declaration in <code className="text-on-surface font-label-code">search.py:41</code> to python sqlite3 native cursor wrapper at line 42.
                  </p>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between pt-2 gap-3">
<span className="text-[11px] font-body-sm text-outline">
                Automated replay sandbox container ready. Execution duration: ~1.2s.
              </span>
<button className="px-4 py-2 rounded bg-secondary-container hover:brightness-110 text-on-secondary-container font-headline-sm font-bold text-[12px] uppercase tracking-wider flex items-center gap-x-2 transition-all">
<span className="material-symbols-outlined text-[16px]">play_circle</span>
                Execute in Controlled Sandbox
              </button>
</div>
</div>
</div>



<div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-y-6">

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-3.5">
<div className="flex items-center justify-between border-b border-[#292A34] pb-2.5">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-primary text-[18px]">emergency</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold text-[15px]">
                  Risk in Application Context
                </h3>
</div>
<span className="text-[10px] font-label-badge bg-primary-container/20 text-primary px-1.5 py-0.5 rounded border border-primary-container/40">
                ACTIVE VECTOR
              </span>
</div>
<div className="space-y-2.5 text-[12px]">
<div className="flex items-center justify-between p-2 rounded bg-[#0E0E11] border border-[#292A34]">
<span className="text-on-surface-variant">Asset Criticality:</span>
<span className="font-label-code text-primary font-bold">Tier-1 Auth &amp; PII (x1.4)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-[#0E0E11] border border-[#292A34]">
<span className="text-on-surface-variant">Network Exposure:</span>
<span className="font-label-code text-on-surface">Internet-Facing Ingress Route</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-[#0E0E11] border border-[#292A34]">
<span className="text-on-surface-variant">Exploit Complexity:</span>
<span className="font-label-code text-primary font-bold">Trivial (No privileges required)</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-[#0E0E11] border border-[#292A34]">
<span className="text-on-surface-variant">Blast Radius:</span>
<span className="font-label-code text-[#FFB84D] font-bold">Full Student Academic &amp; Financial PII</span>
</div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-3.5">
<div className="flex items-center justify-between border-b border-[#292A34] pb-2.5">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-secondary text-[18px]">hub</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold text-[15px]">
                  Knowledge Graph Relations
                </h3>
</div>
<a className="text-[11px] font-label-code text-secondary hover:underline flex items-center gap-x-1" href="#/">
<span>Trace in Knowledge Graph</span>
<span className="material-symbols-outlined text-[13px]">north_east</span>
</a>
</div>

<div className="p-3.5 bg-[#0E0E11] rounded border border-[#292A34] flex flex-col gap-y-2">
<div className="flex items-center justify-between text-[11px] font-label-code">
<div className="px-2 py-1 rounded bg-[#191A22] border border-[#292A34] text-secondary flex items-center gap-x-1">
<span className="material-symbols-outlined text-[12px]">public</span>
                  Ingress (/students/search)
                </div>
<span className="text-outline">→</span>
<div className="px-2 py-1 rounded bg-[#191A22] border border-[#292A34] text-on-surface">
                  Controller
                </div>
</div>
<div className="flex items-center justify-center my-0.5">
<span className="material-symbols-outlined text-outline text-[14px]">arrow_downward</span>
</div>
<div className="flex items-center justify-between text-[11px] font-label-code">
<div className="px-2 py-1 rounded bg-primary-container/20 border border-primary-container/40 text-primary font-bold flex items-center gap-x-1">
<span className="material-symbols-outlined text-[12px]">code_blocks</span>
                  Taint Sink (db.execute)
                </div>
<span className="text-outline">→</span>
<div className="px-2 py-1 rounded bg-[#191A22] border border-[#292A34] text-outline">
                  PostgreSQL / SQLite
                </div>
</div>
<div className="mt-2 pt-2 border-t border-[#292A34] flex items-center justify-between text-[10px] font-label-code text-on-surface-variant">
<span>Graph Node: <strong className="text-on-surface">FND-8902</strong></span>
<span className="text-[#45D49A]">3 UPSTREAM · 2 DOWNSTREAM</span>
</div>
</div>
</div>

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-3.5">
<div className="flex items-center justify-between border-b border-[#292A34] pb-2.5">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-[#45D49A] text-[18px]">check_circle_outline</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold text-[15px]">
                  Remediation &amp; Code Diff
                </h3>
</div>
<span className="text-[10px] font-label-badge bg-[#003642] text-secondary px-1.5 py-0.5 rounded border border-secondary/30">
                AI PATCH READY
              </span>
</div>
<div className="text-[12px] font-body-sm text-on-surface-variant leading-relaxed">
<strong className="text-on-surface">Root Cause:</strong> Raw string interpolation in SQL query execution bypasses compiler lexical separation.
              <br/><strong className="text-on-surface">Fix:</strong> Parameterized query binding with named placeholder parameters.
            </div>

<div className="bg-[#08080B] rounded border border-[#292A34] p-3 font-label-code text-[11px] overflow-x-auto leading-relaxed">

<div className="bg-[#68000e]/30 text-primary px-1.5 py-0.5 rounded border-l-2 border-primary mb-1">
                - query = f"SELECT * FROM students WHERE id = '&#123;student_id&#125;'"<br/>
                - cursor.execute(query)
              </div>

<div className="bg-[#003642]/40 text-[#55C7E8] px-1.5 py-0.5 rounded border-l-2 border-[#55C7E8]">
                + query = "SELECT * FROM students WHERE id = :student_id"<br/>
                + cursor.execute(query, &#123;"student_id": validated_id&#125;)
              </div>
</div>

<button className="w-full py-2 rounded bg-surface-container-high border border-[#292A34] hover:border-primary-container text-on-surface hover:text-primary font-headline-sm font-semibold text-[12px] uppercase tracking-wider flex items-center justify-center gap-x-1.5 transition-all">
<span className="material-symbols-outlined text-[15px]">difference</span>
              Open in Remediation Workspace
            </button>
</div>

<div className="bg-[#12131A] border border-[#292A34] rounded-lg p-5 flex flex-col gap-y-3.5">
<div className="flex items-center justify-between border-b border-[#292A34] pb-2.5">
<div className="flex items-center gap-x-2">
<span className="material-symbols-outlined text-outline text-[18px]">history</span>
<h3 className="text-headline-sm font-headline-sm text-on-surface font-semibold text-[15px]">
                  History &amp; Audit Timeline
                </h3>
</div>
<span className="text-[10px] font-label-code text-outline">UTC</span>
</div>

<div className="relative pl-5 border-l border-[#292A34] space-y-3.5 text-[11px] font-label-code">

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-outline"></div>
<div className="flex items-center justify-between text-outline">
<span>14:15:02</span>
<span>Engine SCN-8092</span>
</div>
<p className="text-on-surface font-medium">Scan Initiated by Scheduler</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></div>
<div className="flex items-center justify-between text-outline">
<span>14:15:38</span>
<span className="text-primary">AST PySQL</span>
</div>
<p className="text-primary font-semibold">AST Taint Detected in search.py</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></div>
<div className="flex items-center justify-between text-outline">
<span>14:22:18</span>
<span>Analyst_442</span>
</div>
<p className="text-on-surface">Taint Sink Triaged &amp; Confirmed</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-[#45D49A]"></div>
<div className="flex items-center justify-between text-outline">
<span>14:35:44</span>
<span>Aegis Remediation Agent</span>
</div>
<p className="text-on-surface">Remediation Proposed (#P-8902 v2)</p>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-[#45D49A]"></div>
<div className="flex items-center justify-between text-outline">
<span>14:48:09</span>
<span className="text-[#45D49A]">gVisor Passed</span>
</div>
<p className="text-[#45D49A] font-semibold">Sandbox Validated (18/18)</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
};

export default FindingDetailPage;
