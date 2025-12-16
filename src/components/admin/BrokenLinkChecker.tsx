import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Link as LinkIcon,
  AlertCircle,
  CheckCircle,
  Search,
  Download,
  RefreshCw,
  ExternalLink,
  Edit3,
  Eye,
  Zap,
  History,
  Clock,
  BarChart3,
  Globe,
  TrendingUp,
  Network,
  Mail,
  Calendar,
  Filter,
  ChevronDown,
  X,
  Settings,
  Upload,
  FileText,
  Plus,
  ArrowRight,
  Check,
  AlertTriangle,
  Info,
  Target,
  Sparkles,
  Copy,
  Send,
  Activity,
  Map,
  Anchor,
  GitBranch,
  Bell,
  Slack,
  Users,
  Play,
  Pause,
  ChevronRight,
  ArrowLeft,
  Save,
  Share2,
  Trash2,
  MoreVertical,
  PlayCircle,
  StopCircle,
  Loader2,
  ArrowDownUp,
  MapPin,
  MousePointerClick,
  Repeat,
  ShieldAlert,
  Bug,
  CloudOff,
  Maximize2,
  Minimize2,
  FileDown,
  Workflow,
  ClipboardList,
  Archive
} from 'lucide-react';

type TabType = 'overview' | 'broken-internal' | 'redirect-chains' | 'external-broken' | 'orphans' | 'all-redirects' | 'slow-links' | 'gsc-issues' | 'ahrefs-imports' | 'link-opportunities' | 'anchor-text' | 'competitor' | 'monitoring' | 'history' | 'fix-queue' | 'reports';
type ViewType = 'list' | 'details' | 'ai-generate' | 'recovery';
type SourceType = 'scan' | 'ahrefs' | 'gsc';
type WizardStep = 1 | 2 | 3 | 4;

interface BrokenLink {
  id: string;
  sourceUrl: string;
  brokenUrl: string;
  linkText: string;
  statusCode: number;
  responseTime: number;
  firstFound: string;
  lastChecked: string;
  priority: 'high' | 'medium' | 'low';
  type: 'internal' | 'external';
  source: SourceType;
  referringDomains?: number;
  suggestedFix?: string;
  assignedTo?: string;
  dueDate?: string;
  queueStatus?: 'todo' | 'in-progress' | 'done';
}

interface RedirectChain {
  id: string;
  originalUrl: string;
  redirectPath: string[];
  finalUrl: string;
  hops: number;
}

interface OrphanPage {
  id: string;
  url: string;
  createdDate: string;
  indexed: boolean;
  suggestedLinksFrom: string[];
}

interface Redirect {
  id: string;
  fromUrl: string;
  toUrl: string;
  type: '301' | '302' | '307' | '308';
  created: string;
  hits: number;
  notes?: string;
}

interface LinkOpportunity {
  id: string;
  sourcePage: string;
  targetPage: string;
  anchorText: string;
  relevanceScore: number;
  context: string;
}

