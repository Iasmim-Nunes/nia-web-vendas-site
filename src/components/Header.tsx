
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">WebPaulínia</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfólio</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>(19) 9999-9999</span>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfólio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
