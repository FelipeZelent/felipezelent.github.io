import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { siteProfile, skillGroups, socialLinks } from "../data/site";
import { projects } from "../data/projects";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300"
      fill="currentColor"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5 text-[var(--color-accent)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const contactIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Container size="lg" className="space-y-20 md:space-y-32">
      {/* 1. SEÇÃO SOBRE (ABOUT) */}
      <section id="about" className="pt-6 md:pt-12 scroll-mt-24">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 text-xs font-semibold text-[var(--color-accent)] tracking-wide">
              {siteProfile.role}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-heading)] sm:text-5xl">
              {siteProfile.name}
            </h1>
          </div>

          <div className="space-y-4 text-[16px] sm:text-lg leading-relaxed text-[var(--color-text)] opacity-95">
            <p>
              Atuo na estruturação, tratamento e automação de dados em contextos reais
              de negócio, com foco em melhorar a confiabilidade das informações e
              reduzir o esforço operacional.
            </p>
            <p>
              Tenho experiência prática com ETL, limpeza e padronização de dados
              provenientes de sistemas legados, além da criação de automações que
              tornaram processos internos mais eficientes.
            </p>
            <p>
              Também desenvolvo APIs REST com Java e Spring Boot, o que me permite
              atuar na ponte entre dados, processos e aplicações.
            </p>
          </div>

          {/* Habilidades Organizadas por Categorias */}
          <div className="space-y-5 pt-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[var(--color-muted)]">
              Conhecimento Técnico
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skillGroups.map((group) => (
                <div 
                  key={group.title} 
                  className="p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 hover:border-[var(--color-accent)]/30 transition-colors"
                >
                  <h4 className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2.5">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]/65 text-[var(--color-text)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO PROJETOS (PROJECTS) */}
      <section id="projects" className="scroll-mt-24 space-y-8">
        <div className="flex flex-col gap-1">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl">
              Projetos em Destaque
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xl">
              Alguns projetos práticos demonstrando soluções de backend, arquitetura limpa e aplicações mobile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO CONTATO (CONTACT) */}
      <section id="contact" className="scroll-mt-24 space-y-8 pb-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl">
            Vamos Conectar?
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Seja para conversar sobre engenharia de dados, desenvolvimento backend com Java, ou oportunidades de projetos, sinta-se à vontade para entrar em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {socialLinks.map((link) => {
            const Icon = contactIcons[link.platform];

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl glass-panel hover-lift hover:border-[var(--color-accent)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-border)]/30 group-hover:bg-[var(--color-accent-light)] transition-colors">
                    <Icon />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      {link.platform}
                    </p>
                    <p className="text-sm font-bold text-[var(--color-heading)]">
                      {link.label}
                    </p>
                  </div>
                </div>
                <ArrowUpRightIcon />
              </a>
            );
          })}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Container>
  );
}

