import { useEffect, useLayoutEffect, useState, type FormEvent, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Link } from "wouter";
import {
  ArrowUpRight,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  Terminal,
  UserRound,
  FolderKanban,
  Award,
  House,
  FileText,
  Code2,
  Search,
} from "lucide-react";

const portrait = "/assets/bjayduque.png";

export const projects = [
  {
    number: "01",
    kind: "SOFTWARE ENGINEERING 2",
    title: "CICS Web",
    text: "Welcome to the College of Information and Computer Studies (CICS), the premier tech hub of Interworld Colleges Foundation Inc.",
    tags: ["React", "Node.js", "MySQL"],
    tone: "sage",
    image: "/assets/icf-website.png",
    details:
      "In a world driven by rapid technological innovation, CICS is dedicated to transforming ambitious students into skilled, ethical, and global IT professionals. We blend rigorous academic theory with intensive, practical application to prepare you for a high-impact career in the tech industry.",
  },
  {
    number: "02",
    kind: "PROGRAMMING LANGUAGES",
    title: "HealthHub",
    text: "Welcome to HealthHub, the official healthcare and clinic management system designed exclusively for Interworld Colleges Foundation, Inc.",
    tags: ["React", "Express", "MySQL"],
    tone: "lilac",
    image: "/assets/HealthHub.png",
    details:
      "HealthHub is a secure, all-in-one digital platform built to streamline campus medical services. By shifting from traditional paper records to an advanced digital infrastructure, our system ensures that students, faculty, and administrative staff receive prompt, organized, and high-quality healthcare support.",
  },
  {
    number: "03",
    kind: "DIGITAL DESIGN",
    title: "My Personal Portfolio",
    text: "This website is a formal, professional portfolio designed to showcase my educational background, skills, and projects.",
    tags: ["HTML", "CSS", "JavaScript"],
    tone: "sky",
    image: "/assets/personal-portfolio.png",
    details:
      "This website serves as a centralized digital showcase of my professional background, skills, and completed projects. Designed with a clean and formal aesthetic, the site aims to provide visitors, potential employers, and collaborators with a clear, concise overview of my expertise.",
  },
  {
    number: "04",
    kind: "FREELANCE",
    title: "Personal Band Portfolio",
    text: "A personal frontend band portfolio showcasing Jairus Guirao’s journey, skills, and background in the music and band industry.",
    tags: ["HTML", "CSS", "JavaScript"],
    tone: "rust",
    image: "/assets/band-portfolio.png",
    details:
      "Welcome to the official digital home of Jairtus Guirao. We blend heavy grooves, atmospheric melodies, and raw energy to create a sound that is entirely our own. .",
  },
  {
    number: "05",
    kind: "FREELANCE",
    title: "Personal Basketball Portfolio",
    text: "A personal frontend basketball portfolio showcasing James Coliamco Lee’s journey, skills, and background in the sport.",
    tags: ["HTML", "CSS", "JavaScript"],
    tone: "ochre",
    image: "/assets/basketball-portfolio.png",
    details:
      "Here is a professional, comprehensive basketball portfolio template tailored for James Coliamco Lee. This layout highlights on-court production, physical attributes, and versatile skillset.",
  },
];

