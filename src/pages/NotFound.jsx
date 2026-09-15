import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="term-panel max-w-md w-full px-6 py-8 font-mono">
                <p className="text-sm text-muted-foreground">
                    <span className="text-primary">$</span> cd requested-route
                </p>
                <h1 className="text-4xl font-extrabold mt-3">
                    404 <span className="text-primary text-glow">_</span>
                </h1>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    <span className="text-primary/60"># </span>
                    command not found — halaman yang kamu cari tidak ada.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link to="/" className="term-btn">
                        [ cd ~/home ]
                    </Link>
                    <a href="/#contact" className="term-btn-ghost">
                        [ report_issue ]
                    </a>
                </div>
            </div>
        </div>
    );
}