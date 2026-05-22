import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen selection:bg-indigo-500/30 selection:text-white">
      {/* Dynamic Grid Background overlay */}
      <div className="fixed inset-0 bg-gray-950 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none z-0" />
      
      {/* Main Container */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
