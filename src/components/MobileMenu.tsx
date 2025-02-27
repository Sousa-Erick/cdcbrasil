
import React, { useEffect } from 'react';
import { X, Instagram, Facebook, Linkedin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  // Para animação e acessibilidade
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[101] bg-white rounded-t-2xl max-h-[85vh] overflow-hidden shadow-xl transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
        onClick={e => e.stopPropagation()}
      >
        {/* Puxador visual para indicar que é arrastável */}
        <div className="w-full flex justify-center pt-2 pb-1">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Cabeçalho do menu */}
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
        
        {/* Conteúdo do menu com scroll */}
        <div className="overflow-y-auto max-h-[calc(85vh-130px)]">
          <nav className="pb-4">
            <ul>
              {[
                { href: "#emergencies", label: "Contexto" },
                { href: "#strategies", label: "Estratégias" },
                { href: "#characteristics", label: "Características" },
                { href: "#principles-directives", label: "Princípios" },
                { href: "#what-is", label: "Proposta" },
                { href: "#documents", label: "Documentos" },
                { href: "#news-section", label: "Notícias" },
                { href: "#world-map", label: "CDCs pelo mundo" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100"
                    onClick={handleLinkClick}
                  >
                    <span className="text-base font-medium">{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Redes sociais */}
          <div className="px-6 py-6 mt-2">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Redes Sociais</h3>
            <div className="flex space-x-6">
              <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-health-600 hover:bg-health-50 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-health-600 hover:bg-health-50 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-health-600 hover:bg-health-50 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Área adicional para garantir scroll */}
          <div className="h-safe-area-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
