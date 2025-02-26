
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 pb-0 bg-[#e9eef1] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-center items-start max-w-3xl mx-auto md:mx-0 md:ml-8 lg:ml-16 text-left pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight text-gray-900">
            Por que o Brasil precisa de uma instituição para enfrentar as Emergências em Saúde?
          </h1>
        </div>
        
        <div className="pb-16 text-center">
          <div className="max-w-xl mx-auto bg-transparent text-right hidden md:block">
            <p className="text-xl text-gray-800 leading-relaxed">
              Por que o Brasil precisa de uma instituição para 
              enfrentar as Emergências em Saúde?
            </p>
          </div>
          
          <div className="mt-12 mb-8 flex justify-center">
            <a 
              href="#features" 
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
