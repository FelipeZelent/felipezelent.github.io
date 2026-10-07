import { Link } from "react-router-dom";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.56.12-3.25 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.58c1.02 0 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.69.24 2.94.12 3.25.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
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

// Custom IDE mockup for backend projects to make them visual
function BackendMockup({ slug }) {
  if (slug === "webhook-listener-api") {
    return (
      <div className="flex h-full flex-col font-mono text-[10px] sm:text-[11px] leading-relaxed text-slate-400 p-4 select-none">
        <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span className="text-[10px] text-slate-500 ml-2">github-webhook.http</span>
        </div>
        <div className="space-y-1">
          <p><span className="text-emerald-400">POST</span> <span className="text-sky-400">/api/v1/webhook</span></p>
          <p className="text-slate-500">Host: api.felipezelent.dev</p>
          <p className="text-slate-500">X-GitHub-Event: push</p>
          <p className="text-slate-600 mt-2">// Request Payload</p>
          <p className="text-slate-300">&#123;</p>
          <p className="pl-3">"ref": <span className="text-amber-300">"refs/heads/main"</span>,</p>
          <p className="pl-3">"repository": &#123;</p>
          <p className="pl-6">"name": <span className="text-amber-300">"webhook-listener"</span></p>
          <p className="pl-3">&#125;,</p>
          <p className="pl-3">"pusher": "FelipeZelent"</p>
          <p className="text-slate-300">&#125;</p>
        </div>
      </div>
    );
  }

  // Default Backend Mockup (Task Manager & others)
  return (
    <div className="flex h-full flex-col font-mono text-[10px] sm:text-[11px] leading-relaxed text-slate-400 p-4 select-none">
      <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        <span className="text-[10px] text-slate-500 ml-2">clean-architecture-tasks</span>
      </div>
      <div className="space-y-1">
        <p className="text-slate-500">package domain.usecases;</p>
        <p className="text-purple-400 mt-1">public class <span className="text-sky-400">CreateTaskUseCase</span> &#123;</p>
        <p className="pl-3 text-slate-300">private final TaskRepository repo;</p>
        <p className="pl-3 text-purple-400 mt-1">public <span className="text-emerald-400">Task execute</span>(TaskData data) &#123;</p>
        <p className="pl-6 text-slate-500">// Business rules & validation</p>
        <p className="pl-6 text-slate-300">Task task = Task.create(data);</p>
        <p className="pl-6 text-amber-300">return repo.save(task);</p>
        <p className="pl-3 text-purple-400">&#125;</p>
        <p className="text-purple-400">&#125;</p>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onSelect }) {
  const hasImage = project.images && project.images.length > 0;
  const mainImage = hasImage ? project.images[0] : null;

  const handleCardClick = (e) => {
    if (e.target.closest("a")) {
      return;
    }
    if (onSelect) {
      e.preventDefault();
      onSelect(project);
    }
  };

  const isMobile = project.category === "Mobile";

  return (
    <div
      onClick={onSelect ? handleCardClick : undefined}
      className={`glass-panel hover-lift rounded-3xl overflow-hidden flex flex-col h-full transition-all ${
        onSelect ? "cursor-pointer" : ""
      }`}
    >
      {/* Visual / Screenshot Side */}
      <div className="relative overflow-hidden bg-slate-950 aspect-video border-b border-[var(--color-border)]">
        {hasImage ? (
          <div className="w-full h-full group/img overflow-hidden flex items-center justify-center">
            <img
              src={mainImage}
              alt={project.title}
              loading="lazy"
              className={`w-full h-full transition-transform duration-700 ease-out group-hover/img:scale-102 ${
                isMobile
                  ? "object-contain p-3 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
                  : "object-cover bg-slate-900/40"
              }`}
            />
          </div>
        ) : (
          <BackendMockup slug={project.slug} />
        )}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded-full select-none">
          {project.category}
        </div>
      </div>

      {/* Information Side */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight text-[var(--color-heading)] line-clamp-1">
              {project.title}
            </h3>
            <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0">
              {project.period}
            </span>
          </div>

          <p className="text-sm text-[var(--color-text)] leading-relaxed opacity-90 line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--color-border)]/30 border border-[var(--color-border)]/55 text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[var(--color-border)]/40 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
            >
              <GitHubIcon />
              <span>Ver código</span>
            </a>
          ) : (
            <span />
          )}

          {onSelect ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="details-trigger inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-heading)] transition-colors group/link cursor-pointer bg-transparent border-0 p-0"
            >
              <span>Ver detalhes</span>
              <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                <ArrowUpRightIcon />
              </span>
            </button>
          ) : (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-heading)] transition-colors group/link cursor-pointer"
            >
              <span>Ver detalhes</span>
              <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                <ArrowUpRightIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

