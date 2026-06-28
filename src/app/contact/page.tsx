"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={submit} className="card max-w-2xl space-y-4">
        <input required placeholder="Your name" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <input type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <textarea required placeholder="How can we help?" rows={5} className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <button type="submit" className="btn-primary">Send Message</button>
        {submitted && <p className="text-sm text-[#FFB273]">Thanks! We will get back to you soon.</p>}
      </form>
    </div>
  );
}
