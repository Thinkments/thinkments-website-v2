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
  Zap,
  Mic
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
    icon: LayoutDashboard
  },
  {
    id: 'leads-clients',
    label: 'Leads & Clients',
    icon: Users,
    badge: 5,
    children: [
      { id: 'lead-dashboard', label: 'Lead Dashboard', badge: 3 },
      { id: 'client-manager', label: 'Client Manager' }
    ]
  },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    children: [
      { id: 'blog-posts', label: 'Blog Posts' },
      { id: 'pages', label: 'Pages' },
      { id: 'media-library', label: 'Media Library' }
    ]
  },
  {
    id: 'create-new',
    label: 'Create New',
    icon: PlusCircle,
    children: [
      { id: 'new-blog-post', label: 'New Blog Post' },
      { id: 'new-page', label: 'New Page' },
      { id: 'bulk-generator', label: 'Bulk Generator' }
    ]
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: Calendar
  },
  {
    id: 'seo-center',
    label: 'SEO Center',
    icon: TrendingUp,
    children: [
      { id: 'seo-dashboard', label: 'SEO Dashboard' },
      { id: 'rank-tracker', label: 'Rank Tracker' },
      { id: 'broken-links', label: 'Broken Links', badge: 2 },
      { id: 'redirects', label: 'Redirects' }
    ]
  },
  {
    id: 'google-business',
    label: 'Google Business',
    icon: MapPin,
    children: [
      { id: 'gbp-dashboard', label: 'GBP Dashboard' },
      { id: 'reviews', label: 'Reviews', badge: 8 }
    ]
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: Share2,
    children: [
      { id: 'post-creator', label: 'Post Creator' },
      { id: 'scheduler', label: 'Scheduler' }
    ]
  },
  {
    id: 'analytics-reports',
    label: 'Analytics & Reports',
    icon: BarChart3,
    children: [
      { id: 'performance-dashboard', label: 'Performance Dashboard' },
      { id: 'report-generator', label: 'Report Generator' }
    ]
  },
  {
    id: 'website-health',
    label: 'Website Health',
    icon: Activity,
    children: [
      { id: 'uptime-monitor', label: 'Uptime Monitor' },
      { id: 'speed-monitor', label: 'Speed Monitor' }
    ]
  },
  {
    id: 'tasks-projects',
    label: 'Tasks & Projects',
    icon: CheckSquare,
    badge: 12,
    children: [
      { id: 'task-board', label: 'Task Board', badge: 7 },
      { id: 'client-requests', label: 'Client Requests', badge: 5 }
    ]
  },
  {
    id: 'forms-popups',
    label: 'Forms & Popups',
    icon: Layers,
    children: [
      { id: 'form-builder', label: 'Form Builder' },
      { id: 'popup-manager', label: 'Popup Manager' }
    ]
  },
  {
    id: 'assets',
    label: 'Assets',
    icon: Palette,
    children: [
      { id: 'brand-kit', label: 'Brand Kit' },
      { id: 'file-manager', label: 'File Manager' }
    ]
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: Mail,
    badge: 3,
    children: [
      { id: 'email-center', label: 'Email Center', badge: 3 },
      { id: 'internal-notes', label: 'Internal Notes' }
    ]
  },
  {
    id: 'podcast',
    label: 'Podcast',
    icon: Mic,
    children: [
      { id: 'podcast-episodes', label: 'Episodes' },
      { id: 'podcast-upload', label: 'Upload New' },
      { id: 'podcast-analytics', label: 'Analytics' },
      { id: 'podcast-settings', label: 'Settings' }
    ]
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: CreditCard,
    children: [
      { id: 'invoices', label: 'Invoices' },
      { id: 'expenses', label: 'Expenses' }
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings
  }
];

