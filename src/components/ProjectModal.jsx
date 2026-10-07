import { useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel";

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

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

// Custom IDE mockup for backend projects in modal
function ModalBackendMockup({ slug }) {
  if (slug === "webhook-listener-api") {
    return (
      <div className="flex h-full min-h-[220px] flex-col font-mono text-[11px] sm:text-[12.5px] leading-relaxed text-slate-400 p-5 select-none rounded-2xl bg-slate-950/80 border border-slate-800">
        <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span className="text-[11px] text-slate-500 ml-2">github-webhook.http</span>
        </div>
        <div className="space-y-1.5">
          <p><span className="text-emerald-400">POST</span> <span className="text-sky-400">/api/v1/webhook</span></p>
          <p className="text-slate-500">Host: api.felipezelent.dev</p>
          <p className="text-slate-500">X-GitHub-Event: push</p>
          <p className="text-slate-600 mt-2">// Request Payload</p>
          <p className="text-slate-300">&#123;</p>
          <p className="pl-4">"ref": <span className="text-amber-300">"refs/heads/main"</span>,</p>
          <p className="pl-4">"repository": &#123;</p>
          <p className="pl-8">"name": <span className="text-amber-300">"webhook-listener"</span></p>
          <p className="pl-4">&#125;</p>
          <p className="text-slate-300">&#125;</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[220px] flex-col font-mono text-[11px] sm:text-[12.5px] leading-relaxed text-slate-400 p-5 select-none rounded-2xl bg-slate-950/80 border border-slate-800">
      <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        <span className="text-[11px] text-slate-500 ml-2">clean-architecture-tasks</span>
      </div>
      <div className="space-y-1.5">
        <p className="text-slate-500">package domain.usecases;</p>
        <p className="text-purple-400 mt-1">public class <span className="text-sky-400">CreateTaskUseCase</span> &#123;</p>
        <p className="pl-4 text-purple-400">public <span className="text-emerald-400">Task execute</span>(TaskData data) &#123;</p>
        <p className="pl-8 text-slate-300">Task task = Task.create(data);</p>
        <p className="pl-8 text-amber-300">return repo.save(task);</p>
        <p className="pl-4">&#125;</p>
        <p className="text-purple-400">&#125;</p>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const hasImage = project.images && project.images.length > 0;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
    >
      <div className="relative rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up border border-[var(--color-border)] text-[var(--color-text)] bg-[var(--color-bg)]">
        
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-heading)] hover:scale-105 cursor-pointer backdrop-blur-sm"
        >
          <CloseIcon />
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Details */}
          <div className="space-y-2.5 pr-8">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-accent-light)] text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                {project.category}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-medium">
                • {project.period}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-heading)]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Media Section (Carousel or Code Editor Mockup) */}
          <div className="w-full">
            {hasImage ? (
              <ProjectCarousel
                images={project.images}
                title={project.title}
                layout={project.galleryLayout}
              />
            ) : (
              <ModalBackendMockup slug={project.slug} />
            )}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Destaques & Conquistas
              </h4>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-text)]">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2.5 items-start">
                    <span className="text-[var(--color-accent)] text-lg leading-none select-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Stack Tecnológica
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-border)]/30 border border-[var(--color-border)]/55 text-[var(--color-text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--color-border)]/40">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn text-xs sm:text-sm"
              >
                <GitHubIcon />
                <span>Ver no GitHub</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/10 text-[var(--color-accent)] hover:text-[var(--color-heading)] px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>Acessar Demo</span>
                <ArrowUpRightIcon />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
