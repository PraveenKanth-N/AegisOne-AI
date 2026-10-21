import React, { useState, useEffect } from 'react';
import { api, AuditLog } from '../services/api';
import {
  User,
  Shield,
  Key,
  Clock,
  Activity,
  CheckCircle2,
  Lock,
  RefreshCw,
  FileText,
  Terminal,
  Award,
  Fingerprint
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const data = await api.getAuditLogs();
      setLogs(data);
    } catch (err) {
      console.error('Failed to load operator audit logs', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F20D32] to-indigo-600 p-0.5 shadow-lg shadow-[#F20D32]/20">
              <div className="w-full h-full bg-[#0D0E13] rounded-[10px] flex items-center justify-center text-white font-mono font-bold text-xl">
                KJ
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-white">Kevin John (Analyst_442)</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F20D32]/20 text-[#F20D32] border border-[#F20D32]/30 font-bold uppercase">
                  Lead SecOps Operator
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1 flex items-center space-x-3">
                <span>Node: sec-wkstn-442-va</span>
                <span>•</span>
                <span className="text-[#55C7E8]">Zero-Trust Session Active</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchLogs}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-200 rounded-lg text-xs font-mono transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Log</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Cryptographic Identity & Session Attributes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-2">
          <div className="text-xs font-mono uppercase text-slate-400 flex items-center space-x-1.5">
            <Fingerprint className="w-4 h-4 text-[#55C7E8]" />
            <span>Cryptographic Key (Ed25519)</span>
          </div>
          <div className="font-mono text-xs text-slate-200 truncate bg-[#08080B] p-2 rounded border border-[#292A34]">
            ed25519:7E3F9A1C8B4D209F...
          </div>
          <div className="text-[10px] text-slate-500 font-mono">Used for signing sandbox validation commits</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-2">
          <div className="text-xs font-mono uppercase text-slate-400 flex items-center space-x-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Assigned Security Clearance</span>
          </div>
          <div className="font-mono text-xs text-emerald-400 bg-[#08080B] p-2 rounded border border-[#292A34]">
            LEVEL-4: Full Remediation & Docker Execution
          </div>
          <div className="text-[10px] text-slate-500 font-mono">Scope: college-placement-v2.1 Lab Whitelist</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-2">
          <div className="text-xs font-mono uppercase text-slate-400 flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Session Lease</span>
          </div>
          <div className="font-mono text-xs text-slate-200 bg-[#08080B] p-2 rounded border border-[#292A34]">
            Expires in 07h 42m (Dual-Auth)
          </div>
          <div className="text-[10px] text-slate-500 font-mono">Hardware token verified via WebAuthn</div>
        </div>
      </div>

      {/* Activity Timeline from Audit Log */}
      <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#292A34]">
          <h2 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider flex items-center space-x-2">
            <Activity className="w-4 h-4 text-[#55C7E8]" />
            <span>Personal Operator Activity & Audit History</span>
          </h2>
          <span className="text-[11px] font-mono text-slate-500">
            {logs.length} logged events recorded
          </span>
        </div>

        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
          {logs.length === 0 ? (
            <div className="text-center py-8 text-xs font-mono text-slate-500">
              No recent operator audit activities found.
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-lg bg-[#12131A] border border-[#292A34] flex items-center justify-between hover:border-slate-600 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-white">{log.action}</span>
                    <span className="text-[10px] px-2 py-0.2 rounded bg-[#191A22] text-[#55C7E8] font-mono border border-[#292A34]">
                      {log.target_type || 'SYSTEM'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {log.details || `Operator initiated action ${log.action}`}
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono text-slate-500 whitespace-nowrap">
                  {log.created_at ? new Date(log.created_at).toLocaleTimeString() : 'Recent'}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
