import React from 'react';
import { motion } from 'motion/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { TrendingUp, Users, Target, MousePointerClick, ArrowUpRight, ArrowDownRight, Activity, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const performanceData = [
  { name: 'Jan', organic: 4000, paid: 2400 },
  { name: 'Feb', organic: 4500, paid: 2600 },
  { name: 'Mar', organic: 5100, paid: 2800 },
  { name: 'Apr', organic: 6200, paid: 3100 },
  { name: 'May', organic: 7400, paid: 3500 },
  { name: 'Jun', organic: 8900, paid: 3800 },
];

const kpiData = [
  {
    title: 'Total Traffic',
    value: '12,740',
    change: '+14.2%',
    trend: 'up',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Conversions',
    value: '842',
    change: '+22.4%',
    trend: 'up',
    icon: Target,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Cost per Lead',
    value: '$24.50',
    change: '-5.1%',
    trend: 'down', // Down is good for cost
    icon: MousePointerClick,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Active ROI',
    value: '384%',
    change: '+12.6%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
  },
];

const recentActivity = [
  { action: 'Monthly SEO Report generated', time: '2 hours ago', icon: FileText, color: 'text-blue-500' },
  { action: 'Google Ads campaign "Summer Blitz" activated', time: '1 day ago', icon: Activity, color: 'text-green-500' },
  { action: 'Invoice #4029 paid successfully', time: '3 days ago', icon: Bell, color: 'text-purple-500' },
  { action: 'Support ticket #192 resolved', time: '5 days ago', icon: Target, color: 'text-orange-500' },
];

function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

export default function DashboardView() {
  return (
    <div className="p-6 md:p-10 min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Performance Overview</h1>
          <p className="text-gray-500 mt-1">
            Welcome back, Acme Corp. Here's how your campaigns are performing this month.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${kpi.color}`} />
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{kpi.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${kpi.color} shadow-sm opacity-90`}>
                    <kpi.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <span className={`flex items-center text-sm font-medium ${
                    kpi.trend === 'up' && kpi.title !== 'Cost per Lead' || kpi.trend === 'down' && kpi.title === 'Cost per Lead'
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {kpi.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {kpi.change}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg bg-white h-full">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="text-xl font-bold text-[#1E3A5F]">Traffic Acquisition</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00B4D8" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00B4D8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1E3A5F" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#1E3A5F" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} dx={-10} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ fontWeight: 600 }}
                    />
                    <Area type="monotone" dataKey="organic" stroke="#00B4D8" strokeWidth={3} fillOpacity={1} fill="url(#colorOrganic)" />
                    <Area type="monotone" dataKey="paid" stroke="#1E3A5F" strokeWidth={3} fillOpacity={1} fill="url(#colorPaid)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-0 shadow-lg bg-white h-full">
            <CardHeader className="border-b border-gray-100 pb-4">
              <CardTitle className="text-xl font-bold text-[#1E3A5F]">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="p-5 hover:bg-gray-50 transition-colors flex items-start gap-4 cursor-default">
                    <div className={`mt-1 p-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 leading-snug">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <button className="text-sm font-medium text-[#00B4D8] hover:text-[#1E3A5F] transition-colors">
                  View All History
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
