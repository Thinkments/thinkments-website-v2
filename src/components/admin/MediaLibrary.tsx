import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Upload,
  Grid3x3,
  List,
  Search,
  Filter,
  Download,
  Trash2,
  Copy,
  Check,
  X,
  Folder,
  Sparkles,
  Image as ImageIcon,
  FileImage,
  Maximize2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { toast } from 'sonner';

interface MediaItem {
  id: string;
  name: string;
  url: string;
  altText: string;
  size: string;
  dimensions: string;
  uploadDate: string;
  usedIn: string[];
  fileType: string;
}

export default function MediaLibrary() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [copiedUrl, setCopiedUrl] = useState('');

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/ops-data?type=media')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setMediaItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleUploadMockMedia = async () => {
    const dummy: Partial<MediaItem> = {
      name: 'newly-uploaded-file.jpg',
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
      altText: 'A newly uploaded mock image',
      size: '1.5 MB',
      dimensions: '1920x1080',
      uploadDate: new Date().toLocaleDateString(),
      usedIn: [],
      fileType: 'image/jpeg'
    };
    try {
      const res = await fetch('/api/ops-data?type=media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dummy)
      });
      const data = await res.json();
      setMediaItems((prev) => [...prev, data]);
      toast.success('Media uploaded to local database!');
    } catch (e) {
      toast.error('Upload failed');
    }
  };

  const handleDeleteMedia = async () => {
    if (!activeMedia) return;
    try {
      await fetch('/api/ops-data?type=media', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activeMedia.id })
      });
      setMediaItems((prev) => prev.filter(m => m.id !== activeMedia.id));
      setSidebarOpen(false);
      toast.success('Media deleted permanently');
    } catch (err) {
      toast.error('Deletion failed');
    }
  };
  const handleSelectMedia = (id: string) => {
    setSelectedMedia((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSelectAll = () => {
    if (selectedMedia.length === mediaItems.length) {
      setSelectedMedia([]);
    } else {
      setSelectedMedia(mediaItems.map((item) => item.id));
    }
  };

  const handleViewMedia = (media: MediaItem) => {
    setActiveMedia(media);
    setSidebarOpen(true);
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      toast.success('URL copied to clipboard!');
      setTimeout(() => setCopiedUrl(''), 2000);
    } catch (error) {
      toast.error('Failed to copy URL');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-whitexl font-bold text-white">Media Library</h1>
          <p className="text-slate-400 mt-1">Manage your images and media files</p>
        </div>
        <Button className="bg-[#00B4D8] hover:bg-[#0096b8]" onClick={handleUploadMockMedia}>
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Upload Zone */}
      <Card className="border-2 border-dashed border-white/20 hover:border-[#00B4D8] transition-colors cursor-pointer">
        <CardContent className="p-12 text-center">
          <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium text-white mb-2">Drop files here to upload</h3>
          <p className="text-slate-400 mb-4">or click to browse from your computer</p>
          <p className="text-sm text-slate-500">Supports: JPG, PNG, GIF, SVG, WebP (Max 10MB)</p>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card className="border-0 shadow-2xl border border-white/5">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search media files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters and View Toggle */}
            <div className="flex items-center space-x-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="File type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="jpeg">JPEG</SelectItem>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="gif">GIF</SelectItem>
                  <SelectItem value="svg">SVG</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-white/10 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-[#00B4D8]' : ''}
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-[#00B4D8]' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedMedia.length > 0 && (
            <div className="flex items-center justify-between mt-4 p-3 bg-[#00B4D8]/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleSelectAll}
                  className="w-5 h-5 rounded border-2 border-[#00B4D8] bg-[#00B4D8] flex items-center justify-center text-white"
                >
                  <Check className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium text-white">
                  {selectedMedia.length} item{selectedMedia.length > 1 ? 's' : ''} selected
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Folder className="w-4 h-4 mr-2" />
                  Move to Folder
                </Button>
                <Button variant="outline" size="sm" className="text-rose-400 hover:text-rose-300">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Media Grid/List */}
      <Card className="border-0 shadow-2xl border border-white/5">
        <CardContent className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mediaItems.map((media, index) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-square bg-white/10 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleViewMedia(media)}
                >
                  <img
                    src={media.url}
                    alt={media.altText}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />

                  {/* Checkbox */}
                  <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectMedia(media.id);
                      }}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedMedia.includes(media.id)
                          ? 'bg-[#00B4D8] border-[#00B4D8] text-white'
                          : 'bg-[#0f172a]/40 backdrop-blur-xl border-white/20'
                        }`}
                    >
                      {selectedMedia.includes(media.id) && <Check className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(media.url);
                      }}
                    >
                      {copiedUrl === media.url ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {/* File Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-medium truncate">{media.name}</p>
                    <p className="text-white/70 text-xs">{media.size}</p>
                  </div>

                  {/* Usage Badge */}
                  {media.usedIn.length > 0 && (
                    <Badge className="absolute bottom-2 left-2 bg-[#00B4D8] text-white text-xs">
                      Used in {media.usedIn.length}
                    </Badge>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {mediaItems.map((media, index) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-4 p-4 border border-white/10 rounded-lg hover:border-[#00B4D8] hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => handleViewMedia(media)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectMedia(media.id);
                    }}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedMedia.includes(media.id)
                        ? 'bg-[#00B4D8] border-[#00B4D8] text-white'
                        : 'border-white/20'
                      }`}
                  >
                    {selectedMedia.includes(media.id) && <Check className="w-3 h-3" />}
                  </button>
                  <img
                    src={media.url}
                    alt={media.altText}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white truncate">{media.name}</p>
                    <p className="text-sm text-slate-500">
                      {media.dimensions} • {media.size}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-slate-400">{media.uploadDate}</p>
                      {media.usedIn.length > 0 && (
                        <Badge variant="outline" className="text-xs">
                          Used in {media.usedIn.length} pages
                        </Badge>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(media.url);
                      }}
                    >
                      {copiedUrl === media.url ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Media Details Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {activeMedia && (
            <>
              <SheetHeader>
                <SheetTitle className="text-white">Media Details</SheetTitle>
                <SheetDescription>View and edit media information</SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {/* Preview */}
                <div className="relative aspect-video bg-white/10 rounded-lg overflow-hidden">
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.altText}
                    className="w-full h-full object-contain"
                  />
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* File Info */}
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <Label className="text-xs text-slate-500">File Name</Label>
                      <Input value={activeMedia.name} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Dimensions</Label>
                      <p className="text-sm mt-1">{activeMedia.dimensions}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">File Size</Label>
                      <p className="text-sm mt-1">{activeMedia.size}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Upload Date</Label>
                      <p className="text-sm mt-1">{activeMedia.uploadDate}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Alt Text */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="altText">Alt Text</Label>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[#FF6B35] border-[#FF6B35]"
                      onClick={() => toast.success('AI generated alt text (Demo)')}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Generate
                    </Button>
                  </div>
                  <Textarea
                    id="altText"
                    value={activeMedia.altText}
                    className="min-h-[80px]"
                    placeholder="Describe this image for accessibility..."
                  />
                </div>

                {/* URL */}
                <div>
                  <Label>Image URL</Label>
                  <div className="flex space-x-2 mt-2">
                    <Input value={activeMedia.url} readOnly className="flex-1" />
                    <Button
                      onClick={() => copyToClipboard(activeMedia.url)}
                      className="bg-[#00B4D8]"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Compression */}
                <Card className="bg-[#00B4D8]/5">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-white mb-3">Image Optimization</h4>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Quality (Fastest load)</SelectItem>
                        <SelectItem value="medium">Medium Quality (Balanced)</SelectItem>
                        <SelectItem value="high">High Quality (Best appearance)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full mt-3 bg-[#00B4D8]">Optimize Image</Button>
                  </CardContent>
                </Card>

                {/* Usage */}
                <div>
                  <Label className="text-sm font-medium">Used In</Label>
                  {activeMedia.usedIn.length > 0 ? (
                    <div className="mt-2 space-y-2">
                      {activeMedia.usedIn.map((page, index) => (
                        <div
                          key={index}
                          className="p-3 bg-white/5 rounded-lg flex items-center justify-between"
                        >
                          <span className="text-sm text-slate-300">{page}</span>
                          <Button variant="ghost" size="sm" className="text-[#00B4D8]">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500 mt-2">Not used in any pages yet</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1 text-rose-400 hover:text-rose-300" onClick={handleDeleteMedia}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
