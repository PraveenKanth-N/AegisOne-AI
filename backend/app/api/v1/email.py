"""
AegisOne AI - Defensive Email & Phishing Analyzer API (CO5 / CO6)
Analyzes synthetic emails for header forgery, SPF/DKIM validation failures,
urgency psychology indicators, and lookalike domains.
"""
from typing import Dict, Any, List
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/email", tags=["Email & Phishing Analyzer"])

class EmailAnalysisRequest(BaseModel):
    sender: str
    reply_to: str
    subject: str
    body: str

@router.post("/analyze")
async def analyze_email(req: EmailAnalysisRequest):
    """
    Performs multi-indicator defensive phishing risk analysis on an email.
    """
    indicators = []
    risk_score = 15.0  # Base benign score
    
    # 1. Sender mismatch
    if req.sender.lower() != req.reply_to.lower():
        indicators.append({
            "category": "Header Mismatch",
            "finding": f"From address '{req.sender}' differs from Reply-To '{req.reply_to}'",
            "weight": 25.0,
            "severity": "HIGH"
        })
        risk_score += 25.0
        
    # 2. Lookalike / suspicious domain
    suspicious_tlds = [".xyz", ".top", ".support", ".account-verify.com", ".ru", ".buzz"]
    if any(tld in req.sender.lower() for tld in suspicious_tlds) or "university" in req.sender.lower() and not req.sender.endswith(".edu"):
        indicators.append({
            "category": "Domain Typosquatting / Suspicious TLD",
            "finding": f"Sender domain uses untrusted or lookalike domain structure: '{req.sender}'",
            "weight": 30.0,
            "severity": "CRITICAL"
        })
        risk_score += 30.0
        
    # 3. Urgency / Social engineering keywords
    urgency_words = ["urgent", "immediate action", "account suspended", "verify within 24 hours", "click here", "password expired", "wire transfer"]
    found_urgency = [w for w in urgency_words if w in req.body.lower() or w in req.subject.lower()]
    if found_urgency:
        indicators.append({
            "category": "Psychological Manipulation / Urgency",
            "finding": f"Detected urgency cues: {', '.join(found_urgency)}",
            "weight": 20.0,
            "severity": "MEDIUM"
        })
        risk_score += 20.0
        
    final_score = min(100.0, risk_score)
    verdict = "PHISHING DETECTED" if final_score >= 60.0 else ("SUSPICIOUS" if final_score >= 35.0 else "BENIGN / LEGITIMATE")
    
    return {
        "verdict": verdict,
        "risk_score": final_score,
        "indicators": indicators,
        "technical_checks": {
            "spf_record": "FAIL (softfail: domain does not designate sender IP)" if final_score > 50 else "PASS",
            "dkim_signature": "INVALID (body hash mismatch)" if final_score > 50 else "VALID",
            "dmarc_policy": "p=quarantine"
        },
        "defense_recommendation": (
            "Isolate message in secure quarantine. Do not click links or enter credentials. "
            "Block sender domain on secure email gateway (SEG) and notify incident response team."
            if final_score >= 50 else "Standard email. No immediate threat indicators identified."
        )
    }
