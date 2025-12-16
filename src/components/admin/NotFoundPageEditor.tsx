import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Eye,
  Save,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  ZoomIn,
  ZoomOut,
  Type,
  Palette,
  Link as LinkIcon,
  Phone,
  Mail,
  MessageCircle,
  Home,
  Briefcase,
  Info,
  Send,
  FileText,
  DollarSign,
  Search,
  Gamepad2,
  Plus,
  Trash2,
  ChevronDown,
  GripVertical,
  Settings,
  Sparkles,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Clock,
  Check,
  X,
  ExternalLink,
  ArrowLeft,
  Play,
  Upload,
  Code,
  Layers,
  Grid,
  Waves,
  Circle
} from 'lucide-react';

type TabType = 'content' | 'interactive' | 'navigation' | 'contact' | 'design';
type DeviceType = 'desktop' | 'tablet' | 'mobile';
type ZoomLevel = 50 | 75 | 100;

interface QuickLink {
  id: string;
  icon: string;
  text: string;
  url: string;
}

interface PageSettings {
  // Content
  show404Text: boolean;
  text404Style: 'gradient' | 'solid' | 'outlined' | 'glitch' | 'pulse';
  text404Size: number;
  text404Animation: 'none' | 'pulse' | 'float' | 'bounce';
  headline: string;
  headlineSize: number;
  headlineColor: string;
  headlineAlign: 'left' | 'center' | 'right';
  subtext: string;
  subtextSize: number;
  subtextColor: string;
  customMessage: string;
  showCustomMessage: boolean;
  
  // Interactive
  enablePongGame: boolean;
  pongGameTitle: string;
  pongBallColor: string;
  pongPaddleColor: string;
  pongBgColor: string;
  pongSpeed: 'slow' | 'normal' | 'fast';
  pongWinningScore: 3 | 5 | 10;
  pongShowInstructions: boolean;
  alternativeGame: 'none' | 'snake' | 'memory' | 'whack' | 'typing';
  enableSearchBar: boolean;
  searchPlaceholder: string;
  enableEasterEgg: boolean;
  easterEggMessage: string;
  
  // Navigation
  enableQuickLinks: boolean;
  quickLinksTitle: string;
  numberOfLinks: 3 | 4 | 6;
  quickLinks: QuickLink[];
  showPrimaryButton: boolean;
  primaryButtonText: string;
  primaryButtonUrl: string;
  showSecondaryButton: boolean;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  showGoBackButton: boolean;
  goBackButtonText: string;
  
  // Contact
  showContactSection: boolean;
  contactSectionTitle: string;
  showPhone: boolean;
  phoneNumber: string;
  phoneClickToCall: boolean;
  showEmail: boolean;
  emailAddress: string;
  emailMailto: boolean;
  showLiveChat: boolean;
  
  // Design
  backgroundType: 'solid' | 'gradient' | 'image' | 'pattern';
  solidColor: string;
  gradientColor1: string;
  gradientColor2: string;
  gradientDirection: string;
  backgroundImage: string;
  imageOverlayOpacity: number;
  pattern: 'dots' | 'grid' | 'waves' | 'none';
  useBrandColors: boolean;
  primaryColorOverride: string;
  accentColorOverride: string;
  textColor: string;
  linkColor: string;
  contentAlignment: 'left' | 'center' | 'right';
  contentMaxWidth: number;
  verticalCentering: boolean;
  pageLoadAnimation: 'none' | 'fade' | 'slide' | 'scale';
}

