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
import { Sparkles, LayoutTemplate, Palette, MonitorSmartphone, Code, CheckCircle2, ShoppingCart, Image as ImageIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function EcommerceWebDesigner() {
    const [businessName, setBusinessName] = useState('');
    const [industry, setIndustry] = useState('');
    const [aesthetic, setAesthetic] = useState('minimal');
    const [description, setDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedDesign, setGeneratedDesign] = useState<{
        primaryColor: string;
        secondaryColor: string;
        font: string;
        heroTitle: string;
        heroSubtitle: string;
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
Respond in strict JSON format with exactly these fields based on the user's brief:
{
  "primaryColor": "A beautiful hex code for the primary brand color",
  "secondaryColor": "A supporting hex code for backgrounds/hero layers",
  "font": "A modern Google Font family string (e.g., 'Inter, sans-serif')",
  "heroTitle": "An engaging, short hero headline (e.g., 'Elevate Your Space')",
  "heroSubtitle": "1-2 sentences of conversion-focused subtext"
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

    const getHtmlCode = () => {
        if (!generatedDesign) return '';
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} | Official Store</title>
    <style>
        body { margin: 0; font-family: ${generatedDesign.font}; }
        .hero { 
            background-color: ${generatedDesign.secondaryColor}; 
            color: ${generatedDesign.primaryColor};
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
        }
        .hero h1 { font-size: 4rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.5rem; opacity: 0.8; max-width: 600px; margin-bottom: 2rem; }
        .cta-btn {
            background-color: ${generatedDesign.primaryColor};
            color: #fff;
            padding: 1rem 2rem;
            text-decoration: none;
            font-size: 1.2rem;
            border-radius: 5px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee;">
        <div style="font-size: 1.5rem; font-weight: bold; color: ${generatedDesign.primaryColor};">${businessName}</div>
        <nav style="display: flex; gap: 1.5rem;">
            <a href="#" style="text-decoration: none; color: #333;">Shop</a>
            <a href="#" style="text-decoration: none; color: #333;">About</a>
            <a href="#" style="text-decoration: none; color: #333;">Contact</a>
            <a href="#" style="text-decoration: none; color: #333; font-weight: bold;">Cart (0)</a>
        </nav>
    </header>
    <main class="hero">
        <h1>${generatedDesign.heroTitle}</h1>
        <p>${generatedDesign.heroSubtitle}</p>
        <a href="#" class="cta-btn">Shop Collection</a>
    </main>
</body>
</html>`;
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold mb-2">Web Architect Agent</h2>
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
                            <CardHeader className="bg-white border-b border-gray-100 flex flex-row items-center justify-between py-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <CardTitle>Generated Design</CardTitle>
                                </div>
                                <div className="flex bg-gray-100 p-1 rounded-lg">
                                    <button
                                        onClick={() => setActiveTab('preview')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                            activeTab === 'preview' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        <MonitorSmartphone className="w-4 h-4" />
                                        Preview
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('code')}
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                            activeTab === 'code' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        <Code className="w-4 h-4" />
                                        Code
                                    </button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 flex-1 bg-gray-50">
                                {activeTab === 'preview' ? (
                                    <div className="w-full h-full min-h-[500px] border-4 border-gray-200 rounded-b-xl overflow-hidden flex flex-col relative" style={{ fontFamily: generatedDesign.font, backgroundColor: generatedDesign.secondaryColor }}>
                                        {/* Browser Toolbar Mock */}
                                        <div className="h-8 bg-gray-200 flex items-center px-4 gap-2 border-b border-gray-300">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            <div className="flex-1 bg-white/50 h-5 rounded mx-2 text-[10px] flex items-center px-2 text-gray-500">
                                                https://{businessName.toLowerCase().replace(/\s+/g, '')}.com
                                            </div>
                                        </div>
                                        
                                        {/* E-commerce Mock Header */}
                                        <div className="h-16 flex items-center justify-between px-8 border-b border-black/10 transition-colors" style={{ backgroundColor: '#ffffff' }}>
                                            <div className="font-bold text-xl tracking-tight flex items-center gap-2" style={{ color: generatedDesign.primaryColor }}>
                                                {businessName || 'Brand'}
                                            </div>
                                            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                                                <span>New Arrivals</span>
                                                <span>Best Sellers</span>
                                                <span>Collections</span>
                                                <span>About Us</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <ShoppingCart className="w-5 h-5 text-gray-600" />
                                            </div>
                                        </div>

                                        {/* E-commerce Mock Hero */}
                                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden h-full min-h-[400px]">
                                             {/* Abstract decorative shapes based on primary color */}
                                            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: generatedDesign.primaryColor }}></div>
                                            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" style={{ backgroundColor: generatedDesign.primaryColor }}></div>

                                            <motion.h1 
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight z-10"
                                                style={{ color: generatedDesign.primaryColor }}
                                            >
                                                {generatedDesign.heroTitle}
                                            </motion.h1>
                                            
                                            <motion.p
                                                 initial={{ y: 20, opacity: 0 }}
                                                 animate={{ y: 0, opacity: 1 }}
                                                 transition={{ delay: 0.1 }}
                                                 className="text-lg md:text-xl mb-10 max-w-2xl opacity-80 z-10"
                                                 style={{ color: generatedDesign.primaryColor }}
                                            >
                                                {generatedDesign.heroSubtitle}
                                            </motion.p>
                                            
                                            <motion.button 
                                                 initial={{ scale: 0.9, opacity: 0 }}
                                                 animate={{ scale: 1, opacity: 1 }}
                                                 transition={{ delay: 0.2 }}
                                                 className="px-8 py-4 rounded-full font-bold text-white uppercase tracking-wider text-sm hover:scale-105 transition-transform shadow-xl z-10"
                                                 style={{ backgroundColor: generatedDesign.primaryColor }}
                                            >
                                                Explore Collection
                                            </motion.button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 h-full bg-[#1E1E1E]">
                                        <div className="flex justify-end mb-2">
                                            <Button size="sm" variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-0" onClick={() => {
                                                navigator.clipboard.writeText(getHtmlCode());
                                                toast.success('Code copied to clipboard!');
                                            }}>
                                                Copy HTML
                                            </Button>
                                        </div>
                                        <textarea 
                                            readOnly 
                                            value={getHtmlCode()} 
                                            className="w-full h-[450px] bg-transparent text-gray-300 font-mono text-sm border-0 focus:ring-0 resize-none outline-none"
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="h-full border-dashed border-2 flex items-center justify-center min-h-[500px] bg-gray-50/50">
                            <CardContent className="flex flex-col items-center justify-center text-center p-8">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                    <Palette className="h-10 w-10 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Awaiting Instructions</h3>
                                <p className="text-muted-foreground max-w-sm mb-6">
                                    Fill out the project brief on the left. The Web Architect agent will generate a stunning, functional e-commerce design in seconds.
                                </p>
                                <div className="flex gap-2 text-sm text-gray-400">
                                    <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border"><ImageIcon className="w-3 h-3 mr-1" /> Images</span>
                                    <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border"><Code className="w-3 h-3 mr-1" /> Code</span>
                                    <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border"><Palette className="w-3 h-3 mr-1" /> Branding</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
