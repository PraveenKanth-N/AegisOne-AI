import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { DashboardPage } from './pages/DashboardPage';
import { FindingsPage } from './pages/FindingsPage';
import { KnowledgeGraphPage } from './pages/KnowledgeGraphPage';
import { RemediationPage } from './pages/RemediationPage';
import { SandboxPage } from './pages/SandboxPage';
import { ComparisonPage } from './pages/ComparisonPage';
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
      <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Bar */}
          <TopBar onTriggerScan={handleTriggerScan} isScanning={isScanning} />

          {/* Dynamic Scrollable Body */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/projects" element={<DashboardPage />} />
              <Route path="/attack-surface" element={<DashboardPage />} />
              <Route path="/scans" element={<DashboardPage />} />
              <Route path="/findings" element={<FindingsPage />} />
              <Route path="/ai-analyst" element={<FindingsPage />} />
              <Route path="/knowledge-graph" element={<KnowledgeGraphPage />} />
              <Route path="/remediation" element={<RemediationPage />} />
              <Route path="/sandbox" element={<SandboxPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/pcap" element={<PcapPage />} />
              <Route path="/email-lab" element={<EmailPage />} />
              <Route path="/crypto-lab" element={<CryptoLabPage />} />
              <Route path="/learning" element={<ComparisonPage />} />
              <Route path="/audit" element={<AuditPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
