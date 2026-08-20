"use client";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <Reveal>
        <SectionHeader number={t.aboutNum} title={t.aboutTitle} subtitle={t.aboutSub} />

        <div className="about-grid">
          <div>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>

          <div className="stat-panel">
            <div className="stat">
              <span className="label">{t.statFocus}</span>
              <span className="value">{t.statFocusVal}</span>
            </div>
            <div className="stat">
              <span className="label">{t.statPublication}</span>
              <span className="value">{t.statPublicationVal}</span>
            </div>
            <div className="stat">
              <span className="label">{t.statCopyright}</span>
              <span className="value">{t.statCopyrightVal}</span>
            </div>
            <div className="stat">
              <span className="label">{t.statCertification}</span>
              <span className="value">{t.statCertVal}</span>
            </div>
            <div className="stat">
              <span className="label">{t.statLanguages}</span>
              <span className="value">{t.statLangVal}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
