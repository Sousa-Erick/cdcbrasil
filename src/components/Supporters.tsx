
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
      name: "Amilcar Tanuri",
      role: "Chefe do Laboratório de Virologia Molecular do Instituto de Biologia da UFRJ"
    },
    {
      name: "Antonio S. Lima Neto",
      role: "Secretário de Vigilância da Secretaria da Saúde do Ceará e professor do curso de Medicina da Universidade de Fortaleza"
    },
    {
      name: "Arthur Aguillar",
      role: "Diretor de Políticas Públicas do Instituto de Estudos para as Políticas de Saúde"
    },
    {
      name: "Beatriz Nadas",
      role: "Presidente do Instituto Municipal de Administração Pública e ex-secretária de Saúde de Curitiba"
    },
    {
      name: "Carlos Medicis Morel",
      role: "Ex-presidente da Fiocruz e atual diretor do Centro de Desenvolvimento Tecnológico em Saúde da Fiocruz"
    },
    {
      name: "Claudio Maierovitch Pessanha Henriques",
      role: "Sanitarista da Fiocruz, ex-presidente da Anvisa e ex-diretor de Vigilância de Doenças Transmissíveis do Ministério da Saúde"
    },
    {
      name: "Cristiana Toscano",
      role: "Professora da UFG e integrante do Grupo Consultivo Estratégico de Especialistas em Imunização da OMS"
    },
    {
      name: "Dirceu Greco",
      role: "Professor emérito da Faculdade de Medicina da UFMG, ex-diretor do Departamento de DST, Aids e Hepatites Virais do Ministério da Saúde e ex-presidente da Sociedade Brasileira Bioética"
    },
    {
      name: "Eduardo Hage",
      role: "Professor da pós-graduação da Escola Fiocruz de Governo, médico sanitarista da Secretaria de Saúde do Distrito Federal e consultor AdHoc da OMS"
    },
    {
      name: "Ester Sabino",
      role: "Professora titular do Departamento de Patologia da Faculdade de Medicina da USP e consultora científica do Instituto Todos pela Saúde (ITpS)"
    },
    {
      name: "Gerson Penna",
      role: "Pesquisador da Fiocruz, professor da UnB, ex-secretário de Vigilância em Saúde do Ministério da Saúde e ex-diretor da Fiocruz Brasília; membro do Grupo Consultivo Estratégico e Técnico sobre Riscos Infecciosos com Potencial de Pandemia e Epidemia do Comitê Geral de Preparação e Prevenção para Epidemias e Pandemias da OMS"
    },
    {
      name: "Gonzalo Vecina",
      role: "Professor da Faculdade de Saúde Pública da USP e da FGV, ex-presidente da Anvisa, ex-secretário nacional de Vigilância Sanitária do Ministério da Saúde e ex-secretário municipal da Saúde de São Paulo"
    },
    {
      name: "José Agenor Álvares da Silva",
      role: "Pesquisador da Fiocruz, ex-ministro da Saúde e ex-diretor da Anvisa"
    },
    {
      name: "José Gomes Temporão",
      role: "Pesquisador da Fiocruz e ex-ministro da Saúde"
    },
    {
      name: "Margareth Dalcolmo",
      role: "Pesquisadora da Fiocruz e ex-presidente da Sociedade Brasileira de Pneumologia e Tisiologia"
    },
    {
      name: "Maria Glória Teixeira",
      role: "Professora aposentada da UFBA e ex-coordenadora nacional da Vigilância Epidemiológica do Ministério da Saúde"
    },
    {
      name: "Mariângela Simão",
      role: "Diretora-presidente do Instituto Todos pela Saúde (ITpS) e ex-diretora-geral adjunta da OMS"
    },
    {
      name: "Moisés Goldbaum",
      role: "Professor sênior do Departamento de Medicina Preventiva da Faculdade de Medicina da USP, ex-secretário de Ciência, Tecnologia e Insumos Estratégicos do Ministério da Saúde e ex-superintendente da Superintendência de Controle de Endemias do estado de São Paulo"
    },
    {
      name: "Rita Barradas Barata",
      role: "Professora da Faculdade de Ciências Médicas da Santa Casa de São Paulo e ex-presidente da Associação Brasileira de Saúde Coletiva"
    },
    {
      name: "Pedro Ribeiro Barbosa",
      role: "Diretor-presidente do Instituto de Biologia Molecular do Paraná, ex-vice-presidente de Gestão e Desenvolvimento Institucional da Fiocruz e ex-vice-diretor de Desenvolvimento Institucional e Gestão da Escola Nacional de Saúde Pública Sergio Arouca"
    },
    {
      name: "Vanderson Sampaio",
      role: "Diretor de Operações do Instituto Todos pela Saúde (ITpS) e professor de Programas de pós-graduação da Fiocruz Amazônia e da Universidade do Estado do Amazonas"
    },
    {
      name: "Wanderson Oliveira",
      role: "Epidemiologista na direção técnica de Ensino e Pesquisa do Hospital das Forças Armadas, professor de Medicina na Uniceplac, ex-secretário de Vigilância em Saúde no Ministério da Saúde e ex-secretário de Saúde do STF"
    }
  ];

  const visibleSupporters = 3; // Número de apoiadores visíveis por vez em desktop
  const totalSlides = Math.ceil(supporters.length / visibleSupporters);

  const navigateSlider = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentSlide(current => (current > 0 ? current - 1 : totalSlides - 1));
    } else {
      setCurrentSlide(current => (current < totalSlides - 1 ? current + 1 : 0));
    }
  };

  useEffect(() => {
    // Auto slide a cada 7 segundos
    const interval = setInterval(() => {
      navigateSlider('next');
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

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
    <section id="supporters" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-5xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            Apoiadores da Proposta
          </h2>
          
          <p className="text-gray-600 mb-8 text-center">
            A criação do Centro Brasileiro de Prevenção e Controle de Doenças 
            conta com o apoio de diversos especialistas e instituições.
          </p>
          
          <div className="relative">
            {/* Carrossel para Desktop */}
            <div className="hidden md:block">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full flex-shrink-0 flex gap-4">
                      {supporters.slice(slideIndex * visibleSupporters, (slideIndex + 1) * visibleSupporters).map((supporter, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="mb-3 w-12 h-12 bg-blue-light rounded-full flex items-center justify-center">
                            <span className="text-blue font-semibold text-lg">{supporter.name.charAt(0)}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-800">{supporter.name}</h3>
                          <p className="text-gray-600 text-sm">{supporter.role}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Carrossel para Mobile (único apoiador por vez) */}
            <div className="md:hidden">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {supporters.map((supporter, index) => (
                    <div 
                      key={index} 
                      className="min-w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center">
                            <span className="text-blue font-semibold text-xl">{supporter.name.charAt(0)}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{supporter.name}</h3>
                        <p className="text-gray-600 text-center">{supporter.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue transition-colors z-10"
              onClick={() => navigateSlider('prev')}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-blue transition-colors z-10"
              onClick={() => navigateSlider('next')}
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button 
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-salmon' : 'bg-gray-300'
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
