import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, Play, Bell, CircleDot, User, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  onTriggerScan?: () => void;
  isScanning?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onTriggerScan, isScanning = false }) => {
  return (
    <header className="h-14 bg-[#08080B]/90 backdrop-blur-md border-b border-[#292A34] px-6 flex items-center justify-between z-20 shrink-0 select-none">
      {/* Target Selector & Scope Guard Indicator */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-[#12131A] border border-[#292A34] rounded-lg px-3 py-1.5 text-xs font-mono">
          <Server className="w-3.5 h-3.5 text-[#55C7E8]" />
          <span className="text-slate-400">Target:</span>
          <span className="font-semibold text-white">College Placement Portal</span>
          <span className="text-[10px] text-[#55C7E8] font-mono">(:8001)</span>
        </div>

        {/* Scope Guard Authorization Banner */}
        <div className="hidden md:flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide shadow-sm shadow-emerald-500/10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>AUTHORIZED LOCAL TARGET — SAFE TO SCAN</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Scan Status Indicator */}
        <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-300 bg-[#12131A] px-2.5 py-1 rounded-lg border border-[#292A34]">
          <CircleDot className={`w-3 h-3 ${isScanning ? 'text-amber-400 animate-spin' : 'text-emerald-400'}`} />
          <span>{isScanning ? 'Scan in Progress' : 'Engine Ready'}</span>
        </div>

        {/* Action Button */}
        <Link
          to="/console/scans/configure"
          className="flex items-center space-x-1.5 bg-[#F20D32] hover:bg-[#8E0924] text-white font-mono font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md shadow-[#F20D32]/20 transition-all duration-150"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Trigger Scan</span>
        </Link>

        {/* Operator Profile Pill */}
        <Link
          to="/console/account"
          className="w-7 h-7 rounded-lg bg-[#12131A] border border-[#292A34] hover:border-[#55C7E8] flex items-center justify-center text-xs font-mono font-bold text-[#55C7E8] transition-colors"
          title="Analyst Profile"
        >
          KJ
        </Link>
      </div>
    </header>
  );
};
export default TopBar;
