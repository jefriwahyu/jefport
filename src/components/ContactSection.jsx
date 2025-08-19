import { useState } from 'react';
import { send } from 'emailjs-com';
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, MessageCircle, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ganti dengan data EmailJS Anda
    const serviceID = 'service_eu89lvn';
    const templateID = 'template_soezsyh';
    const userID = 'NIWX92awmCiDegsyu';

    send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setSubmitStatus('error'))
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section with Enhanced Typography */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to bring your ideas to life? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information - Enhanced Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card/60 backdrop-blur-xl border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:translate-y-[-4px]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-background/50 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full animate-ping group-hover:animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:jefrywahyu63@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      jefrywahyu63@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-background/50 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full animate-ping group-hover:animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+6282231144869"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      +62 822-3114-4869
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-background/50 border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full animate-ping group-hover:animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <span className="text-muted-foreground text-sm">
                      Kediri, East Java, Indonesia
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media - Enhanced */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="font-semibold text-foreground mb-4 text-center">Connect With Me</h4>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/jefri-wahyudiana-putra-96b8a8194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-primary/10 hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/jefriwahyuu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl bg-primary/10 hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Enhanced */}
          <div className="lg:col-span-3">
            <div className="bg-card/60 backdrop-blur-xl border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>

              {/* Status Messages - Enhanced */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-xl text-sm backdrop-blur-sm animate-in fade-in slide-in-from-top duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Message sent successfully!
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 rounded-xl text-sm backdrop-blur-sm animate-in fade-in slide-in-from-top duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Failed to send message. Please try again.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors duration-300"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 placeholder:text-muted-foreground/60"
                      placeholder="Enter your full name..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors duration-300"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 placeholder:text-muted-foreground/60"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-3 text-foreground group-focus-within:text-primary transition-colors duration-300"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 resize-none placeholder:text-muted-foreground/60"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button - Enhanced */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden",
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <Send size={18} className={cn(
                    "relative z-10 transition-transform duration-300",
                    isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"
                  )} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};