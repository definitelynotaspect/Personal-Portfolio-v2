import { useLayoutEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Award, BadgeCheck, FolderKanban, Github, House, Linkedin, Mail, Menu, Moon, Sun, UserRound, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { certifications } from "./Home";
import { switchThemeWithWave } from "../theme";

export default function Credentials() {
  const [, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("barong-theme") as "light" | "dark") || "dark",
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  const credentialGroups = [
    { label: "Academic recognition", items: certifications.filter((item) => ["01", "02"].includes(item.number)) },
    { label: "Technical learning", items: certifications.filter((item) => ["03", "04", "05"].includes(item.number)) },
    { label: "Development & systems", items: certifications.filter((item) => ["06", "07", "08", "09"].includes(item.number)) },
  ];

  return (
    <div className="site-shell credentials-page-shell">
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
          <Link className="rail-link" href="/about"><UserRound size={16} strokeWidth={1.7} /><span>About me</span><small>02</small></Link>
          <Link className="rail-link" href="/#tech-stack"><FolderKanban size={16} strokeWidth={1.7} /><span>Tech stack</span><small>03</small></Link>
          <Link className="rail-link" href="/about"><UserRound size={16} strokeWidth={1.7} /><span>Experience</span><small>04</small></Link>
          <Link className="rail-link" href="/projects"><FolderKanban size={16} strokeWidth={1.7} /><span>Projects</span><small>05</small></Link>
          <Link className="rail-link" href="/projects"><FolderKanban size={16} strokeWidth={1.7} /><span>Services / freelance</span><small>06</small></Link>
          <Link className="rail-link" href="/about"><UserRound size={16} strokeWidth={1.7} /><span>Personal</span><small>07</small></Link>
          <Link className="rail-link" href="/#contact"><Mail size={16} strokeWidth={1.7} /><span>Contact</span><small>08</small></Link>
          <Link className="rail-link active" href="/credentials"><Award size={16} strokeWidth={1.7} /><span>Credentials</span><small>{String(certifications.length).padStart(2, "0")}</small></Link>
        </nav>
        <div className="rail-footer">
          <span><i /> Available for thoughtful work</span>
          <div>
            <a href="https://github.com/definitelynotaspect" target="_blank" rel="noreferrer"><Github size={15} /></a>
            <a href="http://linkedin.com/in/bjay-duque-8aa7423aa/" target="_blank" rel="noreferrer"><Linkedin size={15} /></a>
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
        <button
          className="credentials-back"
          type="button"
          onClick={() => setLocation("/#certifications")}
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </button>

        <span className="credentials-page-mark">BJAY DUQUE / RECORDS</span>
      </header>

      <main className="credentials-page container">
        <div className="credentials-page-heading">
          <div>
            <p className="section-index">004 / CREDENTIALS &amp; VERIFICATION</p>
            <h1>certifications</h1>
          </div>
          <p>
            Credentials across academic achievement, development, systems, and AI — each available to verify.
          </p>
        </div>

        <div className="credential-archive" aria-label="All credential records">
          {credentialGroups.map((group) => (
            <section className="credential-group" key={group.label}>
              <div className="credential-group-label">
                <span>{group.label}</span>
                <small>{String(group.items.length).padStart(2, "0")} records</small>
              </div>
              <div className="credential-card-grid">
                {group.items.map((item) => (
                  <a
                    className="credential-card"
                    href={item.credentialUrl ?? item.image}
                    target="_blank"
                    rel="noreferrer"
                    key={item.number}
                  >
                    <span className="credential-card-icon"><BadgeCheck size={22} /></span>
                    <h2>{item.title}</h2>
                    <p>{item.issuer}</p>
                    <span className="credential-card-verify">&lt; verify &gt; <ArrowUpRight size={13} /></span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}
