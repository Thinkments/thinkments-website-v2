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
import { Sparkles, Wand2, FileText, Copy, Download, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
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

    const generateBlogPost = () => {
        if (!keyword.trim()) {
            toast.error('Please enter a target keyword');
            return;
        }

        setIsGenerating(true);

        // Simulate AI generation (replace with actual AI API call)
        setTimeout(() => {
            const template = selectedTemplate;
            if (!template) return;

            // Generate title
            const title = generateTitle(keyword, template);
            setMetaTitle(title);

            // Generate meta description
            const description = generateMetaDescription(keyword, template);
            setMetaDescription(description);

            // Generate full blog post content
            const content = generateContent(keyword, template, targetAudience);
            setGeneratedContent(content);

            setIsGenerating(false);
            toast.success('Blog post generated successfully!');
        }, 2000);
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

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold mb-2">AI Blog Post Generator</h2>
                <p className="text-muted-foreground">
                    Generate SEO-optimized blog posts using professional templates and AI assistance
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Wand2 className="h-5 w-5" />
                                Blog Configuration
                            </CardTitle>
                            <CardDescription>Enter your topic and select a template</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="keyword">Target Keyword *</Label>
                                <Input
                                    id="keyword"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="e.g., generative engine optimization for B2B"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <Label htmlFor="template">Blog Template *</Label>
                                <Select value={templateId} onValueChange={setTemplateId}>
                                    <SelectTrigger id="template" className="mt-1">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ai-seo">AI & Modern SEO (2026)</SelectItem>
                                        <SelectItem value="b2b-leadgen">B2B Lead Generation</SelectItem>
                                        <SelectItem value="content-strategy">Content Strategy</SelectItem>
                                        <SelectItem value="industry-vertical">Industry Vertical</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="audience">Target Audience (Optional)</Label>
                                <Input
                                    id="audience"
                                    value={targetAudience}
                                    onChange={(e) => setTargetAudience(e.target.value)}
                                    placeholder="e.g., HVAC companies, dental practices"
                                    className="mt-1"
                                />
                            </div>

                            <Button
                                onClick={generateBlogPost}
                                disabled={isGenerating}
                                className="w-full"
                                size="lg"
                            >
                                {isGenerating ? (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate Blog Post
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Template Preview */}
                    {selectedTemplate && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">{selectedTemplate.name}</CardTitle>
                                <CardDescription>{selectedTemplate.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-medium">Structure:</p>
                                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                                            {selectedTemplate.structure.map((section, idx) => (
                                                <li key={idx}>
                                                    {idx + 1}. {section.heading} ({section.wordCount} words)
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-2 border-t">
                                        <p className="text-sm font-medium">SEO Guidelines:</p>
                                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                                            <li>Min Words: {selectedTemplate.seoGuidelines.minWordCount}</li>
                                            <li>
                                                Internal Links: {selectedTemplate.seoGuidelines.internalLinks.min}-
                                                {selectedTemplate.seoGuidelines.internalLinks.max}
                                            </li>
                                            <li>
                                                Keyword Density: {selectedTemplate.seoGuidelines.keywordDensity.min}%-
                                                {selectedTemplate.seoGuidelines.keywordDensity.max}%
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Output Section */}
                <div className="space-y-6">
                    {generatedContent ? (
                        <>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                                Generated Blog Post
                                            </CardTitle>
                                            <CardDescription>Review and edit as needed</CardDescription>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={copyToClipboard}>
                                                <Copy className="h-4 w-4 mr-1" />
                                                Copy
                                            </Button>
                                            <Button variant="outline" size="sm" onClick={downloadMarkdown}>
                                                <Download className="h-4 w-4 mr-1" />
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <Label className="text-sm font-medium">Meta Title</Label>
                                            <Input
                                                value={metaTitle}
                                                onChange={(e) => setMetaTitle(e.target.value)}
                                                className="mt-1 font-mono text-sm"
                                            />
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {metaTitle.length} characters (50-60 recommended)
                                            </p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium">Meta Description</Label>
                                            <Textarea
                                                value={metaDescription}
                                                onChange={(e) => setMetaDescription(e.target.value)}
                                                className="mt-1 font-mono text-sm"
                                                rows={3}
                                            />
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {metaDescription.length} characters (140-160 recommended)
                                            </p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium">Blog Content (Markdown)</Label>
                                            <Textarea
                                                value={generatedContent}
                                                onChange={(e) => setGeneratedContent(e.target.value)}
                                                className="mt-1 font-mono text-sm"
                                                rows={20}
                                            />
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {generatedContent.split(/\s+/).length} words
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    ) : (
                        <Card className="border-dashed">
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                                <p className="text-muted-foreground text-center">
                                    Generated blog post will appear here
                                </p>
                                <p className="text-sm text-muted-foreground text-center mt-2">
                                    Enter a keyword and click "Generate Blog Post" to get started
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
