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
    heroEyebrow: "Machine Learning · Computer Vision",
    heroRole: "Machine Learning Engineer · Computer Vision",
    heroLede: "I build systems that learn to see — from spotting corn leaf disease through a phone camera in real time, to turning messy village ledgers and mental-health survey data into something a person can actually read.",
    heroCtaProjects: "View Projects",
    heroCtaContact: "Get in Touch",

    // About
    aboutNum: "01",
    aboutTitle: "About",
    aboutSub: "A brief overview of who I am",
    aboutP1: "I'm finishing my Information Technology degree at Universitas Muhammadiyah Yogyakarta, with most of my work sitting at the intersection of deep learning and computer vision — the kind of AI that has to look at an image and make a call in real time.",
    aboutP2: "My thesis app detects corn leaf disease straight from a phone camera using YOLOv8n, and a companion web system uses ConvNeXt-Small for the same problem — that one was published at the International Conference on Sustainable Agriculture (ICOSA) 2026.",
    aboutP3: "Outside of models, I've done front-end work on production pages and spent time in student governance coordinating faculty-wide programs. I like projects where the model has to survive contact with a real user, not just a benchmark.",
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
    skillDatabase: "Database",
    skillTools: "Tools & Platforms",

    // Experience
    expNum: "03",
    expTitle: "Experience",
    expSub: "Roles and responsibilities",
    expJob1Title: "Front-End Developer Intern",
    expJob1Org: "Directorate of Digital Innovation, Universitas Muhammadiyah Yogyakarta",
    expJob1Bullet1: "Built and maintained 15+ responsive pages for the UMY Marketplace using HTML, CSS, JavaScript, and Bootstrap.",
    expJob1Bullet2: "Implemented UI components that stayed consistent across pages and screen sizes.",
    expJob2Title: "Internal & External Affairs Staff",
    expJob2Org: "Dewan Perwakilan Mahasiswa (DPM), Faculty of Engineering, UMY",
    expJob2Bullet1: "Coordinated internal and external activities supporting faculty programs.",
    expJob2Bullet2: "Ran mid-term and monthly evaluations to improve organizational performance.",

    // Projects
    projNum: "04",
    projTitle: "Projects",
    projSub: "Selected work showcasing my technical abilities",
    proj1Title: "Real-Time Corn Leaf Disease Detection App",
    proj1Desc: "A mobile app that detects four corn leaf diseases live through the camera and recommends early treatment, with gallery detection, auth, and a detection history log.",
    proj2Title: "Web-Based Corn Leaf Disease Detection System",
    proj2Desc: "A web system using ConvNeXt-Small to classify corn leaf disease from an uploaded image, pairing each prediction with disease info and treatment guidance.",
    proj3Title: "Village Financial Recording App",
    proj3Desc: "A mobile app for recording and reporting village-level financial transactions, registered as a copyrighted computer program with DJKI.",
    proj4Title: "Mental Health Data Analysis",
    proj4Desc: "Preprocessing, exploratory data analysis, and visualization work aimed at surfacing meaningful trends in a mental-health dataset.",
    projBadge: "Mobile · Real-time",
    projBadge2: "ICOSA 2026",
    projBadge3: "DJKI Copyright",
    projBadge4: "Analysis",

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
    heroEyebrow: "Machine Learning · Computer Vision",
    heroRole: "Machine Learning Engineer · Computer Vision",
    heroLede: "Saya membangun sistem yang belajar melihat — dari mendeteksi penyakit daun jagung melalui kamera ponsel secara real-time, hingga mengubah data keuangan desa dan survei kesehatan mental menjadi sesuatu yang bisa dipahami oleh orang biasa.",
    heroCtaProjects: "Lihat Proyek",
    heroCtaContact: "Hubungi Saya",

    // About
    aboutNum: "01",
    aboutTitle: "Tentang",
    aboutSub: "Ringkasan singkat tentang saya",
    aboutP1: "Saya sedang menyelesaikan gelar Teknologi Informasi di Universitas Muhammadiyah Yogyakarta, dengan sebagian besar pekerjaan saya berada di persimpangan deep learning dan computer vision — jenis AI yang harus melihat gambar dan membuat keputusan secara real-time.",
    aboutP2: "Aplikasi skripsi saya mendeteksi penyakit daun jagung langsung dari kamera ponsel menggunakan YOLOv8n, dan sistem web pendamping menggunakan ConvNeXt-Small untuk masalah yang sama — yang dipublikasikan di International Conference on Sustainable Agriculture (ICOSA) 2026.",
    aboutP3: "Di luar model, saya juga melakukan pengembangan front-end untuk halaman produksi dan terlibat dalam kegiatan kemahasiswaan sebagai koordinator program fakultas. Saya menyukai proyek di mana model harus bertahan saat bertemu pengguna sungguhan, bukan sekadar benchmark.",
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
    skillDatabase: "Basis Data",
    skillTools: "Alat & Platform",

    // Experience
    expNum: "03",
    expTitle: "Pengalaman",
    expSub: "Peran dan tanggung jawab",
    expJob1Title: "Intern Pengembang Front-End",
    expJob1Org: "Direktorat Inovasi Digital, Universitas Muhammadiyah Yogyakarta",
    expJob1Bullet1: "Membangun dan memelihara 15+ halaman responsif untuk UMY Marketplace menggunakan HTML, CSS, JavaScript, dan Bootstrap.",
    expJob1Bullet2: "Mengimplementasikan komponen UI yang konsisten di berbagai halaman dan ukuran layar.",
    expJob2Title: "Staf Hubungan Internal & Eksternal",
    expJob2Org: "Dewan Perwakilan Mahasiswa (DPM), Fakultas Teknik, UMY",
    expJob2Bullet1: "Mengkoordinasikan kegiatan internal dan eksternal untuk mendukung program fakultas.",
    expJob2Bullet2: "Menjalankan evaluasi tengah semester dan bulanan untuk meningkatkan kinerja organisasi.",

    // Projects
    projNum: "04",
    projTitle: "Proyek",
    projSub: "Karya terpilih yang menunjukkan kemampuan teknis saya",
    proj1Title: "Aplikasi Deteksi Penyakit Daun Jagung Real-Time",
    proj1Desc: "Aplikasi mobile yang mendeteksi empat jenis penyakit daun jagung melalui kamera secara langsung dan merekomendasikan penanganan awal, lengkap dengan deteksi galeri, autentikasi, dan log riwayat deteksi.",
    proj2Title: "Sistem Deteksi Penyakit Daun Jagung Berbasis Web",
    proj2Desc: "Sistem web menggunakan ConvNeXt-Small untuk mengklasifikasikan penyakit daun jagung dari gambar yang diunggah, dilengkapi informasi penyakit dan panduan pengobatan.",
    proj3Title: "Aplikasi Pencatatan Keuangan Desa",
    proj3Desc: "Aplikasi mobile untuk mencatat dan melaporkan transaksi keuangan tingkat desa, terdaftar sebagai program komputer berhak cipta di DJKI.",
    proj4Title: "Analisis Data Kesehatan Mental",
    proj4Desc: "Pra-pemrosesan, analisis data eksplorasi, dan visualisasi untuk menemukan tren bermakna dalam dataset kesehatan mental.",
    projBadge: "Mobile · Real-time",
    projBadge2: "ICOSA 2026",
    projBadge3: "Hak Cipta DJKI",
    projBadge4: "Analisis",

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
