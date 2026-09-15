import { Download, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";

const highlights = [
  "RESTful API yang aman & desain database",
  "Back-end Laravel, ASP.NET Core & Express",
  "Integrasi AI: YOLOv8 vision & microservice",
  "SQA: 214 test case, 60 defect dilaporkan",
];

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="whoami"
          description="Profil singkat — latar belakang dan fokus saya."
        />

        <HudPanel>
          <div className="term-panel px-5 py-6 md:px-8 md:py-8">
            <p className="font-mono text-sm md:text-[15px] leading-relaxed text-muted-foreground">
              <span className="text-primary">$</span> Fresh graduate D3 Teknik Informatika (IPK 3.86)
              dengan pengalaman hands-on di Back-End & Full-Stack — dari sistem e-voting
              yang dipercaya 3.458 pemilih hingga aplikasi AI — plus pengalaman SQA
              enterprise untuk aplikasi dana pensiun.
            </p>
            <p className="font-mono text-sm md:text-[15px] leading-relaxed text-muted-foreground mt-4">
              <span className="text-primary">$</span> Minat sekunder: cybersecurity, condong ke{" "}
              <span className="text-foreground">red team / ethical hacking</span> — selaras
              dengan tema situs ini.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 font-mono text-[13px] md:text-sm text-foreground/90">
                  <span className="text-primary font-bold shrink-0">[+]</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="#contact" className="term-btn">
                [ Hubungi Saya ]
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/resume/CV_Jefri_Wahyudiana_Putra.pdf" className="term-btn-ghost">
                <Download className="w-4 h-4" />
                [ Download CV ]
              </a>
            </div>
          </div>
        </HudPanel>
      </div>
    </section>
  );
};
