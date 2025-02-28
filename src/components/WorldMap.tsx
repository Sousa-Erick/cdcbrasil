
import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const WorldMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
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

  const cdcs = [
    {
      country: "Estados Unidos",
      name: "Centers for Disease Control and Prevention (CDC)",
      founded: "1946",
      description: "Uma das mais importantes agências de saúde pública do mundo."
    },
    {
      country: "Reino Unido",
      name: "UK Health Security Agency (UKHSA)",
      founded: "2021",
      description: "Responsável por proteger a saúde da população britânica."
    },
    {
      country: "Canadá",
      name: "Public Health Agency of Canada (PHAC)",
      founded: "2004",
      description: "Agência dedicada à prevenção de doenças e promoção da saúde."
    },
    {
      country: "China",
      name: "Chinese Center for Disease Control and Prevention",
      founded: "2002",
      description: "Principal instituição de controle e prevenção na China."
    },
    {
      country: "Coréia do Sul",
      name: "Korea Disease Control and Prevention Agency (KDCA)",
      founded: "2004",
      description: "Agência que se destacou no combate à COVID-19."
    }
  ];

  return (
    <section id="world-cdcs" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              CDCs pelo Mundo
            </h2>
            
            <p className="text-gray-600">
              Vários países já possuem instituições dedicadas à prevenção e controle de doenças.
              Conheça alguns exemplos internacionais que inspiram nossa proposta.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6 bg-[#DFEAF3] flex flex-col items-center justify-center">
              <div className="relative w-full max-w-4xl mx-auto">
                <img 
                  src="/lovable-uploads/f02a5836-3956-43e6-845b-17290226bcbf.png"
                  alt="Mapa mundial mostrando CDCs em diferentes países"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Globe className="h-16 w-16 text-blue-500 opacity-30" />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {cdcs.map((cdc, index) => (
                  <div 
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-[#DFEAF3] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="font-semibold text-salmon md:w-1/4 mb-2 md:mb-0">
                        {cdc.country}
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="font-medium text-gray-800">{cdc.name}</h3>
                        <div className="text-sm text-gray-500 mb-1">Fundado em: {cdc.founded}</div>
                        <p className="text-sm text-gray-600">{cdc.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              O Brasil pode se beneficiar da experiência dessas instituições, adaptando 
              os modelos de sucesso à nossa realidade e necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
