
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
      console.log('Fetching settings...');
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) {
        console.error('Error fetching settings:', error);
        throw error;
      }

      console.log('Fetched settings data:', data);

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

      console.log('Transformed settings:', transformedSettings);
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
      console.log(`Updating setting ${key} to ${value}`);
      const { error } = await supabase
        .from('site_settings')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('key', key);

      if (error) {
        console.error('Error updating setting:', error);
        throw error;
      }

      console.log(`Successfully updated ${key}`);
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
      console.log('Updating multiple settings:', updates);
      
      // Update multiple settings in parallel
      const promises = updates.map(({ key, value }) => {
        console.log(`Updating ${key} to ${value}`);
        return supabase
          .from('site_settings')
          .update({ value, updated_at: new Date().toISOString() })
          .eq('key', key);
      });

      const results = await Promise.all(promises);
      
      // Check if any updates failed
      const hasError = results.some(result => result.error);
      if (hasError) {
        console.error('Some updates failed:', results.filter(r => r.error));
        throw new Error('One or more updates failed');
      }

      console.log('All updates successful');
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

    // Set up real-time subscription for settings changes
    const channel = supabase
      .channel('site_settings_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'site_settings'
        },
        () => {
          console.log('Settings changed, refetching...');
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
    updateSetting,
    updateMultipleSettings,
    refetch: fetchSettings,
  };
};
