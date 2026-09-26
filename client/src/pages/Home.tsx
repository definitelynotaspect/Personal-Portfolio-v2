import { useLayoutEffect, useState, type FormEvent, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import {
  ArrowUpRight,
  Copy,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Terminal,
} from "lucide-react";

const portrait = "/assets/bjay-ascii-lowres.png";

const projects = [
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
    image: "/assets/project3.png",
    details:
      "HealthHub is a secure, all-in-one digital platform built to streamline campus medical services. By shifting from traditional paper records to an advanced digital infrastructure, our system ensures that students, faculty, and administrative staff receive prompt, organized, and high-quality healthcare support.",
  },
  {
    number: "03",
    kind: "DIGITAL DESIGN",
    title: "My Personal Portfolio",
    text: "This website is a formal, professional portfolio designed to showcase my background, skills, and work history.",
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
    text: "An enterprise-style lab exploring domains, policies, DNS, and the quiet infrastructure that keeps organizations moving.",
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
    text: "A data storytelling tool that turns clustering experiments into a clearer path from raw evidence to human insight.",
    tags: ["HTML", "CSS", "JavaScript"],
    tone: "ochre",
    image: "/assets/project4.png",
    details:
      "Here is a professional, comprehensive basketball portfolio template tailored for James Coliamco Lee. This layout highlights on-court production, physical attributes, and versatile skillset.",
  },
];

const certifications = [
  {
    number: "01",
    category: "ACADEMIC RECOGNITION",
    issuer: "ICF Paniqui",
    title: "Dean's Lister · 1st Year Gold Medalist",
    year: "2024 — 2025",
    code: "ICF / 2024-2025",
    image: "/assets/gold1.jpg",
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
    image: "/assets/gold2.jpg",
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
    image: "/assets/certificate33.jpg",
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
    image: "/assets/certificate6.png.png",
    verify:
      "Coding fundamentals certification from Grasshopper.",
    status: "DOCUMENTED",
  },
];

const technicalData = {
  Skills: [
    '"languages": "JavaScript, Java, C#"',
    '"web": "React, Node.js, HTML/CSS"',
    '"data": "MySQL, SQLite, Supabase"',
    '"hosting": "Vercel, Hostinger, Netlify"',
    '"tools": "Git, VS Code, PowerShell"',
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

  const [selectedItem, setSelectedItem] =
    useState<SelectedItem>(null);

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

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="site-header container">
        <a
          className="wordmark"
          href="#top"
          aria-label="Bjay Duque portfolio home"
        >
          <span>BJAY DUQUE</span>
        </a>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">
            Credentials
          </a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
        >
          {theme === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}

          <span>
            {theme === "dark" ? "Light" : "Dark"}
          </span>
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
            </div>

            <div className="social-row">
              <a
                href="https://github.com/definitelynotaspect"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={15} />
                GitHub
              </a>

              <a
                href="http://linkedin.com/in/bjay-duque-8aa7423aa/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>

              <span className="availability">
                <i />
                Available for thoughtful work
              </span>
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
                I’m a computer science student who loves
                building web apps, but I’m even happier
                when I’m working with networking,
                hardware, and software troubleshooting.
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

            <div className="technical-panel">
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
              05 / showing the working parts
            </span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <button
                className={`project-card ${project.tone}`}
                type="button"
                onClick={() =>
                  setSelectedItem(project)
                }
                key={project.number}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img
                      className="project-image"
                      src={project.image}
                      alt={`${project.title} preview`}
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />
                  ) : (
                    <span className="visual-number">
                      {project.number}
                    </span>
                  )}

                  <span className="visual-glyph">
                    {project.number === "01"
                      ? "∿"
                      : project.number === "02"
                        ? "▦"
                        : project.number === "03"
                          ? "⌁"
                          : project.number === "04"
                            ? "◌"
                            : "⌘"}
                  </span>

                  <span className="visual-caption">
                    open / read →
                  </span>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span>
                      {project.kind}
                    </span>

                    <ArrowUpRight size={14} />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
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
                04 / DOCUMENTED RECORDS
              </span>

              <p>
                Academic recognition, technical learning,
                and milestones collected along the way.
              </p>
            </div>
          </div>


          {/* Credential terminal */}
          <div className="credentials-terminal">

            {/* Terminal header */}
            <div className="credentials-terminal-bar">

              <div className="credentials-terminal-title">
                <Terminal size={14} />

                <span>
                  credentials.log
                </span>
              </div>

              <div className="credentials-terminal-status">
                <span className="status-dot" />

                RECORDS AVAILABLE
              </div>
            </div>


            {/* Credential records */}
            <div className="credential-list">

              {certifications.map((item) => (
                <button
                  className="credential-row"
                  type="button"
                  key={item.number}
                  onClick={() =>
                    setSelectedItem(item)
                  }
                >

                  {/* Number */}
                  <div className="credential-number">
                    {item.number}
                  </div>


                  {/* Credential information */}
                  <div className="credential-main">

                    <div className="credential-category">
                      {item.category}
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <div className="credential-meta">
                      <span>
                        {item.issuer}
                      </span>

                      <span className="meta-divider">
                        /
                      </span>

                      <span>
                        {item.year}
                      </span>
                    </div>
                  </div>


                  {/* Certificate preview */}
                  <div className="credential-preview">

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`${item.title} certificate`}
                      />
                    ) : (
                      <div className="credential-preview-empty">
                        <Terminal size={18} />
                      </div>
                    )}

                  </div>


                  {/* Status / action */}
                  <div className="credential-action">

                    <span className="credential-status">
                      <span className="status-dot" />

                      {item.status}
                    </span>

                    <span className="credential-open">
                      VIEW
                      <ArrowUpRight size={14} />
                    </span>

                  </div>

                </button>
              ))}

            </div>


            {/* Terminal footer */}
            <div className="credentials-terminal-footer">

              <span>
                <span className="terminal-prompt">
                  &gt;
                </span>

                cat ./credentials/*
              </span>

              <span>
                {String(
                  certifications.length,
                ).padStart(2, "0")}{" "}
                records
              </span>

            </div>
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
              className="detail-modal credential-detail-modal"
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
              {selectedItem.image && (
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


              {/* Credential detail */}
              {"category" in selectedItem && (
                <div className="credential-detail-content">

                  <div className="section-index">
                    {selectedItem.number} /{" "}
                    {selectedItem.category}
                  </div>

                  <h2>
                    {selectedItem.title}
                  </h2>

                  <div className="credential-detail-meta">

                    <span>
                      <b>issuer</b> /{" "}
                      {selectedItem.issuer}
                    </span>

                    <span>
                      <b>year</b> /{" "}
                      {selectedItem.year}
                    </span>

                    <span>
                      <b>record</b> /{" "}
                      {selectedItem.code}
                    </span>

                  </div>

                  <p>
                    {selectedItem.verify}
                  </p>

                  <div className="credential-detail-status">
                    <span className="status-dot" />
                    {selectedItem.status}
                  </div>

                </div>
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
  );
}