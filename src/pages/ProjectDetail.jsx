import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import ProjectCarousel from "../components/ProjectCarousel";

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-[var(--color-heading)]">
          Projeto não encontrado
        </h1>
        <Link
          to="/projects"
          className="text-[var(--color-muted)] hover:text-[var(--color-heading)]"
        >
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10">
      <header className="space-y-6">
        <Link
          to="/projects"
          className="inline-block text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)]"
        >
          ← voltar para projetos
        </Link>

        <div className="space-y-3">
          <p className="text-sm text-[var(--color-accent)]">
            / {project.category}
          </p>
          <h1 className="text-3xl font-semibold tracking-tighter text-[var(--color-heading)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-text)]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 pt-1 text-sm text-[var(--color-accent)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-heading)]"
            >
              <ArrowUpRightIcon />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-heading)]"
            >
              <ArrowUpRightIcon />
              Demo
            </a>
          )}
        </div>
      </header>

      {project.images?.length > 0 ? (
        <ProjectCarousel
          images={project.images}
          title={project.title}
          layout={project.galleryLayout}
        />
      ) : (
        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/75 px-6 py-7 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
          <p className="text-sm text-[var(--color-text)]">
            Ainda não adicionei screenshots deste projeto nesta versão do
            portfólio.
          </p>
        </section>
      )}

      {project.highlights?.length > 0 && (
        <section className="space-y-4">
          <SectionTitle>Destaques</SectionTitle>
          <ul className="list-disc space-y-3 pl-5 text-[15px] leading-7 text-[var(--color-text)] marker:text-[var(--color-accent)]">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-4">
        <SectionTitle>Stack</SectionTitle>
        <p className="text-[15px] leading-8 text-[var(--color-text)]">
          {project.stack.join(" • ")}
        </p>
      </section>
    </article>
  );
}
