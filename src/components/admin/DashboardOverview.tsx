import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  LineChart,
  Line,
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
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Calendar,
  Image as ImageIcon,
  PenTool,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface DashboardOverviewProps {
  onNavigate?: (page: string) => void;
}

export default function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const stats = [
    {
      title: 'Total Blogs Published',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: FileText,
      color: 'bg-[#1E3A5F]',
    },
    {
      title: 'Pages Created This Month',
      value: '34',
      change: '+8%',
      trend: 'up',
      icon: Layers,
      color: 'bg-[#00B4D8]',
    },
    {
      title: 'Pending Reviews',
      value: '8',
      change: '-3',
      trend: 'down',
      icon: Clock,
      color: 'bg-[#FF6B35]',
    },
    {
      title: 'SEO Score Average',
      value: '87/100',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-[#00B4D8]',
    },
  ];

  const recentActivity = [
    {
      type: 'blog',
      title: 'How to Improve Local SEO in 2025',
      author: 'John Doe',
      action: 'Published',
      time: '2 hours ago',
      status: 'success',
    },
    {
      type: 'page',
      title: 'Digital Marketing Denton - Service Page',
      author: 'Jane Smith',
      action: 'Created',
      time: '4 hours ago',
      status: 'success',
    },
    {
      type: 'blog',
      title: 'Social Media Marketing Guide',
      author: 'Mike Johnson',
      action: 'Pending Review',
      time: '6 hours ago',
      status: 'pending',
    },
    {
      type: 'page',
      title: 'About Us - Company Overview',
      author: 'Sarah Wilson',
      action: 'Updated',
      time: '1 day ago',
      status: 'success',
    },
    {
      type: 'blog',
      title: 'Email Marketing Best Practices',
      author: 'Tom Brown',
      action: 'Draft Saved',
      time: '2 days ago',
      status: 'draft',
    },
  ];

  const upcomingPosts = [
    {
      title: 'Video Marketing Trends 2025',
      date: 'Dec 8, 2025',
      time: '10:00 AM',
      author: 'John Doe',
    },
    {
      title: 'Google Ads Optimization Tips',
      date: 'Dec 10, 2025',
      time: '2:00 PM',
      author: 'Jane Smith',
    },
    {
      title: 'Content Marketing Strategy',
      date: 'Dec 12, 2025',
      time: '9:00 AM',
      author: 'Mike Johnson',
    },
  ];

  const performanceData = [
    { date: 'Nov 5', views: 4200, engagement: 3400 },
    { date: 'Nov 10', views: 4800, engagement: 3900 },
    { date: 'Nov 15', views: 5200, engagement: 4200 },
    { date: 'Nov 20', views: 4600, engagement: 3800 },
    { date: 'Nov 25', views: 5500, engagement: 4500 },
    { date: 'Nov 30', views: 6200, engagement: 5100 },
    { date: 'Dec 5', views: 6800, engagement: 5600 },
  ];

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
        {stats.map((stat, index) => (
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
                    <stat.icon className="w-6 h-6 text-white" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                asChild
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4"
                onClick={() => onNavigate?.('/admin/blog/new')}
              >
                <Link to="/admin/blog/new" className="flex flex-col items-center space-y-2">
                  <PenTool className="w-6 h-6" />
                  <span className="font-medium">New Blog Post</span>
                </Link>
              </Button>
              <Button
                asChild
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4"
                onClick={() => onNavigate?.('/admin/page/new')}
              >
                <Link to="/admin/page/new" className="flex flex-col items-center space-y-2">
                  <Layers className="w-6 h-6" />
                  <span className="font-medium">New Page</span>
                </Link>
              </Button>
              <Button
                asChild
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 h-auto py-4"
                onClick={() => onNavigate?.('/admin/calendar')}
              >
                <Link to="/admin/calendar" className="flex flex-col items-center space-y-2">
                  <Calendar className="w-6 h-6" />
                  <span className="font-medium">View Content Calendar</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

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
                {recentActivity.map((activity, index) => (
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
              <Button variant="ghost" size="sm" className="text-[#00B4D8]" asChild>
                <Link to="/admin/calendar">View Calendar</Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingPosts.map((post, index) => (
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
