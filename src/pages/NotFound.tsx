
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se a rota solicitada parece ser uma âncora interna
    const path = location.pathname;
    const possibleSectionId = path.substring(1); // Remove a barra inicial
    
    // Se parecer uma seção interna, tenta redirecionar para a home com a âncora
    if (possibleSectionId && !path.includes('/')) {
      // Verifica se o elemento existe na página principal
      const checkAndRedirect = () => {
        // Cria um iframe oculto para verificar se o elemento existe na página inicial
        // sem realmente navegar para lá
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = '/#' + possibleSectionId;
        
        // Se o elemento existir na página inicial, faz o redirecionamento
        setTimeout(() => {
          window.location.href = '/#' + possibleSectionId;
          document.body.removeChild(iframe);
        }, 100);
        
        document.body.appendChild(iframe);
      };
      
      checkAndRedirect();
    }
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-700 bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 inline-block hover:bg-blue-50 transition-colors"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
