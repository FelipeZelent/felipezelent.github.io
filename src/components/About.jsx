import React from 'react';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="mb-32 pt-16 border-t border-neutral-200 scroll-mt-28">
            <div className="flex items-center gap-2 mb-8">
                <User className="text-neutral-400" size={24} />
                <h2 className="text-3xl font-bold tracking-tight">Sobre Mim</h2>
            </div>

            <div className="text-lg text-neutral-600 leading-relaxed max-w-3xl space-y-6">
                <p>
                    Sou desenvolvedor e analista de dados apaixonado por tecnologia e resolução de problemas.
                    Estudante de Sistemas de Informação (formando em 2025), tenho experiência com desenvolvimento backend em Java/Spring Boot,
                    análise de dados com SQL e Power BI, e automação de processos.
                </p>
                <p>
                    Busco transformar desafios técnicos em soluções práticas e funcionais, sempre
                    aprendendo novas tecnologias e buscando formas mais eficientes de resolver problemas.        </p>
            </div>
        </section>
    );
};

export default About;