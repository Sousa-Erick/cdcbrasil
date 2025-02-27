
import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
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
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
        onClick={onClose}
      >
        {/* Menu content */}
        <div 
          className={cn(
            "fixed top-0 right-0 h-full w-[85%] max-w-[300px] z-[201] bg-white shadow-xl transition-transform duration-300 ease-in-out transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div>
              <img 
                src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                alt="Instituto Todos pela Saúde"
                className="h-8"
              />
            </div>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={onClose}
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          {/* Menu items */}
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            <nav className="py-2">
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
                      className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 active:bg-gray-100 border-b border-gray-100"
                      onClick={handleLinkClick}
                    >
                      <span className="text-[15px] font-medium">{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
