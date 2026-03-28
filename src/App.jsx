import './styles/globals.css';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-code-bg">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="acerca">
          <About />
        </section>
        <section id="proyectos">
          <Projects />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
