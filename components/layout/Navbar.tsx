"use client";

import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLanguage();

  const links = [
    [t.navAbout, "#about"],
    [t.navSkills, "#skills"],
    [t.navExperience, "#experience"],
    [t.navProjects, "#projects"],
    [t.navCredentials, "#credentials"],
    [t.navContact, "#contact"],
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-mark">
          <span className="dot" />
          {profile.name}
        </div>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}

          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            {lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
