import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Sparkles,
  Copy,
  Download,
  Save,
  RefreshCw,
  Settings,
  FileText,
  Mail,
  Share2,
  Video,
  ShoppingBag,
  MapPin,
  Wand2,
  Check,
  ChevronDown,
  BarChart3,
  Clock,
  Eye,
  Edit3,
  Trash2,
  Filter,
  Search,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  MessageSquare,
  Globe,
  Hash
} from 'lucide-react';

type ContentType = 
  | 'website' 
  | 'blog' 
  | 'email' 
  | 'social' 
  | 'video' 
  | 'google-business' 
  | 'ad-copy';

type ToneType = 
  | 'professional' 
  | 'friendly' 
  | 'bold' 
  | 'casual' 
  | 'urgent' 
  | 'educational';

type LengthType = 'short' | 'medium' | 'long';

interface SavedContent {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  date: string;
  client: string;
}

const contentTypes = [
  { id: 'website', label: 'Website Copy', icon: Globe },
  { id: 'blog', label: 'Blog Post', icon: FileText },
  { id: 'email', label: 'Email Campaign', icon: Mail },
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'video', label: 'Video Description', icon: Video },
  { id: 'google-business', label: 'Google Business Post', icon: MapPin },
  { id: 'ad-copy', label: 'Ad Copy', icon: ShoppingBag },
];

const toneOptions = [
  { value: 'professional', label: 'Professional & Trustworthy' },
  { value: 'friendly', label: 'Friendly & Approachable' },
  { value: 'bold', label: 'Bold & Confident' },
  { value: 'casual', label: 'Casual & Conversational' },
  { value: 'urgent', label: 'Urgent & Action-Oriented' },
  { value: 'educational', label: 'Educational & Informative' },
];

