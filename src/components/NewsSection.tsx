
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, PlayCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  type: "article" | "video";
  link: string;
}

const NewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const newsItems: NewsItem[] = [
    {
      id: "news-1",
      title: "ITpS discute com Conass e Conasems proposta de política Estado para enfrentamento de Emergências em Saúde Pública no Brasil e nova instituição",
      link: "https://www.itps.org.br/comunicacao/itps-discute-com-conass-e-conasems-proposta-de-politica-estado-para-enfrentamento-de-emergencias-em-saude-publica-no-brasil-e-nova-instituicao",
      type: "article"
    },
    {
      id: "news-2",
      title: "Artigo na Folha de S. Paulo: Brasil precisa de política de Estado para prevenir epidemias",
      link: "https://www.itps.org.br/comunicacao/folha-brasil-precisa-de-politica-de-estado-para-prevenir-epidemias",
      type: "article"
    },
    {
      id: "news-3",
      title: "ITpS reúne ex-ministros da Saúde e ministra Nísia para debater preparação e resposta a epidemias",
      link: "https://www.itps.org.br/comunicacao/itps-reune-ex-ministros-da-saude-e-ministra-nisia-para-debater-preparacao-e-resposta-a-epidemias",
      type: "video"
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };
  
  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeSlide]);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="news-section" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Notícias</h2>
          <p className="text-base md:text-lg text-gray-600">
            Acompanhe as últimas notícias sobre a proposta de criação do 
            Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Mobile controls */}
          <div className="sm:hidden flex justify-between items-center mb-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Notícia anterior"
            >
              <ArrowLeft className="h-4 w-4 text-gray-700" />
            </button>
            
            <span className="text-sm text-gray-500">{`${activeSlide + 1}/${newsItems.length}`}</span>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Próxima notícia"
            >
              <ArrowRight className="h-4 w-4 text-gray-700" />
            </button>
          </div>
          
          {/* Desktop controls - hidden on mobile */}
          <div className="hidden sm:flex justify-between items-center absolute top-1/2 -mt-4 left-4 right-4 z-10">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Notícia anterior"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Próxima notícia"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-700 ease-in-out flex"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
                width: `${newsItems.length * 100}%`
              }}
            >
              {newsItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block bg-white rounded-lg p-5 md:p-8 shadow-md hover:shadow-lg transition-all group h-full border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-5">
                          {item.type === 'video' ? (
                            <div className="p-2 bg-health-50 rounded-full">
                              <PlayCircle className="h-5 w-5 text-health-600" />
                            </div>
                          ) : (
                            <div className="p-2 bg-blue-50 rounded-full">
                              <ExternalLink className="h-5 w-5 text-blue-700" />
                            </div>
                          )}
                          <span className="text-xs text-gray-500 hidden sm:block">{`${index + 1}/${newsItems.length}`}</span>
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-gray-900">{item.title}</h3>
                      </div>
                      
                      <div className="flex items-center text-health-600 text-sm font-medium transition-all group-hover:translate-x-1">
                        <span>{item.type === 'video' ? 'Assistir ao vídeo' : 'Ler matéria completa'}</span>
                        <ExternalLink className="h-4 w-4 ml-1.5" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-health-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para notícia ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
