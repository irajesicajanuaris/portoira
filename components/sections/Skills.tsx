"use client";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiSqlite,
  SiDart,
  SiFlutter,
  SiFlask,
  SiBootstrap,
  SiOpencv,
  SiMysql,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiAndroidstudio,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap: Record<string, React.ReactNode> = {
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  PHP: <SiPhp />,
  SQL: <SiSqlite />,
  Dart: <SiDart />,
  Flutter: <SiFlutter />,
  Flask: <SiFlask />,
  Bootstrap: <SiBootstrap />,
  OpenCV: <SiOpencv />,
  MySQL: <SiMysql />,
  "Node.js": <SiNodedotjs />,
  Firebase: <SiFirebase />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  "VS Code": <VscVscode />,
  "Android Studio": <SiAndroidstudio />,
};

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
                  {group.chips.map((chip) => (
                    <div className="chip" key={chip}>
                      <span className="chip-icon">{iconMap[chip]}</span>
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
