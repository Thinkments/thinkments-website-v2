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
        <div className="space-y-6">
            <div>
                <h2 className="text-whitexl font-bold mb-2">Web Architect Agent</h2>
                <p className="text-muted-foreground">
                    An AI graphic designer that autonomously generates modern, conversion-optimized e-commerce layouts.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
                {/* Input Section */}
                <div className="lg:col-span-4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LayoutTemplate className="h-5 w-5 text-purple-500" />
                                Project Brief
                            </CardTitle>
                            <CardDescription>Tell the agent what to build</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="businessName">Brand / Business Name *</Label>
                                <Input
                                    id="businessName"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    placeholder="e.g., Luminous Skincare"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="industry">Industry / Niche *</Label>
                                <Input
                                    id="industry"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    placeholder="e.g., Beauty, Streetwear, Electronics"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="aesthetic">Aesthetic Direction *</Label>
                                <Select value={aesthetic} onValueChange={setAesthetic}>
                                    <SelectTrigger id="aesthetic" className="mt-1">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="minimal">Minimalist & Clean</SelectItem>
                                        <SelectItem value="luxury">Luxury & Editorial</SelectItem>
                                        <SelectItem value="bold">Bold & Dynamic</SelectItem>
                                        <SelectItem value="nature">Organic & Natural</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="description">Core Products / Vibe (Optional)</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="e.g., sustainable organic cotton basics for everyday wear."
                                    className="mt-1"
                                    rows={3}
                                />
                            </div>

                            <Button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                                size="lg"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Designing...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate E-commerce Site
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Section */}
                <div className="lg:col-span-8 space-y-6">
                    {generatedDesign ? (
                        <Card className="h-full border-purple-200 shadow-xl overflow-hidden">
                            <CardHeader className="bg-[#0f172a]/40 backdrop-blur-xl border-b border-white/5 flex flex-row items-center justify-between py-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <CardTitle>Generated Design</CardTitle>
                                </div>
                                <div className="flex bg-white/10 p-1 rounded-lg">
                                    <button
                                        onClick={() => setActiveTab('preview')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                            activeTab === 'preview' ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow-lg border border-white/5 text-purple-600' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                    >
                                        <MonitorSmartphone className="w-4 h-4" />
                                        Preview
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('code')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                            activeTab === 'code' ? 'bg-[#0f172a]/40 backdrop-blur-xl shadow-lg border border-white/5 text-purple-600' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                    >
                                        <Code className="w-4 h-4" />
                                        Code
                                    </button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 flex-1 bg-white/5">
                                {activeTab === 'preview' ? (
                                    <div className="w-full h-full min-h-[500px] border-4 border-white/10 rounded-b-xl overflow-hidden flex flex-col relative bg-white">
                                        {/* Browser Toolbar Mock */}
                                        <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-black/20 shrink-0">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            <div className="flex-1 bg-slate-900 h-5 rounded mx-2 text-[10px] flex items-center px-2 text-slate-400 font-mono">
                                                https://{businessName.toLowerCase().replace(/\s+/g, '') || 'preview'}.com
                                            </div>
                                        </div>
                                        <iframe 
                                            srcDoc={generatedDesign.htmlCode} 
                                            className="w-full flex-1 border-0" 
                                            title="Generative Preview"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-4 h-full bg-[#1E1E1E]">
                                        <div className="flex justify-end mb-2 space-x-2">
                                            <Button size="sm" variant="secondary" className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/40 border-0" onClick={handleAssignToTeam}>
                                                <Send className="w-4 h-4 mr-2" />
                                                Assign to Web Team
                                            </Button>
                                            <Button size="sm" variant="secondary" className="bg-[#0f172a]/40 backdrop-blur-xl/10 text-white hover:bg-[#0f172a]/40 backdrop-blur-xl/20 border-0" onClick={() => {
                                                navigator.clipboard.writeText(generatedDesign.htmlCode);
                                                toast.success('Code copied to clipboard!');
                                            }}>
                                                Copy HTML
                                            </Button>
                                        </div>
                                        <textarea 
                                            readOnly 
                                            value={generatedDesign.htmlCode} 
                                            className="w-full h-[450px] bg-transparent text-gray-300 font-mono text-sm border-0 focus:ring-0 resize-none outline-none"
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="h-full border-dashed border-2 flex items-center justify-center min-h-[500px] bg-white/5/50">
                            <CardContent className="flex flex-col items-center justify-center text-center p-8">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                    <Palette className="h-10 w-10 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-200 mb-2">Awaiting Instructions</h3>
                                <p className="text-muted-foreground max-w-sm mb-6">
                                    Fill out the project brief on the left. The Web Architect agent will generate a stunning, functional e-commerce design in seconds.
                                </p>
                                <div className="flex gap-2 text-sm text-gray-400">
                                    <span className="flex items-center bg-[#0f172a]/40 backdrop-blur-xl px-3 py-1 rounded-full shadow-lg border border-white/5 border"><ImageIcon className="w-3 h-3 mr-1" /> Images</span>
                                    <span className="flex items-center bg-[#0f172a]/40 backdrop-blur-xl px-3 py-1 rounded-full shadow-lg border border-white/5 border"><Code className="w-3 h-3 mr-1" /> Code</span>
                                    <span className="flex items-center bg-[#0f172a]/40 backdrop-blur-xl px-3 py-1 rounded-full shadow-lg border border-white/5 border"><Palette className="w-3 h-3 mr-1" /> Branding</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
