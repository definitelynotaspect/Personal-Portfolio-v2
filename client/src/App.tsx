// Style note: Quiet Terminal shell — warm editorial surfaces, asymmetric structure, precise mono metadata, and a restrained burnt-sampaguita signal.
import Home from "./pages/Home";
import About from "./pages/About";
import Credentials from "./pages/Credentials";
import Projects from "./pages/Projects";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "wouter";
import PortfolioRail, { MobileRailToggle } from "./components/PortfolioRail";
import { switchThemeWithWave } from "./theme";

export default function App() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("barong-theme") as "light" | "dark") || "dark",
  );
  const activePage = location === "/about" ? "about" : location === "/credentials" ? "credentials" : location === "/projects" ? "projects" : "home";

  useEffect(() => {
    const titles = {
      home: "Bjay Duque — Personal Portfolio",
      about: "About Me — Bjay Duque",
      projects: "Projects — Bjay Duque",
      credentials: "Credentials — Bjay Duque",
    };
    document.title = titles[activePage];
  }, [activePage]);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  const page = activePage === "about" ? <About /> : activePage === "credentials" ? <Credentials /> : activePage === "projects" ? <Projects /> : <Home />;

  return <>
    <PortfolioRail activePage={activePage} menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} theme={theme} onThemeToggle={(event) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      switchThemeWithWave(event, nextTheme, () => setTheme(nextTheme));
    }} />
    <MobileRailToggle onClick={() => setMenuOpen(true)} />
    {page}
  </>;
}
