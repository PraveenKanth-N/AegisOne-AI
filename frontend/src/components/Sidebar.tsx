import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldAlert,
  LayoutDashboard,
  FolderGit2,
  Server,
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
  FileText,
  Settings,
  Lock,
  Compass
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: 'Public Landing Page', path: '/', icon: Compass, badge: 'New' },
  { name: 'Command Center', path: '/console', icon: LayoutDashboard },
  { name: 'Application Inventory', path: '/console/inventory', icon: Server },
  { name: 'Scan Timeline', path: '/console/scans', icon: Radar },
  { name: 'Findings Explorer', path: '/console/findings', icon: Bug, badge: '3' },
  { name: 'Knowledge Graph', path: '/console/knowledge-graph', icon: Share2 },
  { name: 'AI Security Analyst', path: '/console/ai-analyst', icon: BrainCircuit },
  { name: 'Remediation Diff', path: '/console/remediation', icon: Wrench },
  { name: 'Sandbox Validation', path: '/console/sandbox', icon: Boxes, badge: 'Live' },
  { name: 'Security Comparison', path: '/console/comparison', icon: GitCompare },
  { name: 'Reports & Evaluation', path: '/console/reports', icon: FileText },
  { name: 'PCAP Analyzer', path: '/console/pcap', icon: Activity },
  { name: 'Email / Phishing Lab', path: '/console/email-lab', icon: MailWarning },
  { name: 'Cryptography Lab', path: '/console/crypto-lab', icon: KeyRound },
  { name: 'Audit Trail', path: '/console/audit', icon: ScrollText },
  { name: 'Platform Settings', path: '/console/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#051424] border-r border-[#1E293B] flex flex-col h-screen select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#1E293B] flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
          <div className="w-full h-full bg-[#051424] rounded-[10px] flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold tracking-tight text-white text-base">AegisOne</span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.2 rounded font-mono font-semibold">AI</span>
          </div>
          <p className="text-[11px] text-slate-400">Security Decision Copilot</p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Platform Operations
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/5'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#0D1322]'
                }`
              }
            >
              <div className="flex items-center space-x-2.5">
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-medium">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Scope Status Footer */}
      <div className="p-3 border-t border-[#1E293B] bg-[#051424]/40">
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
