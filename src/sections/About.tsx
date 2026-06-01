import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const highlights = [
    {
      icon: Code,
      title: 'Código Limpio',
      description: 'Enfocado en escribir código mantenible, escalable y bien documentado'
    },
    {
      icon: Lightbulb,
      title: 'Soluciones Innovadoras',
      description: 'Pensamiento creativo para resolver problemas complejos de manera eficiente'
    },
    {
      icon: Target,
      title: 'Orientado a Resultados',
      description: 'Compromiso con la entrega de productos que superen las expectativas'
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-cyan-400 font-semibold text-sm uppercase tracking-wider"
          >
            Conoce más
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
          >
            Sobre Mí
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <img
                src={aboutMe.image}
                alt="Profile"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {aboutMe.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
