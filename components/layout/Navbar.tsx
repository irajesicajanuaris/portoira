"use client";

import { profile } from "../data/portfolio";

const links = [
  ["ABOUT", "#about"],
  ["SKILLS", "#skills"],
  ["EXPERIENCE", "#experience"],
  ["PROJECTS", "#projects"],
  ["CREDENTIALS", "#credentials"],
  ["CONTACT", "#contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-mark">
          <span className="dot" />
          {profile.name.toUpperCase()}
        </div>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}