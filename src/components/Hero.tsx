
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Atualiza a URL sem causar navegação
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <section id="hero" className="pt-20 pb-12 md:pt-28 md:pb-16 figma-hero min-h-[90vh] flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-center text-center mx-auto">
          <h1 
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight figma-heading transition-all duration-700 ease-in-out max-w-4xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Por que o Brasil precisa de uma instituição para enfrentar as Emergências em Saúde?
          </h1>
          
          <p 
            className={cn(
              "text-base sm:text-lg md:text-xl figma-text max-w-2xl mb-8 md:mb-12 transition-all duration-700 delay-300 ease-in-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Uma proposta para a criação do Centro Brasileiro de Prevenção e Controle de Doenças
          </p>
          
          <div className={cn(
            "flex justify-center items-center transition-all duration-700 delay-500 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <a 
              href="#documents" 
              className="figma-button hover:shadow-md"
              onClick={(e) => handleScrollToSection(e, 'documents')}
            >
              Conheça a proposta
            </a>
          </div>
        </div>
        
        <div className="pt-10 md:pt-16 text-center absolute bottom-8 left-0 right-0">
          <a 
            href="#emergencies" 
            className="inline-flex flex-col items-center text-gray-400 hover:text-gray-500 transition-colors"
            onClick={(e) => handleScrollToSection(e, 'emergencies')}
          >
            <span className="text-sm font-medium mb-2">Deslize para saber mais</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
