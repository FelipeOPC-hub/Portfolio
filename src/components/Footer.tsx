
const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800/50 pt-12 pb-10">
      {/* Línea de luz sutil superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Copyright Centrado y Profesional */}
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-medium">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </p>
            <p className="text-white text-xs font-black uppercase tracking-widest">
              Felipe Piña
            </p>
          </div>

          {/* Un detalle minimalista final */}
          <div className="mt-8 w-8 h-[1px] bg-gray-800"></div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;