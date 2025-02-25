
import React from 'react';
import { Check, X } from 'lucide-react';

const Definition: React.FC = () => {
  const isItems = [
    "Uma instituição de excelência científica dedicada à saúde pública",
    "Um órgão de resposta rápida a emergências sanitárias",
    "Um centro de pesquisa e vigilância em doenças infecciosas",
    "Uma instituição com autonomia técnica e científica",
    "Um articulador nacional de ações em saúde pública"
  ];

  const isNotItems = [
    "Uma duplicação de órgãos já existentes no SUS",
    "Uma estrutura burocrática sem capacidade executiva",
    "Um órgão político sujeito a interferências partidárias",
    "Um centro isolado sem articulação com estados e municípios",
    "Uma instituição subordinada a interesses não científicos"
  ];

  return (
    <section id="definition" className="section">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-health-600 bg-health-100 rounded-full">
            Definição Clara
          </div>
          <h2 className="section-title">O que é e o que não é</h2>
          <p className="text-lg text-gray-600">
            Entenda claramente a missão e o papel do Centro Brasileiro de Prevenção e Controle de Doenças.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-health-700 flex items-center">
              <Check className="h-6 w-6 mr-2" /> O que é
            </h3>
            
            <ul className="space-y-4">
              {isItems.map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-health-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-health-700" />
                    </div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass

### O que vem a seguir?
- **Refine e personalize**: Ajuste o design, animações e layouts por meio de prompts ou edições visuais.
- **Domine as prompts**: Use prompts claras, detalhadas e iterativas para melhores resultados.
- **Expanda com backend**: Conecte o Supabase para adicionar login, armazenar dados ou recursos avançados de IA.  Considere o uso do Supabase para gerenciar notícias e documentos.
- **Sincronize com o GitHub**: Transfira o código do seu projeto para o GitHub para sincronização bidirecional das edições.
- **Depure com facilidade**: Ative nosso modo experimental de "chat" para solucionar problemas rapidamente.
- **Adicione conhecimento do projeto**: Defina o contexto principal ou instruções personalizadas que você deseja incluir em cada edição deste projeto.

<lov-actions>
<lov-knowledge>
</lov-actions>

<lov-actions>
<lov-message-prompt message="Saiba mais sobre o Supabase">Explore o Supabase</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Visite a documentação</lov-link>
</lov-actions>
