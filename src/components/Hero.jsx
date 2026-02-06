import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="mb-32 max-w-3xl">
            <p className="text-neutral-500 font-medium mb-4 tracking-wide uppercase text-xs flex items-center gap-2">
                <Code size={14} /> Backend & Data Developer
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-neutral-900">
                Olá, eu sou <br />
                <span className="text-neutral-400">Felipe Zelent.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-neutral-600 font-light mb-10">
                Dados, código e soluções práticas
            </h2>

            <div className="flex flex-wrap gap-4 items-center">
                <a href="https://github.com/FelipeZelent" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-all border border-neutral-200 px-6 py-3 rounded-lg hover:border-neutral-400 bg-white shadow-sm">
                    <Github size={20} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/felipepzelent/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-all border border-neutral-200 px-6 py-3 rounded-lg hover:border-neutral-400 bg-white shadow-sm">
                    <Linkedin size={20} /> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Hero;