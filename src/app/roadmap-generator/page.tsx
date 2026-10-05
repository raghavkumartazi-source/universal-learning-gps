"use client";

import { FormEvent, useState } from "react";
import { Bot } from "lucide-react";
import { getBrowserClient } from '@/lib/supabase';
import { savePlan } from '@/lib/learning-store';
import { careerOptions, type RoadmapResult } from "@/lib/roadmap";

type MentorMessage = { id: string; role: "user" | "assistant"; text: string };

export default function RoadmapGeneratorPage() {
  const [goal, setGoal] = useState("Software Engineer");
  const [skills, setSkills] = useState("HTML, CSS, JavaScript");
  const [weeklyHours, setWeeklyHours] = useState("10");
  const [roadmap, setRoadmap] = useState<RoadmapResult | null>(null);
  const [notice, setNotice] = useState('');
  const [mentorBusy, setMentorBusy] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mentorInput, setMentorInput] = useState("");
  const [mentorMessages, setMentorMessages] = useState<MentorMessage[]>([]);
  const createMessageId = () => crypto.randomUUID();

  const generate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setNotice("");

    try {
      const response = await fetch("/api/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, skills, weeklyHours: Number(weeklyHours) }),
      });
      const result = (await response.json()) as RoadmapResult;
      if (!response.ok) throw new Error((result as unknown as { error?: string }).error ?? "Unable to generate roadmap.");
      setRoadmap(result);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Unable to generate roadmap.");
    } finally {
      setLoading(false);
    }
  };

  const askMentor = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = mentorInput.trim();
    if (!input || mentorBusy) return;

    setMentorMessages((messages) => [...messages, { id: createMessageId(), role: "user", text: input }]);
    setMentorInput("");

    setMentorBusy(true);
    try {
      const client = getBrowserClient();
      const session = client ? (await client.auth.getSession()).data.session : null;
      const response = await fetch('/api/mentor', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}) }, body: JSON.stringify({ question: input, goal }) });
      const data = await response.json() as { reply?: string; mode?: string; error?: string };
      if (!response.ok || !data.reply) throw new Error(data.error ?? 'Mentor could not reply.');
      setMentorMessages(messages => [...messages, { id: createMessageId(), role: 'assistant', text: `${data.mode === 'guided' ? 'Guided response (AI is not configured): ' : ''}${data.reply}` }]);
    } catch (error) { setNotice(error instanceof Error ? error.message : 'Mentor could not reply.'); }
    finally { setMentorBusy(false); }

  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Roadmap Generator</h1>
      {notice && <p role="status">{notice}</p>}
      <p className="text-white/70">Roadmaps use curated career tracks. AI mentor answers are available when the service is configured.</p>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="card">
          <h2 className="mb-4 text-xl font-semibold">Build your learning roadmap</h2>
          <form className="space-y-4" onSubmit={generate}>
            <label className="block text-sm">
              Career Goal
              <select className="mt-1 w-full rounded-xl border border-white/15 bg-[#121226] p-3" value={goal} onChange={(event) => setGoal(event.target.value)}>
                {careerOptions.map((career) => (
                  <option key={career} value={career}>
                    {career}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              Current Skills (comma-separated)
              <input maxLength={2000} className="mt-1 w-full rounded-xl border border-white/15 bg-[#121226] p-3" value={skills} onChange={(event) => setSkills(event.target.value)} />
            </label>
            <label className="block text-sm">
              Weekly Learning Hours
              <input type="number" min={1} max={80} className="mt-1 w-full rounded-xl border border-white/15 bg-[#121226] p-3" value={weeklyHours} onChange={(event) => setWeeklyHours(event.target.value)} />
            </label>
            <button disabled={loading} type="submit" className="btn-primary w-full">{loading ? "Generating..." : "Generate Roadmap"}</button>
          </form>

          {roadmap && (
            <div className="mt-8 space-y-5">
              <button className="btn-secondary" disabled={saving} onClick={async () => {
                setSaving(true);
                try { await savePlan(roadmap); setNotice('Plan saved. Open your dashboard to track progress.'); }
                catch (error) { setNotice(error instanceof Error ? error.message : 'Plan could not be saved.'); }
                finally { setSaving(false); }
              }}>{saving ? 'Saving…' : 'Save to my dashboard'}</button>
              <h3 className="text-lg font-semibold">Estimated Duration: {roadmap.estimatedDuration}</h3>
              {roadmap.roadmap.map((step) => (
                <article key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold text-[#FFB273]">{step.phase} • {step.timeline}</p>
                  <h4 className="mt-1 font-semibold">{step.title}</h4>
                  <p className="text-sm text-white/75">{step.outcome}</p>
                </article>
              ))}
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold">Skill Gap Analysis</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
                    {roadmap.skillGaps.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold">Curated Resources</h4>
                  <ul className="space-y-2 text-sm">
                    {roadmap.curatedResources.map((resource) => (
                      <li key={resource.title}>
                        <a href={resource.url} target="_blank" rel="noreferrer" className="text-[#FFB273] hover:underline">
                          {resource.title}
                        </a>{" "}
                        • {resource.platform}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          )}
        </section>

        <section className="card flex flex-col">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Bot className="h-5 w-5 text-[#FF7A00]" /> AI Career Mentor</h2>
          <div className="mb-4 h-72 space-y-3 overflow-y-auto rounded-xl border border-white/10 bg-[#101024] p-3">
            {mentorMessages.length === 0 ? (
              <p className="text-sm text-white/60">Ask about study plans, interviews, or projects.</p>
            ) : (
              mentorMessages.map((message) => (
                <p key={message.id} className={`max-w-[90%] rounded-xl p-3 text-sm ${message.role === "user" ? "ml-auto bg-[#FF7A00] text-[#1A1A2E]" : "bg-white/10 text-white"}`}>
                  {message.text}
                </p>
              ))
            )}
          </div>
          <form onSubmit={askMentor} className="mt-auto flex gap-2">
            <input aria-label="Question for the learning mentor" maxLength={2000} value={mentorInput} onChange={(event) => setMentorInput(event.target.value)} placeholder="Ask the AI mentor..." className="w-full rounded-xl border border-white/15 bg-[#121226] p-3 text-sm" />
            <button disabled={mentorBusy} type="submit" className="btn-primary px-4">{mentorBusy ? "Thinking…" : "Send"}</button>
          </form>
        </section>
      </div>
    </div>
  );
}
