import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import JobApplicationForm from '@/components/JobApplicationForm';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type JobPosition = Tables<'job_positions'>;

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

const Careers = () => {
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  useEffect(() => {
    fetchJobPositions();
  }, []);

  const fetchJobPositions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('job_positions')
        .select('*')
        .eq('status', 'published')
        .order('posted_date', { ascending: false });

      if (error) throw error;
      setJobPositions(data || []);
    } catch (error) {
      console.error('Error fetching job positions:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleApplyNow = (jobPosition: JobPosition) => {
    const job: Job = {
      id: jobPosition.id,
      title: jobPosition.title,
      department: jobPosition.department,
      location: jobPosition.location,
      type: jobPosition.type,
      salary: jobPosition.salary || 'Competitive',
      description: jobPosition.description,
      requirements: jobPosition.requirements || [],
      benefits: jobPosition.benefits || [],
      postedDate: jobPosition.posted_date || jobPosition.created_at || ''
    };
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
            subtitle={`Explore our ${jobPositions.length} current job openings and find your next career opportunity`}
          />
          
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-golden-500"></div>
            </div>
          ) : (
            <>
              {jobPositions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No open positions available at the moment. Check back soon!
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {jobPositions.map((jobPosition) => (
                    <Card key={jobPosition.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {jobPosition.department}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Posted {jobPosition.posted_date ? formatDate(jobPosition.posted_date) : 'Recently'}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{jobPosition.title}</CardTitle>
                        <CardDescription className="text-base">
                          {jobPosition.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {jobPosition.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {jobPosition.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {jobPosition.salary || 'Competitive'}
                          </div>
                        </div>
                        
                        {jobPosition.requirements && jobPosition.requirements.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Key Requirements:</h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                              {jobPosition.requirements.slice(0, 3).map((req, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-golden-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Button 
                          onClick={() => handleApplyNow(jobPosition)}
                          className="w-full bg-golden-600 hover:bg-golden-700 text-white"
                        >
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
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
