import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Sparkles,
  Brain,
  Zap,
  ChevronDown,
  Plus,
  Play,
  Copy,
  Edit3,
  Trash2,
  Save,
  ThumbsUp,
  ThumbsDown,
  Star,
  BarChart3,
  Settings,
  Layers,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Target,
  FileText,
  MessageSquare,
  Mail,
  Search,
  MessageCircle,
  BarChart,
  Palette,
  DollarSign,
  Clock,
  Lightbulb,
  GitBranch,
  PlayCircle,
  StopCircle,
  RefreshCw,
  Download,
  Upload,
  X,
  Check,
  Filter,
  Tag,
  Info,
  Award,
  TrendingDown,
  ChevronRight,
  Maximize2,
  Share2,
} from 'lucide-react';

type TabType = 'selector' | 'templates' | 'workflows' | 'quality' | 'clients' | 'briefs';
type ModelType = 'claude-sonnet' | 'claude-haiku' | 'chatgpt' | 'gemini';

interface AIModel {
  id: ModelType;
  name: string;
  provider: string;
  costPer1k: number;
  speed: 'fast' | 'medium' | 'slow';
  quality: number;
  bestFor: string[];
}

interface PromptTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  template: string;
  variables: string[];
  bestModel: ModelType;
  successRate: number;
  timesUsed: number;
}

interface WorkflowStep {
  id: string;
  name: string;
  model: ModelType;
  prompt: string;
  inputFrom?: string;
  estimatedCost: number;
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  totalCost: number;
  timesUsed: number;
}

