import { flushSync } from "react-dom";

type Theme = "light" | "dark";

type ThemeToggleEvent = {
  clientX: number;
  clientY: number;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

export function switchThemeWithWave(
  event: ThemeToggleEvent,
  nextTheme: Theme,
  updateTheme: () => void,
) {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const viewTransitionDocument = document as ViewTransitionDocument;

  root.style.setProperty("--theme-wave-x", `${event.clientX}px`);
  root.style.setProperty("--theme-wave-y", `${event.clientY}px`);

  const update = () => flushSync(updateTheme);

  if (!viewTransitionDocument.startViewTransition || reduceMotion) {
    update();
    return;
  }

  root.classList.add("theme-transitioning");
  viewTransitionDocument.startViewTransition(update).finished.finally(() => {
    root.classList.remove("theme-transitioning");
  });
}
