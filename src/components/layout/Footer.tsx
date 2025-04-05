import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-zeyfira-400 bg-clip-text text-transparent mb-4">Zeyfira</h3>
            <p className="text-gray-400 mb-4">
              Transforming ideas into powerful digital solutions. We bring innovation to web development, software solutions, and AI/ML services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Software Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+91 7810085629</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:info@zeyfira.com" className="text-gray-400 hover:text-white transition-colors">info@zeyfira.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Zeyfira. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
