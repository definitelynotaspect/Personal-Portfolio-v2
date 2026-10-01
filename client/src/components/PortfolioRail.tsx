import { useEffect, useState } from "react";
import {
  ArrowUpRight, Award, Code2, Copy, Download, FolderKanban, Github, Hammer,
  House, Linkedin, Mail, Menu, Moon, Music2, Send, Sun, UserRound, X,
} from "lucide-react";
import { Link } from "wouter";

type RailPage = "home" | "about" | "projects" | "credentials";

const navItems = [
  { id: "home", label: "Home", icon: House, count: "01", href: "/" },
  { id: "about", label: "About me", icon: UserRound, count: "02", href: "/about" },
  { id: "tech", label: "Tech stack", icon: Code2, count: "03", href: "/#tech-stack" },
  { id: "experience", label: "Experience", icon: UserRound, count: "04", href: "/about" },
  { id: "projects", label: "Projects", icon: FolderKanban, count: "05", href: "/projects" },
  { id: "services", label: "Services / freelance", icon: Hammer, count: "06", href: "/projects" },
  { id: "personal", label: "Personal", icon: Music2, count: "07", href: "/about" },
  { id: "contact", label: "Contact", icon: Mail, count: "08", href: "/#contact" },
  { id: "credentials", label: "Credentials", icon: Award, count: "09", href: "/credentials" },
] as const;

export function MobileRailToggle({ onClick }: { onClick: () => void }) {
  return <button className="mobile-page-menu-toggle" type="button" onClick={onClick} aria-label="Open navigation menu"><Menu size={20} /></button>;
}

export default function PortfolioRail({
  activePage,
  menuOpen,
  onMenuOpenChange,
  theme,
  onThemeToggle,
}: {
  activePage: RailPage;
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
  theme: "light" | "dark";
  onThemeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat("en-PH", {
      timeZone: "Asia/Manila", hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    }).format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("duquebjay@gmail.com");
  };

  return (
    <aside className={`portfolio-rail ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Portfolio navigation">
      <button className="rail-mobile-close" type="button" onClick={() => onMenuOpenChange(false)} aria-label="Close navigation menu"><X size={19} /></button>
      <Link className="rail-brand" href="/" onClick={() => onMenuOpenChange(false)}>
        <span className="rail-monogram">BD</span><span><strong>Bjay Duque</strong><small>CS student / builder</small></span>
      </Link>
      <a className="rail-contact" href="/#contact" onClick={() => onMenuOpenChange(false)}><Mail size={15} />Start a conversation<ArrowUpRight size={14} /></a>
      <nav className="rail-nav" aria-label="Portfolio sections">
        <span className="rail-label">Explore</span>
        {navItems.map(({ id, label, icon: Icon, count, href }) => (
          <Link className={`rail-link ${id === activePage ? "active" : ""}`} href={href} key={id} onClick={() => onMenuOpenChange(false)}>
            <Icon size={16} strokeWidth={1.7} /><span>{label}</span><small>{count}</small>
          </Link>
        ))}
      </nav>
      <section className="rail-status" aria-label="Current availability">
        <div className="rail-status-heading"><span>Right now</span><span className="rail-live"><i /> Live</span></div>
        <div className="rail-clock"><span>{time || "--:--:--"} PHT</span><small>Central Luzon</small></div>
        <div className="rail-building"><Hammer size={14} /><span><small>Building</small>ICF HealthHub</span></div>
        <div className="rail-stack"><div><Code2 size={14} /> Stack</div><p>{["React", "Node", "Tailwind", "MySQL", "C++"].map((item) => <span key={item}>{item}</span>)}</p></div>
      </section>
      <div className="rail-footer">
        <a className="rail-resume" href="/assets/Bjay%20Duque%20Resume.pdf" download><Download size={14} /> Download résumé</a>
        <a className="rail-email" href="mailto:duquebjay@gmail.com"><Mail size={14} /><span>duquebjay@gmail.com</span></a>
        <button className="rail-copy-email" type="button" onClick={copyEmail}><Copy size={14} /> Copy email</button>
        <span><i /> Available for thoughtful work</span>
        <div>
          <a href="https://github.com/definitelynotaspect" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
          <a href="http://linkedin.com/in/bjay-duque-8aa7423aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={15} /></a>
          <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={15} /></a>
          <button className="rail-theme-toggle" onClick={onThemeToggle} aria-label="Toggle color theme">{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</button>
        </div>
      </div>
    </aside>
  );
}
