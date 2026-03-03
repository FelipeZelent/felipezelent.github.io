import React, { useState } from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "felipe.pzelent@gmail.com"; // Substitua pelo seu email real

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between pt-32 pb-10 border-t border-neutral-200">
      <div className="flex flex-col justify-center items-center text-center flex-grow max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Vamos construir algo juntos?</h2>
          <p className="text-xl text-neutral-500 mb-12 leading-relaxed">Aberto a oportunidades de estágio, trainee e projetos colaborativos.</p>
        <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.linkedin.com/in/felipepzelent/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#0a66c2] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#004182] transition-all text-lg shadow-lg shadow-blue-900/20 hover:-translate-y-1">
                <Linkedin size={24} /> Me chame no LinkedIn
              </a>
              <a href="https://github.com/FelipeZelent" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-neutral-900 text-white font-medium px-8 py-4 rounded-xl hover:bg-black transition-all text-lg shadow-lg shadow-neutral-900/20 hover:-translate-y-1">
                <Github size={24} /> Acesse meu GitHub
              </a>
            </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-neutral-200 text-sm text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} FelipeZelent. Todos os direitos reservados.</p>
        <p className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          Disponível para novas oportunidades
        </p>
      </div>
    </section>
  );
};

export default Contact;