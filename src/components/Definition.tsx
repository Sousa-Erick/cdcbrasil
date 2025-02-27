
import React, { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const Definition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'is' | 'isNot'>('is');
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const whatIs = [
    "Uma instituição de Estado que fortalece o SUS",
    "Um centro de referência em prevenção e controle de doenças",
    "Uma fonte confiável de informações para a população",
    "Um órgão articulador entre diferentes setores da saúde",
    "Uma instituição de pesquisa e desenvolvimento científico"
  ];

  const whatIsNot = [
    "Uma substituição para as estruturas atuais do SUS",
    "Um órgão burocrático que dificulta a resposta às emergências",
    "Uma instituição de atuação apenas durante crises",
    "Um centro isolado, sem integração com outros órgãos",
    "Uma entidade sem embasamento científico em suas ações"
  ];

  return (
    <section id="definition" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            O Que É e O Que Não É
          </h2>
          
          <p className="text-gray-600 mb-8 text-center">
            É importante entender claramente o papel do Centro Brasileiro 
            de Prevenção e Controle de Doenças no sistema de saúde.
          </p>
          
          {/* Tabs para mobile */}
          <div className="mb-6 sm:hidden">
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button
                className={`flex-1 py-3 px-4 text-sm font-medium ${
                  activeTab === 'is' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('is')}
              >
                O Que É
              </button>
              <button
                className={`flex-1 py-3 px-4 text-sm font-medium ${
                  activeTab === 'isNot' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('isNot')}
              >
                O Que Não É
              </button>
            </div>
          </div>
          
          {/* Conteúdo para mobile (tabs) */}
          <div className="sm:hidden">
            <div className={activeTab === 'is' ? 'block' : 'hidden'}>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                  <Check className="h-5 w-5 mr-2" /> O Que É
                </h3>
                
                <ul className="space-y-4">
                  {whatIs.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={activeTab === 'isNot' ? 'block' : 'hidden'}>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-salmon-500 flex items-center">
                  <X className="h-5 w-5 mr-2" /> O Que Não É
                </h3>
                
                <ul className="space-y-4">
                  {whatIsNot.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 mr-3 mt-0.5 text-salmon-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Conteúdo para desktop (duas colunas) */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                <Check className="h-5 w-5 mr-2" /> O Que É
              </h3>
              
              <ul className="space-y-4">
                {whatIs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-0.5 text-blue-700 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-salmon-500 flex items-center">
                <X className="h-5 w-5 mr-2" /> O Que Não É
              </h3>
              
              <ul className="space-y-4">
                {whatIsNot.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-5 w-5 mr-3 mt-0.5 text-salmon-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
