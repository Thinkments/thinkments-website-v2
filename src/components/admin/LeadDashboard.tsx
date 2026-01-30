import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Flame,
  TrendingUp,
  TrendingDown,
  Target,
  Plus,
  Download,
  Upload,
  Mail,
  Search,
  Filter,
  Eye,
  Edit,
  MessageSquare,
  Trash2,
  X,
  Calendar,
  Phone,
  Globe,
  MapPin,
  Clock,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  User,
  Building2,
  Tag,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner@2.0.3';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  sourcePage: string;
  leadScore: 'hot' | 'warm' | 'cold';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';
  estimatedValue: number;
  date: string;
  notes?: string;
  assignedTo?: string;
  followUpDate?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  interactions: {
    type: 'email' | 'call' | 'note' | 'meeting';
    date: string;
    description: string;
  }[];
}

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@techcorp.com',
    phone: '(555) 123-4567',
    company: 'TechCorp Industries',
    sourcePage: '/services/web-design',
    leadScore: 'hot',
    status: 'proposal',
    estimatedValue: 15000,
    date: '2024-12-01',
    assignedTo: 'John Doe',
    followUpDate: '2024-12-10',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'web-design-2024',
    interactions: [
      { type: 'email', date: '2024-12-01', description: 'Initial inquiry received' },
      {
        type: 'call',
        date: '2024-12-02',
        description: 'Discovery call - needs full website redesign',
      },
      { type: 'note', date: '2024-12-03', description: 'Sent proposal for $15k website project' },
    ],
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@localshop.com',
    phone: '(555) 234-5678',
    company: 'Local Coffee Shop',
    sourcePage: '/services/google-business-profile',
    leadScore: 'warm',
    status: 'qualified',
    estimatedValue: 2500,
    date: '2024-12-02',
    assignedTo: 'Jane Smith',
    utmSource: 'facebook',
    utmMedium: 'social',
    interactions: [
      { type: 'email', date: '2024-12-02', description: 'Inquiry about GBP management' },
      { type: 'call', date: '2024-12-03', description: 'Discussed monthly GBP package' },
    ],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@fitnessstudio.com',
    phone: '(555) 345-6789',
    company: 'Elite Fitness Studio',
    sourcePage: '/services/videography',
    leadScore: 'hot',
    status: 'contacted',
    estimatedValue: 8000,
    date: '2024-12-03',
    followUpDate: '2024-12-08',
    utmSource: 'instagram',
    utmMedium: 'social',
    interactions: [
      { type: 'email', date: '2024-12-03', description: 'Wants promotional video package' },
      {
        type: 'meeting',
        date: '2024-12-04',
        description: 'In-person meeting scheduled for next week',
      },
    ],
  },
  {
    id: '4',
    name: 'Robert Williams',
    email: 'robert@lawfirm.com',
    phone: '(555) 456-7890',
    company: 'Williams & Associates',
    sourcePage: '/services/strategic-seo',
    leadScore: 'warm',
    status: 'new',
    estimatedValue: 5000,
    date: '2024-12-04',
    utmSource: 'organic',
    interactions: [
      { type: 'email', date: '2024-12-04', description: 'Form submission - SEO services inquiry' },
    ],
  },
  {
    id: '5',
    name: 'Jennifer Martinez',
    email: 'jen@restaurant.com',
    phone: '(555) 567-8901',
    company: 'Downtown Bistro',
    sourcePage: '/services/social-media',
    leadScore: 'cold',
    status: 'contacted',
    estimatedValue: 1500,
    date: '2024-11-28',
    assignedTo: 'John Doe',
    interactions: [
      { type: 'email', date: '2024-11-28', description: 'Interested in social media management' },
      { type: 'call', date: '2024-11-30', description: 'Left voicemail - no response yet' },
    ],
  },
  {
    id: '6',
    name: 'David Lee',
    email: 'david@realestate.com',
    phone: '(555) 678-9012',
    company: 'Luxury Realty Group',
    sourcePage: '/services/virtual-tours',
    leadScore: 'hot',
    status: 'won',
    estimatedValue: 12000,
    date: '2024-11-20',
    assignedTo: 'Jane Smith',
    interactions: [
      { type: 'email', date: '2024-11-20', description: 'Inquiry about virtual tour services' },
      { type: 'call', date: '2024-11-22', description: 'Discussed package options' },
      { type: 'note', date: '2024-11-25', description: 'Proposal sent' },
      { type: 'email', date: '2024-11-27', description: 'Contract signed!' },
    ],
  },
];

