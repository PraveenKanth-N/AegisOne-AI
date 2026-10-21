import React, { useState, useEffect } from 'react';
import { api, AccessControl } from '../services/api';
import {
  Users,
  Shield,
  Key,
  UserCheck,
  UserX,
  Lock,
  RefreshCw,
  Plus,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileKey
} from 'lucide-react';

export const AccessControlPage: React.FC = () => {
  const [data, setData] = useState<AccessControl | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showInviteModal, setShowInviteModal] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>('');
  const [newRole, setNewRole] = useState<string>('SecurityAnalyst');

  useEffect(() => {
    fetchAccess();
  }, []);

  const fetchAccess = async () => {
    try {
      setLoading(true);
      const res = await api.getAccessControl();
      setData(res);
    } catch (err) {
      console.error('Failed to load access control', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOperator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim()) return;

    if (data) {
      const newUser = {
        id: `usr-${Date.now().toString().slice(-4)}`,
        username: newUsername.trim(),
        email: `${newUsername.trim().toLowerCase()}@aegisone.local`,
        role: newRole,
        status: 'ACTIVE',
        last_login: 'Just now',
        api_key_prefix: `aegis_${Math.random().toString(36).substring(2, 6)}...`
      };
      setData({
        ...data,
        users: [...data.users, newUser]
      });
    }
    setNewUsername('');
    setShowInviteModal(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="p-6 rounded-xl bg-[#0D0E13] border border-[#292A34] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F20D32] animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase text-[#F20D32] font-semibold tracking-wider">
                ADMINISTRATION // RBAC ROLES & PRIVILEGED OPERATIONS
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center space-x-2.5">
              <Users className="w-7 h-7 text-[#55C7E8]" />
              <span>User Roles & Access Control Administration</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Configure Role-Based Access Control (RBAC), API authentication tokens, and multi-party authorization thresholds for privileged remediation execution.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowInviteModal(true)}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-[#F20D32] hover:bg-[#8E0924] text-white rounded-lg text-xs font-mono font-semibold shadow-md shadow-[#F20D32]/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Invite Operator</span>
            </button>
            <button
              onClick={fetchAccess}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-300 rounded-lg text-xs font-mono transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#55C7E8] ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Security Policies Overview Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="text-slate-400 text-xs font-mono">Active Operators</div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            {data?.users?.length || 4}
          </div>
          <div className="text-[10px] text-emerald-400 mt-0.5">All sessions authenticated</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="text-slate-400 text-xs font-mono">RBAC Roles Defined</div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            {data?.roles?.length || 4}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Least-privilege separation</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="text-slate-400 text-xs font-mono">MFA Policy</div>
          <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">Enforced</div>
          <div className="text-[10px] text-slate-500 mt-0.5">TOTP / Hardware Token</div>
        </div>

        <div className="p-4 rounded-xl bg-[#0D0E13] border border-[#292A34]">
          <div className="text-slate-400 text-xs font-mono">Dual-Control Threshold</div>
          <div className="text-2xl font-bold text-[#55C7E8] font-mono mt-1">Required</div>
          <div className="text-[10px] text-slate-500 mt-0.5">For live patch deployment</div>
        </div>
      </div>

      {/* Operators Table */}
      <div className="rounded-xl bg-[#0D0E13] border border-[#292A34] overflow-hidden">
        <div className="p-4 border-b border-[#292A34] flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider flex items-center space-x-2">
            <UserCheck className="w-4 h-4 text-[#55C7E8]" />
            <span>Authorized Operators & Service Accounts</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="bg-[#08080B] text-slate-400 border-b border-[#292A34]">
                <th className="p-3.5 font-normal">Operator</th>
                <th className="p-3.5 font-normal">Assigned Role</th>
                <th className="p-3.5 font-normal">API Key Fingerprint</th>
                <th className="p-3.5 font-normal">Last Activity</th>
                <th className="p-3.5 font-normal text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292A34]">
              {(data?.users || []).map((u: any) => (
                <tr key={u.id} className="hover:bg-[#12131A] transition-colors">
                  <td className="p-3.5 whitespace-nowrap">
                    <div className="font-bold text-white">{u.username}</div>
                    <div className="text-[11px] text-slate-500">{u.email}</div>
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#191A22] border border-[#292A34] text-[#55C7E8]">
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-400 whitespace-nowrap font-mono text-[11px]">
                    {u.api_key_prefix}
                  </td>
                  <td className="p-3.5 text-slate-400 whitespace-nowrap">{u.last_login}</td>
                  <td className="p-3.5 text-right whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role Matrix */}
      <div className="p-5 rounded-xl bg-[#0D0E13] border border-[#292A34] space-y-4">
        <h2 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider flex items-center space-x-2">
          <Shield className="w-4 h-4 text-[#F20D32]" />
          <span>Role Capability & Permission Matrix</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(data?.roles || []).map((r: any) => (
            <div key={r.name} className="p-4 rounded-xl bg-[#12131A] border border-[#292A34] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">{r.name}</span>
                <Key className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{r.description}</p>
              <div className="pt-2 border-t border-[#292A34] space-y-1">
                <div className="text-[10px] font-mono text-slate-500 uppercase">Granted Permissions</div>
                <div className="flex flex-wrap gap-1">
                  {(r.permissions || []).map((perm: string) => (
                    <span
                      key={perm}
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#191A22] text-slate-300 border border-[#292A34]"
                    >
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invite Operator Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#0D0E13] border border-[#292A34] rounded-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#55C7E8]" />
              <span>Invite New Security Operator</span>
            </h3>

            <form onSubmit={handleCreateOperator} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Username / Operator Handle</label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="analyst_new"
                  className="w-full bg-[#12131A] border border-[#292A34] rounded-lg px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#55C7E8]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Select Role</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full bg-[#12131A] border border-[#292A34] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#55C7E8]"
                >
                  <option value="SecurityAnalyst">SecurityAnalyst</option>
                  <option value="Developer">Developer</option>
                  <option value="Auditor">Auditor</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="px-3.5 py-2 bg-[#12131A] hover:bg-[#191A22] border border-[#292A34] text-slate-300 text-xs rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F20D32] hover:bg-[#8E0924] text-white text-xs font-bold rounded-lg"
                >
                  Confirm & Provision
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccessControlPage;
