import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  DollarSign,
  FileText,
  TrendingUp,
  TrendingDown,
  Plus,
  Send,
  Eye,
  Download,
  Edit2,
  Trash2,
  X,
  Calendar,
  Search,
  Filter,
  Copy,
  Receipt,
  CreditCard,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  Upload,
  Printer,
  Mail,
  Link as LinkIcon,
  BarChart3,
  PieChart as PieChartIcon,
  Repeat,
  Settings,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data
const invoices = [
  {
    id: 'INV-001',
    client: 'Acme Corporation',
    amount: 5500,
    dateIssued: '2025-01-01',
    dueDate: '2025-01-31',
    status: 'paid',
    paidDate: '2025-01-28',
  },
  {
    id: 'INV-002',
    client: 'TechStart Inc',
    amount: 3200,
    dateIssued: '2025-01-05',
    dueDate: '2025-02-04',
    status: 'sent',
    viewedDate: '2025-01-06',
  },
  {
    id: 'INV-003',
    client: 'Retail Solutions LLC',
    amount: 4800,
    dateIssued: '2024-12-15',
    dueDate: '2025-01-14',
    status: 'overdue',
  },
  {
    id: 'INV-004',
    client: 'Digital Innovations Co',
    amount: 6200,
    dateIssued: '2025-01-10',
    dueDate: '2025-02-09',
    status: 'viewed',
    viewedDate: '2025-01-11',
  },
  {
    id: 'INV-005',
    client: 'Acme Corporation',
    amount: 2900,
    dateIssued: '2025-01-15',
    dueDate: '2025-01-30',
    status: 'draft',
  },
];

const revenueData = [
  { month: 'Feb', revenue: 12400, previousYear: 9800 },
  { month: 'Mar', revenue: 15600, previousYear: 11200 },
  { month: 'Apr', revenue: 18200, previousYear: 13500 },
  { month: 'May', revenue: 16800, previousYear: 14100 },
  { month: 'Jun', revenue: 19500, previousYear: 15800 },
  { month: 'Jul', revenue: 21200, previousYear: 16900 },
  { month: 'Aug', revenue: 19800, previousYear: 17200 },
  { month: 'Sep', revenue: 22400, previousYear: 18500 },
  { month: 'Oct', revenue: 24100, previousYear: 19800 },
  { month: 'Nov', revenue: 23600, previousYear: 20200 },
  { month: 'Dec', revenue: 26800, previousYear: 22100 },
  { month: 'Jan', revenue: 28500, previousYear: 24300 },
];

const expenses = [
  {
    id: '1',
    description: 'Adobe Creative Cloud',
    amount: 79.99,
    category: 'Software',
    date: '2025-01-05',
    client: null,
    receipt: true,
  },
  {
    id: '2',
    description: 'Freelance Content Writer',
    amount: 450,
    category: 'Contractors',
    date: '2025-01-10',
    client: 'Acme Corporation',
    receipt: true,
  },
  {
    id: '3',
    description: 'Facebook Ads',
    amount: 1200,
    category: 'Marketing',
    date: '2025-01-12',
    client: 'TechStart Inc',
    receipt: false,
  },
  {
    id: '4',
    description: 'Office Supplies',
    amount: 125.5,
    category: 'Office',
    date: '2025-01-15',
    client: null,
    receipt: true,
  },
];

const expenseCategories = [
  { name: 'Software', value: 35, color: '#00B4D8' },
  { name: 'Contractors', value: 28, color: '#1E3A5F' },
  { name: 'Marketing', value: 22, color: '#FF6B35' },
  { name: 'Office', value: 15, color: '#10b981' },
];

const recurringInvoices = [
  {
    id: '1',
    client: 'Acme Corporation',
    amount: 5500,
    frequency: 'Monthly',
    nextDate: '2025-02-01',
    status: 'active',
  },
  {
    id: '2',
    client: 'TechStart Inc',
    amount: 3200,
    frequency: 'Monthly',
    nextDate: '2025-02-05',
    status: 'active',
  },
];

