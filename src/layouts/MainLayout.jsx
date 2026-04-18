import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { socialLinks } from "../data/site";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="block h-4 w-4"
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.53c0-1.32-.02-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.92V21h-4V9Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="block h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.56.12-3.25 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.58c1.02 0 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.69.24 2.94.12 3.25.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon
};

export default function MainLayout() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
      />
      <Container as="main" className="flex-1 py-8">
        <Outlet />
      </Container>
      <footer className="mt-12 sm:mt-16">
        <Container className="flex flex-col gap-5 pb-10 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.platform];

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <Icon />
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
          <p>© 2026 Felipe Zelent</p>
        </Container>
      </footer>
    </div>
  );
}
