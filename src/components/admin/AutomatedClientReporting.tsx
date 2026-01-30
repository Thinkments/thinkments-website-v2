import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  FileText,
  Settings,
  Plus,
  TrendingUp,
  TrendingDown,
  Calendar,
  Award,
  Users,
  Send,
  Eye,
  Download,
  Edit3,
  Trash2,
  Copy,
  Search,
  Filter,
  Clock,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Mail,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Sparkles,
  Star,
  MapPin,
  Phone,
  MousePointerClick,
  Image as ImageIcon,
  MessageSquare,
  Share2,
  Globe,
  Zap,
  ExternalLink,
  ChevronDown,
  Palette,
  Type,
  Layout,
  Upload,
  CheckCircle,
  PlayCircle,
  Pause,
  RefreshCw,
  MoreVertical,
  GripVertical,
  Link as LinkIcon,
  Sliders,
} from 'lucide-react';

type TabType = 'clients' | 'builder' | 'templates' | 'scheduled' | 'history' | 'wins';
type BuilderStep = 1 | 2 | 3 | 4 | 5 | 6;
type ReportFrequency = 'weekly' | 'monthly' | 'quarterly' | 'none';
type ClientStatus = 'active' | 'paused' | 'never-sent';

interface Client {
  id: string;
  name: string;
  logo?: string;
  frequency: ReportFrequency;
  lastSent?: string;
  nextScheduled?: string;
  status: ClientStatus;
  avgScore: number;
  recipients: string[];
}

interface ReportSection {
  id: string;
  title: string;
  enabled: boolean;
  description: string;
  icon: React.ElementType;
}

interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  sections: string[];
  usedByCount: number;
  thumbnail?: string;
}

interface Win {
  id: string;
  clientId: string;
  clientName: string;
  type: string;
  description: string;
  metric: string;
  change: string;
  date: string;
}

