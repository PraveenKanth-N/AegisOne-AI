with open('frontend/src/pages/LandingPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace tab buttons
old_buttons = '''<div className="flex border-b border-outline-variant/40 bg-surface-container-lowest px-4">
<button className="px-5 py-3 font-label-code text-label-code text-primary font-bold border-b-2 border-primary flex items-center gap-2" id="tab-overview-btn" >
<span className="material-symbols-outlined text-[16px]">dashboard</span> Overview
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-findings-btn" >
<span className="material-symbols-outlined text-[16px]">bug_report</span> Findings (14)
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-remediation-btn" >
<span className="material-symbols-outlined text-[16px]">auto_fix_high</span> Remediation (8)
        </button>
<button className="px-5 py-3 font-label-code text-label-code text-on-surface-variant font-medium hover:text-on-surface border-b-2 border-transparent flex items-center gap-2" id="tab-validation-btn" >
<span className="material-symbols-outlined text-[16px]">verified</span> Validation Logs
        </button>
</div>'''

new_buttons = '''<div className="flex border-b border-outline-variant/40 bg-surface-container-lowest px-4">
<button onClick={() => setActiveTab('overview')} className={`px-5 py-3 font-label-code text-label-code flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'overview' ? 'text-primary font-bold border-primary' : 'text-on-surface-variant font-medium hover:text-on-surface border-transparent'}`} id="tab-overview-btn">
<span className="material-symbols-outlined text-[16px]">dashboard</span> Overview
</button>
<button onClick={() => setActiveTab('findings')} className={`px-5 py-3 font-label-code text-label-code flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'findings' ? 'text-primary font-bold border-primary' : 'text-on-surface-variant font-medium hover:text-on-surface border-transparent'}`} id="tab-findings-btn">
<span className="material-symbols-outlined text-[16px]">bug_report</span> Findings (14)
</button>
<button onClick={() => setActiveTab('remediation')} className={`px-5 py-3 font-label-code text-label-code flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'remediation' ? 'text-primary font-bold border-primary' : 'text-on-surface-variant font-medium hover:text-on-surface border-transparent'}`} id="tab-remediation-btn">
<span className="material-symbols-outlined text-[16px]">auto_fix_high</span> Remediation (8)
</button>
<button onClick={() => setActiveTab('validation')} className={`px-5 py-3 font-label-code text-label-code flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'validation' ? 'text-primary font-bold border-primary' : 'text-on-surface-variant font-medium hover:text-on-surface border-transparent'}`} id="tab-validation-btn">
<span className="material-symbols-outlined text-[16px]">verified</span> Validation Logs
</button>
</div>'''

c = c.replace(old_buttons, new_buttons)

# Replace tab content divs
c = c.replace('<div className="space-y-6" id="tab-overview">', '<div className={`space-y-6 ${activeTab === "overview" ? "block" : "hidden"}`} id="tab-overview">')
c = c.replace('<div className="hidden space-y-3" id="tab-findings">', '<div className={`space-y-3 ${activeTab === "findings" ? "block" : "hidden"}`} id="tab-findings">')
c = c.replace('<div className="hidden space-y-4" id="tab-remediation">', '<div className={`space-y-4 ${activeTab === "remediation" ? "block" : "hidden"}`} id="tab-remediation">')
c = c.replace('<div className="hidden font-label-code text-label-code bg-surface-container-high p-4 rounded border border-outline-variant/40 space-y-1" id="tab-validation">', '<div className={`font-label-code text-label-code bg-surface-container-high p-4 rounded border border-outline-variant/40 space-y-1 ${activeTab === "validation" ? "block" : "hidden"}`} id="tab-validation">')

# Also connect "Inspect Patch Proposal" button to remediation tab or /console/remediation
c = c.replace('<button className="px-4 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold flex items-center gap-1.5 hover:bg-inverse-primary transition-all" >', '<button onClick={() => navigate("/console/remediation")} className="px-4 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-bold flex items-center gap-1.5 hover:bg-inverse-primary transition-all">')

with open('frontend/src/pages/LandingPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("LandingPage interactivity patched successfully!")
