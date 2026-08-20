export type Lang = "en" | "id";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navCredentials: "Credentials",
    navContact: "Contact",

    // Hero
    heroEyebrow: "Data Analysis · AI / Machine Learning · Database System",
    heroRole: "Data Analyst · AI / Machine Learning · Database System",
    heroLede: "Experienced in data analysis, database systems, computer vision, machine learning, and web and mobile application development through academic and applied projects.",
    heroCtaProjects: "View Projects",
    heroCtaContact: "Get in Touch",

    // About
    aboutNum: "01",
    aboutTitle: "About",
    aboutSub: "A brief overview of who I am",
    aboutP1: "Fresh graduate in Information Technology from Universitas Muhammadiyah Yogyakarta with a cumulative GPA of 3.77/4.00. Experienced in data analysis, database systems, computer vision, machine learning, and web and mobile application development through academic and applied projects.",
    aboutP2: "Developed AI-based corn leaf disease detection systems using YOLOv8n and ConvNeXt-Small, as well as a village financial recording application using Flutter, Node.js, and MySQL.",
    aboutP3: "Holds a BNSP Certified Database Administrator (CDBA) credential and has presented research at an international conference — the paper has been accepted for publication and is forthcoming in December 2026.",
    statFocus: "Focus",
    statPublication: "Publication",
    statCopyright: "Copyright",
    statCertification: "Certification",
    statLanguages: "Languages",

    // Skills
    skillsNum: "02",
    skillsTitle: "Technical Skills",
    skillsSub: "Technologies I work with",
    skillLanguages: "Languages",
    skillFrameworks: "Frameworks & Libraries",
    skillDataAI: "Data & AI",
    skillDatabase: "Database",
    skillTools: "Tools & Technologies",

    // Experience
    expNum: "03",
    expTitle: "Experience",
    expSub: "Roles and responsibilities",
    expJob1Title: "Front-End Developer Intern",
    expJob1Org: "Directorate of Digital Innovation, Universitas Muhammadiyah Yogyakarta",
    expJob1Bullet1: "Developed and maintained over 15 responsive web pages for the UMY Marketplace using HTML, CSS, JavaScript, and Bootstrap.",
    expJob1Bullet2: "Implemented responsive UI components ensuring consistent user experience across multiple devices.",
    expJob2Title: "Staff, Internal & External Affairs",
    expJob2Org: "DPM Faculty of Engineering, Universitas Muhammadiyah Yogyakarta",
    expJob2Bullet1: "Coordinated communication between 200+ students and faculty administration.",
    expJob2Bullet2: "Organized mid-term and monthly evaluations to improve organizational performance.",

    // Projects
    projNum: "04",
    projTitle: "Projects",
    projSub: "Selected work showcasing my technical abilities",
    proj1Title: "AI Based Mobile Application for Real-Time Corn Leaf Disease Detection",
    proj1Desc: "Developed an AI-powered mobile application using YOLOv8n to detect and classify four corn leaf conditions, achieving 0.990 precision, 0.983 recall, and 0.993 mAP50.",
    proj2Title: "Web-Based Corn Leaf Disease Detection System",
    proj2Desc: "Developed a web-based disease detection system using ConvNeXt-Small, achieving 97.31% test accuracy across 4 classes on 4,188 images.",
    proj3Title: "Village Financial Recording Mobile Application",
    proj3Desc: "Developed a mobile application for village financial transaction recording and reporting, registered as a copyrighted computer program with DJKI.",
    proj4Title: "Depression Classification among University Students",
    proj4Desc: "Built a binary classification pipeline using Logistic Regression and Random Forest on 101 survey records with 11 features, achieving 81.0% test accuracy.",
    projBadge: "Mobile · Real-time",
    projBadge2: "ICOSA 2026",
    projBadge3: "DJKI Copyright",
    projBadge4: "Classification",

    // Credentials
    credNum: "05",
    credTitle: "Certifications",
    credSub: "Professional credentials and recognitions",
    cred1Title: "Certified Database Administrator (CDBA)",
    cred1Desc: "Badan Nasional Sertifikasi Profesi (BNSP). Covers SQL, database design, ERD modeling, backup/recovery, and maintenance planning.",
    cred2Title: "ICOSA Published Research",
    cred2Desc: "Web-based corn leaf disease detection system using ConvNeXt-Small for automatic disease classification, presented at the International Conference on Sustainable Agriculture (ICOSA) 2026.",
    cred3Title: "DJKI Registered Copyright",
    cred3Desc: "Village Financial Recording App registered as a copyrighted computer program with DJKI.",

    // Education
    eduNum: "06",
    eduTitle: "Education",
    eduSub: "Academic background",
    eduDegree: "Bachelor of Information Technology",
    eduGpa: "GPA / 4.00",

    // Contact
    contactEyebrow: "Let's connect",
    contactTitle: "Open to Opportunities",
    contactDesc: "I am actively seeking roles in Machine Learning, Computer Vision, and Data Science. Feel free to reach out to discuss any of my projects.",
    contactEmail: "Email Me",
    contactLinkedin: "LinkedIn",
    contactGithub: "GitHub",
    contactWhatsapp: "WhatsApp",

    // Footer
    footerLocation: "Kediri, East Java, ID",

    // Stat values
    statFocusVal: "AI / ML / CV",
    statPublicationVal: "ICOSA 2026",
    statCopyrightVal: "DJKI Registered",
    statCertVal: "BNSP · CDBA",
    statLangVal: "ID (native) · EN (int.)",

    // Experience dates
    exp1When: "OCT — DEC 2025",
    exp2When: "2023 — 2024",
  },

  id: {
    // Navbar
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navExperience: "Pengalaman",
    navProjects: "Proyek",
    navCredentials: "Sertifikasi",
    navContact: "Kontak",

    // Hero
    heroEyebrow: "Analisis Data · AI / Machine Learning · Basis Data",
    heroRole: "Data Analyst · AI / Machine Learning · Database System",
    heroLede: "Berpengalaman dalam analisis data, sistem basis data, computer vision, machine learning, serta pengembangan aplikasi web dan mobile melalui proyek akademik dan terapan.",
    heroCtaProjects: "Lihat Proyek",
    heroCtaContact: "Hubungi Saya",

    // About
    aboutNum: "01",
    aboutTitle: "Tentang",
    aboutSub: "Ringkasan singkat tentang saya",
    aboutP1: "Lulusan baru Teknologi Informasi dari Universitas Muhammadiyah Yogyakarta dengan IPK 3.77/4.00. Berpengalaman dalam analisis data, sistem basis data, computer vision, machine learning, serta pengembangan aplikasi web dan mobile melalui proyek akademik dan terapan.",
    aboutP2: "Mengembangkan sistem deteksi penyakit daun jagung berbasis AI menggunakan YOLOv8n dan ConvNeXt-Small, serta aplikasi pencatatan keuangan desa menggunakan Flutter, Node.js, dan MySQL.",
    aboutP3: "Memegang kredensial BNSP Certified Database Administrator (CDBA) dan telah mempresentasikan penelitian di konferensi internasional — makalah telah diterima untuk publikasi dan akan terbit pada Desember 2026.",
    statFocus: "Fokus",
    statPublication: "Publikasi",
    statCopyright: "Hak Cipta",
    statCertification: "Sertifikasi",
    statLanguages: "Bahasa",

    // Skills
    skillsNum: "02",
    skillsTitle: "Keahlian Teknis",
    skillsSub: "Teknologi yang saya gunakan",
    skillLanguages: "Bahasa Pemrograman",
    skillFrameworks: "Framework & Library",
    skillDataAI: "Data & AI",
    skillDatabase: "Basis Data",
    skillTools: "Alat & Teknologi",

    // Experience
    expNum: "03",
    expTitle: "Pengalaman",
    expSub: "Peran dan tanggung jawab",
    expJob1Title: "Intern Pengembang Front-End",
    expJob1Org: "Direktorat Inovasi Digital, Universitas Muhammadiyah Yogyakarta",
    expJob1Bullet1: "Mengembangkan dan memelihara lebih dari 15 halaman web responsif untuk UMY Marketplace menggunakan HTML, CSS, JavaScript, dan Bootstrap.",
    expJob1Bullet2: "Mengimplementasikan komponen UI responsif yang memastikan pengalaman pengguna yang konsisten di berbagai perangkat.",
    expJob2Title: "Staf Hubungan Internal & Eksternal",
    expJob2Org: "DPM Fakultas Teknik, Universitas Muhammadiyah Yogyakarta",
    expJob2Bullet1: "Mengkoordinasikan komunikasi antara 200+ mahasiswa dan administrasi fakultas.",
    expJob2Bullet2: "Menyelenggarakan evaluasi tengah semester dan bulanan untuk meningkatkan kinerja organisasi.",

    // Projects
    projNum: "04",
    projTitle: "Proyek",
    projSub: "Karya terpilih yang menunjukkan kemampuan teknis saya",
    proj1Title: "Aplikasi Mobile Berbasis AI untuk Deteksi Penyakit Daun Jagung Real-Time",
    proj1Desc: "Mengembangkan aplikasi mobile berbasis AI menggunakan YOLOv8n untuk mendeteksi dan mengklasifikasikan empat kondisi daun jagung, mencapai precision 0.990, recall 0.983, dan mAP50 0.993.",
    proj2Title: "Sistem Deteksi Penyakit Daun Jagung Berbasis Web",
    proj2Desc: "Mengembangkan sistem deteksi penyakit berbasis web menggunakan ConvNeXt-Small, mencapai akurasi pengujian 97.31% pada 4 kelas dari 4.188 gambar.",
    proj3Title: "Aplikasi Pencatatan Keuangan Desa Mobile",
    proj3Desc: "Mengembangkan aplikasi mobile untuk pencatatan dan pelaporan transaksi keuangan desa, terdaftar sebagai program komputer berhak cipta di DJKI.",
    proj4Title: "Klasifikasi Depresi pada Mahasiswa",
    proj4Desc: "Membangun pipeline klasifikasi biner menggunakan Logistic Regression dan Random Forest pada 101 data survei dengan 11 fitur, mencapai akurasi pengujian 81.0%.",
    projBadge: "Mobile · Real-time",
    projBadge2: "ICOSA 2026",
    projBadge3: "Hak Cipta DJKI",
    projBadge4: "Klasifikasi",

    // Credentials
    credNum: "05",
    credTitle: "Sertifikasi",
    credSub: "Kredensial dan pengakuan profesional",
    cred1Title: "Database Administrator Bersertifikat (CDBA)",
    cred1Desc: "Badan Nasional Sertifikasi Profesi (BNSP). Mencakup SQL, desain database, pemodelan ERD, backup/recovery, dan perencanaan pemeliharaan.",
    cred2Title: "Penelitian Terpublikasi ICOSA",
    cred2Desc: "Sistem deteksi penyakit daun jagung berbasis web menggunakan ConvNeXt-Small untuk klasifikasi penyakit otomatis, dipresentasikan di International Conference on Sustainable Agriculture (ICOSA) 2026.",
    cred3Title: "Hak Cipta Terdaftar DJKI",
    cred3Desc: "Aplikasi Pencatatan Keuangan Desa terdaftar sebagai program komputer berhak cipta di DJKI.",

    // Education
    eduNum: "06",
    eduTitle: "Pendidikan",
    eduSub: "Latar belakang akademik",
    eduDegree: "Sarjana Teknologi Informasi",
    eduGpa: "IPK / 4.00",

    // Contact
    contactEyebrow: "Mari terhubung",
    contactTitle: "Terbuka untuk Peluang",
    contactDesc: "Saya sedang aktif mencari peran di bidang Machine Learning, Computer Vision, dan Data Science. Jangan ragu untuk menghubungi saya terkait proyek-proyek saya.",
    contactEmail: "Email Saya",
    contactLinkedin: "LinkedIn",
    contactGithub: "GitHub",
    contactWhatsapp: "WhatsApp",

    // Footer
    footerLocation: "Kediri, Jawa Timur, ID",

    // Stat values
    statFocusVal: "AI / ML / CV",
    statPublicationVal: "ICOSA 2026",
    statCopyrightVal: "Terdaftar DJKI",
    statCertVal: "BNSP · CDBA",
    statLangVal: "ID (native) · EN (int.)",

    // Experience dates
    exp1When: "OKT — DES 2025",
    exp2When: "2023 — 2024",
  },
};
