import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";

const certifications = [
  { title: "Google Cybersecurity Professional Certificate", issuer: "Coursera", date: "Nov 2025" },
  { title: "Google AI Essentials", issuer: "Coursera", date: "Okt 2025" },
  { title: "Back-End Development with JavaScript", issuer: "Dicoding", date: "Sep 2024" },
  { title: "Front-End Web untuk Pemula", issuer: "Dicoding", date: "Jun 2024" },
  { title: "Fundamental Aplikasi Back-End", issuer: "Dicoding", date: "Feb 2024" },
  { title: "Junior Web Developer", issuer: "BNSP", date: "Okt 2022" },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="cat education.txt"
          description="Pendidikan formal dan sertifikasi."
        />

        <HudPanel className="mb-4" data-cable-item>
          <div className="term-panel px-5 py-5 md:px-7 md:py-6">
            <p className="font-mono text-xs text-primary font-bold mb-2">[ 2023 — 2026 ]</p>
            <h3 className="font-mono text-base md:text-lg font-bold">
              Universitas Logistik dan Bisnis Internasional
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              D3 Teknik Informatika — Lulus Agustus 2026
            </p>
            <p className="font-mono text-sm mt-3">
              <span className="text-muted-foreground">GPA:</span>{" "}
              <span className="text-primary font-bold text-glow">3.86 / 4.00</span>
            </p>
          </div>
        </HudPanel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.title} data-cable-item className="term-panel term-card-hover px-5 py-4">
              <p className="font-mono text-sm font-bold text-foreground leading-snug">
                <span className="text-primary mr-2">✓</span>
                {cert.title}
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                {cert.issuer} :: {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
