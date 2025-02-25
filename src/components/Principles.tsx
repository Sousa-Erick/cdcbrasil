
import React from 'react';
import { Shield, Search, Globe, Users, BarChart, FileText } from 'lucide-react';

const Principles: React.FC = () => {
  const principles = [
    {
      icon: <Shield className="h-10 w-10 text-health-600" />,
      title: "Proteção à Saúde",
      description: "Priorizar a proteção da saúde da população brasileira por meio de ações de vigilância e prevenção."
    },
    {
      icon: <Search className="h-10 w-10 text-health-600" />,
      title: "Excelência Científica",
      description: "Basear todas as decisões e recomendações em evidências científicas sólidas e atualizadas."
    },
    {
      icon: <Globe className="h-10 w-10 text-health-600" />,
      title: "Transparência",
      description: "Garantir a comunicação clara e transparente com a sociedade, promovendo a confiança nas instituições."
    },
    {
      icon: <Users className="h-10 w-10 text-health-600" />,
      title: "Equidade",
      description: "Assegurar que as ações e políticas promovam a redução das desigualdades em saúde."
    },
    {
      icon: <BarChart className="h-10 w-10 text-health-600" />,
      title: "Eficiência",
      description: "Otimizar recursos e processos para responder rapidamente a emergências em saúde pública."
    },
    {
      icon: <FileText className="h-10 w-10 text-health-600" />,
      title: "Autonomia",
      description: "Atuar com independência técnica, livre de interferências políticas nas decisões científicas."
    }
  ];

  return (
    <section id="principles" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full">
            Nossa Base
          </div>
          <h2 className="section-title">Princípios e Diretrizes</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
