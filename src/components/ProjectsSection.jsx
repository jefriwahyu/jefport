import { Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { handleSpotMove } from "@/lib/spotlight";
import { useLang, content } from "@/lib/i18n";

const projects = [
  {
    name: "proflowapp/",
    title: "ProFlowApp — Sistem E-Procurement Internal",
    tags: ["ASP.NET Core", "SQL Server", "Flask", "SSRS"],
    githubUrl: "https://github.com/jefriwahyu/ProflowApp",
  },
  {
    name: "pemira/",
    title: "Pemira E-Voting Website",
    tags: ["Laravel", "Filament", "MySQL"],
    githubUrl: "https://github.com/jefriwahyu/pemira_24",
  },
  {
    name: "tabunganku-ai/",
    title: "TabunganKu AI",
    tags: ["YOLOv8", "FastAPI", "Vue.js 3"],
    githubUrl: "https://github.com/jefriwahyu/TabunganKu",
  },
  {
    name: "kuykontak/",
    title: "KuyKontak",
    tags: ["Express.js", "CodeIgniter 4", "Flutter"],
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
  },
];

export const ProjectsSection = () => {
  const { lang } = useLang();
  const t = content[lang].projects;
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
    </section>
  );
};
