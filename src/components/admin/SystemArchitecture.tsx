import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Server,
  Database,
  Globe,
  Code,
  FileText,
  Image as ImageIcon,
  Radio,
  Mail,
  Share2,
  Cloud,
  GitBranch,
  Zap,
  CheckCircle,
  ArrowRight,
  Layers,
  Cpu,
  HardDrive,
  Link as LinkIcon,
  Lock,
  RefreshCw,
  Settings as SettingsIcon,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function SystemArchitecture() {
  const [activeFlow, setActiveFlow] = useState<'overview' | 'blog-publish' | 'data-flow'>(
    'overview',
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">System Architecture</h1>
            <p className="text-gray-600">ThinkMents admin panel to live website data flow</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2">
          {[
            { id: 'overview', label: 'System Overview' },
            { id: 'blog-publish', label: 'Blog Publish Flow' },
            { id: 'data-flow', label: 'Data Flow Diagram' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFlow(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFlow === tab.id
                  ? 'bg-[#00B4D8] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* System Overview */}
        {activeFlow === 'overview' && (
          <div className="space-y-8">
            {/* Architecture Diagram */}
            <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
                Complete System Architecture
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Admin Panel */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg p-6 text-white">
                    <Code className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Admin Panel</h3>
                    <p className="text-sm text-white/80">React Dashboard</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { icon: FileText, label: 'Blog Editor' },
                      { icon: Layers, label: 'Page Builder' },
                      { icon: Radio, label: 'Podcast Manager' },
                      { icon: ImageIcon, label: 'Media Library' },
                      { icon: SettingsIcon, label: 'All Tools' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="bg-gray-50 rounded-lg p-3 flex items-center space-x-2"
                        >
                          <Icon className="w-4 h-4 text-[#00B4D8]" />
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                </div>

                {/* Backend Services */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a24] rounded-lg p-6 text-white">
                    <Server className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Backend API</h3>
                    <p className="text-sm text-white/80">Node.js/Express</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { endpoint: 'POST /api/content/publish' },
                      { endpoint: 'POST /api/content/save-draft' },
                      { endpoint: 'GET /api/content/preview/:id' },
                      { endpoint: 'POST /api/media/upload' },
                      { endpoint: 'POST /api/forms/submit' },
                      { endpoint: 'GET /api/analytics/*' },
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-2">
                        <code className="text-xs text-gray-700">{item.endpoint}</code>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                </div>

                {/* Databases & Storage */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg p-6 text-white">
                    <Database className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Data Storage</h3>
                    <p className="text-sm text-white/80">Multiple Sources</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { icon: HardDrive, label: 'Google Sheets', desc: 'Leads & Forms' },
                      { icon: Cloud, label: 'Cloud Storage', desc: 'Media Files' },
                      { icon: FileText, label: 'JSON/Markdown', desc: 'Content' },
                      { icon: GitBranch, label: 'GitHub Repo', desc: 'Version Control' },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <Icon className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          </div>
                          <span className="text-xs text-gray-500">{item.desc}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                </div>

                {/* Build & Deploy */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-lg p-6 text-white">
                    <Globe className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Live Website</h3>
                    <p className="text-sm text-white/80">thinkments.com</p>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <GitBranch className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">GitHub Push</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">Netlify Build</span>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-6">
                        <li>• Pull content</li>
                        <li>• Build static site</li>
                        <li>• Optimize images</li>
                        <li>• Generate sitemap</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">Deploy to CDN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Third-Party Integrations */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Third-Party Integrations</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    name: 'Google Search Console',
                    desc: 'SEO & Indexing',
                    icon: Globe,
                    color: 'blue',
                  },
                  { name: 'Google Analytics', desc: 'Traffic Stats', icon: Cpu, color: 'yellow' },
                  { name: 'Google Business', desc: 'GBP Management', icon: LinkIcon, color: 'red' },
                  {
                    name: 'Social Media APIs',
                    desc: 'Auto-posting',
                    icon: Share2,
                    color: 'purple',
                  },
                  {
                    name: 'Spotify API',
                    desc: 'Podcast Distribution',
                    icon: Radio,
                    color: 'green',
                  },
                  {
                    name: 'Apple Podcasts',
                    desc: 'Podcast Distribution',
                    icon: Radio,
                    color: 'gray',
                  },
                  { name: 'Email Service', desc: 'Notifications', icon: Mail, color: 'teal' },
                  { name: 'Cloud Functions', desc: 'Serverless', icon: Zap, color: 'orange' },
                ].map((integration, i) => {
                  const Icon = integration.icon;
                  return (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div
                        className={`w-10 h-10 bg-${integration.color}-100 rounded-lg flex items-center justify-center mb-3`}
                      >
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <h4 className="font-semibold text-[#1E3A5F] mb-1">{integration.name}</h4>
                      <p className="text-sm text-gray-600">{integration.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Security & Performance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A5F]">Security Measures</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Authentication & authorization (JWT tokens)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">HTTPS encryption for all API calls</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Content validation before publishing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Rate limiting on API endpoints</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Secure preview tokens (time-limited)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A5F]">Performance Features</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">CDN distribution (Netlify Edge Network)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Automatic image optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Lazy loading for media content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Incremental builds (only changed content)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Cache invalidation on publish</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* Blog Publishing Flow */}
        {activeFlow === 'blog-publish' && (
          <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
              Blog Post Publishing Data Flow
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">
                      User Clicks "Publish" in Admin
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-700 mb-3">
                        Admin panel sends POST request to API server:
                      </p>
                      <code className="text-xs bg-white p-3 rounded block text-gray-800 overflow-x-auto">
                        POST https://api.thinkments.com/api/content/publish
                        <br />
                        {'{'}
                        <br />
                        &nbsp;&nbsp;"type": "blog",
                        <br />
                        &nbsp;&nbsp;"title": "SEO Best Practices 2025",
                        <br />
                        &nbsp;&nbsp;"content": "...",
                        <br />
                        &nbsp;&nbsp;"author": "John Doe",
                        <br />
                        &nbsp;&nbsp;"meta": {'{'} ... {'}'},<br />
                        &nbsp;&nbsp;"images": [...]
                        <br />
                        {'}'}
                      </code>
                    </div>
                  </div>
                </div>
                <div className="ml-6 mt-4 mb-4 border-l-2 border-[#00B4D8] h-8" />
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">API Server Processes Request</h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Validates content (required fields, formatting)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Processes and optimizes images (WebP conversion, compression)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Generates SEO metadata (Open Graph, Schema.org)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Saves content to GitHub repository (as Markdown/JSON)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ml-6 mt-4 mb-4 border-l-2 border-[#00B4D8] h-8" />
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">GitHub & Netlify Integration</h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="space-y-3">
                        <div>
                          <Badge className="bg-purple-100 text-purple-700 mb-2">
                            GitHub Commit
                          </Badge>
                          <p className="text-sm text-gray-700">
                            Content pushed to repository triggers automatic webhook
                          </p>
                        </div>
                        <div>
                          <Badge className="bg-blue-100 text-blue-700 mb-2">
                            Netlify Build Started
                          </Badge>
                          <p className="text-sm text-gray-700">
                            Build process initiated automatically
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-6 mt-4 mb-4 border-l-2 border-[#00B4D8] h-8" />
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">Netlify Build Process</h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">Pulls latest content from GitHub</span>
                          <span className="text-xs text-gray-500">(~5s)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">
                            Runs Vite build (React + TypeScript)
                          </span>
                          <span className="text-xs text-gray-500">(~20-40s)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">Generates sitemap.xml</span>
                          <span className="text-xs text-gray-500">(~2s)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">Optimizes and compresses assets</span>
                          <span className="text-xs text-gray-500">(~10s)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-700">Deploys to global CDN</span>
                          <span className="text-xs text-gray-500">(~5-10s)</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-300">
                        <p className="text-sm font-semibold text-gray-700">
                          Total Build Time: ~30-90 seconds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-6 mt-4 mb-4 border-l-2 border-[#00B4D8] h-8" />
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">Post-Deployment Actions</h3>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <span>Ping Google Search Console for indexing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <RefreshCw className="w-4 h-4 text-green-600" />
                          <span>Update sitemap with new content</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-600" />
                          <span>Clear CDN cache for updated pages</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Return success status to admin panel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ml-6 mt-4 mb-4 border-l-2 border-[#00B4D8] h-8" />
              </motion.div>

              {/* Step 6 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E3A5F] mb-2">Admin Shows Success</h3>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center space-x-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">
                          Published successfully!
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li>✓ Live URL: https://thinkments.com/blog/seo-best-practices-2025</li>
                        <li>✓ Social sharing options displayed</li>
                        <li>✓ Analytics tracking enabled</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        )}

        {/* Data Flow Diagram */}
        {activeFlow === 'data-flow' && (
          <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
              Content Data Flow Architecture
            </h2>

            <div className="space-y-8">
              {/* Content Types Flow */}
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">
                  Content Types & Storage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      type: 'Blog Posts & Pages',
                      storage: 'GitHub Repository',
                      format: 'Markdown/JSON',
                      icon: FileText,
                      color: 'blue',
                    },
                    {
                      type: 'Media Files',
                      storage: 'Google Cloud Storage',
                      format: 'Images, Videos, Audio',
                      icon: ImageIcon,
                      color: 'purple',
                    },
                    {
                      type: 'Form Submissions',
                      storage: 'Google Sheets',
                      format: 'Spreadsheet Rows',
                      icon: Database,
                      color: 'green',
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div
                          className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3`}
                        >
                          <Icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <h4 className="font-semibold text-[#1E3A5F] mb-2">{item.type}</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>
                            <strong>Storage:</strong> {item.storage}
                          </p>
                          <p>
                            <strong>Format:</strong> {item.format}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* API Endpoints */}
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">
                  API Endpoints Reference
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        method: 'POST',
                        endpoint: '/api/content/publish',
                        desc: 'Publish content to live site',
                      },
                      {
                        method: 'POST',
                        endpoint: '/api/content/save-draft',
                        desc: 'Save as draft (admin only)',
                      },
                      {
                        method: 'GET',
                        endpoint: '/api/content/preview/:id',
                        desc: 'Generate preview with token',
                      },
                      { method: 'POST', endpoint: '/api/media/upload', desc: 'Upload media files' },
                      {
                        method: 'POST',
                        endpoint: '/api/forms/submit',
                        desc: 'Handle form submissions',
                      },
                      { method: 'GET', endpoint: '/api/analytics/*', desc: 'Fetch analytics data' },
                      {
                        method: 'POST',
                        endpoint: '/api/seo/index',
                        desc: 'Request Google indexing',
                      },
                      { method: 'GET', endpoint: '/api/status/sync', desc: 'Check sync status' },
                    ].map((api, i) => (
                      <div key={i} className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge
                            className={`${
                              api.method === 'POST'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            } text-xs`}
                          >
                            {api.method}
                          </Badge>
                          <code className="text-xs text-gray-700">{api.endpoint}</code>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{api.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Build Pipeline */}
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">
                  Build & Deployment Pipeline
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    {[
                      { label: 'Git Push', icon: GitBranch },
                      { label: 'Webhook', icon: Zap },
                      { label: 'Build', icon: Cpu },
                      { label: 'Deploy', icon: Globe },
                    ].map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <React.Fragment key={i}>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-[#00B4D8] flex items-center justify-center mb-2">
                              <Icon className="w-6 h-6 text-[#00B4D8]" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{step.label}</span>
                          </div>
                          {i < 3 && <ArrowRight className="w-8 h-8 text-[#00B4D8]" />}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
