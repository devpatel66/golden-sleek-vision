
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MoreVertical, Edit, Trash, Eye, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  status: 'active' | 'inactive';
  postedDate: string;
  applicationsCount: number;
}

interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeFileName?: string;
  appliedDate: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'rejected' | 'hired';
}

const initialJobs: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team.',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Redux knowledge'],
    benefits: ['Health insurance', 'Remote work', 'Professional development'],
    status: 'active',
    postedDate: '2024-01-15',
    applicationsCount: 5
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Join our design team to create beautiful user experiences.',
    requirements: ['3+ years UI/UX experience', 'Figma proficiency', 'Portfolio required'],
    benefits: ['Creative environment', 'Latest tools', 'Conference attendance'],
    status: 'active',
    postedDate: '2024-01-20',
    applicationsCount: 3
  }
];

const mockApplications: JobApplication[] = [
  {
    id: '1',
    jobId: '1',
    jobTitle: 'Senior Frontend Developer',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    coverLetter: 'I am excited to apply for the Senior Frontend Developer position...',
    resumeFileName: 'john_doe_resume.pdf',
    appliedDate: '2024-02-01',
    status: 'pending'
  },
  {
    id: '2',
    jobId: '1',
    jobTitle: 'Senior Frontend Developer',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 987-6543',
    coverLetter: 'With over 6 years of React experience...',
    resumeFileName: 'jane_smith_resume.pdf',
    appliedDate: '2024-02-02',
    status: 'reviewed'
  },
  {
    id: '3',
    jobId: '2',
    jobTitle: 'UI/UX Designer',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 456-7890',
    coverLetter: 'I am passionate about creating intuitive user experiences...',
    resumeFileName: 'alice_johnson_portfolio.pdf',
    appliedDate: '2024-02-03',
    status: 'interviewed'
  }
];

