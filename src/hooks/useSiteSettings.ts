
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SiteSettings {
  general: {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    phone: string;
    address: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  notifications: {
    emailAlerts: boolean;
    newUserNotifications: boolean;
    marketingEmails: boolean;
    activitySummary: boolean;
  };
  security: {
    twoFactorAuth: boolean;
    passwordResetInterval: string;
    sessionTimeout: string;
  };
}

export const useSiteSettings = () => {
  const [settings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;

      // Transform the flat structure to our nested structure
      const transformedSettings: SiteSettings = {
        general: {
          siteName: data.find(s => s.key === 'site_name')?.value || 'Golden Age Infotech',
          siteDescription: data.find(s => s.key === 'site_description')?.value || '',
          contactEmail: data.find(s => s.key === 'contact_email')?.value || '',
          phone: data.find(s => s.key === 'phone')?.value || '',
          address: data.find(s => s.key === 'address')?.value || '',
        },
        social: {
          facebook: data.find(s => s.key === 'facebook_url')?.value || '',
          twitter: data.find(s => s.key === 'twitter_url')?.value || '',
          instagram: data.find(s => s.key === 'instagram_url')?.value || '',
          linkedin: data.find(s => s.key === 'linkedin_url')?.value || '',
        },
        notifications: {
          emailAlerts: data.find(s => s.key === 'email_alerts')?.value === 'true',
          newUserNotifications: data.find(s => s.key === 'new_user_notifications')?.value === 'true',
          marketingEmails: data.find(s => s.key === 'marketing_emails')?.value === 'true',
          activitySummary: data.find(s => s.key === 'activity_summary')?.value === 'true',
        },
        security: {
          twoFactorAuth: data.find(s => s.key === 'two_factor_auth')?.value === 'true',
          passwordResetInterval: data.find(s => s.key === 'password_reset_interval')?.value || '90',
          sessionTimeout: data.find(s => s.key === 'session_timeout')?.value || '30',
        },
      };

      setSiteSettings(transformedSettings);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast({
        title: "Error",
        description: "Failed to fetch settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('key', key);

      if (error) throw error;

      // Refresh settings after update
      await fetchSettings();
      
      return true;
    } catch (error) {
      console.error('Error updating setting:', error);
      toast({
        title: "Error",
        description: "Failed to update setting",
        variant: "destructive",
      });
      return false;
    }
  };

  const updateMultipleSettings = async (updates: Array<{ key: string; value: string }>) => {
    try {
      // Update multiple settings in parallel
      const promises = updates.map(({ key, value }) =>
        supabase
          .from('site_settings')
          .update({ value, updated_at: new Date().toISOString() })
          .eq('key', key)
      );

      const results = await Promise.all(promises);
      
      // Check if any updates failed
      const hasError = results.some(result => result.error);
      if (hasError) {
        throw new Error('One or more updates failed');
      }

      // Refresh settings after all updates
      await fetchSettings();
      
      return true;
    } catch (error) {
      console.error('Error updating settings:', error);
      toast({
        title: "Error",
        description: "Failed to update settings",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    updateSetting,
    updateMultipleSettings,
    refetch: fetchSettings,
  };
};
