
import React, { useState, useEffect } from 'react';
import { Menu, Instagram, Facebook, Linkedin } from 'lucide-react';
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
        ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-sm py-3' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://itps.org.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
              alt="Instituto Todos pela Saúde"
              className="h-12"
            />
          </a>
        </div>
        
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 mr-10">
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
          
          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
