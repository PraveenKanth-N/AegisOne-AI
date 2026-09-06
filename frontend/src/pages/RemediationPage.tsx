import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor, { DiffEditor } from '@monaco-editor/react';
import { Wrench, Boxes, Play, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';
import { Remediation, Finding } from '../types';

export const RemediationPage: React.FC = () => {
  const navigate = useNavigate();
  const [remediations, setRemediations] = useState<Remediation[]>([]);
  const [selectedRem, setSelectedRem] = useState<Remediation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadRemediations();
  }, []);

  const loadRemediations = async () => {
    try {
      const data = await api.getRemediations();
      setRemediations(data);
      if (data.length > 0) {
        setSelectedRem(data[0]);
      } else {
        // Fallback demo remediation for CWE-89
        const demoRem: Remediation = {
          id: 'rem-demo-cwe89',
          finding_id: 'f-sqli-01',
          original_code: `# Vulnerable Code: SQL Injection (CWE-89)
@app.route('/api/students/search', methods=['GET'])
def search_students():
    dept = request.args.get('department', '')
    # String formatting exposes database to direct payload injection
    query = f"SELECT id, name, gpa FROM students WHERE department = '{dept}'"
    cursor = db.cursor()
    cursor.execute(query)
    return jsonify(cursor.fetchall())`,
          proposed_code: `# Secure Fix: Parameterized Prepared Statements
@app.route('/api/students/search', methods=['GET'])
def search_students():
    dept = request.args.get('department', '')
    # Security Rule: Parameter placeholder separates query logic from data
    query = "SELECT id, name, gpa FROM students WHERE department = %s"
    cursor = db.cursor()
    cursor.execute(query, (dept,))
    return jsonify(cursor.fetchall())`,
          status: 'PROPOSED',
          ai_model: 'AegisOne GraphRAG Engine',
          explanation: 'Replaced insecure f-string interpolation with parameterized SQL bindings (%s).',
          business_impact: 'Protects confidential student transcripts and placement records.',
          created_at: new Date().toISOString()
        };
        setRemediations([demoRem]);
        setSelectedRem(demoRem);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendToSandbox = async () => {
    if (!selectedRem) return;
    setIsSubmitting(true);
    try {
      await api.validateRemediation(selectedRem.id, false);
      navigate('/sandbox');
    } catch (e) {
      console.error(e);
      navigate('/sandbox');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 pb-8 h-[calc(100vh-80px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Wrench className="w-5 h-5 text-sky-400" />
            <span>Source Code Security & Remediation Workspace</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Side-by-side Monaco diff inspection. Automated patching is restricted; all fixes must be validated in the Sandbox.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleSendToSandbox}
            disabled={isSubmitting}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md shadow-sky-500/20 transition-all disabled:opacity-50"
          >
            <Boxes className="w-4 h-4" />
            <span>Dispatch Patch to Isolated Sandbox</span>
          </button>
        </div>
      </div>

      {/* Main Diff Workspace */}
      <div className="flex-1 grid grid-cols-4 gap-4 min-h-0">
        {/* Left Side: Monaco Diff Editor */}
        <div className="col-span-3 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
          <div className="h-9 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="text-rose-400 font-mono font-semibold">🔴 VULNERABLE CODE (ORIGINAL)</span>
              <span className="text-slate-400">vs</span>
              <span className="text-emerald-400 font-mono font-semibold">🟢 PROPOSED SECURE PATCH</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Language: Python</span>
          </div>

          <div className="flex-1 min-h-0">
            {selectedRem && (
              <DiffEditor
                original={selectedRem.original_code}
                modified={selectedRem.proposed_code}
                language="python"
                theme="vs-dark"
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  fontSize: 12,
                  renderSideBySide: true,
                }}
              />
            )}
          </div>
        </div>

        {/* Right Side: Security Justification Panel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between overflow-y-auto text-xs space-y-4">
          <div className="space-y-3">
            <div className="border-b border-slate-800 pb-2.5">
              <span className="text-[10px] font-mono uppercase bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded border border-sky-500/30">
                REMEDIATION LIFECYCLE
              </span>
              <h3 className="text-sm font-bold text-white mt-2">
                Parameterized Query Enforcement
              </h3>
              <span className="text-[11px] text-slate-400">Target: CWE-89 (SQL Injection)</span>
            </div>

            <div>
              <strong className="text-slate-300 block mb-1">AI Reasoning & Security Principle:</strong>
              <p className="text-slate-400 leading-relaxed bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px]">
                {selectedRem?.explanation || 'Remediation ensures complete separation between executable code and untrusted parameter data.'}
              </p>
            </div>

            <div>
              <strong className="text-slate-300 block mb-1">Business & Placement Impact:</strong>
              <p className="text-slate-400 leading-relaxed bg-slate-950 p-2.5 rounded border border-slate-800 text-[11px]">
                {selectedRem?.business_impact || 'Protects institutional data integrity.'}
              </p>
            </div>

            {/* Validation Rule Notice */}
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 p-3 rounded-lg text-[11px]">
              <strong className="block mb-0.5">Sandbox Validation Mandatory:</strong>
              AI-generated code is never applied directly to production. The isolated sandbox verifies that functional tests pass and no secondary vulnerabilities are introduced.
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Status: {selectedRem?.status}</span>
            <span className="text-emerald-400">Model: GraphRAG</span>
          </div>
        </div>
      </div>
    </div>
  );
};
