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

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="work" className="mb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-neutral-200 pb-6">
        <h2 className="text-3xl font-bold tracking-tight">Projetos Selecionados</h2>
        
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <button 
            onClick={() => setActiveTab('all')} 
            className={`${activeTab === 'all' ? 'text-black font-semibold' : 'text-neutral-400 hover:text-neutral-600'}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setActiveTab('backend')} 
            className={`${activeTab === 'backend' ? 'text-black font-semibold' : 'text-neutral-400 hover:text-neutral-600'}`}
          >
            Backend
          </button>
          <button 
            onClick={() => setActiveTab('data')} 
            className={`${activeTab === 'data' ? 'text-black font-semibold' : 'text-neutral-400 hover:text-neutral-600'}`}
          >
            Dados
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group bg-white border border-neutral-100 p-8 rounded-lg hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
              <div>
                <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>
              </div>
              <a href={project.repo} className="p-2 rounded-full bg-neutral-50 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-200">
                <ArrowUpRight size={20} />
              </a>
            </div>
            
            <p className="text-neutral-600 mb-6 max-w-2xl leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, index) => (
                <span key={index} className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
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