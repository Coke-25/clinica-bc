import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-clinicabc.png"
              alt="Clínica B&C"
              width={160}
              height={50}
              className="mb-8 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              Clínica multidisciplinar en San José de la Rinconada con un amplio equipo profesional a su disposición.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#0066c1] hover:bg-[#004d91] flex items-center justify-center text-white transition-all duration-300"
                >
                  {social === 'facebook' ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Nuestro Equipo', href: '#equipo' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#0066c1] transition-colors flex items-center gap-3 text-base font-medium">
                    <svg className="w-4 h-4 text-[#0066c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8">Servicios</h4>
            <ul className="space-y-4">
              {['Podología', 'Fisioterapia', 'Nutrición y Dietética', 'Psicología', 'Enfermería'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-[#0066c1] transition-colors flex items-center gap-3 text-base font-medium">
                    <svg className="w-4 h-4 text-[#0066c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#0066c1] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-base">Calle Crta. Bética, 37C<br/>41300 San José de la Rinconada</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#0066c1] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:691812607" className="text-gray-300 hover:text-[#0066c1] transition-colors text-base font-medium">691 812 607</a>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#0066c1] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-base">L-V: 09:30-13:30 / 16:30-20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-base">
              © {new Date().getFullYear()} Clínica B&amp;C. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-base">
              {['Aviso legal', 'Política de privacidad', 'Política de cookies'].map((link) => (
                <Link key={link} href="#" className="text-gray-400 hover:text-[#0066c1] transition-colors font-medium">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
