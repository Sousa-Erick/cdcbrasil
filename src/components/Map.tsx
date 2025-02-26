
import React from 'react';
import { Globe } from 'lucide-react';

const Map: React.FC = () => {
  const worldCdcs = [
    {
      name: "CDC - Estados Unidos",
      location: "Atlanta, EUA",
      founded: "1946",
      focus: "Controle e prevenção de doenças em nível nacional e internacional"
    },
    {
      name: "ECDC - União Europeia",
      location: "Estocolmo, Suécia",
      founded: "2005",
      focus: "Fortalecer as defesas da Europa contra doenças infecciosas"
    },
    {
      name: "China CDC",
      location: "Pequim, China",
      founded: "2002",
      focus: "Prevenção, controle e pesquisa de doenças na China"
    },
    {
      name: "Africa CDC",
      location: "Adis Abeba, Etiópia",
      founded: "2017",
      focus: "Apoiar iniciativas de saúde pública dos Estados-Membros da União Africana"
    }
  ];

  return (
    <section id="world-cdcs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Outros CDC's pelo mundo</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {worldCdcs.map((cdc, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-semibold text-gray-900">{cdc.name}</h4>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Localização:</span> {cdc.location}</p>
                <p><span className="font-medium">Fundação:</span> {cdc.founded}</p>
                <p><span className="font-medium">Foco:</span> {cdc.focus}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto border border-blue-200 animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              É hora do Brasil ter o seu próprio CDC
            </h3>
            <p className="text-blue-700 mb-6">
              Assim como outros países, o Brasil precisa de uma instituição dedicada à prevenção e controle de doenças,
              baseada em evidências científicas e com autonomia para proteger a saúde pública.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
