import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Search,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit3,
  Sparkles,
  Download,
  RefreshCw,
  Filter,
  ChevronDown,
  X,
  Copy,
  ExternalLink,
  Globe,
  Share2,
  Code,
  Zap,
  TrendingUp,
  BarChart3,
  FileText,
  ArrowUpDown,
  Check,
  AlertTriangle,
  Info,
  Star,
  Clock,
  MapPin,
  DollarSign,
  Image as ImageIcon,
  Save,
  ChevronRight,
  ArrowLeft,
  Monitor,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Settings,
  Plus,
  Trash2,
  Link as LinkIcon,
  Layout,
  PlayCircle,
} from 'lucide-react';

type ViewType = 'list' | 'edit' | 'preview';
type TabType = 'seo' | 'social' | 'schema';
type DeviceType = 'desktop' | 'mobile';
type WizardStep = 1 | 2 | 3 | 4 | 5;

interface PageSEO {
  id: string;
  title: string;
  url: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: Record<string, unknown>;
  issues: string[];
  score: number;
  pageType: 'main' | 'service' | 'location' | 'blog';
}

export default function SERPOptimizer() {
  const [isScanning, setIsScanning] = useState(false);
  const [viewType, setViewType] = useState<ViewType>('list');
  const [activeTab, setActiveTab] = useState<TabType>('seo');
  const [selectedPage, setSelectedPage] = useState<PageSEO | null>(null);
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  const [filterIssues, setFilterIssues] = useState('all');
  const [filterPageType, setFilterPageType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState<WizardStep>(1);
  const [showCompetitor, setShowCompetitor] = useState(false);
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  // Mock data
  const issueStats = {
    missingTitles: 3,
    missingDescriptions: 8,
    titlesTooLong: 12,
    titlesTooShort: 5,
    descriptionsTooLong: 15,
    duplicateTitles: 7,
    missingSchema: 42,
    missingOG: 18,
  };

  // Dynamic stats
  const [pages, setPages] = useState<PageSEO[]>([]);
  const totalPages = pages.length;
  const pagesWithIssues = pages.filter(p => p.issues.length > 0).length;
  const [isSaving, setIsSaving] = useState(false);

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/seo-scanner');
      if (!response.ok) throw new Error('Scan failed');
      const data = await response.json();
      setPages(data.serpData.pages);
      toast.success(`Successfully scanned ${data.serpData.pages.length} pages!`);
    } catch(err) {
      console.error(err);
      toast.error('Failed to run scan');
    } finally {
      setIsScanning(false);
    }
  };

  const handleSave = async () => {
    if (!selectedPage) return;
    setIsSaving(true);
    
    try {
      const response = await fetch('/api/seo-editor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_meta',
          updates: [{
            pageId: selectedPage.id,
            metaTitle: editedTitle,
            metaDescription: editedDescription,
          }]
        })
      });

      if (!response.ok) throw new Error('Failed to save');
      
      toast.success('SEO metadata saved successfully!');
      
      // Update local state to reflect changes
      setPages(prev => prev.map(p => {
        if (p.id === selectedPage.id) {
          return {
            ...p,
            metaTitle: editedTitle,
            metaDescription: editedDescription,
            score: p.score + (editedTitle !== p.metaTitle ? 5 : 0) // Reward generic bump for saving
          };
        }
        return p;
      }));
      
      setViewType('list');
    } catch(err) {
      console.error(err);
      toast.error('Failed to save changes');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditPage = (page: PageSEO) => {
    setSelectedPage(page);
    setEditedTitle(page.metaTitle);
    setEditedDescription(page.metaDescription);
    setViewType('edit');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-rose-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/10';
    if (score >= 50) return 'bg-amber-500/10';
    return 'bg-rose-500/10';
  };

  const getIssueColor = (issue: string) => {
    if (issue.includes('missing')) return 'bg-rose-900/200';
    if (issue.includes('too-long') || issue.includes('too-short')) return 'bg-amber-900/200';
    return 'bg-orange-900/200';
  };

  const getCharacterColor = (length: number, max: number) => {
    const percentage = (length / max) * 100;
    if (percentage <= 80) return 'text-green-600';
    if (percentage <= 100) return 'text-yellow-600';
    return 'text-rose-400';
  };

  const formatIssue = (issue: string) => {
    return issue
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const titleMaxLength = deviceType === 'desktop' ? 60 : 78;
  const descriptionMaxLength = deviceType === 'desktop' ? 160 : 120;

  const aiSuggestions = [
    'ThinkMents Digital Marketing - Expert SEO, PPC & Social Media',
    'Digital Marketing Agency Decatur TX | ThinkMents',
    'ThinkMents: Your Partner in Digital Marketing Success',
    'Award-Winning Digital Marketing Services | ThinkMents',
    'Grow Your Business Online with ThinkMents Digital Marketing',
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-whitexl font-bold text-white mb-2">SERP Preview & Optimizer</h1>
            <p className="text-slate-400">Control how your pages appear in Google search results</p>
          </div>
          <div className="flex items-center space-x-3">
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
                  Scan All Pages
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Summary Badges */}
        <div className="flex items-center space-x-3">
          <Badge className="bg-indigo-500/10 text-indigo-300 px-3 py-1">
            <FileText className="w-4 h-4 mr-1" />
            {totalPages} Total Pages
          </Badge>
          <Badge className="bg-rose-500/10 text-red-800 px-3 py-1">
            <AlertCircle className="w-4 h-4 mr-1" />
            {pagesWithIssues} Pages with Issues
          </Badge>
        </div>
      </div>

      {/* Issue Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
        {/* Missing Titles */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5 text-rose-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.missingTitles}</p>
            <p className="text-xs text-slate-400 mb-1">Missing Titles</p>
            <Badge className="bg-rose-900/200 text-white text-xs">Critical</Badge>
          </CardContent>
        </Card>

        {/* Missing Descriptions */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-rose-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">
              {issueStats.missingDescriptions}
            </p>
            <p className="text-xs text-slate-400 mb-1">Missing Desc</p>
            <Badge className="bg-rose-900/200 text-white text-xs">Critical</Badge>
          </CardContent>
        </Card>

        {/* Titles Too Long */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3">
              <ArrowUpDown className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.titlesTooLong}</p>
            <p className="text-xs text-slate-400 mb-1">Titles Too Long</p>
            <Badge className="bg-amber-900/200 text-white text-xs">Warning</Badge>
          </CardContent>
        </Card>

        {/* Titles Too Short */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3">
              <ArrowUpDown className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.titlesTooShort}</p>
            <p className="text-xs text-slate-400 mb-1">Titles Too Short</p>
            <Badge className="bg-amber-900/200 text-white text-xs">Warning</Badge>
          </CardContent>
        </Card>

        {/* Descriptions Too Long */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">
              {issueStats.descriptionsTooLong}
            </p>
            <p className="text-xs text-slate-400 mb-1">Desc Too Long</p>
            <Badge className="bg-amber-900/200 text-white text-xs">Warning</Badge>
          </CardContent>
        </Card>

        {/* Duplicate Titles */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
              <Copy className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.duplicateTitles}</p>
            <p className="text-xs text-slate-400 mb-1">Duplicate Titles</p>
            <Badge className="bg-orange-900/200 text-white text-xs">Fix</Badge>
          </CardContent>
        </Card>

        {/* Missing Schema */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
              <Code className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.missingSchema}</p>
            <p className="text-xs text-slate-400 mb-1">No Schema</p>
            <Badge className="bg-orange-900/200 text-white text-xs">SEO</Badge>
          </CardContent>
        </Card>

        {/* Missing OG */}
        <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3">
              <Share2 className="w-5 h-5 text-slate-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{issueStats.missingOG}</p>
            <p className="text-xs text-slate-400 mb-1">No Open Graph</p>
            <Badge className="bg-white/50 text-white text-xs">Social</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Actions */}
      <Card className="border-0 shadow-2xl border border-white/5 mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or URL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                />
              </div>
              <select
                value={filterIssues}
                onChange={(e) => setFilterIssues(e.target.value)}
                className="px-3 py-2 border border-white/20 rounded-lg"
              >
                <option value="all">All Pages</option>
                <option value="with-issues">With Issues</option>
                <option value="no-issues">No Issues</option>
              </select>
              <select
                value={filterPageType}
                onChange={(e) => setFilterPageType(e.target.value)}
                className="px-3 py-2 border border-white/20 rounded-lg"
              >
                <option value="all">All Types</option>
                <option value="main">Main Pages</option>
                <option value="service">Service Pages</option>
                <option value="location">Location Pages</option>
                <option value="blog">Blog Posts</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => setShowCompetitor(true)}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Compare
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                onClick={() => setShowWizard(true)}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                <Zap className="w-4 h-4 mr-2" />
                Bulk AI Fix
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Area */}
      {viewType === 'list' && (
        <div className="space-y-4">
          {pages.map((page) => (
            <Card key={page.id} className="border-0 shadow-2xl border border-white/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Page Info */}
                  <div className="col-span-12 md:col-span-3">
                    <h3 className="font-semibold text-white mb-1">{page.title}</h3>
                    <a
                      href={page.url}
                      className="text-xs text-[#00B4D8] hover:underline flex items-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {page.path}
                    </a>
                    <Badge className="mt-2 bg-white/10 text-slate-300 text-xs">
                      {page.pageType}
                    </Badge>
                  </div>

                  {/* Meta Info */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="mb-2">
                      <p className="text-xs text-slate-400 mb-1">Title</p>
                      {page.metaTitle ? (
                        <p className="text-sm text-gray-100">
                          {page.metaTitle}
                          <span
                            className={`ml-2 text-xs ${getCharacterColor(page.metaTitle.length, 60)}`}
                          >
                            ({page.metaTitle.length}/60)
                          </span>
                        </p>
                      ) : (
                        <Badge className="bg-rose-500/10 text-rose-300">Missing</Badge>
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Description</p>
                      {page.metaDescription ? (
                        <p className="text-xs text-slate-300">
                          {truncateText(page.metaDescription, 80)}
                          <span
                            className={`ml-2 ${getCharacterColor(page.metaDescription.length, 160)}`}
                          >
                            ({page.metaDescription.length}/160)
                          </span>
                        </p>
                      ) : (
                        <Badge className="bg-rose-500/10 text-rose-300">Missing</Badge>
                      )}
                    </div>
                  </div>

                  {/* Issues */}
                  <div className="col-span-12 md:col-span-2">
                    {page.issues.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {page.issues.map((issue, idx) => (
                          <Badge key={idx} className={`${getIssueColor(issue)} text-white text-xs`}>
                            {formatIssue(issue)}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge className="bg-emerald-500/10 text-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        No Issues
                      </Badge>
                    )}
                  </div>

                  {/* Score */}
                  <div className="col-span-6 md:col-span-1">
                    <div
                      className={`w-14 h-14 rounded-full ${getScoreBgColor(page.score)} flex flex-col items-center justify-center`}
                    >
                      <span className={`text-lg font-bold ${getScoreColor(page.score)}`}>
                        {page.score}
                      </span>
                      <span className="text-xs text-slate-400">score</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="col-span-6 md:col-span-2 flex items-center justify-end space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleEditPage(page)}>
                      <Edit3 className="w-4 h-4 md:mr-2" />
                      <span className="hidden md:inline">Edit</span>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      onClick={() => {
                        setSelectedPage(page);
                        setEditedTitle(page.metaTitle);
                        setEditedDescription(page.metaDescription);
                        setViewType('preview');
                      }}
                    >
                      <Eye className="w-4 h-4 md:mr-2" />
                      <span className="hidden md:inline">Preview</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit/Preview View */}
      {(viewType === 'edit' || viewType === 'preview') && selectedPage && (
        <div>
          <Card className="border-0 shadow-2xl border border-white/5 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" onClick={() => setViewType('list')}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to List
                  </Button>
                  <div className="h-6 w-px bg-gray-300" />
                  <div>
                    <h2 className="font-semibold text-white">{selectedPage.title}</h2>
                    <p className="text-xs text-slate-400">{selectedPage.path}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    className={`${getScoreBgColor(selectedPage.score)} ${getScoreColor(selectedPage.score)} px-3 py-1`}
                  >
                    Score: {selectedPage.score}/100
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Edit Panel */}
            <div>
              <Card className="border-0 shadow-2xl border border-white/5 mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Edit SEO Data</CardTitle>
                    <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
                      <button
                        onClick={() => setActiveTab('seo')}
                        className={`px-3 py-1 rounded text-sm font-medium ${activeTab === 'seo' ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow text-white' : 'text-slate-400'
                          }`}
                      >
                        SEO
                      </button>
                      <button
                        onClick={() => setActiveTab('social')}
                        className={`px-3 py-1 rounded text-sm font-medium ${activeTab === 'social'
                          ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow text-white'
                          : 'text-slate-400'
                          }`}
                      >
                        Social
                      </button>
                      <button
                        onClick={() => setActiveTab('schema')}
                        className={`px-3 py-1 rounded text-sm font-medium ${activeTab === 'schema'
                          ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow text-white'
                          : 'text-slate-400'
                          }`}
                      >
                        Schema
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* SEO Tab */}
                  {activeTab === 'seo' && (
                    <div className="space-y-6">
                      {/* Meta Title */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block font-medium text-gray-100">SEO Title</label>
                          <Button size="sm" variant="outline">
                            <Sparkles className="w-4 h-4 mr-2" />
                            AI Suggest
                          </Button>
                        </div>
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                          placeholder="Enter SEO title..."
                        />
                        <div className="flex items-center justify-between mt-2">
                          <span className={`text-sm ${getCharacterColor(editedTitle.length, 60)}`}>
                            {editedTitle.length}/60 characters
                          </span>
                          <div className="flex-1 mx-3 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all ${editedTitle.length > 60
                                ? 'bg-rose-900/200'
                                : editedTitle.length > 48
                                  ? 'bg-amber-900/200'
                                  : 'bg-emerald-900/200'
                                }`}
                              style={{
                                width: `${Math.min((editedTitle.length / 60) * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Best Practices Checklist */}
                        <div className="mt-4 p-3 bg-white/5 rounded-lg">
                          <p className="text-xs font-medium text-slate-300 mb-2">Best Practices:</p>
                          <div className="space-y-1">
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                                defaultChecked
                              />
                              Contains primary keyword
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                                defaultChecked
                              />
                              Brand name at end
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                                defaultChecked={editedTitle.length <= 60}
                              />
                              Under 60 characters
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                              />
                              Unique across site
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Meta Description */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block font-medium text-gray-100">
                            Meta Description
                          </label>
                          <Button size="sm" variant="outline">
                            <Sparkles className="w-4 h-4 mr-2" />
                            AI Suggest
                          </Button>
                        </div>
                        <textarea
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                          placeholder="Enter meta description..."
                        />
                        <div className="flex items-center justify-between mt-2">
                          <span
                            className={`text-sm ${getCharacterColor(editedDescription.length, 160)}`}
                          >
                            {editedDescription.length}/160 characters
                          </span>
                          <div className="flex-1 mx-3 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all ${editedDescription.length > 160
                                ? 'bg-rose-900/200'
                                : editedDescription.length > 140
                                  ? 'bg-amber-900/200'
                                  : 'bg-emerald-900/200'
                                }`}
                              style={{
                                width: `${Math.min((editedDescription.length / 160) * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Best Practices */}
                        <div className="mt-4 p-3 bg-white/5 rounded-lg">
                          <p className="text-xs font-medium text-slate-300 mb-2">Best Practices:</p>
                          <div className="space-y-1">
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                              />
                              Contains primary keyword
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                              />
                              Includes call-to-action
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                                defaultChecked={editedDescription.length <= 160}
                              />
                              Under 160 characters
                            </label>
                            <label className="flex items-center text-xs text-slate-400">
                              <input
                                type="checkbox"
                                className="w-3 h-3 mr-2 text-[#00B4D8] rounded"
                                defaultChecked
                              />
                              Compelling and unique
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* URL Slug */}
                      <div>
                        <label className="block font-medium text-gray-100 mb-2">URL Slug</label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={selectedPage.path}
                            className="flex-1 px-3 py-2 border border-white/20 rounded-lg bg-white/5"
                            readOnly
                          />
                          <Button size="sm" variant="outline">
                            <Edit3 className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                        <p className="text-xs text-whitember-600 mt-2 flex items-center">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Editing URL will require a 301 redirect from the old URL
                        </p>
                      </div>

                      {/* Canonical URL */}
                      <div>
                        <label className="block font-medium text-gray-100 mb-2">
                          Canonical URL
                        </label>
                        <input
                          type="text"
                          value={selectedPage.canonicalUrl}
                          className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                        />
                        <p className="text-xs text-slate-400 mt-2 flex items-center">
                          <Info className="w-3 h-3 mr-1" />
                          Use when this page has duplicate content elsewhere
                        </p>
                      </div>

                      {/* Save Button */}
                      <Button onClick={handleSave} disabled={isSaving} className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        {isSaving ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                        Save Changes
                      </Button>
                    </div>
                  )}

                  {/* Social Tab */}
                  {activeTab === 'social' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-white">Open Graph & Twitter Cards</h3>
                        <Button size="sm" variant="outline">
                          <Copy className="w-4 h-4 mr-2" />
                          Use SEO Values
                        </Button>
                      </div>

                      {/* OG Title */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          OG Title
                        </label>
                        <input
                          type="text"
                          defaultValue={selectedPage.ogTitle || editedTitle}
                          className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                          placeholder="Defaults to SEO title"
                        />
                      </div>

                      {/* OG Description */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          OG Description
                        </label>
                        <textarea
                          defaultValue={selectedPage.ogDescription || editedDescription}
                          rows={2}
                          className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                          placeholder="Defaults to meta description"
                        />
                      </div>

                      {/* OG Image */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          OG Image
                        </label>
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-4">
                          {selectedPage.ogImage ? (
                            <div className="relative">
                              <img
                                src={selectedPage.ogImage}
                                alt="OG Preview"
                                className="w-full h-32 object-cover rounded"
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                className="absolute top-2 right-2 bg-[#0f172a]/40 backdrop-blur-xl"
                              >
                                <Edit3 className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="text-center">
                              <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                              <Button size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Upload Image
                              </Button>
                              <p className="text-xs text-slate-500 mt-2">Recommended: 1200×630px</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* OG Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          OG Type
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>website</option>
                          <option>article</option>
                          <option>product</option>
                          <option>profile</option>
                        </select>
                      </div>

                      {/* Twitter Card */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Twitter Card Type
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>summary</option>
                          <option>summary_large_image</option>
                          <option>app</option>
                          <option>player</option>
                        </select>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save Social Tags
                      </Button>
                    </div>
                  )}

                  {/* Schema Tab */}
                  {activeTab === 'schema' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-white">Schema Markup</h3>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Test in Google
                        </Button>
                      </div>

                      {/* Current Schema */}
                      {selectedPage.schema ? (
                        <div className="p-3 bg-emerald-900/20 border border-green-200 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <p className="text-sm font-medium text-green-900">
                              Active Schema: {(selectedPage.schema as { type?: string })?.type || 'Unknown'}
                            </p>
                          </div>
                          <pre className="text-xs bg-[#0f172a]/40 backdrop-blur-xl p-2 rounded border border-green-200 overflow-x-auto">
                            {JSON.stringify(selectedPage.schema, null, 2)}
                          </pre>
                        </div>
                      ) : (
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-whitember-600" />
                            <p className="text-sm text-whitember-900">
                              No schema markup found on this page
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Schema Generator */}
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Schema Type
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg mb-4">
                          <option>LocalBusiness</option>
                          <option>Service</option>
                          <option>Article</option>
                          <option>BlogPosting</option>
                          <option>FAQPage</option>
                          <option>BreadcrumbList</option>
                          <option>Organization</option>
                        </select>

                        {/* LocalBusiness Fields */}
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">
                              Business Name
                            </label>
                            <input
                              type="text"
                              defaultValue="ThinkMents Digital Marketing"
                              className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Address</label>
                            <input
                              type="text"
                              defaultValue="Decatur, Texas"
                              className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Phone</label>
                            <input
                              type="text"
                              placeholder="(555) 123-4567"
                              className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Price Range</label>
                            <select className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg">
                              <option>$</option>
                              <option>$$</option>
                              <option>$$$</option>
                              <option>$$$$</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                          <Code className="w-4 h-4 mr-2" />
                          Generate Schema
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Page
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* AI Suggestions Panel */}
              {activeTab === 'seo' && (
                <Card className="border-0 shadow-2xl border border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Sparkles className="w-5 h-5 mr-2 text-[#00B4D8]" />
                      AI Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 mb-4">
                      Click to use any of these AI-generated titles:
                    </p>
                    <div className="space-y-2">
                      {aiSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => setEditedTitle(suggestion)}
                          className="w-full text-left p-3 border border-white/10 rounded-lg hover:border-[#00B4D8] hover:bg-indigo-900/20 transition-colors group"
                        >
                          <div className="flex items-start justify-between">
                            <p className="text-sm text-gray-100 pr-2">{suggestion}</p>
                            <Badge className="bg-white/10 text-slate-300 text-xs group-hover:bg-[#00B4D8] group-hover:text-white">
                              {suggestion.length} chars
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right: SERP Preview */}
            <div>
              <Card className="border-0 shadow-2xl border border-white/5 sticky top-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>SERP Preview</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex bg-white/10 rounded-lg p-1">
                        <button
                          onClick={() => setDeviceType('desktop')}
                          className={`px-3 py-1 rounded flex items-center ${deviceType === 'desktop' ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow' : ''
                            }`}
                        >
                          <Monitor className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeviceType('mobile')}
                          className={`px-3 py-1 rounded flex items-center ${deviceType === 'mobile' ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow' : ''
                            }`}
                        >
                          <Smartphone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Google SERP Preview */}
                  <div className="border-2 border-white/20 rounded-lg p-4 bg-[#0f172a]/40 backdrop-blur-xl">
                    {/* Favicon + Site Name */}
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                      <span className="text-sm text-slate-400">thinkments.com</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl text-[#1A0DAB] hover:underline cursor-pointer mb-1">
                      {truncateText(editedTitle || 'No title', titleMaxLength)}
                    </h3>

                    {/* URL Breadcrumb */}
                    <div className="flex items-center text-sm text-slate-400 mb-2">
                      <Globe className="w-3 h-3 mr-1" />
                      <span>
                        thinkments.com › {selectedPage.path.split('/').filter(Boolean).join(' › ')}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {truncateText(editedDescription || 'No description', descriptionMaxLength)}
                    </p>

                    {/* Rich Snippet Example */}
                    {selectedPage.schema && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center text-yellow-600">
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <Star className="w-3 h-3 fill-current mr-1" />
                            <span className="text-slate-400 ml-1">5.0 (47)</span>
                          </div>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-400">$$</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-400">Digital Marketing Agency</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Social Previews */}
                  {activeTab === 'social' && (
                    <div className="mt-6 space-y-4">
                      {/* Facebook Preview */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Facebook className="w-4 h-4 text-[#1877F2]" />
                          <p className="text-sm font-medium text-gray-100">Facebook Preview</p>
                        </div>
                        <div className="border border-white/20 rounded-lg overflow-hidden">
                          {selectedPage.ogImage && (
                            <img
                              src={selectedPage.ogImage}
                              alt="OG Preview"
                              className="w-full h-48 object-cover"
                            />
                          )}
                          <div className="p-3 bg-white/5">
                            <p className="text-xs text-slate-500 uppercase mb-1">thinkments.com</p>
                            <p className="text-sm font-semibold text-gray-100 mb-1">
                              {truncateText(editedTitle, 60)}
                            </p>
                            <p className="text-xs text-slate-400">
                              {truncateText(editedDescription, 80)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Twitter Preview */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                          <p className="text-sm font-medium text-gray-100">Twitter Preview</p>
                        </div>
                        <div className="border border-white/20 rounded-lg overflow-hidden">
                          {selectedPage.ogImage && (
                            <img
                              src={selectedPage.ogImage}
                              alt="Twitter Preview"
                              className="w-full h-48 object-cover"
                            />
                          )}
                          <div className="p-3 bg-[#0f172a]/40 backdrop-blur-xl border-t border-white/10">
                            <p className="text-sm font-semibold text-gray-100 mb-1">
                              {truncateText(editedTitle, 70)}
                            </p>
                            <p className="text-xs text-slate-400 mb-1">
                              {truncateText(editedDescription, 125)}
                            </p>
                            <p className="text-xs text-slate-500">thinkments.com</p>
                          </div>
                        </div>
                      </div>

                      {/* LinkedIn Preview */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                          <p className="text-sm font-medium text-gray-100">LinkedIn Preview</p>
                        </div>
                        <div className="border border-white/20 rounded-lg overflow-hidden">
                          {selectedPage.ogImage && (
                            <img
                              src={selectedPage.ogImage}
                              alt="LinkedIn Preview"
                              className="w-full h-48 object-cover"
                            />
                          )}
                          <div className="p-3 bg-[#0f172a]/40 backdrop-blur-xl">
                            <p className="text-sm font-semibold text-gray-100 mb-1">
                              {truncateText(editedTitle, 70)}
                            </p>
                            <p className="text-xs text-slate-500">thinkments.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Bulk AI Fix Wizard */}
      <AnimatePresence>
        {showWizard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowWizard(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/40 backdrop-blur-xl rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Bulk AI SEO Fix</h2>
                    <p className="text-slate-400">Step {wizardStep} of 5</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowWizard(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div
                        key={step}
                        className={`flex-1 h-2 rounded-full ${wizardStep >= step ? 'bg-[#00B4D8]' : 'bg-white/20'
                          }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Select</span>
                    <span>Actions</span>
                    <span>Config</span>
                    <span>Review</span>
                    <span>Apply</span>
                  </div>
                </div>

                {/* Step 1: Select Pages */}
                {wizardStep === 1 && (
                  <div>
                    <h3 className="font-semibold text-white mb-4">Select pages to optimize:</h3>
                    <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
                      <label className="flex items-center p-3 border-2 border-[#00B4D8] rounded-lg bg-indigo-900/20 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 mr-3 text-[#00B4D8] rounded"
                          defaultChecked
                        />
                        <div className="flex-1">
                          <p className="font-medium text-white">Select all pages with issues</p>
                          <p className="text-xs text-slate-400">{pagesWithIssues} pages</p>
                        </div>
                      </label>
                      {mockPages
                        .filter((p) => p.issues.length > 0)
                        .map((page) => (
                          <label
                            key={page.id}
                            className="flex items-center p-3 border-2 border-white/10 rounded-lg hover:border-[#00B4D8] cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 mr-3 text-[#00B4D8] rounded"
                              defaultChecked
                            />
                            <div className="flex-1">
                              <p className="font-medium text-gray-100">{page.title}</p>
                              <p className="text-xs text-slate-400">{page.path}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {page.issues.map((issue, idx) => (
                                  <Badge key={idx} className="bg-rose-500/10 text-rose-300 text-xs">
                                    {formatIssue(issue)}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </label>
                        ))}
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={() => setWizardStep(2)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Next: Select Actions
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Select Actions */}
                {wizardStep === 2 && (
                  <div>
                    <h3 className="font-semibold text-white mb-4">What should AI fix?</h3>
                    <div className="space-y-3 mb-6">
                      {[
                        { label: 'Generate missing titles', count: 3, icon: AlertCircle },
                        { label: 'Generate missing descriptions', count: 8, icon: FileText },
                        {
                          label: 'Add LocalBusiness schema to location pages',
                          count: 25,
                          icon: MapPin,
                        },
                        { label: 'Add Article schema to blog posts', count: 50, icon: FileText },
                        { label: 'Generate Open Graph tags', count: 18, icon: Share2 },
                        { label: 'Optimize existing titles (length)', count: 17, icon: Edit3 },
                      ].map((action, idx) => {
                        const Icon = action.icon;
                        return (
                          <label
                            key={idx}
                            className="flex items-center space-x-3 p-4 border-2 border-white/10 rounded-lg hover:border-[#00B4D8] cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 text-[#00B4D8] rounded"
                              defaultChecked={idx < 3}
                            />
                            <Icon className="w-5 h-5 text-[#00B4D8]" />
                            <span className="flex-1 font-medium text-gray-100">{action.label}</span>
                            <Badge className="bg-white/10 text-slate-300">{action.count}</Badge>
                          </label>
                        );
                      })}
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
                        Next: Configure
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Configure */}
                {wizardStep === 3 && (
                  <div>
                    <h3 className="font-semibold text-white mb-4">Configure AI settings:</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Primary Keyword
                        </label>
                        <input
                          type="text"
                          defaultValue="digital marketing"
                          className="w-full px-3 py-2 border border-white/20 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Brand Name Format
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>ThinkMents</option>
                          <option>ThinkMents Digital Marketing</option>
                          <option>ThinkMents | Digital Marketing Agency</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Include Location
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>Yes - Decatur, TX</option>
                          <option>Yes - Decatur, Texas</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">Tone</label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>Professional</option>
                          <option>Friendly</option>
                          <option>Authoritative</option>
                          <option>Conversational</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setWizardStep(2)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setWizardStep(4)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Next: Review
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {wizardStep === 4 && (
                  <div>
                    <h3 className="font-semibold text-white mb-4">Review proposed changes:</h3>
                    <div className="mb-6">
                      <Card className="border-0 shadow-2xl border border-white/5 mb-4">
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <p className="text-whitexl font-bold text-[#00B4D8]">23</p>
                              <p className="text-sm text-slate-400">Pages to Update</p>
                            </div>
                            <div>
                              <p className="text-whitexl font-bold text-green-600">+47</p>
                              <p className="text-sm text-slate-400">Score Improvement</p>
                            </div>
                            <div>
                              <p className="text-whitexl font-bold text-purple-600">68</p>
                              <p className="text-sm text-slate-400">Total Changes</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="max-h-96 overflow-y-auto space-y-3">
                        {mockPages
                          .filter((p) => p.issues.length > 0)
                          .slice(0, 3)
                          .map((page) => (
                            <Card key={page.id} className="border-0 shadow-lg border border-white/5">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <p className="font-medium text-gray-100">{page.title}</p>
                                    <p className="text-xs text-slate-400">{page.path}</p>
                                  </div>
                                  <Button size="sm" variant="outline">
                                    <Edit3 className="w-3 h-3 mr-1" />
                                    Edit
                                  </Button>
                                </div>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-start space-x-2">
                                    <Badge className="bg-indigo-500/10 text-indigo-300">Title</Badge>
                                    <div className="flex-1">
                                      <p className="text-xs text-slate-500 mb-1">Original:</p>
                                      <p className="text-xs line-through text-gray-400">
                                        {page.metaTitle || 'None'}
                                      </p>
                                      <p className="text-xs text-slate-500 mb-1 mt-2">New:</p>
                                      <p className="text-xs text-green-700 font-medium">
                                        {page.title} - Professional Digital Marketing Services |
                                        ThinkMents
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setWizardStep(3)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setWizardStep(5)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Apply All Changes
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 5: Complete */}
                {wizardStep === 5 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Optimization Complete!
                    </h3>
                    <p className="text-slate-400 mb-6">
                      All SEO improvements have been applied successfully
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <Card className="border-0 shadow-2xl border border-white/5">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">23</p>
                          <p className="text-sm text-slate-400">Pages Updated</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-2xl border border-white/5">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">+47</p>
                          <p className="text-sm text-slate-400">Avg Score Increase</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-2xl border border-white/5">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">68</p>
                          <p className="text-sm text-slate-400">Changes Applied</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                      <Button
                        onClick={() => {
                          setShowWizard(false);
                          setWizardStep(1);
                        }}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Done
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competitor Comparison Modal */}
      <AnimatePresence>
        {showCompetitor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCompetitor(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/40 backdrop-blur-xl rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Competitor SERP Comparison</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowCompetitor(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Competitor URL
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="https://competitor.com"
                      value={competitorUrl}
                      onChange={(e) => setCompetitorUrl(e.target.value)}
                      className="flex-1 px-3 py-2 border border-white/20 rounded-lg"
                    />
                    <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      <Search className="w-4 h-4 mr-2" />
                      Analyze
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Your Site */}
                  <div>
                    <h3 className="font-semibold text-white mb-3">Your Site</h3>
                    <div className="border-2 border-[#00B4D8] rounded-lg p-4 bg-indigo-900/20">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-full" />
                        <span className="text-sm text-slate-400">thinkments.com</span>
                      </div>
                      <h3 className="text-xl text-[#1A0DAB] mb-1">
                        ThinkMents - Digital Marketing Agency in Decatur, Texas
                      </h3>
                      <p className="text-sm text-slate-400">
                        Award-winning digital marketing services. SEO, PPC, social media.
                      </p>
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-xs text-slate-300">
                          <strong>Title:</strong> 59 chars · <strong>Desc:</strong> 78 chars
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Competitor */}
                  <div>
                    <h3 className="font-semibold text-white mb-3">Competitor</h3>
                    <div className="border-2 border-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-gray-400 rounded-full" />
                        <span className="text-sm text-slate-400">competitor.com</span>
                      </div>
                      <h3 className="text-xl text-[#1A0DAB] mb-1">
                        Best Digital Marketing Agency | Award Winning Services
                      </h3>
                      <p className="text-sm text-slate-400">
                        Top-rated digital marketing agency with 20+ years experience. Call today for
                        a free consultation!
                      </p>
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-slate-300">
                          <strong>Title:</strong> 58 chars · <strong>Desc:</strong> 115 chars
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Analysis */}
                <Card className="border-0 shadow-2xl border border-white/5 mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-[#00B4D8]" />
                      AI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">
                          What they are doing better:
                        </h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                            Includes call-to-action in description (&quot;Call today&quot;)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                            Mentions years of experience for credibility
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-300 mb-2">Suggestions to outrank:</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li className="flex items-start">
                            <TrendingUp className="w-4 h-4 mr-2 text-indigo-400 mt-0.5" />
                            Add a strong call-to-action to your description
                          </li>
                          <li className="flex items-start">
                            <TrendingUp className="w-4 h-4 mr-2 text-indigo-400 mt-0.5" />
                            Consider adding credibility indicators (awards, years)
                          </li>
                          <li className="flex items-start">
                            <TrendingUp className="w-4 h-4 mr-2 text-indigo-400 mt-0.5" />
                            Use more descriptive language in title
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
