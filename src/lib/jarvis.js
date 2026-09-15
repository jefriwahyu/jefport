const PROFILE = {
  name: "Jefri Wahyudiana Putra",
  nickname: "jefri",
  roles: "Backend Developer / Full-Stack Developer / Software Engineer",
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
    reply: `Role target: ${PROFILE.roles}. Fokus utama back-end & full-stack, dengan minat sekunder di cybersecurity (red team / ethical hacking).`,
    en: `Target roles: ${PROFILE.roles}. Main focus on back-end & full-stack, with a secondary interest in cybersecurity (red team / ethical hacking).`,
  },
  {
    keys: ["proflow", "tugas akhir", "ta ", "e-procurement", "asp.net", "aspnet", ".net", "thesis"],
    reply:
      "ProFlowApp (Tugas Akhir) — sistem e-procurement internal: ASP.NET Core MVC (.NET 10), EF Core, SQL Server, BCrypt, SSRS reporting (PDF/Excel), + microservice Python/FastAPI untuk klasifikasi urgensi ML. Repo: github.com/jefriwahyu/ProflowApp",
    en: "ProFlowApp (thesis project) — internal e-procurement system: ASP.NET Core MVC (.NET 10), EF Core, SQL Server, BCrypt, SSRS reporting (PDF/Excel), + a Python/FastAPI microservice for ML urgency classification. Repo: github.com/jefriwahyu/ProflowApp",
  },
  {
    keys: ["pemira", "voting", "e-voting", "evoting", "pemilu", "election"],
    reply:
      "Pemira E-Voting — platform e-voting Laravel + Filament (admin dashboard), logika satu-suara-per-mahasiswa. Melayani 3.458 pemilih, 1.124 suara sah.",
    en: "Pemira E-Voting — Laravel + Filament e-voting platform (admin dashboard), one-vote-per-student logic. Served 3,458 voters, 1,124 valid votes.",
  },
  {
    keys: ["tabungan", "tabunganku", "yolo", "rupiah", "computer vision", " cv", " ai", "kamera", "webcam", "savings", "banknote", "camera"],
    reply:
      "TabunganKu AI — aplikasi tabungan dengan YOLOv8 yang memindai uang kertas Rupiah via webcam, backend FastAPI real-time, dashboard Vue.js 3, database MySQL.",
    en: "TabunganKu AI — savings app with YOLOv8 scanning Rupiah banknotes via webcam, real-time FastAPI backend, Vue.js 3 dashboard, MySQL database.",
  },
  {
    keys: ["kuykontak", "kontak", "flutter", "contact app"],
    reply:
      "KuyKontak — aplikasi kontak Flutter (sync lokal, favorit, dark/light mode). Dual backend: Express.js + MongoDB dan CodeIgniter 4 + MySQL.",
    en: "KuyKontak — Flutter contacts app (local sync, favorites, dark/light mode). Dual backend: Express.js + MongoDB and CodeIgniter 4 + MySQL.",
  },
  {
    keys: ["project", "proyek", "portfolio", "portofolio", "karya", "dibuat", "aplikasi apa"],
    reply:
      "4 project utama: ProFlowApp (e-procurement), Pemira E-Voting, TabunganKu AI (YOLOv8), KuyKontak (Flutter). Tanya nama project-nya untuk detail.",
    en: "4 main projects: ProFlowApp (e-procurement), Pemira E-Voting, TabunganKu AI (YOLOv8), KuyKontak (Flutter). Ask by name for details.",
  },
  {
    keys: ["pengalaman", "experience", "kerja", "magang", "primalogic", "qa ", "quality", "intern", "work"],
    reply:
      "SQA Intern di PT Primalogic Global Teknologi (Mar–Mei 2026) — integration testing aplikasi dana pensiun enterprise: 214 test case manual, 60 defect dilaporkan. Plus freelance full-stack untuk Pemira E-Voting.",
    en: "SQA Intern at PT Primalogic Global Teknologi (Mar–May 2026) — integration testing for an enterprise pension fund app: 214 manual test cases, 60 defects reported. Plus freelance full-stack work on Pemira E-Voting.",
  },
  {
    keys: ["skill", "stack", "teknologi", "bisa apa", "bahasa", "framework", "tools", "technology", "technologies"],
    reply:
      "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB. AI/CV: YOLOv8, Roboflow.",
    en: "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB. AI/CV: YOLOv8, Roboflow.",
  },
  {
    keys: ["backend", "laravel", "fastapi", "express", "codeigniter", "php", "python"],
    reply:
      "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js — spesialisasi REST API yang aman (BCrypt, rate limiting, audit logging).",
    en: "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js — secure REST APIs (BCrypt, rate limiting, audit logging).",
  },
  {
    keys: ["frontend", "vue", "react", "tailwind", "css", "javascript"],
    reply: "Front-end: Vue.js 3 (+ React), Tailwind CSS. Dashboard reaktif dan responsif.",
    en: "Front-end: Vue.js 3 (+ React), Tailwind CSS. Reactive, responsive dashboards.",
  },
  {
    keys: ["database", "mysql", "postgres", "mongo", "sql server", "sqlserver"],
    reply: "Database: MySQL, PostgreSQL, MongoDB, plus SQL Server (dipakai di ProFlowApp).",
    en: "Databases: MySQL, PostgreSQL, MongoDB, plus SQL Server (used in ProFlowApp).",
  },
  {
    keys: ["security", "cyber", "hacking", "red team", "ethical", "keamanan"],
    reply:
      "Minat sekunder Jefri: cybersecurity, condong ke red team / ethical hacking — didukung sertifikat Google Cybersecurity Professional.",
    en: "Jefri's secondary interest: cybersecurity, leaning red team / ethical hacking — backed by the Google Cybersecurity Professional certificate.",
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
 * Ask Jarvis. Tries the (optional) external LLM endpoint first so a future
 * backend can take over, then falls back to the local CV knowledge base.
 */
export async function askJarvis(question, lang = "id") {
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
