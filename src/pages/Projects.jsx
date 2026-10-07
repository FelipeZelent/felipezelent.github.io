import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Container from "../components/Container";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container size="lg">
      <section className="space-y-8">
        <h1 className="text-3xl font-semibold tracking-tighter text-[var(--color-heading)] sm:text-4xl">
          Projetos
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-text)]">
          Alguns projetos que ajudam a apresentar minha forma de construir
          aplicações, organizar soluções e transformar ideias em produtos
          funcionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              onSelect={setSelectedProject} 
            />
          ))}
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
