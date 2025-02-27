
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-8');
              }, index * 150);
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

  const projects = [
    {
      title: "Brand Identity",
      client: "Zetsy e-Commerce",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#"
    },
    {
      title: "Web Platform",
      client: "Fintech Solutions",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "#"
    },
    {
      title: "Mobile App",
      client: "Health Tracker",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "#"
    },
    {
      title: "E-commerce Solution",
      client: "Fashion Brand",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Recent Projects
              </h2>
              <p className="text-gray-600 max-w-md">
                Discover our latest work that showcases our expertise and creative approach to digital challenges.
              </p>
            </div>
            <a href="#" className="mt-6 md:mt-0 inline-flex items-center font-medium text-black hover:underline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="project-item opacity-0 translate-y-8 group block overflow-hidden rounded-2xl relative"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={`${project.image}?w=800&h=450&fit=crop&crop=entropy&auto=format,compress`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-8">
                    <div className="text-white/70 text-sm mb-2">{project.category}</div>
                    <h3 className="text-white text-xl font-medium mb-1">{project.title}</h3>
                    <p className="text-white/80">{project.client}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
