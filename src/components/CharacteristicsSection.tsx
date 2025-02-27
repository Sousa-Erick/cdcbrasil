
import React, { useEffect, useRef, useState } from 'react';
import { FastForward, Brain, LineChart, Users, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const CharacteristicsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const characteristics = [
    {
      icon: <FastForward className="h-7 w-7 text-white" />,
      title: "Agilidade e eficiência",
      description: "Capacidade de fornecer respostas rápidas e recursos otimizados para enfrentar emergências em saúde pública."
    },
    {
      icon: <Brain className="h-7 w-7 text-white" />,
      title: "Atração de talentos",
      description: "Capacidade para atrair e reter os profissionais com elevada qualificação técnica e científica."
    },
    {
      icon: <LineChart className="h-7 w-7 text-white" />,
      title: "Autonomia baseada em evidência",
      description: "Autonomia para produzir e manter informações baseadas em evidência científica."
    },
    {
      icon: <Users className="h-7 w-7 text-white" />,
      title: "Continuidade e estabilidade",
      description: "Garantia de estabilidade e continuidade das ações entre diferentes gestões governamentais."
    },
    {
      icon: <Globe className="h-7 w-7 text-white" />,
      title: "Coordenação em rede",
      description: "Coordenação de estruturas em lógica de rede, com capacidade de pesquisa e laboratorial e alinhamento com organismos internacionais."
    }
  ];

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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === characteristics.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? characteristics.length - 1 : prev - 1));
  };

  // Calculate which slides to show based on screen size
  const getVisibleCards = () => {
    // On mobile: 1 card, tablet: 2 cards, desktop: 3 cards
    const cardsToShow = typeof window !== 'undefined' ? 
      window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3 : 3;
    
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (activeSlide + i) % characteristics.length;
      cards.push(characteristics[index]);
    }
    return cards;
  };

  const [visibleCards, setVisibleCards] = useState<typeof characteristics>([]);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSlide]);

  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section id="characteristics" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Características da nova instituição</h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Um centro de excelência com autonomia, agilidade e capacidade de coordenação nacional 
            para proteção da saúde pública do Brasil.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="overflow-hidden relative">
            {/* Mobile navigation buttons - visible on small screens */}
            <div className="flex justify-between absolute top-1/2 -mt-6 left-0 right-0 z-10 px-2 sm:hidden">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            
            {/* Desktop navigation buttons - hidden on small screens */}
            <button 
              onClick={prevSlide}
              className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-10 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-health-500"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            {/* Carrossel de cards */}
            <div className="flex space-x-4 md:space-x-6 transition-all duration-500 ease-in-out">
              {visibleCards.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="bg-health-600 text-white rounded-lg overflow-hidden shadow-md h-full">
                    <div className="p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="rounded-full bg-white bg-opacity-20 p-3 w-14 h-14 flex items-center justify-center mb-5">
                        {item.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-white text-opacity-90 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-10 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-health-500"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {characteristics.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-health-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacteristicsSection;
