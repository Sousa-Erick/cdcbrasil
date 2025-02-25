
import React from 'react';
import { Building, GraduationCap, Users, Microscope, BookOpen } from 'lucide-react';

const Supporters: React.FC = () => {
  const getIconByType = (type: string) => {
    switch (type) {
      case "Universidade":
        return <GraduationCap className="h-10 w-10 mb-3 text-blue-600" />;
      case "Instituto de Pesquisa":
        return <Microscope className="h-10 w-10 mb-3 text-blue-600" />;
      case "Sociedade Científica":
        return <Users className="h-10 w-10 mb-3 text-blue-600" />;
      case "Associação Científica":
        return <BookOpen className="h-10 w-10 mb-3 text-blue-600" />;
      default:
        return <Building className="h-10 w-10 mb-3 text-blue-600" />;
    }
  };

  const supporters = [
    { 
      name: "Universidade de São Paulo", 
      type: "Universidade"
    },
    { 
      name: "FIOCRUZ", 
      type: "Instituto de Pesquisa"
    },
    { 
      name: "Sociedade Brasileira de Infectologia", 
      type: "Sociedade Científica"
    },
    { 
      name: "Instituto Butantan", 
      type: "Instituto de Pesquisa"
    },
    { 
      name: "UNICAMP", 
      type: "Universidade"
    },
    { 
      name: "Academia Brasileira de Ciências", 
      type: "Associação Científica"
    },
    { 
      name: "Sociedade Brasileira de Imunologia", 
      type: "Sociedade Científica"
    },
    { 
      name: "UFRJ", 
      type: "Universidade"
    }
  ];

  return (
    <section id="supporters" className="section bg-blue-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full">
            Apoio Institucional
          </div>
          <h2 className="section-title">Quem Apoia essa Iniciativa</h2>
          <p className="text-lg text-gray-600">
            O CDC Brasil conta com o apoio de importantes instituições científicas e acadêmicas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {supporters.map((supporter, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {getIconByType(supporter.type)}
              <h3 className="text-sm font-semibold text-gray-900">{supporter.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{supporter.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
