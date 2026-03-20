import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Search,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  FileText,
  Image as ImageIcon,
  Hash,
  AlignLeft,
  Copy as CopyIcon,
  TrendingUp,
  Download,
  Settings as SettingsIcon,
  Edit3,
  Check,
  X,
  Clock,
  Eye,
  Sparkles,
  Zap,
  ExternalLink,
  Calendar,
  Grid,
  List,
  Lightbulb,
} from 'lucide-react';

type ScanStatus = 'idle' | 'scanning' | 'complete';
type IssueTab = 'meta' | 'titles' | 'images' | 'h1' | 'thin' | 'duplicate';

interface PageIssue {
  id: string;
  pageTitle: string;
  url: string;
  current: string;
  aiSuggestion: string;
  selected?: boolean;
}

interface ImageIssue {
  id: string;
  fileName: string;
  url: string;
  page: string;
  aiSuggestion: string;
  selected?: boolean;
}

interface ScanResult {
  pagesScanned: number;
  issuesFound: number;
  seoScore: number;
  quickFixCount: number;
  metaIssues: PageIssue[];
  titleIssues: PageIssue[];
  imageIssues: ImageIssue[];
  h1Issues: PageIssue[];
  thinContent: PageIssue[];
  duplicates: PageIssue[];
}

export default function SEOBulkFixer() {
  const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(124);
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);
  const [activeTab, setActiveTab] = useState<IssueTab>('meta');
  const [lastScan, setLastScan] = useState<string>('Never');
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const [isApplying, setIsApplying] = useState(false);

  const runScan = async () => {
    setScanStatus('scanning');
    setScanProgress(25); // Initial network request sent
    setCurrentPage(0);

    try {
      const response = await fetch('/api/seo-scanner');
      
      if (!response.ok) throw new Error('Scan failed');
      const data = await response.json();
      
      setScanProgress(100); // Request completed
      
      setScanStatus('complete');
      setTotalPages(data.overview.pagesScanned);
      setScanResults({
        pagesScanned: data.overview.pagesScanned,
        issuesFound: data.overview.issuesFound,
        seoScore: data.overview.seoScore,
        quickFixCount: data.overview.quickFixCount,
        ...data.bulkFixerData
      });
      setLastScan(new Date().toLocaleString());

    } catch (error) {
      console.error(error);
      setScanStatus('idle');
      toast.error('Failed to analyze the website. Please check the console.');
    }
  };

  const cancelScan = () => {
    setScanStatus('idle');
    setScanProgress(0);
    setCurrentPage(0);
  };

  const handleApplyUpdates = async (itemsToApply: string[]) => {
    if (itemsToApply.length === 0) return;
    setIsApplying(true);

    try {
      const response = await fetch('/api/seo-editor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'apply_ai_suggestions',
          updates: itemsToApply
        })
      });

      if (!response.ok) throw new Error('Update failed');
      
      toast.success(`Successfully applied ${itemsToApply.length} SEO updates!`);
      
      // Remove applied items from the current state
      setScanResults((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          issuesFound: prev.issuesFound - itemsToApply.length,
          quickFixCount: prev.quickFixCount - itemsToApply.length,
          metaIssues: prev.metaIssues.filter(i => !itemsToApply.includes(i.id)),
          titleIssues: prev.titleIssues.filter(i => !itemsToApply.includes(i.id)),
          imageIssues: prev.imageIssues.filter(i => !itemsToApply.includes(i.id)),
          h1Issues: prev.h1Issues.filter(i => !itemsToApply.includes(i.id)),
        };
      });
      setSelectedItems([]);
      
    } catch (error) {
      console.error(error);
      toast.error('Failed to apply updates.');
    } finally {
      setIsApplying(false);
    }
  };

  const toggleSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const selectAll = () => {
    const allIds = getCurrentIssues().map((issue) => issue.id);
    setSelectedItems(allIds);
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  const getCurrentIssues = (): (PageIssue | ImageIssue)[] => {
    if (!scanResults) return [];
    switch (activeTab) {
      case 'meta':
        return scanResults.metaIssues;
      case 'titles':
        return scanResults.titleIssues;
      case 'images':
        return scanResults.imageIssues;
      case 'h1':
        return scanResults.h1Issues;
      case 'thin':
        return scanResults.thinContent;
      case 'duplicate':
        return scanResults.duplicates;
      default:
        return [];
    }
  };

  const getTabCount = (tab: IssueTab): number => {
    if (!scanResults) return 0;
    switch (tab) {
      case 'meta':
        return scanResults.metaIssues.length;
      case 'titles':
        return scanResults.titleIssues.length;
      case 'images':
        return scanResults.imageIssues.length;
      case 'h1':
        return scanResults.h1Issues.length;
      case 'thin':
        return scanResults.thinContent.length;
      case 'duplicate':
        return scanResults.duplicates.length;
      default:
        return 0;
    }
  };

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-rose-400';
  };

  const getSEOScoreBgColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-green-600';
    if (score >= 50) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  if (scanStatus === 'idle' && !scanResults) {
    // Never scanned state
    return (
      <div>
        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />\n      <div className="mb-6 relative z-10">
          <h1 className="text-2xl font-bold text-white">SEO Bulk Fixer</h1>
          <p className="text-slate-400 mt-1">
            Scan and fix missing SEO data across your entire site
          </p>
        </div>

        <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
          <CardContent className="py-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Start Your First SEO Scan</h2>
              <p className="text-slate-400 mb-6 text-lg">
                Our AI-powered scanner will analyze your entire website to find missing meta
                descriptions, image alt text, page titles, H1 tags, and more. Get instant
                AI-generated suggestions to fix all issues with one click.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FileText, label: 'Meta Descriptions' },
                  { icon: Hash, label: 'Page Titles' },
                  { icon: ImageIcon, label: 'Image Alt Text' },
                  { icon: AlignLeft, label: 'H1 Tags' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-lg">
                    <item.icon className="w-8 h-8 mx-auto mb-2 text-indigo-400" />
                    <p className="text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
              <Button
                onClick={runScan}
                className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white px-8 py-6 text-lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Start SEO Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (scanStatus === 'scanning') {
    // Scanning state
    return (
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">SEO Bulk Fixer</h1>
          <p className="text-slate-400 mt-1">Scanning your website for SEO issues...</p>
        </div>

        <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
          <CardContent className="py-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Search className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Scanning Your Website</h2>
                <p className="text-slate-400 mb-6">
                  Scanning page {currentPage} of {totalPages}...
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Progress</span>
                  <span>{scanProgress}%</span>
                </div>
                <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${scanProgress}%` }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-900"
                  />
                </div>
              </div>

              {/* Scanning Status */}
              <div className="space-y-2 mb-6">
                {[
                  'Analyzing page content...',
                  'Checking meta descriptions...',
                  'Scanning image alt text...',
                  'Validating page titles...',
                ].map((status, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: scanProgress > idx * 25 ? 1 : 0.3, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-center space-x-3 text-slate-400"
                  >
                    <CheckCircle
                      className={`w-5 h-5 ${scanProgress > idx * 25 ? 'text-green-500' : 'text-gray-300'
                        }`}
                    />
                    <span className="text-sm">{status}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" onClick={cancelScan} className="w-full">
                <X className="w-4 h-4 mr-2" />
                Cancel Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Results view
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">SEO Bulk Fixer</h1>
            <p className="text-slate-400 mt-1">
              Scan and fix missing SEO data across your entire site
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-slate-500">Last scan: {lastScan}</span>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setShowHistory(true)}
              className="text-slate-400"
            >
              <Calendar className="w-4 h-4 mr-2" />
              History
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowSettings(true)}
              className="text-slate-400"
            >
              <SettingsIcon className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button
              onClick={runScan}
              className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Run New Scan
            </Button>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      {scanResults && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Pages Scanned */}
          <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Pages Scanned</p>
                  <p className="text-2xl font-bold text-white">{scanResults.pagesScanned}</p>
                  <p className="text-xs text-slate-500 mt-1">Total pages analyzed</p>
                </div>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Issues Found */}
          <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Issues Found</p>
                  <p className="text-2xl font-bold text-amber-400">{scanResults.issuesFound}</p>
                  <p className="text-xs text-slate-500 mt-1">Items need attention</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Score */}
          <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">SEO Score</p>
                  <div className="flex items-baseline space-x-1">
                    <p className={`text-2xl font-bold ${getSEOScoreColor(scanResults.seoScore)}`}>
                      {scanResults.seoScore}
                    </p>
                    <span className="text-gray-400">/100</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Overall site health</p>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${(scanResults.seoScore / 100) * 176} 176`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" className={getSEOScoreBgColor(scanResults.seoScore)} />
                        <stop offset="100%" className={getSEOScoreBgColor(scanResults.seoScore)} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Fix Available */}
          <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Quick Fix Available</p>
                  <p className="text-2xl font-bold text-green-600">{scanResults.quickFixCount}</p>
                  <p className="text-xs text-slate-500 mt-1">Can be auto-fixed</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  const allQuickFixIds = scanResults ? [
                    ...scanResults.metaIssues.map(i => i.id),
                    ...scanResults.titleIssues.map(i => i.id),
                    ...scanResults.imageIssues.map(i => i.id),
                  ] : [];
                  handleApplyUpdates(allQuickFixIds);
                }}
                disabled={isApplying || scanResults?.quickFixCount === 0}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {isApplying ? 'Applying...' : 'Fix All'}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Issue Breakdown Tabs */}
      <Card className="border-0 shadow-[0_0_30px_rgba(79,70,229,0.1)] border border-white/5 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">SEO Issues</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-indigo-500 text-indigo-400">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 border-b border-white/10 overflow-x-auto">
            {[
              { id: 'meta', label: 'Meta Descriptions', icon: FileText },
              { id: 'titles', label: 'Page Titles', icon: Hash },
              { id: 'images', label: 'Image Alt Text', icon: ImageIcon },
              { id: 'h1', label: 'H1 Tags', icon: AlignLeft },
              { id: 'thin', label: 'Thin Content', icon: TrendingUp },
              { id: 'duplicate', label: 'Duplicates', icon: CopyIcon },
            ].map((tab) => {
              const Icon = tab.icon;
              const count = getTabCount(tab.id as IssueTab);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as IssueTab)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                  {count > 0 && <Badge className="bg-[#FF6B35] text-white text-xs">{count}</Badge>}
                </button>
              );
            })}
          </div>

          {/* Bulk Actions Bar */}
          {getCurrentIssues().length > 0 && (
            <div className="flex items-center justify-between mb-4 p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === getCurrentIssues().length}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => (e.target.checked ? selectAll() : clearSelection())}
                    className="w-4 h-4 text-indigo-400 rounded"
                  />
                  <span className="text-sm text-slate-300">Select All</span>
                </label>
                {selectedItems.length > 0 && (
                  <span className="text-sm text-slate-400">{selectedItems.length} selected</span>
                )}
              </div>
              <div className="flex space-x-2">
                {activeTab === 'images' && (
                  <div className="flex space-x-1 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg p-1 border border-white/10">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${viewMode === 'list'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-500 hover:text-slate-300'
                        }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${viewMode === 'grid'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-500 hover:text-slate-300'
                        }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {selectedItems.length > 0 && (
                  <>
                    <Button
                      size="sm"
                      onClick={() => handleApplyUpdates(selectedItems)}
                      disabled={isApplying}
                      className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white"
                    >
                      {isApplying ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
                      Apply {selectedItems.length} Suggestions
                    </Button>
                    <Button size="sm" variant="outline" onClick={clearSelection}>
                      Clear
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Issue List/Grid */}
          {activeTab === 'images' && viewMode === 'grid' ? (
            // Grid view for images
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {scanResults?.imageIssues.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.02 }}
                  className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${selectedItems.includes(image.id)
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-white/10 hover:border-indigo-500/100'
                    }`}
                  onClick={() => toggleSelection(image.id)}
                >
                  <div className="aspect-video bg-white/20 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-slate-500 mb-1 truncate">{image.fileName}</p>
                    <p className="text-xs text-indigo-400 mb-2 truncate">{image.page}</p>
                    <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 backdrop-blur-md mb-2">
                      <p className="text-xs text-emerald-300 line-clamp-2">{image.aiSuggestion}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button onClick={() => handleApplyUpdates([image.id])} disabled={isApplying} size="sm" className="flex-1 text-xs bg-indigo-600 text-white">
                        Apply
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Edit3 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Table/List view
            <div className="space-y-3">
              {getCurrentIssues().length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    Great job! No issues found in this category.
                  </h3>
                  <p className="text-slate-400">Your SEO is looking good here.</p>
                </div>
              ) : (
                getCurrentIssues().map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`border-2 rounded-lg p-4 transition-all ${selectedItems.includes(issue.id)
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : 'border-white/10'
                      }`}
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(issue.id)}
                        onChange={() => toggleSelection(issue.id)}
                        className="w-5 h-5 text-indigo-400 rounded mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        {/* Page Info */}
                        <div className="mb-3">
                          <h4 className="font-semibold text-white mb-1">
                            {'pageTitle' in issue ? issue.pageTitle : issue.fileName}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-slate-500">
                            <span className="truncate">{'page' in issue ? issue.page : issue.url}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </div>
                        </div>

                        {/* Current Status */}
                        <div className="mb-3">
                          <label className="text-xs font-medium text-slate-400 mb-1 block">
                            Current:
                          </label>
                          <div className="p-2 bg-rose-500/10 rounded-lg border border-rose-500/30 backdrop-blur-md">
                            <p className="text-sm text-rose-300">{'current' in issue ? issue.current : 'N/A'}</p>
                          </div>
                        </div>

                        {/* AI Suggestion */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-xs font-medium text-slate-400 flex items-center">
                              <Sparkles className="w-3 h-3 mr-1 text-indigo-400" />
                              AI Suggestion:
                            </label>
                            <button className="text-xs text-indigo-400 hover:underline flex items-center">
                              <Lightbulb className="w-3 h-3 mr-1" />
                              Why this?
                            </button>
                          </div>
                          {editingItem === issue.id ? (
                            <div>
                              <textarea
                                value={editValue}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditValue(e.target.value)}
                                rows={3}
                                className="w-full px-3 py-2 border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
                              />
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-slate-500">
                                  {editValue.length} characters
                                </span>
                                <div className="flex space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setEditingItem(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-indigo-600 text-white"
                                    onClick={() => setEditingItem(null)}
                                  >
                                    <Check className="w-4 h-4 mr-1" />
                                    Save
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                              <p className="text-sm text-emerald-300">{issue.aiSuggestion}</p>
                              <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-500/30">
                                <span className="text-xs text-green-700">
                                  {issue.aiSuggestion.length} characters
                                </span>
                                <Badge className="bg-green-600 text-white text-xs">
                                  SEO Score: 95/100
                                </Badge>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleApplyUpdates([issue.id])}
                            disabled={isApplying}
                            className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Apply
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-indigo-500 text-indigo-400"
                            onClick={() => {
                              setEditingItem(issue.id);
                              setEditValue(issue.aiSuggestion);
                            }}
                          >
                            <Edit3 className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-indigo-500 text-indigo-400"
                          >
                            <RefreshCw className="w-4 h-4 mr-1" />
                            Regenerate
                          </Button>
                          <Button size="sm" variant="outline" className="text-slate-400">
                            Skip
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sticky Bottom Action Bar */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/40 backdrop-blur-xl border-t-2 border-indigo-500 shadow-2xl z-40"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-900 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {selectedItems.length} items selected
                    </p>
                    <p className="text-sm text-slate-400">Ready to apply AI suggestions</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" onClick={clearSelection}>
                    Clear Selection
                  </Button>
                  <Button variant="outline" className="border-indigo-500 text-indigo-400">
                    <Download className="w-4 h-4 mr-2" />
                    Export to CSV
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white px-8">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Apply All AI Suggestions
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">Scan Settings</h2>
                <p className="text-slate-400 mt-1">
                  Configure what to scan and how AI generates suggestions
                </p>
              </div>

              <div className="p-6 space-y-6">
                {/* Scan Settings */}
                <div>
                  <h3 className="font-semibold text-white mb-3">What to Scan</h3>
                  <div className="space-y-3">
                    {[
                      'Include blog posts',
                      'Include location pages',
                      'Include images',
                      'Check external links',
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 text-indigo-400 rounded"
                        />
                        <span className="text-sm text-slate-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Meta Description Length */}
                <div>
                  <label className="block font-semibold text-white mb-3">
                    Meta Description Target Length
                  </label>
                  <input type="range" min="140" max="160" defaultValue="155" className="w-full" />
                  <div className="flex justify-between text-sm text-slate-400 mt-1">
                    <span>140 chars</span>
                    <span>155 chars</span>
                    <span>160 chars</span>
                  </div>
                </div>

                {/* Alt Text Style */}
                <div>
                  <label className="block font-semibold text-white mb-3">Alt Text Style</label>
                  <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                    <option>Descriptive (Detailed descriptions)</option>
                    <option>Concise (Short and simple)</option>
                    <option>Keyword-focused (SEO optimized)</option>
                  </select>
                </div>

                {/* AI Generation Settings */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="font-semibold text-white mb-3">AI Generation Settings</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Primary Keyword (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., digital marketing"
                        className="w-full px-3 py-2 border border-white/20 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Brand Name
                      </label>
                      <input
                        type="text"
                        defaultValue="ThinkMents"
                        className="w-full px-3 py-2 border border-white/20 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Tone</label>
                      <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                        <option>Professional</option>
                        <option>Casual</option>
                        <option>Technical</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Location Focus
                      </label>
                      <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                        <option>Texas (statewide)</option>
                        <option>Decatur, TX</option>
                        <option>Fort Worth, TX</option>
                        <option>Dallas, TX</option>
                        <option>Denton, TX</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowSettings(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => setShowSettings(false)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-900 text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History Modal */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowHistory(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">Scan History</h2>
                <p className="text-slate-400 mt-1">Previous scans and progress tracking</p>
              </div>

              <div className="p-6">
                {/* Trend Chart Placeholder */}
                <div className="mb-6 p-6 bg-gradient-to-r from-indigo-600/10 to-purple-900/10 rounded-lg">
                  <h3 className="font-semibold text-white mb-3">SEO Score Trend</h3>
                  <div className="h-48 flex items-end justify-between space-x-2">
                    {[65, 68, 71, 70, 73].map((score, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-indigo-600 to-purple-900 rounded-t"
                          style={{ height: `${score}%` }}
                        />
                        <span className="text-xs text-slate-400 mt-2">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May'][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scan History List */}
                <div className="space-y-3">
                  {[
                    { date: 'Today, 2:30 PM', issues: 47, fixed: 0, score: 73 },
                    { date: 'Apr 15, 2024', issues: 52, fixed: 5, score: 70 },
                    { date: 'Mar 20, 2024', issues: 58, fixed: 6, score: 71 },
                  ].map((scan, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-white/10 rounded-lg hover:border-indigo-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">{scan.date}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-400">
                            <span>{scan.issues} issues found</span>
                            <span>•</span>
                            <span className="text-green-600">{scan.fixed} fixed</span>
                            <span>•</span>
                            <span>Score: {scan.score}/100</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Export Options */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="font-semibold text-white mb-3">Export Options</h3>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Report (PDF)
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export Issues (CSV)
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export Fixed Items (CSV)
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex justify-end">
                <Button onClick={() => setShowHistory(false)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
