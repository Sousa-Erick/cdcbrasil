
import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const WorldMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const cdcs = [{
    country: "Estados Unidos",
    name: "Centers for Disease Control and Prevention (CDC)",
    founded: "1946",
    description: "Uma das mais importantes agências de saúde pública do mundo."
  }, {
    country: "Reino Unido",
    name: "UK Health Security Agency (UKHSA)",
    founded: "2021",
    description: "Responsável por proteger a saúde da população britânica."
  }, {
    country: "Canadá",
    name: "Public Health Agency of Canada (PHAC)",
    founded: "2004",
    description: "Agência dedicada à prevenção de doenças e promoção da saúde."
  }, {
    country: "China",
    name: "Chinese Center for Disease Control and Prevention",
    founded: "2002",
    description: "Principal instituição de controle e prevenção na China."
  }, {
    country: "Coréia do Sul",
    name: "Korea Disease Control and Prevention Agency (KDCA)",
    founded: "2004",
    description: "Agência que se destacou no combate à COVID-19."
  }];
  
  return (
    <section id="world-cdcs" ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              CDCs pelo Mundo
            </h2>
            <p className="text-gray-600">
              Conheça algumas das principais instituições de controle e prevenção de doenças ao redor do mundo
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cdcs.map((cdc, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-2 bg-blue-100 flex justify-center">
                  <Globe className="h-8 w-8 text-blue-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 text-blue-700">{cdc.country}</h3>
                  <h4 className="font-medium text-gray-800 mb-2">{cdc.name}</h4>
                  <p className="text-sm text-gray-500 mb-1">Fundado em: {cdc.founded}</p>
                  <p className="text-sm text-gray-600">{cdc.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Estas instituições têm se mostrado fundamentais na coordenação de respostas 
              a emergências de saúde pública em seus respectivos países.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
