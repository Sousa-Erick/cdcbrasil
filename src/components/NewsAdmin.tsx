
import React, { useState } from 'react';
import { X, Plus, Upload, Calendar, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  link: string;
  featured?: boolean;
}

// Esta é uma interface de administração para equipes de comunicação
// Em um cenário real, isso teria autenticação e estaria protegido
const NewsAdmin: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([
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
    }
  ]);
  
  const [newNewsItem, setNewNewsItem] = useState<Partial<NewsItem>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    source: '',
    link: '',
    featured: false
  });
  
  const [isAddingNews, setIsAddingNews] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setNewNewsItem(prev => ({ ...prev, [name]: checked }));
    } else {
      setNewNewsItem(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSaveNews = () => {
    if (!newNewsItem.title || !newNewsItem.source || !newNewsItem.link) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    const newsItem: NewsItem = {
      id: `news-${Date.now()}`,
      title: newNewsItem.title!,
      date: newNewsItem.date || new Date().toISOString().split('T')[0],
      source: newNewsItem.source!,
      link: newNewsItem.link!,
      featured: newNewsItem.featured || false
    };
    
    // Se este item for destaque, desmarque qualquer outro destaque
    if (newsItem.featured) {
      setNewsList(prevList => 
        prevList.map(item => ({ ...item, featured: false }))
      );
    }
    
    setNewsList(prev => [newsItem, ...prev]);
    setNewNewsItem({
      title: '',
      date: new Date().toISOString().split('T')[0],
      source: '',
      link: '',
      featured: false
    });
    setIsAddingNews(false);
  };
  
  const handleDeleteNews = (id: string) => {
    setNewsList(prev => prev.filter(item => item.id !== id));
  };
  
  const handleSetFeatured = (id: string) => {
    setNewsList(prev => 
      prev.map(item => ({
        ...item,
        featured: item.id === id
      }))
    );
  };
  
  // Em um cenário real, esta função enviaria os dados para um servidor via API
  const handlePublishChanges = () => {
    console.log('Publicando alterações:', newsList);
    alert('Alterações publicadas com sucesso!');
    // Aqui faria uma chamada API para salvar as alterações no backend
    // fetch('/api/news', { method: 'POST', body: JSON.stringify(newsList) });
  };
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerenciador de Notícias</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsAddingNews(true)}
            className="px-4 py-2 bg-health-600 text-white rounded-lg flex items-center hover:bg-health-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Notícia
          </button>
          <button 
            onClick={handlePublishChanges}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Upload className="h-4 w-4 mr-2" />
            Publicar Alterações
          </button>
        </div>
      </div>
      
      {isAddingNews && (
        <div className="mb-8 bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Adicionar Nova Notícia</h3>
            <button onClick={() => setIsAddingNews(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título*</label>
              <input 
                type="text" 
                name="title"
                value={newNewsItem.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
              <input 
                type="date" 
                name="date"
                value={newNewsItem.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fonte*</label>
              <input 
                type="text" 
                name="source"
                value={newNewsItem.source}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Link*</label>
              <input 
                type="url" 
                name="link"
                value={newNewsItem.link}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-health-500"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="featured"
                checked={newNewsItem.featured}
                onChange={handleInputChange}
                className="h-4 w-4 text-health-600 focus:ring-health-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Destaque</span>
            </label>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleSaveNews}
              className="px-4 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors"
            >
              Salvar Notícia
            </button>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notícia
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fonte
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Destaque
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {newsList.map((news) => (
              <tr key={news.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{news.title}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {news.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    <a href={news.link} target="_blank" rel="noopener noreferrer" className="hover:text-health-600">
                      {news.source}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => handleSetFeatured(news.id)}
                    className={`px-2.5 py-1 text-xs rounded-full ${
                      news.featured 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-health-100 hover:text-health-800'
                    }`}
                  >
                    {news.featured ? 'Destaque' : 'Destacar'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => handleDeleteNews(news.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>* Campos obrigatórios</p>
        <p>As alterações só serão publicadas no site após clicar em "Publicar Alterações".</p>
      </div>
    </div>
  );
};

export default NewsAdmin;
