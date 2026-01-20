import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-bold tracking-tight text-lg">FelipeZelent</span>
        
        <div className="flex gap-6 text-sm font-medium text-neutral-500">
          <a href="#about" className="hover:text-black transition-colors">Sobre</a>
          <a href="#work" className="hover:text-black transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-black transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;