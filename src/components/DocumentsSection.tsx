
import React, { useEffect, useRef } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const DocumentsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.document-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-4');
                item.classList.add('animation-visible');
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

  const documents = [
    {
      title: "Documento-referência",
      description: "É o documento inicial que embasa a proposta – aqui você encontra uma versão reduzida (a completa tem XXX páginas). Aqui está um panorama detalhado das grandes epidemias que assolaram o Brasil desde o século XIX, destacando como cada uma delas expôs as fragilidades do sistema de saúde pública. O material aponta de forma mais detalhada os princípios e as diretrizes da instituição.",
      link: "#"
    },
    {
      title: "Proposta preliminar de implementação",
      description: "A proposta de implementação apresenta uma proposta operacional detalhada para a criação da nova instituição, delineia sua missão e visão.",
      link: "#"
    },
    {
      title: "Proposta de política de Estado para enfrentamento de Emergências em Saúde Pública",
      description: "O documento propõe uma política de Estado para o enfrentamento de emergências em saúde pública, com a criação de uma nova institucionalidade como peça central. A proposta se alinha ao movimento global de revisão do Regulamento Sanitário Internacional (RSI) e à necessidade de um tratado internacional para pandemias.",
      link: "#"
    }
  ];

  return (
    <section id="documents" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Documentos</h2>
          <p className="text-base md:text-lg text-gray-600">
            Acesse os documentos completos com todos os detalhes sobre a proposta
            de criação do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-5">
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className="document-item opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-lg p-5 md:p-6 shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mr-0 md:mr-5 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FileText className="h-8 w-8 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{doc.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{doc.description}</p>
                  <a 
                    href={doc.link} 
                    className="inline-flex items-center text-health-600 hover:text-health-700 transition-colors font-medium text-sm md:text-base"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    <span>Baixar documento</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
