import { useCallback, useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { ProjectModal } from "./ProjectModal";
import { handleSpotMove } from "@/lib/spotlight";
import { useLang, content } from "@/lib/i18n";

const PROFLOW_DIR = "/projects/proflow";
const proflowImages = [
  "1. Home.jpg",
  "2.Halaman Barang.jpg",
  "3. Halaman Barang .jpg",
  "4.Lhat Sampah.jpg",
  "5.Tambah Barang.jpg",
  "6.Halaman Pengajuan.jpg",
  "7.Halaman Pengajuan.jpg",
  "8.Tambah Pengajuan.jpg",
  "9.Pesan Disetujui.jpg",
  "10.Pesan Ditolak.jpg",
  "11.Detail Pengajuan.jpg",
  "24.Upload Bukti.jpg",
  "12.Kelola Karyawan.jpg",
  "13.Karyawan Nonaktif.jpg",
  "14. Tambah Karyawan.jpg",
  "15.Laporan Pengajuan.jpg",
  "16.Laporan Pengajuan.jpg",
  "17.Laporan Pengajuan.jpg",
  "18. Laporan Pesanan.jpg",
  "19.Laporan Pesanan.jpg",
  "20.Laporan Pesanan.jpg",
  "21.Monitor Aktivitas.jpg",
  "22.Monitor Aktivitas.jpg",
  "23.Monitor Aktivitas.jpg",
].map((f) => `${PROFLOW_DIR}/${f}`);

const TABUNGAN_DIR = "/projects/tabunganku";
// Already in display order (trailing _1, _2, ... in the filenames).
const TABUNGAN_DIR_FILES = [
  "loading screen_1.jpg",
  "halaman tabungan aktif_2.jpg",
  "buat tabungan_3.jpg",
  "detail tabungan_4.jpg",
  "deteksi uang_5.jpg",
  "simpan tabungan_6.jpg",
  "bongkar tabungan_7.jpg",
  "hasil tabungan_8.jpg",
  "riwayat bongkar_9.jpg",
  "edit tabungan_10.jpg",
  "riwayat detail bongkar_11.jpg",
];

const projects = [
  {
    name: "proflowapp/",
    title: "ProFlowApp — Sistem E-Procurement Internal",
    tags: ["ASP.NET Core", "C#", "SQL Server", "Tailwind CSS", "JavaScript", "Flask", "SSRS"],
    githubUrl: "https://github.com/jefriwahyu/ProflowApp",
    images: proflowImages,
    youtubeId: "S90P4NebDRM",
  },
  {
    name: "pemira/",
    title: "Pemira E-Voting Website",
    tags: ["Laravel", "PHP", "Filament", "MySQL", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/jefriwahyudiana/pemira",
    youtubeId: "sZqBTTbZxRw",
  },
  {
    name: "tabunganku-ai/",
    title: "TabunganKu AI",
    tags: ["YOLOv8", "FastAPI", "Vue.js 3"],
    githubUrl: "https://github.com/jefriwahyu/TabunganKu",
    images: TABUNGAN_DIR_FILES.map((f) => `${TABUNGAN_DIR}/${f}`),
    youtubeId: "eULguJj2GtE",
  },
  {
    name: "kuykontak/",
    title: "KuyKontak",
    tags: ["Express.js", "CodeIgniter 4", "Flutter"],
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
    youtubeId: "KnMxC5sprNo",
  },
];

export const ProjectsSection = () => {
  const { lang } = useLang();
  const t = content[lang].projects;
  const [openIdx, setOpenIdx] = useState(null);
  // Delayed unmount so the Jarvis dematerialize animation can play out.
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const closeTimer = useRef(null);
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenIdx(null);
      setClosing(false);
      closingRef.current = false;
    }, 280);
  }, []);
  return (
    <section id="projects" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="ls projects/"
          description={t.cmdDesc}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <HudPanel key={project.name} data-cable-item staticBrackets>
              <article
                onMouseMove={handleSpotMove}
                className="term-panel term-card-hover spot-wrap group h-full px-5 py-5 flex flex-col"
              >
                <span className="spot" aria-hidden="true" />
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-sm font-bold text-primary group-hover:text-glow transition-all">
                    <span className="text-muted-foreground">0{i + 1} :: </span>
                    {project.name}
                  </p>
                  {(t.items[i].note || t.items[i].badge) && (
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-primary/50 text-primary rounded-sm">
                      {t.items[i].note || t.items[i].badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[15px] leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {t.items[i].description}
                </p>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary/70">stack:</span> {project.tags.join(" · ")}
                </p>
                <div className="flex items-center gap-4 font-mono text-[13px] font-bold">
                  <button
                    onClick={() => setOpenIdx(i)}
                    className="inline-flex items-center gap-1 text-primary hover:text-glow transition-all"
                  >
                    [ {t.modal.btn} ]
                  </button>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      [ repo ]
                    </a>
                  ) : (
                    <span className="text-muted-foreground/60 font-normal">
                      {t.onRequest}
                    </span>
                  )}
                </div>
              </article>
            </HudPanel>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/jefriwahyu"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn-ghost font-mono"
          >
            <Github className="w-4 h-4" />
            [ github.com/jefriwahyu ]
          </a>
        </div>
      </div>
      {openIdx !== null && (
        <ProjectModal
          project={projects[openIdx]}
          detail={t.items[openIdx]}
          ui={t.modal}
          closing={closing}
          onClose={requestClose}
        />
      )}
    </section>
  );
};
