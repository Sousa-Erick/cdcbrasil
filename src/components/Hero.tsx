
import React from 'react';
import { ArrowRight, Shield, Lightbulb, FileCog } from 'lucide-react';

const Hero: React.FC = () => {
  const contextItems = [
    {
      icon: <Shield className="h-10 w-10 mb-4 text-health-600" />,
      title: "Emergências em Saúde",
      description: "A pandemia de COVID-19 demonstrou a necessidade de uma instituição especializada para o enfrentamento de crises sanitárias."
    },
    {
      icon: <Lightbulb className="h-10 w-10 mb-4 text-health-600" />,
      title: "Coordenação Nacional",
      description: "É essencial uma estrutura centralizada que articule ações coordenadas em território nacional durante emergências."
    },
    {
      icon: <FileCog className="h-10 w-10 mb-4 text-health-600" />,
      title: "Evidência Científica",
      description: "Decisões em saúde pública devem ser baseadas em evidências científicas e coordenadas por especialistas."
    }
  ];

  return (
    <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-health-600 bg-health-100 rounded-full animate-fade-in border border-health-200">
            Projeto Nacional de Saúde Pública
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Centro Brasileiro de Prevenção e Controle de Doenças
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '200ms' }}>
            Uma instituição dedicada à proteção da saúde pública brasileira através de vigilância, prevenção e resposta rápida a ameaças sanitárias.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a href="#principles" className="btn-primary flex items-center justify-center gap-2 py-3.5 px-7 text-lg">
              Conheça a proposta <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#supporters" className="btn-secondary flex items-center justify-center py-3.5 px-7 text-lg">
              Veja quem apoia
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 md:mt-28 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="inline-block pb-2 border-b-2 border-health-500">Contexto</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {contextItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-6px] flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="p-3 bg-health-50 rounded-full mb-2">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
