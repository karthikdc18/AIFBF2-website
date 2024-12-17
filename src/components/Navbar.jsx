import { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to the home section
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="bg-black backdrop-blur-md shadow-2xl fixed top-0 left-0 right-0 z-50 w-full shadow-inner">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Clickable logo that scrolls to the home section */}
            <button onClick={scrollToHome} className="flex items-center">
              <Wallet className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">AIFBF</span>
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              About
            </a>
            <a
              href="#sectors"
              className="text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Sectors
            </a>
            <a
              href="#leadership"
              className="text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Leadership
            </a>
            <a
              href="#contact"
              className="bg-[#F09319] text-white px-4 py-2 rounded-md hover:bg-[#F09319]/80 focus:bg-[#F09319]/80 transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-lg rounded-t-lg w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-6 py-3 text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-6 py-3 text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              About
            </a>
            <a
              href="#sectors"
              className="block px-6 py-3 text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Sectors
            </a>
            <a
              href="#leadership"
              className="block px-6 py-3 text-white font-bold hover:text-[#F09319] focus:text-[#F09319] transition duration-200"
            >
              Leadership
            </a>
            <a
              href="#contact"
              className="block px-6 py-3 text-white font-medium bg-[#F09319] hover:bg-[#F09319]/80 focus:bg-[#F09319]/80 transition duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
