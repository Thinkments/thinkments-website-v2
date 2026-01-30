import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Image as ImageIcon,
  AlertCircle,
  CheckCircle,
  Search,
  Download,
  Grid3x3,
  List,
  RefreshCw,
  Sparkles,
  FileImage,
  AlertTriangle,
  Zap,
  MapPin,
  FileQuestion,
  Copy,
  Trash2,
  Eye,
  Edit3,
  Check,
  X,
  ChevronDown,
  Filter,
  SlidersHorizontal,
  BarChart3,
  Clock,
  HardDrive,
  ArrowUpDown,
  ExternalLink,
  Upload,
  Settings,
  PlayCircle,
  Save,
  ChevronRight,
  ArrowLeft,
  FileText,
  Activity,
  TrendingUp,
  Maximize2,
  Minimize2,
  Link as LinkIcon,
  Layers,
  Globe,
} from 'lucide-react';

type ViewMode = 'gallery' | 'list';
type TabType =
  | 'missing-alt'
  | 'poor-names'
  | 'oversized'
  | 'missing-dimensions'
  | 'not-in-sitemap'
  | 'duplicates';
type WizardStep = 1 | 2 | 3;

interface ImageIssue {
  id: string;
  filename: string;
  url: string;
  thumbnail: string;
  size: number;
  dimensions: { width: number; height: number };
  format: string;
  pages: string[];
  issues: string[];
  altText?: string;
  titleAttribute?: string;
  uploadDate: string;
}

