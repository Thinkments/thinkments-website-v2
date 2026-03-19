import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { ArrowLeft, Save, Layout } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    path: '',
    template: 'standard',
    metaDescription: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/create-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'page', ...formData }),
      });
      if (response.ok) {
        navigate('/admin');
      } else {
        throw new Error('Failed to create page');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating page.');
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
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Create New Page</h1>
        </div>
        <Button onClick={handleSubmit} disabled={loading} className="bg-[#1E3A5F] hover:bg-[#152a45] text-white">
          <Save className="w-4 h-4 mr-2" />
          {loading ? 'Saving...' : 'Publish Page'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Page Configuration</CardTitle>
          <CardDescription>Set up the details for your new landing or service page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Page Title</Label>
              <Input 
                id="title" 
                placeholder="e.g. SEO Services in Dallas" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="path">URL Path</Label>
              <Input 
                id="path" 
                placeholder="e.g. /services/dallas-seo" 
                value={formData.path}
                onChange={(e) => setFormData({...formData, path: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Page Template</Label>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {['Standard Landing', 'Service Hub', 'Location Page'].map((tpl) => (
                <div 
                  key={tpl}
                  className={`border rounded-lg p-4 cursor-pointer hover:border-[#00B4D8] text-center ${formData.template === tpl ? 'bg-[#00B4D8]/10 border-[#00B4D8]' : 'border-gray-200'}`}
                  onClick={() => setFormData({...formData, template: tpl})}
                >
                  <Layout className={`w-8 h-8 mx-auto mb-2 ${formData.template === tpl ? 'text-[#00B4D8]' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium block text-gray-700">{tpl}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="meta">Meta Description</Label>
            <Textarea 
              id="meta" 
              placeholder="SEO meta description..." 
              className="h-24"
              value={formData.metaDescription}
              onChange={(e) => setFormData({...formData, metaDescription: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
