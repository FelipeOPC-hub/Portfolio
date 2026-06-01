import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Sobre Mí', id: 'about' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Experiencia', id: 'experience' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          
          {/* 1. LADO IZQUIERDO: Espaciador para equilibrio (Mismo ancho que el botón derecho) */}
          <div className="hidden md:block w-[200px]"></div>

          {/* 2. CENTRO: Menú de Navegación */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-[11px] font-bold text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group uppercase tracking-[0.25em]"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-cyan-400 group-hover:w-1/3 transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* 3. LADO DERECHO: Botón CV */}
          <div className="hidden md:flex justify-end items-center w-[200px]">
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              href={personalInfo.cvUrl}
              download
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest active:scale-95"
            >
              <Download size={14} />
              Descargar CV
            </motion.a>
          </div>

          {/* MENÚ MOBILE: Solo visible en pantallas pequeñas */}
          <div className="md:hidden flex-1 flex justify-end">
             <button
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* DROP DOWN MOBILE */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-900 border-t border-gray-800 shadow-2xl"
        >
          <div className="px-6 py-10 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-center text-xs font-bold text-gray-400 hover:text-cyan-400 uppercase tracking-[0.3em] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href={personalInfo.cvUrl}
              download
              className="block w-full px-4 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-center text-[10px] font-black uppercase tracking-widest"
            >
              <Download size={16} className="inline mr-2" />
              Descargar CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;