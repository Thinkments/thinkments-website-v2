import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Database, Target, Zap, Globe, RefreshCw, Crosshair, AlertTriangle, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';

interface Lead {
  id: string;
  name: string;
  city: string;
  industry: string;
  score: number;
  revenueEst: string;
  issues: string[];
  status: 'new' | 'scanning' | 'ready' | 'failed';
}

const INITIAL_LEADS: Lead[] = [
  { id: '1', name: 'Texas Premium HVAC', city: 'Dallas', industry: 'Home Services', score: 34, revenueEst: '$500k-1M', issues: ['No SSL', 'Slow Load', 'Thin Content'], status: 'ready' },
  { id: '2', name: 'Austin Legal Partners', city: 'Austin', industry: 'Legal', score: 45, revenueEst: '$2M-5M', issues: ['No GBP', 'Poor Backlink Profile'], status: 'ready' }
];

const INDUSTRIES = ['Home Services', 'Legal', 'Healthcare', 'Real Estate', 'Roofing', 'Plumbing', 'Dental'];
const TEXAS_METROS = ['Dallas', 'Austin', 'Houston', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock'];

export default function TheProspector() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [isScanning, setIsScanning] = useState(false);
  const [is10xMode, setIs10xMode] = useState(true);
  
  const [targetCity, setTargetCity] = useState('');
  const [targetIndustry, setTargetIndustry] = useState('Home Services');

  const scanSingleLead = async (city: string, industry: string): Promise<Lead | null> => {
    try {
      const res = await fetch('/api/prospector', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetCity: city, industry })
      });
      if (!res.ok) throw new Error('API failure');
      const data = await res.json();
      return {
        id: Date.now().toString() + Math.random().toString(36).substring(7),
        name: data.name,
        city: data.city,
        industry: data.industry,
        score: data.score,
        revenueEst: data.revenueEst,
        issues: data.issues || ['Vulnerable Node Detected', 'Security Headers Missing'],
        status: 'ready'
      };
    } catch {
      return null;
    }
  };

  const initiateScan = async () => {
    if (!is10xMode && !targetCity) {
      toast.error('Enter a target city or engage 10X BATCH MODE.');
      return;
    }

    setIsScanning(true);

    if (is10xMode) {
      toast.info(`10X SWEEP INITIALIZED: Scanning entire matrix for ${targetIndustry} vulnerabilities...`);
      
      const targetMetros = [...TEXAS_METROS].sort(() => 0.5 - Math.random()).slice(0, 8);
      
      const placeholderLeads: Lead[] = targetMetros.map((city, i) => ({
        id: `scan-${Date.now()}-${i}`,
        name: 'Scanning Database...',
        city,
        industry: targetIndustry,
        score: 0,
        revenueEst: 'Computing...',
        issues: [],
        status: 'scanning'
      }));

      setLeads(prev => [...placeholderLeads, ...prev]);

      const results = await Promise.allSettled(
        targetMetros.map(city => scanSingleLead(city, targetIndustry))
      );

      setLeads(prev => {
        const filtered = prev.filter(l => !l.id.startsWith('scan-'));
        const completed: Lead[] = results.map((res, i) => {
          if (res.status === 'fulfilled' && res.value) return res.value;
          return {
            id: `fail-${Date.now()}-${i}`,
            name: 'Acquisition Failed',
            city: targetMetros[i],
            industry: targetIndustry,
            score: 0,
            revenueEst: 'N/A',
            issues: ['Connection Refused'],
            status: 'failed'
          };
        });
        return [...completed, ...filtered];
      });

      toast.success('Matrix Sweep Complete: Found multiple vulnerable targets!');
    } else {
      toast.info(`The Prospector is scraping registries in ${targetCity}...`);
      
      const tempId = `scan-${Date.now()}`;
      setLeads(prev => [{
        id: tempId,
        name: 'Locating Target...',
        city: targetCity,
        industry: targetIndustry,
        score: 0,
        revenueEst: 'Computing...',
        issues: [],
        status: 'scanning'
      }, ...prev]);

      const result = await scanSingleLead(targetCity, targetIndustry);
      
      setLeads(prev => {
        const filtered = prev.filter(l => l.id !== tempId);
        if (result) return [result, ...filtered];
        return [{
          id: `fail-${Date.now()}`,
          name: 'Acquisition Failed',
          city: targetCity,
          industry: targetIndustry,
          score: 0,
          revenueEst: 'N/A',
          issues: ['Target Not Found'],
          status: 'failed'
        }, ...filtered];
      });

      if (result) toast.success(`Found a highly vulnerable target in ${targetCity}!`);
      else toast.error('Prospector scan failed aggressively. Manual override required.');
    }

    setIsScanning(false);
    if (!is10xMode) setTargetCity('');
  };

  const dispatchToTaskBoard = (lead: Lead) => {
    const event = new CustomEvent('task-logged', {
      detail: {
        title: `Poach Campaign: ${lead.name}`,
        description: `Prospector Agent identified ${lead.name} in ${lead.city} as a vulnerable target.\n\nEstimated Revenue: ${lead.revenueEst}\nIssues Found: ${lead.issues.join(', ')}\nSEO Health Score: ${lead.score}/100`,
        priority: 'high',
        sourceAgent: 'The Prospector'
      }
    });
    window.dispatchEvent(event);
    toast.success(`${lead.name} dispatched to the Task Board for Outreach Execution!`);
  };

  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-2xl bg-[#09090b] overflow-hidden rounded-2xl ring-1 ring-white/10 relative">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

        {/* 10x Header */}
        <div className="relative bg-gradient-to-b from-[#18181b] to-[#09090b] px-8 py-6 flex items-center justify-between border-b border-red-900/30">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-950/30 rounded-xl border border-red-500/20 relative group">
              <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Target className="w-8 h-8 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-red-100">
                The Prospector
              </h2>
              <p className="text-sm text-red-300/60 font-medium tracking-wide flex items-center gap-2 mt-1">
                Automated Vulnerability Scraping <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-widest">Predator Mode</span>
              </p>
            </div>
          </div>
          <Badge className="bg-red-950/50 border border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)] px-4 py-1.5 text-xs tracking-widest font-bold">
            ACQUISITION PROTOCOL ACTIVE
          </Badge>
        </div>
        
        <CardContent className="p-8 relative z-10">
          {/* Dashboard Controls - Glassmorphic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-xl border border-red-500/10 rounded-2xl p-6 md:p-8 mb-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-rose-500/5 to-transparent opacity-50 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="font-bold text-xl text-white flex items-center">
                <ShieldAlert className="w-6 h-6 mr-3 text-red-500" />
                Target Parameters
              </h3>
              
              <div className="flex items-center space-x-3 bg-black/60 p-1.5 rounded-lg border border-white/5">
                <button
                  onClick={() => setIs10xMode(false)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                    !is10xMode 
                      ? 'bg-zinc-800 text-white shadow-lg' 
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  SINGLE PINPOINT
                </button>
                <button
                  onClick={() => setIs10xMode(true)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all flex items-center ${
                    is10xMode 
                      ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                      : 'text-zinc-500 hover:text-red-400'
                  }`}
                >
                  <Crosshair className="w-3 h-3 mr-1" /> 10X BATCH SWEEP
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <AnimatePresence mode="popLayout">
                {!is10xMode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="col-span-1"
                  >
                    <label className="block text-xs font-bold text-red-400/80 uppercase tracking-wider mb-2">Geolocation Segment</label>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="e.g. Plano, Frisco"
                        value={targetCity}
                        onChange={(e) => setTargetCity(e.target.value)}
                        className="w-full bg-black/50 text-white pl-12 pr-4 py-3 border border-red-900/30 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all group-hover:border-red-500/50"
                        onKeyDown={(e) => e.key === 'Enter' && initiateScan()}
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500/50 group-hover:text-red-500 transition-colors" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className={is10xMode ? "col-span-2" : "col-span-1"}>
                <label className="block text-xs font-bold text-red-400/80 uppercase tracking-wider mb-2">Industry Matrix</label>
                <div className="relative group">
                  <select 
                    className="w-full bg-black/50 text-white px-4 py-3 border border-red-900/30 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none appearance-none transition-all group-hover:border-red-500/50"
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value)}
                  >
                    {INDUSTRIES.map(i => <option key={i} value={i} className="bg-zinc-900">{i}</option>)}
                  </select>
                  <Database className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500/50 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={initiateScan}
                  disabled={isScanning}
                  className={`w-full h-12 text-sm font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl ${
                    is10xMode 
                      ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-red-500/25 border border-red-500/30 animate-[gradient-x_3s_ease_infinite] text-white bg-[length:200%_200%]' 
                      : 'bg-zinc-100 text-zinc-900 hover:bg-white'
                  }`}
                >
                  {isScanning ? (
                    <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> {is10xMode ? 'SWEEPING MATRIX...' : 'EXTRACTING...'}</>
                  ) : (
                    <><Zap className="w-5 h-5 mr-2" /> {is10xMode ? 'EXECUTE BATCH SWEEP' : 'LAUNCH CRAWLER'}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Leads Grid */}
          <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
              <div>
                <h3 className="font-bold text-white text-xl flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                  Identified Vulnerable Targets
                </h3>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Ready for Outbound Poaching</p>
              </div>
              <Badge className="bg-red-950/30 text-red-400 border border-red-500/20 px-3 py-1 font-mono">
                {leads.length} TARGETS ACQUIRED
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <AnimatePresence>
                {leads.map((lead, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.05, type: 'spring', bounce: 0.3 }}
                    key={lead.id}
                    layoutId={lead.id}
                  >
                    <Card className="h-full bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-red-500/30 hover:shadow-[0_8px_30px_rgba(239,68,68,0.12)] transition-all duration-300 group overflow-hidden relative">
                      {/* Scanning overlay */}
                      {lead.status === 'scanning' && (
                        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center border border-red-500/20">
                          <RefreshCw className="w-8 h-8 text-red-500 animate-spin mb-3" />
                          <p className="text-red-400 text-xs font-bold tracking-widest uppercase animate-pulse">Extracting Data...</p>
                        </div>
                      )}
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent group-hover:via-red-500 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className="max-w-[70%]">
                            <h3 className="font-bold text-white text-lg leading-tight truncate">
                              {lead.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="bg-black text-[10px] text-zinc-400 border-zinc-800 uppercase tracking-wider">{lead.industry}</Badge>
                              <Badge variant="outline" className="bg-black text-[10px] text-zinc-400 border-zinc-800 flex items-center pr-2">
                                <MapPin className="w-3 h-3 mr-1 text-red-500/70" /> {lead.city}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border-4 border-zinc-800 group-hover:border-red-500/30 bg-black relative shadow-inner transition-colors">
                            <span className="font-black text-white text-base">{lead.score}</span>
                            <span className="text-[8px] text-zinc-500 font-bold uppercase -mt-1 tracking-widest">Health</span>
                            
                            {/* Score ring glow */}
                            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(239,68,68,0)] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-shadow duration-500" />
                          </div>
                        </div>

                        <div className="bg-black/40 rounded-lg p-3 border border-white/5 mb-5 mt-auto">
                          <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/5">
                            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Est. Revenue</span>
                            <span className="text-sm font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">{lead.revenueEst}</span>
                          </div>
                          
                          <div className="space-y-1.5">
                            <p className="text-[10px] font-bold text-red-400/80 uppercase tracking-widest flex items-center">
                              <ShieldAlert className="w-3 h-3 mr-1.5" /> Critical Flaws
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {lead.issues.slice(0, 3).map((issue, idx) => (
                                <span key={idx} className="text-[10px] bg-red-500/10 text-red-300 border border-red-500/20 px-2 py-0.5 rounded shadow-sm">
                                  {issue}
                                </span>
                              ))}
                              {lead.issues.length > 3 && (
                                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">+{lead.issues.length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <Button variant="outline" className="w-full text-xs font-bold bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white group/btn">
                            <Globe className="w-3.5 h-3.5 mr-1.5 group-hover/btn:text-blue-400 transition-colors" />
                            Deep Audit
                          </Button>
                          <Button 
                            onClick={() => dispatchToTaskBoard(lead)} 
                            className="w-full text-xs font-bold bg-zinc-800 hover:bg-red-600 text-white border border-transparent shadow-[0_0_0_0_rgba(239,68,68,0)] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 group/poach"
                          >
                            <Target className="w-3.5 h-3.5 mr-1.5 group-hover/poach:animate-pulse" />
                            Initiate Poach
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {leads.length === 0 && (
              <div className="py-24 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
                <Target className="w-16 h-16 text-zinc-700 mb-4" />
                <h4 className="text-zinc-400 font-bold text-lg">No Targets Acquired</h4>
                <p className="text-zinc-500 text-sm mt-1">Initialize batch sweep to populate vulnerable matrices.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
