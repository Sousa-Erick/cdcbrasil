
import React, { useRef, useEffect } from 'react';

const Supporters: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const supporters = [{
    name: "Amilcar Tanuri",
    role: "Chefe do Laboratório de Virologia Molecular do Instituto de Biologia da UFRJ"
  }, {
    name: "Antonio S. Lima Neto",
    role: "Secretário de Vigilância da Secretaria da Saúde do Ceará e professor do curso de Medicina da Universidade de Fortaleza"
  }, {
    name: "Arthur Aguillar",
    role: "Diretor de Políticas Públicas do Instituto de Estudos para as Políticas de Saúde"
  }, {
    name: "Beatriz Nadas",
    role: "Presidente do Instituto Municipal de Administração Pública e ex-secretária de Saúde de Curitiba"
  }, {
    name: "Carlos Medicis Morel",
    role: "Ex-presidente da Fiocruz e atual diretor do Centro de Desenvolvimento Tecnológico em Saúde da Fiocruz"
  }, {
    name: "Claudio Maierovitch Pessanha Henriques",
    role: "Sanitarista da Fiocruz, ex-presidente da Anvisa e ex-diretor de Vigilância de Doenças Transmissíveis do Ministério da Saúde"
  }, {
    name: "Cristiana Toscano",
    role: "Professora da UFG e integrante do Grupo Consultivo Estratégico de Especialistas em Imunização da OMS"
  }, {
    name: "Dirceu Greco",
    role: "Professor emérito da Faculdade de Medicina da UFMG, ex-diretor do Departamento de DST, Aids e Hepatites Virais do Ministério da Saúde e ex-presidente da Sociedade Brasileira Bioética"
  }, {
    name: "Eduardo Hage",
    role: "Professor da pós-graduação da Escola Fiocruz de Governo, médico sanitarista da Secretaria de Saúde do Distrito Federal e consultor AdHoc da OMS"
  }, {
    name: "Ester Sabino",
    role: "Professora titular do Departamento de Patologia da Faculdade de Medicina da USP e consultora científica do Instituto Todos pela Saúde (ITpS)"
  }, {
    name: "Gerson Penna",
    role: "Pesquisador da Fiocruz, professor da UnB, ex-secretário de Vigilância em Saúde do Ministério da Saúde e ex-diretor da Fiocruz Brasília; membro do Grupo Consultivo Estratégico e Técnico sobre Riscos Infecciosos com Potencial de Pandemia e Epidemia do Comitê Geral de Preparação e Prevenção para Epidemias e Pandemias da OMS"
  }, {
    name: "Gonzalo Vecina",
    role: "Professor da Faculdade de Saúde Pública da USP e da FGV, ex-presidente da Anvisa, ex-secretário nacional de Vigilância Sanitária do Ministério da Saúde e ex-secretário municipal da Saúde de São Paulo"
  }, {
    name: "José Agenor Álvares da Silva",
    role: "Pesquisador da Fiocruz, ex-ministro da Saúde e ex-diretor da Anvisa"
  }, {
    name: "José Gomes Temporão",
    role: "Pesquisador da Fiocruz e ex-ministro da Saúde"
  }, {
    name: "Margareth Dalcolmo",
    role: "Pesquisadora da Fiocruz e ex-presidente da Sociedade Brasileira de Pneumologia e Tisiologia"
  }, {
    name: "Maria Glória Teixeira",
    role: "Professora aposentada da UFBA e ex-coordenadora nacional da Vigilância Epidemiológica do Ministério da Saúde"
  }, {
    name: "Mariângela Simão",
    role: "Diretora-presidente do Instituto Todos pela Saúde (ITpS) e ex-diretora-geral adjunta da OMS"
  }, {
    name: "Moisés Goldbaum",
    role: "Professor sênior do Departamento de Medicina Preventiva da Faculdade de Medicina da USP, ex-secretário de Ciência, Tecnologia e Insumos Estratégicos do Ministério da Saúde e ex-superintendente da Superintendência de Controle de Endemias do estado de São Paulo"
  }, {
    name: "Rita Barradas Barata",
    role: "Professora da Faculdade de Ciências Médicas da Santa Casa de São Paulo e ex-presidente da Associação Brasileira de Saúde Coletiva"
  }, {
    name: "Pedro Ribeiro Barbosa",
    role: "Diretor-presidente do Instituto de Biologia Molecular do Paraná, ex-vice-presidente de Gestão e Desenvolvimento Institucional da Fiocruz e ex-vice-diretor de Desenvolvimento Institucional e Gestão da Escola Nacional de Saúde Pública Sergio Arouca"
  }, {
    name: "Vanderson Sampaio",
    role: "Diretor de Operações do Instituto Todos pela Saúde (ITpS) e professor de Programas de pós-graduação da Fiocruz Amazônia e da Universidade do Estado do Amazonas"
  }, {
    name: "Wanderson Oliveira",
    role: "Epidemiologista na direção técnica de Ensino e Pesquisa do Hospital das Forças Armadas, professor de Medicina na Uniceplac, ex-secretário de Vigilância em Saúde no Ministério da Saúde e ex-secretário de Saúde do STF"
  }];
  
  return (
    <section id="supporters" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-5xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Apoiadores da proposta</h2>
          
          <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            A criação do Centro Brasileiro de Prevenção e Controle de Doenças conta com o apoio de diversos especialistas e instituições
          </p>
          
          <div className="overflow-hidden rounded-xl shadow-lg">
            <table className="w-full border-collapse bg-white">
              <tbody>
                {supporters.map((supporter, index) => (
                  <tr 
                    key={index} 
                    className={`
                      transition-colors duration-300 
                      ${index % 2 === 0 ? 'bg-white' : 'bg-pantone-2935c-20/50'}
                      hover:bg-blue-100/60
                    `}
                  >
                    <td className="py-5 px-6 border-b border-gray-100/30 font-medium text-gray-800">
                      {supporter.name}
                    </td>
                    <td className="py-5 px-6 border-b border-gray-100/30 text-gray-600 leading-relaxed text-sm">
                      {supporter.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