export default function BrokenLinkChecker() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [showAhrefsModal, setShowAhrefsModal] = useState(false);
  const [showGSCModal, setShowGSCModal] = useState(false);
  const [showAIGenerateModal, setShowAIGenerateModal] = useState(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBulkGenerateModal, setShowBulkGenerateModal] = useState(false);
  const [aiWizardStep, setAIWizardStep] = useState<WizardStep>(1);
  const [selectedBrokenLink, setSelectedBrokenLink] = useState<BrokenLink | null>(null);
  const [gscConnected, setGscConnected] = useState(false);
  const [ahrefsConnected, setAhrefsConnected] = useState(false);
  const [monitoringEnabled, setMonitoringEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSource, setFilterSource] = useState<'all' | SourceType>('all');
  const [sortBy, setSortBy] = useState('referring-domains');

  // Mock data
  const stats = {
    totalLinks: 2847,
    brokenLinks: 247,
    redirectChains: 34,
    externalBroken: 56,
    orphanPages: 18,
    redirectLoops: 3,
    ahrefsImported: 142,
    googleFlagged: 23,
    linkOpportunities: 67
  };

  const brokenLinks: BrokenLink[] = [
    {
      id: '1',
      sourceUrl: '/services/seo',
      brokenUrl: '/old-blog-post',
      linkText: 'Learn more about SEO strategies',
      statusCode: 404,
      responseTime: 45,
      firstFound: '2024-01-15',
      lastChecked: '2024-12-09',
      priority: 'high',
      type: 'internal',
      source: 'scan',
      referringDomains: 23,
      suggestedFix: '/blog/seo-strategies-2024'
    },
    {
      id: '2',
      sourceUrl: '/blog/digital-marketing-tips',
      brokenUrl: 'https://example.com/removed-article',
      linkText: 'external resource',
      statusCode: 404,
      responseTime: 2340,
      firstFound: '2024-02-10',
      lastChecked: '2024-12-09',
      priority: 'medium',
      type: 'external',
      source: 'ahrefs',
      referringDomains: 15
    },
    {
      id: '3',
      sourceUrl: '/about',
      brokenUrl: '/team/john-doe',
      linkText: 'Meet our CEO',
      statusCode: 404,
      responseTime: 38,
      firstFound: '2024-03-20',
      lastChecked: '2024-12-09',
      priority: 'high',
      type: 'internal',
      source: 'gsc',
      referringDomains: 8,
      suggestedFix: '/about/leadership',
      assignedTo: 'Sarah Johnson',
      dueDate: '2024-12-15',
      queueStatus: 'in-progress'
    },
  ];

  const redirectChains: RedirectChain[] = [
    {
      id: '1',
      originalUrl: '/old-page',
      redirectPath: ['/old-page', '/newer-page', '/newest-page', '/final-page'],
      finalUrl: '/final-page',
      hops: 3
    }
  ];

  const orphanPages: OrphanPage[] = [
    {
      id: '1',
      url: '/services/consulting',
      createdDate: '2024-01-10',
      indexed: false,
      suggestedLinksFrom: ['/services', '/about']
    }
  ];

  const redirects: Redirect[] = [
    {
      id: '1',
      fromUrl: '/old-service',
      toUrl: '/services/seo',
      type: '301',
      created: '2024-01-05',
      hits: 342,
      notes: 'Service page restructure'
    }
  ];

  const linkOpportunities: LinkOpportunity[] = [
    {
      id: '1',
      sourcePage: '/services/web-design',
      targetPage: '/services/seo',
      anchorText: 'SEO services',
      relevanceScore: 92,
      context: 'Mentions "search engine optimization" 3 times but no link to SEO page'
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const toggleLinkSelection = (id: string) => {
    setSelectedLinks(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedLinks(brokenLinks.map(link => link.id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSourceBadge = (source: SourceType) => {
    switch (source) {
      case 'ahrefs': return <Badge className="bg-orange-100 text-orange-700">Ahrefs</Badge>;
      case 'gsc': return <Badge className="bg-blue-100 text-blue-700">Google</Badge>;
      case 'scan': return <Badge className="bg-gray-100 text-gray-700">Scan</Badge>;
    }
  };

  const getQueueStatusColor = (status?: string) => {
    switch (status) {
      case 'done': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'todo': return 'bg-gray-100 text-gray-700';
      default: return '';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Link Health Checker</h1>
            <p className="text-gray-600">Find broken links, redirects, and orphan pages</p>
            <p className="text-sm text-gray-500 mt-1">
              Last scan: {isScanning ? 'Scanning now...' : 'December 9, 2024 at 10:30 AM'}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {!gscConnected && (
              <Button
                variant="outline"
                onClick={() => setShowGSCModal(true)}
              >
                <Globe className="w-4 h-4 mr-2" />
                Connect Google Search Console
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => setShowAhrefsModal(true)}
            >
              <Upload className="w-4 h-4 mr-2" />
              Import from Ahrefs
            </Button>
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              {isScanning ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Run Full Scan
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Scan Progress */}
        {isScanning && (
          <Card className="border-0 shadow-md mb-4 bg-blue-50">
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-900">Checking link {Math.floor((scanProgress / 100) * stats.totalLinks)} of {stats.totalLinks}...</span>
                  <span className="text-blue-700">{scanProgress}%</span>
                </div>
                <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F]"
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{Math.floor(stats.totalLinks / 5)} links/second</span>
                  <Button size="sm" variant="ghost" onClick={() => setIsScanning(false)}>
                    <StopCircle className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* GSC Connection Banner */}
        {gscConnected && (
          <Card className="border-0 shadow-md mb-4 bg-green-50 border-l-4 border-green-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Google Search Console Connected</p>
                    <p className="text-sm text-green-700">Last synced: 2 hours ago · Next sync: in 22 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Sync Now
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Ahrefs Connection Banner */}
        {ahrefsConnected && (
          <Card className="border-0 shadow-md mb-4 bg-orange-50 border-l-4 border-orange-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-orange-900">Ahrefs Data Active</p>
                    <p className="text-sm text-orange-700">Last import: 142 broken links · 5 days ago</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => setShowAhrefsModal(true)}>
                  <Upload className="w-4 h-4 mr-2" />
                  Re-import
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Total Links */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.totalLinks}</p>
                <p className="text-sm text-gray-600 mb-2">Total Links</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">2,341 Internal</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">506 External</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Broken Links */}
            <Card 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTab('broken-internal')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-red-600 mb-1">{stats.brokenLinks}</p>
                <p className="text-sm text-gray-600 mb-2">Broken Links (404)</p>
                <p className="text-xs text-red-700">Hurts SEO & user experience</p>
              </CardContent>
            </Card>

            {/* Redirect Chains */}
            <Card 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTab('redirect-chains')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Repeat className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-1">{stats.redirectChains}</p>
                <p className="text-sm text-gray-600 mb-2">Redirect Chains</p>
                <p className="text-xs text-orange-700">Slows page speed</p>
              </CardContent>
            </Card>

            {/* External Broken */}
            <Card 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTab('external-broken')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-yellow-600 mb-1">{stats.externalBroken}</p>
                <p className="text-sm text-gray-600 mb-2">External Broken</p>
                <p className="text-xs text-yellow-700">Links to dead sites</p>
              </CardContent>
            </Card>

            {/* Orphan Pages */}
            <Card 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTab('orphans')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-1">{stats.orphanPages}</p>
                <p className="text-sm text-gray-600 mb-2">Orphan Pages</p>
                <p className="text-xs text-orange-700">No internal links</p>
              </CardContent>
            </Card>

            {/* Redirect Loops */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-red-600 mb-1">{stats.redirectLoops}</p>
                <p className="text-sm text-gray-600 mb-2">Redirect Loops</p>
                <Badge className="bg-red-500 text-white text-xs">Critical</Badge>
              </CardContent>
            </Card>

            {/* Ahrefs Imported */}
            {ahrefsConnected && (
              <Card 
                className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveTab('ahrefs-imports')}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-1">{stats.ahrefsImported}</p>
                  <p className="text-sm text-gray-600 mb-2">Imported Issues</p>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Ahrefs</Badge>
                </CardContent>
              </Card>
            )}

            {/* Google Flagged */}
            {gscConnected && (
              <Card 
                className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveTab('gsc-issues')}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-1">{stats.googleFlagged}</p>
                  <p className="text-sm text-gray-600 mb-2">Google Flagged</p>
                  <Badge className="bg-blue-100 text-blue-700 text-xs">GSC</Badge>
                </CardContent>
              </Card>
            )}

            {/* Link Opportunities */}
            <Card 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTab('link-opportunities')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600 mb-1">{stats.linkOpportunities}</p>
                <p className="text-sm text-gray-600 mb-2">Link Opportunities</p>
                <p className="text-xs text-green-700">Improve site structure</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-[#1E3A5F] mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setActiveTab('fix-queue')}
                  >
                    <ClipboardList className="w-4 h-4 mr-2" />
                    View Fix Queue ({selectedLinks.length > 0 ? selectedLinks.length : 12} items)
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setShowBulkGenerateModal(true)}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Bulk AI Generate
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export All Issues
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-[#1E3A5F] mb-3">Link Health Score</h3>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-3">
                    <span className="text-3xl font-bold text-green-700">85</span>
                  </div>
                  <p className="text-sm text-gray-600">Good health</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-600">+5 from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-[#1E3A5F] mb-3">Recent Activity</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">Fixed 3 broken links</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700">Created 2 redirects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-700">Generated 1 page</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Tabs */}
      {activeTab !== 'overview' && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab('overview')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowReportModal(true)}
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'broken-internal', label: 'Broken Internal', count: 247 },
              { id: 'redirect-chains', label: 'Redirect Chains', count: 34 },
              { id: 'external-broken', label: 'External Broken', count: 56 },
              { id: 'orphans', label: 'Orphan Pages', count: 18 },
              { id: 'all-redirects', label: 'All Redirects', count: 142 },
              { id: 'slow-links', label: 'Slow Links', count: 23 },
              { id: 'gsc-issues', label: 'GSC Issues', count: 23, badge: 'Google' },
              { id: 'ahrefs-imports', label: 'Ahrefs Imports', count: 142, badge: 'Ahrefs' },
              { id: 'link-opportunities', label: 'Link Opportunities', count: 67 },
              { id: 'anchor-text', label: 'Anchor Text', count: 133 },
              { id: 'competitor', label: 'Competitor Links', icon: Target },
              { id: 'fix-queue', label: 'Fix Queue', count: 12, icon: ClipboardList },
              { id: 'monitoring', label: 'Monitoring', icon: Activity },
              { id: 'history', label: 'History', icon: History },
              { id: 'reports', label: 'Reports', icon: BarChart3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <Badge className={`ml-2 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {tab.count}
                  </Badge>
                )}
                {tab.badge && (
                  <Badge className={`ml-2 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'}`}>
                    {tab.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bulk Actions Toolbar */}
      {selectedLinks.length > 0 && activeTab !== 'overview' && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <Card className="border-2 border-[#00B4D8] shadow-lg">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-[#00B4D8] text-white px-3 py-1">
                    {selectedLinks.length} selected
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => setSelectedLinks([])}>
                    Clear
                  </Button>
                  <Button size="sm" variant="outline" onClick={selectAll}>
                    Select All
                  </Button>
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => setShowRedirectModal(true)}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Create Redirects
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setShowBulkGenerateModal(true)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Generate Pages
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                  <Button size="sm" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Assign To
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Queue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Filters */}
      {activeTab !== 'overview' && (
        <Card className="border-0 shadow-md mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search links..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <select
                  value={filterSource}
                  onChange={(e) => setFilterSource(e.target.value as any)}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Sources</option>
                  <option value="scan">Scan Only</option>
                  <option value="ahrefs">Ahrefs Only</option>
                  <option value="gsc">GSC Only</option>
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="referring-domains">Sort by: Referring Domains</option>
                  <option value="date-found">Sort by: Date Found</option>
                  <option value="status">Sort by: Status</option>
                  <option value="priority">Sort by: Priority</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab Content */}
      <div>
        {/* Broken Internal Links Tab */}
        {activeTab === 'broken-internal' && (
          <div className="space-y-4">
            {brokenLinks.filter(link => link.type === 'internal').map((link) => (
              <Card key={link.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      checked={selectedLinks.includes(link.id)}
                      onChange={() => toggleLinkSelection(link.id)}
                      className="w-5 h-5 mt-1 text-[#00B4D8] rounded"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={`${getPriorityColor(link.priority)} text-white`}>
                              {link.priority}
                            </Badge>
                            {getSourceBadge(link.source)}
                            <Badge className="bg-red-100 text-red-700">
                              {link.statusCode}
                            </Badge>
                            {link.referringDomains && link.referringDomains > 10 && (
                              <Badge className="bg-purple-100 text-purple-700">
                                High Impact · {link.referringDomains} domains
                              </Badge>
                            )}
                            {link.queueStatus && (
                              <Badge className={getQueueStatusColor(link.queueStatus)}>
                                {link.queueStatus.replace('-', ' ')}
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Broken URL:</p>
                              <p className="font-mono text-sm text-red-600 break-all">{link.brokenUrl}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Found on:</p>
                              <a href={link.sourceUrl} className="text-sm text-[#00B4D8] hover:underline flex items-center">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                {link.sourceUrl}
                              </a>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Link Text:</p>
                              <p className="text-sm text-gray-900">&quot;{link.linkText}&quot;</p>
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                First found: {link.firstFound}
                              </span>
                              <span className="flex items-center">
                                <RefreshCw className="w-3 h-3 mr-1" />
                                Last checked: {link.lastChecked}
                              </span>
                              {link.referringDomains && (
                                <span className="flex items-center">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  {link.referringDomains} referring domains
                                </span>
                              )}
                            </div>
                            {link.assignedTo && (
                              <div className="flex items-center space-x-4 text-xs">
                                <Badge className="bg-blue-100 text-blue-700">
                                  <Users className="w-3 h-3 mr-1" />
                                  {link.assignedTo}
                                </Badge>
                                {link.dueDate && (
                                  <Badge className="bg-orange-100 text-orange-700">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    Due: {link.dueDate}
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {link.suggestedFix && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                          <div className="flex items-start space-x-2">
                            <Sparkles className="w-4 h-4 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-green-800 mb-1">AI Suggested Fix:</p>
                              <p className="text-sm text-gray-900 mb-2">Did you mean: <span className="font-mono">{link.suggestedFix}</span>?</p>
                              <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                                <Check className="w-3 h-3 mr-1" />
                                Apply Suggestion
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        <div className="relative group">
                          <Button size="sm" variant="outline">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                          <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 hidden group-hover:block z-10 whitespace-nowrap">
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <Edit3 className="w-3 h-3 mr-2" />
                              Fix Link
                            </button>
                            <button 
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center"
                              onClick={() => setShowRedirectModal(true)}
                            >
                              <ArrowRight className="w-3 h-3 mr-2" />
                              Create Redirect
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <Trash2 className="w-3 h-3 mr-2" />
                              Remove Link
                            </button>
                            <button 
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center"
                              onClick={() => {
                                setSelectedBrokenLink(link);
                                setShowAIGenerateModal(true);
                              }}
                            >
                              <Sparkles className="w-3 h-3 mr-2" />
                              AI Generate Page
                            </button>
                            <button 
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center"
                              onClick={() => {
                                setSelectedBrokenLink(link);
                                setShowRecoveryModal(true);
                              }}
                            >
                              <Archive className="w-3 h-3 mr-2" />
                              Recover from Archive
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                              <X className="w-3 h-3 mr-2" />
                              Ignore
                            </button>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          onClick={() => setShowRedirectModal(true)}
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Create Redirect
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedBrokenLink(link);
                            setShowAIGenerateModal(true);
                          }}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          AI Generate Page
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedBrokenLink(link);
                            setShowRecoveryModal(true);
                          }}
                        >
                          <Archive className="w-4 h-4 mr-2" />
                          Recover from Archive
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Redirect Chains Tab */}
        {activeTab === 'redirect-chains' && (
          <div className="space-y-4">
            {redirectChains.map((chain) => (
              <Card key={chain.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-orange-500 text-white">
                          {chain.hops} hops
                        </Badge>
                        <Badge className="bg-yellow-100 text-yellow-700">
                          Should be 1 hop
                        </Badge>
                      </div>
                      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-700 mb-3">Redirect Path:</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {chain.redirectPath.map((url, idx) => (
                            <React.Fragment key={idx}>
                              <span className="font-mono text-sm bg-white px-3 py-2 rounded border border-gray-300">
                                {url}
                              </span>
                              {idx < chain.redirectPath.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      <Zap className="w-4 h-4 mr-2" />
                      Simplify Redirect
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Test Chain
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Orphan Pages Tab */}
        {activeTab === 'orphans' && (
          <div className="space-y-4">
            {orphanPages.map((page) => (
              <Card key={page.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-orange-500 text-white">Orphan</Badge>
                        <Badge className={page.indexed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                          {page.indexed ? 'Indexed' : 'Not Indexed'}
                        </Badge>
                      </div>
                      <p className="font-mono text-sm text-gray-900 mb-2">{page.url}</p>
                      <p className="text-xs text-gray-600">Created: {page.createdDate}</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">AI Suggestions:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Add links from these pages to improve discoverability:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {page.suggestedLinksFrom.map((url, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-700">
                          {url}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Links
                    </Button>
                    <Button size="sm" variant="outline">
                      <Network className="w-4 h-4 mr-2" />
                      Add to Navigation
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Page
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* All Redirects Tab */}
        {activeTab === 'all-redirects' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1E3A5F]">All Redirects ({redirects.length})</h3>
              <Button 
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                onClick={() => setShowRedirectModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Redirect
              </Button>
            </div>

            <div className="space-y-3">
              {redirects.map((redirect) => (
                <Card key={redirect.id} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4">
                        <p className="text-xs text-gray-600 mb-1">From:</p>
                        <p className="font-mono text-sm text-gray-900">{redirect.fromUrl}</p>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs text-gray-600 mb-1">To:</p>
                        <p className="font-mono text-sm text-gray-900">{redirect.toUrl}</p>
                      </div>
                      <div className="col-span-1">
                        <Badge className="bg-blue-100 text-blue-700">{redirect.type}</Badge>
                      </div>
                      <div className="col-span-1">
                        <p className="text-xs text-gray-600">Hits:</p>
                        <p className="font-semibold text-gray-900">{redirect.hits}</p>
                      </div>
                      <div className="col-span-1 flex justify-end space-x-1">
                        <Button size="sm" variant="ghost">
                          <Edit3 className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    {redirect.notes && (
                      <p className="text-xs text-gray-600 mt-2">Note: {redirect.notes}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Link Opportunities Tab */}
        {activeTab === 'link-opportunities' && (
          <div>
            <Card className="border-0 shadow-md mb-6 bg-blue-50 border-l-4 border-blue-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-900">AI-Powered Link Suggestions</p>
                      <p className="text-sm text-blue-700">Found {linkOpportunities.length} opportunities to improve internal linking</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Check className="w-4 h-4 mr-2" />
                    Add All Links
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {linkOpportunities.map((opp) => (
                <Card key={opp.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className="bg-green-100 text-green-700">
                            {opp.relevanceScore}% Relevant
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">From Page:</p>
                            <p className="text-sm font-medium text-gray-900">{opp.sourcePage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">To Page:</p>
                            <p className="text-sm font-medium text-gray-900">{opp.targetPage}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs text-gray-600 mb-1">Suggested Anchor Text:</p>
                          <Badge className="bg-blue-100 text-blue-700">{opp.anchorText}</Badge>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Why this link makes sense:</p>
                          <p className="text-sm text-gray-700">{opp.context}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Add This Link
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {['external-broken', 'slow-links', 'gsc-issues', 'ahrefs-imports', 'anchor-text', 'competitor', 'fix-queue', 'monitoring', 'history', 'reports'].includes(activeTab) && (
          <Card className="border-0 shadow-md">
            <CardContent className="p-12 text-center">
              <Info className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                {activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h3>
              <p className="text-gray-600">This tab content is being loaded...</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Ahrefs Import Modal */}
      <AnimatePresence>
        {showAhrefsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAhrefsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Import from Ahrefs</h2>
                    <p className="text-gray-600">Upload your Ahrefs broken links export (CSV or TSV)</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowAhrefsModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Upload Section */}
                <div className="mb-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Drop your Ahrefs file here</p>
                    <p className="text-sm text-gray-600 mb-4">or click to browse</p>
                    <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      Browse Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">Supported formats: CSV, TSV · Max size: 10MB</p>
                  </div>
                </div>

                {/* Column Mapping */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[#1E3A5F] mb-4">Column Mapping</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Source URL', field: 'source_url' },
                      { label: 'Broken URL', field: 'broken_url' },
                      { label: 'Anchor Text', field: 'anchor_text' },
                      { label: 'HTTP Status', field: 'status_code' },
                      { label: 'Referring Domains', field: 'referring_domains' },
                      { label: 'First Seen', field: 'first_seen' },
                    ].map((col) => (
                      <div key={col.field} className="grid grid-cols-2 gap-4">
                        <label className="flex items-center text-sm font-medium text-gray-700">
                          {col.label}
                        </label>
                        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                          <option>Auto-detected: {col.field}</option>
                          <option>Column A</option>
                          <option>Column B</option>
                          <option>Column C</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[#1E3A5F] mb-4">Import Preview</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">First 10 rows preview:</p>
                    <div className="text-xs font-mono text-gray-600">
                      <p>/services/seo → /old-page → 404 → 23 domains</p>
                      <p>/blog/article → /missing → 404 → 15 domains</p>
                      <p>...</p>
                    </div>
                    <p className="text-sm font-semibold text-[#1E3A5F] mt-3">
                      Total: 142 broken links to import
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                    onClick={() => {
                      setAhrefsConnected(true);
                      setShowAhrefsModal(false);
                    }}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Import 142 Broken Links
                  </Button>
                  <Button className="flex-1" variant="outline" onClick={() => setShowAhrefsModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GSC Connection Modal */}
      <AnimatePresence>
        {showGSCModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGSCModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-md w-full"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Connect Google Search Console</h2>
                    <p className="text-gray-600">Get crawl errors and indexing issues directly from Google</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowGSCModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h3 className="font-medium text-blue-900 mb-2">What you&apos;ll get:</h3>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        404 errors Google has found
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Soft 404 issues
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Crawl errors and blocked URLs
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Last crawled timestamps
                      </li>
                    </ul>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  onClick={() => {
                    setGscConnected(true);
                    setShowGSCModal(false);
                  }}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Connect with Google
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Generate Page Modal */}
      <AnimatePresence>
        {showAIGenerateModal && selectedBrokenLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAIGenerateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">AI Generate Page</h2>
                    <p className="text-gray-600 font-mono text-sm">{selectedBrokenLink.brokenUrl}</p>
                    <p className="text-sm text-gray-500 mt-1">Step {aiWizardStep} of 4</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowAIGenerateModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`flex-1 h-2 rounded-full ${
                          aiWizardStep >= step ? 'bg-[#00B4D8]' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Analyze</span>
                    <span>Configure</span>
                    <span>Generate</span>
                    <span>Publish</span>
                  </div>
                </div>

                {/* Step 1: Analyze */}
                {aiWizardStep === 1 && (
                  <div>
                    <Card className="border-0 shadow-md bg-blue-50 mb-6">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <Loader2 className="w-5 h-5 text-blue-600 animate-spin mt-0.5" />
                          <div>
                            <p className="font-semibold text-blue-900 mb-2">Analyzing URL structure and context...</p>
                            <div className="space-y-2 text-sm text-blue-800">
                              <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Analyzed URL structure
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Determined page topic
                              </div>
                              <div className="flex items-center">
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Finding related pages...
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md mb-6">
                      <CardHeader>
                        <CardTitle className="text-lg">Analysis Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Page Topic:</p>
                            <p className="text-lg text-[#1E3A5F]">Social Media Marketing Services</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Confidence:</p>
                            <Badge className="bg-green-100 text-green-700">High (92%)</Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Suggested Page Type:</p>
                            <Badge className="bg-blue-100 text-blue-700">Service Page</Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Related Existing Pages:</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-gray-100 text-gray-700">/services/digital-marketing</Badge>
                              <Badge className="bg-gray-100 text-gray-700">/blog/social-media-tips</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-end">
                      <Button onClick={() => setAIWizardStep(2)} className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        Next: Configure Page
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Configure */}
                {aiWizardStep === 2 && (
                  <div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Page Title</label>
                        <input
                          type="text"
                          defaultValue="Social Media Marketing Services | ThinkMents"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">URL Slug</label>
                        <input
                          type="text"
                          defaultValue="/services/social-media-marketing"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Page Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Service Page</option>
                          <option>Blog Post</option>
                          <option>Location Page</option>
                          <option>Landing Page</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Target Keyword</label>
                        <input
                          type="text"
                          defaultValue="social media marketing"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Content Length</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Short (300 words)</option>
                          <option>Medium (600 words)</option>
                          <option>Long (1000+ words)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Include Sections</label>
                        <div className="space-y-2">
                          {['Hero section', 'Service description', 'Benefits list', 'Process/how it works', 'FAQ section', 'Call-to-action'].map((section) => (
                            <label key={section} className="flex items-center space-x-2">
                              <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" defaultChecked />
                              <span className="text-sm text-gray-700">{section}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setAIWizardStep(1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button onClick={() => setAIWizardStep(3)} className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        Generate Content
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Generate & Preview */}
                {aiWizardStep === 3 && (
                  <div>
                    <Card className="border-0 shadow-md mb-6">
                      <CardContent className="pt-6">
                        <div className="prose max-w-none">
                          <h1>Social Media Marketing Services</h1>
                          <p>Transform your brand&apos;s social media presence with our expert social media marketing services...</p>
                          <h2>Why Choose ThinkMents for Social Media Marketing?</h2>
                          <ul>
                            <li>Proven track record of success</li>
                            <li>Data-driven strategies</li>
                            <li>Customized campaigns</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setAIWizardStep(2)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Configure
                      </Button>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                        <Button onClick={() => setAIWizardStep(4)} className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                          Next: Publish
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Publish */}
                {aiWizardStep === 4 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Ready to Publish!</h3>
                    <p className="text-gray-600 mb-6">Your page is ready. Choose how to proceed:</p>
                    <div className="flex justify-center space-x-3">
                      <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Publish Now
                      </Button>
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        Save as Draft
                      </Button>
                      <Button variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wayback Machine Recovery Modal */}
      <AnimatePresence>
        {showRecoveryModal && selectedBrokenLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRecoveryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Recover from Internet Archive</h2>
                    <p className="text-gray-600 font-mono text-sm">{selectedBrokenLink.brokenUrl}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowRecoveryModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <Card className="border-0 shadow-md bg-green-50 mb-6">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-green-900">Found 3 archived versions in Wayback Machine</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4 mb-6">
                  {[
                    { date: '2023-12-15', preview: 'Complete guide to social media marketing strategies for 2023...' },
                    { date: '2023-06-20', preview: 'Social media best practices and tips for engagement...' },
                    { date: '2022-11-10', preview: 'How to create effective social media campaigns...' },
                  ].map((version, idx) => (
                    <Card key={idx} className="border-2 border-gray-200 hover:border-[#00B4D8]">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          <p className="font-semibold text-gray-900">{version.date}</p>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{version.preview}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                            <Download className="w-4 h-4 mr-2" />
                            Extract Content
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Restore & Modernize with AI
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Use as Reference Only
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Redirect Modal */}
      <AnimatePresence>
        {showRedirectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRedirectModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Create Redirect</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowRedirectModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">From URL</label>
                    <input
                      type="text"
                      defaultValue={selectedBrokenLink?.brokenUrl}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">To URL</label>
                    <input
                      type="text"
                      placeholder="/new-page"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">Select from existing pages or enter a new URL</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Redirect Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="301">301 - Permanent Redirect</option>
                      <option value="302">302 - Temporary Redirect</option>
                      <option value="307">307 - Temporary Redirect (Preserve Method)</option>
                      <option value="308">308 - Permanent Redirect (Preserve Method)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Why this redirect exists..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Check className="w-4 h-4 mr-2" />
                    Create Redirect
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Test First
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulk Generate Modal */}
      <AnimatePresence>
        {showBulkGenerateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBulkGenerateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Bulk AI Page Generation</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowBulkGenerateModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <Card className="border-0 shadow-md bg-blue-50 mb-6">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-sm text-blue-900">
                      {selectedLinks.length > 0 ? `${selectedLinks.length} broken URLs selected` : '12 broken URLs selected'} for bulk generation
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Content Depth</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Quick (300 words)</option>
                      <option>Standard (600 words)</option>
                      <option>Comprehensive (1000+ words)</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" defaultChecked />
                      <span className="text-sm text-gray-700">Auto-generate SEO metadata</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" defaultChecked />
                      <span className="text-sm text-gray-700">Match existing page styles</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" defaultChecked />
                      <span className="text-sm text-gray-700">Review before publishing</span>
                    </label>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  onClick={() => setShowBulkGenerateModal(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Bulk Generation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
