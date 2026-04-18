import { createElement } from "react";

export default function Container({ as = "div", className = "", children }) {
  const classes = ["mx-auto w-full max-w-2xl px-5 sm:px-6", className]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { className: classes }, children);
}
