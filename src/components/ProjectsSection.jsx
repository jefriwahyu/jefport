import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";

const projects = [
  {
    name: "proflowapp/",
    title: "ProFlowApp — Sistem E-Procurement Internal",
    note: "Tugas Akhir",
    description:
      "ASP.NET Core MVC (.NET 10), EF Core, SQL Server, Razor Views, BCrypt, SSRS reporting (PDF/Excel), plus microservice Python dengan ML urgency classification.",
    tags: ["ASP.NET Core", "SQL Server", "Flask", "SSRS"],
    githubUrl: "https://github.com/jefriwahyu/ProflowApp",
  },
  {
    name: "pemira/",
    title: "Pemira E-Voting Website",
    description:
      "Platform e-voting Laravel & Filament — dashboard admin, logika satu-suara-per-mahasiswa. 3.458 pemilih, 1.124 suara sah.",
    tags: ["Laravel", "Filament", "MySQL"],
    demoUrl: "https://pemira.tinagers.com/",
    githubUrl: "https://github.com/jefriwahyu/pemira_24",
  },
  {
    name: "tabunganku-ai/",
    title: "TabunganKu AI",
    description:
      "YOLOv8 + FastAPI — deteksi uang kertas Rupiah real-time via webcam, dashboard Vue.js 3, database MySQL.",
    tags: ["YOLOv8", "FastAPI", "Vue.js 3"],
  },
  {
    name: "kuykontak/",
    title: "KuyKontak",
    description:
      "Backend aplikasi kontak Flutter — Express.js + MongoDB dan CodeIgniter 4 + MySQL.",
    tags: ["Express.js", "CodeIgniter 4", "Flutter"],
    demoUrl: "https://github.com/jefriwahyu/kuykontak-app",
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="ls projects/"
          description="Kumpulan project yang sudah di-deploy dan dipakai."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <HudPanel key={project.name}>
              <article className="term-panel term-card-hover h-full px-5 py-5 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-sm font-bold text-primary">
                    <span className="text-muted-foreground">0{i + 1} :: </span>
                    {project.name}
                  </p>
                  {project.note && (
                    <span className="font-mono text-[11px] px-2 py-0.5 border border-primary/50 text-primary rounded-sm">
                      {project.note}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[15px] leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary/70">stack:</span> {project.tags.join(" · ")}
                </p>
                <div className="flex items-center gap-4 font-mono text-[13px] font-bold">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                    >
                      [ demo <ArrowUpRight className="w-3.5 h-3.5" /> ]
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      [ repo ]
                    </a>
                  )}
                  {!project.demoUrl && !project.githubUrl && (
                    <span className="text-muted-foreground/60 font-normal">
                      // detail on request
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
    </section>
  );
};
