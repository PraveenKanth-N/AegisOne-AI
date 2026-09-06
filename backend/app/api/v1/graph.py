"""
AegisOne AI - Security Knowledge Graph API
Serves ontology nodes, relationships, and contextual reasoning subgraphs
for React Flow visualization in the Command Center.
"""
from typing import Dict, Any, Optional
from fastapi import APIRouter, HTTPException
from knowledge_graph.graph_service import graph_service

router = APIRouter(prefix="/graph", tags=["Knowledge Graph"])

@router.get("", response_model=Dict[str, Any])
async def get_graph():
    """Returns the full knowledge graph formatted for React Flow."""
    return graph_service.get_full_graph()

@router.get("/finding/{cwe_id}", response_model=Dict[str, Any])
async def get_subgraph_by_cwe(cwe_id: str):
    """Returns the 2-hop contextual reasoning subgraph for a specific CWE."""
    return graph_service.get_subgraph_for_finding(cwe_id)

@router.get("/node/{node_id}")
async def get_node_detail(node_id: str):
    """Returns detailed ontology metadata and connected knowledge for a selected node."""
    if not graph_service.nx_graph.has_node(node_id):
        raise HTTPException(404, "Node not found in Security Knowledge Graph")
    
    node_data = graph_service.nx_graph.nodes[node_id]
    predecessors = [
        {"id": p, "relation": graph_service.nx_graph.edges[p, node_id].get("relation", "")}
        for p in graph_service.nx_graph.predecessors(node_id)
    ]
    successors = [
        {"id": s, "relation": graph_service.nx_graph.edges[node_id, s].get("relation", "")}
        for s in graph_service.nx_graph.successors(node_id)
    ]
    
    return {
        "id": node_id,
        "label": node_data.get("label", node_id),
        "type": node_data.get("type", "General"),
        "attributes": {k: v for k, v in node_data.items() if k not in ("id", "label", "type")},
        "incoming_connections": predecessors,
        "outgoing_connections": successors
    }
