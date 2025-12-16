import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Mail,
  Plus,
  Sparkles,
  Monitor,
  Smartphone,
  Send,
  Copy,
  Download,
  RefreshCw,
  Check,
  X,
  ChevronDown,
  ChevronRight,
  Edit3,
  Trash2,
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Zap,
  Code,
  Eye,
  Settings,
  PlayCircle,
  MessageSquare,
  Gift,
  UserPlus,
  Repeat,
  Megaphone,
  PartyPopper,
  Clock,
  BarChart3,
  Image as ImageIcon,
  Smile,
  GripVertical,
  Save,
  Layers,
  Type,
  MousePointer,
  Heart,
  Star,
  Award,
  TrendingDown,
  Activity,
  DollarSign,
  FileText,
  Link as LinkIcon,
  Maximize2
} from 'lucide-react';

type EmailType = 
  | 'newsletter' 
  | 'sales' 
  | 'welcome' 
  | 'followup' 
  | 'reengagement' 
  | 'announcement' 
  | 'event';

type DeviceType = 'desktop' | 'mobile';
type TemplateType = 'clean' | 'modern' | 'branded' | 'plain';
type ViewMode = 'builder' | 'campaigns' | 'templates' | 'sequence' | 'analytics';

interface SubjectLine {
  id: string;
  text: string;
  charCount: number;
  withEmoji?: boolean;
}

interface Campaign {
  id: string;
  name: string;
  type: EmailType;
  status: 'draft' | 'scheduled' | 'sent';
  subject: string;
  date: string;
  openRate?: number;
  clickRate?: number;
}

const emailTypes = [
  { id: 'newsletter', label: 'Newsletter', icon: MessageSquare, desc: 'Monthly updates, news' },
  { id: 'sales', label: 'Sales/Promotional', icon: Gift, desc: 'Special offers, discounts' },
  { id: 'welcome', label: 'Welcome Series', icon: UserPlus, desc: 'New subscriber onboarding' },
  { id: 'followup', label: 'Follow-up', icon: Repeat, desc: 'After inquiry or meeting' },
  { id: 'reengagement', label: 'Re-engagement', icon: Zap, desc: 'Win back inactive contacts' },
  { id: 'announcement', label: 'Announcement', icon: Megaphone, desc: 'New service, update' },
  { id: 'event', label: 'Event Invitation', icon: PartyPopper, desc: 'Events and webinars' },
];

const mockSubjectLines: SubjectLine[] = [
  { id: '1', text: 'Your Free Website Audit is Ready ✨', charCount: 39, withEmoji: true },
  { id: '2', text: 'Boost Your Traffic: 5 Quick SEO Tips', charCount: 37 },
  { id: '3', text: 'Limited Time: 20% Off Web Design Services', charCount: 43 },
  { id: '4', text: 'See How We Helped Local Businesses Grow', charCount: 41 },
  { id: '5', text: 'New Blog Post: Digital Marketing Trends 2024', charCount: 46 },
];

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'May Newsletter',
    type: 'newsletter',
    status: 'sent',
    subject: 'Your Monthly Digital Marketing Update',
    date: '2024-05-15',
    openRate: 32.5,
    clickRate: 8.2,
  },
  {
    id: '2',
    name: 'Spring Promotion',
    type: 'sales',
    status: 'sent',
    subject: '20% Off Web Design - Limited Time!',
    date: '2024-04-20',
    openRate: 28.1,
    clickRate: 12.4,
  },
  {
    id: '3',
    name: 'New Client Welcome',
    type: 'welcome',
    status: 'draft',
    subject: 'Welcome to ThinkMents!',
    date: '2024-05-20',
  },
];

