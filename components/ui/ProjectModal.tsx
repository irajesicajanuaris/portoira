"use client";

import { useEffect, useState } from "react";
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
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images ?? [];

  useEffect(() => {
    setCurrentImage(0);
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        if (images.length > 0) {
          setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1,
          );
        }
      }

      if (event.key === "ArrowRight") {
        if (images.length > 0) {
          setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1,
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const previousImage = () => {
    if (images.length === 0) return;

    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (images.length === 0) return;

    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project"
        >
          ×
        </button>

        {/* IMAGE AREA */}
        <div className="project-modal-gallery">
          {images.length > 0 ? (
            <img
              src={images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="project-modal-main-image"
            />
          ) : (
            <div className="project-modal-image-placeholder">PROJECT IMAGE</div>
          )}

          {/* IMAGE PREVIOUS */}
          {images.length > 1 && (
            <>
              <button
                className="project-gallery-arrow project-gallery-arrow-left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                ←
              </button>

              {/* IMAGE NEXT */}
              <button
                className="project-gallery-arrow project-gallery-arrow-right"
                onClick={nextImage}
                aria-label="Next image"
              >
                →
              </button>

              {/* IMAGE COUNTER */}
              <div className="project-gallery-counter">
                {currentImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* THUMBNAILS */}
        {images.length > 1 && (
          <div className="project-thumbnails">
            {images.map((image, index) => (
              <button
                key={image}
                className={`project-thumbnail ${
                  currentImage === index ? "project-thumbnail-active" : ""
                }`}
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

          {/* DESCRIPTION */}
          <div className="project-modal-section">
            <span className="project-modal-label">DESCRIPTION</span>

            <div className="project-modal-divider" />

            <p>{project.desc}</p>
          </div>

          {/* TECHNOLOGIES */}
          <div className="project-modal-section">
            <span className="project-modal-label">SKILLS / TECHNOLOGIES</span>

            <div className="project-modal-tech-box">
              {project.stack.map((technology) => (
                <span key={technology} className="project-modal-tech">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {(project.github || project.live) && (
            <div className="project-modal-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  GITHUB ↗
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  LIVE WEBSITE ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* PROJECT NAVIGATION */}
        <div className="project-navigation">
          <button
            onClick={onPreviousProject}
            className="project-navigation-button"
          >
            ← PREVIOUS PROJECT
          </button>

          <span className="project-navigation-counter">
            PROJECT {currentIndex + 1} / {totalProjects}
          </span>

          <button onClick={onNextProject} className="project-navigation-button">
            NEXT PROJECT →
          </button>
        </div>
      </div>
    </div>
  );
}
