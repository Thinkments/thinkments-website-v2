import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  Search,
  Plus,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  RefreshCw,
  Monitor,
  Smartphone,
  MapPin,
  Calendar,
  ArrowUp,
  ArrowDown,
  Minus,
  AlertCircle,
  Bell,
  Edit2,
  Trash2,
  X,
  Tag,
  BarChart3,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data
const websites = [
  { id: '1', name: 'ThinkMents Main Site', url: 'thinkments.com' },
  { id: '2', name: 'Acme Corporation', url: 'acmecorp.com' },
  { id: '3', name: 'TechStart Inc', url: 'techstart.io' },
];

const locations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'National (USA)',
];

const historicalData = [
  { date: 'Jan 1', position: 15 },
  { date: 'Jan 8', position: 12 },
  { date: 'Jan 15', position: 10 },
  { date: 'Jan 22', position: 8 },
  { date: 'Jan 29', position: 7 },
  { date: 'Feb 5', position: 5 },
  { date: 'Today', position: 4 },
];

const keywordsData = [
  {
    id: '1',
    keyword: 'digital marketing agency',
    currentPosition: 3,
    previousPosition: 5,
    change: 2,
    searchVolume: 8100,
    difficulty: 'hard',
    rankingUrl: '/services/digital-marketing',
    lastChecked: '2025-01-05 09:30',
    trend: [8, 7, 6, 5, 4, 4, 3],
  },
  {
    id: '2',
    keyword: 'seo services',
    currentPosition: 7,
    previousPosition: 7,
    change: 0,
    searchVolume: 12000,
    difficulty: 'hard',
    rankingUrl: '/services/seo',
    lastChecked: '2025-01-05 09:30',
    trend: [9, 8, 8, 7, 7, 7, 7],
  },
  {
    id: '3',
    keyword: 'web design company',
    currentPosition: 12,
    previousPosition: 10,
    change: -2,
    searchVolume: 5400,
    difficulty: 'medium',
    rankingUrl: '/services/web-design',
    lastChecked: '2025-01-05 09:30',
    trend: [8, 9, 10, 10, 11, 11, 12],
  },
  {
    id: '4',
    keyword: 'google business profile optimization',
    currentPosition: 2,
    previousPosition: 3,
    change: 1,
    searchVolume: 1900,
    difficulty: 'medium',
    rankingUrl: '/services/google-business',
    lastChecked: '2025-01-05 09:30',
    trend: [5, 4, 4, 3, 3, 2, 2],
  },
  {
    id: '5',
    keyword: 'social media marketing',
    currentPosition: 18,
    previousPosition: 15,
    change: -3,
    searchVolume: 14800,
    difficulty: 'hard',
    rankingUrl: '/services/social-media',
    lastChecked: '2025-01-05 09:30',
    trend: [12, 13, 14, 15, 16, 17, 18],
  },
  {
    id: '6',
    keyword: 'local seo services',
    currentPosition: 5,
    previousPosition: 6,
    change: 1,
    searchVolume: 3600,
    difficulty: 'medium',
    rankingUrl: '/services/local-seo',
    lastChecked: '2025-01-05 09:30',
    trend: [8, 7, 7, 6, 6, 5, 5],
  },
];

const competitorData = [
  { domain: 'competitor1.com', keywords: 145, avgPosition: 8.3 },
  { domain: 'competitor2.com', keywords: 98, avgPosition: 12.5 },
];

interface KeywordRowProps {
  keyword: (typeof keywordsData)[0];
  expanded: boolean;
  onToggle: () => void;
}

