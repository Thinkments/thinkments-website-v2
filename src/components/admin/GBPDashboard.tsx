import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  ExternalLink,
  Calendar,
  Eye,
  Search,
  Navigation,
  Phone,
  MousePointerClick,
  TrendingUp,
  Image as ImageIcon,
  Plus,
  Edit2,
  MessageSquare,
  Clock,
  Star,
  Upload,
  Send,
  Users,
  BarChart3,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data
const profiles = [
  { id: '1', name: 'ThinkMents Main Office', location: 'New York, NY', status: 'verified' },
  { id: '2', name: 'ThinkMents West Coast', location: 'Los Angeles, CA', status: 'verified' },
  { id: '3', name: 'Client - Acme Corp', location: 'Chicago, IL', status: 'verified' },
];

const performanceData = [
  { date: 'Dec 1', views: 850, searches: 620, actions: 145 },
  { date: 'Dec 8', views: 920, searches: 680, actions: 168 },
  { date: 'Dec 15', views: 1050, searches: 750, actions: 192 },
  { date: 'Dec 22', views: 1180, searches: 820, actions: 215 },
  { date: 'Dec 29', views: 1320, searches: 910, actions: 248 },
  { date: 'Jan 5', views: 1450, searches: 1020, actions: 276 },
];

const searchTypeData = [
  { name: 'Direct', value: 45, color: '#10b981' },
  { name: 'Discovery', value: 35, color: '#00B4D8' },
  { name: 'Branded', value: 20, color: '#8b5cf6' },
];

const viewSourceData = [
  { name: 'Google Search', value: 60, color: '#1E3A5F' },
  { name: 'Google Maps', value: 40, color: '#00B4D8' },
];

const posts = [
  {
    id: '1',
    type: 'update',
    text: "We're excited to announce our new digital marketing packages! Get 20% off this month.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    date: '2025-01-03',
    engagement: { views: 245, clicks: 32 },
  },
  {
    id: '2',
    type: 'event',
    text: 'Join us for our free SEO workshop this Saturday!',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
    date: '2025-01-01',
    engagement: { views: 189, clicks: 28 },
  },
];

const questions = [
  {
    id: '1',
    question: 'Do you offer social media management services?',
    askedBy: 'Sarah M.',
    date: '2025-01-04',
    answered: true,
    answer:
      'Yes! We offer comprehensive social media management including content creation, scheduling, and analytics. Contact us for a free consultation!',
  },
  {
    id: '2',
    question: 'What are your business hours?',
    askedBy: 'John D.',
    date: '2025-01-03',
    answered: false,
  },
  {
    id: '3',
    question: 'Do you work with small businesses?',
    askedBy: 'Emily R.',
    date: '2025-01-02',
    answered: true,
    answer:
      'Absolutely! We specialize in helping small to medium businesses grow their online presence. We have flexible packages to fit various budgets.',
  },
];

