import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";

const experiences = [
  {
    role: "Software Quality Assurance Intern",
    company: "PT Primalogic Global Teknologi",
    location: "Jakarta",
    period: "Mar 2026 – Mei 2026",
    points: [
      "Vendor Integration Testing untuk aplikasi dana pensiun skala enterprise.",
      "Eksekusi 214 test case manual dengan metodologi State Transition Testing.",
      "Melaporkan 60 defect sistem dan berkolaborasi saat regression testing.",
    ],
    tags: ["SQA", "State Transition Testing", "Regression"],
  },
  {
    role: "Freelance Fullstack Developer",
    company: "MPM — Pemira E-Voting Website",
    location: "Bandung",
    period: "Sep 2024 – Jan 2025",
    points: [
      "Back-end Laravel: logika satu-suara-per-mahasiswa, batasan login, auto-logout.",
      "Dashboard admin Filament + halaman login dan voting yang user-friendly.",
      "Deploy + konfigurasi domain — 3.458 pemilih, 1.124 suara sah.",
    ],
    tags: ["Laravel", "Filament", "MySQL"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="cat experience.log"
          description="Pengalaman kerja dan magang."
        />

        <div className="space-y-4">
              {experiences.map((exp) => (
                <HudPanel key={exp.company} data-cable-item>
              <article className="term-panel term-card-hover px-5 py-5 md:px-7 md:py-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 font-mono text-xs">
                  <span className="text-primary font-bold">[ {exp.period} ]</span>
                  <span className="text-muted-foreground">{exp.location}</span>
                </div>
                <h3 className="font-mono text-base md:text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-primary/90 mb-4">@ {exp.company}</p>
                <ul className="space-y-1.5 mb-4">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary font-mono mr-2">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 border border-border text-muted-foreground rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </HudPanel>
          ))}
        </div>
      </div>
    </section>
  );
};
