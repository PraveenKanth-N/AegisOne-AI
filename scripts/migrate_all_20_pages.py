import re
import os

pages_config = [
    {
        "folder": "aegisone_ai_interactive_security_command_center",
        "file": "DashboardPage.tsx",
        "component": "DashboardPage",
        "title": "Interactive Security Command Center",
        "api_hook": "getDashboardSummary"
    },
    {
        "folder": "aegisone_ai_application_inventory_attack_surface",
        "file": "InventoryPage.tsx",
        "component": "InventoryPage",
        "title": "Application Inventory & Attack Surface",
        "api_hook": "getAttackSurface"
    },
    {
        "folder": "aegisone_ai_scan_configuration_authorized_assessment",
        "file": "ScanConfigPage.tsx",
        "component": "ScanConfigPage",
        "title": "Scan Configuration & Authorized Assessment",
        "api_hook": "getProjects"
    },
    {
        "folder": "aegisone_ai_live_scan_execution_findings_stream",
        "file": "ScanTimelinePage.tsx",
        "component": "ScanTimelinePage",
        "title": "Live Scan Execution & Findings Stream",
        "api_hook": "getTimeline"
    },
    {
        "folder": "aegisone_ai_vulnerability_findings_explorer",
        "file": "FindingsPage.tsx",
        "component": "FindingsPage",
        "title": "Vulnerability Findings Explorer",
        "api_hook": "getFindings"
    },
    {
        "folder": "aegisone_ai_finding_detail_evidence_verification",
        "file": "FindingDetailPage.tsx",
        "component": "FindingDetailPage",
        "title": "Finding Detail & Evidence Verification",
        "api_hook": "getFindings"
    },
    {
        "folder": "aegisone_ai_interactive_security_knowledge_graph",
        "file": "KnowledgeGraphPage.tsx",
        "component": "KnowledgeGraphPage",
        "title": "Interactive Security Knowledge Graph",
        "api_hook": "getGraph"
    },
    {
        "folder": "aegisone_ai_ai_security_analyst_workspace",
        "file": "AiAnalystPage.tsx",
        "component": "AiAnalystPage",
        "title": "AI Security Analyst Workspace",
        "api_hook": "getFindings"
    },
    {
        "folder": "aegisone_ai_source_code_remediation_workspace",
        "file": "RemediationPage.tsx",
        "component": "RemediationPage",
        "title": "Source Code Remediation Workspace",
        "api_hook": "getRemediations"
    },
    {
        "folder": "aegisone_ai_sandbox_validation_rollback_center",
        "file": "SandboxPage.tsx",
        "component": "SandboxPage",
        "title": "Sandbox Validation & Rollback Center",
        "api_hook": "getDockerStatus"
    },
    {
        "folder": "aegisone_ai_before_after_security_posture_research_evaluation",
        "file": "ComparisonPage.tsx",
        "component": "ComparisonPage",
        "title": "Before / After Security Posture Research Evaluation",
        "api_hook": "getDashboardSummary"
    },
    {
        "folder": "aegisone_ai_security_policies_compliance_mapping",
        "file": "PoliciesPage.tsx",
        "component": "PoliciesPage",
        "title": "Security Policies & Compliance Mapping",
        "api_hook": "getPolicies"
    },
    {
        "folder": "aegisone_ai_threat_intelligence_security_knowledge_feed",
        "file": "ThreatIntelPage.tsx",
        "component": "ThreatIntelPage",
        "title": "Threat Intelligence & Security Knowledge Feed",
        "api_hook": "getThreatIntelligence"
    },
    {
        "folder": "aegisone_ai_research_experiments_benchmark_lab",
        "file": "ResearchLabPage.tsx",
        "component": "ResearchLabPage",
        "title": "Research Experiments & Benchmark Lab",
        "api_hook": "getResearchBenchmarks"
    },
    {
        "folder": "aegisone_ai_security_reports_audit_evidence_center",
        "file": "ReportsPage.tsx",
        "component": "ReportsPage",
        "title": "Security Reports & Audit Evidence Center",
        "api_hook": "getReports"
    },
    {
        "folder": "aegisone_ai_user_roles_access_control_administration",
        "file": "AccessControlPage.tsx",
        "component": "AccessControlPage",
        "title": "User Roles & Access Control Administration",
        "api_hook": "getAccessControl"
    },
    {
        "folder": "aegisone_ai_integration_hub_system_health",
        "file": "IntegrationsPage.tsx",
        "component": "IntegrationsPage",
        "title": "Integration Hub & System Health",
        "api_hook": "getSystemIntegrations"
    },
    {
        "folder": "aegisone_ai_global_settings_security_configuration",
        "file": "SettingsPage.tsx",
        "component": "SettingsPage",
        "title": "Global Settings & Security Configuration",
        "api_hook": "getSettings"
    },
    {
        "folder": "aegisone_ai_analyst_profile_personal_activity",
        "file": "AccountPage.tsx",
        "component": "AccountPage",
        "title": "Analyst Profile & Personal Activity",
        "api_hook": "getAuditLogs"
    }
]

