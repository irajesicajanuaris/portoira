"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";
import { profile, heroTags } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero no-border">
      <Reveal className="frame" amount={0.12}>
        <div className="vision-mark" aria-hidden="true">
          <span className="vision-crosshair" />
          <span>VISION / ONLINE</span>
        </div>

        <div className="hero-top">
          <motion.div className="id-frame" initial={{ opacity: 0, scale: 0.92, y: 14 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <Image className="id-photo" src={profile.photo} alt={profile.name} width={168} height={168} style={{ objectFit: "cover" }} />
          </motion.div>

          <div>
            <div className="eyebrow">{t.heroEyebrow}</div>
            <h1>{profile.name}<span>.</span></h1>
            <div className="role-line">{t.heroRole}</div>
          </div>
        </div>

        <div className="role-tags">
          {heroTags.map((tag) => <span className="tag" key={tag.label}>{tag.label}</span>)}
        </div>

        <p className="lede">{t.heroLede}</p>

        <div className="cta-row">
          <a href="#projects" className="btn btn-solid">{t.heroCtaProjects}</a>
          <a href="#contact" className="btn btn-ghost">{t.heroCtaContact}</a>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">CV ↗</a>
        </div>

        <div className="meta-strip">
          <span><span className="k">Location</span><b>{profile.location}</b></span>
          <span><span className="k">Education</span><b>{profile.education}</b></span>
          <span><span className="k">GPA</span><b>{profile.gpa}</b></span>
        </div>
      </Reveal>
    </section>
  );
}
