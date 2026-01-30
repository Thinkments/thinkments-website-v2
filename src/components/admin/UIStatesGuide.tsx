import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  X,
  AlertCircle,
  Info,
  Loader,
  Upload,
  Eye,
  Trash2,
  Save,
  Calendar,
  ChevronDown,
  Search,
  FileText,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Copy,
  Edit2,
  Globe,
  Zap,
  Users,
  Clock,
  Download,
  Share2,
  Settings as SettingsIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';

export default function UIStatesGuide() {
  const [activeSection, setActiveSection] = useState<
    | 'buttons'
    | 'forms'
    | 'notifications'
    | 'workflows'
    | 'sync'
    | 'errors'
    | 'confirmations'
    | 'collaboration'
  >('buttons');

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('success');
  const [showModal, setShowModal] = useState(false);
  const [deleteState, setDeleteState] = useState<'default' | 'confirm'>('default');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);

  const triggerToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">UI States & User Flows</h1>
            <p className="text-gray-600">Complete component library with interactive states</p>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {[
            { id: 'buttons', label: 'Buttons' },
            { id: 'forms', label: 'Form Fields' },
            { id: 'notifications', label: 'Notifications' },
            { id: 'workflows', label: 'User Flows' },
            { id: 'sync', label: 'Sync Status' },
            { id: 'errors', label: 'Error Handling' },
            { id: 'confirmations', label: 'Confirmations' },
            { id: 'collaboration', label: 'Collaboration' },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as 'buttons' | 'forms' | 'notifications' | 'workflows' | 'sync' | 'errors' | 'confirmations' | 'collaboration')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeSection === section.id
                  ? 'bg-[#00B4D8] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* SECTION 1: BUTTONS */}
        {activeSection === 'buttons' && (
          <div className="space-y-8">
            {/* Primary Buttons */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Primary Buttons (Teal #00B4D8)
              </h2>

              <div className="space-y-6">
                {/* Default State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Default State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white cursor-default">
                      Publish
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-[#00B4D8] text-white
                    </code>
                  </div>
                </div>

                {/* Hover State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Hover State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-[#0096b8] text-white shadow-lg cursor-default">
                      Publish
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-[#0096b8] shadow-lg
                    </code>
                  </div>
                </div>

                {/* Active/Pressed State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Active/Pressed State
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#007A94] text-white rounded-lg font-medium"
                    >
                      Publish
                    </motion.button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-[#007A94] scale-0.95
                    </code>
                  </div>
                </div>

                {/* Disabled State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Disabled State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-gray-300 text-gray-500 cursor-not-allowed" disabled>
                      Publish
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-gray-300 text-gray-500 cursor-not-allowed
                    </code>
                  </div>
                </div>

                {/* Loading State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Loading State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-[#00B4D8] text-white" disabled>
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Publishing...
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      spinner + "Publishing..."
                    </code>
                  </div>
                </div>

                {/* Success State */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Success State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-green-600 text-white cursor-default">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Published!
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-green-600 + checkmark
                    </code>
                  </div>
                </div>
              </div>
            </Card>

            {/* Secondary Buttons */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Secondary Buttons (Outline)
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Default State</div>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8]">
                      Save Draft
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      border-[#00B4D8] text-[#00B4D8]
                    </code>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Hover State</div>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      className="border-[#00B4D8] text-[#00B4D8] bg-[#E6F7FA]"
                    >
                      Save Draft
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">bg-[#E6F7FA]</code>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Loading State</div>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-[#00B4D8] text-[#00B4D8]" disabled>
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      spinner + disabled
                    </code>
                  </div>
                </div>
              </div>
            </Card>

            {/* Danger Buttons */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Danger Buttons (Delete Actions)
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Default State</div>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      className="border-red-600 text-red-600"
                      onClick={() => setDeleteState('confirm')}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      border-red-600 text-red-600
                    </code>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Hover State</div>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-red-600 text-red-600 bg-red-50">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">bg-red-50</code>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Confirmation State</div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-red-600 text-white">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Click Again to Confirm
                    </Button>
                    <code className="text-xs bg-gray-100 px-3 py-1 rounded">
                      bg-red-600 + warning text
                    </code>
                  </div>
                </div>
              </div>
            </Card>

            {/* Icon Buttons */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Icon Buttons</h2>

              <div className="flex items-center space-x-4">
                {[
                  { icon: Eye, label: 'View' },
                  { icon: Edit2, label: 'Edit' },
                  { icon: Copy, label: 'Copy' },
                  { icon: Trash2, label: 'Delete' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="group relative">
                      <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#00B4D8]" />
                      </button>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Button Sizes */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Button Sizes</h2>

              <div className="flex items-end space-x-4">
                <div>
                  <div className="text-xs text-gray-600 mb-2">Small</div>
                  <Button size="sm" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    Small Button
                  </Button>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-2">Medium (Default)</div>
                  <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    Medium Button
                  </Button>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-2">Large</div>
                  <Button size="lg" className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    Large Button
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 2: FORMS */}
        {activeSection === 'forms' && (
          <div className="space-y-8">
            {/* Text Inputs */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Text Input States</h2>

              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Default/Empty State
                  </label>
                  <Input placeholder="Enter your title..." />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Focused State
                  </label>
                  <Input
                    placeholder="Enter your title..."
                    className="ring-2 ring-[#00B4D8] border-[#00B4D8]"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Filled State
                  </label>
                  <Input value="SEO Best Practices 2025" readOnly />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Error State
                  </label>
                  <Input
                    placeholder="Enter your title..."
                    className="border-red-600 focus:ring-red-600"
                  />
                  <div className="flex items-center space-x-1 mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Title is required</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Success/Valid State
                  </label>
                  <div className="relative">
                    <Input value="Valid Email Address" readOnly />
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Disabled State
                  </label>
                  <Input
                    placeholder="Cannot edit..."
                    className="bg-gray-100 cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>
            </Card>

            {/* Dropdowns */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Dropdown/Select States</h2>

              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Closed Default
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]">
                    <option>Select a category...</option>
                    <option>SEO</option>
                    <option>Marketing</option>
                    <option>Social Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Multi-Select with Tags
                  </label>
                  <div className="border border-gray-300 rounded-lg p-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {['SEO', 'Marketing', 'Content'].map((tag, i) => (
                        <Badge key={i} className="bg-[#00B4D8] text-white">
                          {tag}
                          <X className="w-3 h-3 ml-1 cursor-pointer" />
                        </Badge>
                      ))}
                    </div>
                    <Input placeholder="Add tags..." className="border-0 p-0 focus:ring-0" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Checkboxes and Toggles */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Checkboxes & Toggles</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-8">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#00B4D8] focus:ring-[#00B4D8]"
                    />
                    <span className="text-sm text-gray-700">Unchecked</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#00B4D8] focus:ring-[#00B4D8]"
                      defaultChecked
                    />
                    <span className="text-sm text-gray-700">Checked</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-not-allowed opacity-50">
                    <input type="checkbox" className="rounded border-gray-300" disabled />
                    <span className="text-sm text-gray-700">Disabled</span>
                  </label>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Toggle Switch</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button className="relative w-12 h-6 bg-gray-300 rounded-full transition-colors">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full" />
                      </button>
                      <span className="text-sm text-gray-700">Off</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button className="relative w-12 h-6 bg-[#00B4D8] rounded-full transition-colors">
                        <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
                      </button>
                      <span className="text-sm text-gray-700">On</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* File Upload */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">File Upload States</h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Default Drop Zone</div>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00B4D8] transition-colors cursor-pointer"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                    }}
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Drag and drop your file here
                    </p>
                    <p className="text-sm text-gray-500">or click to browse</p>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Drag Hover State</div>
                  <div className="border-2 border-dashed border-[#00B4D8] bg-blue-50 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-[#00B4D8] mx-auto mb-4" />
                    <p className="text-lg font-medium text-[#00B4D8] mb-2">Drop file here</p>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Uploading State</div>
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Loader className="w-5 h-5 text-[#00B4D8] animate-spin" />
                      <span className="text-sm font-medium text-gray-700">
                        Uploading image.jpg...
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00B4D8] h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <div className="text-sm text-gray-600 mt-2">65% complete</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Upload Complete</div>
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-700">image.jpg</div>
                          <div className="text-xs text-gray-500">2.3 MB</div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-green-100 rounded transition-colors">
                        <X className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Error State</div>
                  <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <div>
                        <div className="text-sm font-medium text-red-900">Upload failed</div>
                        <div className="text-xs text-red-700">File size exceeds 5MB limit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 3: NOTIFICATIONS */}
        {activeSection === 'notifications' && (
          <div className="space-y-8">
            {/* Toast Notifications */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Toast Notifications</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Button
                    onClick={() => triggerToast('success')}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Show Success
                  </Button>
                  <Button
                    onClick={() => triggerToast('error')}
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Show Error
                  </Button>
                  <Button
                    onClick={() => triggerToast('warning')}
                    size="sm"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white"
                  >
                    Show Warning
                  </Button>
                  <Button
                    onClick={() => triggerToast('info')}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Show Info
                  </Button>
                </div>

                <div className="space-y-4 mt-6">
                  {/* Success Toast Example */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg max-w-md">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold text-green-900">Success!</div>
                        <div className="text-sm text-green-700 mt-1">
                          Blog post published successfully!
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-800">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Error Toast Example */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg max-w-md">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold text-red-900">Error</div>
                        <div className="text-sm text-red-700 mt-1">
                          Failed to save. Please try again.
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-800">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Warning Toast Example */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg max-w-md">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold text-yellow-900">Warning</div>
                        <div className="text-sm text-yellow-700 mt-1">
                          You have unsaved changes.
                        </div>
                      </div>
                      <button className="text-yellow-600 hover:text-yellow-800">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Info Toast Example */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-lg max-w-md">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold text-blue-900">Info</div>
                        <div className="text-sm text-blue-700 mt-1">
                          Your report is being generated...
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Modal Dialogs */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Modal Dialogs</h2>

              <div className="space-y-6">
                <div>
                  <Button
                    onClick={() => setShowModal(true)}
                    className="bg-[#00B4D8] hover:bg-[#0096b8] text-white"
                  >
                    Show Confirmation Modal
                  </Button>
                </div>

                {/* Confirmation Modal Example */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">Delete Blog Post?</h3>
                    <p className="text-gray-600 mb-6">
                      Are you sure you want to delete "{'"SEO Best Practices 2025"'}? This action
                      cannot be undone.
                    </p>
                    <div className="flex items-center justify-end space-x-3">
                      <Button variant="outline" className="border-gray-300">
                        Cancel
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">Delete</Button>
                    </div>
                  </div>
                </div>

                {/* Success Modal Example */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Success!</h3>
                    <p className="text-gray-600 mb-6">
                      Your blog post has been published to thinkments.com
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                        View Live Post
                      </Button>
                      <Button variant="outline" className="w-full border-gray-300">
                        Create Another Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Loading States */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Loading States</h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Spinner (Centered)</div>
                  <div className="border border-gray-200 rounded-lg p-12 flex items-center justify-center">
                    <Loader className="w-8 h-8 text-[#00B4D8] animate-spin" />
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Progress Bar</div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Publishing...</span>
                      <span className="text-sm font-semibold text-[#00B4D8]">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#00B4D8] h-2 rounded-full transition-all"
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Skeleton Placeholder
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Empty States */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Empty States</h2>

              <div className="border border-gray-200 rounded-lg p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">No blog posts yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Get started by creating your first blog post to share with your audience.
                </p>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Create First Post
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 4: USER FLOWS */}
        {activeSection === 'workflows' && (
          <div className="space-y-8">
            <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
                Blog Post Publishing Flow
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'User clicks "New Blog Post"',
                    description: 'Opens blog editor in clean state',
                    color: 'blue',
                  },
                  {
                    step: 2,
                    title: 'User fills in content',
                    description: 'Title, content, images - real-time validation',
                    color: 'blue',
                  },
                  {
                    step: 3,
                    title: 'User clicks "Save Draft"',
                    description: 'Toast: "Draft saved" → Status changes to "Draft"',
                    color: 'yellow',
                  },
                  {
                    step: 4,
                    title: 'User clicks "Preview"',
                    description: 'Opens new tab showing live site preview with admin bar',
                    color: 'purple',
                  },
                  {
                    step: 5,
                    title: 'User clicks "Publish"',
                    description: 'Confirmation modal: "Publish to thinkments.com?"',
                    color: 'orange',
                  },
                  {
                    step: 6,
                    title: 'User confirms',
                    description: 'Loading state → Publishing progress indicator',
                    color: 'teal',
                  },
                  {
                    step: 7,
                    title: 'Success!',
                    description: 'Toast: "Published!" → Status badge "Live" → View on Site button',
                    color: 'green',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {i < 6 && <div className="ml-6 mt-4 mb-4 border-l-2 border-gray-300 h-8" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Scheduled Publishing Flow */}
            <Card className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-8 text-center">
                Scheduled Publishing Flow
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'User creates content',
                    description: 'Complete blog post or page',
                  },
                  {
                    step: 2,
                    title: 'User clicks "Schedule"',
                    description: 'Instead of "Publish Now"',
                  },
                  {
                    step: 3,
                    title: 'Date/Time picker opens',
                    description: 'Modal with calendar and time selector',
                  },
                  {
                    step: 4,
                    title: 'User selects future date',
                    description: 'Chooses specific date and time',
                  },
                  {
                    step: 5,
                    title: 'Confirmation shown',
                    description: 'This post will go live on [date] at [time]',
                  },
                  {
                    step: 6,
                    title: 'Status changes',
                    description: 'Badge shows "Scheduled" with countdown timer',
                  },
                  {
                    step: 7,
                    title: 'Appears in Calendar',
                    description: 'Shows in calendar view with scheduled time',
                  },
                  {
                    step: 8,
                    title: 'Auto-publishes',
                    description: 'System publishes at scheduled time automatically',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#1E3A5F] mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {i < 7 && <div className="ml-5 mt-3 mb-3 border-l-2 border-gray-300 h-6" />}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 5: SYNC STATUS */}
        {activeSection === 'sync' && (
          <div className="space-y-8">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Connection Status Indicators
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div>
                      <div className="font-semibold text-green-900">Connected</div>
                      <div className="text-sm text-green-700">Live connection to site</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                    <div>
                      <div className="font-semibold text-yellow-900">Syncing...</div>
                      <div className="text-sm text-yellow-700">Pushing changes to site</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="flex-1">
                      <div className="font-semibold text-red-900">Offline</div>
                      <div className="text-sm text-red-700">Connection issue</div>
                    </div>
                    <Button size="sm" variant="outline" className="border-red-600 text-red-600">
                      Retry
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-900">All changes saved</div>
                      <div className="text-sm text-blue-700">Last synced: 2 min ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Build Status */}
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Build/Deploy Status (Netlify)
              </h2>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold text-green-900">Site Status: Live</div>
                        <div className="text-sm text-green-700">Last deployed: 5 min ago</div>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">Ready</Badge>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Loader className="w-5 h-5 text-yellow-600 animate-spin" />
                    <div className="flex-1">
                      <div className="font-semibold text-yellow-900">Building...</div>
                      <div className="text-sm text-yellow-700">Deploying changes to production</div>
                    </div>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div
                      className="bg-yellow-600 h-2 rounded-full transition-all"
                      style={{ width: '68%' }}
                    />
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <div>
                        <div className="font-semibold text-red-900">Deploy failed</div>
                        <div className="text-sm text-red-700">
                          Build error in sitemap generation
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-300">
                        View Log
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Retry
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 6: ERROR HANDLING */}
        {activeSection === 'errors' && (
          <div className="space-y-8">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Network Error State</h2>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-red-900 text-lg mb-2">Connection Lost</h3>
                    <p className="text-red-700 mb-4">
                      Your work is saved locally. We'll sync when connection is restored.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Retry Connection
                      </Button>
                      <div className="text-sm text-red-600">Auto-retry in 30s...</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Validation Errors</h2>

              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-2">Fix 3 errors to continue</h3>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• Title is required</li>
                        <li>• Featured image must be uploaded</li>
                        <li>• Meta description cannot be empty</li>
                      </ul>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-red-600 text-red-600">
                    Scroll to First Error
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title *
                    </label>
                    <Input className="border-red-600 focus:ring-red-600" />
                    <div className="flex items-center space-x-1 mt-1 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>This field is required</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Publish Failure</h2>

              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-900 text-lg">Failed to Publish</h3>
                      <p className="text-sm text-red-700 mt-1">
                        Unable to connect to server. Please check your internet connection.
                      </p>
                    </div>
                  </div>

                  <details className="mb-4">
                    <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                      Error details
                    </summary>
                    <div className="mt-2 text-xs bg-gray-100 p-3 rounded font-mono text-gray-600">
                      Network Error: ERR_CONNECTION_REFUSED
                    </div>
                  </details>

                  <div className="flex items-center space-x-3">
                    <Button className="flex-1 bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                      Try Again
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300">
                      Save as Draft
                    </Button>
                  </div>

                  <button className="text-sm text-[#00B4D8] hover:underline mt-3 w-full text-center">
                    Contact Support
                  </button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 7: CONFIRMATIONS */}
        {activeSection === 'confirmations' && (
          <div className="space-y-8">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Delete Confirmation Patterns
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Click Again to Confirm
                  </div>
                  <div className="flex items-center space-x-4">
                    {deleteState === 'default' ? (
                      <Button
                        variant="outline"
                        className="border-red-600 text-red-600"
                        onClick={() => setDeleteState('confirm')}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    ) : (
                      <Button
                        className="bg-red-600 text-white"
                        onClick={() => setDeleteState('default')}
                      >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Click Again to Confirm
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Modal Confirmation</div>
                  <div className="max-w-md bg-white rounded-lg shadow-xl p-6 border-2 border-dashed border-gray-300">
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                      Delete "SEO Best Practices 2025"?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      This action cannot be undone. This will permanently delete the blog post.
                    </p>
                    <div className="flex items-center justify-end space-x-3">
                      <Button variant="outline" className="border-gray-300">
                        Cancel
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Permanently
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Type to Confirm (Critical)
                  </div>
                  <div className="max-w-md bg-white rounded-lg shadow-xl p-6 border-2 border-dashed border-gray-300">
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                      Delete All Client Data?
                    </h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-red-700">
                          This will permanently delete all client data, reports, and analytics. This
                          cannot be undone.
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type <code className="bg-gray-200 px-2 py-0.5 rounded">DELETE</code> to
                        confirm:
                      </label>
                      <Input placeholder="Type DELETE here..." />
                    </div>
                    <div className="flex items-center justify-end space-x-3">
                      <Button variant="outline" className="border-gray-300">
                        Cancel
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700 text-white" disabled>
                        Delete Everything
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Publish Confirmation</h2>

              <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6 border-2 border-dashed border-gray-300">
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Ready to Publish?</h3>

                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=200&fit=crop"
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />

                <div className="space-y-2 mb-6">
                  {[
                    { label: 'Title is set', checked: true },
                    { label: 'Featured image uploaded', checked: true },
                    { label: 'Meta description filled', checked: true },
                    { label: 'Category selected', checked: true },
                    { label: 'SEO score: 92/100', checked: true, isWarning: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle
                        className={`w-4 h-4 ${item.isWarning ? 'text-yellow-600' : 'text-green-600'}`}
                      />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end space-x-3">
                  <Button variant="outline" className="border-gray-300">
                    Cancel
                  </Button>
                  <Button className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Publish Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Unsaved Changes Warning</h2>

              <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 border-2 border-dashed border-gray-300">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-900 text-lg mb-1">Unsaved Changes</h3>
                    <p className="text-sm text-yellow-700">
                      You have unsaved changes. Are you sure you want to leave?
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-[#00B4D8] hover:bg-[#0096b8] text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save & Leave
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                  >
                    Leave Without Saving
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300">
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* SECTION 8: COLLABORATION */}
        {activeSection === 'collaboration' && (
          <div className="space-y-8">
            <Card className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                Real-Time Collaboration Indicators
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Currently Being Edited Banner
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">JS</span>
                        </div>
                        <div>
                          <div className="font-semibold text-yellow-900">
                            Jane Smith is editing this post
                          </div>
                          <div className="text-sm text-yellow-700">Last active: 30 seconds ago</div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-600 text-yellow-700"
                      >
                        View Only
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Locked Content</div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Content Locked</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      This content is currently locked by John Doe
                    </p>
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Request Access
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Activity Feed</div>
                  <div className="border border-gray-200 rounded-lg divide-y">
                    {[
                      {
                        user: 'Jane Smith',
                        action: 'published a blog post',
                        time: '2 min ago',
                        avatar: 'JS',
                      },
                      {
                        user: 'John Doe',
                        action: 'updated client profile',
                        time: '15 min ago',
                        avatar: 'JD',
                      },
                      {
                        user: 'Sarah Wilson',
                        action: 'created new page',
                        time: '1 hour ago',
                        avatar: 'SW',
                      },
                    ].map((activity, i) => (
                      <div key={i} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-semibold">
                              {activity.avatar}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">
                              <span className="font-semibold">{activity.user}</span>{' '}
                              {activity.action}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Team Members Online
                  </div>
                  <div className="flex items-center space-x-3">
                    {['JD', 'JS', 'SW', 'MB'].map((initials, i) => (
                      <div key={i} className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00B4D8] to-[#FF6B35] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">{initials}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                    ))}
                    <div className="text-sm text-gray-600 ml-2">+3 more online</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '50%' }}
            animate={{ opacity: 1, y: 0, x: '50%' }}
            exit={{ opacity: 0, y: -50, x: '50%' }}
            className="fixed top-4 left-1/2 z-50"
          >
            <div
              className={`${toastType === 'success'
                  ? 'bg-green-50 border-green-200'
                  : toastType === 'error'
                    ? 'bg-red-50 border-red-200'
                    : toastType === 'warning'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-blue-50 border-blue-200'
                } border rounded-lg p-4 shadow-2xl min-w-[320px]`}
            >
              <div className="flex items-start space-x-3">
                {toastType === 'success' && (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
                {toastType === 'error' && (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                {toastType === 'warning' && (
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                )}
                {toastType === 'info' && <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                <div className="flex-1">
                  <div
                    className={`font-semibold ${toastType === 'success'
                        ? 'text-green-900'
                        : toastType === 'error'
                          ? 'text-red-900'
                          : toastType === 'warning'
                            ? 'text-yellow-900'
                            : 'text-blue-900'
                      }`}
                  >
                    {toastType === 'success' && 'Success!'}
                    {toastType === 'error' && 'Error'}
                    {toastType === 'warning' && 'Warning'}
                    {toastType === 'info' && 'Info'}
                  </div>
                  <div
                    className={`text-sm mt-1 ${toastType === 'success'
                        ? 'text-green-700'
                        : toastType === 'error'
                          ? 'text-red-700'
                          : toastType === 'warning'
                            ? 'text-yellow-700'
                            : 'text-blue-700'
                      }`}
                  >
                    {toastType === 'success' && 'Blog post published successfully!'}
                    {toastType === 'error' && 'Failed to save. Please try again.'}
                    {toastType === 'warning' && 'You have unsaved changes.'}
                    {toastType === 'info' && 'Your report is being generated...'}
                  </div>
                </div>
                <button
                  onClick={() => setShowToast(false)}
                  className={`${toastType === 'success'
                      ? 'text-green-600 hover:text-green-800'
                      : toastType === 'error'
                        ? 'text-red-600 hover:text-red-800'
                        : toastType === 'warning'
                          ? 'text-yellow-600 hover:text-yellow-800'
                          : 'text-blue-600 hover:text-blue-800'
                    }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
