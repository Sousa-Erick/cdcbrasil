
import React from 'react';
import { Instagram, X, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-gray-700">
      {/* Faixa cinza superior com ícones de redes sociais */}
      <div className="w-full bg-[#8a8a8a] py-3">
        <div className="container mx-auto px-4 flex justify-end space-x-4">
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-200 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-200 transition-colors">
            <X className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-200 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Conteúdo principal do rodapé */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo sem texto */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-[200px] pr-8">
            <div className="py-2">
              <img 
                src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                alt="Logo"
                className="h-16 md:h-20"
              />
            </div>
          </div>
          
          {/* Links de navegação - alinhados com o cabeçalho */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-10">
            {/* Primeira coluna */}
            <div className="border-l border-gray-200 pl-4">
              <h3 className="text-blue-500 font-bold text-base mb-3">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Início</a></li>
                <li><a href="#context" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Por que Precisamos?</a></li>
                <li><a href="#characteristics" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Características</a></li>
                <li><a href="#supporters" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Apoio</a></li>
                <li><a href="#materials" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Materiais</a></li>
                <li><a href="#news" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Notícias</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Contato</a></li>
              </ul>
            </div>
            
            {/* Segunda coluna */}
            <div className="border-l border-gray-200 pl-4">
              <h3 className="text-blue-500 font-bold text-base mb-3">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#materials" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Documentos</a></li>
                <li><a href="#approach" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Abordagem</a></li>
                <li><a href="#principles" className="text-gray-600 hover:text-blue-500 transition-colors text-sm">Princípios</a></li>
              </ul>
            </div>
            
            {/* Terceira coluna - visível apenas em telas maiores */}
            <div className="border-l border-gray-200 pl-4 col-span-2 sm:col-span-1">
              <h3 className="text-blue-500 font-bold text-base mb-3">Contato</h3>
              <address className="not-italic text-sm">
                <p className="text-gray-600 mb-2">
                  Instituto Todos pela Saúde (ITpS)<br />
                  Av. Paulista, 1.938 – 16º andar<br />
                  São Paulo - SP – 01310-942
                </p>
                <a href="mailto:contato@itps.org.br" className="text-blue-500 hover:underline">contato@itps.org.br</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rodapé com direitos e termos */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
          <p className="text-gray-600 text-xs mb-2 md:mb-0">
            © {new Date().getFullYear()} Instituto Todos pela Saúde. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="text-blue-500 text-xs hover:underline">Termos de Uso</a>
            <a href="#" className="text-blue-500 text-xs hover:underline">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
