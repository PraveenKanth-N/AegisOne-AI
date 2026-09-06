"""
AegisOne AI - Security Risk Engine
Computes transparent, context-aware risk scores using configurable factor weights.
Formula:
  risk = min(100, (S_tech*4.0 + E_xploit*2.0 + C_asset*2.5 + D_sens*1.5 + X_pos*1.0) * C_onfidence)
  normalized to 0-100
"""
from dataclasses import dataclass, field
from typing import Dict

@dataclass
class RiskFactors:
    technical_severity: float     # 0.0-10.0 (CVSS-like)
    exploitability: float         # 0.0-1.0
    asset_criticality: float      # 0.0-1.0
    data_sensitivity: float       # 0.0-1.0
    exposure: float               # 0.0-1.0 (1.0 = internet-facing)
    confidence: float             # 0.0-1.0 (evidence quality)

@dataclass
class RiskResult:
    score: float                  # 0-100
    level: str                    # CRITICAL, VERY_HIGH, HIGH, MODERATE, LOW
    breakdown: Dict[str, float]   # Factor contributions for UI display

WEIGHTS = {
    "technical_severity": 4.0,
    "exploitability": 2.0,
    "asset_criticality": 2.5,
    "data_sensitivity": 1.5,
    "exposure": 1.0,
}

def _severity_to_normalized(s: float) -> float:
    """Normalize CVSS 0-10 severity to 0-1."""
    return min(1.0, max(0.0, s / 10.0))

def compute_risk(factors: RiskFactors) -> RiskResult:
    base = (
        _severity_to_normalized(factors.technical_severity) * WEIGHTS["technical_severity"] +
        factors.exploitability * WEIGHTS["exploitability"] +
        factors.asset_criticality * WEIGHTS["asset_criticality"] +
        factors.data_sensitivity * WEIGHTS["data_sensitivity"] +
        factors.exposure * WEIGHTS["exposure"]
    )
    max_base = sum(WEIGHTS.values())
    normalized_base = (base / max_base) * 100
    final_score = min(100.0, round(normalized_base * factors.confidence, 1))
    
    if final_score >= 81:
        level = "CRITICAL"
    elif final_score >= 61:
        level = "VERY_HIGH"
    elif final_score >= 41:
        level = "HIGH"
    elif final_score >= 21:
        level = "MODERATE"
    else:
        level = "LOW"
    
    breakdown = {
        "Technical Severity": round(_severity_to_normalized(factors.technical_severity) * WEIGHTS["technical_severity"] / max_base * 100, 1),
        "Exploitability": round(factors.exploitability * WEIGHTS["exploitability"] / max_base * 100, 1),
        "Asset Criticality": round(factors.asset_criticality * WEIGHTS["asset_criticality"] / max_base * 100, 1),
        "Data Sensitivity": round(factors.data_sensitivity * WEIGHTS["data_sensitivity"] / max_base * 100, 1),
        "Network Exposure": round(factors.exposure * WEIGHTS["exposure"] / max_base * 100, 1),
        "Confidence Multiplier": factors.confidence,
    }
    
    return RiskResult(score=final_score, level=level, breakdown=breakdown)

def sensitivity_to_factor(sensitivity: str) -> float:
    return {"HIGH_PII": 1.0, "CREDENTIALS": 1.0, "MEDIUM": 0.6, "PUBLIC": 0.2}.get(sensitivity, 0.6)

def exposure_to_factor(exposure: str) -> float:
    return {"EXTERNAL": 1.0, "INTERNAL": 0.4, "RESTRICTED": 0.1}.get(exposure, 0.5)
