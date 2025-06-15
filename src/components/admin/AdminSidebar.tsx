
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Users, 
  Briefcase, 
  FolderOpen,
  PenTool,
  MessageSquare,
  Star
} from "lucide-react";

interface AdminSidebarProps {
  open: boolean;
}

const AdminSidebar = ({ open }: AdminSidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Briefcase, label: "Services", path: "/admin/services" },
    { icon: FolderOpen, label: "Projects", path: "/admin/projects" },
    { icon: PenTool, label: "Blogs", path: "/admin/blogs" },
    { icon: FileText, label: "Content", path: "/admin/content" },
    { icon: MessageSquare, label: "Careers", path: "/admin/careers" },
    { icon: Star, label: "Testimonials", path: "/admin/testimonials" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-64px)] bg-background border-r transition-all duration-300",
        open ? "w-64" : "w-20"
      )}
    >
      <nav className="h-full px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-golden-100 text-golden-700 dark:bg-golden-900 dark:text-golden-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {open && (
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
