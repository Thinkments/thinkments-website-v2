import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Sparkles, LayoutTemplate, Palette, MonitorSmartphone, Code, CheckCircle2, ShoppingCart, Image as ImageIcon, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function EcommerceWebDesigner() {
    const [businessName, setBusinessName] = useState('');
    const [industry, setIndustry] = useState('');
    const [aesthetic, setAesthetic] = useState('minimal');
    const [description, setDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedDesign, setGeneratedDesign] = useState<{
        htmlCode: string;
    } | null>(null);
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    const handleGenerate = async () => {
        if (!businessName.trim() || !industry.trim()) {
            toast.error('Please enter a business name and industry');
            return;
        }

        setIsGenerating(true);

        try {
            const systemPrompt = `You are a world-class Web Architect AI Agent. You design conversion-optimized landing pages.
Respond in strict JSON format with exactly this field based on the user's brief:
{
  "htmlCode": "A complete, beautiful, responsive HTML document string containing Tailwind CSS via CDN. Include a stunning hero section, a featured product grid, and an engaging header/footer."
}`;
            const userMessage = `Business Name: ${businessName}\nIndustry: ${industry}\nAesthetic: ${aesthetic}\nAdditional Context: ${description || 'None'}`;

            const res = await fetch('/api/openai-inference', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    systemPrompt,
                    userMessage,
                    jsonMode: true,
                    isGpt4: true
                })
            });

            const data = await res.json();

            if (!data.success) {
                if (data.isFallback) {
                    setGeneratedDesign(JSON.parse(data.content));
                    toast.warning('OpenAI API not configured: Showing fallback data.');
                } else {
                    toast.error('API Error: ' + (data.error || 'Unknown error'));
                }
            } else {
                setGeneratedDesign(JSON.parse(data.content));
                toast.success('E-commerce design payload generated successfully!');
            }
        } catch (error) {
            console.error('Web Designer API Error:', error);
            toast.error('Failed to communicate with intelligence layer.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleAssignToTeam = () => {
        if (!generatedDesign) return;

        const event = new CustomEvent('task-logged', {
            detail: {
                title: `Build e-commerce site for ${businessName}`,
                description: `Design approved by Web Architect Agent.\n\nAesthetic: ${aesthetic}\n\n[Raw HTML Generative Blueprint Attached from Agent]`,
                priority: 'medium',
                sourceAgent: 'Web Architect'
            }
        });
        window.dispatchEvent(event);
        toast.success('Design logged to the Web Team Task Board!');
    };

    return (
        <div className="relative space-y-6">
            {/* Ambient bg */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-10 left-1/3 w-96 h-64 bg-purple-600/6 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-yellow-400 animate-pulse' : generatedDesign ? 'bg-green-400' : 'bg-purple-400 animate-pulse'}`} />
                    <span className={`text-xs font-mono uppercase tracking-widest ${isGenerating ? 'text-yellow-400' : generatedDesign ? 'text-green-400' : 'text-purple-400'}`}>
                        {isGenerating ? 'Generating...' : generatedDesign ? 'Design Ready' : 'Web Architect Agent'}
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">Web Architect Agent</h2>
                <p className="text-slate-400">AI graphic designer — generates modern, conversion-optimized e-commerce layouts.</p>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-6">
                {/* ── Input Panel ── */}
                <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-white/10 bg-[#090f1a] shadow-[0_0_40px_rgba(147,51,234,0.08)] overflow-hidden">
                        {/* Panel header */}
                        <div className="px-5 py-4 border-b border-white/8 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                <LayoutTemplate className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Project Brief</p>
                                <p className="text-xs text-slate-500">Tell the agent what to build</p>
                            </div>
                        </div>

                        <div className="p-5 space-y-4">
                            <div>
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 block">Brand / Business Name *</label>
                                <input
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    placeholder="e.g., Luminous Skincare"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_10px_rgba(147,51,234,0.2)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 block">Industry / Niche *</label>
                                <input
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    placeholder="e.g., Beauty, Streetwear, Electronics"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_10px_rgba(147,51,234,0.2)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 block">Aesthetic Direction *</label>
                                <Select value={aesthetic} onValueChange={setAesthetic}>
                                    <SelectTrigger className="bg-white/5 border border-white/10 text-white rounded-lg focus:border-purple-500/50">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="minimal">Minimalist &amp; Clean</SelectItem>
                                        <SelectItem value="luxury">Luxury &amp; Editorial</SelectItem>
                                        <SelectItem value="bold">Bold &amp; Dynamic</SelectItem>
                                        <SelectItem value="nature">Organic &amp; Natural</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 block">Core Products / Vibe <span className="normal-case text-slate-600">(Optional)</span></label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="e.g., sustainable organic cotton basics for everyday wear."
                                    rows={3}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_10px_rgba(147,51,234,0.2)] transition-all resize-none"
                                />
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isGenerating ? (
                                        <><Loader2 className="h-4 w-4 animate-spin" />Designing...</>
                                    ) : (
                                        <><Sparkles className="h-4 w-4" />Generate E-commerce Site</>
                                    )}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ── Output Panel ── */}
                <div className="lg:col-span-8">
                    {generatedDesign ? (
                        <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-[#090f1a] shadow-[0_0_60px_rgba(147,51,234,0.15)] h-full">
                            {/* Output header */}
                            <div className="bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/8 flex flex-row items-center justify-between px-5 py-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span className="text-sm font-semibold text-white">Generated Design</span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 ml-1">LIVE</span>
                                </div>
                                <div className="flex bg-white/8 p-1 rounded-lg gap-1">
                                    <button
                                        onClick={() => setActiveTab('preview')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                            activeTab === 'preview'
                                                ? 'bg-purple-600/30 border border-purple-500/40 text-purple-300 shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                                                : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                    >
                                        <MonitorSmartphone className="w-3.5 h-3.5" />
                                        Preview
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('code')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                            activeTab === 'code'
                                                ? 'bg-purple-600/30 border border-purple-500/40 text-purple-300 shadow-[0_0_10px_rgba(147,51,234,0.3)]'
                                                : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                    >
                                        <Code className="w-3.5 h-3.5" />
                                        Code
                                    </button>
                                </div>
                            </div>

                            {activeTab === 'preview' ? (
                                <div className="w-full min-h-[500px] flex flex-col">
                                    <div className="h-9 bg-slate-900 flex items-center px-4 gap-2 border-b border-white/10 shrink-0">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="flex-1 bg-slate-800 h-6 rounded mx-3 text-[10px] flex items-center px-3 text-slate-500 font-mono border border-white/5">
                                            🔒 https://{businessName.toLowerCase().replace(/\s+/g, '') || 'preview'}.com
                                        </div>
                                    </div>
                                    <iframe
                                        srcDoc={generatedDesign.htmlCode}
                                        className="w-full flex-1 border-0 min-h-[460px]"
                                        title="Generative Preview"
                                    />
                                </div>
                            ) : (
                                <div className="p-4 bg-[#0d1117] min-h-[500px] flex flex-col">
                                    <div className="flex justify-end mb-3 gap-2">
                                        <button className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/35 transition-colors"
                                            onClick={handleAssignToTeam}>
                                            <Send className="w-3.5 h-3.5" />
                                            Assign to Web Team
                                        </button>
                                        <button className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
                                            onClick={() => {
                                                navigator.clipboard.writeText(generatedDesign.htmlCode);
                                                toast.success('Code copied to clipboard!');
                                            }}>
                                            Copy HTML
                                        </button>
                                    </div>
                                    <textarea
                                        readOnly
                                        value={generatedDesign.htmlCode}
                                        className="flex-1 w-full h-[440px] bg-transparent text-green-300/90 font-mono text-xs border-0 focus:ring-0 resize-none outline-none leading-relaxed"
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ── Zero / Idle State ── */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090f1a] shadow-[0_0_80px_rgba(147,51,234,0.08)] min-h-[500px] flex items-center justify-center"
                        >
                            {/* Hex grid bg */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='70'%3E%3Cpolygon points='30,5 55,20 55,50 30,65 5,50 5,20' fill='none' stroke='%23a855f7' strokeWidth='1'/%3E%3C/svg%3E")`,
                                backgroundSize: '60px 70px'
                            }} />
                            <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600/6 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative text-center px-8 py-16">
                                <div className="relative inline-block mb-8">
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        className="absolute inset-0 rounded-full border border-purple-500/30 border-dashed" />
                                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                                        className="absolute -inset-5 rounded-full border border-pink-500/15 border-dashed" />
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 via-fuchsia-700 to-pink-700 rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(147,51,234,0.5)]">
                                        <ShoppingCart className="h-10 w-10 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">Web Architect Standing By</h3>
                                <p className="text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
                                    Fill out the project brief. The AI will generate a fully functional, conversion-optimized e-commerce site in seconds.
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 text-xs">
                                    {[
                                        { icon: ImageIcon, label: 'Hero Imagery' },
                                        { icon: ShoppingCart, label: 'Product Grid' },
                                        { icon: Code, label: 'Full HTML' },
                                        { icon: Palette, label: 'Brand Colors' },
                                    ].map((item, i) => (
                                        <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                            <item.icon className="w-3 h-3" />
                                            {item.label}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
