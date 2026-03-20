import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ClientSidebar from './ClientSidebar';
import DashboardView from './views/DashboardView';
import ReportingView from './views/ReportingView';
import BillingView from './views/BillingView';
import SupportTicketView from './views/SupportTicketView';
import ClientLogin from './ClientLogin';

export type PortalTab = 'dashboard' | 'reports' | 'billing' | 'support';

export default function ClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<PortalTab>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    return <ClientLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden text-gray-900">
      {/* Sidebar */}
      <ClientSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="flex-1 overflow-y-auto w-full relative">
          {/* Subtle background glow effect */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && <DashboardView key="dashboard" />}
            {activeTab === 'reports' && <ReportingView key="reports" />}
            {activeTab === 'billing' && <BillingView key="billing" />}
            {activeTab === 'support' && <SupportTicketView key="support" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
