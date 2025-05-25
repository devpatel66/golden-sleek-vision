import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface ContentItem {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'archived';
  author: string;
  createdAt: string;
  updatedAt: string;
}

const Content = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const titleInput = formElement.elements.namedItem('title') as HTMLInputElement;
    const title = titleInput?.value || '';
    
    if (title.trim()) {
      const newContent: ContentItem = {
        id: Date.now().toString(),
        title: title,
        status: 'draft',
        author: 'Admin User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setContentItems([...contentItems, newContent]);
      formElement.reset();
      
      toast({
        title: "Content Created",
        description: "New content item has been created successfully.",
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Content Management</h1>

      {/* Content Creation Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Content</CardTitle>
          <CardDescription>Add a new content item to the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" name="title" placeholder="Enter title" required />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" name="content" placeholder="Enter content" rows={4} />
            </div>
            <Button type="submit">Create Content</Button>
          </form>
        </CardContent>
      </Card>

      {/* Content Listing */}
      <Card>
        <CardHeader>
          <CardTitle>Content List</CardTitle>
          <CardDescription>Manage existing content items.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your content items.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(item.updatedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;
