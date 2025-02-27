
import React, { useEffect, useRef } from 'react';
import { Shield, Search, Globe, Users, BarChart, FileText } from 'lucide-react';

const Principles: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.principle-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section id="principles" className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Diretrizes do CDC Brasil</h2>
          <p className="text-white text-opacity-80">
            Nossos princípios fundamentais que norteiam todas as ações e decisões
            para a proteção da saúde pública no Brasil.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="principle-card opacity-0 translate-y-8 transition-all duration-500 border border-white border-opacity-20 rounded-lg p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              <div className="rounded-full bg-white bg-opacity-20 p-3 w-16 h-16 flex items-center justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-white text-opacity-90">{principle.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-bold mb-4">Uma instituição para todo o Brasil</h3>
            <p className="text-white text-opacity-90">
              O CDC Brasil atuará em rede com todas as regiões do país, fortalecendo as capacidades locais 
              e regionais para a prevenção e controle de doenças, respeitando as particularidades de cada território.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
