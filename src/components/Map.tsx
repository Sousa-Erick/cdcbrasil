
import React, { useEffect, useRef } from 'react';
import { Globe, MapPin, Book, ArrowUpRight } from 'lucide-react';

interface CdcInfo {
  name: string;
  location: string;
  founded: string;
  focus: string;
  link?: string;
}

const Map: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.cdc-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-6');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const worldCdcs: CdcInfo[] = [
    {
      name: "CDC - Estados Unidos",
      location: "Atlanta, EUA",
      founded: "1946",
      focus: "Controle e prevenção de doenças em nível nacional e internacional",
      link: "https://www.cdc.gov"
    },
    {
      name: "ECDC - União Europeia",
      location: "Estocolmo, Suécia",
      founded: "2005",
      focus: "Fortalecer as defesas da Europa contra doenças infecciosas",
      link: "https://www.ecdc.europa.eu"
    },
    {
      name: "China CDC",
      location: "Pequim, China",
      founded: "2002",
      focus: "Prevenção, controle e pesquisa de doenças na China",
      link: "http://www.chinacdc.cn/en/"
    },
    {
      name: "Africa CDC",
      location: "Adis Abeba, Etiópia",
      founded: "2017",
      focus: "Apoiar iniciativas de saúde pública dos Estados-Membros da União Africana",
      link: "https://africacdc.org"
    }
  ];

  const resources = [
    {
      title: "Modelos de CDC pelo mundo",
      description: "Análise comparativa de diferentes modelos de Centros de Controle de Doenças globalmente.",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "CDC e Sistemas de Saúde",
      description: "Como os CDCs se integram aos sistemas nacionais de saúde pública.",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      title: "Publicações Científicas",
      description: "Artigos e estudos sobre a importância de centros de prevenção e controle.",
      icon: <Book className="h-5 w-5" />
    }
  ];

  return (
    <section id="world-cdcs" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">CDCs pelo Mundo</h2>
          <p className="text-gray-600">
            Conheça como outros países organizaram suas instituições dedicadas 
            à prevenção e controle de doenças e emergências em saúde.
          </p>
        </div>
        
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto mb-12">
          {worldCdcs.map((cdc, index) => (
            <div 
              key={index} 
              className="cdc-card opacity-0 translate-y-6 transition-all duration-500 bg-white rounded-lg p-5 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-semibold text-gray-900">{cdc.name}</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><span className="font-medium">Localização:</span> {cdc.location}</p>
                <p><span className="font-medium">Fundação:</span> {cdc.founded}</p>
                <p><span className="font-medium">Foco:</span> {cdc.focus}</p>
              </div>
              {cdc.link && (
                <a 
                  href={cdc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                >
                  <span>Visitar site</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 md:p-8 max-w-4xl mx-auto border border-blue-200 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              É hora do Brasil ter o seu próprio CDC
            </h3>
            <p className="text-blue-700 mb-6">
              Assim como outros países, o Brasil precisa de uma instituição dedicada à prevenção e controle de doenças,
              baseada em evidências científicas e com autonomia para proteger a saúde pública.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <a 
                key={index}
                href="#" 
                className="bg-white p-4 rounded-lg border border-blue-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-blue-100 mr-3 text-blue-600">
                    {resource.icon}
                  </div>
                  <h4 className="font-medium text-blue-900">{resource.title}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                <div className="text-blue-600 text-sm font-medium flex items-center">
                  <span>Saiba mais</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