export default function ImageSEOAuditor() {
  const [isScanning, setIsScanning] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [activeTab, setActiveTab] = useState<TabType>('missing-alt');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageIssue | null>(null);
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState<WizardStep>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterFormat, setFilterFormat] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const seoScore = 67;
  const totalImages = 284;
  const lastScan = '2024-12-09 14:23';

  const issueStats = {
    missingAlt: 47,
    poorNames: 32,
    oversized: 18,
    missingDimensions: 56,
    notInSitemap: 23,
    missingTitle: 89,
    duplicates: 12,
  };

  const mockImages: ImageIssue[] = [
    {
      id: '1',
      filename: 'IMG_1234.jpg',
      url: '/images/IMG_1234.jpg',
      thumbnail:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      size: 1248000,
      dimensions: { width: 3000, height: 2000 },
      format: 'jpg',
      pages: ['/services/seo', '/blog/digital-marketing-tips'],
      issues: ['missing-alt', 'poor-name', 'oversized'],
      uploadDate: '2024-03-15',
    },
    {
      id: '2',
      filename: 'Screenshot 2024-01-20.png',
      url: '/images/Screenshot-2024-01-20.png',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      size: 892000,
      dimensions: { width: 2400, height: 1600 },
      format: 'png',
      pages: ['/case-studies/retail-success'],
      issues: ['missing-alt', 'poor-name', 'oversized'],
      uploadDate: '2024-01-20',
    },
    {
      id: '3',
      filename: 'photo.jpeg',
      url: '/images/photo.jpeg',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop',
      size: 456000,
      dimensions: { width: 1920, height: 1280 },
      format: 'jpeg',
      pages: ['/about'],
      issues: ['missing-alt', 'poor-name', 'missing-dimensions'],
      uploadDate: '2024-02-10',
    },
    {
      id: '4',
      filename: 'DSC_0089.jpg',
      url: '/images/DSC_0089.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
      size: 2100000,
      dimensions: { width: 4000, height: 3000 },
      format: 'jpg',
      pages: ['/services/social-media'],
      issues: ['missing-alt', 'poor-name', 'oversized'],
      uploadDate: '2024-04-05',
    },
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const toggleImageSelection = (id: string) => {
    setSelectedImages((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const selectAll = () => {
    setSelectedImages(mockImages.map((img) => img.id));
  };

  const deselectAll = () => {
    setSelectedImages([]);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreRingColor = (score: number) => {
    if (score >= 80) return '#10B981';
    if (score >= 50) return '#F59E0B';
    return '#EF4444';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(2)} MB`;
    return `${(bytes / 1024).toFixed(0)} KB`;
  };

  const getAISuggestion = (filename: string) => {
    const suggestions: Record<string, string> = {
      'IMG_1234.jpg': 'Business analytics dashboard on laptop screen showing growth metrics',
      'Screenshot 2024-01-20.png': 'Digital marketing performance chart with upward trend',
      'photo.jpeg': 'Professional team meeting discussing marketing strategy',
      'DSC_0089.jpg': 'Social media engagement metrics and analytics display',
    };
    return suggestions[filename] || 'Marketing team collaboration in modern office';
  };

  const getAIFilenameSuggestion = (filename: string) => {
    const suggestions: Record<string, string> = {
      'IMG_1234.jpg': 'business-analytics-dashboard-growth-metrics.jpg',
      'Screenshot 2024-01-20.png': 'digital-marketing-performance-chart.png',
      'photo.jpeg': 'team-meeting-marketing-strategy.jpg',
      'DSC_0089.jpg': 'social-media-engagement-analytics.jpg',
    };
    return suggestions[filename] || 'optimized-image.jpg';
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Image SEO Auditor</h1>
            <p className="text-gray-600">Find and fix all image optimization issues</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right mr-2">
              <p className="text-sm text-gray-500">Last scan</p>
              <p className="text-sm font-medium text-gray-700">{lastScan}</p>
            </div>
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
                  Scan All Images
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Total Images Badge */}
        <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
          <ImageIcon className="w-4 h-4 mr-1" />
          {totalImages} Total Images
        </Badge>
      </div>

      {/* Score Card & Issue Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-6">
        {/* Score Gauge */}
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#E5E7EB" strokeWidth="12" fill="none" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke={getScoreRingColor(seoScore)}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - seoScore / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(seoScore)}`}>
                    {seoScore}
                  </span>
                  <span className="text-sm text-gray-500">out of 100</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-1">Image SEO Score</h3>
              <p className="text-sm text-gray-600 text-center">
                {seoScore >= 80
                  ? 'Excellent!'
                  : seoScore >= 50
                    ? 'Needs Improvement'
                    : 'Critical Issues'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Issue Summary Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Missing Alt Text */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('missing-alt')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <Badge className="bg-red-500 text-white text-xs">Most Critical</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{issueStats.missingAlt}</p>
              <p className="text-sm text-gray-600">Missing Alt Text</p>
            </CardContent>
          </Card>

          {/* Poor File Names */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('poor-names')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileQuestion className="w-5 h-5 text-orange-600" />
                </div>
                <Badge className="bg-orange-500 text-white text-xs">High Priority</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{issueStats.poorNames}</p>
              <p className="text-sm text-gray-600">Poor File Names</p>
            </CardContent>
          </Card>

          {/* Oversized Images */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('oversized')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <HardDrive className="w-5 h-5 text-yellow-600" />
                </div>
                <Badge className="bg-yellow-500 text-white text-xs">Performance</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{issueStats.oversized}</p>
              <p className="text-sm text-gray-600">Oversized Images</p>
              <p className="text-xs text-green-600 mt-1">Save 12.4 MB</p>
            </CardContent>
          </Card>

          {/* Missing Dimensions */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('missing-dimensions')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-amber-600" />
                </div>
                <Badge className="bg-amber-500 text-white text-xs">Layout Shift</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">
                {issueStats.missingDimensions}
              </p>
              <p className="text-sm text-gray-600">Missing Dimensions</p>
            </CardContent>
          </Card>

          {/* Not in Sitemap */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('not-in-sitemap')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <Badge className="bg-blue-500 text-white text-xs">SEO</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{issueStats.notInSitemap}</p>
              <p className="text-sm text-gray-600">Not in Sitemap</p>
            </CardContent>
          </Card>

          {/* Duplicates */}
          <Card
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setActiveTab('duplicates')}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Copy className="w-5 h-5 text-purple-600" />
                </div>
                <Badge className="bg-purple-500 text-white text-xs">Cleanup</Badge>
              </div>
              <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{issueStats.duplicates}</p>
              <p className="text-sm text-gray-600">Duplicate Images</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <Card className="border-0 shadow-md mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by filename..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="whitespace-nowrap"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('gallery')}
                  className={`px-3 py-1 rounded ${viewMode === 'gallery' ? 'bg-white shadow' : ''}`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>

              <Button
                onClick={() => setShowWizard(true)}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                <Zap className="w-4 h-4 mr-2" />
                Optimize All
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                    <select
                      value={filterFormat}
                      onChange={(e) => setFilterFormat(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="all">All Formats</option>
                      <option value="jpg">JPG</option>
                      <option value="png">PNG</option>
                      <option value="gif">GIF</option>
                      <option value="webp">WebP</option>
                      <option value="svg">SVG</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Size Range
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>All Sizes</option>
                      <option>&lt; 100 KB</option>
                      <option>100 KB - 500 KB</option>
                      <option>500 KB - 1 MB</option>
                      <option>&gt; 1 MB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Page/Section
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>All Pages</option>
                      <option>Homepage</option>
                      <option>Services</option>
                      <option>Blog</option>
                      <option>Case Studies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Most Issues</option>
                      <option>File Size (Largest)</option>
                      <option>File Size (Smallest)</option>
                      <option>Name (A-Z)</option>
                      <option>Date (Newest)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'missing-alt', label: 'Missing Alt Text', count: issueStats.missingAlt },
          { id: 'poor-names', label: 'Poor File Names', count: issueStats.poorNames },
          { id: 'oversized', label: 'Oversized Images', count: issueStats.oversized },
          {
            id: 'missing-dimensions',
            label: 'Missing Dimensions',
            count: issueStats.missingDimensions,
          },
          { id: 'not-in-sitemap', label: 'Not in Sitemap', count: issueStats.notInSitemap },
          { id: 'duplicates', label: 'Duplicates', count: issueStats.duplicates },
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
            <Badge
              className={`ml-2 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tab.count}
            </Badge>
          </button>
        ))}
      </div>

      {/* Bulk Actions Bar */}
      {selectedImages.length > 0 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <Card className="border-2 border-[#00B4D8] shadow-lg">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-[#00B4D8] text-white px-3 py-1">
                    {selectedImages.length} selected
                  </Badge>
                  <Button size="sm" variant="outline" onClick={deselectAll}>
                    Clear Selection
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Apply AI Suggestions
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Selected
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Bulk Apply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Content Based on Active Tab */}
      <div>
        {/* Missing Alt Text Tab */}
        {activeTab === 'missing-alt' && (
          <div>
            {/* AI Options */}
            <Card className="border-0 shadow-md mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-[#00B4D8]" />
                    <h3 className="font-semibold text-[#1E3A5F]">AI Alt Text Generator</h3>
                  </div>
                  <Button size="sm" onClick={selectAll} variant="outline">
                    <Check className="w-4 h-4 mr-2" />
                    Select All on Page
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">AI Style</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Descriptive (Default)</option>
                      <option>Concise</option>
                      <option>Keyword-focused</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#00B4D8] rounded"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Include location (Decatur, TX)</span>
                    </label>
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#00B4D8] rounded"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Include brand name</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Grid/List */}
            <div
              className={
                viewMode === 'gallery'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  : 'space-y-4'
              }
            >
              {mockImages
                .filter((img) => img.issues.includes('missing-alt'))
                .map((image) => (
                  <Card
                    key={image.id}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedImages.includes(image.id)}
                          onChange={() => toggleImageSelection(image.id)}
                          className="w-4 h-4 mt-1 text-[#00B4D8] rounded"
                        />
                        <div className="flex-1">
                          <div
                            className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-3 cursor-pointer"
                            onClick={() => {
                              setSelectedImage(image);
                              setShowImageModal(true);
                            }}
                          >
                            <img
                              src={image.thumbnail}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-black/70 text-white">
                                {formatFileSize(image.size)}
                              </Badge>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium text-sm text-gray-900">{image.filename}</p>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setSelectedImage(image);
                                  setShowImageModal(true);
                                }}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {image.pages.map((page, idx) => (
                                <Badge key={idx} className="bg-blue-100 text-blue-700 text-xs">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {page}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                            <div className="flex items-start space-x-2 mb-2">
                              <Sparkles className="w-4 h-4 text-green-600 mt-0.5" />
                              <p className="text-xs font-medium text-green-800">AI Suggestion:</p>
                            </div>
                            <p className="text-sm text-gray-700">
                              {getAISuggestion(image.filename)}
                            </p>
                          </div>

                          <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Alt Text
                            </label>
                            <input
                              type="text"
                              placeholder="Enter alt text..."
                              defaultValue={getAISuggestion(image.filename)}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                            />
                          </div>

                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Apply Alt Text
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Poor File Names Tab */}
        {activeTab === 'poor-names' && (
          <div className="space-y-4">
            {mockImages
              .filter((img) => img.issues.includes('poor-name'))
              .map((image) => (
                <Card key={image.id} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image.id)}
                        onChange={() => toggleImageSelection(image.id)}
                        className="w-4 h-4 mt-1 text-[#00B4D8] rounded"
                      />
                      <div className="w-32 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={image.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Current Name
                            </label>
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-red-100 text-red-700 font-mono text-xs">
                                {image.filename}
                              </Badge>
                              <AlertCircle className="w-4 h-4 text-red-500" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              <Sparkles className="w-3 h-3 inline mr-1 text-green-600" />
                              AI Suggested Name
                            </label>
                            <input
                              type="text"
                              defaultValue={getAIFilenameSuggestion(image.filename)}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-amber-600 flex items-center">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            This will update all references across {image.pages.length} page
                            {image.pages.length > 1 ? 's' : ''}
                          </p>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          >
                            <Edit3 className="w-4 h-4 mr-2" />
                            Rename File
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Oversized Images Tab */}
        {activeTab === 'oversized' && (
          <div>
            <Card className="border-0 shadow-md mb-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#1E3A5F]">12.4 MB</p>
                    <p className="text-sm text-gray-600">Total potential savings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">+23% faster</p>
                    <p className="text-xs text-gray-600">Estimated page speed improvement</p>
                  </div>
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                    <Zap className="w-4 h-4 mr-2" />
                    Optimize All
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {mockImages
                .filter((img) => img.issues.includes('oversized'))
                .map((image) => {
                  const savings = image.size - image.size * 0.15;
                  const recommended = image.size * 0.15;
                  return (
                    <Card key={image.id} className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            checked={selectedImages.includes(image.id)}
                            onChange={() => toggleImageSelection(image.id)}
                            className="w-4 h-4 mt-1 text-[#00B4D8] rounded"
                          />
                          <div className="w-32 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={image.thumbnail}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm text-gray-900 mb-3">
                              {image.filename}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Current Size</p>
                                <Badge className="bg-red-100 text-red-700">
                                  {formatFileSize(image.size)}
                                </Badge>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Current Dimensions</p>
                                <p className="text-sm font-medium">
                                  {image.dimensions.width} × {image.dimensions.height}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Recommended Size</p>
                                <Badge className="bg-green-100 text-green-700">
                                  {formatFileSize(recommended)}
                                </Badge>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Potential Savings</p>
                                <p className="text-sm font-semibold text-green-600">
                                  {formatFileSize(savings)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                  Quality: 80%
                                </label>
                                <input
                                  type="range"
                                  min="60"
                                  max="100"
                                  defaultValue="80"
                                  className="w-full"
                                />
                              </div>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                              >
                                <Zap className="w-4 h-4 mr-2" />
                                Optimize
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        )}

        {/* Missing Dimensions Tab */}
        {activeTab === 'missing-dimensions' && (
          <div className="space-y-4">
            <Card className="border-0 shadow-md bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">
                      This causes Cumulative Layout Shift (CLS)
                    </p>
                    <p className="text-sm text-amber-800">
                      Images without width and height attributes cause the page to jump as images
                      load, harming user experience and SEO.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {mockImages
              .filter((img) => img.issues.includes('missing-dimensions'))
              .map((image) => (
                <Card key={image.id} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image.id)}
                        onChange={() => toggleImageSelection(image.id)}
                        className="w-4 h-4 mt-1 text-[#00B4D8] rounded"
                      />
                      <div className="w-32 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={image.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900 mb-3">{image.filename}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2">
                              Current Code
                            </label>
                            <code className="block bg-red-50 border border-red-200 rounded px-3 py-2 text-xs font-mono text-red-800">
                              {`<img src="${image.url}" />`}
                            </code>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2">
                              Suggested Fix
                            </label>
                            <code className="block bg-green-50 border border-green-200 rounded px-3 py-2 text-xs font-mono text-green-800">
                              {`<img src="${image.url}" width="${image.dimensions.width}" height="${image.dimensions.height}" />`}
                            </code>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                        >
                          <Check className="w-4 h-4 mr-2" />
                          Add Dimensions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        )}

        {/* Not in Sitemap Tab */}
        {activeTab === 'not-in-sitemap' && (
          <div>
            <Card className="border-0 shadow-md mb-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      These images are missing from your image sitemap
                    </p>
                    <p className="text-xs text-gray-500">
                      Adding them will help search engines discover and index your images
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Sitemap
                    </Button>
                    <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      <Globe className="w-4 h-4 mr-2" />
                      Regenerate Image Sitemap
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockImages.slice(0, 3).map((image) => (
                <Card key={image.id} className="border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image.id)}
                        onChange={() => toggleImageSelection(image.id)}
                        className="w-4 h-4 mt-1 text-[#00B4D8] rounded"
                      />
                      <div className="flex-1">
                        <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <img
                            src={image.thumbnail}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-medium text-sm text-gray-900 mb-2 truncate">
                          {image.filename}
                        </p>
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Add to Sitemap
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Duplicates Tab */}
        {activeTab === 'duplicates' && (
          <div className="space-y-6">
            <Card className="border-0 shadow-md bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-3">
                    <Copy className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-purple-900 mb-1">
                        12 groups of duplicate images found
                      </p>
                      <p className="text-sm text-purple-800">
                        Remove duplicates to save space and avoid duplicate content issues
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Save 3.2 MB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Duplicate Group */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Copy className="w-5 h-5 mr-2 text-purple-600" />
                  Duplicate Group #1
                  <Badge className="ml-3 bg-purple-100 text-purple-700">3 images</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockImages.slice(0, 3).map((image, idx) => (
                    <div
                      key={image.id}
                      className="border-2 border-gray-200 rounded-lg p-3 hover:border-[#00B4D8] transition-colors"
                    >
                      <div className="relative">
                        <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <img
                            src={image.thumbnail}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-2 right-2">
                          <label className="flex items-center space-x-1 bg-white rounded px-2 py-1 shadow">
                            <input
                              type="radio"
                              name="keep-duplicate-1"
                              defaultChecked={idx === 0}
                              className="w-4 h-4 text-green-600"
                            />
                            <span className="text-xs font-medium text-gray-700">Keep</span>
                          </label>
                        </div>
                      </div>
                      <p className="font-medium text-sm text-gray-900 mb-1 truncate">
                        {image.filename}
                      </p>
                      <p className="text-xs text-gray-600 mb-2">{formatFileSize(image.size)}</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <ExternalLink className="w-3 h-3" />
                        <span>
                          Used on {image.pages.length} page{image.pages.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">Save 2.1 MB</span> by removing 2
                    duplicates
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove Duplicates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Image Details Modal */}
      <AnimatePresence>
        {showImageModal && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowImageModal(false)}
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
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Image Details</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowImageModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Large Preview */}
                <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src={selectedImage.thumbnail}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* File Info */}
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-3">File Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Filename:</span>
                        <span className="font-medium">{selectedImage.filename}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Format:</span>
                        <Badge className="bg-gray-100 text-gray-700">
                          {selectedImage.format.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">{formatFileSize(selectedImage.size)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dimensions:</span>
                        <span className="font-medium">
                          {selectedImage.dimensions.width} × {selectedImage.dimensions.height}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Uploaded:</span>
                        <span className="font-medium">{selectedImage.uploadDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Usage */}
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-3">Used On</h3>
                    <div className="space-y-2">
                      {selectedImage.pages.map((page, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <ExternalLink className="w-4 h-4 text-[#00B4D8]" />
                          <a href={page} className="text-[#00B4D8] hover:underline">
                            {page}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Edit Fields */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                    <input
                      type="text"
                      defaultValue={selectedImage.altText || ''}
                      placeholder="Enter alt text..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title Attribute
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedImage.titleAttribute || ''}
                      placeholder="Enter title attribute..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline">
                    <FileImage className="w-4 h-4 mr-2" />
                    Convert to WebP
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Original
                  </Button>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Replace Image
                  </Button>
                  <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Image
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulk Optimization Wizard */}
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
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                      Bulk Image Optimization
                    </h2>
                    <p className="text-gray-600">Step {wizardStep} of 3</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowWizard(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress Bar */}
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
                    <span>Select Options</span>
                    <span>Review Changes</span>
                    <span>Apply</span>
                  </div>
                </div>

                {/* Step 1: Select What to Fix */}
                {wizardStep === 1 && (
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-4">
                      Select what you want to fix:
                    </h3>
                    <div className="space-y-3 mb-6">
                      {[
                        {
                          label: 'Add missing alt text (AI-generated)',
                          count: 47,
                          icon: AlertCircle,
                        },
                        { label: 'Rename poorly named files', count: 32, icon: FileQuestion },
                        { label: 'Compress oversized images', count: 18, icon: HardDrive },
                        { label: 'Add missing dimensions', count: 56, icon: Maximize2 },
                        { label: 'Convert to WebP format', count: 284, icon: FileImage },
                        { label: 'Add to sitemap', count: 23, icon: MapPin },
                      ].map((option, idx) => {
                        const Icon = option.icon;
                        return (
                          <label
                            key={idx}
                            className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-[#00B4D8] cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5 text-[#00B4D8] rounded"
                              defaultChecked={idx < 3}
                            />
                            <Icon className="w-5 h-5 text-[#00B4D8]" />
                            <span className="flex-1 font-medium text-gray-900">{option.label}</span>
                            <Badge className="bg-gray-100 text-gray-700">{option.count}</Badge>
                          </label>
                        );
                      })}
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={() => setWizardStep(2)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Next: Review Changes
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Review Changes */}
                {wizardStep === 2 && (
                  <div>
                    <h3 className="font-semibold text-[#1E3A5F] mb-4">
                      Review changes that will be made:
                    </h3>
                    <Card className="border-0 shadow-md mb-6">
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-3xl font-bold text-[#00B4D8]">153</p>
                            <p className="text-sm text-gray-600">Total Changes</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-green-600">12.4 MB</p>
                            <p className="text-sm text-gray-600">Space Saved</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-purple-600">97</p>
                            <p className="text-sm text-gray-600">Images Affected</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="max-h-96 overflow-y-auto mb-6 space-y-2">
                      {[
                        'Add alt text to IMG_1234.jpg',
                        'Rename Screenshot-2024-01-20.png → digital-marketing-chart.png',
                        'Compress DSC_0089.jpg (2.1 MB → 180 KB)',
                        'Add dimensions to photo.jpeg (1920×1280)',
                        'Convert IMG_5678.jpg to WebP',
                        '...and 148 more changes',
                      ].map((change, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-gray-700">{change}</span>
                        </div>
                      ))}
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
                        Apply Changes
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Apply */}
                {wizardStep === 3 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                      Optimization Complete!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      All selected changes have been applied successfully
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <Card className="border-0 shadow-md">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">153</p>
                          <p className="text-sm text-gray-600">Changes Applied</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-md">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">12.4 MB</p>
                          <p className="text-sm text-gray-600">Space Saved</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 shadow-md">
                        <CardContent className="pt-6">
                          <p className="text-2xl font-bold text-green-600 mb-1">+23%</p>
                          <p className="text-sm text-gray-600">Faster Load</p>
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
    </div>
  );
}
