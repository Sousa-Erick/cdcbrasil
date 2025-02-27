
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EmergenciesSection from '../components/EmergenciesSection';
import StrategiesSection from '../components/StrategiesSection';
import CharacteristicsSection from '../components/CharacteristicsSection';
import PrinciplesDirectives from '../components/PrinciplesDirectives';
import WhatIsSection from '../components/WhatIsSection';
import SupportersSection from '../components/SupportersSection';
import DocumentsSection from '../components/DocumentsSection';
import NewsSection from '../components/NewsSection';
import WorldMapSection from '../components/WorldMapSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Implementa smooth scroll para navegação interna
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      // Verifica se é um link de navegação interna
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        
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
    const scrollToHashSection = () => {
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
    };
    
    scrollToHashSection();
    
    // Adiciona um ouvinte para mudanças no hash da URL
    window.addEventListener('hashchange', scrollToHashSection);
    
    return () => {
      window.removeEventListener('hashchange', scrollToHashSection);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EmergenciesSection />
        <StrategiesSection />
        <CharacteristicsSection />
        <PrinciplesDirectives />
        <WhatIsSection />
        <SupportersSection />
        <DocumentsSection />
        <NewsSection />
        <WorldMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
