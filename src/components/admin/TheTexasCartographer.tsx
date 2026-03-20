import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Globe, Plus, Map, PlayCircle, Settings, FileText, CheckCircle2, TrendingUp, Compass, Target } from 'lucide-react';
import { toast } from 'sonner';

interface CityPage {
  id: string;
  city: string;
  niche: string;
  url: string;
  status: 'draft' | 'published' | 'generating';
  healthScore: number;
}

const INITIAL_PAGES: CityPage[] = [
  { id: '1', city: 'Dallas', niche: 'SEO Services', url: '/dallas-seo-services', status: 'published', healthScore: 98 },
  { id: '2', city: 'Houston', niche: 'Web Design', url: '/houston-web-design-agency', status: 'published', healthScore: 95 },
  { id: '3', city: 'Austin', niche: 'PPC Management', url: '/austin-ppc-management', status: 'draft', healthScore: 88 },
  { id: '4', city: 'San Antonio', niche: 'Digital Marketing', url: '/san-antonio-digital-marketing', status: 'generating', healthScore: 0 },
  { id: '5', city: 'Fort Worth', niche: 'Local SEO', url: '/local-seo-fort-worth', status: 'draft', healthScore: 82 },
];

export default function TheTexasCartographer() {
  const [pages, setPages] = useState<CityPage[]>(INITIAL_PAGES);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('');

  const handleGenerate = () => {
    if (!selectedCity || !selectedNiche) {
      toast.error('Please select both a Texas city and a target niche.');
      return;
    }
    
    setIsGenerating(true);
    toast.info(`The Cartographer is mapping content for ${selectedCity}...`);

    setTimeout(() => {
      const newPage: CityPage = {
        id: Date.now().toString(),
        city: selectedCity,
        niche: selectedNiche,
        url: `/${selectedCity.toLowerCase().replace(/\s+/g, '-')}-${selectedNiche.toLowerCase().replace(/\s+/g, '-')}`,
        status: 'published',
        healthScore: Math.floor(Math.random() * 10) + 90
      };
      
      setPages([newPage, ...pages]);
      setIsGenerating(false);
      setSelectedCity('');
      setSelectedNiche('');
      toast.success(`Successfully mapped and deployed programmatic SEO page for ${selectedCity}!`);
      
      // Notify the task board so the team can review the AI generated content
      const event = new CustomEvent('task-logged', {
        detail: {
          title: `Review New Local Page: ${newPage.city}`,
          description: `The Cartographer generated a highly localized programmatic SEO page for ${newPage.niche} in ${newPage.city}.\n\nURL: ${newPage.url}\nPlease review the AI content and ensure the local schema markup is flawless before indexation.`,
          priority: 'medium',
          sourceAgent: 'The Texas Cartographer'
        }
      });
      window.dispatchEvent(event);
      
    }, 3000);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published': return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Published & Indexed</Badge>;
      case 'generating': return <Badge className="bg-blue-100 text-blue-700 animate-pulse hover:bg-blue-200">Generating...</Badge>;
      default: return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Draft in DB</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-[#1E3A5F] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-white">
            <Globe className="w-6 h-6 text-[#00B4D8]" />
            <div>
              <h2 className="text-xl font-bold">The Texas Cartographer</h2>
              <p className="text-sm text-blue-200">Programmatic Local SEO & Infinite Site Mapping</p>
            </div>
          </div>
          <Badge className="bg-blue-900 border border-blue-400 text-blue-100 shadow-[0_0_10px_rgba(0,180,216,0.3)]">
            ACTIVE MAPPING MODE
          </Badge>
        </div>

        <CardContent className="p-6">
          {/* Controls */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8 shadow-sm">
            <h3 className="font-semibold text-[#1E3A5F] flex items-center mb-4">
              <Compass className="w-5 h-5 mr-2 text-[#00B4D8]" />
              New Conquest Mapping
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Target Texas City</label>
                <select 
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#00B4D8] outline-none"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select city...</option>
                  <option value="Plano">Plano</option>
                  <option value="Frisco">Frisco</option>
                  <option value="McKinney">McKinney</option>
                  <option value="Arlington">Arlington</option>
                  <option value="Irving">Irving</option>
                  <option value="Garland">Garland</option>
                  <option value="Midland">Midland</option>
                  <option value="Odessa">Odessa</option>
                  <option value="Lubbock">Lubbock</option>
                  <option value="Waco">Waco</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Target Niche</label>
                <select 
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#00B4D8] outline-none"
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                >
                  <option value="">Select niche...</option>
                  <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                  <option value="SEO Services">Local SEO Services</option>
                  <option value="Web Design">Custom Web Design</option>
                  <option value="PPC Management">PPC Management</option>
                  <option value="Social Media">Social Media Agency</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] hover:shadow-lg text-white"
                >
                  {isGenerating ? (
                    <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Generating Page...</>
                  ) : (
                    <><PlayCircle className="w-4 h-4 mr-2" /> Map & Generate Territory</>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* List of Generated Pages */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="font-bold text-gray-800 text-lg">Mapped Territories</h3>
              <p className="text-sm text-gray-500 font-medium">Auto-Syncing with Google Search Console</p>
            </div>
            
            <div className="grid grid-cols-1 divide-y divide-gray-100 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-12 bg-gray-50 py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="col-span-3">Target Coordinate</div>
                <div className="col-span-3">URL Structure</div>
                <div className="col-span-2 text-center">Health Score</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>

              <AnimatePresence>
                {pages.map(page => (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    key={page.id} 
                    className="grid grid-cols-12 items-center py-4 px-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="col-span-3">
                      <p className="font-semibold text-gray-900">{page.city}, TX</p>
                      <p className="text-xs text-gray-500">{page.niche}</p>
                    </div>
                    
                    <div className="col-span-3 flex items-center">
                      <Badge variant="outline" className="font-mono text-[10px] bg-gray-100 truncate w-full block">
                        {page.url}
                      </Badge>
                    </div>
                    
                    <div className="col-span-2 flex justify-center items-center">
                      {page.healthScore > 0 ? (
                        <div className="flex items-center space-x-1">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="font-bold text-gray-700">{page.healthScore}/100</span>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm italic">Pending...</span>
                      )}
                    </div>
                    
                    <div className="col-span-2 flex justify-center">
                      {getStatusBadge(page.status)}
                    </div>
                    
                    <div className="col-span-2 flex justify-end space-x-2">
                       <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-500 hover:text-[#00B4D8]">
                         <FileText className="w-4 h-4" />
                       </Button>
                       <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-500 hover:text-blue-600">
                         <TrendingUp className="w-4 h-4" />
                       </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
