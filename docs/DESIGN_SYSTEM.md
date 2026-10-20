# AegisOne AI — Official Design System Specification
### Stitch MCP Generated: `assets/38952ec95f4349d1aed639a7d1c0795c`
### Design Name: Obsidian Cyber Telemetry

## 1. Brand Identity & Creative Philosophy
- **Identity**: AegisOne AI — An AI Copilot for Secure Web Application Development using Explainable Risk Analysis, Security Knowledge Graph, and Sandbox Validation.
- **Inspirations**:
  - *GoDaddy Website Security*: Transparent security-posture communication, protection status indicators, perimeter & scanner telemetry.
  - *Squarespace Screen Recording*: Cinematic visual narrative, generous whitespace, disciplined grid alignment, restrained micro-interactions, high-contrast dark console aesthetic.
- **Tone**: Mission-critical, surgically precise, high-stakes operational command center. Zero visual clutter, no decorative neon blooming; every color, line, and animation communicates threat severity, pipeline progression, or verification state.

---

## 2. Color Tokens & Semantic Spectrums

| Category | Token / Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas Floor** | `bg-canvas` | `#051424` / `#090D16` | Deep optical floor, reducing eye fatigue during multi-hour security analysis. |
| **Surface Elev 1**| `bg-surface-1` | `#0D1322` | Navigation rails, topbar chrome, table headers, and structural panels. |
| **Surface Elev 2**| `bg-surface-2` | `#141C2E` | Interactive telemetry cards, code inspection panels, active drawers. |
| **Surface Elev 3**| `bg-surface-3` | `#1E293B` | Hover states, pressed element variants, input backgrounds. |
| **Structural Borders** | `border-subtle` | `#1E293B` | 1px continuous structural borders and grid division markers. |
| **Border Active** | `border-active` | `#334155` | Elevated card highlights and active focus containers. |
| **Primary Telemetry** | `telemetry-cyan` | `#22D3EE` | Active scanner sweeps, focus rings, primary action buttons, AI Copilot tokens. |
| **Verification** | `status-emerald` | `#34D399` | 100% passed validation checks, zero secondary flaws, safe to merge indicators. |
| **Warning / Review** | `status-amber` | `#FBBF24` | Policy review required, moderate risk, sandbox verification in progress. |
| **Critical Alert** | `status-rose` | `#FB7185` | Critical CVEs (SQLi CWE-89), rejected AI fixes, hard validation failures. |
| **High Emphasis Text** | `text-bright` | `#F8FAFC` | Primary metrics, headings, imperative action text. |
| **Standard Text** | `text-standard` | `#CBD5E1` | Body prose, code content, active tab text. |
| **Muted Metadata** | `text-muted` | `#94A3B8` | Table headers, keyboard shortcuts, timestamps, factor descriptions. |

---

## 3. Typography & Hierarchy

- **Headlines & Interface UI**: `Geist` / `Inter` (`font-sans`), geometric authority, clean tracking, deliberate weight hierarchy.
- **Telemetry & Monospaced Figures**: `JetBrains Mono` (`font-mono`), mandatory for all numerical statistics, CVSS/Risk scores, IP addresses, SHA-256 hashes, CWE IDs, and code excerpts. Enforces tabular lining (`tnum`) to eliminate layout shift during live scan telemetry.

---

## 4. Key Component Design Patterns

1. **Top Command Header**:
   - Sticky `h-14` / `h-16` bar with frosted glass backing (`backdrop-blur-md`).
   - Active Target Selector with port readout (`College Placement Portal :8001`).
   - Scope Guard Status Pill (`AUTHORIZED LOCAL TARGET — SAFE TO SCAN`).
   - Live Engine State pulse (Green solid pip + animated ring).

2. **Hero Security Decision Pipeline**:
   - Continuous 10-stage sequential flow: `DETECT → CONTEXT → GRAPH → RISK → EXPLAIN → FIX → SANDBOX → VALIDATE → RE-SCAN → DECISION`.
   - Distinct step badges (`01` through `10`), status indicators (`DONE`, `RUNNING`, `QUEUED`), and telemetry drawer.

3. **Monaco Code Remediation Diff**:
   - Side-by-side split screen: Red deletion lines (`#FB71851A`) vs. Green insertion lines (`#34D3991A`).
   - Non-negotiable principle: AI patches require isolated sandbox validation before acceptance.

4. **Sandbox Validation Terminal**:
   - 4-stage verification checklist with distinct Pass/Fail icons.
   - Dual demonstration paths: Clean Validation vs. Bad AI Fix Rejection & Automated Rollback.

5. **Cinematic Public Landing Page**:
   - Full-screen hero with animated security workflow visualization, research contributions, and interactive target test cases.
