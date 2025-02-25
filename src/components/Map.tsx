
import React, { useEffect, useRef } from 'react';

const Map: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Função para animar as conexões de rede
    const animateConnections = () => {
      const connections = svgRef.current?.querySelectorAll('.connection');
      if (!connections) return;
      
      connections.forEach((connection, index) => {
        const line = connection as SVGLineElement;
        
        // Define a duração da animação baseada no índice
        const duration = 2000 + (index * 300);
        
        // Anima o traço do linha
        line.style.strokeDasharray = String(line.getTotalLength());
        line.style.strokeDashoffset = String(line.getTotalLength());
        
        // Cria a animação
        line.animate(
          [
            { strokeDashoffset: String(line.getTotalLength()) },
            { strokeDashoffset: '0' }
          ],
          {
            duration: duration,
            fill: 'forwards',
            easing: 'ease-out'
          }
        );
      });
      
      // Anima os nós depois das conexões
      const nodes = svgRef.current?.querySelectorAll('.node');
      if (!nodes) return;
      
      nodes.forEach((node, index) => {
        const circle = node as SVGCircleElement;
        const delay = 500 + (index * 200);
        
        // Anima o aparecimento dos círculos
        circle.animate(
          [
            { opacity: 0, r: 0 },
            { opacity: 1, r: 12 }
          ],
          {
            duration: 800,
            delay: delay,
            fill: 'forwards',
            easing: 'ease-out'
          }
        );
      });
    };
    
    // Inicia a animação após um breve atraso
    const timer = setTimeout(() => {
      animateConnections();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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

  // Coordenadas dos nós para a animação de rede
  const nodes = [
    { x: 400, y: 300, label: "CDC Brasil", color: "#0047AB", main: true },
    { x: 250, y: 200, label: "Norte", color: "#FF7A66" },
    { x: 550, y: 200, label: "Nordeste", color: "#2970F8" },
    { x: 300, y: 400, label: "Centro-Oeste", color: "#50C878" },
    { x: 500, y: 400, label: "Sudeste", color: "#FFD700" },
    { x: 400, y: 500, label: "Sul", color: "#9370DB" },
    { x: 200, y: 300, label: "Institutos de Pesquisa", color: "#FF7A66" },
    { x: 600, y: 300, label: "Universidades", color: "#2970F8" },
    { x: 350, y: 150, label: "Hospitais", color: "#50C878" },
    { x: 450, y: 150, label: "Laboratórios", color: "#FFD700" },
    { x: 300, y: 550, label: "Sociedades Científicas", color: "#9370DB" },
    { x: 500, y: 550, label: "Organizações Internacionais", color: "#0047AB" },
  ];

  // Conexões entre os nós
  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },
    { from: 0, to: 6 },
    { from: 0, to: 7 },
    { from: 0, to: 8 },
    { from: 0, to: 9 },
    { from: 0, to: 10 },
    { from: 0, to: 11 },
    { from: 1, to: 6 },
    { from: 2, to: 7 },
    { from: 3, to: 8 },
    { from: 4, to: 9 },
    { from: 5, to: 10 },
    { from: 6, to: 11 },
    { from: 7, to: 10 },
    { from: 8, to: 9 },
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
          <div className="aspect-w-16 aspect-h-9 mb-8 bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full relative">
              <svg 
                ref={svgRef}
                viewBox="0 0 800 600" 
                className="w-full h-full p-4"
              >
                {/* Conexões da rede */}
                {connections.map((connection, index) => (
                  <line 
                    key={`connection-${index}`}
                    className="connection"
                    x1={nodes[connection.from].x} 
                    y1={nodes[connection.from].y} 
                    x2={nodes[connection.to].x} 
                    y2={nodes[connection.to].y} 
                    stroke={nodes[connection.to].color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="5,5"
                    opacity="0.6"
                  />
                ))}
                
                {/* Nós da rede */}
                {nodes.map((node, index) => (
                  <g key={`node-${index}`}>
                    <circle 
                      className="node"
                      cx={node.x} 
                      cy={node.y} 
                      r="0"
                      fill={node.color}
                      opacity="0"
                      strokeWidth={node.main ? 3 : 1}
                      stroke={node.main ? "#0047AB" : "white"}
                    />
                    <text 
                      x={node.x} 
                      y={node.y + 25} 
                      textAnchor="middle" 
                      fill="#333"
                      fontSize="12"
                      fontWeight={node.main ? "bold" : "normal"}
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
                
                {/* Título da animação */}
                <text 
                  x="400" 
                  y="30" 
                  textAnchor="middle" 
                  fill="#0047AB"
                  fontSize="18"
                  fontWeight="bold"
                >
                  Rede de Colaboração Nacional
                </text>
              </svg>
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
