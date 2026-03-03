import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
    return (
           <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl flex flex-col items-center">
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-4 text-neutral-900">
          Felipe Zelent
        </h1>
        
        <h2 className="text-lg md:text-3xl text-neutral-400 font-light mb-12 tracking-widest uppercase flex items-center justify-center gap-3">
          <Code size={32} strokeWidth={1} className="hidden md:block" />
          Backend & Data Developer
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-700 font-medium hover:text-black transition-all border border-neutral-200 px-8 py-3.5 rounded-xl hover:border-neutral-400 bg-white">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-700 font-medium hover:text-black transition-all border border-neutral-200 px-8 py-3.5 rounded-xl hover:border-neutral-400 bg-white">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
    );
};

export default Hero;