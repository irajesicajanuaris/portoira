import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal>
        <SectionHeader
          number="02"
          title="Technical Skills"
          subtitle="Classes recognized across projects"
        />

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.08}
              amount={0.3}
            >
              <div className="skill-card">
                <h3>{group.title}</h3>

                <div className="chip-row">
                  {group.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
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