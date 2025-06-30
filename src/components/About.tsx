
import { Users, MapPin, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Clientes Satisfeitos" },
    { icon: MapPin, number: "5", label: "Anos em Paulínia" },
    { icon: Award, number: "100%", label: "Projetos Entregues" },
    { icon: Clock, number: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a WebPaulínia
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa especializada em desenvolvimento de websites localizada em Paulínia, 
              atendendo toda a região metropolitana de Campinas. Nossa missão é ajudar empresas locais 
              a crescerem no mundo digital.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Com mais de 5 anos de experiência no mercado, desenvolvemos soluções personalizadas 
              para escritórios, comércios e consultórios, sempre focando na experiência do usuário 
              e nos resultados do seu negócio.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Equipe trabalhando" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Paulínia</div>
              <div className="text-sm">& Região</div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Por que escolher a WebPaulínia?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Empresa Local</h4>
              <p className="text-gray-600">Conhecemos o mercado e as necessidades dos negócios da região</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Personalizado</h4>
              <p className="text-gray-600">Cada projeto é único e recebe atenção especial da nossa equipe</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Garantida</h4>
              <p className="text-gray-600">Sites modernos, responsivos e otimizados para resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
