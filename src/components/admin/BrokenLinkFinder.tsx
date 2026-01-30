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
  Trash2,
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
} from 'lucide-react';

type TabType =
  | 'broken-links'
  | 'gsc-data'
  | 'internal-links'
  | 'competitor'
  | 'anchor-text'
  | 'link-flow'
  | 'monitoring'
  | 'history';
type ViewType = 'list' | 'recovery' | 'competitor-analysis';
type WizardStep = 1 | 2 | 3;

interface BrokenLink {
  id: string;
  sourceUrl: string;
  brokenUrl: string;
  linkText: string;
  statusCode: number;
  firstFound: string;
  lastChecked: string;
  priority: 'high' | 'medium' | 'low';
  type: 'internal' | 'external';
  suggestedFix?: string;
}

interface ArchivedVersion {
  date: string;
  url: string;
  preview: string;
}

interface InternalLinkOpportunity {
  id: string;
  sourcePage: string;
  targetPage: string;
  anchorText: string;
  relevanceScore: number;
  context: string;
}

interface CompetitorBrokenLink {
  id: string;
  competitorDomain: string;
  pageUrl: string;
  brokenUrl: string;
  topic: string;
  yourMatchingPage?: string;
  outreachStatus: 'not-sent' | 'sent' | 'responded' | 'link-placed';
}

