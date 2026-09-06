import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldAlert,
  LayoutDashboard,
  FolderGit2,
  Network,
  Radar,
  Bug,
  BrainCircuit,
  Share2,
  Wrench,
  Boxes,
  GitCompare,
  Activity,
  MailWarning,
  KeyRound,
  GraduationCap,
  ScrollText,
  FileCheck2,
  Lock
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: 'Command Center', path: '/', icon: LayoutDashboard },
  { name: 'Projects & Scope', path: '/projects', icon: FolderGit2 },
  { name: 'Attack Surface', path: '/attack-surface', icon: Network },
  { name: 'Security Scans', path: '/scans', icon: Radar },
  { name: 'Findings Explorer', path: '/findings', icon: Bug, badge: '3' },
  { name: 'Knowledge Graph', path: '/knowledge-graph', icon: Share2 },
  { name: 'AI Security Analyst', path: '/ai-analyst', icon: BrainCircuit },
  { name: 'Remediation Diff', path: '/remediation', icon: Wrench },
  { name: 'Sandbox Validation', path: '/sandbox', icon: Boxes, badge: 'Live' },
  { name: 'Security Comparison', path: '/comparison', icon: GitCompare },
  { name: 'PCAP Analyzer', path: '/pcap', icon: Activity },
  { name: 'Email / Phishing Lab', path: '/email-lab', icon: MailWarning },
  { name: 'Cryptography Lab', path: '/crypto-lab', icon: KeyRound },
  { name: 'Security Learning', path: '/learning', icon: GraduationCap },
  { name: 'Audit Trail', path: '/audit', icon: ScrollText },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/80 flex flex-col h-screen select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 p-0.5 shadow-lg shadow-indigo-500/20">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-sky-400" />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold tracking-tight text-white text-base">AegisOne</span>
            <span className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/30 px-1.5 py-0.2 rounded font-mono font-semibold">AI</span>
          </div>
          <p className="text-[11px] text-slate-400">Security Decision Copilot</p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Core Operations
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-sm shadow-sky-500/5'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`
              }
            >
              <div className="flex items-center space-x-2.5">
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono font-medium">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Scope Status Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center space-x-2 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md p-2">
          <Lock className="w-3.5 h-3.5 shrink-0" />
          <div className="truncate">
            <span className="font-semibold block">Scope Guard Active</span>
            <span className="text-[10px] text-emerald-300/80">Localhost & Lab Whitelist</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
