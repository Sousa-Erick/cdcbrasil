
import React, { useEffect, useState, useRef } from 'react';
import { User, ArrowLeft, ArrowRight } from 'lucide-react';

interface Supporter {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

const SupportersSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const supporters: Supporter[] = [
    {
      id: "supporter-1",
      name: "Dra. Maria Silva",
      role: "Ex-Ministra da Saúde",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "supporter-2",
      name: "Dr. Carlos Oliveira",
      role: "Presidente da Sociedade Brasileira de Infectologia",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "supporter-3",
      name: "Profa. Ana Santos",
      role: "Pesquisadora da Fiocruz",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "supporter-4",
      name: "Dr. João Pereira",
      role: "Diretor da Faculdade de Medicina USP",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "supporter-5",
      name: "Dra. Juliana Costa",
      role: "Epidemiologista",
      imageUrl: "/placeholder.svg"
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === supporters.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? supporters.length - 1 : prevIndex - 1
    );
  };

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, activeIndex]);
  
  // Pause autoplay on hover
  const pauseAutoPlay = () => setIsAutoPlay(false);
  const resumeAutoPlay = () => setIsAutoPlay(true);
  
  // Calculate visible supporters
  const getVisibleSupporters = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let visibleCount = 1;
    
    if (windowWidth >= 1024) {
      visibleCount = 3;
    } else if (windowWidth >= 768) {
      visibleCount = 2;
    }
    
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % supporters.length;
      result.push(supporters[index]);
    }
    
    return result;
  };
  
  const [visibleSupporters, setVisibleSupporters] = useState<Supporter[]>([]);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleSupporters(getVisibleSupporters());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex]);
  
  return (
    <section id="supporters" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Quem são as pessoas que apoiam a proposta</h2>
          <p className="text-gray-600 px-4">
            Conheça os especialistas e autoridades que defendem a criação do 
            Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div 
          className="max-w-6xl mx-auto relative"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="flex justify-between items-center absolute top-1/2 -mt-4 left-0 right-0 z-10 px-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Anterior"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Próximo"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div className="overflow-hidden px-4">
            <div 
              className="flex space-x-6 transition-all duration-700 ease-in-out" 
            >
              {visibleSupporters.map((supporter, index) => (
                <div 
                  key={`${supporter.id}-${index}`}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300 h-full">
                    <div className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-full bg-gray-200 mb-6 overflow-hidden shadow-md">
                        {supporter.imageUrl ? (
                          <img 
                            src={supporter.imageUrl} 
                            alt={supporter.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-100">
                            <User className="h-12 w-12 text-blue-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{supporter.name}</h3>
                      <p className="text-gray-600 text-center">{supporter.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {supporters.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-health-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-4">
            <button 
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm text-gray-500 hover:text-health-600 transition-colors"
            >
              {isAutoPlay ? 'Pausar reprodução automática' : 'Reprodução automática'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
