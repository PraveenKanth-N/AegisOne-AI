"""
AegisOne AI - Compliance & Security Policies API
Maps detected vulnerabilities to formal industry standards:
OWASP Top 10, CWE Top 25, NIST SP 800-53, and PCI-DSS v4.0.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models.finding import Finding

router = APIRouter(prefix="/policies", tags=["Compliance & Policies"])

POLICY_FRAMEWORKS = [
    {
        "id": "owasp-top10-2021",
        "name": "OWASP Top 10 (2021)",
        "version": "2021",
        "category": "Application Security",
        "description": "Standard awareness document for developers and web application security representing a broad consensus about the most critical security risks.",
        "controls": [
            {"id": "A01:2021", "name": "Broken Access Control", "cwes": ["CWE-200", "CWE-284", "CWE-639"]},
            {"id": "A02:2021", "name": "Cryptographic Failures", "cwes": ["CWE-259", "CWE-327", "CWE-330"]},
            {"id": "A03:2021", "name": "Injection", "cwes": ["CWE-89", "CWE-79", "CWE-78", "CWE-77"]},
            {"id": "A04:2021", "name": "Insecure Design", "cwes": ["CWE-209", "CWE-256"]},
            {"id": "A05:2021", "name": "Security Misconfiguration", "cwes": ["CWE-16", "CWE-611"]},
            {"id": "A07:2021", "name": "Identification & Authentication Failures", "cwes": ["CWE-798", "CWE-384", "CWE-640"]}
        ]
    },
    {
        "id": "cwe-top25-2024",
        "name": "CWE Top 25 Most Dangerous Software Weaknesses",
        "version": "2024",
        "category": "Software Weaknesses",
        "description": "Calculated by the Homeland Security Systems Engineering and Development Institute based on real-world CVE prevalence and severity.",
        "controls": [
            {"id": "CWE-89", "name": "Improper Neutralization of Special Elements used in an SQL Command", "cwes": ["CWE-89"]},
            {"id": "CWE-79", "name": "Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')", "cwes": ["CWE-79"]},
            {"id": "CWE-798", "name": "Use of Hard-coded Credentials", "cwes": ["CWE-798"]},
            {"id": "CWE-200", "name": "Exposure of Sensitive Information to an Unauthorized Actor", "cwes": ["CWE-200"]}
        ]
    },
    {
        "id": "pci-dss-v4",
        "name": "PCI-DSS v4.0",
        "version": "v4.0",
        "category": "Payment Card Industry",
        "description": "Technical requirements for organizations handling branded credit cards.",
        "controls": [
            {"id": "Req 6.2.4", "name": "Protection from SQL Injection and Dynamic Injection Flaws", "cwes": ["CWE-89"]},
            {"id": "Req 6.2.3", "name": "Sanitization and Output Encoding against Cross-Site Scripting", "cwes": ["CWE-79"]},
            {"id": "Req 8.3.1", "name": "Strong Password and Authentication Secret Management", "cwes": ["CWE-798"]}
        ]
    }
]

@router.get("")
async def get_compliance_posture(db: AsyncSession = Depends(get_db)):
    """Computes real-time compliance coverage mapped against open and resolved findings."""
    result = await db.execute(select(Finding))
    findings = result.scalars().all()
    open_cwes = set(f.cwe_id for f in findings if f.status == "OPEN")
    resolved_cwes = set(f.cwe_id for f in findings if f.status in ["VALIDATED", "RESOLVED"])

    framework_summaries = []
    total_controls = 0
    compliant_controls = 0

    for fw in POLICY_FRAMEWORKS:
        fw_controls = []
        fw_compliant = 0
        for ctrl in fw["controls"]:
            total_controls += 1
            has_violation = any(cwe in open_cwes for cwe in ctrl["cwes"])
            has_remediated = any(cwe in resolved_cwes for cwe in ctrl["cwes"])
            
            if has_violation:
                status = "NON_COMPLIANT"
            elif has_remediated:
                status = "COMPLIANT_REMEDIATED"
                fw_compliant += 1
                compliant_controls += 1
            else:
                status = "COMPLIANT_NO_FINDINGS"
                fw_compliant += 1
                compliant_controls += 1

            fw_controls.append({
                "id": ctrl["id"],
                "name": ctrl["name"],
                "mapped_cwes": ctrl["cwes"],
                "status": status,
                "active_violations": [f.title for f in findings if f.cwe_id in ctrl["cwes"] and f.status == "OPEN"]
            })

        compliance_rate = round((fw_compliant / len(fw["controls"])) * 100, 1) if fw["controls"] else 100.0
        framework_summaries.append({
            "id": fw["id"],
            "name": fw["name"],
            "version": fw["version"],
            "category": fw["category"],
            "description": fw["description"],
            "compliance_rate": compliance_rate,
            "total_controls": len(fw["controls"]),
            "compliant_count": fw_compliant,
            "controls": fw_controls
        })

    overall_score = round((compliant_controls / total_controls) * 100, 1) if total_controls > 0 else 100.0

    return {
        "overall_compliance_score": overall_score,
        "total_controls_assessed": total_controls,
        "compliant_controls": compliant_controls,
        "non_compliant_controls": total_controls - compliant_controls,
        "frameworks": framework_summaries
    }
