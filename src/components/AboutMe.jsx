import { Download, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { WhoamiCodeBg } from "./WhoamiCodeBg";
import { useLang, content } from "@/lib/i18n";

export const AboutMe = () => {
  const { lang } = useLang();
  const t = content[lang].about;
  return (
    <section id="about" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="whoami"
          description={t.cmdDesc}
        />

        <HudPanel data-cable-item>
          <div className="term-panel whoami-panel relative overflow-hidden px-5 py-6 md:px-8 md:py-8">
            {/* Running-code backdrop: fades in while the cable node is
                inside this box, fades out when it leaves (see CSS). */}
            <div className="whoami-codebg pointer-events-none absolute inset-0" aria-hidden="true">
              <WhoamiCodeBg />
            </div>
            <div className="relative z-10">
            <p className="font-mono text-sm md:text-[15px] leading-relaxed text-muted-foreground">
              <span className="text-primary">$</span> {t.para1}
            </p>
            <p className="font-mono text-sm md:text-[15px] leading-relaxed text-muted-foreground mt-4">
              <span className="text-primary">$</span> {t.minatLabel}{" "}
              <span className="text-foreground">{t.minatList}</span>.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 font-mono text-[13px] md:text-sm text-foreground/90">
                  <span className="text-primary font-bold shrink-0">[+]</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="#contact" className="term-btn">
                [ {t.btnContact} ]
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/resume/CV_Jefri_Wahyudiana_Putra.pdf" className="term-btn-ghost">
                <Download className="w-4 h-4" />
                [ {t.btnCv} ]
              </a>
            </div>
            </div>
          </div>
        </HudPanel>
      </div>
    </section>
  );
};
