import React from "react";
import Image from "next/image";

/**
 * Ira Jesica Januari S. — ML Engineer / Computer Vision
 * Single-file React (TSX) portfolio component.
 *
 * Design direction: the page reads as a "detection output" — a nod to
 * her computer-vision work — but every playful element has been pulled
 * back so it reads as a considered choice for a hiring audience, not a
 * gimmick. Corner brackets, mono labels and section framing are load-
 * bearing (they tie back to the CV theme); nothing is decorative for
 * its own sake.
 */

const styles = `
  :root{
    --paper:#F6F7F1;
    --panel:#FFFFFF;
    --panel-dim:#EEF0E6;
    --ink:#152018;
    --ink-soft:#4B5A4E;
    --line:#CBD2C1;
    --corn:#E4A62B;
    --corn-deep:#B9800E;
    --leaf:#3C6B41;
    --leaf-deep:#274A2B;
    --rust:#B24F28;
    --sky:#3D6B84;
    --radius:2px;
  }
  .ira-portfolio *{box-sizing:border-box;}
  .ira-portfolio{
    scroll-behavior:smooth;
    background:var(--paper);
    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size:48px 48px;
    background-attachment:fixed;
    color:var(--ink);
    font-family:'Manrope', sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .ira-portfolio .mono{ font-family:'JetBrains Mono', monospace; }
  .ira-portfolio ::selection{ background:var(--corn); color:var(--ink); }
  .ira-portfolio a{ color:inherit; }
  .ira-portfolio a:focus-visible,
  .ira-portfolio button:focus-visible{
    outline:2px solid var(--leaf-deep);
    outline-offset:3px;
  }

  .ira-portfolio .wrap{
    max-width:1040px;
    margin:0 auto;
    padding:0 28px;
  }

  /* ---------- NAV ---------- */
  .ira-portfolio header.nav{
    position:sticky; top:0; z-index:40;
    background:rgba(246,247,241,0.9);
    backdrop-filter:blur(6px);
    border-bottom:1px solid var(--line);
  }
  .ira-portfolio .nav-inner{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 28px;
    max-width:1040px; margin:0 auto;
  }
  .ira-portfolio .nav-mark{
    font-family:'JetBrains Mono', monospace;
    font-weight:700; font-size:13px; letter-spacing:0.04em;
    display:flex; align-items:center; gap:8px;
  }
  .ira-portfolio .nav-mark .dot{ width:7px; height:7px; background:var(--leaf); display:inline-block; border-radius:1px; }
  .ira-portfolio .nav-links{ display:flex; gap:26px; font-family:'JetBrains Mono', monospace; font-size:11.5px; letter-spacing:0.04em; }
  .ira-portfolio .nav-links a{ text-decoration:none; color:var(--ink-soft); transition:color 0.15s ease; }
  .ira-portfolio .nav-links a:hover{ color:var(--leaf-deep); }
  @media (max-width:640px){ .ira-portfolio .nav-links{ display:none; } }

  /* ---------- HERO ---------- */
  .ira-portfolio .hero{
    padding:88px 0 0;
    border-bottom:none;
    position:relative;
  }
  .ira-portfolio .frame{
    position:relative;
    border:1px solid var(--ink);
    padding:52px 44px;
    background:rgba(255,255,255,0.55);
    overflow:hidden;
  }
  .ira-portfolio .corner{
    position:absolute; width:20px; height:20px; z-index:2;
  }
  .ira-portfolio .corner.tl{ top:-1px; left:-1px; border-top:3px solid var(--corn-deep); border-left:3px solid var(--corn-deep); }
  .ira-portfolio .corner.tr{ top:-1px; right:-1px; border-top:3px solid var(--corn-deep); border-right:3px solid var(--corn-deep); }
  .ira-portfolio .corner.bl{ bottom:-1px; left:-1px; border-bottom:3px solid var(--corn-deep); border-left:3px solid var(--corn-deep); }
  .ira-portfolio .corner.br{ bottom:-1px; right:-1px; border-bottom:3px solid var(--corn-deep); border-right:3px solid var(--corn-deep); }

  .ira-portfolio .scanline{
    position:absolute; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg, transparent, var(--leaf), transparent);
    opacity:0.6;
    animation:ira-sweep 2.4s ease-in-out 0.2s 1;
    top:0;
  }
  @keyframes ira-sweep{
    0%{ top:0%; opacity:0; }
    12%{ opacity:0.8; }
    88%{ opacity:0.8; }
    100%{ top:100%; opacity:0; }
  }

  .ira-portfolio .eyebrow{
    font-family:'JetBrains Mono', monospace;
    font-size:11.5px; letter-spacing:0.12em; text-transform:uppercase;
    color:var(--leaf-deep);
    display:flex; align-items:center; gap:10px;
    margin-bottom:18px;
  }
  .ira-portfolio .eyebrow.center{ justify-content:center; }
  .ira-portfolio .eyebrow .bracket{ color:var(--corn-deep); }

  .ira-portfolio .hero-top{
    display:flex; align-items:flex-start; gap:36px;
    margin-bottom:28px;
  }
  @media (max-width:560px){
    .ira-portfolio .hero-top{ flex-direction:column; align-items:flex-start; gap:24px; }
  }

  .ira-portfolio .id-frame{ position:relative; flex:none; }
  .ira-portfolio .id-photo{
    display:block;
    border:1px solid var(--ink);
    filter:grayscale(15%);
  }
  .ira-portfolio .id-bracket{
    position:absolute; width:14px; height:14px; z-index:2;
  }
  .ira-portfolio .id-bracket.tl{ top:-6px; left:-6px; border-top:2px solid var(--leaf-deep); border-left:2px solid var(--leaf-deep); }
  .ira-portfolio .id-bracket.tr{ top:-6px; right:-6px; border-top:2px solid var(--leaf-deep); border-right:2px solid var(--leaf-deep); }
  .ira-portfolio .id-bracket.bl{ bottom:-6px; left:-6px; border-bottom:2px solid var(--leaf-deep); border-left:2px solid var(--leaf-deep); }
  .ira-portfolio .id-bracket.br{ bottom:-6px; right:-6px; border-bottom:2px solid var(--leaf-deep); border-right:2px solid var(--leaf-deep); }
  .ira-portfolio .id-label{
    position:absolute; left:0; bottom:-26px;
    font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:0.04em;
    color:var(--ink-soft); white-space:nowrap;
  }
  .ira-portfolio .id-label b{ color:var(--leaf-deep); }

  .ira-portfolio h1{
    font-size:clamp(34px, 5.4vw, 54px);
    line-height:1.05;
    margin:0 0 4px;
    font-weight:800;
    letter-spacing:-0.01em;
  }
  .ira-portfolio h1 span{ color:var(--leaf-deep); }
  .ira-portfolio .role-line{
    font-family:'JetBrains Mono', monospace;
    font-size:14px; color:var(--ink-soft); letter-spacing:0.01em;
  }

  .ira-portfolio .role-tags{
    display:flex; flex-wrap:wrap; gap:8px;
    margin:0 0 26px;
  }
  .ira-portfolio .tag{
    font-family:'JetBrains Mono', monospace;
    font-size:11.5px;
    border:1px solid var(--line);
    padding:6px 10px;
    display:inline-flex; align-items:center; gap:9px;
    background:var(--panel);
    color:var(--ink-soft);
  }
  .ira-portfolio .tag .conf{ color:var(--leaf-deep); font-weight:600; }

  .ira-portfolio .lede{
    max-width:560px;
    font-size:16.5px;
    line-height:1.7;
    color:var(--ink-soft);
    margin-bottom:32px;
  }

  .ira-portfolio .cta-row{ display:flex; gap:14px; flex-wrap:wrap; }
  .ira-portfolio .btn{
    font-family:'JetBrains Mono', monospace;
    font-size:12.5px; letter-spacing:0.03em;
    padding:13px 22px;
    border:1px solid var(--ink);
    text-decoration:none;
    display:inline-flex; align-items:center; gap:8px;
    transition:transform 0.15s ease, background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
    cursor:pointer;
    background:transparent;
  }
  .ira-portfolio .btn-solid{ background:var(--ink); color:var(--paper); }
  .ira-portfolio .btn-solid:hover{ background:var(--leaf-deep); border-color:var(--leaf-deep); transform:translateY(-1px); }
  .ira-portfolio .btn-ghost:hover{ background:var(--panel-dim); transform:translateY(-1px); }

  .ira-portfolio .meta-strip{
    margin-top:36px; padding:18px 0; border-top:1px solid var(--line);
    display:flex; gap:32px; flex-wrap:wrap;
    font-family:'JetBrains Mono', monospace; font-size:11.5px; color:var(--ink-soft);
  }
  .ira-portfolio .meta-strip .k{ color:var(--corn-deep); margin-right:6px; }
  .ira-portfolio .meta-strip b{ color:var(--ink); font-weight:600; }

  /* ---------- SECTION SHELL ---------- */
  .ira-portfolio section{ padding:60px 0; border-bottom:1px solid var(--line); }
  .ira-portfolio section.no-border{ border-bottom:none; }
  .ira-portfolio .sec-head{
    display:flex; align-items:baseline; gap:14px;
    margin-bottom:32px;
  }
  .ira-portfolio .sec-num{ font-family:'JetBrains Mono', monospace; color:var(--corn-deep); font-size:12px; }
  .ira-portfolio .sec-title{ font-size:24px; font-weight:800; margin:0; }
  .ira-portfolio .sec-sub{ color:var(--ink-soft); font-size:13.5px; margin-top:5px; }

  /* ---------- ABOUT ---------- */
  .ira-portfolio .about-grid{
    display:grid; grid-template-columns:1.4fr 1fr; gap:40px;
  }
  @media (max-width:760px){ .ira-portfolio .about-grid{ grid-template-columns:1fr; } }
  .ira-portfolio .about-grid p{ line-height:1.75; color:var(--ink-soft); font-size:15px; margin:0 0 16px; }
  .ira-portfolio .stat-panel{
    border:1px solid var(--ink); background:var(--panel); align-self:start;
  }
  .ira-portfolio .stat{
    padding:15px 18px; border-bottom:1px solid var(--line);
    display:flex; justify-content:space-between; align-items:center; gap:12px;
  }
  .ira-portfolio .stat:last-child{ border-bottom:none; }
  .ira-portfolio .stat .label{ font-family:'JetBrains Mono', monospace; font-size:10.5px; letter-spacing:0.04em; text-transform:uppercase; color:var(--ink-soft); }
  .ira-portfolio .stat .value{ font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--leaf-deep); text-align:right; }

  /* ---------- SKILLS ---------- */
  .ira-portfolio .skill-groups{ display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:20px; }
  .ira-portfolio .skill-card{ border:1px solid var(--line); background:var(--panel); padding:20px; }
  .ira-portfolio .skill-card h3{
    font-family:'JetBrains Mono', monospace; font-size:11.5px; text-transform:uppercase; letter-spacing:0.06em;
    margin:0 0 14px; color:var(--rust); font-weight:600;
  }
  .ira-portfolio .chip-row{ display:flex; flex-wrap:wrap; gap:7px; }
  .ira-portfolio .chip{
    font-family:'JetBrains Mono', monospace; font-size:11.5px;
    padding:5px 9px; background:var(--panel-dim); border:1px solid var(--line);
  }

  /* ---------- TIMELINE ---------- */
  .ira-portfolio .tline{ position:relative; padding-left:26px; }
  .ira-portfolio .tline::before{ content:''; position:absolute; left:5px; top:6px; bottom:6px; width:1px; background:var(--line); }
  .ira-portfolio .titem{ position:relative; padding-bottom:32px; }
  .ira-portfolio .titem:last-child{ padding-bottom:0; }
  .ira-portfolio .titem::before{
    content:''; position:absolute; left:-26px; top:4px; width:10px; height:10px;
    background:var(--paper); border:2px solid var(--leaf); border-radius:50%;
  }
  .ira-portfolio .titem .when{ font-family:'JetBrains Mono', monospace; font-size:11.5px; color:var(--corn-deep); margin-bottom:4px; }
  .ira-portfolio .titem h4{ margin:0 0 4px; font-size:16.5px; }
  .ira-portfolio .titem .org{ color:var(--ink-soft); font-size:13.5px; margin-bottom:10px; }
  .ira-portfolio .titem ul{ margin:0; padding-left:18px; color:var(--ink-soft); font-size:14px; line-height:1.65; }

  /* ---------- PROJECTS ---------- */
  .ira-portfolio .proj-grid{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  @media (max-width:760px){ .ira-portfolio .proj-grid{ grid-template-columns:1fr; } }
  .ira-portfolio .proj-card{
    border:1px solid var(--ink); background:var(--panel);
    padding:22px; position:relative;
    transition:transform 0.15s ease, box-shadow 0.15s ease;
  }
  .ira-portfolio .proj-card:hover{ transform:translateY(-3px); box-shadow:4px 4px 0 var(--leaf-deep); }
  .ira-portfolio .proj-tagbar{ display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px; gap:10px; }
  .ira-portfolio .proj-id{ font-family:'JetBrains Mono', monospace; font-size:10.5px; color:var(--ink-soft); }
  .ira-portfolio .proj-badge{
    font-family:'JetBrains Mono', monospace; font-size:10px;
    padding:3px 7px; border:1px solid var(--leaf); color:var(--leaf-deep);
    text-transform:uppercase; letter-spacing:0.04em; white-space:nowrap;
  }
  .ira-portfolio .proj-card h4{ margin:0 0 10px; font-size:17px; line-height:1.3; }
  .ira-portfolio .proj-card p{ color:var(--ink-soft); font-size:14px; line-height:1.6; margin:0 0 14px; }
  .ira-portfolio .stack-row{ display:flex; flex-wrap:wrap; gap:6px; }
  .ira-portfolio .stack-chip{ font-family:'JetBrains Mono', monospace; font-size:10.5px; padding:4px 8px; background:var(--panel-dim); border:1px solid var(--line); }

  /* ---------- CREDENTIALS ---------- */
  .ira-portfolio .cred-grid{ display:grid; grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); gap:18px; }
  .ira-portfolio .cred-card{ border:1px solid var(--line); background:var(--panel); padding:20px; display:flex; gap:14px; align-items:flex-start; }
  .ira-portfolio .cred-icon{
    font-family:'JetBrains Mono', monospace; font-size:10.5px; font-weight:700;
    border:1px solid var(--ink); width:38px; height:38px; flex:none;
    display:flex; align-items:center; justify-content:center; color:var(--rust);
  }
  .ira-portfolio .cred-card h4{ margin:0 0 4px; font-size:14.5px; }
  .ira-portfolio .cred-card p{ margin:0; font-size:12.5px; color:var(--ink-soft); line-height:1.55; }
  .ira-portfolio .cred-card .cred-when{ font-family:'JetBrains Mono', monospace; font-size:10.5px; color:var(--corn-deep); margin-top:6px; display:block; }

  /* ---------- EDUCATION ---------- */
  .ira-portfolio .edu-card{
    border:1px solid var(--ink); background:var(--panel); padding:26px 28px;
    display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap;
  }
  .ira-portfolio .edu-card h4{ margin:0 0 6px; font-size:18px; }
  .ira-portfolio .edu-card .org{ color:var(--ink-soft); font-size:13.5px; }
  .ira-portfolio .gpa-box{
    font-family:'JetBrains Mono', monospace; text-align:center;
    border:1px solid var(--ink); padding:12px 22px; background:var(--panel-dim); flex:none;
  }
  .ira-portfolio .gpa-box .num{ font-size:22px; font-weight:700; color:var(--leaf-deep); line-height:1.1; }
  .ira-portfolio .gpa-box .lbl{ font-size:9.5px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); margin-top:2px; }

  /* ---------- CONTACT / FOOTER ---------- */
  .ira-portfolio .contact-panel{
    border:1px solid var(--ink); padding:48px 40px; background:var(--panel);
    text-align:center; position:relative;
  }
  .ira-portfolio .contact-panel h2{ font-size:28px; margin:0 0 12px; }
  .ira-portfolio .contact-panel p{ color:var(--ink-soft); max-width:480px; margin:0 auto 26px; line-height:1.6; font-size:15px; }
  .ira-portfolio .contact-links{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

  .ira-portfolio footer{ padding:30px 0 56px; text-align:center; }
  .ira-portfolio footer p{ font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--ink-soft); letter-spacing:0.02em; }

  @media (prefers-reduced-motion: reduce){
    .ira-portfolio{ scroll-behavior:auto; }
    .ira-portfolio .scanline{ animation:none; display:none; }
    .ira-portfolio .proj-card, .ira-portfolio .btn{ transition:none; }
  }
`;

