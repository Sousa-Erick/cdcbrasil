
import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Virus } from 'lucide-react';

const EmergenciesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animation-element');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const emergencies = [
    "aids",
    "cólera",
    "influenza H1N1",
    "dengue",
    "Zika",
    "febre amarela",
    "covid-19"
  ];

  return (
    <section id="emergencies" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animation-element opacity-0 mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-health-100 rounded-full mb-4">
              <Virus className="h-6 w-6 text-health-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Emergências sanitárias enfrentadas pelo Brasil</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
            {emergencies.map((emergency, index) => (
              <div 
                key={index}
                className="animation-element opacity-0 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center justify-center transition-all hover:bg-blue-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="font-medium text-blue-800">{emergency}</span>
              </div>
            ))}
          </div>
          
          <p className="animation-element opacity-0 text-lg text-gray-700 mb-8 text-center md:text-left">
            São inúmeras as emergências sanitárias enfrentadas pelo Brasil e pelo mundo nas últimas décadas – e, infelizmente, é certo que outras virão.
          </p>
          
          <div className="animation-element opacity-0 rounded-lg bg-blue-600 text-white p-6 md:p-8 shadow-md">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-white bg-opacity-20 rounded-full mr-4 flex-shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Com a covid-19, o mundo viveu desafios sem precedentes</h3>
                <p className="text-white text-opacity-90 mb-4">
                  A pandemia impactou profundamente a saúde pública, a economia e a vida em sociedade.
                </p>
                <p className="text-white text-opacity-90">
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
