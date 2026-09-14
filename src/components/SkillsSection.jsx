import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Server, Database, Wrench, Sparkles, LayoutGrid } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "Vue.js 3", level: 78, category: "frontend" },
  { name: "React", level: 76, category: "frontend" },
  { name: "Flutter", level: 77, category: "frontend" },
  { name: "Tailwind CSS", level: 84, category: "frontend" },
  { name: "PHP / Laravel", level: 82, category: "backend" },
  { name: "Python / FastAPI", level: 78, category: "backend" },
  { name: "C# / ASP.NET", level: 76, category: "backend" },
  { name: "Node.js / Express", level: 75, category: "backend" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "SQL Server", level: 76, category: "database" },
  { name: "MongoDB", level: 74, category: "database" },
  { name: "PostgreSQL", level: 72, category: "database" },
  { name: "Git/GitHub", level: 82, category: "tools" },
  { name: "Postman", level: 78, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];

const categories = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
  { id: "database", label: "Database", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "frontend":
      return Code;
    case "backend":
      return Server;
    case "database":
      return Database;
    case "tools":
      return Wrench;
    default:
      return Sparkles;
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40 border-y border-border/50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          tag="My Stack"
          title="Skills &"
          highlight="Expertise"
          description="From secure backends to AI integrations — the toolbox behind my projects."
        />

        <Reveal className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group relative px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm border backdrop-blur-sm",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 scale-105"
                  : "bg-card/70 text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <category.icon className={cn("w-4 h-4", activeCategory === category.id && "animate-pulse")} />
                {category.label}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" key={activeCategory}>
          {filteredSkills.map((skill, key) => (
            <Reveal key={skill.name} delay={(key % 6) * 80} className="h-full">
              <TiltCard max={6} className="group relative glass rounded-3xl p-6 overflow-hidden card-hover text-left h-full">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-pink-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-5 relative">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/10 border border-primary/20 group-hover:scale-110 transition-transform">
                      {(() => {
                        const SkillIcon = getCategoryIcon(skill.category);
                        return <SkillIcon className="w-5 h-5 text-primary" />;
                      })()}
                    </div>
                    <h3 className="font-display font-bold text-[17px] group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary font-display">
                    {skill.level}%
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden border border-border/50">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-violet-500 to-pink-500 relative overflow-hidden transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 animate-shimmer" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <span>{skill.category}</span>
                    <span>{skill.level >= 80 ? "Advanced" : skill.level >= 75 ? "Proficient" : "Intermediate"}</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
