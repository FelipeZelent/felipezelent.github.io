import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <p className="text-sm tracking-[0.2em] text-[var(--color-muted)] uppercase">
        404
      </p>
      <h1 className="text-4xl font-medium tracking-tight text-[var(--color-heading)]">
        Página não encontrada
      </h1>
      <p className="max-w-xl text-[15px] leading-7 text-[var(--color-text)]">
        O caminho que você tentou acessar não existe nesta versão do portfólio.
      </p>
      <Link
        to="/"
        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-heading)]"
      >
        Voltar para a home
      </Link>
    </section>
  );
}
