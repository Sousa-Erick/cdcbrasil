
import React from 'react';
import { Check, X } from 'lucide-react';

const Definition: React.FC = () => {
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
    <section id="definition" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que será...</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-health-600 flex items-center">
              <Check className="h-6 w-6 mr-2" /> O que somos
            </h3>
            
            <ul className="space-y-4">
              {isItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
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
            
            <ul className="space-y-4">
              {isNotItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex animate-fade-in" 
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
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
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Preparo para enfrentar epidemias e pandemias</h2>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">
            O CDC Brasil será uma instituição preparada para detectar, prevenir e responder a emergências epidemiológicas e pandêmicas, coordenando ações em todo o território nacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Definition;
