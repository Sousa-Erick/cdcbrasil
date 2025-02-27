
import React, { useEffect, useRef } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const WhatIsSection: React.FC = () => {
  const isRef = useRef<HTMLDivElement>(null);
  const isNotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.list-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-4');
                // Garantir que os itens permaneçam visíveis após a animação
                item.classList.add('animation-visible');
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (isRef.current) observer.observe(isRef.current);
    if (isNotRef.current) observer.observe(isNotRef.current);

    return () => {
      if (isRef.current) observer.unobserve(isRef.current);
      if (isNotRef.current) observer.unobserve(isNotRef.current);
    };
  }, []);

  const isItems = [
    "Integrado ao sistema federativo (SUS), operando em rede",
    "Vinculado obrigatoriamente ao Ministério da Saúde, como a Fiocruz e a Anvisa",
    "Subordinado às diretrizes e aos princípios do SUS e do Política Nacional de Vigilância em Saúde (PNVS)",
    "Conselho de Administração presidido pelo(a) titular do Ministério da Saúde",
    "Atuar em parceria com conselhos de Saúde e Organizações da Sociedade Civil (OSC)",
    "Uma instituição flexível e ágil",
    "Subordinado à Controladoria-Geral da União (CGU), ao Tribunal de Contas da União (TCU) e ao Ministério Público",
    "Focado inicialmente em prevenção, detecção, preparação e resposta a emergências em saúde pública",
    "Uma instituição de apoio ao desenvolvimento de tecnologias em parcerias com universidades, instituições de C&T públicas e privadas",
    "Centrado na vigilância em doenças de maior impacto na saúde pública e nas mudanças ambientais e climáticas",
    "Articulador para integração e análise de dados, inclusive genômicos"
  ];

  const isNotItems = [
    "Independente do SUS e do Ministério da Saúde",
    "Coordenador de programas",
    "Executor direto de ações de intervenção",
    "Alheio às diretrizes do Ministério da Saúde e do SUS",
    "Independente dos órgãos de controle (CGU, TCU e MP)",
    "Uma agência de fomento de pesquisa",
    "Uma agência reguladora",
    "Substituto de órgãos já existentes no âmbito do SUS",
    "Espelho do CDC dos EUA"
  ];

  return (
    <section id="what-is" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que é, o que não é</h2>
          <p className="text-gray-600">
            Entenda a natureza e os limites da proposta para o Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-health-600 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" /> A proposta prevê que o novo centro será:
            </h3>
            
            <div ref={isRef} className="space-y-3">
              {isItems.map((item, index) => (
                <div 
                  key={index} 
                  className="list-item opacity-0 translate-y-4 transition-all duration-300 flex"
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-health-600 flex items-center">
              <XCircle className="h-6 w-6 mr-2" /> A proposta prevê que o novo centro não será:
            </h3>
            
            <div ref={isNotRef} className="space-y-3">
              {isNotItems.map((item, index) => (
                <div 
                  key={index} 
                  className="list-item opacity-0 translate-y-4 transition-all duration-300 flex"
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle className="h-3 w-3 text-red-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
