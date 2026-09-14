import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  FolderGit2,
  ShoppingCart,
  Banknote,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Magnetic } from "./Magnetic";

const projects = [
  {
    id: 1,
    title: "Pemira E-Voting",
    description:
      "Secure Laravel e-voting platform with a Filament admin dashboard — one-vote-per-student logic, login restriction and auto-logout. Served 3,458 registered voters with 1,124 valid votes recorded.",
    image: "/projects/pemira.jpg",
    tags: ["Laravel", "Filament", "MySQL"],
    demoUrl: "https://pemira.tinagers.com/",
    githubUrl: "https://github.com/jefriwahyu/pemira_24",
    featured: true,
  },
  {
    id: 2,
    title: "ProFlowApp",
    description:
      "Internal e-procurement system (ASP.NET Core MVC + SQL Server) with staged Karyawan → Checker → Manager approvals, automatic PO creation, a Flask urgency-classifier microservice, and SSRS reporting with PDF/Excel export.",
    tags: ["ASP.NET Core", "SQL Server", "Flask"],
    badge: "Internal Project",
    coverIcon: ShoppingCart,
    coverGradient: "from-violet-600 via-primary to-indigo-500",
  },
  {
    id: 3,
    title: "TabunganKu AI",
    description:
      "AI savings tracker — YOLOv8 scans Rupiah banknotes through the webcam, FastAPI computes totals in real time, and a Vue.js 3 dashboard visualizes balances from a MySQL ledger.",
    tags: ["Vue.js 3", "FastAPI", "YOLOv8"],
    badge: "AI-Powered",
    coverIcon: Banknote,
    coverGradient: "from-pink-600 via-rose-500 to-amber-500",
  },
  {
    id: 4,
    title: "KuyKontak",
    description:
      "Flutter contacts app with local sync, favorites & dark/light mode. Dual backend: Express.js + MongoDB (tunneled via Cloudflare) and CodeIgniter 4 + MySQL on shared hosting.",
    image: "/projects/kuykontak.png",
    tags: ["Flutter", "Express.js", "CodeIgniter 4"],
    demoUrl: "https://github.com/jefriwahyu/kuykontak-app",
    githubUrl: "https://github.com/jefriwahyu/kuykontak-app",
  },
];

const ProjectCover = ({ project, className = "" }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${className}`}
      />
    );
  }
  const CoverIcon = project.coverIcon || FolderGit2;
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${project.coverGradient} relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-black/20 rounded-full blur-3xl" />
      <div className="relative w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
        <CoverIcon className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

const ProjectLinks = ({ project, featured = false }) => {
  if (!project.demoUrl && !project.githubUrl) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-500 text-xs font-bold">
        <Sparkles className="w-3.5 h-3.5" />
        {project.badge || "Case study on request"}
      </span>
    );
  }
  if (featured) {
    return (
      <div className="flex flex-wrap gap-3">
        {project.demoUrl && (
          <Magnetic>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button !py-3 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Magnetic>
        )}
        {project.githubUrl && (
          <Magnetic>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button !py-3 text-sm"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </Magnetic>
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-5 pt-5 border-t border-border/60 text-sm font-semibold">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
        >
          <ExternalLink size={15} />
          <span className="group-hover/link:underline underline-offset-4">Live Demo</span>
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
        >
          <Github size={15} />
          <span className="group-hover/link:underline underline-offset-4">Source</span>
        </a>
      )}
    </div>
  );
};

export const ProjectsSection = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          tag="Portfolio"
          title="Featured"
          highlight="Projects"
          description="Systems I've designed, built and shipped — from secure elections to AI apps."
        />

        {/* Featured project */}
        <Reveal variant="clip">
          <TiltCard max={4} className="group relative glass rounded-[2rem] overflow-hidden mb-8 card-hover grid lg:grid-cols-2">
            <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xs font-bold shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              Featured
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div className="absolute inset-0">
                <ProjectCover project={featured} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-10 text-left flex flex-col justify-center relative">
              <div className="flex flex-wrap gap-2 mb-4">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-7">
                {featured.description}
              </p>
              <ProjectLinks project={featured} featured />
            </div>
          </TiltCard>
        </Reveal>

        {/* Rest grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, idx) => (
            <Reveal key={project.id} delay={(idx % 3) * 120} className="h-full">
              <TiltCard max={7} className="group relative glass rounded-[1.75rem] overflow-hidden card-hover h-full flex flex-col text-left">
                <div className="relative h-52 overflow-hidden shrink-0">
                  <ProjectCover project={project} className="group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none" />
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-primary hover:scale-110 transition-all"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Source code"
                          className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-primary hover:scale-110 transition-all"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <span className="shrink-0 w-9 h-9 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center font-bold text-sm border border-white/30">
                      0{project.id}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <ProjectLinks project={project} />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-8 md:px-14 glass rounded-[2rem] relative overflow-hidden max-w-xl w-full">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-pink-500 to-amber-400" />
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FolderGit2 className="w-7 h-7 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Want to see experiments, mini-projects & contributions?
            </p>
            <Magnetic>
              <a
                href="https://github.com/jefriwahyu"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button group"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore My GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