export default function AutomatedClientReporting() {
  const [activeTab, setActiveTab] = useState<TabType>('clients');
  const [builderStep, setBuilderStep] = useState<BuilderStep>(1);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<ReportTemplate | null>(null);

  // Mock data
  const stats = {
    activeClients: 24,
    reportsSentThisMonth: 18,
    scheduledReports: 12,
    averageScore: 87,
    winsThisMonth: 34,
  };

  const clients: Client[] = [
    {
      id: '1',
      name: 'Acme Corporation',
      logo: 'A',
      frequency: 'monthly',
      lastSent: '2024-12-01',
      nextScheduled: '2025-01-01',
      status: 'active',
      avgScore: 92,
      recipients: ['ceo@acme.com', 'marketing@acme.com'],
    },
    {
      id: '2',
      name: 'Smith & Sons',
      logo: 'S',
      frequency: 'weekly',
      lastSent: '2024-12-08',
      nextScheduled: '2024-12-15',
      status: 'active',
      avgScore: 78,
      recipients: ['john@smithandsons.com'],
    },
    {
      id: '3',
      name: 'TechStartup Inc',
      logo: 'T',
      frequency: 'none',
      status: 'never-sent',
      avgScore: 0,
      recipients: [],
    },
  ];

  const reportSections: ReportSection[] = [
    {
      id: 'executive',
      title: 'Executive Summary',
      enabled: true,
      description: 'AI-generated summary of performance',
      icon: FileText,
    },
    {
      id: 'traffic',
      title: 'Traffic Overview',
      enabled: true,
      description: 'Visitors, sessions, bounce rate',
      icon: Activity,
    },
    {
      id: 'seo',
      title: 'SEO Performance',
      enabled: true,
      description: 'Rankings, keywords, backlinks',
      icon: TrendingUp,
    },
    {
      id: 'gbp',
      title: 'Google Business Profile',
      enabled: false,
      description: 'Views, calls, directions',
      icon: MapPin,
    },
    {
      id: 'leads',
      title: 'Lead Generation',
      enabled: true,
      description: 'Inquiries, conversions, sources',
      icon: Target,
    },
    {
      id: 'content',
      title: 'Content Performance',
      enabled: false,
      description: 'Top pages, blog posts',
      icon: FileText,
    },
    {
      id: 'social',
      title: 'Social Media',
      enabled: false,
      description: 'Followers, engagement, posts',
      icon: Share2,
    },
    {
      id: 'competitors',
      title: 'Competitor Comparison',
      enabled: false,
      description: 'Rankings vs competitors',
      icon: BarChart3,
    },
    {
      id: 'goals',
      title: 'Goals & Progress',
      enabled: true,
      description: 'Targets vs actual performance',
      icon: Target,
    },
    {
      id: 'wins',
      title: 'Wins & Achievements',
      enabled: true,
      description: 'Highlighted successes',
      icon: Award,
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      enabled: true,
      description: 'AI-generated next steps',
      icon: Sparkles,
    },
    {
      id: 'upcoming',
      title: 'Upcoming Work',
      enabled: false,
      description: 'Next month focus areas',
      icon: Calendar,
    },
  ];

  const templates: ReportTemplate[] = [
    {
      id: '1',
      name: 'Default Monthly Report',
      description: 'Comprehensive monthly overview',
      sections: ['executive', 'traffic', 'seo', 'leads', 'wins', 'recommendations'],
      usedByCount: 18,
    },
    {
      id: '2',
      name: 'Quick Weekly Update',
      description: 'Brief weekly performance snapshot',
      sections: ['executive', 'traffic', 'wins'],
      usedByCount: 6,
    },
    {
      id: '3',
      name: 'SEO Focus Report',
      description: 'Deep dive into SEO metrics',
      sections: ['executive', 'seo', 'content', 'competitors', 'recommendations'],
      usedByCount: 4,
    },
  ];

  const wins: Win[] = [
    {
      id: '1',
      clientId: '1',
      clientName: 'Acme Corporation',
      type: 'Traffic Increase',
      description: 'Organic traffic increased significantly',
      metric: 'Organic Traffic',
      change: '+47%',
      date: '2024-12-01',
    },
    {
      id: '2',
      clientId: '1',
      clientName: 'Acme Corporation',
      type: 'Ranking Improvement',
      description: 'Ranked #1 for target keyword',
      metric: 'Keywords in Top 3',
      change: '+5',
      date: '2024-12-05',
    },
    {
      id: '3',
      clientId: '2',
      clientName: 'Smith & Sons',
      type: 'Review Milestone',
      description: 'Reached 50+ 5-star reviews',
      metric: 'Total Reviews',
      change: '50 reviews',
      date: '2024-12-08',
    },
  ];

  const getStatusColor = (status: ClientStatus) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'paused':
        return 'bg-yellow-100 text-yellow-700';
      case 'never-sent':
        return 'bg-red-100 text-red-700';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const toggleSection = (sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Client Reports</h1>
            <p className="text-gray-600">Automated reporting that demonstrates your value</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <Send className="w-4 h-4 mr-1" />
                {stats.reportsSentThisMonth} reports sent this month
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {stats.activeClients} clients on auto-reports
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => setShowSettingsModal(true)}>
              <Settings className="w-4 h-4 mr-2" />
              Report Settings
            </Button>
            <Button
              onClick={() => {
                setActiveTab('builder');
                setBuilderStep(1);
              }}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Report
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.activeClients}</p>
              <p className="text-sm text-gray-600 mb-2">Active Clients</p>
              <a href="#" className="text-xs text-[#00B4D8] hover:underline">
                Manage Clients →
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.reportsSentThisMonth}</p>
              <p className="text-sm text-gray-600 mb-2">Reports Sent</p>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% vs last month
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.scheduledReports}</p>
              <p className="text-sm text-gray-600 mb-2">Scheduled Reports</p>
              <a href="#" className="text-xs text-[#00B4D8] hover:underline">
                View Schedule →
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.averageScore}</p>
              <p className="text-sm text-gray-600 mb-2">Avg Client Score</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${stats.averageScore}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.winsThisMonth}</p>
              <p className="text-sm text-gray-600 mb-2">Wins This Month</p>
              <a href="#" className="text-xs text-[#00B4D8] hover:underline">
                View All Wins →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'clients', label: 'All Clients', count: clients.length },
          { id: 'builder', label: 'Report Builder', icon: Plus },
          { id: 'templates', label: 'Templates', count: templates.length },
          { id: 'scheduled', label: 'Scheduled', count: 12 },
          { id: 'history', label: 'History', count: 156 },
          { id: 'wins', label: 'Wins', count: 34, badge: 'New' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {tab.icon && <tab.icon className="w-4 h-4" />}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <Badge
                className={`${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {tab.count}
              </Badge>
            )}
            {tab.badge && <Badge className="bg-[#FF6B35] text-white">{tab.badge}</Badge>}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {/* All Clients Tab */}
        {activeTab === 'clients' && (
          <div>
            <Card className="border-0 shadow-md mb-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
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

            <div className="space-y-3">
              {clients.map((client) => (
                <Card
                  key={client.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-3 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{client.logo}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{client.name}</p>
                          <p className="text-xs text-gray-500">
                            {client.recipients.length} recipient
                            {client.recipients.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <p className="text-xs text-gray-600 mb-1">Frequency</p>
                        <Badge className="bg-blue-100 text-blue-700 capitalize">
                          {client.frequency}
                        </Badge>
                      </div>

                      <div className="col-span-2">
                        <p className="text-xs text-gray-600 mb-1">Last Sent</p>
                        <p className="text-sm text-gray-900">{client.lastSent || 'Never'}</p>
                      </div>

                      <div className="col-span-2">
                        <p className="text-xs text-gray-600 mb-1">Next Scheduled</p>
                        <p className="text-sm text-gray-900">
                          {client.nextScheduled || 'Not scheduled'}
                        </p>
                      </div>

                      <div className="col-span-1">
                        <Badge className={getStatusColor(client.status)}>
                          {client.status.replace('-', ' ')}
                        </Badge>
                      </div>

                      <div className="col-span-1">
                        <div className="flex flex-col items-center">
                          <span className={`text-xl font-bold ${getScoreColor(client.avgScore)}`}>
                            {client.avgScore}
                          </span>
                          <span className="text-xs text-gray-500">score</span>
                        </div>
                      </div>

                      <div className="col-span-1 flex justify-end">
                        <div className="relative group">
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 hidden group-hover:block z-10 whitespace-nowrap">
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <Send className="w-3 h-3 mr-2" />
                              Generate Now
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <Settings className="w-3 h-3 mr-2" />
                              Edit Settings
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <Eye className="w-3 h-3 mr-2" />
                              View History
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Report Builder Tab */}
        {activeTab === 'builder' && (
          <div>
            <Card className="border-0 shadow-md mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#1E3A5F]">Create New Report</h2>
                    <p className="text-sm text-gray-600">Step {builderStep} of 6</p>
                  </div>
                  {builderStep > 1 && (
                    <Button
                      variant="outline"
                      onClick={() => setBuilderStep((builderStep - 1) as BuilderStep)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}
                </div>

                {/* Progress Steps */}
                <div className="flex items-center space-x-2 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((step) => (
                    <React.Fragment key={step}>
                      <div
                        className={`flex-1 h-2 rounded-full ${
                          builderStep >= step ? 'bg-[#00B4D8]' : 'bg-gray-200'
                        }`}
                      />
                    </React.Fragment>
                  ))}
                </div>

                {/* Step Content */}
                <div>
                  {/* Step 1: Select Client */}
                  {builderStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Select Client
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Choose a client...</option>
                          {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Card className="border-0 bg-blue-50">
                        <CardContent className="pt-4">
                          <p className="text-sm text-blue-900">
                            Or create a template that can be used for all clients
                          </p>
                          <Button className="mt-3" variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Create Template for All Clients
                          </Button>
                        </CardContent>
                      </Card>

                      <Button
                        onClick={() => setBuilderStep(2)}
                        className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Select Report Period */}
                  {builderStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                          Report Period
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                          {['Last Week', 'Last Month', 'Last Quarter', 'Custom'].map((period) => (
                            <button
                              key={period}
                              className="p-4 border-2 border-gray-300 rounded-lg hover:border-[#00B4D8] hover:bg-blue-50 transition-colors"
                            >
                              <Calendar className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                              <span className="text-sm font-medium">{period}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Compare To
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Previous Period</option>
                          <option>Same Period Last Year</option>
                          <option>None</option>
                        </select>
                      </div>

                      <Button
                        onClick={() => setBuilderStep(3)}
                        className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 3: Select Sections */}
                  {builderStep === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-medium text-gray-900">
                          Report Sections (drag to reorder)
                        </label>
                        <Button size="sm" variant="outline">
                          <Plus className="w-4 h-4 mr-2" />
                          Select All
                        </Button>
                      </div>

                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {reportSections.map((section) => (
                          <Card
                            key={section.id}
                            className={`border-2 ${section.enabled ? 'border-[#00B4D8] bg-blue-50' : 'border-gray-200'} cursor-pointer`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3">
                                <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                                <input
                                  type="checkbox"
                                  checked={section.enabled}
                                  onChange={() => toggleSection(section.id)}
                                  className="w-5 h-5 text-[#00B4D8] rounded"
                                />
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                  <section.icon className="w-5 h-5 text-[#00B4D8]" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">{section.title}</p>
                                  <p className="text-xs text-gray-600">{section.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button
                        onClick={() => setBuilderStep(4)}
                        className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 4: Customize Content */}
                  {builderStep === 4 && (
                    <div className="space-y-6">
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-[#00B4D8]" />
                            AI Writing Assistant
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-3 gap-3">
                            <Button variant="outline" className="justify-start">
                              <Sparkles className="w-4 h-4 mr-2" />
                              Generate Executive Summary
                            </Button>
                            <Button variant="outline" className="justify-start">
                              <Award className="w-4 h-4 mr-2" />
                              Write Wins Section
                            </Button>
                            <Button variant="outline" className="justify-start">
                              <Target className="w-4 h-4 mr-2" />
                              Create Recommendations
                            </Button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Tone
                              </label>
                              <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg">
                                <option>Professional</option>
                                <option>Friendly</option>
                                <option>Technical</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Length
                              </label>
                              <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg">
                                <option>Brief</option>
                                <option>Standard</option>
                                <option>Detailed</option>
                              </select>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Custom Notes
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Add custom commentary or notes to this report..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <Button
                        onClick={() => setBuilderStep(5)}
                        className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 5: Design & Branding */}
                  {builderStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">
                          Report Template
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {['Clean', 'Modern', 'Bold', 'Minimal', 'Executive'].map((style) => (
                            <button
                              key={style}
                              className="p-4 border-2 border-gray-300 rounded-lg hover:border-[#00B4D8] hover:bg-blue-50 transition-colors"
                            >
                              <div className="aspect-video bg-gray-200 rounded mb-2" />
                              <span className="text-sm font-medium">{style}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Branding
                        </label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                              <Upload className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">Agency Logo</p>
                              <p className="text-xs text-gray-600">ThinkMents logo will be used</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                              <Upload className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                Client Logo (Optional)
                              </p>
                              <Button size="sm" variant="outline" className="mt-1">
                                <Upload className="w-3 h-3 mr-2" />
                                Upload
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Colors
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">
                              Primary Color
                            </label>
                            <div className="flex items-center space-x-2">
                              <input
                                type="color"
                                value="#1E3A5F"
                                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                              />
                              <input
                                type="text"
                                value="#1E3A5F"
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg font-mono"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Accent Color</label>
                            <div className="flex items-center space-x-2">
                              <input
                                type="color"
                                value="#00B4D8"
                                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                              />
                              <input
                                type="text"
                                value="#00B4D8"
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="flex items-center space-x-2 mb-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#00B4D8] rounded"
                            defaultChecked
                          />
                          <span className="text-sm font-medium text-gray-900">
                            Include Cover Page
                          </span>
                        </label>
                        <div className="ml-6 space-y-2">
                          <input
                            type="text"
                            defaultValue="Monthly Marketing Report"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                            placeholder="Cover title"
                          />
                          <input
                            type="text"
                            defaultValue="December 2024"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                            placeholder="Cover subtitle"
                          />
                        </div>
                      </div>

                      <Button
                        onClick={() => setBuilderStep(6)}
                        className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Continue to Preview
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {/* Step 6: Preview & Send */}
                  {builderStep === 6 && (
                    <div className="space-y-6">
                      <Card className="border-0 shadow-sm bg-green-50">
                        <CardContent className="pt-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-green-900">Report is ready!</p>
                              <p className="text-sm text-green-700">Review and send your report</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="grid grid-cols-3 gap-3">
                        <Button variant="outline" onClick={() => setShowPreviewModal(true)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview Report
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download PPT
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email Recipients
                        </label>
                        <input
                          type="email"
                          placeholder="recipient@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                        />
                        <Button size="sm" variant="outline">
                          <Plus className="w-3 h-3 mr-2" />
                          Add Recipient
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          defaultValue="Your Monthly Marketing Report - December 2024"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email Body
                        </label>
                        <textarea
                          rows={4}
                          defaultValue="Hi there,&#10;&#10;Please find your monthly marketing report attached. We're excited to share the great results we've achieved together this month!&#10;&#10;Best regards,&#10;ThinkMents Team"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <Button size="sm" variant="outline" className="mt-2">
                          <Sparkles className="w-3 h-3 mr-2" />
                          AI Generate Message
                        </Button>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                        <label className="text-sm text-gray-700">
                          Include executive summary in email body
                        </label>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline">
                          <Save className="w-4 h-4 mr-2" />
                          Save as Template
                        </Button>
                        <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                          <Send className="w-4 h-4 mr-2" />
                          Generate & Send Now
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1E3A5F]">Report Templates</h2>
              <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-100 text-blue-700">
                        {template.sections.length} sections
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Used by {template.usedByCount} clients
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-[#00B4D8] text-white">
                        <PlayCircle className="w-3 h-3 mr-2" />
                        Use Template
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Wins Tab */}
        {activeTab === 'wins' && (
          <div>
            <Card className="border-0 shadow-md bg-yellow-50 border-l-4 border-yellow-500 mb-6">
              <CardContent className="pt-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-yellow-900">Auto-Detected Wins</p>
                    <p className="text-sm text-yellow-700">
                      AI has found {wins.length} positive achievements to celebrate
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {wins.map((win) => (
                <Card key={win.id} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <Badge className="bg-blue-100 text-blue-700">{win.clientName}</Badge>
                          <Badge className="bg-green-100 text-green-700">{win.type}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {win.description}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>
                            {win.metric}: <strong className="text-green-600">{win.change}</strong>
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {win.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" className="bg-[#00B4D8] text-white">
                          <Plus className="w-3 h-3 mr-2" />
                          Add to Report
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-3 h-3 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {['scheduled', 'history'].includes(activeTab) && (
          <Card className="border-0 shadow-md">
            <CardContent className="p-12 text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                {activeTab === 'scheduled' ? 'Scheduled Reports' : 'Report History'}
              </h3>
              <p className="text-gray-600">Content for this tab is being loaded...</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPreviewModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Report Preview</h2>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowPreviewModal(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Report preview would appear here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
