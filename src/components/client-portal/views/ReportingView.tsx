import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Filter, Search, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';

const reports = [
  { id: 1, name: 'May 2024 Performance Review', category: 'Monthly Insights', date: 'June 1, 2024', status: 'New' },
  { id: 2, name: 'Q1 Comprehensive SEO Audit', category: 'Technical SEO', date: 'April 5, 2024', status: 'Viewed' },
  { id: 3, name: 'April 2024 Performance Review', category: 'Monthly Insights', date: 'May 1, 2024', status: 'Viewed' },
  { id: 4, name: 'Local Search Grid Competitor Analysis', category: 'Rank Tracking', date: 'April 15, 2024', status: 'Viewed' },
  { id: 5, name: 'March 2024 Performance Review', category: 'Monthly Insights', date: 'April 1, 2024', status: 'Viewed' },
  { id: 6, name: 'Website Speed & Core Web Vitals', category: 'Technical SEO', date: 'March 10, 2024', status: 'Viewed' },
];

export default function ReportingView() {
  return (
    <div className="p-6 md:p-10 min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">AI Document Vault</h1>
          <p className="text-gray-500 mt-1">
            Access your automated monthly performance reviews and deep-dive technical audits.
          </p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] w-64"
            />
          </div>
          <Button variant="outline" className="bg-white border-gray-200 text-gray-700 shadow-sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer h-full flex flex-col items-start w-full relative overflow-hidden">
              {report.status === 'New' && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  NEW
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full w-full">
                <div className="w-12 h-12 bg-gray-50 text-[#1E3A5F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#00B4D8]/10 to-[#1E3A5F]/10">
                  <FileText className="w-6 h-6 text-[#00B4D8]" />
                </div>
                
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-1 line-clamp-2">{report.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-[#00B4D8] mb-4">{report.category}</p>
                
                <div className="mt-auto pt-6 flex items-center justify-between w-full border-t border-gray-50">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1 pb-0.5" />
                    {report.date}
                  </div>
                  <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full bg-gray-50 text-gray-700 hover:bg-[#00B4D8] hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
