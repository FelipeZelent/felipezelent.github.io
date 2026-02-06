import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "ProductManagementAPI",
      category: "backend",
      description: "API RESTful em Java Spring Boot para gerenciamento de produtos. Implementação de CRUD completo, validações de negócio e tratamento de exceções.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/FelipeZelent/ProductManagementAPI",
      repo: "https://github.com/FelipeZelent/ProductManagementAPI"
    },
    
    {
      id: 2,
      title: "App E-commerce (P.I-Delta)",
      category: "mobile",
      description: "Aplicativo mobile de e-commerce desenvolvido como projeto integrador. Sistema completo com catálogo de produtos, carrinho de compras e integração com backend. Foco em experiência do usuário e arquitetura limpa.",
      tech: ["Flutter", "Dart", "Firebase",],
      link: "https://github.com/FelipeZelent/P.I-Delta",
      repo: "https://github.com/FelipeZelent/P.I-Delta"
    },
    {
      id: 3,
      title: "TerminalChess",
      category: "backend",
      description: "Jogo de xadrez completo jogável via terminal. Implementação das regras do xadrez, validação de movimentos e lógica de jogo. Exercício de programação orientada a objetos e algoritmos.",
      tech: ["Java"],
      link: "https://github.com/FelipeZelent/TerminalChess",
      repo: "https://github.com/FelipeZelent/TerminalChess"
    }
  ];
return (
    <section id="projects" className="mb-32 pt-16 border-t border-neutral-200 scroll-mt-28">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Projetos Selecionados</h2>

      {/* Grid: 1 coluna (mobile), 2 (tablet), 3 (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white border border-neutral-100 p-6 rounded-xl hover:border-neutral-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                {project.category}
              </span>
              <a href={project.repo} className="text-neutral-400 hover:text-black transition-colors">
                <ArrowUpRight size={20} />
              </a>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, index) => (
                <span key={index} className="text-[10px] font-medium text-neutral-500 bg-neutral-50 px-2 py-1 rounded border border-neutral-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;