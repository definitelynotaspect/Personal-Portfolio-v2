import { useEffect, useLayoutEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  FolderKanban,
  Github,
  House,
  Linkedin,
  Mail,
  Moon,
  Menu,
  Sun,
  UserRound,
  X,
  ExternalLink,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { projects } from "./Home";
import { switchThemeWithWave } from "../theme";

export default function Projects() {
  const [, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(
    () =>
      (localStorage.getItem("barong-theme") as "light" | "dark") || "dark",
  );

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  // Prevent the page behind the modal from scrolling
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const groups = [
    { label: "Academic & systems", items: projects.slice(0, 3) },
    { label: "Personal projects", items: projects.slice(3) },
  ];

  return (
    <div className="site-shell projects-page-shell">
      <div className="paper-grain" aria-hidden="true" />

      {/* PORTFOLIO RAIL */}
      <aside className={`portfolio-rail ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Portfolio navigation">
        <button className="rail-mobile-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"><X size={19} /></button>
        <Link className="rail-brand" href="/">
          <span className="rail-monogram">BD</span>

          <span>
            <strong>Bjay Duque</strong>
            <small>CS student / builder</small>
          </span>
        </Link>

        <Link className="rail-contact" href="/#contact">
          <Mail size={15} />
          Start a conversation
          <ArrowUpRight size={14} />
        </Link>

        <nav className="rail-nav" aria-label="Portfolio sections">
          <span className="rail-label">Explore</span>

          <Link className="rail-link" href="/">
            <House size={16} strokeWidth={1.7} />
            <span>Home</span>
            <small>01</small>
          </Link>

          <Link className="rail-link" href="/about">
            <UserRound size={16} strokeWidth={1.7} />
            <span>About me</span>
            <small>02</small>
          </Link>

          <Link className="rail-link" href="/#tech-stack">
            <FolderKanban size={16} strokeWidth={1.7} />
            <span>Tech stack</span>
            <small>03</small>
          </Link>

          <Link className="rail-link" href="/about">
            <UserRound size={16} strokeWidth={1.7} />
            <span>Experience</span>
            <small>04</small>
          </Link>

          <Link className="rail-link active" href="/projects">
            <FolderKanban size={16} strokeWidth={1.7} />
            <span>Projects</span>
            <small>{String(projects.length).padStart(2, "0")}</small>
          </Link>

          <Link className="rail-link" href="/projects">
            <FolderKanban size={16} strokeWidth={1.7} />
            <span>Services / freelance</span>
            <small>06</small>
          </Link>

          <Link className="rail-link" href="/about">
            <UserRound size={16} strokeWidth={1.7} />
            <span>Personal</span>
            <small>07</small>
          </Link>

          <Link className="rail-link" href="/#contact">
            <Mail size={16} strokeWidth={1.7} />
            <span>Contact</span>
            <small>08</small>
          </Link>

          <Link className="rail-link" href="/credentials">
            <Award size={16} strokeWidth={1.7} />
            <span>Credentials</span>
            <small>09</small>
          </Link>

        </nav>

        <div className="rail-footer">
          <span>
            <i /> Available for thoughtful work
          </span>

          <div>
            <a
              href="https://github.com/definitelynotaspect"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>

            <a
              href="http://linkedin.com/in/bjay-duque-8aa7423aa/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>

            <button
              className="rail-theme-toggle"
              onClick={(event) => {
                const nextTheme = theme === "dark" ? "light" : "dark";
                switchThemeWithWave(event, nextTheme, () => setTheme(nextTheme));
              }}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? (
                <Sun size={15} />
              ) : (
                <Moon size={15} />
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* PAGE CONTENT */}
      <div className="page-content">
        <button className="mobile-page-menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu"><Menu size={20} /></button>
        <header className="credentials-page-header container">
          <button
            className="credentials-back"
            type="button"
            onClick={() => setLocation("/#projects")}
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </button>

          <span className="credentials-page-mark">
            BJAY DUQUE / SELECTED WORK
          </span>
        </header>

        <main className="projects-page container">
          <div className="projects-page-heading">
            <h1>Projects</h1>

            <p>
              Systems I’ve built for school, communities, and the things I
              build for myself.
            </p>
          </div>

          <div className="projects-archive">
            {groups.map((group) => (
              <section className="projects-group" key={group.label}>
                <div className="projects-group-label">
                  <span>{group.label}</span>

                  <small>
                    {String(group.items.length).padStart(2, "0")}
                  </small>
                </div>

                <div className="projects-list">
                  {group.items.map((project) => (
                    <button
                      key={project.number}
                      type="button"
                      className="project-list-row"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                      />

                      <div>
                        <h2>{project.title}</h2>

                        <p>{project.text}</p>
                      </div>

                      <span className="project-list-kind">
                        {project.kind}
                      </span>

                      <ArrowUpRight
                        className="project-list-arrow"
                        size={16}
                      />
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="detail-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="detail-modal">
            {/* CLOSE */}
            <button
              type="button"
              className="detail-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            {/* IMAGE */}
            <div className="detail-image-frame">
              <img
                className="detail-image"
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
              />
            </div>

            {/* TYPE */}
            <span className="project-meta">
              {selectedProject.kind}
            </span>

            {/* TITLE */}
            <h2>{selectedProject.title}</h2>

            {/* DESCRIPTION */}
            <p>
              {selectedProject.description ||
                selectedProject.text ||
                "Project details coming soon."}
            </p>

            {/* TECHNOLOGIES */}
            {selectedProject.technologies &&
              selectedProject.technologies.length > 0 && (
                <div className="project-modal-tech">
                  <span className="project-meta">TECHNOLOGIES</span>

                  <div className="project-modal-tags">
                    {selectedProject.technologies.map(
                      (technology: string) => (
                        <span key={technology}>{technology}</span>
                      ),
                    )}
                  </div>
                </div>
              )}

            {/* WEBSITE / GITHUB */}
            <div className="project-modal-actions">
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  <ExternalLink size={15} />
                  Visit Website
                  <ArrowUpRight size={15} />
                </a>
              )}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-quiet"
                >
                  <Github size={15} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
