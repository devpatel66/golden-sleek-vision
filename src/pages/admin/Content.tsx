import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui';
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Eye, 
  Trash, 
  FileText 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Mock content data
const initialPosts = [
  { 
    id: '1', 
    title: 'Introduction to Our Services', 
    category: 'Services', 
    author: 'John Doe', 
    status: 'Published',
    date: '2023-08-15',
  },
  { 
    id: '2', 
    title: 'Company History and Values', 
    category: 'About', 
    author: 'Jane Smith', 
    status: 'Published',
    date: '2023-07-22',
  },
  { 
    id: '3', 
    title: 'Latest Portfolio Updates', 
    category: 'Portfolio', 
    author: 'Michael Brown', 
    status: 'Draft',
    date: '2023-09-01',
  },
  { 
    id: '4', 
    title: 'Industry News and Trends', 
    category: 'Blog', 
    author: 'Sarah Williams', 
    status: 'Published',
    date: '2023-08-28',
  },
  { 
    id: '5', 
    title: 'Client Success Stories', 
    category: 'Portfolio', 
    author: 'John Doe', 
    status: 'Review',
    date: '2023-09-05',
  },
];

const contentCategories = [
  'Services',
  'About',
  'Portfolio',
  'Blog',
  'Home',
  'Contact',
];

const ContentManagement = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const { toast } = useToast();
  
  // Filter posts based on search query
  const filteredPosts = posts.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.status.toLowerCase().includes(query)
    );
  });

  const handleAddContent = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const titleInput = formElement.title as HTMLInputElement;
    const categorySelect = formElement.category as HTMLSelectElement;
    const authorInput = formElement.author as HTMLInputElement;
    const contentTextarea = formElement.content as HTMLTextAreaElement;
    const statusSelect = formElement.status as HTMLSelectElement;
    
    const newPost = {
      id: isEditMode && selectedPost ? selectedPost.id : (posts.length + 1).toString(),
      title: titleInput.value,
      category: categorySelect.value,
      author: authorInput.value,
      content: contentTextarea.value,
      status: statusSelect.value,
      date: new Date().toISOString().split('T')[0],
    };
    
    if (isEditMode && selectedPost) {
      setPosts(posts.map(post => post.id === selectedPost.id ? newPost : post));
      toast({
        title: "Content Updated",
        description: `${newPost.title} has been updated successfully`,
      });
    } else {
      setPosts([...posts, newPost]);
      toast({
        title: "Content Added",
        description: `${newPost.title} has been added successfully`,
      });
    }
    
    setIsAddContentOpen(false);
    setIsEditMode(false);
    setSelectedPost(null);
    formElement.reset();
  };

  const handleDeletePost = () => {
    if (selectedPost) {
      setPosts(posts.filter(post => post.id !== selectedPost.id));
      setIsDeleteModalOpen(false);
      setSelectedPost(null);
      toast({
        title: "Content Deleted",
        description: "Content has been deleted successfully",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (post: any) => {
    setSelectedPost(post);
    setIsEditMode(true);
    setIsAddContentOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'Review':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground">Manage your website content.</p>
        </div>
        <Button 
          onClick={() => {
            setIsEditMode(false);
            setSelectedPost(null);
            setIsAddContentOpen(true);
          }} 
          className="bg-golden-500 hover:bg-golden-600 text-black"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Content
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[70px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(post.status)}`}>
                      {post.status}
                    </span>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(post)}>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>Preview</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          className="text-red-600 focus:text-red-600" 
                          onClick={() => {
                            setSelectedPost(post);
                            setIsDeleteModalOpen(true);
                          }}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No content found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Content Sheet */}
      <Sheet open={isAddContentOpen} onOpenChange={setIsAddContentOpen}>
        <SheetContent className="sm:max-w-xl">
          <SheetHeader>
            <SheetTitle>{isEditMode ? 'Edit Content' : 'Add New Content'}</SheetTitle>
            <SheetDescription>
              {isEditMode 
                ? 'Edit your existing content.' 
                : 'Add new content to your website.'}
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleAddContent} className="space-y-4 pt-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input 
                id="title" 
                name="title" 
                defaultValue={isEditMode && selectedPost ? selectedPost.title : ''} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">Category</label>
              <select 
                id="category" 
                name="category" 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={isEditMode && selectedPost ? selectedPost.category : ''}
                required
              >
                <option value="" disabled>Select a category</option>
                {contentCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="author" className="text-sm font-medium">Author</label>
              <Input 
                id="author" 
                name="author" 
                defaultValue={isEditMode && selectedPost ? selectedPost.author : ''} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">Content</label>
              <Textarea 
                id="content" 
                name="content" 
                rows={6} 
                defaultValue={isEditMode && selectedPost && selectedPost.content ? selectedPost.content : ''} 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">Status</label>
              <select 
                id="status" 
                name="status" 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={isEditMode && selectedPost ? selectedPost.status : 'Draft'}
                required
              >
                <option value="Draft">Draft</option>
                <option value="Review">Review</option>
                <option value="Published">Published</option>
              </select>
            </div>
            <SheetFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => {
                setIsAddContentOpen(false);
                setIsEditMode(false);
                setSelectedPost(null);
              }}>
                Cancel
              </Button>
              <Button type="submit" className="bg-golden-500 hover:bg-golden-600 text-black">
                {isEditMode ? 'Update' : 'Add'} Content
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      {/* Delete Content Confirmation */}
      <Sheet open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Delete Content</SheetTitle>
            <SheetDescription>
              Are you sure you want to delete this content? This action cannot be undone.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {selectedPost && (
              <div className="rounded-lg border border-muted p-4">
                <div className="flex items-start">
                  <FileText className="mr-3 h-8 w-8 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{selectedPost.title}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPost.category} • {selectedPost.date}</p>
                  </div>
                </div>
              </div>
            )}
            <SheetFooter className="pt-4">
              <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeletePost}
              >
                Delete Content
              </Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ContentManagement;
