# AegisOne AI — Academic Research Methodology & Empirical Metrics

## 1. Research Problem Formulation
Generative AI copilots often generate superficially plausible code that introduces regressions or secondary vulnerabilities. Existing security scanners identify flaws but lack context-aware prioritization and safe remediation automation.

## 2. Methodology & Instrumentation
AegisOne implements empirical telemetry to evaluate:
1. **Detection Quality**: Percentage of known intentional vulnerabilities detected across the College Placement Portal benchmark.
2. **Contextual Risk Sensitivity**: Delta between baseline technical CVSS scores and context-aware scores incorporating asset data sensitivity and external exposure.
3. **Sandbox Remediation Success Rate**:
   $$\text{Validation Success Rate} = \frac{\text{Validated Fixes}}{\text{Total Fix Candidates}} \times 100\%$$
4. **Unsafe Fix Rejection Rate**:
   $$\text{Unsafe Rejection Rate} = \frac{\text{Rejected Hallucinations / Regressions}}{\text{Total Faulty Injections}} \times 100\%$$
5. **Rollback Determinism**: 100% automated restoration of pristine source trees upon verification failure.
