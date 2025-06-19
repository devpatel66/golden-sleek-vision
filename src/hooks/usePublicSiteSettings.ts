
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface PublicSiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  phone: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export const usePublicSiteSettings = () => {
  const [settings, setSettings] = useState<PublicSiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('key, value')
        .in('key', [
          'site_name',
          'site_description',
          'contact_email',
          'phone',
          'address',
          'facebook_url',
          'twitter_url',
          'instagram_url',
          'linkedin_url'
        ]);

      if (error) throw error;

      // Transform the flat structure to our nested structure
      const transformedSettings: PublicSiteSettings = {
        siteName: data.find(s => s.key === 'site_name')?.value || 'Golden Age Infotech',
        siteDescription: data.find(s => s.key === 'site_description')?.value || 'Professional IT solutions for modern businesses',
        contactEmail: data.find(s => s.key === 'contact_email')?.value || 'info@goldenageinfotech.com',
        phone: data.find(s => s.key === 'phone')?.value || '+1 (555) 123-4567',
        address: data.find(s => s.key === 'address')?.value || '123 Tech Boulevard, Silicon Valley, CA 94043',
        social: {
          facebook: data.find(s => s.key === 'facebook_url')?.value || '',
          twitter: data.find(s => s.key === 'twitter_url')?.value || '',
          instagram: data.find(s => s.key === 'instagram_url')?.value || '',
          linkedin: data.find(s => s.key === 'linkedin_url')?.value || '',
        },
      };

      setSettings(transformedSettings);
    } catch (error) {
      console.error('Error fetching public settings:', error);
      // Set default values if fetch fails
      setSettings({
        siteName: 'Golden Age Infotech',
        siteDescription: 'Professional IT solutions for modern businesses',
        contactEmail: 'info@goldenageinfotech.com',
        phone: '+1 (555) 123-4567',
        address: '123 Tech Boulevard, Silicon Valley, CA 94043',
        social: {
          facebook: '',
          twitter: '',
          instagram: '',
          linkedin: '',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();

    // Set up real-time subscription for settings changes
    const channel = supabase
      .channel('site-settings-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'site_settings'
        },
        () => {
          console.log('Site settings updated, refreshing...');
          fetchSettings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    settings,
    loading,
    refetch: fetchSettings,
  };
};
