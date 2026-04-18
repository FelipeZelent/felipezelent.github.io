import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <p className="text-sm tracking-[0.2em] text-[var(--color-muted)] uppercase">
        404
      </p>
      <h1 className="text-4xl font-medium tracking-tight text-[var(--color-heading)]">
        Pagina nao encontrada
      </h1>
      <p className="max-w-xl text-[15px] leading-7 text-[var(--color-text)]">
        O caminho que voce tentou acessar nao existe nesta versao do portfolio.
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
