import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <SectionHeader
          number="03"
          title="Experience & Organization"
          subtitle="Where the work happened"
        />

        <div className="tline">
          {experience.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.09}
              amount={0.28}
            >
              <div className="titem">
                <div className="when">
                  {item.when}
                </div>

                <h4>{item.title}</h4>

                <div className="org">
                  {item.org}
                </div>

                <ul>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}