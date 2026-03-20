import React, { useState } from 'react';
import { Save, ArrowLeft, Loader2, Type, FileText, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

export default function BlogEditor() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    tags: '',
    excerpt: '',
    content: ''
  });

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/create-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'blog' })
      });
      const data = await res.json();
      if (data.success) {
        alert('Blog post saved successfully!');
        navigate('/admin');
      } else {
        alert('Error saving post.');
      }
    } catch (e) {
      console.error(e);
      alert('Network error saving post.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-whitexl font-bold text-white">Create New Blog Post</h1>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-[#00B4D8] hover:bg-[#0096B4]">
          {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
          Publish Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1A1F2E] rounded-xl p-6 border border-white/10">
            <div className="space-y-4">
              <div>
                <Label className="text-white/70">Post Title</Label>
                <div className="relative mt-1">
                  <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input 
                    className="pl-10 bg-black/20 border-white/10 focus:border-[#00B4D8]"
                    placeholder="Enter an engaging title..."
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-white/70">Slug (URL)</Label>
                <Input 
                  className="mt-1 bg-black/20 border-white/10 focus:border-[#00B4D8]"
                  placeholder="e.g. how-to-improve-seo"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                />
              </div>

              <div>
                <Label className="text-white/70">Content (Markdown / HTML)</Label>
                <textarea
                  className="w-full h-96 mt-1 bg-black/20 border border-white/10 rounded-md p-4 text-white resize-none focus:outline-none focus:border-[#00B4D8]"
                  placeholder="Write your amazing content here..."
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1A1F2E] rounded-xl p-6 border border-white/10">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#00B4D8]" /> 
              Post Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label className="text-white/70">Category</Label>
                <Input 
                  className="mt-1 bg-black/20 border-white/10 focus:border-[#00B4D8]"
                  placeholder="e.g. SEO, Marketing"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                />
              </div>

              <div>
                <Label className="text-white/70">Tags (comma separated)</Label>
                <div className="relative mt-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input 
                    className="pl-10 bg-black/20 border-white/10 focus:border-[#00B4D8]"
                    placeholder="e.g. Tips, Strategy, 2026"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label className="text-white/70">Excerpt</Label>
                <textarea
                  className="w-full h-24 mt-1 bg-black/20 border border-white/10 rounded-md p-3 text-sm text-white resize-none focus:outline-none focus:border-[#00B4D8]"
                  placeholder="A short summary of the post..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
