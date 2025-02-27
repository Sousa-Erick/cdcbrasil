
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
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white py-3'
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                alt="Instituto Todos pela Saúde"
                className="h-10 md:h-12"
              />
            </a>
          </div>
          
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              <a href="#emergencies" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Contexto
              </a>
              <a href="#strategies" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Estratégias
              </a>
              <a href="#characteristics" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Características
              </a>
              <a href="#principles-directives" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Princípios
              </a>
              <a href="#what-is" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Proposta
              </a>
              <a href="#documents" className="text-gray-800 hover:text-[#0067A0] transition-colors font-medium px-3 py-2 text-sm">
                Documentos
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
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
