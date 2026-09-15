import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { handleSpotMove } from "@/lib/spotlight";
import { useLang, content } from "@/lib/i18n";

const issuers = ["Coursera", "Coursera", "Dicoding", "Dicoding", "Dicoding", "BNSP"];

export const EducationSection = () => {
  const { lang } = useLang();
  const t = content[lang].education;
  return (
    <section id="education" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="cat education.txt"
          description={t.cmdDesc}
        />

        <HudPanel className="mb-4" data-cable-item>
          <div
            onMouseMove={handleSpotMove}
            className="term-panel spot-wrap group px-5 py-5 md:px-7 md:py-6"
          >
            <span className="spot" aria-hidden="true" />
            <p className="font-mono text-xs text-primary font-bold mb-2">[ {t.eduLabel} :: 2023 — 2026 ]</p>
            <h3 className="font-mono text-base md:text-lg font-bold">
              Universitas Logistik dan Bisnis Internasional
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t.degree}
            </p>
            <p className="font-mono text-sm mt-3">
              <span className="text-muted-foreground">GPA:</span>{" "}
              <span className="text-primary font-bold text-glow">3.86 / 4.00</span>
              <span className="text-muted-foreground"> — {t.gpaLabel}</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              {t.focus}
            </p>
          </div>
        </HudPanel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.certs.map((cert, i) => (
            <div
              key={cert.title}
              data-cable-item
              onMouseMove={handleSpotMove}
              className="term-panel term-card-hover spot-wrap group px-5 py-4"
            >
              <span className="spot" aria-hidden="true" />
              <p className="font-mono text-sm font-bold text-foreground leading-snug">
                <span className="text-primary mr-2">✓</span>
                {cert.title}
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                {issuers[i]} :: {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
