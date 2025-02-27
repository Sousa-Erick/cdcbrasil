
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
    <section id="hero" className="pt-24 pb-0 bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-8 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-center text-center mx-auto pb-16">
          <h1 
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-blue-700 transition-all duration-700 ease-in-out max-w-4xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Por que o Brasil precisa de uma instituição para enfrentar as Emergências em Saúde?
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-gray-700 max-w-2xl transition-all duration-700 delay-300 ease-in-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Uma proposta para a criação do Centro Brasileiro de Prevenção e Controle de Doenças
          </p>
        </div>
        
        <div className="pb-16 text-center">
          <div className="mt-12 mb-8 flex justify-center animate-fade-in">
            <a 
              href="#emergencies" 
              className="flex flex-col items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="text-lg font-semibold mb-1">Leia mais</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
