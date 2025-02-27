
import React, { useEffect, useRef } from 'react';
import { AlertCircle, AlertTriangle, Heart, TrendingUp, ShieldAlert } from 'lucide-react';

const EmergenciesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems = entry.target.querySelectorAll('.list-item');
            listItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-8');
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

  const emergencies = [
    {
      icon: <TrendingUp className="h-6 w-6 text-health-600" />,
      title: "Surtos recorrentes",
      description: "Febre amarela, dengue, zika, chikungunya, sarampo, covid e outras doenças têm impacto devastador na sociedade brasileira."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-health-600" />,
      title: "Sistema vulnerável",
      description: "O sistema de vigilância em saúde atual não está preparado para lidar com emergências de forma rápida e eficiente."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-health-600" />,
      title: "Resposta insuficiente",
      description: "A falta de integração e comunicação entre os diversos órgãos de saúde prejudica o enfrentamento das emergências."
    },
    {
      icon: <Heart className="h-6 w-6 text-health-600" />,
      title: "Impacto humano",
      description: "Além das mortes, há um grande impacto na saúde mental e na qualidade de vida da população."
    }
  ];

  return (
    <section id="emergencies" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">
            As emergências em saúde pública são uma ameaça constante
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 mb-12 text-center">
            O Brasil enfrenta recorrentemente emergências em saúde pública que impactam a vida de milhões de pessoas.
            A covid-19 foi apenas a mais recente de uma longa série de crises.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {emergencies.map((item, index) => (
              <div 
                key={index}
                className="list-item opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-health-50 p-3 rounded-full mb-5 inline-flex">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergenciesSection;
