
import React from 'react';
import { ArrowRight, Shield, Lightbulb, FileCog } from 'lucide-react';

const Hero: React.FC = () => {
  const contextItems = [
    {
      icon: <Shield className="h-8 w-8 mb-3 text-health-600" />,
      title: "Emergências em Saúde",
      description: "A pandemia de COVID-19 demonstrou a necessidade de uma instituição especializada para o enfrentamento de crises sanitárias."
    },
    {
      icon: <Lightbulb className="h-8 w-8 mb-3 text-health-600" />,
      title: "Coordenação Nacional",
      description: "É essencial uma estrutura centralizada que articule ações coordenadas em território nacional durante emergências."
    },
    {
      icon: <FileCog className="h-8 w-8 mb-3 text-health-600" />,
      title: "Evidência Científica",
      description: "Decisões em saúde pública devem ser baseadas em evidências científicas e coordenadas por especialistas."
    }
  ];

  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-health-600 bg-health-100 rounded-full animate-fade-in">
            Projeto Nacional de Saúde Pública
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Centro Brasileiro de Prevenção e Controle de Doenças
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a href="#principles" className="btn-primary flex items-center justify-center gap-2">
              Conheça a proposta <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#supporters" className="btn-secondary flex items-center justify-center">
              Veja quem apoia
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 w-full bg-gradient-to-br from-white to-gray-50 p-6 md:p-10 rounded-xl shadow-sm animate-fade-in-slow" style={{ animationDelay: '400ms' }}>
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contexto</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {contextItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
