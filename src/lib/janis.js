const PROFILE = {
  name: "Jefri Wahyudiana Putra",
  nickname: "jefri",
  roles: "Fullstack Developer",
  location: "Bandung, Indonesia",
  email: "jefriwahyudiana@gmail.com",
  linkedin: "linkedin.com/in/jefriwp",
  github: "github.com/jefriwahyu",
  education: "D3 Informatics Engineering, ULBI (2023–2026), GPA 3.86/4.00",
};

export const STRINGS = {
  id: {
    greeting: "Sistem aktif. Tanyakan apa saja tentang CV atau project saya.",
    placeholder: "tanya soal CV / project...",
    typing: "▊ typing",
  },
  en: {
    greeting: "System online. Ask me anything about my CV or projects.",
    placeholder: "ask about CV / projects...",
    typing: "▊ typing",
  },
};

const RULES = [
  {
    intent: "help",
    keys: ["help", "bantuan", "menu", "halo", "hi", "start"],
    reply:
      "Perintah yang dapat digunakan: 'projects' (daftar proyek), 'infra' (arsitektur Proxmox), 'tuwangapp' (finance AI), 'proflowapp' (e-procurement), 'tabunganku' (computer vision), 'kuykontak' (dual backend), 'pendidikan' (kampus & IPK), 'sertifikasi', atau 'kontak'.",
    en: "Available commands: 'projects' (project list), 'infra' (Proxmox architecture), 'tuwangapp' (finance AI), 'proflowapp' (e-procurement), 'tabunganku' (computer vision), 'kuykontak' (dual backend), 'education' (degree & GPA), 'certifications', or 'contact'.",
  },
  {
    intent: "tuwangapp",
    keys: ["tuwangapp", "tuwang", "taktuntuwang", "finance", "keuangan", "groq"],
    reply:
      "TuwangApp: Aplikasi personal finance tracker berbasis conversational AI. Tech stack: React 19, Go (Gin), Supabase (PostgreSQL & Auth), dan Groq API (openai/gpt-oss-20b).",
    en: "TuwangApp: AI-powered conversational personal finance tracker. Tech stack: React 19, Go (Gin), Supabase (PostgreSQL & Auth), and Groq API.",
  },
  {
    intent: "proflowapp",
    keys: ["proflowapp", "proflow", "procurement", "pengadaan", "asp.net", "asp net", "dotnet"],
    reply:
      "ProFlowApp: Sistem e-procurement enterprise dengan RBAC multi-tier, approval workflow otomatis, dan modul pelaporan SSRS. Tech stack: ASP.NET Core, microservice Flask, SQL Server, dan SSRS.",
    en: "ProFlowApp: Enterprise e-procurement system featuring multi-tier RBAC, automated approval workflows, and SSRS reporting. Tech stack: ASP.NET Core, Flask microservice, SQL Server, and SSRS.",
  },
  {
    intent: "infra",
    keys: ["infra", "proxmox", "server", "jaringan", "load balancer"],
    reply:
      "Infrastructure Lab: Arsitektur terdistribusi Proxmox VE dengan 3 LXC Debian 12 (LXC 1: Cloudflare Tunnel + Round Robin Load Balancer + Frontend; LXC 2 & 3: Backend) dan 2 VM Rocky Linux 9 (VM 1: DB Master Write/CUD; VM 2: DB Slave Read via replikasi PostgreSQL). Dilengkapi hardening Fail2ban dan Suricata.",
    en: "Infrastructure Lab: Distributed Proxmox VE architecture with 3 Debian 12 LXCs (LXC 1: Cloudflare Tunnel + Round Robin LB + Frontend; LXC 2 & 3: Backend nodes) and 2 Rocky Linux 9 VMs (DB Master Write and DB Slave Read with PostgreSQL replication), hardened with Fail2ban and Suricata.",
  },
  {
    intent: "tabunganku",
    keys: ["tabunganku", "tabungan", "yolo", "cv", "vision", "rupiah"],
    reply:
      "TabunganKu AI: Aplikasi tabungan pintar dengan deteksi uang kertas Rupiah otomatis via webcam menggunakan model custom YOLOv8 (akurasi mAP50 98,7%), backend asinkron FastAPI, frontend Vue.js 3 + Tailwind CSS, dan database MySQL.",
    en: "TabunganKu AI: Smart savings app with real-time Indonesian Rupiah banknote detection via webcam using custom YOLOv8 (98.7% mAP50 accuracy), asynchronous FastAPI backend, Vue.js 3 + Tailwind CSS, and MySQL.",
  },
  {
    intent: "kuykontak",
    keys: ["kuykontak", "flutter", "codeigniter", "mongo", "aplikasi kontak"],
    reply:
      "KuyKontak: Aplikasi manajemen kontak mobile (Flutter) dengan arsitektur backend ganda: Express.js + MongoDB via Cloudflare Tunnel, serta CodeIgniter 4 + MySQL pada hosting konvensional untuk memvalidasi interoperabilitas REST API.",
    en: "KuyKontak: Cross-platform Flutter contact app demonstrating API interoperability across two backends: Express.js + MongoDB via Cloudflare Tunnel, and CodeIgniter 4 + MySQL on conventional hosting.",
  },
  {
    intent: "education",
    keys: ["pendidikan", "kuliah", "kampus", "ipk", "education", "gpa"],
    reply:
      "Pendidikan: D3 Teknik Informatika di Universitas Logistik dan Bisnis Internasional (Lulus Agustus 2026) dengan IPK 3.86 / 4.00, berfokus pada secure back-end development, sistem terdistribusi, dan AI terapan.",
    en: "Education: Associate Degree in Informatics Engineering from Universitas Logistik dan Bisnis Internasional (Graduated August 2026) with GPA 3.86 / 4.00, specialized in secure back-end development, distributed systems, and applied AI.",
  },
  {
    intent: "certifications",
    keys: [
      "sertifikasi",
      "sertifikat",
      "certificate",
      "certificates",
      "certification",
      "certifications",
      "coursera",
      "dicoding",
      "bnsp",
    ],
    reply:
      "Sertifikasi utama: Google Cybersecurity Professional (Coursera), Google AI Essentials (Coursera), Junior Web Developer (BNSP), serta spesialisasi Back-End & Front-End dari Dicoding.",
    en: "Key certifications: Google Cybersecurity Professional (Coursera), Google AI Essentials (Coursera), Junior Web Developer (BNSP), alongside Back-End and Front-End tracks from Dicoding.",
  },
  {
    intent: "contact",
    keys: ["kontak", "contact", "email", "github", "linkedin"],
    reply:
      "Anda dapat terhubung melalui GitHub (github.com/jefriwahyu), LinkedIn, atau email yang tertera di navigasi footer.",
    en: "You can connect via GitHub (github.com/jefriwahyu), LinkedIn, or the direct email linked in the footer navigation.",
  },
  {
    intent: "greeting",
    keys: ["hello", "hei", "pagi", "siang", "sore", "malam", "assalamu"],
    reply:
      "Halo. Sistem aktif. Tanyakan apa saja tentang CV, skill, pengalaman, atau project Jefri.",
    en: "Hello. System online. Ask me anything about Jefri's CV, skills, experience, or projects.",
  },
  {
    intent: "profile",
    keys: ["siapa", "nama", "whoami", "who are you", "tentang", "profil", "wahyudi", "jefri", "panggil"],
    reply: `Saya Jefri Wahyudiana Putra, ${PROFILE.roles}, berbasis di ${PROFILE.location}.`,
    en: `I'm Jefri Wahyudiana Putra, ${PROFILE.roles}, based in ${PROFILE.location}.`,
  },
  {
    intent: "role",
    keys: ["role", "posisi", "kerja sebagai", "developer apa", "target", "position"],
    reply: `Role target: ${PROFILE.roles}. Fokus utama fullstack & frontend, dengan perhatian pada cybersecurity.`,
    en: `Target roles: ${PROFILE.roles}. Main focus on fullstack & frontend, with attention to cybersecurity.`,
  },
  {
    intent: "pemira",
    keys: ["pemira", "voting", "e-voting", "evoting", "pemilu", "election"],
    reply:
      "Pemira E-Voting: platform e-voting Laravel + Filament (admin dashboard), satu akun satu suara, hak pilih per program studi & jenis pemilihan. 3.458 pemilih terdaftar, 1.124 suara diproses tanpa error/duplikasi.",
    en: "Pemira E-Voting: Laravel + Filament e-voting platform (admin dashboard), one account one vote, eligibility by study program & election type. 3,458 registered voters, 1,124 votes processed without errors/duplicates.",
  },
  {
    intent: "projects",
    keys: ["project", "proyek", "portfolio", "portofolio", "karya", "dibuat", "aplikasi apa"],
    reply:
      "6 project utama: Pemira E-Voting, Taktuntuwang (TuwangApp), ProFlowApp (e-procurement), TabunganKu AI (YOLOv8), KuyKontak (Flutter), Infrastruktur Server (Proxmox VE). Tanya nama project-nya untuk detail.",
    en: "6 main projects: Pemira E-Voting, Taktuntuwang (TuwangApp), ProFlowApp (e-procurement), TabunganKu AI (YOLOv8), KuyKontak (Flutter), Server Infrastructure (Proxmox VE). Ask by name for details.",
  },
  {
    intent: "experience",
    keys: ["pengalaman", "experience", "kerja", "magang", "primalogic", "qa ", "quality", "intern", "work"],
    reply:
      "SQA Intern di PT Primalogic Global Teknologi (Mar-Mei 2026): integration testing aplikasi dana pensiun enterprise, 214 dari 1.500+ test case manual, 60 defect dilaporkan. Plus freelance full-stack untuk Pemira E-Voting.",
    en: "SQA Intern at PT Primalogic Global Teknologi (Mar-May 2026): integration testing for an enterprise pension fund app, 214 of 1,500+ manual test cases, 60 defects reported. Plus freelance full-stack work on Pemira E-Voting.",
  },
  {
    intent: "skills",
    keys: ["skill", "stack", "teknologi", "bisa apa", "bahasa", "framework", "tools", "technology", "technologies"],
    reply:
      "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB, SQL Server. AI/CV: YOLOv8, Roboflow. Security & infrastructure: Proxmox VE, Debian, Rocky Linux, fail2ban, UFW, firewalld, Suricata (IDS), WireGuard, Cloudflare Tunnel.",
    en: "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB, SQL Server. AI/CV: YOLOv8, Roboflow. Security & infrastructure: Proxmox VE, Debian, Rocky Linux, fail2ban, UFW, firewalld, Suricata (IDS), WireGuard, Cloudflare Tunnel.",
  },
  {
    intent: "backend",
    keys: ["backend", "laravel", "fastapi", "express", "codeigniter", "php", "python"],
    reply:
      "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Implementasi keamanan menyesuaikan proyek, misalnya BCrypt, rate limit, dan audit trail di ProFlowApp.",
    en: "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Security implementation follows each project, e.g. BCrypt, rate limiting, and audit trail in ProFlowApp.",
  },
  {
    intent: "frontend",
    keys: ["frontend", "vue", "react", "tailwind", "css", "javascript"],
    reply: "Front-end: Vue.js 3, Tailwind CSS.",
    en: "Front-end: Vue.js 3, Tailwind CSS.",
  },
  {
    intent: "database",
    keys: ["database", "mysql", "postgres", "mongo", "sql server", "sqlserver"],
    reply: "Database: MySQL, PostgreSQL, MongoDB, plus SQL Server (dipakai di ProFlowApp).",
    en: "Databases: MySQL, PostgreSQL, MongoDB, plus SQL Server (used in ProFlowApp).",
  },
  {
    intent: "security",
    keys: ["security", "cyber", "hacking", "red team", "ethical", "keamanan"],
    reply:
      "Fokus keamanan Jefri ada di keamanan aplikasi dan infrastruktur server: hardening Linux (Debian/Rocky), IDS Suricata, firewall, fail2ban, VPN WireGuard, serta praktik keamanan web di proyek (bcrypt, CSRF, RBAC, audit trail). Didukung sertifikat Google Cybersecurity Professional.",
    en: "Jefri's security focus spans application and server infrastructure security: Linux hardening (Debian/Rocky), Suricata IDS, firewalls, fail2ban, WireGuard VPN, plus web security practices in projects (bcrypt, CSRF, RBAC, audit trail). Backed by the Google Cybersecurity Professional certificate.",
  },
  {
    intent: "cv",
    keys: ["cv", "resume", "download"],
    reply:
      "CV bisa dilihat lewat tombol [ Lihat CV ] di hero section halaman ini (membuka Google Drive di tab baru).",
    en: "You can view the CV via the [ View CV ] button in the hero section (opens Google Drive in a new tab).",
  },
  {
    intent: "location",
    keys: ["lokasi", "domisili", "tinggal", "bandung", "location", "dimana", "where"],
    reply: `Berbasis di ${PROFILE.location}. Terbuka untuk freelance & full-time.`,
    en: `Based in ${PROFILE.location}. Open for freelance & full-time.`,
  },
  {
    intent: "salary",
    keys: ["gaji", "salary", "rate", "harga", "bayar"],
    reply: "Untuk rate / gaji, hubungi langsung via email agar bisa didiskusikan sesuai scope.",
    en: "For rates / salary, please reach out by email so we can discuss based on scope.",
  },
  {
    intent: "thanks",
    keys: ["terima kasih", "makasih", "thanks", "thank you", "oke", "ok ", "siap", "mantap"],
    reply: "Sama-sama. Ada lagi yang ingin ditanyakan soal profil Jefri?",
    en: "You're welcome. Anything else about Jefri's profile?",
  },
];

