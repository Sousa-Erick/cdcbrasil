import React, { useEffect, useRef } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
const NewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newsItems = entry.target.querySelectorAll('.news-item');
          newsItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
              item.classList.remove('opacity-0', 'translate-y-8');
            }, index * 150);
          });
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const news = [{
    title: "Especialistas defendem criação de centro brasileiro de controle de doenças",
    date: "15/05/2023",
    source: "Folha de São Paulo",
    summary: "Grupo de pesquisadores e médicos defende a criação de uma instituição similar ao CDC americano para enfrentar emergências sanitárias.",
    link: "#"
  }, {
    title: "Pandemia evidencia necessidade de um CDC brasileiro, dizem especialistas",
    date: "22/04/2023",
    source: "O Globo",
    summary: "Após a experiência com a Covid-19, pesquisadores apontam falhas na resposta brasileira e propõem a criação de um centro específico.",
    link: "#"
  }, {
    title: "Ministério da Saúde avalia proposta de criação do CDC brasileiro",
    date: "10/03/2023",
    source: "Agência Brasil",
    summary: "Autoridades de saúde analisam proposta para a criação do Centro Brasileiro de Prevenção e Controle de Doenças.",
    link: "#"
  }];
  return <section id="news" ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Últimas notícias</h2>
          
          <p className="text-gray-600">
            Acompanhe as últimas notícias sobre a proposta de criação do 
            Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {news.map((item, index) => <div key={index} className="news-item opacity-0 translate-y-8 transition-all duration-500 bg-white rounded-lg p-5 shadow-md border border-gray-200">
              <a href={item.link} className="block hover:no-underline">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue transition-colors">{item.title}</h3>
                
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">{item.source}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{item.summary}</p>
                
                <div className="flex items-center text-salmon font-medium">
                  <span>Ler mais</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </div>
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default NewsSection;