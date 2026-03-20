import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, FileText, CreditCard, LifeBuoy, Menu, ChevronLeft, Zap, ExternalLink, UserCircle, LogOut } from 'lucide-react';
import { PortalTab } from './ClientPortal';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface ClientSidebarProps {
  activeTab: PortalTab;
  setActiveTab: (tab: PortalTab) => void;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export default function ClientSidebar({ activeTab, setActiveTab, collapsed, setCollapsed }: ClientSidebarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const menuItems: { id: PortalTab; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Performance', icon: LayoutDashboard },
    { id: 'reports', label: 'AI Reports', icon: FileText },
    { id: 'billing', label: 'Billing & Invoices', icon: CreditCard },
    { id: 'support', label: 'Support Tickets', icon: LifeBuoy },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      className="bg-white text-gray-800 flex flex-col shadow-2xl relative z-20 border-r border-gray-200"
    >
      {/* Logo Area */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
        {!collapsed ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-[#1E3A5F] tracking-tight">ThinkMents</div>
              <div className="text-xs font-medium text-[#00B4D8] uppercase tracking-wider">Client Portal</div>
            </div>
          </motion.div>
        ) : (
          <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-xl flex items-center justify-center mx-auto shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute ${collapsed ? '-right-4 top-6 bg-white shadow-md border border-gray-100' : 'right-4 top-6'} hover:bg-gray-100 rounded-full w-8 h-8 z-50`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu className="w-4 h-4 text-gray-600" /> : <ChevronLeft className="w-4 h-4 text-gray-600" />}
        </Button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-8 px-4 scrollbar-thin">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center ${collapsed ? 'justify-center px-0' : 'justify-start px-4'} py-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00B4D8] text-white shadow-md shadow-[#00B4D8]/20'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#1E3A5F]'
                }`}
              >
                <item.icon className={`w-5 h-5 ${!collapsed && 'mr-3'} ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {!collapsed && (
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer Area / User Account */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        {!collapsed ? (
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center justify-between bg-white border border-gray-200 p-3 rounded-xl hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 leading-none">Acme Corp</p>
                  <p className="text-xs text-gray-500 mt-1">Premium Tier</p>
                </div>
              </div>
            </button>
            
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-0 w-full mb-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-2 space-y-1">
                    <button className="w-full flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                      <UserCircle className="w-4 h-4 mr-2 text-gray-400" /> Account Settings
                    </button>
                    <Link to="/" className="w-full flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                      <ExternalLink className="w-4 h-4 mr-2 text-gray-400" /> Back to Website
                    </Link>
                    <div className="h-px bg-gray-100 my-1" />
                    <button className="w-full flex items-center px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium">
                      <LogOut className="w-4 h-4 mr-2 text-red-500" /> Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-10 h-10 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white font-bold mx-auto cursor-pointer">
            AC
          </div>
        )}
      </div>

    </motion.aside>
  );
}
