
import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
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

// Mock data for services
const mockServices = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web application development using modern technologies',
    category: 'Development',
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development',
    category: 'Development',
    status: 'active',
    createdAt: '2024-01-10'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User interface and experience design services',
    category: 'Design',
    status: 'active',
    createdAt: '2024-01-05'
  }
];

const AdminServices = () => {
  const [services, setServices] = useState(mockServices);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Services</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage your service offerings
          </p>
        </div>
        <Button className="bg-golden-500 hover:bg-golden-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search services..."
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
              <TableHead>Service</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredServices.map((service) => (
              <TableRow key={service.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{service.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{service.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={service.status === 'active' ? 'default' : 'secondary'}
                    className={service.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {service.status}
                  </Badge>
                </TableCell>
                <TableCell>{service.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(service.id)}
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

export default AdminServices;
