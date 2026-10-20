import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  ShieldCheck,
  Radar,
  Share2,
  Boxes,
  Wrench,
  Activity,
  ArrowRight,
  Terminal,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  Server,
  Lock,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#051424] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      {/* Top Public Navigation */}
      <nav className="h-16 border-b border-[#1E293B] bg-[#051424]/80 backdrop-blur-md sticky top-0 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#051424] rounded-[7px] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-white">AegisOne</span>
            <span className="ml-1 text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.2 rounded font-mono font-semibold">AI</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-medium text-slate-300">
          <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Security Pipeline</a>
          <a href="#graph" className="hover:text-cyan-400 transition-colors">Knowledge Graph</a>
          <a href="#sandbox" className="hover:text-cyan-400 transition-colors">Sandbox Validation</a>
          <a href="#research" className="hover:text-cyan-400 transition-colors">Research Contribution</a>
          <a href="#targets" className="hover:text-cyan-400 transition-colors">Lab Targets</a>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>Scope Guard Active</span>
          </div>
          <button
            onClick={() => navigate('/console')}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-[#090D16] font-bold text-xs px-4 py-2 rounded-lg shadow-md shadow-cyan-500/20 transition-all duration-150"
          >
            <span>Launch Command Center</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-24 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#0D1322] border border-[#1E293B] px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Explainable DevSecOps Architecture • Academic Research Prototype</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Security fixes should be <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">proven safe</span> before they ship.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect application evidence, contextual risk intelligence, and AI-assisted remediation with isolated sandbox validation in one closed-loop developer security copilot.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate('/console')}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-[#090D16] font-bold text-sm px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Enter Security Console</span>
            </button>
            <a
              href="#sandbox"
              className="flex items-center space-x-2 bg-[#0D1322] hover:bg-[#141C2E] border border-[#1E293B] text-slate-200 text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Boxes className="w-4 h-4 text-cyan-400" />
              <span>Explore Sandbox Validation</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left">
            <div className="bg-[#0D1322] border border-[#1E293B] p-4 rounded-xl">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Target Lab</span>
              <span className="text-lg font-bold text-white font-mono mt-1 block">Placement Portal</span>
              <span className="text-[11px] text-cyan-400 font-mono">localhost:8001</span>
            </div>
            <div className="bg-[#0D1322] border border-[#1E293B] p-4 rounded-xl">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Contextual Risk</span>
              <span className="text-lg font-bold text-rose-400 font-mono mt-1 block">87.0 / 100</span>
              <span className="text-[11px] text-slate-400">Grounded in High-PII</span>
            </div>
            <div className="bg-[#0D1322] border border-[#1E293B] p-4 rounded-xl">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Decision Pipeline</span>
              <span className="text-lg font-bold text-emerald-400 font-mono mt-1 block">10 Stages</span>
              <span className="text-[11px] text-slate-400">Closed-Loop Verified</span>
            </div>
            <div className="bg-[#0D1322] border border-[#1E293B] p-4 rounded-xl">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Sandbox Safety</span>
              <span className="text-lg font-bold text-purple-400 font-mono mt-1 block">Auto-Rollback</span>
              <span className="text-[11px] text-slate-400">Zero Unsafe Merges</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 10-Stage Security Workflow Section */}
      <section id="pipeline" className="px-8 py-20 bg-[#090D16] border-t border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Core Research Methodology</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">The 10-Stage Closed-Loop Security Pipeline</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              AI recommendations are treated as untrusted advisory candidates. The system enforces empirical evidence validation and isolated sandbox testing before code is accepted.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            {[
              { num: '01', title: 'DETECT', desc: 'Authorized DAST & AST scans sweep target' },
              { num: '02', title: 'CONTEXT', desc: 'Normalize findings & link affected assets' },
              { num: '03', title: 'GRAPH', desc: '2-hop ontology traversal in Security Graph' },
              { num: '04', title: 'RISK', desc: 'Transparent multi-factor risk quantification' },
              { num: '05', title: 'EXPLAIN', desc: 'Tripartite: Evidence / Interpretation / Fix' },
              { num: '06', title: 'FIX', desc: 'Propose reviewable unified code diff' },
              { num: '07', title: 'SANDBOX', desc: 'Clone clean baseline into isolated workspace' },
              { num: '08', title: 'VALIDATE', desc: 'Syntax, Regression, and AST pattern checks' },
              { num: '09', title: 'RE-SCAN', desc: 'Secondary scan confirms zero regressions' },
              { num: '10', title: 'DECISION', desc: 'Accept patch or trigger automated rollback' },
            ].map((st, i) => (
              <div key={i} className="bg-[#0D1322] border border-[#1E293B] p-4 rounded-xl space-y-2 hover:border-cyan-500/40 transition-colors">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">{st.num}</span>
                <span className="font-bold text-white block text-sm tracking-wide">{st.title}</span>
                <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tripartite Explainable AI & Knowledge Graph Showcase */}
      <section id="graph" className="px-8 py-20 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Explainable AI & GraphRAG</span>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
              Grounding AI in Curated Security Ontologies, Not Generative Guesses.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Generic LLMs frequently hallucinate nonexistent vulnerabilities or propose superficial patches that break production features. AegisOne links scanner findings to an interconnected Security Knowledge Graph representing MITRE CWE, OWASP Top 10, ATT&CK techniques, and NIST SI-10 controls.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Layer 1: Confirmed Scanner Evidence Only</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Layer 2: Contextual Knowledge Graph Threat Reasoning</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Layer 3: Actionable, Reviewable Remediation Code Diff</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/console/knowledge-graph')}
              className="flex items-center space-x-2 bg-[#0D1322] hover:bg-[#141C2E] border border-[#1E293B] text-cyan-300 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Explore Interactive Graph Canvas</span>
            </button>
          </div>

          {/* Graphical Mockup Card */}
          <div className="bg-[#0D1322] border border-[#1E293B] rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-3 mb-4 text-xs font-mono">
              <span className="text-slate-400">ONTOLOGY PATH INSPECTOR</span>
              <span className="text-cyan-400">2-Hop Grounded</span>
            </div>
            <div className="space-y-3 text-xs font-mono">
              <div className="bg-[#051424] p-3 rounded-lg border border-rose-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-rose-400 block font-bold">VULNERABILITY</span>
                  <span className="text-white font-semibold">SQL Injection in Student Search</span>
                </div>
                <span className="text-rose-400 font-bold">CWE-89</span>
              </div>
              <div className="pl-6 border-l-2 border-[#1E293B] space-y-2">
                <div className="bg-[#051424] p-2.5 rounded-lg border border-[#1E293B] flex items-center justify-between">
                  <span className="text-slate-300">Target Asset: Student Database</span>
                  <span className="text-rose-400 font-semibold">HIGH PII</span>
                </div>
                <div className="bg-[#051424] p-2.5 rounded-lg border border-[#1E293B] flex items-center justify-between">
                  <span className="text-slate-300">Verified Mitigation: Parameterized Queries</span>
                  <span className="text-emerald-400 font-semibold">NIST SI-10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandbox & Rollback Feature Section */}
      <section id="sandbox" className="px-8 py-20 bg-[#090D16] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Empirical Defense Testing</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Isolated Sandbox Validation & Automated Rollback</h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Witness how AegisOne detects flawed AI suggestions that introduce regressions or new vulnerabilities, triggering automated rollback to protect the production codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Valid Fix Path */}
            <div className="bg-[#0D1322] border border-emerald-500/30 p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Scenario A: Verified Safe Remediation</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The AI patch replaces string concatenation with parameterized SQL bindings. The sandbox runs 18 regression tests, validates AST tree integrity, and re-scans the application.
              </p>
              <div className="bg-[#051424] p-3 rounded-lg border border-[#1E293B] space-y-1 font-mono text-[11px]">
                <div className="text-emerald-400">✓ Syntax Check: PASS</div>
                <div className="text-emerald-400">✓ 18 Unit & Regression Tests: PASS (0 broken)</div>
                <div className="text-emerald-400">✓ Secondary Security Re-Scan: 0 New Flaws</div>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded">
                STATUS: VALIDATED SAFE (MERGE PERMITTED)
              </span>
            </div>

            {/* Bad AI Fix Path */}
            <div className="bg-[#0D1322] border border-rose-500/30 p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                <XCircle className="w-5 h-5" />
                <span>Scenario B: Controlled AI Flaw Rejection & Rollback</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                A candidate patch attempts to fix a flaw but inadvertently disables authentication checks and leaks student CGPAs (CWE-200).
              </p>
              <div className="bg-[#051424] p-3 rounded-lg border border-[#1E293B] space-y-1 font-mono text-[11px]">
                <div className="text-emerald-400">✓ Syntax Check: PASS</div>
                <div className="text-rose-400">✗ Regression Tests: FAILED (Auth Contract Broken)</div>
                <div className="text-rose-400">✗ Security Re-Scan: Secondary CWE-200 Detected</div>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded">
                STATUS: REMEDIATION REJECTED • AUTOMATED ROLLBACK EXECUTED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Applications Section */}
      <section id="targets" className="px-8 py-20 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Authorized Test Target</span>
          <h2 className="text-2xl font-bold text-white tracking-tight">The College Placement Portal Lab</h2>
          <p className="text-xs text-slate-400">Running natively in isolation on localhost:8001</p>
        </div>

        <div className="bg-[#0D1322] border border-[#1E293B] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="space-y-2">
            <span className="text-cyan-400 font-mono font-bold">Vulnerability 01</span>
            <h3 className="text-sm font-bold text-white">SQL Injection (CWE-89)</h3>
            <p className="text-slate-400">Endpoint: <code>/api/students/search</code></p>
            <p className="text-slate-400 leading-relaxed">Direct f-string concatenation in query strings enables student database extraction.</p>
          </div>
          <div className="space-y-2">
            <span className="text-cyan-400 font-mono font-bold">Vulnerability 02</span>
            <h3 className="text-sm font-bold text-white">Stored XSS (CWE-79)</h3>
            <p className="text-slate-400">Endpoint: <code>/profile/view</code></p>
            <p className="text-slate-400 leading-relaxed">Candidate profile bio rendered without context-aware HTML entity escaping.</p>
          </div>
          <div className="space-y-2">
            <span className="text-cyan-400 font-mono font-bold">Vulnerability 03</span>
            <h3 className="text-sm font-bold text-white">Hardcoded Secret (CWE-798)</h3>
            <p className="text-slate-400">Endpoint: <code>/auth/login</code></p>
            <p className="text-slate-400 leading-relaxed">Static default administrator password in configuration enables trivial bypass.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E293B] px-8 py-10 bg-[#051424] text-xs text-slate-400 text-center space-y-2">
        <p className="font-semibold text-slate-300">AegisOne AI — Defensive Cybersecurity Research Platform</p>
        <p className="font-mono text-[11px]">Strict Scope Guard Whitelist Enforcement: Localhost & Authorized Lab Environments Only.</p>
      </footer>
    </div>
  );
};
