
import { Home, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-rental-600 mr-2" />
              <span className="text-xl font-bold text-rental-600">RentEase</span>
            </div>
            <p className="text-gray-600 mb-4">
              Making property rental simple, transparent, and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rental-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rental-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rental-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rental-600" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-rental-600">Home</Link></li>
              <li><Link to="/properties" className="text-gray-600 hover:text-rental-600">Find Rentals</Link></li>
              <li><Link to="/list-property" className="text-gray-600 hover:text-rental-600">List Your Property</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-rental-600">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-rental-600">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-rental-600">Blog</Link></li>
              <li><Link to="/faqs" className="text-gray-600 hover:text-rental-600">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-rental-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-rental-600">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rental-600 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  123 Market St, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rental-600 mr-3" />
                <span className="text-gray-600">+1 (415) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rental-600 mr-3" />
                <a href="mailto:info@rentease.com" className="text-gray-600 hover:text-rental-600">
                  info@rentease.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} RentEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
