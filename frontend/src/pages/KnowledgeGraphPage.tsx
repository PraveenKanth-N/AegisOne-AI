import React, { useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Share2, Info, Filter, ZoomIn, ShieldCheck, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export const KnowledgeGraphPage: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedNode, setSelectedNode] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  useEffect(() => {
    loadGraph();
  }, []);

  const loadGraph = async () => {
    try {
      const data = await api.getGraph();
      if (data && data.nodes) {
        setNodes(data.nodes);
        setEdges(data.edges);
        if (data.nodes.length > 0) {
          setSelectedNode(data.nodes[0]);
        }
      }
    } catch (e) {
      console.error('Failed to fetch knowledge graph:', e);
    }
  };

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  const handleFilter = (type: string) => {
    setActiveFilter(type);
    if (type === 'ALL') {
      loadGraph();
    } else {
      setNodes(prev => prev.map(n => ({
        ...n,
        hidden: n.data?.nodeType !== type && type !== 'ALL'
      })));
    }
  };

  return (
    <div className="space-y-4 pb-8 h-[calc(100vh-80px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-sky-400" />
            <span>Security Knowledge Graph Explorer</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Ontological reasoning connecting Vulnerabilities ↔ CWE ↔ OWASP ↔ Attack Techniques ↔ Assets ↔ Mitigations ↔ Controls.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 text-xs bg-slate-900 border border-slate-800 p-1 rounded-lg">
          {['ALL', 'Vulnerability', 'CWE', 'Asset', 'Mitigation', 'Security_Control'].map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Graph Canvas & Side Inspector */}
      <div className="flex-1 grid grid-cols-4 gap-4 min-h-0">
        {/* React Flow Interactive Graph */}
        <div className="col-span-3 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden relative shadow-inner">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            fitView
            className="bg-slate-950"
          >
            <Background color="#1e293b" gap={20} size={1} />
            <Controls className="bg-slate-900 border border-slate-800 fill-slate-200" />
            <MiniMap
              nodeColor={(n) => (n.data?.color as string) || '#3b82f6'}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
            />
          </ReactFlow>

          {/* Legend Overlay */}
          <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-800 p-3 rounded-lg text-[10px] space-y-1.5 backdrop-blur-md shadow-lg pointer-events-none">
            <span className="font-semibold text-slate-300 block mb-1">Ontology Legend</span>
            <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 rounded-full bg-rose-500" /><span>Vulnerability (Scanner Finding)</span></div>
            <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 rounded-full bg-orange-500" /><span>CWE Definition</span></div>
            <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span>Application Asset</span></div>
            <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span>Verified Mitigation</span></div>
            <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 rounded-full bg-cyan-500" /><span>NIST Security Control</span></div>
          </div>
        </div>

        {/* Node Inspector Side Panel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between overflow-y-auto">
          {selectedNode ? (
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  {selectedNode.data?.nodeType || 'Ontology Node'}
                </span>
                <h3 className="text-sm font-bold text-white mt-2">
                  {selectedNode.data?.label || selectedNode.id}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">Node ID: {selectedNode.id}</span>
              </div>

              {/* Connected Knowledge */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Connected Knowledge Context:</span>
                </span>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-xs text-slate-300 font-mono">
                  <div><strong>Node Category:</strong> {selectedNode.data?.nodeType}</div>
                  <div><strong>Ontological Relationships:</strong> Active</div>
                  <div><strong>Graph Traversal:</strong> 2-Hop Grounded</div>
                </div>
              </div>

              {/* Why This Relationship Matters */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Why This Node Matters in Defense:</span>
                </span>
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  By mapping this element directly to the Security Knowledge Graph, AegisOne AI ensures that remediation logic is derived from validated security ontology rather than ungrounded generative speculation.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 text-xs">
              <Info className="w-8 h-8 text-slate-400 mb-2" />
              <span>Click on any graph node to inspect its ontological connections and defensive justification.</span>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
            <span>Engine: NetworkX + Neo4j</span>
            <span className="text-emerald-400">Status: Synchronized</span>
          </div>
        </div>
      </div>
    </div>
  );
};
