import re
import os

def convert_html_to_jsx(html_str):
    # Strip <script> tags
    s = re.sub(r'<script\b[^>]*>.*?</script>', '', html_str, flags=re.DOTALL)
    
    # Remove HTML comments
    s = re.sub(r'<!--.*?-->', '', s, flags=re.DOTALL)
    
    # Replace HTML attributes with React JSX attributes
    s = re.sub(r'\bclass=', 'className=', s)
    s = re.sub(r'\bfor=', 'htmlFor=', s)
    s = re.sub(r'\btabindex=', 'tabIndex=', s)
    s = re.sub(r'\bautocomplete=', 'autoComplete=', s)
    s = re.sub(r'\bautofocus=', 'autoFocus=', s)
    s = re.sub(r'\bdata-icon="([^"]*)"', '', s)
    s = re.sub(r'\bonclick="([^"]*)"', '', s)
    s = re.sub(r'\bviewbox=', 'viewBox=', s)
    
    # Self-close void tags: img, input, hr, br
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
    
    # Escape { and } in text between tags (> text <)
    def repl_text(match):
        tag_open = match.group(1)
        text = match.group(2)
        tag_close = match.group(3)
        text_escaped = text.replace('{', '&#123;').replace('}', '&#125;')
        return tag_open + text_escaped + tag_close

    s = re.sub(r'(>)([^<]*?)(<)', repl_text, s)
    s = re.sub(r'(>)([^<]*?)(<)', repl_text, s)
    
    return s

stitch_path = 'stitch_aegisone_ai_landing_page/stitch_aegisone_ai_landing_page/aegisone_ai_cinematic_research_landing_page/code.html'
with open(stitch_path, 'r', encoding='utf-8') as f:
    raw = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', raw, re.DOTALL)
if not body_match:
    raise Exception("Could not find body tag")

body = body_match.group(1)
jsx_body = convert_html_to_jsx(body)

# Replace all links to console with Link
jsx_body = jsx_body.replace('href="#console-simulator"', 'href="/console"')
jsx_body = jsx_body.replace('href="#console"', 'href="/console"')
jsx_body = jsx_body.replace('href="#"', 'href="/console"')

# Add interactive tabs support for the interactive console simulator in landing page
tsx_content = f'''import React, {{ useState }} from 'react';
import {{ Link, useNavigate }} from 'react-router-dom';

export const LandingPage: React.FC = () => {{
  const navigate = useNavigate();

  return (
    <div className="bg-[#0e0e11] text-[#e5e1e6] font-sans antialiased min-h-screen selection:bg-[#ff5357] selection:text-[#5c000b] relative">
{jsx_body}
    </div>
  );
}};

export default LandingPage;
'''

out_path = 'frontend/src/pages/LandingPage.tsx'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(tsx_content)

print(f"Successfully converted {stitch_path} to {out_path} ({len(tsx_content)} bytes)")
