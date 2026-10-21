with open('frontend/src/pages/LandingPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = "const navigate = useNavigate();"
replacement = "const navigate = useNavigate();\n  const [activeTab, setActiveTab] = useState<'overview' | 'findings' | 'remediation' | 'validation'>('overview');"

if "const [activeTab, setActiveTab]" not in c:
    c = c.replace(target, replacement, 1)

with open('frontend/src/pages/LandingPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("ActiveTab state added!")
