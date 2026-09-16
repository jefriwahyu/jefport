import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "./Counter";
import { useLang, content } from "@/lib/i18n";

const groups = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Laravel / PHP", level: 82 },
      { name: "FastAPI / Python", level: 68 },
      { name: "CodeIgniter 4", level: 82 },
      { name: "ASP.NET Core / C#", level: 80 },
      { name: "Express.js / Node", level: 78 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    skills: [
      { name: "Vue.js 3", level: 75 },
      { name: "React", level: 67 },
      { name: "Flutter", level: 77 },
      { name: "Tailwind CSS", level: 84 },
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 76 },
      { name: "PostgreSQL", level: 74 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    id: "tools",
    label: "Tools & AI",
    skills: [
      { name: "Git / GitHub", level: 82 },
      { name: "VS Code", level: 85 },
      { name: "Postman", level: 78 },
      { name: "YOLOv8", level: 69 },
      { name: "Roboflow", level: 64 },
    ],
  },
];

const tabs = [{ id: "all", label: "all" }, ...groups.map((g) => ({ id: g.id, label: g.id }))];

export const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const { lang } = useLang();
  const t = content[lang].skills;
  const visible = groups.filter((g) => active === "all" || g.id === active);

  return (
    <section id="skills" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="cat skills.txt"
          description={t.cmdDesc}
        />

        <div className="flex flex-wrap gap-2 mb-8 font-mono text-[13px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-4 py-1.5 rounded-sm border transition-colors",
                active === tab.id
                  ? "bg-primary text-primary-foreground border-primary font-bold"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/60"
              )}
            >
              ./{tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={active}>
          {visible.map((group) => (
            <div key={group.id} data-cable-item className="term-panel px-5 py-5">
              <p className="font-mono text-sm font-bold text-primary mb-4">
                <span className="text-muted-foreground">~/</span>
                {group.id}/
              </p>
              <ul className="space-y-3.5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between font-mono text-[13px] mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary font-bold">
                        <Counter end={skill.level} suffix="%" duration={1200} />
                      </span>
                    </div>
                    <div className="h-1 bg-secondary rounded-none overflow-hidden">
                      <div
                        className="h-full bg-primary/70"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
