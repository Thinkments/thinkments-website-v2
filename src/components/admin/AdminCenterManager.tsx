import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
    Brain, 
    Activity, 
    Layers, 
    AlertTriangle, 
    Lightbulb, 
    CheckCircle2, 
    LayoutDashboard, 
    Zap, 
    ArrowRight,
    Search,
    RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';

interface AuditInsight {
    id: string;
    category: 'UX' | 'Architecture' | 'Workflow' | 'Performance';
    severity: 'High' | 'Medium' | 'Low';
    title: string;
    description: string;
    recommendation: string;
    status: 'Pending' | 'Approved' | 'Implemented';
}

const mockInsights: AuditInsight[] = [
    {
        id: 'opt-1',
        category: 'UX',
        severity: 'High',
        title: 'Fragmented AI Tooling Navigation',
        description: 'AI tools like AIBlogGenerator, PageBuilder, and Web Designer are scattered across different navigation categories (Content, Create New, etc.).',
        recommendation: 'Consolidate all generative AI agents into a dedicated "AI Command Center" or "Generative Suite" submenu to improve discoverability.',
        status: 'Pending'
    },
    {
        id: 'opt-2',
        category: 'Workflow',
        severity: 'Medium',
        title: 'Disconnected Lead and Client Flows',
        description: 'The Lead Dashboard and Client Manager operate independently without an automated progression pipeline.',
        recommendation: 'Implement a "Convert to Client" automation hook that transfers lead data, generates an initial dashboard invoice, and triggers an onboarding email automatically.',
        status: 'Pending'
    },
    {
        id: 'opt-3',
        category: 'Architecture',
        severity: 'High',
        title: 'Redundant Reporting Modules',
        description: 'Performance Dashboard and Report Generator share 80% of the same analytical data endpoints, leading to duplicate API calls.',
        recommendation: 'Merge the data visualization engine into a single unified Data Layer state, feeding both components to reduce load times by 40%.',
        status: 'Pending'
    },
    {
        id: 'opt-4',
        category: 'Performance',
        severity: 'Low',
        title: 'Unused Global State Trackers',
        description: 'Several podcast management states remain active in memory even when the user is navigating SEO tools.',
        recommendation: 'Implement lazy loading and targeted state unmounting for the Podcast Manager to free up local resources.',
        status: 'Approved'
    }
];

