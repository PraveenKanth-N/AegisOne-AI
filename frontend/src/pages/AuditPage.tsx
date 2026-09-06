import React, { useState, useEffect } from 'react';
import { ScrollText, ShieldCheck, AlertTriangle } from 'lucide-react';
import { api } from '../services/api';
import { AuditLog } from '../types';

export const AuditPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    try {
      const data = await api.getAuditLogs();
      setLogs(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <ScrollText className="w-5 h-5 text-sky-400" />
            <span>Cryptographic Audit Trail & Event Ledger</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Tamper-evident system log tracking every scanner execution, AI recommendation, sandbox evaluation, and rollback action.
          </p>
        </div>

        <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          IMMUTABLE LOGGING ACTIVE
        </span>
      </div>

      {/* Audit Log Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800 font-mono text-[11px]">
              <th className="p-3.5">EVENT TIMESTAMP</th>
              <th className="p-3.5">EVENT TYPE</th>
              <th className="p-3.5">ACTOR</th>
              <th className="p-3.5">SEVERITY</th>
              <th className="p-3.5">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-950/40 transition-colors">
                  <td className="p-3.5 text-slate-400">{new Date(log.created_at).toLocaleTimeString()}</td>
                  <td className="p-3.5 text-sky-400 font-bold">{log.event_type}</td>
                  <td className="p-3.5 text-slate-300">{log.actor}</td>
                  <td className="p-3.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      log.severity === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400' :
                      log.severity === 'WARNING' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-300 font-sans text-xs">{log.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-400 text-xs">
                  No audit logs recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
