import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import {
  Search,
  Globe,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Loader2,
  ExternalLink,
} from 'lucide-react';

interface PageAnalysis {
  url: string;
  status: 'success' | 'warning' | 'error';
  seo: {
    title?: string;
    description?: string;
    keywords?: string;
    robots?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    lang?: string;
    viewport?: string;
    charset?: string;
  };
  performance: {
    loadTime: number;
    size: number;
    images: number;
    scripts: number;
    stylesheets: number;
  };
  accessibility: {
    hasAltTags: boolean;
    hasHeadings: boolean;
    hasLang: boolean;
    colorContrast: boolean;
  };
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

const PREDEFINED_URLS = [
  { name: 'Homepage', path: '/' },
  { name: 'SEO Services', path: '/services/seo' },
  { name: 'Web Design', path: '/services/web-design' },
  { name: 'Local: Decatur', path: '/digital-marketing-decatur-tx' },
];

export default function URLInspectionTool() {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState<PageAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLiveAnalysis = async (targetUrl: string): Promise<PageAnalysis> => {
    const response = await fetch(`/api/url-inspection?url=${encodeURIComponent(targetUrl)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch inspection data');
    }
    return response.json();
  };

  const analyzeUrl = async () => {
    if (!url.trim()) return;

    setLoading(true);
    try {
      const result = await fetchLiveAnalysis(url);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const analyzeQuickLink = async (path: string) => {
    setUrl(path);
    setLoading(true);
    try {
      const result = await fetchLiveAnalysis(path);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Globe className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            URL Inspection Tool
          </h1>
          <p className="text-muted-foreground mt-2">
            Analyze any URL for SEO metadata, performance, and accessibility issues.
          </p>
        </div>
      </div>

      <Tabs defaultValue="inspect" className="space-y-6">
        <TabsList>
          <TabsTrigger value="inspect" className="flex items-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Inspect URL</span>
          </TabsTrigger>
          <TabsTrigger value="quick" className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>Quick Links</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inspect" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Enter URL to Inspect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="https://thinkments.com/..."
                    className="pl-10 text-lg"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && analyzeUrl()}
                  />
                </div>
                <Button size="lg" onClick={analyzeUrl} disabled={loading || !url.trim()}>
                  {loading ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5 mr-2" />
                  )}
                  {loading ? 'Analyzing...' : 'Inspect'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Status Banner */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between ${getStatusColor(analysis.status)}`}
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(analysis.status)}
                  <div>
                    <h3 className="font-semibold text-lg flex items-center space-x-2">
                      <span>Inspection Results</span>
                      <a
                        href={`https://thinkments.com${analysis.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-sm font-normal text-blue-600 hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Page</span>
                      </a>
                    </h3>
                    <p className="opacity-90">{analysis.url}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Issues Found</div>
                  <div className="font-bold text-2xl">
                    {analysis.errors.length + analysis.warnings.length}
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="seo">SEO Meta</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="issues">Issues</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle>Page Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">SEO Status</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                              <span className="text-sm">Title Tag</span>
                              <Badge variant={analysis.seo.title ? 'default' : 'destructive'}>
                                {analysis.seo.title ? 'Present' : 'Missing'}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                              <span className="text-sm">Meta Description</span>
                              <Badge variant={analysis.seo.description ? 'default' : 'destructive'}>
                                {analysis.seo.description ? 'Present' : 'Missing'}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                              <span className="text-sm">Indexability</span>
                              <Badge
                                variant={
                                  analysis.seo.robots?.includes('noindex')
                                    ? 'secondary'
                                    : 'default'
                                }
                              >
                                {analysis.seo.robots || 'index, follow'}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Technical Status</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Load Time:</span>
                              <span
                                className={
                                  analysis.performance.loadTime &&
                                  analysis.performance.loadTime < 3000
                                    ? 'text-green-600'
                                    : 'text-yellow-600'
                                }
                              >
                                {analysis.performance.loadTime
                                  ? `${Math.round(analysis.performance.loadTime)}ms`
                                  : 'N/A'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Page Size:</span>
                              <span>
                                {analysis.performance.size
                                  ? `${Math.round(analysis.performance.size)}KB`
                                  : 'N/A'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Images:</span>
                              <span>{analysis.performance.images || 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {analysis.seo.title && (
                        <div>
                          <h4 className="font-medium mb-2">Search Preview</h4>
                          <div className="border rounded-lg p-4 bg-muted/50">
                            <div className="text-blue-600 hover:underline cursor-pointer text-lg">
                              {analysis.seo.title}
                            </div>
                            <div className="text-green-700 text-sm">
                              https://thinkments.com{analysis.url}
                            </div>
                            <div className="text-muted-foreground text-sm mt-1">
                              {analysis.seo.description}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="seo">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-5 h-5" />
                        <span>SEO Metadata</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Basic SEO */}
                      <div>
                        <h4 className="font-medium mb-2">Basic Meta Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Title:</strong> {analysis.seo.title || 'Not set'}
                          </div>
                          <div>
                            <strong>Description:</strong> {analysis.seo.description || 'Not set'}
                          </div>
                          <div>
                            <strong>Keywords:</strong> {analysis.seo.keywords || 'Not set'}
                          </div>
                          <div>
                            <strong>Robots:</strong> {analysis.seo.robots || 'Not set'}
                          </div>
                          <div>
                            <strong>Canonical:</strong> {analysis.seo.canonical || 'Not set'}
                          </div>
                          <div>
                            <strong>Language:</strong> {analysis.seo.lang || 'Not set'}
                          </div>
                          <div>
                            <strong>Viewport:</strong> {analysis.seo.viewport || 'Not set'}
                          </div>
                          <div>
                            <strong>Charset:</strong> {analysis.seo.charset || 'Not set'}
                          </div>
                        </div>
                      </div>

                      {/* Open Graph */}
                      <div>
                        <h4 className="font-medium mb-2">Open Graph Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>OG Title:</strong> {analysis.seo.ogTitle || 'Not set'}
                          </div>
                          <div>
                            <strong>OG Description:</strong>{' '}
                            {analysis.seo.ogDescription || 'Not set'}
                          </div>
                          <div>
                            <strong>OG Image:</strong> {analysis.seo.ogImage || 'Not set'}
                          </div>
                          <div>
                            <strong>OG Type:</strong> {analysis.seo.ogType || 'Not set'}
                          </div>
                        </div>
                      </div>

                      {/* Twitter */}
                      <div>
                        <h4 className="font-medium mb-2">Twitter Card Tags</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Twitter Card:</strong> {analysis.seo.twitterCard || 'Not set'}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="performance">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5" />
                        <span>Performance Metrics</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.loadTime
                              ? `${Math.round(analysis.performance.loadTime)}ms`
                              : 'N/A'}
                          </div>
                          <div className="text-sm text-muted-foreground">Load Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.size
                              ? `${Math.round(analysis.performance.size)}KB`
                              : 'N/A'}
                          </div>
                          <div className="text-sm text-muted-foreground">Page Size</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.images || 0}
                          </div>
                          <div className="text-sm text-muted-foreground">Images</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {analysis.performance.scripts || 0}
                          </div>
                          <div className="text-sm text-muted-foreground">Scripts</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Accessibility Checks</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasAltTags ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500" />
                            )}
                            <span className="text-sm">Alt tags present</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasHeadings ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500" />
                            )}
                            <span className="text-sm">Proper headings</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.hasLang ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500" />
                            )}
                            <span className="text-sm">Language attribute</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {analysis.accessibility.colorContrast ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500" />
                            )}
                            <span className="text-sm">Color contrast</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="issues">
                  <div className="space-y-4">
                    {/* Warnings */}
                    {analysis.warnings.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-yellow-600">
                            <AlertTriangle className="w-5 h-5" />
                            <span>Warnings ({analysis.warnings.length})</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {analysis.warnings.map((warning, index) => (
                              <Alert key={index} className="border-yellow-200 bg-yellow-50">
                                <AlertDescription>{warning}</AlertDescription>
                              </Alert>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Suggestions */}
                    {analysis.suggestions.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-blue-600">
                            <Eye className="w-5 h-5" />
                            <span>Suggestions ({analysis.suggestions.length})</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {analysis.suggestions.map((suggestion, index) => (
                              <Alert key={index} className="border-blue-200 bg-blue-50">
                                <AlertDescription>{suggestion}</AlertDescription>
                              </Alert>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {analysis.errors.length === 0 &&
                      analysis.warnings.length === 0 &&
                      analysis.suggestions.length === 0 && (
                        <Card>
                          <CardContent className="text-center py-8">
                            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                            <p className="text-lg">No issues found!</p>
                            <p className="text-muted-foreground">
                              This page looks great from an SEO perspective.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="quick" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Quick URL Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PREDEFINED_URLS.map((item) => (
                  <Button
                    key={item.path}
                    variant="outline"
                    className="justify-start h-auto p-3"
                    onClick={() => analyzeQuickLink(item.path)}
                    disabled={loading}
                  >
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.path}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {analysis && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getStatusIcon(analysis.status)}
                  <span>Latest Analysis: {analysis.url}</span>
                  <Badge className={getStatusColor(analysis.status)}>
                    {analysis.status.toUpperCase()}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">{analysis.seo.title?.length || 0}</div>
                    <div className="text-sm text-muted-foreground">Title chars</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.seo.description?.length || 0}</div>
                    <div className="text-sm text-muted-foreground">Desc chars</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.warnings.length}</div>
                    <div className="text-sm text-muted-foreground">Warnings</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{analysis.suggestions.length}</div>
                    <div className="text-sm text-muted-foreground">Suggestions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
