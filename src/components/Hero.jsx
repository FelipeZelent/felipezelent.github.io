import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl flex flex-col items-center">
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-4 text-white">
          Felipe Zelent
        </h1>
        
        <h2 className="text-lg md:text-3xl text-slate-400 font-light mb-12 tracking-widest uppercase flex items-center justify-center gap-3">
          <Code size={32} strokeWidth={1} className="hidden md:block" />
          Backend & Data Developer
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <a href="https://github.com/FelipeZelent" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-black font-medium transition-all border border-white px-8 py-3.5 rounded-xl hover:bg-slate-200 bg-white">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/felipepzelent/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white font-medium transition-all border border-white/20 px-8 py-3.5 rounded-xl hover:bg-white hover:text-black bg-transparent">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;