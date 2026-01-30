import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Download,
  Send,
  Eye,
  Plus,
  Edit2,
  Trash2,
  Copy,
  Upload,
  Image as ImageIcon,
  CheckSquare,
  Square,
  Palette,
  Clock,
  Play,
  Pause,
  RotateCcw,
  FileDown,
  Mail,
  Users,
  TrendingUp,
  Search as SearchIcon,
  Activity,
  Target,
  MapPin,
  Share2,
  Check,
  X,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';

// Mock data
const clients = [
  { id: '1', name: 'Acme Corporation' },
  { id: '2', name: 'TechStart Inc' },
  { id: '3', name: 'Retail Solutions LLC' },
  { id: '4', name: 'Digital Innovations Co' },
];

const reportTypes = [
  {
    id: 'monthly',
    name: 'Monthly Performance Report',
    description: 'Comprehensive monthly overview',
  },
  { id: 'seo', name: 'SEO Report', description: 'Search engine optimization metrics' },
  {
    id: 'gbp',
    name: 'Google Business Profile Report',
    description: 'GBP performance and insights',
  },
  { id: 'custom', name: 'Custom Report', description: 'Build your own custom report' },
];

const metricsData = {
  traffic: [
    { id: 'sessions', label: 'Total Sessions', description: 'Total number of sessions' },
    { id: 'visitors', label: 'Unique Visitors', description: 'Unique users visiting the site' },
    { id: 'pageviews', label: 'Page Views', description: 'Total pages viewed' },
    { id: 'bounce', label: 'Bounce Rate', description: 'Percentage of single-page sessions' },
    { id: 'duration', label: 'Session Duration', description: 'Average time on site' },
  ],
  seo: [
    { id: 'organic', label: 'Organic Traffic', description: 'Traffic from search engines' },
    { id: 'rankings', label: 'Keyword Rankings', description: 'Current keyword positions' },
    { id: 'backlinks', label: 'Backlinks', description: 'Inbound links to your site' },
    { id: 'authority', label: 'Domain Authority', description: 'Overall site authority score' },
    { id: 'indexed', label: 'Indexed Pages', description: 'Pages indexed by search engines' },
  ],
  conversions: [
    { id: 'forms', label: 'Form Submissions', description: 'Contact form submissions' },
    { id: 'calls', label: 'Phone Calls', description: 'Phone call conversions' },
    { id: 'goals', label: 'Goal Completions', description: 'All goal completions' },
    { id: 'rate', label: 'Conversion Rate', description: 'Overall conversion percentage' },
  ],
  gbp: [
    { id: 'profile-views', label: 'Profile Views', description: 'GBP profile views' },
    { id: 'search-appearances', label: 'Search Appearances', description: 'Times shown in search' },
    { id: 'directions', label: 'Direction Requests', description: 'Direction clicks' },
    { id: 'gbp-calls', label: 'Phone Calls from GBP', description: 'Calls from GBP listing' },
    { id: 'reviews', label: 'Review Count & Rating', description: 'Reviews and average rating' },
  ],
  social: [
    { id: 'followers', label: 'Followers Growth', description: 'New followers gained' },
    { id: 'engagement', label: 'Post Engagement', description: 'Likes, comments, shares' },
    { id: 'reach', label: 'Reach/Impressions', description: 'Post reach and impressions' },
  ],
};

const scheduledReports = [
  {
    id: '1',
    name: 'Monthly Performance - Acme',
    client: 'Acme Corporation',
    frequency: 'Monthly',
    nextSend: '2025-01-15',
    recipients: 'john@acme.com, sarah@acme.com',
    status: 'active',
  },
  {
    id: '2',
    name: 'Weekly SEO Update - TechStart',
    client: 'TechStart Inc',
    frequency: 'Weekly',
    nextSend: '2025-01-08',
    recipients: 'mike@techstart.com',
    status: 'active',
  },
  {
    id: '3',
    name: 'GBP Report - Retail Solutions',
    client: 'Retail Solutions LLC',
    frequency: 'Monthly',
    nextSend: '2025-01-20',
    recipients: 'contact@retail.com',
    status: 'paused',
  },
];

