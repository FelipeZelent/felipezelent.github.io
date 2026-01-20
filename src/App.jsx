import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;