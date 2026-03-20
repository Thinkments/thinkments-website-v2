import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  TrendingUp,
  Users,
  Target,
  BarChart2,
  Calendar,
  Layers,
  Zap,
  Radio,
  Share2,
  Crosshair,
  Shield,
  Search,
  CheckCircle2,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

// Mock Data
const dmxPerformanceData = [
  { name: 'Monday', leads: 45, conversions: 12, revenue: 15400 },
  { name: 'Tuesday', leads: 52, conversions: 18, revenue: 21200 },
  { name: 'Wednesday', leads: 38, conversions: 9, revenue: 9800 },
  { name: 'Thursday', leads: 65, conversions: 24, revenue: 28500 },
  { name: 'Friday', leads: 48, conversions: 15, revenue: 18900 },
  { name: 'Saturday', leads: 82, conversions: 35, revenue: 39500 },
  { name: 'Sunday', leads: 75, conversions: 28, revenue: 32400 },
];

const streetAgents = [
  { id: 1, name: 'Marcus Vanguard', zone: 'Dallas Metro - North', status: 'Active', conversions: 42, efficiency: 94 },
  { id: 2, name: 'Elena Rodriguez', zone: 'Fort Worth Central', status: 'In Transit', conversions: 38, efficiency: 89 },
  { id: 3, name: 'James Chen', zone: 'Frisco Commercial', status: 'Briefing', conversions: 45, efficiency: 96 },
  { id: 4, name: 'Sarah Jenkins', zone: 'Plano Tech Corridor', status: 'Active', conversions: 31, efficiency: 82 },
];

const targetZones = [
  { id: 1, name: 'Uptown Business District', potential: 'High', coverage: 45, difficulty: 'Medium' },
  { id: 2, name: 'Design District Retail', potential: 'Maximum', coverage: 12, difficulty: 'High' },
  { id: 3, name: 'West 7th Entertainment', potential: 'High', coverage: 78, difficulty: 'Low' },
];

export default function StreetSalesDMX() {
  const [activeTab, setActiveTab] = useState<'overview' | 'agents' | 'zones'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-8">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full point-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full point-events-none translate-y-1/3 -translate-x-1/3" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>DMX DIRECT DEPLOYMENT ACTIVE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight">
              Street Sales: DMX
            </h1>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Direct Marketing Execution. Monitor field agents, track street-level conversions, and dominate physical territories with real-time geospatial intelligence.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl px-6 h-12 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <Crosshair className="w-4 h-4 mr-2" />
              Assign Territories
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-6 h-12 shadow-[0_0_20px_rgba(79,70,229,0.4)] font-bold">
              <Zap className="w-4 h-4 mr-2" />
              Launch Strike
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active DMX Agents', value: '18', trend: '+3 deployed', icon: Users, color: 'from-blue-500 to-cyan-400' },
          { label: 'Territories Secured', value: '42', trend: '+12% this week', icon: MapPin, color: 'from-indigo-500 to-purple-500' },
          { label: 'Street Conversions', value: '156', trend: '+28% vs last week', icon: Target, color: 'from-emerald-400 to-teal-500' },
          { label: 'Field Revenue', value: '$165.4K', trend: '+15.2% MoM', icon: TrendingUp, color: 'from-amber-400 to-orange-500' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 relative overflow-hidden group"
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5" />
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border-none font-semibold text-xs py-1">
                {stat.trend}
              </Badge>
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-400 text-sm font-medium">{stat.label}</h3>
              <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Conversion Chart \u0026 Agent Roster */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Wrapper */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-400" />
                  DMX Strike Performance
                </h2>
                <p className="text-sm text-slate-400 mt-1">Street sales volume and revenue generation across all active zones.</p>
              </div>
              <select className="bg-black/50 border border-white/10 text-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-indigo-500">
                <option>Past 7 Days</option>
                <option>This Month</option>
                <option>Quarter to Date</option>
              </select>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dmxPerformanceData}>
                  <defs>
                    <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff40" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => \`\${value}\`}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                    itemStyle={{ color: '#818cf8' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#818cf8" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorConversions)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* DMX Field Agents List */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" />
                DMX Field Operatives
              </h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <Input placeholder="Search operative..." className="pl-9 bg-black/50 border-white/10 text-sm h-9 w-48 rounded-lg" />
              </div>
            </div>

            <div className="space-y-3">
              {streetAgents.map((agent) => (
                <div key={agent.id} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-white font-bold group-hover:text-indigo-300 transition-colors">{agent.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{agent.zone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-slate-400 font-medium">Conversions</p>
                      <p className="text-slate-200 font-bold">{agent.conversions}</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-slate-400 font-medium">Efficiency</p>
                      <p className="text-emerald-400 font-bold">{agent.efficiency}%</p>
                    </div>
                    <Badge className={\`border-none font-bold py-1 \${
                      agent.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      agent.status === 'In Transit' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-indigo-500/20 text-indigo-400'
                    }\`}>
                      {agent.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">
              View All Operatives <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Right Col: Target Zones & Live Feed */}
        <div className="space-y-6">
          {/* High Priority Zones */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-indigo-500/20 p-6 shadow-[inset_0_0_40px_rgba(99,102,241,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Crosshair className="w-32 h-32" />
            </div>
            
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-indigo-400" />
              Priority Targets
            </h2>

            <div className="space-y-4">
              {targetZones.map((zone) => (
                <div key={zone.id} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-200 text-sm">{zone.name}</h3>
                    <Badge className={\`border-none text-[10px] uppercase font-black tracking-wider \${
                      zone.potential === 'Maximum' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'
                    }\`}>
                      {zone.potential} POTENTIAL
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-400">Coverage</span>
                      <span className="text-white">{zone.coverage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: \`\${zone.coverage}%\` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DMX Live Stream (MOCK) */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-6 backdrop-blur-md h-[380px] flex flex-col">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Radio className="w-5 h-5 text-rose-400 animate-pulse" />
              Live Comm Link
            </h2>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {[
                { time: '14:22', user: 'Marcus V.', msg: 'Secured 3 leads at Pluckers HQ.' },
                { time: '14:15', user: 'System', msg: 'Zone 4 redefined as High Density.' },
                { time: '13:58', user: 'Elena R.', msg: 'Moving to West 7th vector.' },
                { time: '13:42', user: 'James C.', msg: 'Closed custom design package. $4.5k.' },
                { time: '13:10', user: 'Admin', msg: 'All agents push to primary commercial strips.' },
                { time: '12:55', user: 'Sarah J.', msg: 'Lunch break over. Hitting Legacy West.' },
              ].map((log, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-slate-500 font-mono text-xs mt-0.5">{log.time}</span>
                  <div>
                    <span className={\`font-bold mr-2 \${
                      log.user === 'System' ? 'text-rose-400' :
                      log.user === 'Admin' ? 'text-amber-400' :
                      'text-indigo-400'
                    }\`}>{log.user}</span>
                    <span className="text-slate-300">{log.msg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
