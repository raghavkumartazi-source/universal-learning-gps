"use client";

import { Download, Trophy } from "lucide-react";

const modules = [
  { name: "Programming Fundamentals", progress: 100 },
  { name: "Data Structures & Algorithms", progress: 70 },
  { name: "System Design", progress: 35 },
];
const REVOKE_URL_DELAY_MS = 3000;

export default function DashboardPage() {
  const completed = modules.filter((module) => module.progress === 100).length;

  const downloadReport = () => {
    const report = `Universal Learning GPS Report\nCompleted modules: ${completed}/${modules.length}`;
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = "learning-report.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(objectUrl), REVOKE_URL_DELAY_MS);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Personalized Dashboard</h1>
      <section className="grid gap-5 md:grid-cols-3">
        <article className="card md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">Progress Tracking</h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{module.name}</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-[#FF7A00]" style={{ width: `${module.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="card">
          <h2 className="mb-4 text-xl font-semibold">Achievements</h2>
          <div className="space-y-3 text-sm text-white/85">
            <p className="flex items-center gap-2"><Trophy className="h-4 w-4 text-[#FF7A00]" /> Consistency Badge</p>
            <p className="flex items-center gap-2"><Trophy className="h-4 w-4 text-[#FF7A00]" /> Project Builder Badge</p>
          </div>
          <button type="button" onClick={downloadReport} className="btn-primary mt-6 w-full">
            <Download className="mr-2 h-4 w-4" /> Download Report
          </button>
        </article>
      </section>
    </div>
  );
}
