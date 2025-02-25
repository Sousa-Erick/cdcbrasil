
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-health-400 font-bold text-xl mb-4">
              <span className="text-white">CDC</span>Brasil
            </div>
            <p className="text-gray-400 mb-6">
              Centro Brasileiro de Prevenção e Controle de Doenças - Uma iniciativa para proteger a saúde da população brasileira.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-health-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Sobre
                </a>
              </li>
              <li>
                <a href="#principles" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Princípios
                </a>
              </li>
              <li>
                <a href="#definition" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Definição
                </a>
              </li>
              <li>
                <a href="#supporters" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Apoiadores
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Recursos
                </a>
              </li>
              <li>
                <a href="#map" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Mapa
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-4">Documentos</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Proposta de Criação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Artigos Científicos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Relação com SUS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-health-400 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg mb-4">Contato</h2>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-health-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">São Paulo - SP - Brasil</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-health-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contato@cdcbrasil.org</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-health-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(11) 9XXXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CDC Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">Este é um site de proposta conceitual. A instituição ainda não existe oficialmente.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
