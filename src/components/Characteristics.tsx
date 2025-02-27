
import React, { useEffect, useRef } from 'react';
import { Zap, CheckSquare, Shield, Clock, Network } from 'lucide-react';

const Characteristics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.characteristic-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-8');
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

  const characteristics = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Agilidade",
      description: "Capacidade de resposta rápida em emergências, com processos simplificados e eficientes."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-white" />,
      title: "Qualificação",
      description: "Equipe técnica altamente qualificada e constantemente atualizada sobre as melhores práticas."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Autonomia",
      description: "Independência técnica e administrativa para tomar decisões baseadas em evidências."
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Continuidade",
      description: "Atuação permanente, não apenas durante crises, com foco na prevenção constante."
    },
    {
      icon: <Network className="h-6 w-6 text-white" />,
      title: "Coordenação em rede",
      description: "Integração com diferentes órgãos de saúde, universidades e institutos de pesquisa."
    }
  ];

  const backgroundColors = [
    "bg-indigo-600",
    "bg-purple-600",
    "bg-blue-600",
    "bg-indigo-700",
    "bg-purple-700"
  ];

  return (
    <section id="characteristics" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Características da Nova Instituição
          </h2>
          
          <p className="text-gray-600">
            O Centro Brasileiro de Prevenção e Controle de Doenças terá características essenciais 
            para garantir sua eficácia no enfrentamento das emergências em saúde pública.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {characteristics.map((item, index) => (
            <div 
              key={index}
              className={`characteristic-card opacity-0 translate-y-8 transition-all duration-500 rounded-lg p-6 text-white shadow-lg ${backgroundColors[index % backgroundColors.length]}`}
            >
              <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/90 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
