
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  User, 
  LogOut,
  Home
} from 'lucide-react';

interface AdminHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  user: any;
}

const AdminHeader = ({ sidebarOpen, setSidebarOpen, user }: AdminHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background px-4 dark:bg-gray-900">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        <div className="flex items-center">
          <span className="text-xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-gold dark:text-golden-400">
            Golden Age
          </span>
          <span className="ml-2 text-lg font-semibold">Admin</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} className="text-golden-400" /> : <Moon size={20} />}
        </Button>
        
        <Link to="/">
          <Button 
            variant="ghost" 
            size="icon"
            aria-label="Go to website"
          >
            <Home size={20} />
          </Button>
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="ml-2 flex items-center space-x-2 border-border"
            >
              <User size={16} />
              <span>{user?.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem disabled className="opacity-70">
              Signed in as {user?.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="text-red-500 hover:text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AdminHeader;
