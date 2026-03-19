import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewBlogPost() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/create-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'blog', ...formData }),
      });
      if (response.ok) {
        navigate('/admin');
      } else {
        throw new Error('Failed to create content');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating blog post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Create New Blog Post</h1>
        </div>
        <Button onClick={handleSubmit} disabled={loading} className="bg-[#00B4D8] hover:bg-[#0096b8] text-white">
          <Save className="w-4 h-4 mr-2" />
          {loading ? 'Saving...' : 'Publish Post'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
          <CardDescription>Enter the content for your new blog post below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Post Title</Label>
            <Input 
              id="title" 
              placeholder="e.g. 10 Digital Marketing Tips for 2025" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug</Label>
              <Input 
                id="slug" 
                placeholder="e.g. digital-marketing-tips-2025" 
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                placeholder="e.g. Digital Marketing, SEO" 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Featured Image</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
              <ImageIcon className="w-8 h-8 mb-2 text-gray-400" />
              <span>Click to upload image</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Post Content</Label>
            <Textarea 
              id="content" 
              placeholder="Write your blog post content here... (Markdown supported)" 
              className="min-h-[300px]"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
