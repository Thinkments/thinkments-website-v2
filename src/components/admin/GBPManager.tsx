import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  MapPin,
  Plus,
  Grid3x3,
  List,
  Search,
  Filter,
  Star,
  Phone,
  Globe,
  Clock,
  Navigation,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Image as ImageIcon,
  Calendar,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit3,
  Send,
  Copy,
  Flag,
  Sparkles,
  Upload,
  Download,
  BarChart3,
  Users,
  FileText,
  Zap,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  X,
  Check,
  Settings,
  Bell,
  Link as LinkIcon,
  Share2,
  MoreVertical,
  Trash2,
  Save,
  Target,
  Award,
  Activity,
} from 'lucide-react';

type TabType = 'overview' | 'profiles' | 'details' | 'reviews' | 'posts' | 'bulk' | 'analytics';
type ViewMode = 'grid' | 'list';
type ProfileStatus = 'verified' | 'pending' | 'suspended';

interface GBPProfile {
  id: string;
  businessName: string;
  clientName: string;
  logo?: string;
  location: string;
  category: string;
  rating: number;
  reviewCount: number;
  views: number;
  calls: number;
  directions: number;
  status: ProfileStatus;
}

interface Review {
  id: string;
  profileId: string;
  businessName: string;
  reviewerName: string;
  rating: number;
  date: string;
  text: string;
  reply?: string;
  needsReply: boolean;
}

interface Post {
  id: string;
  profileId: string;
  businessName: string;
  type: 'update' | 'event' | 'offer' | 'product';
  content: string;
  image?: string;
  scheduledDate: string;
  views: number;
  clicks: number;
}

