import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  PlusCircle,
  Calendar,
  Search as SearchIcon,
  TrendingUp,
  Link2,
  MapPin,
  Star,
  Share2,
  BarChart3,
  Activity,
  CheckSquare,
  Layers,
  Palette,
  FolderOpen,
  Mail,
  MessageSquare,
  CreditCard,
  DollarSign,
  Settings,
  ChevronDown,
  ChevronRight,
  Menu,
  Bell,
  Plus,
  UserCircle,
  LogOut,
  HelpCircle,
  Mic,
  Brain,
  Zap,
} from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import ClientManager from './ClientManager';
import LeadDashboard from './LeadDashboard';
import PerformanceDashboard from './PerformanceDashboard';
import ReportGenerator from './ReportGenerator';
import RankTracker from './RankTracker';
import GBPDashboard from './GBPDashboard';
import ReviewsManagement from './ReviewsManagement';
import UptimeMonitor from './UptimeMonitor';
import InvoicesExpenses from './InvoicesExpenses';
import PodcastManager from './PodcastManager';
import PublishingSystem from './PublishingSystem';
import SystemArchitecture from './SystemArchitecture';
import EcommerceWebDesigner from './EcommerceWebDesigner';
import AdminCenterManager from './AdminCenterManager';
import TaskBoard from './TaskBoard';
import PageAuditorAgent from './PageAuditorAgent';
import DashboardOverview from './DashboardOverview';
import ProjectLoneStar from './ProjectLoneStar';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  children?: {
    id: string;
    label: string;
    badge?: number;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'leads-clients',
    label: 'Leads & Clients',
    icon: Users,
    badge: 5,
    children: [
      { id: 'lead-dashboard', label: 'Lead Dashboard', badge: 3 },
      { id: 'client-manager', label: 'Client Manager' },
    ],
  },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    children: [
      { id: 'blog-posts', label: 'Blog Posts' },
      { id: 'pages', label: 'Pages' },
      { id: 'media-library', label: 'Media Library' },
    ],
  },
  {
    id: 'create-new',
    label: 'Create New',
    icon: PlusCircle,
    children: [
      { id: 'new-blog-post', label: 'New Blog Post' },
      { id: 'new-page', label: 'New Page' },
      { id: 'bulk-generator', label: 'Bulk Generator' },
      { id: 'web-designer', label: 'Web Architect' },
    ],
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: Calendar,
  },
  {
    id: 'seo-center',
    label: 'SEO Center',
    icon: TrendingUp,
    children: [
      { id: 'seo-dashboard', label: 'SEO Dashboard' },
      { id: 'rank-tracker', label: 'Rank Tracker' },
      { id: 'broken-links', label: 'Broken Links', badge: 2 },
      { id: 'redirects', label: 'Redirects' },
    ],
  },
  {
    id: 'google-business',
    label: 'Google Business',
    icon: MapPin,
    children: [
      { id: 'gbp-dashboard', label: 'GBP Dashboard' },
      { id: 'reviews', label: 'Reviews', badge: 8 },
    ],
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: Share2,
    children: [
      { id: 'post-creator', label: 'Post Creator' },
      { id: 'scheduler', label: 'Scheduler' },
    ],
  },
  {
    id: 'analytics-reports',
    label: 'Analytics & Reports',
    icon: BarChart3,
    children: [
      { id: 'performance-dashboard', label: 'Performance Dashboard' },
      { id: 'report-generator', label: 'Report Generator' },
    ],
  },
  {
    id: 'website-health',
    label: 'Website Health',
    icon: Activity,
    children: [
      { id: 'uptime-monitor', label: 'Uptime Monitor' },
      { id: 'speed-monitor', label: 'Speed Monitor' },
    ],
  },
  {
    id: 'tasks-projects',
    label: 'Tasks & Projects',
    icon: CheckSquare,
    badge: 12,
    children: [
      { id: 'task-board', label: 'Task Board', badge: 7 },
      { id: 'client-requests', label: 'Client Requests', badge: 5 },
    ],
  },
  {
    id: 'forms-popups',
    label: 'Forms & Popups',
    icon: Layers,
    children: [
      { id: 'form-builder', label: 'Form Builder' },
      { id: 'popup-manager', label: 'Popup Manager' },
    ],
  },
  {
    id: 'assets',
    label: 'Assets',
    icon: Palette,
    children: [
      { id: 'brand-kit', label: 'Brand Kit' },
      { id: 'file-manager', label: 'File Manager' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: Mail,
    badge: 3,
    children: [
      { id: 'email-center', label: 'Email Center', badge: 3 },
      { id: 'internal-notes', label: 'Internal Notes' },
    ],
  },
  {
    id: 'podcast',
    label: 'Podcast',
    icon: Mic,
    children: [
      { id: 'podcast-episodes', label: 'Episodes' },
      { id: 'podcast-upload', label: 'Upload New' },
      { id: 'podcast-analytics', label: 'Analytics' },
      { id: 'podcast-settings', label: 'Settings' },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: CreditCard,
    children: [
      { id: 'invoices', label: 'Invoices' },
      { id: 'expenses', label: 'Expenses' },
    ],
  },
  {
    id: 'project-lone-star',
    label: 'Lone Star Directive',
    icon: Zap,
  },
  {
    id: 'system-intelligence',
    label: 'Intelligence',
    icon: Brain,
    children: [
      { id: 'admin-manager', label: 'Admin Manager' },
      { id: 'system-architecture', label: 'Arch. Mapper' },
      { id: 'page-auditor', label: 'Page Auditor' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
  },
];

export default function AdminPanel() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string>('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleNavClick = (id: string, hasChildren: boolean) => {
    if (hasChildren) {
      toggleSection(id);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <div className="flex h-screen bg-[#030712] text-slate-300 overflow-hidden relative selection:bg-indigo-500/30">
      {/* Global Ambient Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        className="bg-black/40 backdrop-blur-2xl border-r border-white/5 flex flex-col relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center px-4 border-b border-white/5 bg-white/[0.02]">
          {!sidebarCollapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-3 w-full px-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-wide truncate">THINKMENTS</div>
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-0.5 truncate">Command Center</div>
              </div>
            </motion.div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              <Zap className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
          <div className="space-y-1.5">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.id || item.children?.some(c => c.id === activeItem);
              const isExpanded = expandedSections.includes(item.id);
              
              return (
              <div key={item.id} className="relative">
                {/* Active Indicator Glow */}
                {isActive && sidebarCollapsed && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                )}
                
                {/* Parent Item */}
                <button
                  onClick={() => handleNavClick(item.id, !!item.children)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
                    isActive && !item.children
                      ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/10 text-white border border-indigo-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : isActive && item.children 
                      ? 'bg-white/5 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <item.icon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    {!sidebarCollapsed && (
                      <span className="text-sm font-semibold tracking-wide truncate">{item.label}</span>
                    )}
                  </div>
                  {!sidebarCollapsed && (
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      {item.badge && (
                        <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] px-1.5 py-0 h-5 flex items-center justify-center font-bold">
                          {item.badge}
                        </Badge>
                      )}
                      {item.children && (
                        <motion.div
                          animate={{ rotate: isExpanded ? 0 : -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-600'}`} />
                        </motion.div>
                      )}
                    </div>
                  )}
                </button>

                {/* Children Items */}
                {item.children && !sidebarCollapsed && (
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-5 mt-1.5 mb-2 space-y-1 border-l border-white/10 pl-4 py-1 relative">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => setActiveItem(child.id)}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all relative ${
                                activeItem === child.id
                                  ? 'text-indigo-300 bg-indigo-500/10'
                                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                              }`}
                            >
                              {activeItem === child.id && (
                                <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                              )}
                              <span className="truncate">{child.label}</span>
                              {child.badge && (
                                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[9px] px-1.5 py-0 h-4 flex items-center justify-center font-bold">
                                  {child.badge}
                                </Badge>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )})}
          </div>
        </nav>

        {/* Sidebar Footer */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-white/5 bg-black/20">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl p-4 border border-indigo-500/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Brain className="w-6 h-6 text-indigo-400 mx-auto mb-2 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
              <div className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">M.A.C.E. ONLINE</div>
              <div className="text-[10px] text-slate-400">All Agents Active</div>
            </div>
          </div>
        )}
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        {/* Header */}
        <header className="h-20 bg-black/20 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 z-30 sticky top-0">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-slate-400 hover:text-white hover:bg-white/10 rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </Button>

            {/* Omni-Search */}
            <div className="relative w-96 max-w-xl hidden md:block group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
              <Input
                type="text"
                placeholder="Search matrix, leads, or invoke commands (/)"
                className="pl-11 bg-black/40 border border-white/10 text-slate-300 placeholder:text-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 relative z-10 transition-all shadow-inner h-11 text-sm font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 z-10">
                <kbd className="px-1.5 pt-0.5 pb-1 text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 rounded hidden sm:inline-block">Ctrl</kbd>
                <kbd className="px-1.5 pt-0.5 pb-1 text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 rounded hidden sm:inline-block">K</kbd>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/30 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] rounded-xl font-bold tracking-wide h-10 px-5 hidden sm:flex">
              <Plus className="w-4 h-4 mr-2" />
              Initiate Node
            </Button>

            <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block" />

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className="text-slate-400 hover:text-white hover:bg-white/10 relative rounded-xl h-10 w-10"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse" />
              </Button>
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-3 hover:bg-white/5 rounded-xl p-1.5 pr-3 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center border border-white/20 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
                  <span className="text-white text-xs font-black tracking-wider z-10">TX</span>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-bold text-white leading-none">Apex Admin</div>
                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">Level 9 Auth</div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto relative">
          <div
            className={
              [
                'client-manager', 'lead-dashboard', 'performance-dashboard', 
                'report-generator', 'rank-tracker', 'gbp-dashboard', 
                'reviews', 'uptime-monitor', 'invoices'
              ].includes(activeItem) || activeItem.startsWith('podcast-')
                ? 'min-h-full'
                : 'p-6 md:p-8 min-h-full'
            }
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={
                  [
                    'client-manager', 'lead-dashboard', 'performance-dashboard', 
                    'report-generator', 'rank-tracker', 'gbp-dashboard', 
                    'reviews', 'uptime-monitor', 'invoices'
                  ].includes(activeItem) || activeItem.startsWith('podcast-')
                    ? 'w-full h-full'
                    : 'max-w-screen-2xl mx-auto'
                }
              >
                {/* Render Views */}
                {activeItem === 'dashboard' && <DashboardOverview onNavigate={(id) => setActiveItem(id)} />}
                {activeItem === 'client-manager' && <ClientManager />}
                {activeItem === 'lead-dashboard' && <LeadDashboard />}
                {activeItem === 'performance-dashboard' && <PerformanceDashboard />}
                {activeItem === 'report-generator' && <ReportGenerator />}
                {activeItem === 'rank-tracker' && <RankTracker />}
                {activeItem === 'gbp-dashboard' && <GBPDashboard />}
                {activeItem === 'reviews' && <ReviewsManagement />}
                {activeItem === 'uptime-monitor' && <UptimeMonitor />}
                {activeItem === 'invoices' && <InvoicesExpenses />}
                {activeItem.startsWith('podcast-') && <PodcastManager />}
                {activeItem === 'web-designer' && <EcommerceWebDesigner />}
                {activeItem === 'admin-manager' && <AdminCenterManager />}
                {activeItem === 'system-architecture' && <SystemArchitecture />}
                {activeItem === 'task-board' && <TaskBoard />}
                {activeItem === 'page-auditor' && <PageAuditorAgent />}
                {activeItem === 'project-lone-star' && <ProjectLoneStar />}

                {/* Placeholder Content */}
                {(!activeItem || 
                  (!['dashboard', 'client-manager', 'lead-dashboard', 'performance-dashboard', 'report-generator', 'rank-tracker', 'gbp-dashboard', 'reviews', 'uptime-monitor', 'invoices', 'web-designer', 'admin-manager', 'system-architecture', 'task-board', 'page-auditor', 'project-lone-star'].includes(activeItem) && !activeItem.startsWith('podcast-'))) && (
                  <div className="flex items-center justify-center h-[calc(100vh-120px)]">
                    <div className="text-center max-w-md w-full relative">
                      <div className="absolute inset-0 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
                      
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative shadow-2xl overflow-hidden backdrop-blur-xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Layers className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <h2 className="text-3xl font-black text-white mb-3 tracking-wide">
                        {activeItem ? activeItem.replace(/-/g, ' ').toUpperCase() : 'SYSTEM WAITING'}
                      </h2>
                      <p className="text-slate-400 text-sm font-medium mb-8">
                        {activeItem ? 'This interface module is currently offline or under active construction.' : 'Select an active node from the sidebar to initialize operations.'}
                      </p>
                      
                      <Button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 rounded-xl font-bold shadow-lg" onClick={() => setActiveItem('dashboard')}>
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Return to Command Matrix
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
