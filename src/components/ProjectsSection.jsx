import { useCallback, useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { ProjectModal } from "./ProjectModal";
import { handleSpotMove } from "@/lib/spotlight";
import { cn } from "@/lib/utils";
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
    name: "pemira/",
    title: "Pemira E-Voting Website",
    category: "web",
    tags: ["Laravel", "Filament", "Blade", "Relational DB"],
    githubUrl: "https://github.com/jefriwahyudiana/pemira",
    demoSrc: "/projects/Demo/pemira.mp4",
  },
  {
    name: "proflowapp/",
    title: "ProFlowApp — E-Procurement System",
    category: "web",
    tags: ["ASP.NET Core MVC", "EF Core", "SQL Server", "SSRS", "Flask"],
    githubUrl: "https://github.com/jefriwahyu/ProflowApp",
    images: proflowImages,
    demoSrc: "/projects/Demo/proflow.mp4",
  },
  {
    name: "tabunganku-ai/",
    title: "TabunganKu AI",
    category: "web",
    tags: ["YOLOv8", "FastAPI", "Vue.js 3", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/jefriwahyu/TabunganKu",
    images: TABUNGAN_DIR_FILES.map((f) => `${TABUNGAN_DIR}/${f}`),
    demoSrc: "/projects/Demo/tabunganku.mp4",
  },
  {
    name: "kuykontak/",
    title: "KuyKontak",
    category: "mobile",
    tags: ["Express.js", "MongoDB", "CodeIgniter 4", "MySQL", "Flutter", "Cloudflare Tunnel"],
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
    demoSrc: "/projects/Demo/kuykontak.mp4",
  },
  {
    name: "infra/",
    title: "Infrastructure & Server Security",
    category: "infra",
    tags: ["Proxmox VE", "Debian 12", "Rocky Linux 9", "PostgreSQL", "Suricata", "WireGuard"],
  },
];

const FILTERS = [
  { id: "all", label: "all" },
  { id: "web", label: "web" },
  { id: "mobile", label: "mobile" },
  { id: "infra", label: "infra" },
];
const PAGE_SIZE = 4;

export const ProjectsSection = () => {
  const { lang } = useLang();
  const t = content[lang].projects;
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(null);
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
      setOpen(null);
      setClosing(false);
      closingRef.current = false;
    }, 280);
  }, []);

  const filtered = projects.filter((p) => filter === "all" || p.category === filter);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const changeFilter = (id) => {
    setFilter(id);
    setPage(0);
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="ls projects/"
          description={t.cmdDesc}
        />

        <div className="flex flex-wrap gap-2 mb-8 font-mono text-[13px]">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => changeFilter(f.id)}
              className={cn(
                "px-4 py-1.5 rounded-sm border transition-colors",
                filter === f.id
                  ? "bg-primary text-primary-foreground border-primary font-bold"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/60"
              )}
            >
              ./{f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((project) => {
            const i = projects.indexOf(project);
            return (
              <HudPanel key={project.name} data-cable-item hideOnHover>
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
                    {t.items[i].badge && (
                      <span className="font-mono text-[11px] px-2 py-0.5 border border-primary/50 text-primary rounded-sm">
                        {t.items[i].badge}
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
                      onClick={() => setOpen({ project, index: i })}
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
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 font-mono text-[13px]">
            <button
              onClick={() => setPage(Math.max(0, safePage - 1))}
              disabled={safePage === 0}
              aria-label="Halaman sebelumnya"
              className="px-3 py-1.5 rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/60 disabled:opacity-40 disabled:pointer-events-none"
            >
              [ &lt; ]
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Halaman ${i + 1}`}
                className={cn(
                  "px-3 py-1.5 rounded-sm border transition-colors",
                  safePage === i
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/60"
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages - 1, safePage + 1))}
              disabled={safePage === totalPages - 1}
              aria-label="Halaman berikutnya"
              className="px-3 py-1.5 rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/60 disabled:opacity-40 disabled:pointer-events-none"
            >
              [ &gt; ]
            </button>
          </div>
        )}

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
      {open && (
        <ProjectModal
          project={open.project}
          detail={t.items[open.index]}
          ui={t.modal}
          closing={closing}
          onClose={requestClose}
        />
      )}
    </section>
  );
};
