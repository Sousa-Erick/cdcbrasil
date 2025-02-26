
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
        : 'bg-white py-3 border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center h-16">
            <div className="relative w-14 h-14 mr-3">
              {/* Cruz vermelha */}
              <div style={{ backgroundColor: '#ea384c' }} className="absolute w-4 h-12 top-1 left-5"></div>
              <div style={{ backgroundColor: '#ea384c' }} className="absolute w-12 h-4 top-5 left-1"></div>
              {/* Quadrado azul central */}
              <div style={{ backgroundColor: '#0056b3' }} className="absolute w-4 h-4 top-5 left-5"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span style={{ color: '#0056b3' }} className="font-semibold text-sm leading-tight">Instituto</span>
              <span style={{ color: '#0056b3' }} className="font-semibold text-sm leading-tight">Todos</span>
              <span style={{ color: '#0056b3' }} className="font-semibold text-sm leading-tight">pela</span>
              <span style={{ color: '#0056b3' }} className="font-semibold text-sm leading-tight">Saúde</span>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          <a href="#features" className="text-gray-800 hover:text-health-600 transition-colors font-medium px-2 py-1 text-lg">
            Proposta
          </a>
          <a href="#principles" className="text-gray-800 hover:text-health-600 transition-colors font-medium px-2 py-1 text-lg">
            Diretrizes
          </a>
          <a href="#world-cdcs" className="text-gray-800 hover:text-health-600 transition-colors font-medium px-2 py-1 text-lg">
            Cenários
          </a>
          <a href="#news" className="text-gray-800 hover:text-health-600 transition-colors font-medium px-2 py-1 text-lg">
            Notícias
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
