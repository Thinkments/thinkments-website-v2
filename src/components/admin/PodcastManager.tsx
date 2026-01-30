import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mic,
  Plus,
  Upload,
  Play,
  Pause,
  Download,
  Edit2,
  Trash2,
  Copy,
  Grid,
  List,
  Search,
  Filter,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  Eye,
  Share2,
  Link as LinkIcon,
  Settings,
  CheckCircle,
  AlertCircle,
  Users,
  MapPin,
  BarChart3,
  PieChart as PieChartIcon,
  X,
  Image as ImageIcon,
  FileText,
  MessageSquare,
  Tag,
  Globe,
  Rss,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronRight,
  GripVertical,
  Music,
  Headphones,
  Radio,
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
  AreaChart,
  Area,
} from 'recharts';

// Mock data
const episodes = [
  {
    id: '1',
    number: 24,
    title: 'The Future of Digital Marketing with AI',
    publishDate: '2025-01-05',
    duration: '45:32',
    status: 'published',
    downloads: 3420,
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    number: 23,
    title: 'SEO Trends to Watch in 2025',
    publishDate: '2025-01-10',
    duration: '38:15',
    status: 'scheduled',
    downloads: 0,
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=300&fit=crop',
  },
  {
    id: '3',
    number: 22,
    title: 'Building a Brand on Social Media',
    publishDate: '2024-12-28',
    duration: '52:18',
    status: 'published',
    downloads: 5820,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop',
  },
  {
    id: '4',
    number: 21,
    title: 'Content Marketing Strategies That Work',
    publishDate: '2024-12-21',
    duration: '41:45',
    status: 'published',
    downloads: 4150,
    thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=300&h=300&fit=crop',
  },
];

const downloadsData = [
  { date: 'Jan 1', downloads: 850 },
  { date: 'Jan 5', downloads: 1240 },
  { date: 'Jan 10', downloads: 980 },
  { date: 'Jan 15', downloads: 1580 },
  { date: 'Jan 20', downloads: 1320 },
  { date: 'Jan 25', downloads: 1750 },
  { date: 'Today', downloads: 2100 },
];

const platformData = [
  { name: 'Apple Podcasts', value: 45, color: '#A855F7' },
  { name: 'Spotify', value: 35, color: '#1DB954' },
  { name: 'Google Podcasts', value: 12, color: '#4285F4' },
  { name: 'Website', value: 8, color: '#00B4D8' },
];

const topEpisodes = [
  {
    rank: 1,
    title: 'The Future of Digital Marketing with AI',
    downloads: 8420,
    avgDuration: '38:20',
    completion: 85,
  },
  {
    rank: 2,
    title: 'Building a Brand on Social Media',
    downloads: 7820,
    avgDuration: '45:12',
    completion: 78,
  },
  {
    rank: 3,
    title: 'SEO Trends to Watch in 2025',
    downloads: 6150,
    avgDuration: '32:15',
    completion: 82,
  },
  {
    rank: 4,
    title: 'Content Marketing Strategies',
    downloads: 5890,
    avgDuration: '35:42',
    completion: 76,
  },
];

