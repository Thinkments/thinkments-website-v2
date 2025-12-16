import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Palette,
  Layout as LayoutIcon,
  Eye,
  Check,
  Sparkles,
  Monitor,
  Tablet,
  Smartphone,
  Download,
  Upload,
  Share2,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Plus,
  Clock,
  Sliders,
  Zap,
  Settings as SettingsIcon
} from 'lucide-react';

type TabType = 'layouts' | 'themes';
type PageType = 'homepage' | 'service' | 'location' | 'blog-list' | 'blog-post' | 'contact' | 'about';
type DeviceType = 'desktop' | 'tablet' | 'mobile';

interface LayoutOption {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  pageType: PageType;
  isActive?: boolean;
}

interface ThemePreset {
  id: string;
  name: string;
  colors: {
    primary: string;
    accent: string;
    secondary: string;
    background: string;
    text: string;
  };
  isActive?: boolean;
}

const layoutOptions: LayoutOption[] = [
  {
    id: 'classic-hero',
    name: 'Classic Hero',
    description: 'Full-width hero with centered text, services grid, testimonials',
    thumbnail: '#1E3A5F',
    pageType: 'homepage',
    isActive: true,
  },
  {
    id: 'video-hero',
    name: 'Video Hero',
    description: 'Background video hero with floating service cards',
    thumbnail: '#00B4D8',
    pageType: 'homepage',
  },
  {
    id: 'split-hero',
    name: 'Split Hero',
    description: '50/50 split with image and text, scrolling features',
    thumbnail: '#FF6B35',
    pageType: 'homepage',
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'Simple text hero with subtle animation, lots of white space',
    thumbnail: '#F8F9FA',
    pageType: 'homepage',
  },
  {
    id: 'bold-dynamic',
    name: 'Bold & Dynamic',
    description: 'Large typography, overlapping elements, bright colors',
    thumbnail: '#1E3A5F',
    pageType: 'homepage',
  },
];

const serviceLayouts: LayoutOption[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Hero, description, features list, CTA',
    thumbnail: '#1E3A5F',
    pageType: 'service',
    isActive: true,
  },
  {
    id: 'showcase',
    name: 'Showcase',
    description: 'Large images, case studies focus',
    thumbnail: '#00B4D8',
    pageType: 'service',
  },
  {
    id: 'comparison',
    name: 'Comparison',
    description: 'Side-by-side feature comparison',
    thumbnail: '#FF6B35',
    pageType: 'service',
  },
  {
    id: 'story',
    name: 'Story',
    description: 'Narrative scroll with parallax',
    thumbnail: '#F8F9FA',
    pageType: 'service',
  },
];

const themePresets: ThemePreset[] = [
  {
    id: 'thinkments-default',
    name: 'ThinkMents Default',
    colors: {
      primary: '#1E3A5F',
      accent: '#00B4D8',
      secondary: '#FF6B35',
      background: '#F8F9FA',
      text: '#1F2937',
    },
    isActive: true,
  },
  {
    id: 'professional-dark',
    name: 'Professional Dark',
    colors: {
      primary: '#111827',
      accent: '#3B82F6',
      secondary: '#10B981',
      background: '#1F2937',
      text: '#F9FAFB',
    },
  },
  {
    id: 'warm-friendly',
    name: 'Warm & Friendly',
    colors: {
      primary: '#92400E',
      accent: '#F59E0B',
      secondary: '#DC2626',
      background: '#FFFBEB',
      text: '#1F2937',
    },
  },
  {
    id: 'cool-modern',
    name: 'Cool & Modern',
    colors: {
      primary: '#6366F1',
      accent: '#8B5CF6',
      secondary: '#EC4899',
      background: '#F5F3FF',
      text: '#1F2937',
    },
  },
  {
    id: 'nature-trust',
    name: 'Nature & Trust',
    colors: {
      primary: '#065F46',
      accent: '#10B981',
      secondary: '#0891B2',
      background: '#ECFDF5',
      text: '#1F2937',
    },
  },
  {
    id: 'bold-energetic',
    name: 'Bold & Energetic',
    colors: {
      primary: '#DC2626',
      accent: '#F59E0B',
      secondary: '#7C3AED',
      background: '#FFFFFF',
      text: '#111827',
    },
  },
];