export default function EmailCampaignWriter() {
  const [viewMode, setViewMode] = useState<ViewMode>('builder');
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState('');
  const [emailType, setEmailType] = useState<EmailType>('newsletter');
  const [selectedClient, setSelectedClient] = useState('ThinkMents');
  const [audience, setAudience] = useState('');
  const [mainTopic, setMainTopic] = useState('');
  const [emailDescription, setEmailDescription] = useState('');
  const [keyPoints, setKeyPoints] = useState<string[]>(['']);
  const [ctaGoal, setCtaGoal] = useState('visit-website');
  const [emailLength, setEmailLength] = useState<'short' | 'medium' | 'long'>('medium');
  
  const [generatedSubjects, setGeneratedSubjects] = useState<SubjectLine[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [previewText, setPreviewText] = useState('');
  const [generatedBody, setGeneratedBody] = useState('');
  
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [template, setTemplate] = useState<TemplateType>('clean');
  const [showTokens, setShowTokens] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showABTest, setShowABTest] = useState(false);
  
  const [sequenceEmails, setSequenceEmails] = useState<any[]>([]);

  const generateSubjectLines = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedSubjects(mockSubjectLines);
      setIsGenerating(false);
    }, 1500);
  };

  const generateEmailBody = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const sampleBody = `Hi {FirstName},

We hope this message finds you well! We're excited to share some valuable insights that can help take your business to the next level.

At ThinkMents, we've been helping businesses like yours grow their online presence and connect with more customers. Here are three quick tips to boost your digital marketing:

1. **Optimize Your Website Speed** - Fast-loading pages keep visitors engaged and improve your search rankings
2. **Leverage Local SEO** - Make sure your business shows up when people search for services in ${audience || 'your area'}
3. **Engage on Social Media** - Regular posts and interactions build trust and keep your brand top-of-mind

We'd love to help you implement these strategies and more. Our team specializes in creating custom solutions that deliver real results.

Ready to see what we can do for your business?

[Get Your Free Consultation]

Best regards,
The ThinkMents Team

P.S. This month only, we're offering a complimentary website audit. Click the link above to claim yours!`;
      
      setGeneratedBody(sampleBody);
      setIsGenerating(false);
    }, 2000);
  };

  const addKeyPoint = () => {
    setKeyPoints([...keyPoints, '']);
  };

  const updateKeyPoint = (index: number, value: string) => {
    const updated = [...keyPoints];
    updated[index] = value;
    setKeyPoints(updated);
  };

  const removeKeyPoint = (index: number) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index));
  };

  if (viewMode === 'campaigns') {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={() => setViewMode('builder')}
              className="text-gray-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Builder
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">My Campaigns</h2>
              <p className="text-gray-600">Manage your email campaigns</p>
            </div>
          </div>
          <Button
            onClick={() => setViewMode('builder')}
            className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>

        <div className="space-y-4">
          {mockCampaigns.map((campaign) => (
            <Card key={campaign.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#1E3A5F]">{campaign.name}</h3>
                      <Badge
                        className={
                          campaign.status === 'sent'
                            ? 'bg-green-500/10 text-green-600 border-green-500/20'
                            : campaign.status === 'scheduled'
                            ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                            : 'bg-gray-500/10 text-gray-600 border-gray-500/20'
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{campaign.subject}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(campaign.date).toLocaleDateString()}</span>
                      </div>
                      {campaign.openRate && (
                        <>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{campaign.openRate}% open rate</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{campaign.clickRate}% click rate</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Copy className="w-4 h-4 mr-1" />
                      Duplicate
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit3 className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // TEMPLATES VIEW
  if (viewMode === 'templates') {
    const mockTemplates = [
      { id: '1', name: 'Monthly Newsletter', category: 'Newsletter', uses: 24, lastUsed: '2024-05-10' },
      { id: '2', name: 'Product Launch', category: 'Sales', uses: 12, lastUsed: '2024-04-15' },
      { id: '3', name: 'Welcome Email #1', category: 'Welcome', uses: 45, lastUsed: '2024-05-18' },
      { id: '4', name: 'Event Reminder', category: 'Event', uses: 8, lastUsed: '2024-03-22' },
      { id: '5', name: 'Follow-up Sequence', category: 'Follow-up', uses: 18, lastUsed: '2024-05-12' },
      { id: '6', name: 'Re-engagement Campaign', category: 'Re-engagement', uses: 6, lastUsed: '2024-04-28' },
    ];

    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => setViewMode('builder')} className="text-gray-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Builder
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">Email Templates</h2>
              <p className="text-gray-600">Reusable email templates for faster campaign creation</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
            <Save className="w-4 h-4 mr-2" />
            Save Current as Template
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {['All', 'Newsletter', 'Sales', 'Welcome', 'Event', 'Follow-up', 'Re-engagement'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 text-sm whitespace-nowrap transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTemplates.map((temp) => (
            <Card key={temp.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1E3A5F] mb-1">{temp.name}</h3>
                    <Badge className="bg-gray-100 text-gray-600 text-xs">{temp.category}</Badge>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Template Preview */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 min-h-[120px]">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-6 bg-[#00B4D8]/20 rounded w-1/2 mt-3"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Used {temp.uses} times</span>
                  <span>Last: {new Date(temp.lastUsed).toLocaleDateString()}</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    Use Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // EMAIL SEQUENCE BUILDER VIEW
  if (viewMode === 'sequence') {
    const mockSequence = [
      { id: '1', title: 'Welcome Email', delay: 'Send immediately', subject: 'Welcome to ThinkMents!', status: 'active' },
      { id: '2', title: 'Getting Started', delay: '3 days after', subject: "Here's how to get started", status: 'active' },
      { id: '3', title: 'Value Proposition', delay: '7 days after', subject: 'See what makes us different', status: 'active' },
      { id: '4', title: 'Social Proof', delay: '14 days after', subject: 'Client success stories', status: 'draft' },
    ];

    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => setViewMode('builder')} className="text-gray-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Builder
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">Email Sequence Builder</h2>
              <p className="text-gray-600">Create automated drip campaigns and welcome series</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Sequence Settings
            </Button>
            <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Email
            </Button>
          </div>
        </div>

        {/* Sequence Timeline */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Welcome Series</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  Active
                </Badge>
                <span className="text-sm text-gray-600">4 emails • 21 day sequence</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

              {/* Sequence Emails */}
              <div className="space-y-6">
                {mockSequence.map((email, index) => (
                  <motion.div
                    key={email.id}
                    className="relative flex items-start space-x-4"
                    whileHover={{ x: 4 }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        email.status === 'active'
                          ? 'bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F]'
                          : 'bg-gray-200'
                      }`}>
                        <Mail className={`w-7 h-7 ${
                          email.status === 'active' ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="absolute -right-2 top-0">
                        <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                      </div>
                    </div>

                    {/* Email Card */}
                    <Card className="flex-1 border-2 border-gray-200 hover:border-[#00B4D8] transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-1">
                              <h4 className="font-semibold text-[#1E3A5F]">Email {index + 1}: {email.title}</h4>
                              <Badge className="bg-blue-50 text-blue-600 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {email.delay}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{email.subject}</p>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Stats Preview (for active emails) */}
                        {email.status === 'active' && index === 0 && (
                          <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-gray-200">
                            <div className="flex items-center space-x-1 text-xs text-gray-600">
                              <Eye className="w-3 h-3" />
                              <span>34.2% opened</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs text-gray-600">
                              <MousePointer className="w-3 h-3" />
                              <span>9.8% clicked</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs text-gray-600">
                              <Users className="w-3 h-3" />
                              <span>245 sent</span>
                            </div>
                          </div>
                        )}

                        {/* Edit Delay */}
                        <div className="mt-3">
                          <Button size="sm" variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            Change Delay
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Add Email Button */}
              <div className="relative flex items-start space-x-4 mt-6">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <Button variant="outline" className="w-full border-dashed border-2">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Email to Sequence
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sequence Settings */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Sequence Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trigger
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>New subscriber signs up</option>
                  <option>Form submission</option>
                  <option>Purchase completed</option>
                  <option>Manual enrollment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stop Conditions
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>Completes sequence</option>
                  <option>Unsubscribes</option>
                  <option>Makes a purchase</option>
                  <option>Never (continue indefinitely)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="skip-weekends" className="w-4 h-4 text-[#00B4D8] rounded" defaultChecked />
              <label htmlFor="skip-weekends" className="text-sm text-gray-700">
                Skip weekends (don&apos;t send on Sat/Sun)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="optimal-time" className="w-4 h-4 text-[#00B4D8] rounded" />
              <label htmlFor="optimal-time" className="text-sm text-gray-700">
                Send at optimal time for each recipient
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ANALYTICS VIEW
  if (viewMode === 'analytics') {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => setViewMode('campaigns')} className="text-gray-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Campaigns
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">Campaign Analytics</h2>
              <p className="text-gray-600">Performance insights and email metrics</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
              <option>All time</option>
            </select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Sent</p>
                  <p className="text-3xl font-bold text-[#1E3A5F]">12,458</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600">+12.5% vs last month</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Open Rate</p>
                  <p className="text-3xl font-bold text-[#00B4D8]">31.2%</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600">+2.3%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Click Rate</p>
                  <p className="text-3xl font-bold text-[#FF6B35]">9.7%</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingDown className="w-3 h-3 text-red-600" />
                    <span className="text-xs text-red-600">-0.8%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MousePointer className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                  <p className="text-3xl font-bold text-green-600">4.2%</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600">+1.1%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="border-0 shadow-md mb-6">
          <CardHeader>
            <CardTitle>Performance Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[28, 32, 29, 35, 31, 36, 33, 38, 34, 37, 31, 35].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-[#00B4D8] to-[#1E3A5F] rounded-t hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ height: `${(val / 40) * 100}%` }}
                  />
                  <span className="text-xs text-gray-600 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performing Emails */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Top Performing Emails</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { subject: 'Limited Time: 20% Off', opens: 42.3, clicks: 15.2 },
                  { subject: 'New Blog Post: SEO Tips', opens: 38.7, clicks: 12.8 },
                  { subject: 'Client Success Story', opens: 36.5, clicks: 11.3 },
                ].map((email, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm text-gray-900 mb-2">{email.subject}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{email.opens}% opens</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MousePointer className="w-3 h-3" />
                        <span>{email.clicks}% clicks</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement by Type */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Engagement by Email Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: 'Newsletter', rate: 32.5, color: 'bg-blue-500' },
                  { type: 'Sales', rate: 28.1, color: 'bg-orange-500' },
                  { type: 'Welcome', rate: 45.3, color: 'bg-green-500' },
                  { type: 'Follow-up', rate: 38.2, color: 'bg-purple-500' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.type}</span>
                      <span className="text-sm font-bold text-gray-900">{item.rate}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">Email Campaign Writer</h1>
            <p className="text-gray-600 mt-1">Create on-brand emails with AI assistance</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setViewMode('templates')}
              className="text-gray-600"
            >
              <Layers className="w-4 h-4 mr-2" />
              Templates
            </Button>
            <Button
              variant="outline"
              onClick={() => setViewMode('sequence')}
              className="text-gray-600"
            >
              <Clock className="w-4 h-4 mr-2" />
              Sequences
            </Button>
            <Button
              variant="outline"
              onClick={() => setViewMode('analytics')}
              className="text-gray-600"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button
              variant="outline"
              onClick={() => setViewMode('campaigns')}
              className="border-[#00B4D8] text-[#00B4D8]"
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              Campaigns
            </Button>
            <Button
              onClick={() => {
                setStep(1);
                setCampaignName('');
                setGeneratedBody('');
                setGeneratedSubjects([]);
                setViewMode('builder');
              }}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      {step <= 2 && (
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2].map((stepNum) => (
              <React.Fragment key={stepNum}>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNum
                        ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > stepNum ? <Check className="w-5 h-5" /> : stepNum}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      step >= stepNum ? 'text-[#1E3A5F]' : 'text-gray-500'
                    }`}
                  >
                    {stepNum === 1 ? 'Campaign Details' : 'Audience'}
                  </span>
                </div>
                {stepNum < 2 && (
                  <div
                    className={`flex-1 h-1 rounded ${
                      step > stepNum ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Campaign Details */}
      {step === 1 && (
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Campaign Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Name
              </label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="e.g., May Newsletter 2024"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Email Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {emailTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setEmailType(type.id as EmailType)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        emailType === type.id
                          ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                          : 'border-gray-200 hover:border-[#00B4D8]/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${
                        emailType === type.id ? 'text-[#00B4D8]' : 'text-gray-400'
                      }`} />
                      <p className="font-medium text-sm text-gray-900 mb-1">{type.label}</p>
                      <p className="text-xs text-gray-500">{type.desc}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client/Brand
              </label>
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              >
                <option>ThinkMents</option>
                <option>Client A - Restaurant</option>
                <option>Client B - Real Estate</option>
                <option>Client C - Healthcare</option>
              </select>
              <p className="text-xs text-gray-500 mt-2 flex items-center">
                <Check className="w-3 h-3 mr-1 text-green-600" />
                Brand voice settings loaded
              </p>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!campaignName}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                Next: Audience
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Audience */}
      {step === 2 && (
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Target Audience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Who is this email for?
              </label>
              <textarea
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="Describe your target audience (e.g., small business owners in Texas looking to improve their online presence)"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Audience Presets
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'All subscribers',
                  'New leads',
                  'Existing clients',
                  'Past clients',
                  'Local (Decatur area)',
                  'Industry-specific',
                ].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAudience(preset)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 text-sm transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                Start Building
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Email Builder */}
      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT PANEL - Content Input */}
          <div className="space-y-6">
            {/* Subject Line Section */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Subject Line</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What&apos;s the main topic?
                  </label>
                  <input
                    type="text"
                    value={mainTopic}
                    onChange={(e) => setMainTopic(e.target.value)}
                    placeholder="e.g., New blog post about SEO tips"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>

                <Button
                  onClick={generateSubjectLines}
                  disabled={!mainTopic || isGenerating}
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Subject Lines
                    </>
                  )}
                </Button>

                {generatedSubjects.length > 0 && (
                  <div className="space-y-2">
                    {generatedSubjects.map((subject) => (
                      <div
                        key={subject.id}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedSubject === subject.text
                            ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                            : 'border-gray-200 hover:border-[#00B4D8]/50'
                        }`}
                        onClick={() => setSelectedSubject(subject.text)}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <p className="text-sm text-gray-900 flex-1">{subject.text}</p>
                          <Badge className="bg-gray-100 text-gray-600 text-xs">
                            {subject.charCount} chars
                          </Badge>
                        </div>
                        {selectedSubject === subject.text && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-green-600">Selected</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview Text (inbox preview)
                  </label>
                  <input
                    type="text"
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    placeholder="Brief preview shown in email clients..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Email Body Section */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Email Body</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe what you want to communicate
                  </label>
                  <textarea
                    value={emailDescription}
                    onChange={(e) => setEmailDescription(e.target.value)}
                    placeholder="Tell us what this email should cover. Be as detailed as you like..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Points to Include
                  </label>
                  <div className="space-y-2">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => updateKeyPoint(index, e.target.value)}
                          placeholder={`Key point ${index + 1}`}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                        />
                        {keyPoints.length > 1 && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeKeyPoint(index)}
                            className="text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={addKeyPoint}
                    className="mt-2"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Point
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Call-to-Action Goal
                  </label>
                  <select
                    value={ctaGoal}
                    onChange={(e) => setCtaGoal(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  >
                    <option value="visit-website">Visit website</option>
                    <option value="book-call">Book a call</option>
                    <option value="get-quote">Get a quote</option>
                    <option value="read-blog">Read blog post</option>
                    <option value="learn-more">Learn more</option>
                    <option value="buy-now">Buy now</option>
                    <option value="register">Register for event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Length
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['short', 'medium', 'long'] as const).map((len) => (
                      <button
                        key={len}
                        onClick={() => setEmailLength(len)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                          emailLength === len
                            ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {emailLength === 'short' && 'Under 200 words'}
                    {emailLength === 'medium' && '200-400 words'}
                    {emailLength === 'long' && '400+ words'}
                  </p>
                </div>

                <Button
                  onClick={generateEmailBody}
                  disabled={!emailDescription || isGenerating}
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white py-6 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating Email...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Email
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* AI Refinement */}
            {generatedBody && (
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">AI Refinement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Make it shorter', icon: Minus },
                      { label: 'More urgent', icon: Zap },
                      { label: 'Add personalization', icon: Users },
                      { label: 'Make friendlier', icon: Smile },
                      { label: 'Add social proof', icon: TrendingUp },
                      { label: 'Strengthen CTA', icon: Target },
                      { label: 'Add urgency', icon: Clock },
                      { label: 'More professional', icon: Award },
                      { label: 'Add statistics', icon: BarChart3 },
                      { label: 'Include testimonial', icon: Heart },
                      { label: 'Add value prop', icon: Star },
                      { label: 'Emphasize benefits', icon: Gift },
                    ].map((action) => {
                      const Icon = action.icon;
                      return (
                        <Button
                          key={action.label}
                          size="sm"
                          variant="outline"
                          className="justify-start"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {action.label}
                        </Button>
                      );
                    })}
                  </div>
                  
                  {/* Quick Save Options */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button size="sm" variant="outline" className="w-full justify-start text-[#00B4D8] border-[#00B4D8]">
                      <Save className="w-4 h-4 mr-2" />
                      Save as Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Personalization Tokens */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <button
                  onClick={() => setShowTokens(!showTokens)}
                  className="flex items-center justify-between w-full"
                >
                  <CardTitle className="text-lg">Personalization Tokens</CardTitle>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showTokens ? 'rotate-180' : ''}`} />
                </button>
              </CardHeader>
              {showTokens && (
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      '{FirstName}',
                      '{LastName}',
                      '{Company}',
                      '{City}',
                      '{LastService}',
                      '{CustomField}',
                    ].map((token) => (
                      <button
                        key={token}
                        className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-[#00B4D8]/10 hover:border-[#00B4D8] border border-transparent transition-colors text-sm font-mono"
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                    <p className="text-xs text-blue-800">
                      Preview: &quot;Hi {'{FirstName}'}&quot; → &quot;Hi John&quot;
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* RIGHT PANEL - Email Preview */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md sticky top-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Email Preview</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setDevice('desktop')}
                        className={`p-2 rounded transition-colors ${
                          device === 'desktop'
                            ? 'bg-white text-[#00B4D8] shadow-sm'
                            : 'text-gray-500'
                        }`}
                      >
                        <Monitor className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDevice('mobile')}
                        className={`p-2 rounded transition-colors ${
                          device === 'mobile'
                            ? 'bg-white text-[#00B4D8] shadow-sm'
                            : 'text-gray-500'
                        }`}
                      >
                        <Smartphone className="w-4 h-4" />
                      </button>
                    </div>
                    <Button size="sm" variant="outline">
                      <Send className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Template Selector */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Template
                  </label>
                  <select
                    value={template}
                    onChange={(e) => setTemplate(e.target.value as TemplateType)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  >
                    <option value="clean">Clean & Simple</option>
                    <option value="modern">Modern with Header Image</option>
                    <option value="branded">Branded (ThinkMents colors)</option>
                    <option value="plain">Plain Text</option>
                  </select>
                </div>

                {/* Email Preview Window */}
                <div
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${
                    device === 'mobile' ? 'max-w-sm mx-auto' : ''
                  }`}
                >
                  {/* Email Header */}
                  <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">TM</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">
                          ThinkMents Digital Marketing
                        </p>
                        <p className="text-xs text-gray-500 truncate">info@thinkments.com</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {selectedSubject || 'Your email subject will appear here'}
                      </p>
                      {previewText && (
                        <p className="text-xs text-gray-500">{previewText}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Body */}
                  <div className="p-6">
                    {generatedBody ? (
                      <div className="prose prose-sm max-w-none">
                        <div
                          className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: generatedBody
                              .replace(/\{FirstName\}/g, '<span class="bg-yellow-100 px-1 rounded">{FirstName}</span>')
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\[(.*?)\]/g, '<button class="inline-block px-6 py-3 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white rounded-lg font-semibold mt-4 mb-4">$1</button>'),
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-400">
                        <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Your email content will appear here</p>
                      </div>
                    )}
                  </div>

                  {/* Email Footer */}
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      ThinkMents Digital Marketing | Decatur, TX
                    </p>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      <a href="#" className="underline">Unsubscribe</a> | <a href="#" className="underline">View in browser</a>
                    </p>
                  </div>
                </div>

                {/* Export Options */}
                {generatedBody && (
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <Button size="sm" variant="outline">
                        <Code className="w-4 h-4 mr-1" />
                        HTML
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        File
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-1" />
                        Text
                      </Button>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2">Send to:</p>
                      <div className="space-y-1">
                        {['Mailchimp', 'Constant Contact', 'SendGrid'].map((platform) => (
                          <Button
                            key={platform}
                            size="sm"
                            variant="outline"
                            className="w-full justify-between"
                            disabled
                          >
                            <span>{platform}</span>
                            <Badge className="bg-gray-200 text-gray-600 text-xs">
                              Soon
                            </Badge>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* A/B Testing */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">A/B Testing</CardTitle>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showABTest}
                      onChange={(e) => setShowABTest(e.target.checked)}
                      className="w-4 h-4 text-[#00B4D8] rounded"
                    />
                    <span className="text-sm text-gray-700">Enable</span>
                  </label>
                </div>
              </CardHeader>
              {showABTest && (
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Version A Subject
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedSubject}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Version B Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Alternative subject line..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Test Percentage: 50%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      defaultValue="50"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Winner Criteria
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Open Rate</option>
                      <option>Click Rate</option>
                    </select>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function Minus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}