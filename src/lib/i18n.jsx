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
        "Saya membangun aplikasi end-to-end — dari arsitektur back-end yang aman hingga antarmuka yang rapi: sistem e-voting untuk 3.458 pemilih terdaftar, aplikasi berbasis AI, dan infrastruktur server Linux yang di-hardening.",
      ctaProjects: "Lihat Projects",
      ctaCv: "Download CV",
      ctaContact: "Hubungi Saya",
      scrollHint: "scroll untuk menjelajah",
    },
    about: {
      cmdDesc: "Profil singkat — latar belakang dan fokus saya.",
      para1:
        "Fresh graduate D3 Teknik Informatika (IPK 3.86) dengan fokus back-end & full-stack. Membangun sistem e-voting untuk 3.458 pemilih terdaftar, aplikasi AI, serta infrastruktur server Linux yang di-hardening; sebelumnya tester SQA enterprise untuk aplikasi dana pensiun.",
      minatLabel: "Fokus:",
      minatList: "Fullstack development, cybersecurity",
      highlights: [
        "REST API & desain database",
        "Back-end Laravel, ASP.NET Core & Express",
        "Front-end Vue.js 3 & Tailwind CSS",
        "Integrasi AI: YOLOv8 vision & microservice",
        "Hardening Linux: Proxmox VE, Debian/Rocky, Suricata IDS, WireGuard",
        "SQA: 214 dari 1.500+ test case, 60 defect dilaporkan",
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
            "Eksekusi 214 dari 1.500+ test case manual dengan metodologi State Transition Testing.",
            "Melaporkan 60 defect sistem dan berkolaborasi saat regression testing.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Back-end Laravel: logika satu-suara-per-mahasiswa dan hak pilih per program studi & jenis pemilihan.",
            "Dashboard admin Filament + halaman login dan voting yang user-friendly.",
            "Deploy + konfigurasi domain — 3.458 pemilih terdaftar, 1.124 suara diproses tanpa error/duplikasi.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "Tech stack yang saya pakai sehari-hari.",
    },
    projects: {
      cmdDesc: "Proyek yang saya bangun — dari sistem e-voting hingga infrastruktur server.",
      items: [
        {
          description:
            "Platform e-voting Laravel & Filament untuk Pemira MPM ULBI — 3.458 pemilih terdaftar, 1.124 suara diproses tanpa error maupun duplikasi.",
          badge: "Freelance",
          role: "Freelance Fullstack Developer",
          year: "Sep 2024 – Jan 2025",
          overview:
            "Platform e-voting untuk pemilihan mahasiswa MPM ULBI yang mendigitalkan proses pemungutan suara berbasis kertas. Setiap akun hanya bisa memberi satu suara, dengan hak pilih dibatasi per program studi dan jenis pemilihan. Keamanan mencakup bcrypt, proteksi CSRF pada form login dan vote, sesi di database dengan cookie HttpOnly dan SameSite=Lax, serta query lewat Eloquent/Query Builder tanpa raw SQL. Aplikasi di-deploy ke hosting lokal dengan konfigurasi domain.",
          features: [
            "Satu akun, satu suara",
            "Hak pilih per program studi & jenis pemilihan",
            "bcrypt + proteksi CSRF",
            "Sesi database: HttpOnly, SameSite=Lax, 120 menit",
            "Eloquent tanpa raw SQL, output Blade di-escape",
          ],
        },
        {
          description:
            "Final project akademik: e-procurement ASP.NET Core MVC dengan approval berlapis, laporan SSRS, dan microservice Flask klasifikasi urgensi (akurasi 95%).",
          role: "Full-Stack Developer",
          year: "Mar 2026 – Agu 2026",
          overview:
            "ProFlowApp adalah final project akademik, bukan sistem yang dipakai perusahaan. Alur pengadaan berjalan dari pengajuan Karyawan, persetujuan Checker, sampai Manager, dengan Purchase Order yang dibuat otomatis saat disetujui. Microservice Python/Flask mengklasifikasikan urgensi pengajuan dengan akurasi 95% dan fallback, sementara laporan PDF/Excel dihasilkan lewat SSRS.",
          features: [
            "Approval berlapis Karyawan → Checker → Manager",
            "Purchase Order otomatis saat disetujui",
            "Microservice Flask klasifikasi urgensi (akurasi 95%) + fallback",
            "Laporan PDF/Excel via SSRS",
            "RBAC + audit trail (khusus Manager)",
          ],
          security: [
            "BCrypt; account lockout setelah 5 kali gagal; rate limit login 5x/menit per IP",
            "Cookie sesi HttpOnly + Secure + SameSite=Strict",
            "RBAC per role; data pengajuan dibatasi per pengguna; transisi status divalidasi",
            "Anti-CSRF global; validasi DataAnnotations; EF Core tanpa raw SQL; whitelist parameter SSRS",
            "Redirect HTTPS + HSTS; nosniff, X-Frame-Options DENY, Referrer-Policy; header server dimatikan; custom error page",
            "Audit trail: login, gagal login, lockout, CRUD, approval, ganti password (user, role, aksi, IP, waktu)",
          ],
        },
        {
          description:
            "Aplikasi tabungan dengan deteksi uang kertas Rupiah via webcam (YOLOv8, mAP50 98,7%), backend FastAPI, frontend Vue.js 3 + Tailwind CSS, database MySQL.",
          role: "AI / Fullstack Developer",
          year: "Feb – Mar 2026",
          overview:
            "Aplikasi tabungan dengan deteksi uang kertas Rupiah memakai YOLOv8 (mAP50 98,7%), backend FastAPI, frontend Vue.js 3 + Tailwind CSS, dan database MySQL.",
          features: [
            "Deteksi uang kertas Rupiah via webcam (YOLOv8)",
            "mAP50 98,7%",
            "Backend FastAPI",
            "Frontend Vue.js 3 + Tailwind CSS, database MySQL",
          ],
        },
        {
          description:
            "REST API aplikasi kontak Flutter dengan dua backend: Express.js + MongoDB dan CodeIgniter 4 + MySQL; API Express lewat Cloudflare Tunnel.",
          role: "Fullstack Developer",
          year: "Jun – Jul 2025",
          overview:
            "Aplikasi kontak berbasis Flutter dengan CRUD, sinkronisasi data, dan kontak favorit. Sisi server dibangun dua kali: Express.js + MongoDB yang dipublikasikan lewat Cloudflare Tunnel, serta CodeIgniter 4 + MySQL yang berjalan di hosting konvensional.",
          features: [
            "REST API untuk aplikasi kontak Flutter",
            "CRUD, sinkronisasi data, dan favorit",
            "Backend Express.js + MongoDB",
            "Backend CodeIgniter 4 + MySQL",
            "Express API via Cloudflare Tunnel, CodeIgniter di hosting konvensional",
          ],
        },
        {
          description:
            "Course project: 5 container di Proxmox VE (Debian 12 & Rocky Linux 9) di belakang Cloudflare, dengan PostgreSQL master–slave yang direplikasi dan server yang di-hardening.",
          role: "Course Project",
          year: "Nov – Des 2025",
          overview:
            "Gabungan mata kuliah Sistem Terdistribusi dan Keamanan Jaringan: 5 container di Proxmox VE di belakang Cloudflare. Container 1 menjalankan load balancer + frontend, container 2 & 3 menjalankan backend (Debian 12), dan container 4 & 5 menjalankan PostgreSQL master–slave dengan replikasi di Rocky Linux 9. Setiap node di-hardening dan didokumentasikan langkah demi langkah.",
          features: [
            "5 container di Proxmox VE: load balancer + frontend, 2 backend, 2 database",
            "Debian 12 untuk frontend & backend, Rocky Linux 9 untuk database",
            "PostgreSQL master–slave dengan replikasi",
            "Akses publik via Cloudflare",
            "Dokumentasi: dua laporan teknis dengan bukti verifikasi",
          ],
          security: [
            "Debian 12: update otomatis (unattended-upgrades), SSH key-only ed25519 di port kustom",
            "Debian 12: fail2ban + UFW default-deny, Suricata IDS (ET Open), WireGuard VPN",
            "Rocky Linux 9: sudo dengan timeout + logging, SSH key-only, root login dimatikan",
            "Rocky Linux 9: fail2ban termasuk jail PostgreSQL, firewalld default DROP, Suricata IDS",
          ],
        },
      ],
      onRequest: "// hubungi untuk detail",
      githubPara: "Mau lihat eksperimen, mini-project & kontribusi?",
      modal: {
        btn: "details",
        overview: "RINGKASAN",
        features: "FITUR UTAMA",
        security: "KEAMANAN",
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
        "I build end-to-end applications, from secure back-end architecture to polished interfaces: an e-voting system serving 3,458 registered voters, AI-powered apps, and hardened Linux server infrastructure.",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      ctaContact: "Contact Me",
      scrollHint: "scroll to explore",
    },
    about: {
      cmdDesc: "Short profile — my background and focus.",
      para1:
        "Fresh D3 Informatics Engineering graduate (GPA 3.86) focused on back-end & full-stack. Built an e-voting system for 3,458 registered voters, AI apps, and hardened Linux server infrastructure; previously an enterprise SQA tester for a pension fund application.",
      minatLabel: "Focus:",
      minatList: "Fullstack development, cybersecurity",
      highlights: [
        "REST APIs & database design",
        "Laravel, ASP.NET Core & Express back-ends",
        "Vue.js 3 & Tailwind CSS front-ends",
        "AI integration: YOLOv8 vision & microservices",
        "Linux hardening: Proxmox VE, Debian/Rocky, Suricata IDS, WireGuard",
        "SQA: 214 of 1,500+ test cases, 60 defects reported",
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
            "Executed 214 of 1,500+ manual test cases with State Transition Testing methodology.",
            "Reported 60 system defects and collaborated during regression testing.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Laravel back-end: one-vote-per-student logic and eligibility by study program & election type.",
            "Filament admin dashboard plus user-friendly login and voting pages.",
            "Deployed with domain configuration — 3,458 registered voters, 1,124 votes processed without errors/duplicates.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "The tech stack I use daily.",
    },
    projects: {
      cmdDesc: "Projects I've built — from e-voting systems to server infrastructure.",
      items: [
        {
          description:
            "Laravel & Filament e-voting platform for the ULBI MPM election — 3,458 registered voters, 1,124 votes processed without errors or duplicates.",
          badge: "Freelance",
          role: "Freelance Fullstack Developer",
          year: "Sep 2024 – Jan 2025",
          overview:
            "E-voting platform for the ULBI MPM student election that digitized a paper-based voting process. Each account can vote only once, with eligibility limited by study program and election type. Security includes bcrypt, CSRF protection on login and vote forms, database-backed sessions with HttpOnly and SameSite=Lax cookies, and Eloquent/Query Builder queries without raw SQL. The app was deployed to local hosting with domain configuration.",
          features: [
            "One account, one vote",
            "Eligibility by study program & election type",
            "bcrypt + CSRF protection",
            "Database sessions: HttpOnly, SameSite=Lax, 120 minutes",
            "Eloquent without raw SQL, escaped Blade output",
          ],
        },
        {
          description:
            "Academic final project: ASP.NET Core MVC e-procurement with layered approvals, SSRS reports, and a Flask urgency-classification microservice (95% accuracy).",
          role: "Full-Stack Developer",
          year: "Mar 2026 – Aug 2026",
          overview:
            "ProFlowApp is an academic final project, not a system used by a company. The procurement flow runs from Employee requisition through Checker approval to Manager approval, with a Purchase Order created automatically on approval. A Python/Flask microservice classifies requisition urgency with 95% accuracy and a fallback, while PDF/Excel reports are generated through SSRS.",
          features: [
            "Layered approvals: Employee → Checker → Manager",
            "Purchase Order created automatically on approval",
            "Flask urgency-classification microservice (95% accuracy) + fallback",
            "PDF/Excel reports via SSRS",
            "RBAC + audit trail (Manager-only)",
          ],
          security: [
            "BCrypt; account lockout after 5 failed attempts; login rate limit 5x/minute per IP",
            "Session cookies: HttpOnly + Secure + SameSite=Strict",
            "RBAC per role; requisition data scoped per user; status transitions validated",
            "Global anti-CSRF; DataAnnotations validation; EF Core without raw SQL; SSRS parameter whitelist",
            "HTTPS redirect + HSTS; nosniff, X-Frame-Options DENY, Referrer-Policy; server header disabled; custom error page",
            "Audit trail: login, failed login, lockout, CRUD, approval, password change (user, role, action, IP, time)",
          ],
        },
        {
          description:
            "Savings app with Rupiah banknote detection via webcam (YOLOv8, mAP50 98.7%), FastAPI backend, Vue.js 3 + Tailwind CSS frontend, MySQL database.",
          role: "AI / Fullstack Developer",
          year: "Feb – Mar 2026",
          overview:
            "Savings app with Rupiah banknote detection using YOLOv8 (mAP50 98.7%), a FastAPI backend, a Vue.js 3 + Tailwind CSS frontend, and a MySQL database.",
          features: [
            "Rupiah banknote detection via webcam (YOLOv8)",
            "mAP50 98.7%",
            "FastAPI backend",
            "Vue.js 3 + Tailwind CSS frontend, MySQL database",
          ],
        },
        {
          description:
            "REST API for a Flutter contact app with two backends: Express.js + MongoDB and CodeIgniter 4 + MySQL; the Express API runs through Cloudflare Tunnel.",
          role: "Fullstack Developer",
          year: "Jun – Jul 2025",
          overview:
            "Flutter-based contact app with CRUD, data synchronization, and favorites. I built the server side twice: an Express.js + MongoDB backend published through Cloudflare Tunnel, and a CodeIgniter 4 + MySQL backend running on conventional hosting.",
          features: [
            "REST API for a Flutter contact app",
            "CRUD, data synchronization, and favorites",
            "Express.js + MongoDB backend",
            "CodeIgniter 4 + MySQL backend",
            "Express API via Cloudflare Tunnel, CodeIgniter on conventional hosting",
          ],
        },
        {
          description:
            "Course project: 5 containers on Proxmox VE (Debian 12 & Rocky Linux 9) behind Cloudflare, with replicated PostgreSQL master–slave and hardened servers.",
          role: "Course Project",
          year: "Nov – Dec 2025",
          overview:
            "Combined Distributed Systems and Network Security course project: 5 containers on Proxmox VE behind Cloudflare. Container 1 runs the load balancer + frontend, containers 2 & 3 run the backends (Debian 12), and containers 4 & 5 run replicated PostgreSQL master–slave on Rocky Linux 9. Every node was hardened and documented step by step.",
          features: [
            "5 containers on Proxmox VE: load balancer + frontend, 2 backends, 2 databases",
            "Debian 12 for frontend & backends, Rocky Linux 9 for databases",
            "PostgreSQL master–slave replication",
            "Public access via Cloudflare",
            "Documentation: two technical reports with verification evidence",
          ],
          security: [
            "Debian 12: automatic updates (unattended-upgrades), SSH key-only ed25519 on a custom port",
            "Debian 12: fail2ban + UFW default-deny, Suricata IDS (ET Open), WireGuard VPN",
            "Rocky Linux 9: sudo with timeout + logging, SSH key-only, root login disabled",
            "Rocky Linux 9: fail2ban including a PostgreSQL jail, firewalld default DROP, Suricata IDS",
          ],
        },
      ],
      onRequest: "// detail on request",
      githubPara: "Want to see experiments, mini-projects & contributions?",
      modal: {
        btn: "details",
        overview: "OVERVIEW",
        features: "KEY FEATURES",
        security: "SECURITY",
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
