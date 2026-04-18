import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="mb-10 flex flex-col transition-colors hover:text-[var(--color-muted)]"
    >
      <div className="space-y-2">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
          <p className="text-xl tracking-tight text-[var(--color-heading)]">
            {project.title}
          </p>
          <p className="text-sm text-[var(--color-accent)]">
            - {project.category}
          </p>
        </div>

        <p className="max-w-2xl text-[15px] leading-6 text-[var(--color-text)] dark:text-[var(--color-muted)]">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