const KeywordRow: React.FC<KeywordRowProps> = ({ keyword, expanded, onToggle }) => {
  const getPositionColor = (position: number) => {
    if (position <= 3) return 'bg-green-100 text-green-700 border-green-200';
    if (position <= 10) return 'bg-[#00B4D8]/10 text-[#00B4D8] border-[#00B4D8]/20';
    if (position <= 20) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'easy') return 'bg-green-100 text-green-700';
    if (difficulty === 'medium') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  const renderSparkline = (data: number[]) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data
      .map((val, i) => {
        const x = (i / (data.length - 1)) * 60;
        const y = 20 - ((val - min) / (range || 1)) * 20;
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg width="60" height="20" className="inline-block">
        <polyline
          points={points}
          fill="none"
          stroke={keyword.change > 0 ? '#10b981' : keyword.change < 0 ? '#ef4444' : '#94a3b8'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <>
      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
        <td className="py-4 px-4" onClick={onToggle}>
          <div className="flex items-center space-x-2">
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
            <span className="font-medium text-[#1E3A5F]">{keyword.keyword}</span>
          </div>
        </td>
        <td className="py-4 px-4">
          <Badge className={`${getPositionColor(keyword.currentPosition)} border font-bold`}>
            #{keyword.currentPosition}
          </Badge>
        </td>
        <td className="py-4 px-4 text-gray-600">#{keyword.previousPosition}</td>
        <td className="py-4 px-4">
          {keyword.change > 0 ? (
            <div className="flex items-center space-x-1 text-green-600">
              <ArrowUp className="w-4 h-4" />
              <span className="font-semibold">{keyword.change}</span>
            </div>
          ) : keyword.change < 0 ? (
            <div className="flex items-center space-x-1 text-red-600">
              <ArrowDown className="w-4 h-4" />
              <span className="font-semibold">{Math.abs(keyword.change)}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 text-gray-400">
              <Minus className="w-4 h-4" />
              <span>0</span>
            </div>
          )}
        </td>
        <td className="py-4 px-4 text-gray-600">{keyword.searchVolume.toLocaleString()}</td>
        <td className="py-4 px-4">
          <Badge className={`${getDifficultyColor(keyword.difficulty)} text-xs capitalize`}>
            {keyword.difficulty}
          </Badge>
        </td>
        <td className="py-4 px-4 text-sm text-gray-600 font-mono">{keyword.rankingUrl}</td>
        <td className="py-4 px-4 text-sm text-gray-500">{keyword.lastChecked}</td>
        <td className="py-4 px-4">{renderSparkline(keyword.trend)}</td>
        <td className="py-4 px-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Edit2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </td>
      </tr>
      {expanded && (
        <tr className="bg-gray-50 border-b border-gray-100">
          <td colSpan={10} className="p-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-[#1E3A5F] mb-3">Historical Performance</h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis
                    reversed
                    stroke="#6b7280"
                    fontSize={12}
                    label={{
                      value: 'Position (Lower is Better)',
                      angle: -90,
                      position: 'insideLeft',
                    }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="position"
                    stroke="#00B4D8"
                    strokeWidth={3}
                    dot={{ fill: '#00B4D8', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">SERP Features</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700">Featured Snippet</Badge>
                    <Badge className="bg-purple-100 text-purple-700">People Also Ask</Badge>
                    <Badge className="bg-green-100 text-green-700">Local Pack</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Competing URLs</h5>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">competitor1.com/digital-marketing</div>
                    <div className="text-sm text-gray-600">competitor2.com/services</div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default function RankTracker() {
  const [activeTab, setActiveTab] = useState<'overview' | 'competitors' | 'alerts'>('overview');
  const [selectedWebsite, setSelectedWebsite] = useState('1');
  const [selectedLocation, setSelectedLocation] = useState('National (USA)');
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop');
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [showAddKeywordModal, setShowAddKeywordModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPosition, setFilterPosition] = useState('all');

  const toggleRow = (id: string) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const stats = {
    totalKeywords: 156,
    top3: { count: 24, change: 8.5 },
    top10: { count: 52, change: 12.3 },
    avgPosition: { value: 14.2, change: -2.1 },
    improved: 38,
    declined: 22,
  };

  const filteredKeywords = keywordsData.filter((keyword) => {
    const matchesSearch = keyword.keyword.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition =
      filterPosition === 'all' ||
      (filterPosition === '1-3' && keyword.currentPosition <= 3) ||
      (filterPosition === '4-10' &&
        keyword.currentPosition >= 4 &&
        keyword.currentPosition <= 10) ||
      (filterPosition === '11-20' &&
        keyword.currentPosition >= 11 &&
        keyword.currentPosition <= 20) ||
      (filterPosition === '21+' && keyword.currentPosition > 20);

    return matchesSearch && matchesPosition;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Rank Tracker</h1>
            <p className="text-gray-600">
              Monitor and track your keyword rankings across search engines
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-6">
          {[
            { id: 'overview', label: 'Rankings Overview', icon: BarChart3 },
            { id: 'competitors', label: 'Competitor Comparison', icon: TrendingUp },
            { id: 'alerts', label: 'Alerts & Notifications', icon: Bell },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-[#00B4D8] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Top Controls */}
        <div className="flex items-center space-x-4 flex-wrap gap-3">
          {/* Website Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Website:</span>
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

          {/* Location Selector */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Device Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setDeviceType('desktop')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                deviceType === 'desktop' ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceType('mobile')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                deviceType === 'mobile' ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Date Range */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Custom Range</option>
            </select>
          </div>

          {/* Check Rankings Button */}
          <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white ml-auto">
            <RefreshCw className="w-4 h-4 mr-2" />
            Check Rankings Now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Total Keywords</div>
                <div className="text-3xl font-bold text-[#1E3A5F]">{stats.totalKeywords}</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Top 3</div>
                <div className="text-3xl font-bold text-green-600">{stats.top3.count}</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  {stats.top3.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Top 10</div>
                <div className="text-3xl font-bold text-[#00B4D8]">{stats.top10.count}</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  {stats.top10.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Avg Position</div>
                <div className="text-3xl font-bold text-[#1E3A5F]">{stats.avgPosition.value}</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  {Math.abs(stats.avgPosition.change)}
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Improved</div>
                <div className="text-3xl font-bold text-green-600">{stats.improved}</div>
                <div className="text-xs text-gray-500 mt-1">keywords</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Declined</div>
                <div className="text-3xl font-bold text-red-600">{stats.declined}</div>
                <div className="text-xs text-gray-500 mt-1">keywords</div>
              </Card>
            </div>

            {/* Main Chart */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">
                    Average Position Over Time
                  </h2>
                  <p className="text-sm text-gray-600">Lower numbers indicate better rankings</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700">Last 30 days</Badge>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis
                    reversed
                    stroke="#6b7280"
                    fontSize={12}
                    label={{
                      value: 'Position (Lower is Better)',
                      angle: -90,
                      position: 'insideLeft',
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="position"
                    stroke="#00B4D8"
                    strokeWidth={3}
                    dot={{ fill: '#00B4D8', r: 5 }}
                    name="Average Position"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Keyword Table */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1E3A5F]">Keyword Rankings</h2>
                <Button
                  onClick={() => setShowAddKeywordModal(true)}
                  className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Keywords
                </Button>
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search keywords..."
                    className="pl-10"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={filterPosition}
                    onChange={(e) => setFilterPosition(e.target.value)}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
                  >
                    <option value="all">All Positions</option>
                    <option value="1-3">Position 1-3</option>
                    <option value="4-10">Position 4-10</option>
                    <option value="11-20">Position 11-20</option>
                    <option value="21+">Position 21+</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Keyword
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Current
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Previous
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Change
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Volume
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Difficulty
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        URL
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Last Checked
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Trend
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredKeywords.map((keyword) => (
                      <KeywordRow
                        key={keyword.id}
                        keyword={keyword}
                        expanded={expandedRows.includes(keyword.id)}
                        onToggle={() => toggleRow(keyword.id)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {/* Competitors Tab */}
        {activeTab === 'competitors' && (
          <div className="space-y-6">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Competitor Analysis</h2>
                  <p className="text-sm text-gray-600">Compare your rankings with competitors</p>
                </div>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Competitor
                </Button>
              </div>

              <div className="space-y-4">
                {competitorData.map((competitor, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {competitor.domain[0].toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#1E3A5F]">{competitor.domain}</div>
                          <div className="text-sm text-gray-600">
                            {competitor.keywords} tracked keywords
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#1E3A5F]">
                          {competitor.avgPosition}
                        </div>
                        <div className="text-sm text-gray-600">Avg Position</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Your Ranking Opportunities</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Keywords you rank for that competitors don't
                </p>
                <div className="space-y-2">
                  {[
                    'local seo services',
                    'google business profile optimization',
                    'digital marketing strategy',
                  ].map((kw, i) => (
                    <div
                      key={i}
                      className="p-3 bg-green-50 rounded-lg flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-green-700">{kw}</span>
                      <Badge className="bg-green-600 text-white">#5</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Content Gaps</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Keywords competitors rank for that you don't
                </p>
                <div className="space-y-2">
                  {['content marketing agency', 'email marketing services', 'ppc management'].map(
                    (kw, i) => (
                      <div
                        key={i}
                        className="p-3 bg-red-50 rounded-lg flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-red-700">{kw}</span>
                        <Badge className="bg-gray-400 text-white">Not Ranking</Badge>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Ranking Alerts</h2>
                  <p className="text-sm text-gray-600">
                    Get notified when rankings change significantly
                  </p>
                </div>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Alert
                </Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-[#FF6B35]" />
                      <span className="font-semibold text-[#1E3A5F]">Large Ranking Drop Alert</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Alert when any keyword drops more than 5 positions
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span>Email: john@thinkments.com</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-[#1E3A5F]">Top 3 Achievement</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Celebrate when keywords reach top 3 positions
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span>Email: team@thinkments.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#1E3A5F] mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                {[
                  {
                    keyword: 'digital marketing agency',
                    change: 2,
                    type: 'positive',
                    time: '2 hours ago',
                  },
                  {
                    keyword: 'social media marketing',
                    change: -3,
                    type: 'negative',
                    time: '5 hours ago',
                  },
                  {
                    keyword: 'google business profile optimization',
                    change: 1,
                    type: 'positive',
                    time: '1 day ago',
                  },
                ].map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      alert.type === 'positive'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {alert.type === 'positive' ? (
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-600" />
                        )}
                        <div>
                          <div className="font-medium text-[#1E3A5F]">{alert.keyword}</div>
                          <div className="text-sm text-gray-600">
                            {alert.type === 'positive' ? 'Improved' : 'Dropped'} by{' '}
                            {Math.abs(alert.change)} positions
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{alert.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Add Keyword Modal */}
      <AnimatePresence>
        {showAddKeywordModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowAddKeywordModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Add Keywords to Track</h2>
                  <button
                    onClick={() => setShowAddKeywordModal(false)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Keywords (one per line for bulk add)
                    </label>
                    <Textarea
                      placeholder="digital marketing agency&#10;seo services&#10;web design company"
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target URL (optional)
                    </label>
                    <Input placeholder="/services/digital-marketing" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Location
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tags/Group
                      </label>
                      <Input placeholder="e.g., Services, Local" />
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-3 mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setShowAddKeywordModal(false)}
                      className="border-gray-300"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      Add Keywords
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
