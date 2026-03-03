import React from 'react';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 border-t border-neutral-200">
            <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-8">
                    <User className="text-neutral-400" size={32} />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Sobre Mim</h2>
                </div>

                <div className="text-xl text-neutral-600 leading-relaxed space-y-8">
                    <p>
                        Sou desenvolvedor e analista de dados apaixonado por tecnologia e resolução de problemas.
                        Estudante de Sistemas de Informação, tenho experiência com desenvolvimento backend em Java/Spring Boot,
                        análise de dados com SQL e Power BI, e automação de processos.
                    </p>
                    <p>
                        Busco transformar desafios técnicos em soluções práticas e funcionais, sempre
                        aprendendo novas tecnologias e buscando formas mais eficientes de resolver problemas.        </p>
                </div>
            </div>
        </section>
    );
};

export default About;