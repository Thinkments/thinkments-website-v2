import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Plus,
  Calendar,
  Search as SearchIcon,
  Settings,
  Route,
  Menu,
  X,
  Bell,
  User,
  ChevronDown,
  HelpCircle,
  Layers,
  Wand2,
  Upload,
  Network,
  Palette,
  Sparkles,
  Zap,
  Mail,
  PenTool,
  LinkIcon,
  AlertTriangle,
  BarChart3,
  Users,
  MapPin,
  Activity,
  Brain,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import SEO from '../SEO';

// Import individual page components
import DashboardOverview from '../admin/DashboardOverview';
import BlogCreationToolNew from '../admin/BlogCreationToolNew';
import MediaLibrary from '../admin/MediaLibrary';
import PageBuilder from '../admin/PageBuilder';
import BulkPageGenerator from '../admin/BulkPageGenerator';
import SeoAdminDashboard from '../admin/SeoAdminDashboard';
import URLInspectionTool from '../admin/URLInspectionTool';
import SiteStructureMap from '../admin/SiteStructureMap';
import LayoutAndThemeManager from '../admin/LayoutAndThemeManager';
import AIWriterTool from '../admin/AIWriterTool';
import SEOBulkFixer from '../admin/SEOBulkFixer';
import EmailCampaignWriter from '../admin/EmailCampaignWriter';
import ImageSEOAuditor from '../admin/ImageSEOAuditor';
import SERPOptimizer from '../admin/SERPOptimizer';
import BrokenLinkFinder from '../admin/BrokenLinkFinder';
import BrokenLinkChecker from '../admin/BrokenLinkChecker';
import NotFoundPageEditor from '../admin/NotFoundPageEditor';
import AutomatedClientReporting from '../admin/AutomatedClientReporting';
import ClientPortalManager from '../admin/ClientPortalManager';
import GBPManager from '../admin/GBPManager';
import AnalyticsDashboard from '../admin/AnalyticsDashboard';
import EnhancedAIModelSelector from '../admin/EnhancedAIModelSelector';
import AIBlogGenerator from '../admin/AIBlogGenerator';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    children: [
      { id: 'blog-posts', label: 'Blog Posts', icon: FileText, badge: '8' },
      { id: 'pages', label: 'Pages', icon: Layers, badge: '110' },
      { id: 'media', label: 'Media Library', icon: ImageIcon },
    ],
  },
  {
    id: 'create',
    label: 'Create New',
    icon: Plus,
    children: [
      { id: 'new-blog', label: 'New Blog Post', icon: FileText },
      { id: 'new-page', label: 'New Page', icon: Layers },
      { id: 'bulk-generator', label: 'Bulk Generator', icon: Sparkles },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    icon: Sparkles,
    children: [
      { id: 'ai-model-selector', label: 'AI Model Selector', icon: Brain },
      { id: 'ai-blog-generator', label: 'AI Blog Generator', icon: Sparkles, badge: 'NEW' },
      { id: 'ai-writer', label: 'AI Writer', icon: PenTool },
      { id: 'seo-fixer', label: 'SEO Bulk Fixer', icon: Zap, badge: '47' },
      { id: 'email-campaigns', label: 'Email Campaigns', icon: Mail },
      { id: 'image-seo', label: 'Image SEO Auditor', icon: ImageIcon, badge: '97' },
      { id: 'serp-optimizer', label: 'SERP Optimizer', icon: SearchIcon },
      { id: 'broken-links', label: 'Broken Link Finder', icon: LinkIcon },
      { id: 'link-health', label: 'Link Health Checker', icon: LinkIcon, badge: '247' },
    ],
  },
  { id: 'site-structure', label: 'Site Structure', icon: Route },
  { id: 'themes', label: 'Layout & Themes', icon: Sparkles },
  { id: '404-editor', label: '404 Page Editor', icon: AlertTriangle },
  { id: 'client-reports', label: 'Client Reports', icon: BarChart3, badge: '18' },
  { id: 'client-portals', label: 'Client Portals', icon: Users, badge: '24' },
  { id: 'gbp-manager', label: 'GBP Manager', icon: MapPin, badge: '32' },
  { id: 'analytics', label: 'Analytics', icon: Activity },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  {
    id: 'seo',
    label: 'SEO Center',
    icon: SearchIcon,
    children: [{ id: 'seo-center', label: 'SEO Dashboard', icon: SearchIcon }],
  },
  { id: 'redirects', label: 'Redirects', icon: Route },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function NewAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['content', 'create']);
  const [quickCreateOpen, setQuickCreateOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId],
    );
  };

  const handleNavClick = (itemId: string, hasChildren: boolean) => {
    if (hasChildren) {
      toggleMenu(itemId);
    } else {
      setActivePage(itemId);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardOverview onNavigate={setActivePage} />;
      case 'new-blog':
      case 'blog-posts':
        return <BlogCreationToolNew />;
      case 'media':
        return <MediaLibrary />;
      case 'new-page':
      case 'pages':
        return <PageBuilder />;
      case 'bulk-generator':
        return <BulkPageGenerator />;
      case 'site-structure':
        return <SiteStructureMap />;
      case 'ai-model-selector':
        return <EnhancedAIModelSelector />;
      case 'ai-blog-generator':
        return <AIBlogGenerator />;
      case 'ai-writer':
        return <AIWriterTool />;
      case 'email-campaigns':
        return <EmailCampaignWriter />;
      case 'image-seo':
        return <ImageSEOAuditor />;
      case 'serp-optimizer':
        return <SERPOptimizer />;
      case 'broken-links':
        return <BrokenLinkFinder />;
      case 'link-health':
        return <BrokenLinkChecker />;
      case 'themes':
        return <LayoutAndThemeManager />;
      case '404-editor':
        return <NotFoundPageEditor />;
      case 'client-reports':
        return <AutomatedClientReporting />;
      case 'client-portals':
        return <ClientPortalManager />;
      case 'gbp-manager':
        return <GBPManager />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'calendar':
        return <ContentCalendarPlaceholder />;
      case 'seo-center':
        return <SeoAdminDashboard />;
      case 'seo-fixer':
        return <SEOBulkFixer />;
      case 'redirects':
        return <URLInspectionTool />;
      case 'settings':
        return <SettingsPlaceholder />;
      default:
        return <DashboardOverview onNavigate={setActivePage} />;
    }
  };

  return (
    <>
      <SEO
        title="Admin Dashboard - ThinkMents Digital Marketing"
        description="Internal admin dashboard for managing content, SEO, and website operations"
        url="/admin"
        type="website"
        noindex={true}
      />

      <div className="min-h-screen bg-[#F8F9FA]">
        {/* Top Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
          <div className="flex items-center justify-between h-full px-4">
            {/* Left: Menu Toggle & Logo */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <a
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TM</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-semibold text-[#1E3A5F]">ThinkMents</h1>
                  <p className="text-xs text-gray-500">Admin Dashboard</p>
                </div>
              </a>
            </div>

            {/* Center: Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content, pages, media..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Right: Notifications & User */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
              </Button>

              <div className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@thinkments.com</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto z-40"
            >
              <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id, !!item.children)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${activePage === item.id
                          ? 'bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10 text-[#1E3A5F]'
                          : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <Badge className="bg-[#FF6B35] text-white text-xs px-1.5 py-0.5">
                            {item.badge}
                          </Badge>
                        )}
                        {item.children && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${expandedMenus.includes(item.id) ? 'rotate-180' : ''
                              }`}
                          />
                        )}
                      </div>
                    </button>

                    {/* Submenu */}
                    {item.children && expandedMenus.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-8 mt-1 space-y-1"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => setActivePage(child.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${activePage === child.id
                                ? 'bg-[#00B4D8]/10 text-[#1E3A5F]'
                                : 'text-gray-600 hover:bg-gray-50'
                              }`}
                          >
                            <div className="flex items-center space-x-2">
                              <child.icon className="w-4 h-4" />
                              <span>{child.label}</span>
                            </div>
                            {child.badge && (
                              <Badge className="bg-[#FF6B35] text-white text-xs px-1.5 py-0.5">
                                {child.badge}
                              </Badge>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-600 hover:text-gray-900"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help & Support
                </Button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="p-6">{renderPage()}</div>
        </main>

        {/* Quick Create Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {quickCreateOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-2 space-y-1 min-w-[200px]"
              >
                <button
                  onClick={() => {
                    setActivePage('new-blog');
                    setQuickCreateOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 text-left"
                >
                  <FileText className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-medium">New Blog</span>
                </button>
                <button
                  onClick={() => {
                    setActivePage('new-page');
                    setQuickCreateOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 text-left"
                >
                  <Layers className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-medium">New Page</span>
                </button>
                <button
                  onClick={() => {
                    setActivePage('media');
                    setQuickCreateOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 text-left"
                >
                  <Upload className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm font-medium">Upload Media</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={() => setQuickCreateOpen(!quickCreateOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] hover:from-[#1E3A5F] hover:to-[#00B4D8] shadow-lg"
          >
            {quickCreateOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Plus className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

// Placeholder components for Calendar and Settings
function ContentCalendarPlaceholder() {
  return (
    <Card className="p-8">
      <div className="text-center">
        <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Content Calendar</h3>
        <p className="text-gray-600">Editorial calendar view coming soon...</p>
      </div>
    </Card>
  );
}

function SettingsPlaceholder() {
  return (
    <Card className="p-8">
      <div className="text-center">
        <Settings className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Settings</h3>
        <p className="text-gray-600">Site settings panel coming soon...</p>
      </div>
    </Card>
  );
}
