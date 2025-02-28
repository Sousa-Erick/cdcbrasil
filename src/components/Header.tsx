
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-3'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="block">
              <img 
                src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                alt="Logo"
                className="h-10 md:h-12"
              />
            </button>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-800 hover:text-blue transition-colors font-medium">Início</button>
            <button onClick={() => scrollToSection('context')} className="text-gray-800 hover:text-blue transition-colors font-medium">Por que Precisamos?</button>
            <button onClick={() => scrollToSection('characteristics')} className="text-gray-800 hover:text-blue transition-colors font-medium">Características</button>
            <button onClick={() => scrollToSection('supporters')} className="text-gray-800 hover:text-blue transition-colors font-medium">Apoio</button>
            <button onClick={() => scrollToSection('materials')} className="text-gray-800 hover:text-blue transition-colors font-medium">Materiais</button>
            <button onClick={() => scrollToSection('news')} className="text-gray-800 hover:text-blue transition-colors font-medium">Notícias</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-blue transition-colors font-medium">Contato</button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
