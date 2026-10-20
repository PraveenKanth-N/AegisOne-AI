import React, { useState, useEffect } from 'react';
import {
  Boxes,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Play,
  Terminal,
  ShieldAlert,
  Clock,
  ArrowRight
} from 'lucide-react';
import { api } from '../services/api';
import { ValidationRun } from '../types';

export const SandboxPage: React.FC = () => {
  const [runs, setRuns] = useState<ValidationRun[]>([]);
  const [activeRun, setActiveRun] = useState<ValidationRun | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showBadFixModal, setShowBadFixModal] = useState(false);

  useEffect(() => {
    loadValidationRuns();
  }, []);

  const loadValidationRuns = async () => {
    try {
      const remediations = await api.getRemediations();
      if (remediations.length > 0) {
        const vruns = await api.getRemediationRuns(remediations[0].id);
        setRuns(vruns);
        if (vruns.length > 0) {
          setActiveRun(vruns[0]);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleRunValidation = async (isBadFix: boolean = false) => {
    setIsValidating(true);
    try {
      const remediations = await api.getRemediations();
      const targetRemId = remediations.length > 0 ? remediations[0].id : 'rem-demo-cwe89';
      const newRun = await api.validateRemediation(targetRemId, isBadFix);
      setActiveRun(newRun);

      // Poll until finished
      for (let i = 0; i < 6; i++) {
        await new Promise(r => setTimeout(r, 600));
        const updated = await api.getValidationRun(newRun.id);
        setActiveRun(updated);
        if (updated.status === 'PASSED' || updated.status === 'FAILED') break;
      }
      await loadValidationRuns();
    } catch (e) {
      console.error(e);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Boxes className="w-5 h-5 text-sky-400" />
            <span>Isolated Sandbox Validation & Automated Rollback Center</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Process-isolated verification environment. AI patches are compiled, tested for regressions, and rescanned before acceptance.
          </p>
        </div>

        {/* Action Controls: Normal vs Bad AI Fix Demonstration */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleRunValidation(false)}
            disabled={isValidating}
            className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Run Safe Validation</span>
          </button>

          {/* Conference WOW Demonstration Button */}
          <button
            onClick={() => handleRunValidation(true)}
            disabled={isValidating}
            className="flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-md shadow-rose-600/20 transition-all disabled:opacity-50"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Demonstrate Bad AI Fix Rejection & Rollback</span>
          </button>
        </div>
      </div>

      {/* Hero Validation Status Banner */}
      {activeRun && (
        <div
          className={`p-5 rounded-xl border transition-all duration-300 ${
            activeRun.status === 'FAILED'
              ? 'bg-rose-950/30 border-rose-500/50 shadow-lg shadow-rose-950/40'
              : activeRun.status === 'PASSED'
              ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/40'
              : 'bg-slate-900/80 border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2.5 rounded-lg ${
                  activeRun.status === 'FAILED'
                    ? 'bg-rose-500/20 text-rose-400'
                    : activeRun.status === 'PASSED'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-sky-500/20 text-sky-400'
                }`}
              >
                {activeRun.status === 'FAILED' ? (
                  <XCircle className="w-6 h-6" />
                ) : activeRun.status === 'PASSED' ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <Boxes className="w-6 h-6 animate-spin" />
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  <span className="text-base font-bold font-mono text-white">
                    SANDBOX: {activeRun.sandbox_id || 'box-isolated-exec'}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      activeRun.status === 'FAILED'
                        ? 'bg-rose-500 text-white'
                        : activeRun.status === 'PASSED'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-sky-500 text-slate-950'
                    }`}
                  >
                    {activeRun.status === 'FAILED'
                      ? 'REMEDIATION REJECTED'
                      : activeRun.status === 'PASSED'
                      ? 'VALIDATED SAFE'
                      : 'VERIFICATION RUNNING'}
                  </span>

                  {/* Phase 16 Isolation & Policy Badges */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      activeRun.execution_mode === 'DOCKER_CONTAINER'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {activeRun.execution_mode === 'DOCKER_CONTAINER'
                      ? 'CONTAINER ISOLATED'
                      : 'SIMULATION FALLBACK (HOST UNISOLATED)'}
                  </span>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      activeRun.production_eligible
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-700/60 text-slate-300 border border-slate-600'
                    }`}
                  >
                    {activeRun.production_eligible
                      ? 'PROD-ELIGIBLE'
                      : 'EDUCATIONAL DEMO (MANUAL REVIEW REQUIRED)'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-slate-400 font-mono">
                    Target: College Placement Portal • Mode: {activeRun.execution_mode || 'IN_PROCESS_SIMULATION'}
                  </span>
                  {activeRun.policy_verdict && (
                    <span className="text-[11px] text-slate-300 font-mono">
                      • Policy: <span className="text-sky-300">{activeRun.policy_verdict}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {activeRun.rollback_executed && (
              <div className="flex items-center space-x-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-3 py-1.5 rounded-lg text-xs font-mono font-bold animate-pulse">
                <RotateCcw className="w-4 h-4 text-rose-400" />
                <span>AUTOMATED ROLLBACK EXECUTED — BASELINE RESTORED</span>
              </div>
            )}
          </div>

          {/* 4-Stage Verification Checklist */}
          <div className="grid grid-cols-4 gap-3 my-4">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Stage 1: Syntax & Compilation</span>
              <div className="flex items-center space-x-2 mt-1">
                {activeRun.syntax_check === 'PASS' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Clock className="w-4 h-4 text-slate-400" />}
                <span className="text-xs font-bold text-slate-200">{activeRun.syntax_check}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Stage 2: Regression Tests</span>
              <div className="flex items-center space-x-2 mt-1">
                {activeRun.regression_tests === 'PASS' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : activeRun.regression_tests === 'FAIL' ? <XCircle className="w-4 h-4 text-rose-400" /> : <Clock className="w-4 h-4 text-slate-400" />}
                <span className="text-xs font-bold text-slate-200">{activeRun.regression_tests}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Stage 3: AST & Static Analysis</span>
              <div className="flex items-center space-x-2 mt-1">
                {activeRun.ast_verification === 'PASS' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : activeRun.ast_verification === 'FAIL' ? <XCircle className="w-4 h-4 text-rose-400" /> : <Clock className="w-4 h-4 text-slate-400" />}
                <span className="text-xs font-bold text-slate-200">{activeRun.ast_verification}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Stage 4: Security Re-Scan</span>
              <div className="flex items-center space-x-2 mt-1">
                {activeRun.security_rescan === 'PASS' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : activeRun.security_rescan === 'FAIL' ? <XCircle className="w-4 h-4 text-rose-400" /> : <Clock className="w-4 h-4 text-slate-400" />}
                <span className="text-xs font-bold text-slate-200">{activeRun.security_rescan}</span>
              </div>
            </div>
          </div>

          {/* Detailed Failure or Output Log */}
          {activeRun.failure_reason && (
            <div className="bg-rose-950/60 border border-rose-500/30 p-3.5 rounded-lg text-xs text-rose-300 font-mono space-y-1">
              <div className="font-bold flex items-center space-x-1.5 text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>SECURITY VALIDATION FAILED:</span>
              </div>
              <p>{activeRun.failure_reason}</p>
              {activeRun.new_vulnerabilities && (
                <div className="text-[11px] text-rose-200 mt-1">
                  Detected Flaws: {activeRun.new_vulnerabilities}
                </div>
              )}
            </div>
          )}

          {activeRun.test_output && (
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400">
              ✓ {activeRun.test_output}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
