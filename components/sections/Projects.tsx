"use client";

import { useState } from "react";

import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import ProjectModal from "../ui/ProjectModal";

import {
  projects,
} from "../data/portfolio";

import type { Project } from "../types/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section id="projects">
      <Reveal>
        <SectionHeader
          number="04"
          title="Projects"
          subtitle="Four things I've shipped or published"
        />

        <div className="proj-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              amount={0.3}
            >
              <div
                className="proj-card"
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                <div className="proj-tagbar">
                  <span className="proj-id">
                    {project.id}
                  </span>

                  <span className="proj-badge">
                    {project.badge}
                  </span>
                </div>

                <h4>{project.title}</h4>

                <p>{project.desc}</p>

                <div className="stack-row">
                  {project.stack.map((stack) => (
                    <span
                      className="stack-chip"
                      key={stack}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </section>
  );
}