
import React from 'react';

const Map: React.FC = () => {
  const collaborationItems = [
    {
      region: "Norte",
      institutions: ["Centro de Pesquisas Amazônicas", "Universidade Federal do Amazonas"],
      focus: "Doenças tropicais e emergentes na região amazônica"
    },
    {
      region: "Nordeste",
      institutions: ["FIOCRUZ Pernambuco", "Universidade Federal da Bahia"],
      focus: "Arboviroses e doenças negligenciadas"
    },
    {
      region: "Centro-Oeste",
      institutions: ["Universidade de Brasília", "Hospital das Forças Armadas"],
      focus: "Coordenação nacional e resposta a emergências"
    },
    {
      region: "Sudeste",
      institutions: ["FIOCRUZ Rio de Janeiro", "USP", "Instituto Butantan"],
      focus: "Pesquisa, desenvolvimento de vacinas e produtos biológicos"
    },
    {
      region: "Sul",
      institutions: ["Universidade Federal do Rio Grande do Sul", "Hospital de Clínicas de Porto Alegre"],
      focus: "Vigilância epidemiológica e de fronteiras"
    }
  ];

  return (
    <section id="map" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full">
            Abrangência Nacional
          </div>
          <h2 className="section-title">Mapa de Atuação</h2>
          <p className="text-lg text-gray-600">
            O CDC Brasil atuará em todo o território nacional em colaboração com instituições locais.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in">
          <div className="aspect-w-16 aspect-h-9 mb-8 bg-white/50 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-blue-50/40 to-pink-50/40"></div>
            <div className="w-full h-full relative">
              {/* Vídeo de fundo com transparência - usando uma fonte alternativa mais confiável */}
              <div className="absolute inset-0 flex items-center justify-center">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-70"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-network-node-lines-abstract-animation-10858-large.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              
              {/* Sobreposição com gradiente para melhorar a visualização do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
              
              {/* Título e descrição do vídeo */}
              <div className="absolute top-5 left-0 right-0 text-center z-10">
                <h3 className="text-blue-800 font-bold text-2xl drop-shadow-sm">Rede de Colaboração Nacional</h3>
                <p className="text-blue-700 text-sm mt-2 max-w-md mx-auto">
                  Interconectando instituições e profissionais para uma resposta eficiente em saúde pública
                </p>
              </div>
              
              {/* Elementos decorativos - pontos que representam nós da rede */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6 px-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-health-500 mb-2 shadow-md"></div>
                  <span className="text-xs font-medium text-gray-700">Norte</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mb-2 shadow-md"></div>
                  <span className="text-xs font-medium text-gray-700">Nordeste</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mb-2 shadow-md"></div>
                  <span className="text-xs font-medium text-gray-700">Centro-Oeste</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mb-2 shadow-md"></div>
                  <span className="text-xs font-medium text-gray-700">Sudeste</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mb-2 shadow-md"></div>
                  <span className="text-xs font-medium text-gray-700">Sul</span>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6 text-center">Rede de Colaboração</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationItems.map((item, index) => {
              // Definindo cores diferentes para cada região
              let regionColor = "health-700";
              let bgColor = "health-50";
              
              if (item.region === "Norte") {
                regionColor = "health-700";
                bgColor = "health-50";
              } else if (item.region === "Nordeste") {
                regionColor = "blue-700";
                bgColor = "blue-50";
              } else if (item.region === "Centro-Oeste") {
                regionColor = "green-700";
                bgColor = "green-50";
              } else if (item.region === "Sudeste") {
                regionColor = "yellow-700";
                bgColor = "yellow-50";
              } else if (item.region === "Sul") {
                regionColor = "purple-700";
                bgColor = "purple-50";
              }
              
              return (
                <div 
                  key={index} 
                  className={`bg-${bgColor} rounded-lg p-5 border border-gray-200 shadow-sm animate-fade-in`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: item.region === "Norte" ? "#FFF5F5" :
                                item.region === "Nordeste" ? "#EFF6FF" :
                                item.region === "Centro-Oeste" ? "#F0FDF4" :
                                item.region === "Sudeste" ? "#FEFCE8" :
                                "#FAF5FF"
                  }}
                >
                  <h4 className={`text-lg font-semibold mb-2 text-${regionColor}`}>
                    Região {item.region}
                  </h4>
                  <div className="mb-3">
                    <h5 className="text-sm font-medium text-gray-700 mb-1">Instituições parceiras:</h5>
                    <ul className="text-sm text-gray-600 list-disc ml-5">
                      {item.institutions.map((institution, idx) => (
                        <li key={idx}>{institution}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-1">Foco principal:</h5>
                    <p className="text-sm text-gray-600">{item.focus}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
