
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Atualiza a URL sem causar navegação
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <section id="hero" className="pt-20 pb-12 md:pt-28 md:pb-16 min-h-[90vh] flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-[-1]"></div>
      <div className="absolute inset-0 opacity-40 z-[-1]" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="3"/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-center text-center mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 rounded-full">
            <span className={cn(
              "text-sm text-indigo-600 font-medium transition-opacity duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Uma proposta inovadora para a saúde pública
            </span>
          </div>
          
          <h1 
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-gray-800 transition-all duration-700 ease-in-out max-w-4xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Por que o Brasil precisa de uma instituição para enfrentar as 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 px-2">Emergências em Saúde?</span>
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
            "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <button 
              onClick={() => scrollToSection('documents')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-100"
            >
              Conheça a proposta
            </button>
            <button 
              onClick={() => scrollToSection('what-is')}
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full shadow-md hover:shadow-lg border border-indigo-100 transition-all hover:scale-105 active:scale-100"
            >
              Saiba mais
            </button>
          </div>
          
          <div className={cn(
            "mt-12 max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transition-all duration-700 delay-700 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-800">Prevenção</h3>
                <p className="text-sm text-gray-600">Antecipação de riscos à saúde pública</p>
              </div>
              <div className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-800">Resposta</h3>
                <p className="text-sm text-gray-600">Atuação rápida e coordenada</p>
              </div>
              <div className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-800">Informação</h3>
                <p className="text-sm text-gray-600">Dados e análises para decisões</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 md:pt-16 text-center absolute bottom-8 left-0 right-0">
          <button 
            onClick={() => scrollToSection('emergencies')}
            className="inline-flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Deslize para saber mais</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
