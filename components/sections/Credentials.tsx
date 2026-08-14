import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { credentials } from "../data/portfolio";

export default function Credentials() {
  return (
    <section id="credentials">
      <Reveal>
        <SectionHeader
          number="05"
          title="Certifications & Recognition"
          subtitle="Verified externally"
        />

        <div className="cred-grid">
          {credentials.map((credential, index) => (
            <Reveal
              key={credential.title}
              delay={index * 0.08}
              amount={0.28}
            >
              <div className="cred-card">
                <div className="cred-icon">
                  {credential.icon}
                </div>

                <div>
                  <h4>{credential.title}</h4>

                  <p>{credential.desc}</p>

                  <span className="cred-when">
                    {credential.when}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}