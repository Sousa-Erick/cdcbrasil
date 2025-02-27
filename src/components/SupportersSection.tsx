
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
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Lista de apoiadores (dados simulados)
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
  
  // Para telas pequenas, mostra 1 card, para médias 2, para grandes 3
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
    <section id="supporters" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Quem são as pessoas que apoiam a proposta</h2>
          <p className="text-gray-600">
            Conheça os especialistas e autoridades que defendem a criação do 
            Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Anterior"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Próximo"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          <div 
            ref={sliderRef} 
            className="overflow-hidden"
          >
            <div className="flex transition-all duration-500" style={{ transform: `translateX(0)` }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {visibleSupporters.map((supporter) => (
                  <div 
                    key={supporter.id}
                    className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                        {supporter.imageUrl ? (
                          <img 
                            src={supporter.imageUrl} 
                            alt={supporter.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-100">
                            <User className="h-10 w-10 text-blue-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{supporter.name}</h3>
                      <p className="text-gray-600 text-center">{supporter.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {supporters.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex ? 'bg-health-600' : 'bg-gray-300'
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

export default SupportersSection;
