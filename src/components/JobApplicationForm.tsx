
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';

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

interface JobApplicationFormProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
}

const JobApplicationForm = ({ job, isOpen, onClose }: JobApplicationFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      // Check file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!allowedTypes.includes(fileExtension)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Reset file input
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const firstNameInput = formElement.firstName as HTMLInputElement;
    const lastNameInput = formElement.lastName as HTMLInputElement;
    const emailInput = formElement.email as HTMLInputElement;
    const phoneInput = formElement.phone as HTMLInputElement;
    const coverLetterTextarea = formElement.coverLetter as HTMLTextAreaElement;

    // Basic validation
    if (!selectedFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to continue",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying for the ${job.title} position. We'll review your application and get back to you soon.`,
    });

    // Reset form
    formElement.reset();
    setSelectedFile(null);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Apply for {job.title}</SheetTitle>
          <SheetDescription>
            {job.department} • {job.location} • {job.type}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resume *</h3>
            
            {!selectedFile ? (
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <Label htmlFor="resume" className="cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Click to upload your resume
                  </span>
                  <br />
                  <span className="text-xs text-gray-500">
                    PDF, DOC, or DOCX (max 5MB)
                  </span>
                </Label>
                <Input 
                  id="resume" 
                  name="resume" 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-golden-100 dark:bg-golden-900 rounded flex items-center justify-center">
                    <Upload className="h-4 w-4 text-golden-600 dark:text-golden-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={removeFile}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Cover Letter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cover Letter</h3>
            <div className="space-y-2">
              <Label htmlFor="coverLetter">
                Tell us why you're interested in this position
              </Label>
              <Textarea 
                id="coverLetter" 
                name="coverLetter"
                rows={6}
                placeholder="I'm excited about this opportunity because..."
                className="resize-none"
              />
            </div>
          </div>

          {/* Job Details Summary */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Position Summary</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {job.description}
            </p>
            <div className="text-sm">
              <span className="font-medium">Salary:</span> {job.salary}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-golden-600 hover:bg-golden-700 text-white"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default JobApplicationForm;
