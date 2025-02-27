
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Definition from '../components/Definition';
import Principles from '../components/Principles';
import Resources from '../components/Resources';
import Map from '../components/Map';
import Footer from '../components/Footer';

// Versão atualizada com smooth scroll
const Index = () => {
  useEffect(() => {
    // Implementa smooth scroll para navegação interna
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Verifica se é um link de navegação interna
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            
            // Atualiza URL sem recarregar a página
            window.history.pushState(null, '', `#${id}`);
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  // Verifica se há um hash na URL ao carregar a página
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Pequeno timeout para garantir que a página carregou completamente
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
        <Definition />
        <Principles />
        <Resources />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
