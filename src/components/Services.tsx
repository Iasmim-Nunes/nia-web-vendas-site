
import { Building2, ShoppingBag, Stethoscope, Globe, Smartphone, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Sites para Escritórios",
      description: "Websites profissionais para escritórios de advocacia, contabilidade, arquitetura e consultoria.",
      features: ["Design corporativo", "Área do cliente", "Formulários de contato", "Certificados SSL"]
    },
    {
      icon: ShoppingBag,
      title: "Sites para Comércios",
      description: "Lojas virtuais e sites institucionais para aumentar suas vendas online.",
      features: ["E-commerce completo", "Catálogo de produtos", "Integração pagamento", "Gestão de estoque"]
    },
    {
      icon: Stethoscope,
      title: "Sites para Consultórios",
      description: "Plataformas digitais para médicos, dentistas, psicólogos e outros profissionais da saúde.",
      features: ["Agendamento online", "Área do paciente", "LGPD compliance", "Design responsivo"]
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites institucionais e portfólio profissional"
    },
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Otimizado para todos os dispositivos"
    },
    {
      icon: Search,
      title: "SEO e Marketing",
      description: "Otimização para motores de busca"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções digitais personalizadas para cada tipo de negócio em Paulínia e região
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