const AdminCareers = () => {
  const [jobs, setJobs] = useState<JobPosition[]>(initialJobs);
  const [applications, setApplications] = useState<JobApplication[]>(mockApplications);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [selectedJobApplications, setSelectedJobApplications] = useState<JobApplication[]>([]);
  const { toast } = useToast();

  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const newJob: JobPosition = {
      id: selectedJob?.id || Date.now().toString(),
      title: formData.get('title') as string,
      department: formData.get('department') as string,
      location: formData.get('location') as string,
      type: formData.get('type') as string,
      salary: formData.get('salary') as string,
      description: formData.get('description') as string,
      requirements: (formData.get('requirements') as string).split('\n').filter(r => r.trim()),
      benefits: (formData.get('benefits') as string).split('\n').filter(b => b.trim()),
      status: 'active',
      postedDate: selectedJob?.postedDate || new Date().toISOString().split('T')[0],
      applicationsCount: selectedJob?.applicationsCount || 0
    };

    if (selectedJob) {
      setJobs(jobs.map(job => job.id === selectedJob.id ? newJob : job));
      toast({ title: "Job Updated", description: "Job position has been updated successfully." });
    } else {
      setJobs([...jobs, newJob]);
      toast({ title: "Job Created", description: "New job position has been created successfully." });
    }

    setIsJobFormOpen(false);
    setSelectedJob(null);
  };

  const handleDeleteJob = (jobId: string) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    toast({ title: "Job Deleted", description: "Job position has been deleted successfully." });
  };

  const handleViewApplications = (job: JobPosition) => {
    const jobApplications = applications.filter(app => app.jobId === job.id);
    setSelectedJobApplications(jobApplications);
    setSelectedJob(job);
    setIsApplicationsOpen(true);
  };

  const handleEditJob = (job: JobPosition) => {
    setSelectedJob(job);
    setIsJobFormOpen(true);
  };

  const handleAddNewJob = () => {
    setSelectedJob(null);
    setIsJobFormOpen(true);
  };

  const updateApplicationStatus = (applicationId: string, newStatus: JobApplication['status']) => {
    setApplications(applications.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    setSelectedJobApplications(selectedJobApplications.map(app =>
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    toast({ title: "Status Updated", description: "Application status has been updated." });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <SectionHeading
          title="Career Management"
          subtitle="Manage job positions and view applications"
        />
        <Button onClick={handleAddNewJob} className="bg-golden-600 hover:bg-golden-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Position
        </Button>
      </div>

      {/* Job Positions Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Job Positions</CardTitle>
          <CardDescription>View and manage all job positions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applications</TableHead>
                <TableHead>Posted Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.department}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="link"
                      onClick={() => handleViewApplications(job)}
                      className="p-0 h-auto"
                    >
                      {job.applicationsCount} applications
                    </Button>
                  </TableCell>
                  <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewApplications(job)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Applications
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEditJob(job)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteJob(job.id)}>
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Job Form Dialog */}
      <Dialog open={isJobFormOpen} onOpenChange={setIsJobFormOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedJob ? 'Edit Job Position' : 'Add New Job Position'}</DialogTitle>
            <DialogDescription>
              {selectedJob ? 'Update the job position details.' : 'Create a new job position.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitJob} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={selectedJob?.title}
                  placeholder="e.g., Senior Frontend Developer"
                  required
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  name="department"
                  defaultValue={selectedJob?.department}
                  placeholder="e.g., Engineering"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={selectedJob?.location}
                  placeholder="e.g., Remote / New York"
                  required
                />
              </div>
              <div>
                <Label htmlFor="type">Job Type</Label>
                <select
                  id="type"
                  name="type"
                  defaultValue={selectedJob?.type}
                  className="w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-golden-500 focus:outline-none focus:ring-golden-500"
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="salary">Salary Range</Label>
              <Input
                id="salary"
                name="salary"
                defaultValue={selectedJob?.salary}
                placeholder="e.g., $120,000 - $150,000"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={selectedJob?.description}
                placeholder="Describe the role and responsibilities..."
                rows={3}
                required
              />
            </div>
            <div>
              <Label htmlFor="requirements">Requirements (one per line)</Label>
              <Textarea
                id="requirements"
                name="requirements"
                defaultValue={selectedJob?.requirements.join('\n')}
                placeholder="5+ years of React experience&#10;TypeScript proficiency&#10;Redux knowledge"
                rows={4}
                required
              />
            </div>
            <div>
              <Label htmlFor="benefits">Benefits (one per line)</Label>
              <Textarea
                id="benefits"
                name="benefits"
                defaultValue={selectedJob?.benefits.join('\n')}
                placeholder="Health insurance&#10;Remote work options&#10;Professional development"
                rows={3}
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsJobFormOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-golden-600 hover:bg-golden-700">
                {selectedJob ? 'Update Job' : 'Create Job'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Applications Dialog */}
      <Dialog open={isApplicationsOpen} onOpenChange={setIsApplicationsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Applications for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              View and manage applications for this position.
            </DialogDescription>
          </DialogHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedJobApplications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.firstName} {application.lastName}
                  </TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.phone}</TableCell>
                  <TableCell>{new Date(application.appliedDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <select
                      value={application.status}
                      onChange={(e) => updateApplicationStatus(application.id, e.target.value as JobApplication['status'])}
                      className="rounded-md border border-gray-200 px-2 py-1 text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="interviewed">Interviewed</option>
                      <option value="rejected">Rejected</option>
                      <option value="hired">Hired</option>
                    </select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Application Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Name</Label>
                            <p className="text-sm">{application.firstName} {application.lastName}</p>
                          </div>
                          <div>
                            <Label>Email</Label>
                            <p className="text-sm">{application.email}</p>
                          </div>
                          <div>
                            <Label>Phone</Label>
                            <p className="text-sm">{application.phone}</p>
                          </div>
                          <div>
                            <Label>Cover Letter</Label>
                            <p className="text-sm bg-gray-50 p-3 rounded-md">{application.coverLetter}</p>
                          </div>
                          {application.resumeFileName && (
                            <div>
                              <Label>Resume</Label>
                              <p className="text-sm text-blue-600">{application.resumeFileName}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCareers;
