import { createElement } from "react";

const sizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  full: "max-w-full"
};

export default function Container({ as = "div", size = "sm", className = "", children }) {
  const sizeClass = sizes[size] || sizes.sm;
  const classes = ["mx-auto w-full px-5 sm:px-6", sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { className: classes }, children);
}

