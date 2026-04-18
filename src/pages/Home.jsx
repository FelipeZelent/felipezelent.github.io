import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { siteProfile, skillGroups } from "../data/site";

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

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tighter text-[var(--color-heading)] sm:text-4xl">
        {siteProfile.name}
      </h1>

      <p className="text-sm text-[var(--color-muted)]">
        {siteProfile.role}
      </p>

      <p className="max-w-2xl text-lg leading-8 text-[var(--color-text)]">
        Sou desenvolvedor e analista de dados apaixonado por tecnologia e
        resolucao de problemas. Estudante de Sistemas de Informacao, tenho
        experiencia com desenvolvimento backend em Java/Spring Boot, analise de
        dados com SQL e Power BI, e automacao de processos.
      </p>

      <p className="max-w-2xl text-lg leading-8 text-[var(--color-text)]">
        Busco transformar desafios tecnicos em solucoes praticas e funcionais,
        sempre aprendendo novas tecnologias e buscando formas mais eficientes de
        resolver problemas.
      </p>

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-[15px] font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-heading)]"
      >
        <ArrowUpRightIcon />
        <span>ver todos os projetos</span>
      </Link>

      <div className="space-y-4 pt-4">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-1 text-sm sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5"
            >
              <h3 className="font-medium text-[var(--color-heading)]">
                {group.title}
              </h3>
              <p className="leading-7 text-[var(--color-muted)]">
                {group.items.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
