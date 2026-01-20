import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" className="mb-32 max-w-3xl">
            <p className="text-neutral-500 font-medium mb-6 tracking-wide uppercase text-xs">
                Backend • Mobile • Data
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-neutral-900">
                Transformando código <br />
                <span className="text-neutral-400">em soluções reais.</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-10">
                Estudante de Sistemas de Informação explorando backend, mobile e análise de dados.
                Construo projetos que resolvem problemas reais, desde APIs até aplicativos mobile,
                sempre aprendendo através da prática.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
                {/* Botão de Download CV */}
                
                <a href="https://github.com/FelipeZelent" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-all">
                    <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/felipepzelent/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-all">
                    <Linkedin size={18} /> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Hero;