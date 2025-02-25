
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
    <section id="principles" className="section py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full border border-health-200">
            Nossa Base
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Princípios e Diretrizes</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-health-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-health-50 rounded-full mb-6">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
