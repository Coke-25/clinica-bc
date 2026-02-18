import Image from 'next/image';

export default function EstudioPisada() {
  return (
    <section id="estudio-pisada" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div style={{ backgroundImage: 'url("images/estudio-pisada-san-jose-rinconada.jpg")' }} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-cover bg-center">
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0066c1] text-white px-8 py-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-extrabold">100%</div>
              <div className="text-base font-semibold opacity-90">Personalizado</div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block bg-[#0066c1]/10 text-[#004d91] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
              Servicio destacado
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Estudio de la
              <span className="text-[#0066c1]"> pisada</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
              Mejore su calidad de vida y rendimiento deportivo con nuestro estudio biomecánico de la pisada. 
              Conocerá si corre o camina de forma correcta y evitará futuras lesiones y problemas de salud.
            </p>
            
            {/* Features List */}
            <div className="space-y-5 mb-12">
              {[
                'Análisis completo de la marcha',
                'Tecnología de última generación',
                'Plantillas personalizadas',
                'Seguimiento continuo'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0066c1] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-[#0066c1] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <span>Más información</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
