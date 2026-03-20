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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">Page Auditor Agent</h1>
          </div>
          <p className="text-gray-600">
            Automatically scan your site for incomplete pages, missing content, and lingering placeholders.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Scan Settings
          </Button>
          <Button 
            onClick={mockScan} 
            disabled={isScanning}
            className="bg-gradient-to-r from-purple-600 to-[#1E3A5F] text-white"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Scanning Pages...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Full Audit
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Pages Scanned</p>
                <h3 className="text-2xl font-bold text-[#1E3A5F]">{lastScan ? '142' : '0'}</h3>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Issues Found</p>
                <h3 className="text-2xl font-bold text-red-600">
                  {issues.length > 0 ? issues.length : '0'}
                </h3>
              </div>
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">High Severity</p>
                <h3 className="text-2xl font-bold text-orange-600">
                  {issues.filter(i => i.severity === 'high').length}
                </h3>
              </div>
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Tasks Logged</p>
                <h3 className="text-2xl font-bold text-green-600">
                  {issues.filter(i => i.status === 'logged').length}
                </h3>
              </div>
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="border-0 shadow-md">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
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
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Last scanned: {lastScan}
            </div>
          )}
        </div>

        <div className="p-0">
          {issues.length === 0 && !isScanning ? (
            <div className="text-center py-16 px-4">
              <ShieldCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Scan</h3>
              <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                No issues detected yet. Run a full site audit to identify pages missing crucial content, images, or metadata.
              </p>
              <Button onClick={mockScan} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="w-4 h-4 mr-2" /> Start First Audit
              </Button>
            </div>
          ) : isScanning ? (
            <div className="text-center py-16 px-4">
              <RefreshCw className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-spin" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Analyzing React Components...</h3>
              <p className="text-gray-500">Checking for missing images and incomplete text...</p>
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
                    className="p-6 hover:bg-gray-50 transition-colors"
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
                            <h4 className="text-lg font-medium text-gray-900">{issue.title}</h4>
                            <Badge variant="outline" className={`
                              ${issue.type === 'missing-images' ? 'border-red-200 text-red-700 bg-red-50' : ''}
                              ${issue.type === 'placeholder-text' ? 'border-orange-200 text-orange-700 bg-orange-50' : ''}
                              ${issue.type === 'incomplete-seo' ? 'border-blue-200 text-blue-700 bg-blue-50' : ''}
                            `}>
                              {issue.type.replace('-', ' ')}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm mb-3">
                            <a href={issue.url} target="_blank" rel="noreferrer" className="text-[#00B4D8] hover:underline flex items-center">
                              {issue.url} <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                          <p className="text-gray-600 text-sm max-w-2xl bg-white p-3 rounded-lg border border-gray-100 font-mono">
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
                          <Badge className="bg-green-100 text-green-700 border-none px-3 py-1.5 flex items-center">
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
