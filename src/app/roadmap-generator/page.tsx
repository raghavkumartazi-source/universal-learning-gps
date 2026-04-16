"use client";

import { FormEvent, useState } from "react";
import { Bot } from "lucide-react";
import { careerOptions, type RoadmapResult } from "@/lib/roadmap";

type MentorMessage = { id: string; role: "user" | "assistant"; text: string };

export default function RoadmapGeneratorPage() {
  const [goal, setGoal] = useState("Software Engineer");
  const [skills, setSkills] = useState("HTML, CSS, JavaScript");
  const [weeklyHours, setWeeklyHours] = useState("10");
  const [roadmap, setRoadmap] = useState<RoadmapResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [mentorInput, setMentorInput] = useState("");
  const [mentorMessages, setMentorMessages] = useState<MentorMessage[]>([]);
  const generateUniqueMessageId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  const generate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, skills, weeklyHours: Number(weeklyHours) }),
      });
      const result = (await response.json()) as RoadmapResult;
      setRoadmap(result);
    } finally {
      setLoading(false);
    }
  };

  const askMentor = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = mentorInput.trim();
    if (!input) return;

    setMentorMessages((messages) => [...messages, { id: generateUniqueMessageId(), role: "user", text: input }]);
    setMentorInput("");

    const response = await fetch("/api/mentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input, goal }),
    });

    const data = (await response.json()) as { reply: string };
    setMentorMessages((messages) => [...messages, { id: generateUniqueMessageId(), role: "assistant", text: data.reply }]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Roadmap Generator</h1>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <section className="card">
          <h2 className="mb-4 text-xl font-semibold">Build Your AI Roadmap</h2>
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
              <input className="mt-1 w-full rounded-xl border border-white/15 bg-[#121226] p-3" value={skills} onChange={(event) => setSkills(event.target.value)} />
            </label>
            <label className="block text-sm">
              Weekly Learning Hours
              <input type="number" min={1} className="mt-1 w-full rounded-xl border border-white/15 bg-[#121226] p-3" value={weeklyHours} onChange={(event) => setWeeklyHours(event.target.value)} />
            </label>
            <button type="submit" className="btn-primary w-full">{loading ? "Generating..." : "Generate Roadmap"}</button>
          </form>

          {roadmap && (
            <div className="mt-8 space-y-5">
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
            <input value={mentorInput} onChange={(event) => setMentorInput(event.target.value)} placeholder="Ask the AI mentor..." className="w-full rounded-xl border border-white/15 bg-[#121226] p-3 text-sm" />
            <button type="submit" className="btn-primary px-4">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
