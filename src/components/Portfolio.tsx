
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Escritório de Advocacia Silva & Associados",
      category: "Escritório",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site institucional com área do cliente e blog jurídico"
    },
    {
      title: "Clínica Odontológica Sorriso",
      category: "Consultório",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plataforma com agendamento online e área do paciente"
    },
    {
      title: "Loja de Roupas Fashion Store",
      category: "Comércio",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "E-commerce completo com sistema de pagamento integrado"
    },
    {
      title: "Consultoria Empresarial Pro",
      category: "Escritório",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site corporativo com portfólio de serviços"
    },
    {
      title: "Restaurante Sabor Paulínia",
      category: "Comércio",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site com cardápio online e sistema de delivery"
    },
    {
      title: "Psicóloga Dra. Maria Santos",
      category: "Consultório",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Website profissional com agendamento de consultas"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos projetos que desenvolvemos para nossos clientes em Paulínia e região
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-1">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
