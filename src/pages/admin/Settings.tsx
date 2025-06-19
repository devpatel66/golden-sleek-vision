
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/hooks/useTheme';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { 
  Globe, 
  Mail, 
  MessageSquare, 
  BellRing, 
  Shield, 
  Key,
  Loader2
} from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const { settings, loading, updateMultipleSettings } = useSiteSettings();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading settings...</span>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Failed to load settings. Please try refreshing the page.</p>
      </div>
    );
  }

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updates = [
      { key: 'site_name', value: form.siteName.value },
      { key: 'site_description', value: form.siteDescription.value },
      { key: 'contact_email', value: form.contactEmail.value },
      { key: 'phone', value: form.phone.value },
      { key: 'address', value: form.address.value },
    ];
    
    const success = await updateMultipleSettings(updates);
    if (success) {
      toast({
        title: "Settings Updated",
        description: "General settings have been updated successfully",
      });
    }
  };

  const handleSocialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updates = [
      { key: 'facebook_url', value: form.facebook.value },
      { key: 'twitter_url', value: form.twitter.value },
      { key: 'instagram_url', value: form.instagram.value },
      { key: 'linkedin_url', value: form.linkedin.value },
    ];
    
    const success = await updateMultipleSettings(updates);
    if (success) {
      toast({
        title: "Settings Updated",
        description: "Social media settings have been updated successfully",
      });
    }
  };

  const handleNotificationChange = async (key: string, value: boolean) => {
    const updates = [{ key, value: value.toString() }];
    await updateMultipleSettings(updates);
  };

  const saveNotificationSettings = () => {
    toast({
      title: "Settings Updated",
      description: "Notification settings have been updated successfully",
    });
  };

  const handleSecuritySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updates = [
      { key: 'two_factor_auth', value: form.twoFactorAuth.checked.toString() },
      { key: 'password_reset_interval', value: form.passwordResetInterval.value },
      { key: 'session_timeout', value: form.sessionTimeout.value },
    ];
    
    const success = await updateMultipleSettings(updates);
    if (success) {
      toast({
        title: "Settings Updated",
        description: "Security settings have been updated successfully",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your website settings.</p>
      </div>

      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your website's general information.</CardDescription>
            </CardHeader>
            <form onSubmit={handleGeneralSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="siteName" className="text-sm font-medium">Site Name</label>
                  <Input 
                    id="siteName" 
                    name="siteName" 
                    defaultValue={settings.general.siteName} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="siteDescription" className="text-sm font-medium">Site Description</label>
                  <Textarea 
                    id="siteDescription" 
                    name="siteDescription" 
                    rows={3} 
                    defaultValue={settings.general.siteDescription} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactEmail" className="text-sm font-medium">Contact Email</label>
                  <Input 
                    id="contactEmail" 
                    name="contactEmail" 
                    type="email" 
                    defaultValue={settings.general.contactEmail} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    defaultValue={settings.general.phone} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">Address</label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    rows={2} 
                    defaultValue={settings.general.address} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-golden-500 hover:bg-golden-600 text-black">
                  Save General Settings
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the appearance of your website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="theme" className="text-sm font-medium">Theme</label>
                <div className="flex space-x-4">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    onClick={() => setTheme('light')}
                    className={theme === 'light' ? 'bg-golden-500 text-black' : ''}
                  >
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    onClick={() => setTheme('dark')}
                    className={theme === 'dark' ? 'bg-golden-500 text-black' : ''}
                  >
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    onClick={() => setTheme('system')}
                    className={theme === 'system' ? 'bg-golden-500 text-black' : ''}
                  >
                    System
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Manage your social media links.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSocialSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="facebook" className="text-sm font-medium">Facebook URL</label>
                  <Input 
                    id="facebook" 
                    name="facebook" 
                    defaultValue={settings.social.facebook} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="twitter" className="text-sm font-medium">Twitter URL</label>
                  <Input 
                    id="twitter" 
                    name="twitter" 
                    defaultValue={settings.social.twitter} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="instagram" className="text-sm font-medium">Instagram URL</label>
                  <Input 
                    id="instagram" 
                    name="instagram" 
                    defaultValue={settings.social.instagram} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn URL</label>
                  <Input 
                    id="linkedin" 
                    name="linkedin" 
                    defaultValue={settings.social.linkedin} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-golden-500 hover:bg-golden-600 text-black">
                  Save Social Media Settings
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email Alerts</p>
                    <p className="text-xs text-muted-foreground">Receive important alerts via email</p>
                  </div>
                </div>
                <Switch
                  checked={settings.notifications.emailAlerts}
                  onCheckedChange={(checked) => handleNotificationChange('email_alerts', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BellRing className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">New User Notifications</p>
                    <p className="text-xs text-muted-foreground">Get notified when new users register</p>
                  </div>
                </div>
                <Switch
                  checked={settings.notifications.newUserNotifications}
                  onCheckedChange={(checked) => handleNotificationChange('new_user_notifications', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Marketing Emails</p>
                    <p className="text-xs text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                </div>
                <Switch
                  checked={settings.notifications.marketingEmails}
                  onCheckedChange={(checked) => handleNotificationChange('marketing_emails', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Activity Summary</p>
                    <p className="text-xs text-muted-foreground">Weekly summary of site activity</p>
                  </div>
                </div>
                <Switch
                  checked={settings.notifications.activitySummary}
                  onCheckedChange={(checked) => handleNotificationChange('activity_summary', checked)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={saveNotificationSettings}
                className="bg-golden-500 hover:bg-golden-600 text-black"
              >
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security preferences.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSecuritySubmit}>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Two-Factor Authentication</p>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    name="twoFactorAuth"
                    defaultChecked={settings.security.twoFactorAuth}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="passwordResetInterval" className="text-sm font-medium">Password Reset Interval (days)</label>
                  <div className="flex items-center space-x-2">
                    <Key className="h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="passwordResetInterval" 
                      name="passwordResetInterval" 
                      type="number" 
                      min="0" 
                      max="365" 
                      defaultValue={settings.security.passwordResetInterval} 
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">How often users are required to change their password (0 for never)</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="sessionTimeout" className="text-sm font-medium">Session Timeout (minutes)</label>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="sessionTimeout" 
                      name="sessionTimeout" 
                      type="number" 
                      min="5" 
                      max="1440" 
                      defaultValue={settings.security.sessionTimeout} 
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">How long until inactive users are automatically logged out</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-golden-500 hover:bg-golden-600 text-black">
                  Save Security Settings
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
