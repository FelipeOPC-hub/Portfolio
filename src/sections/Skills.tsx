import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Workflow, Database } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code2,
  Server,
  Workflow,
  Database
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Habilidades & Tecnologías
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code2;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-gray-300 font-medium px-3 py-1 bg-gray-700/30 rounded-lg border border-gray-700 group-hover:border-cyan-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades para ofrecer las mejores soluciones técnicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;