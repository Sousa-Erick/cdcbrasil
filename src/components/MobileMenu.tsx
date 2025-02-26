
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black bg-opacity-50"
    >
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative h-full w-[80%] max-w-sm bg-white shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <a href="https://itps.org.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
              alt="Instituto Todos pela Saúde"
              className="h-8"
            />
          </a>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">
            <li>
              <a 
                href="#features" 
                className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Proposta</span>
              </a>
            </li>
            <li>
              <a 
                href="#principles" 
                className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Diretrizes</span>
              </a>
            </li>
            <li>
              <a 
                href="#world-cdcs" 
                className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Cenários</span>
              </a>
            </li>
            <li>
              <a 
                href="#news" 
                className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                <span className="font-medium">Notícias</span>
              </a>
            </li>
          </ul>
          
          <div className="mt-4 px-4 py-4 border-t">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Redes Sociais</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-health-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