export default function AIWriterTool() {
  const [contentType, setContentType] = useState<ContentType>('website');
  const [selectedClient, setSelectedClient] = useState('ThinkMents');
  const [brief, setBrief] = useState('');
  const [tone, setTone] = useState<ToneType>('professional');
  const [length, setLength] = useState<LengthType>('medium');
  const [keywords, setKeywords] = useState('');
  const [includeCTA, setIncludeCTA] = useState(true);
  const [includeStats, setIncludeStats] = useState(false);
  const [location, setLocation] = useState('');
  const [readingLevel, setReadingLevel] = useState('standard');
  const [matchBrand, setMatchBrand] = useState(true);
  
  const [generatedContent, setGeneratedContent] = useState('');
  const [versions, setVersions] = useState<string[]>([]);
  const [currentVersion, setCurrentVersion] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  
  const [showBrandSettings, setShowBrandSettings] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showRefinement, setShowRefinement] = useState(false);
  const [customInstruction, setCustomInstruction] = useState('');

  // Website-specific
  const [sectionType, setSectionType] = useState('hero');
  
  // Blog-specific
  const [blogTitle, setBlogTitle] = useState('');
  
  // Email-specific
  const [emailType, setEmailType] = useState('newsletter');
  const [subjectLines, setSubjectLines] = useState<string[]>([]);
  
  // Social-specific
  const [socialPlatform, setSocialPlatform] = useState('facebook');

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleContent = `Unlock Your Business Potential with ThinkMents Digital Marketing

At ThinkMents, we don't just create websites—we build digital experiences that convert. Our team of expert designers and developers in Decatur, Texas specializes in crafting custom web solutions that help small businesses stand out in the competitive online landscape.

From responsive design to seamless user experiences, we combine cutting-edge technology with strategic marketing insights to deliver results that matter. Whether you're looking to refresh your existing site or build something entirely new, we're here to make your vision a reality.

Ready to take your online presence to the next level? Let's talk about how we can help your business grow.`;
      
      setGeneratedContent(sampleContent);
      setVersions([...versions, sampleContent]);
      setCurrentVersion(versions.length);
      setWordCount(sampleContent.split(' ').length);
      setCharCount(sampleContent.length);
      setIsGenerating(false);
    }, 2000);
  };

  const handleRefine = (instruction: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      const refined = `${generatedContent}\n\n[Refined based on: ${instruction}]`;
      setGeneratedContent(refined);
      setVersions([...versions, refined]);
      setCurrentVersion(versions.length);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  const renderContentTypeSpecific = () => {
    switch (contentType) {
      case 'website':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Section Type
              </label>
              <select
                value={sectionType}
                onChange={(e) => setSectionType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              >
                <option value="hero">Hero Section</option>
                <option value="about">About Section</option>
                <option value="services">Services Overview</option>
                <option value="features">Features List</option>
                <option value="testimonials">Testimonials</option>
                <option value="cta">Call-to-Action</option>
                <option value="footer">Footer Copy</option>
              </select>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Hero sections work best at 50-100 words
              </p>
            </div>
          </div>
        );
      
      case 'blog':
        return (
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full border-[#00B4D8] text-[#00B4D8]"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Generate Title Ideas
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#00B4D8] text-[#00B4D8]"
            >
              <FileText className="w-4 h-4 mr-2" />
              Generate Outline
            </Button>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>SEO Optimized:</strong> Target 1,500-2,000 words for best ranking
              </p>
            </div>
          </div>
        );
      
      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Type
              </label>
              <select
                value={emailType}
                onChange={(e) => setEmailType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              >
                <option value="newsletter">Newsletter</option>
                <option value="sales">Sales Email</option>
                <option value="welcome">Welcome Email</option>
                <option value="followup">Follow-up</option>
                <option value="reengagement">Re-engagement</option>
              </select>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#00B4D8] text-[#00B4D8]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate 5 Subject Lines
            </Button>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                Personalization tokens: {'{FirstName}'}, {'{Company}'}, {'{Location}'}
              </p>
            </div>
          </div>
        );
      
      case 'social':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter/X'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSocialPlatform(platform.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      socialPlatform === platform.toLowerCase()
                        ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#00B4D8] text-[#00B4D8]"
            >
              <Hash className="w-4 h-4 mr-2" />
              Generate Hashtags
            </Button>
            <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
              <p className="text-sm text-pink-800">
                <strong>Character limit:</strong> {socialPlatform === 'twitter/x' ? '280' : 'Recommended 150-200'}
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (showLibrary) {
    return (
      <div>
        {/* Library Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={() => setShowLibrary(false)}
              className="text-gray-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Writer
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">Content Library</h2>
              <p className="text-gray-600">Saved and generated content</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Homepage Hero Section', type: 'website', date: '2 hours ago', client: 'ThinkMents' },
            { title: 'SEO Blog Post: Digital Marketing Tips', type: 'blog', date: 'Yesterday', client: 'ThinkMents' },
            { title: 'Welcome Email Campaign', type: 'email', date: '3 days ago', client: 'Client A' },
            { title: 'LinkedIn Post: Industry Insights', type: 'social', date: '1 week ago', client: 'ThinkMents' },
          ].map((item, idx) => (
            <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-sm font-semibold text-[#1E3A5F] mb-2">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Badge className="bg-[#00B4D8]/10 text-[#00B4D8] border-[#00B4D8]/20">
                        {item.type}
                      </Badge>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  Sample content preview would appear here showing the first few lines of the generated content...
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit3 className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
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

  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">AI Writer</h1>
            <p className="text-gray-600 mt-1">Generate on-brand copy for any purpose</p>
            <div className="mt-3 flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                Current Tone: Professional & Friendly
              </Badge>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setShowLibrary(true)}
              className="border-[#00B4D8] text-[#00B4D8]"
            >
              <FileText className="w-4 h-4 mr-2" />
              Content Library
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowBrandSettings(true)}
              className="text-gray-600"
            >
              <Settings className="w-4 h-4 mr-2" />
              Brand Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Content Type Selector */}
      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {contentTypes.map((type) => {
            const Icon = type.icon;
            return (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setContentType(type.id as ContentType)}
                className={`p-4 rounded-lg text-center transition-all ${
                  contentType === type.id
                    ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white shadow-md'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00B4D8]'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs font-medium">{type.label}</p>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT PANEL - Input & Controls */}
        <div className="space-y-4">
          {/* Client Selector */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Client
                </label>
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                >
                  <option>ThinkMents</option>
                  <option>Client A - Local Restaurant</option>
                  <option>Client B - Real Estate</option>
                  <option>Client C - Healthcare</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Brief Section */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">What do you need?</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Describe what you want to write. E.g., 'A homepage hero section about our web design services for small businesses in Texas'"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
              />
            </CardContent>
          </Card>

          {/* Tone & Style */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Tone & Style</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as ToneType)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                >
                  {toneOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={matchBrand}
                  onChange={(e) => setMatchBrand(e.target.checked)}
                  className="w-4 h-4 text-[#00B4D8] rounded"
                />
                <span className="text-sm text-gray-700">Match brand default tone</span>
              </label>
            </CardContent>
          </Card>

          {/* Length Control */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Length</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {(['short', 'medium', 'long'] as LengthType[]).map((len) => (
                  <button
                    key={len}
                    onClick={() => setLength(len)}
                    className={`py-3 rounded-lg text-sm font-medium transition-colors capitalize ${
                      length === len
                        ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {len}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-sm text-gray-600 text-center">
                Target: {length === 'short' ? '100-200' : length === 'medium' ? '200-500' : '500-1000'} words
              </div>
            </CardContent>
          </Card>

          {/* Keywords */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Keywords (SEO)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="web design, digital marketing, Texas"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
              />
              <Button
                variant="outline"
                className="w-full border-[#00B4D8] text-[#00B4D8]"
              >
                <Target className="w-4 h-4 mr-2" />
                Suggest Keywords
              </Button>
            </CardContent>
          </Card>

          {/* Additional Options */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Additional Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeCTA}
                  onChange={(e) => setIncludeCTA(e.target.checked)}
                  className="w-4 h-4 text-[#00B4D8] rounded"
                />
                <span className="text-sm text-gray-700">Include call-to-action</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeStats}
                  onChange={(e) => setIncludeStats(e.target.checked)}
                  className="w-4 h-4 text-[#00B4D8] rounded"
                />
                <span className="text-sm text-gray-700">Include statistics/data</span>
              </label>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localize for
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                >
                  <option value="">No specific location</option>
                  <option value="decatur">Decatur, TX</option>
                  <option value="fort-worth">Fort Worth, TX</option>
                  <option value="dallas">Dallas, TX</option>
                  <option value="denton">Denton, TX</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reading Level
                </label>
                <select
                  value={readingLevel}
                  onChange={(e) => setReadingLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                >
                  <option value="simple">Simple (Grade 6-8)</option>
                  <option value="standard">Standard (Grade 9-12)</option>
                  <option value="advanced">Advanced (College+)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Content Type Specific Options */}
          {renderContentTypeSpecific()}

          {/* Generate Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white py-6 text-lg"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Copy
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-[#00B4D8] text-[#00B4D8]"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Generate 3 Variations
            </Button>
          </div>
        </div>

        {/* RIGHT PANEL - Output */}
        <div className="space-y-4">
          {/* Generated Content Display */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Generated Content</CardTitle>
                {versions.length > 1 && (
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={currentVersion === 0}
                      onClick={() => {
                        setCurrentVersion(currentVersion - 1);
                        setGeneratedContent(versions[currentVersion - 1]);
                      }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-600">
                      V{currentVersion + 1} / {versions.length}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={currentVersion === versions.length - 1}
                      onClick={() => {
                        setCurrentVersion(currentVersion + 1);
                        setGeneratedContent(versions[currentVersion + 1]);
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 min-h-[300px]">
                    <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                      {generatedContent}
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1E3A5F]">{wordCount}</p>
                      <p className="text-xs text-gray-600">Words</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1E3A5F]">{charCount}</p>
                      <p className="text-xs text-gray-600">Characters</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#1E3A5F]">
                        {Math.ceil(wordCount / 200)}m
                      </p>
                      <p className="text-xs text-gray-600">Read time</p>
                    </div>
                  </div>

                  {/* Flesch Score */}
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Readability Score
                        </span>
                      </div>
                      <Badge className="bg-green-600 text-white">75 - Good</Badge>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Your generated content will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>

          {generatedContent && (
            <>
              {/* Action Buttons */}
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={copyToClipboard}
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleGenerate}
                      className="border-[#00B4D8] text-[#00B4D8]"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>
                  <Button
                    onClick={() => setShowRefinement(!showRefinement)}
                    className="w-full mt-3 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit with AI
                  </Button>
                </CardContent>
              </Card>

              {/* AI Refinement Options */}
              <AnimatePresence>
                {showRefinement && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg">Refine Content</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('Make it shorter')}
                          >
                            <Minus className="w-4 h-4 mr-1" />
                            Shorter
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('Make it longer')}
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Longer
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('More professional')}
                          >
                            More Pro
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('More casual')}
                          >
                            More Casual
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('Add more detail')}
                          >
                            Add Detail
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('Simplify language')}
                          >
                            Simplify
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefine('Add emotional appeal')}
                            className="col-span-2"
                          >
                            Add Emotion
                          </Button>
                        </div>

                        <div className="pt-3 border-t border-gray-200">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Custom Instruction
                          </label>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={customInstruction}
                              onChange={(e) => setCustomInstruction(e.target.value)}
                              placeholder="E.g., 'Add a metaphor about growth'"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                            />
                            <Button
                              onClick={() => {
                                handleRefine(customInstruction);
                                setCustomInstruction('');
                              }}
                              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>

      {/* Brand Settings Modal */}
      <AnimatePresence>
        {showBrandSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBrandSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#1E3A5F]">Brand Voice Settings</h2>
                <p className="text-gray-600 mt-1">Configure how AI writes for your brand</p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    defaultValue="ThinkMents Digital Marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry/Niche
                  </label>
                  <input
                    type="text"
                    defaultValue="Digital Marketing & Web Design"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <textarea
                    defaultValue="Small business owners in Texas looking to grow their online presence"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Brand Personality Traits
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Professional',
                      'Friendly',
                      'Bold',
                      'Innovative',
                      'Trustworthy',
                      'Approachable',
                      'Expert',
                      'Creative',
                      'Results-Driven',
                    ].map((trait) => (
                      <label key={trait} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={['Professional', 'Friendly', 'Trustworthy'].includes(trait)}
                          className="w-4 h-4 text-[#00B4D8] rounded"
                        />
                        <span className="text-sm text-gray-700">{trait}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Words to Always Use
                  </label>
                  <input
                    type="text"
                    placeholder="growth, innovative, results, partnership"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Words to Never Use
                  </label>
                  <input
                    type="text"
                    placeholder="cheap, easy, simple"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Example Copy (Reference)
                  </label>
                  <textarea
                    placeholder="Paste existing copy that represents your brand voice well..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowBrandSettings(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setShowBrandSettings(false)}
                  className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Save Brand Voice
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
