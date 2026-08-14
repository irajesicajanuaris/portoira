import Reveal from "../ui/Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="no-border">
      <Reveal>
        <div className="contact-panel">
          <div className="eyebrow center">
            <span className="bracket">[</span>
            END OF FRAME
            <span className="bracket">]</span>
          </div>

          <h2>
            Let&apos;s build something that sees clearly.
          </h2>

          <p>
            Open to Machine Learning, Computer Vision,
            and Data Science roles — and happy to talk
            through any of the projects above in more
            depth.
          </p>

          <div className="contact-links">
            <a
              className="btn btn-solid"
              href={`mailto:${profile.email}`}
            >
              EMAIL ME
            </a>

            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>

            <a
              className="btn btn-ghost"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}