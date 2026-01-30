import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Save,
  Eye,
  Send,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Link as LinkIcon,
  Calendar,
  Tag,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Maximize2,
  Minimize2,
  Wand2,
  Zap,
  Bot,
  List,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  ArrowLeft,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { toast } from 'sonner';

// Mock blog posts data
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: 'published' | 'draft' | 'scheduled';
  views: number;
  date: string;
  author: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Complete Guide to Local SEO in 2025',
    slug: 'local-seo-guide-2025',
    category: 'SEO',
    status: 'published',
    views: 1523,
    date: '2024-12-01',
    author: 'John Smith',
  },
  {
    id: 2,
    title: 'Social Media Marketing Trends',
    slug: 'social-media-trends',
    category: 'Social Media',
    status: 'published',
    views: 892,
    date: '2024-11-28',
    author: 'Jane Doe',
  },
  {
    id: 3,
    title: 'Web Design Best Practices',
    slug: 'web-design-best-practices',
    category: 'Web Design',
    status: 'draft',
    views: 0,
    date: '2024-12-05',
    author: 'John Smith',
  },
  {
    id: 4,
    title: 'Email Marketing Strategies',
    slug: 'email-marketing-strategies',
    category: 'Marketing',
    status: 'published',
    views: 645,
    date: '2024-11-25',
    author: 'Sarah Johnson',
  },
  {
    id: 5,
    title: 'Content Marketing 101',
    slug: 'content-marketing-101',
    category: 'Marketing',
    status: 'scheduled',
    views: 0,
    date: '2024-12-15',
    author: 'Jane Doe',
  },
  {
    id: 6,
    title: 'Google Ads Optimization',
    slug: 'google-ads-optimization',
    category: 'PPC',
    status: 'draft',
    views: 0,
    date: '2024-12-06',
    author: 'John Smith',
  },
  {
    id: 7,
    title: 'Building Your Brand Online',
    slug: 'building-brand-online',
    category: 'Branding',
    status: 'published',
    views: 1245,
    date: '2024-11-20',
    author: 'Sarah Johnson',
  },
  {
    id: 8,
    title: 'Video Marketing Guide',
    slug: 'video-marketing-guide',
    category: 'Video',
    status: 'draft',
    views: 0,
    date: '2024-12-07',
    author: 'Jane Doe',
  },
];

