
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="text-health-600 font-bold text-xl">
            <span className="text-gray-900">CDC</span>Brasil
          </div>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Sobre
          </a>
          <a href="#principles" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Princípios
          </a>
          <a href="#definition" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Definição
          </a>
          <a href="#supporters" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Apoiadores
          </a>
          <a href="#resources" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Recursos
          </a>
          <a href="#map" className="text-gray-700 hover:text-health-600 transition-colors font-medium">
            Mapa
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
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
