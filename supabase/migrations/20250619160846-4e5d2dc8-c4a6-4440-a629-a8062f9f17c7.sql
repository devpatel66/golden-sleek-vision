
-- Create a table for site settings
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to read settings
CREATE POLICY "Anyone can view site settings" 
  ON public.site_settings 
  FOR SELECT 
  TO public
  USING (true);

-- Create policy to allow authenticated users to update settings
CREATE POLICY "Authenticated users can update site settings" 
  ON public.site_settings 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to insert settings
CREATE POLICY "Authenticated users can insert site settings" 
  ON public.site_settings 
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);

-- Insert default site settings
INSERT INTO public.site_settings (key, value, category) VALUES
('site_name', 'Golden Age Infotech', 'general'),
('site_description', 'Professional IT solutions for modern businesses', 'general'),
('contact_email', 'info@goldenageinfotech.com', 'general'),
('phone', '+1 (555) 123-4567', 'general'),
('address', '123 Tech Boulevard, Silicon Valley, CA 94043', 'general'),
('facebook_url', 'https://facebook.com/goldenageinfotech', 'social'),
('twitter_url', 'https://twitter.com/goldenageinfo', 'social'),
('instagram_url', 'https://instagram.com/goldenageinfotech', 'social'),
('linkedin_url', 'https://linkedin.com/company/goldenageinfotech', 'social'),
('email_alerts', 'true', 'notifications'),
('new_user_notifications', 'true', 'notifications'),
('marketing_emails', 'false', 'notifications'),
('activity_summary', 'true', 'notifications'),
('two_factor_auth', 'false', 'security'),
('password_reset_interval', '90', 'security'),
('session_timeout', '30', 'security');

-- Create trigger to update updated_at column
CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
