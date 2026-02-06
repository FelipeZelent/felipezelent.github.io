import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <span 
          className="font-bold tracking-tight text-lg cursor-pointer" 
          onClick={() => window.scrollTo(0,0)}
        >
          Felipe Zelent
        </span>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
          <a href="#about" className="hover:text-black transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-black transition-colors">Habilidades</a>
          <a href="#projects" className="hover:text-black transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-black transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;