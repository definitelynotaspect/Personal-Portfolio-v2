import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Server,
  type LucideIcon,
} from "lucide-react";

type StackGroup = {
  number: string;
  title: string;
  icon: LucideIcon;
  skills: Array<{ name: string; image: string; monochrome?: boolean }>;
};

const stackGroups: StackGroup[] = [
  {
    number: "01", title: "Frontend & UI", icon: Code2,
    skills: [
      { name: "React", image: "/assets/icons8-react-native-96.png" },
      { name: "JavaScript", image: "/assets/icons8-javascript-96.png" },
      { name: "HTML", image: "/assets/icons8-html-5-96.png" },
      { name: "CSS", image: "/assets/icons8-css3-96.png" },
    ],
  },
  {
    number: "02", title: "Backend", icon: Server,
    skills: [
      { name: "Node.js", image: "/assets/icons8-nodejs-96.png" },
      { name: "Express.js", image: "/assets/icons8-express-js-100.png", monochrome: true },
      { name: "PHP", image: "/assets/icons8-php-96.png" },
    ],
  },
  {
    number: "03", title: "Databases", icon: Database,
    skills: [
      { name: "MySQL", image: "/assets/icons8-mysql-logo-96.png" },
      { name: "SQLite", image: "/assets/sqlite-transparent.png" },
      { name: "Supabase", image: "/assets/supabase-icon-5uqgeeqeknngv9las8zeef.webp" },
    ],
  },
  {
    number: "04", title: "Hosting", icon: Cloud,
    skills: [
      { name: "Vercel", image: "/assets/vercel-transparent.png", monochrome: true },
      { name: "Hostinger", image: "/assets/hostinger-icon.avif" },
      { name: "Netlify", image: "/assets/netlify-transparent.png" },
    ],
  },
  {
    number: "05", title: "Tools", icon: GitBranch,
    skills: [
      { name: "Git", image: "/assets/git-transparent.png" },
      { name: "GitHub", image: "/assets/github-transparent.png", monochrome: true },
      { name: "VS Code", image: "/assets/vscode-transparent.png" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="site-shell tech-stack-page-shell">
      <div className="paper-grain" aria-hidden="true" />
      <div className="page-content">
        <main className="tech-stack-page container">
          <header className="tech-stack-page-intro">
            <p className="section-index">003 / TECH STACK</p>
            <h1>Tools I <em>build</em> with.</h1>
            <p>The technologies I reach for when building thoughtful, functional web experiences.</p>
          </header>

          <div className="tech-stack-page-groups">
            {stackGroups.map(({ number, title, icon: Icon, skills }) => (
              <section className="tech-stack-page-group" key={title}>
                <header>
                  <span>{number}</span>
                  <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                  <h2>{title}</h2>
                </header>
                <div className="tech-stack-page-chips">
                  {skills.map(({ name, image, monochrome }) => (
                    <span key={name}>
                      <img className={`tech-logo ${monochrome ? "tech-logo-monochrome" : ""}`} src={image} alt={`${name} logo`} />
                      {name}
                    </span>
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
