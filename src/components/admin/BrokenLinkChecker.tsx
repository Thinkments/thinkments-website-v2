import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Link as LinkIcon,
  AlertCircle,
  CheckCircle,
  Search,
  Download,
  RefreshCw,
  ExternalLink,
  Edit3,
  Eye,
  Zap,
  History,
  Clock,
  BarChart3,
  Globe,
  TrendingUp,
  Network,
  Mail,
  Settings,
  Upload,
  Target,
  Sparkles,
  ArrowLeft,
  FileText,
  Activity,
  ArrowRight,
  Users,
  Plus,
  Check,
  Info,
  Calendar,
  PlayCircle,
  StopCircle,
  Loader2,
  ArrowDownUp,
  MapPin,
  MousePointerClick,
  Repeat,
  ShieldAlert,
  Bug,
  CloudOff,
  Maximize2,
  Minimize2,
  FileDown,
  Workflow,
  ClipboardList,
  Archive,
} from 'lucide-react';

type TabType =
  | 'overview'
  | 'broken-internal'
  | 'redirect-chains'
  | 'external-broken'
  | 'orphans'
  | 'all-redirects'
  | 'slow-links'
  | 'gsc-issues'
  | 'ahrefs-imports'
  | 'link-opportunities'
  | 'anchor-text'
  | 'competitor'
  | 'monitoring'
  | 'history'
  | 'fix-queue'
  | 'reports';
type ViewType = 'list' | 'details' | 'ai-generate' | 'recovery';
type SourceType = 'scan' | 'ahrefs' | 'gsc';
type WizardStep = 1 | 2 | 3 | 4;

interface BrokenLink {
  id: string;
  sourceUrl: string;
  brokenUrl: string;
  linkText: string;
  statusCode: number;
  responseTime: number;
  firstFound: string;
  lastChecked: string;
  priority: 'high' | 'medium' | 'low';
  type: 'internal' | 'external';
  source: SourceType;
  referringDomains?: number;
  suggestedFix?: string;
  assignedTo?: string;
  dueDate?: string;
  queueStatus?: 'todo' | 'in-progress' | 'done';
}

interface RedirectChain {
  id: string;
  originalUrl: string;
  redirectPath: string[];
  finalUrl: string;
  hops: number;
}

interface OrphanPage {
  id: string;
  url: string;
  createdDate: string;
  indexed: boolean;
  suggestedLinksFrom: string[];
}

interface Redirect {
  id: string;
  fromUrl: string;
  toUrl: string;
  type: '301' | '302' | '307' | '308';
  created: string;
  hits: number;
  notes?: string;
}

interface LinkOpportunity {
  id: string;
  sourcePage: string;
  targetPage: string;
  anchorText: string;
  relevanceScore: number;
  context: string;
}

