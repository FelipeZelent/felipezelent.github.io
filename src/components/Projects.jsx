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
      repo: "https://github.com/FelipeZelent/ProductManagementAPI",
      image: "public/swagger-ui-screenshot.png"
    },
    
    {
      id: 2,
      title: "App E-commerce (P.I-Delta)",
      category: "mobile",
      description: "Aplicativo mobile de e-commerce desenvolvido como projeto integrador. Sistema completo com catálogo de produtos, carrinho de compras e integração com backend. Foco em experiência do usuário e arquitetura limpa.",
      tech: ["Flutter", "Dart", "Firebase",],
      link: "https://github.com/FelipeZelent/P.I-Delta",
      repo: "https://github.com/FelipeZelent/P.I-Delta",
      image: "/public/screenshotAPP.png"
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
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 border-t border-neutral-200">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                <div className="h-52 overflow-hidden bg-neutral-100 border-b border-neutral-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-4 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, index) => (
                      <span key={index} className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-md border border-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
  );
};

export default Projects;