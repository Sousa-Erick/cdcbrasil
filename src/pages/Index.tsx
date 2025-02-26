
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Definition from '../components/Definition';
import Principles from '../components/Principles';
import Resources from '../components/Resources';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
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
