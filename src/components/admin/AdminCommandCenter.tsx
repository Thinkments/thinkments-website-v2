import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Terminal,
  Search,
  Bot,
  Zap,
  Globe,
  Database,
  BarChart,
  Megaphone,
  Network,
  Cpu,
  Shield,
  Code
} from 'lucide-react';

interface AICommand {
  id: string;
  command: string;
  category: 'SEO' | 'Content' | 'Analytics' | 'Live Agents' | 'System';
  agent: string;
  description: string;
  example: string;
  icon: React.ElementType;
}

const COMMAND_DATA: AICommand[] = [
  {
    id: 'cmd-1',
    command: '/generate-seo',
    category: 'SEO',
    agent: 'SEO Optimization Engine',
    description: 'Triggers a full-page SEO audit for the provided URL, generating a detailed report of missing schemas, alt tags, and structural metadata.',
    example: '/generate-seo url=https://thinkments.com/services/email-marketing',
    icon: Globe
  },
  {
    id: 'cmd-2',
    command: '/liquidations',
    category: 'Live Agents',
    agent: 'The Liquidation Node',
    description: 'Fetches real-time liquidation thresholds across major crypto exchanges (Coinglass/Binance) to alert on high-leverage washouts.',
    example: '/liquidations asset=BTC/USDT window=24h',
    icon: Zap
  },
  {
    id: 'cmd-3',
    command: '/whale-alert',
    category: 'Live Agents',
    agent: 'The Obsidian Ledger',
    description: 'Scans mempools and block explorers for on-chain transactions exceeding the specified dollar value.',
    example: '/whale-alert min_usd=500000',
    icon: Database
  },
  {
    id: 'cmd-4',
    command: '/scout-profile',
    category: 'Live Agents',
    agent: 'Scout OSINT Agent',
    description: 'Performs a deep reconnaissance scrape using Proxycurl on a specified LinkedIn profile or company domain.',
    example: '/scout-profile url=linkedin.com/in/johndoe',
    icon: Network
  },
  {
    id: 'cmd-5',
    command: '/chart-growth',
    category: 'Analytics',
    agent: 'Data Synthesis Core',
    description: 'Compiles historical traffic data from Google Analytics into a predictive growth chart for the next 30 days.',
    example: '/chart-growth metric=sessions date_range=90d',
    icon: BarChart
  },
  {
    id: 'cmd-6',
    command: '/write-blog',
    category: 'Content',
    agent: 'AIBlogGenerator',
    description: 'Automates a fully formatted, SEO-optimized 1,500 word blog article surrounding the provided primary keywords.',
    example: '/write-blog keywords="Video SEO, Answer Engine Optimization"',
    icon: Megaphone
  },
  {
    id: 'cmd-7',
    command: '/system-audit',
    category: 'System',
    agent: 'System Architect AI',
    description: 'Evaluates the overall MACE architecture, Next.js / Vite build efficiency, and React component cohesiveness.',
    example: '/system-audit depth=deep',
    icon: Cpu
  },
  {
    id: 'cmd-8',
    command: '/domain-strategy',
    category: 'System',
    agent: 'Vanguard Strategy Module',
    description: 'Calculates high-level brand penetration and keyword gaps relative to specified competitors.',
    example: '/domain-strategy rivals=["agencyx.com", "competitory.com"]',
    icon: Shield
  }
];

const CATEGORIES = ['All', 'SEO', 'Content', 'Analytics', 'Live Agents', 'System'];

export default function AdminCommandCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCommands = COMMAND_DATA.filter((cmd) => {
    const matchesSearch =
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.agent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || cmd.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-[#1E3A5F]">
            <Terminal className="w-8 h-8 text-[#00B4D8]" />
            AI Command Center
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A comprehensive reference library for all operational MACE AI commands. Use these endpoints to trigger autonomous workflows, intelligence gathering, and structural generation.
          </p>
        </div>
      </div>

      {/* Constraints and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search commands, agents, or descriptions..."
            className="pl-10 h-10 w-full bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white shadow-md' 
                : 'text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCommands.map((cmd, index) => (
            <motion.div
              layout
              key={cmd.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Card className="h-full border-gray-200 hover:border-[#00B4D8]/30 transition-shadow hover:shadow-lg bg-white overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00B4D8]/5 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                
                <CardHeader className="pb-3 border-b border-gray-50 bg-gray-50/50">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#1E3A5F]/5 flex items-center justify-center border border-[#1E3A5F]/10">
                        <cmd.icon className="w-5 h-5 text-[#1E3A5F]" />
                      </div>
                      <div>
                        <CardTitle className="font-mono text-lg text-[#00B4D8] mb-1">
                          {cmd.command}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1.5 font-medium text-xs uppercase tracking-wider text-gray-500">
                          <Bot className="w-3.5 h-3.5" /> {cmd.agent}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-white">
                      {cmd.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4 space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed min-h-[60px]">
                    {cmd.description}
                  </p>
                  
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-400 focus:outline-none flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" /> Example Execution
                      </span>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-rose-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
                      </div>
                    </div>
                    <code className="text-sm text-emerald-400 font-mono break-all selection:bg-emerald-900 selection:text-emerald-100">
                      {cmd.example}
                    </code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {filteredCommands.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-1 lg:col-span-2 py-20 flex flex-col items-center justify-center text-center bg-gray-50 rounded-xl border border-dashed border-gray-200"
            >
              <Terminal className="w-12 h-12 text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">No commands found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your search query or category filter.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
