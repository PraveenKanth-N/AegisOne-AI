import React from 'react';
import { ShieldCheck, Server, Play, Bell, CircleDot } from 'lucide-react';

interface TopBarProps {
  onTriggerScan?: () => void;
  isScanning?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onTriggerScan, isScanning = false }) => {
  return (
    <header className="h-14 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between z-20 shrink-0">
      {/* Target Selector & Scope Guard Indicator */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
          <Server className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-slate-400">Target:</span>
          <span className="font-semibold text-slate-200">College Placement Portal</span>
          <span className="text-[10px] text-slate-400 font-mono">(:8001)</span>
        </div>

        {/* Scope Guard Authorization Banner */}
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide shadow-sm shadow-emerald-500/10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>AUTHORIZED LOCAL TARGET — SAFE TO SCAN</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Scan Status Indicator */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
          <CircleDot className={`w-3 h-3 ${isScanning ? 'text-amber-400 animate-spin' : 'text-emerald-400'}`} />
          <span>{isScanning ? 'Scan in Progress' : 'Engine Ready'}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={onTriggerScan}
          disabled={isScanning}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs px-3.5 py-1.5 rounded-lg shadow-md shadow-sky-500/20 transition-all duration-150 disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Launch Hybrid Scan</span>
        </button>

        {/* Profile */}
        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-sky-400">
          SEC
        </div>
      </div>
    </header>
  );
};
