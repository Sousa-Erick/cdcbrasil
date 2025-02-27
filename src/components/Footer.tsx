
import React from 'react';
import { Instagram, X, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-gray-700">
      {/* Faixa cinza superior com ícones de redes sociais */}
      <div className="w-full bg-[#8a8a8a] py-4">
        <div className="container mx-auto px-4 flex justify-end space-x-4">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <X className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Conteúdo principal do rodapé */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          {/* Logo e nome */}
          <div className="flex flex-col items-start mb-8 lg:mb-0 lg:w-1/5">
            <div className="flex items-start">
              <img 
                src="/lovable-uploads/4cd0378c-8df3-49cd-b431-3f45ee8257cd.png"
                alt="Logo"
                className="h-20 mr-3"
              />
              <div className="text-blue-500 font-medium mt-2">
                <div className="text-xl">Instituto</div>
                <div className="text-xl">Todos</div>
                <div className="text-xl">pela</div>
                <div className="text-xl">Saúde</div>
              </div>
            </div>
          </div>
          
          {/* Colunas de links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 flex-grow">
            {/* Primeira coluna - O ITpS */}
            <div className="border-l border-gray-300 pl-4">
              <h3 className="text-blue-500 font-bold text-lg mb-4">o ITpS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">quem somos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">missão, visão e pilares</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">membros</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">associados</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">nossa trajetória</a></li>
              </ul>
            </div>
            
            {/* Segunda coluna - Atuação */}
            <div className="border-l border-gray-300 pl-4">
              <h3 className="text-blue-500 font-bold text-lg mb-4">atuação</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">manuais e regulamentos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">cartas-convite</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">parceiros</a></li>
              </ul>
            </div>
            
            {/* Terceira coluna - Pesquisas */}
            <div className="border-l border-gray-300 pl-4">
              <h3 className="text-blue-500 font-bold text-lg mb-4">pesquisas</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">ações em contexto de uma só saúde</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">monitoramento da variante ômicron</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">monitoramento das variantes do sars-cov-2</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">monitoramento de arboviroses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">monitoramento de patógenos respiratórios</a></li>
              </ul>
            </div>
            
            {/* Quarta coluna - Comunicação e Contato */}
            <div className="border-l border-gray-300 pl-4">
              <h3 className="text-blue-500 font-bold text-lg mb-4">comunicação</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">notícias do itps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">perguntas e respostas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">na mídia</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">artigos na mídia</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">artigos em revista científica</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">eventos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">agência lupa</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">materiais institucionais</a></li>
              </ul>
            </div>
            
            {/* Quinta coluna - Contato */}
            <div className="border-l border-gray-300 pl-4 lg:col-start-4">
              <h3 className="text-blue-500 font-bold text-lg mb-4">contato</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">fale conosco</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">trabalhe conosco</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rodapé com endereço e termos */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-right">
          <p className="text-gray-600 text-sm mb-2">
            Instituto Todos pela Saúde (ITpS) Av. Paulista, 1.938 – 16º andar <br />
            São Paulo - SP – 01310-942
          </p>
          <a href="#" className="text-blue-500 text-sm hover:underline">Termo de Uso e Aviso de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
