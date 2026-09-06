import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, AlertTriangle, Play, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { api } from '../services/api';

export const PcapPage: React.FC = () => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleAnalyze();
  }, []);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await api.analyzePcap();
      setData(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Activity className="w-5 h-5 text-sky-400" />
            <span>PCAP & Defensive Network Traffic Analyzer (CO2 / CO4)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Defensive packet inspection for SYN flood DoS attacks, port scanning recon, and protocol distributions.
          </p>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="flex items-center space-x-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs px-3.5 py-1.5 rounded-lg transition-colors disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Analyze Sample Capture</span>
        </button>
      </div>

      {data && (
        <div className="space-y-6">
          {/* Telemetry Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <span className="text-xs text-slate-400 font-mono">Total Packets Inspected</span>
              <div className="text-2xl font-bold text-white font-mono mt-1">{data.total_packets.toLocaleString()}</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <span className="text-xs text-slate-400 font-mono">Capture Duration</span>
              <div className="text-2xl font-bold text-sky-400 font-mono mt-1">{data.duration_seconds}s</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
              <span className="text-xs text-slate-400 font-mono">Peak Bandwidth</span>
              <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">{data.bandwidth_mbps} Mbps</div>
            </div>
            <div className="bg-slate-900/80 border border-rose-500/20 p-4 rounded-xl">
              <span className="text-xs text-rose-400 font-mono font-semibold">Anomalies Detected</span>
              <div className="text-2xl font-bold text-rose-400 font-mono mt-1">{data.anomalies_detected.length} Threats</div>
            </div>
          </div>

          {/* Traffic Timeline Chart */}
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-4">Traffic Ingestion & SYN Packet Rate (Packets / Second)</h3>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.traffic_timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                  <Area type="monotone" dataKey="syn_packets" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.2} name="SYN Flood Packets" />
                  <Area type="monotone" dataKey="normal_packets" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.1} name="Normal Traffic" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detected Anomalies List */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Detected Threat Indicators & Mitigations</h3>
            {data.anomalies_detected.map((anomaly: any, i: number) => (
              <div key={i} className="bg-slate-900/90 border border-rose-500/30 p-4 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span className="font-bold text-white text-sm">{anomaly.type}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold">{anomaly.severity}</span>
                  </div>
                  <span className="font-mono text-slate-400">Source: {anomaly.source_ip}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{anomaly.explanation}</p>
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px] font-mono text-emerald-400">
                  🛡️ Defense Guidance: {anomaly.defense}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
