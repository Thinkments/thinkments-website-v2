import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Search,
  Filter,
  MessageSquare,
  Calendar,
  TrendingUp,
  Send,
  Copy,
  QrCode,
  Mail,
  MessageCircle,
  Eye,
  Edit2,
  Trash2,
  Plus,
  X,
  Sparkles,
  Link as LinkIcon,
  ChevronDown,
  Download,
  Bell,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Mock data
const clients = [
  { id: 'all', name: 'All Locations' },
  { id: '1', name: 'ThinkMents Main Office' },
  { id: '2', name: 'Acme Corporation' },
  { id: '3', name: 'TechStart Inc' },
];

const platforms = ['All', 'Google', 'Facebook', 'Yelp'];

const reviews = [
  {
    id: '1',
    platform: 'Google',
    reviewer: 'Sarah Johnson',
    rating: 5,
    date: '2025-01-04',
    text: 'Absolutely fantastic service! The ThinkMents team helped us triple our online traffic in just 3 months. Their SEO strategies are top-notch and the communication was excellent throughout.',
    responded: true,
    response:
      "Thank you so much for your kind words, Sarah! We're thrilled to have helped your business grow. Looking forward to continuing our partnership!",
  },
  {
    id: '2',
    platform: 'Facebook',
    reviewer: 'Michael Chen',
    rating: 4,
    date: '2025-01-03',
    text: 'Great digital marketing agency. Very professional team and they delivered results. The only reason for 4 stars instead of 5 is the initial onboarding took a bit longer than expected.',
    responded: false,
  },
  {
    id: '3',
    platform: 'Google',
    reviewer: 'Emily Rodriguez',
    rating: 5,
    date: '2025-01-02',
    text: "I can't recommend ThinkMents enough! Their social media management has been a game-changer for our small business. We've seen a 200% increase in engagement.",
    responded: true,
    response:
      "Emily, we're so happy to hear about your success! Your business deserves all the attention it's getting. Thank you for trusting us!",
  },
  {
    id: '4',
    platform: 'Yelp',
    reviewer: 'David Thompson',
    rating: 2,
    date: '2025-01-01',
    text: "Service was okay but didn't meet expectations. The website redesign took longer than promised and there were several revision cycles.",
    responded: false,
  },
  {
    id: '5',
    platform: 'Google',
    reviewer: 'Jessica Martinez',
    rating: 5,
    date: '2024-12-30',
    text: 'Outstanding work on our Google Business Profile! We went from barely showing up in local searches to ranking #1 for our main keywords. Worth every penny!',
    responded: true,
    response:
      "Jessica, thank you for the wonderful review! Local SEO is our passion and we're thrilled to see your business thriving in local search!",
  },
];

const ratingDistribution = [
  { stars: 5, count: 145 },
  { stars: 4, count: 32 },
  { stars: 3, count: 8 },
  { stars: 2, count: 3 },
  { stars: 1, count: 2 },
];

const sentimentTrend = [
  { date: 'Dec 1', positive: 85, neutral: 10, negative: 5 },
  { date: 'Dec 8', positive: 88, neutral: 8, negative: 4 },
  { date: 'Dec 15', positive: 90, neutral: 7, negative: 3 },
  { date: 'Dec 22', positive: 92, neutral: 6, negative: 2 },
  { date: 'Dec 29', positive: 91, neutral: 7, negative: 2 },
  { date: 'Jan 5', positive: 93, neutral: 5, negative: 2 },
];

const templates = [
  {
    id: '1',
    name: 'Positive Response - General',
    rating: 5,
    text: "Thank you so much for your wonderful review! We're thrilled to hear about your positive experience. Your feedback means the world to us!",
  },
  {
    id: '2',
    name: 'Positive Response - Specific Service',
    rating: 5,
    text: "We're so happy to hear that our [service] exceeded your expectations! Thank you for trusting us with your business.",
  },
  {
    id: '3',
    name: 'Neutral Response',
    rating: 3,
    text: 'Thank you for taking the time to share your feedback. We appreciate your honest review and would love to learn more about how we can improve your experience.',
  },
  {
    id: '4',
    name: 'Negative Response - Apology',
    rating: 1,
    text: "We sincerely apologize for not meeting your expectations. Your feedback is important to us and we'd like to make things right. Please contact us directly so we can resolve this issue.",
  },
];

