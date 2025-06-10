
-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for contact submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Policy to allow authenticated users to view all submissions (for admin)
CREATE POLICY "Authenticated users can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Policy to allow authenticated users to update submissions (for admin)
CREATE POLICY "Authenticated users can update contact submissions" 
  ON public.contact_submissions 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Add trigger for updated_at
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
