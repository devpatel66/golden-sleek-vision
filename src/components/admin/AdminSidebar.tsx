
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings,
  ChevronRight
} from 'lucide-react';

interface AdminSidebarProps {
  open: boolean;
}

const navItems = [
  { 
    title: 'Dashboard', 
    path: '/admin/dashboard', 
    icon: <LayoutDashboard size={20} /> 
  },
  { 
    title: 'Users', 
    path: '/admin/users', 
    icon: <Users size={20} /> 
  },
  { 
    title: 'Content', 
    path: '/admin/content', 
    icon: <FileText size={20} /> 
  },
  { 
    title: 'Settings', 
    path: '/admin/settings', 
    icon: <Settings size={20} /> 
  },
];

const AdminSidebar = ({ open }: AdminSidebarProps) => {
  const location = useLocation();
  
  return (
    <aside 
      className={cn(
        "fixed left-0 z-20 h-[calc(100vh-64px)] transform bg-sidebar border-r border-border transition-all duration-300 dark:bg-gray-800",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="h-full">
        <nav className="mt-6 flex flex-col space-y-2 px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center rounded-md px-3 py-3 text-sm transition-colors duration-200",
                location.pathname === item.path
                  ? "bg-golden-500/10 text-golden-500 dark:bg-golden-500/20 dark:text-golden-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
              )}
            >
              <span className="mr-3 flex h-6 w-6 items-center justify-center">{item.icon}</span>
              {open && (
                <>
                  <span className="flex-1">{item.title}</span>
                  {location.pathname === item.path && (
                    <ChevronRight size={16} />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