export const certifications = [
  {
    number: "01",
    category: "ACADEMIC RECOGNITION",
    issuer: "ICF Paniqui",
    title: "Dean's Lister · 1st Year Gold Medalist",
    year: "2024 — 2025",
    code: "ICF / 2024-2025",
    image: "/assets/1stYearGold.jpg",
    verify:
      "Academic recognition from Interworld Colleges Foundation, Inc.",
    status: "DOCUMENTED",
  },
  {
    number: "02",
    category: "ACADEMIC RECOGNITION",
    issuer: "ICF Paniqui",
    title: "Dean's Lister · 2nd Year Gold Medalist",
    year: "2025 — 2026",
    code: "ICF / 2025-2026",
    image: "/assets/2ndYearGold.jpg",
    verify:
      "Academic recognition from Interworld Colleges Foundation, Inc.",
    status: "DOCUMENTED",
  },
  {
    number: "03",
    category: "TECHNICAL LEARNING",
    issuer: "Dr. Yanga's College, Inc.",
    title: "Robotics Training",
    year: "2026",
    code: "SAPIENTA / 2026",
    image: "/assets/RoboticsCertificate.jpg",
    verify:
      "Robotics certification from Sapienta Ideation Center.",
    status: "DOCUMENTED",
  },
  {
    number: "04",
    category: "PROGRAMMING",
    issuer: "Grasshopper",
    title: "Coding Fundamentals",
    year: "2022",
    code: "GRASSHOPPER / 2022",
    image: "/assets/GrasshopperCertificate.png",
    verify:
      "Coding fundamentals certification from Grasshopper.",
    status: "DOCUMENTED",
  },
  {
    number: "05",
    category: "ARTIFICIAL INTELLIGENCE",
    issuer: "Cisco Networking Academy",
    title: "Introduction to Modern AI",
    year: "September 2026",
    code: "CISCO / 2026",
    image: "/assets/IntroductionToModernAI.png",
    verify: "Student-level credential for completing Cisco Networking Academy's Introduction to Modern AI course.",
    credentialUrl: "https://www.credly.com/badges/0b527107-9300-4ed9-9224-ca54212fda6e/public_url",
    status: "DOCUMENTED",
  },
  {
    number: "06",
    category: "PROGRAMMING",
    issuer: "HackerRank",
    title: "Java (Basic)",
    year: "September 2026",
    code: "HACKERRANK / JAVA",
    image: "/assets/JavaBasics.png",
    verify: "HackerRank skill certification for Java programming fundamentals.",
    credentialUrl: "https://www.hackerrank.com/certificates/71ea5271dc59",
    status: "DOCUMENTED",
  },
  {
    number: "07",
    category: "PROGRAMMING",
    issuer: "HackerRank",
    title: "Node.js (Intermediate)",
    year: "2026",
    code: "HACKERRANK / NODEJS",
    image: "/assets/Nodejs.png",
    verify: "HackerRank skill certification for intermediate Node.js development.",
    credentialUrl: "https://www.hackerrank.com/certificates/9393a3506d1a",
    status: "DOCUMENTED",
  },
  {
    number: "08",
    category: "SYSTEMS",
    issuer: "Cisco Networking Academy",
    title: "Operating Systems Basics",
    year: "September 2026",
    code: "CISCO / 2026",
    image: "/assets/OperatingSytemsCertificate.jpg",
    verify: "Student-level credential for completing Cisco Networking Academy's Operating Systems Basics course.",
    credentialUrl: "https://www.credly.com/badges/4752102e-0c2f-4218-837a-53585cb7317d/public_url",
    status: "DOCUMENTED",
  },
  {
    number: "09",
    category: "FRONTEND DEVELOPMENT",
    issuer: "HackerRank",
    title: "React (Basic)",
    year: "September 2026",
    code: "HACKERRANK / REACT",
    image: "/assets/ReactBasics.png",
    verify: "HackerRank skill certification for React fundamentals.",
    credentialUrl: "https://www.hackerrank.com/certificates/ab2dd5b7ccfe",
    status: "DOCUMENTED",
  },
  {
    number: "10",
    category: "VERSION CONTROL",
    issuer: "DataCamp",
    title: "Introduction to Git",
    year: "",
    code: "DATACAMP / GIT",
    image: "/assets/certificate%20(1)-1.png",
    verify: "DataCamp statement of accomplishment for Introduction to Git.",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cd51a3b7b142fe1792d2e4f845d6167054dfcb3d",
    status: "DOCUMENTED",
  },
  {
    number: "11",
    category: "DATABASES",
    issuer: "DataCamp",
    title: "Introduction to SQL",
    year: "",
    code: "DATACAMP / SQL",
    image: "/assets/certificate%20(2)-1.png",
    verify: "DataCamp statement of accomplishment for Introduction to SQL.",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/28432345c401f57bfffdec86b20d95b0a76a6f0e",
    status: "DOCUMENTED",
  },
  {
    number: "12",
    category: "ARTIFICIAL INTELLIGENCE",
    issuer: "Mar Wie Ang · AI Dev PH",
    title: "Fundamentals of AI-Driven Development",
    year: "",
    code: "AI DEV PH / AI",
    image: "/assets/certificate%20ai%20driven.png",
    verify: "Certificate for completing Fundamentals of AI-Driven Development with Mar Wie Ang · AI Dev PH.",
    credentialUrl: "https://course.marwieang.com/verify/MWA-F3AB-C7P6",
    status: "DOCUMENTED",
  },
];

