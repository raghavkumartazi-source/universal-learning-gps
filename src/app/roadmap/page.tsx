"use client";

import { useState } from "react";
import {
  Sparkles, ArrowRight, CheckCircle, BookOpen, Clock,
  Target, ChevronDown, ChevronUp, ExternalLink, Loader2
} from "lucide-react";

const careerGoals = [
  "Software Engineer",
  "Data Scientist",
  "AI/ML Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Cybersecurity Analyst",
  "Cloud Architect",
  "Electronics Engineer",
  "Blockchain Developer",
  "Mobile App Developer",
  "Data Analyst",
  "Entrepreneur",
];

const experienceLevels = [
  { value: "beginner", label: "Beginner", desc: "Little to no experience" },
  { value: "intermediate", label: "Intermediate", desc: "1-2 years of experience" },
  { value: "advanced", label: "Advanced", desc: "3+ years of experience" },
];

const timeframes = [
  { value: "3", label: "3 months", desc: "Intensive learning" },
  { value: "6", label: "6 months", desc: "Balanced approach" },
  { value: "12", label: "12 months", desc: "Comprehensive path" },
  { value: "18", label: "18 months", desc: "In-depth mastery" },
];

const sampleRoadmaps: Record<string, RoadmapPhase[]> = {
  "Software Engineer": [
    {
      phase: 1,
      title: "Programming Foundations",
      duration: "6-8 weeks",
      skills: ["Python or JavaScript basics", "Data structures", "Algorithms", "Version control (Git)"],
      resources: [
        { name: "CS50 by Harvard (Free)", platform: "edX", type: "Course", url: "#" },
        { name: "The Odin Project", platform: "Free", type: "Course", url: "#" },
        { name: "Automate the Boring Stuff with Python", platform: "Book", type: "Book", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 2,
      title: "Web Development Fundamentals",
      duration: "6-8 weeks",
      skills: ["HTML & CSS", "JavaScript ES6+", "React or Vue.js", "REST APIs"],
      resources: [
        { name: "Frontend Masters", platform: "Frontend Masters", type: "Course", url: "#" },
        { name: "React Official Docs", platform: "Free", type: "Documentation", url: "#" },
        { name: "Full Stack Open", platform: "University of Helsinki", type: "Course", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 3,
      title: "Backend Development",
      duration: "6-8 weeks",
      skills: ["Node.js / Python Flask/Django", "Databases (SQL & NoSQL)", "Authentication & Security", "Cloud basics (AWS/GCP)"],
      resources: [
        { name: "Node.js Design Patterns", platform: "Book", type: "Book", url: "#" },
        { name: "PostgreSQL for Beginners", platform: "Udemy", type: "Course", url: "#" },
        { name: "AWS Fundamentals", platform: "Coursera", type: "Course", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 4,
      title: "System Design & Best Practices",
      duration: "4-6 weeks",
      skills: ["System design principles", "Microservices", "Docker & Kubernetes", "CI/CD pipelines"],
      resources: [
        { name: "System Design Interview", platform: "Book", type: "Book", url: "#" },
        { name: "Docker Mastery", platform: "Udemy", type: "Course", url: "#" },
        { name: "Designing Data-Intensive Apps", platform: "Book", type: "Book", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 5,
      title: "Portfolio & Job Preparation",
      duration: "3-4 weeks",
      skills: ["Build 3-5 portfolio projects", "Open source contributions", "LeetCode practice", "Interview preparation"],
      resources: [
        { name: "Cracking the Coding Interview", platform: "Book", type: "Book", url: "#" },
        { name: "LeetCode Top 150", platform: "LeetCode", type: "Practice", url: "#" },
        { name: "GitHub Portfolio Guide", platform: "GitHub", type: "Guide", url: "#" },
      ],
      completed: false,
    },
  ],
  "Data Scientist": [
    {
      phase: 1,
      title: "Mathematics & Statistics Foundation",
      duration: "4-6 weeks",
      skills: ["Linear algebra", "Probability & statistics", "Calculus basics", "Python programming"],
      resources: [
        { name: "Mathematics for ML", platform: "Coursera", type: "Course", url: "#" },
        { name: "Statistics with Python", platform: "Coursera", type: "Specialization", url: "#" },
        { name: "3Blue1Brown Linear Algebra", platform: "YouTube", type: "Video Series", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 2,
      title: "Data Analysis & Visualization",
      duration: "4-6 weeks",
      skills: ["Pandas & NumPy", "Data cleaning", "Matplotlib & Seaborn", "SQL for data"],
      resources: [
        { name: "Data Analysis with Python", platform: "freeCodeCamp", type: "Certification", url: "#" },
        { name: "Kaggle Learn", platform: "Kaggle", type: "Course", url: "#" },
        { name: "Python for Data Analysis", platform: "Book", type: "Book", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 3,
      title: "Machine Learning",
      duration: "8-10 weeks",
      skills: ["Scikit-learn", "Supervised & unsupervised learning", "Model evaluation", "Feature engineering"],
      resources: [
        { name: "Machine Learning by Andrew Ng", platform: "Coursera", type: "Course", url: "#" },
        { name: "Hands-On ML with Scikit-Learn", platform: "Book", type: "Book", url: "#" },
        { name: "Fast.ai Practical ML", platform: "fast.ai", type: "Course", url: "#" },
      ],
      completed: false,
    },
    {
      phase: 4,
      title: "Deep Learning & AI",
      duration: "6-8 weeks",
      skills: ["TensorFlow or PyTorch", "Neural networks", "NLP basics", "Computer vision"],
      resources: [
        { name: "Deep Learning Specialization", platform: "Coursera", type: "Specialization", url: "#" },
        { name: "PyTorch Tutorial", platform: "YouTube", type: "Video Series", url: "#" },
        { name: "Deep Learning Book", platform: "Free Online", type: "Book", url: "#" },
      ],
      completed: false,
    },
  ],
};

interface Resource {
  name: string;
  platform: string;
  type: string;
  url: string;
}

interface RoadmapPhase {
  phase: number;
  title: string;
  duration: string;
  skills: string[];
  resources: Resource[];
  completed: boolean;
}

export default function RoadmapPage() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapPhase[] | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const handleGenerate = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    const template =
      sampleRoadmaps[goal] ||
      sampleRoadmaps["Software Engineer"];
    setRoadmap(template);
    setLoading(false);
    setStep(3);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">
              AI Roadmap Generator
            </span>
            <h1 className="text-5xl font-bold text-white mt-2 mb-4">
              Generate Your{" "}
              <span className="gradient-text">Personalized Roadmap</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Answer a few questions and let our AI create your complete learning path in seconds.
            </p>
          </div>

          {/* Progress Steps */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step >= s
                        ? "bg-[#ff7a00] text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                  </div>
                  <span
                    className={`text-sm ${step >= s ? "text-white" : "text-gray-500"}`}
                  >
                    {s === 1 ? "Choose Goal" : "Customize"}
                  </span>
                  {s < 2 && (
                    <div className="w-12 h-0.5 bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Career Goal */}
          {step === 1 && (
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                What is your career goal?
              </h2>
              <p className="text-gray-400 mb-6">
                Select the career path you want to pursue.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {careerGoals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`p-3 rounded-xl text-sm font-medium text-center transition-all ${
                      goal === g
                        ? "bg-[#ff7a00] text-white shadow-lg shadow-[#ff7a00]/30"
                        : "bg-white/5 border border-white/10 text-gray-300 hover:border-[#ff7a00]/50 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <button
                onClick={() => goal && setStep(2)}
                disabled={!goal}
                className="btn-primary px-8 py-3 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Customize */}
          {step === 2 && (
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Customize your roadmap
              </h2>

              <div className="mb-8">
                <h3 className="text-white font-semibold mb-3">
                  Your experience level
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experienceLevels.map((e) => (
                    <button
                      key={e.value}
                      onClick={() => setExperience(e.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        experience === e.value
                          ? "bg-[#ff7a00] text-white shadow-lg shadow-[#ff7a00]/30"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:border-[#ff7a00]/50"
                      }`}
                    >
                      <div className="font-semibold">{e.label}</div>
                      <div className="text-sm opacity-75 mt-1">{e.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-semibold mb-3">
                  Target timeframe
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeframes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setTimeframe(t.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        timeframe === t.value
                          ? "bg-[#ff7a00] text-white shadow-lg shadow-[#ff7a00]/30"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:border-[#ff7a00]/50"
                      }`}
                    >
                      <div className="font-semibold">{t.label}</div>
                      <div className="text-xs opacity-75 mt-1">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="btn-secondary px-6 py-3"
                >
                  Back
                </button>
                <button
                  onClick={handleGenerate}
                  disabled={!experience || !timeframe || loading}
                  className="btn-primary px-8 py-3 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating your roadmap...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate My Roadmap
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Roadmap Result */}
          {step === 3 && roadmap && (
            <div>
              <div className="glass-card rounded-2xl p-6 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Your Roadmap: {goal}
                    </h2>
                    <p className="text-gray-400 mt-1">
                      {experience} level • {timeframe} months •{" "}
                      {roadmap.length} phases
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { setStep(1); setRoadmap(null); setGoal(""); setExperience(""); setTimeframe(""); }}
                      className="btn-secondary px-4 py-2 text-sm"
                    >
                      Start Over
                    </button>
                    <a href="/signup" className="btn-primary px-4 py-2 text-sm flex items-center gap-2">
                      Save Roadmap <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {roadmap.map((phase, idx) => (
                  <div key={phase.phase} className="glass-card rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {phase.phase}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{phase.title}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {phase.duration}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                              <Target className="w-3 h-3" /> {phase.skills.length} skills
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                              <BookOpen className="w-3 h-3" /> {phase.resources.length} resources
                            </span>
                          </div>
                        </div>
                      </div>
                      {expandedPhase === idx ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>

                    {expandedPhase === idx && (
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4 text-[#ff7a00]" />
                              Skills to Learn
                            </h4>
                            <ul className="space-y-2">
                              {phase.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-[#ff7a00]" />
                              Recommended Resources
                            </h4>
                            <ul className="space-y-2">
                              {phase.resources.map((r) => (
                                <li key={r.name} className="flex items-start gap-2">
                                  <a
                                    href={r.url}
                                    className="group flex items-start gap-2 text-sm text-gray-300 hover:text-[#ff7a00] transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50 group-hover:opacity-100" />
                                    <span>
                                      <span className="font-medium">{r.name}</span>
                                      <span className="text-gray-500 ml-1">({r.platform})</span>
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 glass-card rounded-2xl p-8 text-center">
                <Sparkles className="w-12 h-12 text-[#ff7a00] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">
                  Want a more detailed roadmap?
                </h3>
                <p className="text-gray-400 mb-6">
                  Sign up to save this roadmap, track your progress, and get AI-powered guidance throughout your journey.
                </p>
                <a href="/signup" className="btn-primary px-8 py-3 inline-flex items-center gap-2">
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
