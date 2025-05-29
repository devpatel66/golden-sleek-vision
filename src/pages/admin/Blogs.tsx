
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Search, Plus, Edit, Trash2, FileText, Eye } from 'lucide-react';

type Blog = Tables<'blogs'>;

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-golden-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground">
            Manage your blog content and publications
          </p>
        </div>
        <Button className="bg-golden-500 hover:bg-golden-600 text-black">
          <Plus className="mr-2 h-4 w-4" />
          Add Blog Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blog Management</CardTitle>
          <CardDescription>
            View and manage all your blog posts
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="relative">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-5 w-5 text-golden-600" />
                        <div className="flex-1">
                          <h3 className="font-medium text-lg">{blog.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {blog.excerpt}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>By {blog.author}</span>
                        <span>•</span>
                        <span>{blog.category}</span>
                        <span>•</span>
                        <span>
                          {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : 'Not published'}
                        </span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{blog.views || 0} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 ml-4">
                      <Badge className={getStatusColor(blog.status || 'draft')}>
                        {blog.status || 'draft'}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogs;
