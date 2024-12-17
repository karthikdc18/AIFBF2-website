import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-800">AIFBF</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#vision" className="text-gray-700 hover:text-primary">Vision</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#sectors" className="text-gray-700 hover:text-primary">Sectors</a>
            <a href="#leadership" className="text-gray-700 hover:text-primary">Leadership</a>
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</a>
            <a href="#vision" className="block px-3 py-2 text-gray-700 hover:text-primary">Vision</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
            <a href="#sectors" className="block px-3 py-2 text-gray-700 hover:text-primary">Sectors</a>
            <a href="#leadership" className="block px-3 py-2 text-gray-700 hover:text-primary">Leadership</a>
            <a href="#contact" className="block px-3 py-2 text-primary font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}