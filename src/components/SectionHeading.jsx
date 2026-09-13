import { Reveal } from "./Reveal";

export const SectionHeading = ({ tag, title, highlight, description }) => {
  return (
    <Reveal className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
      {tag && <span className="section-tag mb-5">{tag}</span>}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
};
