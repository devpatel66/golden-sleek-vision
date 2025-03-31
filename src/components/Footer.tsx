
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-gold">
                Golden Age
              </span>
              <span className="ml-2 text-lg font-semibold text-white">Infotech</span>
            </Link>
            <p className="text-gray-400">
              Providing innovative IT solutions and consultancy services to empower businesses in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-golden-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-golden-500 transition-colors">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-golden-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  1234 Tech Plaza, Silicon Valley, CA 94024, USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-golden-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-golden-500 flex-shrink-0" />
                <span className="text-gray-400">info@goldenageit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Golden Age Infotech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-golden-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-golden-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-golden-500 text-sm transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
