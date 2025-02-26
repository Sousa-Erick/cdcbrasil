
import React from 'react';
import { Shield, FileText, Users, Brain } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Autonomia baseada em evidência",
      description: "Decisões técnicas baseadas exclusivamente em evidências científicas, livres de interferências políticas.",
      icon: <Brain className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Atuação em emergências sanitárias",
      description: "Capacidade de resposta rápida e coordenada em situações de crise de saúde pública.",
      icon: <Shield className="h-6 w-6 text-white" />,
      bgColor: "bg-health-600"
    },
    {
      title: "Coordenação em rede nacional",
      description: "Articulação com instituições de pesquisa, universidades e serviços de saúde em todo o país.",
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: "bg-health-500"
    },
    {
      title: "Capacitação para centros regionais",
      description: "Formação e apoio técnico para centros de controle de doenças em estados e municípios.",
      icon: <FileText className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Um novo centro para proteger vidas...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white bg-opacity-20 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-white text-opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
