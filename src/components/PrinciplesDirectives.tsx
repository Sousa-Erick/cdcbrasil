
import React, { useEffect, useRef } from 'react';
import { Check, FileText, Network, BookOpen } from 'lucide-react';

const PrinciplesDirectives: React.FC = () => {
  const principlesRef = useRef<HTMLDivElement>(null);
  const directivesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

    if (principlesRef.current) observer.observe(principlesRef.current);
    if (directivesRef.current) observer.observe(directivesRef.current);

    return () => {
      if (principlesRef.current) observer.unobserve(principlesRef.current);
      if (directivesRef.current) observer.unobserve(directivesRef.current);
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
    <section id="principles-directives" className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Princípios e diretrizes</h2>
          <p className="text-white text-opacity-80">
            Fundamentos que nortearão o funcionamento do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div ref={principlesRef} className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-white bg-opacity-20 p-3 mr-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Princípios</h3>
            </div>
            
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li 
                  key={index} 
                  className="animate-item opacity-0 translate-y-4 transition-all duration-300 flex"
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-white">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div ref={directivesRef} className="bg-white bg-opacity-10 rounded-lg p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-white bg-opacity-20 p-3 mr-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Diretrizes</h3>
            </div>
            
            <ul className="space-y-4">
              {directives.map((directive, index) => (
                <li 
                  key={index} 
                  className="animate-item opacity-0 translate-y-4 transition-all duration-300 flex"
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-white text-sm md:text-base">{directive}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesDirectives;
