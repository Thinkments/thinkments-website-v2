import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Plus, Search, Tag, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

const tickets = [
  { id: 'TKT-192', title: 'Update homepage banner for summer sale', status: 'In Progress', priority: 'High', date: 'Yesterday' },
  { id: 'TKT-191', title: 'New team member bio upload', status: 'Resolved', priority: 'Normal', date: 'Jun 12, 2024' },
  { id: 'TKT-188', title: 'Question about May SEO report drop', status: 'Resolved', priority: 'Normal', date: 'May 30, 2024' },
];

export default function SupportTicketView() {
  return (
    <div className="p-6 md:p-10 min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Support Center</h1>
          <p className="text-gray-500 mt-1">
            Submit a direct request to our Task Board for the agency team.
          </p>
        </div>
        
        <Button className="bg-[#00B4D8] hover:bg-[#0092af] text-white shadow-lg shadow-[#00B4D8]/20">
          <Plus className="w-4 h-4 mr-2" />
          Create New Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Ticket Feed */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg bg-white">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search tickets..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-white">All Active</Button>
                <Button variant="ghost" size="sm" className="text-gray-500">Resolved</Button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {tickets.map((t, i) => (
                <motion.div 
                  key={t.id} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  className="p-5 hover:bg-[#F8F9FA] transition-colors cursor-pointer group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#00B4D8] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#00B4D8] transition-colors">{t.title}</h4>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 font-medium">
                        <span className="flex items-center"><Tag className="w-3 h-3 mr-1" /> {t.id}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {t.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                    <Badge className={`${
                      t.status === 'In Progress' ? 'bg-amber-100 text-amber-700 hover:bg-amber-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-100'
                    } border-0 shadow-none font-semibold px-2.5`}>
                      {t.status}
                    </Badge>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#00B4D8] transition-colors hidden sm:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Help Side */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#1E3A5F] to-[#2a4d73] text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Need immediate assistance?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                For urgent matters that affect site downtime or compromised security, bypass the ticket queue and call our emergency line.
              </p>
              <Button className="w-full bg-white text-[#1E3A5F] hover:bg-gray-50 shadow-lg">
                Call (940) 255-0010
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-[#1E3A5F]">Helpful Resources</h3>
              <ul className="space-y-3">
                {['How to clear your browser cache', 'Updating your Google Business hours', 'Understanding your SEO Report'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#00B4D8] transition-colors group">
                      <ArrowRight className="w-3 h-3 mr-2 text-gray-300 group-hover:text-[#00B4D8] transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
