export default function Ventajas() {
  const ventajas = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Atención Personalizada',
      description: 'Ofrecemos la máxima atención a sus necesidades y le asesoramos en todo momento.',
      color: 'bg-blue-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Clínica Novedosa',
      description: 'Espacios perfectamente adaptados para consultas y tratamientos modernos.',
      color: 'bg-blue-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Equipo Humano',
      description: 'Profesionales altamente cualificados y reconocidos en su sector.',
      color: 'bg-purple-500',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Clínica Multidisciplinar',
      description: 'Servicio integral de alta especialización en cada una de las áreas.',
      color: 'bg-rose-500',
    },
  ];

  return (
    <section id="servicios" className="py-28 lg:py-36 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#0066c1]/10 text-[#004d91] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
            Descubra nuestras
            <span className="text-[#0066c1]"> ventajas</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Benefíciese de nuestro servicio integral. Ponemos a su disposición todos los tratamientos 
            y pruebas diagnósticas en la misma clínica y cerca de usted.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl ${ventaja.color} text-white mb-8 shadow-lg`}>
                {ventaja.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0066c1] transition-colors">
                {ventaja.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {ventaja.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
