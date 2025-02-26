
import React, { useEffect } from 'react';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';

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
          <a href="https://itps.org.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
              alt="Instituto Todos pela Saúde"
              className="h-8"
            />
          </a>
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
          
          <div className="mt-8 px-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Redes Sociais</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-health-600 hover:text-health-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
