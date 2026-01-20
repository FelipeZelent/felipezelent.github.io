import React from 'react';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 border-t border-neutral-200 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Tem um projeto em mente?</h2>
          <p className="text-neutral-500">Pronto para resolver problemas reais</p>
        </div>

        <a
          href="https://www.linkedin.com/in/felipepzelent/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200/50"
        >
          <Linkedin className="mr-2" size={18} />
          Entrar em contato
        </a>
      </div>

      <div className="mt-20 text-xs text-neutral-400 flex justify-between items-center">
        <p>© {new Date().getFullYear()} FelipeZelent.</p>
      </div>
    </section>
  );
};

export default Contact;