const pipelineStages = [
  { id: 'new', label: 'New', color: 'bg-blue-500', count: 0 },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-500', count: 0 },
  { id: 'qualified', label: 'Qualified', color: 'bg-orange-500', count: 0 },
  { id: 'proposal', label: 'Proposal Sent', color: 'bg-[#00B4D8]', count: 0 },
  { id: 'won', label: 'Won', color: 'bg-green-500', count: 0 },
  { id: 'lost', label: 'Lost', color: 'bg-gray-400', count: 0 },
];

export default function LeadDashboard() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [scoreFilter, setScoreFilter] = useState('all');
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [newNote, setNewNote] = useState('');

  // Calculate stats
  const totalLeads = mockLeads.length;
  const hotLeads = mockLeads.filter((l) => l.leadScore === 'hot').length;
  const leadsThisWeek = mockLeads.filter((l) => {
    const leadDate = new Date(l.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return leadDate >= weekAgo;
  }).length;
  const wonLeads = mockLeads.filter((l) => l.status === 'won').length;
  const conversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;

  // Calculate pipeline stage counts
  const stagesWithCounts = pipelineStages.map((stage) => ({
    ...stage,
    count: mockLeads.filter((l) => l.status === stage.id).length,
  }));

  // Filter leads
  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesScore = scoreFilter === 'all' || lead.leadScore === scoreFilter;
    return matchesSearch && matchesStatus && matchesScore;
  });

  const getScoreBadge = (score: string) => {
    const configs = {
      hot: { color: 'bg-red-100 text-red-700 border-red-200', label: 'Hot', icon: Flame },
      warm: {
        color: 'bg-orange-100 text-orange-700 border-orange-200',
        label: 'Warm',
        icon: TrendingUp,
      },
      cold: {
        color: 'bg-blue-100 text-blue-700 border-blue-200',
        label: 'Cold',
        icon: TrendingDown,
      },
    };
    const config = configs[score as keyof typeof configs];
    const Icon = config.icon;
    return (
      <Badge className={`${config.color} border`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; color: string }> = {
      new: { label: 'New', color: 'bg-blue-100 text-blue-700' },
      contacted: { label: 'Contacted', color: 'bg-yellow-100 text-yellow-700' },
      qualified: { label: 'Qualified', color: 'bg-orange-100 text-orange-700' },
      proposal: { label: 'Proposal Sent', color: 'bg-[#00B4D8]/20 text-[#00B4D8]' },
      won: { label: 'Won', color: 'bg-green-100 text-green-700' },
      lost: { label: 'Lost', color: 'bg-gray-100 text-gray-700' },
    };
    const config = statusConfig[status];
    return <Badge className={`${config.color} border-0`}>{config.label}</Badge>;
  };

  const openDetailPanel = (lead: Lead) => {
    setSelectedLead(lead);
    setShowDetailPanel(true);
  };

  const toggleLeadSelection = (leadId: string) => {
    setSelectedLeads((prev) =>
      prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId],
    );
  };

  const addNote = () => {
    if (newNote.trim() && selectedLead) {
      toast.success('Note added successfully');
      setNewNote('');
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Lead Dashboard</h1>
          <p className="text-gray-600 mt-1">Track and manage your sales pipeline</p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-300">
            <Upload className="w-4 h-4 mr-2" />
            Import CSV
          </Button>
          <Button variant="outline" className="border-gray-300">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className="border-gray-300">
            <Mail className="w-4 h-4 mr-2" />
            Bulk Email
          </Button>
          <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Leads</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">{totalLeads}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-600 font-medium">+12%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#00B4D8]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Hot Leads</p>
                <p className="text-3xl font-bold text-[#FF6B35]">{hotLeads}</p>
                <div className="flex items-center mt-2">
                  <Flame className="w-4 h-4 text-[#FF6B35] mr-1" />
                  <span className="text-sm text-gray-600">Needs attention</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-[#FF6B35]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Leads This Week</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">{leadsThisWeek}</p>
                <div className="flex items-center mt-2 text-sm">
                  <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-600 font-medium">+8%</span>
                  <span className="text-gray-500 ml-1">trending up</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">{conversionRate}%</p>
                <div className="flex items-center mt-2">
                  <div className="flex-1 max-w-[100px]">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${conversionRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lead Pipeline */}
      <Card className="border-0 shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-[#1E3A5F]">Lead Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {stagesWithCounts.map((stage) => (
              <div key={stage.id} className="flex-shrink-0 w-72">
                <div
                  className={`${stage.color} text-white rounded-t-lg p-3 flex items-center justify-between`}
                >
                  <span className="font-semibold">{stage.label}</span>
                  <Badge className="bg-white/20 text-white border-0">{stage.count}</Badge>
                </div>
                <div className="bg-gray-50 rounded-b-lg p-3 space-y-3 min-h-[300px] border-2 border-t-0 border-gray-200">
                  {mockLeads
                    .filter((lead) => lead.status === stage.id)
                    .map((lead) => (
                      <motion.div
                        key={lead.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => openDetailPanel(lead)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-[#1E3A5F] text-sm">{lead.name}</p>
                            <p className="text-xs text-gray-600">{lead.company}</p>
                          </div>
                          {getScoreBadge(lead.leadScore)}
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center">
                            <Globe className="w-3 h-3 mr-1" />
                            {lead.sourcePage}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(lead.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center font-semibold text-green-600">
                            <span>Est. ${lead.estimatedValue.toLocaleString()}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  {mockLeads.filter((lead) => lead.status === stage.id).length === 0 && (
                    <div className="text-center text-gray-400 text-sm py-8">
                      No leads in this stage
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lead Table */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-[#1E3A5F]">All Leads</CardTitle>

            {/* Filters */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="won">Won</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
              <Select value={scoreFilter} onValueChange={setScoreFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Lead Score" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Scores</SelectItem>
                  <SelectItem value="hot">Hot</SelectItem>
                  <SelectItem value="warm">Warm</SelectItem>
                  <SelectItem value="cold">Cold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8F9FA]">
                <tr>
                  <th className="text-left p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLeads(filteredLeads.map((l) => l.id));
                        } else {
                          setSelectedLeads([]);
                        }
                      }}
                    />
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Name</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Email</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Phone</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">
                    Source Page
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Lead Score</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Value</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-gray-100 hover:bg-[#F8F9FA] transition-colors"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => toggleLeadSelection(lead.id)}
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-[#1E3A5F]">{lead.name}</p>
                        {lead.company && <p className="text-sm text-gray-600">{lead.company}</p>}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{lead.email}</td>
                    <td className="p-4 text-sm text-gray-600">{lead.phone}</td>
                    <td className="p-4 text-sm text-gray-600">{lead.sourcePage}</td>
                    <td className="p-4">{getScoreBadge(lead.leadScore)}</td>
                    <td className="p-4">{getStatusBadge(lead.status)}</td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(lead.date).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm font-semibold text-green-600">
                      ${lead.estimatedValue.toLocaleString()}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" onClick={() => openDetailPanel(lead)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Lead Detail Slide-out Panel */}
      <AnimatePresence>
        {showDetailPanel && selectedLead && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowDetailPanel(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] text-white p-6 z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Lead Details</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetailPanel(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedLead.name}</h3>
                    {selectedLead.company && (
                      <p className="text-white/80">{selectedLead.company}</p>
                    )}
                  </div>
                  {getScoreBadge(selectedLead.leadScore)}
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Information */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A5F] text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <p className="font-medium text-[#1E3A5F]">{selectedLead.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-600">Phone</p>
                        <p className="font-medium text-[#1E3A5F]">{selectedLead.phone}</p>
                      </div>
                    </div>
                    {selectedLead.company && (
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-600">Company</p>
                          <p className="font-medium text-[#1E3A5F]">{selectedLead.company}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Lead Details */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A5F] text-lg">Lead Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-xs text-gray-600">Lead Score</Label>
                      <Select defaultValue={selectedLead.leadScore}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hot">🔥 Hot</SelectItem>
                          <SelectItem value="warm">📈 Warm</SelectItem>
                          <SelectItem value="cold">❄️ Cold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-600">Status</Label>
                      <Select defaultValue={selectedLead.status}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="qualified">Qualified</SelectItem>
                          <SelectItem value="proposal">Proposal Sent</SelectItem>
                          <SelectItem value="won">Won</SelectItem>
                          <SelectItem value="lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-600">Assigned To</Label>
                      <Select defaultValue={selectedLead.assignedTo || 'unassigned'}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                          <SelectItem value="John Doe">John Doe</SelectItem>
                          <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-gray-600">Follow-up Date</Label>
                      <Input
                        type="date"
                        defaultValue={selectedLead.followUpDate}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label className="text-xs text-gray-600">Estimated Value</Label>
                      <Input
                        type="number"
                        defaultValue={selectedLead.estimatedValue}
                        className="mt-2"
                        prefix="$"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Source Information */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A5F] text-lg">Source Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Source Page:</span>
                      <span className="font-medium text-[#1E3A5F]">{selectedLead.sourcePage}</span>
                    </div>
                    {selectedLead.utmSource && (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">UTM Source:</span>
                          <Badge variant="outline">{selectedLead.utmSource}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">UTM Medium:</span>
                          <Badge variant="outline">{selectedLead.utmMedium}</Badge>
                        </div>
                        {selectedLead.utmCampaign && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">UTM Campaign:</span>
                            <Badge variant="outline">{selectedLead.utmCampaign}</Badge>
                          </div>
                        )}
                      </>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Lead Date:</span>
                      <span className="font-medium text-[#1E3A5F]">
                        {new Date(selectedLead.date).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Interaction Timeline */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A5F] text-lg">Interaction Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedLead.interactions.map((interaction, index) => {
                        const icons = {
                          email: Mail,
                          call: Phone,
                          note: MessageSquare,
                          meeting: Calendar,
                        };
                        const Icon = icons[interaction.type];
                        const colors = {
                          email: 'bg-blue-100 text-blue-600',
                          call: 'bg-green-100 text-green-600',
                          note: 'bg-orange-100 text-orange-600',
                          meeting: 'bg-purple-100 text-purple-600',
                        };

                        return (
                          <div key={index} className="flex items-start space-x-3">
                            <div
                              className={`w-8 h-8 rounded-full ${colors[interaction.type]} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-[#1E3A5F] capitalize">
                                  {interaction.type}
                                </p>
                                <span className="text-xs text-gray-500">
                                  {new Date(interaction.date).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {interaction.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Notes Section */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A5F] text-lg">Add Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Add a note about this lead..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button
                      onClick={addNote}
                      className="mt-3 bg-[#00B4D8] hover:bg-[#0096b8] text-white w-full"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Add Note
                    </Button>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Lead
                  </Button>
                  <Button className="flex-1 bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
