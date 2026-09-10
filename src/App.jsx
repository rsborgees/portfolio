
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Formacao from './sections/Formacao';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <div className="bg-mesh" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Formacao />
      </main>
      <Footer />
    </>
  );
}
