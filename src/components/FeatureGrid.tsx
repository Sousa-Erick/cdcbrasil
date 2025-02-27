
import React, { useEffect, useRef } from 'react';
import { Shield, FileText, Users, Brain, ArrowRight } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.feature-item');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      title: "Autonomia baseada em evidência",
      description: "Decisões técnicas baseadas exclusivamente em evidências científicas, livres de interferências políticas.",
      icon: <Brain className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Atuação em emergências sanitárias",
      description: "Capacidade de resposta rápida e coordenada em situações de crise de saúde pública.",
      icon: <Shield className="h-6 w-6 text-white" />,
      bgColor: "bg-health-600"
    },
    {
      title: "Coordenação em rede nacional",
      description: "Articulação com instituições de pesquisa, universidades e serviços de saúde em todo o país.",
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: "bg-health-500"
    },
    {
      title: "Capacitação para centros regionais",
      description: "Formação e apoio técnico para centros de controle de doenças em estados e municípios.",
      icon: <FileText className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Um novo centro para proteger vidas...</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Apresentamos a proposta de criação do Centro Brasileiro de Prevenção e Controle de Doenças: uma instituição 
          autônoma, baseada em evidências e preparada para enfrentar emergências em saúde pública.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-item opacity-0 ${feature.bgColor} rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-all duration-300`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-white bg-opacity-20 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-white text-opacity-90 mb-4">{feature.description}</p>
              <div className="mt-2">
                <a href="#" className="inline-flex items-center text-white text-sm font-medium group">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#definition" className="inline-flex items-center text-health-600 hover:text-health-700 transition-colors font-medium">
            <span className="mr-2">Entenda o que é o CDC Brasil</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
