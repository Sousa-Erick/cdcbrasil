
import React from 'react';
import { FileText, Link, ExternalLink, Clock } from 'lucide-react';

const Resources: React.FC = () => {
  const documents = [
    {
      title: "Proposta de Criação do CDC Brasil",
      description: "Documento oficial com a proposta de criação da instituição, incluindo estrutura e objetivos.",
      icon: <FileText className="h-8 w-8 text-health-600" />,
      link: "#"
    },
    {
      title: "Artigo Científico: Necessidade de um CDC Brasileiro",
      description: "Artigo publicado na Revista Brasileira de Saúde Pública sobre a importância de um CDC no Brasil.",
      icon: <Link className="h-8 w-8 text-health-600" />,
      link: "#"
    },
    {
      title: "Comparação Internacional: CDCs pelo mundo",
      description: "Estudo comparativo sobre centros de controle de doenças em diferentes países e suas contribuições.",
      icon: <FileText className="h-8 w-8 text-health-600" />,
      link: "#"
    }
  ];

  const news = [
    {
      title: "Senado debate criação do Centro de Controle de Doenças",
      date: "15/05/2023",
      source: "Agência Senado",
      link: "#"
    },
    {
      title: "Cientistas defendem instituição especializada em prevenção de epidemias",
      date: "22/04/2023",
      source: "Jornal da Ciência",
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
    <section id="resources" className="section">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full">
            Materiais e Notícias
          </div>
          <h2 className="section-title">Recursos e Informações</h2>
          <p className="text-lg text-gray-600">
            Acesse documentos, artigos e notícias relacionados à proposta de criação do CDC Brasil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Documentos</h3>
            <div className="space-y-6">
              {documents.map((doc, index) => (
                <a key={index} href={doc.link} className="block p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {doc.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-900">{doc.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                      <div className="flex items-center text-health-600 text-sm font-medium">
                        <span>Acessar documento</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Notícias Recentes</h3>
            <div className="space-y-4">
              {news.map((item, index) => (
                <a key={index} href={item.link} className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <h4 className="text-lg font-medium mb-2 text-gray-900">{item.title}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.source}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="inline-flex items-center text-health-600 hover:text-health-700 font-medium">
                Ver todas as notícias <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
