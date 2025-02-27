
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
        <Link to="/" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
