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
import { Sparkles, Wand2, FileText, Copy, Download, CheckCircle2, Send, Terminal, Cpu, Zap, Activity } from 'lucide-react';
import { toast } from 'sonner';
import { AnimatePresence } from 'motion/react';
import { blogTemplates, type BlogTemplate } from '../../data/blogTemplates';

export default function AIBlogGenerator() {
    const [keyword, setKeyword] = useState('');
    const [templateId, setTemplateId] = useState<string>('ai-seo');
    const [targetAudience, setTargetAudience] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');

    const selectedTemplate = Object.values(blogTemplates).find((t) => t.id === templateId);

    const generateBlogPost = async () => {
        if (!keyword.trim()) {
            toast.error('Please enter a target keyword');
            return;
        }

        setIsGenerating(true);

        try {
            const template = selectedTemplate;
            if (!template) return;

            const systemPrompt = `You are an elite SEO content writer and marketing expert. Your job is to generate highly engaging, search-optimized blog posts.
Produce the final output in strict JSON format with exactly three fields:
{
  "metaTitle": "SEO optimized title (50-60 chars)",
  "metaDescription": "Engaging meta description (140-160 chars)",
  "rawMarkdown": "The complete blog post formatted in beautiful markdown based on the requested template structure."
}

Ensure the rawMarkdown content strictly follows the structure provided, expands comprehensively on key points, naturally integrates the target keyword, and uses an expert, confident tone. Write at least ${template.seoGuidelines.minWordCount} words.`;

            const structureDetails = template.structure.map((s, i) => 
               `${i+1}. ${s.heading}\n   - Purpose: ${s.purpose}\n   - Key points to cover: ${s.keyPoints.join(', ')}`
            ).join('\n');

            const userMessage = `Target Keyword: ${keyword}\nTarget Audience: ${targetAudience || 'General Industry Professionals'}\nTemplate: ${template.name}\n\nRequired Article Structure:\n${structureDetails}\n\nSEO target density: ${template.seoGuidelines.keywordDensity.max}% maximum.`;

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
                    setMetaTitle(generateTitle(keyword, template));
                    setMetaDescription(generateMetaDescription(keyword, template));
                    setGeneratedContent(generateContent(keyword, template, targetAudience));
                    toast.warning('OpenAI API not configured: Showing fallback data.');
                } else {
                    toast.error('API Error: ' + (data.error || 'Unknown error'));
                }
            } else {
                const parsed = JSON.parse(data.content);
                setMetaTitle(parsed.metaTitle || 'Generated Title');
                setMetaDescription(parsed.metaDescription || 'Generated Description');
                setGeneratedContent(parsed.rawMarkdown || 'Content generation failed.');
                toast.success('Live AI Blog post generated successfully!');
            }
        } catch (error) {
            console.error('Blog Generation Error:', error);
            toast.error('Failed to communicate with intelligence layer.');
        } finally {
            setIsGenerating(false);
        }
    };

    const generateTitle = (kw: string, template: BlogTemplate): string => {
        const titleTemplates = {
            'ai-seo': [
                `${kw}: Complete Guide for 2026`,
                `How to Master ${kw} in the AI Era`,
                `${kw} Strategy: Future-Proof Your SEO`,
                `The Ultimate ${kw} Guide for Modern Businesses`,
            ],
            'b2b-leadgen': [
                `${kw}: ROI-Focused Strategy for B2B Companies`,
                `How to Scale ${kw} (With Real Results)`,
                `${kw} for B2B: Complete Implementation Guide`,
                `${kw}: From Strategy to Leads in 90 Days`,
            ],
            'content-strategy': [
                `${kw}: Build Your Content Empire in 2026`,
                `How to Create a ${kw} That Converts`,
                `${kw} Framework: Step-by-Step Guide`,
                `Master ${kw}: Content That Drives Results`,
            ],
            'industry-vertical': [
                `${kw}: Marketing Guide for [Industry]`,
                `How [Industry] Companies Win with ${kw}`,
                `${kw} for [Industry]: Complete Strategy`,
                `${kw} Success: [Industry] Best Practices`,
            ],
        };

        const templates = titleTemplates[template.id as keyof typeof titleTemplates] || titleTemplates['ai-seo'];
        return templates[Math.floor(Math.random() * templates.length)];
    };

    const generateMetaDescription = (kw: string, template: BlogTemplate): string => {
        const descTemplates = {
            'ai-seo': `Discover how to leverage ${kw} to dominate AI search in 2026. Complete strategy with actionable steps, tools, and proven results from ThinkMents.`,
            'b2b-leadgen': `Learn ${kw} strategies that generate high-quality B2B leads. ROI-focused approach with case studies, pricing insights, and implementation checklist.`,
            'content-strategy': `Master ${kw} with our comprehensive framework. Build content that drives traffic, engagement, and conversions. Expert guidance from ThinkMents.`,
            'industry-vertical': `Industry-specific ${kw} strategies for [industry] businesses. Proven tactics, real results, and complete implementation roadmap from marketing experts.`,
        };

        return descTemplates[template.id as keyof typeof descTemplates] || descTemplates['ai-seo'];
    };

    const generateContent = (kw: string, template: BlogTemplate, audience: string): string => {
        let content = `# ${metaTitle || generateTitle(kw, template)}\n\n`;
        content += `> **Target Keyword:** ${kw.toUpperCase()}\n`;
        content += `> **Template:** ${template.name}\n`;
        content += `> **Target Audience:** ${audience || 'Business owners and marketing professionals'}\n\n`;
        content += `---\n\n`;

        // Generate content for each section
        template.structure.forEach((section, index) => {
            const headingLevel = template.seoGuidelines.headingStructure[index] || 'H2';
            const headingPrefix = headingLevel === 'H1' ? '#' : headingLevel === 'H2' ? '##' : '###';

            // Replace [KEYWORD] placeholders
            const heading = section.heading.replace(/\[KEYWORD[^\]]*\]/gi, kw);

            content += `${headingPrefix} ${heading}\n\n`;

            // Add purpose as intro sentence
            content += `*${section.purpose}*\n\n`;

            // Generate content for each key point
            section.keyPoints.forEach((point) => {
                const pointText = point.replace(/\[keyword\]/gi, kw)
                    .replace(/\[industry\]/gi, audience || 'your industry');

                content += `### ${pointText}\n\n`;
                content += `[AI GENERATED CONTENT: Expand on "${pointText}" with ${Math.floor(section.wordCount / section.keyPoints.length)} words. Include specific examples, data, and actionable advice related to ${kw}.]\n\n`;
            });

            content += `\n`;
        });

        // Add internal linking section
        content += `## Related Resources\n\n`;
        template.internalLinkingStrategy.forEach((link) => {
            content += `- [Learn more](${link})\n`;
        });

        content += `\n---\n\n`;

        // Add SEO metadata
        content += `## SEO Metadata\n\n`;
        content += `**Title:** ${metaTitle}\n\n`;
        content += `**Meta Description:** ${metaDescription}\n\n`;
        content += `**Target Word Count:** ${template.seoGuidelines.minWordCount}+ words\n\n`;
        content += `**Keyword Density:** ${template.seoGuidelines.keywordDensity.min}% - ${template.seoGuidelines.keywordDensity.max}%\n\n`;
        content += `**Internal Links:** ${template.seoGuidelines.internalLinks.min}-${template.seoGuidelines.internalLinks.max}\n\n`;

        return content;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedContent);
        toast.success('Blog post copied to clipboard!');
    };

    const downloadMarkdown = () => {
        const blob = new Blob([generatedContent], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${keyword.toLowerCase().replace(/\s+/g, '-')}-blog-post.md`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.success('Blog post downloaded!');
    };

    const handleAssignToSEO = () => {
        if (!generatedContent) return;

        const event = new CustomEvent('task-logged', {
            detail: {
                title: `Publish Blog: ${metaTitle || keyword}`,
                description: `Review and publish the AI generated blog post.\n\nTarget Keyword: ${keyword}\nAudience: ${targetAudience || 'General'}\nTemplate: ${selectedTemplate?.name}\n\nMeta Description: ${metaDescription}`,
                priority: 'medium',
                sourceAgent: 'Content Agent'
            }
        });
        window.dispatchEvent(event);
        toast.success('Blog logged to the SEO Team Task Board!');
    };

    return (
        <div className="space-y-6 relative z-10">
            {/* Global Ambient Glows */}
            <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="mb-8 relative z-10 border-b border-white/5 pb-6 flex items-start gap-4">
                <div className="p-3 bg-fuchsia-500/10 rounded-xl border border-fuchsia-500/20 relative group">
                    <div className="absolute inset-0 bg-fuchsia-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Terminal className="w-8 h-8 text-whiteuchsia-400 drop-shadow-[0_0_15px_rgba(232,121,249,0.5)]" />
                </div>
                <div>
                    <h2 className="text-whitexl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight mb-1">
                        Content Engine Override
                    </h2>
                    <p className="text-sm text-whiteuchsia-300/70 font-medium tracking-wide flex items-center gap-2">
                        Neural Copywriting Subsystem <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-whiteuchsia-400 border border-fuchsia-500/20 uppercase tracking-widest">Active</span>
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 relative z-10">
                {/* Input Section */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="border-0 bg-slate-900/60 backdrop-blur-xl shadow-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500 opacity-50" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-slate-100 text-sm tracking-widest uppercase">
                                <Cpu className="h-4 w-4 text-whiteuchsia-400" />
                                Vector Parameters
                            </CardTitle>
                            <CardDescription className="text-slate-400">Initialize semantic payload targets</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="keyword" className="text-slate-300 text-xs tracking-wider uppercase">Target Keyword *</Label>
                                <Input
                                    id="keyword"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="e.g., generative engine optimization for B2B"
                                    className="mt-1 bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-fuchsia-500"
                                />
                            </div>

                            <div>
                                <Label htmlFor="template" className="text-slate-300 text-xs tracking-wider uppercase">Architecture Matrix *</Label>
                                <Select value={templateId} onValueChange={setTemplateId}>
                                    <SelectTrigger id="template" className="mt-1 bg-black/50 border-white/10 text-white focus:ring-fuchsia-500">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                                        <SelectItem value="ai-seo">AI & Modern SEO (2026)</SelectItem>
                                        <SelectItem value="b2b-leadgen">B2B Lead Generation</SelectItem>
                                        <SelectItem value="content-strategy">Content Strategy</SelectItem>
                                        <SelectItem value="industry-vertical">Industry Vertical</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="audience" className="text-slate-300 text-xs tracking-wider uppercase">Audience Vector (Optional)</Label>
                                <Input
                                    id="audience"
                                    value={targetAudience}
                                    onChange={(e) => setTargetAudience(e.target.value)}
                                    placeholder="e.g., HVAC companies, dental practices"
                                    className="mt-1 bg-black/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-fuchsia-500"
                                />
                            </div>

                            <Button
                                onClick={generateBlogPost}
                                disabled={isGenerating}
                                className="w-full mt-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold tracking-wider uppercase border border-fuchsia-400/30 shadow-[0_0_20px_rgba(232,121,249,0.2)] hover:shadow-[0_0_30px_rgba(232,121,249,0.4)] transition-all h-12"
                            >
                                {isGenerating ? (
                                    <>
                                        <Activity className="mr-2 h-5 w-5 animate-pulse" />
                                        STREAMING...
                                    </>
                                ) : (
                                    <>
                                        <Zap className="mr-2 h-5 w-5" />
                                        EXECUTE GENERATION
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Template Preview */}
                    {selectedTemplate && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <Card className="border-0 bg-indigo-950/20 backdrop-blur-md shadow-lg border border-indigo-500/20 relative overflow-hidden">
                                <CardHeader className="bg-indigo-900/10 border-b border-indigo-500/10 py-4">
                                    <CardTitle className="text-xs font-mono text-indigo-300 tracking-wider">
                                        {selectedTemplate.name.toUpperCase()}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4 font-mono text-xs text-slate-400">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-indigo-400 font-bold mb-2">++ TOPOLOGY SEQUENCE ++</p>
                                            <ul className="space-y-2 border-l border-indigo-500/30 pl-3">
                                                {selectedTemplate.structure.map((section, idx) => (
                                                    <li key={idx} className="flex gap-2 items-start">
                                                        <span className="text-indigo-500">{`> `}</span>
                                                        <span className="leading-tight">{section.heading} <span className="opacity-50">[{section.wordCount} bytes]</span></span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-3 border-t border-indigo-500/20">
                                            <p className="text-whiteuchsia-400 font-bold mb-2">++ SEO CONSTRAINTS ++</p>
                                            <ul className="space-y-1">
                                                <li>- Min Volume: {selectedTemplate.seoGuidelines.minWordCount}</li>
                                                <li>- Density: {selectedTemplate.seoGuidelines.keywordDensity.min}% to {selectedTemplate.seoGuidelines.keywordDensity.max}%</li>
                                                <li>- Nexus Links: {selectedTemplate.seoGuidelines.internalLinks.min} to {selectedTemplate.seoGuidelines.internalLinks.max}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </div>

                {/* Output Section */}
                <div className="lg:col-span-8 space-y-6">
                    <AnimatePresence mode="wait">
                        {isGenerating ? (
                            <motion.div
                                key="generating"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full min-h-[500px]"
                            >
                                <Card className="h-full border border-fuchsia-500/30 bg-slate-950/80 backdrop-blur-xl shadow-[0_0_40px_rgba(232,121,249,0.15)] overflow-hidden relative font-mono">
                                    <div className="absolute top-0 w-full h-8 bg-black/80 border-b border-fuchsia-500/20 flex items-center px-4 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                        <span className="ml-4 text-[10px] text-whiteuchsia-500/50 uppercase tracking-widest">root@content-matrix:~# /bin/generate -vector "{keyword}"</span>
                                    </div>
                                    <CardContent className="p-8 pt-12 text-sm text-whiteuchsia-400/80">
                                        <div className="space-y-4">
                                            <p className="flex items-center gap-2 font-bold text-whiteuchsia-300">
                                                <Sparkles className="w-4 h-4 animate-spin text-whiteuchsia-400" /> [INITIATING NEURAL PATHWAY]...
                                            </p>
                                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-blue-400">
                                                [EXTRACTING] Target Keyword: <span className="text-white">{keyword}</span>
                                            </motion.p>
                                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-blue-400">
                                                [MAPPING] Audience Vector: <span className="text-white">{targetAudience || 'General Web Protocol'}</span>
                                            </motion.p>
                                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ delay: 2 }} className="text-indigo-300 border-l-2 border-indigo-500/50 pl-4 py-2 bg-indigo-500/10 rounded-r-lg">
                                                Generating highly optimized content clusters...<br/>
                                                Bypassing standard heuristic constraints...<br/>
                                                Assembling semantic structure...
                                            </motion.p>
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="flex items-center gap-2 mt-8 text-whitemerald-400">
                                                <div className="w-2 h-4 bg-emerald-400 animate-pulse" />
                                                <span className="animate-pulse">Streaming payload data from OpenAI nexus...</span>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ) : generatedContent ? (
                            <motion.div
                                key="generated"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-full"
                            >
                                <Card className="border-0 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5 relative h-full">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-50" />
                                    <CardHeader className="border-b border-white/5 pb-4">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <CardTitle className="flex items-center gap-2 text-slate-100 uppercase tracking-widest text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-whitemerald-400" />
                                                    Payload Delivered
                                                </CardTitle>
                                                <CardDescription className="text-slate-400 mt-1">Matrix data decoded and ready for publication</CardDescription>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <Button size="sm" className="bg-emerald-500/20 text-whitemerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.15)]" onClick={handleAssignToSEO}>
                                                    <Send className="h-3 w-3 mr-2" />
                                                    Inject to SEO Queue
                                                </Button>
                                                <Button variant="outline" size="sm" onClick={copyToClipboard} className="bg-[#0f172a]/40 backdrop-blur-xl/5 border-white/10 hover:bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300">
                                                    <Copy className="h-3 w-3 mr-2" />
                                                    Copy Hash
                                                </Button>
                                                <Button variant="outline" size="sm" onClick={downloadMarkdown} className="bg-[#0f172a]/40 backdrop-blur-xl/5 border-white/10 hover:bg-[#0f172a]/40 backdrop-blur-xl/10 text-slate-300">
                                                    <Download className="h-3 w-3 mr-2" />
                                                    Extract .md
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6 space-y-6">
                                        <div>
                                            <Label className="text-xs tracking-widest text-slate-400 uppercase">Meta Title Data</Label>
                                            <Input
                                                value={metaTitle}
                                                onChange={(e) => setMetaTitle(e.target.value)}
                                                className="mt-1 font-mono text-sm bg-black/40 border-slate-700/50 text-whitemerald-100 focus-visible:ring-emerald-500"
                                            />
                                            <div className="flex justify-between items-center mt-1">
                                                <p className="text-[10px] uppercase text-whitemerald-500 tracking-widest">
                                                    OPTIMAL LENGTH METRIC: {metaTitle.length}/60 chars
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-xs tracking-widest text-slate-400 uppercase">Meta Description Core</Label>
                                            <Textarea
                                                value={metaDescription}
                                                onChange={(e) => setMetaDescription(e.target.value)}
                                                className="mt-1 font-mono text-sm bg-black/40 border-slate-700/50 text-whitemerald-100 focus-visible:ring-emerald-500"
                                                rows={3}
                                            />
                                            <p className="text-[10px] uppercase text-whitemerald-500 tracking-widest mt-1">
                                                CLARITY SCORE: {metaDescription.length}/160 chars
                                            </p>
                                        </div>

                                        <div>
                                            <Label className="text-xs tracking-widest text-slate-400 uppercase">Raw Markdown Execution Stream</Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />
                                                <Textarea
                                                    value={generatedContent}
                                                    onChange={(e) => setGeneratedContent(e.target.value)}
                                                    className="font-mono text-xs bg-[#0f172a]/80 border-slate-700/50 text-blue-100 leading-relaxed focus-visible:ring-emerald-500 resize-y p-4"
                                                    rows={20}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center mt-2 px-2">
                                                <p className="text-[10px] uppercase text-whitemerald-500 tracking-widest flex items-center gap-1">
                                                    <CheckCircle2 className="w-3 h-3" /> PARSED WORDS: {generatedContent.split(/\s+/).length}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Card className="border border-white/5 border-dashed bg-slate-900/40 backdrop-blur-sm h-[500px] flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center text-center px-4">
                                        <div className="w-20 h-20 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6">
                                            <Terminal className="h-8 w-8 text-whiteuchsia-400/50" />
                                        </div>
                                        <p className="text-lg font-bold text-slate-300 uppercase tracking-wider mb-2">
                                            Standby for Generation
                                        </p>
                                        <p className="text-sm font-mono text-slate-500">
                                            Awaiting vector input sequence.<br/> Initiate via the console parameters.
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
