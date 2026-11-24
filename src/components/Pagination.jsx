import { cn } from "@/lib/utils";

/**
 * Terminal-style pager â€” [ < ] 1 2 [ > ] â€” shared by the sections that
 * paginate (Projects, Skills). Renders nothing when there is a single page.
 * `page` is zero-based.
 */
export const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-8 font-mono text-[13px]">
      <button
        onClick={() => onChange(Math.max(0, page - 1))}
        disabled={page === 0}
        aria-label="Halaman sebelumnya"
        className="px-3 py-1.5 rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/60 disabled:opacity-40 disabled:pointer-events-none"
      >
        [ &lt; ]
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Halaman ${i + 1}`}
          className={cn(
            "px-3 py-1.5 rounded-sm border transition-colors",
            page === i
              ? "bg-primary text-primary-foreground border-primary font-bold"
              : "border-border text-muted-foreground hover:text-primary hover:border-primary/60"
          )}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        aria-label="Halaman berikutnya"
        className="px-3 py-1.5 rounded-sm border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary/60 disabled:opacity-40 disabled:pointer-events-none"
      >
        [ &gt; ]
      </button>
    </div>
  );
};
