import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Type,
  Image as ImageIcon,
  Grid3x3,
  MessageSquare,
  HelpCircle,
  Phone,
  MapPin,
  Eye,
  Save,
  Settings,
  Monitor,
  Tablet,
  Smartphone,
  Layout,
  Layers,
  Globe,
  Star,
  Play,
  Trash2,
  GripVertical,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner';

interface ContentBlock {
  id: string;
  type: string;
  content: Record<string, unknown>;
}

export default function PageBuilder() {
  const [pageTitle, setPageTitle] = useState('');
  const [pageSlug, setPageSlug] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const templates = [
    {
      id: 'location',
      name: 'Location Page',
      icon: MapPin,
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300',
    },
    {
      id: 'service',
      name: 'Service Page',
      icon: Star,
      preview: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300',
    },
    {
      id: 'landing',
      name: 'Landing Page',
      icon: Layout,
      preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300',
    },
    {
      id: 'store',
      name: 'Store Page',
      icon: Globe,
      preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300',
    },
    { id: 'blank', name: 'Blank Page', icon: Layers, preview: null },
  ];

  const contentBlocks = [
    { id: 'hero', name: 'Hero Section', icon: Layout, color: 'bg-[#1E3A5F]' },
    { id: 'text', name: 'Text Block', icon: Type, color: 'bg-[#00B4D8]' },
    { id: 'imagetext', name: 'Image + Text', icon: ImageIcon, color: 'bg-[#FF6B35]' },
    { id: 'services', name: 'Services Grid', icon: Grid3x3, color: 'bg-[#1E3A5F]' },
    { id: 'testimonials', name: 'Testimonials', icon: MessageSquare, color: 'bg-[#00B4D8]' },
    { id: 'contact', name: 'Contact Form', icon: Phone, color: 'bg-[#FF6B35]' },
    { id: 'faq', name: 'FAQ Accordion', icon: HelpCircle, color: 'bg-[#1E3A5F]' },
    { id: 'cta', name: 'CTA Banner', icon: Star, color: 'bg-[#00B4D8]' },
    { id: 'map', name: 'Google Map', icon: MapPin, color: 'bg-[#FF6B35]' },
    { id: 'gallery', name: 'Gallery', icon: ImageIcon, color: 'bg-[#1E3A5F]' },
  ];

  const addBlock = (blockType: string) => {
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}`,
      type: blockType,
      content: {},
    };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(newBlock.id);
    toast.success(`${blockType} block added`);
  };

  const removeBlock = (blockId: string) => {
    setBlocks(blocks.filter((block) => block.id !== blockId));
    if (selectedBlock === blockId) {
      setSelectedBlock(null);
    }
    toast.success('Block removed');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Page Builder</h1>
          <p className="text-gray-600 mt-1">Create custom pages with drag-and-drop blocks</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button className="bg-[#00B4D8] hover:bg-[#0096b8]">Publish Page</Button>
        </div>
      </div>

      {/* Page Setup */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#1E3A5F]">Page Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pageTitle">Page Title</Label>
              <Input
                id="pageTitle"
                placeholder="Enter page title..."
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="pageSlug">URL Slug</Label>
              <div className="flex items-center mt-2">
                <span className="px-3 py-2 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-600">
                  thinkments.com/
                </span>
                <Input
                  id="pageSlug"
                  placeholder="page-url"
                  value={pageSlug}
                  onChange={(e) => setPageSlug(e.target.value)}
                  className="rounded-l-none"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Template Selection */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#1E3A5F]">Choose Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                whileHover={{ scale: 1.05 }}
                className={`relative cursor-pointer rounded-lg border-2 overflow-hidden ${selectedTemplate === template.id ? 'border-[#00B4D8]' : 'border-gray-200'
                  }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                {template.preview ? (
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                    <template.icon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="p-3 bg-white">
                  <div className="flex items-center space-x-2">
                    <template.icon className="w-4 h-4 text-[#1E3A5F]" />
                    <span className="text-sm font-medium text-[#1E3A5F]">{template.name}</span>
                  </div>
                </div>
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#00B4D8] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Builder Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Content Blocks */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-[#1E3A5F] text-sm">Content Blocks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {contentBlocks.map((block) => (
                <Button
                  key={block.id}
                  variant="outline"
                  className="w-full justify-start hover:border-[#00B4D8]"
                  onClick={() => addBlock(block.name)}
                >
                  <div
                    className={`w-8 h-8 ${block.color} rounded flex items-center justify-center mr-3`}
                  >
                    <block.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{block.name}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Center - Canvas */}
        <div className="lg:col-span-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#1E3A5F]">Page Canvas</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={deviceView === 'desktop' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDeviceView('desktop')}
                    className={deviceView === 'desktop' ? 'bg-[#00B4D8]' : ''}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={deviceView === 'tablet' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDeviceView('tablet')}
                    className={deviceView === 'tablet' ? 'bg-[#00B4D8]' : ''}
                  >
                    <Tablet className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={deviceView === 'mobile' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDeviceView('mobile')}
                    className={deviceView === 'mobile' ? 'bg-[#00B4D8]' : ''}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className={`mx-auto bg-white border-2 border-dashed border-gray-300 rounded-lg min-h-[600px] ${deviceView === 'desktop'
                    ? 'w-full'
                    : deviceView === 'tablet'
                      ? 'w-[768px]'
                      : 'w-[375px]'
                  }`}
              >
                {blocks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[600px] text-center p-8">
                    <Plus className="w-16 h-16 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      Start Building Your Page
                    </h3>
                    <p className="text-gray-500">
                      Drag content blocks from the left sidebar to begin
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 p-4">
                    {blocks.map((block, index) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`group relative p-6 border-2 rounded-lg cursor-pointer transition-colors ${selectedBlock === block.id
                            ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                        onClick={() => setSelectedBlock(block.id)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <GripVertical className="w-5 h-5 text-gray-400" />
                            <Badge variant="outline">{block.type}</Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 text-red-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeBlock(block.id);
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="bg-gray-100 rounded p-4 text-center text-gray-500 text-sm">
                          {block.type} Content Preview
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Block Settings & Page Settings */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-0 shadow-md">
            <Tabs defaultValue="page">
              <CardHeader>
                <TabsList className="w-full">
                  <TabsTrigger value="page" className="flex-1">
                    Page
                  </TabsTrigger>
                  <TabsTrigger value="block" className="flex-1">
                    Block
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                <TabsContent value="page" className="space-y-4 mt-0">
                  <div>
                    <Label htmlFor="metaTitle" className="text-xs">
                      Meta Title
                    </Label>
                    <Input id="metaTitle" placeholder="SEO title..." className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="metaDesc" className="text-xs">
                      Meta Description
                    </Label>
                    <Textarea
                      id="metaDesc"
                      placeholder="SEO description..."
                      className="mt-2 min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="schema" className="text-xs">
                      Schema Type
                    </Label>
                    <Select defaultValue="webpage">
                      <SelectTrigger id="schema" className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webpage">WebPage</SelectItem>
                        <SelectItem value="localbusiness">LocalBusiness</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="faq">FAQ</SelectItem>
                        <SelectItem value="organization">Organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Label htmlFor="indexToggle" className="text-xs">
                      Index in Search Engines
                    </Label>
                    <Switch id="indexToggle" defaultChecked />
                  </div>
                </TabsContent>

                <TabsContent value="block" className="mt-0">
                  {selectedBlock ? (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">Configure the selected block</p>
                      <div>
                        <Label htmlFor="blockTitle" className="text-xs">
                          Block Title
                        </Label>
                        <Input id="blockTitle" placeholder="Enter title..." className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="blockContent" className="text-xs">
                          Content
                        </Label>
                        <Textarea
                          id="blockContent"
                          placeholder="Enter content..."
                          className="mt-2 min-h-[120px]"
                        />
                      </div>
                      <Button variant="outline" className="w-full">
                        <Settings className="w-4 h-4 mr-2" />
                        Advanced Settings
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 text-sm">
                      Select a block to configure its settings
                    </div>
                  )}
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* SEO Checklist */}
          <Card className="border-0 shadow-md bg-gradient-to-br from-[#00B4D8]/5 to-white">
            <CardHeader>
              <CardTitle className="text-[#1E3A5F] text-sm">SEO Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Page title set</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Meta description needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Featured image needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">URL structure valid</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
