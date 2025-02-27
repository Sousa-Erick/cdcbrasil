
import React, { useEffect, useRef } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.team-member');
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

  const team = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "David Chen",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emily Peters",
      position: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section ref={sectionRef} id="team" className="py-24 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We're a diverse team of talented individuals who are passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="team-member opacity-0 translate-y-8 group"
              >
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.twitter} 
                    className="p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    className="p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
