import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkLine from './components/NetworkLine';
import { HoverNavigation } from './components/ui/NavigationBar';

const navLinks = [
  { label: "Home", link: "#home" },
  { label: "Background", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

function App() {
  return (
    <div className="text-gray-100 min-h-screen selection:bg-cyan-500/30 selection:text-white">
      {/* Main Container */}
      <div className="relative z-10 pb-8">
        <HoverNavigation items={navLinks} />
        <main>
          <Hero />
          <NetworkLine height="70px" />
          <About />
          <NetworkLine height="70px" />
          <Skills />
          <NetworkLine height="70px" />
          <Projects />
          <NetworkLine height="70px" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
