import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { navLinks, siteProfile } from "../data/site";

function ThemeIcon({ theme }) {
  if (theme === "dark") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4.5 w-4.5"
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
      className="h-4.5 w-4.5"
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
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHash("");
      return;
    }

    if (window.location.hash) {
      setActiveHash(window.location.hash);
    } else {
      setActiveHash("#about");
    }

    const sections = ["about", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // triggers when the section is in the middle of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleNavClick = (e, to) => {
    if (to.startsWith("/#")) {
      const hash = to.split("#")[1];
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${hash}`);
          setActiveHash(`#${hash}`);
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActiveHash("#about");
    }
  };

  const getLinkClass = (to) => {
    const hash = to.split("#")[1];
    const isActive =
      location.pathname === "/" &&
      (activeHash === `#${hash}` || (activeHash === "" && hash === "about"));

    return `transition-all duration-300 font-medium text-xs sm:text-sm py-1.5 px-3 rounded-full hover:text-[var(--color-heading)] ${
      isActive
        ? "text-[var(--color-accent)] bg-[var(--color-accent-light)]"
        : "text-[var(--color-muted)] hover:bg-[var(--color-border)]/20"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <Container
        as="nav"
        size="lg"
        className="flex items-center justify-between py-4"
      >
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="font-semibold text-base tracking-tight text-[var(--color-heading)] transition-opacity hover:opacity-80"
        >
          {siteProfile.name}
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className={getLinkClass(link.to)}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark"
                ? "Mudar para tema claro"
                : "Mudar para tema escuro"
            }
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-heading)] hover:bg-[var(--color-border)]/30 cursor-pointer"
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </Container>
    </header>
  );
}

