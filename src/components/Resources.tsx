
import React, { useState, useEffect } from 'react';
import { ExternalLink, Clock, Plus, Calendar } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  link: string;
  featured?: boolean;
}

// Simulando uma API ou base de dados que seria atualizada pela equipe de jornalismo
const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Especialistas defendem criação do CDC Brasil",
    date: "15/05/2023",
    source: "Jornal da Ciência",
    link: "#",
    featured: true
  },
  {
    id: "news-2",
    title: "Senado debate criação do Centro de Controle de Doenças",
    date: "22/04/2023",
    source: "Agência Senado",
    link: "#"
  },
  {
    id: "news-3",
    title: "Após Covid-19, Brasil avalia modelo para centro de controle de doenças",
    date: "10/03/2023",
    source: "Folha de S.Paulo",
    link: "#"
  },
  {
    id: "news-4",
    title: "Proposta de criação do CDC Brasil ganha apoio de universidades",
    date: "05/02/2023",
    source: "Portal de Notícias",
    link: "#"
  }
];

const Resources: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Simulando uma chamada de API que seria feita para um backend real
    const fetchNews = async () => {
      // Em um cenário real, isso seria uma chamada fetch para uma API
      setTimeout(() => {
        setNews(newsData);
      }, 500);
    };

    fetchNews();
  }, []);

  const loadMore = () => {
    setIsLoading(true);
    // Simulando o carregamento de mais notícias
    setTimeout(() => {
      setVisibleCount(Math.min(news.length, visibleCount + 3));
      setIsLoading(false);
    }, 800);
  };

  const formatDate = (dateString: string) => {
    const parts = dateString.split('/');
    const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    return new Intl.DateTimeFormat('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };

  // Encontrar a notícia em destaque
  const featuredNews = news.find(item => item.featured);
  // Filtrar as outras notícias (não destacadas)
  const regularNews = news.filter(item => !item.featured).slice(0, visibleCount);

  return (
    <section id="news" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Notícias e Atualizações</h2>
          <p className="text-gray-600">
            Acompanhe as últimas notícias sobre o desenvolvimento 
            do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        {/* Featured News (if available) */}
        {featuredNews && (
          <div className="mb-10 max-w-5xl mx-auto animate-fade-in">
            <a 
              href={featuredNews.link} 
              className="block bg-blue-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-blue-600 mb-3">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{formatDate(featuredNews.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredNews.source}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{featuredNews.title}</h3>
                
                <div className="flex items-center text-health-600 text-sm font-medium mt-4">
                  <span>Ler notícia completa</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                </div>
              </div>
            </a>
          </div>
        )}
        
        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regularNews.map((item, index) => (
            <a 
              key={item.id} 
              href={item.link} 
              className="block p-5 bg-gray-50 rounded-lg hover:shadow-md transition-all animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                <span>{item.date}</span>
                <span className="mx-2">•</span>
                <span>{item.source}</span>
              </div>
              
              <h4 className="text-lg font-semibold mb-3 text-gray-900">{item.title}</h4>
              
              <div className="flex items-center text-health-600 text-sm font-medium">
                <span>Ler mais</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </div>
            </a>
          ))}
        </div>
        
        {/* Load More Button */}
        {visibleCount < news.filter(item => !item.featured).length && (
          <div className="mt-10 text-center">
            <button 
              onClick={loadMore} 
              disabled={isLoading}
              className="inline-flex items-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Carregando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Plus className="h-4 w-4 mr-1.5" />
                  Carregar mais notícias
                </span>
              )}
            </button>
          </div>
        )}
        
        {/* Newsletter Signup for Updates */}
        <div className="mt-16 max-w-3xl mx-auto bg-health-50 rounded-lg p-6 border border-health-100">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Receba atualizações</h3>
            <p className="text-gray-600 mb-6">
              Inscreva-se para receber as últimas notícias sobre o CDC Brasil diretamente em seu email.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-grow px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-health-500 focus:border-health-500 outline-none transition-all"
                required
              />
              <button 
                type="submit" 
                className="px-5 py-2.5 bg-health-600 hover:bg-health-700 text-white font-medium rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
