
-- Create a table for testimonials
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  company TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for testimonials
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to view published testimonials
CREATE POLICY "Anyone can view published testimonials" 
  ON public.testimonials 
  FOR SELECT 
  USING (status = 'published');

-- Policy to allow authenticated users to view all testimonials (for admin)
CREATE POLICY "Authenticated users can view all testimonials" 
  ON public.testimonials 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Policy to allow authenticated users to insert testimonials (for admin)
CREATE POLICY "Authenticated users can create testimonials" 
  ON public.testimonials 
  FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

-- Policy to allow authenticated users to update testimonials (for admin)
CREATE POLICY "Authenticated users can update testimonials" 
  ON public.testimonials 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Policy to allow authenticated users to delete testimonials (for admin)
CREATE POLICY "Authenticated users can delete testimonials" 
  ON public.testimonials 
  FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Add trigger for updated_at
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
