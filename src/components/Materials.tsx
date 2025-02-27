
import React, { useEffect, useRef } from 'react';
import { FileText, Download } from 'lucide-react';

const Materials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.material-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-8');
              }, index * 150);
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

  const materials = [
    {
      title: "Documento-referência",
      description: "Documento inicial que embasa a proposta com um panorama detalhado das grandes epidemias que assolaram o Brasil.",
      link: "#"
    },
    {
      title: "Proposta preliminar de implementação",
      description: "Proposta operacional detalhada para a criação da nova instituição, delineando sua missão e visão.",
      link: "#"
    },
    {
      title: "Proposta de política de Estado",
      description: "Documento que propõe uma política de Estado para o enfrentamento de emergências em saúde pública.",
      link: "#"
    }
  ];

  return (
    <section id="materials" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Materiais de Referência
          </h2>
          
          <p className="text-gray-600">
            Acesse os documentos completos com todos os detalhes sobre a proposta
            de criação do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className="material-item opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-lg p-5 shadow-md border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-shrink-0 mr-0 md:mr-5 mb-4 md:mb-0 flex justify-center md:justify-start">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <FileText className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <a 
                    href={material.link} 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
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

export default Materials;
