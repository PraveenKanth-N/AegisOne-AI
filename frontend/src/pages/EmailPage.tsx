import React, { useState } from 'react';
import { MailWarning, AlertTriangle, ShieldCheck, Play, Send } from 'lucide-react';
import { api } from '../services/api';

export const EmailPage: React.FC = () => {
  const [sender, setSender] = useState('accounts-security@placement-portal.xyz');
  const [replyTo, setReplyTo] = useState('harvest-creds@untrusted-relay.ru');
  const [subject, setSubject] = useState('URGENT: Placement Account Suspension within 24 Hours');
  const [body, setBody] = useState('Dear Student,\n\nYour institutional campus placement account has been flagged for abnormal activity. You must verify your credentials immediately or your placement registration will be permanently revoked.\n\nClick here to verify: http://x92.auth-verify.xyz/login\n\nPlacement Cell Security Team');
  
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await api.analyzeEmail({ sender, reply_to: replyTo, subject, body });
      setResult(res);
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
            <MailWarning className="w-5 h-5 text-sky-400" />
            <span>Defensive Email & Phishing Heuristic Analyzer (CO5 / CO6)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Evaluates header mismatches, lookalike domain typosquatting, SPF/DKIM verification, and social engineering cues.
          </p>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs px-4 py-2 rounded-lg shadow-sm transition-all disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Execute Defensive Inspection</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Email Form */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 text-xs">
          <h2 className="text-sm font-semibold text-white">Synthetic Email Header & Body Input</h2>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">From (Sender):</label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:border-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">Reply-To Address:</label>
            <input
              type="text"
              value={replyTo}
              onChange={(e) => setReplyTo(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:border-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">Subject Line:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:border-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-mono">Message Body:</label>
            <textarea
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:border-sky-500 outline-none leading-relaxed"
            />
          </div>
        </div>

        {/* Analysis Output */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 text-xs">
          <h2 className="text-sm font-semibold text-white">Defensive Threat Evaluation</h2>

          {result ? (
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border flex items-center justify-between ${
                result.verdict === 'PHISHING DETECTED'
                  ? 'bg-rose-950/40 border-rose-500/50 text-rose-300'
                  : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
              }`}>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider block">VERDICT</span>
                  <span className="text-lg font-bold font-mono">{result.verdict}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider block">RISK SCORE</span>
                  <span className="text-2xl font-black font-mono">{result.risk_score} / 100</span>
                </div>
              </div>

              {/* Indicators */}
              <div className="space-y-2">
                <span className="font-semibold text-slate-300 block">Identified Risk Indicators:</span>
                {result.indicators.map((ind: any, idx: number) => (
                  <div key={idx} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-400">{ind.category}</span>
                      <span className="font-mono text-[10px] text-slate-400">+{ind.weight} pts</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{ind.finding}</p>
                  </div>
                ))}
              </div>

              {/* Technical Protocol Status */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1 font-mono text-[11px]">
                <div><span className="text-slate-400">SPF Verification:</span> <span className="text-rose-400">{result.technical_checks.spf_record}</span></div>
                <div><span className="text-slate-400">DKIM Signature:</span> <span className="text-rose-400">{result.technical_checks.dkim_signature}</span></div>
                <div><span className="text-slate-400">DMARC Policy:</span> <span className="text-sky-400">{result.technical_checks.dmarc_policy}</span></div>
              </div>

              {/* Guidance */}
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 text-[11px] leading-relaxed">
                <strong>Recommended Defense:</strong> {result.defense_recommendation}
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center text-slate-400 text-xs">
              <span>Click "Execute Defensive Inspection" to analyze headers and psychological urgency cues.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
