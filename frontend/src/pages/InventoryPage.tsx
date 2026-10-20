import React, { useState, useEffect } from 'react';
import { Server, Database, Lock, Activity, ShieldCheck, Plus, ExternalLink, RefreshCw } from 'lucide-react';
import { api } from '../services/api';
import { Asset, Project } from '../types';

export const InventoryPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    setLoading(true);
    try {
      const p = await api.getProjects();
      setProjects(p);
      const a = await api.getAttackSurface();
      setAssets(a);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12 text-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Server className="w-5 h-5 text-cyan-400" />
            <span>Application & Attack Surface Inventory</span>
          </h1>
          <p className="text-slate-400 mt-0.5">
            Registered target applications, monitored architectural components, and data sensitivity classifications.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-lg font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Scope Guard: 100% Authorized</span>
          </div>
          <button
            onClick={loadInventory}
            className="flex items-center space-x-1 bg-[#0D1322] hover:bg-[#141C2E] border border-[#1E293B] text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Target Application Overview Card */}
      {projects.map((proj) => (
        <div key={proj.id} className="bg-[#0D1322] border border-[#1E293B] rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-white">{proj.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                  {proj.authorization_status}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-[#051424] px-2 py-0.5 rounded border border-[#1E293B]">
                  {proj.environment}
                </span>
              </div>
              <p className="text-slate-400 mt-1">{proj.description}</p>
            </div>
            <div className="text-right font-mono">
              <span className="text-slate-400 text-[10px] block uppercase">Target URL</span>
              <code className="text-cyan-400 font-bold">{proj.target_url}</code>
            </div>
          </div>

          {/* Monitored Asset Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Mapped Assets & Data Sensitivity Tiers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-[#051424] border border-[#1E293B] p-4 rounded-xl space-y-2 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      asset.data_sensitivity === 'HIGH_PII' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                      asset.data_sensitivity === 'CREDENTIALS' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {asset.data_sensitivity}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Criticality: {asset.criticality}</span>
                  </div>

                  <h4 className="font-bold text-slate-100 text-sm">{asset.name}</h4>

                  <div className="space-y-1 font-mono text-[11px] text-slate-400 pt-1 border-t border-[#1E293B]/60">
                    <div>Type: <span className="text-slate-200">{asset.asset_type}</span></div>
                    <div>Exposure: <span className="text-cyan-400">{asset.exposure}</span></div>
                    <div>Active Findings: <span className="text-rose-400 font-bold">{asset.vulnerability_count || 1}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
