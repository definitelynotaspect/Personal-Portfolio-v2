import { useEffect, useLayoutEffect, useState } from "react";
import { ArrowUpRight, Award, FolderKanban, Github, House, Linkedin, Mail, Menu, Moon, Search, Sun, UserRound, X } from "lucide-react";
import { Link } from "wouter";
import { certifications } from "./Home";
import { switchThemeWithWave } from "../theme";

export default function Credentials() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("barong-theme") as "light" | "dark") || "dark",
  );
  const [selectedCredential, setSelectedCredential] = useState<(typeof certifications)[number] | null>(null);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!selectedCredential) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCredential(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCredential]);

  const credentialGroups = [
    { number: "01", label: "Academic recognition", items: certifications.filter((item) => ["01", "02"].includes(item.number)) },
    { number: "02", label: "Technical learning", items: certifications.filter((item) => ["03", "04", "05", "10", "11", "12"].includes(item.number)) },
    { number: "03", label: "Development & systems", items: certifications.filter((item) => ["06", "07", "08", "09"].includes(item.number)) },
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
          <Link className="rail-link active" href="/credentials"><Award size={16} strokeWidth={1.7} /><span>Credentials</span><small>06</small></Link>
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
                <span>{group.number} — {group.label}</span>
                <small>{String(group.items.length).padStart(2, "0")} records</small>
              </div>
              <div className="credential-card-grid">
                {group.items.map((item) => (
                  <div
                    className="credential-card"
                    key={item.number}
                  >
                    <button className="credential-card-preview" type="button" onClick={() => setSelectedCredential(item)} aria-label={`View ${item.title} certificate`}>
                      <span className="credential-card-certificate">
                      {item.image ? (
                        <img src={item.image} alt={`${item.title} certificate`} loading="lazy" />
                      ) : (
                        <span className="credential-card-fallback" aria-label={`${item.title} certificate preview`}>
                          <strong>{item.issuer}</strong>
                          <span>Certificate of completion</span>
                          <small>{item.title}</small>
                        </span>
                      )}
                      <span className="credential-card-zoom" aria-hidden="true"><Search size={15} /></span>
                      </span>
                    </button>
                    <h2>{item.title}</h2>
                    <p>{item.issuer}{item.year && <><span aria-hidden="true"> • </span>{item.year}</>}</p>
                    <a className="credential-card-verify" href={item.credentialUrl ?? item.image} target="_blank" rel="noreferrer">&lt; verify certificate &gt; <ArrowUpRight size={13} /></a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      </div>

      {selectedCredential && (
        <div className="certificate-lightbox" role="presentation" onClick={() => setSelectedCredential(null)}>
          <article className="certificate-lightbox-panel" role="dialog" aria-modal="true" aria-label={`${selectedCredential.title} certificate`} onClick={(event) => event.stopPropagation()}>
            <button className="certificate-lightbox-close" type="button" onClick={() => setSelectedCredential(null)} aria-label="Close certificate preview"><X size={20} /></button>
            <div className="certificate-lightbox-image">
              {selectedCredential.image ? <img src={selectedCredential.image} alt={`${selectedCredential.title} certificate`} /> : <span className="credential-card-fallback"><strong>{selectedCredential.issuer}</strong><span>Certificate of completion</span><small>{selectedCredential.title}</small></span>}
            </div>
            <div className="certificate-lightbox-caption">
              <h2>{selectedCredential.title}</h2>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
