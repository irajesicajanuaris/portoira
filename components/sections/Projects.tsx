"use client";

import { useState } from "react";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import ProjectModal from "../ui/ProjectModal";

import { projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

import type { Project } from "../types/portfolio";

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const translatedProjects: Project[] = [
    { ...projects[0], title: t.proj1Title, desc: t.proj1Desc, badge: t.projBadge },
    { ...projects[1], title: t.proj2Title, desc: t.proj2Desc, badge: t.projBadge2 },
    { ...projects[2], title: t.proj3Title, desc: t.proj3Desc, badge: t.projBadge3 },
    { ...projects[3], title: t.proj4Title, desc: t.proj4Desc, badge: t.projBadge4 },
  ];

  return (
    <section id="projects">
      <Reveal>
        <SectionHeader number={t.projNum} title={t.projTitle} subtitle={t.projSub} />

        <div className="proj-grid">
          {translatedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08} amount={0.3}>
              <div className="proj-card" onClick={() => setSelectedProjectIndex(index)}>
                <div className="proj-tagbar">
                  <span className="proj-id">{project.id}</span>
                  <span className="proj-badge">{project.badge}</span>
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="stack-row">
                  {project.stack.map((stack) => (
                    <span className="stack-chip" key={stack}>{stack}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {selectedProjectIndex !== null && (
        <ProjectModal
          project={translatedProjects[selectedProjectIndex]}
          currentIndex={selectedProjectIndex}
          totalProjects={translatedProjects.length}
          onClose={() => setSelectedProjectIndex(null)}
          onPreviousProject={() =>
            setSelectedProjectIndex(selectedProjectIndex === 0 ? translatedProjects.length - 1 : selectedProjectIndex - 1)
          }
          onNextProject={() =>
            setSelectedProjectIndex(selectedProjectIndex === translatedProjects.length - 1 ? 0 : selectedProjectIndex + 1)
          }
        />
      )}
    </section>
  );
}
