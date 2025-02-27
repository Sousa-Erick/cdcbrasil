
import React, { useEffect, useRef } from 'react';
import { Check, X, FileText, AlertTriangle, Shield } from 'lucide-react';

const Definition: React.FC = () => {
  const isItemsRef = useRef<HTMLUListElement>(null);
  const isNotItemsRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = 50;
          const items = entry.target.querySelectorAll('li');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
              item.classList.remove('opacity-0', 'translate-y-4');
            }, index * delay);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    if (isItemsRef.current) observer.observe(isItemsRef.current);
    if (isNotItemsRef.current) observer.observe(isNotItemsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isItems = [
    "Uma instituição com autonomia técnica e científica",
    "Um centro de prevenção e controle de doenças",
    "Um órgão de vigilância e resposta rápida a ameaças",
    "Uma estrutura de coordenação nacional em saúde pública",
    "Um centro de excelência em pesquisa epidemiológica"
  ];

  const isNotItems = [
    "Uma duplicação de estruturas já existentes no SUS",
    "Uma instituição subordinada a interesses políticos",
    "Um órgão sem coordenação com estados e municípios",
    "Um centro com atuação limitada a doenças específicas",
    "Uma instituição sem independência científica"
  ];

  return (
    <section id="definition" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que será o CDC Brasil</h2>
          <p className="text-gray-600">
            Uma instituição autônoma focada na proteção da saúde da população brasileira,
            com base em evidências científicas e coordenação nacional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-health-600 flex items-center">
              <Check className="h-6 w-6 mr-2" /> O que somos
            </h3>
            
            <ul ref={isItemsRef} className="space-y-4">
              {isItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex opacity-0 translate-y-4 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-6 text-health-600 flex items-center">
              <X className="h-6 w-6 mr-2" /> O que não somos
            </h3>
            
            <ul ref={isNotItemsRef} className="space-y-4">
              {isNotItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex opacity-0 translate-y-4 transition-all duration-300"
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-health-100 flex items-center justify-center">
                      <X className="h-3 w-3 text-health-600" />
                    </div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Preparo para enfrentar epidemias e pandemias</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              O CDC Brasil será uma instituição preparada para detectar, prevenir e responder a emergências epidemiológicas e pandêmicas, coordenando ações em todo o território nacional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-health-100 p-2 rounded-full mr-3">
                  <AlertTriangle className="h-5 w-5 text-health-600" />
                </div>
                <h4 className="font-medium">Detecção precoce</h4>
              </div>
              <p className="text-sm text-gray-600">
                Sistemas de vigilância para identificação rápida de surtos e epidemias.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-health-100 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-health-600" />
                </div>
                <h4 className="font-medium">Resposta coordenada</h4>
              </div>
              <p className="text-sm text-gray-600">
                Mobilização eficiente de recursos e equipes para contenção de ameaças.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-health-100 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-health-600" />
                </div>
                <h4 className="font-medium">Diretrizes baseadas em evidências</h4>
              </div>
              <p className="text-sm text-gray-600">
                Protocolos e recomendações fundamentados nos mais recentes conhecimentos científicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
