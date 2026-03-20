import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Globe, PlayCircle, FileText, CheckCircle2, TrendingUp, Compass, RefreshCw, Zap, Crosshair, Map } from 'lucide-react';
import { toast } from 'sonner';

interface CityPage {
  id: string;
  city: string;
  niche: string;
  url: string;
  status: 'draft' | 'published' | 'generating' | 'failed';
  healthScore: number;
}

const INITIAL_PAGES: CityPage[] = [
  { id: '1', city: 'Dallas', niche: 'SEO Services', url: '/dallas-seo-services', status: 'published', healthScore: 98 },
  { id: '2', city: 'Houston', niche: 'Web Design', url: '/houston-web-design-agency', status: 'published', healthScore: 95 },
  { id: '3', city: 'Austin', niche: 'PPC Management', url: '/austin-ppc-management', status: 'published', healthScore: 88 }
];

const TEXAS_CITIES = [
  "Plano", "Frisco", "McKinney", "Arlington", "Irving",
  "Garland", "Midland", "Odessa", "Lubbock", "Waco",
  "Denton", "Allen", "Grapevine", "Southlake", "Celina"
];

export default function TheTexasCartographer() {
  const [pages, setPages] = useState<CityPage[]>(INITIAL_PAGES);
  const [isGenerating, setIsGenerating] = useState(false);
  const [is10xMode, setIs10xMode] = useState(true);
  
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('Digital Marketing Agency');

  const generateSinglePage = async (city: string, niche: string): Promise<CityPage | null> => {
    try {
      const res = await fetch('/api/texas-cartographer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city, niche })
      });

      if (!res.ok) throw new Error('Failed to generate mapped territory');

      const data = await res.json();
      return {
        id: Date.now().toString() + Math.random().toString(36).substring(7),
        city: data.city,
        niche: data.niche,
        url: data.url,
        status: 'published',
        healthScore: data.healthScore
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleGenerate = async () => {
    if (!selectedNiche) {
      toast.error('Please select a target niche.');
      return;
    }
    
    if (!is10xMode && !selectedCity) {
      toast.error('Please select a Texas city, or enable 10x Conquest Mode.');
      return;
    }

    setIsGenerating(true);
    
    if (is10xMode) {
      toast.info(`10x CONQUEST MODE INITIATED: Mapping metropolitan cluster for ${selectedNiche}...`);
      
      // Select 10 random unique cities
      const shuffled = [...TEXAS_CITIES].sort(() => 0.5 - Math.random());
      const targetCities = shuffled.slice(0, 10);
      
      // Add placeholders immediately with 'generating' status
      const placeholderPages: CityPage[] = targetCities.map((city, idx) => ({
        id: `temp-${Date.now()}-${idx}`,
        city,
        niche: selectedNiche,
        url: `Mapping territory...`,
        status: 'generating',
        healthScore: 0
      }));
      
      setPages(prev => [...placeholderPages, ...prev]);

      // Fire off 10 requests concurrently
      const results = await Promise.allSettled(
        targetCities.map(city => generateSinglePage(city, selectedNiche))
      );

      // Replace placeholders with actual results
      setPages(prev => {
        const filtered = prev.filter(p => !p.id.startsWith('temp-'));
        const completedPages: CityPage[] = results.map((result, idx) => {
          if (result.status === 'fulfilled' && result.value) {
            return result.value;
          } else {
            return {
              id: `failed-${Date.now()}-${idx}`,
              city: targetCities[idx],
              niche: selectedNiche,
              url: 'Generation Failed',
              status: 'failed',
              healthScore: 0
            };
          }
        });
        return [...completedPages, ...filtered];
      });

      toast.success('10x Conquest Complete: Territories successfully mapped and deployed!');
      
      // Dispatch single aggregated task for the 10x batch
      const event = new CustomEvent('task-logged', {
        detail: {
          title: `Review 10x Cluster Mapping: ${selectedNiche}`,
          description: `The Cartographer successfully generated a 10-city content cluster for ${selectedNiche}. Ensure programmatic local schema is valid across all 10 endpoints before pushing sitemap.`,
          priority: 'high',
          sourceAgent: 'The Texas Cartographer'
        }
      });
      window.dispatchEvent(event);

    } else {
      toast.info(`The Cartographer is mapping content for ${selectedCity}...`);
      
      // Add temporary placeholder
      const tempId = `temp-${Date.now()}`;
      setPages(prev => [{
        id: tempId,
        city: selectedCity,
        niche: selectedNiche,
        url: 'Mapping territory...',
        status: 'generating',
        healthScore: 0
      }, ...prev]);

      const result = await generateSinglePage(selectedCity, selectedNiche);
      
      setPages(prev => {
        const filtered = prev.filter(p => p.id !== tempId);
        if (result) return [result, ...filtered];
        return [{
          id: `failed-${Date.now()}`,
          city: selectedCity,
          niche: selectedNiche,
          url: 'Generation Failed',
          status: 'failed',
          healthScore: 0
        }, ...filtered];
      });

      if (result) {
        toast.success(`Successfully mapped and deployed programmatic SEO page for ${result.city}!`);
        const event = new CustomEvent('task-logged', {
          detail: {
            title: `Review New Local Page: ${result.city}`,
            description: `The Cartographer generated a highly localized programmatic SEO page for ${result.niche} in ${result.city}.\n\nURL: ${result.url}`,
            priority: 'medium',
            sourceAgent: 'The Texas Cartographer'
          }
        });
        window.dispatchEvent(event);
      } else {
        toast.error('The Cartographer failed to map the territory. Please check logs.');
      }
    }
    
    setIsGenerating(false);
    if (!is10xMode) setSelectedCity('');
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published': return <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Deployed</Badge>;
      case 'generating': return <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 animate-pulse">Mapping Matrix...</Badge>;
      case 'failed': return <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Failed</Badge>;
      default: return <Badge className="bg-slate-500/20 text-slate-400 border border-slate-500/30">Draft</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-2xl bg-[#030712] overflow-hidden rounded-2xl ring-1 ring-white/10 relative">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* 10x Header */}
        <div className="relative bg-gradient-to-b from-[#0f172a] to-[#030712] px-8 py-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 relative group">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Globe className="w-8 h-8 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                The Texas Cartographer
              </h2>
              <p className="text-sm text-indigo-300/70 font-medium tracking-wide flex items-center gap-2 mt-1">
                Programmatic SEO Matrix <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">v2.0</span>
              </p>
            </div>
          </div>
          <Badge className="bg-purple-900/30 border border-purple-500/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] px-4 py-1.5 text-xs tracking-widest font-bold">
            HYPER-SCALE MAPPING ACTIVE
          </Badge>
        </div>

        <CardContent className="p-8 relative z-10">
          {/* Controls Panel - Glassmorphic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 mb-10 shadow-2xl relative overflow-hidden"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="font-bold text-xl text-white flex items-center">
                <Crosshair className="w-6 h-6 mr-3 text-indigo-400" />
                Target Coordinates
              </h3>
              
              <div className="flex items-center space-x-3 bg-black/40 p-1.5 rounded-lg border border-white/5">
                <button
                  onClick={() => setIs10xMode(false)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                    !is10xMode 
                      ? 'bg-slate-800 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  STANDARD
                </button>
                <button
                  onClick={() => setIs10xMode(true)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all flex items-center ${
                    is10xMode 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3 h-3 mr-1" /> 10X CONQUEST
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
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target City</label>
                    <div className="relative group">
                      <select 
                        className="w-full bg-black/50 text-white px-4 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none transition-all group-hover:border-white/20"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="" className="bg-slate-900">Select city...</option>
                        {TEXAS_CITIES.map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
                      </select>
                      <Map className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className={is10xMode ? "col-span-2" : "col-span-1"}>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Niche Matrix</label>
                <div className="relative group">
                  <select 
                    className="w-full bg-black/50 text-white px-4 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none transition-all group-hover:border-white/20"
                    value={selectedNiche}
                    onChange={(e) => setSelectedNiche(e.target.value)}
                  >
                    <option value="Digital Marketing Agency" className="bg-slate-900">Digital Marketing Agency</option>
                    <option value="SEO Services" className="bg-slate-900">Local SEO Services</option>
                    <option value="Web Design" className="bg-slate-900">Custom Web Design</option>
                    <option value="PPC Management" className="bg-slate-900">PPC Management</option>
                    <option value="Roofing Contractors" className="bg-slate-900">Roofing Contractors</option>
                    <option value="HVAC Services" className="bg-slate-900">HVAC Services</option>
                  </select>
                  <Compass className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className={`w-full h-12 text-sm font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl ${
                    is10xMode 
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/25 border border-white/10 animate-gradient-x text-white' 
                      : 'bg-white text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {isGenerating ? (
                    <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> {is10xMode ? 'MAPPING 10X CLUSTER...' : 'MAPPING NODE...'}</>
                  ) : (
                    <><PlayCircle className="w-5 h-5 mr-2" /> {is10xMode ? 'EXECUTE 10X MAPPING' : 'GENERATE NODE'}</>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Data Grid Area */}
          <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
              <div>
                <h3 className="font-bold text-white text-xl flex items-center">
                  <Database className="w-5 h-5 mr-2 text-indigo-400" />
                  Live Topological Data
                </h3>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Real-time GSC Syncing</p>
              </div>
              <Badge className="bg-black/50 text-indigo-300 border border-indigo-500/20 px-3 py-1">
                {pages.length} / ∞ NODES
              </Badge>
            </div>
            
            <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-12 bg-white/[0.03] border-b border-white/5 py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <div className="col-span-3">Target Coordinate</div>
                <div className="col-span-4">URL Vector</div>
                <div className="col-span-2 text-center">Entity Health</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-1 text-right">Ops</div>
              </div>

              <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                <AnimatePresence>
                  {pages.map((page, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20, backgroundColor: 'rgba(99,102,241,0.2)' }} 
                      animate={{ opacity: 1, x: 0, backgroundColor: 'transparent' }}
                      transition={{ delay: i * 0.05 }}
                      key={page.id} 
                      className="grid grid-cols-12 items-center py-5 px-6 hover:bg-white/[0.02] transition-colors group relative"
                    >
                      {/* Left glow accent on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="col-span-3">
                        <p className="font-bold text-slate-200 text-base">{page.city}, TX</p>
                        <p className="text-xs text-indigo-400/80 font-medium uppercase tracking-wider mt-0.5">{page.niche}</p>
                      </div>
                      
                      <div className="col-span-4 flex items-center pr-4">
                        <div className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 w-full flex items-center group-hover:border-indigo-500/30 transition-colors">
                          <span className="font-mono text-xs text-slate-300 truncate w-full">
                            <span className="text-indigo-500 opacity-50">thinkments.com</span>{page.url}
                          </span>
                        </div>
                      </div>
                      
                      <div className="col-span-2 flex justify-center items-center">
                        {page.status === 'generating' ? (
                          <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-500"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        ) : page.healthScore > 0 ? (
                          <div className="flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="font-bold text-emerald-400 flex items-center gap-1">
                              {page.healthScore} <span className="text-[10px] text-emerald-500/50">/100</span>
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-600 text-xs italic">N/A</span>
                        )}
                      </div>
                      
                      <div className="col-span-2 flex justify-center">
                        {getStatusBadge(page.status)}
                      </div>
                      
                      <div className="col-span-1 flex justify-end">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-full">
                          <FileText className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {pages.length === 0 && (
                  <div className="py-20 text-center flex flex-col items-center">
                    <Globe className="w-12 h-12 text-slate-700 mb-4 opacity-50" />
                    <p className="text-slate-500 text-sm">Matrix is empty. Initiate Conquest Protocol.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Temporary icon missing from imports
function Database(props: any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
