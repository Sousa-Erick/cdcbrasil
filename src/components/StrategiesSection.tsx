
import React, { useEffect, useRef } from 'react';
import { ShieldAlert, Target, Milestone } from 'lucide-react';

const StrategiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in-element');
            fadeElements.forEach((el) => {
              el.classList.add('opacity-100');
              el.classList.remove('opacity-0');
              el.classList.add('translate-y-0');
              el.classList.remove('translate-y-4');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const fadeElements = sectionRef.current.querySelectorAll('.fade-in-element');
      fadeElements.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        fadeElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    }
  }, []);

  return (
    <section id="strategies" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-element opacity-0 transform transition-all duration-700 ease-in-out translate-y-4 mb-12 text-center">
            <ShieldAlert className="h-10 w-10 text-health-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Novos instrumentos e estratégias</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in-element opacity-0 transform transition-all duration-700 ease-in-out translate-y-4 delay-100 bg-white p-6 rounded-lg shadow-md">
              <Target className="h-8 w-8 text-health-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Exigência de novas abordagens</h3>
              <p className="text-gray-700">
                O enfrentamento às emergências em saúde pública exige novos instrumentos e estratégias.
              </p>
              <p className="text-gray-700 mt-4">
                As ações e iniciativas do país para enfrentá-las precisam ser atualizadas e consolidadas em uma política de Estado.
              </p>
            </div>
            
            <div className="fade-in-element opacity-0 transform transition-all duration-700 ease-in-out translate-y-4 delay-200 bg-white p-6 rounded-lg shadow-md">
              <Milestone className="h-8 w-8 text-health-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Política de Estado</h3>
              <p className="text-gray-700">
                Assim, haverá continuidade da política independentemente das transições de governo e das predileções de gestores.
              </p>
              <p className="text-gray-700 mt-4">
                Para tornar o Brasil mais resiliente e preparado para enfrentar futuras epidemias e pandemias, essa política deve:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">fortalecer o SUS</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">ser estruturante</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">ser baseada na melhor evidência científica</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="fade-in-element opacity-0 transform transition-all duration-700 ease-in-out translate-y-4 delay-300 mt-10 p-6 bg-blue-600 text-white rounded-lg shadow-md">
            <p className="text-lg font-medium">
              Para executar essa política, o Brasil precisa de uma nova instituição federal nos moldes de um Centro de Prevenção, Preparação e Resposta às Emergências em Saúde Pública, capaz de fornecer respostas rápidas, coordenadas e sustentadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