type Skill = { title: string; chips: string[] };
type Experience = {
  when: string;
  title: string;
  org: string;
  bullets: string[];
};
type Project = {
  id: string;
  badge: string;
  title: string;
  desc: string;
  stack: string[];
};
type Credential = {
  icon: string;
  title: string;
  desc: string;
  when: string;
};

const skillGroups: Skill[] = [
  { title: "Languages", chips: ["Python", "JavaScript", "PHP", "SQL", "Dart"] },
  {
    title: "Frameworks & Libraries",
    chips: ["Flutter", "Flask", "Bootstrap", "OpenCV"],
  },
  { title: "Database", chips: ["MySQL"] },
  {
    title: "Tools & Platforms",
    chips: [
      "Node.js",
      "Firebase",
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
    ],
  },
];

const experience: Experience[] = [
  {
    when: "OCT — DEC 2025",
    title: "Front-End Developer Intern",
    org: "Directorate of Digital Innovation, Universitas Muhammadiyah Yogyakarta",
    bullets: [
      "Built and maintained 15+ responsive pages for the UMY Marketplace using HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented UI components that stayed consistent across pages and screen sizes.",
    ],
  },
  {
    when: "2023 — 2024",
    title: "Internal & External Affairs Staff",
    org: "Dewan Perwakilan Mahasiswa (DPM), Faculty of Engineering, UMY",
    bullets: [
      "Coordinated internal and external activities supporting faculty programs.",
      "Ran mid-term and monthly evaluations to improve organizational performance.",
    ],
  },
];