const StarRating: React.FC<{ rating: number; size?: 'sm' | 'md' | 'lg' }> = ({
  rating,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
        />
      ))}
    </div>
  );
};

export default function ReviewsManagement() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'templates' | 'requests' | 'sentiment'>(
    'reviews',
  );
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [filterView, setFilterView] = useState<'all' | 'needs-response'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<(typeof reviews)[0] | null>(null);
  const [responseText, setResponseText] = useState('');
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  const stats = {
    overallRating: 4.7,
    totalReviews: 190,
    thisMonth: { count: 28, change: 12.5 },
    avgResponseTime: '2.3 hours',
    responseRate: 94,
    sentiment: { positive: 93, neutral: 5, negative: 2 },
  };

  const totalRatings = ratingDistribution.reduce((sum, item) => sum + item.count, 0);

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.reviewer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'All' || review.platform === selectedPlatform;
    const matchesFilter =
      filterView === 'all' || (filterView === 'needs-response' && !review.responded);

    return matchesSearch && matchesPlatform && matchesFilter;
  });

  const generateAIResponse = (type: 'professional' | 'friendly' | 'complaint') => {
    const responses = {
      professional:
        'Thank you for taking the time to share your feedback. We truly appreciate your business and are committed to providing exceptional service. Your review helps us continue to improve.',
      friendly:
        "Wow, thank you so much! 🎉 We're absolutely thrilled to hear about your experience. Your kind words made our day! We can't wait to work with you again!",
      complaint:
        "We sincerely apologize for any inconvenience you've experienced. Your feedback is very important to us, and we'd like to make this right. Please reach out to us directly at your earliest convenience so we can address your concerns personally.",
    };
    setResponseText(responses[type]);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Reviews Management</h1>
            <p className="text-gray-600">
              Monitor and respond to customer reviews across all platforms
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-6">
          {[
            { id: 'reviews', label: 'Reviews Feed', icon: Star },
            { id: 'templates', label: 'Response Templates', icon: MessageSquare },
            { id: 'requests', label: 'Review Requests', icon: Send },
            { id: 'sentiment', label: 'Sentiment Analysis', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'reviews' | 'templates' | 'requests' | 'sentiment')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${activeTab === tab.id
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
          {/* Client Selector */}
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
          >
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>

          {/* Platform Filter */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedPlatform === platform ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
                  }`}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Date Range */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1 ml-auto">
            <button
              onClick={() => setFilterView('all')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filterView === 'all' ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
                }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilterView('needs-response')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filterView === 'needs-response' ? 'bg-white text-[#1E3A5F] shadow' : 'text-gray-600'
                }`}
            >
              Needs Response
              <Badge className="ml-2 bg-[#FF6B35] text-white">
                {reviews.filter((r) => !r.responded).length}
              </Badge>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Overall Rating</div>
                <div className="flex items-center space-x-2">
                  <div className="text-3xl font-bold text-[#1E3A5F]">{stats.overallRating}</div>
                  <StarRating rating={Math.round(stats.overallRating)} size="sm" />
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Total Reviews</div>
                <div className="text-3xl font-bold text-[#1E3A5F]">{stats.totalReviews}</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">This Month</div>
                <div className="text-3xl font-bold text-[#00B4D8]">{stats.thisMonth.count}</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.thisMonth.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Avg Response Time</div>
                <div className="text-3xl font-bold text-[#1E3A5F]">{stats.avgResponseTime}</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Response Rate</div>
                <div className="text-3xl font-bold text-green-600">{stats.responseRate}%</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">Positive</div>
                <div className="text-3xl font-bold text-green-600">{stats.sentiment.positive}%</div>
              </Card>
            </div>

            {/* Rating Breakdown */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <h3 className="font-bold text-[#1E3A5F] mb-4">Rating Distribution</h3>
              <div className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 w-24">
                      <span className="text-sm font-medium text-gray-700">{item.stars}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all"
                          style={{ width: `${(item.count / totalRatings) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700 w-16 text-right">
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews Feed */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#1E3A5F]">Recent Reviews</h2>

                {/* Search */}
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reviews..."
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{review.reviewer[0]}</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-semibold text-[#1E3A5F]">{review.reviewer}</span>
                            <Badge
                              className={`${review.platform === 'Google'
                                ? 'bg-blue-100 text-blue-700'
                                : review.platform === 'Facebook'
                                  ? 'bg-indigo-100 text-indigo-700'
                                  : 'bg-red-100 text-red-700'
                                }`}
                            >
                              {review.platform}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-3 mb-2">
                            <StarRating rating={review.rating} size="sm" />
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>

                      {!review.responded && (
                        <Badge className="bg-[#FF6B35] text-white">Needs Response</Badge>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

                    {review.responded && review.response && (
                      <div className="pl-6 border-l-4 border-[#00B4D8] bg-blue-50 p-4 rounded-lg mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-[#00B4D8]" />
                          <span className="text-sm font-semibold text-[#1E3A5F]">
                            Your Response:
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{review.response}</p>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      {!review.responded ? (
                        <Button
                          onClick={() => {
                            setSelectedReview(review);
                            setShowResponseModal(true);
                          }}
                          className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Respond
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#00B4D8] text-[#00B4D8]"
                        >
                          <Edit2 className="w-3 h-3 mr-2" />
                          Edit Response
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Response Templates</h2>
                <p className="text-sm text-gray-600">
                  Save time with pre-written response templates
                </p>
              </div>
              <Button
                onClick={() => setShowTemplateModal(true)}
                className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Template
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-[#1E3A5F] mb-2">{template.name}</h3>
                      <StarRating rating={template.rating} size="sm" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 p-4 bg-gray-50 rounded-lg">
                    {template.text}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#00B4D8] text-[#00B4D8]"
                  >
                    <Copy className="w-3 h-3 mr-2" />
                    Copy Template
                  </Button>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Review Requests Tab */}
        {activeTab === 'requests' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Review Request Tools</h2>
              <p className="text-gray-600">
                Generate links and campaigns to request reviews from customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Review Link Generator */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-lg flex items-center justify-center">
                    <LinkIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A5F]">Review Link</h3>
                    <p className="text-sm text-gray-600">Short URL for easy sharing</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <code className="text-sm text-[#00B4D8]">reviews.thinkments.com/123abc</code>
                </div>

                <div className="flex items-center space-x-2">
                  <Button className="flex-1 bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <QrCode className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* QR Code */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A5F]">QR Code</h3>
                    <p className="text-sm text-gray-600">For printed materials</p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center mb-4">
                  <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center border-2 border-gray-300">
                    <QrCode className="w-24 h-24 text-gray-400" />
                  </div>
                </div>

                <Button variant="outline" className="w-full border-gray-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download QR Code
                </Button>
              </Card>
            </div>

            {/* Email Template */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-5 h-5 text-[#00B4D8]" />
                <h3 className="font-bold text-[#1E3A5F]">Email Template</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject Line
                  </label>
                  <Input value="We'd love your feedback!" readOnly />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Body
                  </label>
                  <Textarea
                    value="Hi [Customer Name],\n\nThank you for choosing ThinkMents! We hope you're happy with our service.\n\nWould you mind taking a moment to leave us a review? Your feedback helps us improve and helps other businesses find us.\n\n[Review Link]\n\nThank you!\nThe ThinkMents Team"
                    rows={8}
                    readOnly
                  />
                </div>

                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Template
                </Button>
              </div>
            </Card>

            {/* SMS Template */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-5 h-5 text-[#00B4D8]" />
                <h3 className="font-bold text-[#1E3A5F]">SMS Template</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <Textarea
                    value="Hi [Name]! Thanks for working with ThinkMents. We'd love your feedback! Leave us a review: reviews.thinkments.com/123abc"
                    rows={4}
                    readOnly
                  />
                  <div className="text-xs text-gray-500 mt-1">160 characters</div>
                </div>

                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Template
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Sentiment Analysis Tab */}
        {activeTab === 'sentiment' && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Sentiment Analysis</h2>
              <p className="text-sm text-gray-600">Track customer sentiment trends over time</p>
            </div>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <h3 className="font-bold text-[#1E3A5F] mb-4">Sentiment Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sentimentTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="positive"
                    stroke="#10b981"
                    strokeWidth={3}
                    name="Positive"
                  />
                  <Line
                    type="monotone"
                    dataKey="neutral"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    name="Neutral"
                  />
                  <Line
                    type="monotone"
                    dataKey="negative"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="Negative"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Praised Aspects */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Top Praised Aspects</h3>
                <div className="space-y-3">
                  {[
                    { aspect: 'Customer Service', mentions: 45 },
                    { aspect: 'Results/ROI', mentions: 38 },
                    { aspect: 'Communication', mentions: 32 },
                    { aspect: 'Professionalism', mentions: 28 },
                    { aspect: 'Expertise', mentions: 24 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                    >
                      <span className="font-medium text-green-700">{item.aspect}</span>
                      <Badge className="bg-green-600 text-white">{item.mentions} mentions</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Common Complaints */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1E3A5F] mb-4">Areas for Improvement</h3>
                <div className="space-y-3">
                  {[
                    { aspect: 'Onboarding Process', mentions: 5 },
                    { aspect: 'Response Time', mentions: 3 },
                    { aspect: 'Pricing Clarity', mentions: 2 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                    >
                      <span className="font-medium text-red-700">{item.aspect}</span>
                      <Badge className="bg-red-600 text-white">{item.mentions} mentions</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* Response Modal */}
      <AnimatePresence>
        {showResponseModal && selectedReview && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => {
                setShowResponseModal(false);
                setSelectedReview(null);
                setResponseText('');
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Respond to Review</h2>
                  <button
                    onClick={() => {
                      setShowResponseModal(false);
                      setSelectedReview(null);
                      setResponseText('');
                    }}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Original Review */}
                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="font-semibold text-[#1E3A5F]">{selectedReview.reviewer}</span>
                    <StarRating rating={selectedReview.rating} size="sm" />
                    <Badge className="bg-blue-100 text-blue-700">{selectedReview.platform}</Badge>
                  </div>
                  <p className="text-gray-700">{selectedReview.text}</p>
                </div>

                {/* AI Response Buttons */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    AI-Powered Response Suggestions
                  </label>
                  <div className="flex items-center space-x-2 flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => generateAIResponse('professional')}
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Sparkles className="w-3 h-3 mr-2" />
                      Professional
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => generateAIResponse('friendly')}
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Sparkles className="w-3 h-3 mr-2" />
                      Friendly
                    </Button>
                    {selectedReview.rating <= 3 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => generateAIResponse('complaint')}
                        className="border-[#00B4D8] text-[#00B4D8]"
                      >
                        <Sparkles className="w-3 h-3 mr-2" />
                        Address Complaint
                      </Button>
                    )}
                  </div>
                </div>

                {/* Response Textarea */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Response
                  </label>
                  <Textarea
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                    placeholder="Write your response..."
                    rows={6}
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {responseText.length} / 1000 characters
                  </div>
                </div>

                {/* Preview */}
                {responseText && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preview
                    </label>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-[#00B4D8]">
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-[#00B4D8]" />
                        <span className="text-sm font-semibold text-[#1E3A5F]">Your Response:</span>
                      </div>
                      <p className="text-sm text-gray-700">{responseText}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-end space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowResponseModal(false);
                      setSelectedReview(null);
                      setResponseText('');
                    }}
                    className="border-gray-300"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Response
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
