
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Users, FileText, Briefcase, Wrench, TrendingUp, Eye } from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalBlogs: number;
  totalProjects: number;
  totalServices: number;
  totalViews: number;
  pendingApplications: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalBlogs: 0,
    totalProjects: 0,
    totalServices: 0,
    totalViews: 0,
    pendingApplications: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          { count: usersCount },
          { count: blogsCount },
          { count: projectsCount },
          { count: servicesCount },
          { data: blogsData },
          { count: pendingAppsCount }
        ] = await Promise.all([
          supabase.from('users').select('*', { count: 'exact', head: true }),
          supabase.from('blogs').select('*', { count: 'exact', head: true }),
          supabase.from('projects').select('*', { count: 'exact', head: true }),
          supabase.from('services').select('*', { count: 'exact', head: true }),
          supabase.from('blogs').select('views'),
          supabase.from('job_applications').select('*', { count: 'exact', head: true }).eq('status', 'pending')
        ]);

        const totalViews = blogsData?.reduce((sum, blog) => sum + (blog.views || 0), 0) || 0;

        setStats({
          totalUsers: usersCount || 0,
          totalBlogs: blogsCount || 0,
          totalProjects: projectsCount || 0,
          totalServices: servicesCount || 0,
          totalViews,
          pendingApplications: pendingAppsCount || 0,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      description: 'Registered users',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogs,
      description: 'Published and draft posts',
      icon: FileText,
      color: 'text-green-600',
    },
    {
      title: 'Projects',
      value: stats.totalProjects,
      description: 'Total projects',
      icon: Briefcase,
      color: 'text-purple-600',
    },
    {
      title: 'Services',
      value: stats.totalServices,
      description: 'Available services',
      icon: Wrench,
      color: 'text-orange-600',
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      description: 'Blog post views',
      icon: Eye,
      color: 'text-indigo-600',
    },
    {
      title: 'Pending Applications',
      value: stats.pendingApplications,
      description: 'Job applications to review',
      icon: TrendingUp,
      color: 'text-red-600',
    },
  ];

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-golden-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the admin dashboard. Here's an overview of your application.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid gap-2">
              <button className="flex items-center justify-start rounded-md border p-3 text-sm hover:bg-accent">
                <FileText className="mr-2 h-4 w-4" />
                Create new blog post
              </button>
              <button className="flex items-center justify-start rounded-md border p-3 text-sm hover:bg-accent">
                <Briefcase className="mr-2 h-4 w-4" />
                Add new project
              </button>
              <button className="flex items-center justify-start rounded-md border p-3 text-sm hover:bg-accent">
                <Wrench className="mr-2 h-4 w-4" />
                Create new service
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Blog post published</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Project status updated</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
