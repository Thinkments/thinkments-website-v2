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
  Activity,
  Zap
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
        <Activity className="w-12 h-12 text-indigo-500 animate-pulse mb-4 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
        <p className="text-indigo-300/80 font-mono text-sm uppercase tracking-widest font-bold animate-pulse">Initializing Command Matrix...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 bg-rose-900/20 text-rose-400 rounded-2xl border border-rose-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(225,29,72,0.1)] flex flex-col items-start gap-4 mx-auto max-w-3xl mt-10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-rose-500" />
          <h3 className="text-xl font-bold text-rose-300">Telemetry Feed Disconnected</h3>
        </div>
        <p className="text-sm font-mono opacity-80">{error}</p>
        <Button onClick={() => window.location.reload()} className="bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 font-bold tracking-widest uppercase text-xs">
          Re-establish Connection
        </Button>
      </div>
    );
  }

  const { stats, recentActivity, upcomingPosts, performanceData } = data;

  return (
    <div className="space-y-6 relative z-10 w-full min-h-screen text-slate-200 p-2 md:p-6 lg:p-1">
      {/* Global Ambient Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[30%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[30%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10"
      >
        <div>
          <div className="flex items-center gap-3 mb-2 opacity-80">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest font-mono">Operations Center // Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-400 tracking-tight mb-2">
            Welcome back, Apex.
          </h1>
          <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl">
            The swarm is operational. Here is your unified telemetry overview across all generative agent nodes and content pipelines.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/5 shadow-inner">
           <div className="px-4 py-2 flex flex-col items-center border-r border-white/5">
             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Load</span>
             <span className="text-sm font-black text-emerald-400">NOMINAL</span>
           </div>
           <div className="px-4 py-2 flex flex-col items-center">
             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Nodes</span>
             <span className="text-sm font-black text-indigo-400">ALL 12/12</span>
           </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat: StatData, index: number) => {
          const isUp = stat.trend === 'up';
          return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border border-white/5 bg-black/40 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 relative h-full flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-indigo-500/50 transition-all duration-500" />
              <CardContent className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2 group-hover:text-indigo-300 transition-colors">{stat.title}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <p className="text-4xl font-black text-white tracking-tighter drop-shadow-sm">{stat.value}</p>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-800/50 border border-white/10 backdrop-blur-md relative overflow-hidden group-hover:scale-110 transition-transform`}>
                    <div className={`absolute inset-0 opacity-20`} style={{ backgroundColor: stat.color }} />
                    {(() => {
                      const Icon = iconMap[stat.iconName as keyof typeof iconMap] || FileText;
                      return <Icon className="w-5 h-5 text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />;
                    })()}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 self-start px-3 py-1.5 rounded-lg border border-white/5">
                  {isUp ? (
                    <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <ArrowDown className="w-3.5 h-3.5 text-rose-400" />
                  )}
                  <span className={`text-xs font-black tracking-wide ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stat.change}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider ml-1">vs 30d</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )})}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10"
      >
        <Card className="border border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.15)] bg-gradient-to-r from-indigo-950/80 via-purple-950/80 to-indigo-950/80 backdrop-blur-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
          
          <CardContent className="p-6 md:p-8 relative z-10">
            <h3 className="text-sm font-black text-indigo-200 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" /> Direct Command Execution Override
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'New Blog Matrix', icon: PenTool, bg: 'hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]', id: 'new-blog' },
                { label: 'Architect Page', icon: Layers, bg: 'hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]', id: 'new-page' },
                { label: 'Content Chrono', icon: Calendar, bg: 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]', id: 'calendar' },
                { label: 'Task Directives', icon: CheckSquare, bg: 'hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]', id: 'task-board' },
                { label: 'Security Auditor', icon: ShieldCheck, bg: 'hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]', id: 'page-auditor' },
              ].map((action, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className={`bg-black/40 text-slate-300 border border-white/5 h-auto py-6 flex flex-col items-center space-y-3 transition-all duration-300 backdrop-blur-md rounded-2xl group ${action.bg}`}
                  onClick={() => onNavigate?.(action.id)}
                >
                  <action.icon className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-center">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Live Agent API Feeds Data Hub */}
      <div className="relative z-10 w-full">
        <LiveAgentFeeds />
      </div>

      {/* Performance Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl h-full flex flex-col">
            <CardHeader className="border-b border-white/5 pb-4 mb-4">
              <CardTitle className="flex items-center justify-between text-white">
                <span className="flex items-center gap-2 tracking-tight">
                  <Activity className="w-5 h-5 text-indigo-400" /> Platform Telemetry Trace
                </span>
                <Badge variant="outline" className="text-indigo-300 border-indigo-500/30 bg-indigo-500/10 text-[10px] uppercase font-bold tracking-widest">
                  T-Minus 30 Days
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end">
              <div className="h-[280px] w-full mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="date" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
                      itemStyle={{ color: '#e2e8f0' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stroke="#818cf8"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorViews)"
                    />
                    <Area
                      type="monotone"
                      dataKey="engagement"
                      stroke="#22d3ee"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorEngagement)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-6">
                <div className="flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg">
                  <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
                  <span className="text-[11px] font-bold text-indigo-200 uppercase tracking-widest">Traffic Volume</span>
                </div>
                <div className="flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <span className="text-[11px] font-bold text-cyan-200 uppercase tracking-widest">User Engagement</span>
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
          <Card className="border border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl h-full flex flex-col">
            <CardHeader className="border-b border-white/5 pb-4 mb-4 flex-none">
              <CardTitle className="flex items-center justify-between text-white">
                <span className="flex items-center gap-2 tracking-tight">
                  <Layers className="w-5 h-5 text-purple-400" /> Operational Log
                </span>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 text-xs font-bold uppercase tracking-widest" asChild>
                  <Link to="/admin/blogs">Full Log</Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-1">
                {recentActivity.map((activity: ActivityData, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 hover:bg-white/[0.03] rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-white/5"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border relative ${
                        activity.type === 'blog' 
                        ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      }`}
                    >
                      {activity.type === 'blog' ? (
                        <FileText className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-sm font-bold text-slate-200 truncate group-hover:text-white transition-colors">
                        {activity.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-mono text-slate-500">
                          {activity.action} :: {activity.author}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{activity.time}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`shrink-0 uppercase tracking-widest text-[9px] font-black px-2 py-0.5 mt-1
                        ${activity.status === 'success' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : ''}
                        ${activity.status === 'pending' ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' : ''}
                        ${activity.status === 'draft' ? 'text-slate-400 border-slate-700 bg-slate-800' : ''}
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
        className="relative z-10"
      >
        <Card className="border border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl">
          <CardHeader className="border-b border-white/5 pb-5 mb-5">
            <CardTitle className="flex items-center justify-between">
              <span className="text-white flex items-center gap-2 tracking-tight">
                <Calendar className="w-5 h-5 text-pink-400" /> Upcoming Distribution Schedule
              </span>
              <Button variant="ghost" size="sm" className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 text-xs font-bold tracking-widest uppercase" onClick={() => onNavigate?.('calendar')}>
                Chrono Matrix
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {upcomingPosts.map((post: UpcomingPostData, index: number) => (
                <div
                  key={index}
                  className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] hover:border-pink-500/30 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-white leading-snug pr-4">{post.title}</h4>
                    <Clock className="w-4 h-4 text-pink-500 shrink-0 opacity-70 group-hover:opacity-100 group-hover:animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-500" /> {post.date} @ {post.time}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      <Layers className="w-3 h-3 text-slate-600" /> OP: {post.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
