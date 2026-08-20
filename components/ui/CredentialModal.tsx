"use client";

// This component is a modal that displays the details of a credential. It is used in the portfolio section of the application.
import { useEffect } from "react";
import type { Credential } from "../types/portfolio";

type CredentialModalProps = {
  credential: Credential;
  onClose: () => void;
};

export default function CredentialModal({
  credential,
  onClose,
}: CredentialModalProps) {
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
      <div
        className="credential-modal-box"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="proj-tagbar">
          <span className="proj-id">CREDENTIAL</span>

          <span className="proj-badge">{credential.when}</span>
        </div>

        <h3>{credential.title}</h3>

        <p className="credential-modal-desc">{credential.desc}</p>

        {/* SATU-SATUNYA PREVIEW PDF */}
        <div className="credential-pdf">
          <h4>Certificate / Document</h4>

          <iframe src={credential.pdf} title={`${credential.title} document`} />
        </div>

        {/* BUTTON */}
        <div className="credential-actions">
          {credential.github && (
            <a
              href={credential.github}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-button"
            >
              GitHub ↗
            </a>
          )}

          {credential.link && (
            <a
              href={credential.link}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-button"
            >
              View Publication ↗
            </a>
          )}

          {credential.pdf && (
            <a
              href={credential.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-button"
            >
              View Certificate ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
