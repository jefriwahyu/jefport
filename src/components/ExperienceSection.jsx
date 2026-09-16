import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { handleSpotMove } from "@/lib/spotlight";
import { useLang, content } from "@/lib/i18n";

const experiences = [
  {
    role: "Software Quality Assurance Intern",
    company: "PT Primalogic Global Teknologi",
    location: "Jakarta",
    tags: ["SQA", "State Transition Testing", "Regression"],
  },
  {
    role: "Freelance Fullstack Developer",
    company: "MPM — Pemira E-Voting Website",
    location: "Bandung",
    tags: ["Laravel", "Filament", "MySQL", "JavaScript", "Tailwind CSS", "PHP"],
  },
];

export const ExperienceSection = () => {
  const { lang } = useLang();
  const t = content[lang].experience;
  return (
    <section id="experience" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="cat experience.log"
          description={t.cmdDesc}
        />

        <div className="space-y-4">
              {experiences.map((exp, i) => {
                const item = t.items[i];
                return (
                <HudPanel key={exp.company} data-cable-item staticBrackets>
              <article
                onMouseMove={handleSpotMove}
                className="term-panel term-card-hover spot-wrap group px-5 py-5 md:px-7 md:py-6"
              >
                <span className="spot" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 font-mono text-xs">
                  <span className="text-primary font-bold">[ {item.period} ]</span>
                  <span className="text-muted-foreground">{exp.location}</span>
                </div>
                <h3 className="font-mono text-base md:text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-primary/90 mb-4">@ {exp.company}</p>
                <ul className="space-y-1.5 mb-4">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary font-mono mr-2">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 border border-border text-muted-foreground rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </HudPanel>
                );
              })}
        </div>
      </div>
    </section>
  );
};
