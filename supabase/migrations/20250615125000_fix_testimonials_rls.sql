
-- Drop existing policies that depend on auth.role() which doesn't work with mock auth
DROP POLICY IF EXISTS "Authenticated users can view all testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can create testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can delete testimonials" ON public.testimonials;

-- Create new policies that allow all operations for now (since we're using mock auth)
-- In production, you would want to implement proper Supabase authentication

-- Policy to allow anyone to view all testimonials (for demo purposes)
CREATE POLICY "Allow all testimonial reads" 
  ON public.testimonials 
  FOR SELECT 
  USING (true);

-- Policy to allow anyone to insert testimonials (for demo purposes)
CREATE POLICY "Allow all testimonial inserts" 
  ON public.testimonials 
  FOR INSERT 
  WITH CHECK (true);

-- Policy to allow anyone to update testimonials (for demo purposes)
CREATE POLICY "Allow all testimonial updates" 
  ON public.testimonials 
  FOR UPDATE 
  USING (true);

-- Policy to allow anyone to delete testimonials (for demo purposes)
CREATE POLICY "Allow all testimonial deletes" 
  ON public.testimonials 
  FOR DELETE 
  USING (true);
