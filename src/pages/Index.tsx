
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Principles from '../components/Principles';
import Definition from '../components/Definition';
import Supporters from '../components/Supporters';
import Resources from '../components/Resources';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Principles />
        <Definition />
        <Supporters />
        <Resources />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
