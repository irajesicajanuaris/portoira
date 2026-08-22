"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Project } from "../types/portfolio";

type ProjectModalProps = {
  project: Project;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onPreviousProject: () => void;
  onNextProject: () => void;
};

export default function ProjectModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onPreviousProject,
  onNextProject,
}: ProjectModalProps) {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images ?? [];

  useEffect(() => {
    setCurrentImage(0);
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && images.length > 0) {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (event.key === "ArrowRight" && images.length > 0) {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const hasModel = !!(project.model || project.dataset || project.results);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        {/* CLOSE BUTTON */}
        <button className="modal-close" onClick={onClose} aria-label="Close project">×</button>

        {/* IMAGE GALLERY */}
        {images.length > 0 && (
          <div className="project-modal-gallery">
            <img
              src={images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="project-modal-main-image"
            />
            {images.length > 1 && (
              <>
                <button className="project-gallery-arrow project-gallery-arrow-left" onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))} aria-label="Previous image">←</button>
                <button className="project-gallery-arrow project-gallery-arrow-right" onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))} aria-label="Next image">→</button>
                <div className="project-gallery-counter">{currentImage + 1} / {images.length}</div>
              </>
            )}
          </div>
        )}

        {images.length > 1 && (
          <div className="project-thumbnails">
            {images.map((image, index) => (
              <button
                key={image}
                className={`project-thumbnail ${currentImage === index ? "project-thumbnail-active" : ""}`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        )}

        {/* PROJECT CONTENT */}
        <div className="project-modal-content">
          <div className="project-modal-id">{project.id}</div>
          <h3>{project.title}</h3>

          {/* TECH STACK */}
          <div className="project-modal-tech-box">
            {project.stack.map((technology) => (
              <span key={technology} className="project-modal-tech">{technology}</span>
            ))}
          </div>

          {/* PROBLEM & OBJECTIVE */}
          {project.problem && (
            <div className="pm-section">
              <div className="pm-label">{t.modalProblem}</div>
              <div className="pm-divider" />
              <p>{project.problem}</p>
            </div>
          )}

          {/* DATASET & MODEL (side by side) */}
          {hasModel && (
            <div className="pm-stats-row">
              {/* Dataset */}
              {project.dataset && project.dataset.length > 0 && (
                <div className="pm-card">
                  <div className="pm-label">{t.modalDataset}</div>
                  <div className="pm-card-grid">
                    {project.dataset.map((item) => (
                      <div key={item.label} className="pm-card-item">
                        <span className="pm-card-value">{item.value}</span>
                        <span className="pm-card-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Model */}
              {project.model && (
                <div className="pm-card">
                  <div className="pm-label">MODEL</div>
                  <div className="pm-card-grid">
                    <div className="pm-card-item">
                      <span className="pm-card-value">{project.model.name}</span>
                      <span className="pm-card-label">Architecture</span>
                    </div>
                    <div className="pm-card-item">
                      <span className="pm-card-value">{project.model.task}</span>
                      <span className="pm-card-label">Task</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RESULTS */}
          {project.results && project.results.length > 0 && (
            <div className="pm-section">
              <div className="pm-label">{t.modalResults}</div>
              <div className="pm-divider" />
              <div className="pm-results-grid">
                {project.results.map((stat) => (
                  <div key={stat.label} className="pm-results-stat">
                    <span className="pm-results-value">{stat.value}</span>
                    <span className="pm-results-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* IMPLEMENTATION */}
          {project.implementation && project.implementation.length > 0 && (
            <div className="pm-section">
              <div className="pm-label">{t.modalImplementation}</div>
              <div className="pm-divider" />
              <div className="pm-impl-chips">
                {project.implementation.map((item) => (
                  <span key={item} className="pm-impl-chip">{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* CONCLUSION */}
          {project.conclusion && (
            <div className="pm-conclusion">
              <div>
                <div className="pm-conclusion-label">{t.modalConclusion}</div>
                <p>{project.conclusion}</p>
              </div>
            </div>
          )}

          {/* LINKS */}
          {(project.github || project.live) && (
            <div className="project-modal-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-modal-link">GITHUB ↗</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-modal-link">LIVE WEBSITE ↗</a>
              )}
            </div>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="project-navigation">
          <button onClick={onPreviousProject} className="project-navigation-button">← PREV</button>
          <span className="project-navigation-counter">{currentIndex + 1} / {totalProjects}</span>
          <button onClick={onNextProject} className="project-navigation-button">NEXT →</button>
        </div>
      </div>
    </div>
  );
}
