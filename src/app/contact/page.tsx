"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { TwitterXIcon, LinkedInIcon, GithubIcon } from "@/components/SocialIcons";

const contactInfo = [
  { icon: Mail, label: "Email", value: "support@ulg.ai", href: "mailto:support@ulg.ai" },
  { icon: Phone, label: "Phone", value: "+1 (800) 123-4567", href: "tel:+18001234567" },
  { icon: MapPin, label: "Address", value: "Bengaluru, Karnataka, India", href: "#" },
];

const social = [
  { icon: TwitterXIcon, label: "Twitter", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: GithubIcon, label: "GitHub", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-6">
            We Would Love to <span className="gradient-text">Hear From You</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our platform? Want to partner with us? Or just want to say hi? Drop us a message!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-[#ff7a00]/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff7a00]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[#ff7a00]" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-[#ff7a00] hover:border-[#ff7a00]/50 transition-colors"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <MessageSquare className="w-8 h-8 text-[#ff7a00] mb-3" />
                <h3 className="text-white font-semibold mb-2">Live Chat Support</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our support team is available Monday to Friday, 9am to 6pm IST.
                </p>
                <button className="btn-secondary px-4 py-2 text-sm w-full">
                  Start Live Chat
                </button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-primary px-6 py-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Rahul Kumar"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us more about your question or feedback..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary px-8 py-3 w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
