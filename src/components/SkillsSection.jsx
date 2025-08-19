import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Wrench, Sparkles, Zap, TrendingUp } from "lucide-react";

const skills = [
  // FrontEnd
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 76, category: "frontend" },
  { name: "Flutter", level: 77, category: "frontend" },
  // BackEnd
  { name: "NodeJs", level: 75, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PHP", level: 78, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "VS Code", level: 81, category: "tools" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Database },
  { id: "tools", label: "Tools", icon: Wrench }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return Code;
      case 'backend': return Database;
      case 'tools': return Wrench;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-primary/15 rotate-45 animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary/25 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My<span className="text-primary"> Skills</span>
          </h2>

          <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Passionate about crafting digital experiences with modern technologies and best practices.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group relative px-6 py-3 rounded-2xl transition-all duration-500 font-medium text-sm backdrop-blur-sm overflow-hidden",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary/50 shadow-lg shadow-primary/25 scale-105"
                    : "bg-card/60 text-foreground border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 hover:shadow-lg"
                )}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center gap-2">
                  <IconComponent className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    activeCategory === category.id ? "animate-pulse" : "group-hover:scale-110"
                  )} />
                  <span>{category.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredSkills.map((skill, key) => {
            const IconComponent = getCategoryIcon(skill.category);
            return (
              <div
                key={key}
                className="group relative bg-card/60 backdrop-blur-xl border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-700 hover:translate-y-[-6px] hover:rotate-1"
                style={{ animationDelay: `${key * 100}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Skill Level Badge */}
                  <div className="relative">
                    <div className="px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                  </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden backdrop-blur-sm border border-border/30">
                    <div
                      className={cn(
                        "h-3 rounded-full origin-left transition-all duration-1000 ease-out relative overflow-hidden",
                        "bg-gradient-to-r from-primary via-primary/80 to-primary"
                      )}
                      style={{ 
                        width: skill.level + "%",
                        animationDelay: `${key * 200}ms`
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Progress Glow Effect */}
                  <div 
                    className="absolute top-0 h-3 rounded-full bg-primary/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ width: skill.level + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};