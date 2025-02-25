
import React, { useEffect } from 'react';
import { X, Home, Book, FileText, Users, FileSpreadsheet, Map } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative h-full w-3/4 max-w-xs bg-white shadow-xl flex flex-col animate-slide-in">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-health-600 font-bold text-xl">
            <span className="text-gray-900">CDC</span>Brasil
          </div>
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            <li>
              <a 
                href="#about" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <Home className="h-5 w-5 mr-3" />
                <span>Sobre</span>
              </a>
            </li>
            <li>
              <a 
                href="#principles" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <Book className="h-5 w-5 mr-3" />
                <span>Princípios</span>
              </a>
            </li>
            <li>
              <a 
                href="#definition" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <FileText className="h-5 w-5 mr-3" />
                <span>Definição</span>
              </a>
            </li>
            <li>
              <a 
                href="#supporters" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <Users className="h-5 w-5 mr-3" />
                <span>Apoiadores</span>
              </a>
            </li>
            <li>
              <a 
                href="#resources" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <FileSpreadsheet className="h-5 w-5 mr-3" />
                <span>Recursos</span>
              </a>
            </li>
            <li>
              <a 
                href="#map" 
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-health-600"
                onClick={handleLinkClick}
              >
                <Map className="h-5 w-5 mr-3" />
                <span>Mapa</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t">
          <button className="btn-primary w-full">
            Apoie a causa
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
