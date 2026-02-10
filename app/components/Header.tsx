'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent py-2'
    }`}>
      <div className="w-full mx-auto p-4 px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}>
            <Image
              src="/images/logo-clinicabc.png"
              alt="Clínica B&C"
              width={60}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: '/', label: 'Inicio' },
            { href: '#servicios', label: 'Servicios', hasDropdown: true },
            { href: '#equipo', label: 'Nuestro Equipo' },
            { href: '#contacto', label: 'Contacto' },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href} 
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0066c1] hover:bg-[#0066c1]/10' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.hasDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden border border-gray-100">
                  <div className="py-3">
                    {['Podología', 'Fisioterapia', 'Nutrición y Dietética', 'Psicología', 'Enfermería'].map((service) => (
                      <Link 
                        key={service} 
                        href={`#${service.toLowerCase()}`} 
                        className="block px-6 py-3 text-gray-600 hover:bg-[#0066c1]/10 hover:text-[#0066c1] transition-colors font-medium"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link 
            href="#contacto" 
            className="ml-4 px-6 py-2.5 bg-[#0066c1] hover:bg-[#004d91] text-white rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#0066c1]/30 hover:-translate-y-0.5"
          >
            Pedir Cita
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-6 space-y-2">
          {['Inicio', 'Servicios', 'Nuestro Equipo', 'Contacto'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Inicio' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-4 py-3 text-gray-700 hover:text-[#0066c1] hover:bg-[#0066c1]/10 rounded-xl font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contacto" 
            className="block px-4 py-3 bg-[#0066c1] text-white text-center rounded-xl font-semibold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Pedir Cita
          </Link>
        </nav>
      </div>
    </header>
  );
}
