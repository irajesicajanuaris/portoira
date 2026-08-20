import type {
  Skill,
  Experience,
  Project,
  Credential,
} from "../types/portfolio";

export const profile = {
  name: "Ira Jesica Januari S.",
  role: "Data Analysis · AI / Machine Learning · Database System",
  location: "Kediri, East Java, ID",
  education: "B.IT — Universitas Muhammadiyah Yogyakarta",
  gpa: "3.77 / 4.00",

  photo: "/profile/profil.jpg",

  email: "irajesicajanuaris@gmail.com",

  linkedin: "https://www.linkedin.com/in/irajesicajanuaris",

  github: "https://github.com/irajesicajanuaris",

  whatsapp: "https://wa.me/6285704978100",
};

export const heroTags = [
  { label: "Data Analysis" },
  { label: "AI / Machine Learning" },
  { label: "Database System" },
];

export const aboutParagraphs = [
  `Fresh graduate in Information Technology from Universitas Muhammadiyah Yogyakarta with a cumulative GPA of 3.77/4.00. Experienced in data analysis, database systems, computer vision, machine learning, and web and mobile application development through academic and applied projects.`,

  `Developed AI-based corn leaf disease detection systems using YOLOv8n and ConvNeXt-Small, as well as a village financial recording application using Flutter, Node.js, and MySQL.`,

  `Holds a BNSP Certified Database Administrator (CDBA) credential and has presented research at an international conference — the paper has been accepted for publication and is forthcoming in December 2026.`,
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
    title: "Data & AI",
    chips: ["Pandas", "Matplotlib", "Scikit-Learn"],
  },
  {
    title: "Database",
    chips: ["MySQL"],
  },
  {
    title: "Tools & Technologies",
    chips: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];

export const experience: Experience[] = [
  {
    when: "OCT — DEC 2025",
    title: "Front-End Developer Intern",
    org: "Directorate of Digital Innovation, Universitas Muhammadiyah Yogyakarta",
    bullets: [
      "Developed and maintained over 15 responsive web pages for the UMY Marketplace using HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented responsive UI components ensuring consistent user experience across multiple devices.",
    ],
  },

  {
    when: "2023 — 2024",
    title: "Staff, Internal & External Affairs",
    org: "DPM Faculty of Engineering, Universitas Muhammadiyah Yogyakarta",
    bullets: [
      "Coordinated communication between 200+ students and faculty administration.",
      "Organized mid-term and monthly evaluations to improve organizational performance.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "PRJ / 01 — THESIS",
    badge: "Mobile · Real-time",
    title: "AI Based Mobile Application for Real-Time Corn Leaf Disease Detection",
    desc: "Developed an AI-powered mobile application using YOLOv8n to detect and classify four corn leaf conditions, achieving 0.990 precision, 0.983 recall, and 0.993 mAP50. Implemented camera and gallery detection, bounding boxes, confidence scores, detection history, and early treatment recommendations.",
    stack: ["Flutter", "Python", "YOLOv8n", "Node.js", "MySQL"],

    images: [
      "/projects/corn/home.jpg",
      "/projects/corn/detection.jpg",
      "/projects/corn/result.jpg",
      "/projects/corn/history.jpg",
    ],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
    live: "https://your-live-website.vercel.app",
  },

  {
    id: "PRJ / 02 — PUBLISHED",
    badge: "ICOSA 2026",
    title: "Web-Based Corn Leaf Disease Detection System",
    desc: "Developed a web-based disease detection system using ConvNeXt-Small, achieving 97.31% test accuracy across 4 classes on 4,188 images, with an interactive Flask web application featuring confidence scoring and treatment recommendations.",
    stack: ["Python", "Flask", "ConvNeXt-Small", "OpenCV"],

    images: [
      "/projects/corn/home.jpg",
      "/projects/corn/detection.jpg",
      "/projects/corn/result.jpg",
      "/projects/corn/history.jpg",
    ],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
    live: "https://your-live-website.vercel.app",
  },

  {
    id: "PRJ / 03 — CAPSTONE",
    badge: "DJKI Copyright",
    title: "Village Financial Recording Mobile Application",
    desc: "Developed a mobile application for village financial transaction recording and reporting. Registered as a copyrighted computer program by the Direktorat Jenderal Kekayaan Intelektual (DJKI). Registration No.: EC002026071168.",
    stack: ["Flutter", "Firebase", "MySQL"],

    images: [
      "/projects/corn/home.jpg",
      "/projects/corn/detection.jpg",
      "/projects/corn/result.jpg",
      "/projects/corn/history.jpg",
    ],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
    live: "https://your-live-website.vercel.app",
  },

  {
    id: "PRJ / 04 — DATA SCIENCE",
    badge: "Classification",
    title: "Depression Classification among University Students",
    desc: "Built a binary classification pipeline using Logistic Regression and Random Forest on 101 survey records with 11 features, achieving 81.0% test accuracy. Applied data preprocessing, feature engineering, stratified cross-validation, and feature-influence analysis.",
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-Learn"],

    images: [
      "/projects/corn/home.jpg",
      "/projects/corn/detection.jpg",
      "/projects/corn/result.jpg",
      "/projects/corn/history.jpg",
    ],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
    live: "",
  },
];

export const credentials: Credential[] = [
  {
    icon: "BNSP",
    title: "Certified Database Administrator (CDBA)",
    desc: "Badan Nasional Sertifikasi Profesi (BNSP). Covers SQL, database design, ERD modeling, backup/recovery, and maintenance planning.",
    when: "2026 – 2029",

    pdf: "/credentials/sertifikasi-cdba.pdf",
  },

  {
    icon: "CV",
    title: "ICOSA Published Research",
    desc: "Web-based corn leaf disease detection system using ConvNeXt-Small for automatic disease classification, presented at the International Conference on Sustainable Agriculture (ICOSA) 2026.",

    when: "2026",

    pdf: "/credentials/ICOSA-IraJesicaJanuariS.pdf",

    link: "https://...",
  },

  {
    icon: "©",
    title: "DJKI Registered Copyright",
    desc: "Village Financial Recording App registered as a copyrighted computer program with DJKI.",

    when: "25 May 2026",

    pdf: "/credentials/sertifikatHkiDompetWarga.pdf",
  },
];

export const education = {
  degree: "Bachelor of Information Technology",
  university: "Universitas Muhammadiyah Yogyakarta",
  period: "Sept 2022 – 2026",
  gpa: "3.77",
};