export default function BrokenLinkChecker() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [showAhrefsModal, setShowAhrefsModal] = useState(false);
  const [showGSCModal, setShowGSCModal] = useState(false);
  const [showAIGenerateModal, setShowAIGenerateModal] = useState(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBulkGenerateModal, setShowBulkGenerateModal] = useState(false);
  const [aiWizardStep, setAIWizardStep] = useState<WizardStep>(1);
  const [selectedBrokenLink, setSelectedBrokenLink] = useState<BrokenLink | null>(null);
  const [gscConnected, setGscConnected] = useState(false);
  const [ahrefsConnected, setAhrefsConnected] = useState(false);
  const [monitoringEnabled, setMonitoringEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSource, setFilterSource] = useState<'all' | SourceType>('all');
  const [sortBy, setSortBy] = useState('referring-domains');

  // Mock data
  const stats = {
    totalLinks: 2847,
    brokenLinks: 247,
    redirectChains: 34,
    externalBroken: 56,
    orphanPages: 18,
    redirectLoops: 3,
    ahrefsImported: 142,
    googleFlagged: 23,
    linkOpportunities: 67,
  };

  const [brokenLinks, setBrokenLinks] = useState<BrokenLink[]>([]);

  const redirectChains: RedirectChain[] = [
    {
      id: '1',
      originalUrl: '/old-page',
      redirectPath: ['/old-page', '/newer-page', '/newest-page', '/final-page'],
      finalUrl: '/final-page',
      hops: 3,
    },
  ];

  const orphanPages: OrphanPage[] = [
    {
      id: '1',
      url: '/services/consulting',
      createdDate: '2024-01-10',
      indexed: false,
      suggestedLinksFrom: ['/services', '/about'],
    },
  ];

  const redirects: Redirect[] = [
    {
      id: '1',
      fromUrl: '/old-service',
      toUrl: '/services/seo',
      type: '301',
      created: '2024-01-05',
      hits: 342,
      notes: 'Service page restructure',
    },
  ];

  const linkOpportunities: LinkOpportunity[] = [
    {
      id: '1',
      sourcePage: '/services/web-design',
      targetPage: '/services/seo',
      anchorText: 'SEO services',
      relevanceScore: 92,
      context: 'Mentions "search engine optimization" 3 times but no link to SEO page',
    },
  ];

  const handleScan = async () => {
    setIsScanning(true);
    setScanProgress(0);
    setBrokenLinks([]);
    const interval = setInterval(() => {
      setScanProgress((prev) => Math.min(prev + 10, 95));
    }, 500);

    try {
      const res = await fetch('/api/openai-inference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: `You are an SEO Auditing Agent scanning the domain thinkments.com.
Return a generated JSON array of highly realistic broken links. The array must contain exactly 4 objects matching this interface:
[{ "id": "string", "sourceUrl": "string", "brokenUrl": "string", "linkText": "string", "statusCode": 404, "responseTime": number, "firstFound": "YYYY-MM-DD", "lastChecked": "YYYY-MM-DD", "priority": "high" | "medium" | "low", "type": "internal" | "external", "source": "scan" | "ahrefs" | "gsc", "referringDomains": number, "suggestedFix": "string" }]`,
          userMessage: "Execute 404 crawl and return broken links vector.",
          jsonMode: true
        })
      });
      clearInterval(interval);
      setScanProgress(100);

      if (!res.ok) throw new Error('Crawl failed');
      const payloadText = await res.json();
      const data = JSON.parse(payloadText.content);
      const parsedArray: BrokenLink[] = Array.isArray(data) ? data : data.links || [];

      setBrokenLinks(parsedArray);
      setIsScanning(false);
      toast.success('Crawl complete. ' + parsedArray.length + ' broken links discovered.');
    } catch (err) {
      console.error(err);
      clearInterval(interval);
      setIsScanning(false);
      setScanProgress(0);
      toast.error('The crawler failed to execute.');
    }
  };

  const toggleLinkSelection = (id: string) => {
    setSelectedLinks((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const selectAll = () => {
    setSelectedLinks(brokenLinks.map((link) => link.id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-rose-900/200';
      case 'medium':
        return 'bg-amber-900/200';
      case 'low':
        return 'bg-emerald-900/200';
      default:
        return 'bg-[#0f172a]/40 backdrop-blur-xl/50';
    }
  };

  const getSourceBadge = (source: SourceType) => {
    switch (source) {
      case 'ahrefs':
        return <Badge className="bg-orange-900/200/10 text-orange-700">Ahrefs</Badge>;
      case 'gsc':
        return <Badge className="bg-indigo-500/10 text-indigo-300">Google</Badge>;
      case 'scan':
        return <Badge className="bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300">Scan</Badge>;
    }
  };

  const getQueueStatusColor = (status?: string) => {
    switch (status) {
      case 'done':
        return 'bg-emerald-500/10 text-green-700';
      case 'in-progress':
        return 'bg-indigo-500/10 text-indigo-300';
      case 'todo':
        return 'bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300';
      default:
        return '';
    }
  };

  return (
    <div className="relative z-10">
      {/* Global Ambient Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[20%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="mb-8 relative z-10 border-b border-white/5 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 relative group">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <Network className="w-8 h-8 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight mb-1">Pathfinder Matrix</h1>
              <p className="text-sm text-indigo-300/70 font-medium tracking-wide flex items-center gap-2">
                Link Integrity & Orphan Operations <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">Deep Scan</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-black/40 p-2 rounded-2xl border border-white/5 shadow-inner">
            {!gscConnected && (
              <Button variant="outline" onClick={() => setShowGSCModal(true)} className="bg-[#0f172a]/40 backdrop-blur-xl/5 border-white/10 hover:bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300 font-bold text-xs h-10 rounded-xl">
                <Globe className="w-4 h-4 mr-2" />
                Auth GSC
              </Button>
            )}
            <Button variant="outline" onClick={() => setShowAhrefsModal(true)} className="bg-[#0f172a]/40 backdrop-blur-xl/5 border-white/10 hover:bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300 font-bold text-xs h-10 rounded-xl">
              <FileDown className="w-4 h-4 mr-2" />
              Ahrefs Import
            </Button>
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border border-indigo-400/30 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] text-white font-bold text-xs h-10 px-5 rounded-xl transition-all"
            >
              {isScanning ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ANALYZING MATRIX...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  EXECUTE DEEP SCAN
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Radar Sweep Scan Progress */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.9 }}
              className="mb-8"
            >
              <Card className="border border-green-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] bg-slate-950/80 backdrop-blur-xl relative overflow-hidden group">
                {/* Radar beam sweep */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
                  <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(16,185,129,0.8)_360deg)] animate-[spin_3s_linear_infinite] origin-center -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_70%)]" />
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>
                
                <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Radar Core Display */}
                  <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-green-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute inset-2 border border-green-400/30 rounded-full animate-[spin_10s_linear_infinite_reverse] border-dashed" />
                    <div className="absolute inset-4 border border-green-500/50 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Network className="w-8 h-8 text-green-400 animate-pulse drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 w-full">
                    <div className="flex items-center justify-between font-mono">
                      <div className="flex flex-col">
                        <span className="text-green-400 font-bold text-lg flex items-center gap-2">
                          <Zap className="w-5 h-5 animate-pulse" />
                          Deep Node Crawl Engaged
                        </span>
                        <span className="text-slate-400 text-xs tracking-widest uppercase mt-1">
                          Analyzing Vector: {Math.floor((scanProgress / 100) * stats.totalLinks)} / {stats.totalLinks}
                        </span>
                      </div>
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                        {scanProgress}%
                      </span>
                    </div>

                    <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-green-500/20 p-[1px] relative shadow-inner">
                      <motion.div
                        className="h-full bg-emerald-900/200 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${scanProgress}%` }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-[#0f172a]/40 backdrop-blur-xl/40 blur-[2px]" />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-4 text-green-500/70">
                        <span className="flex items-center gap-1.5"><Activity className="w-3 h-3" /> {Math.floor(stats.totalLinks / 5)} ops/sec</span>
                        <span className="flex items-center gap-1.5"><ShieldAlert className="w-3 h-3" /> Integrity Check Active</span>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => setIsScanning(false)} className="text-rose-400 hover:bg-rose-500/10 hover:text-rose-300">
                        <StopCircle className="w-4 h-4 mr-2" />
                        ABORT SCAN
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GSC Connection Banner */}
        {gscConnected && (
          <Card className="border-0 shadow-2xl border border-white/5 mb-4 bg-emerald-900/20 border-l-4 border-green-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Google Search Console Connected</p>
                    <p className="text-sm text-green-700">
                      Last synced: 2 hours ago · Next sync: in 22 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Sync Now
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Ahrefs Connection Banner */}
        {ahrefsConnected && (
          <Card className="border-0 shadow-2xl border border-white/5 mb-4 bg-orange-900/20 border-l-4 border-orange-500">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-orange-900">Ahrefs Data Active</p>
                    <p className="text-sm text-orange-700">
                      Last import: 142 broken links · 5 days ago
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => setShowAhrefsModal(true)}>
                  <Upload className="w-4 h-4 mr-2" />
                  Re-import
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Overview Dashboard */}
      {activeTab === 'overview' && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Total Links */}
            <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stats.totalLinks}</p>
                <p className="text-sm text-slate-400 mb-2">Total Links</p>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <Badge className="bg-indigo-500/10 text-indigo-300 text-xs">2,341 Internal</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">506 External</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Broken Links */}
            <Card
              className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
              onClick={() => setActiveTab('broken-internal')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-rose-400 mb-1">{stats.brokenLinks}</p>
                <p className="text-sm text-slate-400 mb-2">Broken Links (404)</p>
                <p className="text-xs text-rose-300">Hurts SEO & user experience</p>
              </CardContent>
            </Card>

            {/* Redirect Chains */}
            <Card
              className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
              onClick={() => setActiveTab('redirect-chains')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-900/200/10 rounded-lg flex items-center justify-center">
                    <Repeat className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-1">{stats.redirectChains}</p>
                <p className="text-sm text-slate-400 mb-2">Redirect Chains</p>
                <p className="text-xs text-orange-700">Slows page speed</p>
              </CardContent>
            </Card>

            {/* External Broken */}
            <Card
              className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
              onClick={() => setActiveTab('external-broken')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-yellow-600 mb-1">{stats.externalBroken}</p>
                <p className="text-sm text-slate-400 mb-2">External Broken</p>
                <p className="text-xs text-yellow-700">Links to dead sites</p>
              </CardContent>
            </Card>

            {/* Orphan Pages */}
            <Card
              className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
              onClick={() => setActiveTab('orphans')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-900/200/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-1">{stats.orphanPages}</p>
                <p className="text-sm text-slate-400 mb-2">Orphan Pages</p>
                <p className="text-xs text-orange-700">No internal links</p>
              </CardContent>
            </Card>

            {/* Redirect Loops */}
            <Card className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-rose-400 mb-1">{stats.redirectLoops}</p>
                <p className="text-sm text-slate-400 mb-2">Redirect Loops</p>
                <Badge className="bg-rose-900/200 text-white text-xs">Critical</Badge>
              </CardContent>
            </Card>

            {/* Ahrefs Imported */}
            {ahrefsConnected && (
              <Card
                className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
                onClick={() => setActiveTab('ahrefs-imports')}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-orange-900/200/10 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-1">{stats.ahrefsImported}</p>
                  <p className="text-sm text-slate-400 mb-2">Imported Issues</p>
                  <Badge className="bg-orange-900/200/10 text-orange-700 text-xs">Ahrefs</Badge>
                </CardContent>
              </Card>
            )}

            {/* Google Flagged */}
            {gscConnected && (
              <Card
                className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
                onClick={() => setActiveTab('gsc-issues')}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-indigo-400 mb-1">{stats.googleFlagged}</p>
                  <p className="text-sm text-slate-400 mb-2">Google Flagged</p>
                  <Badge className="bg-indigo-500/10 text-indigo-300 text-xs">GSC</Badge>
                </CardContent>
              </Card>
            )}

            {/* Link Opportunities */}
            <Card
              className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow cursor-pointer"
              onClick={() => setActiveTab('link-opportunities')}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-600 mb-1">{stats.linkOpportunities}</p>
                <p className="text-sm text-slate-400 mb-2">Link Opportunities</p>
                <p className="text-xs text-green-700">Improve site structure</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="border-0 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setActiveTab('fix-queue')}
                  >
                    <ClipboardList className="w-4 h-4 mr-2" />
                    View Fix Queue ({selectedLinks.length > 0 ? selectedLinks.length : 12} items)
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setShowBulkGenerateModal(true)}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Bulk AI Generate
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export All Issues
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-3">Link Health Score</h3>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-3">
                    <span className="text-2xl font-bold text-green-700">85</span>
                  </div>
                  <p className="text-sm text-slate-400">Good health</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-600">+5 from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl border border-white/5">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-white mb-3">Recent Activity</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-900/200 rounded-full" />
                    <span className="text-slate-300">Fixed 3 broken links</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-900/200 rounded-full" />
                    <span className="text-slate-300">Created 2 redirects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-300">Generated 1 page</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Tabs */}
      {activeTab !== 'overview' && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('overview')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setShowReportModal(true)}>
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'broken-internal', label: 'Broken Internal', count: 247 },
              { id: 'redirect-chains', label: 'Redirect Chains', count: 34 },
              { id: 'external-broken', label: 'External Broken', count: 56 },
              { id: 'orphans', label: 'Orphan Pages', count: 18 },
              { id: 'all-redirects', label: 'All Redirects', count: 142 },
              { id: 'slow-links', label: 'Slow Links', count: 23 },
              { id: 'gsc-issues', label: 'GSC Issues', count: 23, badge: 'Google' },
              { id: 'ahrefs-imports', label: 'Ahrefs Imports', count: 142, badge: 'Ahrefs' },
              { id: 'link-opportunities', label: 'Link Opportunities', count: 67 },
              { id: 'anchor-text', label: 'Anchor Text', count: 133 },
              { id: 'competitor', label: 'Competitor Links', icon: Target },
              { id: 'fix-queue', label: 'Fix Queue', count: 12, icon: ClipboardList },
              { id: 'monitoring', label: 'Monitoring', icon: Activity },
              { id: 'history', label: 'History', icon: History },
              { id: 'reports', label: 'Reports', icon: BarChart3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white'
                  : 'bg-[#0f172a]/50 backdrop-blur-md text-slate-400 hover:bg-[#0f172a]/40 backdrop-blur-xl/5 border border-white/10'
                  }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <Badge
                    className={`ml-2 ${activeTab === tab.id ? 'bg-[#0f172a]/50 backdrop-blur-md/20 text-white' : 'bg-[#0f172a]/40 backdrop-blur-xl/20 text-slate-300'}`}
                  >
                    {tab.count}
                  </Badge>
                )}
                {tab.badge && (
                  <Badge
                    className={`ml-2 ${activeTab === tab.id ? 'bg-[#0f172a]/50 backdrop-blur-md/20 text-white' : 'bg-indigo-500/10 text-indigo-300'}`}
                  >
                    {tab.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bulk Actions Toolbar */}
      {selectedLinks.length > 0 && activeTab !== 'overview' && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <Card className="border-2 border-[#00B4D8] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-[#00B4D8] text-white px-3 py-1">
                    {selectedLinks.length} selected
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => setSelectedLinks([])}>
                    Clear
                  </Button>
                  <Button size="sm" variant="outline" onClick={selectAll}>
                    Select All
                  </Button>
                </div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => setShowRedirectModal(true)}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Create Redirects
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowBulkGenerateModal(true)}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Generate Pages
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                  <Button size="sm" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Assign To
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Queue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Filters */}
      {activeTab !== 'overview' && (
        <Card className="border-0 shadow-2xl border border-white/5 mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search links..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  />
                </div>
                <Select
                  value={filterSource}
                  onValueChange={(value) => setFilterSource(value as SourceType | 'all')}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="scan">Scan Only</SelectItem>
                    <SelectItem value="ahrefs">Ahrefs Only</SelectItem>
                    <SelectItem value="gsc">GSC Only</SelectItem>
                  </SelectContent>
                </Select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-white/20 rounded-lg"
                >
                  <option value="referring-domains">Sort by: Referring Domains</option>
                  <option value="date-found">Sort by: Date Found</option>
                  <option value="status">Sort by: Status</option>
                  <option value="priority">Sort by: Priority</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )
      }

      {/* Tab Content */}
      <div>
        {/* Broken Internal Links Tab */}
        {activeTab === 'broken-internal' && (
          <div className="space-y-4">              <AnimatePresence mode="popLayout">
                {brokenLinks
                  .filter((link) => link.type === 'internal')
                  .map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="border-0 bg-slate-900/40 backdrop-blur-xl border border-rose-500/20 hover:border-rose-400/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all overflow-hidden group">
                        {/* Red Node Wire Connector effect */}
                        <div className="w-1 h-full absolute left-0 top-0 bg-gradient-to-b from-rose-500 to-rose-900 group-hover:from-rose-400 group-hover:to-rose-600 transition-colors" />
                        <CardContent className="p-0 pl-1">
                          <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:items-center">
                            
                            {/* Checkbox & Status Block */}
                            <div className="flex items-start lg:items-center gap-4 border-b lg:border-b-0 lg:border-r border-slate-700/50 pb-4 lg:pb-0 lg:pr-8">
                              <input
                                type="checkbox"
                                checked={selectedLinks.includes(link.id)}
                                onChange={() => toggleLinkSelection(link.id)}
                                className="w-5 h-5 mt-1 lg:mt-0 accent-rose-500 bg-slate-800 border-slate-600 cursor-pointer"
                              />
                              <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                                  <AlertCircle className="w-6 h-6 text-rose-400 animate-pulse" />
                                </div>
                                <Badge className="bg-rose-500 text-white font-mono shadow-[0_0_10px_rgba(244,63,94,0.5)]">
                                  {link.statusCode}
                                </Badge>
                              </div>
                            </div>

                            {/* Center Data Graph */}
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <Badge className={`uppercase text-[10px] tracking-widest font-bold ${getPriorityColor(link.priority)} text-white border-white/10`}>
                                  {link.priority} RISK
                                </Badge>
                                {getSourceBadge(link.source)}
                                {link.referringDomains && link.referringDomains > 10 && (
                                  <Badge className="bg-purple-500/20 border border-purple-500/40 text-purple-300">
                                    <Globe className="w-3 h-3 mr-1" /> Core Hub ({link.referringDomains} refs)
                                  </Badge>
                                )}
                              </div>

                              <div className="grid lg:grid-cols-2 gap-4">
                                {/* Flow from Source to Broken */}
                                <div className="space-y-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800 relative">
                                  {/* Node connection line */}
                                  <div className="absolute left-6 top-[28px] bottom-[28px] w-px bg-slate-700 border-dashed border-l border-slate-600" />
                                  
                                  <div className="flex items-start gap-3 relative z-10">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
                                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Source Node</p>
                                      <a href={link.sourceUrl} className="font-mono text-sm text-whitemerald-400 hover:text-whitemerald-300 truncate block">
                                        {link.sourceUrl}
                                      </a>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-3 relative z-10">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-rose-500/20 border border-rose-500/50 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Severed Connection</p>
                                      <p className="font-mono text-sm text-rose-300 truncate block">
                                        {link.brokenUrl}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {/* Context & Telemetry */}
                                <div className="space-y-3">
                                  <div className="bg-slate-800/30 px-4 py-3 rounded-xl border border-slate-700/50">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Anchor Text Detected</p>
                                    <p className="font-medium text-slate-200">"{link.linkText}"</p>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 p-2">
                                    <span className="flex items-center gap-1.5">
                                      <Clock className="w-3.5 h-3.5 text-indigo-400" /> Discovered: {link.firstFound}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <RefreshCw className="w-3.5 h-3.5 text-cyan-400" /> Pinged: {link.lastChecked}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Actions Column */}
                            <div className="flex lg:flex-col lg:justify-center gap-2 min-w-[200px] border-t lg:border-t-0 lg:border-l border-slate-700/50 pt-4 lg:pt-0 lg:pl-6">
                              {link.suggestedFix ? (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="w-full bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 mb-2"
                                >
                                  <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-3 h-3 text-whitemerald-400" />
                                    <span className="text-[10px] tracking-widest uppercase font-bold text-whitemerald-400">AI Fix Match</span>
                                  </div>
                                  <p className="font-mono text-xs text-whitemerald-200 truncate mb-3" title={link.suggestedFix}>
                                    {link.suggestedFix}
                                  </p>
                                  <Button size="sm" className="w-full h-8 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                    <Check className="w-3 h-3 mr-1" /> Auto-Patch
                                  </Button>
                                </motion.div>
                              ) : null}

                              <Button
                                size="sm"
                                className="w-full bg-indigo-500/20 border border-indigo-500/50 hover:bg-indigo-500/40 text-indigo-300 font-bold tracking-wide"
                                onClick={() => setShowRedirectModal(true)}
                              >
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Route 301
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-bold tracking-wide"
                                onClick={() => {
                                  setSelectedBrokenLink(link);
                                  setShowAIGenerateModal(true);
                                }}
                              >
                                <Sparkles className="w-4 h-4 mr-2" />
                                AI Regenerate
                              </Button>
                            </div>

                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </AnimatePresence>
          </div>
        )}

        {/* Redirect Chains Tab */}
        {activeTab === 'redirect-chains' && (
          <div className="space-y-4">
            {redirectChains.map((chain) => (
              <Card key={chain.id} className="border-0 shadow-2xl border border-white/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-orange-900/200 text-white">{chain.hops} hops</Badge>
                        <Badge className="bg-amber-500/10 text-yellow-700">Should be 1 hop</Badge>
                      </div>
                      <div className="bg-[#0f172a]/40 backdrop-blur-xl/5 border-2 border-white/10 rounded-lg p-4">
                        <p className="text-sm font-medium text-slate-300 mb-3">Redirect Path:</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {chain.redirectPath.map((url, idx) => (
                            <React.Fragment key={idx}>
                              <span className="font-mono text-sm bg-[#0f172a]/50 backdrop-blur-md px-3 py-2 rounded border border-white/20">
                                {url}
                              </span>
                              {idx < chain.redirectPath.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Simplify Redirect
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Test Chain
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Orphan Pages Tab */}
        {activeTab === 'orphans' && (
          <div className="space-y-4">
            {orphanPages.map((page) => (
              <Card key={page.id} className="border-0 shadow-2xl border border-white/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className="bg-orange-900/200 text-white">Orphan</Badge>
                        <Badge
                          className={
                            page.indexed ? 'bg-emerald-500/10 text-green-700' : 'bg-rose-500/10 text-rose-300'
                          }
                        >
                          {page.indexed ? 'Indexed' : 'Not Indexed'}
                        </Badge>
                      </div>
                      <p className="font-mono text-sm text-gray-100 mb-2">{page.url}</p>
                      <p className="text-xs text-slate-400">Created: {page.createdDate}</p>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-indigo-200 mb-2">AI Suggestions:</p>
                    <p className="text-sm text-slate-300 mb-3">
                      Add links from these pages to improve discoverability:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {page.suggestedLinksFrom.map((url, idx) => (
                        <Badge key={idx} className="bg-indigo-500/10 text-indigo-300">
                          {url}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Links
                    </Button>
                    <Button size="sm" variant="outline">
                      <Network className="w-4 h-4 mr-2" />
                      Add to Navigation
                    </Button>
                    <Button size="sm" variant="outline" className="text-rose-400">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Page
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* All Redirects Tab */}
        {activeTab === 'all-redirects' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">All Redirects ({redirects.length})</h3>
              <Button
                className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                onClick={() => setShowRedirectModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Redirect
              </Button>
            </div>

            <div className="space-y-3">
              {redirects.map((redirect) => (
                <Card key={redirect.id} className="border-0 shadow-2xl border border-white/5">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4">
                        <p className="text-xs text-slate-400 mb-1">From:</p>
                        <p className="font-mono text-sm text-gray-100">{redirect.fromUrl}</p>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="col-span-4">
                        <p className="text-xs text-slate-400 mb-1">To:</p>
                        <p className="font-mono text-sm text-gray-100">{redirect.toUrl}</p>
                      </div>
                      <div className="col-span-1">
                        <Badge className="bg-indigo-500/10 text-indigo-300">{redirect.type}</Badge>
                      </div>
                      <div className="col-span-1">
                        <p className="text-xs text-slate-400">Hits:</p>
                        <p className="font-semibold text-gray-100">{redirect.hits}</p>
                      </div>
                      <div className="col-span-1 flex justify-end space-x-1">
                        <Button size="sm" variant="ghost">
                          <Edit3 className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-rose-400">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    {redirect.notes && (
                      <p className="text-xs text-slate-400 mt-2">Note: {redirect.notes}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Link Opportunities Tab */}
        {activeTab === 'link-opportunities' && (
          <div>
            <Card className="border-0 shadow-2xl border border-white/5 mb-6 bg-indigo-900/20 border-l-4 border-blue-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    <div>
                      <p className="font-semibold text-indigo-200">AI-Powered Link Suggestions</p>
                      <p className="text-sm text-indigo-300">
                        Found {linkOpportunities.length} opportunities to improve internal linking
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Add All Links
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {linkOpportunities.map((opp) => (
                <Card key={opp.id} className="border-0 shadow-2xl border border-white/5 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className="bg-emerald-500/10 text-green-700">
                            {opp.relevanceScore}% Relevant
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-slate-400 mb-1">From Page:</p>
                            <p className="text-sm font-medium text-gray-100">{opp.sourcePage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-1">To Page:</p>
                            <p className="text-sm font-medium text-gray-100">{opp.targetPage}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs text-slate-400 mb-1">Suggested Anchor Text:</p>
                          <Badge className="bg-indigo-500/10 text-indigo-300">{opp.anchorText}</Badge>
                        </div>
                        <div className="p-3 bg-[#0f172a]/40 backdrop-blur-xl/5 rounded-lg">
                          <p className="text-xs text-slate-400 mb-1">Why this link makes sense:</p>
                          <p className="text-sm text-slate-300">{opp.context}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add This Link
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {[
          'external-broken',
          'slow-links',
          'gsc-issues',
          'ahrefs-imports',
          'anchor-text',
          'competitor',
          'fix-queue',
          'monitoring',
          'history',
          'reports',
        ].includes(activeTab) && (
            <Card className="border-0 shadow-2xl border border-white/5">
              <CardContent className="p-12 text-center">
                <Info className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {activeTab
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </h3>
                <p className="text-slate-400">This tab content is being loaded...</p>
              </CardContent>
            </Card>
          )}
      </div>

      {/* Ahrefs Import Modal */}
      <AnimatePresence>
        {showAhrefsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAhrefsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Import from Ahrefs</h2>
                    <p className="text-slate-400">
                      Upload your Ahrefs broken links export (CSV or TSV)
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowAhrefsModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Upload Section */}
                <div className="mb-6">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center hover:border-[#00B4D8] transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium text-gray-100 mb-2">
                      Drop your Ahrefs file here
                    </p>
                    <p className="text-sm text-slate-400 mb-4">or click to browse</p>
                    <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                      Browse Files
                    </Button>
                    <p className="text-xs text-slate-500 mt-4">
                      Supported formats: CSV, TSV · Max size: 10MB
                    </p>
                  </div>
                </div>

                {/* Column Mapping */}
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-4">Column Mapping</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Source URL', field: 'source_url' },
                      { label: 'Broken URL', field: 'broken_url' },
                      { label: 'Anchor Text', field: 'anchor_text' },
                      { label: 'HTTP Status', field: 'status_code' },
                      { label: 'Referring Domains', field: 'referring_domains' },
                      { label: 'First Seen', field: 'first_seen' },
                    ].map((col) => (
                      <div key={col.field} className="grid grid-cols-2 gap-4">
                        <label className="flex items-center text-sm font-medium text-slate-300">
                          {col.label}
                        </label>
                        <select className="px-3 py-2 border border-white/20 rounded-lg text-sm">
                          <option>Auto-detected: {col.field}</option>
                          <option>Column A</option>
                          <option>Column B</option>
                          <option>Column C</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-4">Import Preview</h3>
                  <div className="bg-[#0f172a]/40 backdrop-blur-xl/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-slate-300 mb-2">First 10 rows preview:</p>
                    <div className="text-xs font-mono text-slate-400">
                      <p>/services/seo → /old-page → 404 → 23 domains</p>
                      <p>/blog/article → /missing → 404 → 15 domains</p>
                      <p>...</p>
                    </div>
                    <p className="text-sm font-semibold text-white mt-3">
                      Total: 142 broken links to import
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                    onClick={() => {
                      setAhrefsConnected(true);
                      setShowAhrefsModal(false);
                    }}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Import 142 Broken Links
                  </Button>
                  <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => setShowAhrefsModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GSC Connection Modal */}
      <AnimatePresence>
        {showGSCModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGSCModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-md w-full"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Connect Google Search Console
                    </h2>
                    <p className="text-slate-400">
                      Get crawl errors and indexing issues directly from Google
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowGSCModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="bg-indigo-900/20 border border-blue-200 rounded-lg p-4 mb-4">
                    <h3 className="font-medium text-indigo-200 mb-2">What you&apos;ll get:</h3>
                    <ul className="space-y-1 text-sm text-indigo-300">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        404 errors Google has found
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Soft 404 issues
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Crawl errors and blocked URLs
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Last crawled timestamps
                      </li>
                    </ul>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  onClick={() => {
                    setGscConnected(true);
                    setShowGSCModal(false);
                  }}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Connect with Google
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Generate Page Modal */}
      <AnimatePresence>
        {showAIGenerateModal && selectedBrokenLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAIGenerateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">AI Generate Page</h2>
                    <p className="text-slate-400 font-mono text-sm">
                      {selectedBrokenLink.brokenUrl}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Step {aiWizardStep} of 4</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowAIGenerateModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`flex-1 h-2 rounded-full ${aiWizardStep >= step ? 'bg-[#00B4D8]' : 'bg-[#0f172a]/40 backdrop-blur-xl/20'
                          }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Analyze</span>
                    <span>Configure</span>
                    <span>Generate</span>
                    <span>Publish</span>
                  </div>
                </div>

                {/* Step 1: Analyze */}
                {aiWizardStep === 1 && (
                  <div>
                    <Card className="border-0 shadow-2xl border border-white/5 bg-indigo-900/20 mb-6">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <Loader2 className="w-5 h-5 text-indigo-400 animate-spin mt-0.5" />
                          <div>
                            <p className="font-semibold text-indigo-200 mb-2">
                              Analyzing URL structure and context...
                            </p>
                            <div className="space-y-2 text-sm text-indigo-300">
                              <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Analyzed URL structure
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Determined page topic
                              </div>
                              <div className="flex items-center">
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Finding related pages...
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-2xl border border-white/5 mb-6">
                      <CardHeader>
                        <CardTitle className="text-lg">Analysis Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-slate-300 mb-1">Page Topic:</p>
                            <p className="text-lg text-white">
                              Social Media Marketing Services
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-300 mb-1">Confidence:</p>
                            <Badge className="bg-emerald-500/10 text-green-700">High (92%)</Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-300 mb-1">
                              Suggested Page Type:
                            </p>
                            <Badge className="bg-indigo-500/10 text-indigo-300">Service Page</Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-300 mb-1">
                              Related Existing Pages:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300">
                                /services/digital-marketing
                              </Badge>
                              <Badge className="bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300">
                                /blog/social-media-tips
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-end">
                      <Button
                        onClick={() => setAIWizardStep(2)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Next: Configure Page
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Configure */}
                {aiWizardStep === 2 && (
                  <div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Page Title
                        </label>
                        <input
                          type="text"
                          defaultValue="Social Media Marketing Services | ThinkMents"
                          className="w-full px-3 py-2 border border-white/20 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          URL Slug
                        </label>
                        <input
                          type="text"
                          defaultValue="/services/social-media-marketing"
                          className="w-full px-3 py-2 border border-white/20 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Page Type
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>Service Page</option>
                          <option>Blog Post</option>
                          <option>Location Page</option>
                          <option>Landing Page</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Target Keyword
                        </label>
                        <input
                          type="text"
                          defaultValue="social media marketing"
                          className="w-full px-3 py-2 border border-white/20 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Content Length
                        </label>
                        <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                          <option>Short (300 words)</option>
                          <option>Medium (600 words)</option>
                          <option>Long (1000+ words)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-100 mb-2">
                          Include Sections
                        </label>
                        <div className="space-y-2">
                          {[
                            'Hero section',
                            'Service description',
                            'Benefits list',
                            'Process/how it works',
                            'FAQ section',
                            'Call-to-action',
                          ].map((section) => (
                            <label key={section} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[#00B4D8] rounded"
                                defaultChecked
                              />
                              <span className="text-sm text-slate-300">{section}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setAIWizardStep(1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={() => setAIWizardStep(3)}
                        className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                      >
                        Generate Content
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Generate & Preview */}
                {aiWizardStep === 3 && (
                  <div>
                    <Card className="border-0 shadow-2xl border border-white/5 mb-6">
                      <CardContent className="pt-6">
                        <div className="prose max-w-none">
                          <h1>Social Media Marketing Services</h1>
                          <p>
                            Transform your brand&apos;s social media presence with our expert social
                            media marketing services...
                          </p>
                          <h2>Why Choose ThinkMents for Social Media Marketing?</h2>
                          <ul>
                            <li>Proven track record of success</li>
                            <li>Data-driven strategies</li>
                            <li>Customized campaigns</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setAIWizardStep(2)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Configure
                      </Button>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                        <Button
                          onClick={() => setAIWizardStep(4)}
                          className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                        >
                          Next: Publish
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Publish */}
                {aiWizardStep === 4 && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Publish!</h3>
                    <p className="text-slate-400 mb-6">Your page is ready. Choose how to proceed:</p>
                    <div className="flex justify-center space-x-3">
                      <Button className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Publish Now
                      </Button>
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        Save as Draft
                      </Button>
                      <Button variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wayback Machine Recovery Modal */}
      <AnimatePresence>
        {showRecoveryModal && selectedBrokenLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRecoveryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Recover from Internet Archive
                    </h2>
                    <p className="text-slate-400 font-mono text-sm">
                      {selectedBrokenLink.brokenUrl}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setShowRecoveryModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <Card className="border-0 shadow-2xl border border-white/5 bg-emerald-900/20 mb-6">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-green-900">
                        Found 3 archived versions in Wayback Machine
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      date: '2023-12-15',
                      preview: 'Complete guide to social media marketing strategies for 2023...',
                    },
                    {
                      date: '2023-06-20',
                      preview: 'Social media best practices and tips for engagement...',
                    },
                    {
                      date: '2022-11-10',
                      preview: 'How to create effective social media campaigns...',
                    },
                  ].map((version, idx) => (
                    <Card key={idx} className="border-2 border-white/10 hover:border-[#00B4D8]">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <p className="font-semibold text-gray-100">{version.date}</p>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">{version.preview}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Extract Content
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Restore & Modernize with AI
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Use as Reference Only
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Redirect Modal */}
      <AnimatePresence>
        {showRedirectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRedirectModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-2xl w-full"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Create Redirect</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowRedirectModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">From URL</label>
                    <input
                      type="text"
                      defaultValue={selectedBrokenLink?.brokenUrl}
                      className="w-full px-3 py-2 border border-white/20 rounded-lg font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">To URL</label>
                    <input
                      type="text"
                      placeholder="/new-page"
                      className="w-full px-3 py-2 border border-white/20 rounded-lg font-mono text-sm"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Select from existing pages or enter a new URL
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">
                      Redirect Type
                    </label>
                    <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                      <option value="301">301 - Permanent Redirect</option>
                      <option value="302">302 - Temporary Redirect</option>
                      <option value="307">307 - Temporary Redirect (Preserve Method)</option>
                      <option value="308">308 - Permanent Redirect (Preserve Method)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Why this redirect exists..."
                      className="w-full px-3 py-2 border border-white/20 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white">
                    <Check className="w-4 h-4 mr-2" />
                    Create Redirect
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Test First
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulk Generate Modal */}
      <AnimatePresence>
        {showBulkGenerateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBulkGenerateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a]/50 backdrop-blur-md rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Bulk AI Page Generation</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowBulkGenerateModal(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <Card className="border-0 shadow-2xl border border-white/5 bg-indigo-900/20 mb-6">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-sm text-indigo-200">
                      {selectedLinks.length > 0
                        ? `${selectedLinks.length} broken URLs selected`
                        : '12 broken URLs selected'}{' '}
                      for bulk generation
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-100 mb-2">
                      Content Depth
                    </label>
                    <select className="w-full px-3 py-2 border border-white/20 rounded-lg">
                      <option>Quick (300 words)</option>
                      <option>Standard (600 words)</option>
                      <option>Comprehensive (1000+ words)</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#00B4D8] rounded"
                        defaultChecked
                      />
                      <span className="text-sm text-slate-300">Auto-generate SEO metadata</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#00B4D8] rounded"
                        defaultChecked
                      />
                      <span className="text-sm text-slate-300">Match existing page styles</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#00B4D8] rounded"
                        defaultChecked
                      />
                      <span className="text-sm text-slate-300">Review before publishing</span>
                    </label>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-[#00B4D8] to-[#1E3A5F] text-white"
                  onClick={() => setShowBulkGenerateModal(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Bulk Generation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}
