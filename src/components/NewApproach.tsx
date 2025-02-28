import React, { useEffect, useRef } from 'react';
import { CheckCircle, Share2, Shield, Clock } from 'lucide-react';
const NewApproach: React.FC = () => {
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
  const benefits = [{
    icon: <Shield className="h-5 w-5 text-blue" />,
    text: "Proteção da saúde da população brasileira"
  }, {
    icon: <Share2 className="h-5 w-5 text-blue" />,
    text: "Integração com o Sistema Único de Saúde"
  }, {
    icon: <CheckCircle className="h-5 w-5 text-blue" />,
    text: "Embasamento em evidências científicas"
  }, {
    icon: <Clock className="h-5 w-5 text-blue" />,
    text: "Atuação rápida e coordenada"
  }];
  return <section id="approach" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            Precisamos de uma nova abordagem
          </h2>
          
          <p className="text-gray-600 mb-8">
            A experiência com a pandemia da Covid-19 demonstrou que o Brasil precisa de uma instituição 
            específica para enfrentar emergências em saúde pública. Uma política de Estado é necessária, 
            com a criação de um centro que fortaleça o SUS e trabalhe com base em evidências científicas.
          </p>
          
          <p className="text-gray-600 mb-8">
            A criação do Centro Brasileiro de Prevenção e Controle de Doenças representa uma resposta 
            estruturada e permanente para proteger a saúde da população brasileira, atuando de forma 
            coordenada e eficiente antes, durante e após emergências sanitárias.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-salmon">Benefícios da nova abordagem</h3>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => <li key={index} className="flex items-center">
                  <div className="mr-3 text-blue">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700">{benefit.text}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default NewApproach;