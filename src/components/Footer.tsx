
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">WebPaulínia</span>
            </div>
            <p className="text-gray-400 mb-4">
              Criamos sites profissionais para escritórios, comércios e consultórios em Paulínia e região.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sites para Escritórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sites para Comércios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sites para Consultórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(19) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@webpaulinia.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Paulínia - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebPaulínia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
