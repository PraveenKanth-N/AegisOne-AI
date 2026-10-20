import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { InventoryPage } from './pages/InventoryPage';
import { ScanTimelinePage } from './pages/ScanTimelinePage';
import { FindingsPage } from './pages/FindingsPage';
import { KnowledgeGraphPage } from './pages/KnowledgeGraphPage';
import { RemediationPage } from './pages/RemediationPage';
import { SandboxPage } from './pages/SandboxPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { ReportsPage } from './pages/ReportsPage';
import { PcapPage } from './pages/PcapPage';
import { EmailPage } from './pages/EmailPage';
import { CryptoLabPage } from './pages/CryptoLabPage';
import { AuditPage } from './pages/AuditPage';
import { SettingsPage } from './pages/SettingsPage';

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
        {/* Full-width Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Console Layout with Sidebar and TopBar */}
        <Route
          path="/console/*"
          element={
            <div className="flex h-screen bg-[#051424] text-slate-100 overflow-hidden font-sans">
              <Sidebar />
              <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <TopBar onTriggerScan={handleTriggerScan} isScanning={isScanning} />
                <main className="flex-1 overflow-y-auto p-6 bg-[#051424]">
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="inventory" element={<InventoryPage />} />
                    <Route path="scans" element={<ScanTimelinePage />} />
                    <Route path="findings" element={<FindingsPage />} />
                    <Route path="ai-analyst" element={<FindingsPage />} />
                    <Route path="knowledge-graph" element={<KnowledgeGraphPage />} />
                    <Route path="remediation" element={<RemediationPage />} />
                    <Route path="sandbox" element={<SandboxPage />} />
                    <Route path="comparison" element={<ComparisonPage />} />
                    <Route path="reports" element={<ReportsPage />} />
                    <Route path="pcap" element={<PcapPage />} />
                    <Route path="email-lab" element={<EmailPage />} />
                    <Route path="crypto-lab" element={<CryptoLabPage />} />
                    <Route path="audit" element={<AuditPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
