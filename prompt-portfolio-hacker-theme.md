# Prompt: Website Portfolio — Hacker/Terminal Minimalis

Gunakan prompt di bawah ini untuk di-paste ke AI code generator (Claude Code, v0, bolt.new, Cursor, dll).

---

## PROMPT

Buatkan saya website portfolio pribadi dengan konsep berikut:

### Konsep Desain
- Tema: **hacker/terminal aesthetic**, tapi tetap **minimalis dan clean**, bukan norak.
- Palet warna: dominan gelap (hitam/near-black `#0a0a0a` atau `#0d1117`), teks abu-abu terang, aksen warna hijau neon (`#00ff41`/`#39ff14`) atau cyan (`#00e5ff`) untuk highlight — pilih salah satu sebagai warna utama, jangan campur keduanya.
- Font monospace untuk elemen teknis/heading (mis. `JetBrains Mono`, `Fira Code`, `Space Mono`), font sans-serif yang bersih untuk body text panjang agar tetap nyaman dibaca.
- Layout grid rapi, banyak ruang kosong (whitespace gelap), tidak padat.
- **Efek animasi HANYA di beberapa titik tertentu, tidak di semua elemen:**
  1. Hero section: efek **typing/typewriter** untuk menampilkan judul/role (seperti mengetik command di terminal), diikuti cursor yang berkedip.
  2. Hover di card project: efek simpel seperti border menyala tipis (glow) atau sedikit terangkat (translate/shadow), bukan animasi 3D atau rotasi berlebihan.
  3. Opsional: satu efek scanline/CRT sangat halus (opacity rendah) hanya di background hero, tidak di seluruh halaman.
  4. Section header ditulis dengan gaya command line, contoh: `$ whoami`, `$ cat skills.txt`, `$ ls projects/`.
- Selain titik-titik di atas, **tidak ada animasi tambahan** — sisanya statis dan cepat load. Prioritas: simpel, tajam, mudah dibaca, bukan "ramai efek".
- Fully responsive (mobile-first).

### Elemen HUD ala Janis (Iron Man)
- Satu kali **boot-up sequence** saat halaman pertama dibuka: teks singkat mengetik sendiri seperti "INITIALIZING SYSTEM...", "LOADING PROFILE...", lalu fade ke hero. Jalan sekali saja, tidak berulang.
- **Corner brackets** (garis sudut ala HUD, bentuk `⌐` `¬` di keempat pojok) pada card/panel utama — statis, bukan animasi, cukup untuk kesan "interface", tidak dipakai di semua elemen.
- Foto profil/avatar dikasih **ring scan tipis** yang berputar sangat pelan dan halus di sekelilingnya — satu-satunya animasi looping di seluruh situs, dan hanya di hero.
- Skill bar/percentage ditampilkan sebagai **readout angka** (angka naik dari 0 ke nilai akhir saat pertama kali terlihat di layar/on scroll-into-view), bukan progress bar animasi berulang.
- Warna dan garis tetap konsisten dengan tema hacker (hijau neon/cyan), jangan tambah warna baru — HUD ini styling tambahan di atas tema yang sudah ada, bukan tema baru.

### AI Assistant "Janis" (Chatbot)
- Tombol mengambang di pojok kanan bawah, label singkat seperti `[ JANIS ]` atau ikon mic/AI kecil.
- Saat dibuka: panel chat bergaya HUD (border tipis neon, font monospace), sapaan awal singkat, misalnya "Sistem aktif. Tanyakan apa saja tentang CV atau project saya."
- Fungsinya: menjawab pertanyaan pengunjung seputar **CV, skill, pengalaman, dan project saya saja** (bukan asisten umum) — jawaban dibatasi ke konten CV yang sudah disediakan di prompt ini.
- Implementasi: backend kecil yang memanggil LLM API (Anthropic API atau OpenAI API) dengan system prompt berisi ringkasan CV saya, supaya jawaban tetap relevan dan tidak ngarang. Kalau ditanya di luar topik, jawab sopan bahwa dia hanya bisa membahas seputar profil/project di situs ini.
- Efek di panel chat cukup minim: animasi mengetik (typing indicator) saat menunggu respons, tanpa efek tambahan lain.