const technicalData = {
  Skills: [
    '"frontend": "React, JavaScript, HTML/CSS"',
    '"backend": "Node.js, Express.js, PHP"',
    '"database": "MySQL, SQLite, Supabase"',
    '"hosting": "Vercel, Hostinger, Netlify"',
    '"tools": "Git, Github, VS Code"',
  ],
  Education: [
    '"degree": "Bachelor of Science in Computer Science"',
    '"school": "Interworld Colleges Foundation Inc."',
    '"focus": "Web Development"',
    '"status": "3rd Year College Student"',
  ],
  Interests: [
    '"curious_about": "Cybersecurity"',
    '"building": "Useful digital systems"',
    '"learning": "Software Architecture"',
    '"principle": "Make the hard part obvious"',
  ],
};

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => {
    finished: Promise<void>;
  };
};

type Project = (typeof projects)[number];

type Certification = (typeof certifications)[number];

type SelectedItem = Project | Certification | null;

export default function Home() {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (localStorage.getItem("barong-theme") as Theme) || "dark",
  );

  const [tab, setTab] =
    useState<keyof typeof technicalData>("Skills");

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("top");

  const [selectedItem, setSelectedItem] =
    useState<SelectedItem>(null);

  useEffect(() => {
    if (!selectedItem || !("category" in selectedItem)) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedItem]);

  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [contactMessage, setContactMessage] = useState("");

  useLayoutEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark",
    );

    localStorage.setItem("barong-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = ["top", "about", "projects", "certifications", "contact"];
    const updateActiveSection = () => {
      const current = sections.reduce((closest, id) => {
        const element = document.getElementById(id);
        if (!element) return closest;
        return Math.abs(element.getBoundingClientRect().top - 130) < Math.abs((document.getElementById(closest)?.getBoundingClientRect().top ?? Infinity) - 130)
          ? id
          : closest;
      }, "top");
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const toggleTheme = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    const root = document.documentElement;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const viewTransitionDocument =
      document as ViewTransitionDocument;

    root.style.setProperty(
      "--theme-wave-x",
      `${event.clientX}px`,
    );

    root.style.setProperty(
      "--theme-wave-y",
      `${event.clientY}px`,
    );

    const updateTheme = () => {
      flushSync(() => setTheme(nextTheme));
    };

    if (
      !viewTransitionDocument.startViewTransition ||
      reduceMotion
    ) {
      updateTheme();
      return;
    }

    root.classList.add("theme-transitioning");

    const transition =
      viewTransitionDocument.startViewTransition(
        updateTheme,
      );

    transition.finished.finally(() => {
      root.classList.remove("theme-transitioning");
    });
  };

  const scrollTo = (id: string) => {
    setActiveSection(id.replace("#", ""));
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const sendContactNote = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fields = new FormData(form);

    setContactStatus("sending");
    setContactMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: fields.get("email"),
          subject: fields.get("subject"),
          message: fields.get("message"),
        }),
      });

      if (
        !response.headers
          .get("content-type")
          ?.includes("application/json")
      ) {
        const email = String(
          fields.get("email") || "",
        );

        const subject = String(
          fields.get("subject") || "",
        );

        const message = String(
          fields.get("message") || "",
        );

        const mailto = new URL(
          "mailto:duquebjay@gmail.com",
        );

        mailto.searchParams.set(
          "subject",
          subject,
        );

        mailto.searchParams.set(
          "body",
          `From: ${email}\n\n${message}`,
        );

        window.location.href = mailto.toString();

        setContactStatus("sent");
        setContactMessage(
          "Your email app is ready with this note.",
        );

        return;
      }

      const result = (await response
        .json()
        .catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Your note could not be sent.",
        );
      }

      form.reset();

      setContactStatus("sent");

      setContactMessage(
        "Thanks — your note has been sent.",
      );
    } catch (error) {
      setContactStatus("error");

      setContactMessage(
        error instanceof Error
          ? error.message
          : "Your note could not be sent.",
      );
    }
  };

  return (
    <div className="site-shell">
      <div
        className="paper-grain"
        aria-hidden="true"
      />

      <aside className={`portfolio-rail ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Portfolio navigation">
        <button
          className="rail-mobile-close"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={19} />
        </button>
        <a className="rail-brand" href="#top" onClick={() => { setMenuOpen(false); scrollTo("#top"); }}>
          <span className="rail-monogram">BD</span>
          <span>
            <strong>Bjay Duque</strong>
            <small>CS student / builder</small>
          </span>
        </a>

        <a className="rail-contact" href="#contact" onClick={() => { setMenuOpen(false); scrollTo("#contact"); }}>
          <Mail size={15} />
          Start a conversation
          <ArrowUpRight size={14} />
        </a>

        <nav className="rail-nav" aria-label="Portfolio sections">
          <span className="rail-label">Explore</span>
          {[
            { id: "top", label: "Home", icon: House, count: "01" },
            { id: "about", label: "About me", icon: UserRound, count: "02" },
            { id: "tech-stack", label: "Tech stack", icon: Code2, count: "03" },
            { id: "experience", label: "Experience", icon: UserRound, count: "04", href: "/about" },
            { id: "projects", label: "Projects", icon: FolderKanban, count: String(projects.length).padStart(2, "0") },
            { id: "certifications", label: "Credentials", icon: Award, count: "06" },
          ].map(({ id, label, icon: NavIcon, count, href }) => {
            return (
              <a
                className={`rail-link ${id === "top" ? "active" : ""}`}
                href={href ?? (id === "about" ? "/about" : id === "certifications" ? "/credentials" : id === "projects" ? "/projects" : `#${id}`)}
                key={id}
                onClick={() => {
                  setMenuOpen(false);
                  if (!href && id !== "about" && id !== "certifications" && id !== "projects") scrollTo(`#${id}`);
                }}
              >
                <NavIcon size={16} strokeWidth={1.7} />
                <span>{label}</span>
                <small>{count}</small>
              </a>
            );
          })}
        </nav>

        <div className="rail-footer">
          <span><i /> Available for thoughtful work</span>
          <div>
            <a href="https://github.com/definitelynotaspect" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
            <a href="http://linkedin.com/in/bjay-duque-8aa7423aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <button className="rail-theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </aside>

      <div className="page-content">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="site-header container">
        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>

        <a
          className="wordmark"
          href="#top"
          aria-label="Bjay Duque portfolio home"
          onClick={() => setMenuOpen(false)}
        >
          <span>BJAY DUQUE</span>
        </a>

        <nav
          id="primary-navigation"
          className={`desktop-nav${menuOpen ? " mobile-menu-open" : ""}`}
          aria-label="Primary navigation"
        >
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/credentials" onClick={() => setMenuOpen(false)}>Credentials</Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </header>

      <main id="top">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="hero container">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              001 / COMPUTER SCIENCE · BUILDER · SYSTEMS
              CURIOUS
            </p>

            <h1>
              Hello, I’m
              <br />
              <em>Bjay Duque.</em>
            </h1>

            <p className="hero-intro">
              I'm a 3rd Year Computer Science student who
              loves to build thoughtful digital experiences
              where ideas, data, and technology come
              together. From web applications to system
              development, I enjoy solving technical
              challenges and turning complex concepts into
              practical, useful solutions.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() =>
                  scrollTo("#contact")
                }
              >
                Get in touch{" "}
                <ArrowUpRight size={16} />
              </button>

              <a
                className="button button-quiet"
                href="#projects"
              >
                Read the work{" "}
                <ArrowUpRight size={16} />
              </a>

              <a
                className="button button-quiet"
                href="/assets/Bjay%20Duque%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume <FileText size={15} />
              </a>
            </div>

          </div>

          <aside
            className="hero-terminal reveal delay-1"
            aria-label="Profile terminal"
          >
            <div className="terminal-top">
              <span>
                <Terminal size={13} />
                profile.txt
              </span>

              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
            </div>

            <div className="portrait-wrap">
              <img
                src={portrait}
                alt="Bjay Duque rendered as a low-resolution ASCII portrait in a barong"
              />
            </div>

            <div className="terminal-lines">
              <span>
                <b>name</b> / Bjay Duque
              </span>

              <span>
                <b>base</b> / Philippines, Tarlac
              </span>

              <span>
                <b>state</b> / open to opportunity
                <span className="cursor">_</span>
              </span>
            </div>
          </aside>
        </section>


        {/* =====================================================
            ABOUT
            ===================================================== */}

        <section
          id="about"
          className="section container about-section"
        >
          <div className="section-index">
            002 / ABOUT THE BUILDER
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <h2>
                Lifelong
                <br />
                <em>tinkerer.</em>
              </h2>

              <p>
                I'm a Computer Science student who's always
                curious about technology and passionate about
                learning, and eager to explore new ideas and
                build creative projects.

              </p>

              <p>
                Ever since I was a kid, I’ve had a natural
                curiosity for tinkering with hardware,
                networks, and system setups. My best work
                happens where careful thinking meets a
                little hands-on friction.
              </p>

              <div className="signature">
                <span className="signature-mark">
                  B/D
                </span>

                <span>
                  <strong>Bjay Duque</strong>

                  <small>
                    Bachelor of Science in Computer
                    Science · Web Development
                  </small>
                </span>
              </div>
            </div>

            <div id="tech-stack" className="technical-panel">
              <div className="panel-heading">
                <span>
                  technical_snapshot.json
                </span>

                <div className="tabs">
                  {(
                    Object.keys(
                      technicalData,
                    ) as Array<
                      keyof typeof technicalData
                    >
                  ).map((item) => (
                    <button
                      className={
                        tab === item
                          ? "active"
                          : ""
                      }
                      key={item}
                      onClick={() =>
                        setTab(item)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="code-window">
                <div className="code-bar">
                  <i />
                  <i />
                  <i />

                  <span>
                    ~/bjay/portfolio
                  </span>
                </div>

                <pre>
                  <code>
                    <span className="punct">
                      &#123;
                    </span>

                    {"\n  "}

                    <span className="key">
                      {tab.toLowerCase()}
                    </span>

                    :{" "}
                    <span className="punct">
                      [
                    </span>

                    {"\n"}

                    {technicalData[
                      tab
                    ].map((line) => (
                      <span
                        className="code-line"
                        key={line}
                      >
                        {"    "}
                        <span className="string">
                          {line}
                        </span>
                        ,
                        {"\n"}
                      </span>
                    ))}

                    {"  "}

                    <span className="punct">
                      ]
                    </span>

                    {"\n"}

                    <span className="punct">
                      &#125;
                    </span>

                    <span className="cursor">
                      _
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>


                {/* =====================================================
            PROJECTS
            ===================================================== */}

        <section
          id="projects"
          className="section container projects-section"
        >
          <div className="section-heading">
            <div>
              <div className="section-index">
                003 / SELECTED WORK
              </div>

              <h2>
                Projects &amp; case studies
              </h2>
            </div>

            <span className="count">
              03 / SELECTED PROJECTS
            </span>
          </div>

          <div className="home-project-preview">
            <div className="home-project-group">
              <div className="home-project-group-label">
                <span>Featured projects</span>
                <small>03</small>
              </div>

              <div className="projects-list">
                {projects.slice(0, 3).map((project) => (
                  <button
                    className="project-list-row home-project-row"
                    type="button"
                    key={project.number}
                    onClick={() => setSelectedItem(project)}
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
            </div>

            <Link
              className="home-projects-link"
              href="/projects"
            >
              Show all {String(projects.length).padStart(2, "0")} projects
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>


        {/* =====================================================
            004 / CREDENTIALS & VERIFICATION
            ===================================================== */}

        <section
          id="certifications"
          className="section container credentials-section"
        >
          <div className="section-heading credentials-heading">

            <div>
              <div className="section-index">
                004 / CREDENTIALS &amp; VERIFICATION
              </div>

              <h2>
                Proof of
                <br />
                <em>practice.</em>
              </h2>
            </div>

            <div className="credentials-intro">
              <span className="count">
                {String(certifications.length).padStart(2, "0")} / DOCUMENTED RECORDS
              </span>

              <p>
                Academic recognition, technical learning,
                and milestones collected along the way.
              </p>
            </div>
          </div>


          <div className="home-credential-preview">
            <div className="credential-card-grid">
              {certifications.slice(0, 3).map((item) => (
                <div
                  className="credential-card"
                  key={item.number}
                >
                  <button className="credential-card-preview" type="button" onClick={() => setSelectedItem(item)} aria-label={`View ${item.title} certificate`}>
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
                  <h3>{item.title}</h3>
                  <p>{item.issuer}{item.year && <><span aria-hidden="true"> • </span>{item.year}</>}</p>
                  <a className="credential-card-verify" href={item.credentialUrl ?? item.image} target="_blank" rel="noreferrer">&lt; verify certificate &gt; <ArrowUpRight size={13} /></a>
                </div>
              ))}
            </div>

            <Link className="home-credentials-link" href="/credentials">
              Show all {String(certifications.length).padStart(2, "0")} credentials <ArrowUpRight size={15} />
            </Link>
          </div>

        </section>


        {/* =====================================================
            CONTACT
            ===================================================== */}

        <section
          id="contact"
          className="section container contact-section"
        >
          <div className="section-index">
            005 / OPEN A CHANNEL
          </div>

          <h2>
            Let’s make useful
            <br />
            <em>things.</em>
          </h2>

          <div className="contact-card">

            <div className="contact-copy">
              <p className="eyebrow">
                CURRENTLY OPEN TO
              </p>

              <h3>
                Good problems with kind people.
              </h3>

              <p>
                If you’re working on something that
                needs a thoughtful frontend, a clearer
                system, or just a second pair of
                technical eyes, send a note.
              </p>

              <div className="contact-detail">
                <Mail size={16} />

                <a href="mailto:duquebjay@gmail.com">
                  duquebjay@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <Copy size={16} />

                <span>
                  Usually replies within 24 hours
                </span>
              </div>
            </div>


            <form
              className="contact-form"
              onSubmit={sendContactNote}
            >
              <label>
                Your email

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label>
                Subject

                <input
                  type="text"
                  name="subject"
                  placeholder="A good problem to solve"
                  required
                />
              </label>

              <label>
                Message

                <textarea
                  name="message"
                  placeholder="Tell me a little about the work..."
                  rows={4}
                  required
                />
              </label>

              <button
                className="button button-primary"
                type="submit"
                disabled={
                  contactStatus === "sending"
                }
              >
                {contactStatus === "sending"
                  ? "Sending…"
                  : "Send the note"}

                <ArrowUpRight size={16} />
              </button>

              {contactStatus !== "idle" && (
                <p
                  className={`form-status ${contactStatus}`}
                  aria-live="polite"
                >
                  {contactMessage}
                </p>
              )}
            </form>

          </div>
        </section>


        {/* =====================================================
            DETAIL MODAL
            ===================================================== */}

        {selectedItem && (
          <div
            className="detail-backdrop"
            onClick={() =>
              setSelectedItem(null)
            }
          >
            <article
              className={`detail-modal ${"category" in selectedItem ? "certificate-lightbox-panel" : "credential-detail-modal"}`}
              role="dialog"
              aria-modal="true"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="detail-close"
                type="button"
                onClick={() =>
                  setSelectedItem(null)
                }
                aria-label="Close details"
              >
                ×
              </button>


              {/* Image */}
              {selectedItem.image && !("category" in selectedItem) && (
                <div className="detail-image-frame">
                  <img
                    className="detail-image"
                    src={selectedItem.image}
                    alt={`${selectedItem.title} preview`}
                  />
                </div>
              )}


              {/* Project detail */}
              {"kind" in selectedItem && (
                <>
                  <div className="section-index">
                    {selectedItem.kind}
                  </div>

                  <h2>
                    {selectedItem.title}
                  </h2>

                  <p>
                    {selectedItem.details}
                  </p>

                  {selectedItem.tags && (
                    <div className="tag-row">
                      {selectedItem.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ),
                      )}
                    </div>
                  )}
                </>
              )}


              {/* Credential full-screen preview */}
              {"category" in selectedItem && (
                <>
                  <div className="certificate-lightbox-image">
                    {selectedItem.image ? <img src={selectedItem.image} alt={`${selectedItem.title} certificate`} /> : <span className="credential-card-fallback"><strong>{selectedItem.issuer}</strong><span>Certificate of completion</span><small>{selectedItem.title}</small></span>}
                  </div>
                  <div className="certificate-lightbox-caption">
                    <span>{selectedItem.category}</span>
                    <h2>{selectedItem.title}</h2>
                    <p>{selectedItem.issuer}{selectedItem.year && <> <i aria-hidden="true">•</i> {selectedItem.year}</>}</p>
                  </div>
                </>
              )}

            </article>
          </div>
        )}
      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="site-footer container">
        <span>
          © 2026 @definitelynot.aspect
        </span>

        <span>
          Built with attention /{" "}
          <a href="#top">
            Back to top ↑
          </a>
        </span>
      </footer>
      </div>
    </div>
  );
}
