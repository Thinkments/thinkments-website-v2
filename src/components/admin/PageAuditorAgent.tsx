import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  CheckCircle2,
  AlertCircle,
  Play,
  Settings,
  ShieldCheck,
  FileText,
  AlertTriangle,
  RefreshCw,
  Clock,
  ExternalLink,
  Plus,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

interface PageIssue {
  id: string;
  url: string;
  title: string;
  type: 'missing-images' | 'placeholder-text' | 'incomplete-seo' | 'broken-layout';
  severity: 'high' | 'medium' | 'low';
  description: string;
  foundAt: string;
  status: 'open' | 'logged';
}

export default function PageAuditorAgent() {
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState<string | null>(null);
  const [issues, setIssues] = useState<PageIssue[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const mockScan = async () => {
    setIsScanning(true);
    setIssues([]);
    
    try {
      const response = await fetch('/api/scan-pages');
      
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || `HTTP error ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.issues) {
        setIssues(data.issues);
        setLastScan(new Date().toLocaleTimeString() + ` (${data.totalPages} pages scanned)`);
      }
    } catch (error) {
      console.error('Failed to run scan:', error);
      // Use fallback issues if the serverless function fails (e.g. if we are not testing via netlify dev)
      setIssues([
        {
          id: 'error-fallback',
          url: '#',
          title: 'Scan Error',
          type: 'broken-layout',
          severity: 'high',
          description: `Failed to reach Netlify function. Are you running 'npm run dev' or 'netlify dev'? Error: ${error}`,
          foundAt: new Date().toISOString(),
          status: 'open'
        }
      ]);
    } finally {
      setIsScanning(false);
    }
  };

  const handleLogTask = (id: string) => {
    // In a real app we'd trigger an API to add or update global state.
    // Here we just mark the issue as logged locally to show immediate feedback.
    setIssues(prev => prev.map(issue => 
      issue.id === id ? { ...issue, status: 'logged' } : issue
    ));
    
    // Dispatch a custom event to notify other parts of the app (like TaskBoard)
    // In React this is often handled by Context/Redux, but we can emit a simple event for demonstration if needed.
    const event = new CustomEvent('task-logged', { detail: { id } });
    window.dispatchEvent(event);
  };

  return (
    <div className="relative space-y-6">
      {/* Ambient */}
      <div className="absolute -top-6 left-1/3 w-96 h-64 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-violet-500/15 border border-violet-500/20 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400">Site Health Monitor</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Page Auditor Agent</h1>
          <p className="text-slate-400">Automatically scan your site for incomplete pages, missing content, and lingering placeholders.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/8 text-sm font-semibold transition-colors">
            <Settings className="w-4 h-4" />
            Scan Settings
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={mockScan}
            disabled={isScanning}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
          >
            {isScanning ? (
              <><RefreshCw className="w-4 h-4 animate-spin" />Scanning Pages...</>
            ) : (
              <><Play className="w-4 h-4" />Run Full Audit</>
            )}
          </motion.button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Pages Scanned', value: lastScan ? '142' : '0', icon: FileText, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
          { label: 'Issues Found', value: String(issues.length), icon: AlertCircle, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
          { label: 'High Severity', value: String(issues.filter(i => i.severity === 'high').length), icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
          { label: 'Tasks Logged', value: String(issues.filter(i => i.status === 'logged').length), icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={i} whileHover={{ y: -2 }} className={`rounded-2xl bg-[#090f1a] border border-white/8 p-5 flex justify-between items-start`}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`p-2.5 rounded-xl border ${stat.bg}`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <Card className="border-0 shadow-2xl border border-white/5">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search issues by page or type..." 
                className="pl-10 h-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          {lastScan && (
            <div className="text-sm text-slate-500 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Last scanned: {lastScan}
            </div>
          )}
        </div>

        <div className="p-0">
          {issues.length === 0 && !isScanning ? (
            <div className="text-center py-16 px-4">
              <ShieldCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-100 mb-2">Ready to Scan</h3>
              <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                No issues detected yet. Run a full site audit to identify pages missing crucial content, images, or metadata.
              </p>
              <Button onClick={mockScan} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="w-4 h-4 mr-2" /> Start First Audit
              </Button>
            </div>
          ) : isScanning ? (
            <div className="text-center py-16 px-4">
              <RefreshCw className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-spin" />
              <h3 className="text-lg font-medium text-gray-100 mb-2">Analyzing React Components...</h3>
              <p className="text-slate-500">Checking for missing images and incomplete text...</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              <AnimatePresence>
                {issues
                  .filter(i => 
                    i.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    i.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map(issue => (
                  <motion.div 
                    key={issue.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`mt-1 flex-shrink-0 ${
                          issue.severity === 'high' ? 'text-red-500' :
                          issue.severity === 'medium' ? 'text-orange-500' : 'text-blue-500'
                        }`}>
                          {issue.severity === 'high' ? <AlertCircle className="w-5 h-5" /> : 
                           <AlertTriangle className="w-5 h-5" />}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h4 className="text-lg font-medium text-gray-100">{issue.title}</h4>
                            <Badge variant="outline" className={`
                              ${issue.type === 'missing-images' ? 'border-red-200 text-rose-300 bg-rose-900/20' : ''}
                              ${issue.type === 'placeholder-text' ? 'border-orange-200 text-orange-700 bg-orange-900/20' : ''}
                              ${issue.type === 'incomplete-seo' ? 'border-blue-200 text-indigo-300 bg-indigo-900/20' : ''}
                            `}>
                              {issue.type.replace('-', ' ')}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm mb-3">
                            <a href={issue.url} target="_blank" rel="noreferrer" className="text-[#00B4D8] hover:underline flex items-center">
                              {issue.url} <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                          <p className="text-slate-400 text-sm max-w-2xl bg-[#0f172a]/40 backdrop-blur-xl p-3 rounded-lg border border-white/5 font-mono">
                            {issue.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 items-end">
                        {issue.status === 'open' ? (
                          <Button 
                            onClick={() => handleLogTask(issue.id)}
                            className="bg-[#10B981] hover:bg-[#059669] text-white"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Log to Task Board
                          </Button>
                        ) : (
                          <Badge className="bg-emerald-500/10 text-green-700 border-none px-3 py-1.5 flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Logged to Board
                          </Badge>
                        )}
                        <Button variant="outline" size="sm" className="w-full">
                          <ArrowRight className="w-4 h-4 mr-2" /> Auto-Fix with AI
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
