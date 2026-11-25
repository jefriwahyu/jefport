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
          role: "Solo Full-Stack Developer",
          year: "2026",
          overview:
            "Pelacak keuangan pribadi berbasis percakapan AI untuk pengguna Indonesia yang menghilangkan kerumitan input form manual. Pengguna cukup mengirim pesan dengan bahasa sehari-hari (seperti \"Beli kopi susu 18rb\" atau \"Gaji bulanan masuk 6 jt\") untuk dicatat secara otomatis. Dibangun dengan arsitektur full-stack menggunakan React 19 dan Vite di sisi frontend, REST API Go (Gin) dengan Supabase PostgreSQL di sisi backend, integrasi Groq API (JSON-mode structured output), serta di-deploy ke Vercel.",
          features: [
            "Pencatatan otomatis dari chat bahasa Indonesia/Inggris hingga 5 transaksi dalam satu pesan",
            "Ekstraksi terstruktur oleh LLM (jenis, nominal Rupiah, 1 dari 12 kategori tetap, dan deskripsi singkat)",
            "Laporan keuangan berbasis percakapan untuk periode harian, mingguan, bulanan, tahunan, maupun rentang kustom",
            "Koreksi dan penghapusan transaksi langsung lewat chat dilengkapi kartu konfirmasi",
            "Panel insight interaktif berisi ringkasan pengeluaran, grafik tren (Chart.js), dan riwayat transaksi",
            "Autentikasi Supabase dengan verifikasi JWT terhadap Supabase JWKS serta penyesuaian zona waktu Asia/Jakarta",
          ],
        },
        {
          description:
            "Sistem e-procurement ASP.NET Core MVC dengan approval berlapis, laporan SSRS, dan microservice Flask untuk klasifikasi urgensi (akurasi 95%).",
          badge: "Academic",
          role: "Full-Stack Developer",
          year: "Mar 2026 – Agu 2026",
          overview:
            "Sistem e-procurement berbasis web yang dibangun sebagai proyek Tugas Akhir untuk mensimulasikan alur pengadaan barang skala perusahaan secara terstruktur dan transparan. Dikembangkan menggunakan ASP.NET Core MVC, Entity Framework Core, dan SQL Server sebagai sistem utama, serta terintegrasi dengan microservice Python (Flask) untuk klasifikasi prioritas pengajuan dan SSRS untuk pelaporan otomatis.",
          features: [
            "Alur persetujuan (approval) berlapis mulai dari pengajuan Karyawan, verifikasi Checker, hingga persetujuan Manager",
            "Pembuatan dokumen Purchase Order (PO) secara otomatis segera setelah pengajuan disetujui",
            "Microservice Flask untuk klasifikasi tingkat urgensi pengajuan (akurasi 95%) lengkap dengan mekanisme fallback",
            "Generasi laporan pengadaan dalam format PDF dan Excel menggunakan SQL Server Reporting Services (SSRS)",
            "Dashboard pemantauan aktivitas dan riwayat persetujuan khusus untuk Manager",
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
            "Proyek gabungan mata kuliah Sistem Terdistribusi dan Keamanan Jaringan berupa arsitektur 5 node di Proxmox VE, terdiri dari 3 LXC container Debian 12 untuk lapisan aplikasi yang ringan dan 2 VM Rocky Linux 9 agar database mendapatkan isolasi kernel serta fitur OS penuh. Node 1 menangani frontend, load balancer Round Robin, dan integrasi Cloudflare untuk mendistribusikan trafik ke dua node backend. Di sisi database, PostgreSQL dikonfigurasi dengan replikasi master-slave dan read/write splitting, disertai hardening keamanan serta dokumentasi teknis lengkap pada seluruh node.",
          features: [
            "Arsitektur 5 node di Proxmox VE: 3 LXC container Debian 12 (FE/LB + 2 Backend) dan 2 VM Rocky Linux 9 (DB Master & Slave)",
            "Konfigurasi Node 1 sebagai gateway Cloudflare, frontend, dan load balancer dengan algoritma Round Robin",
            "Replikasi PostgreSQL master-slave dengan read/write splitting: Master menangani operasi Write (Create, Update, Delete) dan Slave menangani Read",
            "Dilengkapi dua laporan dokumentasi teknis langkah demi langkah beserta bukti verifikasi pengujian",
          ],
          security: [
            "Autentikasi & Akses: SSH key-only ed25519 di port kustom, root login dinonaktifkan, sudo dengan timeout dan audit logging",
            "Firewall Ketat: Kebijakan default-deny/DROP di semua node (UFW pada Debian 12, firewalld pada Rocky Linux 9)",
            "Deteksi & Pencegahan Intrusi: Fail2ban (termasuk proteksi brute-force login & jail PostgreSQL) serta Suricata IDS (ET Open rules)",
            "Pembaruan & Jaringan Aman: Pembaruan sistem otomatis (unattended-upgrades) dan akses manajemen Proxmox privat terisolasi via Tailscale (mesh VPN)",
          ],
        },
        {
          description:
            "Aplikasi tabungan dengan deteksi uang kertas Rupiah via webcam (YOLOv8, mAP50 98,7%), backend FastAPI, frontend Vue.js 3 + Tailwind CSS, database MySQL.",
          badge: "Academic",
          role: "AI / Fullstack Developer",
          year: "Feb – Mar 2026",
          overview:
            "Aplikasi pencatatan tabungan pintar yang mengintegrasikan Computer Vision untuk mendeteksi dan mengklasifikasikan nominal uang kertas Rupiah secara otomatis melalui webcam. Menggunakan model custom YOLOv8 dengan tingkat akurasi mAP50 mencapai 98,7%, backend FastAPI asinkron untuk pemrosesan inferensi berkecepatan tinggi, antarmuka reaktif Vue.js 3 dengan Tailwind CSS, serta MySQL untuk persistensi transaksi keuangan pengguna.",
          features: [
            "Deteksi & Akumulasi Otomatis: Pemindaian pecahan uang Rupiah via webcam yang langsung mengidentifikasi nominal dan menginput nominal ke saldo tabungan tanpa ketik manual",
            "Manajemen Tabungan: Pencatatan riwayat transaksi (setoran/penarikan), target tabungan, dan visualisasi agregasi saldo berkala",
            "Antarmuka Interaktif & Responsif: Dashboard Vue.js 3 (Composition API) dan Tailwind CSS yang ringan dengan feedback visual deteksi real-time",
            "API Asinkron Berkecepatan Tinggi: Backend FastAPI yang mengoptimalkan payload gambar/frame webcam untuk inferensi instan dengan latency minimal",
          ],
          model: [
            "Dataset Custom: Model dilatih pada dataset uang kertas Rupiah beragam kondisi fisik, pencahayaan, dan sudut kemiringan",
            "Metrik Performa: Mencapai akurasi mAP50 98,7% pada data uji, memastikan deteksi stabil dan minim false-positive pada nominal serupa",
            "Optimasi Inferensi: Integrasi model YOLOv8 pada Python runtime untuk pemrosesan frame cepat langsung ke response JSON",
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
        model: "MODEL & COMPUTER VISION",
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
          role: "Solo Full-Stack Developer",
          year: "2026",
          overview:
            "An AI-powered conversational personal finance tracker for Indonesian users that eliminates the hassle of manual form inputs. Users simply send everyday chat messages (such as \"Bought iced coffee 18k\" or \"Monthly salary 6m\") to log transactions automatically. Built with a full-stack architecture using React 19 and Vite on the frontend, a Go (Gin) REST API with Supabase PostgreSQL on the backend, Groq API integration (JSON-mode structured output), and deployed on Vercel.",
          features: [
            "Automatic transaction logging from Indonesian/English chat messages (up to 5 transactions per message)",
            "Structured LLM extraction (type, IDR amount, 1 of 12 fixed categories, and a brief description)",
            "Conversational financial reports for daily, weekly, monthly, yearly, or custom date ranges",
            "In-chat transaction editing and deletion complete with confirmation cards",
            "Interactive insight panel featuring expense summaries, trend charts (Chart.js), and transaction history",
            "Supabase authentication with JWT verification against Supabase JWKS and Asia/Jakarta timezone handling",
          ],
        },
        {
          description:
            "ASP.NET Core MVC e-procurement system featuring multi-level approvals, SSRS reporting, and a Flask microservice for urgency classification (95% accuracy).",
          badge: "Academic",
          role: "Full-Stack Developer",
          year: "Mar 2026 – Aug 2026",
          overview:
            "A web-based e-procurement system built as a final academic project to simulate structured and transparent enterprise procurement workflows. Developed with ASP.NET Core MVC, Entity Framework Core, and SQL Server as the core system, integrated with a Python (Flask) microservice for request urgency classification and SSRS for automated reporting.",
          features: [
            "Multi-level approval workflow from Employee submission and Checker verification to Manager approval",
            "Automated Purchase Order (PO) generation immediately upon request approval",
            "Flask microservice for request urgency classification (95% accuracy) complete with a fallback mechanism",
            "Procurement report generation in PDF and Excel formats via SQL Server Reporting Services (SSRS)",
            "Dedicated activity monitoring and approval history dashboard for Managers",
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
            "A combined Distributed Systems and Network Security course project featuring a 5-node architecture on Proxmox VE, consisting of 3 Debian 12 LXC containers for lightweight application layers and 2 Rocky Linux 9 VMs for full kernel isolation and OS features on the database tier. Node 1 handles the frontend, Round Robin load balancer, and Cloudflare integration to distribute traffic across two backend nodes. On the database side, PostgreSQL is configured with master-slave replication and read/write splitting, complete with security hardening and technical documentation across all nodes.",
          features: [
            "5-node Proxmox VE architecture: 3 Debian 12 LXC containers (FE/LB + 2 Backends) and 2 Rocky Linux 9 VMs (DB Master & Slave)",
            "Node 1 configured as a Cloudflare gateway, frontend host, and Round Robin load balancer",
            "PostgreSQL master-slave replication with read/write splitting: Master handles Write operations (Create, Update, Delete) and Slave handles Read queries",
            "Backed by two step-by-step technical documentation reports with verification evidence",
          ],
          security: [
            "Authentication & Access: SSH key-only ed25519 on custom port, disabled root login, sudo with timeout and audit logging",
            "Strict Firewall: Default-deny/DROP policy across all nodes (UFW on Debian 12, firewalld on Rocky Linux 9)",
            "Intrusion Detection & Prevention: Fail2ban (including brute-force protection & PostgreSQL jail) alongside Suricata IDS (ET Open rules)",
            "Updates & Secure Networking: Automatic system updates (unattended-upgrades) and isolated private Proxmox management via Tailscale (mesh VPN)",
          ],
        },
        {
          description:
            "Savings app with Rupiah banknote detection via webcam (YOLOv8, mAP50 98.7%), FastAPI backend, Vue.js 3 + Tailwind CSS frontend, MySQL database.",
          badge: "Academic",
          role: "AI / Fullstack Developer",
          year: "Feb – Mar 2026",
          overview:
            "A smart personal savings web application integrating Computer Vision to automatically detect and classify Indonesian Rupiah banknotes in real time via webcam. Powered by a custom-trained YOLOv8 model achieving 98.7% mAP50 accuracy, asynchronous FastAPI backend for low-latency inference, reactive Vue.js 3 frontend styled with Tailwind CSS, and MySQL for secure financial transaction persistence.",
          features: [
            "Automated Banknote Detection: Real-time Rupiah banknote scanning via webcam that identifies denominations and auto-populates deposit records",
            "Savings Management: Transaction history logging (deposits/withdrawals), custom financial targets, and periodic balance aggregation",
            "Responsive & Reactive UI: Lightweight Vue.js 3 (Composition API) dashboard with Tailwind CSS featuring real-time detection bounding box feedback",
            "High-Throughput Async API: FastAPI backend optimized for rapid image frame payloads, delivering low-latency inference cycles",
          ],
          model: [
            "Custom Dataset Training: Trained on Indonesian Rupiah banknotes across diverse lighting conditions, angles, and physical wear",
            "Performance Metric: Achieved 98.7% mAP50 on test validation, ensuring robust detection and minimal false-positives across similar bills",
            "Inference Optimization: Streamlined YOLOv8 pipeline within Python runtime converting live camera captures to instant structured JSON outputs",
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
        model: "MODEL & COMPUTER VISION",
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
