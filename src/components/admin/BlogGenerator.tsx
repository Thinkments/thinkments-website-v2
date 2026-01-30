import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Copy, Download, Sparkles, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function BlogGenerator() {
  const [topic, setTopic] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const generatePrompt = () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic first');
      return;
    }

    const prompt = `Create a blog post for ThinkMents Digital Marketing Agency with the following specifications:

**Topic:** ${topic}

**Structure & Style Requirements:**
1. Opening: Start with a friendly greeting like "Hey everyone, This is ThinkMents!" or a compelling hook question
2. Length: 800-1200 words
3. Tone: Professional but conversational, approachable expert voice
4. Include: Practical tips, actionable advice, and real-world examples

**Required Sections:**
- Introduction explaining why this topic matters for businesses
- 3-5 main points or tips (use clear subheadings)
- How ThinkMents can help with this specific service
- Call-to-action at the end

**SEO Requirements:**
- Naturally incorporate keywords related to ${topic}
- Include variations like "${topic} services," "${topic} for small businesses," "local ${topic}"
- Use questions that potential customers might search for

**ThinkMents Brand Voice:**
- Position ThinkMents as helpful experts, not pushy salespeople
- Mention specific services ThinkMents offers related to the topic
- Include phrases like "At ThinkMents, we specialize in..." or "Our team of experts..."
- End with an invitation to transform their online presence

**Format the output as:**
- Title (catchy, includes main keyword)
- Slug (URL-friendly version)
- Excerpt (2-3 sentence summary for listing page)
- Full HTML content with <h2>, <h3>, <p>, <ul>, <li> tags

**Example Format:**

\`\`\`
Title: [Catchy Title with Main Keyword]
Slug: [url-friendly-slug]
Excerpt: [2-3 sentence summary that entices readers to click and read more]

Content:
<h2>Introduction</h2>
<p>Hey everyone, This is ThinkMents! [Engaging opening paragraph...]</p>

<h2>[Main Point 1]</h2>
<p>[Detailed explanation with practical tips...]</p>

<h3>[Subpoint if needed]</h3>
<p>[Supporting details...]</p>
<ul>
  <li>[Actionable tip 1]</li>
  <li>[Actionable tip 2]</li>
  <li>[Actionable tip 3]</li>
</ul>

<h2>[Main Point 2]</h2>
<p>[Content...]</p>

<h2>[Main Point 3]</h2>
<p>[Content...]</p>

<h2>How ThinkMents Can Help</h2>
<p>At ThinkMents, we specialize in [specific services]. Our team of experts [what you offer]. We understand [customer pain point] and deliver [solution].</p>

<h2>Ready to Transform Your Online Presence?</h2>
<p>[Call-to-action encouraging them to contact ThinkMents for consultation]</p>
\`\`\``;

    setGeneratedPrompt(prompt);
    toast.success('Blog prompt generated! Copy it and use with your AI assistant.');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast.success('Prompt copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog-prompt-${topic.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Prompt downloaded successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Blog Generation Tool</h2>
              <p className="text-muted-foreground">
                Generate AI-ready prompts for creating high-quality blog posts that follow
                ThinkMents' brand voice and SEO best practices.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Generate Blog Prompt</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="topic">Blog Topic</Label>
            <Input
              id="topic"
              placeholder="e.g., Social Media Marketing Tips for Small Businesses"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-2"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Enter the main topic or theme for your blog post
            </p>
          </div>

          <Button
            onClick={generatePrompt}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Blog Prompt
          </Button>
        </CardContent>
      </Card>

      {/* Generated Prompt */}
      {generatedPrompt && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Generated Prompt</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={downloadPrompt}>
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={generatedPrompt}
              readOnly
              className="min-h-[500px] font-mono text-sm"
            />
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">How to Use:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Copy the generated prompt above</li>
                <li>Paste it into ChatGPT, Claude, or your preferred AI assistant</li>
                <li>Review and edit the generated content to ensure accuracy</li>
                <li>Add the blog post to your website</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Post Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">ThinkMents Brand Voice:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Professional but conversational and approachable</li>
              <li>Position as helpful experts, not pushy salespeople</li>
              <li>Include practical tips and actionable advice</li>
              <li>Use real-world examples and case studies when possible</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">SEO Best Practices:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Target keyword should appear in title, first paragraph, and naturally throughout
              </li>
              <li>Use keyword variations and related terms</li>
              <li>Include questions that customers commonly search for</li>
              <li>Aim for 800-1200 words for optimal SEO performance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Elements:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Engaging opening (hook question or friendly greeting)</li>
              <li>Clear introduction explaining why the topic matters</li>
              <li>3-5 main points with subheadings</li>
              <li>Section about how ThinkMents can help</li>
              <li>Strong call-to-action at the end</li>
            </ul>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-2 text-primary">Pro Tips:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Always review AI-generated content for accuracy and brand alignment</li>
              <li>Add specific examples relevant to North Texas businesses</li>
              <li>Include statistics or data points to build credibility</li>
              <li>Link to relevant ThinkMents service pages</li>
              <li>Optimize meta description and slug for SEO</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
