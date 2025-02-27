
import React, { useEffect, useRef } from 'react';
import { AlertTriangle, TrendingUp, ShieldAlert, Heart } from 'lucide-react';

const ContextChallenges: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.challenge-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, index * 150);
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

  const challenges = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue" />,
      title: "Surtos recorrentes",
      description: "Febre amarela, dengue, zika, chikungunya, sarampo, covid e outras doenças têm impacto devastador na sociedade brasileira."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-blue" />,
      title: "Sistema vulnerável",
      description: "O sistema de vigilância em saúde atual não está preparado para lidar com emergências de forma rápida e eficiente."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-blue" />,
      title: "Resposta insuficiente",
      description: "A falta de integração e comunicação entre os diversos órgãos de saúde prejudica o enfrentamento das emergências."
    },
    {
      icon: <Heart className="h-6 w-6 text-salmon" />,
      title: "Impacto humano",
      description: "Além das mortes, há um grande impacto na saúde mental e na qualidade de vida da população."
    }
  ];

  return (
    <section id="context" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            As emergências em saúde pública são uma ameaça constante
          </h2>
          
          <p className="text-gray-600">
            O Brasil enfrenta recorrentemente emergências em saúde pública que impactam a vida de milhões de pessoas.
            A covid-19 foi apenas a mais recente de uma longa série de crises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="challenge-card opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-start">
                <div className="mr-4 bg-blue-light p-3 rounded-lg">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextChallenges;
