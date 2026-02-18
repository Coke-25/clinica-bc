import Image from 'next/image';

export default function Psiconutricion() {
  return (
    <section className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-[#0066c1]/10 text-[#004d91] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
              Nutrición y bienestar
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Asesoramiento
              <span className="text-[#0066c1]"> Psiconutricional</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
              Le ayudamos a desarrollar hábitos alimenticios saludables que favorezcan su bienestar 
              físico y psicológico. La psiconutrición es tu mejor aliada para un cambio vital.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {[
                { icon: '🎯', text: 'Planes personalizados' },
                { icon: '🧠', text: 'Enfoque integral' },
                { icon: '💪', text: 'Resultados duraderos' },
                { icon: '❤️', text: 'Bienestar completo' },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <span className="text-3xl">{benefit.icon}</span>
                  <span className="font-bold text-gray-800 text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-[#0066c1] hover:bg-[#004d91] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <span>Más información</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://clinicabc.es/wp-content/uploads/psiconutricion-tratamiento-dietas-obesidad-1-600x600.jpg"
                alt="Asesoramiento Psiconutricional"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