const reportHistory = [
  {
    id: '1',
    name: 'December Performance Report',
    client: 'Acme Corporation',
    date: '2024-12-31',
    sentTo: 'john@acme.com',
    size: '2.4 MB',
  },
  {
    id: '2',
    name: 'Q4 SEO Report',
    client: 'TechStart Inc',
    date: '2024-12-28',
    sentTo: 'mike@techstart.com',
    size: '1.8 MB',
  },
  {
    id: '3',
    name: 'November GBP Report',
    client: 'Retail Solutions LLC',
    date: '2024-11-30',
    sentTo: 'contact@retail.com',
    size: '3.1 MB',
  },
  {
    id: '4',
    name: 'November Performance Report',
    client: 'Digital Innovations Co',
    date: '2024-11-30',
    sentTo: 'info@digitalinnovations.com',
    size: '2.7 MB',
  },
];

const templates = [
  { id: '1', name: 'Standard Monthly Report', metrics: 24, lastUsed: '2 days ago' },
  { id: '2', name: 'SEO-Focused Report', metrics: 18, lastUsed: '1 week ago' },
  { id: '3', name: 'Executive Summary', metrics: 12, lastUsed: '3 weeks ago' },
];

const colorSchemes = [
  { id: 'blue', name: 'Professional Blue', primary: '#1E3A5F', accent: '#00B4D8' },
  { id: 'green', name: 'Growth Green', primary: '#065f46', accent: '#10b981' },
  { id: 'purple', name: 'Creative Purple', primary: '#5b21b6', accent: '#a855f7' },
  { id: 'orange', name: 'Energetic Orange', primary: '#9a3412', accent: '#f97316' },
  { id: 'custom', name: 'Custom Colors', primary: '#000000', accent: '#000000' },
];

