import React from 'react';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-[60vh] flex flex-col justify-center py-24 border-t border-white/10">
            <div className="max-w-5xl">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-12 uppercase">
                    Sobre Mim
                </h2>

                <div className="text-lg md:text-xl text-slate-400 font-light leading-relaxed space-y-8">
                    <p>
                        Sou desenvolvedor e analista de dados apaixonado por tecnologia e resolução de problemas.
                        Estudante de Sistemas de Informação, tenho experiência com desenvolvimento backend em Java/Spring Boot,
                        análise de dados com SQL e Power BI, e automação de processos.
                    </p>
                    <p>
                        Busco transformar desafios técnicos em soluções práticas e funcionais, sempre
                        aprendendo novas tecnologias e buscando formas mais eficientes de resolver problemas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;