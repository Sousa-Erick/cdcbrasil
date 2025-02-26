
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-health-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-health-600 bg-health-100 rounded-full border border-health-200">
            Projeto Nacional de Saúde Pública
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Por que o Brasil precisa de uma instituição para enfrentar as emergências em Saúde
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            A pandemia de COVID-19 demonstrou a necessidade de uma instituição especializada para o enfrentamento coordenado de crises sanitárias em território nacional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a href="#features" className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-base">
              Conheça a proposta <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
          <img 
            src="/lovable-uploads/79800284-6362-451c-840e-b3891fec05a0.png" 
            alt="Especialistas em debate sobre saúde pública" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
