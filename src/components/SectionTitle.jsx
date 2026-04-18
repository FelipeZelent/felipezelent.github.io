import { createElement } from "react";

export default function SectionTitle({ as = "h2", className = "", children }) {
  const classes = [
    "text-lg font-semibold tracking-tight text-[var(--color-heading)]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { className: classes }, children);
}
