
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/hooks/useTheme';
import { 
  Globe, 
  Mail, 
  MessageSquare, 
  BellRing, 
  Shield, 
  Key
} from 'lucide-react';

// Mock site settings
const initialSettings = {
  general: {
    siteName: 'Golden Age Infotech',
    siteDescription: 'Professional IT solutions for modern businesses',
    contactEmail: 'info@goldenageinfotech.com',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Boulevard, Silicon Valley, CA 94043',
  },
  social: {
    facebook: 'https://facebook.com/goldenageinfotech',
    twitter: 'https://twitter.com/goldenageinfo',
    instagram: 'https://instagram.com/goldenageinfotech',
    linkedin: 'https://linkedin.com/company/goldenageinfotech',
  },
  notifications: {
    emailAlerts: true,
    newUserNotifications: true,
    marketingEmails: false,
    activitySummary: true,
  },
  security: {
    twoFactorAuth: false,
    passwordResetInterval: '90',
    sessionTimeout: '30',
  }
};

const AdminSettings = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [activeTab, setActiveTab] = useState('general');
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updatedSettings = {
      ...settings,
      general: {
        siteName: form.siteName.value,
        siteDescription: form.siteDescription.value,
        contactEmail: form.contactEmail.value,
        phone: form.phone.value,
        address: form.address.value,
      }
    };
    
    setSettings(updatedSettings);
    toast({
      title: "Settings Updated",
      description: "General settings have been updated successfully",
    });
  };

  const handleSocialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updatedSettings = {
      ...settings,
      social: {
        facebook: form.facebook.value,
        twitter: form.twitter.value,
        instagram: form.instagram.value,
        linkedin: form.linkedin.value,
      }
    };
    
    setSettings(updatedSettings);
    toast({
      title: "Settings Updated",
      description: "Social media settings have been updated successfully",
    });
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: value,
      }
    });
  };

  const saveNotificationSettings = () => {
    toast({
      title: "Settings Updated",
      description: "Notification settings have been updated successfully",
    });
  };

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const updatedSettings = {
      ...settings,
      security: {
        twoFactorAuth: form.twoFactorAuth.checked,
        passwordResetInterval: form.passwordResetInterval.value,
        sessionTimeout: form.sessionTimeout.value,
      }
    };
    
    setSettings(updatedSettings);
    toast({
      title: "Settings Updated",
      description: "Security settings have been updated successfully",
    });
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
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="emailAlerts" 
                    checked={settings.notifications.emailAlerts}
                    onChange={(e) => handleNotificationChange('emailAlerts', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-golden-500 focus:ring-golden-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BellRing className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">New User Notifications</p>
                    <p className="text-xs text-muted-foreground">Get notified when new users register</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="newUserNotifications" 
                    checked={settings.notifications.newUserNotifications}
                    onChange={(e) => handleNotificationChange('newUserNotifications', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-golden-500 focus:ring-golden-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Marketing Emails</p>
                    <p className="text-xs text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="marketingEmails" 
                    checked={settings.notifications.marketingEmails}
                    onChange={(e) => handleNotificationChange('marketingEmails', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-golden-500 focus:ring-golden-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Activity Summary</p>
                    <p className="text-xs text-muted-foreground">Weekly summary of site activity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="activitySummary" 
                    checked={settings.notifications.activitySummary}
                    onChange={(e) => handleNotificationChange('activitySummary', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-golden-500 focus:ring-golden-500"
                  />
                </div>
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
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="twoFactorAuth" 
                      name="twoFactorAuth"
                      defaultChecked={settings.security.twoFactorAuth}
                      className="h-4 w-4 rounded border-gray-300 text-golden-500 focus:ring-golden-500"
                    />
                  </div>
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
