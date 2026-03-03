'use client';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Calle+Crta.+Betica+37C+41300+San+Jose+de+la+Rinconada+Sevilla';

export default function Contacto() {
  return (
    <section id="contacto" className="py-28 lg:py-36 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-[#0066c1]/20 text-[#0066c1] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">
            Venga a
            <span className="text-[#0066c1]"> Conocernos</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Acerquese a nuestra clinica o pongase en contacto con nosotros para consultar cualquier duda con nuestros
            profesionales.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:691812607"
              className="group inline-flex items-center gap-3 bg-[#0066c1] hover:bg-[#004d91] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Llamenos</span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <span>Como Llegar</span>
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
