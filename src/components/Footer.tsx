import React from 'react';
import { BarChart2, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Data Sparta</span>
            </div>
            <p className="text-sm">Empowering SMBs with data-driven insights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Data Integration</a></li>
              <li><a href="#" className="hover:text-blue-400">Analytics Platform</a></li>
              <li><a href="#" className="hover:text-blue-400">Consulting Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Data Street, Analytics City, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: info@dataspartaexample.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; 2023 Data Sparta. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a> | <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;