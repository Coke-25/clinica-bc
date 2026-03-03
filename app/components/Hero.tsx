import Image from 'next/image';
import { withBasePath } from '../lib/basePath';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={withBasePath('/images/clinica-hero2.jpg')}
          alt="Clínica B&C San José de la Rinconada"
          fill
          className="object-cover"
          priority
        />
        {/* Strong Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-10">
          <span className="w-2.5 h-2.5 bg-[#0066c1] rounded-full animate-pulse"></span>
          <span className="text-white text-sm md:text-base font-semibold tracking-wide">Clínica Multidisciplinar en San José de la Rinconada</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] drop-shadow-lg">
          Su salud es lo
          <span className="block text-[#0066c1] mt-3 drop-shadow-lg">más importante</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-medium opacity-95">
          Clínica B&amp;C nace con el objetivo de crear una clínica con especialistas 
          en diferentes áreas, ofreciéndole atención personalizada y de calidad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 bg-[#0066c1] hover:bg-[#0077db] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066c1]/40 hover:-translate-y-1"
          >
            <span>Pedir Cita</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:691812607"
            className="group inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-xl"
          >
            <svg className="w-5 h-5 text-[#0066c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>691 812 607</span>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.facebook.com/clinica.bc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 rounded-xl bg-white/15 hover:bg-[#0066c1] border border-white/30 flex items-center justify-center text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-12 border-t border-white/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {[
              { number: '5+', label: 'Especialidades' },
              { number: '10+', label: 'Años de experiencia' },
              { number: '1000+', label: 'Pacientes satisfechos' },
              { number: '100%', label: 'Implicación' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#0066c1] mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-white text-sm md:text-base font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#estudio-pisada" className="flex flex-col items-center gap-3 text-white hover:text-[#0066c1] transition-colors">
          <span className="text-sm font-semibold tracking-widest uppercase">Descubrir</span>
          <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-3">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
