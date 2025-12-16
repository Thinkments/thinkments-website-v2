import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  DollarSign,
  AlertTriangle,
  Calendar,
  Search,
  Filter,
  LayoutGrid,
  List,
  Plus,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  Globe,
  X,
  Upload,
  Save,
  FileText,
  MessageSquare,
  CreditCard,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  PauseCircle,
  TrendingUp,
  Building2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { toast } from 'sonner@2.0.3';

interface Client {
  id: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  logo?: string;
  status: 'active' | 'paused' | 'churned';
  services: string[];
  retainer: number;
  contractStart: string;
  contractLength: string;
  renewalDate: string;
  lastContact: string;
  address?: string;
  website?: string;
  notes?: string;
}

const mockClients: Client[] = [
  {
    id: '1',
    businessName: 'Acme Corporation',
    contactName: 'John Smith',
    email: 'john@acmecorp.com',
    phone: '(555) 123-4567',
    status: 'active',
    services: ['Web', 'SEO', 'GBP'],
    retainer: 2500,
    contractStart: '2024-01-15',
    contractLength: '12 months',
    renewalDate: '2025-01-15',
    lastContact: '2024-11-28',
    website: 'https://acmecorp.com',
    address: '123 Main St, New York, NY'
  },
  {
    id: '2',
    businessName: 'TechStart Inc',
    contactName: 'Sarah Johnson',
    email: 'sarah@techstart.io',
    phone: '(555) 234-5678',
    status: 'active',
    services: ['Web', 'SEO', 'Social'],
    retainer: 3500,
    contractStart: '2024-03-01',
    contractLength: '6 months',
    renewalDate: '2024-09-01',
    lastContact: '2024-12-01',
    website: 'https://techstart.io',
    address: '456 Tech Ave, San Francisco, CA'
  },
  {
    id: '3',
    businessName: 'Green Gardens',
    contactName: 'Mike Brown',
    email: 'mike@greengardens.com',
    phone: '(555) 345-6789',
    status: 'active',
    services: ['GBP', 'Video', 'Social'],
    retainer: 1800,
    contractStart: '2024-06-10',
    contractLength: '12 months',
    renewalDate: '2025-06-10',
    lastContact: '2024-11-25',
    website: 'https://greengardens.com'
  },
  {
    id: '4',
    businessName: 'Downtown Cafe',
    contactName: 'Lisa Chen',
    email: 'lisa@downtowncafe.com',
    phone: '(555) 456-7890',
    status: 'paused',
    services: ['GBP', 'Social'],
    retainer: 950,
    contractStart: '2024-02-20',
    contractLength: 'Monthly',
    renewalDate: '2024-12-20',
    lastContact: '2024-11-15',
    website: 'https://downtowncafe.com'
  },
  {
    id: '5',
    businessName: 'Elite Fitness',
    contactName: 'Tom Wilson',
    email: 'tom@elitefitness.com',
    phone: '(555) 567-8901',
    status: 'active',
    services: ['Web', 'GBP', 'Video', 'Tours'],
    retainer: 4200,
    contractStart: '2024-04-05',
    contractLength: '12 months',
    renewalDate: '2025-04-05',
    lastContact: '2024-12-03',
    website: 'https://elitefitness.com'
  },
  {
    id: '6',
    businessName: 'Law Firm Partners',
    contactName: 'David Martinez',
    email: 'david@lawfirmpartners.com',
    phone: '(555) 678-9012',
    status: 'churned',
    services: ['Web', 'SEO'],
    retainer: 3000,
    contractStart: '2023-08-12',
    contractLength: '12 months',
    renewalDate: '2024-08-12',
    lastContact: '2024-07-30',
    website: 'https://lawfirmpartners.com'
  }
];

const serviceIcons = {
  Web: { label: 'Website', color: 'bg-blue-100 text-blue-700' },
  SEO: { label: 'SEO', color: 'bg-green-100 text-green-700' },
  GBP: { label: 'GBP', color: 'bg-purple-100 text-purple-700' },
  Video: { label: 'Video', color: 'bg-red-100 text-red-700' },
  Tours: { label: 'Tours', color: 'bg-orange-100 text-orange-700' },
  Social: { label: 'Social', color: 'bg-pink-100 text-pink-700' }
};

