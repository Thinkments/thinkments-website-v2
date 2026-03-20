import React, { useState } from 'react';
import { Save, ArrowLeft, Loader2, LayoutTemplate, Link as LinkIcon, Type } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

export default function PageBuilder() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    route: '',
    template: 'service'
  });

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/create-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'page' })
      });
      const data = await res.json();
      if (data.success) {
        alert('Page structured successfully!');
        navigate('/admin');
      } else {
        alert('Error creating page.');
      }
    } catch (e) {
      console.error(e);
      alert('Network error creating page.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Scaffold New Page</h1>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-[#00B4D8] hover:bg-[#0096B4]">
          {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
          Generate Page
        </Button>
      </div>

      <div className="bg-[#1A1F2E] rounded-xl p-8 border border-white/10 space-y-6">
        <div>
          <Label className="text-white/70">Page Title (H1)</Label>
          <div className="relative mt-1">
            <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input 
              className="pl-10 bg-black/20 border-white/10 focus:border-[#00B4D8]"
              placeholder="e.g. Email Marketing Services"
              value={formData.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          <p className="text-sm text-white/40 mt-1">This will be the main `title` tag and H1 element.</p>
        </div>
        
        <div>
          <Label className="text-white/70">Route URL</Label>
          <div className="relative mt-1">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input 
              className="pl-10 bg-black/20 border-white/10 focus:border-[#00B4D8]"
              placeholder="e.g. /services/email-marketing"
              value={formData.route}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, route: e.target.value})}
            />
          </div>
        </div>

        <div>
          <Label className="text-white/70">Page Template</Label>
          <div className="relative mt-1">
            <LayoutTemplate className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <select
              className="w-full pl-10 h-10 bg-black/20 border border-white/10 rounded-md text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              value={formData.template}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, template: e.target.value})}
            >
              <option value="service" className="bg-[#1A1F2E] text-white">Service Page Template</option>
              <option value="location" className="bg-[#1A1F2E] text-white">Location Page Template</option>
              <option value="case-study" className="bg-[#1A1F2E] text-white">Case Study Template</option>
              <option value="blank" className="bg-[#1A1F2E] text-white">Blank Canvas</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
