import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <div className="bg-[#050505] text-slate-300 font-sans selection:bg-white selection:text-black relative min-h-screen overflow-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5)_0%,#050505_100%)]" />

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
};

export default App;