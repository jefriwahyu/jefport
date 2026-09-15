export const SectionHeading = ({ command, description }) => {
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      <p className="font-mono text-sm md:text-base text-muted-foreground">
        <span className="text-primary text-glow">$</span> <span data-cmd-text>{command}</span>
        <span className="inline-block w-[9px] h-[18px] ml-1.5 -mb-0.5 bg-primary animate-blink" aria-hidden="true" />
      </p>
      {description && (
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-3">
          <span className="text-primary/60 font-mono"># </span>
          {description}
        </p>
      )}
    </div>
  );
};