const projects: Project[] = [
  {
    id: "PRJ / 01 — THESIS",
    badge: "Mobile · Real-time",
    title: "Real-Time Corn Leaf Disease Detection App",
    desc: "A mobile app that detects four corn leaf diseases live through the camera and recommends early treatment, with gallery detection, auth, and a detection history log.",
    stack: ["Flutter", "Python", "YOLOv8n", "Node.js", "MySQL"],
  },
  {
    id: "PRJ / 02 — PUBLISHED",
    badge: "ICOSA 2026",
    title: "Web-Based Corn Leaf Disease Detection System",
    desc: "A web system using ConvNeXt-Small to classify corn leaf disease from an uploaded image, pairing each prediction with disease info and treatment guidance. Published at the International Conference on Sustainable Agriculture.",
    stack: ["Python", "Flask", "ConvNeXt-Small", "OpenCV"],
  },
  {
    id: "PRJ / 03 — CAPSTONE",
    badge: "DJKI Copyright",
    title: "Village Financial Recording App",
    desc: "A mobile app for recording and reporting village-level financial transactions, registered as a copyrighted computer program with DJKI (No. EC002026071168).",
    stack: ["Flutter", "Firebase", "MySQL"],
  },
  {
    id: "PRJ / 04 — BIG DATA",
    badge: "Analysis",
    title: "Mental Health Data Analysis",
    desc: "Preprocessing, exploratory data analysis, and visualization work aimed at surfacing meaningful trends in a mental-health dataset.",
    stack: ["Python", "SQL", "Pandas", "Matplotlib"],
  },
];

