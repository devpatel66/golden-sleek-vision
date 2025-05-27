
import { useState } from 'react';
import { Plus, Edit, Trash2, Search, Eye } from 'lucide-react';
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge
} from '@/components/ui';

// Mock data for blogs
const mockBlogs = [
  {
    id: 1,
    title: 'Getting Started with React 18',
    excerpt: 'Learn about the new features and improvements in React 18',
    category: 'Development',
    status: 'published',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    views: 1250
  },
  {
    id: 2,
    title: 'Best Practices for UI/UX Design',
    excerpt: 'Essential guidelines for creating user-friendly interfaces',
    category: 'Design',
    status: 'draft',
    author: 'Jane Smith',
    publishedAt: null,
    views: 0
  },
  {
    id: 3,
    title: 'The Future of Mobile Development',
    excerpt: 'Trends and technologies shaping mobile app development',
    category: 'Mobile',
    status: 'published',
    author: 'Mike Johnson',
    publishedAt: '2024-01-10',
    views: 890
  }
];

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Blogs</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage your blog posts and categories
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Categories
          </Button>
          <Button className="bg-golden-500 hover:bg-golden-600">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBlogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{blog.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {blog.excerpt}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{blog.category}</Badge>
                </TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary"
                    className={getStatusColor(blog.status)}
                  >
                    {blog.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    {blog.views}
                  </div>
                </TableCell>
                <TableCell>{blog.publishedAt || 'Not published'}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBlogs;
