import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "ProductManagementAPI",
      category: "backend",
      description: "API RESTful em Java Spring Boot para gerenciamento de produtos. Implementação de CRUD completo, validações de negócio e tratamento de exceções.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/FelipeZelent/ProductManagementAPI",
      repo: "https://github.com/FelipeZelent/ProductManagementAPI",
      images: ["/swagger-ui-screenshot.png"]
    },
    {
      id: 2,
      title: "App E-commerce (P.I-Delta)",
      category: "mobile",
      description: "Aplicativo mobile de e-commerce desenvolvido como projeto integrador. Sistema completo com catálogo de produtos, carrinho de compras e integração com backend. Foco em experiência do usuário e arquitetura limpa.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/FelipeZelent/P.I-Delta",
      repo: "https://github.com/FelipeZelent/P.I-Delta",
      images: ["/screenshotAPP.png", "/home_app.png", "/carrinho_app.png", "/produto_app.png", "/editar_app.png", "/perfil_app.png"]
    },
    {
      id: 3,
      title: "TerminalChess",
      category: "backend",
      description: "Jogo de xadrez completo jogável via terminal. Implementação das regras do xadrez, validação de movimentos e lógica de jogo. Exercício de programação orientada a objetos e algoritmos.",
      tech: ["Java"],
      link: "https://github.com/FelipeZelent/TerminalChess",
      repo: "https://github.com/FelipeZelent/TerminalChess",
      images: ["https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800&h=600"]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 border-t border-white/10">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-16 uppercase">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            onClick={() => openModal(project)}
            className="group bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            <div className={`h-60 overflow-hidden relative border-b border-white/5 ${project.category === 'mobile' ? 'bg-[#111] flex justify-center items-center p-6' : 'bg-[#111]'}`}>
              <img
                src={project.images[0]}
                alt={project.title}
                className={`transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-60 ${project.category === 'mobile' ? 'h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'w-full h-full object-cover'}`}
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-300 transition-colors tracking-tight">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, index) => (
                  <span key={index} className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl max-h-[90vh] rounded-3xl flex flex-col lg:flex-row overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-white/10 backdrop-blur-md text-white rounded-full transition-colors border border-white/10"
            >
              <X size={20} />
            </button>

            <div className="lg:w-[60%] h-[400px] lg:h-auto lg:min-h-[600px] relative bg-[#050505] flex items-center justify-center p-8 group">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`} 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/10 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/10 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {selectedProject.images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-1.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60 w-1.5'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="lg:w-[40%] p-10 lg:p-14 overflow-y-auto flex flex-col">
              <span className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase mb-4 block">
                {selectedProject.category}
              </span>
              
              <h2 className="text-4xl font-black tracking-tighter text-white mb-6">
                {selectedProject.title}
              </h2>
              
              <div className="mb-10 text-slate-400 font-light leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              <div className="mb-12">
                <h4 className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, index) => (
                    <span key={index} className="text-sm font-medium text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <a 
                  href={selectedProject.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-3 w-full bg-white hover:bg-slate-200 text-black font-semibold py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
                >
                  <Github size={18} /> Ver Código no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;