const FALLBACK = {
  id: "Perintah atau kata kunci tidak dikenali. Ketik 'help' atau sebutkan nama proyek (contoh: 'infra', 'tuwangapp', 'tabunganku') untuk info spesifik.",
  en: "Command or keyword not recognized. Type 'help' or enter a project name (e.g. 'infra', 'tuwangapp', 'tabunganku') for details.",
};

const normalize = (value) => ` ${value.toLowerCase().replace(/\s+/g, " ").trim()} `;

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function matchesKeyword(text, keyword) {
  const key = keyword.toLowerCase();
  // Very short keywords (hi, cv, gpa, ipk) use word boundaries so they do
  // not match unrelated substrings such as "this" or "machine".
  if (key.length <= 3) {
    return new RegExp(`(^|[^a-z0-9])${escapeRegex(key)}([^a-z0-9]|$)`, "i").test(
      text.trim()
    );
  }
  return text.includes(key);
}

function localAnswer(input, lang) {
  const text = normalize(input);
  const trimmed = text.trim();
  // A standalone "cv" asks for the downloadable CV. Inside a longer query
  // such as "tabunganku cv" it still means computer vision.
  if (trimmed === "cv") {
    const cvRule = RULES.find((rule) => rule.intent === "cv");
    return lang === "en" && cvRule.en ? cvRule.en : cvRule.reply;
  }
  for (const rule of RULES) {
    if (rule.keys.some((key) => matchesKeyword(text, key))) {
      return lang === "en" && rule.en ? rule.en : rule.reply;
    }
  }
  return FALLBACK[lang] || FALLBACK.id;
}

/**
 * Ask Janis using the local, keyword-based knowledge base only.
 * No external AI API is called.
 */
export async function askJanis(question, lang = "id") {
  // Small delay so the typing indicator reads naturally
  await new Promise((r) => setTimeout(r, 650));
  return { text: localAnswer(question, lang), source: "local" };
}

export { PROFILE };
