'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-28 lg:py-36 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#0066c1]/20 text-[#0066c1] font-bold text-sm tracking-wider uppercase px-5 py-2 rounded-full mb-6">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">
            Venga a
            <span className="text-[#0066c1]"> Conocernos</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Acérquese a nuestra clínica o póngase en contacto con nosotros para consultar 
            cualquier duda con nuestros profesionales.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:691812607"
              className="group inline-flex items-center gap-3 bg-[#0066c1] hover:bg-[#004d91] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Llámenos</span>
            </a>
            <a
              href="#contactForm"
              className="group inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <span>Pida Cita</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Clinic Card */}
            <div className="bg-gray-800 rounded-3xl p-8">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/clinica-footer.png"
                  alt="Clínica B&C"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Clínica B&amp;C</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'Dirección',
                    content: ['Calle Crta. Bética, 37C', '41300 San José de la Rinconada, Sevilla'],
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: 'Teléfonos',
                    content: ['955 521 335', '691 812 607'],
                    isPhone: true,
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Horario',
                    content: ['Lunes a Viernes:', '09:30-13:30 y 16:30-20:00'],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0066c1] flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                      {item.content.map((line, i) => (
                        item.isPhone ? (
                          <a key={i} href={`tel:${line.replace(/\s/g, '')}`} className="block text-gray-300 hover:text-[#0066c1] transition-colors text-base">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-300 text-base">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-white font-bold mb-4">Síguenos</p>
                <div className="flex gap-3">
                  {[
                    { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', name: 'Facebook' },
                    { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', name: 'Instagram' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-[#0066c1] hover:bg-[#004d91] flex items-center justify-center text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gray-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Nuestros Servicios</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Podología', 'Fisioterapia', 'Nutrición', 'Psicología', 'Enfermería'].map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#0066c1] transition-colors py-2 text-base font-medium"
                  >
                    <svg className="w-5 h-5 text-[#0066c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div id="contactForm" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-2xl">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-3">Envíenos un mensaje</h3>
                <p className="text-gray-600 text-lg">Rellene el formulario y nos pondremos en contacto con usted</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-[#0066c1]/20 focus:border-[#0066c1] outline-none transition-all text-gray-900"
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-[#0066c1]/20 focus:border-[#0066c1] outline-none transition-all text-gray-900"
                      placeholder="Su teléfono"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-[#0066c1]/20 focus:border-[#0066c1] outline-none transition-all text-gray-900"
                    placeholder="su@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-[#0066c1]/20 focus:border-[#0066c1] outline-none transition-all resize-none text-gray-900"
                    placeholder="¿En qué podemos ayudarle?"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0066c1] focus:ring-[#0066c1]"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                    Al enviar este formulario acepto la{' '}
                    <a href="#" className="text-[#0066c1] hover:underline font-medium">política de privacidad</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0066c1] hover:bg-[#004d91] text-white font-bold py-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#0066c1]/30 flex items-center justify-center gap-3"
                >
                  <span>Enviar mensaje</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
