import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Globe,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Clock,
  Zap,
  Shield,
  AlertCircle,
  CheckCircle,
  Download,
  Settings,
  Bell,
  Smartphone,
  Monitor as MonitorIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

// Mock data
const websites = [
  { id: '1', name: 'ThinkMents Main Site', url: 'thinkments.com', status: 'online' },
  { id: '2', name: 'Acme Corporation', url: 'acmecorp.com', status: 'online' },
  { id: '3', name: 'TechStart Blog', url: 'blog.techstart.io', status: 'online' },
];

const uptimeData = [
  { date: 'Jan 1', uptime: 100 },
  { date: 'Jan 5', uptime: 100 },
  { date: 'Jan 10', uptime: 99.9 },
  { date: 'Jan 15', uptime: 100 },
  { date: 'Jan 20', uptime: 100 },
  { date: 'Jan 25', uptime: 99.8 },
  { date: 'Today', uptime: 100 },
];

const responseTimeData = [
  { time: '00:00', responseTime: 245 },
  { time: '04:00', responseTime: 189 },
  { time: '08:00', responseTime: 320 },
  { time: '12:00', responseTime: 456 },
  { time: '16:00', responseTime: 380 },
  { time: '20:00', responseTime: 290 },
  { time: 'Now', responseTime: 235 },
];

const incidents = [
  {
    id: '1',
    date: '2025-01-03 14:23',
    duration: '2 min 15 sec',
    type: 'Timeout',
    cause: 'Server overload',
    status: 'resolved',
  },
  {
    id: '2',
    date: '2024-12-28 09:15',
    duration: '8 min 42 sec',
    type: '500 Server Error',
    cause: 'Database connection issue',
    status: 'resolved',
  },
];

const allSites = [
  { id: '1', name: 'ThinkMents Main', status: 'online', uptime: 99.97, responseTime: 235 },
  { id: '2', name: 'Acme Corp', status: 'online', uptime: 99.94, responseTime: 189 },
  { id: '3', name: 'TechStart Blog', status: 'online', uptime: 100, responseTime: 156 },
  { id: '4', name: 'Retail Solutions', status: 'online', uptime: 99.89, responseTime: 412 },
];