export default function GBPDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'posts' | 'qa' | 'insights'>('overview');
  const [selectedProfile, setSelectedProfile] = useState('1');
  const [showPostCreator, setShowPostCreator] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<(typeof questions)[0] | null>(null);
  const [metricView, setMetricView] = useState<'views' | 'searches' | 'actions'>('views');

  const stats = {
    totalViews: { value: 8520, change: 18.5 },
    searches: { value: 6240, change: 15.2 },
    mapViews: { value: 3420, change: 22.1 },
    websiteClicks: { value: 456, change: 12.8 },
    directions: { value: 389, change: 8.4 },
    phoneCalls: { value: 234, change: 16.7 },
  };

  const profile = {
    name: 'ThinkMents Digital Marketing',
    address: '123 Marketing St, New York, NY 10001',
    phone: '(555) 123-4567',
    website: 'www.thinkments.com',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
    categories: ['Digital Marketing Agency', 'SEO Service', 'Web Design'],
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Google Business Profile</h1>
            <p className="text-gray-600">
              Manage your Google Business Profile listings and performance
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-6">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'posts', label: 'Posts', icon: ImageIcon },
            { id: 'qa', label: 'Q&A', icon: MessageSquare },
            { id: 'insights', label: 'Insights', icon: TrendingUp },
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
          {/* Profile Selector */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <select
              value={selectedProfile}
              onChange={(e) => setSelectedProfile(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
            >
              {profiles.map((profile) => (
                <option key={profile.id} value={profile.id}>
                  {profile.name} - {profile.location}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          {/* Status Badge */}
          <Badge className="bg-green-100 text-green-700 flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Verified</span>
          </Badge>

          {/* View on Google Button */}
          <Button variant="outline" className="ml-auto border-[#00B4D8] text-[#00B4D8]">
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Google
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
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.totalViews.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.totalViews.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Search className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Searches</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.searches.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.searches.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Map Views</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.mapViews.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.mapViews.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <MousePointerClick className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Website Clicks</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.websiteClicks.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.websiteClicks.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Navigation className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Directions</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.directions.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.directions.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Phone Calls</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.phoneCalls.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.phoneCalls.change}%
                </div>
              </Card>
            </div>

            {/* Performance Chart */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Performance Over Time</h2>
                  <p className="text-sm text-gray-600">Track your GBP metrics</p>
                </div>

                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  {(['views', 'searches', 'actions'] as const).map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setMetricView(metric)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                        metricView === metric ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
                      }`}
                    >
                      {metric}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey={metricView} fill="#00B4D8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Profile Overview and Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Overview */}
              <Card className="lg:col-span-1 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1E3A5F]">Profile Overview</h3>
                  <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8]">
                    <Edit2 className="w-3 h-3 mr-2" />
                    Edit
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Business Name</div>
                    <div className="text-[#1E3A5F]">{profile.name}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Address</div>
                    <div className="text-sm text-gray-600">{profile.address}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Phone</div>
                    <div className="text-sm text-gray-600">{profile.phone}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Website</div>
                    <div className="text-sm text-[#00B4D8]">{profile.website}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Hours</div>
                    <div className="text-sm text-gray-600">{profile.hours}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Categories</div>
                    <div className="flex flex-wrap gap-2">
                      {profile.categories.map((cat, i) => (
                        <Badge key={i} className="bg-blue-100 text-blue-700 text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Search Type Distribution */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">How Customers Find You</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={searchTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {searchTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {searchTypeData.map((type, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: type.color }}
                        />
                        <span className="text-sm font-medium text-[#1E3A5F]">{type.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{type.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* View Source Distribution */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Where Customers View</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={viewSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {viewSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {viewSourceData.map((source, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-sm font-medium text-[#1E3A5F]">{source.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{source.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Posts & Updates</h2>
                <p className="text-sm text-gray-600">Engage with customers through posts</p>
              </div>
              <Button
                onClick={() => setShowPostCreator(true)}
                className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <Badge className="bg-blue-100 text-blue-700 text-xs mb-3 capitalize">
                      {post.type}
                    </Badge>
                    <p className="text-sm text-gray-700 mb-4">{post.text}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.engagement.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MousePointerClick className="w-4 h-4" />
                          <span>{post.engagement.clicks}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Edit2 className="w-3 h-3 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs border-red-200 text-red-600"
                      >
                        <X className="w-3 h-3 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Q&A Tab */}
        {activeTab === 'qa' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Questions & Answers</h2>
                <p className="text-sm text-gray-600">Respond to customer questions</p>
              </div>
              <Badge className="bg-[#FF6B35] text-white">
                {questions.filter((q) => !q.answered).length} Unanswered
              </Badge>
            </div>

            <div className="space-y-4">
              {questions.map((q) => (
                <Card
                  key={q.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{q.askedBy[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium text-[#1E3A5F]">{q.askedBy}</div>
                          <div className="text-xs text-gray-500">{q.date}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{q.question}</p>

                      {q.answered && q.answer && (
                        <div className="pl-6 border-l-4 border-[#00B4D8] bg-blue-50 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-[#1E3A5F] mb-2">
                            Your Answer:
                          </div>
                          <p className="text-sm text-gray-700">{q.answer}</p>
                        </div>
                      )}
                    </div>

                    <Badge
                      className={
                        q.answered ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {q.answered ? 'Answered' : 'Unanswered'}
                    </Badge>
                  </div>

                  {!q.answered && (
                    <Button
                      onClick={() => {
                        setSelectedQuestion(q);
                        setShowAnswerModal(true);
                      }}
                      className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Answer Question
                    </Button>
                  )}

                  {q.answered && (
                    <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8]">
                      <Edit2 className="w-3 h-3 mr-2" />
                      Edit Answer
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Detailed Insights</h2>
              <p className="text-sm text-gray-600">Deep dive into your GBP performance</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Customer Actions */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Customer Actions Breakdown</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Website Visits', count: 456, color: '#00B4D8', percentage: 42 },
                    { action: 'Direction Requests', count: 389, color: '#10b981', percentage: 36 },
                    { action: 'Phone Calls', count: 234, color: '#8b5cf6', percentage: 22 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#1E3A5F]">{item.action}</span>
                        <span className="text-sm font-bold text-gray-700">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Photo Views */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Photo Views Comparison</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#1E3A5F]">Your Photos</span>
                      <span className="text-2xl font-bold text-[#00B4D8]">3,245</span>
                    </div>
                    <p className="text-xs text-gray-600">High-quality photos increase engagement</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#1E3A5F]">Customer Photos</span>
                      <span className="text-2xl font-bold text-gray-700">1,892</span>
                    </div>
                    <p className="text-xs text-gray-600">Authentic customer content builds trust</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Badge className="bg-green-100 text-green-700">
                      58% more views on your photos
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Popular Times */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#1E3A5F] mb-4">Popular Times</h3>
              <p className="text-sm text-gray-600 mb-6">When customers typically visit</p>

              <div className="grid grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs font-medium text-gray-600 mb-2">{day}</div>
                    <div className="space-y-1">
                      {[60, 80, 100, 95, 85, 40, 30][i] && (
                        <div
                          className="w-full bg-[#00B4D8] rounded"
                          style={{ height: `${[60, 80, 100, 95, 85, 40, 30][i]}px` }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center text-sm text-gray-600">
                Peak hours: 2PM - 5PM on weekdays
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Post Creator Modal */}
      <AnimatePresence>
        {showPostCreator && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowPostCreator(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Create Post</h2>
                  <button
                    onClick={() => setShowPostCreator(false)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Post Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                      <option value="update">What's New</option>
                      <option value="event">Event</option>
                      <option value="offer">Offer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-gray-700">Click to upload image</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Post Text
                    </label>
                    <Textarea
                      placeholder="What's new with your business?"
                      rows={4}
                      className="w-full"
                    />
                    <div className="text-xs text-gray-500 mt-1 text-right">0 / 1500 characters</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Button Text
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                        <option>Learn More</option>
                        <option>Book</option>
                        <option>Order Online</option>
                        <option>Sign Up</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Button URL
                      </label>
                      <Input placeholder="https://..." />
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-3 mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setShowPostCreator(false)}
                      className="border-gray-300"
                    >
                      Cancel
                    </Button>
                    <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8]">
                      <Clock className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                    <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Post Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Answer Modal */}
      <AnimatePresence>
        {showAnswerModal && selectedQuestion && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => {
                setShowAnswerModal(false);
                setSelectedQuestion(null);
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Answer Question</h2>
                  <button
                    onClick={() => {
                      setShowAnswerModal(false);
                      setSelectedQuestion(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Question:</div>
                  <div className="text-gray-900">{selectedQuestion.question}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Asked by {selectedQuestion.askedBy} on {selectedQuestion.date}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Answer
                    </label>
                    <Textarea placeholder="Write a helpful answer..." rows={5} className="w-full" />
                  </div>

                  <div className="flex items-center justify-end space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowAnswerModal(false);
                        setSelectedQuestion(null);
                      }}
                      className="border-gray-300"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      Submit Answer
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
