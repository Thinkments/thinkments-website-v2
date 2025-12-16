import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  Activity,
  ChevronDown,
  RefreshCw,
  Globe,
  Calendar,
  Monitor,
  Smartphone,
  Tablet,
  MapPin,
  Target,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Select } from '../ui/select';
import { Badge } from '../ui/badge';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Mock data for the dashboard
const websites = [
  { id: 'main', name: 'ThinkMents Main Site' },
  { id: 'blog', name: 'ThinkMents Blog' },
  { id: 'client-portal', name: 'Client Portal' }
];

const dateRanges = [
  { value: 'today', label: 'Today' },
  { value: '7days', label: 'Last 7 days' },
  { value: '30days', label: 'Last 30 days' },
  { value: '90days', label: 'Last 90 days' },
  { value: 'custom', label: 'Custom Range' }
];

// Traffic over time data
const trafficData = [
  { date: 'Jan 1', sessions: 850, previousSessions: 720 },
  { date: 'Jan 5', sessions: 920, previousSessions: 780 },
  { date: 'Jan 10', sessions: 1050, previousSessions: 890 },
  { date: 'Jan 15', sessions: 980, previousSessions: 950 },
  { date: 'Jan 20', sessions: 1180, previousSessions: 1020 },
  { date: 'Jan 25', sessions: 1320, previousSessions: 1100 },
  { date: 'Jan 30', sessions: 1450, previousSessions: 1250 }
];

// Traffic sources data
const trafficSources = [
  { name: 'Organic Search', value: 4200, percentage: 42, color: '#10b981' },
  { name: 'Direct', value: 2800, percentage: 28, color: '#3b82f6' },
  { name: 'Referral', value: 1500, percentage: 15, color: '#8b5cf6' },
  { name: 'Social', value: 1000, percentage: 10, color: '#f59e0b' },
  { name: 'Paid', value: 500, percentage: 5, color: '#00B4D8' }
];

// Top pages data with sparkline
const topPages = [
  { 
    title: 'Digital Marketing Services',
    url: '/services/digital-marketing',
    views: 2450,
    uniqueViews: 1890,
    avgTime: '3:24',
    bounceRate: '32%',
    trend: [45, 52, 48, 61, 58, 65, 72]
  },
  {
    title: 'SEO Optimization Guide',
    url: '/blog/seo-optimization-guide',
    views: 1850,
    uniqueViews: 1620,
    avgTime: '5:12',
    bounceRate: '28%',
    trend: [35, 42, 48, 45, 52, 58, 61]
  },
  {
    title: 'Web Design Portfolio',
    url: '/services/web-design',
    views: 1620,
    uniqueViews: 1380,
    avgTime: '2:45',
    bounceRate: '38%',
    trend: [28, 32, 35, 38, 42, 45, 48]
  },
  {
    title: 'About Us',
    url: '/about',
    views: 1420,
    uniqueViews: 1240,
    avgTime: '2:18',
    bounceRate: '42%',
    trend: [32, 28, 35, 38, 42, 45, 48]
  },
  {
    title: 'Contact & Get Quote',
    url: '/quote',
    views: 1280,
    uniqueViews: 1120,
    avgTime: '4:32',
    bounceRate: '25%',
    trend: [25, 28, 32, 35, 38, 42, 45]
  }
];

// Goals/Conversions data
const goals = [
  { name: 'Form Submissions', completions: 145, conversionRate: '4.2%', change: 12.5, target: 200 },
  { name: 'Phone Clicks', completions: 89, conversionRate: '2.6%', change: 8.3, target: 100 },
  { name: 'Email Clicks', completions: 67, conversionRate: '1.9%', change: -3.2, target: 75 },
  { name: 'Chat Initiated', completions: 123, conversionRate: '3.5%', change: 15.8, target: 150 }
];

// Geographic data
const geoData = [
  { city: 'New York, NY', sessions: 1245, percentage: 12.5 },
  { city: 'Los Angeles, CA', sessions: 1089, percentage: 10.9 },
  { city: 'Chicago, IL', sessions: 892, percentage: 8.9 },
  { city: 'Houston, TX', sessions: 756, percentage: 7.6 },
  { city: 'Phoenix, AZ', sessions: 623, percentage: 6.2 }
];

