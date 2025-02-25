
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
          <div className="aspect-w-16 aspect-h-9 mb-8 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="mb-2">Mapa do Brasil com pontos de atuação</p>
              <p className="text-sm">(Visualização em desenvolvimento)</p>
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
                    {