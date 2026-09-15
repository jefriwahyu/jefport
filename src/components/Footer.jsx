export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <p>
          <span className="text-primary">jefri@jefport</span>:~$ ./build --done
        </p>
        <p>© {year} Jefri Wahyudiana Putra :: MIT-style open code</p>
      </div>
    </footer>
  );
};
