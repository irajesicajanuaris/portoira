import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import {
  aboutParagraphs,
  stats,
} from "../data/portfolio";

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <SectionHeader
          number="01"
          title="About"
          subtitle="Summary, in plain terms"
        />

        <div className="about-grid">
          <div>
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="stat-panel">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="label">
                  {stat.label}
                </span>

                <span className="value">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}