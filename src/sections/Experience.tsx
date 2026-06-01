import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { experience } from '../data/portfolioData';

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
  project: Code,
  certification: Award
};

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Mi Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Experiencia & Educación
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experience.map((item, index) => {
              const IconComponent = iconMap[item.type as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <span className="text-cyan-400 font-semibold text-sm">
                          {item.period}
                        </span>
                      </div>

                      <div className="hidden md:block mb-2">
                        <span className="text-cyan-400 font-semibold text-sm">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-blue-400 font-medium mb-3">
                        {item.organization}
                      </p>

                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full items-center justify-center shadow-lg shadow-cyan-500/50 relative z-10">
                    <IconComponent size={28} className="text-white" />
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
