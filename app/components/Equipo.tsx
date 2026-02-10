import Image from 'next/image';

export default function Equipo() {
  const equipo = [
    {
      nombre: 'Paula Morón Rodríguez',
      cargo: 'PODÓLOGA',
      imagen: '/images/podologo-paula-moron-rodriguez.jpg',
      especialidad: 'Especialista en biomecánica y podología deportiva',
    },
    {
      nombre: 'Angélica Fernández Cano',
      cargo: 'DIETISTA-NUTRICIONISTA',
      imagen: '/images/podologo-angelica.jpg',
      especialidad: 'Experta en nutrición clínica y deportiva',
    },
    {
      nombre: 'Manuel Clapera Lazo',
      cargo: 'FISIOTERAPEUTA',
      imagen: '/images/podologo-manuel.jpg',
      especialidad: 'Especializado en fisioterapia manual',
    },
  ];

  return (
    <section id="equipo" className="py-28 lg:py-36 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#0066c1]/10 text-[#004d91] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
            Conozca al equipo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
            Un equipo de profesionales
            <span className="block text-[#0066c1]">a su disposición</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            En Clínica B&amp;C apostamos por un equipo humano de alta cualificación y especializado 
            en ofrecer un trato cercano con el paciente.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {equipo.map((miembro, index) => (
            <div
              key={index}
              className="group text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative mb-8">
                <div className="relative w-52 h-52 mx-auto">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-[#0066c1] transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  {/* Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0066c1] transition-colors">
                {miembro.nombre}
              </h3>
              <p className="text-[#0066c1] font-bold text-sm tracking-wider mb-4">
                {miembro.cargo}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                {miembro.especialidad}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-[#0066c1] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
          >
            <span>Conoce a todo el equipo</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
