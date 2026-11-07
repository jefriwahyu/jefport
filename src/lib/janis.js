const PROFILE = {
  name: "Jefri Wahyudiana Putra",
  nickname: "jefri",
  roles: "Fullstack Developer building secure systems",
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
    keys: ["halo", "hello", "hi", "hei", "pagi", "siang", "sore", "malam", "assalamu"],
    reply:
      "Halo. Sistem aktif. Tanyakan apa saja tentang CV, skill, pengalaman, atau project Jefri.",
    en: "Hello. System online. Ask me anything about Jefri's CV, skills, experience, or projects.",
  },
  {
    keys: ["siapa", "nama", "whoami", "who are you", "tentang", "profil", "wahyudi", "jefri", "panggil"],
    reply: `Saya Jefri Wahyudiana Putra — ${PROFILE.roles}, berbasis di ${PROFILE.location}.`,
    en: `I'm Jefri Wahyudiana Putra — ${PROFILE.roles}, based in ${PROFILE.location}.`,
  },
  {
    keys: ["role", "posisi", "kerja sebagai", "developer apa", "target", "position"],
    reply: `Role target: ${PROFILE.roles}. Fokus utama back-end & full-stack, dengan perhatian pada keamanan aplikasi dan infrastruktur server.`,
    en: `Target roles: ${PROFILE.roles}. Main focus on back-end & full-stack, with attention to application and server infrastructure security.`,
  },
  {
    keys: ["proflow", "tugas akhir", "ta ", "e-procurement", "asp.net", "aspnet", ".net", "thesis"],
    reply:
      "ProFlowApp (Final Project) — e-procurement ASP.NET Core MVC, EF Core, SQL Server, BCrypt, SSRS (PDF/Excel), + microservice Python/Flask klasifikasi urgensi (akurasi 95%). Repo: github.com/jefriwahyu/ProflowApp",
    en: "ProFlowApp (Final Project) — e-procurement ASP.NET Core MVC, EF Core, SQL Server, BCrypt, SSRS (PDF/Excel), + a Python/Flask urgency-classification microservice (95% accuracy). Repo: github.com/jefriwahyu/ProflowApp",
  },
  {
    keys: ["pemira", "voting", "e-voting", "evoting", "pemilu", "election"],
    reply:
      "Pemira E-Voting — platform e-voting Laravel + Filament (admin dashboard), satu akun satu suara, hak pilih per program studi & jenis pemilihan. 3.458 pemilih terdaftar, 1.124 suara diproses tanpa error/duplikasi.",
    en: "Pemira E-Voting — Laravel + Filament e-voting platform (admin dashboard), one account one vote, eligibility by study program & election type. 3,458 registered voters, 1,124 votes processed without errors/duplicates.",
  },
  {
    keys: ["tabungan", "tabunganku", "yolo", "rupiah", "computer vision", " cv", " ai", "kamera", "webcam", "savings", "banknote", "camera"],
    reply:
      "TabunganKu AI — aplikasi tabungan dengan YOLOv8 (mAP50 98,7%) untuk deteksi uang kertas Rupiah via webcam, backend FastAPI, dashboard Vue.js 3 + Tailwind CSS, database MySQL.",
    en: "TabunganKu AI — savings app with YOLOv8 (mAP50 98.7%) for Rupiah banknote detection via webcam, FastAPI backend, Vue.js 3 + Tailwind CSS dashboard, MySQL database.",
  },
  {
    keys: ["kuykontak", "kontak", "flutter", "contact app"],
    reply:
      "KuyKontak — REST API aplikasi kontak Flutter (CRUD, sinkronisasi data, favorit). Dual backend: Express.js + MongoDB (via Cloudflare Tunnel) dan CodeIgniter 4 + MySQL.",
    en: "KuyKontak — REST API for a Flutter contact app (CRUD, data sync, favorites). Dual backend: Express.js + MongoDB (via Cloudflare Tunnel) and CodeIgniter 4 + MySQL.",
  },
  {
    keys: ["project", "proyek", "portfolio", "portofolio", "karya", "dibuat", "aplikasi apa"],
    reply:
      "5 project utama: Pemira E-Voting, ProFlowApp (e-procurement), Infrastruktur Server (Proxmox VE), TabunganKu AI (YOLOv8), KuyKontak (Flutter). Tanya nama project-nya untuk detail.",
    en: "5 main projects: Pemira E-Voting, ProFlowApp (e-procurement), Server Infrastructure (Proxmox VE), TabunganKu AI (YOLOv8), KuyKontak (Flutter). Ask by name for details.",
  },
  {
    keys: ["pengalaman", "experience", "kerja", "magang", "primalogic", "qa ", "quality", "intern", "work"],
    reply:
      "SQA Intern di PT Primalogic Global Teknologi (Mar–Mei 2026) — integration testing aplikasi dana pensiun enterprise: 214 dari 1.500+ test case manual, 60 defect dilaporkan. Plus freelance full-stack untuk Pemira E-Voting.",
    en: "SQA Intern at PT Primalogic Global Teknologi (Mar–May 2026) — integration testing for an enterprise pension fund app: 214 of 1,500+ manual test cases, 60 defects reported. Plus freelance full-stack work on Pemira E-Voting.",
  },
  {
    keys: ["skill", "stack", "teknologi", "bisa apa", "bahasa", "framework", "tools", "technology", "technologies"],
    reply:
      "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB, SQL Server. AI/CV: YOLOv8, Roboflow. Security & infrastructure: Proxmox VE, Debian, Rocky Linux, fail2ban, UFW, firewalld, Suricata (IDS), WireGuard, Cloudflare Tunnel.",
    en: "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB, SQL Server. AI/CV: YOLOv8, Roboflow. Security & infrastructure: Proxmox VE, Debian, Rocky Linux, fail2ban, UFW, firewalld, Suricata (IDS), WireGuard, Cloudflare Tunnel.",
  },
  {
    keys: ["backend", "laravel", "fastapi", "express", "codeigniter", "php", "python"],
    reply:
      "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Implementasi keamanan menyesuaikan proyek — misalnya BCrypt, rate limit, dan audit trail di ProFlowApp.",
    en: "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Security implementation follows each project — e.g. BCrypt, rate limiting, and audit trail in ProFlowApp.",
  },
  {
    keys: ["frontend", "vue", "react", "tailwind", "css", "javascript"],
    reply: "Front-end: Vue.js 3, Tailwind CSS.",
    en: "Front-end: Vue.js 3, Tailwind CSS.",
  },
  {
    keys: ["database", "mysql", "postgres", "mongo", "sql server", "sqlserver"],
    reply: "Database: MySQL, PostgreSQL, MongoDB, plus SQL Server (dipakai di ProFlowApp).",
    en: "Databases: MySQL, PostgreSQL, MongoDB, plus SQL Server (used in ProFlowApp).",
  },
  {
    keys: ["security", "cyber", "hacking", "red team", "ethical", "keamanan"],
    reply:
      "Fokus keamanan Jefri ada di keamanan aplikasi dan infrastruktur server: hardening Linux (Debian/Rocky), IDS Suricata, firewall, fail2ban, VPN WireGuard, serta praktik keamanan web di proyek (bcrypt, CSRF, RBAC, audit trail). Didukung sertifikat Google Cybersecurity Professional.",
    en: "Jefri's security focus spans application and server infrastructure security: Linux hardening (Debian/Rocky), Suricata IDS, firewalls, fail2ban, WireGuard VPN, plus web security practices in projects (bcrypt, CSRF, RBAC, audit trail). Backed by the Google Cybersecurity Professional certificate.",
  },
  {
    keys: ["infra", "infrastruktur", "proxmox", "hardening", "server", "container", "jaringan"],
    reply:
      "Infrastruktur Server (University course project) — 5 container di Proxmox VE di belakang Cloudflare: load balancer + frontend (Debian 12), dua backend (Debian 12), PostgreSQL master–slave (Rocky Linux 9). Hardening: unattended-upgrades, SSH key-only, fail2ban, UFW/firewalld, Suricata IDS, WireGuard VPN.",
    en: "Server Infrastructure (University course project) — 5 containers on Proxmox VE behind Cloudflare: load balancer + frontend (Debian 12), two backends (Debian 12), PostgreSQL master–slave (Rocky Linux 9). Hardening: unattended-upgrades, key-only SSH, fail2ban, UFW/firewalld, Suricata IDS, WireGuard VPN.",
  },
  {
    keys: ["pendidikan", "education", "kuliah", "kampus", "ulbi", "lulus", "gpa", "ipk", "d3", "informatika", "graduate", "degree"],
    reply: `Lulusan D3 Teknik Informatika ULBI (Agustus 2026), IPK 3.86/4.00.`,
    en: `D3 Informatics Engineering graduate, ULBI (August 2026), GPA 3.86/4.00.`,
  },
  {
    keys: ["sertifikat", "sertifikasi", "certificate", "certification", "dicoding", "bnsp", "google"],
    reply:
      "Sertifikasi: Google Cybersecurity Professional, Google AI Essentials, BNSP Junior Web Developer, dan beberapa kursus Dicoding (back-end JS, front-end, fundamental back-end).",
    en: "Certifications: Google Cybersecurity Professional, Google AI Essentials, BNSP Junior Web Developer, and several Dicoding courses (JS back-end, front-end, back-end fundamentals).",
  },
  {
    keys: ["email", "mail", "hubungi", "kontak", "contact", "telepon", "phone", "wa "],
    reply: `Email: ${PROFILE.email}. LinkedIn: ${PROFILE.linkedin}. GitHub: ${PROFILE.github}.`,
    en: `Email: ${PROFILE.email}. LinkedIn: ${PROFILE.linkedin}. GitHub: ${PROFILE.github}.`,
  },
  {
    keys: ["linkedin"],
    reply: `LinkedIn: ${PROFILE.linkedin}.`,
    en: `LinkedIn: ${PROFILE.linkedin}.`,
  },
  {
    keys: ["github", "repo", "repository", "source"],
    reply: `GitHub: ${PROFILE.github}. Repo ProFlowApp: github.com/jefriwahyu/ProflowApp`,
    en: `GitHub: ${PROFILE.github}. ProFlowApp repo: github.com/jefriwahyu/ProflowApp`,
  },
  {
    keys: ["cv", "resume", "download"],
    reply: "CV bisa diunduh lewat tombol [ Download CV ] di hero / about halaman ini.",
    en: "You can download the CV via the [ Download CV ] button in the hero / about section.",
  },
  {
    keys: ["lokasi", "domisili", "tinggal", "bandung", "location", "dimana", "where"],
    reply: `Berbasis di ${PROFILE.location}. Terbuka untuk freelance & full-time.`,
    en: `Based in ${PROFILE.location}. Open for freelance & full-time.`,
  },
  {
    keys: ["gaji", "salary", "rate", "harga", "bayar"],
    reply: "Untuk rate / gaji, hubungi langsung via email agar bisa didiskusikan sesuai scope.",
    en: "For rates / salary, please reach out by email so we can discuss based on scope.",
  },
  {
    keys: ["terima kasih", "makasih", "thanks", "thank you", "oke", "ok ", "siap", "mantap"],
    reply: "Sama-sama. Ada lagi yang ingin ditanyakan soal profil Jefri?",
    en: "You're welcome. Anything else about Jefri's profile?",
  },
];

const FALLBACK = {
  id: "Maaf, saya hanya bisa membahas seputar profil, skill, pengalaman, dan project di situs ini. Coba tanya soal project, skill, atau pengalaman Jefri.",
  en: "Sorry, I can only discuss the profile, skills, experience, and projects on this site. Try asking about Jefri's projects, skills, or experience.",
};

function localAnswer(input, lang) {
  const text = ` ${input.toLowerCase()} `;
  for (const rule of RULES) {
    if (rule.keys.some((k) => text.includes(k)))
      return lang === "en" && rule.en ? rule.en : rule.reply;
  }
  return FALLBACK[lang] || FALLBACK.id;
}

/**
 * Ask Janis. Tries the (optional) external LLM endpoint first so a future
 * backend can take over, then falls back to the local CV knowledge base.
 */
export async function askJanis(question, lang = "id") {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, lang }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      if (data?.text) return { text: data.text, source: "llm" };
    }
  } catch {
    /* no backend — use local engine */
  }
  // Small delay so the typing indicator reads naturally
  await new Promise((r) => setTimeout(r, 650));
  return { text: localAnswer(question, lang), source: "local" };
}

export { PROFILE };
