import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  Search,
  Target,
  Clock,
  Eye,
  MousePointerClick,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  Calendar,
  Download,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Maximize2,
  Share2,
  FileText,
  Zap,
  AlertCircle,
  CheckCircle,
  Link as LinkIcon,
  Settings,
  Plus,
  Grid3x3,
  List,
  ArrowRight,
  Activity,
  DollarSign,
  ShoppingCart,
  Mail,
  Phone,
  Sparkles,
  Bell,
  Award,
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  logo?: string;
  visitors: number;
  organic: number;
  conversions: number;
  bounceRate: number;
  trend: 'up' | 'down' | 'flat';
  trendValue: number;
}

interface MetricCard {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'flat';
  sparklineData?: number[];
}

export default function AnalyticsDashboard() {
  const [selectedClient, setSelectedClient] = useState<string>('all');
  const [dateRange, setDateRange] = useState('30');
  const [compareMode, setCompareMode] = useState('previous');
  const [viewMode, setViewMode] = useState<'table' | 'heatmap'>('table');
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data
  const clients: Client[] = [
    {
      id: '1',
      name: 'Acme Corporation',
      logo: 'A',
      visitors: 12450,
      organic: 6780,
      conversions: 89,
      bounceRate: 38.5,
      trend: 'up',
      trendValue: 15.3,
    },
    {
      id: '2',
      name: 'Smith & Sons',
      logo: 'S',
      visitors: 8920,
      organic: 5240,
      conversions: 67,
      bounceRate: 42.1,
      trend: 'up',
      trendValue: 8.7,
    },
    {
      id: '3',
      name: 'Best Dental',
      logo: 'B',
      visitors: 6340,
      organic: 4120,
      conversions: 45,
      bounceRate: 45.8,
      trend: 'down',
      trendValue: -12.4,
    },
  ];

  const allClientsMetrics: MetricCard[] = [
    {
      label: 'Total Website Visitors',
      value: '87,450',
      change: 18.2,
      trend: 'up',
      sparklineData: [45, 52, 48, 65, 72, 80, 87],
    },
    {
      label: 'Total Organic Traffic',
      value: '52,340',
      change: 12.5,
      trend: 'up',
      sparklineData: [28, 32, 35, 40, 45, 48, 52],
    },
    {
      label: 'Total Conversions',
      value: '1,247',
      change: 23.8,
      trend: 'up',
      sparklineData: [180, 195, 210, 225, 240, 260, 280],
    },
    {
      label: 'Average Bounce Rate',
      value: '42.1%',
      change: -3.2,
      trend: 'up',
      sparklineData: [48, 46, 45, 44, 43, 42, 42],
    },
    {
      label: 'Total Page Views',
      value: '234,890',
      change: 15.7,
      trend: 'up',
      sparklineData: [120, 140, 160, 180, 200, 220, 234],
    },
    {
      label: 'Avg Session Duration',
      value: '3m 24s',
      change: 8.3,
      trend: 'up',
      sparklineData: [2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4],
    },
  ];

  const singleClientMetrics: MetricCard[] = [
    {
      label: 'Website Visitors',
      value: '12,450',
      change: 15.3,
      trend: 'up',
    },
    {
      label: 'Organic Traffic',
      value: '6,780',
      change: 18.7,
      trend: 'up',
    },
    {
      label: 'Conversions',
      value: '89',
      change: 23.4,
      trend: 'up',
    },
    {
      label: 'Bounce Rate',
      value: '38.5%',
      change: -2.3,
      trend: 'up',
    },
    {
      label: 'Pages/Session',
      value: '4.2',
      change: 5.6,
      trend: 'up',
    },
    {
      label: 'Avg Duration',
      value: '3m 48s',
      change: 12.1,
      trend: 'up',
    },
  ];

  const trafficSources = [
    {
      source: 'Organic Search',
      sessions: 6780,
      percentage: 54.5,
      bounceRate: 32.1,
      conversions: 48,
      convRate: 0.71,
    },
    {
      source: 'Direct',
      sessions: 2340,
      percentage: 18.8,
      bounceRate: 28.5,
      conversions: 21,
      convRate: 0.9,
    },
    {
      source: 'Referral',
      sessions: 1890,
      percentage: 15.2,
      bounceRate: 42.3,
      conversions: 12,
      convRate: 0.63,
    },
    {
      source: 'Social',
      sessions: 980,
      percentage: 7.9,
      bounceRate: 55.2,
      conversions: 5,
      convRate: 0.51,
    },
    {
      source: 'Paid',
      sessions: 460,
      percentage: 3.7,
      bounceRate: 38.7,
      conversions: 3,
      convRate: 0.65,
    },
  ];

  const topKeywords = [
    {
      keyword: 'plumbing services dallas',
      position: 3,
      sessions: 890,
      clicks: 567,
      impressions: 12450,
      ctr: 4.6,
    },
    {
      keyword: 'emergency plumber near me',
      position: 5,
      sessions: 678,
      clicks: 445,
      impressions: 8920,
      ctr: 5.0,
    },
    {
      keyword: 'water heater repair',
      position: 2,
      sessions: 534,
      clicks: 401,
      impressions: 6780,
      ctr: 5.9,
    },
    {
      keyword: 'drain cleaning service',
      position: 7,
      sessions: 423,
      clicks: 289,
      impressions: 5430,
      ctr: 5.3,
    },
  ];

  const topPages = [
    {
      url: '/services',
      pageViews: 4567,
      uniqueViews: 3210,
      avgTime: '4m 23s',
      bounceRate: 32.1,
      exitRate: 24.5,
    },
    {
      url: '/about',
      pageViews: 3456,
      uniqueViews: 2890,
      avgTime: '2m 45s',
      bounceRate: 45.2,
      exitRate: 38.7,
    },
    {
      url: '/contact',
      pageViews: 2890,
      uniqueViews: 2340,
      avgTime: '1m 56s',
      bounceRate: 28.3,
      exitRate: 15.2,
    },
    {
      url: '/blog/emergency-plumbing-tips',
      pageViews: 2340,
      uniqueViews: 1980,
      avgTime: '5m 12s',
      bounceRate: 38.5,
      exitRate: 42.1,
    },
  ];

  const insights = [
    {
      type: 'positive',
      title: 'Strong Organic Growth',
      description: 'Organic traffic increased 18% driven by improved rankings for key terms',
      action: 'View Keywords',
    },
    {
      type: 'warning',
      title: 'Mobile Bounce Rate High',
      description: 'Mobile users bouncing 15% more than desktop - consider UX improvements',
      action: 'Investigate',
    },
    {
      type: 'opportunity',
      title: 'Keyword Opportunity',
      description: '"emergency plumber" is ranking position 5 - opportunity to reach page 1',
      action: 'View Details',
    },
  ];

  const getBounceRateColor = (rate: number) => {
    if (rate < 40) return 'text-green-600 bg-green-100';
    if (rate < 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'flat') => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const renderSparkline = (data: number[] = []) => {
    if (!data.length) return null;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    return (
      <svg width="100" height="30" className="ml-auto">
        <polyline
          points={data
            .map((val, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 30 - ((val - min) / range) * 30;
              return `${x},${y}`;
            })
            .join(' ')}
          fill="none"
          stroke="#00B4D8"
          strokeWidth="2"
        />
      </svg>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track performance across all clients</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <LinkIcon className="w-4 h-4 mr-2" />
              Connect New Account
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Dashboard
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">Client</label>
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All Clients</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">Compare To</label>
                <select
                  value={compareMode}
                  onChange={(e) => setCompareMode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="previous">Previous Period</option>
                  <option value="year">Same Period Last Year</option>
                  <option value="none">No Comparison</option>
                </select>
              </div>

              <div className="pt-5">
                <Button size="sm" className="bg-[#00B4D8] text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Clients View */}
      {selectedClient === 'all' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allClientsMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-xs text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-2xl font-bold text-[#1E3A5F] mb-2">{metric.value}</p>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex items-center text-xs ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {getTrendIcon(metric.trend)}
                      <span className="ml-1">{Math.abs(metric.change)}%</span>
                    </div>
                    {renderSparkline(metric.sparklineData)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Insights Panel */}
          <Card className="border-0 shadow-md border-l-4 border-[#00B4D8]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#00B4D8]" />
                AI Insights & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {insights.map((insight, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    {insight.type === 'positive' && (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    )}
                    {insight.type === 'warning' && (
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    )}
                    {insight.type === 'opportunity' && (
                      <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{insight.title}</p>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      {insight.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1E3A5F]">Client Performance</h2>
            <div className="flex items-center space-x-2">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 text-sm ${
                    viewMode === 'table' ? 'bg-[#00B4D8] text-white' : 'bg-white text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('heatmap')}
                  className={`px-3 py-1.5 text-sm ${
                    viewMode === 'heatmap' ? 'bg-[#00B4D8] text-white' : 'bg-white text-gray-600'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Client Performance Table */}
          {viewMode === 'table' && (
            <Card className="border-0 shadow-md">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Visitors
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Organic
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Conversions
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Bounce Rate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Trend
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-50 cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{client.logo}</span>
                              </div>
                              <span className="font-medium text-gray-900">{client.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-gray-900">
                              {client.visitors.toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-gray-900">{client.organic.toLocaleString()}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-gray-900">{client.conversions}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getBounceRateColor(client.bounceRate)}>
                              {client.bounceRate}%
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              {getTrendIcon(client.trend)}
                              <span
                                className={
                                  client.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }
                              >
                                {Math.abs(client.trendValue)}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedClient(client.id)}
                              >
                                View Details
                              </Button>
                              <Button size="sm" variant="outline">
                                Report
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Top Performers & Needs Attention */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {clients.slice(0, 3).map((client, idx) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold text-green-600">#{idx + 1}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{client.name}</p>
                          <p className="text-sm text-gray-600">Best Traffic Growth</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+{client.trendValue}%</p>
                        <p className="text-sm text-gray-600">
                          {client.visitors.toLocaleString()} visitors
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Needs Attention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">Best Dental</p>
                        <p className="text-sm text-orange-700">Traffic dropped 12% this month</p>
                      </div>
                      <Button size="sm">Investigate</Button>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">Mobile Performance</p>
                        <p className="text-sm text-yellow-700">
                          3 clients with high mobile bounce rate
                        </p>
                      </div>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Single Client View */}
      {selectedClient !== 'all' && (
        <div className="space-y-6">
          {/* Client Header */}
          <Card className="border-0 shadow-md bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] text-white">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {clients.find((c) => c.id === selectedClient)?.logo}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {clients.find((c) => c.id === selectedClient)?.name}
                    </h2>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white text-sm flex items-center"
                    >
                      www.example.com
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                    <p className="text-blue-100 text-sm mt-1">Last synced: 2 minutes ago</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white/10"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Data
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white/10"
                  >
                    <Maximize2 className="w-4 h-4 mr-2" />
                    Full Screen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Navigation */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'sources', label: 'Traffic Sources', icon: Globe },
              { id: 'organic', label: 'Organic Search', icon: Search },
              { id: 'audience', label: 'Audience', icon: Users },
              { id: 'behavior', label: 'Behavior', icon: Activity },
              { id: 'conversions', label: 'Conversions', icon: Target },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {singleClientMetrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="pt-6">
                      <p className="text-xs text-gray-600 mb-2">{metric.label}</p>
                      <p className="text-2xl font-bold text-[#1E3A5F] mb-2">{metric.value}</p>
                      <div
                        className={`flex items-center text-xs ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {getTrendIcon(metric.trend)}
                        <span className="ml-1">{Math.abs(metric.change)}%</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Main Traffic Chart */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Traffic Overview</CardTitle>
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                        <option>All Traffic</option>
                        <option>Organic Only</option>
                        <option>Direct Only</option>
                        <option>Referral Only</option>
                      </select>
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                      <p className="text-gray-500">Interactive traffic chart would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Traffic Sources Section */}
          {activeSection === 'sources' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Pie chart visualization</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Referrers */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Referrers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['google.com', 'facebook.com', 'reddit.com'].map((referrer, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm font-medium text-gray-900">{referrer}</span>
                          <span className="text-sm text-gray-600">
                            {(1234 - idx * 200).toLocaleString()} sessions
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Source Details Table */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Source Details</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Source
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Sessions
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            % of Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Bounce Rate
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Conversions
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Conv Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {trafficSources.map((source, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                              {source.source}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {source.sessions.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {source.percentage}%
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge className={getBounceRateColor(source.bounceRate)}>
                                {source.bounceRate}%
                              </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {source.conversions}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {source.convRate}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Organic Search Section */}
          {activeSection === 'organic' && (
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Organic Traffic Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Organic traffic chart with algorithm updates</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Keyword Performance</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Keyword
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Position
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Sessions
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Clicks
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Impressions
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            CTR
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {topKeywords.map((keyword, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">
                              {keyword.keyword}
                            </td>
                            <td className="px-6 py-4">
                              <Badge className="bg-blue-100 text-blue-700">
                                #{keyword.position}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-gray-900">{keyword.sessions}</td>
                            <td className="px-6 py-4 text-gray-900">{keyword.clicks}</td>
                            <td className="px-6 py-4 text-gray-900">
                              {keyword.impressions.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-gray-900">{keyword.ctr}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Audience Section */}
          {activeSection === 'audience' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Devices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { device: 'Desktop', percentage: 58, icon: Monitor },
                        { device: 'Mobile', percentage: 35, icon: Smartphone },
                        { device: 'Tablet', percentage: 7, icon: Tablet },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-900">{item.device}</span>
                          </div>
                          <span className="text-sm text-gray-600">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Geography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['United States', 'Canada', 'United Kingdom'].map((country, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">{country}</span>
                          <span className="text-sm text-gray-600">
                            {(5000 - idx * 1000).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">New vs Returning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">New Visitors</span>
                        <span className="text-sm text-gray-600">62%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          Returning Visitors
                        </span>
                        <span className="text-sm text-gray-600">38%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Behavior Section */}
          {activeSection === 'behavior' && (
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Top Pages</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Page URL
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Page Views
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Unique Views
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Avg Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Bounce Rate
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                            Exit Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {topPages.map((page, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{page.url}</td>
                            <td className="px-6 py-4 text-gray-900">
                              {page.pageViews.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                              {page.uniqueViews.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-gray-900">{page.avgTime}</td>
                            <td className="px-6 py-4">
                              <Badge className={getBounceRateColor(page.bounceRate)}>
                                {page.bounceRate}%
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-gray-900">{page.exitRate}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Conversions Section */}
          {activeSection === 'conversions' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-8 h-8 text-green-600" />
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Total Conversions</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">89</p>
                    <p className="text-xs text-green-600 mt-1">+23.4% from last period</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Phone className="w-8 h-8 text-blue-600" />
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Phone Calls</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">34</p>
                    <p className="text-xs text-green-600 mt-1">+12.1% from last period</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Mail className="w-8 h-8 text-purple-600" />
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Form Submissions</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">55</p>
                    <p className="text-xs text-green-600 mt-1">+31.8% from last period</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Conversion Funnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Visual conversion funnel diagram</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Quick Actions */}
          <Card className="border-0 shadow-md bg-blue-50 border-l-4 border-[#00B4D8]">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Export & Share</h3>
                  <p className="text-sm text-gray-600">Download or share this dashboard</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    PowerPoint
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Link
                  </Button>
                  <Button className="bg-[#00B4D8] text-white" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
