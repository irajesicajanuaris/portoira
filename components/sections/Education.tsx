import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <Reveal>
        <SectionHeader
          number="06"
          title="Education"
          subtitle="Where it started"
        />

        <div className="edu-card">
          <div>
            <h4>{education.degree}</h4>

            <div className="org">
              {education.university} ·{" "}
              {education.period}
            </div>
          </div>

          <div className="gpa-box">
            <div className="num">
              {education.gpa}
            </div>

            <div className="lbl">
              GPA / 4.00
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}