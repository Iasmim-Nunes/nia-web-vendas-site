
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sites Profissionais para seu Negócio em 
              <span className="text-yellow-300"> Paulínia</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Criamos sites modernos e responsivos para escritórios, comércios e consultórios. 
              Aumente sua presença digital e conquiste mais clientes na região!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                Ver Portfólio
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">Sites Responsivos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">SEO Otimizado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-sm">Suporte Técnico</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Desenvolvimento de websites" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-800 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Sites Criados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
