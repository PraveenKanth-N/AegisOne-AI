import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const KnowledgeGraphPage: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (api.getGraph) {
          const res = await api.getGraph();
          setData(res);
        }
      } catch (err) {
        console.error('Failed to load KnowledgeGraphPage data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">


<div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-[#0D0E13]/90 backdrop-blur border border-outline-variant/40 rounded p-1 shadow-lg">
<button className="p-1.5 text-on-surface-variant hover:text-white rounded hover:bg-surface-container-high transition-colors" title="Pan Canvas">
<span className="material-symbols-outlined text-base">pan_tool</span>
</button>
<div className="h-4 w-[1px] bg-outline-variant/30 mx-0.5"></div>
<button className="p-1.5 text-on-surface-variant hover:text-white rounded hover:bg-surface-container-high transition-colors" title="Zoom In">
<span className="material-symbols-outlined text-base">zoom_in</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-white rounded hover:bg-surface-container-high transition-colors" title="Zoom Out">
<span className="material-symbols-outlined text-base">zoom_out</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-white rounded hover:bg-surface-container-high transition-colors" title="Fit to Viewport">
<span className="material-symbols-outlined text-base">fit_screen</span>
</button>
<button className="p-1.5 text-primary hover:text-white rounded hover:bg-surface-container-high transition-colors" title="Center Focus">
<span className="material-symbols-outlined text-base">my_location</span>
</button>
<div className="h-4 w-[1px] bg-outline-variant/30 mx-0.5"></div>
<button className="px-2 py-1 text-[11px] font-label-code text-secondary flex items-center gap-1 rounded hover:bg-surface-container-high">
<span className="material-symbols-outlined text-xs">alt_route</span> Hierarchical DAG
          </button>
<button className="px-2 py-1 text-[11px] font-label-code text-on-surface-variant hover:text-white rounded hover:bg-surface-container-high">
            Physics: On
          </button>
</div>

<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="w-[520px] h-[520px] rounded-full bg-radial from-[#F20D32]/12 to-transparent blur-3xl"></div>
</div>

<div className="flex-1 relative w-full h-full flex items-center justify-center p-6">
<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>

<marker id="arrow-crimson" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="28" refY="5" viewBox="0 0 10 10">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#F20D32"></path>
</marker>
<marker id="arrow-cyan" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="28" refY="5" viewBox="0 0 10 10">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#55C7E8"></path>
</marker>
<marker id="arrow-amber" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="28" refY="5" viewBox="0 0 10 10">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#FFB84D"></path>
</marker>
<marker id="arrow-emerald" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="28" refY="5" viewBox="0 0 10 10">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#45D49A"></path>
</marker>
<marker id="arrow-violet" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="28" refY="5" viewBox="0 0 10 10">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#b084f6"></path>
</marker>
</defs>


<path d="M 140 180 C 190 180, 210 240, 270 240" fill="none" opacity="0.6" stroke="#8F90A0" stroke-dasharray="4,4" stroke-width="1.5"></path>

<path className="filter drop-shadow-[0_0_8px_rgba(242,13,50,0.5)]" d="M 400 240 C 440 240, 460 300, 500 300" fill="none" marker-end="url(#arrow-crimson)" stroke="#F20D32" stroke-width="2.5"></path>

<path d="M 330 380 C 390 380, 440 330, 500 300" fill="none" marker-end="url(#arrow-cyan)" stroke="#55C7E8" stroke-width="2"></path>

<path d="M 640 300 C 690 300, 710 230, 760 210" fill="none" marker-end="url(#arrow-amber)" stroke="#FFB84D" stroke-dasharray="5,4" stroke-width="2"></path>

<path className="filter drop-shadow-[0_0_8px_rgba(242,13,50,0.6)]" d="M 870 210 C 900 210, 920 180, 950 170" fill="none" marker-end="url(#arrow-crimson)" stroke="#F20D32" stroke-dasharray="4,4" stroke-width="2.5"></path>

<path d="M 570 270 C 570 200, 580 160, 600 130" fill="none" marker-end="url(#arrow-violet)" stroke="#b084f6" stroke-dasharray="3,3" stroke-width="1.5"></path>

<path d="M 600 330 C 630 370, 660 390, 700 400" fill="none" marker-end="url(#arrow-emerald)" stroke="#45D49A" stroke-width="2"></path>

<path d="M 830 410 C 860 410, 890 410, 920 410" fill="none" marker-end="url(#arrow-amber)" stroke="#FFB84D" stroke-width="1.5"></path>
</svg>

<div className="relative w-full h-full">

<div className="absolute left-[30px] top-[150px] w-48 p-2.5 rounded bg-[#12131A] border border-outline-variant/50 shadow-md hover:border-white transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-surface-container-high text-on-surface-variant px-1.5 py-0.2 rounded uppercase">INGRESS</span>
<span className="material-symbols-outlined text-outline text-xs">router</span>
</div>
<div className="text-xs font-label-code text-on-surface font-semibold truncate">Nginx Gateway Proxy</div>
<div className="text-[10px] font-label-code text-outline mt-0.5">Port 443 · External Route</div>
</div>

<div className="absolute left-[195px] top-[195px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-outline-variant/40 text-[9px] font-label-badge text-outline">
              exposed_through
            </div>

<div className="absolute left-[240px] top-[215px] w-52 p-2.5 rounded bg-[#12131A] border border-secondary/40 shadow-md hover:border-secondary transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-secondary/15 text-secondary px-1.5 py-0.2 rounded uppercase">APP ASSET</span>
<span className="material-symbols-outlined text-secondary text-xs">code</span>
</div>
<div className="text-xs font-label-code text-white font-semibold truncate">/api/v1/auth/profile.py:42</div>
<div className="text-[10px] font-label-code text-on-surface-variant/80 mt-0.5">FastAPI Controller · def get_profile</div>
</div>

<div className="absolute left-[425px] top-[255px] px-2 py-0.5 rounded bg-[#F20D32]/20 border border-[#F20D32]/60 text-[9px] font-label-badge text-[#ff8088] font-bold shadow-sm">
              affects (taint)
            </div>

<div className="absolute left-[200px] top-[355px] w-56 p-2.5 rounded bg-[#12131A] border border-[#55C7E8]/50 shadow-md hover:border-[#55C7E8] transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-[#55C7E8]/15 text-[#55C7E8] px-1.5 py-0.2 rounded uppercase">EVIDENCE ARTIFACT</span>
<span className="material-symbols-outlined text-[#55C7E8] text-xs">travel_explore</span>
</div>
<div className="text-xs font-label-code text-white font-semibold truncate">AST Taint Trace #9042</div>
<div className="text-[10px] font-label-code text-on-surface-variant/70 mt-0.5">Source: req.params.student_id</div>
</div>

<div className="absolute left-[400px] top-[345px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-[#55C7E8]/40 text-[9px] font-label-badge text-[#55C7E8]">
              observed_at
            </div>



<div className="absolute left-[450px] top-[260px] w-64 p-3.5 rounded-lg bg-[#191A22] border-2 border-[#F20D32] shadow-[0_0_28px_rgba(242,13,50,0.45)] ring-2 ring-[#F20D32]/30 cursor-pointer z-10 transition-transform hover:scale-[1.02]">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-[#F20D32] animate-ping"></span>
<span className="text-[10px] font-label-badge bg-[#F20D32]/25 text-[#ffb4ab] border border-[#F20D32] px-2 py-0.5 rounded uppercase font-bold">
                    SECURITY FINDING · CRITICAL
                  </span>
</div>
<span className="text-[10px] font-label-badge text-white font-mono bg-primary-container px-1 rounded">8.6</span>
</div>
<div className="text-sm font-headline-sm text-white font-bold tracking-tight">
                CWE-89: SQL Injection
              </div>
<div className="text-[11px] font-label-code text-[#ffb3af] font-semibold mt-0.5">
                #FND-8902 · UserProfileQuery
              </div>
<div className="mt-2 pt-2 border-t border-outline-variant/40 flex items-center justify-between text-[10px] font-label-code text-on-surface-variant">
<span>Deterministic AST Flow</span>
<span className="text-[#45D49A] flex items-center gap-0.5">
<span className="material-symbols-outlined text-xs">verified</span> Confirmed
                </span>
</div>
</div>

<div className="absolute left-[540px] top-[80px] w-52 p-2 rounded bg-[#12131A] border border-purple-500/40 shadow-sm hover:border-purple-400 transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-purple-500/15 text-purple-300 px-1.5 py-0.2 rounded uppercase">WEAKNESS / TAXONOMY</span>
<span className="material-symbols-outlined text-purple-400 text-xs">account_tree</span>
</div>
<div className="text-xs font-label-code text-white font-semibold">OWASP A03:2021</div>
<div className="text-[10px] font-label-code text-outline">Injection Class Category</div>
</div>

<div className="absolute left-[585px] top-[190px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-purple-500/30 text-[9px] font-label-badge text-purple-300">
              classifies
            </div>

<div className="absolute left-[685px] top-[245px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-amber-500/40 text-[9px] font-label-badge text-amber-300">
              accesses (taint)
            </div>

<div className="absolute left-[725px] top-[170px] w-52 p-2.5 rounded bg-[#12131A] border border-amber-500/40 shadow-md hover:border-amber-400 transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-amber-500/15 text-amber-300 px-1.5 py-0.2 rounded uppercase">DATA STORE</span>
<span className="material-symbols-outlined text-amber-400 text-xs">database</span>
</div>
<div className="text-xs font-label-code text-white font-semibold truncate">PostgreSQL Auth DB</div>
<div className="text-[10px] font-label-code text-amber-300/80 mt-0.5">Tier-1 Relational Datastore</div>
</div>

<div className="absolute left-[890px] top-[175px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-[#F20D32]/50 text-[9px] font-label-badge text-[#ff8088]">
              stores
            </div>

<div className="absolute left-[920px] top-[125px] w-56 p-2.5 rounded bg-[#191A22] border border-yellow-500/60 shadow-[0_0_16px_rgba(234,179,8,0.2)] hover:border-yellow-400 transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-yellow-500/15 text-yellow-300 px-1.5 py-0.2 rounded uppercase">HIGH-VALUE ASSET</span>
<span className="material-symbols-outlined text-yellow-400 text-xs">lock</span>
</div>
<div className="text-xs font-label-code text-white font-bold truncate">Student Records &amp; FERPA PII</div>
<div className="text-[10px] font-label-code text-yellow-200/70 mt-0.5">SSN, Grades, Auth Tokens</div>
</div>

<div className="absolute left-[640px] top-[370px] px-1.5 py-0.5 rounded bg-[#0D0E13] border border-emerald-500/40 text-[9px] font-label-badge text-emerald-300">
              mitigates
            </div>

<div className="absolute left-[685px] top-[380px] w-52 p-2.5 rounded bg-[#12131A] border border-emerald-500/50 shadow-md hover:border-emerald-400 transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-emerald-500/15 text-emerald-300 px-1.5 py-0.2 rounded uppercase">SECURITY CONTROL</span>
<span className="material-symbols-outlined text-emerald-400 text-xs">verified_user</span>
</div>
<div className="text-xs font-label-code text-white font-semibold truncate">Parameterized Query Guard</div>
<div className="text-[10px] font-label-code text-emerald-300/80 mt-0.5">AST Compiler Guard Rule</div>
</div>

<div className="absolute left-[905px] top-[380px] w-56 p-2.5 rounded bg-[#12131A] border border-[#FFB84D]/50 shadow-md hover:border-[#FFB84D] transition-all cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] font-label-badge bg-[#FFB84D]/15 text-[#FFB84D] px-1.5 py-0.2 rounded uppercase">REMEDIATION ACTION</span>
<span className="material-symbols-outlined text-[#FFB84D] text-xs">build</span>
</div>
<div className="text-xs font-label-code text-white font-semibold truncate">Patch Candidate #P-8902</div>
<div className="text-[10px] font-label-code text-on-surface-variant mt-0.5">cursor.execute with %s bind</div>
</div>
</div>
</div>

<div className="absolute bottom-3 left-4 z-20 flex items-center gap-3 text-[10px] font-label-code text-outline bg-[#0D0E13]/80 px-2.5 py-1 rounded border border-outline-variant/30">
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Graph Synchronized
          </span>
<span>·</span>
<span>Taint Hop Length: 4 Hops</span>
<span>·</span>
<span>Canvas Scale: 100%</span>
</div>

    </div>
  );
};

export default KnowledgeGraphPage;
