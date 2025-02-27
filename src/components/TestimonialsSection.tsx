
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      quote: "Woltex transformed our online presence completely. Their strategic approach and creative solutions have helped us increase engagement and conversions beyond our expectations.",
      author: "Sofia Rodriguez",
      position: "Marketing Director, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Working with the Woltex team was an absolute pleasure. They understood our vision from day one and delivered a website that perfectly captures our brand essence.",
      author: "Mark Williams",
      position: "CEO, Innovate Inc.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Their attention to detail and commitment to excellence sets Woltex apart from other agencies we've worked with. The results speak for themselves - our digital metrics have improved across the board.",
      author: "Emma Chen",
      position: "Product Manager, DesignHub",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
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

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 bg-black text-white opacity-0 translate-y-8 transition-all duration-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
              Client Testimonials
            </h2>
            <div className="flex space-x-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    <div className="mb-8 md:mb-0 md:mr-12">
                      <Quote className="h-12 w-12 text-white/30" />
                    </div>
                    <div>
                      <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-white/70 text-sm">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
