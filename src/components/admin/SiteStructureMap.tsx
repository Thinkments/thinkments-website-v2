import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Home,
  FileText,
  ShoppingBag,
  Image as ImageIcon,
  MessageSquare,
  Search,
  Users,
  Settings,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Plus,
  Minus
} from 'lucide-react';

interface SiteNode {
  id: string;
  title: string;
  url: string;
  type: 'page' | 'blog' | 'product' | 'category' | 'service';
  status: 'published' | 'draft';
  children?: SiteNode[];
  count?: number;
}

const siteStructure: SiteNode[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    type: 'page',
    status: 'published',
    children: [
      {
        id: 'about',
        title: 'About',
        url: '/about',
        type: 'page',
        status: 'published',
        children: [
          { id: 'our-story', title: 'Our Story', url: '/our-story', type: 'page', status: 'published' }
        ]
      },
      {
        id: 'services',
        title: 'Services',
        url: '/services',
        type: 'category',
        status: 'published',
        count: 12,
        children: [
          { id: 'web-design', title: 'Web Design', url: '/web-design', type: 'service', status: 'published' },
          { id: 'digital-marketing', title: 'Digital Marketing', url: '/digital-marketing', type: 'service', status: 'published' },
          { id: 'seo', title: 'Strategic SEO', url: '/strategic-seo', type: 'service', status: 'published' },
          { id: 'virtual-tours', title: 'Virtual Tours', url: '/virtual-tours', type: 'service', status: 'published' },
          { id: 'videography', title: 'Videography', url: '/videography', type: 'service', status: 'published' },
        ]
      },
      {
        id: 'case-studies',
        title: 'Case Studies',
        url: '/case-studies',
        type: 'category',
        status: 'published',
        count: 4,
        children: [
          { id: 'chenevert', title: 'Chenevert Automotive', url: '/case-studies/chenevert', type: 'page', status: 'published' },
          { id: 'foursquare', title: 'Foursquare Healthcare', url: '/case-studies/foursquare-healthcare', type: 'page', status: 'published' },
          { id: 'decatur', title: 'Decatur Chamber', url: '/case-studies/decatur-chamber', type: 'page', status: 'published' },
          { id: 'casa', title: 'CASA of Wise & Jack', url: '/case-studies/casa', type: 'page', status: 'published' },
        ]
      },
      {
        id: 'blog',
        title: 'Blog',
        url: '/blog',
        type: 'category',
        status: 'published',
        count: 50,
        children: [
          { id: 'blog-1', title: 'Local SEO Guide 2025', url: '/blog/local-seo-guide-2025', type: 'blog', status: 'published' },
          { id: 'blog-2', title: 'Social Media Trends', url: '/blog/social-media-trends', type: 'blog', status: 'published' },
          { id: 'blog-3', title: 'Web Design Best Practices', url: '/blog/web-design-best-practices', type: 'blog', status: 'draft' },
        ]
      },
      {
        id: 'store',
        title: 'Store',
        url: '/store',
        type: 'category',
        status: 'published',
        count: 8,
      },
      {
        id: 'contact',
        title: 'Get a Quote',
        url: '/get-a-quote',
        type: 'page',
        status: 'published',
      },
    ]
  }
];

export default function SiteStructureMap() {
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['home', 'services', 'case-studies', 'blog']);
  const [zoomLevel, setZoomLevel] = useState(1);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev =>
      prev.includes(nodeId) ? prev.filter(id => id !== nodeId) : [...prev, nodeId]
    );
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return FileText;
      case 'blog':
        return MessageSquare;
      case 'product':
        return ShoppingBag;
      case 'category':
        return FileText;
      case 'service':
        return Search;
      default:
        return FileText;
    }
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'from-blue-500 to-blue-600';
      case 'blog':
        return 'from-purple-500 to-purple-600';
      case 'product':
        return 'from-green-500 to-green-600';
      case 'category':
        return 'from-orange-500 to-orange-600';
      case 'service':
        return 'from-teal-500 to-teal-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const renderNode = (node: SiteNode, level: number = 0) => {
    const Icon = getNodeIcon(node.type);
    const isExpanded = expandedNodes.includes(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: level * 0.1 }}
          className={`flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow ${
            level > 0 ? 'ml-8' : ''
          }`}
        >
          {/* Expand/Collapse Button */}
          {hasChildren && (
            <button
              onClick={() => toggleNode(node.id)}
              className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}

          {/* Node Icon */}
          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${getNodeColor(node.type)} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>

          {/* Node Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-gray-900 truncate">{node.title}</h4>
              {node.count && (
                <Badge variant="outline" className="text-xs">
                  {node.count} items
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-500 truncate">{node.url}</p>
          </div>

          {/* Status Badge */}
          <Badge
            className={`text-xs ${
              node.status === 'published'
                ? 'bg-green-500/10 text-green-600 border-green-500/20'
                : 'bg-gray-500/10 text-gray-600 border-gray-500/20'
            }`}
          >
            {node.status}
          </Badge>

          {/* External Link */}
          <a
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-md hover:bg-gray-100 transition-colors"
            title="View page"
          >
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        </motion.div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 space-y-2"
          >
            {node.children!.map(child => renderNode(child, level + 1))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1E3A5F]">Site Structure Map</h1>
        <p className="text-gray-600 mt-1">Visual hierarchy of all pages and content on thinkments.com</p>
      </div>

      {/* Controls */}
      <Card className="mb-6 border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setExpandedNodes(siteStructure.flatMap(n => getAllNodeIds(n)))}
                >
                  Expand All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setExpandedNodes(['home'])}
                >
                  Collapse All
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Zoom:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.1))}
                disabled={zoomLevel <= 0.5}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium text-gray-900 min-w-[50px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setZoomLevel(prev => Math.min(1.5, prev + 0.1))}
                disabled={zoomLevel >= 1.5}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="mb-6 border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <span className="text-sm text-gray-600">Page</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <span className="text-sm text-gray-600">Blog Post</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-green-500 to-green-600"></div>
              <span className="text-sm text-gray-600">Product</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500 to-orange-600"></div>
              <span className="text-sm text-gray-600">Category</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-teal-500 to-teal-600"></div>
              <span className="text-sm text-gray-600">Service</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Site Map */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top left',
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="space-y-3">
              {siteStructure.map(node => renderNode(node))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pages</p>
                <p className="text-3xl font-bold text-[#1E3A5F]">110</p>
              </div>
              <FileText className="w-10 h-10 text-blue-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Blog Posts</p>
                <p className="text-3xl font-bold text-purple-600">50</p>
              </div>
              <MessageSquare className="w-10 h-10 text-purple-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Services</p>
                <p className="text-3xl font-bold text-teal-600">12</p>
              </div>
              <Search className="w-10 h-10 text-teal-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Case Studies</p>
                <p className="text-3xl font-bold text-green-600">4</p>
              </div>
              <Users className="w-10 h-10 text-green-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper function to get all node IDs
function getAllNodeIds(node: SiteNode): string[] {
  const ids = [node.id];
  if (node.children) {
    node.children.forEach(child => {
      ids.push(...getAllNodeIds(child));
    });
  }
  return ids;
}
