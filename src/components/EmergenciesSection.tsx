
import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Biohazard, Ambulance, Syringe, Droplets, Thermometer, Bug } from 'lucide-react';

const EmergenciesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animation-element');
            elements.forEach((el) => {
              el.classList.add('opacity-100');
              el.classList.remove('opacity-0');
              // Garantir que os elementos permaneçam visíveis adicionando uma classe permanente
              el.classList.add('animation-visible');
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

  // Lista de emergências com nomes capitalizados e seus respectivos ícones - com tamanhos ajustados
  const emergencies = [
    { name: "Aids", icon: <Biohazard className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Cólera", icon: <Droplets className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Influenza H1N1", icon: <Thermometer className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Dengue", icon: <Bug className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Zika", icon: <Bug className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Febre amarela", icon: <Thermometer className="h-6 w-6 text-health-500 mb-2" /> },
    { name: "Covid-19", icon: <Biohazard className="h-6 w-6 text-health-500 mb-2" /> },
  ];

  return (
    <section id="emergencies" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animation-element opacity-0 transition-opacity duration-700 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-700">Emergências sanitárias enfrentadas pelo Brasil</h2>
          </div>
          
          <div className="carousel-container mb-12 overflow-hidden">
            <div className="carousel-track flex animate-slide">
              {[...emergencies, ...emergencies].map((emergency, index) => (
                <div 
                  key={index}
                  className="carousel-item flex-shrink-0 px-3 w-1/3 md:w-1/4"
                >
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center h-full hover:bg-gray-50 transition-colors">
                    {emergency.icon}
                    <span className="font-medium text-blue-700">{emergency.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="animation-element opacity-0 transition-opacity duration-700 text-lg text-gray-700 mb-12 text-center md:text-center px-4">
            São inúmeras as emergências sanitárias enfrentadas pelo Brasil e pelo mundo nas últimas décadas – e, infelizmente, é certo que outras virão.
          </p>
          
          <div className="animation-element opacity-0 transition-opacity duration-700 rounded-lg bg-blue-500 text-white p-8 md:p-10 shadow-md">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Com a covid-19, o mundo viveu desafios sem precedentes</h3>
                <p className="text-white text-opacity-90 mb-3 text-lg text-center">
                  A pandemia impactou profundamente a saúde pública, a economia e a vida em sociedade.
                </p>
                <p className="text-white text-opacity-90 text-lg text-center">
                  E, mesmo com a imensa capacidade do SUS, ficou evidente que os processos, as estruturas e as respostas convencionais não foram suficientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergenciesSection;
