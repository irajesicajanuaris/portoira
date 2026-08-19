"use client";

import { useEffect } from "react";
import type { Project } from "../types/portfolio";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="proj-tagbar">
          <span className="proj-id">{project.id}</span>

          <span className="proj-badge">{project.badge}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.desc}</p>

        <div className="stack-row">
          {project.stack.map((stack) => (
            <span className="stack-chip" key={stack}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
