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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-red-100 rounded-lg">
              <Crosshair className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">Project Lone Star</h1>
            <Badge className="bg-red-600 text-white animate-pulse">CLASSIFIED: TOP PRIORITY</Badge>
          </div>
          <p className="text-gray-600">Master Objective: Establish Thinkments as the #1 Digital Agency in Texas</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
            <Zap className="w-4 h-4 mr-2" />
            Initiate State-Wide Scan
          </Button>
          <Button className="bg-[#1E3A5F] text-white">
            <Target className="w-4 h-4 mr-2" />
            Deploy Automated Outreach
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveView('overview')}
          className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
            activeView === 'overview'
              ? 'border-[#00B4D8] text-[#1E3A5F]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          War Room Overview
        </button>
        <button
          onClick={() => setActiveView('prospector')}
          className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
            activeView === 'prospector'
              ? 'border-[#00B4D8] text-[#1E3A5F]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          The Prospector
        </button>
        <button
          onClick={() => setActiveView('cartographer')}
          className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
            activeView === 'cartographer'
              ? 'border-[#00B4D8] text-[#1E3A5F]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          The Texas Cartographer
        </button>
        <button
          onClick={() => setActiveView('recon')}
          className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
            activeView === 'recon'
              ? 'border-[#00B4D8] text-[#1E3A5F]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          The Recon Engine
        </button>
      </div>

      {activeView === 'overview' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Top Line Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-l-4 border-[#00B4D8] shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Statewide Penetration</p>
                    <h3 className="text-3xl font-bold text-[#1E3A5F]">12.4%</h3>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Map className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#00B4D8] h-2 rounded-full" style={{ width: '12.4%' }} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500 shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Leads Identified</p>
                    <h3 className="text-3xl font-bold text-[#1E3A5F]">5,540</h3>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Database className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +450 this week
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500 shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Active Poach Ops</p>
                    <h3 className="text-3xl font-bold text-[#1E3A5F]">84</h3>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <Briefcase className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <p className="text-sm text-yellow-600 mt-4 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Awaiting 12 replies
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500 shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Local Pages Generated</p>
                    <h3 className="text-3xl font-bold text-[#1E3A5F]">1,250</h3>
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
              <CardHeader className="bg-gray-50 border-b border-gray-100">
                <CardTitle className="flex items-center text-[#1E3A5F]">
                  <Building2 className="w-5 h-5 mr-2" />
                  Major Hub Domination Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {TEXAS_HUBS.map((hub) => (
                    <div key={hub.name} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-900">{hub.name}</div>
                        <Badge variant="outline" className="text-gray-600 bg-white">
                          {hub.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{hub.leadsFound.toLocaleString()} potential clients</span>
                        <span className="font-medium text-[#00B4D8]">{hub.penetration}% Market Share</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
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
              <CardHeader className="bg-gray-50 border-b border-gray-100">
                <CardTitle className="flex items-center text-[#1E3A5F] justify-between">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Live Prospect Feed
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Updating Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {RECENT_TARGETS.map((target, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-red-50 rounded-lg mt-1">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{target.company}</p>
                          <div className="flex items-center text-xs text-gray-500 space-x-2 mt-1">
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
