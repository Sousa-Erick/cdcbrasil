
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (sectionId: string) => {
    onClose();
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="py-6 px-5 space-y-4">
          <a 
            href="#hero" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('hero')}
          >
            Início
          </a>
          <a 
            href="#context" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('context')}
          >
            Por que Precisamos?
          </a>
          <a 
            href="#characteristics" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('characteristics')}
          >
            Características
          </a>
          <a 
            href="#supporters" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('supporters')}
          >
            Apoio
          </a>
          <a 
            href="#materials" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('materials')}
          >
            Materiais
          </a>
          <a 
            href="#news" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('news')}
          >
            Notícias
          </a>
          <a 
            href="#contact" 
            className="block py-2 px-4 text-lg text-gray-800 hover:bg-blue-light hover:text-blue rounded-md transition-colors"
            onClick={() => handleLinkClick('contact')}
          >
            Contato
          </a>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t">
          <button className="w-full py-3 px-4 bg-salmon text-white rounded-lg hover:bg-salmon-600 transition-colors">
            Apoie a Proposta
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
