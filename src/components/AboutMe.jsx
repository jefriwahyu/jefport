import { Code, Smartphone, ShieldCheck, CheckCircle2, Award, FolderGit2, Download, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Magnetic } from "./Magnetic";

const highlights = [
  "Secure RESTful APIs & database design",
  "Laravel, ASP.NET Core & Express backends",
  "AI integration: YOLOv8 vision & microservices",
  "SQA: 214 test cases, 60 defects reported",
];

const cards = [
  {
    icon: Code,
    title: "Backend Development",
    desc: "Secure REST APIs with Laravel, ASP.NET Core, FastAPI & Express.js — plus MySQL, SQL Server & MongoDB.",
    gradient: "from-violet-500 to-primary",
  },
  {
    icon: Smartphone,
    title: "Frontend & Mobile",
    desc: "Reactive dashboards with Vue.js & React, cross-platform apps with Flutter, styled with Tailwind CSS.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "AI & Quality Assurance",
    desc: "YOLOv8 computer vision, Python microservices, and enterprise-grade SQA with structured testing.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <SectionHeading
          tag="About Me"
          title="Fresh graduate building"
          highlight="reliable software"
          description="Backend & Fullstack developer with enterprise QA discipline and a passion for intelligent systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual card */}
          <Reveal variant="clip" className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-pink-500/15 to-amber-400/20 rounded-[2rem] blur-2xl" />
              <div className="relative glass rounded-[2rem] p-8 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-pink-500 to-amber-400" />
                {/* Avatar big */}
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white font-display text-4xl font-bold shadow-xl shadow-primary/30 rotate-3 mb-6">
                  JP
                </div>
                <h3 className="font-display text-2xl font-bold mb-1 text-left">Jefri Wahyudiana Putra</h3>
                <p className="text-primary font-semibold text-sm mb-4 text-left">Backend • Fullstack Developer</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-left mb-6">
                  Fresh graduate in D3 Informatics Engineering (GPA 3.86) who ships
                  real products — secure e-voting, e-procurement & AI savings apps —
                  hardened by an enterprise SQA internship.
                </p>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4">
                    <Award className="w-5 h-5 text-primary mb-2" />
                    <div className="font-display font-bold text-xl">3.86</div>
                    <div className="text-xs text-muted-foreground">GPA Informatics Eng.</div>
                  </div>
                  <div className="rounded-2xl bg-pink-500/10 border border-pink-500/20 p-4">
                    <FolderGit2 className="w-5 h-5 text-pink-500 mb-2" />
                    <div className="font-display font-bold text-xl">6+</div>
                    <div className="text-xs text-muted-foreground">Projects Shipped</div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-bold flex items-center gap-1.5 animate-float">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={100}>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug mb-5 text-left">
                Efficient, reliable &{" "}
                <span className="text-gradient">intelligent solutions</span>
              </h3>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                Hands-on experience across academic, freelance and independent
                projects — from a Laravel e-voting system trusted by 3,458 voters
                to a YOLOv8-powered savings app — plus vendor integration testing
                for an enterprise pension fund application.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="grid sm:grid-cols-2 gap-3 my-7 text-left">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Magnetic>
                  <a href="#contact" className="cosmic-button group">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="/resume/CV_Jefri_Wahyudiana_Putra.pdf" className="ghost-button">
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} className="h-full">
              <TiltCard max={7} className="group relative glass rounded-3xl p-7 overflow-hidden card-hover text-left h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-80 from-primary via-pink-500 to-amber-400" />
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${c.gradient} text-white shadow-lg mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform w-fit`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{c.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
