
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você integraria com um serviço de email
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pronto para levar seu negócio para o próximo nível? Solicite um orçamento gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar!</h3>
            <p className="text-blue-100 mb-8">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a ter uma presença 
              digital forte e profissional em Paulínia e região.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Telefone / WhatsApp</div>
                  <div className="text-blue-100">(19) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-blue-100">contato@webpaulinia.com.br</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Localização</div>
                  <div className="text-blue-100">Paulínia - SP e Região</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-500 rounded-lg">
              <h4 className="font-semibold mb-2">Orçamento Gratuito!</h4>
              <p className="text-blue-100 text-sm">
                Solicite um orçamento sem compromisso e descubra como podemos ajudar seu negócio.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(19) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Negócio *
                </label>
                <select
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="escritorio">Escritório</option>
                  <option value="comercio">Comércio</option>
                  <option value="consultorio">Consultório</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
