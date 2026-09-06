"""
Unit Tests for AegisOne AI Context-Aware Risk Engine
Verifies mathematical transparency, factor normalization, and level classification.
"""
import pytest
from backend.app.services.risk_engine import RiskFactors, compute_risk

def test_critical_risk_computation():
    factors = RiskFactors(
        technical_severity=9.5,
        exploitability=0.9,
        asset_criticality=1.0,
        data_sensitivity=1.0,
        exposure=1.0,
        confidence=1.0
    )
    result = compute_risk(factors)
    assert 85.0 <= result.score <= 100.0
    assert result.level == "CRITICAL"
    assert "Technical Severity" in result.breakdown
    assert "Asset Criticality" in result.breakdown

def test_low_risk_computation():
    factors = RiskFactors(
        technical_severity=2.0,
        exploitability=0.2,
        asset_criticality=0.2,
        data_sensitivity=0.2,
        exposure=0.1,
        confidence=0.8
    )
    result = compute_risk(factors)
    assert result.score <= 25.0
    assert result.level in ("LOW", "MODERATE")

def test_confidence_scaling():
    factors_high_conf = RiskFactors(
        technical_severity=8.0,
        exploitability=0.8,
        asset_criticality=0.8,
        data_sensitivity=0.8,
        exposure=0.8,
        confidence=1.0
    )
    factors_low_conf = RiskFactors(
        technical_severity=8.0,
        exploitability=0.8,
        asset_criticality=0.8,
        data_sensitivity=0.8,
        exposure=0.8,
        confidence=0.5
    )
    res_high = compute_risk(factors_high_conf)
    res_low = compute_risk(factors_low_conf)
    assert res_low.score < res_high.score
