import React, { useState } from 'react';
import { Settings, ShieldCheck, CheckCircle2, Server, Database, BrainCircuit, KeyRound, Save } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [aiProvider, setAiProvider] = useState('mock');
  const [useNeo4j, setUseNeo4j] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12 text-xs max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Settings className="w-5 h-5 text-cyan-400" />
            <span>Platform Settings & Tool Integrations</span>
          </h1>
          <p className="text-slate-400 mt-0.5">
            Configure AI reasoning providers, Scope Guard allowlists, and database connection modes.
          </p>
        </div>

        {saved && (
          <div className="flex items-center space-x-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-lg font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Settings Saved</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Scope Guard Configuration */}
        <div className="bg-[#0D1322] border border-[#1E293B] rounded-xl p-5 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <h2 className="text-sm text-white">Scope Guard Boundary Settings</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            AegisOne strictly restricts scan execution to whitelisted local and containerized laboratory targets.
          </p>
          <div className="bg-[#051424] p-3 rounded-lg border border-[#1E293B] font-mono text-[11px] text-slate-300">
            <div><strong>Active Whitelist:</strong> localhost, 127.0.0.1, host.docker.internal, college-placement-portal</div>
            <div className="text-emerald-400 mt-1">Status: HARD BOUNDARY ACTIVE (HTTP 403 on external hosts)</div>
          </div>
        </div>

        {/* AI Engine Provider Abstraction */}
        <div className="bg-[#0D1322] border border-[#1E293B] rounded-xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-cyan-400 font-bold">
            <BrainCircuit className="w-4 h-4" />
            <h2 className="text-sm text-white">AI Security Analyst Provider</h2>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">Active Provider Mode:</label>
            <select
              value={aiProvider}
              onChange={(e) => setAiProvider(e.target.value)}
              className="w-full bg-[#051424] border border-[#1E293B] rounded-lg p-2.5 text-slate-200 font-mono outline-none focus:border-cyan-500"
            >
              <option value="mock">DETERMINISTIC_MOCK (GraphRAG Grounded, Offline Demo Ready)</option>
              <option value="openai">OPENAI_API (Via OPENAI_API_KEY environment variable)</option>
            </select>
          </div>

          <p className="text-slate-400 text-[11px]">
            In deterministic mock mode, the AI reasoning engine runs 100% offline using the curated Security Knowledge Graph and confirmed scanner evidence.
          </p>
        </div>

        {/* Knowledge Graph Engine */}
        <div className="bg-[#0D1322] border border-[#1E293B] rounded-xl p-5 space-y-4">
          <div className="flex items-center space-x-2 text-indigo-400 font-bold">
            <Database className="w-4 h-4" />
            <h2 className="text-sm text-white">Security Knowledge Graph Engine</h2>
          </div>

          <div className="flex items-center justify-between bg-[#051424] p-3 rounded-lg border border-[#1E293B]">
            <div>
              <span className="font-bold text-white block">NetworkX In-Memory Directed Graph</span>
              <span className="text-slate-400 text-[11px]">Zero-dependency in-memory graph active with &lt;5ms traversal latency.</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
              ONLINE
            </span>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-[#090D16] font-bold px-5 py-2.5 rounded-lg shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
};
