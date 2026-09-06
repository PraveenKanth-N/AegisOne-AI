"""
AegisOne AI - Security Knowledge Graph Ontology Definition
Defines node categories, relationship types, and curated seed knowledge.
"""
from typing import Dict, List, Any

NODE_TYPES = [
    "Vulnerability",
    "CWE",
    "OWASP_Category",
    "Attack_Technique",
    "Asset",
    "Mitigation",
    "Security_Control",
    "Framework"
]

RELATIONSHIP_TYPES = [
    "CLASSIFIED_AS_CWE",
    "MAPS_TO_OWASP",
    "EXPLOITED_VIA_TECHNIQUE",
    "TARGETS_ASSET",
    "MITIGATED_BY",
    "GOVERNED_BY_CONTROL",
    "DEFINED_IN_FRAMEWORK"
]

CURATED_SECURITY_GRAPH: Dict[str, Any] = {
    "nodes": [
        # Vulnerabilities
        {"id": "VULN-SQLI", "type": "Vulnerability", "label": "SQL Injection", "severity": 9.1},
        {"id": "VULN-XSS", "type": "Vulnerability", "label": "Stored XSS", "severity": 7.4},
        {"id": "VULN-HARDCODED-PASS", "type": "Vulnerability", "label": "Hardcoded Admin Credential", "severity": 8.2},
        
        # CWEs
        {"id": "CWE-89", "type": "CWE", "label": "CWE-89: SQL Injection", "cwe_id": "CWE-89"},
        {"id": "CWE-79", "type": "CWE", "label": "CWE-79: Cross-Site Scripting", "cwe_id": "CWE-79"},
        {"id": "CWE-798", "type": "CWE", "label": "CWE-798: Use of Hard-coded Credentials", "cwe_id": "CWE-798"},
        
        # OWASP Top 10
        {"id": "OWASP-A03", "type": "OWASP_Category", "label": "A03:2021-Injection", "edition": "2021"},
        {"id": "OWASP-A07", "type": "OWASP_Category", "label": "A07:2021-Identification & Auth Failures", "edition": "2021"},
        
        # MITRE ATT&CK Techniques
        {"id": "ATTACK-T1190", "type": "Attack_Technique", "label": "T1190: Exploit Public-Facing Application", "tactic": "Initial Access"},
        {"id": "ATTACK-T1059", "type": "Attack_Technique", "label": "T1059: Command and Scripting Interpreter", "tactic": "Execution"},
        {"id": "ATTACK-T1078", "type": "Attack_Technique", "label": "T1078: Valid Accounts", "tactic": "Defense Evasion"},
        
        # Assets
        {"id": "ASSET-STUDENT-DB", "type": "Asset", "label": "Student Database", "criticality": 1.0, "data_sensitivity": "HIGH_PII"},
        {"id": "ASSET-AUTH-SERVICE", "type": "Asset", "label": "Authentication Service", "criticality": 0.9, "data_sensitivity": "CREDENTIALS"},
        {"id": "ASSET-PORTAL-UI", "type": "Asset", "label": "Student Profile Portal", "criticality": 0.6, "data_sensitivity": "MEDIUM"},
        
        # Mitigations
        {"id": "MIT-PARAM-QUERIES", "type": "Mitigation", "label": "Parameterized Queries & Prepared Statements", "effectiveness": "HIGH"},
        {"id": "MIT-OUTPUT-ENCODING", "type": "Mitigation", "label": "Context-Aware HTML Output Encoding & Bleach", "effectiveness": "HIGH"},
        {"id": "MIT-ENV-SECRETS", "type": "Mitigation", "label": "Environment Secret Storage & PBKDF2 Hashing", "effectiveness": "HIGH"},
        
        # Security Controls
        {"id": "CTRL-SI-10", "type": "Security_Control", "label": "NIST SI-10: Information Input Validation"},
        {"id": "CTRL-IA-5", "type": "Security_Control", "label": "NIST IA-5: Authenticator Management"},
        {"id": "CTRL-SC-28", "type": "Security_Control", "label": "NIST SC-28: Protection of Information at Rest"},
        
        # Frameworks
        {"id": "FW-NIST-800-53", "type": "Framework", "label": "NIST SP 800-53 Rev. 5"},
        {"id": "FW-OWASP-ASVS", "type": "Framework", "label": "OWASP ASVS v4.0.3"}
    ],
    "edges": [
        # SQL Injection Chain
        {"source": "VULN-SQLI", "target": "CWE-89", "relation": "CLASSIFIED_AS_CWE"},
        {"source": "CWE-89", "target": "OWASP-A03", "relation": "MAPS_TO_OWASP"},
        {"source": "VULN-SQLI", "target": "ATTACK-T1190", "relation": "EXPLOITED_VIA_TECHNIQUE"},
        {"source": "VULN-SQLI", "target": "ASSET-STUDENT-DB", "relation": "TARGETS_ASSET"},
        {"source": "CWE-89", "target": "MIT-PARAM-QUERIES", "relation": "MITIGATED_BY"},
        {"source": "MIT-PARAM-QUERIES", "target": "CTRL-SI-10", "relation": "GOVERNED_BY_CONTROL"},
        {"source": "CTRL-SI-10", "target": "FW-NIST-800-53", "relation": "DEFINED_IN_FRAMEWORK"},
        
        # XSS Chain
        {"source": "VULN-XSS", "target": "CWE-79", "relation": "CLASSIFIED_AS_CWE"},
        {"source": "CWE-79", "target": "OWASP-A03", "relation": "MAPS_TO_OWASP"},
        {"source": "VULN-XSS", "target": "ATTACK-T1059", "relation": "EXPLOITED_VIA_TECHNIQUE"},
        {"source": "VULN-XSS", "target": "ASSET-PORTAL-UI", "relation": "TARGETS_ASSET"},
        {"source": "CWE-79", "target": "MIT-OUTPUT-ENCODING", "relation": "MITIGATED_BY"},
        {"source": "MIT-OUTPUT-ENCODING", "target": "CTRL-SI-10", "relation": "GOVERNED_BY_CONTROL"},
        
        # Hardcoded Credentials Chain
        {"source": "VULN-HARDCODED-PASS", "target": "CWE-798", "relation": "CLASSIFIED_AS_CWE"},
        {"source": "CWE-798", "target": "OWASP-A07", "relation": "MAPS_TO_OWASP"},
        {"source": "VULN-HARDCODED-PASS", "target": "ATTACK-T1078", "relation": "EXPLOITED_VIA_TECHNIQUE"},
        {"source": "VULN-HARDCODED-PASS", "target": "ASSET-AUTH-SERVICE", "relation": "TARGETS_ASSET"},
        {"source": "CWE-798", "target": "MIT-ENV-SECRETS", "relation": "MITIGATED_BY"},
        {"source": "MIT-ENV-SECRETS", "target": "CTRL-IA-5", "relation": "GOVERNED_BY_CONTROL"},
        {"source": "CTRL-IA-5", "target": "FW-NIST-800-53", "relation": "DEFINED_IN_FRAMEWORK"}
    ]
}
