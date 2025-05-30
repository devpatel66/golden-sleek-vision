
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type Blog = Tables<'blogs'>;

interface BlogFormProps {
  blog?: Blog;
  onSuccess: () => void;
  onCancel: () => void;
}

const BlogForm = ({ blog, onSuccess, onCancel }: BlogFormProps) => {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    category: blog?.category || '',
    author: blog?.author || '',
    status: blog?.status || 'draft' as const
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSave = {
        ...formData,
        published_at: formData.status === 'published' ? new Date().toISOString() : null
      };

      if (blog) {
        const { error } = await supabase
          .from('blogs')
          .update(dataToSave)
          .eq('id', blog.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([dataToSave]);
        
        if (error) throw error;
      }
      
      onSuccess();
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt || ''}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={formData.content || ''}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select 
          value={formData.status || 'draft'} 
          onValueChange={(value: 'draft' | 'published' | 'archived') => setFormData({ ...formData, status: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading} className="bg-golden-500 hover:bg-golden-600 text-black">
          {loading ? 'Saving...' : blog ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