export default function LayoutAndThemeManager() {
  const [activeTab, setActiveTab] = useState<TabType>('layouts');
  const [selectedPageType, setSelectedPageType] = useState<PageType>('homepage');
  const [selectedLayout, setSelectedLayout] = useState<string>('classic-hero');
  const [selectedTheme, setSelectedTheme] = useState<string>('thinkments-default');
  const [previewDevice, setPreviewDevice] = useState<DeviceType>('desktop');
  const [showPreview, setShowPreview] = useState(false);
  const [showCustomTheme, setShowCustomTheme] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showAIRecommendation, setShowAIRecommendation] = useState(true);

  const getCurrentLayouts = () => {
    if (selectedPageType === 'service') return serviceLayouts;
    return layoutOptions;
  };

  const getDeviceIcon = (device: DeviceType) => {
    switch (device) {
      case 'desktop':
        return Monitor;
      case 'tablet':
        return Tablet;
      case 'mobile':
        return Smartphone;
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">Layout & Themes</h1>
            <p className="text-gray-600 mt-1">Customize your website&apos;s look with one click</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => window.open('/', '_blank')}
              className="border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8]/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview Site
            </Button>
            <Button
              variant="outline"
              className="text-gray-600"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Default
            </Button>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex space-x-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('layouts')}
          className={`px-6 py-3 font-medium transition-colors relative ${
            activeTab === 'layouts'
              ? 'text-[#1E3A5F]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <LayoutIcon className="w-5 h-5" />
            <span>Layouts</span>
          </div>
          {activeTab === 'layouts' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B4D8]"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('themes')}
          className={`px-6 py-3 font-medium transition-colors relative ${
            activeTab === 'themes'
              ? 'text-[#1E3A5F]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Themes</span>
          </div>
          {activeTab === 'themes' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B4D8]"
            />
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === 'layouts' && (
              <motion.div
                key="layouts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Page Type Selector */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Select Page Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { id: 'homepage', label: 'Homepage' },
                        { id: 'service', label: 'Service Pages' },
                        { id: 'location', label: 'Location Pages' },
                        { id: 'blog-list', label: 'Blog List' },
                        { id: 'blog-post', label: 'Blog Post' },
                        { id: 'contact', label: 'Contact' },
                        { id: 'about', label: 'About' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedPageType(type.id as PageType)}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            selectedPageType === type.id
                              ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Recommendation */}
                {showAIRecommendation && (
                  <Card className="border-0 shadow-md bg-gradient-to-r from-[#00B4D8]/5 to-[#1E3A5F]/5">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1E3A5F] mb-2">AI Recommendation</h3>
                          <p className="text-sm text-gray-700 mb-3">
                            Based on your brand identity and industry, we recommend the <strong>Classic Hero</strong> layout for your Homepage
                          </p>
                          <button
                            className="text-sm text-[#00B4D8] hover:text-[#1E3A5F] font-medium flex items-center space-x-1"
                          >
                            <span>Why this layout?</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <Button
                            className="mt-3 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                            size="sm"
                          >
                            Apply Recommendation
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Layout Options Grid */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Available Layouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getCurrentLayouts().map((layout) => (
                        <motion.div
                          key={layout.id}
                          whileHover={{ scale: 1.02 }}
                          className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedLayout === layout.id
                              ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                              : 'border-gray-200 hover:border-[#00B4D8]/50'
                          }`}
                          onClick={() => setSelectedLayout(layout.id)}
                        >
                          {/* Thumbnail Preview */}
                          <div
                            className="w-full h-32 rounded-lg mb-3 flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: layout.thumbnail }}
                          >
                            <LayoutIcon className="w-12 h-12 opacity-50" />
                          </div>

                          {/* Layout Info */}
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-[#1E3A5F]">{layout.name}</h4>
                            {layout.isActive && (
                              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{layout.description}</p>

                          {/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-[#00B4D8] border-[#00B4D8] hover:bg-[#00B4D8]/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowPreview(true);
                              }}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Apply
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === 'themes' && (
              <motion.div
                key="themes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Current Theme Preview */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Current Theme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-lg p-6 text-white mb-4">
                      <h3 className="text-2xl font-bold mb-2">ThinkMents Default</h3>
                      <p className="text-sm opacity-90">Professional digital marketing theme</p>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                      {Object.entries(themePresets[0].colors).map(([name, color]) => (
                        <div key={name} className="text-center">
                          <div
                            className="w-full h-16 rounded-lg shadow-md mb-2"
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-xs text-gray-600 capitalize">{name}</p>
                          <p className="text-xs font-mono text-gray-400">{color}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Theme Recommendations */}
                <Card className="border-0 shadow-md bg-gradient-to-r from-[#00B4D8]/5 to-[#1E3A5F]/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1E3A5F] mb-2">AI Theme Suggestions</h3>
                        <p className="text-sm text-gray-700 mb-4">
                          Based on your brand colors and target audience, try these combinations:
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {themePresets.slice(1, 4).map((theme) => (
                            <div
                              key={theme.id}
                              className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#00B4D8] transition-colors cursor-pointer"
                            >
                              <div className="flex space-x-1 mb-2">
                                {Object.values(theme.colors).slice(0, 3).map((color, idx) => (
                                  <div
                                    key={idx}
                                    className="flex-1 h-8 rounded"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                              <p className="text-xs font-medium text-gray-900">{theme.name}</p>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 text-[#00B4D8] border-[#00B4D8]"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Generate More Suggestions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Theme Presets Grid */}
                <Card className="border-0 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Theme Presets</CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[#00B4D8] border-[#00B4D8]"
                      onClick={() => setShowCustomTheme(true)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create Custom
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {themePresets.map((theme) => (
                        <motion.div
                          key={theme.id}
                          whileHover={{ scale: 1.02 }}
                          className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedTheme === theme.id
                              ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                              : 'border-gray-200 hover:border-[#00B4D8]/50'
                          }`}
                          onClick={() => setSelectedTheme(theme.id)}
                        >
                          {/* Color Swatches */}
                          <div className="grid grid-cols-5 gap-2 mb-3">
                            {Object.values(theme.colors).map((color, idx) => (
                              <div
                                key={idx}
                                className="w-full h-12 rounded shadow-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>

                          {/* Theme Info */}
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-[#1E3A5F]">{theme.name}</h4>
                            {theme.isActive && (
                              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                                Active
                              </Badge>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-[#00B4D8] border-[#00B4D8] hover:bg-[#00B4D8]/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowPreview(true);
                              }}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Apply
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Custom Theme Builder */}
                {showCustomTheme && (
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">Custom Theme Builder</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Color Pickers */}
                        {['Primary', 'Accent', 'Secondary', 'Background', 'Text'].map((colorName) => (
                          <div key={colorName} className="flex items-center space-x-4">
                            <label className="w-32 text-sm font-medium text-gray-700">
                              {colorName} Color
                            </label>
                            <input
                              type="color"
                              defaultValue="#1E3A5F"
                              className="w-16 h-10 rounded border border-gray-300 cursor-pointer"
                            />
                            <input
                              type="text"
                              defaultValue="#1E3A5F"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                            />
                          </div>
                        ))}

                        {/* Font Selectors */}
                        <div className="flex items-center space-x-4">
                          <label className="w-32 text-sm font-medium text-gray-700">
                            Heading Font
                          </label>
                          <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                            <option>Inter</option>
                            <option>Roboto</option>
                            <option>Poppins</option>
                            <option>Montserrat</option>
                          </select>
                        </div>

                        <div className="flex items-center space-x-4">
                          <label className="w-32 text-sm font-medium text-gray-700">
                            Body Font
                          </label>
                          <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                            <option>Inter</option>
                            <option>Roboto</option>
                            <option>Open Sans</option>
                            <option>Lato</option>
                          </select>
                        </div>

                        {/* Sliders */}
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Border Radius: 8px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="20"
                              defaultValue="8"
                              className="w-full"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                              Shadow Intensity: Medium
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="3"
                              defaultValue="2"
                              className="w-full"
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4 border-t border-gray-200">
                          <Button
                            className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Save as New Theme
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview Changes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Theme History */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <button
                      onClick={() => setShowHistory(!showHistory)}
                      className="flex items-center justify-between w-full"
                    >
                      <CardTitle className="text-lg">Theme History</CardTitle>
                      {showHistory ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  </CardHeader>
                  {showHistory && (
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { theme: 'ThinkMents Default', date: '2 hours ago' },
                          { theme: 'Cool & Modern', date: 'Yesterday' },
                          { theme: 'Professional Dark', date: '3 days ago' },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{item.theme}</p>
                                <p className="text-xs text-gray-500">{item.date}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              Restore
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Export/Import */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Export & Share</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Export Theme
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Upload className="w-4 h-4 mr-2" />
                        Import Theme
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Sidebar - Live Preview & Settings */}
        <div className="space-y-6">
          {/* Live Preview Panel */}
          <Card className="border-0 shadow-md sticky top-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                  {(['desktop', 'tablet', 'mobile'] as DeviceType[]).map((device) => {
                    const Icon = getDeviceIcon(device);
                    return (
                      <button
                        key={device}
                        onClick={() => setPreviewDevice(device)}
                        className={`p-2 rounded transition-colors ${
                          previewDevice === device
                            ? 'bg-white text-[#00B4D8] shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Preview Window */}
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div
                  className={`bg-white rounded shadow-lg mx-auto transition-all ${
                    previewDevice === 'desktop'
                      ? 'w-full h-64'
                      : previewDevice === 'tablet'
                      ? 'w-2/3 h-64'
                      : 'w-1/3 h-64'
                  }`}
                >
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <Eye className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Preview Loading...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Selector */}
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-4">
                <option>Homepage</option>
                <option>Services</option>
                <option>About</option>
                <option>Blog</option>
                <option>Contact</option>
              </select>

              {/* Apply Button */}
              <Button className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white mb-2">
                <Check className="w-4 h-4 mr-2" />
                Apply to Site
              </Button>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <SettingsIcon className="w-5 h-5 mr-2" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00B4D8] rounded" />
                  <span className="text-sm text-gray-700">Apply theme to all pages</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-[#00B4D8] rounded" />
                  <span className="text-sm text-gray-700">Enable seasonal auto-themes</span>
                </label>
                <div className="pt-4 border-t border-gray-200">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Schedule Theme Change
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
