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
        "Fresh graduate D3 Informatika yang membangun sistem back-end yang aman dan andal — dari e-voting hingga aplikasi AI.",
      ctaProjects: "Lihat Projects",
      ctaCv: "Download CV",
      ctaContact: "Hubungi Saya",
      scrollHint: "scroll untuk menjelajah",
    },
    about: {
      cmdDesc: "Profil singkat — latar belakang dan fokus saya.",
      para1:
        "Fresh graduate D3 Teknik Informatika (IPK 3.86) dengan pengalaman hands-on di Back-End & Full-Stack — dari sistem e-voting yang dipercaya 3.458 pemilih hingga aplikasi AI — plus pengalaman SQA enterprise untuk aplikasi dana pensiun.",
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
        },
        {
          description:
            "Platform e-voting Laravel & Filament — dashboard admin, logika satu-suara-per-mahasiswa. 3.458 pemilih, 1.124 suara sah.",
        },
        {
          description:
            "YOLOv8 + FastAPI — deteksi uang kertas Rupiah real-time via webcam, dashboard Vue.js 3, database MySQL.",
        },
        {
          description:
            "Backend aplikasi kontak Flutter — Express.js + MongoDB dan CodeIgniter 4 + MySQL.",
        },
      ],
      onRequest: "// hubungi untuk detail",
      githubPara: "Mau lihat eksperimen, mini-project & kontribusi?",
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
        "Fresh Informatics Engineering graduate building secure, reliable back-end systems — from e-voting to AI apps.",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      ctaContact: "Contact Me",
      scrollHint: "scroll to explore",
    },
    about: {
      cmdDesc: "Short profile — my background and focus.",
      para1:
        "Fresh D3 Informatics Engineering graduate (GPA 3.86) with hands-on Back-End & Full-Stack experience — from an e-voting system trusted by 3,458 voters to AI apps — plus enterprise SQA experience for a pension fund application.",
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
        },
        {
          description:
            "Laravel & Filament e-voting platform — admin dashboard, one-vote-per-student logic. 3,458 voters, 1,124 valid votes.",
        },
        {
          description:
            "YOLOv8 + FastAPI — real-time Rupiah banknote detection via webcam, Vue.js 3 dashboard, MySQL database.",
        },
        {
          description:
            "Flutter contact app backend — Express.js + MongoDB and CodeIgniter 4 + MySQL.",
        },
      ],
      onRequest: "// detail on request",
      githubPara: "Want to see experiments, mini-projects & contributions?",
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