export default function ReportGenerator() {
  const [activeView, setActiveView] = useState<'builder' | 'scheduled' | 'history' | 'templates'>(
    'builder',
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClient, setSelectedClient] = useState('');
  const [reportTitle, setReportTitle] = useState('');
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [colorScheme, setColorScheme] = useState('blue');
  const [includeCover, setIncludeCover] = useState(true);
  const [includeExecutive, setIncludeExecutive] = useState(true);
  const [headerText, setHeaderText] = useState('Performance Report');
  const [footerText, setFooterText] = useState('Confidential - For Client Use Only');

  const steps = [
    { number: 1, title: 'Client & Basics', icon: Users },
    { number: 2, title: 'Select Metrics', icon: CheckSquare },
    { number: 3, title: 'Customize Appearance', icon: Palette },
    { number: 4, title: 'Preview & Export', icon: Eye },
  ];

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics((prev) =>
      prev.includes(metricId) ? prev.filter((id) => id !== metricId) : [...prev, metricId],
    );
  };

  const selectAllInSection = (section: keyof typeof metricsData) => {
    const sectionMetrics = metricsData[section].map((m) => m.id);
    const allSelected = sectionMetrics.every((id) => selectedMetrics.includes(id));

    if (allSelected) {
      setSelectedMetrics((prev) => prev.filter((id) => !sectionMetrics.includes(id)));
    } else {
      setSelectedMetrics((prev) => [...new Set([...prev, ...sectionMetrics])]);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Report Generator</h1>
            <p className="text-gray-600">
              Create professional client reports with custom metrics and branding
            </p>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center space-x-2">
          {[
            { id: 'builder', label: 'Report Builder', icon: FileText },
            { id: 'scheduled', label: 'Scheduled Reports', icon: Clock },
            { id: 'history', label: 'Report History', icon: RotateCcw },
            { id: 'templates', label: 'Templates', icon: Copy },
          ].map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeView === view.id
                    ? 'bg-[#00B4D8] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{view.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Report Builder View */}
        {activeView === 'builder' && (
          <div className="max-w-6xl mx-auto">
            {/* Progress Steps */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;

                  return (
                    <React.Fragment key={step.number}>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            isCompleted
                              ? 'bg-green-500 text-white'
                              : isActive
                                ? 'bg-[#00B4D8] text-white'
                                : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-6 h-6" />
                          ) : (
                            <Icon className="w-6 h-6" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Step {step.number}</div>
                          <div
                            className={`font-semibold ${
                              isActive ? 'text-[#1E3A5F]' : 'text-gray-600'
                            }`}
                          >
                            {step.title}
                          </div>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-1 mx-4 rounded ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </Card>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {/* Step 1: Client & Basics */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                      Client & Report Basics
                    </h2>

                    <div className="space-y-6">
                      {/* Client Selector */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Select Client *
                        </label>
                        <select
                          value={selectedClient}
                          onChange={(e) => setSelectedClient(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                        >
                          <option value="">Choose a client...</option>
                          {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Report Title */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Report Title *
                        </label>
                        <Input
                          value={reportTitle}
                          onChange={(e) => setReportTitle(e.target.value)}
                          placeholder="e.g., December 2024 Performance Report"
                          className="w-full"
                        />
                      </div>

                      {/* Date Range */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Start Date *
                          </label>
                          <Input
                            type="date"
                            value={dateRange.start}
                            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            End Date *
                          </label>
                          <Input
                            type="date"
                            value={dateRange.end}
                            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Report Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Report Type *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {reportTypes.map((type) => (
                            <button
                              key={type.id}
                              onClick={() => setReportType(type.id)}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                reportType === type.id
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-[#1E3A5F]">{type.name}</span>
                                {reportType === type.id && (
                                  <Check className="w-5 h-5 text-[#00B4D8]" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{type.description}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Select Metrics */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-[#1E3A5F]">
                        Select Metrics to Include
                      </h2>
                      <Badge className="bg-[#00B4D8] text-white">
                        {selectedMetrics.length} metrics selected
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      {/* Traffic Metrics */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Activity className="w-5 h-5 text-[#00B4D8]" />
                            <h3 className="font-bold text-[#1E3A5F]">Traffic Metrics</h3>
                          </div>
                          <button
                            onClick={() => selectAllInSection('traffic')}
                            className="text-sm text-[#00B4D8] hover:underline font-medium"
                          >
                            {metricsData.traffic.every((m) => selectedMetrics.includes(m.id))
                              ? 'Deselect All'
                              : 'Select All'}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {metricsData.traffic.map((metric) => (
                            <div
                              key={metric.id}
                              onClick={() => toggleMetric(metric.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedMetrics.includes(metric.id)
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="mt-0.5">
                                  {selectedMetrics.includes(metric.id) ? (
                                    <CheckSquare className="w-5 h-5 text-[#00B4D8]" />
                                  ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-[#1E3A5F] text-sm">
                                    {metric.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SEO Metrics */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <TrendingUp className="w-5 h-5 text-[#00B4D8]" />
                            <h3 className="font-bold text-[#1E3A5F]">SEO Metrics</h3>
                          </div>
                          <button
                            onClick={() => selectAllInSection('seo')}
                            className="text-sm text-[#00B4D8] hover:underline font-medium"
                          >
                            {metricsData.seo.every((m) => selectedMetrics.includes(m.id))
                              ? 'Deselect All'
                              : 'Select All'}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {metricsData.seo.map((metric) => (
                            <div
                              key={metric.id}
                              onClick={() => toggleMetric(metric.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedMetrics.includes(metric.id)
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="mt-0.5">
                                  {selectedMetrics.includes(metric.id) ? (
                                    <CheckSquare className="w-5 h-5 text-[#00B4D8]" />
                                  ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-[#1E3A5F] text-sm">
                                    {metric.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Conversions */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5 text-[#00B4D8]" />
                            <h3 className="font-bold text-[#1E3A5F]">Conversions</h3>
                          </div>
                          <button
                            onClick={() => selectAllInSection('conversions')}
                            className="text-sm text-[#00B4D8] hover:underline font-medium"
                          >
                            {metricsData.conversions.every((m) => selectedMetrics.includes(m.id))
                              ? 'Deselect All'
                              : 'Select All'}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {metricsData.conversions.map((metric) => (
                            <div
                              key={metric.id}
                              onClick={() => toggleMetric(metric.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedMetrics.includes(metric.id)
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="mt-0.5">
                                  {selectedMetrics.includes(metric.id) ? (
                                    <CheckSquare className="w-5 h-5 text-[#00B4D8]" />
                                  ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-[#1E3A5F] text-sm">
                                    {metric.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Google Business Profile */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-[#00B4D8]" />
                            <h3 className="font-bold text-[#1E3A5F]">Google Business Profile</h3>
                          </div>
                          <button
                            onClick={() => selectAllInSection('gbp')}
                            className="text-sm text-[#00B4D8] hover:underline font-medium"
                          >
                            {metricsData.gbp.every((m) => selectedMetrics.includes(m.id))
                              ? 'Deselect All'
                              : 'Select All'}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {metricsData.gbp.map((metric) => (
                            <div
                              key={metric.id}
                              onClick={() => toggleMetric(metric.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedMetrics.includes(metric.id)
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="mt-0.5">
                                  {selectedMetrics.includes(metric.id) ? (
                                    <CheckSquare className="w-5 h-5 text-[#00B4D8]" />
                                  ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-[#1E3A5F] text-sm">
                                    {metric.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Share2 className="w-5 h-5 text-[#00B4D8]" />
                            <h3 className="font-bold text-[#1E3A5F]">Social Media</h3>
                          </div>
                          <button
                            onClick={() => selectAllInSection('social')}
                            className="text-sm text-[#00B4D8] hover:underline font-medium"
                          >
                            {metricsData.social.every((m) => selectedMetrics.includes(m.id))
                              ? 'Deselect All'
                              : 'Select All'}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {metricsData.social.map((metric) => (
                            <div
                              key={metric.id}
                              onClick={() => toggleMetric(metric.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedMetrics.includes(metric.id)
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="mt-0.5">
                                  {selectedMetrics.includes(metric.id) ? (
                                    <CheckSquare className="w-5 h-5 text-[#00B4D8]" />
                                  ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-[#1E3A5F] text-sm">
                                    {metric.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Customize Appearance */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Customize Appearance</h2>

                    <div className="space-y-6">
                      {/* Logo Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Logo (White-Label)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm font-medium text-gray-700">Click to upload logo</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                        </div>
                      </div>

                      {/* Color Scheme */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Color Scheme
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {colorSchemes.map((scheme) => (
                            <button
                              key={scheme.id}
                              onClick={() => setColorScheme(scheme.id)}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                colorScheme === scheme.id
                                  ? 'border-[#00B4D8] bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-[#1E3A5F]">{scheme.name}</span>
                                {colorScheme === scheme.id && (
                                  <Check className="w-5 h-5 text-[#00B4D8]" />
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-8 h-8 rounded"
                                  style={{ backgroundColor: scheme.primary }}
                                />
                                <div
                                  className="w-8 h-8 rounded"
                                  style={{ backgroundColor: scheme.accent }}
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Header Text */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Header Text
                        </label>
                        <Input
                          value={headerText}
                          onChange={(e) => setHeaderText(e.target.value)}
                          placeholder="Report header text"
                        />
                      </div>

                      {/* Footer Text */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Footer Text
                        </label>
                        <Input
                          value={footerText}
                          onChange={(e) => setFooterText(e.target.value)}
                          placeholder="Report footer text"
                        />
                      </div>

                      {/* Toggles */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold text-[#1E3A5F]">Include Cover Page</div>
                            <div className="text-sm text-gray-600">
                              Add a professional cover page
                            </div>
                          </div>
                          <button
                            onClick={() => setIncludeCover(!includeCover)}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              includeCover ? 'bg-[#00B4D8]' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                includeCover ? 'translate-x-7' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold text-[#1E3A5F]">
                              Include Executive Summary
                            </div>
                            <div className="text-sm text-gray-600">
                              Add a summary of key insights
                            </div>
                          </div>
                          <button
                            onClick={() => setIncludeExecutive(!includeExecutive)}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              includeExecutive ? 'bg-[#00B4D8]' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                includeExecutive ? 'translate-x-7' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 4: Preview & Export */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Preview */}
                    <div className="col-span-2">
                      <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xl font-bold text-[#1E3A5F]">Report Preview</h2>
                          <Badge className="bg-gray-100 text-gray-700">Live Preview</Badge>
                        </div>

                        {/* Mock Report Preview */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                          <div className="h-[600px] overflow-y-auto p-8 space-y-6">
                            {/* Cover Page */}
                            {includeCover && (
                              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg p-12 text-white text-center">
                                <div className="text-4xl font-bold mb-4">
                                  {reportTitle || 'Report Title'}
                                </div>
                                <div className="text-xl mb-2">
                                  {clients.find((c) => c.id === selectedClient)?.name ||
                                    'Client Name'}
                                </div>
                                <div className="text-sm opacity-80">
                                  {dateRange.start && dateRange.end
                                    ? `${dateRange.start} to ${dateRange.end}`
                                    : 'Date Range'}
                                </div>
                              </div>
                            )}

                            {/* Executive Summary */}
                            {includeExecutive && (
                              <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                                  Executive Summary
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                  This report provides a comprehensive overview of your digital
                                  marketing performance for the selected period. Key highlights
                                  include significant growth in organic traffic, improved conversion
                                  rates, and strong engagement across social media channels.
                                </p>
                              </div>
                            )}

                            {/* Sample Metrics */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                                Key Performance Indicators
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                {selectedMetrics.slice(0, 4).map((metricId, index) => {
                                  const allMetrics = [
                                    ...metricsData.traffic,
                                    ...metricsData.seo,
                                    ...metricsData.conversions,
                                    ...metricsData.gbp,
                                    ...metricsData.social,
                                  ];
                                  const metric = allMetrics.find((m) => m.id === metricId);
                                  return (
                                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                      <div className="text-sm text-gray-600">{metric?.label}</div>
                                      <div className="text-2xl font-bold text-[#1E3A5F] mt-1">
                                        {Math.floor(Math.random() * 10000).toLocaleString()}
                                      </div>
                                      <div className="text-xs text-green-600 mt-1">
                                        +12.5% vs previous
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                                Traffic Trends
                              </h3>
                              <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                  <Activity className="w-12 h-12 mx-auto mb-2" />
                                  <div className="text-sm">Chart will appear here</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Add Custom Notes */}
                        <div className="mt-4">
                          <Button
                            variant="outline"
                            className="w-full border-[#00B4D8] text-[#00B4D8]"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Custom Notes Section
                          </Button>
                        </div>
                      </Card>
                    </div>

                    {/* Export Options */}
                    <div className="space-y-4">
                      <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-[#1E3A5F] mb-4">Export Report</h3>

                        <div className="space-y-3">
                          <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white justify-start">
                            <FileDown className="w-4 h-4 mr-3" />
                            Export as PDF
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full border-[#1E3A5F] text-[#1E3A5F] justify-start"
                          >
                            <FileText className="w-4 h-4 mr-3" />
                            Export to Google Doc
                          </Button>

                          <div className="border-t border-gray-200 my-4" />

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Send to Client
                            </label>
                            <Input type="email" placeholder="client@example.com" className="mb-2" />
                            <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a24] text-white justify-start">
                              <Mail className="w-4 h-4 mr-3" />
                              Send Report via Email
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-[#1E3A5F] mb-4">Save as Template</h3>
                        <Input placeholder="Template name" className="mb-3" />
                        <Button variant="outline" className="w-full border-gray-300">
                          <Copy className="w-4 h-4 mr-2" />
                          Save Template
                        </Button>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-gray-300"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-gray-600">
                Step {currentStep} of {steps.length}
              </div>

              <Button
                onClick={handleNext}
                disabled={currentStep === 4}
                className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Scheduled Reports View */}
        {activeView === 'scheduled' && (
          <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Scheduled Reports</h2>
                <p className="text-sm text-gray-600">Automated report generation and delivery</p>
              </div>
              <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Schedule
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Report Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Client
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Frequency
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Next Send
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Recipients
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduledReports.map((report) => (
                    <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-[#1E3A5F]">{report.name}</td>
                      <td className="py-4 px-4 text-gray-600">{report.client}</td>
                      <td className="py-4 px-4">
                        <Badge className="bg-blue-100 text-blue-700">{report.frequency}</Badge>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{report.nextSend}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{report.recipients}</td>
                      <td className="py-4 px-4">
                        {report.status === 'active' ? (
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-700">Paused</Badge>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            {report.status === 'active' ? (
                              <Pause className="w-4 h-4 text-gray-600" />
                            ) : (
                              <Play className="w-4 h-4 text-green-600" />
                            )}
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            <Edit2 className="w-4 h-4 text-[#00B4D8]" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Report History View */}
        {activeView === 'history' && (
          <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Report History</h2>
                <p className="text-sm text-gray-600">Previously generated reports</p>
              </div>
              <div className="relative w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Report Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Client
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Date Generated
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Sent To
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                      Size
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reportHistory.map((report) => (
                    <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-[#1E3A5F]">{report.name}</td>
                      <td className="py-4 px-4 text-gray-600">{report.client}</td>
                      <td className="py-4 px-4 text-gray-600">{report.date}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{report.sentTo}</td>
                      <td className="py-4 px-4 text-sm text-gray-500">{report.size}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4 text-[#00B4D8]" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Resend"
                          >
                            <Send className="w-4 h-4 text-green-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Duplicate"
                          >
                            <Copy className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Templates View */}
        {activeView === 'templates' && (
          <div>
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Report Templates</h2>
                  <p className="text-sm text-gray-600">Reusable report configurations</p>
                </div>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Template
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-gray-100 text-gray-700">{template.metrics} metrics</Badge>
                  </div>

                  <h3 className="font-bold text-[#1E3A5F] mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">Last used: {template.lastUsed}</p>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Copy className="w-3 h-3 mr-2" />
                      Use
                    </Button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
