
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Meu Site</h1>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h2 className="text-xl mb-4">Bem-vindo ao meu site</h2>
          <p>Este é um novo começo. O conteúdo será adicionado em breve.</p>
        </div>
      </main>
      
      <footer className="bg-gray-100 p-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
