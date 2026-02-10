import Header from './components/Header';
import Hero from './components/Hero';
import EstudioPisada from './components/EstudioPisada';
import Ventajas from './components/Ventajas';
import Equipo from './components/Equipo';
import Psiconutricion from './components/Psiconutricion';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EstudioPisada />
        <Ventajas />
        <Equipo />
        <Psiconutricion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

