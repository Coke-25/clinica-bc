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
              src="/images/logo.png"
              alt="Clínica B&C"
              width={160}
              height={50}
              className="mb-8 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              Clínica multidisciplinar en San José de la Rinconada con un amplio equipo profesional a su disposición.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Nuestro Equipo', href: '/#equipo' },
                { label: 'Contacto', href: '/#contacto' },
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
          </div>
        </div>
      </div>
    </footer>
  );
}