export default function AdminCenterManager() {
    const [isScanning, setIsScanning] = useState(false);
    const [hasScanned, setHasScanned] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [insights, setInsights] = useState<AuditInsight[]>(mockInsights);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const startAudit = () => {
        setIsScanning(true);
        setHasScanned(false);
        setScanProgress(0);

        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsScanning(false);
                    setHasScanned(true);
                    toast.success('Admin Center audit complete');
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 400);
    };

    const handleApprove = (id: string) => {
        setInsights(insights.map(i => i.id === id ? { ...i, status: 'Approved' } : i));
        toast.success('Optimization recommendation approved for implementation');
    };

    const categories = ['All', 'UX', 'Architecture', 'Workflow', 'Performance'];
    const filteredInsights = activeCategory === 'All' 
        ? insights 
        : insights.filter(i => i.category === activeCategory);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'High': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
            case 'Medium': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
            case 'Low': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
            default: return 'text-gray-500 bg-gray-500/10';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-slate-800">
                        <Brain className="w-8 h-8 text-indigo-600" />
                        System Architect AI
                    </h2>
                    <p className="text-muted-foreground">
                        Autonomous evaluation of your Admin Center structure, workflows, and user experience.
                    </p>
                </div>
                <Button 
                    onClick={startAudit} 
                    disabled={isScanning}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 px-6 py-6 h-auto text-lg"
                >
                    {isScanning ? (
                        <>
                            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                            Analyzing Architecture ({scanProgress}%)
                        </>
                    ) : (
                        <>
                            <Search className="w-5 h-5 mr-2" />
                            {hasScanned ? 'Re-run Full Audit' : 'Initiate System Audit'}
                        </>
                    )}
                </Button>
            </div>

            <AnimatePresence>
                {isScanning && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <Card className="border-indigo-100 shadow-md bg-gradient-to-br from-indigo-50/50 to-white">
                            <CardContent className="py-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium text-indigo-900 mb-1">
                                        <span>Scanning component tree & routing architecture...</span>
                                        <span>{scanProgress}%</span>
                                    </div>
                                    <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-indigo-600 transition-all duration-300 ease-out"
                                            style={{ width: `${scanProgress}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                                        {scanProgress < 30 ? '> Analyzing Navigation state logs...' : 
                                         scanProgress < 60 ? '> Evaluating Redux/Context payload efficiency...' : 
                                         scanProgress < 90 ? '> Mapping UX friction paths...' : 
                                         '> Synthesizing structural recommendations...'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {hasScanned && !isScanning && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-0 shadow-xl">
                            <CardContent className="p-6 flex flex-col justify-between h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-medium text-indigo-100">Global Health Score</h3>
                                    <Activity className="w-5 h-5 opacity-80" />
                                </div>
                                <div>
                                    <div className="text-5xl font-bold mb-1 flex items-baseline gap-2">
                                        78<span className="text-xl text-indigo-200">/100</span>
                                    </div>
                                    <p className="text-sm text-indigo-100 font-medium">Actionable updates found</p>
                                </div>
                            </CardContent>
                        </Card>

                        {[
                            { title: 'UX/UI Cohesion', score: '82/100', icon: LayoutDashboard, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                            { title: 'Workflow Flow', score: '65/100', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-100', warning: true },
                            { title: 'Data Architecture', score: '88/100', icon: Layers, color: 'text-blue-600', bg: 'bg-blue-100' }
                        ].map((stat, i) => (
                            <Card key={i} className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                        </div>
                                        {stat.warning && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
                                    <div className="text-2xl font-bold text-slate-800">{stat.score}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                                        activeCategory === cat 
                                        ? 'bg-indigo-100 text-indigo-700' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="text-sm text-muted-foreground w-full md:w-auto text-right">
                            Displaying {filteredInsights.length} architectural recommendations
                        </div>
                    </div>

                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredInsights.map((insight, index) => (
                                <motion.div
                                    key={insight.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className={`border-l-4 overflow-hidden ${
                                        insight.status === 'Approved' ? 'border-l-emerald-500 bg-gray-50' : 'border-l-indigo-500 hover:shadow-md transition-shadow'
                                    }`}>
                                        <CardContent className="p-0">
                                            <div className="p-6 flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1 space-y-4">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Badge variant="outline" className={getSeverityColor(insight.severity)}>
                                                                    {insight.severity} Priority
                                                                </Badge>
                                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    {insight.category} Module
                                                                </span>
                                                            </div>
                                                            <h3 className="text-xl font-bold text-slate-800 leading-tight">
                                                                {insight.title}
                                                            </h3>
                                                        </div>
                                                        {insight.status === 'Approved' && (
                                                            <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-medium border border-emerald-200">
                                                                <CheckCircle2 className="w-4 h-4" />
                                                                Change Approved
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div className="bg-rose-50/50 border border-rose-100 rounded-lg p-4">
                                                            <h4 className="text-sm font-semibold text-rose-800 mb-2 flex items-center gap-2">
                                                                <AlertTriangle className="w-4 h-4" /> Current State Issue
                                                            </h4>
                                                            <p className="text-sm text-rose-900/80 leading-relaxed">
                                                                {insight.description}
                                                            </p>
                                                        </div>
                                                        <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-4">
                                                            <h4 className="text-sm font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                                                                <Lightbulb className="w-4 h-4" /> Agent Recommendation
                                                            </h4>
                                                            <p className="text-sm text-indigo-900/80 leading-relaxed font-medium">
                                                                {insight.recommendation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex lg:flex-col justify-end lg:justify-center gap-3 min-w-[200px] lg:border-l lg:pl-6 border-gray-100">
                                                    {insight.status === 'Pending' ? (
                                                        <>
                                                            <Button 
                                                                onClick={() => handleApprove(insight.id)}
                                                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                                            >
                                                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                                                Approve & Execute
                                                            </Button>
                                                            <Button variant="outline" className="w-full border-gray-200">
                                                                Dismiss
                                                            </Button>
                                                            <Button variant="link" className="w-full text-indigo-600">
                                                                View Architecture Map <ArrowRight className="w-4 h-4 ml-1" />
                                                            </Button>
                                                        </>
                                                    ) : (
                                                        <div className="text-center space-y-2">
                                                            <p className="text-sm text-muted-foreground">This structural change has been queued in the execution engine.</p>
                                                            <Button variant="outline" className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                                                                Review Execution Plan
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}

            {!hasScanned && !isScanning && (
                <div className="h-64 flex flex-col items-center justify-center text-center opacity-50">
                    <Brain className="w-16 h-16 text-indigo-300 mb-4" />
                    <p className="text-lg text-slate-500 max-w-md">
                        The System Architect AI is on standby. Click the button above to initiate a comprehensive diagnostic of your Admin Center.
                    </p>
                </div>
            )}
        </div>
    );
}
