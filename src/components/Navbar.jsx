import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-mono font-bold tracking-tighter text-lg text-white cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
          <Terminal size={18} /> Felipe_Zelent
        </span>
        
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;