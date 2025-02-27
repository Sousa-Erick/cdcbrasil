
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

  return (
    <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-16 bg-white min-h-[90vh] flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-center text-center mx-auto">
          <h1 
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight text-blue-700 transition-all duration-700 ease-in-out max-w-4xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Por que o Brasil precisa de uma instituição para enfrentar as Emergências em Saúde?
          </h1>
          
          <p 
            className={cn(
              "text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 md:mb-12 transition-all duration-700 delay-300 ease-in-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Uma proposta para a criação do Centro Brasileiro de Prevenção e Controle de Doenças
          </p>
          
          <div className={cn(
            "flex justify-center items-center gap-8 flex-wrap transition-all duration-700 delay-500 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <a 
              href="#what-is-section" 
              className="bg-health-600 hover:bg-health-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md"
            >
              Conheça a proposta
            </a>
            <a 
              href="#documents" 
              className="border border-blue-700 text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Documentos
            </a>
          </div>
        </div>
        
        <div className="pt-10 md:pt-16 text-center absolute bottom-8 left-0 right-0">
          <a 
            href="#emergencies" 
            className="inline-flex flex-col items-center text-gray-400 hover:text-gray-500 transition-colors"
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
