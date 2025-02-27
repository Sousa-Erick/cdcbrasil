
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, PenTool, BarChart3 } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.animate-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-8');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Brand Design",
      description: "We craft simple, memorable and distinctive icons, logos and typographic identities.",
      link: "#"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "We build creative web products with cutting-edge technology stack for your digital presence.",
      link: "#"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "We analyze data, user behavior and market trends to build successful marketing strategies.",
      link: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="animate-item opacity-0 translate-y-8 text-3xl md:text-4xl font-bold mb-6 text-black">
                Our Services
              </h2>
              <p className="animate-item opacity-0 translate-y-8 text-gray-600 max-w-md">
                We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-item opacity-0 translate-y-8 p-8 bg-white rounded-2xl hover:shadow-xl transition duration-300"
              >
                <div className="p-4 rounded-full bg-black/5 inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href={service.link} 
                  className="inline-flex items-center font-medium text-black hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
