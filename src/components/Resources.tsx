
import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';

const Resources: React.FC = () => {
  const news = [
    {
      title: "Especialistas defendem criação do CDC Brasil",
      date: "15/05/2023",
      source: "Jornal da Ciência",
      link: "#"
    },
    {
      title: "Senado debate criação do Centro de Controle de Doenças",
      date: "22/04/2023",
      source: "Agência Senado",
      link: "#"
    },
    {
      title: "Após Covid-19, Brasil avalia modelo para centro de controle de doenças",
      date: "10/03/2023",
      source: "Folha de S.Paulo",
      link: "#"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notícias</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="block p-5 bg-gray-100 rounded-lg hover:shadow-md transition-all animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h4>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                <span>{item.date}</span>
                <span className="mx-2">•</span>
                <span>{item.source}</span>
              </div>
              <div className="flex items-center text-health-600 text-sm font-medium">
                <span>Ler mais</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