export default function BrokenLinkFinder() {
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('broken-links');
  const [viewType, setViewType] = useState<ViewType>('list');
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [showCompetitorModal, setShowCompetitorModal] = useState(false);
  const [showReportWizard, setShowReportWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState<WizardStep>(1);
  const [selectedBrokenLink, setSelectedBrokenLink] = useState<BrokenLink | null>(null);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [gscConnected, setGscConnected] = useState(false);
  const [monitoringEnabled, setMonitoringEnabled] = useState(false);

  // Mock data
  const brokenLinks: BrokenLink[] = [
    {
      id: '1',
      sourceUrl: '/services/seo',
      brokenUrl: '/old-blog-post',
      linkText: 'Learn more about SEO strategies',
      statusCode: 404,
      firstFound: '2024-01-15',
      lastChecked: '2024-12-09',
      priority: 'high',
      type: 'internal',
      suggestedFix: '/blog/seo-strategies-2024',
    },
    {
      id: '2',
      sourceUrl: '/blog/digital-marketing-tips',
      brokenUrl: 'https://example.com/removed-article',
      linkText: 'external resource',
      statusCode: 404,
      firstFound: '2024-02-10',
      lastChecked: '2024-12-09',
      priority: 'medium',
      type: 'external',
    },
    {
      id: '3',
      sourceUrl: '/about',
      brokenUrl: '/team/john-doe',
      linkText: 'Meet our CEO',
      statusCode: 404,
      firstFound: '2024-03-20',
      lastChecked: '2024-12-09',
      priority: 'high',
      type: 'internal',
      suggestedFix: '/about/leadership',
    },
  ];

  const archivedVersions: ArchivedVersion[] = [
    {
      date: '2023-12-15',
      url: 'https://web.archive.org/...',
      preview: 'Complete guide to SEO strategies for 2023...',
    },
    {
      date: '2023-06-20',
      url: 'https://web.archive.org/...',
      preview: 'SEO best practices and tips for ranking...',
    },
  ];

  const internalLinkOpportunities: InternalLinkOpportunity[] = [
    {
      id: '1',
      sourcePage: '/services/web-design',
      targetPage: '/services/seo',
      anchorText: 'SEO services',
      relevanceScore: 92,
      context: 'Mentions "search engine optimization" 3 times but no link to SEO page',
    },
    {
      id: '2',
      sourcePage: '/blog/social-media-marketing',
      targetPage: '/services/social-media',
      anchorText: 'social media management',
      relevanceScore: 88,
      context: 'Discusses social media strategies without linking to service page',
    },
  ];

  const competitorBrokenLinks: CompetitorBrokenLink[] = [
    {
      id: '1',
      competitorDomain: 'competitor1.com',
      pageUrl: '/blog/marketing-guide',
      brokenUrl: 'https://oldarticle.com/seo-tips',
      topic: 'SEO Tips and Strategies',
      yourMatchingPage: '/blog/seo-strategies-2024',
      outreachStatus: 'not-sent',
    },
    {
      id: '2',
      competitorDomain: 'competitor2.com',
      pageUrl: '/resources',
      brokenUrl: 'https://deadsite.com/web-design',
      topic: 'Web Design Best Practices',
      yourMatchingPage: '/services/web-design',
      outreachStatus: 'sent',
    },
  ];

  const anchorTextData = [
    { text: 'click here', count: 47, issue: 'Generic', priority: 'high' },
    { text: 'SEO services', count: 23, issue: 'Over-optimized', priority: 'medium' },
    { text: 'learn more', count: 34, issue: 'Generic', priority: 'high' },
    { text: 'read more', count: 29, issue: 'Generic', priority: 'high' },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const toggleLinkSelection = (id: string) => {
    setSelectedLinks((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const selectAll = () => {
    setSelectedLinks(brokenLinks.map((link) => link.id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getOutreachStatusColor = (status: string) => {
    switch (status) {
      case 'link-placed':
        return 'bg-green-100 text-green-700';
      case 'responded':
        return 'bg-blue-100 text-blue-700';
      case 'sent':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Broken Link Finder & Fixer</h1>
            <p className="text-gray-600">Find, fix, and prevent broken links across your website</p>
          </div>
          <div className="flex items-center space-x-3">
            {!gscConnected && (
              <Button variant="outline" onClick={() => setGscConnected(true)}>
                <Globe className="w-4 h-4 mr-2" />
                Connect Google Search Console
              </Button>
            )}
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Scan All Links
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold text-red-600">247</p>
                  <p className="text-sm text-gray-600">Broken Links</p>
                </div>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">189</p>
                  <p className="text-sm text-gray-600">Fixed This Month</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">42</p>
                  <p className="text-sm text-gray-600">Link Opportunities</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">23</p>
                  <p className="text-sm text-gray-600">Outreach Sent</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GSC Connection Banner */}
        {gscConnected && (
          <Card className="border-0 shadow-md bg-green-50 border-l-4 border-green-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Google Search Console Connected</p>
                    <p className="text-sm text-green-700">
                      Last synced: 2 hours ago · Next sync: in 22 hours
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'broken-links', label: 'Broken Links', count: 247 },
          { id: 'gsc-data', label: 'GSC Crawl Errors', count: 34, badge: 'Google' },
          { id: 'internal-links', label: 'Link Opportunities', count: 42 },
          { id: 'competitor', label: 'Competitor Links', count: 23 },
          { id: 'anchor-text', label: 'Anchor Text', count: 133 },
          { id: 'link-flow', label: 'Link Flow Map', icon: Map },
          { id: 'monitoring', label: 'Monitoring', icon: Activity },
          { id: 'history', label: 'History', icon: History },
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
              <Badge
                className={`ml-2 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {tab.count}
              </Badge>
            )}
            {tab.badge && (
              <Badge
                className={`ml-2 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'}`}
              >
                {tab.badge}
              </Badge>
            )}
          </button>
        ))}
      </div>

      {/* Bulk Actions Toolbar */}
      {selectedLinks.length > 0 && (
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
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <Button size="sm" variant="outline">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Create Redirects
                  </Button>
                  <Button size="sm" variant="outline">
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
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
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
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Links</option>
                <option value="internal">Internal Only</option>
                <option value="external">External Only</option>
                <option value="high-priority">High Priority</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import Ahrefs
              </Button>
              <Button variant="outline" onClick={() => setShowReportWizard(true)}>
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tab Content */}
      <div>
        {/* Broken Links Tab */}
        {activeTab === 'broken-links' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <Button size="sm" onClick={selectAll} variant="outline">
                <Check className="w-4 h-4 mr-2" />
                Select All
              </Button>
            </div>

            {brokenLinks.map((link) => (
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
                            <Badge
                              className={
                                link.type === 'internal'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-purple-100 text-purple-700'
                              }
                            >
                              {link.type}
                            </Badge>
                            <Badge className="bg-red-100 text-red-700">{link.statusCode}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Broken URL:</p>
                              <p className="font-mono text-sm text-red-600 break-all">
                                {link.brokenUrl}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Found on:</p>
                              <a
                                href={link.sourceUrl}
                                className="text-sm text-[#00B4D8] hover:underline flex items-center"
                              >
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
                            </div>
                          </div>
                        </div>
                      </div>

                      {link.suggestedFix && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                          <div className="flex items-start space-x-2">
                            <Sparkles className="w-4 h-4 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-xs font-medium text-green-800 mb-1">
                                AI Suggested Fix:
                              </p>
                              <p className="text-sm text-gray-900">
                                Redirect to: {link.suggestedFix}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Create Redirect
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedBrokenLink(link);
                            setShowRecoveryModal(true);
                          }}
                        >
                          <History className="w-4 h-4 mr-2" />
                          Recover from Archive
                        </Button>
                        <Button size="sm" variant="outline">
                          <Sparkles className="w-4 h-4 mr-2" />
                          AI Generate Page
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit3 className="w-4 h-4 mr-2" />
                          Fix Manually
                        </Button>
                        <Button size="sm" variant="outline" className="text-gray-600">
                          <X className="w-4 h-4 mr-2" />
                          Ignore
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* GSC Data Tab */}
        {activeTab === 'gsc-data' && (
          <div>
            {!gscConnected ? (
              <Card className="border-0 shadow-md">
                <CardContent className="p-12 text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    Connect Google Search Console
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Connect your Google Search Console account to see crawl errors, 404s, and
                    indexing issues directly from Google.
                  </p>
                  <Button
                    onClick={() => setGscConnected(true)}
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Connect Google Search Console
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <Card className="border-0 shadow-md bg-blue-50 border-l-4 border-blue-500">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center space-x-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      <p className="text-sm text-blue-900">
                        Showing issues reported by Google Search Console. These are high-priority as
                        they affect how Google crawls your site.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {[
                  {
                    url: '/services/old-service',
                    type: '404 Error',
                    lastCrawled: '2024-12-08',
                    priority: 'high',
                  },
                  {
                    url: '/blog/deleted-post',
                    type: 'Soft 404',
                    lastCrawled: '2024-12-07',
                    priority: 'high',
                  },
                  {
                    url: '/resources/whitepaper',
                    type: 'Submitted URL blocked by robots.txt',
                    lastCrawled: '2024-12-06',
                    priority: 'medium',
                  },
                ].map((issue, idx) => (
                  <Card key={idx} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-red-500 text-white">Google Flagged</Badge>
                            <Badge className="bg-orange-100 text-orange-700">{issue.type}</Badge>
                          </div>
                          <p className="font-mono text-sm text-gray-900 mb-2">{issue.url}</p>
                          <p className="text-xs text-gray-600">
                            Last crawled by Google: {issue.lastCrawled}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Fix
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Internal Link Opportunities Tab */}
        {activeTab === 'internal-links' && (
          <div>
            <Card className="border-0 shadow-md mb-6 bg-blue-50 border-l-4 border-blue-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-900">AI-Powered Link Suggestions</p>
                      <p className="text-sm text-blue-700">
                        Found {internalLinkOpportunities.length} opportunities to improve internal
                        linking
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Add All Links
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {internalLinkOpportunities.map((opp) => (
                <Card key={opp.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className="bg-green-100 text-green-700">
                            {opp.relevanceScore}% Relevant
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">From Page:</p>
                            <p className="text-sm font-medium text-gray-900">{opp.sourcePage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">To Page:</p>
                            <p className="text-sm font-medium text-gray-900">{opp.targetPage}</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-gray-600 mb-1">Suggested Anchor Text:</p>
                          <Badge className="bg-blue-100 text-blue-700">{opp.anchorText}</Badge>
                        </div>
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Why this link makes sense:</p>
                          <p className="text-sm text-gray-700">{opp.context}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add This Link
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Orphan Pages Section */}
            <Card className="border-0 shadow-md mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Orphan Pages (No Internal Links)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['/services/consulting', '/blog/old-post-2022'].map((page, idx) => (
                    <div key={idx} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-2">{page}</p>
                          <div className="space-y-2">
                            <div className="text-sm">
                              <p className="text-xs text-gray-600 mb-1">
                                Suggested pages to link from:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-blue-100 text-blue-700">/services</Badge>
                                <Badge className="bg-blue-100 text-blue-700">/about</Badge>
                              </div>
                            </div>
                            <div className="text-sm">
                              <p className="text-xs text-gray-600 mb-1">Suggested anchor text:</p>
                              <Badge className="bg-purple-100 text-purple-700">
                                business consulting services
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="ml-4">
                          <Plus className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Competitor Analysis Tab */}
        {activeTab === 'competitor' && (
          <div>
            <Card className="border-0 shadow-md mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#1E3A5F]">Competitor Domains</h3>
                  <Button
                    size="sm"
                    onClick={() => setShowCompetitorModal(true)}
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Competitor
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['competitor1.com', 'competitor2.com', 'competitor3.com'].map((domain) => (
                    <Badge key={domain} className="bg-purple-100 text-purple-700 px-3 py-1">
                      {domain}
                      <button className="ml-2">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {competitorBrokenLinks.map((link) => (
                <Card
                  key={link.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className="bg-purple-100 text-purple-700">
                            {link.competitorDomain}
                          </Badge>
                          <Badge className={getOutreachStatusColor(link.outreachStatus)}>
                            {link.outreachStatus.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Their Page:</p>
                            <a
                              href={link.pageUrl}
                              className="text-sm text-[#00B4D8] hover:underline flex items-center"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              {link.pageUrl}
                            </a>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Broken Link:</p>
                            <p className="font-mono text-sm text-red-600 break-all">
                              {link.brokenUrl}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Topic:</p>
                            <p className="text-sm text-gray-900">{link.topic}</p>
                          </div>
                          {link.yourMatchingPage && (
                            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">Your Matching Page:</p>
                              <p className="text-sm font-medium text-green-700">
                                {link.yourMatchingPage}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Generate Outreach Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Template
                      </Button>
                    </div>

                    {/* Outreach Template Preview */}
                    {link.outreachStatus === 'not-sent' && (
                      <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <p className="text-xs text-gray-600 mb-2">Outreach Email Template:</p>
                        <div className="text-sm text-gray-700 space-y-2">
                          <p>Hi [Name],</p>
                          <p>
                            I noticed your page{' '}
                            <span className="font-mono bg-white px-1">{link.pageUrl}</span> has a
                            broken link to{' '}
                            <span className="font-mono bg-white px-1">{link.brokenUrl}</span>.
                          </p>
                          <p>
                            I have a similar resource at{' '}
                            <span className="font-mono bg-white px-1">{link.yourMatchingPage}</span>{' '}
                            that might be a good replacement.
                          </p>
                          <p>
                            Best regards,
                            <br />
                            [Your Name]
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Anchor Text Tab */}
        {activeTab === 'anchor-text' && (
          <div>
            <Card className="border-0 shadow-md mb-6 bg-amber-50 border-l-4 border-amber-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-900">Anchor Text Issues Found</p>
                    <p className="text-sm text-amber-700">
                      Generic anchor text like &quot;click here&quot; and &quot;read more&quot;
                      should be replaced with descriptive text
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {anchorTextData.map((anchor, idx) => (
                <Card key={idx} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <p className="text-lg font-semibold text-gray-900">
                            &quot;{anchor.text}&quot;
                          </p>
                          <Badge
                            className={
                              anchor.priority === 'high'
                                ? 'bg-red-500 text-white'
                                : 'bg-yellow-500 text-white'
                            }
                          >
                            {anchor.issue}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span>Used {anchor.count} times</span>
                          <span>·</span>
                          <span>Across 23 pages</span>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-xs font-medium text-green-800 mb-2">
                            AI Suggested Alternatives:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-white text-gray-700 border border-green-300">
                              learn about our SEO services
                            </Badge>
                            <Badge className="bg-white text-gray-700 border border-green-300">
                              explore digital marketing solutions
                            </Badge>
                            <Badge className="bg-white text-gray-700 border border-green-300">
                              view our portfolio
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Diversify
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View All
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Link Flow Map Tab */}
        {activeTab === 'link-flow' && (
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Link Equity Flow Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                <div className="text-center">
                  <Network className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">Interactive link flow diagram</p>
                  <p className="text-sm text-gray-500">Powered by D3.js visualization</p>
                </div>
              </div>

              {/* Insights */}
              <div className="space-y-4">
                <h3 className="font-semibold text-[#1E3A5F]">Link Flow Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-0 shadow-sm bg-yellow-50">
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-900 mb-1">
                            Location pages receive few links
                          </p>
                          <p className="text-sm text-yellow-700">
                            Add 12 internal links to improve link equity
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm bg-blue-50">
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-900 mb-1">
                            Blog posts don&apos;t link to services
                          </p>
                          <p className="text-sm text-blue-700">
                            Connect content to conversion pages
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div>
            <Card className="border-0 shadow-md mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-2">Automated Monitoring</h3>
                    <p className="text-sm text-gray-600">
                      {monitoringEnabled
                        ? 'Monitoring is active · Next scan in 6 hours'
                        : 'Enable monitoring to get automatic alerts'}
                    </p>
                  </div>
                  <Button
                    onClick={() => setMonitoringEnabled(!monitoringEnabled)}
                    className={
                      monitoringEnabled
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                    }
                  >
                    {monitoringEnabled ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Disable
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Enable Monitoring
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Monitoring Settings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Schedule Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Scan Frequency
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Real-time (webhook)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Watched URLs
                      </label>
                      <div className="space-y-2 mb-3">
                        {['/services/seo', '/contact', '/'].map((url) => (
                          <div
                            key={url}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <span className="text-sm font-mono">{url}</span>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add URL to Watch
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Alert Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center space-x-2 mb-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#00B4D8] rounded"
                          defaultChecked
                        />
                        <span className="text-sm text-gray-900">Email notifications</span>
                      </label>
                      <input
                        type="email"
                        placeholder="admin@thinkments.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="flex items-center space-x-2 mb-3">
                        <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                        <span className="text-sm text-gray-900">Slack integration</span>
                      </label>
                      <Button size="sm" variant="outline" className="w-full">
                        <Slack className="w-4 h-4 mr-2" />
                        Connect Slack
                      </Button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Alert When:
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#00B4D8] rounded"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">New broken link found</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#00B4D8] rounded"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">Fixed link breaks again</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                          <span className="text-sm text-gray-700">New redirect chain detected</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                          <span className="text-sm text-gray-700">External site removes link</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Integration Options */}
            <Card className="border-0 shadow-md mt-6">
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Google Analytics', icon: BarChart3, connected: false },
                    { name: 'Ahrefs', icon: TrendingUp, connected: false },
                    { name: 'Semrush', icon: Search, connected: false },
                    { name: 'Screaming Frog', icon: Upload, connected: false },
                  ].map((integration) => (
                    <Card
                      key={integration.name}
                      className="border-2 border-gray-200 hover:border-[#00B4D8] cursor-pointer"
                    >
                      <CardContent className="pt-6 text-center">
                        <integration.icon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm font-medium text-gray-900 mb-2">{integration.name}</p>
                        <Button size="sm" variant="outline" className="w-full">
                          {integration.connected ? 'Connected' : 'Connect'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div>
            <Card className="border-0 shadow-md mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Link Health Trends</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Last 7 Days
                    </Button>
                    <Button size="sm" variant="outline">
                      Last 30 Days
                    </Button>
                    <Button size="sm" variant="outline">
                      Last 90 Days
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Broken links trend chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Change History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: 'Dec 9, 2024', action: '3 broken links fixed', type: 'fix', count: 3 },
                    {
                      date: 'Dec 8, 2024',
                      action: 'Created 2 redirect rules',
                      type: 'redirect',
                      count: 2,
                    },
                    {
                      date: 'Dec 7, 2024',
                      action: 'AI generated 5 new pages',
                      type: 'generate',
                      count: 5,
                    },
                    {
                      date: 'Dec 5, 2024',
                      action: 'Ahrefs import - 47 issues found',
                      type: 'import',
                      count: 47,
                    },
                  ].map((event, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {event.type === 'fix' && <CheckCircle className="w-6 h-6 text-blue-600" />}
                        {event.type === 'redirect' && (
                          <ArrowRight className="w-6 h-6 text-blue-600" />
                        )}
                        {event.type === 'generate' && (
                          <Sparkles className="w-6 h-6 text-blue-600" />
                        )}
                        {event.type === 'import' && <Upload className="w-6 h-6 text-blue-600" />}
                      </div>
                      <div className="flex-1 border-b border-gray-200 pb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{event.action}</p>
                            <p className="text-sm text-gray-600">{event.date}</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700">{event.count}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

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
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                      Recover from Internet Archive
                    </h2>
                    <p className="text-gray-600 font-mono text-sm">
                      {selectedBrokenLink.brokenUrl}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowRecoveryModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mb-6">
                  <Card className="border-0 shadow-md bg-blue-50">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <p className="text-sm text-blue-900">
                          Found {archivedVersions.length} archived versions in Wayback Machine
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4 mb-6">
                  {archivedVersions.map((version, idx) => (
                    <Card
                      key={idx}
                      className="border-2 border-gray-200 hover:border-[#00B4D8] cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
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
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Extract Content
                              </Button>
                            </div>
                          </div>
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

      {/* Client Report Wizard */}
      <AnimatePresence>
        {showReportWizard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReportWizard(false)}
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
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                      Generate Client Report
                    </h2>
                    <p className="text-gray-600">Step {wizardStep} of 3</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowReportWizard(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className={`flex-1 h-2 rounded-full ${wizardStep >= 1 ? 'bg-[#00B4D8]' : 'bg-gray-200'}`}
                    />
                    <div
                      className={`flex-1 h-2 rounded-full ${wizardStep >= 2 ? 'bg-[#00B4D8]' : 'bg-gray-200'}`}
                    />
                    <div
                      className={`flex-1 h-2 rounded-full ${wizardStep >= 3 ? 'bg-[#00B4D8]' : 'bg-gray-200'}`}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Report Type</span>
                    <span>Customize</span>
                    <span>Generate</span>
                  </div>
                </div>

                {/* Step 1 */}
                {wizardStep === 1 && (
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-4">Select report type:</h3>
                    <div className="space-y-3 mb-6">
                      {[
                        {
                          label: 'Executive Summary',
                          desc: 'High-level overview for decision makers',
                        },
                        { label: 'Technical Report', desc: 'Detailed analysis for developers' },
                        {
                          label: 'Client Report',
                          desc: 'White-label PDF for client presentations',
                        },
                        {
                          label: 'Monthly Comparison',
                          desc: 'This month vs last month performance',
                        },
                      ].map((type, idx) => (
                        <label
                          key={idx}
                          className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#00B4D8] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="report-type"
                            className="w-5 h-5 mt-1 text-[#00B4D8]"
                            defaultChecked={idx === 2}
                          />
                          <div>
                            <p className="font-medium text-gray-900">{type.label}</p>
                            <p className="text-sm text-gray-600">{type.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={() => setWizardStep(2)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {wizardStep === 2 && (
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-4">Customize report:</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Report Title
                        </label>
                        <input
                          type="text"
                          defaultValue="Link Health Report - December 2024"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Include Sections
                        </label>
                        <div className="space-y-2">
                          {[
                            'Executive Summary',
                            'Issues Found',
                            'Issues Fixed',
                            'New Pages Created',
                            'SEO Impact',
                            'Recommendations',
                          ].map((section) => (
                            <label key={section} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[#00B4D8] rounded"
                                defaultChecked
                              />
                              <span className="text-sm text-gray-700">{section}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Custom Logo
                        </label>
                        <Button size="sm" variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Logo
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setWizardStep(1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setWizardStep(3)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Generate Report
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {wizardStep === 3 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Report Generated!</h3>
                    <p className="text-gray-600 mb-6">Your white-label PDF report is ready</p>
                    <div className="flex justify-center space-x-3">
                      <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline">
                        <Send className="w-4 h-4 mr-2" />
                        Email to Client
                      </Button>
                      <Button variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
