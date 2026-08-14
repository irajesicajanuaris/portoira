import type {
  Skill,
  Experience,
  Project,
  Credential,
} from "../types/portfolio";

export const profile = {
  name: "Ira Jesica Januari S.",
  role: "Machine Learning Engineer · Computer Vision",
  location: "Kediri, East Java, ID",
  education: "B.IT — Universitas Muhammadiyah Yogyakarta",
  gpa: "3.77 / 4.00",

  photo: "/profile/profil.jpg",

  email: "irajesicajanuaris@gmail.com",

  linkedin: "https://www.linkedin.com/in/irajesicajanuaris",

  github: "https://github.com/irajesicajanuaris",

  whatsapp: "https://wa.me/085704978100",
};

export const heroTags = [
  {
    label: "MACHINE LEARNING",
    confidence: "0.98",
  },
  {
    label: "COMPUTER VISION",
    confidence: "0.96",
  },
  {
    label: "DATA SCIENCE",
    confidence: "0.94",
  },
];

export const aboutParagraphs = [
  `I'm finishing my Information Technology degree at Universitas Muhammadiyah Yogyakarta, with most of my work sitting at the intersection of deep learning and computer vision — the kind of AI that has to look at an image and make a call in real time.`,

  `My thesis app detects corn leaf disease straight from a phone camera using YOLOv8n, and a companion web system uses ConvNeXt-Small for the same problem — that one was published at the International Conference on Sustainable Agriculture (ICOSA) 2026.`,

  `Outside of models, I've done front-end work on production pages and spent time in student governance coordinating faculty-wide programs. I like projects where the model has to survive contact with a real user, not just a benchmark.`,
];

export const stats = [
  {
    label: "Focus",
    value: "AI / ML / CV",
  },
  {
    label: "Publication",
    value: "ICOSA 2026",
  },
  {
    label: "Copyright",
    value: "DJKI Registered",
  },
  {
    label: "Certification",
    value: "BNSP · CDBA",
  },
  {
    label: "Languages",
    value: "ID (native) · EN (int.)",
  },
];

export const skillGroups: Skill[] = [
  {
    title: "Languages",
    chips: ["Python", "JavaScript", "PHP", "SQL", "Dart"],
  },
  {
    title: "Frameworks & Libraries",
    chips: ["Flutter", "Flask", "Bootstrap", "OpenCV"],
  },
  {
    title: "Database",
    chips: ["MySQL"],
  },
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

export const experience: Experience[] = [
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

export const projects: Project[] = [
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
    desc: "A web system using ConvNeXt-Small to classify corn leaf disease from an uploaded image, pairing each prediction with disease info and treatment guidance.",
    stack: ["Python", "Flask", "ConvNeXt-Small", "OpenCV"],
  },

  {
    id: "PRJ / 03 — CAPSTONE",
    badge: "DJKI Copyright",
    title: "Village Financial Recording App",
    desc: "A mobile app for recording and reporting village-level financial transactions, registered as a copyrighted computer program with DJKI.",
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

export const credentials: Credential[] = [
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
    desc: "Village Financial Recording App registered as a copyrighted computer program.",
    when: "25 May 2026",
  },
];

export const education = {
  degree: "Bachelor of Information Technology",
  university: "Universitas Muhammadiyah Yogyakarta",
  period: "Sept 2022 – 2026",
  gpa: "3.77",
};