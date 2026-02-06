import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "felipe.pzelent@gmail.com"; // Substitua pelo seu email real

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-20 border-t border-neutral-200 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Vamos construir algo juntos?</h2>
          <p className="text-neutral-500">Aberto a oportunidades de estágio, trainee e projetos colaborativos.</p>
        </div>
        
        <button 
          onClick={handleCopyEmail}
          className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all shadow-lg shadow-neutral-200/50 ${
            isCopied 
              ? "bg-green-600 text-white hover:bg-green-700 transform scale-105" 
              : "bg-black text-white hover:bg-neutral-800"
          }`}
        >
          {isCopied ? (
            <>
              <Check className="mr-2" size={18} />
              Email Copiado!
            </>
          ) : (
            <>
              <Mail className="mr-2" size={18} />
              Copiar Email
            </>
          )}
        </button>
      </div>
      
      <div className="mt-20 text-xs text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} FelipeZelent. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Disponível para novas oportunidades
        </p>
      </div>
    </section>
  );
};

export default Contact;