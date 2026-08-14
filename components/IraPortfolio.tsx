"use client";

import { MotionConfig } from "framer-motion";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Credentials from "./sections/Credentials";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import "./styles/portfolio.css";

export default function IraPortfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="ira-portfolio">
        <Navbar />

        <main className="wrap">
          <Hero />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Credentials />

          <Education />

          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}