export default function UptimeMonitor() {
  const [activeTab, setActiveTab] = useState<'uptime' | 'speed'>('uptime');
  const [selectedWebsite, setSelectedWebsite] = useState('1');
  const [timeRange, setTimeRange] = useState('30');

  const stats = {
    status: 'online',
    statusDuration: '24 days 18 hours',
    uptime: 99.97,
    totalDowntime: '12 minutes',
    avgResponseTime: 235,
    incidentsThisMonth: 2,
    sslValid: '2025-12-15',
    speedScoreMobile: 87,
    speedScoreDesktop: 94,
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-[#0f172a]/40 backdrop-blur-xl border-b border-white/10 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-whitexl font-bold text-white mb-2">Website Health Monitor</h1>
            <p className="text-slate-400">Monitor uptime, speed, and performance of your websites</p>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {/* Website Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <select
                value={selectedWebsite}
                onChange={(e) => setSelectedWebsite(e.target.value)}
                className="px-4 py-2 bg-[#0f172a]/40 backdrop-blur-xl border border-white/20 rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
              >
                {websites.map((site) => (
                  <option key={site.id} value={site.id}>
                    {site.name} - {site.url}
                  </option>
                ))}
              </select>
            </div>

            {/* Tab Toggle */}
            <div className="flex items-center bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('uptime')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeTab === 'uptime' ? 'bg-[#0f172a]/40 backdrop-blur-xl text-white shadow' : 'text-slate-400'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Uptime</span>
              </button>
              <button
                onClick={() => setActiveTab('speed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeTab === 'speed' ? 'bg-[#0f172a]/40 backdrop-blur-xl text-white shadow' : 'text-slate-400'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Speed</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-900/20 rounded-lg">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-emerald-900/200 rounded-full"
              />
              <span className="font-bold text-green-700 uppercase">Online</span>
            </div>

            {/* Last Checked */}
            <div className="text-sm text-slate-400">
              Last checked: <span className="font-medium">2 min ago</span>
            </div>

            {/* Check Now Button */}
            <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Uptime Tab */}
        {activeTab === 'uptime' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-slate-400">Status</div>
                </div>
                <div className="text-xl font-bold text-green-600 uppercase">Online</div>
                <div className="text-xs text-slate-500 mt-1">{stats.statusDuration}</div>
              </Card>

              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-slate-400">Uptime (30d)</div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.uptime}%</div>
              </Card>

              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-rose-400" />
                  <div className="text-sm text-slate-400">Downtime (30d)</div>
                </div>
                <div className="text-2xl font-bold text-rose-400">{stats.totalDowntime}</div>
              </Card>

              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-[#00B4D8]" />
                  <div className="text-sm text-slate-400">Avg Response</div>
                </div>
                <div className="text-2xl font-bold text-white">{stats.avgResponseTime}ms</div>
              </Card>

              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#FF6B35]" />
                  <div className="text-sm text-slate-400">Incidents</div>
                </div>
                <div className="text-2xl font-bold text-[#FF6B35]">{stats.incidentsThisMonth}</div>
                <div className="text-xs text-slate-500 mt-1">this month</div>
              </Card>

              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <div className="text-sm text-slate-400">SSL Certificate</div>
                </div>
                <div className="text-sm font-bold text-green-600">Valid</div>
                <div className="text-xs text-slate-500 mt-1">Until {stats.sslValid}</div>
              </Card>
            </div>

            {/* Uptime Chart */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Uptime History</h2>
                  <p className="text-sm text-slate-400">Daily uptime percentage</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="px-3 py-1.5 bg-[#0f172a]/40 backdrop-blur-xl border border-white/20 rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] cursor-pointer"
                  >
                    <option value="7">7 days</option>
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                  </select>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={uptimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} domain={[99, 100]} />
                  <Tooltip />
                  <Bar dataKey="uptime" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Response Time Chart */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Response Time</h2>
                  <p className="text-sm text-slate-400">Average response time over 24 hours</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={responseTimeData}>
                  <defs>
                    <linearGradient id="colorResponse" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B4D8" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00B4D8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="responseTime"
                    stroke="#00B4D8"
                    strokeWidth={2}
                    fill="url(#colorResponse)"
                  />
                  <Line
                    y={500}
                    stroke="#ef4444"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    name="Threshold (500ms)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* Incident Log */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Incident Log</h2>
                  <p className="text-sm text-slate-400">Recent downtime incidents</p>
                </div>
                <Button variant="outline" size="sm" className="border-white/20">
                  <Download className="w-3 h-3 mr-2" />
                  Export Report
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Date/Time
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Type
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Root Cause
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((incident) => (
                      <tr key={incident.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4 text-slate-300">{incident.date}</td>
                        <td className="py-4 px-4 font-medium text-rose-400">{incident.duration}</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-rose-500/10 text-rose-300">{incident.type}</Badge>
                        </td>
                        <td className="py-4 px-4 text-slate-400">{incident.cause}</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-emerald-500/10 text-green-700 capitalize">
                            {incident.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Multi-Site Overview */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">All Monitored Sites</h2>
                <p className="text-sm text-slate-400">Quick overview of all websites</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {allSites.map((site) => (
                  <div
                    key={site.id}
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:shadow-2xl border border-white/5 transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-white">{site.name}</span>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          site.status === 'online' ? 'bg-emerald-900/200' : 'bg-rose-900/200'
                        }`}
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Uptime:</span>
                        <span className="font-medium text-green-600">{site.uptime}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Response:</span>
                        <span className="font-medium text-slate-300">{site.responseTime}ms</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {/* Speed Tab */}
        {activeTab === 'speed' && (
          <>
            {/* Speed Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-[#00B4D8]" />
                    <h3 className="text-xl font-bold text-white">Mobile Speed</h3>
                  </div>
                  <Button size="sm" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    Run Test
                  </Button>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#10b981"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${stats.speedScoreMobile * 4.4} 440`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold text-white">
                        {stats.speedScoreMobile}
                      </div>
                      <div className="text-sm text-slate-400">/ 100</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-slate-400">Last tested: 2 hours ago</div>
              </Card>

              <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <MonitorIcon className="w-6 h-6 text-[#00B4D8]" />
                    <h3 className="text-xl font-bold text-white">Desktop Speed</h3>
                  </div>
                  <Button size="sm" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    Run Test
                  </Button>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#10b981"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${stats.speedScoreDesktop * 4.4} 440`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold text-white">
                        {stats.speedScoreDesktop}
                      </div>
                      <div className="text-sm text-slate-400">/ 100</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-slate-400">Last tested: 2 hours ago</div>
              </Card>
            </div>

            {/* Core Web Vitals */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Core Web Vitals</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-emerald-900/20 rounded-lg border border-green-200">
                  <div className="text-sm text-slate-400 mb-2">Largest Contentful Paint (LCP)</div>
                  <div className="text-whitexl font-bold text-green-700 mb-1">1.2s</div>
                  <Badge className="bg-green-600 text-white">Good</Badge>
                </div>

                <div className="p-4 bg-emerald-900/20 rounded-lg border border-green-200">
                  <div className="text-sm text-slate-400 mb-2">First Input Delay (FID)</div>
                  <div className="text-whitexl font-bold text-green-700 mb-1">45ms</div>
                  <Badge className="bg-green-600 text-white">Good</Badge>
                </div>

                <div className="p-4 bg-amber-900/20 rounded-lg border border-yellow-200">
                  <div className="text-sm text-slate-400 mb-2">Cumulative Layout Shift (CLS)</div>
                  <div className="text-whitexl font-bold text-yellow-700 mb-1">0.08</div>
                  <Badge className="bg-yellow-600 text-white">Needs Improvement</Badge>
                </div>
              </div>
            </Card>

            {/* Performance Recommendations */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Performance Recommendations</h3>

              <div className="space-y-4">
                {[
                  {
                    priority: 'high',
                    category: 'Images',
                    title: 'Optimize images',
                    impact: 'Save 2.4s load time',
                    description: 'Serve images in next-gen formats like WebP',
                  },
                  {
                    priority: 'high',
                    category: 'JavaScript',
                    title: 'Reduce unused JavaScript',
                    impact: 'Save 1.8s load time',
                    description: 'Remove or defer unused JS to improve performance',
                  },
                  {
                    priority: 'medium',
                    category: 'CSS',
                    title: 'Minimize render-blocking CSS',
                    impact: 'Save 0.9s load time',
                    description: 'Inline critical CSS and defer non-critical styles',
                  },
                  {
                    priority: 'low',
                    category: 'Server',
                    title: 'Enable text compression',
                    impact: 'Save 0.3s load time',
                    description: 'Enable gzip or brotli compression on server',
                  },
                ].map((rec, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Badge
                          className={`${
                            rec.priority === 'high'
                              ? 'bg-rose-500/10 text-rose-300'
                              : rec.priority === 'medium'
                                ? 'bg-amber-500/10 text-yellow-700'
                                : 'bg-white/10 text-slate-300'
                          } capitalize`}
                        >
                          {rec.priority}
                        </Badge>
                        <Badge className="bg-indigo-500/10 text-indigo-300">{rec.category}</Badge>
                      </div>
                      <span className="text-sm font-medium text-green-600">{rec.impact}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-1">{rec.title}</h4>
                    <p className="text-sm text-slate-400">{rec.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {/* Alerts Configuration */}
        <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Alert Configuration</h2>
              <p className="text-sm text-slate-400">Set up notifications for issues</p>
            </div>
            <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8]">
              <Bell className="w-3 h-3 mr-2" />
              Test Alert
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <div className="font-semibold text-white">Site Goes Down</div>
                  <div className="text-sm text-slate-400">Immediate notification</div>
                </div>
                <button className="relative w-12 h-6 bg-[#00B4D8] rounded-full">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <div className="font-semibold text-white">Response Time {'>'} 500ms</div>
                  <div className="text-sm text-slate-400">Performance alert</div>
                </div>
                <button className="relative w-12 h-6 bg-[#00B4D8] rounded-full">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-full" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Recipients
                </label>
                <Input placeholder="team@thinkments.com, alerts@thinkments.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Slack Webhook URL
                </label>
                <Input placeholder="https://hooks.slack.com/services/..." />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
