import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Mantenemos el estado para el control de los inputs si lo deseas, 
  // aunque FormSubmit enviará lo que esté en los atributos "name"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 1. CONECTA TU FORMULARIO Y 2. AGREGA ATRIBUTOS DE NOMBRE (Reflejado en el JSX)
  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:felipeomarpinaconesa@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      felipeomarpinaconesa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Teléfono</p>
                    <a href="tel:+5492616274292" className="text-white hover:text-cyan-400 transition-colors">
                      +54 9 2616274292
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Redes Sociales</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/FelipePinaGit" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/felipe-omar-pi%C3%B1a-conesa-508b382b5/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {/* MODIFICACIÓN AQUÍ: Se añade action y method */}
            <form
              action="https://formsubmit.co/felipeomarpinaconesa@gmail.com"
              method="POST"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
            >
              {/* Opcional: Configuración para que no use captcha y redirija al mismo sitio */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name" // Atributo de nombre
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email" // Atributo de nombre
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject" // Atributo de nombre
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message" // Atributo de nombre
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;