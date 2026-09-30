import { useLayoutEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  FolderKanban,
  Github,
  House,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { certifications, projects } from "./Home";
import { switchThemeWithWave } from "../theme";

export default function About() {
  const [, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("barong-theme") as "light" | "dark") || "dark",
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  return (
    <div className="site-shell about-page-shell">
      <div className="paper-grain" aria-hidden="true" />

      <aside className={`portfolio-rail ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Portfolio navigation">
        <button className="rail-mobile-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"><X size={19} /></button>
        <Link className="rail-brand" href="/">
          <span className="rail-monogram">BD</span>
          <span><strong>Bjay Duque</strong><small>CS student / builder</small></span>
        </Link>
        <Link className="rail-contact" href="/#contact"><Mail size={15} />Start a conversation<ArrowUpRight size={14} /></Link>
        <nav className="rail-nav" aria-label="Portfolio sections">
          <span className="rail-label">Explore</span>
          <Link className="rail-link" href="/"><House size={16} strokeWidth={1.7} /><span>Home</span><small>01</small></Link>
          <Link className="rail-link active" href="/about"><UserRound size={16} strokeWidth={1.7} /><span>About me</span><small>02</small></Link>
          <Link className="rail-link" href="/projects"><FolderKanban size={16} strokeWidth={1.7} /><span>Projects</span><small>{String(projects.length).padStart(2, "0")}</small></Link>
          <Link className="rail-link" href="/credentials"><Award size={16} strokeWidth={1.7} /><span>Credentials</span><small>{String(certifications.length).padStart(2, "0")}</small></Link>
        </nav>
        <div className="rail-footer">
          <span><i /> Available for thoughtful work</span>
          <div>
            <a href="https://github.com/definitelynotaspect" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href="http://linkedin.com/in/bjay-duque-8aa7423aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <button className="rail-theme-toggle" onClick={(event) => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              switchThemeWithWave(event, nextTheme, () => setTheme(nextTheme));
            }} aria-label="Toggle color theme">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </aside>

      <div className="page-content">
        <button className="mobile-page-menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu"><Menu size={20} /></button>
        <header className="credentials-page-header container">
          <button className="credentials-back" type="button" onClick={() => setLocation("/")}>
            <ArrowLeft size={16} /> Back to portfolio
          </button>
          <span className="credentials-page-mark">BJAY DUQUE / ABOUT</span>
        </header>

        <main className="about-page container">
          <header className="about-page-intro">
            <p className="section-index">002 / ABOUT THE BUILDER</p>
            <h1>Bjay Duque</h1>
            <p className="about-page-role">CS Student</p>
          </header>

          <div className="about-page-copy">
            <p>I’m currently a 3rd Year Computer Science student at Interworld Colleges Foundation, Inc. I’m someone who’s always curious and likes learning new things, especially when it comes to technology and creative stuff.</p>
            <p>I enjoy working on different projects and trying out new ideas, but I’m not all about coding. I also do <strong>video editing, motion graphics, typography, and TikTok-style edit</strong>. I like playing around with effects, transitions, and visuals whenever I get the chance.</p>
            <p>When I’m not studying or working on something, you’ll probably find me playing <strong>online games or Steam games</strong>, especially story-driven games. I’m also into <strong>movies and music</strong>, which are usually my go-to ways to relax.</p>
            <p>I’m still learning and figuring things out as I go, but that’s what I enjoy about being a Computer Science student. There’s always something new to discover, something to try, and something I can improve on.</p>
          </div>

          <Link className="button button-primary about-page-contact" href="/#contact">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </main>
      </div>
    </div>
  );
}
