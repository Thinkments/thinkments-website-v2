import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../ui/card';
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
    RefreshCw,
    Terminal,
    Cpu,
    X,
    ShieldAlert
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

export default function AdminCenterManager() {
    const [isScanning, setIsScanning] = useState(false);
    const [hasScanned, setHasScanned] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [insights, setInsights] = useState<AuditInsight[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const startAudit = async () => {
        setIsScanning(true);
        setHasScanned(false);
        setScanProgress(0);
        setInsights([]);

        const interval = setInterval(() => {
            setScanProgress(prev => Math.min(prev + Math.floor(Math.random() * 15) + 5, 95));
        }, 400);

        try {
            const res = await fetch('/api/openai-inference', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    systemPrompt: `You are the System Architect AI for MACE.
Return a generated JSON array of 4 AuditInsight objects matching this interface exactly:
[{ "id": "unique-id-string", "category": "UX" | "Architecture" | "Workflow" | "Performance", "severity": "High" | "Medium" | "Low", "title": "string", "description": "string", "recommendation": "string", "status": "Pending" }]
Your insights MUST be highly realistic analysis regarding a React/Node dashboard scaling to 50+ generative AI marketing tools.`,
                    userMessage: "Execute architecture diagnostic and return insights vector.",
                    jsonMode: true
                })
            });
            
            clearInterval(interval);
            setScanProgress(100);

            if (!res.ok) throw new Error('Architecture audit computation failed');

            const payloadText = await res.json();
            const data = JSON.parse(payloadText.content);
            const parsedArray: AuditInsight[] = Array.isArray(data) ? data : data.insights || [];
            
            setInsights(parsedArray);
            setHasScanned(true);
            setIsScanning(false);
            toast.success('Admin Center deep scan matrix complete');
        } catch (err) {
            console.error(err);
            clearInterval(interval);
            setIsScanning(false);
            setScanProgress(0);
            toast.error('The System Architect failed to compute diagnostics.');
        }
    };

    const handleApprove = (id: string) => {
        setInsights(insights.map(i => i.id === id ? { ...i, status: 'Approved' } : i));
        toast.success('Architecture optimization approved for deployment sequence');
    };

    const categories = ['All', 'UX', 'Architecture', 'Workflow', 'Performance'];
    const filteredInsights = activeCategory === 'All' 
        ? insights 
        : insights.filter(i => i.category === activeCategory);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'High': return 'text-rose-400 border-rose-400/30 bg-rose-400/10 shadow-[0_0_10px_rgba(251,113,133,0.3)]';
            case 'Medium': return 'text-violet-400 border-violet-400/30 bg-violet-400/10 shadow-[0_0_10px_rgba(139,92,246,0.3)]';
            case 'Low': return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.3)]';
            default: return 'text-slate-400 bg-slate-800/50';
        }
    };

    return (
        <div className="relative min-h-[calc(100vh-120px)] bg-[#030712] text-slate-200 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Ambient Background Glowing Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 p-6 md:p-10 space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-2"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3.5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                                <Cpu className="w-8 h-8 text-indigo-400" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
                                    SYSTEM ARCHITECT
                                </h2>
                                <p className="text-indigo-300/60 font-medium tracking-wide flex items-center gap-2 mt-1">
                                    Autonomous Codebase Evaluation <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">Level 10</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button 
                            onClick={startAudit} 
                            disabled={isScanning}
                            className={`relative group overflow-hidden border px-8 py-7 h-auto text-sm tracking-widest font-bold w-full md:w-auto rounded-xl transition-all duration-300 ${
                                isScanning 
                                ? 'bg-indigo-900/40 border-indigo-500/50 text-indigo-200'
                                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 border-indigo-400/30 text-white shadow-[0_4px_20px_0_rgba(79,70,229,0.4)] bg-[length:200%_200%] hover:animate-gradient-x'
                            }`}
                        >
                            {isScanning && (
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[wave_2s_linear_infinite]" />
                            )}
                            
                            {isScanning ? (
                                <span className="flex items-center gap-3 relative z-10">
                                    <RefreshCw className="w-5 h-5 animate-spin text-cyan-400" />
                                    ANALYZING SYSTEM [{scanProgress}%]
                                </span>
                            ) : (
                                <span className="flex items-center gap-3 relative z-10">
                                    <Zap className="w-5 h-5" />
                                    {hasScanned ? 'RE-ENGAGE DIAGNOSTIC' : 'INITIATE CORE AUDIT'}
                                </span>
                            )}
                        </Button>
                    </motion.div>
                </div>

                {/* Hacking Scanner Module */}
                <AnimatePresence>
                    {isScanning && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            className="overflow-hidden"
                        >
                            <Card className="border-cyan-500/30 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.1)] relative">
                                <CardContent className="py-8">
                                    <div className="flex items-center gap-3 mb-5 text-cyan-400 font-mono tracking-widest text-sm font-bold">
                                        <Terminal className="w-5 h-5 animate-pulse" />
                                        INJECTING PROTOTYPE SCANNER
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-3 bg-black/50 rounded-full overflow-hidden border border-white/5 p-[1px]">
                                            <div 
                                                className="h-full bg-cyan-400 rounded-full transition-all duration-200 ease-out shadow-[0_0_15px_rgba(34,211,238,0.8)] relative"
                                                style={{ width: `${scanProgress}%` }}
                                            >
                                                <div className="absolute top-0 right-0 w-10 h-full bg-white/80 blur-[2px]" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center font-mono text-sm">
                                            <motion.span 
                                                key={scanProgress}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-indigo-300/80"
                                            >
                                                {scanProgress < 25 ? '> Searching abstract UI tree...' : 
                                                 scanProgress < 50 ? '> Correlating Redux node payloads...' : 
                                                 scanProgress < 75 ? '> Decrypting structural bottlenecks...' : 
                                                 '> Finalizing JSON architecture recommendations...'}
                                            </motion.span>
                                            <span className="text-cyan-400 font-bold">{scanProgress}.00%</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Results View */}
                {hasScanned && !isScanning && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ staggerChildren: 0.1 }}
                        className="space-y-8"
                    >
                        {/* High Level Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <motion.div whileHover={{ y: -5 }}>
                                <Card className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-black/80 text-white border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)] overflow-hidden relative h-full group">
                                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay group-hover:bg-indigo-400/20 transition-colors" />
                                    <div className="absolute top-0 right-[-10%] w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none" />
                                    <CardContent className="p-6 flex flex-col justify-between h-full relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="font-semibold text-indigo-200 uppercase tracking-widest text-xs">System Matrix</h3>
                                            <Brain className="w-5 h-5 text-indigo-300 drop-shadow-[0_0_5px_rgba(165,180,252,0.8)]" />
                                        </div>
                                        <div>
                                            <div className="text-6xl font-black tracking-tighter mb-2 flex items-baseline gap-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-200 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                                                78<span className="text-2xl text-indigo-300 font-bold">/100</span>
                                            </div>
                                            <p className="text-sm text-indigo-200 font-medium">Optimization Targets Locked</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {[
                                { title: 'UX Sync', score: '82%', icon: LayoutDashboard, color: 'text-emerald-400', shadow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]', border: 'border-emerald-500/20' },
                                { title: 'Node Flow', score: '65%', icon: Zap, color: 'text-rose-400', shadow: 'shadow-[0_0_20px_rgba(251,113,133,0.1)]', border: 'border-rose-500/20', warning: true },
                                { title: 'Data Arch', score: '88%', icon: Layers, color: 'text-cyan-400', shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.1)]', border: 'border-cyan-500/20' }
                            ].map((stat, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }}>
                                    <Card className={`bg-black/30 backdrop-blur-md ${stat.border} ${stat.shadow} h-full group hover:bg-white/[0.02] transition-colors relative overflow-hidden`}>
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-current opacity-20" />
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 rounded-xl bg-black/50 border border-white/5 relative">
                                                    <stat.icon className={`w-6 h-6 ${stat.color} drop-shadow-[0_0_8px_currentColor]`} />
                                                </div>
                                                {stat.warning && (
                                                    <div className="p-1.5 rounded-md bg-rose-500/10 border border-rose-500/30 shadow-[0_0_10px_rgba(251,113,133,0.3)]">
                                                        <AlertTriangle className="w-4 h-4 text-rose-500 animate-[pulse_2s_ease-in-out_infinite]" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-auto">
                                                <h3 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">{stat.title}</h3>
                                                <div className="text-3xl font-black text-white">{stat.score}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Filtering Pills */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/5">
                            <div className="flex gap-2 w-full md:w-auto overflow-x-auto p-1 scrollbar-none">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap ${
                                            activeCategory === cat 
                                            ? 'bg-indigo-600/20 text-indigo-300 shadow-[inset_0_0_10px_rgba(99,102,241,0.2)] border border-indigo-500/40' 
                                            : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="text-[10px] text-slate-600 font-bold tracking-widest uppercase hidden md:block px-4">
                                VECTORS RENDERED: [{filteredInsights.length}]
                            </div>
                        </div>

                        {/* Interactive Insights Feed */}
                        <div className="space-y-6">
                            <AnimatePresence mode="popLayout">
                                {filteredInsights.map((insight, index) => (
                                    <motion.div
                                        key={insight.id}
                                        initial={{ opacity: 0, x: -20, rotateX: -10 }}
                                        animate={{ opacity: 1, x: 0, rotateX: 0 }}
                                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                                    >
                                        <Card className={`overflow-hidden bg-white/[0.02] backdrop-blur-xl border ${
                                            insight.status === 'Approved' 
                                            ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' 
                                            : 'border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.03] transition-all duration-300'
                                        }`}>
                                            <div className={`w-1.5 h-full absolute left-0 top-0 ${
                                                insight.status === 'Approved' ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                            }`} />
                                            <CardContent className="p-0 pl-1.5">
                                                <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch">
                                                    
                                                    {/* Left Data Section */}
                                                    <div className="flex-1 space-y-6">
                                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    <Badge className={`uppercase tracking-widest px-2.5 py-0.5 text-[10px] font-black rounded-sm ${getSeverityColor(insight.severity)}`}>
                                                                        {insight.severity} SEVERITY
                                                                    </Badge>
                                                                    <span className="text-[10px] font-black text-slate-400/80 uppercase tracking-widest flex items-center gap-1.5 border border-white/10 px-2 py-0.5 rounded-sm bg-black/50">
                                                                        <Layers className="w-3 h-3 text-slate-500" />
                                                                        {insight.category}
                                                                    </span>
                                                                </div>
                                                                <h3 className="text-xl font-bold text-white tracking-tight">
                                                                    {insight.title}
                                                                </h3>
                                                            </div>
                                                            {insight.status === 'Approved' && (
                                                                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                                                                    <CheckCircle2 className="w-4 h-4" />
                                                                    OVERRIDE DEPLOYED
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="grid md:grid-cols-2 gap-5 pt-2">
                                                            <div className="bg-black/60 border border-white/5 rounded-2xl p-5 relative overflow-hidden group">
                                                                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 opacity-50 shadow-[0_0_10px_rgba(244,63,94,1)]" />
                                                                <h4 className="text-[10px] uppercase tracking-widest font-black text-rose-400 mb-2 flex items-center gap-2">
                                                                    <ShieldAlert className="w-3.5 h-3.5" /> Vulnerability Vector
                                                                </h4>
                                                                <p className="text-sm text-slate-300/80 leading-relaxed font-mono">
                                                                    {insight.description}
                                                                </p>
                                                            </div>
                                                            <div className="bg-indigo-900/10 border border-indigo-500/10 rounded-2xl p-5 relative overflow-hidden group">
                                                                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 opacity-80 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                                                                <h4 className="text-[10px] uppercase tracking-widest font-black text-cyan-400 mb-2 flex items-center gap-2">
                                                                    <Lightbulb className="w-3.5 h-3.5" /> Node Solution Code
                                                                </h4>
                                                                <p className="text-sm text-indigo-200/80 leading-relaxed font-mono">
                                                                    {insight.recommendation}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Right Action Section */}
                                                    <div className="flex lg:flex-col justify-end lg:justify-center gap-3 min-w-[240px] lg:border-l lg:pl-8 border-white/5">
                                                        {insight.status === 'Pending' ? (
                                                            <>
                                                                <Button 
                                                                    onClick={() => handleApprove(insight.id)}
                                                                    className="w-full bg-emerald-500/10 border border-emerald-500/40 hover:bg-emerald-500/20 text-emerald-400 shadow-[inset_0_0_15px_rgba(16,185,129,0)] hover:shadow-[inset_0_0_15px_rgba(16,185,129,0.2)] transition-all py-6 rounded-xl text-xs font-black tracking-widest uppercase"
                                                                >
                                                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                                                    EXECUTE PATCH
                                                                </Button>
                                                                <Button variant="outline" className="w-full bg-black/40 border-white/5 text-slate-500 hover:bg-white/5 hover:text-slate-300 py-6 rounded-xl transition-all text-xs font-black tracking-widest uppercase">
                                                                    IGNORE <X className="w-4 h-4 ml-2 opacity-50" />
                                                                </Button>
                                                                <Button variant="ghost" className="w-full text-indigo-400/70 hover:text-indigo-300 hover:bg-transparent mt-2 p-0 h-auto text-xs font-bold tracking-widest uppercase">
                                                                    View Abstract Syntax <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                                                </Button>
                                                            </>
                                                        ) : (
                                                            <div className="text-center space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5">
                                                                <Activity className="w-8 h-8 text-emerald-500 mx-auto animate-pulse drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                                                <p className="text-[10px] font-mono text-emerald-400/70 font-bold uppercase tracking-widest">Patch deployed to execution queue.</p>
                                                                <Button variant="outline" className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl text-[10px] tracking-widest font-black uppercase">
                                                                    Trace Queue
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

                {/* Initial Blank Slate */}
                {!hasScanned && !isScanning && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="h-96 flex flex-col items-center justify-center text-center mt-12 relative"
                    >
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[350px] h-[350px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-[450px] h-[450px] border border-indigo-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                        <Brain className="w-24 h-24 text-slate-800 mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                        <h3 className="text-2xl font-black tracking-widest text-slate-700 uppercase mb-2">SYSTEM STANDBY</h3>
                        <p className="text-lg text-slate-600 max-w-md font-mono text-sm leading-relaxed">
                            Awaiting tactical command to stream deep architecture telemetry from the cognitive layer.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