export default function BlogCreationToolNew() {
  const [view, setView] = useState<'list' | 'create'>('list');
  const [editingPost, setEditingPost] = useState<number | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'scheduled'>(
    'all',
  );
  const [publishModalOpen, setPublishModalOpen] = useState(false);
  const [postToPublish, setPostToPublish] = useState<BlogPost | null>(null);

  // Filter blog posts
  const filteredBlogPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Get status badge color
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'draft':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      case 'scheduled':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  // Handle publish/unpublish
  const handlePublishClick = (post: BlogPost) => {
    setPostToPublish(post);
    setPublishModalOpen(true);
  };

  const confirmPublish = () => {
    if (!postToPublish) return;

    const newStatus = postToPublish.status === 'published' ? 'draft' : 'published';

    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postToPublish.id ? { ...post, status: newStatus } : post,
      ),
    );

    toast.success(
      newStatus === 'published'
        ? `"${postToPublish.title}" has been published to thinkments.com!`
        : `"${postToPublish.title}" has been unpublished.`,
    );

    setPublishModalOpen(false);
    setPostToPublish(null);
  };

  // Handle delete
  const handleDelete = (postId: number) => {
    const post = blogPosts.find((p) => p.id === postId);
    if (post && window.confirm(`Move "${post.title}" to trash?`)) {
      setBlogPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
      toast.success(`"${post.title}" moved to trash.`);
    }
  };

  // Handle create new post
  const handleCreateNew = () => {
    setEditingPost(null);
    setView('create');
  };

  // Handle back to list
  const handleBackToList = () => {
    setView('list');
    setEditingPost(null);
  };

  return (
    <div>
      {/* Render List View or Create View */}
      <AnimatePresence mode="wait">
        {view === 'list' ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1E3A5F]">Blog Posts</h1>
                <p className="text-gray-600 mt-1">Manage all your blog content</p>
              </div>
              <Button onClick={handleCreateNew} className="bg-[#00B4D8] hover:bg-[#0096b8]">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Posts</p>
                      <p className="text-3xl font-bold text-[#1E3A5F]">{blogPosts.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#1E3A5F]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Published</p>
                      <p className="text-3xl font-bold text-green-600">
                        {blogPosts.filter((p) => p.status === 'published').length}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Drafts</p>
                      <p className="text-3xl font-bold text-gray-600">
                        {blogPosts.filter((p) => p.status === 'draft').length}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center">
                      <Edit className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Scheduled</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {blogPosts.filter((p) => p.status === 'scheduled').length}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="border-0 shadow-md mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search blog posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <Select
                      value={statusFilter}
                      onValueChange={(value) =>
                        setStatusFilter(value as 'all' | 'published' | 'draft' | 'scheduled')
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts Table */}
            <Card className="border-0 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Title
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Author
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogPosts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                          <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                          <p className="text-lg">No blog posts found</p>
                          <p className="text-sm mt-1">
                            Try adjusting your filters or create a new post
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredBlogPosts.map((post, index) => (
                        <motion.tr
                          key={post.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium text-gray-900">{post.title}</p>
                              <p className="text-sm text-gray-500">/{post.slug}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="outline" className="border-gray-300">
                              {post.category}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className={`border ${getStatusBadgeClass(post.status)}`}>
                              {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="hover:bg-blue-50 hover:text-blue-600"
                                title="Edit"
                                onClick={() => {
                                  setEditingPost(post.id);
                                  setView('create');
                                }}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="hover:bg-purple-50 hover:text-purple-600"
                                title="View"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`${post.status === 'published'
                                  ? 'hover:bg-orange-50 hover:text-orange-600'
                                  : 'hover:bg-[#00B4D8]/10 hover:text-[#00B4D8] text-[#00B4D8]'
                                  }`}
                                title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                                onClick={() => handlePublishClick(post)}
                              >
                                <Send className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="hover:bg-red-50 hover:text-red-600"
                                title="Delete"
                                onClick={() => handleDelete(post.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Publish Confirmation Modal */}
            <Dialog open={publishModalOpen} onOpenChange={setPublishModalOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {postToPublish?.status === 'published' ? 'Unpublish' : 'Publish'} Blog Post?
                  </DialogTitle>
                  <DialogDescription>
                    {postToPublish?.status === 'published' ? (
                      <>
                        Are you sure you want to unpublish &quot;{postToPublish?.title}&quot;? It
                        will no longer be visible on thinkments.com.
                      </>
                    ) : (
                      <>
                        Are you sure you want to publish &quot;{postToPublish?.title}&quot; to
                        thinkments.com? It will be immediately visible to visitors.
                      </>
                    )}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setPublishModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    className={
                      postToPublish?.status === 'published'
                        ? 'bg-orange-600 hover:bg-orange-700'
                        : 'bg-[#00B4D8] hover:bg-[#0096b8]'
                    }
                    onClick={confirmPublish}
                  >
                    {postToPublish?.status === 'published' ? 'Unpublish' : 'Publish'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>
        ) : (
          <motion.div
            key="create-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToList}
                  className="hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to List
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-[#1E3A5F]">
                    {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </h1>
                  <p className="text-gray-600 mt-1">Write and publish your content</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="border-gray-300">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button className="bg-[#00B4D8] hover:bg-[#0096b8]">
                  <Send className="w-4 h-4 mr-2" />
                  Publish
                </Button>
              </div>
            </div>

            {/* Simple Create Form Placeholder */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="text-center text-gray-500">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">Blog Creation Form</h2>
                  <p>This is the blog creation/editing interface</p>
                  <p className="text-sm mt-2">
                    (Full blog creation form available in the original BlogCreationTool)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
