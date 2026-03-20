import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Search, Crosshair, AlertTriangle, ShieldAlert, TrendingDown, Zap, Code, Layout, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface ReconResult {
  domain: string;
  domainAuthority: number;
  organicTraffic: string;
  paidSpend: string;
  topKeyword: string;
  vulnerabilities: {
    type: string;
    description: string;
    severity: 'High' | 'Medium' | 'Low';
    iconType: string;
  }[];
  attackVectors: {
    action: string;
    impact: string;
    difficulty: string;
  }[];
}

const IconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  ShieldAlert,
  Layout,
  TrendingDown,
  TrendingUp,
  Target,
  Search,
  Crosshair,
  Zap,
  Code
};

export default function TheTexasRecon() {
  const [targetUrl, setTargetUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState('');
  const [result, setResult] = useState<ReconResult | null>(null);

  const performReconScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl) return;

    setIsScanning(true);
    setScanProgress(0);
    setResult(null);

    const stages = [
      { progress: 15, msg: "Initializing OSINT scrapers..." },
      { progress: 35, msg: "Extracting historical SEMrush ad spend..." },
      { progress: 55, msg: "Analyzing backlink footprint via Ahrefs API structure..." },
      { progress: 75, msg: "Compiling Google Business Profile local parity..." },
      { progress: 90, msg: "Processing Vulnerability Matrix algorithms..." },
    ];

    let currentStage = 0;
    
    // Simulate real-time scanning steps cosmetically while we await the backend
    const interval = setInterval(() => {
      const stage = stages[currentStage];
      if (stage) {
        setScanProgress(stage.progress);
        setScanStatus(stage.msg);
        currentStage++;
      }
    }, 1200);

    try {
      const res = await fetch('/api/texas-recon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ targetUrl }),
      });

      if (!res.ok) {
        throw new Error('OSINT scan failed to process');
      }

      const data = await res.json();
      
      clearInterval(interval);
      setScanProgress(100);
      setScanStatus("Reconnaissance complete. Generating attack vectors.");
      
      setTimeout(() => {
        setIsScanning(false);
        setResult(data);
      }, 500);

    } catch (error) {
      console.error(error);
      clearInterval(interval);
      setIsScanning(false);
      setScanStatus("OSINT scan failed unexpectedly.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-900 border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-900/20">
            <Crosshair className="w-6 h-6 text-red-100" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">The Reconnaissance Engine</h2>
            <p className="text-slate-400 text-sm">Target competing agencies and extract their vulnerabilities.</p>
          </div>
        </div>
      </div>

      {/* Target Input */}
      <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-rose-500 to-orange-500" />
        <CardContent className="p-8">
          <form onSubmit={performReconScan} className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-slate-950 rounded-xl border border-slate-700/50 p-2">
                <Target className="w-5 h-5 text-red-500 ml-3 mr-3 flex-shrink-0" />
                <input 
                  type="text" 
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="Enter rival agency domain (e.g., dallasmarketing.com)" 
                  className="bg-transparent border-none text-white w-full py-2 focus:ring-0 placeholder:text-slate-600 focus:outline-none"
                  disabled={isScanning}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20 py-6 px-8 rounded-xl shrink-0"
              disabled={isScanning || !targetUrl}
            >
              <Search className="w-5 h-5 mr-2" />
              {isScanning ? 'Locking Coordinates...' : 'Execute Deep Scan'}
            </Button>
          </form>

          {/* Scanning Animation */}
          <AnimatePresence>
            {isScanning && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 max-w-4xl mx-auto"
              >
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-red-400 flex items-center"><Code className="w-3 h-3 mr-1" /> OSINT ENGINE RUNNING</span>
                  <span className="text-slate-400">{scanProgress}%</span>
                </div>
                <Progress value={scanProgress} className="h-1.5 bg-slate-800 [&>div]:bg-red-500 [&>div]:shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <p className="text-center font-mono text-xs text-slate-500 mt-3 animate-pulse">
                  {scanStatus}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Results Matrix */}
      <AnimatePresence>
        {result && !isScanning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Intel Briefing */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-slate-900/90 border-slate-800 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                  <Zap className="w-32 h-32" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-2 flex items-center">
                    <Crosshair className="w-4 h-4 mr-2 text-red-500" />
                    Target Intelligence
                  </h3>
                  
                  <div className="space-y-5 relative z-10">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Target Hostname</p>
                      <p className="text-white font-mono font-medium">{result.domain}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Domain Auth</p>
                        <p className="text-2xl text-white font-bold">{result.domainAuthority}/100</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Est. Org Traffic</p>
                        <p className="text-xl text-green-400 font-bold">{result.organicTraffic}</p>
                      </div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/50">
                      <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Avg Paid Spend</p>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-rose-500 mr-2" />
                        <p className="text-xl text-rose-400 font-bold">{result.paidSpend}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Top Converting Keyword</p>
                      <p className="text-slate-200 text-sm font-medium p-2 bg-slate-800/50 rounded inline-block border border-slate-700/50">
                        "{result.topKeyword}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vulnerability Matrix & Attack Vectors */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-slate-900/90 border-slate-800 backdrop-blur-xl h-full flex flex-col">
                <CardContent className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-2 flex items-center">
                    <ShieldAlert className="w-4 h-4 mr-2 text-red-500" />
                    Vulnerability Matrix
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {result.vulnerabilities.map((vuln, i) => {
                      const VulnIcon = IconMap[vuln.iconType] || AlertTriangle;
                      return (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        key={i} 
                        className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-red-900/50 transition-colors group cursor-default"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <VulnIcon className={`w-4 h-4 mr-2 ${vuln.severity === 'High' ? 'text-red-500' : vuln.severity === 'Medium' ? 'text-orange-500' : 'text-slate-400'}`} />
                            <span className="text-sm font-bold text-white">{vuln.type}</span>
                          </div>
                          <Badge variant={vuln.severity === 'High' ? "destructive" : "secondary"} className={vuln.severity === 'High' ? "bg-red-500/10 text-red-400 border-red-500/20" : "bg-slate-800 text-slate-300"}>
                            {vuln.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {vuln.description}
                        </p>
                      </motion.div>
                    )})}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                    Recommended Attack Vectors
                  </h3>
                  
                  <div className="space-y-3">
                    {result.attackVectors.map((attack, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        key={i} 
                        className="flex items-center justify-between p-3 bg-red-950/20 border border-red-900/30 rounded-lg hover:bg-red-900/20 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-xs font-bold text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                            {i+1}
                          </div>
                          <span className="text-sm text-slate-200">{attack.action}</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-red-900/50 hover:bg-red-900/50 hover:text-white bg-slate-950 text-slate-300 text-xs hidden sm:flex shrink-0 ml-4">
                          Execute Strike
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
