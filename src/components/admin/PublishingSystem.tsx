import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Loader,
  Eye,
  Calendar,
  Save,
  Upload,
  X,
  ExternalLink,
  Share2,
  Copy,
  RefreshCw,
  AlertTriangle,
  Info,
  Zap,
  Globe,
  Server,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
  ChevronRight,
  Check,
  XCircle,
  History,
  Layers,
  Settings as SettingsIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';

export default function PublishingSystem() {
  const [activeDemo, setActiveDemo] = useState<
    'button-states' | 'blog-publish' | 'site-status' | 'architecture'
  >('button-states');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPostPublish, setShowPostPublish] = useState(false);
  const [publishProgress, setPublishProgress] = useState(0);
  const [publishStep, setPublishStep] = useState('');

  const handlePublish = async () => {
    setShowConfirmation(false);
    setIsPublishing(true);
    setPublishProgress(10);
    setPublishStep('Initiating build process...');

    try {
      setPublishProgress(45);
      setPublishStep('Deploying assets to CDN...');
      
      const response = await fetch('/api/publish-site', {
        method: 'POST'
      });
      
      if (!response.ok) {
        throw new Error('Publish network issue');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setPublishProgress(100);
        setPublishStep('Live!');
        setIsPublishing(false);
        setPublishSuccess(true);
        setShowPostPublish(true);
      } else {
        throw new Error('Publish failed');
      }

    } catch (error) {
       console.error(error);
       setPublishProgress(0);
       setPublishStep('Failed');
       setIsPublishing(false);
       setPublishSuccess(false);
       // We'd typically throw a toast here
    }

    // Reset after showing success
    setTimeout(() => {
      setPublishSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#0f172a]/40 backdrop-blur-xl border-b border-white/10 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-whitexl font-bold text-white mb-2">
              Publishing System Documentation
            </h1>
            <p className="text-slate-400">Complete publishing workflows and system architecture</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2">
          {[
            { id: 'button-states', label: 'Button States', icon: Zap },
            { id: 'blog-publish', label: 'Publishing Flow', icon: Upload },
            { id: 'site-status', label: 'Site Status', icon: Globe },
            { id: 'architecture', label: 'Architecture', icon: Server },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id as 'button-states' | 'blog-publish' | 'site-status' | 'architecture')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${activeDemo === tab.id
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
        {/* Button States Demo */}
        {activeDemo === 'button-states' && (
          <div className="space-y-8">
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Universal Button States</h2>

              {/* Primary Buttons */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Primary Buttons</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Default</div>
                    <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      Publish
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Hover</div>
                    <Button className="w-full bg-[#0096b8] text-white shadow-lg">Publish</Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Loading</div>
                    <Button className="w-full bg-[#00B4D8] text-white" disabled>
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Publishing...
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Success</div>
                    <Button className="w-full bg-green-600 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Published!
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Disabled</div>
                    <Button
                      className="w-full bg-gray-300 text-slate-500 cursor-not-allowed"
                      disabled
                    >
                      Publish
                    </Button>
                  </div>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Secondary Buttons</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Default</div>
                    <Button variant="outline" className="w-full border-[#00B4D8] text-[#00B4D8]">
                      Save Draft
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Hover</div>
                    <Button
                      variant="outline"
                      className="w-full border-[#00B4D8] text-[#00B4D8] bg-[#E6F7FA]"
                    >
                      Save Draft
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Loading</div>
                    <Button
                      variant="outline"
                      className="w-full border-[#00B4D8] text-[#00B4D8]"
                      disabled
                    >
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Disabled</div>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-gray-400 cursor-not-allowed"
                      disabled
                    >
                      Save Draft
                    </Button>
                  </div>
                </div>
              </div>

              {/* Danger Buttons */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Danger Buttons</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Default</div>
                    <Button variant="outline" className="w-full border-red-600 text-rose-400">
                      Delete
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Hover</div>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-rose-400 bg-rose-900/20"
                    >
                      Delete
                    </Button>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Loading</div>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-rose-400"
                      disabled
                    >
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Deleting...
                    </Button>
                  </div>
                </div>
              </div>

              {/* Icon Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Icon Buttons</h3>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors group relative">
                    <Eye className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8]" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Preview
                    </div>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors group relative">
                    <Copy className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8]" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Copy Link
                    </div>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors group relative">
                    <Share2 className="w-5 h-5 text-slate-400 group-hover:text-[#00B4D8]" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Share
                    </div>
                  </button>
                  <button className="p-2 rounded-lg bg-[#00B4D8] text-white">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Site Sync Status Indicator */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Site Sync Status Indicator</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-emerald-900/200 rounded-full" />
                    <span className="font-semibold text-green-700">Live</span>
                  </div>
                  <p className="text-sm text-slate-400">All changes published, site is in sync</p>
                </div>

                <div className="p-4 bg-amber-900/20 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-amber-900/200 rounded-full animate-pulse" />
                    <span className="font-semibold text-yellow-700">Pending</span>
                  </div>
                  <p className="text-sm text-slate-400">Unpublished changes exist (5 items)</p>
                </div>

                <div className="p-4 bg-indigo-900/20 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-indigo-900/200 rounded-full animate-pulse" />
                    <span className="font-semibold text-indigo-300">Publishing</span>
                  </div>
                  <p className="text-sm text-slate-400">Currently pushing changes to live site</p>
                </div>

                <div className="p-4 bg-rose-900/20 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-rose-900/200 rounded-full" />
                    <span className="font-semibold text-rose-300">Error</span>
                  </div>
                  <p className="text-sm text-slate-400">Publishing failed, needs attention</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Publishing Flow Demo */}
        {activeDemo === 'blog-publish' && (
          <div className="space-y-6">
            {/* Publishing Demo */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Blog Post Publishing Flow</h2>

              <div className="max-w-2xl mx-auto">
                {/* Action Bar */}
                <div className="bg-white/5 rounded-lg p-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="border-white/20">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                  <Button
                    onClick={() => setShowConfirmation(true)}
                    className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                    disabled={isPublishing}
                  >
                    {isPublishing ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Publishing...
                      </>
                    ) : publishSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Published!
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Publish
                      </>
                    )}
                  </Button>
                </div>

                {/* Publishing Progress */}
                <AnimatePresence>
                  {isPublishing && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-indigo-900/20 rounded-lg p-4 mb-6 border border-blue-200"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Loader className="w-5 h-5 text-[#00B4D8] animate-spin" />
                        <span className="font-semibold text-white">{publishStep}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${publishProgress}%` }}
                          className="bg-[#00B4D8] h-2 rounded-full transition-all"
                        />
                      </div>
                      <div className="text-sm text-slate-400 mt-2">{publishProgress}% complete</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Success Notification */}
                <AnimatePresence>
                  {publishSuccess && !isPublishing && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-emerald-900/20 rounded-lg p-4 mb-6 border border-green-200"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">
                          Blog post published successfully!
                        </span>
                      </div>
                      <button className="text-sm text-green-700 hover:underline flex items-center">
                        View Live
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>

            {/* Pre-Publish Checklist */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Pre-Publish Checklist</h3>

              <div className="space-y-3">
                {[
                  { label: 'Title is set', status: 'complete' },
                  { label: 'Featured image uploaded', status: 'complete' },
                  { label: 'Meta description filled', status: 'complete' },
                  { label: 'At least one category selected', status: 'complete' },
                  { label: 'SEO score: 85/100', status: 'warning' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    {item.status === 'complete' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    )}
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Validation Errors Example */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Validation Error Example</h3>

              <div className="bg-rose-900/20 rounded-lg p-4 border border-red-200">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="w-5 h-5 text-rose-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-rose-200 mb-2">
                      Cannot publish - please fix the following issues:
                    </div>
                    <ul className="space-y-2 text-sm text-rose-300">
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span>Featured image is required</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span>Meta description is missing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span>URL slug contains invalid characters</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" className="border-red-600 text-rose-400 hover:bg-rose-900/20">
                  Fix Issues
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Site Status */}
        {activeDemo === 'site-status' && (
          <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="text-sm text-slate-400 mb-1">Total Content</div>
                <div className="text-whitexl font-bold text-white">247</div>
              </Card>
              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="text-sm text-slate-400 mb-1">Published</div>
                <div className="text-whitexl font-bold text-green-600">198</div>
              </Card>
              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="text-sm text-slate-400 mb-1">Pending</div>
                <div className="text-whitexl font-bold text-yellow-600">32</div>
              </Card>
              <Card className="p-4 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
                <div className="text-sm text-slate-400 mb-1">Drafts</div>
                <div className="text-whitexl font-bold text-slate-400">17</div>
              </Card>
            </div>

            {/* Content Sync Table */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Content Sync Status</h2>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Type
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Title
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
                        Last Modified
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: 'Blog',
                        title: 'SEO Best Practices 2025',
                        status: 'synced',
                        modified: '2 hours ago',
                      },
                      {
                        type: 'Page',
                        title: 'Services - Dallas',
                        status: 'out-of-sync',
                        modified: '5 min ago',
                      },
                      {
                        type: 'Podcast',
                        title: 'Episode 24: AI Marketing',
                        status: 'synced',
                        modified: '1 day ago',
                      },
                      {
                        type: 'Blog',
                        title: 'Social Media Trends',
                        status: 'draft',
                        modified: '3 hours ago',
                      },
                      {
                        type: 'Form',
                        title: 'Contact Form',
                        status: 'error',
                        modified: '2 days ago',
                      },
                    ].map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4 px-4">
                          <Badge className="bg-indigo-500/10 text-indigo-300">{item.type}</Badge>
                        </td>
                        <td className="py-4 px-4 font-medium text-white">{item.title}</td>
                        <td className="py-4 px-4">
                          {item.status === 'synced' && (
                            <div className="flex items-center space-x-2 text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm">In Sync</span>
                            </div>
                          )}
                          {item.status === 'out-of-sync' && (
                            <div className="flex items-center space-x-2 text-yellow-600">
                              <AlertCircle className="w-4 h-4" />
                              <span className="text-sm">Out of Sync</span>
                            </div>
                          )}
                          {item.status === 'draft' && (
                            <div className="flex items-center space-x-2 text-slate-400">
                              <Info className="w-4 h-4" />
                              <span className="text-sm">Draft</span>
                            </div>
                          )}
                          {item.status === 'error' && (
                            <div className="flex items-center space-x-2 text-rose-400">
                              <XCircle className="w-4 h-4" />
                              <span className="text-sm">Error</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-400">{item.modified}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end space-x-2">
                            {item.status === 'out-of-sync' && (
                              <Button
                                size="sm"
                                className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                              >
                                Publish
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="border-white/20">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Publishing History */}
            <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Recent Publishing History</h3>

              <div className="space-y-3">
                {[
                  {
                    time: '10 minutes ago',
                    action: 'Published blog post "SEO Best Practices 2025"',
                    user: 'John Doe',
                    status: 'success',
                  },
                  {
                    time: '2 hours ago',
                    action: 'Updated page "Services - Houston"',
                    user: 'Jane Smith',
                    status: 'success',
                  },
                  {
                    time: '5 hours ago',
                    action: 'Failed to publish "Location Page - Austin"',
                    user: 'John Doe',
                    status: 'failed',
                  },
                  {
                    time: '1 day ago',
                    action: 'Published podcast episode #24',
                    user: 'John Doe',
                    status: 'success',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                    {item.status === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-400 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-white">{item.action}</div>
                      <div className="text-sm text-slate-400 mt-1">
                        by {item.user} · {item.time}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-white/20">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Architecture Diagram */}
        {activeDemo === 'architecture' && (
          <Card className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-lg border border-white/10 shadow-lg border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">System Architecture Overview</h2>

            <div className="bg-white/5 rounded-lg p-8">
              {/* Will be implemented in the next component */}
              <div className="text-center text-slate-400">
                See SystemArchitecture.tsx for detailed architecture diagram
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Publish Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowConfirmation(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-lg bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Publish?</h3>

                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />

                  <div className="space-y-2">
                    {[
                      { label: 'Title is set', checked: true },
                      { label: 'Featured image uploaded', checked: true },
                      { label: 'Meta description filled', checked: true },
                      { label: 'At least one category selected', checked: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-slate-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowConfirmation(false)}
                    className="border-white/20"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handlePublish}
                    className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Publish Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Post-Publish Modal */}
      <AnimatePresence>
        {showPostPublish && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowPostPublish(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-lg bg-[#0f172a]/40 backdrop-blur-xl rounded-lg shadow-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Successfully Published!
                  </h3>
                  <p className="text-slate-400">Your blog post is now live on thinkments.com</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Live Site
                  </Button>

                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="border-white/20">
                      <Share2 className="w-4 h-4 mr-1" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <Share2 className="w-4 h-4 mr-1" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="border-white/20">
                      <Share2 className="w-4 h-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-white/20"
                    onClick={() => setShowPostPublish(false)}
                  >
                    Back to Dashboard
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
