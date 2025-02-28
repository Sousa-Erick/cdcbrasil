import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Link2, Users, Database, Heart } from 'lucide-react';
const Principles: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const principles = [{
    title: "Integrado",
    icon: <Link2 className="h-5 w-5 text-blue" />,
    content: "Atua de forma articulada com o SUS, respeitando seus princípios e fortalecendo a capacidade de resposta do sistema de saúde brasileiro."
  }, {
    title: "Forte",
    icon: <Users className="h-5 w-5 text-blue" />,
    content: "Dispõe de recursos humanos, tecnológicos e financeiros adequados, com estabilidade institucional e governança transparente."
  }, {
    title: "Eficiente",
    icon: <Database className="h-5 w-5 text-blue" />,
    content: "Utiliza métodos científicos e evidências para embasar decisões, com avaliação constante de resultados e aprimoramento contínuo."
  }];
  const directives = [{
    icon: <Link2 className="h-5 w-5 text-blue" />,
    text: "Parcerias com instituições nacionais e internacionais"
  }, {
    icon: <Users className="h-5 w-5 text-blue" />,
    text: "Cooperação intersetorial e federativa"
  }, {
    icon: <Database className="h-5 w-5 text-blue" />,
    text: "Uso inteligente de dados para tomada de decisões"
  }, {
    icon: <Heart className="h-5 w-5 text-blue" />,
    text: "Proteção das populações vulneráveis"
  }];
  return <section id="principles" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">Princípios e diretrizes</h2>
          
          <p className="text-gray-600 mb-8 text-center">A atuação do Centro Brasileiro de Prevenção e Controle de Doenças será guiada por princípios claros e diretrizes bem definidas</p>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-salmon">Princípios fundamentais</h3>
              
              <div className="space-y-4">
                {principles.map((principle, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => toggleAccordion(index)}>
                      <div className="flex items-center">
                        <div className="mr-3 text-blue">
                          {principle.icon}
                        </div>
                        <span className="font-medium text-gray-800">{principle.title}</span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openAccordion === index ? 'transform rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openAccordion === index ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="p-4 bg-white text-gray-600 text-sm">
                        {principle.content}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-blue">Diretrizes essenciais</h3>
            
            <ul className="space-y-4">
              {directives.map((directive, index) => <li key={index} className="flex items-center">
                  <div className="mr-3 text-blue">
                    {directive.icon}
                  </div>
                  <span className="text-gray-700">{directive.text}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default Principles;