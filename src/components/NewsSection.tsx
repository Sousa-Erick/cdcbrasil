
import React, { useEffect, useRef } from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';

const NewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.news-item');
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

  const newsItems = [
    {
      title: "ITpS discute com Conass e Conasems proposta de política Estado para enfrentamento de Emergências em Saúde Pública no Brasil e nova instituição",
      link: "https://www.itps.org.br/comunicacao/itps-discute-com-conass-e-conasems-proposta-de-politica-estado-para-enfrentamento-de-emergencias-em-saude-publica-no-brasil-e-nova-instituicao",
      type: "article"
    },
    {
      title: "Artigo na Folha de S. Paulo: Brasil precisa de política de Estado para prevenir epidemias",
      link: "https://www.itps.org.br/comunicacao/folha-brasil-precisa-de-politica-de-estado-para-prevenir-epidemias",
      type: "article"
    },
    {
      title: "ITpS reúne ex-ministros da Saúde e ministra Nísia para debater preparação e resposta a epidemias",
      link: "https://www.itps.org.br/comunicacao/itps-reune-ex-ministros-da-saude-e-ministra-nisia-para-debater-preparacao-e-resposta-a-epidemias",
      type: "video"
    }
  ];

  return (
    <section id="news-section" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Notícias</h2>
          <p className="text-gray-600">
            Acompanhe as últimas notícias sobre a proposta de criação do 
            Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="news-item opacity-0 translate-y-4 transition-all duration-500 block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md group"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    {item.type === 'video' ? (
                      <div className="p-2 bg-health-100 rounded-full">
                        <PlayCircle className="h-5 w-5 text-health-600" />
                      </div>
                    ) : (
                      <div className="p-2 bg-blue-100 rounded-full">
                        <ExternalLink className="h-5 w-5 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">{item.title}</h3>
                </div>
                
                <div className="flex items-center text-health-600 text-sm font-medium transition-all group-hover:translate-x-1">
                  <span>{item.type === 'video' ? 'Assistir ao vídeo' : 'Ler matéria completa'}</span>
                  <ExternalLink className="h-4 w-4 ml-1.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
