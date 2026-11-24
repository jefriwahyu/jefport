import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Pagination } from "./Pagination";
import { useLang, content } from "@/lib/i18n";

/* Skill names are language-independent (identical for ID and EN). */
const groups = [
  {
    id: "backend",
    skills: [
      "ASP.NET Core / C#",
      "Laravel / PHP",
      "Go (Gin)",
      "Express.js / Node",
      "FastAPI / Python",
      "CodeIgniter 4",
    ],
  },
  {
    id: "frontend",
    skills: ["React", "Vue.js 3", "Tailwind CSS", "JavaScript", "HTML / CSS", "Flutter"],
  },
  {
    id: "database",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Supabase", "MongoDB"],
  },
  {
    id: "security",
    skills: ["Linux (Debian / Rocky)", "Proxmox VE", "Suricata IDS", "Fail2ban", "WireGuard"],
  },
  {
    id: "tools",
    skills: ["Git / GitHub", "Postman", "Vercel", "YOLOv8", "LLM API"],
  },
];

const tabs = [{ id: "all", label: "all" }, ...groups.map((g) => ({ id: g.id, label: g.id }))];

/* ./all shows 4 cards per page so the 2x2 grid stays symmetrical;
   a single category tab shows its one card without pagination. */
const PAGE_SIZE = 4;

export const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(0);
  const { lang } = useLang();
  const t = content[lang].skills;

  const filtered = groups.filter((g) => active === "all" || g.id === active);
  const paged = active === "all";
  const totalPages = paged ? Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)) : 1;
  const safePage = Math.min(page, totalPages - 1);
  const visible = paged
    ? filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE)
    : filtered;

  const changeTab = (id) => {
    setActive(id);
    setPage(0);
  };

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
              onClick={() => changeTab(tab.id)}
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

        {/* Remount the grid on every tab/page change so the cards replay the
            same entrance animation (cable-in) as before. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={`${active}-${safePage}`}>
          {visible.map((group) => (
            <div key={group.id} data-cable-item className="term-panel px-5 py-5">
              <p className="font-mono text-sm font-bold text-primary mb-4">
                <span className="text-muted-foreground">~/</span>
                {group.id}/
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2.5 py-1 border border-border text-muted-foreground rounded-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {paged && <Pagination page={safePage} totalPages={totalPages} onChange={setPage} />}
      </div>
    </section>
  );
};
