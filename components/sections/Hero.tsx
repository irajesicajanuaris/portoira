"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Reveal from "../ui/Reveal";
import { profile, heroTags } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero no-border">
      <Reveal className="frame" amount={0.12}>
        <div className="scanline" />

        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <div className="hero-top">
          <motion.div
            className="id-frame"
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="id-bracket tl" />
            <span className="id-bracket tr" />
            <span className="id-bracket bl" />
            <span className="id-bracket br" />

            <Image
              className="id-photo"
              src={profile.photo}
              alt={profile.name}
              width={168}
              height={168}
              style={{
                objectFit: "cover",
              }}
            />

            <span className="id-label mono">
              subject_01 · <b>conf 0.99</b>
            </span>
          </motion.div>

          <div>
            <div className="eyebrow">
              <span className="bracket">[</span>
              DETECTION OUTPUT · FRAME 001
              <span className="bracket">]</span>
            </div>

            <h1>
              {profile.name}
              <span>.</span>
            </h1>

            <div className="role-line">
              {profile.role}
            </div>
          </div>
        </div>

        <div className="role-tags">
          {heroTags.map((tag) => (
            <span className="tag" key={tag.label}>
              {tag.label}

              <span className="conf">
                {tag.confidence}
              </span>
            </span>
          ))}
        </div>

        <p className="lede">
          I build systems that learn to see — from spotting corn leaf
          disease through a phone camera in real time, to turning messy
          village ledgers and mental-health survey data into something a
          person can actually read.
        </p>

        <div className="cta-row">
          <a href="#projects" className="btn btn-solid">
            VIEW PROJECTS →
          </a>

          <a href="#contact" className="btn btn-ghost">
            GET IN TOUCH
          </a>
        </div>

        <div className="meta-strip">
          <span>
            <span className="k">LOC</span>
            <b>{profile.location}</b>
          </span>

          <span>
            <span className="k">EDU</span>
            <b>{profile.education}</b>
          </span>

          <span>
            <span className="k">GPA</span>
            <b>{profile.gpa}</b>
          </span>
        </div>
      </Reveal>
    </section>
  );
}