export default function InvoicesExpenses() {
  const [activeTab, setActiveTab] = useState<'invoices' | 'expenses' | 'reports'>('invoices');
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showInvoiceDetail, setShowInvoiceDetail] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<(typeof invoices)[0] | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showComparison, setShowComparison] = useState(false);

  // Invoice form state
  const [lineItems, setLineItems] = useState([{ description: '', quantity: 1, rate: 0 }]);

  const stats = {
    revenueThisMonth: { amount: 28500, change: 12.5 },
    outstanding: 15200,
    overdue: 4800,
    paidThisMonth: 12700,
    avgDaysToPay: 24,
    activeClients: 12,
  };

  const addLineItem = () => {
    setLineItems([...lineItems, { description: '', quantity: 1, rate: 0 }]);
  };

  const removeLineItem = (index: number) => {
    setLineItems(lineItems.filter((_, i) => i !== index));
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-500/10 text-green-700';
      case 'sent':
        return 'bg-indigo-500/10 text-indigo-300';
      case 'viewed':
        return 'bg-[#00B4D8]/10 text-[#00B4D8]';
      case 'overdue':
        return 'bg-rose-500/10 text-rose-300';
      case 'draft':
        return 'bg-white/10 text-slate-300';
      case 'partially-paid':
        return 'bg-amber-500/10 text-yellow-700';
      default:
        return 'bg-white/10 text-slate-300';
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Page Header */}
      <div className="bg-[#0f172a]/40 backdrop-blur-xl border-b border-white/10 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Billing & Finances</h1>
            <p className="text-slate-400">Manage invoices, expenses, and financial reporting</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2">
          {[
            { id: 'invoices', label: 'Invoices', icon: FileText },
            { id: 'expenses', label: 'Expenses', icon: Receipt },
            { id: 'reports', label: 'Reports', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'invoices' | 'expenses' | 'reports')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${activeTab === tab.id
                  ? 'bg-[#00B4D8] text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <div className="text-sm text-slate-400">Revenue (Month)</div>
            </div>
            <div className="text-2xl font-bold text-white">
              ${stats.revenueThisMonth.amount.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              {stats.revenueThisMonth.change}%
            </div>
          </Card>

          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-[#00B4D8]" />
              <div className="text-sm text-slate-400">Outstanding</div>
            </div>
            <div className="text-2xl font-bold text-[#00B4D8]">
              ${stats.outstanding.toLocaleString()}
            </div>
          </Card>

          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <div className="text-sm text-slate-400">Overdue</div>
            </div>
            <div className="text-2xl font-bold text-rose-400">${stats.overdue.toLocaleString()}</div>
          </Card>

          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <div className="text-sm text-slate-400">Paid (Month)</div>
            </div>
            <div className="text-2xl font-bold text-green-600">
              ${stats.paidThisMonth.toLocaleString()}
            </div>
          </Card>

          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <div className="text-sm text-slate-400">Avg Days to Pay</div>
            </div>
            <div className="text-2xl font-bold text-white">{stats.avgDaysToPay}</div>
          </Card>

          <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-4 h-4 text-[#00B4D8]" />
              <div className="text-sm text-slate-400">Active Clients</div>
            </div>
            <div className="text-2xl font-bold text-white">{stats.activeClients}</div>
          </Card>
        </div>

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <>
            {/* Revenue Chart */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Revenue Overview</h2>
                  <p className="text-sm text-slate-400">Monthly revenue for the past year</p>
                </div>
                <div className="flex items-center space-x-3">
                  <label className="flex items-center space-x-2 text-sm text-slate-400">
                    <input
                      type="checkbox"
                      checked={showComparison}
                      onChange={(e) => setShowComparison(e.target.checked)}
                      className="rounded border-white/20"
                    />
                    <span>Compare to previous year</span>
                  </label>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#00B4D8" name="Current Year" radius={[4, 4, 0, 0]} />
                  {showComparison && (
                    <Bar
                      dataKey="previousYear"
                      fill="#94a3b8"
                      name="Previous Year"
                      radius={[4, 4, 0, 0]}
                    />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Invoice List */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Invoices</h2>
                <Button
                  onClick={() => setShowInvoiceModal(true)}
                  className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Invoice
                </Button>
              </div>

              {/* Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  {['all', 'draft', 'sent', 'paid', 'overdue'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${filterStatus === status
                        ? 'bg-[#00B4D8] text-white'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search invoices..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Invoice #
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Issued
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Due Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4">
                          <button
                            onClick={() => {
                              setSelectedInvoice(invoice);
                              setShowInvoiceDetail(true);
                            }}
                            className="font-medium text-[#00B4D8] hover:underline"
                          >
                            {invoice.id}
                          </button>
                        </td>
                        <td className="py-4 px-4 text-slate-300">{invoice.client}</td>
                        <td className="py-4 px-4 font-semibold text-white">
                          ${invoice.amount.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-slate-400">{invoice.dateIssued}</td>
                        <td className="py-4 px-4 text-slate-400">{invoice.dueDate}</td>
                        <td className="py-4 px-4">
                          <Badge className={`${getStatusColor(invoice.status)} capitalize`}>
                            {invoice.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => {
                                setSelectedInvoice(invoice);
                                setShowInvoiceDetail(true);
                              }}
                              className="p-2 hover:bg-white/10 rounded transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4 text-slate-400" />
                            </button>
                            {invoice.status === 'overdue' && (
                              <button
                                className="p-2 hover:bg-white/10 rounded transition-colors"
                                title="Send Reminder"
                              >
                                <Send className="w-4 h-4 text-[#00B4D8]" />
                              </button>
                            )}
                            <button
                              className="p-2 hover:bg-white/10 rounded transition-colors"
                              title="Download"
                            >
                              <Download className="w-4 h-4 text-slate-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Recurring Invoices */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Repeat className="w-5 h-5 text-[#00B4D8]" />
                  <h2 className="text-xl font-bold text-white">Recurring Invoices</h2>
                </div>
                <Button variant="outline" size="sm" className="border-[#00B4D8] text-[#00B4D8]">
                  <Plus className="w-3 h-3 mr-2" />
                  New Recurring
                </Button>
              </div>

              <div className="space-y-3">
                {recurringInvoices.map((recurring) => (
                  <div
                    key={recurring.id}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-semibold text-white">{recurring.client}</div>
                          <div className="text-sm text-slate-400">
                            ${recurring.amount.toLocaleString()} · {recurring.frequency}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm text-slate-400">Next Invoice</div>
                          <div className="font-medium text-white">{recurring.nextDate}</div>
                        </div>
                        <Badge className="bg-emerald-500/10 text-green-700 capitalize">
                          {recurring.status}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-white/10 rounded transition-colors">
                            <Edit2 className="w-4 h-4 text-slate-400" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded transition-colors">
                            <Trash2 className="w-4 h-4 text-rose-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {/* Expenses Tab */}
        {activeTab === 'expenses' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Expense Category Chart */}
              <Card className="lg:col-span-1 p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <h3 className="font-bold text-white mb-4">Expenses by Category</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {expenseCategories.map((cat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-sm font-medium text-white">{cat.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-300">{cat.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Monthly Totals */}
              <Card className="lg:col-span-2 p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <h3 className="font-bold text-white mb-4">Monthly Expense Totals</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData.slice(-6)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#FF6B35"
                      strokeWidth={3}
                      name="Expenses"
                      dot={{ fill: '#FF6B35', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Expense List */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Expense Log</h2>
                <Button
                  onClick={() => setShowExpenseModal(true)}
                  className="bg-[#FF6B35] hover:bg-[#e55a24] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Expense
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Description
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Category
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Receipt
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => (
                      <tr key={expense.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4 text-slate-400">{expense.date}</td>
                        <td className="py-4 px-4 font-medium text-white">
                          {expense.description}
                        </td>
                        <td className="py-4 px-4">
                          <Badge className="bg-indigo-500/10 text-indigo-300">{expense.category}</Badge>
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#FF6B35]">
                          ${expense.amount.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-slate-400">{expense.client || '-'}</td>
                        <td className="py-4 px-4">
                          {expense.receipt ? (
                            <Badge className="bg-emerald-500/10 text-green-700">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Yes
                            </Badge>
                          ) : (
                            <Badge className="bg-white/10 text-slate-300">No</Badge>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="p-2 hover:bg-white/10 rounded transition-colors">
                              <Edit2 className="w-4 h-4 text-slate-400" />
                            </button>
                            <button className="p-2 hover:bg-white/10 rounded transition-colors">
                              <Trash2 className="w-4 h-4 text-rose-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Revenue by Client */}
              <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <h3 className="font-bold text-white mb-4">Revenue by Client (YTD)</h3>
                <div className="space-y-3">
                  {[
                    { client: 'Acme Corporation', amount: 38500, percentage: 32 },
                    { client: 'Digital Innovations Co', amount: 29200, percentage: 24 },
                    { client: 'TechStart Inc', amount: 24800, percentage: 21 },
                    { client: 'Retail Solutions LLC', amount: 18400, percentage: 15 },
                    { client: 'Others', amount: 9100, percentage: 8 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">{item.client}</span>
                        <span className="text-sm font-bold text-slate-300">
                          ${item.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-[#00B4D8] h-2 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Paid vs Outstanding */}
              <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <h3 className="font-bold text-white mb-4">Accounts Receivable</h3>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Paid', value: 65, color: '#10b981' },
                        { name: 'Outstanding', value: 25, color: '#00B4D8' },
                        { name: 'Overdue', value: 10, color: '#ef4444' },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[
                        { name: 'Paid', value: 65, color: '#10b981' },
                        { name: 'Outstanding', value: 25, color: '#00B4D8' },
                        { name: 'Overdue', value: 10, color: '#ef4444' },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-4 space-y-2">
                  {[
                    { name: 'Paid', value: 65, color: '#10b981', amount: 78000 },
                    { name: 'Outstanding', value: 25, color: '#00B4D8', amount: 30000 },
                    { name: 'Overdue', value: 10, color: '#ef4444', amount: 12000 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-white">{item.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-300">
                        ${item.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Report Actions */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h3 className="font-bold text-white mb-6">Generate Reports</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Profit & Loss Statement', icon: BarChart3 },
                  { name: 'Accounts Receivable Aging', icon: Clock },
                  { name: 'Revenue by Service', icon: PieChartIcon },
                  { name: 'Client Statement', icon: FileText },
                  { name: 'Tax Summary', icon: Receipt },
                  { name: 'Custom Report', icon: Settings },
                ].map((report, i) => {
                  const Icon = report.icon;
                  return (
                    <button
                      key={i}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#00B4D8] hover:shadow-2xl border border-white/5 transition-all text-left group"
                    >
                      <Icon className="w-6 h-6 text-[#00B4D8] mb-3" />
                      <div className="font-semibold text-white group-hover:text-[#00B4D8]">
                        {report.name}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">Click to generate</div>
                    </button>
                  );
                })}
              </div>
            </Card>
          </>
        )}
      </div>

      {/* Create Invoice Modal */}
      <AnimatePresence>
        {showInvoiceModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowInvoiceModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-4xl bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Create Invoice</h2>
                  <button
                    onClick={() => setShowInvoiceModal(false)}
                    className="p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Client *
                      </label>
                      <select className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                        <option>Select a client...</option>
                        <option>Acme Corporation</option>
                        <option>TechStart Inc</option>
                        <option>Retail Solutions LLC</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Invoice Number *
                      </label>
                      <Input value="INV-006" readOnly />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Invoice Date *
                      </label>
                      <Input type="date" defaultValue="2025-01-05" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Due Date *
                      </label>
                      <Input type="date" defaultValue="2025-02-04" />
                    </div>
                  </div>

                  {/* Line Items */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">
                      Line Items
                    </label>
                    <div className="space-y-3">
                      {lineItems.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-3">
                          <div className="col-span-5">
                            <Input
                              placeholder="Description"
                              value={item.description}
                              onChange={(e) => {
                                const newItems = [...lineItems];
                                newItems[index].description = e.target.value;
                                setLineItems(newItems);
                              }}
                            />
                          </div>
                          <div className="col-span-2">
                            <Input
                              type="number"
                              placeholder="Qty"
                              value={item.quantity}
                              onChange={(e) => {
                                const newItems = [...lineItems];
                                newItems[index].quantity = parseInt(e.target.value) || 0;
                                setLineItems(newItems);
                              }}
                            />
                          </div>
                          <div className="col-span-2">
                            <Input
                              type="number"
                              placeholder="Rate"
                              value={item.rate}
                              onChange={(e) => {
                                const newItems = [...lineItems];
                                newItems[index].rate = parseFloat(e.target.value) || 0;
                                setLineItems(newItems);
                              }}
                            />
                          </div>
                          <div className="col-span-2 flex items-center">
                            <span className="font-semibold text-white">
                              ${(item.quantity * item.rate).toFixed(2)}
                            </span>
                          </div>
                          <div className="col-span-1 flex items-center">
                            {lineItems.length > 1 && (
                              <button
                                onClick={() => removeLineItem(index)}
                                className="p-2 hover:bg-white/10 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-rose-400" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addLineItem}
                      className="mt-3 border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Plus className="w-3 h-3 mr-2" />
                      Add Line Item
                    </Button>
                  </div>

                  {/* Totals */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-end">
                      <div className="w-64 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Subtotal:</span>
                          <span className="font-semibold text-white">
                            ${calculateSubtotal().toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Tax (0%):</span>
                          <span className="text-slate-300">$0.00</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <span className="font-bold text-white">Total:</span>
                          <span className="text-2xl font-bold text-[#00B4D8]">
                            ${calculateSubtotal().toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Notes / Terms
                    </label>
                    <Textarea placeholder="Payment terms, project details, etc." rows={3} />
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      onClick={() => setShowInvoiceModal(false)}
                      className="border-white/20"
                    >
                      Cancel
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      Save as Draft
                    </Button>
                    <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Invoice
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Log Expense Modal */}
      <AnimatePresence>
        {showExpenseModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowExpenseModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-2xl bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Log Expense</h2>
                  <button
                    onClick={() => setShowExpenseModal(false)}
                    className="p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Description *
                    </label>
                    <Input placeholder="What was this expense for?" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Amount *
                      </label>
                      <Input type="number" placeholder="0.00" step="0.01" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Category *
                      </label>
                      <select className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                        <option>Select category...</option>
                        <option>Software</option>
                        <option>Contractors</option>
                        <option>Marketing</option>
                        <option>Office</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Date *
                      </label>
                      <Input type="date" defaultValue="2025-01-05" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Client (Optional)
                      </label>
                      <select className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                        <option>None (General Expense)</option>
                        <option>Acme Corporation</option>
                        <option>TechStart Inc</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Receipt
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-slate-300">Click to upload receipt</p>
                      <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      onClick={() => setShowExpenseModal(false)}
                      className="border-white/20"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-[#FF6B35] hover:bg-[#e55a24] text-white">
                      Save Expense
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Invoice Detail Modal */}
      <AnimatePresence>
        {showInvoiceDetail && selectedInvoice && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => {
                setShowInvoiceDetail(false);
                setSelectedInvoice(null);
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-4xl bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Invoice {selectedInvoice.id}
                  </h2>
                  <button
                    onClick={() => {
                      setShowInvoiceDetail(false);
                      setSelectedInvoice(null);
                    }}
                    className="p-2 hover:bg-white/10 rounded transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                {/* Invoice Preview */}
                <div className="border border-white/10 rounded-lg p-8 mb-6 bg-[#0f172a]/40 backdrop-blur-xl">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">INVOICE</h3>
                      <p className="text-slate-400">{selectedInvoice.id}</p>
                    </div>
                    <Badge
                      className={`${getStatusColor(selectedInvoice.status)} capitalize text-lg px-4 py-2`}
                    >
                      {selectedInvoice.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="font-semibold text-white mb-2">From:</div>
                      <div className="text-slate-300">ThinkMents Digital Marketing</div>
                      <div className="text-sm text-slate-400">123 Marketing St</div>
                      <div className="text-sm text-slate-400">New York, NY 10001</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">To:</div>
                      <div className="text-slate-300">{selectedInvoice.client}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-sm text-slate-400">Invoice Date:</div>
                      <div className="font-medium text-slate-300">{selectedInvoice.dateIssued}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Due Date:</div>
                      <div className="font-medium text-slate-300">{selectedInvoice.dueDate}</div>
                    </div>
                  </div>

                  <table className="w-full mb-8">
                    <thead>
                      <tr className="border-b-2 border-white/20">
                        <th className="text-left py-3 text-sm font-semibold text-slate-400">
                          Description
                        </th>
                        <th className="text-right py-3 text-sm font-semibold text-slate-400">Qty</th>
                        <th className="text-right py-3 text-sm font-semibold text-slate-400">
                          Rate
                        </th>
                        <th className="text-right py-3 text-sm font-semibold text-slate-400">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-4 text-slate-300">SEO Services - Monthly Package</td>
                        <td className="py-4 text-right text-slate-300">1</td>
                        <td className="py-4 text-right text-slate-300">
                          ${selectedInvoice.amount.toLocaleString()}
                        </td>
                        <td className="py-4 text-right font-semibold text-white">
                          ${selectedInvoice.amount.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="flex justify-end">
                    <div className="w-64 space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="font-bold text-white">Total Due:</span>
                        <span className="text-2xl font-bold text-[#00B4D8]">
                          ${selectedInvoice.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="border-white/20">
                      <Printer className="w-4 h-4 mr-2" />
                      Print
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    {selectedInvoice.status === 'overdue' && (
                      <Button className="bg-[#FF6B35] hover:bg-[#e55a24] text-white">
                        <Send className="w-4 h-4 mr-2" />
                        Send Reminder
                      </Button>
                    )}
                    {selectedInvoice.status !== 'paid' && (
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Mark as Paid
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
