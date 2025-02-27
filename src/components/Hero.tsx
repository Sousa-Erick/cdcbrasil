
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
    <section id="hero" className="pt-20 pb-0 bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-8 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-start max-w-3xl mx-auto md:mx-0 md:ml-8 lg:ml-16 text-left pb-16">
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight text-gray-900 transition-all duration-700 ease-in-out",
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
              className="animate-bounce inline-flex items-center flex-col text-gray-700 hover:text-health-600 transition-colors"
            >
              <span className="mb-2">Leia mais</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