export default function ClientManager() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Form state
  const [formData, setFormData] = useState<Partial<Client>>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    status: 'active',
    services: [],
    retainer: 0,
    contractStart: '',
    contractLength: '12 months',
    address: '',
    website: '',
    notes: ''
  });

  const activeClients = mockClients.filter(c => c.status === 'active');
  const totalMRR = activeClients.reduce((sum, client) => sum + client.retainer, 0);
  
  // Calculate clients with renewals in next 30 days
  const today = new Date();
  const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const expiringContracts = mockClients.filter(client => {
    const renewalDate = new Date(client.renewalDate);
    return renewalDate >= today && renewalDate <= thirtyDaysFromNow && client.status === 'active';
  });

  // Calculate average tenure
  const avgTenure = Math.round(
    activeClients.reduce((sum, client) => {
      const start = new Date(client.contractStart);
      const months = (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30);
      return sum + months;
    }, 0) / activeClients.length
  );

  // Filter clients
  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.contactName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const openAddModal = () => {
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      status: 'active',
      services: [],
      retainer: 0,
      contractStart: '',
      contractLength: '12 months',
      address: '',
      website: '',
      notes: ''
    });
    setEditMode(false);
    setShowAddModal(true);
  };

  const openEditModal = (client: Client) => {
    setFormData(client);
    setEditMode(true);
    setShowAddModal(true);
  };

  const openDetailModal = (client: Client) => {
    setSelectedClient(client);
    setActiveTab('overview');
    setShowDetailModal(true);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services?.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...(prev.services || []), service]
    }));
  };

  const handleSaveClient = () => {
    toast.success(editMode ? 'Client updated successfully!' : 'Client added successfully!');
    setShowAddModal(false);
  };

  const getDaysUntilRenewal = (renewalDate: string) => {
    const renewal = new Date(renewalDate);
    const diffTime = renewal.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      active: { icon: CheckCircle, color: 'bg-green-100 text-green-700', label: 'Active' },
      paused: { icon: PauseCircle, color: 'bg-yellow-100 text-yellow-700', label: 'Paused' },
      churned: { icon: XCircle, color: 'bg-red-100 text-red-700', label: 'Churned' }
    };
    const config = configs[status as keyof typeof configs];
    const Icon = config.icon;
    return (
      <Badge className={`${config.color} border-0`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1E3A5F]">Client Manager</h1>
        <p className="text-gray-600 mt-1">Manage your active clients and contracts</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Active Clients</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">{activeClients.length}</p>
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
                <p className="text-sm text-gray-600 mb-1">Monthly Recurring Revenue</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">${totalMRR.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Contracts Expiring Soon</p>
                <p className="text-3xl font-bold text-[#FF6B35]">{expiringContracts.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#FF6B35]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Client Tenure</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">{avgTenure}m</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contract Alerts */}
      {expiringContracts.length > 0 && (
        <Card className="border-2 border-[#FF6B35] bg-[#FF6B35]/5 mb-6">
          <CardHeader>
            <CardTitle className="text-[#1E3A5F] flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-[#FF6B35]" />
              <span>Contract Renewals - Next 30 Days</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expiringContracts.map(client => {
                const daysUntil = getDaysUntilRenewal(client.renewalDate);
                return (
                  <div key={client.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E3A5F]">{client.businessName}</p>
                        <p className="text-sm text-gray-600">Renewal: {new Date(client.renewalDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={`${daysUntil <= 7 ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'} border-0`}>
                        {daysUntil} days
                      </Badge>
                      <Button size="sm" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Reminder
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Toolbar */}
      <Card className="border-0 shadow-md mb-6">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3 flex-1 min-w-[300px]">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="churned">Churned</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-white shadow-sm' : ''}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-white shadow-sm' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Button onClick={openAddModal} className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map(client => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E3A5F]">{client.businessName}</h3>
                        <p className="text-sm text-gray-600">{client.contactName}</p>
                      </div>
                    </div>
                    {getStatusBadge(client.status)}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.services.map(service => (
                      <Badge key={service} className={`${serviceIcons[service as keyof typeof serviceIcons].color} border-0 text-xs`}>
                        {serviceIcons[service as keyof typeof serviceIcons].label}
                      </Badge>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Monthly Retainer:</span>
                      <span className="font-semibold text-[#1E3A5F]">${client.retainer.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Renewal Date:</span>
                      <span className="font-semibold text-[#1E3A5F]">{new Date(client.renewalDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Last Contact:</span>
                      <span className="font-semibold text-[#1E3A5F]">{new Date(client.lastContact).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => openDetailModal(client)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => openEditModal(client)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Client Table View */}
      {viewMode === 'list' && (
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8F9FA]">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Client Name</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Services</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Retainer</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Start Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Renewal</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Last Contact</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#1E3A5F]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client, index) => (
                  <motion.tr
                    key={client.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-gray-100 hover:bg-[#F8F9FA] transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1E3A5F]">{client.businessName}</p>
                          <p className="text-sm text-gray-600">{client.contactName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(client.status)}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {client.services.map(service => (
                          <Badge key={service} className={`${serviceIcons[service as keyof typeof serviceIcons].color} border-0 text-xs`}>
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-[#1E3A5F]">${client.retainer.toLocaleString()}</td>
                    <td className="p-4 text-sm text-gray-600">{new Date(client.contractStart).toLocaleDateString()}</td>
                    <td className="p-4 text-sm text-gray-600">{new Date(client.renewalDate).toLocaleDateString()}</td>
                    <td className="p-4 text-sm text-gray-600">{new Date(client.lastContact).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openDetailModal(client)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openEditModal(client)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Add/Edit Client Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowAddModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1E3A5F]">
                  {editMode ? 'Edit Client' : 'Add New Client'}
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setShowAddModal(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="mt-2"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Logo Upload */}
                <div>
                  <Label>Client Logo</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Drop logo here or click to upload</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <Label>Services Enabled *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {Object.entries(serviceIcons).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleServiceToggle(key)}
                        className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          formData.services?.includes(key)
                            ? 'border-[#00B4D8] bg-[#00B4D8]/10 text-[#00B4D8]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <CheckCircle className={`w-4 h-4 mx-auto mb-1 ${
                          formData.services?.includes(key) ? 'text-[#00B4D8]' : 'text-gray-400'
                        }`} />
                        {value.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contract Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="retainer">Monthly Retainer *</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="retainer"
                        type="number"
                        value={formData.retainer}
                        onChange={(e) => setFormData({ ...formData, retainer: Number(e.target.value) })}
                        className="pl-7"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contractStart">Contract Start Date *</Label>
                    <Input
                      id="contractStart"
                      type="date"
                      value={formData.contractStart}
                      onChange={(e) => setFormData({ ...formData, contractStart: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contractLength">Contract Length *</Label>
                    <Select
                      value={formData.contractLength}
                      onValueChange={(value) => setFormData({ ...formData, contractLength: value })}
                    >
                      <SelectTrigger id="contractLength" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                        <SelectItem value="6 months">6 Months</SelectItem>
                        <SelectItem value="12 months">12 Months</SelectItem>
                        <SelectItem value="24 months">24 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value as 'active' | 'paused' | 'churned' })}
                  >
                    <SelectTrigger id="status" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                      <SelectItem value="churned">Churned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Notes */}
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-2 min-h-[100px]"
                    placeholder="Add any additional notes about this client..."
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                  <Button variant="outline" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveClient} className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    {editMode ? 'Update Client' : 'Add Client'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {showDetailModal && selectedClient && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowDetailModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl z-50"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] text-white p-6 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedClient.businessName}</h2>
                      <p className="text-white/80">{selectedClient.contactName}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(selectedClient.status)}
                    <Button variant="ghost" size="sm" onClick={() => setShowDetailModal(false)} className="text-white hover:bg-white/20">
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 px-6">
                <div className="flex space-x-6">
                  {['overview', 'services', 'documents', 'invoices', 'communication', 'notes'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-3 px-2 border-b-2 transition-colors capitalize ${
                        activeTab === tab
                          ? 'border-[#00B4D8] text-[#00B4D8] font-semibold'
                          : 'border-transparent text-gray-600 hover:text-[#00B4D8]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="border-0 bg-[#F8F9FA]">
                        <CardContent className="p-4">
                          <p className="text-sm text-gray-600 mb-1">Monthly Retainer</p>
                          <p className="text-2xl font-bold text-[#1E3A5F]">${selectedClient.retainer.toLocaleString()}</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 bg-[#F8F9FA]">
                        <CardContent className="p-4">
                          <p className="text-sm text-gray-600 mb-1">Contract Length</p>
                          <p className="text-2xl font-bold text-[#1E3A5F]">{selectedClient.contractLength}</p>
                        </CardContent>
                      </Card>
                      <Card className="border-0 bg-[#F8F9FA]">
                        <CardContent className="p-4">
                          <p className="text-sm text-gray-600 mb-1">Days to Renewal</p>
                          <p className="text-2xl font-bold text-[#1E3A5F]">{getDaysUntilRenewal(selectedClient.renewalDate)}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Contact Information */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-[#1E3A5F]">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium text-[#1E3A5F]">{selectedClient.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Phone</p>
                            <p className="font-medium text-[#1E3A5F]">{selectedClient.phone}</p>
                          </div>
                        </div>
                        {selectedClient.website && (
                          <div className="flex items-center space-x-3">
                            <Globe className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">Website</p>
                              <a href={selectedClient.website} target="_blank" rel="noopener noreferrer" className="font-medium text-[#00B4D8] hover:underline">
                                {selectedClient.website}
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedClient.address && (
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">Address</p>
                              <p className="font-medium text-[#1E3A5F]">{selectedClient.address}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Services */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-[#1E3A5F]">Active Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {selectedClient.services.map(service => (
                            <Badge key={service} className={`${serviceIcons[service as keyof typeof serviceIcons].color} border-0 px-4 py-2`}>
                              {serviceIcons[service as keyof typeof serviceIcons].label}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Links */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-[#1E3A5F]">Quick Links</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="justify-start">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Analytics
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <Globe className="w-4 h-4 mr-2" />
                            Visit Website
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <MapPin className="w-4 h-4 mr-2" />
                            GBP Dashboard
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <CreditCard className="w-4 h-4 mr-2" />
                            View Invoices
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab !== 'overview' && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
