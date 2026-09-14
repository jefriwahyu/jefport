import { Briefcase, GraduationCap, BadgeCheck, Building2, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const experiences = [
  {
    role: "Software Quality Assurance Intern",
    company: "PT Primalogic Global Teknologi",
    location: "Jakarta",
    period: "Mar 2026 – May 2026",
    points: [
      "Vendor Integration Testing for an enterprise-scale pension fund application.",
      "Executed 214 manual test cases with State Transition Testing methodology.",
      "Reported 60 system defects and partnered with developers through regression testing.",
    ],
    tags: ["SQA", "State Transition Testing", "Regression"],
  },
  {
    role: "Freelance Fullstack Developer",
    company: "MPM — Pemira E-Voting Website",
    location: "Bandung",
    period: "Sep 2024 – Jan 2025",
    points: [
      "Built the back-end in Laravel with one-vote-per-student logic, login restriction and auto-logout.",
      "Filament admin dashboard for voter & candidate management, plus login and voting interfaces.",
      "Deployed with domain configuration — 3,458 voters, 1,124 valid votes recorded.",
    ],
    tags: ["Laravel", "Filament", "MySQL"],
  },
];

const certifications = [
  { title: "Google Cybersecurity Professional", issuer: "Coursera", date: "Nov 2025" },
  { title: "Google AI Essentials", issuer: "Coursera", date: "Oct 2025" },
  { title: "Back-End Development with JavaScript", issuer: "Dicoding", date: "Sep 2024" },
  { title: "Front-End Web for Beginners", issuer: "Dicoding", date: "Jun 2024" },
  { title: "Back-End Application Fundamentals", issuer: "Dicoding", date: "Feb 2024" },
  { title: "Junior Web Developer", issuer: "BNSP", date: "Oct 2022" },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          tag="Journey"
          title="Experience &"
          highlight="Education"
          description="Professional stops, academic foundation and certifications along the way."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Timeline */}
          <div className="lg:col-span-3 relative">
            <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-pink-500/60 to-transparent" aria-hidden="true" />
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 130}>
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <TiltCard max={4} className="glass rounded-3xl p-6 md:p-7 text-left card-hover">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold">{exp.role}</h3>
                      <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium mb-4">
                        <Building2 className="w-4 h-4 text-primary" />
                        {exp.company}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {exp.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-pink-500 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-secondary text-secondary-foreground border border-border">
                            {t}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <Reveal delay={150} className="lg:col-span-2 h-full">
            <TiltCard max={4} className="glass rounded-3xl p-6 md:p-8 text-left card-hover h-full relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-primary" />
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg mb-5 w-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Education</div>
              <h3 className="font-display text-xl font-bold leading-snug mb-1">
                University of Logistics and Business International
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-5">Bandung • Sep 2023 – Aug 2026</p>
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 mb-5">
                <div className="font-display text-3xl font-bold text-gradient">3.86<span className="text-lg text-muted-foreground"> / 4.00</span></div>
                <div className="text-sm font-semibold mt-1">Diploma in Informatics Engineering</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Focused on back-end systems, databases and applied AI — with freelance
                and independent projects shipped alongside coursework.
              </p>
            </TiltCard>
          </Reveal>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 100}>
              <div className="group glass rounded-2xl p-5 flex items-start gap-3.5 text-left card-hover h-full">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 shrink-0 group-hover:scale-110 transition-transform">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[15px] leading-snug">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
