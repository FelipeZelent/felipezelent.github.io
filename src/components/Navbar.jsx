import { NavLink } from "react-router-dom";
import Container from "./Container";
import { navLinks, siteProfile } from "../data/site";

const linkClass = ({ isActive }) =>
  `transition-colors ${
    isActive
      ? "text-[var(--color-accent)]"
      : "text-[var(--color-muted)] hover:text-[var(--color-heading)]"
  }`;

function ThemeIcon({ theme }) {
  if (theme === "dark") {
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
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
        <path d="m5.64 5.64 1.41 1.41" />
        <path d="m16.95 16.95 1.41 1.41" />
        <path d="m5.64 18.36 1.41-1.41" />
        <path d="m16.95 7.05 1.41-1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

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
      <path d="M12 3a6 6 0 1 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header>
      <Container
        as="nav"
        className="flex items-center justify-between py-8 text-sm"
      >
        <NavLink to="/" className="font-medium text-[var(--color-heading)]">
          {siteProfile.name}
        </NavLink>

        <div className="flex items-center gap-4 sm:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Mudar para tema claro"
                : "Mudar para tema escuro"
            }
            className="inline-flex h-5 w-5 items-center justify-center text-[var(--color-muted)] transition-colors hover:text-[var(--color-heading)]"
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </Container>
    </header>
  );
}
