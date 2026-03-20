import React from 'react';
import { motion } from 'motion/react';
import { Download, CreditCard, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

const invoices = [
  { id: 'INV-4029', date: 'Jun 1, 2024', amount: '$1,499.00', status: 'Paid', method: '•••• 4242' },
  { id: 'INV-3982', date: 'May 1, 2024', amount: '$1,499.00', status: 'Paid', method: '•••• 4242' },
  { id: 'INV-3870', date: 'Apr 1, 2024', amount: '$1,499.00', status: 'Paid', method: '•••• 4242' },
  { id: 'INV-3741', date: 'Mar 1, 2024', amount: '$2,499.00', status: 'Paid', method: '•••• 4242' },
];

export default function BillingView() {
  return (
    <div className="p-6 md:p-10 min-h-full">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1E3A5F]">Billing & Subscriptions</h1>
        <p className="text-gray-500 mt-1">
          Manage your active plans, update payment methods, and download past invoices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Subscriptions Col */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-2 border-[#00B4D8] shadow-lg bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F]" />
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 font-bold px-2.5 py-0.5">ACTIVE</Badge>
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl font-bold text-[#1E3A5F]">Texas Domination Package</CardTitle>
                <CardDescription>Billed Monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$1,499</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {['Local SEO Cartography', 'Google Ads Management', 'Unlimited Web Edits', 'Monthly AI Reporting'].map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center text-sm border border-gray-100 mb-4">
                  <span className="text-gray-500">Next billing date</span>
                  <span className="font-semibold text-gray-900">Jul 1, 2024</span>
                </div>
                
                <Button className="w-full bg-[#1E3A5F] hover:bg-[#152a45] text-white">
                  Manage Plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-[#1E3A5F]">Payment Method</h3>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-sm flex items-center justify-center text-[10px] text-white font-bold tracking-widest italic shadow-sm">
                      VISA
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">•••• 4242</p>
                      <p className="text-xs text-gray-500">Expires 12/26</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#00B4D8] font-medium hover:bg-blue-50">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Invoice History Col */}
        <div className="lg:col-span-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-0 shadow-lg bg-white h-full">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-xl font-bold text-[#1E3A5F]">Invoice History</CardTitle>
                <CardDescription>View and download your past billing invoices.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 uppercase text-xs font-semibold text-gray-500">
                      <tr>
                        <th className="px-6 py-4">Invoice</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="px-6 py-4 font-medium text-gray-900">{inv.id}</td>
                          <td className="px-6 py-4">{inv.date}</td>
                          <td className="px-6 py-4">{inv.amount}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {inv.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-gray-400 group-hover:text-[#00B4D8] transition-colors rounded-full h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