export default function EnhancedAIModelSelector() {
  const [activeTab, setActiveTab] = useState<TabType>('selector');
  const [smartSelectionEnabled, setSmartSelectionEnabled] = useState(true);
  const [selectedModel, setSelectedModel] = useState<ModelType>('claude-sonnet');
  const [showModelReasoning, setShowModelReasoning] = useState(true);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showWorkflowBuilder, setShowWorkflowBuilder] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [showBriefModal, setShowBriefModal] = useState(false);

  const models: AIModel[] = [
    {
      id: 'claude-sonnet',
      name: 'Claude Sonnet',
      provider: 'Anthropic',
      costPer1k: 0.003,
      speed: 'medium',
      quality: 9.2,
      bestFor: ['Long-form content', 'Analysis', 'Technical writing'],
    },
    {
      id: 'claude-haiku',
      name: 'Claude Haiku',
      provider: 'Anthropic',
      costPer1k: 0.00025,
      speed: 'fast',
      quality: 7.8,
      bestFor: ['Quick tasks', 'SEO optimization', 'Social media'],
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT 4',
      provider: 'OpenAI',
      costPer1k: 0.03,
      speed: 'medium',
      quality: 8.8,
      bestFor: ['Conversational', 'Creative', 'Engaging content'],
    },
    {
      id: 'gemini',
      name: 'Gemini Pro',
      provider: 'Google',
      costPer1k: 0.00025,
      speed: 'fast',
      quality: 8.4,
      bestFor: ['Research', 'Data analysis', 'Quick responses'],
    },
  ];

  const promptTemplates: PromptTemplate[] = [
    {
      id: '1',
      name: 'Blog Post Full',
      category: 'Blog Content',
      description: 'Comprehensive blog post with SEO optimization',
      template:
        'Write a {word_count}-word blog post about {topic} for {client_name} in the {industry} industry. Use a {tone} tone and target the audience: {audience}. Include keywords: {keywords}.',
      variables: ['word_count', 'topic', 'client_name', 'industry', 'tone', 'audience', 'keywords'],
      bestModel: 'claude-sonnet',
      successRate: 87,
      timesUsed: 234,
    },
    {
      id: '2',
      name: 'Email Campaign',
      category: 'Email Marketing',
      description: 'Professional marketing email',
      template:
        'Create a marketing email for {client_name} promoting {topic}. Keep it under {word_count} words. Tone: {tone}. Include a clear CTA.',
      variables: ['client_name', 'topic', 'word_count', 'tone'],
      bestModel: 'chatgpt',
      successRate: 92,
      timesUsed: 456,
    },
    {
      id: '3',
      name: 'Social Media Bundle',
      category: 'Social Media',
      description: 'Multiple platform posts at once',
      template:
        'Create 5 social media posts about {topic} for {client_name}. Include versions for: Facebook, Twitter, LinkedIn, Instagram. Tone: {tone}.',
      variables: ['topic', 'client_name', 'tone'],
      bestModel: 'claude-haiku',
      successRate: 78,
      timesUsed: 678,
    },
    {
      id: '4',
      name: 'SEO Meta Data',
      category: 'SEO Content',
      description: 'Title tags, meta descriptions, headers',
      template:
        'Create SEO metadata for a page about {topic}: Title tag (60 chars), Meta description (155 chars), H1, 3 H2s. Include keywords: {keywords}.',
      variables: ['topic', 'keywords'],
      bestModel: 'gemini',
      successRate: 85,
      timesUsed: 345,
    },
  ];

  const workflows: Workflow[] = [
    {
      id: '1',
      name: 'Blog Post Creation',
      description: 'Research, outline, draft, SEO optimize, and polish',
      steps: [
        {
          id: 's1',
          name: 'Research & Outline',
          model: 'gemini',
          prompt: 'Research and create an outline for {topic}',
          estimatedCost: 0.002,
        },
        {
          id: 's2',
          name: 'Write Draft',
          model: 'claude-sonnet',
          prompt: 'Write detailed blog post from outline',
          inputFrom: 's1',
          estimatedCost: 0.015,
        },
        {
          id: 's3',
          name: 'SEO Optimization',
          model: 'claude-haiku',
          prompt: 'Add keywords and improve SEO',
          inputFrom: 's2',
          estimatedCost: 0.003,
        },
        {
          id: 's4',
          name: 'Final Polish',
          model: 'chatgpt',
          prompt: 'Make engaging with compelling intro',
          inputFrom: 's3',
          estimatedCost: 0.008,
        },
      ],
      totalCost: 0.028,
      timesUsed: 89,
    },
    {
      id: '2',
      name: 'Email Campaign',
      description: 'Draft, optimize, and A/B test variations',
      steps: [
        {
          id: 's1',
          name: 'Draft Email',
          model: 'chatgpt',
          prompt: 'Create marketing email for {topic}',
          estimatedCost: 0.005,
        },
        {
          id: 's2',
          name: 'Create Variations',
          model: 'claude-haiku',
          prompt: 'Generate 3 subject line variations',
          inputFrom: 's1',
          estimatedCost: 0.002,
        },
        {
          id: 's3',
          name: 'Optimize CTAs',
          model: 'gemini',
          prompt: 'Improve call-to-action buttons',
          inputFrom: 's1',
          estimatedCost: 0.001,
        },
      ],
      totalCost: 0.008,
      timesUsed: 145,
    },
  ];

  const modelPerformance = [
    { model: 'Claude Sonnet', approvalRate: 87, avgRating: 4.3, totalGenerations: 2340 },
    { model: 'ChatGPT 4', approvalRate: 82, avgRating: 4.1, totalGenerations: 1890 },
    { model: 'Gemini Pro', approvalRate: 79, avgRating: 3.9, totalGenerations: 1456 },
    { model: 'Claude Haiku', approvalRate: 76, avgRating: 3.8, totalGenerations: 3210 },
  ];

  const getModelIcon = (modelId: ModelType) => {
    switch (modelId) {
      case 'claude-sonnet':
      case 'claude-haiku':
        return <Brain className="w-5 h-5" />;
      case 'chatgpt':
        return <MessageSquare className="w-5 h-5" />;
      case 'gemini':
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getSpeedBadge = (speed: string) => {
    const colors = {
      fast: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-100 text-yellow-700',
      slow: 'bg-red-100 text-red-700',
    };
    return colors[speed as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Enhanced AI Model Selector</h1>
            <p className="text-gray-600">
              Advanced AI capabilities with smart routing and workflows
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
            <Button
              onClick={() => setShowBriefModal(true)}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Brief
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {[
          { id: 'selector', label: 'Model Selector', icon: Brain },
          {
            id: 'templates',
            label: 'Prompt Library',
            icon: FileText,
            count: promptTemplates.length,
          },
          { id: 'workflows', label: 'AI Workflows', icon: GitBranch, count: workflows.length },
          { id: 'quality', label: 'Quality Insights', icon: TrendingUp },
          { id: 'clients', label: 'Client Settings', icon: Users },
          { id: 'briefs', label: 'Content Briefs', icon: Target },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <Badge
                className={`${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {tab.count}
              </Badge>
            )}
          </button>
        ))}
      </div>

      {/* Model Selector Tab */}
      {activeTab === 'selector' && (
        <div className="space-y-6">
          {/* Smart Selection Toggle */}
          <Card className="border-0 shadow-md border-l-4 border-[#00B4D8]">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Lightbulb className="w-6 h-6 text-[#00B4D8]" />
                    <h3 className="text-lg font-semibold text-gray-900">Smart Model Selection</h3>
                    <button
                      onClick={() => setSmartSelectionEnabled(!smartSelectionEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        smartSelectionEnabled ? 'bg-[#00B4D8]' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          smartSelectionEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Let AI automatically select the best model based on your content type, length,
                    complexity, and historical performance
                  </p>

                  {smartSelectionEnabled && showModelReasoning && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900 mb-1">
                            Selected: Claude Sonnet
                          </p>
                          <p className="text-sm text-blue-700">
                            Recommended because: Long-form content (1000+ words), analytical tone
                            required, your team prefers Claude for blogs (82% selection rate), and
                            it has the highest approval rating (87%) for this content type.
                          </p>
                          <Button size="sm" variant="outline" className="mt-3">
                            Override Selection
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Model Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((model) => (
              <Card
                key={model.id}
                className={`border-2 cursor-pointer transition-all hover:shadow-lg ${
                  selectedModel === model.id
                    ? 'border-[#00B4D8] shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                      {getModelIcon(model.id)}
                    </div>
                    {selectedModel === model.id && (
                      <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1">{model.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{model.provider}</p>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-gray-900">${model.costPer1k}/1k</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Speed:</span>
                      <Badge className={getSpeedBadge(model.speed)}>{model.speed}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Quality:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{model.quality}/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs text-gray-600 mb-2">Best for:</p>
                    <div className="flex flex-wrap gap-1">
                      {model.bestFor.slice(0, 2).map((use, idx) => (
                        <Badge key={idx} className="bg-gray-100 text-gray-700 text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-8 h-8 text-[#00B4D8]" />
                </div>
                <p className="text-xs text-gray-600 mb-1">This Month</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">3,245</p>
                <p className="text-xs text-gray-500">AI generations</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-xs text-gray-600 mb-1">Total Spent</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">$47.89</p>
                <p className="text-xs text-green-600">$52 under budget</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <ThumbsUp className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-xs text-gray-600 mb-1">Approval Rate</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">84%</p>
                <p className="text-xs text-green-600">+5% vs last month</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600 mb-1">Avg Response</p>
                <p className="text-2xl font-bold text-[#1E3A5F]">12s</p>
                <p className="text-xs text-gray-500">Per generation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Prompt Library Tab */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Categories</option>
                <option>Blog Content</option>
                <option>Email Marketing</option>
                <option>Social Media</option>
                <option>SEO Content</option>
              </select>
              <Button
                onClick={() => setShowTemplateModal(true)}
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </div>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promptTemplates.map((template) => (
              <Card
                key={template.id}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{template.name}</h3>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg mb-3 font-mono text-xs text-gray-700">
                    {template.template.substring(0, 120)}...
                  </div>

                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      {getModelIcon(template.bestModel)}
                      <span>Best: {models.find((m) => m.id === template.bestModel)?.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{template.successRate}%</span>
                    </div>
                    <span>Used {template.timesUsed}×</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.variables.slice(0, 3).map((variable, idx) => (
                      <Badge key={idx} className="bg-purple-100 text-purple-700 text-xs">
                        {`{${variable}}`}
                      </Badge>
                    ))}
                    {template.variables.length > 3 && (
                      <Badge className="bg-gray-100 text-gray-700 text-xs">
                        +{template.variables.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-[#00B4D8] text-white">
                      <Play className="w-3 h-3 mr-2" />
                      Use Template
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit3 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* AI Workflows Tab */}
      {activeTab === 'workflows' && (
        <div className="space-y-6">
          {/* Actions */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1E3A5F]">AI Workflow Automation</h2>
            <Button
              onClick={() => setShowWorkflowBuilder(true)}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Workflow
            </Button>
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {workflows.map((workflow) => (
              <Card key={workflow.id} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{workflow.name}</h3>
                      <p className="text-sm text-gray-600">{workflow.description}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      {workflow.steps.length} steps
                    </Badge>
                  </div>

                  {/* Workflow Steps Visual */}
                  <div className="space-y-3 mb-4">
                    {workflow.steps.map((step, idx) => (
                      <div key={step.id}>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">{idx + 1}</span>
                          </div>
                          <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gray-900">{step.name}</span>
                              <div className="flex items-center space-x-1">
                                {getModelIcon(step.model)}
                                <span className="text-xs text-gray-600">
                                  {models.find((m) => m.id === step.model)?.name.split(' ')[0]}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">{step.prompt}</p>
                          </div>
                        </div>
                        {idx < workflow.steps.length - 1 && (
                          <div className="ml-4 h-4 w-0.5 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-3 h-3" />
                        <span>${workflow.totalCost.toFixed(3)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PlayCircle className="w-3 h-3" />
                        <span>Used {workflow.timesUsed}×</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-3 h-3 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" className="bg-[#00B4D8] text-white">
                        <Play className="w-3 h-3 mr-2" />
                        Run
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Quality Insights Tab */}
      {activeTab === 'quality' && (
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Model Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelPerformance.map((perf, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{perf.model}</h4>
                          <p className="text-xs text-gray-600">
                            {perf.totalGenerations.toLocaleString()} generations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{perf.approvalRate}%</p>
                          <p className="text-xs text-gray-600">Approval Rate</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-900">
                              {perf.avgRating}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">Avg Rating</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] h-2 rounded-full"
                        style={{ width: `${perf.approvalRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: 'positive', text: 'Perfect tone and length', model: 'Claude Sonnet' },
                    { type: 'negative', text: 'Too technical for audience', model: 'Gemini Pro' },
                    { type: 'positive', text: 'Great conversational style', model: 'ChatGPT 4' },
                  ].map((feedback, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      {feedback.type === 'positive' ? (
                        <ThumbsUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <ThumbsDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{feedback.text}</p>
                        <p className="text-xs text-gray-600 mt-1">{feedback.model}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">AI Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900 mb-1">Prompt Improvement</p>
                        <p className="text-sm text-blue-700">
                          Based on feedback, try adding "use active voice" to your blog prompts
                        </p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Apply Suggestion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Client Settings Tab */}
      {activeTab === 'clients' && (
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Client-Specific AI Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Select Client
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Acme Corporation</option>
                    <option>Smith & Sons</option>
                    <option>Best Dental</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Default Model
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    {models.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
                  <input
                    type="text"
                    placeholder="e.g., Legal, Healthcare, Plumbing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Brand Voice Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the client's brand voice, tone, and style preferences..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Keywords They Use
                  </label>
                  <input
                    type="text"
                    placeholder="innovative, cutting-edge, customer-first"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Words to Avoid
                  </label>
                  <input
                    type="text"
                    placeholder="cheap, basic, simple"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Example Content
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload or paste 3-5 examples of client content
                    </p>
                    <Button size="sm" variant="outline">
                      Upload Examples
                    </Button>
                  </div>
                </div>

                <div className="pt-4 flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Configuration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Content Briefs Tab */}
      {activeTab === 'briefs' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1E3A5F]">Content Briefs</h2>
            <Button
              onClick={() => setShowBriefModal(true)}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Brief
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((brief) => (
              <Card key={brief} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-700">Blog Post</Badge>
                    <Badge className="bg-yellow-100 text-yellow-700">In Progress</Badge>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ultimate Guide to Plumbing Maintenance
                  </h3>

                  <div className="space-y-2 text-xs text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>Client:</span>
                      <span className="font-medium text-gray-900">Acme Plumbing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Word Count:</span>
                      <span className="font-medium text-gray-900">1,500 words</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Deadline:</span>
                      <span className="font-medium text-gray-900">Dec 15, 2024</span>
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-[#00B4D8] text-white">
                    Open Brief
                    <ChevronRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Create Template Modal */}
      <AnimatePresence>
        {showTemplateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowTemplateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Create Prompt Template</h2>
                  <Button size="sm" variant="ghost" onClick={() => setShowTemplateModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Template Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Email Campaign Template"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option>Blog Content</option>
                      <option>Email Marketing</option>
                      <option>Social Media</option>
                      <option>SEO Content</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="Brief description of what this template does"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Best For Model
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      {models.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-900">
                        Prompt Template
                      </label>
                      <select className="px-2 py-1 border border-gray-300 rounded text-xs">
                        <option>Insert Variable</option>
                        <option>{'{topic}'}</option>
                        <option>{'{client_name}'}</option>
                        <option>{'{word_count}'}</option>
                        <option>{'{tone}'}</option>
                        <option>{'{industry}'}</option>
                      </select>
                    </div>
                    <textarea
                      rows={6}
                      placeholder="Write your prompt here. Use variables like {topic}, {client_name}, {tone}..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Tip: Variables in {'{curly braces}'} will be replaced with actual values
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-between">
                <Button variant="outline">
                  <Play className="w-4 h-4 mr-2" />
                  Test Template
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setShowTemplateModal(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Template
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Brief Modal */}
      <AnimatePresence>
        {showBriefModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBriefModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#1E3A5F]">Create Content Brief</h2>
                  <Button size="sm" variant="ghost" onClick={() => setShowBriefModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Content Type
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Blog Post</option>
                          <option>Email Campaign</option>
                          <option>Social Media Post</option>
                          <option>Landing Page</option>
                          <option>Product Description</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Target Word Count
                        </label>
                        <input
                          type="number"
                          placeholder="1500"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Deadline
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Client
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                          <option>Acme Corporation</option>
                          <option>Smith & Sons</option>
                          <option>Best Dental</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Audience */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Audience</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Audience Description
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe the target audience..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Pain Points
                        </label>
                        <textarea
                          rows={3}
                          placeholder="What problems does the audience face?"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEO */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO & Keywords</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Primary Keyword
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., emergency plumbing"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Secondary Keywords
                        </label>
                        <input
                          type="text"
                          placeholder="Comma separated keywords"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowBriefModal(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Create Brief
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