def clean_html_to_jsx(html_str):
    # Strip <script>...</script>
    s = re.sub(r'<script\b[^>]*>.*?</script>', '', html_str, flags=re.DOTALL)
    
    # Strip HTML comments
    s = re.sub(r'<!--.*?-->', '', s, flags=re.DOTALL)
    
    # HTML attributes to React JSX attributes
    s = re.sub(r'\bclass=', 'className=', s)
    s = re.sub(r'\bfor=', 'htmlFor=', s)
    s = re.sub(r'\btabindex=', 'tabIndex=', s)
    s = re.sub(r'\bautocomplete=', 'autoComplete=', s)
    s = re.sub(r'\bautofocus=', 'autoFocus=', s)
    s = re.sub(r'\bcolspan="(\d+)"', r'colSpan={\1}', s, flags=re.IGNORECASE)
    s = re.sub(r'\browspan="(\d+)"', r'rowSpan={\1}', s, flags=re.IGNORECASE)
    s = re.sub(r'\bpreserveaspectratio=', 'preserveAspectRatio=', s)
    s = re.sub(r'\bviewbox=', 'viewBox=', s)
    s = re.sub(r'\bmarkerheight=', 'markerHeight=', s)
    s = re.sub(r'\bmarkerwidth=', 'markerWidth=', s)
    s = re.sub(r'\brefx=', 'refX=', s)
    s = re.sub(r'\brefy=', 'refY=', s)
    
    # SVG tags camelCase
    s = re.sub(r'<lineargradient\b', '<linearGradient', s)
    s = re.sub(r'</lineargradient>', '</linearGradient>', s)
    s = re.sub(r'<radialgradient\b', '<radialGradient', s)
    s = re.sub(r'</radialgradient>', '</radialGradient>', s)
    s = re.sub(r'<clippath\b', '<clipPath', s)
    s = re.sub(r'</clippath>', '</clipPath>', s)
    
    # Boolean HTML attributes
    s = re.sub(r'\bchecked="[^"]*"', 'defaultChecked', s)
    s = re.sub(r'\bselected="[^"]*"', '', s)
    s = re.sub(r'\bdisabled="[^"]*"', 'disabled', s)
    s = re.sub(r'\bdata-icon="[^"]*"', '', s)
    s = re.sub(r'\bonclick="[^"]*"', '', s)
    
    # Specific attributes that require numbers in React
    s = re.sub(r'\brows="(\d+)"', r'rows={\1}', s)
    s = re.sub(r'\bcols="(\d+)"', r'cols={\1}', s)
    
    # Remove sidebar offset classes from main tag since layout already handles it
    s = re.sub(r'\b(ml-64|pl-64|md:pl-64|pt-14)\b', '', s)
    
    # Self-close void tags
    for tag in ['img', 'input', 'hr', 'br']:
        pattern = rf'(<{tag}\b[^>]*?)(?<!/)>'
        s = re.sub(pattern, r'\1 />', s)

    # Convert style attribute to React style object
    def repl_style(match):
        style_content = match.group(1)
        pairs = [p.strip() for p in style_content.split(';') if p.strip()]
        props = []
        for pair in pairs:
            if ':' in pair:
                k, v = pair.split(':', 1)
                k = k.strip()
                v = v.strip().replace('"', '\\"')
                k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                props.append(f'"{k_camel}": "{v}"')
        return 'style={{ ' + ', '.join(props) + ' }}'
        
    s = re.sub(r'style="([^"]*)"', repl_style, s)
    
    # Escape { and } in text between tags
    def repl_text(match):
        tag_open = match.group(1)
        text = match.group(2)
        tag_close = match.group(3)
        text_escaped = text.replace('{', '&#123;').replace('}', '&#125;')
        return tag_open + text_escaped + tag_close

    s = re.sub(r'(>)([^<]*?)(<)', repl_text, s)
    s = re.sub(r'(>)([^<]*?)(<)', repl_text, s)
    
    # Replace href="#"
    s = s.replace('href="#"', 'href="#/"')
    
    return s

base_dir = 'stitch_aegisone_ai_landing_page/stitch_aegisone_ai_landing_page'
out_dir = 'frontend/src/pages'

for p in pages_config:
    src_file = os.path.join(base_dir, p['folder'], 'code.html')
    if not os.path.exists(src_file):
        print(f"Warning: {src_file} does not exist!")
        continue
        
    with open(src_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    main_match = re.search(r'<main\b[^>]*>(.*?)</main>', content, re.DOTALL)
    if not main_match:
        print(f"Warning: No main tag in {src_file}!")
        continue
        
    main_html = main_match.group(1)
    jsx_main = clean_html_to_jsx(main_html)
    
    comp_name = p['component']
    api_method = p['api_hook']
    
    tsx = f'''import React, {{ useState, useEffect }} from 'react';
import {{ Link, useNavigate }} from 'react-router-dom';
import {{ api }} from '../services/api';

export const {comp_name}: React.FC = () => {{
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {{
    const load = async () => {{
      try {{
        if (api.{api_method}) {{
          const res = await api.{api_method}();
          setData(res);
        }}
      }} catch (err) {{
        console.error('Failed to load {comp_name} data', err);
      }} finally {{
        setLoading(false);
      }}
    }};
    load();
  }}, []);

  return (
    <div className="w-full min-h-screen bg-surface-container-lowest text-on-surface antialiased p-space-lg space-y-6">
{jsx_main}
    </div>
  );
}};

export default {comp_name};
'''

    out_file = os.path.join(out_dir, p['file'])
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(tsx)
        
    print(f"Migrated {p['folder']} -> {p['file']} ({len(tsx)} bytes)")
