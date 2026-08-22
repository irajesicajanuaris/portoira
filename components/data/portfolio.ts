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
  { label: "Deep Learning" },
  { label: "Computer Vision" },
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
    title:
      "AI Based Mobile Application for Real-Time Corn Leaf Disease Detection",
    desc: "Developed an AI-powered mobile application using YOLOv8n to detect and classify four corn leaf conditions, achieving 0.990 precision, 0.983 recall, and 0.993 mAP50. Implemented camera and gallery detection, bounding boxes, confidence scores, detection history, and early treatment recommendations.",
    stack: ["Flutter", "Python", "YOLOv8n", "Node.js", "MySQL"],
    problem:
      "Corn leaf disease identification is still done manually, which is time-consuming and prone to subjective assessment. An automated mobile-based system is needed to detect diseases quickly and accurately.",
    dataset: [
      { label: "Images", value: "5,261" },
      {
        label: "Classes",
        value: "4 (Blight, Common Rust, Gray Leaf Spot, Healthy)",
      },
      { label: "Split", value: "70:20:10 (train:val:test)" },
      { label: "Annotation", value: "Bounding box via Roboflow" },
    ],
    model: {
      name: "YOLOv8n",
      task: "Object detection — 50 epochs, Adam optimizer, image size 640",
    },
    results: [
      { value: "0.990", label: "Precision" },
      { value: "0.983", label: "Recall" },
      { value: "0.993", label: "mAP50" },
      { value: "0.922", label: "mAP50-95" },
    ],
    implementation: [
      "TensorFlow Lite on-device inference",
      "Flutter mobile app",
      "Node.js REST API",
      "MySQL detection history",
      "Camera & gallery detection",
      "Bounding boxes + confidence scores",
      "Early treatment recommendations",
    ],
    conclusion:
      "YOLOv8n outperformed YOLO11n and Faster R-CNN ResNet-50, achieving the highest precision, recall, and mAP50. The model was successfully deployed to a mobile device achieving near real-time detection (~1.6 FPS).",

    images: [
      "/projects/thesis/Thesis.png",
      "/projects/thesis/Confusion Matrix (1).png",
    ],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
  },

  {
    id: "PRJ / 02 — PUBLISHED",
    badge: "ICOSA 2026",
    title: "Web-Based Corn Leaf Disease Detection System",
    desc: "Developed a web-based disease detection system using ConvNeXt-Small, achieving 97.31% test accuracy across 4 classes on 4,188 images, with an interactive Flask web application featuring confidence scoring and treatment recommendations.",
    stack: ["Python", "Flask", "ConvNeXt-Small", "OpenCV"],
    problem:
      "Farmers need a practical web-based tool to identify corn leaf diseases from images and receive treatment guidance without relying on manual visual inspection.",
    dataset: [
      { label: "Images", value: "4,188" },
      {
        label: "Classes",
        value: "4 (Blight, Common Rust, Gray Leaf Spot, Healthy)",
      },
      { label: "Split", value: "80:10:10 (train:val:test)" },
    ],
    model: {
      name: "ConvNeXt-Small",
      task: "Multi-class image classification — fine-tuned on ImageNet weights",
    },
    results: [{ value: "97.31%", label: "Test accuracy" }],
    implementation: [
      "Flask web application",
      "Image upload interface",
      "Top-three predictions with confidence scores",
      "UNCERTAIN status for low confidence",
      "Treatment recommendations per disease class",
    ],
    conclusion:
      "ConvNeXt-Small achieved 97.31% test accuracy across 4 classes, outperforming EfficientNet-B0 (96.28%) and ResNet-50 (91.24%). The system was presented at ICOSA 2026.",

    images: [
      "/projects/Comvis/comvis.png",
      "/projects/Comvis/Confusion Matrix (2).png",
    ],
    github: "https://github.com/irajesicajanuaris/deteksidaun.git",
    live: "https://your-live-website.vercel.app",
  },

  {
    id: "PRJ / 03 — CAPSTONE",
    badge: "DJKI Copyright",
    title: "Village Financial Recording Mobile Application",
    desc: "Developed a mobile application for village financial transaction recording and reporting. Registered as a copyrighted computer program by the Direktorat Jenderal Kekayaan Intelektual (DJKI). Registration No.: EC002026071168.",
    stack: ["Flutter", "Firebase", "MySQL"],
    problem:
      "Financial recording at the RT level is still done manually using notebooks, leading to slow reporting, data errors, and limited transparency for residents.",
    implementation: [
      "Flutter mobile app (admin & resident roles)",
      "Firebase authentication",
      "MySQL database",
      "RT fund income/expense management",
      "Resident savings tracking",
      "QR barcode scanning",
      "Activity/event management",
      "Financial transaction history",
    ],
    conclusion:
      "The application successfully digitizes financial recording for RT 03/RW 09 Desa Klapagading, reducing manual errors and improving transparency. Registered as a copyrighted computer program with DJKI (Reg. No. EC002026071168).",

    images: [],
    github: "https://github.com/USERNAME/YOUR-REPOSITORY",
    live: "https://your-live-website.vercel.app",
  },

  {
    id: "PRJ / 04 — DATA SCIENCE",
    badge: "Classification",
    title: "Depression Classification among University Students",
    desc: "Built a binary classification pipeline using Logistic Regression and Random Forest on 101 survey records with 11 features, achieving 81.0% test accuracy. Applied data preprocessing, feature engineering, stratified cross-validation, and feature-influence analysis.",
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-Learn"],
    problem:
      "Depression among university students has a high prevalence but is often undetected. Conventional screening relies on psychological scales that require active participation. A data-driven approach can support early identification.",
    dataset: [
      { label: "Records", value: "101" },
      { label: "Features", value: "11" },
      { label: "Split", value: "80:20 (train:test), stratified" },
      { label: "Source", value: "Mental Health of Students (Kaggle)" },
    ],
    model: {
      name: "Logistic Regression",
      task: "Binary classification — compared with Random Forest",
    },
    results: [
      { value: "81.0%", label: "Test accuracy" },
      { value: "0.755", label: "ROC-AUC (LR)" },
      { value: "0.621", label: "F1 CV (LR)" },
    ],
    implementation: [
      "Preprocessing pipeline with ColumnTransformer",
      "Feature engineering (year extraction, CGPA binning)",
      "5-fold stratified cross-validation",
      "Feature influence analysis (LR coefficients + RF importance)",
      "ROC-AUC probability analysis",
    ],
    conclusion:
      "Logistic Regression achieved 81.0% test accuracy with better probability calibration (ROC-AUC 0.755) than Random Forest (0.735). Top predictive features included CGPA, study year, and sleep quality.",

    images: [
      "/projects/BigData/Confusion Matrix (3).png",
      "/projects/BigData/Confusion Matrix (4).png",
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
