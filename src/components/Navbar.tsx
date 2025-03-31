
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, User, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md"
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-gold dark:text-golden-400">
              Golden Age
            </span>
            <span className="ml-2 text-lg font-semibold dark:text-white">Infotech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-montserrat font-medium transition-colors duration-300 dark:text-gray-200",
                  location.pathname === link.path
                    ? "text-golden-500 dark:text-golden-400"
                    : "hover:text-golden-500 dark:hover:text-golden-400"
                )}
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} className="text-golden-400" /> : <Moon size={20} />}
            </button>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm font-medium">
                  <User size={20} className="text-golden-500" />
                  <span className="dark:text-white">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-10 opacity-0 scale-95 transition-all duration-200 origin-top-right invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible">
                  <div className="py-1">
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Admin Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 font-montserrat font-medium transition-colors duration-300 text-golden-500 dark:text-golden-400 hover:text-golden-600 dark:hover:text-golden-500"
              >
                <Lock size={18} />
                <span>Login</span>
              </Link>
            )}
            
            <Link
              to="/contact"
              className="button-golden dark:bg-gradient-gold dark:text-black"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle and Theme */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} className="text-golden-400" /> : <Moon size={18} />}
            </button>
            
            {isAuthenticated && (
              <Link
                to="/admin/dashboard"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <User size={18} className="text-golden-500" />
              </Link>
            )}
            
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="dark:text-white" />
              ) : (
                <Menu size={24} className="dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block py-2 font-montserrat font-medium transition-colors duration-200 dark:text-gray-200",
                location.pathname === link.path
                  ? "text-golden-500 dark:text-golden-400"
                  : "hover:text-golden-500 dark:hover:text-golden-400"
              )}
            >
              {link.title}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <>
              <Link
                to="/admin/dashboard"
                className="block py-2 font-montserrat font-medium text-golden-500 dark:text-golden-400"
              >
                Admin Dashboard
              </Link>
              <button
                onClick={logout}
                className="block w-full text-left py-2 font-montserrat font-medium text-red-500 dark:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block py-2 font-montserrat font-medium text-golden-500 dark:text-golden-400"
            >
              Login
            </Link>
          )}
          
          <Link
            to="/contact"
            className="button-golden w-full text-center block mt-4 dark:bg-gradient-gold dark:text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
