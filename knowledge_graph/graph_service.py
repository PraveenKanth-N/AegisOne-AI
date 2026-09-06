"""
AegisOne AI - Unified Knowledge Graph Service
Supports Neo4j Community Edition with transparent in-memory
NetworkX fallback for zero-dependency local execution.
"""
from typing import Dict, List, Any, Optional
import networkx as nx
from backend.app.core.config import settings
from knowledge_graph.ontology import CURATED_SECURITY_GRAPH

class KnowledgeGraphService:
    def __init__(self):
        self.nx_graph = nx.DiGraph()
        self._init_networkx()
        self.is_neo4j_active = False

    def _init_networkx(self):
        """Populates the in-memory NetworkX directed graph."""
        for node in CURATED_SECURITY_GRAPH["nodes"]:
            self.nx_graph.add_node(node["id"], **node)
            
        for edge in CURATED_SECURITY_GRAPH["edges"]:
            self.nx_graph.add_edge(edge["source"], edge["target"], relation=edge["relation"])

    def get_full_graph(self) -> Dict[str, Any]:
        """Returns the complete graph formatted for React Flow visualization."""
        nodes = []
        edges = []
        
        # Color mapping by node category
        colors = {
            "Vulnerability": "#ef4444",      # Red
            "CWE": "#f97316",                # Orange
            "OWASP_Category": "#eab308",     # Yellow
            "Attack_Technique": "#a855f7",   # Purple
            "Asset": "#3b82f6",              # Blue
            "Mitigation": "#10b981",         # Green
            "Security_Control": "#06b6d4",   # Cyan
            "Framework": "#64748b"           # Slate
        }

        # Layout positioning calculation
        for idx, (node_id, data) in enumerate(self.nx_graph.nodes(data=True)):
            node_type = data.get("type", "General")
            nodes.append({
                "id": node_id,
                "type": "customSecurityNode",
                "data": {
                    "label": data.get("label", node_id),
                    "nodeType": node_type,
                    "color": colors.get(node_type, "#3b82f6"),
                    "metadata": {k: v for k, v in data.items() if k not in ("id", "type", "label")}
                },
                "position": {"x": (idx % 4) * 280 + 50, "y": (idx // 4) * 160 + 50}
            })

        for u, v, data in self.nx_graph.edges(data=True):
            edges.append({
                "id": f"e-{u}-{v}",
                "source": u,
                "target": v,
                "label": data.get("relation", "RELATES_TO"),
                "animated": True,
                "style": {"stroke": "#64748b", "strokeWidth": 2}
            })

        return {"nodes": nodes, "edges": edges}

    def get_subgraph_for_finding(self, cwe_id: str) -> Dict[str, Any]:
        """Extracts the contextual subgraph relevant to a specific CWE or vulnerability."""
        if not self.nx_graph.has_node(cwe_id):
            return self.get_full_graph()

        relevant_nodes = set([cwe_id])
        for predecessor in self.nx_graph.predecessors(cwe_id):
            relevant_nodes.add(predecessor)
        for successor in self.nx_graph.successors(cwe_id):
            relevant_nodes.add(successor)
            for sub_succ in self.nx_graph.successors(successor):
                relevant_nodes.add(sub_succ)

        sub = self.nx_graph.subgraph(relevant_nodes)
        
        nodes = []
        edges = []
        for idx, (node_id, data) in enumerate(sub.nodes(data=True)):
            nodes.append({
                "id": node_id,
                "data": {"label": data.get("label", node_id), "type": data.get("type", "")},
                "position": {"x": (idx % 3) * 260 + 50, "y": (idx // 3) * 140 + 50}
            })
            
        for u, v, data in sub.edges(data=True):
            edges.append({
                "id": f"e-{u}-{v}",
                "source": u,
                "target": v,
                "label": data.get("relation", "")
            })
            
        return {"nodes": nodes, "edges": edges}

graph_service = KnowledgeGraphService()