// Device breakdown data
const deviceData = [
  { name: 'Desktop', value: 5500, percentage: 55, color: '#1E3A5F' },
  { name: 'Mobile', value: 3500, percentage: 35, color: '#00B4D8' },
  { name: 'Tablet', value: 1000, percentage: 10, color: '#FF6B35' }
];

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  isInverted?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon, isInverted = false }) => {
  const isPositive = isInverted ? change < 0 : change > 0;
  const isNeutral = change === 0;

  return (
    <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-[#1E3A5F] mb-3">{value}</h3>
          <div className="flex items-center space-x-1">
            {isNeutral ? (
              <Minus className="w-4 h-4 text-gray-400" />
            ) : isPositive ? (
              <ArrowUpRight className="w-4 h-4 text-green-600" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-red-600" />
            )}
            <span className={`text-sm font-semibold ${
              isNeutral ? 'text-gray-600' :
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-500">vs previous period</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          isPositive ? 'bg-green-100' : isNeutral ? 'bg-gray-100' : 'bg-red-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            isPositive ? 'text-green-600' : isNeutral ? 'text-gray-600' : 'text-red-600'
          }`} />
        </div>
      </div>
    </Card>
  );
};

const MiniSparkline: React.FC<{ data: number[] }> = ({ data }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 60;
    const y = 20 - ((val - min) / range) * 20;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="60" height="20" className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke="#00B4D8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function PerformanceDashboard() {
  const [selectedWebsite, setSelectedWebsite] = useState('main');
  const [dateRange, setDateRange] = useState('30days');
  const [compareEnabled, setCompareEnabled] = useState(true);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const handleRefresh = () => {
    // Simulate data refresh
    console.log('Refreshing data...');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Performance Dashboard</h1>
            <p className="text-gray-600">Real-time analytics and insights for your digital properties</p>
          </div>
          
          {/* Real-Time Widget */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Activity className="w-8 h-8 text-green-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-green-600">47</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Controls */}
        <div className="flex items-center space-x-4 flex-wrap gap-3">
          {/* Website Selector */}
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-400" />
            <select
              value={selectedWebsite}
              onChange={(e) => setSelectedWebsite(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
            >
              {websites.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Picker */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
            >
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Compare Toggle */}
          <button
            onClick={() => setCompareEnabled(!compareEnabled)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              compareEnabled
                ? 'bg-[#00B4D8] text-white'
                : 'bg-white border border-gray-300 text-[#1E3A5F]'
            }`}
          >
            {compareEnabled ? '✓' : ''} Compare to previous period
          </button>

          {/* Refresh Button */}
          <Button
            onClick={handleRefresh}
            variant="outline"
            className="ml-auto border-gray-300 text-[#1E3A5F] hover:bg-[#F8F9FA]"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <MetricCard
            title="Total Sessions"
            value="9,847"
            change={15.3}
            icon={Activity}
          />
          <MetricCard
            title="Unique Visitors"
            value="7,234"
            change={12.8}
            icon={Users}
          />
          <MetricCard
            title="Page Views"
            value="24,519"
            change={18.5}
            icon={Eye}
          />
          <MetricCard
            title="Avg. Session Duration"
            value="3:42"
            change={8.2}
            icon={Clock}
          />
          <MetricCard
            title="Bounce Rate"
            value="34.2%"
            change={-5.3}
            icon={TrendingDown}
            isInverted={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Traffic Over Time Chart */}
          <Card className="lg:col-span-2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Traffic Over Time</h2>
                <p className="text-sm text-gray-600">Sessions by date</p>
              </div>
              <Badge className="bg-[#00B4D8] text-white">Last 30 days</Badge>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00B4D8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00B4D8" stopOpacity={0}/>
                  </linearGradient>
                  {compareEnabled && (
                    <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  )}
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  stroke="#00B4D8"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSessions)"
                  name="Current Period"
                />
                {compareEnabled && (
                  <Area
                    type="monotone"
                    dataKey="previousSessions"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fillOpacity={1}
                    fill="url(#colorPrevious)"
                    name="Previous Period"
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Traffic Sources Breakdown */}
          <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Traffic Sources</h2>
              <p className="text-sm text-gray-600">Click to filter dashboard</p>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  onClick={(data) => setSelectedSource(data.name)}
                >
                  {trafficSources.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      opacity={selectedSource === null || selectedSource === entry.name ? 1 : 0.3}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
              {trafficSources.map((source) => (
                <div
                  key={source.name}
                  onClick={() => setSelectedSource(selectedSource === source.name ? null : source.name)}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                    selectedSource === null || selectedSource === source.name
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'opacity-40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm font-medium text-[#1E3A5F]">{source.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#1E3A5F]">{source.value.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{source.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedSource && (
              <button
                onClick={() => setSelectedSource(null)}
                className="w-full mt-4 text-sm text-[#00B4D8] hover:underline"
              >
                Clear filter
              </button>
            )}
          </Card>
        </div>

        {/* Top Pages Table */}
        <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Top Pages</h2>
              <p className="text-sm text-gray-600">Most visited pages on your website</p>
            </div>
            <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white">
              View All <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Page Title</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">URL</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Views</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Unique Views</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Avg Time</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Bounce Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Trend</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium text-[#1E3A5F]">{page.title}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-600 font-mono">{page.url}</div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-[#1E3A5F]">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-600">
                      {page.uniqueViews.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-600">{page.avgTime}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${
                        parseInt(page.bounceRate) < 35 ? 'bg-green-100 text-green-700' :
                        parseInt(page.bounceRate) < 45 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {page.bounceRate}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <MiniSparkline data={page.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Goals and Geographic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Goals/Conversions */}
          <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Goals & Conversions</h2>
              <p className="text-sm text-gray-600">Track your conversion objectives</p>
            </div>

            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-[#00B4D8]" />
                      <span className="font-semibold text-[#1E3A5F]">{goal.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {goal.change > 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm font-semibold ${
                        goal.change > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {goal.change > 0 ? '+' : ''}{goal.change}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-2xl font-bold text-[#1E3A5F]">{goal.completions}</span>
                      <span className="text-sm text-gray-600 ml-2">/ {goal.target} goal</span>
                    </div>
                    <Badge className="bg-[#00B4D8] text-white">
                      {goal.conversionRate}
                    </Badge>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#00B4D8] h-2 rounded-full transition-all"
                      style={{ width: `${(goal.completions / goal.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Geographic Breakdown */}
          <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Geographic Breakdown</h2>
              <p className="text-sm text-gray-600">Top locations by sessions</p>
            </div>

            <div className="space-y-3">
              {geoData.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#1E3A5F] text-white rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#00B4D8]" />
                      <span className="font-medium text-[#1E3A5F]">{location.city}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1E3A5F]">{location.sessions.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{location.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-sm text-[#00B4D8] hover:underline font-medium">
              View all locations
            </button>
          </Card>
        </div>

        {/* Device Breakdown */}
        <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Device Breakdown</h2>
            <p className="text-sm text-gray-600">Sessions by device type</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Device Stats */}
            <div className="flex flex-col justify-center space-y-4">
              {deviceData.map((device, index) => {
                const Icon = device.name === 'Desktop' ? Monitor :
                           device.name === 'Mobile' ? Smartphone : Tablet;
                
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${device.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: device.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-[#1E3A5F]">{device.name}</span>
                        <span className="text-sm font-bold text-[#1E3A5F]">{device.percentage}%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{
                              width: `${device.percentage}%`,
                              backgroundColor: device.color
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 font-medium min-w-[80px] text-right">
                          {device.value.toLocaleString()} sessions
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Real-Time Active Pages */}
        <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Real-Time Activity</h2>
              <p className="text-sm text-gray-600">Current active users by page</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { page: '/services/digital-marketing', users: 12 },
              { page: '/blog/seo-optimization-guide', users: 8 },
              { page: '/quote', users: 7 },
              { page: '/services/web-design', users: 6 },
              { page: '/', users: 14 }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg"
              >
                <span className="text-sm font-medium text-[#1E3A5F] font-mono">{item.page}</span>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-600">{item.users} active</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
