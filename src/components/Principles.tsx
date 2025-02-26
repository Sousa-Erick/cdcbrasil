
import React from 'react';
import { Shield, Search, Globe, Users, BarChart, FileText } from 'lucide-react';

const Principles: React.FC = () => {
  const principles = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Proteção à Saúde",
      description: "Priorizar a proteção da saúde da população brasileira por meio de ações de vigilância e prevenção."
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Excelência Científica",
      description: "Basear todas as decisões e recomendações em evidências científicas sólidas e atualizadas."
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Transparência",
      description: "Garantir a comunicação clara e transparente com a sociedade, promovendo a confiança nas instituições."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Equidade",
      description: "Assegurar que as ações e políticas promovam a redução das desigualdades em saúde."
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Eficiência",
      description: "Otimizar recursos e processos para responder rapidamente a emergências em saúde pública."
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Autonomia",
      description: "Atuar com independência técnica, livre de interferências políticas nas decisões científicas."
    }
  ];

  return (
    <section id="principles" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Diretrizes</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="border border-white border-opacity-20 rounded-lg p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-white bg-opacity-20 p-3 w-16 h-16 flex items-center justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-white text-opacity-90">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
