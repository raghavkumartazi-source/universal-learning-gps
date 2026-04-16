import Link from "next/link";
import { ArrowRight, Bot, Compass, Route } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1A2E] via-[#202042] to-[#111122] p-8 md:grid-cols-2 md:p-12">
        <div className="space-y-6">
          <p className="inline-block rounded-full border border-[#FF7A00]/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#FFB273]">
            Navigate Your Future with AI
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Your Personalized Roadmap to Success.</h1>
          <p className="text-white/80">
            Universal Learning GPS helps students and professionals discover what to learn, when to learn it, and how to reach career goals through AI-powered guidance.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup" className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/roadmap-generator" className="btn-secondary">
              Generate Your Roadmap
            </Link>
          </div>
        </div>
        <div className="card space-y-4">
          <h2 className="text-xl font-semibold">AI Snapshot</h2>
          <p className="text-white/75">Goal: Data Scientist • Weekly Capacity: 10h</p>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-2/3 rounded-full bg-[#FF7A00]" />
          </div>
          <p className="text-sm text-white/70">66% toward your first milestone: Build an end-to-end analytics project.</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { icon: Compass, title: "AI-Powered Learning Roadmaps", text: "Get personalized step-by-step plans with realistic timelines." },
          { icon: Route, title: "Skill Gap Analysis", text: "Identify missing skills and get focused recommendations." },
          { icon: Bot, title: "AI Career Mentor", text: "Ask career, interview, and study questions anytime." },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="card transition hover:-translate-y-1">
            <Icon className="mb-4 h-6 w-6 text-[#FF7A00]" />
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-white/75">{text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
