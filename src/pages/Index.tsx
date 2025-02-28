
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContextChallenges from '../components/ContextChallenges';
import NewApproach from '../components/NewApproach';
import Characteristics from '../components/Characteristics';
import Principles from '../components/Principles';
import Definition from '../components/Definition';
import Supporters from '../components/Supporters';
import Materials from '../components/Materials';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ContextChallenges />
        <NewApproach />
        <Characteristics />
        <Principles />
        <Definition />
        <Supporters />
        <Materials />
        <NewsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
