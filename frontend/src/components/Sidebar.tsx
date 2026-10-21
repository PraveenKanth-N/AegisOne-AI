import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldAlert,
  LayoutDashboard,
  Server,
  Radar,
  Sliders,
  Bug,
  BrainCircuit,
  Share2,
  Wrench,
  Boxes,
  GitCompare,
  Activity,
  MailWarning,
  KeyRound,
  ScrollText,
  FileText,
  Settings,
  Lock,
  Compass,
  ShieldCheck,
  Flame,
  Users,
  Cpu,
  FlaskConical,
  User
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

interface NavGroup {
  groupName: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    groupName: 'Overview',
    items: [
      { name: 'Public Landing Page', path: '/', icon: Compass },
      { name: 'Command Center', path: '/console', icon: LayoutDashboard },
      { name: 'Application Inventory', path: '/console/inventory', icon: Server },
      { name: 'Configure Scan', path: '/console/scans/configure', icon: Sliders },
      { name: 'Scan Timeline', path: '/console/scans/live', icon: Radar }
    ]
  },
  {
    groupName: 'Analyze',
    items: [
      { name: 'Vulnerability Findings', path: '/console/findings', icon: Bug, badge: '3', badgeColor: 'bg-[#F20D32]/20 text-[#F20D32] border-[#F20D32]/30' },
      { name: 'Knowledge Graph', path: '/console/knowledge-graph', icon: Share2 },
      { name: 'AI Security Analyst', path: '/console/ai-analyst', icon: BrainCircuit, badge: 'LLM', badgeColor: 'bg-[#55C7E8]/20 text-[#55C7E8] border-[#55C7E8]/30' },
      { name: 'Remediation Workspace', path: '/console/remediation', icon: Wrench }
    ]
  },
  {
    groupName: 'Verify',
    items: [
      { name: 'Sandbox Validation', path: '/console/sandbox', icon: Boxes, badge: 'Docker', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
      { name: 'Before/After Compare', path: '/console/posture', icon: GitCompare },
      { name: 'Security Policies', path: '/console/policies', icon: ShieldCheck },
      { name: 'Threat Intelligence', path: '/console/threat-intelligence', icon: Flame }
    ]
  },
  {
    groupName: 'Research & Labs',
    items: [
      { name: 'Benchmark Lab', path: '/console/research', icon: FlaskConical },
      { name: 'PCAP Analyzer', path: '/console/pcap', icon: Activity },
      { name: 'Phishing Lab', path: '/console/email-lab', icon: MailWarning },
      { name: 'Cryptography Lab', path: '/console/crypto-lab', icon: KeyRound }
    ]
  },
  {
    groupName: 'Administration',
    items: [
      { name: 'Reports & Evidence', path: '/console/reports', icon: FileText },
      { name: 'User Roles & Access', path: '/console/admin/access', icon: Users },
      { name: 'Integration Hub', path: '/console/admin/integrations', icon: Cpu },
      { name: 'Platform Settings', path: '/console/admin/settings', icon: Settings },
      { name: 'Analyst Profile', path: '/console/account', icon: User },
      { name: 'Audit Trail', path: '/console/audit', icon: ScrollText }
    ]
  }
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#08080B] border-r border-[#292A34] flex flex-col h-screen select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#292A34] flex items-center space-x-3 bg-[#0D0E13]">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F20D32] to-[#55C7E8] p-0.5 shadow-md shadow-[#F20D32]/20">
          <div className="w-full h-full bg-[#08080B] rounded-[6px] flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-[#F20D32]" />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold tracking-tight text-white text-base">AegisOne</span>
            <span className="text-[10px] bg-[#F20D32]/20 text-[#F20D32] border border-[#F20D32]/30 px-1.5 py-0.2 rounded font-mono font-semibold">
              AI
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-mono">DEFENSE KERNEL v4.2</p>
        </div>
      </div>

      {/* Navigation Groups List */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4">
        {navGroups.map((group) => (
          <div key={group.groupName} className="space-y-0.5">
            <div className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
              {group.groupName}
            </div>

            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/' || item.path === '/console'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-all duration-150 ${
                      isActive
                        ? 'bg-[#191A22] text-white border border-[#F20D32]/40 shadow-sm shadow-[#F20D32]/10 font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#12131A]'
                    }`
                  }
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <Icon className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-white" />
                    <span className="truncate">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-medium border shrink-0 ${
                        item.badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      {/* Scope Status Footer */}
      <div className="p-3 border-t border-[#292A34] bg-[#0D0E13]">
        <div className="flex items-center space-x-2 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2.5">
          <Lock className="w-3.5 h-3.5 shrink-0" />
          <div className="truncate font-mono">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-[10px] uppercase">Scope Guard: ARMED</span>
            </div>
            <span className="text-[10px] text-emerald-300/80 truncate block">
              college-placement-v2.1 (:8001)
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
