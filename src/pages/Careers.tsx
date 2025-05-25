
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import JobApplicationForm from '@/components/JobApplicationForm';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

const jobListings: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern technologies.',
    requirements: [
      '5+ years of experience with React/TypeScript',
      'Strong knowledge of HTML5, CSS3, and JavaScript',
      'Experience with state management (Redux, Zustand)',
      'Familiarity with testing frameworks (Jest, Cypress)',
      'Understanding of responsive design principles'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible working hours',
      'Professional development budget',
      'Remote work options'
    ],
    postedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Join our design team to create beautiful and intuitive user experiences. You will work closely with product managers and engineers to bring designs to life.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, or similar tools',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of design systems and atomic design',
      'Experience with user research and testing'
    ],
    benefits: [
      'Competitive salary and benefits',
      'Creative and collaborative work environment',
      'Latest design tools and equipment',
      'Conference and workshop attendance',
      'Flexible PTO policy'
    ],
    postedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'We need a DevOps Engineer to help us scale our infrastructure and improve our deployment processes. You will work on automation, monitoring, and cloud infrastructure.',
    requirements: [
      '4+ years of DevOps/Infrastructure experience',
      'Experience with AWS, Azure, or GCP',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Proficiency with CI/CD pipelines',
      'Experience with Infrastructure as Code (Terraform, CloudFormation)'
    ],
    benefits: [
      'Competitive compensation package',
      'Health and wellness benefits',
      'Learning and development opportunities',
      'Cutting-edge technology stack',
      'Work-life balance'
    ],
    postedDate: '2024-01-25'
  },
  {
    id: '4',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'Lead product strategy and execution for our core platform. You will work with cross-functional teams to define and deliver products that delight our customers.',
    requirements: [
      '5+ years of product management experience',
      'Experience with agile development methodologies',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
      'Background in B2B SaaS products preferred'
    ],
    benefits: [
      'Equity participation',
      'Comprehensive health benefits',
      'Unlimited vacation policy',
      'Home office stipend',
      'Career growth opportunities'
    ],
    postedDate: '2024-02-01'
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  const handleApplyNow = (job: Job) => {
    setSelectedJob(job);
    setIsApplicationFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsApplicationFormOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-golden-50 to-golden-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Join Our <span className="text-golden-600 dark:text-golden-400">Team</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're building the future of technology. Join our passionate team of innovators, 
            creators, and problem-solvers who are making a real impact.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-golden-600" />
              <span className="text-gray-700 dark:text-gray-300">50+ Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-golden-600" />
              <span className="text-gray-700 dark:text-gray-300">Remote-First Culture</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-golden-600" />
              <span className="text-gray-700 dark:text-gray-300">Competitive Benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Open Positions"
            subtitle="Explore our current job openings and find your next career opportunity"
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {job.department}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <CardDescription className="text-base">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-golden-500 rounded-full mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handleApplyNow(job)}
                    className="w-full bg-golden-600 hover:bg-golden-700 text-white"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Work With Us?"
            subtitle="Discover what makes our workplace special"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-golden-600 dark:text-golden-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Work with talented individuals who share your passion for innovation and excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-golden-600 dark:text-golden-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive health coverage, equity packages, and generous time-off policies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-golden-600 dark:text-golden-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Remote-first culture with flexible hours to support your work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm 
          job={selectedJob}
          isOpen={isApplicationFormOpen}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Careers;
