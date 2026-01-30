import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  FileText,
  Image,
  Plus,
  Calendar,
  Search as SearchIcon,
  Settings,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  BookOpen,
  FileEdit,
  Layers,
  Globe,
  Link2,
  PenTool,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, section: 'main' },
    {
      name: 'Content',
      icon: FileText,
      section: 'content',
      children: [
        { name: 'Blog Posts', href: '/admin/blogs', icon: BookOpen },
        { name: 'Pages', href: '/admin/pages', icon: FileEdit },
        { name: 'Media Library', href: '/admin/media', icon: Image },
      ],
    },
    {
      name: 'Create New',
      icon: Plus,
      section: 'create',
      children: [
        { name: 'New Blog Post', href: '/admin/blog/new', icon: PenTool },
        { name: 'New Page', href: '/admin/page/new', icon: Layers },
        { name: 'Bulk Generator', href: '/admin/bulk-generator', icon: Globe },
      ],
    },
    { name: 'Calendar', href: '/admin/calendar', icon: Calendar, section: 'main' },
    { name: 'SEO Center', href: '/admin/seo', icon: SearchIcon, section: 'main' },
    { name: 'Redirects', href: '/admin/redirects', icon: Link2, section: 'main' },
    { name: 'Settings', href: '/admin/settings', icon: Settings, section: 'bottom' },
    { name: 'Help & Support', href: '/admin/help', icon: LifeBuoy, section: 'bottom' },
  ];

  const [expandedSections, setExpandedSections] = useState<string[]>(['content', 'create']);

  const toggleSection = (section: string | undefined) => {
    if (!section) return; // Guard clause
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section],
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <style>{`@import url('/styles/admin-colors.css');`}</style>
      <div className="admin-layout flex h-screen overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          className={`admin-sidebar fixed left-0 top-0 h-full z-40 flex flex-col ${sidebarCollapsed ? 'w-20' : 'w-64'
            } transition-all duration-300 hidden lg:flex`}
          initial={false}
        >
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
            {!sidebarCollapsed && (
              <Link to="/admin" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-white font-semibold">ThinkMents Admin</span>
              </Link>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white hover:bg-white/10 ml-auto"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-2">
            {navigation
              .filter((item) => item.section !== 'bottom')
              .map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.section)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors ${sidebarCollapsed ? 'justify-center' : ''
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          {!sidebarCollapsed && <span className="text-sm">{item.name}</span>}
                        </div>
                        {!sidebarCollapsed && (
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${expandedSections.includes(item.section || '') ? 'rotate-90' : ''
                              }`}
                          />
                        )}
                      </button>
                      {!sidebarCollapsed && expandedSections.includes(item.section || '') && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors ${isActive(child.href)
                                ? 'bg-[#00B4D8] text-white'
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-1 ${isActive(item.href)
                        ? 'bg-[#00B4D8] text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                        } ${sidebarCollapsed ? 'justify-center' : ''}`}
                      title={sidebarCollapsed ? item.name : undefined}
                    >
                      <item.icon className="w-5 h-5" />
                      {!sidebarCollapsed && <span className="text-sm">{item.name}</span>}
                    </Link>
                  )}
                </div>
              ))}
          </nav>

          {/* Bottom Navigation */}
          <div className="border-t border-white/10 py-4 px-2">
            {navigation
              .filter((item) => item.section === 'bottom')
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-1 ${isActive(item.href)
                    ? 'bg-[#00B4D8] text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                    } ${sidebarCollapsed ? 'justify-center' : ''}`}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <item.icon className="w-5 h-5" />
                  {!sidebarCollapsed && <span className="text-sm">{item.name}</span>}
                </Link>
              ))}
          </div>
        </motion.aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="admin-sidebar fixed left-0 top-0 h-full w-64 z-50 flex flex-col lg:hidden"
              >
                {/* Mobile menu content (same as desktop) */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
                  <Link to="/admin" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <span className="text-white font-semibold">ThinkMents Admin</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <nav className="flex-1 overflow-y-auto py-4 px-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleSection(item.section)}
                            className="w-full flex items-center justify-between px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-5 h-5" />
                              <span className="text-sm">{item.name}</span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${expandedSections.includes(item.section || '') ? 'rotate-90' : ''
                                }`}
                            />
                          </button>
                          {expandedSections.includes(item.section || '') && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors ${isActive(child.href)
                                    ? 'bg-[#00B4D8] text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                  <child.icon className="w-4 h-4" />
                                  <span>{child.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors mb-1 ${isActive(item.href)
                            ? 'bg-[#00B4D8] text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'} transition-all duration-300`}
        >
          {/* Header */}
          <header className="admin-header sticky top-0 z-30 px-4 lg:px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>

              <div className="relative flex-1 max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search pages, posts, media..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B35] text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="space-y-2 p-2">
                    <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <p className="text-sm font-medium">New blog post published</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <p className="text-sm font-medium">Page requires review</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                    <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <p className="text-sm font-medium">SEO score improved</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#00B4D8] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="hidden md:inline text-sm font-medium">Admin User</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>

        {/* Quick Create FAB */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-[#00B4D8] hover:bg-[#0096b8] z-30"
              size="sm"
            >
              <Plus className="w-6 h-6 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Quick Create</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin/blog/new" className="flex items-center">
                <PenTool className="w-4 h-4 mr-2" />
                New Blog Post
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/page/new" className="flex items-center">
                <Layers className="w-4 h-4 mr-2" />
                New Page
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/media" className="flex items-center">
                <Image className="w-4 h-4 mr-2" />
                Upload Media
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
