
-- Create a storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true);

-- Create a policy to allow public read access to blog images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');

-- Create a policy to allow authenticated users to upload blog images
CREATE POLICY "Authenticated users can upload blog images" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Create a policy to allow authenticated users to update blog images
CREATE POLICY "Authenticated users can update blog images" ON storage.objects 
FOR UPDATE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Create a policy to allow authenticated users to delete blog images
CREATE POLICY "Authenticated users can delete blog images" ON storage.objects 
FOR DELETE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Add image_url column to blogs table
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS image_url TEXT;