### Animasi 3D (Ringan)
- Tambahkan satu elemen 3D di hero: objek **wireframe low-poly** (bola/icosahedron) yang berputar pelan, warna mengikuti aksen neon tema (hijau/cyan) — dibuat dengan Three.js/React Three Fiber, poly count rendah supaya ringan, bukan objek solid/textured.
- Objek ini hanya muncul di hero, tidak diulang di section lain, dan idealnya lazy-loaded agar tidak memperlambat initial load halaman.
- Tambahan opsional yang lebih murah secara performa: **3D tilt on hover** di project card — card miring mengikuti posisi kursor, cukup pakai CSS transform atau library kecil (mis. vanilla-tilt.js), tanpa WebGL. Ini bisa jadi pengganti/pelengkap hover glow yang sudah disebutkan sebelumnya.
- Kalau performa di mobile jadi prioritas, objek wireframe 3D di hero boleh dimatikan di layar kecil dan cukup pakai efek tilt saja.

### Struktur Halaman
1. **Hero** — Nama, role target, satu baris tagline, tombol CTA (Lihat Projects / Download CV / Hubungi Saya).
2. **About / whoami** — ringkasan singkat latar belakang.
3. **Skills / cat skills.txt** — tech stack dikelompokkan (Backend, Frontend, Database, Tools/AI).
4. **Experience** — pengalaman kerja/magang.
5. **Projects** — daftar project dengan deskripsi singkat, tech stack, dan link repo/demo.
6. **Education & Certifications**.
7. **Contact** — email, LinkedIn, GitHub.

### Konten yang harus dimasukkan (dari CV saya)

**Identitas**
- Nama: Jefri Wahyudiana Putra (panggilan: Wahyudi)
- Role target: Backend Developer / Full-Stack Developer / Software Engineer
- Fresh graduate D3 Teknik Informatika, Universitas Logistik dan Bisnis Internasional (ULBI), lulus Agustus 2026
- Minat sekunder (jangan jadi headline utama, cukup disebut di About/Skills): cybersecurity, condong ke red team/ethical hacking — cocok dengan tema visual hacker di situs ini

**Pengalaman**
- Software Quality Assurance Intern, PT Primalogic Global Teknologi (Mar–Mei 2026) — testing aplikasi dana pensiun skala enterprise

**Projects**
- **ProFlowApp** (Tugas Akhir) — ASP.NET Core MVC (.NET 10), Entity Framework Core, SQL Server, Razor Views, BCrypt, SSRS reporting (PDF/Excel), plus microservice Python/FastAPI dengan ML urgency classification. Repo: github.com/jefriwahyu/ProflowApp
- **Pemira E-Voting Website** — Laravel & Filament
- **TabunganKu AI** — YOLOv8 + FastAPI, deteksi uang kertas Rupiah real-time
- **KuyKontak** — Express.js, CodeIgniter 4, Flutter (backend)

**Tech Stack**
- Backend: Laravel, FastAPI, .NET Core, CodeIgniter 4, Express.js
- Frontend: Vue.js 3
- Mobile: Flutter (backend integration)
- Database: MySQL, PostgreSQL, MongoDB
- AI/CV: YOLOv8, Roboflow

**Sertifikasi**
- Google Cybersecurity Professional Certificate
- Google AI Essentials
- BNSP Junior Web Developer
- Beberapa kursus Dicoding

### Tech Stack Rekomendasi untuk Situs Ini
- React/Next.js atau HTML+Tailwind CSS biasa (pilih sesuai kemudahan hosting)
- Tailwind CSS untuk styling cepat
- Framer Motion (React) atau CSS transitions murni — gunakan seminimal mungkin, sesuai poin efek di atas
- Three.js/React Three Fiber untuk objek wireframe 3D di hero (low-poly, lazy-loaded)
- Untuk fitur chatbot "Janis": endpoint backend kecil (bisa pakai stack backend yang sama dengan project lain — Golang/FastAPI/Express) yang meneruskan pertanyaan ke LLM API, jangan panggil API key langsung dari frontend
- Static site untuk bagian utama, bisa di-hosting di infra portfolio yang sudah disiapkan; endpoint chatbot dijalankan sebagai service terpisah di server yang sama

---

**Catatan:** Tekankan ke AI code generator bahwa fokus utama adalah *readability* dan *kecepatan load*, efek visual hanya pelengkap di titik-titik yang disebutkan, bukan tema utama.
