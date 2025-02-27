
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const contextSection = document.getElementById('context');
    if (contextSection) {
      contextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-12 md:pt-28 md:pb-16 min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 opacity-10 z-0" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23603cba" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center h-full z-10">
        <div className={`inline-block mb-6 px-4 py-2 bg-indigo-100 rounded-full transition-all duration-700 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
        }`}>
          <span className="text-sm text-indigo-600 font-medium">Uma proposta inovadora para a saúde pública</span>
        </div>
        
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto transition-all duration-700 delay-150 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
        }`}>
          Por que o Brasil precisa de uma instituição para enfrentar as <span className="text-indigo-600">emergências em saúde?</span>
        </h1>
        
        <p className={`text-lg text-gray-600 max-w-xl mx-auto mb-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
        }`}>
          Uma proposta para a criação do Centro Brasileiro de Prevenção e Controle de Doenças
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
        }`}>
          <a href="#materials" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            Saiba Mais
          </a>
          <a href="#supporters" className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors border border-indigo-200 shadow-sm">
            Apoie a Proposta
          </a>
        </div>
        
        <button 
          onClick={scrollToNextSection}
          className={`mt-10 inline-flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
          }`}
          aria-label="Role para baixo"
        >
          <span className="text-sm font-medium mb-2">Saiba mais</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
