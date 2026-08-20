"use client";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <Reveal>
        <SectionHeader number={t.expNum} title={t.expTitle} subtitle={t.expSub} />

        <div className="tline">
          <Reveal delay={0} amount={0.28}>
            <div className="titem">
              <div className="when">{t.exp1When}</div>
              <h4>{t.expJob1Title}</h4>
              <div className="org">{t.expJob1Org}</div>
              <ul>
                <li>{t.expJob1Bullet1}</li>
                <li>{t.expJob1Bullet2}</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.09} amount={0.28}>
            <div className="titem">
              <div className="when">{t.exp2When}</div>
              <h4>{t.expJob2Title}</h4>
              <div className="org">{t.expJob2Org}</div>
              <ul>
                <li>{t.expJob2Bullet1}</li>
                <li>{t.expJob2Bullet2}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
