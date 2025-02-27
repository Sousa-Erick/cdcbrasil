
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
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100');
                el.classList.remove('opacity-0');
                el.classList.add('animation-visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.fade-in-element');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="strategies" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-element opacity-0 mb-12 text-center">
            <ShieldAlert className="h-10 w-10 text-health-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Novos instrumentos e estratégias</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in-element opacity-0 bg-white p-6 rounded-lg shadow-md">
              <Target className="h-8 w-8 text-health-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Exigência de novas abordagens</h3>
              <p className="text-gray-600">
                O enfrentamento às emergências em saúde pública exige novos instrumentos e estratégias.
              </p>
              <p className="text-gray-600 mt-4">
                As ações e iniciativas do país para enfrentá-las precisam ser atualizadas e consolidadas em uma política de Estado.
              </p>
            </div>
            
            <div className="fade-in-element opacity-0 bg-white p-6 rounded-lg shadow-md" style={{ transitionDelay: '100ms' }}>
              <Milestone className="h-8 w-8 text-health-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Política de Estado</h3>
              <p className="text-gray-600">
                Assim, haverá continuidade da política independentemente das transições de governo e das predileções de gestores.
              </p>
              <p className="text-gray-600 mt-4">
                Para tornar o Brasil mais resiliente e preparado para enfrentar futuras epidemias e pandemias, essa política deve:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">fortalecer o SUS</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">ser estruturante</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-health-600 rounded-full mr-2"></span>
                  <span className="text-gray-600">ser baseada na melhor evidência científica</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="fade-in-element opacity-0 mt-10 p-6 bg-blue-700 text-white rounded-lg shadow-md" style={{ transitionDelay: '200ms' }}>
            <p className="text-lg font-medium text-center">
              Para executar essa política, o Brasil precisa de uma nova instituição federal nos moldes de um Centro de Prevenção, Preparação e Resposta às Emergências em Saúde Pública, capaz de fornecer respostas rápidas, coordenadas e sustentadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
