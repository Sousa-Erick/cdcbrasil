import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
const WorldMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
  const cdcs = [{
    country: "Estados Unidos",
    name: "Centers for Disease Control and Prevention (CDC)",
    founded: "1946",
    description: "Uma das mais importantes agências de saúde pública do mundo."
  }, {
    country: "Reino Unido",
    name: "UK Health Security Agency (UKHSA)",
    founded: "2021",
    description: "Responsável por proteger a saúde da população britânica."
  }, {
    country: "Canadá",
    name: "Public Health Agency of Canada (PHAC)",
    founded: "2004",
    description: "Agência dedicada à prevenção de doenças e promoção da saúde."
  }, {
    country: "China",
    name: "Chinese Center for Disease Control and Prevention",
    founded: "2002",
    description: "Principal instituição de controle e prevenção na China."
  }, {
    country: "Coréia do Sul",
    name: "Korea Disease Control and Prevention Agency (KDCA)",
    founded: "2004",
    description: "Agência que se destacou no combate à COVID-19."
  }];
  return;
};
export default WorldMap;