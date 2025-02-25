
import React, { useEffect } from 'react';
import { X, Book, FileText, Users, FileSpreadsheet, Heart } from 'lucide-react';

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
          <div className="text-health-600 font-bold text-xl">
            <span className="text-gray-900">CDC</span>Brasil
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
                href="#principles" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <Book className="h-5 w-5 mr-3 text-health-500" />
                <span className="font-medium">Princípios</span>
              </a>
            </li>
            <li>
              <a 
                href="#definition" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <FileText className="h-5 w-5 mr-3 text-health-500" />
                <span className="font-medium">Definição</span>
              </a>
            </li>
            <li>
              <a 
                href="#supporters" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <Users className="h-5 w-5 mr-3 text-health-500" />
                <span className="font-medium">Apoiadores</span>
              </a>
            </li>
            <li>
              <a 
                href="#resources" 
                className="flex items-center px-4 py-3.5 text-gray-700 hover:bg-health-50 hover:text-health-600 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <FileSpreadsheet className="h-5 w-5 mr-3 text-health-500" />
                <span className="font-medium">Recursos</span>
              </a>
            </li>
          </ul>
          
          <div className="mt-6 px-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Apoie nossa iniciativa</h3>
            <a href="#" className="flex items-center px-4 py-3 bg-health-50 text-health-700 rounded-lg hover:bg-health-100 transition-colors">
              <Heart className="h-5 w-5 mr-2.5 text-health-500" />
              <span className="font-medium">Apoie a causa</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
