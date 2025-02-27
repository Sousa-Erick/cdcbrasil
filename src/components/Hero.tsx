
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-black text-white flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full">
            <span className={cn(
              "text-sm text-white/80 transition-opacity duration-500",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Digital Agency Template
            </span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-tight transition-all duration-700 ease-in-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            We craft digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">experiences</span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white/70 max-w-2xl mb-12 md:mb-16 transition-all duration-700 delay-300 ease-in-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Woltex is a creative digital agency focused on growing brands online through bold strategy & creative, web design, development.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-500 ease-in-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition duration-300"
            >
              Recent Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <button 
          onClick={() => scrollToSection('services')}
          className="inline-flex flex-col items-center text-white/50 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
