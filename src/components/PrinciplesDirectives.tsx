
import React, { useEffect, useRef, useState } from 'react';
import { Check, FileText, BookOpen } from 'lucide-react';

const PrinciplesDirectives: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'principles' | 'directives'>('principles');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animação para os itens internos
            const items = entry.target.querySelectorAll('.animate-item');
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

  const principles = [
    "Ser integrado ao sistema federativo como parte do SUS",
    "Ser uma instituição forte e confiável",
    "Ser eficiente"
  ];

  const directives = [
    "Atuar de forma conjunta e complementar às responsabilidades das três esferas de governo, priorizando o fortalecimento da vigilância em saúde",
    "Atuar em parceria com universidades, instituições de ciência e tecnologia, instituições públicas e privadas, conselhos de Saúde e outras organizações da sociedade civil",
    "Cooperar com a comunidade científica, instituições similares em outros países e organismos multilaterais",
    "Utilizar capacidades existentes da nação para promover saúde para todos os brasileiros",
    "Operar em rede",
    "Focar na vigilância das doenças de maior impacto e nos efeitos adversos à saúde decorrentes de determinantes sócio-ambientais e mudanças ambientais e das emergências climáticas",
    "Fortalecer vigilância, prevenção, detecção, preparação e resposta a ESP",
    "Integrar e analisar dados de doenças e agravos à saúde, incluindo genômica e determinantes da saúde, para a produção de informações relevantes e oportunas que possam subsidiar a tomada de decisão",
    "Propor medidas para redução de riscos e impactos, considerando a abordagem de Uma Só Saúde em vigilância em saúde",
    "Reduzir desigualdades no acesso à informação, conhecimento e tecnologias em saúde",
    "Proteger populações vulneráveis e trabalhar em parceria com comunidades afetadas"
  ];

  return (
    <section id="principles-directives" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Princípios e diretrizes</h2>
          <p className="text-base md:text-lg text-gray-600">
            Fundamentos que nortearão o funcionamento do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab('principles')}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'principles'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Princípios
            </button>
            <button
              onClick={() => setActiveTab('directives')}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'directives'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Diretrizes
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === 'principles' && (
            <div className="animate-fadeInRight bg-white rounded-lg p-6 md:p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <BookOpen className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Princípios</h3>
              </div>
              
              <ul className="space-y-5">
                {principles.map((principle, index) => (
                  <li 
                    key={index} 
                    className="animate-item opacity-0 translate-y-4 transition-all duration-500 flex"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    </div>
                    <span className="text-gray-700 text-base md:text-lg">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'directives' && (
            <div className="animate-fadeInLeft bg-white rounded-lg p-6 md:p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <FileText className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Diretrizes</h3>
              </div>
              
              <ul className="space-y-4">
                {directives.map((directive, index) => (
                  <li 
                    key={index} 
                    className="animate-item opacity-0 translate-y-4 transition-all duration-500 flex"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-blue-700" />
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">{directive}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesDirectives;
