"use client";

import Reveal from "../ui/Reveal";
import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="no-border">
      <Reveal>
        <div className="contact-panel">
          <div className="eyebrow center">{t.contactEyebrow}</div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactDesc}</p>

          <div className="contact-links">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>{t.contactEmail}</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{t.contactLinkedin}</a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">{t.contactGithub}</a>
            <a className="btn btn-ghost" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">{t.contactWhatsapp}</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
