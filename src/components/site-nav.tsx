"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Features", "/features"],
  ["How It Works", "/how-it-works"],
  ["Roadmap", "/roadmap-generator"],
  ["Dashboard", "/dashboard"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1A1A2E]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <Sparkles className="h-5 w-5 text-[#FF7A00]" />
          Universal Learning GPS
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-5 text-sm text-white/90 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#FF7A00]">
              {label}
            </Link>
          ))}
          <Link href="/login" className="rounded-full border border-white/20 px-4 py-2 hover:border-[#FF7A00]">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-[#FF7A00] px-4 py-2 font-semibold text-[#1A1A2E] hover:opacity-90">
            Get Started
          </Link>
        </div>
      </nav>

      {open && (
        <div className="space-y-3 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="block text-white/90" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/login" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/signup" className="rounded-full bg-[#FF7A00] px-4 py-2 text-sm font-semibold text-[#1A1A2E]" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
