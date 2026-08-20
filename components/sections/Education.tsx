"use client";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { education } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education">
      <Reveal>
        <SectionHeader number={t.eduNum} title={t.eduTitle} subtitle={t.eduSub} />

        <div className="edu-card">
          <div>
            <h4>{t.eduDegree}</h4>
            <div className="org">{education.university} · {education.period}</div>
          </div>

          <div className="gpa-box">
            <div className="num">{education.gpa}</div>
            <div className="lbl">{t.eduGpa}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