const credentials: Credential[] = [
  {
    icon: "DB",
    title: "Certified Database Administrator (CDBA)",
    desc: "Badan Nasional Sertifikasi Profesi (BNSP). Covers SQL, database design, ERD modeling, backup/recovery, and maintenance planning.",
    when: "2026 – 2029",
  },
  {
    icon: "CV",
    title: "ICOSA Published Research",
    desc: "Web-based corn leaf disease detection system, presented at the International Conference on Sustainable Agriculture.",
    when: "2026",
  },
  {
    icon: "©",
    title: "DJKI Registered Copyright",
    desc: "Village Financial Recording App registered as a copyrighted computer program, Reg. No. EC002026071168.",
    when: "25 May 2026",
  },
];

export default function IraPortfolio(): JSX.Element {
  return (
    <div className="ira-portfolio">
      <style>{styles}</style>

      <header className="nav">
        <div className="nav-inner">
          <div className="nav-mark">
            <span className="dot"></span>IRA JESICA JANUARI S.
          </div>
          <nav className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#projects">PROJECTS</a>
            <a href="#credentials">CREDENTIALS</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      <div className="wrap">
        {/* HERO */}
        <section className="hero no-border">
          <div className="frame">
            <div className="scanline"></div>
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>

            <div className="hero-top">
              <div className="id-frame">
                <span className="id-bracket tl"></span>
                <span className="id-bracket tr"></span>
                <span className="id-bracket bl"></span>
                <span className="id-bracket br"></span>
                <Image
                  className="id-photo"
                  src="/profile/foto.jpg"
                  alt="Ira Jesica Januari S."
                  width={168}
                  height={168}
                  style={{ objectFit: "cover" }}
                />
                <span className="id-label mono">
                  subject_01 · <b>conf 0.99</b>
                </span>
              </div>

              <div>
                <div className="eyebrow">
                  <span className="bracket">[</span>
                  DETECTION OUTPUT · FRAME 001
                  <span className="bracket">]</span>
                </div>
                <h1>
                  Ira Jesica Januari S<span>.</span>
                </h1>
                <div className="role-line">
                  Machine Learning Engineer · Computer Vision
                </div>
              </div>
            </div>

            <div className="role-tags">
              <span className="tag">
                MACHINE LEARNING <span className="conf">0.98</span>
              </span>
              <span className="tag">
                COMPUTER VISION <span className="conf">0.96</span>
              </span>
              <span className="tag">
                DATA SCIENCE <span className="conf">0.94</span>
              </span>
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
                <b>Kediri, East Java, ID</b>
              </span>
              <span>
                <span className="k">EDU</span>
                <b>B.IT — Universitas Muhammadiyah Yogyakarta</b>
              </span>
              <span>
                <span className="k">GPA</span>
                <b>3.77 / 4.00</b>
              </span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <div>
              <h3 className="sec-title">About</h3>
              <div className="sec-sub">Summary, in plain terms</div>
            </div>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I'm finishing my Information Technology degree at Universitas
                Muhammadiyah Yogyakarta, with most of my work sitting at the
                intersection of deep learning and computer vision — the kind of
                AI that has to look at an image and make a call in real time.
              </p>
              <p>
                My thesis app detects corn leaf disease straight from a phone
                camera using YOLOv8n, and a companion web system uses
                ConvNeXt-Small for the same problem — that one was published at
                the International Conference on Sustainable Agriculture (ICOSA)
                2026. I also hold a BNSP-certified Database Administrator
                credential and a DJKI-registered software copyright for a
                village financial-recording app.
              </p>
              <p>
                Outside of models, I've done front-end work on production pages
                and spent time in student governance coordinating faculty-wide
                programs. I like projects where the model has to survive contact
                with a real user, not just a benchmark.
              </p>
            </div>
            <div className="stat-panel">
              <div className="stat">
                <span className="label">Focus</span>
                <span className="value">AI / ML / CV</span>
              </div>
              <div className="stat">
                <span className="label">Publication</span>
                <span className="value">ICOSA 2026</span>
              </div>
              <div className="stat">
                <span className="label">Copyright</span>
                <span className="value">DJKI Registered</span>
              </div>
              <div className="stat">
                <span className="label">Certification</span>
                <span className="value">BNSP · CDBA</span>
              </div>
              <div className="stat">
                <span className="label">Languages</span>
                <span className="value">ID (native) · EN (int.)</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <div>
              <h3 className="sec-title">Technical Skills</h3>
              <div className="sec-sub">Classes recognized across projects</div>
            </div>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <div>
              <h3 className="sec-title">Experience & Organization</h3>
              <div className="sec-sub">Where the work happened</div>
            </div>
          </div>
          <div className="tline">
            {experience.map((item) => (
              <div className="titem" key={item.title}>
                <div className="when">{item.when}</div>
                <h4>{item.title}</h4>
                <div className="org">{item.org}</div>
                <ul>
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <div>
              <h3 className="sec-title">Projects</h3>
              <div className="sec-sub">
                Four things I've shipped or published
              </div>
            </div>
          </div>
          <div className="proj-grid">
            {projects.map((proj) => (
              <div className="proj-card" key={proj.id}>
                <div className="proj-tagbar">
                  <span className="proj-id">{proj.id}</span>
                  <span className="proj-badge">{proj.badge}</span>
                </div>
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
                <div className="stack-row">
                  {proj.stack.map((s) => (
                    <span className="stack-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials">
          <div className="sec-head">
            <span className="sec-num">05</span>
            <div>
              <h3 className="sec-title">Certifications & Recognition</h3>
              <div className="sec-sub">Verified externally</div>
            </div>
          </div>
          <div className="cred-grid">
            {credentials.map((cred) => (
              <div className="cred-card" key={cred.title}>
                <div className="cred-icon">{cred.icon}</div>
                <div>
                  <h4>{cred.title}</h4>
                  <p>{cred.desc}</p>
                  <span className="cred-when">{cred.when}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="sec-head">
            <span className="sec-num">06</span>
            <div>
              <h3 className="sec-title">Education</h3>
              <div className="sec-sub">Where it started</div>
            </div>
          </div>
          <div className="edu-card">
            <div>
              <h4>Bachelor of Information Technology</h4>
              <div className="org">
                Universitas Muhammadiyah Yogyakarta · Sept 2022 – 2026
              </div>
            </div>
            <div className="gpa-box">
              <div className="num">3.77</div>
              <div className="lbl">GPA / 4.00</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="no-border">
          <div className="contact-panel">
            <div className="eyebrow center">
              <span className="bracket">[</span>END OF FRAME
              <span className="bracket">]</span>
            </div>
            <h2>Let's build something that sees clearly.</h2>
            <p>
              Open to Machine Learning, Computer Vision, and Data Science roles
              — and happy to talk through any of the projects above in more
              depth.
            </p>
            <div className="contact-links">
              <a
                className="btn btn-solid"
                href="mailto:irajesicajanuaris@gmail.com"
              >
                EMAIL ME
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/irajesicajanuaris"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/irajesicajanuaris"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                className="btn btn-ghost"
                href="https://wa.me/085704978100"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>IRA JESICA JANUARI S. — KEDIRI, EAST JAVA © 2026</p>
      </footer>
    </div>
  );
}
