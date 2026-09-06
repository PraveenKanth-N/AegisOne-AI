# AegisOne AI — Sandbox Validation & Automated Rollback Protocol

## 1. Sandbox Verification Lifecycle
The isolated sandbox represents the primary defensive barrier preventing unvalidated AI recommendations from entering production software.

```mermaid
sequenceDiagram
    autonumber
    participant Dev as Security Engineer
    participant API as AegisOne Core API
    participant Box as Isolated Sandbox
    participant Tests as Test Suite & AST
    participant Audit as Audit Logger

    Dev->>API: Dispatch Proposed Remediation to Sandbox
    API->>Box: Create Ephemeral Workspace & Clone Baseline
    API->>Box: Apply Proposed Patch
    Box->>Tests: Stage 1: Syntax & Compilation Validation
    alt Syntax Error
        Tests-->>Box: Syntax FAILED
        Box->>API: Trigger Automated Rollback
        API->>Audit: Record REMEDIATION_REJECTED (Syntax Failure)
    end
    Box->>Tests: Stage 2: Functional Regression Testing
    alt Regression Failure (Broke Feature)
        Tests-->>Box: Tests FAILED (Regression Detected)
        Box->>API: Trigger Automated Rollback
        API->>Audit: Record REMEDIATION_REJECTED (Feature Regression)
    end
    Box->>Tests: Stage 3: AST & Static Security Analysis
    alt Insecure Pattern Still Present
        Tests-->>Box: AST Check FAILED
        Box->>API: Trigger Automated Rollback
    end
    Box->>Tests: Stage 4: Secondary DAST Security Re-Scan
    alt New Vulnerability Introduced
        Tests-->>Box: Re-scan FAILED (Secondary Flaw Detected)
        Box->>API: Trigger Automated Rollback
    else 100% Passed
        Tests-->>Box: Zero Flaws & All Tests Green
        Box->>API: VALIDATED SAFE (Ready for Merge)
        API->>Audit: Record REMEDIATION_VALIDATED
    end
```

## 2. The Bad AI Fix Demonstration
To empirically demonstrate why sandbox validation is essential, AegisOne provides an interactive failure simulation:
1. Operator triggers "Demonstrate Bad AI Fix Rejection".
2. The AI introduces a patch that ostensibly resolves one flaw but introduces `CWE-200: Exposure of Sensitive Information` or breaks user login.
3. The sandbox test runner detects test failure and AST anomaly.
4. The platform triggers immediate automated rollback, marks the remediation `REJECTED`, restores the pristine baseline, and logs the incident in the audit trail.
