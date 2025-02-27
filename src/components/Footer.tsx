
import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, X, ChevronRight, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <h2 className="font-bold text-lg mb-6">Sobre a Proposta</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Centro Brasileiro de Prevenção e Controle de Doenças - Uma iniciativa para proteger a saúde da população brasileira e fortalecer o Sistema Único de Saúde no enfrentamento de emergências sanitárias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6">Links Rápidos</h2>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a href="#context" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Por que Precisamos?</span>
                </a>
              </li>
              <li>
                <a href="#characteristics" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Características</span>
                </a>
              </li>
              <li>
                <a href="#materials" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Materiais</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6">Mais Informações</h2>
            <ul className="space-y-3">
              <li>
                <a href="#news" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Notícias</span>
                </a>
              </li>
              <li>
                <a href="#world-cdcs" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>CDCs pelo Mundo</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Artigos Científicos</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" /> 
                  <span>Perguntas Frequentes</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-6">Contato</h2>
            <ul className="space-y-5">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-salmon mr-3 flex-shrink-0" />
                <span className="text-gray-300">São Paulo - SP - Brasil</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-salmon mr-3 flex-shrink-0" />
                <a href="mailto:contato@cdcbrasil.org" className="text-gray-300 hover:text-white transition-colors">contato@cdcbrasil.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-salmon mr-3 flex-shrink-0" />
                <a href="tel:+551199999999" className="text-gray-300 hover:text-white transition-colors">(11) 9XXXX-XXXX</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Centro Brasileiro de Prevenção e Controle de Doenças. Todos os direitos reservados.</p>
          <p className="mt-3">Este é um site de proposta conceitual.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
