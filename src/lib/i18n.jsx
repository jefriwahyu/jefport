/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "id", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("jefport-lang") || "id";
    } catch {
      return "id";
    }
  });
  const toggle = () =>
    setLang((l) => {
      const next = l === "id" ? "en" : "id";
      try {
        localStorage.setItem("jefport-lang", next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
};

export const content = {
  id: {
    hero: {
      greeting: "Bandung, Indonesia — Halo, saya",
      tagline:
        "Saya membangun aplikasi end-to-end — dari arsitektur back-end yang aman hingga antarmuka yang rapi. Mulai dari sistem e-voting yang dipercaya ribuan pemilih hingga aplikasi berbasis AI.",
      ctaProjects: "Lihat Projects",
      ctaCv: "Download CV",
      ctaContact: "Hubungi Saya",
      scrollHint: "scroll untuk menjelajah",
    },
    about: {
      cmdDesc: "Profil singkat — latar belakang dan fokus saya.",
      para1:
        "Fresh graduate D3 Teknik Informatika (IPK 3.86), berpengalaman di Back-End & Full-Stack. Pernah mengembangkan sistem e-voting untuk 3.458 pemilih dan aplikasi AI, serta menjadi tester SQA enterprise untuk aplikasi dana pensiun.",
      minatLabel: "Minat sekunder:",
      minatList: "Backend, Fullstack Developer, Web Developer, Software Engineer",
      highlights: [
        "RESTful API yang aman & desain database",
        "Back-end Laravel, ASP.NET Core & Express",
        "Integrasi AI: YOLOv8 vision & microservice",
        "SQA: 214 test case, 60 defect dilaporkan",
      ],
      btnContact: "Hubungi Saya",
      btnCv: "Download CV",
    },
    experience: {
      cmdDesc: "Pengalaman kerja dan magang.",
      items: [
        {
          period: "Mar 2026 – Mei 2026",
          points: [
            "Vendor Integration Testing untuk aplikasi dana pensiun skala enterprise.",
            "Eksekusi 214 test case manual dengan metodologi State Transition Testing.",
            "Melaporkan 60 defect sistem dan berkolaborasi saat regression testing.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Back-end Laravel: logika satu-suara-per-mahasiswa, batasan login, auto-logout.",
            "Dashboard admin Filament + halaman login dan voting yang user-friendly.",
            "Deploy + konfigurasi domain — 3.458 pemilih, 1.124 suara sah.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "Tech stack yang saya pakai sehari-hari.",
    },
    projects: {
      cmdDesc: "Kumpulan project yang sudah di-deploy dan dipakai.",
      items: [
        {
          description:
            "ASP.NET Core MVC (.NET 10), EF Core, SQL Server, Razor Views, BCrypt, SSRS reporting (PDF/Excel), plus microservice Python dengan ML urgency classification.",
          note: "Tugas Akhir",
          badge: "Internal",
          role: "Full-Stack Developer",
          year: "2026",
          overview:
            "Sistem e-procurement internal yang dibangun sebagai Tugas Akhir: seluruh alur pengadaan — kelola barang, pengajuan, approval berlapis, sampai laporan — berjalan dalam satu aplikasi. Dilengkapi autentikasi BCrypt dengan hak akses berlapis, reporting SSRS ke PDF/Excel termasuk Purchase Order, monitoring aktivitas user, serta microservice Python yang memakai ML untuk mengklasifikasikan urgensi setiap pengajuan.",
          features: [
            "Auth BCrypt + hak akses berlapis",
            "Alur pengajuan & approval",
            "Reporting SSRS ke PDF/Excel",
            "Monitoring aktivitas user",
            "Microservice FastAPI klasifikasi urgensi",
          ],
        },
        {
          description:
            "Platform e-voting Laravel & Filament — dashboard admin, logika satu-suara-per-mahasiswa. 3.458 pemilih, 1.124 suara sah.",
          role: "Freelance Fullstack Developer",
          year: "2024 – 2025",
          overview:
            "Platform e-voting untuk pemilihan raya mahasiswa yang dipakai 3.458 pemilih dengan 1.124 suara sah. Setiap mahasiswa dijamin hanya bisa memberi satu suara lewat batasan login, keamanan sesi, dan auto-logout, sementara panitia memantau hasil vote secara realtime dari dashboard admin Filament. Halaman voting dibuat sesederhana mungkin agar mudah dipakai, lalu aplikasi di-deploy lengkap dengan konfigurasi domain.",
          features: [
            "Satu-suara-per-mahasiswa + batasan login",
            "Auto-logout & keamanan sesi",
            "Hasil vote realtime",
            "Dashboard admin Filament",
            "Deploy + konfigurasi domain",
          ],
        },
        {
          description:
            "YOLOv8 + FastAPI — deteksi uang kertas Rupiah real-time via webcam, dashboard Vue.js 3, database MySQL.",
          role: "AI / Fullstack Developer",
          year: "2026",
          overview:
            "Aplikasi tabungan yang menggabungkan pencatatan keuangan dengan computer vision: uang kertas Rupiah yang disetor dideteksi secara real-time via webcam memakai model YOLOv8, dengan videonya dialirkan lewat backend FastAPI. Pengguna bisa membuat dan membongkar tabungan, melihat riwayat transaksi, dan memantau semuanya dari dashboard Vue.js 3 yang datanya tersimpan di MySQL.",
          features: [
            "Deteksi Rupiah real-time (YOLOv8)",
            "Backend FastAPI streaming",
            "Dashboard Vue.js 3",
            "Database MySQL",
          ],
        },
        {
          description:
            "Backend aplikasi kontak Flutter — Express.js + MongoDB dan CodeIgniter 4 + MySQL.",
          role: "Fullstack Developer",
          year: "2025",
          overview:
            "Aplikasi manajemen kontak berbasis Flutter dengan sinkronisasi data lokal, kontak favorit, serta mode gelap dan terang. Sisi server saya bangun dua kali sebagai fullstack: backend Express.js dengan MongoDB dan backend CodeIgniter 4 dengan MySQL, sehingga aplikasi bisa berjalan di atas dua pilihan infrastruktur yang berbeda.",
          features: [
            "Sync lokal + kontak favorit",
            "Dark/light mode",
            "Backend Express.js + MongoDB",
            "Backend CodeIgniter 4 + MySQL",
          ],
        },
      ],
      onRequest: "// hubungi untuk detail",
      githubPara: "Mau lihat eksperimen, mini-project & kontribusi?",
      modal: {
        btn: "details",
        overview: "RINGKASAN",
        features: "FITUR UTAMA",
        gallery: "PREVIEW FITUR",
        dummy: "dummy",
        close: "tutup",
        hint: "[ esc ] untuk menutup",
      },
    },
    education: {
      cmdDesc: "Pendidikan formal dan sertifikasi.",
      eduLabel: "PENDIDIKAN",
      period: "Sep 2023 – Agu 2026",
      degree: "D3 Teknik Informatika — Lulus Agustus 2026",
      gpaLabel: "Diploma Teknik Informatika",
      focus:
        "Fokus pada sistem back-end, database dan AI terapan — dengan project freelance dan mandiri yang dikirim berdampingan dengan kuliah.",
      certs: [
        { title: "Google Cybersecurity Professional Certificate", date: "Nov 2025" },
        { title: "Google AI Essentials", date: "Okt 2025" },
        { title: "Back-End Development with JavaScript", date: "Sep 2024" },
        { title: "Front-End Web untuk Pemula", date: "Jun 2024" },
        { title: "Fundamental Aplikasi Back-End", date: "Feb 2024" },
        { title: "Junior Web Developer", date: "Okt 2022" },
      ],
    },
    contact: {
      cmdDesc: "Terbuka untuk freelance & full-time. Pesan biasanya dibalas < 24 jam.",
      success: "[✓] Pesan terkirim. Saya balas secepatnya.",
      error: "[✗] Gagal terkirim via form. Klik email di samping atau coba lagi.",
      phName: "nama_anda",
      phEmail: "email@anda.com",
      phMsg: "isi_pesan...",
      btnSend: "kirim_pesan",
      btnSending: "mengirim...",
    },
  },
  en: {
    hero: {
      greeting: "Bandung, Indonesia — Hello, I'm",
      tagline:
        "I build end-to-end applications — from secure back-end architecture to polished interfaces. From e-voting trusted by thousands of voters to AI-powered apps.",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      ctaContact: "Contact Me",
      scrollHint: "scroll to explore",
    },
    about: {
      cmdDesc: "Short profile — my background and focus.",
      para1:
        "Fresh D3 Informatics Engineering graduate (GPA 3.86), experienced in Back-End & Full-Stack. Built an e-voting system for 3,458 voters and AI apps, plus enterprise SQA testing for a pension fund application.",
      minatLabel: "Also into:",
      minatList: "Backend, Fullstack Developer, Web Developer, Software Engineer",
      highlights: [
        "Secure RESTful APIs & database design",
        "Laravel, ASP.NET Core & Express back-ends",
        "AI integration: YOLOv8 vision & microservices",
        "SQA: 214 test cases, 60 defects reported",
      ],
      btnContact: "Contact Me",
      btnCv: "Download CV",
    },
    experience: {
      cmdDesc: "Work experience and internships.",
      items: [
        {
          period: "Mar 2026 – May 2026",
          points: [
            "Vendor Integration Testing for an enterprise-scale pension fund application.",
            "Executed 214 manual test cases with State Transition Testing methodology.",
            "Reported 60 system defects and collaborated during regression testing.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Laravel back-end: one-vote-per-student logic, login restriction, auto-logout.",
            "Filament admin dashboard plus user-friendly login and voting pages.",
            "Deployed with domain configuration — 3,458 voters, 1,124 valid votes.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "The tech stack I use daily.",
    },
    projects: {
      cmdDesc: "A collection of deployed, in-use projects.",
      items: [
        {
          description:
            "ASP.NET Core MVC (.NET 10), EF Core, SQL Server, Razor Views, BCrypt, SSRS reporting (PDF/Excel), plus a Python microservice with ML urgency classification.",
          note: "Thesis",
          badge: "Internal",
          role: "Full-Stack Developer",
          year: "2026",
          overview:
            "Internal e-procurement system built as a thesis project: the whole procurement flow — inventory, requisitions, layered approvals, and reports — runs in one app. It ships BCrypt authentication with layered access control, SSRS reporting to PDF/Excel including Purchase Orders, user activity monitoring, and a Python microservice that uses ML to classify the urgency of every requisition.",
          features: [
            "BCrypt auth + layered access control",
            "Requisition & approval flow",
            "SSRS reporting to PDF/Excel",
            "User activity monitoring",
            "FastAPI urgency-classification microservice",
          ],
        },
        {
          description:
            "Laravel & Filament e-voting platform — admin dashboard, one-vote-per-student logic. 3,458 voters, 1,124 valid votes.",
          role: "Freelance Fullstack Developer",
          year: "2024 – 2025",
          overview:
            "E-voting platform for student elections, used by 3,458 voters with 1,124 valid votes. Each student is guaranteed a single vote through login restrictions, session security, and auto-logout, while organizers watch realtime vote results from a Filament admin dashboard. The voting pages are kept as simple as possible, and the app was deployed with full domain configuration.",
          features: [
            "One-vote-per-student + login restriction",
            "Auto-logout & session security",
            "Realtime vote results",
            "Filament admin dashboard",
            "Deploy + domain configuration",
          ],
        },
        {
          description:
            "YOLOv8 + FastAPI — real-time Rupiah banknote detection via webcam, Vue.js 3 dashboard, MySQL database.",
          role: "AI / Fullstack Developer",
          year: "2026",
          overview:
            "Savings app combining money tracking with computer vision: deposited Rupiah banknotes are detected in realtime via webcam using a YOLOv8 model, streamed through a FastAPI backend. Users can create and break savings goals, browse transaction history, and monitor everything from a Vue.js 3 dashboard backed by MySQL.",
          features: [
            "Real-time Rupiah detection (YOLOv8)",
            "Streaming FastAPI backend",
            "Vue.js 3 dashboard",
            "MySQL database",
          ],
        },
        {
          description:
            "Flutter contact app backend — Express.js + MongoDB and CodeIgniter 4 + MySQL.",
          role: "Fullstack Developer",
          year: "2025",
          overview:
            "Flutter-based contact manager with local data sync, favorite contacts, and dark/light mode. I built the server side twice as a fullstack developer: an Express.js backend with MongoDB and a CodeIgniter 4 backend with MySQL, so the app can run on two different infrastructure choices.",
          features: [
            "Local sync + favorite contacts",
            "Dark/light mode",
            "Express.js + MongoDB backend",
            "CodeIgniter 4 + MySQL backend",
          ],
        },
      ],
      onRequest: "// detail on request",
      githubPara: "Want to see experiments, mini-projects & contributions?",
      modal: {
        btn: "details",
        overview: "OVERVIEW",
        features: "KEY FEATURES",
        gallery: "FEATURE PREVIEWS",
        dummy: "dummy",
        close: "close",
        hint: "[ esc ] to close",
      },
    },
    education: {
      cmdDesc: "Formal education and certifications.",
      eduLabel: "EDUCATION",
      period: "Sep 2023 – Aug 2026",
      degree: "D3 Informatics Engineering — Graduated August 2026",
      gpaLabel: "Diploma in Informatics Engineering",
      focus:
        "Focused on back-end systems, databases and applied AI — with freelance and independent projects shipped alongside coursework.",
      certs: [
        { title: "Google Cybersecurity Professional Certificate", date: "Nov 2025" },
        { title: "Google AI Essentials", date: "Oct 2025" },
        { title: "Back-End Development with JavaScript", date: "Sep 2024" },
        { title: "Front-End Web for Beginners", date: "Jun 2024" },
        { title: "Back-End Application Fundamentals", date: "Feb 2024" },
        { title: "Junior Web Developer", date: "Oct 2022" },
      ],
    },
    contact: {
      cmdDesc: "Open for freelance & full-time. Messages usually answered within 24 hours.",
      success: "[✓] Message sent. I'll reply soon.",
      error: "[✗] Form send failed. Click the email on the side or try again.",
      phName: "your_name",
      phEmail: "email@yours.com",
      phMsg: "your_message...",
      btnSend: "send_message",
      btnSending: "sending...",
    },
  },
};
