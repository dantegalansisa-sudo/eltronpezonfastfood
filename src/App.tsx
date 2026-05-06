import CustomCursor from './components/shared/CustomCursor';
import ScrollProgress from './components/shared/ScrollProgress';
import WhatsAppButton from './components/shared/WhatsAppButton';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Especialidades from './components/Especialidades';
import Menu from './components/Menu';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Especialidades />
        <Menu />
        <Sobre />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
