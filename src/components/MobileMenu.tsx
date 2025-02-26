
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
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
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative h-full w-4/5 max-w-xs bg-white shadow-xl flex flex-col animate-slide-in">
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex items-center">
            <div className="relative w-8 h-8 mr-2">
              {/* Cruz vermelha */}
              <div style={{ backgroundColor: '#ea384c' }} className="absolute w-2 h-8 top-0 left-3"></div>
              <div style={{ backgroundColor: '#ea384c' }} className="absolute w-8 h-2 top-3 left-0"></div>
              {/* Quadrado azul central */}
              <div style={{ backgroundColor: '#0056b3' }} className="absolute w-2 h-2 top-3 left-3"></div>
            </div>
            <div className="flex flex-col">
              <span style={{ color: '#0056b3' }} className="font-semibold text-xs leading-tight">Instituto Todos</span>
              <span style={{ color: '#0056b3' }} className="font-semibold text-xs leading-tight">pela Saúde</span>
            </div>
          </div>
          <button 
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-1 px-2">
            <li>
              <a 
                href="#features" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Proposta</span>
              </a>
            </li>
            <li>
              <a 
                href="#principles" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Diretrizes</span>
              </a>
            </li>
            <li>
              <a 
                href="#world-cdcs" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Cenários</span>
              </a>
            </li>
            <li>
              <a 
                href="#news" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Notícias</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
