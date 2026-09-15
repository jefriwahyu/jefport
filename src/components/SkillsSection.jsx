import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { useLang, content } from "@/lib/i18n";

const groups = [
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Laravel / PHP",
      "FastAPI / Python",
      "CodeIgniter 4",
      "ASP.NET Core / C#",
      "Express.js / Node",
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    skills: [
      "Vue.js 3",
      "React",
      "Flutter",
      "Tailwind CSS",
      "JavaScript",
      "HTML / CSS",
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    label: "Tools & AI",
    skills: ["Git / GitHub", "VS Code", "Postman", "YOLOv8", "Roboflow"],
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
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 border border-border rounded-sm font-mono text-[13px] text-foreground/90"
                  >
                    {skill}
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
