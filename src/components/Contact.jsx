import React from 'react';
import { Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-12 border-t border-white/10">
      <div className="flex justify-center items-center mb-32 px-4">
        <a 
          href="https://www.linkedin.com/in/felipepzelent/" 
          target="_blank" 
          rel="noreferrer" 
          className="group inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-slate-200 hover:-translate-y-1 transition-all uppercase tracking-wider text-sm"
        >
          <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> 
          Fale comigo no LinkedIn
        </a>
      </div>
      
      {/* Rodapé */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <a href="https://github.com/FelipeZelent" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group">
          <span className="flex items-center gap-3 text-white font-medium"><Github size={20} /> GitHub</span>
          <ArrowUpRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/felipepzelent/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group">
          <span className="flex items-center gap-3 text-white font-medium"><Linkedin size={20} /> LinkedIn</span>
          <ArrowUpRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
        </a>
        <div className="p-6 col-span-1 lg:col-span-2 flex items-center justify-between">
          <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">© {new Date().getFullYear()} Felipe Zelent</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Disponível para oportunidades</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;