/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "en", toggle: () => {} });

export const useLang = () => useContext(LangContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("jefport-lang");
      return saved === "id" ? "id" : "en";
    } catch {
      return "en";
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
      greeting: "Bandung, Indonesia. Halo, saya",
      tagline:
        "Membangun aplikasi end-to-end secara aman, mulai dari penulisan kode hingga infrastruktur, untuk meminimalkan celah kerentanan sejak awal.",
      ctaProjects: "Lihat Projects",
      ctaContact: "Hubungi Saya",
      scrollHint: "scroll untuk menjelajah",
    },
    about: {
      cmdDesc: "Latar belakang dan fokus saya.",
      para1:
        "Full-Stack Developer lulusan D3 Teknik Informatika (IPK 3.86) yang fokus membangun aplikasi web yang andal dan aman. Berpengalaman mengembangkan sistem e-voting untuk 3.458 pemilih, aplikasi berbasis AI, infrastruktur server Linux yang di-hardening, serta pengujian SQA pada sistem dana pensiun skala enterprise.",
      minatLabel: "Fokus:",
      minatList: "Full-Stack Development, Cybersecurity",
      highlights: [
        "REST API & desain database",
        "Back-end: ASP.NET Core, Laravel, Go & Express",
        "Front-end: React, Vue.js 3 & Tailwind CSS",
        "Integrasi AI: LLM API, YOLOv8 & microservice",
        "Hardening Linux: Proxmox VE, Debian/Rocky, Suricata IDS, WireGuard",
        "SQA: 214 dari 1.500+ test case, 60 defect dilaporkan",
      ],
      btnCv: "Download CV",
    },
    experience: {
      cmdDesc: "Pengalaman kerja dan magang.",
      items: [
        {
          period: "Mar 2026 – Mei 2026",
          points: [
            "Vendor Integration Testing untuk aplikasi dana pensiun skala enterprise.",
            "Eksekusi 214 dari 1.500+ test case manual menggunakan metodologi State Transition Testing.",
            "Melaporkan 60 defect sistem dan berkolaborasi dengan developer saat regression testing.",
          ],
        },
        {
          period: "Nov 2025 – Des 2025",
          points: [
            "Menganalisis proses bisnis layanan kesehatan dan merancang flowchart sistem untuk mengoptimalkan alur kerja operasional.",
            "Menggunakan query SQL untuk mengekstrak insight berbasis data sebagai dasar rekomendasi perbaikan sistem.",
            "Menerapkan metodologi SDLC dalam merancang peningkatan sistem dan menyusun strategi implementasi.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Back-end Laravel dengan keamanan satu suara per mahasiswa, pembatasan sesi login, dan hak pilih per program studi.",
            "Dashboard admin Filament serta antarmuka voting yang memangkas waktu hitung suara >90% dan biaya operasional ~30%.",
            "Deploy dan konfigurasi domain untuk 3.458 pemilih terdaftar, memproses 1.124 suara tanpa error atau duplikasi.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "Tech stack yang saya pakai sehari-hari.",
    },
    projects: {
      cmdDesc: "Proyek yang saya bangun, dari sistem e-voting hingga infrastruktur server.",
      items: [
        {
          description:
            "Platform e-voting Laravel & Filament untuk Pemira MPM ULBI dengan 3.458 pemilih terdaftar dan 1.124 suara diproses tanpa error maupun duplikasi.",
          badge: "Freelance",
          role: "Freelance Fullstack Developer",
          year: "Sep 2024 – Jan 2025",
          overview:
            "Platform e-voting untuk pemilihan mahasiswa MPM ULBI yang mendigitalkan proses pemungutan suara berbasis kertas. Sistem ini melayani 3.458 pemilih terdaftar dan memproses 1.124 suara sah tanpa error maupun duplikasi, sekaligus memangkas waktu penghitungan suara lebih dari 90% dan menekan biaya operasional sekitar 30%. Di-deploy ke hosting lokal dengan konfigurasi domain kustom.",
          features: [
            "Integritas satu akun satu suara dengan pembatasan hak pilih per program studi dan jenis pemilihan",
            "Dashboard admin berbasis Filament untuk manajemen data pemilih, kandidat, dan rekapitulasi suara",
            "Keamanan autentikasi dan form menggunakan hashing bcrypt serta proteksi CSRF",
            "Manajemen sesi berbasis database dengan cookie HttpOnly, SameSite=Lax, dan timeout 120 menit",
            "Pencegahan SQL Injection dan XSS melalui Eloquent ORM (tanpa raw SQL) serta auto-escaping Blade",
          ],
        },
        {
          description:
            "Pelacak keuangan pribadi berbasis AI yang mengubah chat bahasa Indonesia/Inggris menjadi catatan transaksi terstruktur hingga 5 transaksi per pesan, lengkap dengan laporan dan koreksi lewat chat.",
          badge: "Personal",
          role: "Solo Personal Project — Full-Stack Developer",
          year: "2026",
          overview:
            "Taktuntuwang adalah pelacak keuangan pribadi berbasis percakapan AI untuk pengguna Indonesia. Pengguna cukup chat dengan bahasa sehari-hari — misalnya \"Beli kopi susu 18rb\" atau \"Gaji bulanan masuk 6 jt\" — dan LLM mengubahnya menjadi catatan transaksi terstruktur: jenis, nominal Rupiah, satu dari 12 kategori tetap, dan deskripsi singkat, hingga 5 transaksi per pesan. Ringkasan periode, koreksi/hapus lewat chat, serta panel insight (grafik tren + riwayat) tersedia di samping chat. Frontend React 19 + Vite + Chart.js + Supabase Auth; backend Go 1.25 + Gin + Supabase PostgreSQL/PostgREST; AI Groq API (openai/gpt-oss-20b) dengan JSON-mode structured output; deploy Vercel.",
          features: [
            "Chat bahasa Indonesia/Inggris → catatan transaksi otomatis (hingga 5 transaksi per pesan)",
            "LLM mengekstrak jenis, nominal Rupiah, 1 dari 12 kategori tetap, dan deskripsi singkat",
            "Laporan percakapan: hari ini, kemarin, minggu, bulan, tahun, atau rentang kustom",
            "Koreksi & hapus transaksi lewat chat dengan kartu konfirmasi",
            "Panel insight: ringkasan pengeluaran, grafik tren, dan riwayat transaksi",
            "Auth Supabase + JWT diverifikasi terhadap Supabase JWKS; timezone Asia/Jakarta",
          ],
        },
        {
          description:
            "Sistem e-procurement ASP.NET Core MVC dengan approval berlapis, laporan SSRS, dan microservice Flask untuk klasifikasi urgensi (akurasi 95%).",
          badge: "Academic",
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
            "Arsitektur 5 node di Proxmox VE (3 container & 2 VM dengan Debian 12 dan Rocky Linux 9) di belakang Cloudflare, dilengkapi replikasi PostgreSQL master-slave dan server yang di-hardening.",
          badge: "Academic",
          role: "Course Project",
          year: "Nov – Des 2025",
          mediaLabel: "TOPOLOGI INFRASTRUKTUR",
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
        {
          description:
            "Aplikasi tabungan dengan deteksi uang kertas Rupiah via webcam (YOLOv8, mAP50 98,7%), backend FastAPI, frontend Vue.js 3 + Tailwind CSS, database MySQL.",
          badge: "Academic",
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
          badge: "Academic",
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
      ],
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
      greeting: "Bandung, Indonesia. Hello, I'm",
      tagline:
        "Building secure end-to-end applications from code to infrastructure, with a focus on minimizing vulnerabilities from the ground up.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      scrollHint: "scroll to explore",
    },
    about: {
      cmdDesc: "Background and core focus.",
      para1:
        "Full-Stack Developer with a D3 in Informatics Engineering (GPA 3.86), focused on building reliable and secure web applications. Experienced in developing an e-voting system for 3,458 voters, AI-powered apps, hardened Linux server infrastructure, and enterprise SQA testing for a pension fund system.",
      minatLabel: "Focus:",
      minatList: "Full-Stack Development, Cybersecurity",
      highlights: [
        "REST APIs & database design",
        "Back-end: ASP.NET Core, Laravel, Go & Express",
        "Front-end: React, Vue.js 3 & Tailwind CSS",
        "AI Integration: LLM API, YOLOv8 & microservices",
        "Linux hardening: Proxmox VE, Debian/Rocky, Suricata IDS, WireGuard",
        "SQA: 214 of 1,500+ test cases, 60 defects reported",
      ],
      btnCv: "Download CV",
    },
    experience: {
      cmdDesc: "Work experience and internships.",
      items: [
        {
          period: "Mar 2026 – May 2026",
          points: [
            "Conducted Vendor Integration Testing for an enterprise-scale pension fund application.",
            "Executed 214 of 1,500+ manual test cases using State Transition Testing methodology.",
            "Reported 60 system defects and collaborated with developers during regression testing.",
          ],
        },
        {
          period: "Nov 2025 – Dec 2025",
          points: [
            "Analyzed healthcare business processes and designed system flowcharts to visualize and optimize operational workflows.",
            "Utilized SQL querying to extract data-driven insights supporting system improvement recommendations.",
            "Applied SDLC methodologies to design system enhancements and formulate implementation strategies.",
          ],
        },
        {
          period: "Sep 2024 – Jan 2025",
          points: [
            "Laravel back-end enforcing one-vote-per-student integrity, session-based login restrictions, and program-specific voting rights.",
            "Built a Filament admin dashboard and voting interface that cut vote-counting time by >90% and reduced operational costs by ~30%.",
            "Deployed and configured the domain for 3,458 eligible voters, reliably processing 1,124 valid votes without errors or duplication.",
          ],
        },
      ],
    },
    skills: {
      cmdDesc: "The tech stack I use daily.",
    },
    projects: {
      cmdDesc: "Projects I have built, from e-voting systems to server infrastructure.",
      items: [
        {
          description:
            "Laravel & Filament e-voting platform for MPM ULBI with 3,458 registered voters and 1,124 valid votes processed without errors or duplication.",
          badge: "Freelance",
          role: "Freelance Fullstack Developer",
          year: "Sep 2024 – Jan 2025",
          overview:
            "An e-voting platform for MPM ULBI student elections that digitized the traditional paper-based voting process. The system served 3,458 registered voters and processed 1,124 valid votes without errors or duplication, while cutting vote-counting time by over 90% and reducing operational costs by around 30%. Deployed to local hosting with custom domain configuration.",
          features: [
            "One-account-one-vote integrity with voting rights restricted by study program and election type",
            "Filament-based admin dashboard for managing voters, candidates, and vote recaps",
            "Authentication and form security using bcrypt hashing and CSRF protection",
            "Database-backed session management with HttpOnly, SameSite=Lax cookies, and a 120-minute timeout",
            "SQL Injection and XSS prevention via Eloquent ORM (no raw SQL) and Blade auto-escaping",
          ],
        },
        {
          description:
            "AI-powered personal finance tracker that turns Indonesian/English chat messages into structured records of up to 5 transactions per message, complete with reports and in-chat corrections.",
          badge: "Personal",
          role: "Solo Personal Project — Full-Stack Developer",
          year: "2026",
          overview:
            "Taktuntuwang is an AI-powered conversational personal finance tracker for Indonesian users. Instead of filling in forms, users chat in everyday Indonesian or English — e.g. \"Beli kopi susu 18rb\" or \"Gaji bulanan masuk 6 jt\" — and the LLM turns each message into structured transaction records: type, Rupiah amount, one of 12 fixed categories, and a short description, up to 5 transactions per message. Period summaries, chat-based corrections/deletes, and an insight panel (trend charts + history) sit alongside the chat. Frontend: React 19 + Vite + Chart.js + Supabase Auth; backend: Go 1.25 + Gin + Supabase PostgreSQL/PostgREST; AI: Groq API (openai/gpt-oss-20b) with JSON-mode structured output; deployed on Vercel.",
          features: [
            "Indonesian/English chat → automatic transaction records (up to 5 transactions per message)",
            "LLM extracts type, Rupiah amount, 1 of 12 fixed categories, and a short description",
            "Conversational reports: today, yesterday, week, month, year, or a custom range",
            "Chat-based corrections & deletes with confirmation cards",
            "Insight panel: spending summary, trend charts, and transaction history",
            "Supabase Auth + JWT verified against Supabase JWKS; Asia/Jakarta timezone",
          ],
        },
        {
          description:
            "ASP.NET Core MVC e-procurement system featuring multi-level approvals, SSRS reporting, and a Flask microservice for urgency classification (95% accuracy).",
          badge: "Academic",
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
            "5-node architecture on Proxmox VE (3 containers & 2 VMs running Debian 12 and Rocky Linux 9) behind Cloudflare, featuring PostgreSQL master-slave replication and hardened servers.",
          badge: "Academic",
          role: "Course Project",
          year: "Nov – Dec 2025",
          mediaLabel: "INFRASTRUCTURE TOPOLOGY",
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
        {
          description:
            "Savings app with Rupiah banknote detection via webcam (YOLOv8, mAP50 98.7%), FastAPI backend, Vue.js 3 + Tailwind CSS frontend, MySQL database.",
          badge: "Academic",
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
          badge: "Academic",
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
      ],
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
