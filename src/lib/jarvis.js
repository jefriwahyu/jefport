const PROFILE = {
  name: "Jefri Wahyudiana Putra",
  nickname: "Wahyudi",
  roles: "Backend Developer / Full-Stack Developer / Software Engineer",
  location: "Bandung, Indonesia",
  email: "jefriwahyudiana@gmail.com",
  linkedin: "linkedin.com/in/jefriwp",
  github: "github.com/jefriwahyu",
  education: "D3 Informatics Engineering, ULBI (2023–2026), GPA 3.86/4.00",
};

const RULES = [
  {
    keys: ["halo", "hello", "hi", "hei", "pagi", "siang", "sore", "malam", "assalamu"],
    reply:
      "Halo. Sistem aktif. Tanyakan apa saja tentang CV, skill, pengalaman, atau project Jefri.",
  },
  {
    keys: ["siapa", "nama", "whoami", "who are you", "tentang", "profil", " Wahyudi", "wahyudi", "panggil"],
    reply: `Saya Jefri Wahyudiana Putra (panggilan Wahyudi) — ${PROFILE.roles}, berbasis di ${PROFILE.location}.`,
  },
  {
    keys: ["role", "posisi", "kerja sebagai", "developer apa", "target"],
    reply: `Role target: ${PROFILE.roles}. Fokus utama back-end & full-stack, dengan minat sekunder di cybersecurity (red team / ethical hacking).`,
  },
  {
    keys: ["proflow", "tugas akhir", "ta ", "e-procurement", "asp.net", "aspnet", ".net"],
    reply:
      "ProFlowApp (Tugas Akhir) — sistem e-procurement internal: ASP.NET Core MVC (.NET 10), EF Core, SQL Server, BCrypt, SSRS reporting (PDF/Excel), + microservice Python/FastAPI untuk klasifikasi urgensi ML. Repo: github.com/jefriwahyu/ProflowApp",
  },
  {
    keys: ["pemira", "voting", "e-voting", "evoting", "pemilu"],
    reply:
      "Pemira E-Voting — platform e-voting Laravel + Filament (admin dashboard), logika satu-suara-per-mahasiswa. Melayani 3.458 pemilih, 1.124 suara sah.",
  },
  {
    keys: ["tabungan", "tabunganku", "yolo", "rupiah", "computer vision", "cv ", " ai", "kamera", "webcam"],
    reply:
      "TabunganKu AI — aplikasi tabungan dengan YOLOv8 yang memindai uang kertas Rupiah via webcam, backend FastAPI real-time, dashboard Vue.js 3, database MySQL.",
  },
  {
    keys: ["kuykontak", "kontak", "flutter", "contact app"],
    reply:
      "KuyKontak — aplikasi kontak Flutter (sync lokal, favorit, dark/light mode). Dual backend: Express.js + MongoDB dan CodeIgniter 4 + MySQL.",
  },
  {
    keys: ["project", "proyek", "portfolio", "portofolio", "karya", "dibuat", "aplikasi apa"],
    reply:
      "4 project utama: ProFlowApp (e-procurement), Pemira E-Voting, TabunganKu AI (YOLOv8), KuyKontak (Flutter). Tanya nama project-nya untuk detail.",
  },
  {
    keys: ["pengalaman", "experience", "kerja", "magang", "primalogic", "qa ", "quality", "intern"],
    reply:
      "SQA Intern di PT Primalogic Global Teknologi (Mar–Mei 2026) — integration testing aplikasi dana pensiun enterprise: 214 test case manual, 60 defect dilaporkan. Plus freelance full-stack untuk Pemira E-Voting.",
  },
  {
    keys: ["skill", "stack", "teknologi", "bisa apa", "bahasa", "framework", "tools"],
    reply:
      "Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js. Frontend: Vue.js 3. Mobile: Flutter. Database: MySQL, PostgreSQL, MongoDB. AI/CV: YOLOv8, Roboflow.",
  },
  {
    keys: ["backend", "laravel", "fastapi", "express", "codeigniter", "php", "python"],
    reply:
      "Back-end: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js — spesialisasi REST API yang aman (BCrypt, rate limiting, audit logging).",
  },
  {
    keys: ["frontend", "vue", "react", "tailwind", "css", "javascript"],
    reply: "Front-end: Vue.js 3 (+ React), Tailwind CSS. Dashboard reaktif dan responsif.",
  },
  {
    keys: ["database", "mysql", "postgres", "mongo", "sql server", "sqlserver"],
    reply: "Database: MySQL, PostgreSQL, MongoDB, plus SQL Server (dipakai di ProFlowApp).",
  },
  {
    keys: ["security", "cyber", "hacking", "red team", "ethical", "keamanan"],
    reply:
      "Minat sekunder Jefri: cybersecurity, condong ke red team / ethical hacking — didukung sertifikat Google Cybersecurity Professional.",
  },
  {
    keys: ["pendidikan", "education", "kuliah", "kampus", "ulbi", "lulus", "gpa", "ipk", "d3", "informatika"],
    reply: `Lulusan D3 Teknik Informatika ULBI (Agustus 2026), IPK 3.86/4.00.`,
  },
  {
    keys: ["sertifikat", "sertifikasi", "certificate", "certification", "dicoding", "bnsp", "google"],
    reply:
      "Sertifikasi: Google Cybersecurity Professional, Google AI Essentials, BNSP Junior Web Developer, dan beberapa kursus Dicoding (back-end JS, front-end, fundamental back-end).",
  },
  {
    keys: ["email", "mail", "hubungi", "kontak", "contact", "telepon", "phone", "wa "],
    reply: `Email: ${PROFILE.email}. LinkedIn: ${PROFILE.linkedin}. GitHub: ${PROFILE.github}.`,
  },
  {
    keys: ["linkedin"],
    reply: `LinkedIn: ${PROFILE.linkedin}.`,
  },
  {
    keys: ["github", "repo", "repository", "source"],
    reply: `GitHub: ${PROFILE.github}. Repo ProFlowApp: github.com/jefriwahyu/ProflowApp`,
  },
  {
    keys: ["cv", "resume", "download"],
    reply: "CV bisa diunduh lewat tombol [ Download CV ] di hero / about halaman ini.",
  },
  {
    keys: ["lokasi", "domisili", "tinggal", "bandung", "location", "dimana"],
    reply: `Berbasis di ${PROFILE.location}. Terbuka untuk freelance & full-time.`,
  },
  {
    keys: ["gaji", "salary", "rate", "harga", "bayar"],
    reply: "Untuk rate / gaji, hubungi langsung via email agar bisa didiskusikan sesuai scope.",
  },
  {
    keys: ["terima kasih", "makasih", "thanks", "thank you", "oke", "ok ", "siap", "mantap"],
    reply: "Sama-sama. Ada lagi yang ingin ditanyakan soal profil Jefri?",
  },
];

const FALLBACK =
  "Maaf, saya hanya bisa membahas seputar profil, skill, pengalaman, dan project di situs ini. Coba tanya soal project, skill, atau pengalaman Jefri.";

function localAnswer(input) {
  const text = ` ${input.toLowerCase()} `;
  for (const rule of RULES) {
    if (rule.keys.some((k) => text.includes(k))) return rule.reply;
  }
  return FALLBACK;
}

/**
 * Ask Jarvis. Tries the (optional) external LLM endpoint first so a future
 * backend can take over, then falls back to the local CV knowledge base.
 */
export async function askJarvis(question) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
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
  return { text: localAnswer(question), source: "local" };
}

export { PROFILE };
