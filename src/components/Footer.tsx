
import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, X, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="mb-6 bg-white inline-block p-2 rounded">
              <a href="https://itps.org.br" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                  alt="Instituto Todos pela Saúde"
                  className="h-10"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Centro Brasileiro de Prevenção e Controle de Doenças - Uma iniciativa para proteger a saúde da população brasileira.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6 relative pl-4 border-l-2 border-health-500">Links Rápidos</h2>
            <ul className="space-y-3">
              <li>
                <a href="#principles" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Princípios</span>
                </a>
              </li>
              <li>
                <a href="#definition" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Definição</span>
                </a>
              </li>
              <li>
                <a href="#supporters" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Apoiadores</span>
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Recursos</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6 relative pl-4 border-l-2 border-health-500">Documentos</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Proposta de Criação</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Artigos Científicos</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Relação com SUS</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-health-500 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Perguntas Frequentes</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6 relative pl-4 border-l-2 border-health-500">Contato</h2>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-health-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">São Paulo - SP - Brasil</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-health-400 mr-3 flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@cdcbrasil.org" className="text-gray-400 hover:text-health-400 transition-colors">contato@cdcbrasil.org</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-health-400 mr-3 flex-shrink-0 mt-0.5" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-health-400 transition-colors">(11) 9XXXX-XXXX</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Instituto Todos pela Saúde. Todos os direitos reservados.</p>
          <p className="mt-3">Este é um site de proposta conceitual.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
