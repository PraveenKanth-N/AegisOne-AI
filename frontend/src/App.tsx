import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

// 20 Canonical Pages & Research Lab Pages
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { InventoryPage } from './pages/InventoryPage';
import { ScanConfigPage } from './pages/ScanConfigPage';
import { ScanTimelinePage } from './pages/ScanTimelinePage';
import { FindingsPage } from './pages/FindingsPage';
import { FindingDetailPage } from './pages/FindingDetailPage';
import { KnowledgeGraphPage } from './pages/KnowledgeGraphPage';
import { AiAnalystPage } from './pages/AiAnalystPage';
import { RemediationPage } from './pages/RemediationPage';
import { SandboxPage } from './pages/SandboxPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ThreatIntelPage } from './pages/ThreatIntelPage';
import { ResearchLabPage } from './pages/ResearchLabPage';
import { ReportsPage } from './pages/ReportsPage';
import { AccessControlPage } from './pages/AccessControlPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { SettingsPage } from './pages/SettingsPage';
import { AccountPage } from './pages/AccountPage';

// Additional Specialized Lab Pages
import { PcapPage } from './pages/PcapPage';
import { EmailPage } from './pages/EmailPage';
import { CryptoLabPage } from './pages/CryptoLabPage';
import { AuditPage } from './pages/AuditPage';

export function App() {
  const [isScanning, setIsScanning] = useState(false);

  const handleTriggerScan = async () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 4000);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route 1: Full-width Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Console Routes with Tactical Sidebar and TopBar */}
        <Route
          path="/console/*"
          element={
            <div className="flex h-screen bg-[#08080B] text-slate-100 overflow-hidden font-sans">
              <Sidebar />
              <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <TopBar onTriggerScan={handleTriggerScan} isScanning={isScanning} />
                <main className="flex-1 overflow-y-auto p-6 bg-[#08080B]">
                  <Routes>
                    {/* Route 2: Command Center */}
                    <Route path="/" element={<DashboardPage />} />

                    {/* Route 3: Application Inventory */}
                    <Route path="inventory" element={<InventoryPage />} />

                    {/* Route 4: Configure Assessment */}
                    <Route path="scans/configure" element={<ScanConfigPage />} />

                    {/* Route 5: Scan Timeline */}
                    <Route path="scans/live" element={<ScanTimelinePage />} />
                    <Route path="scans" element={<ScanTimelinePage />} />

                    {/* Route 6 & 7: Vulnerability Findings & Detail */}
                    <Route path="findings" element={<FindingsPage />} />
                    <Route path="findings/:findingId" element={<FindingDetailPage />} />

                    {/* Route 8: Security Knowledge Graph */}
                    <Route path="knowledge-graph" element={<KnowledgeGraphPage />} />

                    {/* Route 9: AI Security Analyst */}
                    <Route path="ai-analyst" element={<AiAnalystPage />} />

                    {/* Route 10: Remediation Workspace */}
                    <Route path="remediation" element={<RemediationPage />} />

                    {/* Route 11: Sandbox Validation */}
                    <Route path="sandbox" element={<SandboxPage />} />

                    {/* Route 12: Before/After Posture */}
                    <Route path="posture" element={<ComparisonPage />} />
                    <Route path="comparison" element={<ComparisonPage />} />

                    {/* Route 13: Security Policies */}
                    <Route path="policies" element={<PoliciesPage />} />

                    {/* Route 14: Threat Intelligence Feed */}
                    <Route path="threat-intelligence" element={<ThreatIntelPage />} />

                    {/* Route 15: Research Benchmark Lab */}
                    <Route path="research" element={<ResearchLabPage />} />

                    {/* Route 16: Reports & Audit Evidence */}
                    <Route path="reports" element={<ReportsPage />} />

                    {/* Route 17: User Roles & Access Control */}
                    <Route path="admin/access" element={<AccessControlPage />} />

                    {/* Route 18: Integration Hub & System Health */}
                    <Route path="admin/integrations" element={<IntegrationsPage />} />

                    {/* Route 19: Global Settings */}
                    <Route path="admin/settings" element={<SettingsPage />} />
                    <Route path="settings" element={<SettingsPage />} />

                    {/* Route 20: Analyst Account Profile */}
                    <Route path="account" element={<AccountPage />} />

                    {/* Specialized Security Labs */}
                    <Route path="pcap" element={<PcapPage />} />
                    <Route path="email-lab" element={<EmailPage />} />
                    <Route path="crypto-lab" element={<CryptoLabPage />} />
                    <Route path="audit" element={<AuditPage />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/console" replace />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />

        {/* Global Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
