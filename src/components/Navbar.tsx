
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-black/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-gold">
              Golden Age
            </span>
            <span className="ml-2 text-lg font-semibold">Infotech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-montserrat font-medium transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-golden-500"
                    : "hover:text-golden-500"
                )}
              >
                {link.title}
              </Link>
            ))}
            <a
              href="/contact"
              className="button-golden"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                "block py-2 font-montserrat font-medium transition-colors duration-200",
                location.pathname === link.path
                  ? "text-golden-500"
                  : "hover:text-golden-500"
              )}
            >
              {link.title}
            </Link>
          ))}
          <a
            href="/contact"
            className="button-golden w-full text-center block mt-4"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
