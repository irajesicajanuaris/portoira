"use client";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillKeys = ["skillLanguages", "skillFrameworks", "skillDatabase", "skillTools"];

  return (
    <section id="skills">
      <Reveal>
        <SectionHeader number={t.skillsNum} title={t.skillsTitle} subtitle={t.skillsSub} />

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08} amount={0.3}>
              <div className="skill-card">
                <h3>{t[skillKeys[index]] || group.title}</h3>
                <div className="chip-row">
                  {group.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
