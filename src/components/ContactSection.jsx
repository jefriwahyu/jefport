import { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, Copy, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Magnetic } from "./Magnetic";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1400);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jefriwahyudiana@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "jefriwahyudiana@gmail.com",
      href: "mailto:jefriwahyudiana@gmail.com",
      action: true,
    },
    { icon: Phone, label: "Phone / WA", value: "+62 822-3114-4869", href: "tel:+6282231144869" },
    { icon: MapPin, label: "Location", value: "Bandung, West Java, Indonesia" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40 border-y border-border/50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          tag="Let's Connect"
          title="Get In"
          highlight="Touch"
          description="Have a project in mind? Let's turn your idea into something amazing together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info */}
          <Reveal variant="clip" className="lg:col-span-2">
            <div className="glass rounded-[1.75rem] p-6 md:p-8 h-full flex flex-col">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3 text-left">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Contact Info
              </h3>

              <div className="space-y-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-background/60 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/10 border border-primary/20 shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold hover:text-primary transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold">{item.value}</div>
                      )}
                    </div>
                    {item.action && (
                      <button
                        onClick={copyEmail}
                        aria-label="Copy email"
                        className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all shrink-0"
                      >
                        {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="text-sm font-bold mb-4 text-center">Follow Me</div>
                <div className="flex justify-center gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/jefriwp", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/jefriwahyuu/", label: "Instagram" },
                    { icon: Github, href: "https://github.com/jefriwahyu", label: "GitHub" },
                    { icon: Mail, href: "mailto:jefriwahyudiana@gmail.com", label: "Email" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                {copied && (
                  <p className="text-center text-xs text-emerald-500 font-semibold mt-3 animate-fade-in">
                    Email copied to clipboard!
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} variant="clip" className="lg:col-span-3">
            <div className="glass rounded-[1.75rem] p-6 md:p-8 h-full relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-pink-500 to-amber-400" />
              <h3 className="font-display text-xl font-bold mb-6 text-left">Send a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 rounded-2xl text-sm animate-fade-in">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Message sent! I'll get back to you soon.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/60 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-2xl border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60 text-sm"
                    placeholder="Tell me about your project, timeline and goals..."
                  />
                </div>

                <Magnetic className="w-full" strength={0.12}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cosmic-button w-full group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span className="absolute inset-y-0 left-0 w-1/3 bg-white/20 blur-md -skew-x-12 animate-shine pointer-events-none" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={17} className={isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"} />
                  </button>
                </Magnetic>
                <p className="text-center text-xs text-muted-foreground">
                  Usually replies within 24 hours
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
