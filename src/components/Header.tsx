import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart2 className="h-8 w-8 mr-2" />
          <span className="font-bold text-xl">Data Sparta</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">Features</a>
          <a href="#" className="hover:text-blue-200">Solutions</a>
          <a href="#" className="hover:text-blue-200">Pricing</a>
          <a href="#" className="hover:text-blue-200">About Us</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Unlock Your Data Potential</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering SMBs with Big-Data Capabilities</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Get Started Today
        </button>
      </div>
    </header>
  );
};

export default Header;