export default function PodcastManager() {
  const [activeView, setActiveView] = useState<'episodes' | 'upload' | 'analytics' | 'settings'>(
    'episodes',
  );
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<(typeof episodes)[0] | null>(null);
  const [showChapters, setShowChapters] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = {
    totalEpisodes: 24,
    totalDownloads: 128400,
    downloadsThisMonth: { value: 18500, change: 15.3 },
    avgDuration: '42:15',
    subscribers: 8420,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Podcast Manager</h1>
            <p className="text-gray-600">Create, manage, and analyze your podcast episodes</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {[
              { id: 'episodes', label: 'Episodes', icon: Music },
              { id: 'upload', label: 'Upload New', icon: Upload },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id as 'episodes' | 'upload' | 'analytics' | 'settings')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${activeView === tab.id
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

          {activeView === 'episodes' && (
            <Button
              onClick={() => setActiveView('upload')}
              className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Upload New Episode
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Episodes List */}
        {activeView === 'episodes' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Music className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Total Episodes</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">{stats.totalEpisodes}</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Download className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-gray-600">Total Downloads</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.totalDownloads.toLocaleString()}
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.downloadsThisMonth.value.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stats.downloadsThisMonth.change}%
                </div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <div className="text-sm text-gray-600">Avg Length</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">{stats.avgDuration}</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-[#FF6B35]" />
                  <div className="text-sm text-gray-600">Subscribers</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stats.subscribers.toLocaleString()}
                </div>
              </Card>
            </div>

            {/* Controls */}
            <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Search */}
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search episodes..."
                      className="pl-10"
                    />
                  </div>

                  {/* Filters */}
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Scheduled</option>
                    <option>Draft</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  {/* View Toggle */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-white shadow' : ''
                        }`}
                    >
                      <Grid className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-white shadow' : ''
                        }`}
                    >
                      <List className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Episodes Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {episodes.map((episode) => (
                  <Card
                    key={episode.id}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge
                        className={`${getStatusColor(episode.status)} absolute top-3 right-3 capitalize`}
                      >
                        {episode.status}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-[#00B4D8] font-semibold mb-1">
                        Episode {episode.number}
                      </div>
                      <h3 className="font-bold text-[#1E3A5F] mb-3 line-clamp-2">
                        {episode.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{episode.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{episode.duration}</span>
                        </div>
                      </div>
                      {episode.status === 'published' && (
                        <div className="flex items-center space-x-2 mb-4">
                          <Download className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-600">
                            {episode.downloads.toLocaleString()} downloads
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedEpisode(episode);
                              setShowPreviewModal(true);
                            }}
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => setActiveView('upload')}
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            title="Copy Link"
                          >
                            <Copy className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <button
                          className="p-2 hover:bg-red-50 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Episode
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Title
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Duration
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Downloads
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {episodes.map((episode) => (
                        <tr key={episode.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-semibold text-[#00B4D8]">
                            #{episode.number}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={episode.thumbnail}
                                alt=""
                                className="w-12 h-12 rounded object-cover"
                              />
                              <span className="font-medium text-[#1E3A5F]">{episode.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{episode.publishDate}</td>
                          <td className="py-4 px-4 text-gray-600">{episode.duration}</td>
                          <td className="py-4 px-4">
                            <Badge className={`${getStatusColor(episode.status)} capitalize`}>
                              {episode.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 font-semibold text-green-600">
                            {episode.status === 'published'
                              ? episode.downloads.toLocaleString()
                              : '-'}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedEpisode(episode);
                                  setShowPreviewModal(true);
                                }}
                                className="p-2 hover:bg-gray-100 rounded transition-colors"
                              >
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                              <button
                                onClick={() => setActiveView('upload')}
                                className="p-2 hover:bg-gray-100 rounded transition-colors"
                              >
                                <Edit2 className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                                <Copy className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-red-50 rounded transition-colors">
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
          </>
        )}

        {/* Upload/Edit Episode */}
        {activeView === 'upload' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Episode Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Audio Upload */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Audio File</h3>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00B4D8] transition-colors cursor-pointer bg-gray-50">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Drag and drop your audio file here
                  </p>
                  <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                  <p className="text-xs text-gray-400">
                    Supported formats: MP3, WAV, M4A (max 500MB)
                  </p>
                </div>

                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Uploading...</span>
                      <span className="text-sm font-semibold text-[#00B4D8]">
                        {uploadProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#00B4D8] h-2 rounded-full transition-all"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Audio Preview (after upload) */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <button className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center text-white hover:bg-[#0096b8] transition-colors">
                        <Play className="w-5 h-5" />
                      </button>
                      <div>
                        <div className="font-medium text-[#1E3A5F]">episode-audio.mp3</div>
                        <div className="text-sm text-gray-600">Duration: 45:32</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Replace
                    </Button>
                  </div>
                  {/* Waveform placeholder */}
                  <div className="w-full h-16 bg-gradient-to-r from-[#00B4D8]/20 via-[#00B4D8]/40 to-[#00B4D8]/20 rounded" />
                </div>
              </Card>

              {/* Episode Information */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Episode Information</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Episode Title *
                    </label>
                    <Input placeholder="Enter episode title..." />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Episode Number
                      </label>
                      <Input type="number" placeholder="25" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Season (Optional)
                      </label>
                      <Input type="number" placeholder="1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Publish Date
                      </label>
                      <Input type="date" defaultValue="2025-01-05" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Publish Time
                      </label>
                      <Input type="time" defaultValue="09:00" />
                    </div>
                  </div>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Publish immediately</span>
                  </label>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Episode Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                      <option>Full Episode</option>
                      <option>Trailer</option>
                      <option>Bonus Content</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1E3A5F]">Description & Show Notes</h3>
                  <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8]">
                    <Sparkles className="w-3 h-3 mr-2" />
                    AI Assist
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Description (for podcast apps)
                    </label>
                    <Textarea
                      placeholder="Brief episode summary..."
                      rows={3}
                      className="resize-none"
                    />
                    <div className="text-xs text-gray-500 mt-1">250 characters remaining</div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Show Notes
                    </label>
                    <div className="border border-gray-300 rounded-lg">
                      <div className="flex items-center space-x-2 p-2 border-b border-gray-200 bg-gray-50">
                        <button className="p-1.5 hover:bg-gray-200 rounded">
                          <strong className="text-sm">B</strong>
                        </button>
                        <button className="p-1.5 hover:bg-gray-200 rounded">
                          <em className="text-sm">I</em>
                        </button>
                        <button className="p-1.5 hover:bg-gray-200 rounded">
                          <LinkIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-200 rounded">
                          <List className="w-4 h-4" />
                        </button>
                      </div>
                      <Textarea
                        placeholder="Full episode description with timestamps, topics covered, guest info..."
                        rows={8}
                        className="border-0 resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Generate from Transcript
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Summarize Episode
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Create Social Captions
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Guest Information */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <button
                  onClick={() => setShowGuests(!showGuests)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-xl font-bold text-[#1E3A5F]">Guest Information</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${showGuests ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {showGuests && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Guest Name
                            </label>
                            <Input placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Title/Role
                            </label>
                            <Input placeholder="CEO, Company Name" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Bio
                          </label>
                          <Textarea placeholder="Guest bio..." rows={3} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm" className="border-gray-300">
                            <ImageIcon className="w-3 h-3 mr-2" />
                            Upload Photo
                          </Button>
                          <button className="text-sm text-red-600 hover:underline">
                            Remove Guest
                          </button>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#00B4D8] text-[#00B4D8]"
                      >
                        <Plus className="w-3 h-3 mr-2" />
                        Add Another Guest
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>

              {/* Chapters */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <button
                  onClick={() => setShowChapters(!showChapters)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <h3 className="text-xl font-bold text-[#1E3A5F]">Chapters/Timestamps</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${showChapters ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {showChapters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-3"
                    >
                      {[
                        { time: '00:00:00', title: 'Introduction' },
                        { time: '00:05:30', title: 'Topic Discussion' },
                        { time: '00:35:15', title: 'Q&A Session' },
                      ].map((chapter, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                          <Input value={chapter.time} className="w-32" />
                          <Input value={chapter.title} className="flex-1" />
                          <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      ))}

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#00B4D8] text-[#00B4D8]"
                        >
                          <Plus className="w-3 h-3 mr-2" />
                          Add Chapter
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-300">
                          Import from Transcript
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            {/* Right Column - Media & Settings */}
            <div className="space-y-6">
              {/* Episode Artwork */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Episode Artwork</h3>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#00B4D8] transition-colors cursor-pointer mb-4">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-1">Upload episode cover</p>
                  <p className="text-xs text-gray-500">3000x3000 recommended</p>
                </div>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                  <span className="text-sm text-gray-700">Use default show artwork</span>
                </label>
              </Card>

              {/* Tags & Categories */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Tags & Categories</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tags</label>
                    <Input placeholder="Add tags..." />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Marketing', 'SEO', 'Digital'].map((tag, i) => (
                        <Badge key={i} className="bg-blue-100 text-blue-700">
                          {tag}
                          <X className="w-3 h-3 ml-1 cursor-pointer" />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                      <option>Business</option>
                      <option>Marketing</option>
                      <option>Technology</option>
                    </select>
                  </div>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Explicit content</span>
                  </label>
                </div>
              </Card>

              {/* SEO & Visibility */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">SEO & Visibility</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      URL Slug
                    </label>
                    <Input placeholder="episode-slug" />
                  </div>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span className="text-sm text-gray-700">Publish to website</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span className="text-sm text-gray-700">Add to RSS feed</span>
                  </label>
                </div>
              </Card>

              {/* Transcript */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Transcript</h3>

                <div className="space-y-3">
                  <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Auto-Generate Transcript
                  </Button>

                  <Button variant="outline" className="w-full border-gray-300">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Transcript File
                  </Button>

                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Show on website</span>
                  </label>
                </div>
              </Card>

              {/* Actions */}
              <div className="space-y-3 sticky top-4">
                <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Publish Now
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" className="w-full border-gray-300">
                  Save as Draft
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics */}
        {activeView === 'analytics' && (
          <>
            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Download className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-gray-600">Total Downloads</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">128,400</div>
                <div className="text-xs text-green-600 mt-1">Last 30 days</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Headphones className="w-4 h-4 text-[#FF6B35]" />
                  <div className="text-sm text-gray-600">Unique Listeners</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">45,200</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-gray-600">Avg Listen Time</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">32:15</div>
              </Card>

              <Card className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">78%</div>
              </Card>
            </div>

            {/* Downloads Chart */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Downloads Over Time</h2>
                  <p className="text-sm text-gray-600">Total downloads for all episodes</p>
                </div>
                <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={downloadsData}>
                  <defs>
                    <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B4D8" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00B4D8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="downloads"
                    stroke="#00B4D8"
                    strokeWidth={3}
                    fill="url(#colorDownloads)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Platform Breakdown */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Listening Platforms</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {platformData.map((platform, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: platform.color }}
                        />
                        <span className="text-sm font-medium text-[#1E3A5F]">{platform.name}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{platform.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Geographic */}
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Top Locations</h3>

                <div className="space-y-3">
                  {[
                    { country: 'United States', downloads: 48200, percentage: 42 },
                    { country: 'United Kingdom', downloads: 18500, percentage: 16 },
                    { country: 'Canada', downloads: 12300, percentage: 11 },
                    { country: 'Australia', downloads: 9800, percentage: 8 },
                    { country: 'Germany', downloads: 8200, percentage: 7 },
                  ].map((location, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#1E3A5F]">
                          {location.country}
                        </span>
                        <span className="text-sm font-bold text-gray-700">
                          {location.downloads.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#00B4D8] h-2 rounded-full transition-all"
                          style={{ width: `${location.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Top Episodes */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Top Performing Episodes</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Rank
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Episode
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Downloads
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Avg Duration
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Completion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEpisodes.map((episode) => (
                      <tr key={episode.rank} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center font-bold text-white">
                            {episode.rank}
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-[#1E3A5F]">{episode.title}</td>
                        <td className="py-4 px-4 font-semibold text-green-600">
                          {episode.downloads.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-gray-700">{episode.avgDuration}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${episode.completion}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">
                              {episode.completion}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {/* Settings */}
        {activeView === 'settings' && (
          <div className="max-w-4xl space-y-6">
            {/* Show Information */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Podcast Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Podcast Title *
                  </label>
                  <Input placeholder="ThinkMents Marketing Podcast" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <Textarea placeholder="Your podcast description..." rows={4} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Host Name
                    </label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Owner Email
                    </label>
                    <Input type="email" placeholder="podcast@thinkments.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Show Artwork (3000x3000)
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <Button variant="outline" className="border-gray-300">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Artwork
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* RSS Feed */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">RSS Feed</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    RSS Feed URL
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value="https://thinkments.com/podcast/feed.xml"
                      readOnly
                      className="flex-1"
                    />
                    <Button variant="outline" size="sm" className="border-gray-300">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    Feed is valid and active
                  </span>
                </div>
              </div>
            </Card>

            {/* Distribution */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Platform Distribution</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Apple Podcasts', status: 'connected', icon: Radio, color: 'purple' },
                  { name: 'Spotify', status: 'connected', icon: Music, color: 'green' },
                  { name: 'Google Podcasts', status: 'pending', icon: Radio, color: 'blue' },
                  { name: 'Amazon Music', status: 'not-connected', icon: Music, color: 'orange' },
                ].map((platform, i) => {
                  const Icon = platform.icon;
                  return (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 bg-${platform.color}-100 rounded-lg flex items-center justify-center`}
                          >
                            <Icon className="w-5 h-5 text-gray-700" />
                          </div>
                          <span className="font-semibold text-[#1E3A5F]">{platform.name}</span>
                        </div>
                        <Badge
                          className={`${platform.status === 'connected'
                              ? 'bg-green-100 text-green-700'
                              : platform.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-gray-100 text-gray-700'
                            } capitalize`}
                        >
                          {platform.status}
                        </Badge>
                      </div>
                      {platform.status === 'connected' ? (
                        <Button variant="outline" size="sm" className="w-full border-gray-300">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View on Platform
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                        >
                          Connect
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Embed Settings */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Embed Player</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Player Style
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                    <option>Standard Player</option>
                    <option>Mini Player</option>
                    <option>Full Player</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Embed Code
                  </label>
                  <Textarea
                    value='<iframe src="https://thinkments.com/podcast/embed" width="100%" height="200"></iframe>'
                    readOnly
                    rows={3}
                  />
                  <Button variant="outline" size="sm" className="mt-2 border-gray-300">
                    <Copy className="w-3 h-3 mr-2" />
                    Copy Code
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && selectedEpisode && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => {
                setShowPreviewModal(false);
                setSelectedEpisode(null);
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
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Episode Preview</h2>
                  <button
                    onClick={() => {
                      setShowPreviewModal(false);
                      setSelectedEpisode(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-6">
                  <img
                    src={selectedEpisode.thumbnail}
                    alt={selectedEpisode.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div>
                    <div className="text-sm text-[#00B4D8] font-semibold mb-2">
                      Episode {selectedEpisode.number}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                      {selectedEpisode.title}
                    </h3>
                  </div>

                  {/* Audio Player */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center text-white hover:bg-[#0096b8] transition-colors">
                        <Play className="w-6 h-6" />
                      </button>
                      <div className="text-sm font-medium text-gray-700">
                        00:00 / {selectedEpisode.duration}
                      </div>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div className="bg-[#00B4D8] h-2 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button className="flex-1 bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Episode
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
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
