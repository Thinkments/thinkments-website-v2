import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Users,
  Settings,
  Plus,
  Eye,
  Edit3,
  Send,
  Power,
  ExternalLink,
  Globe,
  Mail,
  Phone,
  MapPin,
  Shield,
  Key,
  Calendar,
  Activity,
  Download,
  Search,
  Filter,
  Upload,
  Check,
  X,
  Copy,
  BarChart3,
  TrendingUp,
  Star,
  MessageSquare,
  FileText,
  CreditCard,
  HelpCircle,
  Bell,
  ChevronRight,
  Link as LinkIcon,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  Palette,
  Lock,
  UserPlus,
  Trash2,
  RefreshCw,
  LogIn,
  Award,
  Target
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  logo?: string;
  portalUrl: string;
  status: 'active' | 'invited' | 'disabled';
  lastLogin?: string;
  loginsThisMonth: number;
  email: string;
  services: string[];
}

type ViewMode = 'admin' | 'client';

export default function ClientPortalManager() {
  const [viewMode, setViewMode] = useState<ViewMode>('admin');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = {
    activePortals: 24,
    loginsThisMonth: 187
  };

  const clients: Client[] = [
    {
      id: '1',
      name: 'Acme Corporation',
      logo: 'A',
      portalUrl: 'acme-corp',
      status: 'active',
      lastLogin: '2024-12-09 10:30 AM',
      loginsThisMonth: 12,
      email: 'ceo@acme.com',
      services: ['SEO', 'GBP', 'Analytics']
    },
    {
      id: '2',
      name: 'Smith & Sons Plumbing',
      logo: 'S',
      portalUrl: 'smith-sons',
      status: 'active',
      lastLogin: '2024-12-08 3:45 PM',
      loginsThisMonth: 8,
      email: 'john@smithplumbing.com',
      services: ['SEO', 'GBP', 'Lead Tracking']
    },
    {
      id: '3',
      name: 'TechStartup Inc',
      logo: 'T',
      portalUrl: 'techstartup',
      status: 'invited',
      loginsThisMonth: 0,
      email: 'admin@techstartup.com',
      services: ['SEO', 'Social Media']
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'invited': return 'bg-yellow-100 text-yellow-700';
      case 'disabled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (viewMode === 'client') {
    return <ClientPortalView onBack={() => setViewMode('admin')} client={clients[0]} />;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Client Portals</h1>
            <p className="text-gray-600">Give clients 24/7 access to their marketing data</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {stats.activePortals} active portals
              </span>
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-1" />
                {stats.loginsThisMonth} client logins this month
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => setShowSettingsModal(true)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Portal Settings
            </Button>
            <Button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Client
            </Button>
          </div>
        </div>

        {/* Demo Toggle */}
        <Card className="border-0 shadow-md bg-blue-50 border-l-4 border-blue-500">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-900">Preview Client Portal</p>
                  <p className="text-sm text-blue-700">See what your clients see when they log in</p>
                </div>
              </div>
              <Button
                onClick={() => setViewMode('client')}
                className="bg-blue-600 text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Client Portal Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card className="border-0 shadow-md mb-4">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client List */}
      <div className="space-y-3">
        {clients.map((client) => (
          <Card key={client.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{client.logo}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{client.name}</p>
                    <p className="text-xs text-gray-500">{client.email}</p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-xs text-gray-600 mb-1">Portal URL</p>
                  <div className="flex items-center space-x-2">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">/{client.portalUrl}</code>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-xs text-gray-600 mb-1">Status</p>
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                </div>

                <div className="col-span-2">
                  <p className="text-xs text-gray-600 mb-1">Last Login</p>
                  <p className="text-sm text-gray-900">
                    {client.lastLogin || 'Never'}
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-xs text-gray-600 mb-1">Logins</p>
                  <p className="text-lg font-bold text-[#00B4D8]">{client.loginsThisMonth}</p>
                </div>

                <div className="col-span-2 flex justify-end space-x-2">
                  <Button size="sm" variant="outline" onClick={() => setViewMode('client')}>
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Send className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {/* Services */}
              <div className="mt-3 flex items-center space-x-2">
                <span className="text-xs text-gray-500">Services:</span>
                {client.services.map((service) => (
                  <Badge key={service} className="bg-blue-100 text-blue-700 text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Client Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Add New Client Portal</h2>
                  <Button size="sm" variant="ghost" onClick={() => setShowAddModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
                <div className="space-y-6">
                  {/* Client Information */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Client Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Business Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Primary Contact Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                        <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Website URL</label>
                        <input type="url" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Client Logo</label>
                        <Button variant="outline" size="sm">
                          <Upload className="w-3 h-3 mr-2" />
                          Upload Logo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Portal Access */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Portal Access</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Portal URL Slug</label>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">thinkments.com/portal/</span>
                          <input type="text" placeholder="client-name" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Username (Email)</label>
                          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                          <div className="flex space-x-2">
                            <input type="password" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
                            <Button size="sm" variant="outline">
                              <RefreshCw className="w-3 h-3 mr-2" />
                              Generate
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Enabled */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Services Enabled</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'SEO Reporting',
                        'Google Business Profile',
                        'Website Analytics',
                        'Social Media',
                        'Content Management',
                        'Lead Tracking',
                        'Invoices & Billing',
                        'Support Tickets'
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Data Connections */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Data Connections</h3>
                    <div className="space-y-2">
                      {[
                        { name: 'Google Analytics', icon: BarChart3 },
                        { name: 'Google Search Console', icon: Search },
                        { name: 'Google Business Profile', icon: MapPin },
                        { name: 'Social Accounts', icon: Share2 }
                      ].map((connection) => (
                        <div key={connection.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <connection.icon className="w-5 h-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-900">{connection.name}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <LinkIcon className="w-3 h-3 mr-2" />
                            Connect
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <Button variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    Save as Draft
                  </Button>
                  <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Create & Send Invite
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Client Portal View Component
function ClientPortalView({ onBack, client }: { onBack: () => void; client: Client }) {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Client Portal Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">{client.logo}</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">{client.name}</h1>
                <p className="text-xs text-gray-500">Welcome back!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" onClick={onBack}>
                <Eye className="w-3 h-3 mr-2" />
                Exit Preview
              </Button>
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Button size="sm" variant="outline">
                <LogIn className="w-3 h-3 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'seo', label: 'SEO Performance', icon: TrendingUp },
              { id: 'gbp', label: 'Google Business', icon: MapPin },
              { id: 'leads', label: 'Leads & Contacts', icon: Users },
              { id: 'content', label: 'Content', icon: FileText },
              { id: 'billing', label: 'Billing', icon: CreditCard },
              { id: 'support', label: 'Support', icon: HelpCircle },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#00B4D8]/10 to-[#1E3A5F]/10 text-[#1E3A5F]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <Card className="border-0 shadow-md bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] text-white">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {client.name}!</h2>
                  <p className="text-blue-100">Last login: December 9, 2024 at 10:30 AM</p>
                </CardContent>
              </Card>

              {/* Performance Score */}
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Your Marketing Score</p>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-5xl font-bold text-green-600">85</span>
                        <span className="text-2xl text-gray-400">/100</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Up 5 points from last month</span>
                      </div>
                    </div>
                    <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
                      <div className="text-center">
                        <Award className="w-12 h-12 text-green-500 mx-auto" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Website Visitors', value: '2,345', change: '+23%', icon: Users, color: 'blue' },
                  { label: 'Google Searches', value: '1,890', change: '+15%', icon: Search, color: 'purple' },
                  { label: 'Phone Calls', value: '47', change: '+8%', icon: Phone, color: 'green' },
                  { label: 'New Leads', value: '12', change: '+33%', icon: Target, color: 'orange' },
                ].map((stat) => (
                  <Card key={stat.label} className="border-0 shadow-md">
                    <CardContent className="pt-6">
                      <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-xs text-gray-600 mb-2">{stat.label}</p>
                      <p className="text-xs text-green-600 font-medium flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Wins This Month */}
              <Card className="border-0 shadow-md bg-yellow-50 border-l-4 border-yellow-500">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Award className="w-6 h-6 text-yellow-600" />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-1">Wins This Month!</h3>
                      <p className="text-sm text-yellow-800">Celebrating your successes</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Traffic increased 34% this month!",
                      "You're now ranking #1 for 'plumber in Dallas'!",
                      "You received 8 new 5-star reviews!"
                    ].map((win, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-yellow-900">
                        <Star className="w-4 h-4 text-yellow-600 fill-current" />
                        <span>{win}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { icon: FileText, text: 'Monthly report generated - Jan 2025', time: '2 hours ago' },
                        { icon: Users, text: 'New lead: John Smith - Contact form', time: '5 hours ago' },
                        { icon: Star, text: 'New review: 5 stars from Sarah M.', time: '1 day ago' },
                        { icon: FileText, text: 'Blog post published: 10 Tips for...', time: '2 days ago' },
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <activity.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.text}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start bg-[#00B4D8] text-white">
                        <FileText className="w-4 h-4 mr-2" />
                        View Latest Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Request Support
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <CreditCard className="w-4 h-4 mr-2" />
                        View Invoices
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule a Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Other sections placeholders */}
          {activeSection !== 'dashboard' && (
            <Card className="border-0 shadow-md">
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                </h3>
                <p className="text-gray-600">Content for this section would appear here</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
