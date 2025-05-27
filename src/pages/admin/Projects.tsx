
import { useState } from 'react';
import { Plus, Edit, Trash2, Search, ExternalLink } from 'lucide-react';
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

// Mock data for projects
const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    category: 'Web Development',
    status: 'completed',
    client: 'TechCorp Inc.',
    image: '/placeholder.svg',
    liveUrl: 'https://example.com',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    category: 'Mobile Development',
    status: 'in-progress',
    client: 'SecureBank',
    image: '/placeholder.svg',
    liveUrl: null,
    createdAt: '2024-01-10'
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS integration',
    category: 'Web Development',
    status: 'completed',
    client: 'BusinessCorp',
    image: '/placeholder.svg',
    liveUrl: 'https://businesscorp.com',
    createdAt: '2024-01-05'
  }
];

const AdminProjects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'on-hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Showcase your portfolio and manage project details
          </p>
        </div>
        <Button className="bg-golden-500 hover:bg-golden-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
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
              <TableHead>Project</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {project.title}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-golden-500 hover:text-golden-600"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{project.category}</Badge>
                </TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary"
                    className={getStatusColor(project.status)}
                  >
                    {project.status.replace('-', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>{project.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(project.id)}
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

export default AdminProjects;
