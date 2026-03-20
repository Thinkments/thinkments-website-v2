import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Map,
  Target,
  Crosshair,
  TrendingUp,
  AlertCircle,
  Zap,
  Database,
  Building2,
  Briefcase,
  Layers,
  CheckCircle,
} from 'lucide-react';
import TheProspector from './TheProspector';
import TheTexasCartographer from './TheTexasCartographer';
import TheTexasRecon from './TheTexasRecon';

const TEXAS_HUBS = [
  { name: 'Dallas-Fort Worth', penetration: 12, leadsFound: 1450, status: 'Active Campaign' },
  { name: 'Houston', penetration: 8, leadsFound: 2100, status: 'Mapping SEO' },
  { name: 'Austin', penetration: 24, leadsFound: 890, status: 'High Competition' },
  { name: 'San Antonio', penetration: 5, leadsFound: 1100, status: 'Initial Outreach' },
];

const RECENT_TARGETS = [
  { company: 'DFW Plumbing Pros', city: 'Dallas', issue: 'Missing SSL, Slow Load', value: '$2k/mo' },
  { company: 'Austin Elite Roofing', city: 'Austin', issue: 'No GBP, High Ad Spend', value: '$4k/mo' },
  { company: 'Houston Legal Group', city: 'Houston', issue: 'Bad Reviews, Thin Content', value: '$5k/mo' },
  { company: 'San Antonio HVAC', city: 'San Antonio', issue: 'Not Mobile Optimized', value: '$1.5k/mo' },
];

export default function ProjectLoneStar() {
  const [activeView, setActiveView] = useState<'overview' | 'prospector' | 'cartographer' | 'recon'>('overview');

  return (
    <div className="relative space-y-6">
      {/* Ambient orbs */}
      <div className="absolute -top-10 left-1/3 w-96 h-64 bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-red-600/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-rose-500/15 border border-rose-500/20 rounded-lg">
              <Crosshair className="w-5 h-5 text-rose-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Project Lone Star</h1>
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 animate-pulse">
              CLASSIFIED: TOP PRIORITY
            </span>
          </div>
          <p className="text-slate-400">Master Objective: Establish Thinkments as the #1 Digital Agency in Texas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-rose-500/20 text-rose-300 hover:bg-rose-500/10 text-sm font-semibold transition-colors">
            <Zap className="w-4 h-4" />
            Initiate State-Wide Scan
          </button>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-red-700 hover:from-rose-600 hover:to-red-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all">
            <Target className="w-4 h-4" />
            Deploy Automated Outreach
          </motion.button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="relative z-10 flex gap-1 bg-black/30 border border-white/8 rounded-xl p-1 w-fit">
        {[
          { id: 'overview', label: 'War Room Overview' },
          { id: 'prospector', label: 'The Prospector' },
          { id: 'cartographer', label: 'Texas Cartographer' },
          { id: 'recon', label: 'Recon Engine' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id as typeof activeView)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeView === tab.id
                ? 'bg-rose-600/25 border border-rose-500/30 text-rose-300 shadow-[0_0_10px_rgba(220,38,38,0.2)]'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeView === 'overview' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Top Line Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-l-4 border-[#00B4D8] shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Statewide Penetration</p>
                    <h3 className="text-2xl font-bold text-white">12.4%</h3>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-lg">
                    <Map className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                </div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#00B4D8] h-2 rounded-full" style={{ width: '12.4%' }} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Total Leads Identified</p>
                    <h3 className="text-2xl font-bold text-white">5,540</h3>
                  </div>
                  <div className="p-3 bg-emerald-900/20 rounded-lg">
                    <Database className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +450 this week
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Active Poach Ops</p>
                    <h3 className="text-2xl font-bold text-white">84</h3>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <p className="text-sm text-yellow-600 mt-4 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Awaiting 12 replies
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Local Pages Generated</p>
                    <h3 className="text-2xl font-bold text-white">1,250</h3>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Layers className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Across 42 Zip Codes
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Texas Hub Maps */}
            <Card className="shadow-lg border-0 border-t-4 border-[#1E3A5F]">
              <CardHeader className="bg-white/5 border-b border-white/5">
                <CardTitle className="flex items-center text-white">
                  <Building2 className="w-5 h-5 mr-2" />
                  Major Hub Domination Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {TEXAS_HUBS.map((hub) => (
                    <div key={hub.name} className="p-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-100">{hub.name}</div>
                        <Badge variant="outline" className="text-slate-400 bg-[#0f172a]/40 backdrop-blur-xl">
                          {hub.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                        <span>{hub.leadsFound.toLocaleString()} potential clients</span>
                        <span className="font-medium text-[#00B4D8]">{hub.penetration}% Market Share</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] h-1.5 rounded-full"
                          style={{ width: `${hub.penetration}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Target Live Feed */}
            <Card className="shadow-lg border-0 border-t-4 border-[#00B4D8]">
              <CardHeader className="bg-white/5 border-b border-white/5">
                <CardTitle className="flex items-center text-white justify-between">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Live Prospect Feed
                  </div>
                  <Badge className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/10">Updating Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {RECENT_TARGETS.map((target, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-rose-900/20 rounded-lg mt-1">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-100">{target.company}</p>
                          <div className="flex items-center text-xs text-slate-500 space-x-2 mt-1">
                            <span className="flex items-center"><Map className="w-3 h-3 mr-1" /> {target.city}</span>
                            <span>•</span>
                            <span className="text-red-500">{target.issue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className="text-sm font-bold text-green-600">{target.value}</span>
                        <Button size="sm" variant="outline" className="h-7 text-xs px-2">
                          Push to Task Board
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {activeView === 'prospector' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <TheProspector />
        </motion.div>
      )}

      {activeView === 'cartographer' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <TheTexasCartographer />
        </motion.div>
      )}

      {activeView === 'recon' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <TheTexasRecon />
        </motion.div>
      )}
    </div>
  );
}
