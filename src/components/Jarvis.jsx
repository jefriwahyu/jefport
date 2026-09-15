import { useEffect, useRef, useState } from "react";
import { X, Send, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { askJarvis } from "@/lib/jarvis";
import { HudPanel } from "./HudPanel";

export const Jarvis = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "jarvis",
      text: "Sistem aktif. Tanyakan apa saja tentang CV atau project saya.",
    },
  ]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, typing, open]);

  const send = async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setInput("");
    setMessages((m) => [...m, { from: "user", text }]);
    setTyping(true);
    const { text: reply } = await askJarvis(text);
    setTyping(false);
    setMessages((m) => [...m, { from: "jarvis", text: reply }]);
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup Jarvis" : "Buka Jarvis"}
        className={cn(
          "fixed bottom-5 right-5 z-[90] font-mono text-sm font-bold px-4 py-2.5 rounded-sm border transition-colors",
          open
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-card/95 text-primary border-primary/60 hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]"
        )}
      >
        <span className="inline-flex items-center gap-2">
          {!open && <span className="w-2 h-2 rounded-full bg-primary animate-blink" aria-hidden="true" />}
          [ JARVIS ]
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <HudPanel className="fixed bottom-[76px] right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-sm">
          <div className="term-panel overflow-hidden flex flex-col max-h-[60vh] h-[480px]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/60">
              <span className="font-mono text-xs font-bold text-primary inline-flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                jarvis://assistant — online
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup chat"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 font-mono text-[13px] leading-relaxed">
              {messages.map((m, i) => (
                <div key={i} className={cn("whitespace-pre-wrap", m.from === "user" ? "text-right" : "text-left")}>
                  <span
                    className={cn(
                      "inline-block px-3 py-2 rounded-sm max-w-[90%] text-left",
                      m.from === "user"
                        ? "bg-primary/15 text-foreground border border-primary/30"
                        : "bg-secondary text-muted-foreground border border-border"
                    )}
                  >
                    {m.from === "jarvis" && <span className="text-primary font-bold">&gt; </span>}
                    {m.text}
                  </span>
                </div>
              ))}
              {typing && (
                <div className="text-left">
                  <span className="inline-block px-3 py-2 rounded-sm bg-secondary border border-border text-primary font-bold">
                    ▊ typing
                    <span className="animate-blink">_</span>
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 px-3 py-3 border-t border-border bg-secondary/40"
            >
              <span className="font-mono text-primary font-bold text-sm">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="tanya soal CV / project..."
                className="flex-1 bg-transparent font-mono text-[13px] placeholder:text-muted-foreground/60 focus:outline-none"
                maxLength={300}
              />
              <button
                type="submit"
                aria-label="Kirim"
                className="p-2 text-primary hover:bg-primary/10 rounded-sm transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </HudPanel>
      )}
    </>
  );
};
