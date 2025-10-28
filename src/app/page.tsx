import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="sketch-bg min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
