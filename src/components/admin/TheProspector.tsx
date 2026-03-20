import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Database, Target, Zap, Globe, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface Lead {
  id: string;
  name: string;
  city: string;
  industry: string;
  score: number;
  revenueEst: string;
  issues: string[];
  status: 'new' | 'scanning' | 'ready';
}

const INITIAL_LEADS: Lead[] = [
  { id: '1', name: 'Texas Premium HVAC', city: 'Dallas', industry: 'Home Services', score: 34, revenueEst: '$500k-1M', issues: ['No SSL', 'Slow Load'], status: 'ready' },
  { id: '2', name: 'Austin Legal Partners', city: 'Austin', industry: 'Legal', score: 45, revenueEst: '$2M-5M', issues: ['Thin Content', 'No GBP'], status: 'ready' },
  { id: '3', name: 'Alamo City Plumbers', city: 'San Antonio', industry: 'Home Services', score: 28, revenueEst: '$1M-2M', issues: ['Not Mobile Responsive'], status: 'ready' },
  { id: '4', name: 'Space City Dentistry', city: 'Houston', industry: 'Healthcare', score: 52, revenueEst: '$3M+', issues: ['High Bounce Rate', 'Low Backlinks'], status: 'ready' },
];

export default function TheProspector() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [isScanning, setIsScanning] = useState(false);
  const [targetCity, setTargetCity] = useState('');

  const initiateGeographicScan = async () => {
    if (!targetCity) {
      toast.error('Please enter a target city in Texas to scan.');
      return;
    }
    setIsScanning(true);
    toast.info(`The Prospector is scraping registries in ${targetCity}...`);
    
    // We grab the currently selected industry from the DOM to avoid re-writing the raw select as a controlled state if we don't have to, 
    // but the original code didn't bind it, so we'll grab it directly or default it.
    const industrySelect = document.querySelector('select') as HTMLSelectElement;
    const targetIndustry = industrySelect ? industrySelect.value : 'Any Industry';

    try {
      const res = await fetch('/api/prospector', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetCity, industry: targetIndustry })
      });

      if (!res.ok) throw new Error('Failed to scrape local registries');

      const data = await res.json();

      const newLead: Lead = {
        id: Date.now().toString(),
        name: data.name,
        city: data.city,
        industry: data.industry,
        score: data.score,
        revenueEst: data.revenueEst,
        issues: data.issues || [],
        status: 'ready'
      };
      
      setLeads([newLead, ...leads]);
      setIsScanning(false);
      toast.success('Found a highly vulnerable target!');
      setTargetCity('');

    } catch (error) {
      console.error(error);
      setIsScanning(false);
      toast.error('Prospector scan failed aggressively. Manual override required.');
    }
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
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-gray-900 to-[#1E3A5F] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-white">
            <Target className="w-6 h-6 text-red-500" />
            <div>
              <h2 className="text-xl font-bold">The Prospector</h2>
              <p className="text-sm text-gray-300">Automated Vulnerability Scraping & Market Acquisition</p>
            </div>
          </div>
          <Badge className="bg-red-500/20 text-red-300 border border-red-500/50">LONE STAR DIRECTIVE</Badge>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Target City (e.g., Plano, Frisco, Fort Worth)..."
                value={targetCity}
                onChange={(e) => setTargetCity(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                onKeyDown={(e) => e.key === 'Enter' && initiateGeographicScan()}
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700">
              <option>Any Industry</option>
              <option>Home Services</option>
              <option>Legal</option>
              <option>Healthcare</option>
            </select>
            <Button 
              onClick={initiateGeographicScan}
              disabled={isScanning}
              className="bg-red-600 hover:bg-red-700 text-white min-w-[140px]"
            >
              {isScanning ? (
                <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Scraping...</>
              ) : (
                <><Zap className="w-4 h-4 mr-2" /> Launch Crawlers</>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leads.map(lead => (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} key={lead.id}>
                <Card className="border border-gray-200 hover:border-red-300 hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg flex items-center">
                          {lead.name}
                          <Badge variant="outline" className="ml-2 bg-gray-50 text-xs text-gray-500">{lead.industry}</Badge>
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3">
                          <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{lead.city}, TX</span>
                          <span className="flex items-center"><Database className="w-3 h-3 mr-1" />{lead.revenueEst}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 border-red-500 bg-red-50">
                        <span className="font-bold text-red-600 text-sm">{lead.score}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Critical Vulnerabilities</p>
                      <div className="flex flex-wrap gap-2">
                        {lead.issues.map((issue, idx) => (
                          <Badge key={idx} className="bg-red-100 text-red-700 border-none font-medium hover:bg-red-200">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-3 border-t border-gray-100">
                      <Button variant="outline" className="flex-1 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700">
                        <Globe className="w-4 h-4 mr-2" />
                        Run Deep Audit
                      </Button>
                      <Button onClick={() => dispatchToTaskBoard(lead)} className="flex-1 text-sm bg-red-600 hover:bg-red-700 text-white">
                        <Target className="w-4 h-4 mr-2" />
                        Initiate Poach
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
