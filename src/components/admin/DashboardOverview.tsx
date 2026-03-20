import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  FileText,
  Layers,
  Clock,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Calendar,
  PenTool,
  ShieldCheck,
  CheckSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import LiveAgentFeeds from './LiveAgentFeeds';

interface StatData {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  iconName: string;
  color: string;
}

interface ActivityData {
  type: string;
  title: string;
  author: string;
  action: string;
  time: string;
  status: string;
}

interface UpcomingPostData {
  title: string;
  date: string;
  time: string;
  author: string;
}

interface PerformanceData {
  date: string;
  views: number;
  engagement: number;
}

interface DashboardData {
  stats: StatData[];
  recentActivity: ActivityData[];
  upcomingPosts: UpcomingPostData[];
  performanceData: PerformanceData[];
}

interface DashboardOverviewProps {
  onNavigate?: (page: string) => void;
}

export default function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/admin-dashboard');
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        const json = await response.json();
        if (json.success) {
          setData(json.data);
        } else {
          throw new Error(json.error || 'Unknown error');
        }
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching dashboard items:', errMsg);
        setError(errMsg);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  const iconMap = { FileText, Layers, Clock, TrendingUp };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00B4D8]"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        <p>Error loading dashboard data: {error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const { stats, recentActivity, upcomingPosts, performanceData } = data;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Welcome back, Admin!</h1>
        <p className="text-gray-600">Here's what's happening with your content today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat: StatData, index: number) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-[#1E3A5F] mb-2">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500">vs last month</span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                  >
                    {(() => {
                      const Icon = iconMap[stat.iconName as keyof typeof iconMap] || FileText;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-0 shadow-md bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Button
                variant="ghost"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4 flex flex-col items-center space-y-2 border shadow-sm"
                onClick={() => onNavigate?.('new-blog')}
              >
                <PenTool className="w-6 h-6" />
                <span className="font-medium text-center">New Blog</span>
              </Button>
              <Button
                variant="ghost"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4 flex flex-col items-center space-y-2 border shadow-sm"
                onClick={() => onNavigate?.('new-page')}
              >
                <Layers className="w-6 h-6" />
                <span className="font-medium text-center">New Page</span>
              </Button>
              <Button
                variant="ghost"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4 flex flex-col items-center space-y-2 border shadow-sm"
                onClick={() => onNavigate?.('calendar')}
              >
                <Calendar className="w-6 h-6" />
                <span className="font-medium text-center">Calendar</span>
              </Button>
              <Button
                variant="ghost"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4 flex flex-col items-center space-y-2 border shadow-sm"
                onClick={() => onNavigate?.('task-board')}
              >
                <CheckSquare className="w-6 h-6" />
                <span className="font-medium text-center">Task Board</span>
              </Button>
              <Button
                variant="ghost"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4 flex flex-col items-center space-y-2 border shadow-sm"
                onClick={() => onNavigate?.('page-auditor')}
              >
                <ShieldCheck className="w-6 h-6" />
                <span className="font-medium text-center">Page Auditor</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Live Agent API Feeds Data Hub */}
      <LiveAgentFeeds />

      {/* Performance Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border-0 shadow-md h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-[#1E3A5F]">Content Performance</span>
                <Badge variant="outline" className="text-[#00B4D8] border-[#00B4D8]">
                  Last 30 Days
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B4D8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00B4D8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FF6B35" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E4E8" />
                  <XAxis dataKey="date" stroke="#6C757D" />
                  <YAxis stroke="#6C757D" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#00B4D8"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                  <Area
                    type="monotone"
                    dataKey="engagement"
                    stroke="#FF6B35"
                    fillOpacity={1}
                    fill="url(#colorEngagement)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#00B4D8] rounded-full"></div>
                  <span className="text-sm text-gray-600">Page Views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
                  <span className="text-sm text-gray-600">Engagement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="border-0 shadow-md h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-[#1E3A5F]">Recent Activity</span>
                <Button variant="ghost" size="sm" className="text-[#00B4D8]" asChild>
                  <Link to="/admin/blogs">View All</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity: ActivityData, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'blog' ? 'bg-[#00B4D8]/10' : 'bg-[#FF6B35]/10'
                      }`}
                    >
                      {activity.type === 'blog' ? (
                        <FileText
                          className={`w-4 h-4 ${activity.type === 'blog' ? 'text-[#00B4D8]' : 'text-[#FF6B35]'}`}
                        />
                      ) : (
                        <Layers className="w-4 h-4 text-[#FF6B35]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1E3A5F] truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.action} by {activity.author}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`
                        ${activity.status === 'success' ? 'text-green-600 border-green-200 bg-green-50' : ''}
                        ${activity.status === 'pending' ? 'text-orange-600 border-orange-200 bg-orange-50' : ''}
                        ${activity.status === 'draft' ? 'text-gray-600 border-gray-200 bg-gray-50' : ''}
                      `}
                    >
                      {activity.action}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Upcoming Scheduled Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-[#1E3A5F] flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Upcoming Scheduled Posts</span>
              </span>
              <Button variant="ghost" size="sm" className="text-[#00B4D8]" onClick={() => onNavigate?.('calendar')}>
                View Calendar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingPosts.map((post: UpcomingPostData, index: number) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#00B4D8] transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-[#1E3A5F]">{post.title}</h4>
                    <Clock className="w-4 h-4 text-[#00B4D8]" />
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    {post.date} at {post.time}
                  </p>
                  <p className="text-xs text-gray-500">By {post.author}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
