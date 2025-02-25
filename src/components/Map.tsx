
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
          <div className="aspect-w-16 aspect-h-9 mb-8 bg-white rounded-lg flex items-center justify-center relative">
            <div className="w-full h-full relative">
              <svg 
                viewBox="0 0 800 800" 
                className="w-full h-full p-4"
              >
                {/* Mapa do Brasil simplificado */}
                <path 
                  d="M280,160 Q380,120 400,200 Q450,180 500,220 Q530,210 550,230 Q600,200 650,270 Q630,350 650,400 Q600,450 620,500 Q580,550 600,600 Q550,630 500,600 Q450,650 400,600 Q350,620 300,600 Q250,630 200,600 Q180,550 200,500 Q150,450 170,400 Q150,350 170,300 Q220,280 240,240 Q260,220 280,160 Z" 
                  fill="#E6EEF8" 
                  stroke="#0047AB" 
                  strokeWidth="4"
                />
                
                {/* Pontos em cada estado */}
                {/* Norte */}
                <circle cx="300" cy="200" r="10" fill="#FF7A66" /> {/* Amazonas */}
                <circle cx="380" cy="180" r="10" fill="#FF7A66" /> {/* Roraima */}
                <circle cx="250" cy="250" r="10" fill="#FF7A66" /> {/* Acre */}
                <circle cx="330" cy="250" r="10" fill="#FF7A66" /> {/* Rondônia */}
                <circle cx="420" cy="250" r="10" fill="#FF7A66" /> {/* Pará */}
                <circle cx="470" cy="200" r="10" fill="#FF7A66" /> {/* Amapá */}
                <circle cx="440" cy="290" r="10" fill="#FF7A66" /> {/* Tocantins */}
                
                {/* Nordeste */}
                <circle cx="500" cy="300" r="10" fill="#2970F8" /> {/* Maranhão */}
                <circle cx="540" cy="320" r="10" fill="#2970F8" /> {/* Piauí */}
                <circle cx="570" cy="350" r="10" fill="#2970F8" /> {/* Ceará */}
                <circle cx="580" cy="380" r="10" fill="#2970F8" /> {/* Rio Grande do Norte */}
                <circle cx="590" cy="400" r="10" fill="#2970F8" /> {/* Paraíba */}
                <circle cx="580" cy="420" r="10" fill="#2970F8" /> {/* Pernambuco */}
                <circle cx="560" cy="440" r="10" fill="#2970F8" /> {/* Alagoas */}
                <circle cx="550" cy="460" r="10" fill="#2970F8" /> {/* Sergipe */}
                <circle cx="520" cy="470" r="10" fill="#2970F8" /> {/* Bahia */}
                
                {/* Centro-Oeste */}
                <circle cx="380" cy="350" r="10" fill="#50C878" /> {/* Mato Grosso */}
                <circle cx="400" cy="450" r="10" fill="#50C878" /> {/* Mato Grosso do Sul */}
                <circle cx="450" cy="370" r="10" fill="#50C878" /> {/* Goiás */}
                <circle cx="470" cy="330" r="10" fill="#50C878" /> {/* Distrito Federal */}
                
                {/* Sudeste */}
                <circle cx="480" cy="480" r="10" fill="#FFD700" /> {/* Minas Gerais */}
                <circle cx="450" cy="520" r="10" fill="#FFD700" /> {/* São Paulo */}
                <circle cx="520" cy="530" r="10" fill="#FFD700" /> {/* Espírito Santo */}
                <circle cx="500" cy="550" r="10" fill="#FFD700" /> {/* Rio de Janeiro */}
                
                {/* Sul */}
                <circle cx="400" cy="550" r="10" fill="#9370DB" /> {/* Paraná */}
                <circle cx="380" cy="590" r="10" fill="#9370DB" /> {/* Santa Catarina */}
                <circle cx="350" cy="620" r="10" fill="#9370DB" /> {/* Rio Grande do Sul */}
                
                {/* Legenda */}
                <text x="650" y="200" fill="#FF7A66" fontWeight="bold" fontSize="16">Norte</text>
                <text x="650" y="240" fill="#2970F8" fontWeight="bold" fontSize="16">Nordeste</text>
                <text x="650" y="280" fill="#50C878" fontWeight="bold" fontSize="16">Centro-Oeste</text>
                <text x="650" y="320" fill="#FFD700" fontWeight="bold" fontSize="16">Sudeste</text>
                <text x="650" y="360" fill="#9370DB" fontWeight="bold" fontSize="16">Sul</text>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                <p className="mb-2">Mapa do Brasil com pontos de atuação</p>
                <p className="text-sm">(Visualização em desenvolvimento)</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6 text-center">Rede de Colaboração</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-semibold mb-2 text-health-700">Região {item.region}</h4>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
