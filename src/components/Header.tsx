
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className={`font-bold text-xl ${scrolled ? 'text-health-600' : 'text-health-600'}`}>
            <span className={scrolled ? 'text-gray-900' : 'text-gray-900'}>CDC</span>Brasil
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#principles" className="text-gray-700 hover:text-health-600 transition-colors font-medium px-2 py-1 rounded hover:bg-health-50">
            Princípios
          </a>
          <a href="#definition" className="text-gray-700 hover:text-health-600 transition-colors font-medium px-2 py-1 rounded hover:bg-health-50">
            Definição
          </a>
          <a href="#supporters" className="text-gray-700 hover:text-health-600 transition-colors font-medium px-2 py-1 rounded hover:bg-health-50">
            Apoiadores
          </a>
          <a href="#resources" className="text-gray-700 hover:text-health-600 transition-colors font-medium px-2 py-1 rounded hover:bg-health-50">
            Recursos
          </a>
          <a href="#" className="ml-4 bg-health-600 text-white hover:bg-health-700 px-5 py-2 rounded-full font-medium transition-all hover:shadow-md">
            Apoie essa iniciativa
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