export default function GBPManager() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedProfile, setSelectedProfile] = useState<GBPProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  // Mock data
  const stats = {
    totalProfiles: 32,
    totalViewsThisMonth: 45780,
    totalActions: 3245,
    reviewsThisMonth: 89,
    avgRating: 4.7,
    pendingTasks: 15,
    alerts: 3,
    postsScheduled: 24,
  };

  const profiles: GBPProfile[] = [
    {
      id: '1',
      businessName: 'Acme Plumbing Services',
      clientName: 'Acme Corp',
      logo: 'A',
      location: 'Dallas, TX',
      category: 'Plumber',
      rating: 4.8,
      reviewCount: 125,
      views: 2340,
      calls: 89,
      directions: 134,
      status: 'verified',
    },
    {
      id: '2',
      businessName: 'Smith & Sons Law Firm',
      clientName: 'Smith & Sons',
      logo: 'S',
      location: 'Houston, TX',
      category: 'Attorney',
      rating: 4.9,
      reviewCount: 203,
      views: 3890,
      calls: 156,
      directions: 78,
      status: 'verified',
    },
    {
      id: '3',
      businessName: 'Best Dental Care',
      clientName: 'Best Dental',
      logo: 'B',
      location: 'Austin, TX',
      category: 'Dentist',
      rating: 4.6,
      reviewCount: 87,
      views: 1567,
      calls: 67,
      directions: 45,
      status: 'pending',
    },
  ];

  const reviews: Review[] = [
    {
      id: '1',
      profileId: '1',
      businessName: 'Acme Plumbing Services',
      reviewerName: 'John Smith',
      rating: 5,
      date: '2024-12-08',
      text: 'Excellent service! They fixed my water heater quickly and professionally.',
      needsReply: false,
      reply: 'Thank you for your kind words, John! We appreciate your business.',
    },
    {
      id: '2',
      profileId: '1',
      businessName: 'Acme Plumbing Services',
      reviewerName: 'Sarah Johnson',
      rating: 4,
      date: '2024-12-07',
      text: 'Good service but a bit pricey. Would use again though.',
      needsReply: true,
    },
    {
      id: '3',
      profileId: '2',
      businessName: 'Smith & Sons Law Firm',
      reviewerName: 'Mike Wilson',
      rating: 5,
      date: '2024-12-06',
      text: 'Outstanding legal representation. Highly recommend!',
      needsReply: true,
    },
  ];

  const posts: Post[] = [
    {
      id: '1',
      profileId: '1',
      businessName: 'Acme Plumbing Services',
      type: 'offer',
      content:
        '🎉 Special Holiday Offer! Get 20% off all plumbing services this month. Call now to schedule!',
      scheduledDate: '2024-12-15',
      views: 456,
      clicks: 34,
    },
    {
      id: '2',
      profileId: '2',
      businessName: 'Smith & Sons Law Firm',
      type: 'update',
      content:
        "We're proud to announce our expansion to a new office location in downtown Houston!",
      scheduledDate: '2024-12-12',
      views: 678,
      clicks: 89,
    },
  ];

  const getStatusColor = (status: ProfileStatus) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'suspended':
        return 'bg-red-100 text-red-700';
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'update':
        return 'bg-blue-100 text-blue-700';
      case 'event':
        return 'bg-purple-100 text-purple-700';
      case 'offer':
        return 'bg-orange-100 text-orange-700';
      case 'product':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">
              Google Business Profile Manager
            </h1>
            <p className="text-gray-600">Manage all client GBP listings from one dashboard</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {stats.totalProfiles} profiles managed
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                {stats.reviewsThisMonth} reviews this month
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {stats.postsScheduled} posts scheduled
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Bulk Actions</option>
              <option>Update Hours</option>
              <option>Bulk Post</option>
              <option>Health Check</option>
            </select>
            <Button
              onClick={() => setShowConnectModal(true)}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Connect New Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'profiles', label: 'All Profiles', icon: MapPin, count: profiles.length },
          {
            id: 'reviews',
            label: 'Reviews',
            icon: Star,
            count: reviews.filter((r) => r.needsReply).length,
            badge: 'New',
          },
          { id: 'posts', label: 'Posts & Content', icon: FileText },
          { id: 'bulk', label: 'Bulk Operations', icon: Zap },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <Badge
                className={`${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {tab.count}
              </Badge>
            )}
            {tab.badge && <Badge className="bg-[#FF6B35] text-white">{tab.badge}</Badge>}
          </button>
        ))}
      </div>

      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.totalProfiles}</p>
                <p className="text-sm text-gray-600 mb-2">Total Profiles</p>
                <a href="#" className="text-xs text-[#00B4D8] hover:underline">
                  View All →
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">
                  {stats.totalViewsThisMonth.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-2">Views This Month</p>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% vs last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">
                  {stats.totalActions.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-2">Total Actions</p>
                <div className="flex items-center text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +23% vs last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.reviewsThisMonth}</p>
                <p className="text-sm text-gray-600 mb-2">Reviews This Month</p>
                <Badge className="bg-yellow-100 text-yellow-700">★ {stats.avgRating} avg</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.pendingTasks}</p>
                <p className="text-sm text-gray-600 mb-2">Pending Tasks</p>
                <p className="text-xs text-gray-500">Reviews • Posts • Updates</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#1E3A5F] mb-1">{stats.alerts}</p>
                <p className="text-sm text-gray-600 mb-2">Alerts</p>
                <a href="#" className="text-xs text-red-600 hover:underline">
                  View Issues →
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Recent Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {renderStars(review.rating)}
                            <span className="text-sm font-medium text-gray-900">
                              {review.reviewerName}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{review.businessName}</p>
                          <p className="text-sm text-gray-700 line-clamp-2">{review.text}</p>
                        </div>
                      </div>
                      {review.needsReply && (
                        <Button size="sm" className="mt-2 bg-[#00B4D8] text-white">
                          <MessageSquare className="w-3 h-3 mr-2" />
                          Reply
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {posts.map((post) => (
                    <div key={post.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getPostTypeColor(post.type)}>{post.type}</Badge>
                            <span className="text-xs text-gray-500">{post.businessName}</span>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.scheduledDate}
                            </span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {post.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* All Profiles Tab */}
      {activeTab === 'profiles' && (
        <div>
          {/* Search & View Toggle */}
          <Card className="border-0 shadow-md mb-4">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by business or client name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-[#00B4D8] text-white' : 'bg-white text-gray-600'}`}
                    >
                      <Grid3x3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-[#00B4D8] text-white' : 'bg-white text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{profile.logo}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{profile.businessName}</h3>
                          <p className="text-xs text-gray-500">{profile.clientName}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(profile.status)}>{profile.status}</Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {profile.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Target className="w-4 h-4 mr-2" />
                        {profile.category}
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(profile.rating)}
                        <span className="text-sm font-medium text-gray-900">{profile.rating}</span>
                        <span className="text-sm text-gray-500">({profile.reviewCount})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#1E3A5F]">{profile.views}</p>
                        <p className="text-xs text-gray-600">Views</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#1E3A5F]">{profile.calls}</p>
                        <p className="text-xs text-gray-600">Calls</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#1E3A5F]">{profile.directions}</p>
                        <p className="text-xs text-gray-600">Directions</p>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setSelectedProfile(profile);
                        setActiveTab('details');
                      }}
                      className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                    >
                      Manage Profile
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-2">
              {profiles.map((profile) => (
                <Card
                  key={profile.id}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-3 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">{profile.logo}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{profile.businessName}</p>
                          <p className="text-xs text-gray-500">{profile.clientName}</p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-900">{profile.location}</p>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(profile.rating)}
                          <span className="text-sm ml-1">({profile.reviewCount})</span>
                        </div>
                      </div>
                      <div className="col-span-1 text-center">
                        <p className="text-sm font-bold text-gray-900">{profile.views}</p>
                      </div>
                      <div className="col-span-1 text-center">
                        <p className="text-sm font-bold text-gray-900">{profile.calls}</p>
                      </div>
                      <div className="col-span-2">
                        <Badge className={getStatusColor(profile.status)}>{profile.status}</Badge>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedProfile(profile);
                            setActiveTab('details');
                          }}
                        >
                          Manage
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

      {/* Profile Details Tab */}
      {activeTab === 'details' && selectedProfile && (
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Button variant="outline" size="sm" onClick={() => setActiveTab('profiles')}>
              ← Back to Profiles
            </Button>
          </div>

          <div className="space-y-6">
            {/* Profile Header */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{selectedProfile.logo}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1E3A5F]">
                        {selectedProfile.businessName}
                      </h2>
                      <p className="text-gray-600">{selectedProfile.location}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Open Now
                        </Badge>
                        {renderStars(selectedProfile.rating)}
                        <span className="text-sm">({selectedProfile.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Google
                    </Button>
                    <Button size="sm" className="bg-[#00B4D8] text-white">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4">
              <Card className="border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 text-[#00B4D8]" />
                  <p className="font-medium text-gray-900">Photos</p>
                  <p className="text-sm text-gray-500">34 images</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <p className="font-medium text-gray-900">Reviews</p>
                  <p className="text-sm text-gray-500">{selectedProfile.reviewCount} total</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-[#00B4D8]" />
                  <p className="font-medium text-gray-900">Posts</p>
                  <p className="text-sm text-gray-500">5 scheduled</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <p className="font-medium text-gray-900">Insights</p>
                  <p className="text-sm text-gray-500">View data</p>
                </CardContent>
              </Card>
            </div>

            {/* Profile Stats */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Performance (Last 30 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Total Views</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">
                      {selectedProfile.views.toLocaleString()}
                    </p>
                    <div className="flex items-center text-sm text-green-600 mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +18% vs previous period
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Phone Calls</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">{selectedProfile.calls}</p>
                    <div className="flex items-center text-sm text-green-600 mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +12% vs previous period
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Direction Requests</p>
                    <p className="text-3xl font-bold text-[#1E3A5F]">
                      {selectedProfile.directions}
                    </p>
                    <div className="flex items-center text-sm text-green-600 mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +23% vs previous period
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div>
          <Card className="border-0 shadow-md mb-4">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Reviews</option>
                    <option>Needs Reply</option>
                    <option>Positive (4-5 ★)</option>
                    <option>Negative (1-3 ★)</option>
                  </select>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {reviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {renderStars(review.rating)}
                        <span className="font-semibold text-gray-900">{review.reviewerName}</span>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{review.businessName}</p>
                      <p className="text-gray-700 mb-3">{review.text}</p>

                      {review.reply && (
                        <div className="ml-6 p-3 bg-blue-50 border-l-4 border-[#00B4D8] rounded">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Response from business:
                          </p>
                          <p className="text-sm text-gray-700">{review.reply}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {review.needsReply && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedReview(review);
                          setShowReplyModal(true);
                        }}
                        className="bg-[#00B4D8] text-white"
                      >
                        <MessageSquare className="w-3 h-3 mr-2" />
                        Reply
                      </Button>
                      <Button size="sm" variant="outline">
                        <Sparkles className="w-3 h-3 mr-2" />
                        AI Generate
                      </Button>
                      <Button size="sm" variant="outline">
                        <Flag className="w-3 h-3 mr-2" />
                        Flag
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Posts Tab */}
      {activeTab === 'posts' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <Button
                onClick={() => setShowPostModal(true)}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Post
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getPostTypeColor(post.type)}>{post.type}</Badge>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost">
                        <Edit3 className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{post.businessName}</p>
                  <p className="text-gray-900 mb-4">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.scheduledDate}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Activity className="w-3 h-3 mr-1" />
                        {post.clicks} clicks
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Bulk Operations Tab */}
      {activeTab === 'bulk' && (
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Bulk Information Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Select multiple profiles and update information across all at once
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Update Hours
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Description
                </Button>
                <Button variant="outline" className="justify-start">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Bulk Photo Upload
                </Button>
                <Button variant="outline" className="justify-start">
                  <Send className="w-4 h-4 mr-2" />
                  Bulk Post
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Profile Health Check</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Scan all profiles for common issues</p>
              <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                <RefreshCw className="w-4 h-4 mr-2" />
                Run Health Check
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Cross-Profile Analytics</CardTitle>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                  <option>Custom Range</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Analytics charts would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Top Performing Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profiles.slice(0, 3).map((profile, idx) => (
                    <div key={profile.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold text-gray-400">#{idx + 1}</span>
                        <div>
                          <p className="font-medium text-gray-900">{profile.businessName}</p>
                          <p className="text-xs text-gray-500">{profile.views} views</p>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Profiles Needing Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">3 reviews need replies</p>
                        <p className="text-xs text-gray-600">Respond within 24 hours</p>
                      </div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      <AnimatePresence>
        {showReplyModal && selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReplyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Reply to Review</h2>
                  <Button size="sm" variant="ghost" onClick={() => setShowReplyModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    {renderStars(selectedReview.rating)}
                    <span className="font-semibold">{selectedReview.reviewerName}</span>
                  </div>
                  <p className="text-gray-700">{selectedReview.text}</p>
                </div>

                <div className="mb-4">
                  <div className="flex space-x-2 mb-3">
                    <Button size="sm" className="bg-[#00B4D8] text-white">
                      <Sparkles className="w-3 h-3 mr-2" />
                      AI Generate Reply
                    </Button>
                    <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                      <option>Professional</option>
                      <option>Friendly</option>
                      <option>Apologetic</option>
                      <option>Thankful</option>
                    </select>
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Write your reply..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <Button variant="outline" onClick={() => setShowReplyModal(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Post Reply
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showPostModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPostModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Create New Post</h2>
                  <Button size="sm" variant="ghost" onClick={() => setShowPostModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Select Business(es)
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>All Profiles</option>
                      {profiles.map((p) => (
                        <option key={p.id}>{p.businessName}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Post Type
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['update', 'event', 'offer', 'product'].map((type) => (
                        <button
                          key={type}
                          className="p-3 border-2 border-gray-300 rounded-lg hover:border-[#00B4D8] capitalize"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Post Content
                    </label>
                    <textarea
                      rows={6}
                      placeholder="What's new with your business?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">1500 characters max</p>
                  </div>

                  <div>
                    <Button variant="outline" size="sm">
                      <Sparkles className="w-3 h-3 mr-2" />
                      AI Generate Post
                    </Button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Add Photo/Video
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <Button variant="outline">Save as Draft</Button>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                  <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Post Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