export default function NotFoundPageEditor() {
  const [activeTab, setActiveTab] = useState<TabType>('content');
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(100);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState('December 9, 2024 at 2:30 PM');

  const [settings, setSettings] = useState<PageSettings>({
    // Content defaults
    show404Text: true,
    text404Style: 'gradient',
    text404Size: 120,
    text404Animation: 'float',
    headline: "Oops! Page Not Found",
    headlineSize: 48,
    headlineColor: '#1E3A5F',
    headlineAlign: 'center',
    subtext: "The page you're looking for might have been moved, deleted, or never existed. Let's get you back on track.",
    subtextSize: 18,
    subtextColor: '#6B7280',
    customMessage: '',
    showCustomMessage: false,
    
    // Interactive defaults
    enablePongGame: true,
    pongGameTitle: 'Play Pong while you wait!',
    pongBallColor: '#00B4D8',
    pongPaddleColor: '#FFFFFF',
    pongBgColor: '#1E3A5F',
    pongSpeed: 'normal',
    pongWinningScore: 5,
    pongShowInstructions: true,
    alternativeGame: 'none',
    enableSearchBar: true,
    searchPlaceholder: 'Search our site...',
    enableEasterEgg: false,
    easterEggMessage: '🎉 You found the secret!',
    
    // Navigation defaults
    enableQuickLinks: true,
    quickLinksTitle: 'Popular Pages',
    numberOfLinks: 4,
    quickLinks: [
      { id: '1', icon: 'Home', text: 'Home', url: '/' },
      { id: '2', icon: 'Briefcase', text: 'Our Services', url: '/services' },
      { id: '3', icon: 'Info', text: 'About Us', url: '/about' },
      { id: '4', icon: 'Send', text: 'Contact Us', url: '/contact' },
    ],
    showPrimaryButton: true,
    primaryButtonText: 'Go Home',
    primaryButtonUrl: '/',
    showSecondaryButton: true,
    secondaryButtonText: 'Contact Us',
    secondaryButtonUrl: '/contact',
    showGoBackButton: true,
    goBackButtonText: 'Go Back',
    
    // Contact defaults
    showContactSection: true,
    contactSectionTitle: 'Need Help?',
    showPhone: true,
    phoneNumber: '(940) 315-1023',
    phoneClickToCall: true,
    showEmail: true,
    emailAddress: 'info@thinkments.com',
    emailMailto: true,
    showLiveChat: false,
    
    // Design defaults
    backgroundType: 'gradient',
    solidColor: '#F8F9FA',
    gradientColor1: '#1E3A5F',
    gradientColor2: '#00B4D8',
    gradientDirection: 'to bottom right',
    backgroundImage: '',
    imageOverlayOpacity: 60,
    pattern: 'none',
    useBrandColors: true,
    primaryColorOverride: '#1E3A5F',
    accentColorOverride: '#00B4D8',
    textColor: '#1F2937',
    linkColor: '#00B4D8',
    contentAlignment: 'center',
    contentMaxWidth: 800,
    verticalCentering: true,
    pageLoadAnimation: 'fade',
  });

  const updateSetting = (key: keyof PageSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    // Save settings logic here
    setHasUnsavedChanges(false);
    setLastSaved(new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }));
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset to default settings? This cannot be undone.')) {
      // Reset to defaults
      setHasUnsavedChanges(false);
    }
  };

  const handlePreview = () => {
    window.open('/404', '_blank');
  };

  const getDeviceWidth = () => {
    switch (deviceType) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'desktop': return '100%';
    }
  };

  const getZoomScale = () => {
    return zoomLevel / 100;
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">404 Page Editor</h1>
            <p className="text-gray-600">Customize your error page to keep visitors engaged</p>
            {lastSaved && (
              <p className="text-sm text-gray-500 mt-1 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Last saved: {lastSaved}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Default
            </Button>
            <Button
              variant="outline"
              onClick={handlePreview}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              onClick={handleSave}
              disabled={!hasUnsavedChanges}
              className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {hasUnsavedChanges && (
          <Card className="border-0 shadow-md bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-amber-600" />
                <p className="text-sm text-amber-900">You have unsaved changes</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Panel - Left 2/3 */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'content', label: 'Content & Messaging', icon: Type },
              { id: 'interactive', label: 'Interactive Features', icon: Gamepad2 },
              { id: 'navigation', label: 'Navigation & Links', icon: LinkIcon },
              { id: 'contact', label: 'Contact Information', icon: Phone },
              { id: 'design', label: 'Design & Styling', icon: Palette },
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
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {/* Content & Messaging Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                {/* Error Code Display */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Error Code Display</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-900">Show &quot;404&quot; text</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.show404Text}
                          onChange={(e) => updateSetting('show404Text', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>

                    {settings.show404Text && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">404 Text Style</label>
                          <select
                            value={settings.text404Style}
                            onChange={(e) => updateSetting('text404Style', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          >
                            <option value="gradient">Gradient (brand colors)</option>
                            <option value="solid">Solid color</option>
                            <option value="outlined">Outlined</option>
                            <option value="glitch">Glitch effect</option>
                            <option value="pulse">Animated pulse</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Font Size: {settings.text404Size}px
                          </label>
                          <input
                            type="range"
                            min="80"
                            max="200"
                            value={settings.text404Size}
                            onChange={(e) => updateSetting('text404Size', parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Animation</label>
                          <select
                            value={settings.text404Animation}
                            onChange={(e) => updateSetting('text404Animation', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          >
                            <option value="none">None</option>
                            <option value="pulse">Pulse</option>
                            <option value="float">Float</option>
                            <option value="bounce">Bounce</option>
                          </select>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Headline */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Headline</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Headline Text</label>
                      <input
                        type="text"
                        value={settings.headline}
                        onChange={(e) => updateSetting('headline', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Font Size: {settings.headlineSize}px
                      </label>
                      <input
                        type="range"
                        min="24"
                        max="72"
                        value={settings.headlineSize}
                        onChange={(e) => updateSetting('headlineSize', parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          value={settings.headlineColor}
                          onChange={(e) => updateSetting('headlineColor', e.target.value)}
                          className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={settings.headlineColor}
                          onChange={(e) => updateSetting('headlineColor', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Alignment</label>
                      <div className="flex space-x-2">
                        {[
                          { value: 'left', icon: AlignLeft },
                          { value: 'center', icon: AlignCenter },
                          { value: 'right', icon: AlignRight },
                        ].map((align) => (
                          <button
                            key={align.value}
                            onClick={() => updateSetting('headlineAlign', align.value)}
                            className={`flex-1 p-3 border-2 rounded-lg flex items-center justify-center ${
                              settings.headlineAlign === align.value
                                ? 'border-[#00B4D8] bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <align.icon className="w-5 h-5" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Subtext */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Subtext</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Subtext</label>
                      <textarea
                        value={settings.subtext}
                        onChange={(e) => updateSetting('subtext', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Font Size: {settings.subtextSize}px
                      </label>
                      <input
                        type="range"
                        min="14"
                        max="24"
                        value={settings.subtextSize}
                        onChange={(e) => updateSetting('subtextSize', parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="color"
                          value={settings.subtextColor}
                          onChange={(e) => updateSetting('subtextColor', e.target.value)}
                          className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={settings.subtextColor}
                          onChange={(e) => updateSetting('subtextColor', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Custom Message */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Custom Message (Optional)</CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.showCustomMessage}
                          onChange={(e) => updateSetting('showCustomMessage', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.showCustomMessage && (
                    <CardContent>
                      <textarea
                        value={settings.customMessage}
                        onChange={(e) => updateSetting('customMessage', e.target.value)}
                        placeholder="Add a personal touch, joke, or game invitation..."
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Example: &quot;While you&apos;re here, why not play a game?&quot;
                      </p>
                    </CardContent>
                  )}
                </Card>
              </div>
            )}

            {/* Interactive Features Tab */}
            {activeTab === 'interactive' && (
              <div className="space-y-6">
                {/* Pong Game */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Gamepad2 className="w-5 h-5 mr-2 text-[#00B4D8]" />
                        Pong Game
                      </CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.enablePongGame}
                          onChange={(e) => updateSetting('enablePongGame', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.enablePongGame && (
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Game Title</label>
                        <input
                          type="text"
                          value={settings.pongGameTitle}
                          onChange={(e) => updateSetting('pongGameTitle', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Ball Color</label>
                          <input
                            type="color"
                            value={settings.pongBallColor}
                            onChange={(e) => updateSetting('pongBallColor', e.target.value)}
                            className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Paddle Color</label>
                          <input
                            type="color"
                            value={settings.pongPaddleColor}
                            onChange={(e) => updateSetting('pongPaddleColor', e.target.value)}
                            className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Background</label>
                          <input
                            type="color"
                            value={settings.pongBgColor}
                            onChange={(e) => updateSetting('pongBgColor', e.target.value)}
                            className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Game Speed</label>
                        <select
                          value={settings.pongSpeed}
                          onChange={(e) => updateSetting('pongSpeed', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="slow">Slow</option>
                          <option value="normal">Normal</option>
                          <option value="fast">Fast</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Winning Score</label>
                        <select
                          value={settings.pongWinningScore}
                          onChange={(e) => updateSetting('pongWinningScore', parseInt(e.target.value) as any)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="3">3 points</option>
                          <option value="5">5 points</option>
                          <option value="10">10 points</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-900">Show Instructions</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.pongShowInstructions}
                            onChange={(e) => updateSetting('pongShowInstructions', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                        </label>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Alternative Games */}
                {!settings.enablePongGame && (
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">Alternative Games</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Select Game</label>
                      <select
                        value={settings.alternativeGame}
                        onChange={(e) => updateSetting('alternativeGame', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="none">None</option>
                        <option value="snake">Snake</option>
                        <option value="memory">Memory Match</option>
                        <option value="whack">Whack-a-Mole</option>
                        <option value="typing">Typing Test</option>
                      </select>
                    </CardContent>
                  </Card>
                )}

                {/* Search Bar */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Search className="w-5 h-5 mr-2 text-[#00B4D8]" />
                        Search Bar
                      </CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.enableSearchBar}
                          onChange={(e) => updateSetting('enableSearchBar', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.enableSearchBar && (
                    <CardContent>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Search Placeholder</label>
                      <input
                        type="text"
                        value={settings.searchPlaceholder}
                        onChange={(e) => updateSetting('searchPlaceholder', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </CardContent>
                  )}
                </Card>

                {/* Easter Egg */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-[#FF6B35]" />
                        Easter Egg (Konami Code)
                      </CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.enableEasterEgg}
                          onChange={(e) => updateSetting('enableEasterEgg', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.enableEasterEgg && (
                    <CardContent>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Hidden Message</label>
                      <input
                        type="text"
                        value={settings.easterEggMessage}
                        onChange={(e) => updateSetting('easterEggMessage', e.target.value)}
                        placeholder="🎉 You found the secret!"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Revealed when user enters: ↑ ↑ ↓ ↓ ← → ← → B A
                      </p>
                    </CardContent>
                  )}
                </Card>
              </div>
            )}

            {/* Navigation & Links Tab */}
            {activeTab === 'navigation' && (
              <div className="space-y-6">
                {/* Quick Links */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Quick Links</CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.enableQuickLinks}
                          onChange={(e) => updateSetting('enableQuickLinks', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.enableQuickLinks && (
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Section Title</label>
                        <input
                          type="text"
                          value={settings.quickLinksTitle}
                          onChange={(e) => updateSetting('quickLinksTitle', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Number of Links to Show</label>
                        <select
                          value={settings.numberOfLinks}
                          onChange={(e) => updateSetting('numberOfLinks', parseInt(e.target.value) as any)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="3">3 links</option>
                          <option value="4">4 links</option>
                          <option value="6">6 links</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-3">Link Items (drag to reorder)</label>
                        <div className="space-y-2">
                          {settings.quickLinks.slice(0, settings.numberOfLinks).map((link, idx) => (
                            <div key={link.id} className="border-2 border-gray-200 rounded-lg p-3 hover:border-gray-300">
                              <div className="flex items-center space-x-2 mb-2">
                                <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                                <input
                                  type="text"
                                  value={link.text}
                                  onChange={(e) => {
                                    const newLinks = [...settings.quickLinks];
                                    newLinks[idx].text = e.target.value;
                                    updateSetting('quickLinks', newLinks);
                                  }}
                                  placeholder="Link text"
                                  className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                                />
                                <input
                                  type="text"
                                  value={link.url}
                                  onChange={(e) => {
                                    const newLinks = [...settings.quickLinks];
                                    newLinks[idx].url = e.target.value;
                                    updateSetting('quickLinks', newLinks);
                                  }}
                                  placeholder="URL"
                                  className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded font-mono"
                                />
                                <Button size="sm" variant="ghost" className="text-red-600">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        {settings.quickLinks.length < 8 && (
                          <Button className="w-full mt-3" variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Link
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* CTA Buttons */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Call-to-Action Buttons</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Primary Button */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-medium text-gray-900">Primary Button</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.showPrimaryButton}
                            onChange={(e) => updateSetting('showPrimaryButton', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                        </label>
                      </div>
                      {settings.showPrimaryButton && (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={settings.primaryButtonText}
                            onChange={(e) => updateSetting('primaryButtonText', e.target.value)}
                            placeholder="Button text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                          <input
                            type="text"
                            value={settings.primaryButtonUrl}
                            onChange={(e) => updateSetting('primaryButtonUrl', e.target.value)}
                            placeholder="URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                          />
                        </div>
                      )}
                    </div>

                    {/* Secondary Button */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-medium text-gray-900">Secondary Button</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.showSecondaryButton}
                            onChange={(e) => updateSetting('showSecondaryButton', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                        </label>
                      </div>
                      {settings.showSecondaryButton && (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={settings.secondaryButtonText}
                            onChange={(e) => updateSetting('secondaryButtonText', e.target.value)}
                            placeholder="Button text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                          <input
                            type="text"
                            value={settings.secondaryButtonUrl}
                            onChange={(e) => updateSetting('secondaryButtonUrl', e.target.value)}
                            placeholder="URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Go Back Button */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Go Back Button</CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.showGoBackButton}
                          onChange={(e) => updateSetting('showGoBackButton', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.showGoBackButton && (
                    <CardContent>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Button Text</label>
                      <input
                        type="text"
                        value={settings.goBackButtonText}
                        onChange={(e) => updateSetting('goBackButtonText', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </CardContent>
                  )}
                </Card>
              </div>
            )}

            {/* Contact Information Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Contact Section</CardTitle>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.showContactSection}
                          onChange={(e) => updateSetting('showContactSection', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardHeader>
                  {settings.showContactSection && (
                    <CardContent className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Section Title</label>
                        <input
                          type="text"
                          value={settings.contactSectionTitle}
                          onChange={(e) => updateSetting('contactSectionTitle', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      {/* Phone */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm font-medium text-gray-900 flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-[#00B4D8]" />
                            Phone Number
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.showPhone}
                              onChange={(e) => updateSetting('showPhone', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                          </label>
                        </div>
                        {settings.showPhone && (
                          <div className="space-y-2">
                            <input
                              type="text"
                              value={settings.phoneNumber}
                              onChange={(e) => updateSetting('phoneNumber', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                            <label className="flex items-center space-x-2 text-sm">
                              <input
                                type="checkbox"
                                checked={settings.phoneClickToCall}
                                onChange={(e) => updateSetting('phoneClickToCall', e.target.checked)}
                                className="w-4 h-4 text-[#00B4D8] rounded"
                              />
                              <span className="text-gray-700">Enable click-to-call</span>
                            </label>
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm font-medium text-gray-900 flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-[#00B4D8]" />
                            Email Address
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.showEmail}
                              onChange={(e) => updateSetting('showEmail', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                          </label>
                        </div>
                        {settings.showEmail && (
                          <div className="space-y-2">
                            <input
                              type="email"
                              value={settings.emailAddress}
                              onChange={(e) => updateSetting('emailAddress', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                            <label className="flex items-center space-x-2 text-sm">
                              <input
                                type="checkbox"
                                checked={settings.emailMailto}
                                onChange={(e) => updateSetting('emailMailto', e.target.checked)}
                                className="w-4 h-4 text-[#00B4D8] rounded"
                              />
                              <span className="text-gray-700">Enable mailto link</span>
                            </label>
                          </div>
                        )}
                      </div>

                      {/* Live Chat */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-900 flex items-center">
                            <MessageCircle className="w-4 h-4 mr-2 text-[#00B4D8]" />
                            Live Chat Button
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.showLiveChat}
                              onChange={(e) => updateSetting('showLiveChat', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            )}

            {/* Design & Styling Tab */}
            {activeTab === 'design' && (
              <div className="space-y-6">
                {/* Background */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Background</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Background Type</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { value: 'solid', icon: Circle, label: 'Solid' },
                          { value: 'gradient', icon: Layers, label: 'Gradient' },
                          { value: 'image', icon: ImageIcon, label: 'Image' },
                          { value: 'pattern', icon: Grid, label: 'Pattern' },
                        ].map((type) => (
                          <button
                            key={type.value}
                            onClick={() => updateSetting('backgroundType', type.value)}
                            className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center space-y-1 ${
                              settings.backgroundType === type.value
                                ? 'border-[#00B4D8] bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <type.icon className="w-5 h-5" />
                            <span className="text-xs">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {settings.backgroundType === 'solid' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="color"
                            value={settings.solidColor}
                            onChange={(e) => updateSetting('solidColor', e.target.value)}
                            className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                          />
                          <input
                            type="text"
                            value={settings.solidColor}
                            onChange={(e) => updateSetting('solidColor', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                          />
                        </div>
                      </div>
                    )}

                    {settings.backgroundType === 'gradient' && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Color 1</label>
                            <input
                              type="color"
                              value={settings.gradientColor1}
                              onChange={(e) => updateSetting('gradientColor1', e.target.value)}
                              className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Color 2</label>
                            <input
                              type="color"
                              value={settings.gradientColor2}
                              onChange={(e) => updateSetting('gradientColor2', e.target.value)}
                              className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Direction</label>
                          <select
                            value={settings.gradientDirection}
                            onChange={(e) => updateSetting('gradientDirection', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          >
                            <option value="to bottom">Top to Bottom</option>
                            <option value="to right">Left to Right</option>
                            <option value="to bottom right">Diagonal ↘</option>
                            <option value="to bottom left">Diagonal ↙</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {settings.backgroundType === 'image' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Image URL</label>
                          <input
                            type="text"
                            value={settings.backgroundImage}
                            onChange={(e) => updateSetting('backgroundImage', e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">
                            Overlay Opacity: {settings.imageOverlayOpacity}%
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={settings.imageOverlayOpacity}
                            onChange={(e) => updateSetting('imageOverlayOpacity', parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </div>
                    )}

                    {settings.backgroundType === 'pattern' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Pattern</label>
                        <select
                          value={settings.pattern}
                          onChange={(e) => updateSetting('pattern', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="none">None</option>
                          <option value="dots">Dots</option>
                          <option value="grid">Grid</option>
                          <option value="waves">Waves</option>
                        </select>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Color Scheme */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Color Scheme</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-900">Use Brand Colors</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.useBrandColors}
                          onChange={(e) => updateSetting('useBrandColors', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>

                    {!settings.useBrandColors && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Primary Color</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={settings.primaryColorOverride}
                              onChange={(e) => updateSetting('primaryColorOverride', e.target.value)}
                              className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                            />
                            <input
                              type="text"
                              value={settings.primaryColorOverride}
                              onChange={(e) => updateSetting('primaryColorOverride', e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Accent Color</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="color"
                              value={settings.accentColorOverride}
                              onChange={(e) => updateSetting('accentColorOverride', e.target.value)}
                              className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                            />
                            <input
                              type="text"
                              value={settings.accentColorOverride}
                              onChange={(e) => updateSetting('accentColorOverride', e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Layout */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Layout</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Content Alignment</label>
                      <div className="flex space-x-2">
                        {[
                          { value: 'left', icon: AlignLeft },
                          { value: 'center', icon: AlignCenter },
                          { value: 'right', icon: AlignRight },
                        ].map((align) => (
                          <button
                            key={align.value}
                            onClick={() => updateSetting('contentAlignment', align.value)}
                            className={`flex-1 p-3 border-2 rounded-lg flex items-center justify-center ${
                              settings.contentAlignment === align.value
                                ? 'border-[#00B4D8] bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <align.icon className="w-5 h-5" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Content Max Width: {settings.contentMaxWidth}px
                      </label>
                      <input
                        type="range"
                        min="600"
                        max="1200"
                        step="50"
                        value={settings.contentMaxWidth}
                        onChange={(e) => updateSetting('contentMaxWidth', parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-900">Vertical Centering</label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.verticalCentering}
                          onChange={(e) => updateSetting('verticalCentering', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00B4D8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00B4D8]"></div>
                      </label>
                    </div>
                  </CardContent>
                </Card>

                {/* Animations */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Animations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Page Load Animation</label>
                      <select
                        value={settings.pageLoadAnimation}
                        onChange={(e) => updateSetting('pageLoadAnimation', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="none">None</option>
                        <option value="fade">Fade In</option>
                        <option value="slide">Slide Up</option>
                        <option value="scale">Scale</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Panel - Right 1/3 */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-6">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-lg">Live Preview</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25) as ZoomLevel)}>
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-gray-600">{zoomLevel}%</span>
                  <Button size="sm" variant="ghost" onClick={() => setZoomLevel(Math.min(100, zoomLevel + 25) as ZoomLevel)}>
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                {[
                  { type: 'desktop', icon: Monitor },
                  { type: 'tablet', icon: Tablet },
                  { type: 'mobile', icon: Smartphone },
                ].map((device) => (
                  <button
                    key={device.type}
                    onClick={() => setDeviceType(device.type as DeviceType)}
                    className={`flex-1 p-2 border-2 rounded-lg flex items-center justify-center ${
                      deviceType === device.type
                        ? 'border-[#00B4D8] bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <device.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100"
                style={{
                  transform: `scale(${getZoomScale()})`,
                  transformOrigin: 'top center',
                  height: deviceType === 'mobile' ? '667px' : '500px'
                }}
              >
                <div 
                  className="bg-white h-full overflow-auto"
                  style={{
                    width: getDeviceWidth(),
                    margin: '0 auto',
                    background: settings.backgroundType === 'gradient' 
                      ? `linear-gradient(${settings.gradientDirection}, ${settings.gradientColor1}, ${settings.gradientColor2})`
                      : settings.solidColor
                  }}
                >
                  <div className={`h-full flex ${settings.verticalCentering ? 'items-center' : 'items-start pt-20'} justify-center p-8`}>
                    <div style={{ maxWidth: `${settings.contentMaxWidth}px`, textAlign: settings.contentAlignment }}>
                      {/* 404 Text */}
                      {settings.show404Text && (
                        <div 
                          className="mb-4"
                          style={{
                            fontSize: `${settings.text404Size}px`,
                            fontWeight: 'bold',
                            background: settings.text404Style === 'gradient' 
                              ? 'linear-gradient(to right, #1E3A5F, #00B4D8)'
                              : settings.text404Style === 'solid'
                              ? settings.primaryColorOverride
                              : 'transparent',
                            WebkitBackgroundClip: settings.text404Style === 'gradient' ? 'text' : 'unset',
                            WebkitTextFillColor: settings.text404Style === 'gradient' ? 'transparent' : 'inherit',
                            color: settings.text404Style === 'outlined' ? 'transparent' : settings.primaryColorOverride,
                            WebkitTextStroke: settings.text404Style === 'outlined' ? `2px ${settings.primaryColorOverride}` : 'none'
                          }}
                        >
                          404
                        </div>
                      )}

                      {/* Headline */}
                      <h1 
                        className="font-bold mb-4"
                        style={{
                          fontSize: `${settings.headlineSize}px`,
                          color: settings.headlineColor
                        }}
                      >
                        {settings.headline}
                      </h1>

                      {/* Subtext */}
                      <p 
                        className="mb-6"
                        style={{
                          fontSize: `${settings.subtextSize}px`,
                          color: settings.subtextColor
                        }}
                      >
                        {settings.subtext}
                      </p>

                      {/* Search Bar */}
                      {settings.enableSearchBar && (
                        <div className="mb-6">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              placeholder={settings.searchPlaceholder}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                            />
                          </div>
                        </div>
                      )}

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {settings.showPrimaryButton && (
                          <button 
                            className="px-6 py-2 rounded-lg text-white text-sm font-medium"
                            style={{ background: settings.accentColorOverride }}
                          >
                            {settings.primaryButtonText}
                          </button>
                        )}
                        {settings.showSecondaryButton && (
                          <button 
                            className="px-6 py-2 rounded-lg text-sm font-medium border-2"
                            style={{ 
                              borderColor: settings.accentColorOverride,
                              color: settings.accentColorOverride
                            }}
                          >
                            {settings.secondaryButtonText}
                          </button>
                        )}
                      </div>

                      {/* Quick Links */}
                      {settings.enableQuickLinks && (
                        <div className="mb-6">
                          <h3 className="font-semibold mb-3 text-sm">{settings.quickLinksTitle}</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {settings.quickLinks.slice(0, settings.numberOfLinks).map((link) => (
                              <a 
                                key={link.id}
                                href={link.url}
                                className="text-sm hover:underline"
                                style={{ color: settings.linkColor }}
                              >
                                {link.text}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Contact */}
                      {settings.showContactSection && (
                        <div className="text-sm">
                          <p className="font-semibold mb-2">{settings.contactSectionTitle}</p>
                          {settings.showPhone && (
                            <p className="mb-1" style={{ color: settings.linkColor }}>{settings.phoneNumber}</p>
                          )}
                          {settings.showEmail && (
                            <p style={{ color: settings.linkColor }}>{settings.emailAddress}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
