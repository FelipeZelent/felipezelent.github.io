import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tighter text-[var(--color-heading)] sm:text-4xl">
        Projetos
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-[var(--color-text)]">
        Alguns projetos que ajudam a apresentar minha forma de construir
        aplicacoes, organizar solucoes e transformar ideias em produtos
        funcionais.
      </p>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
