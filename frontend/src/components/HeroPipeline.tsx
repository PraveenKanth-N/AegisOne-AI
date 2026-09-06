import React, { useState } from 'react';
import {
  Radar,
  Layers,
  Share2,
  Gauge,
  Brain,
  Wrench,
  Boxes,
  CheckCircle2,
  RefreshCw,
  Award,
  ChevronRight,
  Info
} from 'lucide-react';

export interface PipelineStage {
  id: string;
  name: string;
  shortLabel: string;
  icon: React.ElementType;
  description: string;
  outputMetric: string;
}

const STAGES: PipelineStage[] = [
  { id: 'DETECT', name: 'Detection & Crawling', shortLabel: 'DETECT', icon: Radar, description: 'Crawl endpoints & execute AST rules', outputMetric: '3 Vulnerabilities' },
  { id: 'CONTEXT', name: 'Context Normalization', shortLabel: 'CONTEXT', icon: Layers, description: 'Resolve affected assets & sensitivity', outputMetric: 'Asset Linked: DB' },
  { id: 'GRAPH', name: 'Knowledge Graph', shortLabel: 'GRAPH', icon: Share2, description: 'Ontological 2-hop graph reasoning', outputMetric: 'CWE-89 Mapped' },
  { id: 'RISK', name: 'Contextual Risk Engine', shortLabel: 'RISK', icon: Gauge, description: 'Transparent multi-factor score calculation', outputMetric: 'Score: 87.0 (CRIT)' },
  { id: 'EXPLAIN', name: 'Explainable AI Analyst', shortLabel: 'EXPLAIN', icon: Brain, description: 'Tripartite: Evidence / Interpretation / Fix', outputMetric: 'Grounded: 96%' },
  { id: 'FIX', name: 'Remediation Proposal', shortLabel: 'FIX', icon: Wrench, description: 'Generate validated parameterized query diff', outputMetric: 'Diff Generated' },
  { id: 'SANDBOX', name: 'Isolated Sandbox', shortLabel: 'SANDBOX', icon: Boxes, description: 'Create process-isolated container workspace', outputMetric: 'box-392a Ready' },
  { id: 'VALIDATE', name: '4-Stage Verification', shortLabel: 'VALIDATE', icon: CheckCircle2, description: 'Syntax, Regression tests, AST check', outputMetric: '18 Tests Passed' },
  { id: 'RESCAN', name: 'Security Re-Scan', shortLabel: 'RE-SCAN', icon: RefreshCw, description: 'Confirm vulnerability eliminated without regressions', outputMetric: '0 Regressions' },
  { id: 'DECISION', name: 'Decision & Rollback', shortLabel: 'DECISION', icon: Award, description: 'Accept validated patch or trigger rollback', outputMetric: 'Patch Validated' },
];

interface HeroPipelineProps {
  currentStage?: string;
  progressPercent?: number;
  isScanning?: boolean;
}

export const HeroPipeline: React.FC<HeroPipelineProps> = ({
  currentStage = 'DECISION',
  progressPercent = 100,
  isScanning = false
}) => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage | null>(null);

  const currentIdx = STAGES.findIndex(s => s.id === currentStage);
  const activeIdx = currentIdx >= 0 ? currentIdx : STAGES.length - 1;

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 shadow-lg shadow-black/20">
      {/* Title & Progress Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
            AegisOne Core Security Decision Pipeline
          </h2>
          <span className="text-[11px] text-slate-400 font-mono">
            [Closed-Loop Verification Architecture]
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="text-slate-400">Progress:</span>
          <span className="text-sky-400 font-bold">{progressPercent}%</span>
        </div>
      </div>

      {/* Interactive 10-Stage Pipeline Flow */}
      <div className="grid grid-cols-10 gap-1.5 relative">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isCompleted = idx < activeIdx || (idx === activeIdx && !isScanning);
          const isCurrent = idx === activeIdx && isScanning;
          const isPending = idx > activeIdx;

          return (
            <div
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`group relative flex flex-col items-center text-center p-2 rounded-lg cursor-pointer transition-all duration-200 border ${
                isCurrent
                  ? 'bg-sky-500/20 border-sky-400 shadow-md shadow-sky-500/20 scale-105 z-10 animate-pulse'
                  : isCompleted
                  ? 'bg-slate-950/80 border-emerald-500/40 hover:border-emerald-400'
                  : 'bg-slate-950/40 border-slate-800/80 opacity-50 hover:opacity-80'
              }`}
            >
              {/* Step number */}
              <span className="text-[9px] font-mono text-slate-400 mb-1">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div
                className={`w-7 h-7 rounded-md flex items-center justify-center mb-1.5 ${
                  isCurrent
                    ? 'bg-sky-500 text-slate-950'
                    : isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Label */}
              <span className={`text-[10px] font-bold tracking-tight mb-0.5 truncate w-full ${
                isCurrent ? 'text-sky-300' : isCompleted ? 'text-slate-200' : 'text-slate-400'
              }`}>
                {stage.shortLabel}
              </span>

              {/* Status Indicator */}
              <span className={`text-[8px] font-mono uppercase px-1 rounded ${
                isCurrent
                  ? 'bg-sky-500/30 text-sky-300 animate-pulse'
                  : isCompleted
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {isCurrent ? 'RUNNING' : isCompleted ? 'DONE' : 'QUEUED'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detail Inspector Drawer */}
      {selectedStage && (
        <div className="mt-3 p-3 bg-slate-950/90 border border-sky-500/30 rounded-lg flex items-center justify-between text-xs animate-in fade-in duration-150">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-md bg-sky-500/20 text-sky-400">
              <selectedStage.icon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-200 mr-2">{selectedStage.name}</span>
              <span className="text-slate-400">{selectedStage.description}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-mono text-[11px]">
            <span className="text-slate-400">Telemetry:</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {selectedStage.outputMetric}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
