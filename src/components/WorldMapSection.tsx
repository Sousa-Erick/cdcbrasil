
import React, { useEffect, useRef } from 'react';
import { Globe, MapPin } from 'lucide-react';

interface CdcInfo {
  name: string;
  country: string;
  year: string;
  description: string;
}

const WorldMapSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.map-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-4');
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

  const cdcs: CdcInfo[] = [
    {
      name: "CDC",
      country: "Estados Unidos",
      year: "1946",
      description: "Centers for Disease Control and Prevention, referência mundial em prevenção e controle de doenças."
    },
    {
      name: "ECDC",
      country: "União Europeia",
      year: "2005",
      description: "European Centre for Disease Prevention and Control, responsável pela vigilância e resposta a ameaças sanitárias na Europa."
    },
    {
      name: "China CDC",
      country: "China",
      year: "2002",
      description: "Chinese Center for Disease Control and Prevention, instituição crucial para o controle de doenças na China."
    },
    {
      name: "Africa CDC",
      country: "África (União Africana)",
      year: "2017",
      description: "Centro continental dedicado a fortalecer a capacidade de resposta a emergências em saúde na África."
    },
    {
      name: "NIID",
      country: "Japão",
      year: "1947",
      description: "National Institute of Infectious Diseases, responsável pela pesquisa e controle de doenças infecciosas no Japão."
    },
    {
      name: "RKI",
      country: "Alemanha",
      year: "1891",
      description: "Robert Koch Institute, uma das instituições mais antigas de saúde pública do mundo."
    }
  ];

  return (
    <section id="world-map" ref={sectionRef} className="figma-section bg-[#F6F9FC]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 figma-heading">Mapa</h2>
          <p className="figma-text">
            CDCs pelo mundo: conheça instituições similares em outros países e como 
            contribuem para a saúde pública global.
          </p>
        </div>
        
        <div className="mb-12 relative">
          <div className="rounded-lg overflow-hidden bg-[#E5F0F8] p-4 max-w-5xl mx-auto">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-16 w-16 text-[#0067A0] opacity-50" />
                <span className="sr-only">Mapa mundial de CDCs</span>
              </div>
              <img 
                src="/lovable-uploads/b45acc37-13e4-44f0-8385-7ff3683eae3d.png" 
                alt="Mapa mundial mostrando CDCs em diferentes países" 
                className="w-full h-full object-contain"
              />
              
              {/* Este seria substituído por um mapa interativo real em uma implementação futura */}
              <div className="absolute inset-0">
                {cdcs.map((cdc, index) => (
                  <div 
                    key={index}
                    className="absolute" 
                    style={{ 
                      top: `${20 + Math.random() * 60}%`, 
                      left: `${10 + Math.random() * 80}%` 
                    }}
                  >
                    <div className="relative group">
                      <MapPin className="h-6 w-6 text-[#ED4C13] animate-pulse" />
                      <div className="hidden group-hover:block absolute left-1/2 bottom-full mb-2 -translate-x-1/2 bg-white p-2 rounded shadow-lg z-10 w-48">
                        <p className="font-bold text-sm">{cdc.name} - {cdc.country}</p>
                        <p className="text-xs text-gray-600">Fundado em {cdc.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cdcs.map((cdc, index) => (
            <div 
              key={index} 
              className="map-item opacity-0 translate-y-4 transition-all duration-500 figma-card"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-[#E5F0F8] rounded-full mr-3">
                  <Globe className="h-5 w-5 text-[#0067A0]" />
                </div>
                <h3 className="font-semibold">{cdc.name}</h3>
              </div>
              <div>
                <p className="text-sm figma-text mb-1"><span className="font-medium">País:</span> {cdc.country}</p>
                <p className="text-sm figma-text mb-1"><span className="font-medium">Fundação:</span> {cdc.year}</p>
                <p className="text-sm figma-text">{cdc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
