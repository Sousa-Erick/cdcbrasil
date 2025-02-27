
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Supporters: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
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

  const supporters = [
    {
      name: "Dra. Lucia Silva",
      role: "Infectologista",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "Uma instituição como esta é essencial para que o Brasil esteja preparado para as emergências sanitárias."
    },
    {
      name: "Dr. Carlos Santos",
      role: "Epidemiologista",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "A proposta representa um avanço significativo para a saúde pública brasileira."
    },
    {
      name: "Profa. Ana Oliveira",
      role: "Pesquisadora em Saúde Pública",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "O modelo proposto está alinhado com as melhores práticas internacionais no controle de doenças."
    },
    {
      name: "Dr. Paulo Mendes",
      role: "Gestor em Saúde",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "A criação desta instituição fortalecerá o SUS e toda a estrutura de vigilância em saúde do país."
    },
    {
      name: "Dra. Mariana Costa",
      role: "Médica Sanitarista",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      quote: "Um centro de excelência como este é fundamental para coordenar as ações de prevenção e controle de doenças."
    }
  ];

  const navigateSlider = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentSlide(current => (current > 0 ? current - 1 : supporters.length - 1));
    } else {
      setCurrentSlide(current => (current < supporters.length - 1 ? current + 1 : 0));
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  // Enable touch swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      navigateSlider('next');
    } else if (isRightSwipe) {
      navigateSlider('prev');
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="supporters" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            Apoiadores da Proposta
          </h2>
          
          <p className="text-gray-600 mb-8 text-center">
            A criação do Centro Brasileiro de Prevenção e Controle de Doenças 
            conta com o apoio de diversos especialistas e instituições.
          </p>
          
          <div className="relative bg-white rounded-lg shadow-md border border-gray-100 p-6 overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {supporters.map((supporter, index) => (
                <div key={index} className="min-w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={supporter.image} 
                      alt={supporter.name} 
                      className="w-24 h-24 rounded-full mb-4 border-4 border-blue-100"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{supporter.name}</h3>
                    <p className="text-salmon-500 text-sm mb-4">{supporter.role}</p>
                    <p className="text-gray-600 italic">"{supporter.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue-700 transition-colors"
              onClick={() => navigateSlider('prev')}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue-700 transition-colors"
              onClick={() => navigateSlider('next')}
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {supporters.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-salmon-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
