
import React, { useEffect, useRef } from 'react';
import { FastForward, Brain, LineChart, Users, Globe } from 'lucide-react';

const CharacteristicsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.characteristic-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-4');
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

  const characteristics = [
    {
      icon: <FastForward className="h-8 w-8 text-white" />,
      title: "Agilidade e eficiência",
      description: "Capacidade de fornecer respostas rápidas e recursos otimizados para enfrentar emergências em saúde pública."
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Atração de talentos",
      description: "Capacidade para atrair e reter os profissionais com elevada qualificação técnica e científica."
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: "Autonomia baseada em evidência",
      description: "Autonomia para produzir e manter informações baseadas em evidência científica."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Continuidade e estabilidade",
      description: "Garantia de estabilidade e continuidade das ações entre diferentes gestões governamentais."
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Coordenação em rede",
      description: "Coordenação de estruturas em lógica de rede, com capacidade de pesquisa e laboratorial e alinhamento com organismos internacionais."
    }
  ];

  return (
    <section id="characteristics" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Características da nova instituição</h2>
          <p className="text-gray-600">
            Um centro de excelência com autonomia, agilidade e capacidade de coordenação nacional 
            para proteção da saúde pública do Brasil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {characteristics.map((item, index) => (
            <div 
              key={index} 
              className="characteristic-card opacity-0 translate-y-4 transition-all duration-500 bg-health-600 text-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6">
                <div className="rounded-full bg-white bg-opacity-20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white text-opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacteristicsSection;
