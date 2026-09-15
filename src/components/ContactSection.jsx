import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HudPanel } from "./HudPanel";
import { useLang, content } from "@/lib/i18n";

const channels = [
  { label: "email", value: "jefriwahyudiana@gmail.com", href: "mailto:jefriwahyudiana@gmail.com" },
  { label: "linkedin", value: "linkedin.com/in/jefriwp", href: "https://www.linkedin.com/in/jefriwp" },
  { label: "github", value: "github.com/jefriwahyu", href: "https://github.com/jefriwahyu" },
  { label: "phone", value: "+62 822-3114-4869", href: "tel:+6282231144869" },
  { label: "location", value: "Bandung, ID", href: null },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const { lang } = useLang();
  const t = content[lang].contact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // No EmailJS config (local dev / env missing): fall back to mailto
    // so the message is never silently dropped.
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
      window.location.href = `mailto:jefriwahyudiana@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
      setTimeout(() => setStatus(null), 6000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-sm border border-border bg-background font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="py-20 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          command="./contact.sh"
          description={t.cmdDesc}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <HudPanel data-cable-item>
            <div className="term-panel px-5 py-5 h-full">
              <p className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">$</span> cat contact.txt
              </p>
              <ul className="space-y-3 font-mono text-sm">
                {channels.map((c) => (
                  <li key={c.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                    <span className="text-primary shrink-0 w-24">[{c.label}]</span>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground hover:text-primary break-all transition-colors no-underline hover:no-underline">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-foreground">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </HudPanel>

          <HudPanel data-cable-item id="contact-form">
            <form onSubmit={handleSubmit} className="term-panel px-5 py-5 h-full">
              <p className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">$</span> send --message
              </p>
              {status === 'success' && (
                <p className="font-mono text-[13px] text-primary border border-primary/40 bg-primary/5 rounded-sm px-3 py-2 mb-4">
                  {t.success}
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-[13px] text-red-400 border border-red-400/40 bg-red-400/5 rounded-sm px-3 py-2 mb-4">
                  {t.error}
                </p>
              )}
              <div className="space-y-3">
                <input
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.phName}
                  className={inputClass}
                  aria-label="Nama"
                />
                <input
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.phEmail}
                  className={inputClass}
                  aria-label="Email"
                />
                <textarea
                  required rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.phMsg}
                  className={`${inputClass} resize-none`}
                  aria-label="Pesan"
                />
                <button type="submit" disabled={isSending} className="term-btn w-full disabled:opacity-60">
                  {isSending ? `[ ${t.btnSending} ]` : `[ ${t.btnSend} ]`}
                  <Send size={15} />
                </button>
              </div>
            </form>
          </HudPanel>
        </div>
      </div>
    </section>
  );
};