export default function AdminPanel() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['analytics-reports']);
  const [activeItem, setActiveItem] = useState<string>('performance-dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
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
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        className="bg-[#1E3A5F] text-white flex flex-col shadow-2xl relative z-20"
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center px-4 border-b border-white/10">
          {!sidebarCollapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">ThinkMents</div>
                <div className="text-xs text-[#00B4D8]">Admin Panel</div>
              </div>
            </motion.div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {/* Parent Item */}
                <button
                  onClick={() => handleNavClick(item.id, !!item.children)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                    activeItem === item.id
                      ? 'bg-[#00B4D8] text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!sidebarCollapsed && (
                      <span className="text-sm font-medium truncate">{item.label}</span>
                    )}
                  </div>
                  {!sidebarCollapsed && (
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      {item.badge && (
                        <Badge className="bg-[#FF6B35] text-white text-xs px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
                          {item.badge}
                        </Badge>
                      )}
                      {item.children && (
                        <motion.div
                          animate={{ rotate: expandedSections.includes(item.id) ? 0 : -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  )}
                </button>

                {/* Children Items */}
                {item.children && !sidebarCollapsed && (
                  <AnimatePresence>
                    {expandedSections.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/10 pl-4">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => setActiveItem(child.id)}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                                activeItem === child.id
                                  ? 'bg-[#00B4D8] text-white'
                                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span className="truncate">{child.label}</span>
                              {child.badge && (
                                <Badge className="bg-[#FF6B35] text-white text-xs px-1.5 py-0 min-w-[20px] h-5 flex items-center justify-center">
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
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-white/10">
            <div className="bg-gradient-to-r from-[#00B4D8]/20 to-[#FF6B35]/20 rounded-lg p-3 border border-[#00B4D8]/30">
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-white mb-1">Need Help?</div>
                  <div className="text-white/70">Check our documentation</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-[#1E3A5F] hover:bg-[#F8F9FA]"
            >
              <Menu className="w-5 h-5" />
            </Button>

            {/* Search Bar */}
            <div className="relative w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search anything..."
                className="pl-10 bg-[#F8F9FA] border-0 focus:ring-2 focus:ring-[#00B4D8]"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Quick Create Button */}
            <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Quick Create
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className="text-[#1E3A5F] hover:bg-[#F8F9FA] relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B35] rounded-full text-xs text-white flex items-center justify-center">
                  5
                </span>
              </Button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-4 bg-[#1E3A5F] text-white">
                      <h3 className="font-semibold">Notifications</h3>
                      <p className="text-xs text-white/70 mt-1">You have 5 unread notifications</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {[
                        { title: 'New lead submitted', time: '5 min ago', type: 'lead' },
                        { title: 'Client review posted', time: '1 hour ago', type: 'review' },
                        { title: 'Task deadline approaching', time: '2 hours ago', type: 'task' },
                        { title: 'New blog comment', time: '3 hours ago', type: 'comment' },
                        { title: 'Invoice payment received', time: '5 hours ago', type: 'payment' }
                      ].map((notification, index) => (
                        <div
                          key={index}
                          className="p-4 border-b border-gray-100 hover:bg-[#F8F9FA] cursor-pointer transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'lead' ? 'bg-[#00B4D8]' :
                              notification.type === 'review' ? 'bg-[#FF6B35]' :
                              notification.type === 'task' ? 'bg-yellow-500' :
                              notification.type === 'payment' ? 'bg-green-500' :
                              'bg-gray-400'
                            }`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-[#1E3A5F]">{notification.title}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-[#F8F9FA] text-center">
                      <button className="text-sm text-[#00B4D8] hover:underline">
                        View all notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-2 hover:bg-[#F8F9FA] rounded-lg px-2 py-1 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">JD</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {/* User Menu Dropdown */}
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-4 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg font-semibold">JD</span>
                        </div>
                        <div>
                          <div className="font-semibold">John Doe</div>
                          <div className="text-xs text-white/80">Admin User</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#F8F9FA] text-[#1E3A5F] transition-colors">
                        <UserCircle className="w-5 h-5" />
                        <span className="text-sm">My Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#F8F9FA] text-[#1E3A5F] transition-colors">
                        <Settings className="w-5 h-5" />
                        <span className="text-sm">Settings</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#F8F9FA] text-[#1E3A5F] transition-colors">
                        <HelpCircle className="w-5 h-5" />
                        <span className="text-sm">Help & Support</span>
                      </button>
                      <div className="border-t border-gray-200 my-2" />
                      <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm">Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className={activeItem === 'client-manager' || activeItem === 'lead-dashboard' || activeItem === 'performance-dashboard' || activeItem === 'report-generator' || activeItem === 'rank-tracker' || activeItem === 'gbp-dashboard' || activeItem === 'reviews' || activeItem === 'uptime-monitor' || activeItem === 'invoices' || activeItem.startsWith('podcast-') ? '' : 'p-8'}>
            <div className={activeItem === 'client-manager' || activeItem === 'lead-dashboard' || activeItem === 'performance-dashboard' || activeItem === 'report-generator' || activeItem === 'rank-tracker' || activeItem === 'gbp-dashboard' || activeItem === 'reviews' || activeItem === 'uptime-monitor' || activeItem === 'invoices' || activeItem.startsWith('podcast-') ? '' : 'max-w-7xl mx-auto'}>
            {/* Render Client Manager */}
            {activeItem === 'client-manager' && <ClientManager />}

            {/* Render Lead Dashboard */}
            {activeItem === 'lead-dashboard' && <LeadDashboard />}

            {/* Render Performance Dashboard */}
            {activeItem === 'performance-dashboard' && <PerformanceDashboard />}

            {/* Render Report Generator */}
            {activeItem === 'report-generator' && <ReportGenerator />}

            {/* Render Rank Tracker */}
            {activeItem === 'rank-tracker' && <RankTracker />}

            {/* Render GBP Dashboard */}
            {activeItem === 'gbp-dashboard' && <GBPDashboard />}

            {/* Render Reviews Management */}
            {activeItem === 'reviews' && <ReviewsManagement />}

            {/* Render Uptime Monitor */}
            {activeItem === 'uptime-monitor' && <UptimeMonitor />}

            {/* Render Invoices/Expenses */}
            {activeItem === 'invoices' && <InvoicesExpenses />}

            {/* Render Podcast Manager (all podcast views) */}
            {activeItem.startsWith('podcast-') && <PodcastManager />}

            {/* Placeholder Content */}
            {!activeItem && (
              <div className="flex items-center justify-center h-full min-h-[500px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">
                    Welcome to ThinkMents Admin Panel
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 max-w-md">
                    Select a section from the sidebar to get started managing your digital marketing agency.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Go to Dashboard
                    </Button>
                    <Button variant="outline" className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Quick Tour
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other sections */}
            {activeItem && 
              activeItem !== 'client-manager' && 
              activeItem !== 'lead-dashboard' && 
              activeItem !== 'performance-dashboard' && 
              activeItem !== 'report-generator' && 
              activeItem !== 'rank-tracker' && 
              activeItem !== 'gbp-dashboard' && 
              activeItem !== 'reviews' && 
              activeItem !== 'uptime-monitor' && 
              activeItem !== 'invoices' && 
              !activeItem.startsWith('podcast-') && (
              <div className="flex items-center justify-center h-full min-h-[500px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3 capitalize">
                    {activeItem.replace(/-/g, ' ')}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 max-w-md">
                    This section is under construction.
                  </p>
                </div>
              </div>
            )}
          </div>
          </div>
        </main>
      </div>

      {/* Click outside to close dropdowns */}
      {(showNotifications || showUserMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </div>
  );
}