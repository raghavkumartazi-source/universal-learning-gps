"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3, BookOpen, Award, Clock, Target, TrendingUp,
  CheckCircle, Play, Lock, Bot, Sparkles, ArrowRight, Bell, Settings
} from "lucide-react";

const skills = [
  { name: "Python", level: 75 },
  { name: "Machine Learning", level: 45 },
  { name: "Data Analysis", level: 60 },
  { name: "SQL", level: 80 },
  { name: "Statistics", level: 55 },
  { name: "Deep Learning", level: 20 },
];

const recentActivity = [
  { action: "Completed", item: "Python for Data Science - Module 3", time: "2 hours ago", icon: CheckCircle, color: "text-green-400" },
  { action: "Started", item: "Statistics with Python", time: "Yesterday", icon: Play, color: "text-[#ff7a00]" },
  { action: "Earned Badge", item: "Python Fundamentals", time: "3 days ago", icon: Award, color: "text-yellow-400" },
  { action: "AI Mentor Chat", item: "Career advice session", time: "5 days ago", icon: Bot, color: "text-blue-400" },
];

const roadmapPhases = [
  { phase: 1, title: "Python Foundations", progress: 100, status: "completed" },
  { phase: 2, title: "Data Analysis", progress: 65, status: "in-progress" },
  { phase: 3, title: "Machine Learning", progress: 0, status: "upcoming" },
  { phase: 4, title: "Deep Learning", progress: 0, status: "locked" },
  { phase: 5, title: "Portfolio Projects", progress: 0, status: "locked" },
];

const recommendations = [
  {
    title: "Statistics for Machine Learning",
    platform: "Coursera",
    duration: "4 weeks",
    level: "Intermediate",
    free: false,
  },
  {
    title: "Pandas & NumPy Masterclass",
    platform: "Udemy",
    duration: "12 hours",
    level: "Beginner",
    free: false,
  },
  {
    title: "Practical Machine Learning",
    platform: "fast.ai",
    duration: "7 lessons",
    level: "Intermediate",
    free: true,
  },
];

const chatMessages = [
  { role: "assistant", content: "Hi! I am your AI Career Mentor. How can I help you today?" },
  { role: "user", content: "I am struggling with understanding neural networks. Where should I start?" },
  { role: "assistant", content: "Great question! Since you have completed Python foundations and are working on data analysis, I recommend starting with the 3Blue1Brown Neural Networks series on YouTube. It provides excellent visual intuitions before you dive into code. After that, try the fast.ai Practical Deep Learning course." },
];

export default function DashboardPage() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setMessages([
      ...messages,
      { role: "user", content: chatInput },
      { role: "assistant", content: "That is a great question! Based on your current progress in Data Science, I recommend focusing on strengthening your statistics foundation first, as it will make machine learning concepts much clearer. Would you like me to create a focused 2-week study plan for statistics?" },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back, <span className="gradient-text">Rahul</span> 👋
            </h1>
            <p className="text-gray-400 mt-1">
              Keep going! You are 65% through your Data Science roadmap.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ff7a00] rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center text-white font-bold">
              RV
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Courses Completed", value: "12", icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10" },
            { label: "Hours Learned", value: "48h", icon: Clock, color: "text-blue-400", bg: "bg-blue-400/10" },
            { label: "Skills Acquired", value: "18", icon: Target, color: "text-[#ff7a00]", bg: "bg-[#ff7a00]/10" },
            { label: "Badges Earned", value: "5", icon: Award, color: "text-yellow-400", bg: "bg-yellow-400/10" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-4 sm:p-6">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Roadmap Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Roadmap */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-lg">
                  Data Scientist Roadmap
                </h2>
                <Link href="/roadmap" className="text-[#ff7a00] text-sm hover:underline">
                  View Full Roadmap
                </Link>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Overall Progress</span>
                  <span className="text-white font-semibold">35%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff7a00] to-[#ff9a3c] rounded-full transition-all"
                    style={{ width: "35%" }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                {roadmapPhases.map((phase) => (
                  <div key={phase.phase} className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        phase.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : phase.status === "in-progress"
                          ? "bg-[#ff7a00]/20 text-[#ff7a00]"
                          : phase.status === "upcoming"
                          ? "bg-white/10 text-gray-400"
                          : "bg-white/5 text-gray-600"
                      }`}
                    >
                      {phase.status === "completed" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : phase.status === "locked" ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        phase.phase
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className={`font-medium ${phase.status === "locked" ? "text-gray-600" : "text-white"}`}>
                          {phase.title}
                        </span>
                        <span className="text-gray-400">{phase.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            phase.status === "completed"
                              ? "bg-green-500"
                              : "bg-gradient-to-r from-[#ff7a00] to-[#ff9a3c]"
                          }`}
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Progress */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-6">
                Skill Progress
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-white font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ff7a00] to-[#ff9a3c] rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-6">
                Recommended Next Steps
              </h2>
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <div key={rec.title} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm truncate">
                        {rec.title}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        {rec.platform} • {rec.duration} • {rec.level}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {rec.free ? (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Free</span>
                      ) : (
                        <span className="px-2 py-0.5 bg-[#ff7a00]/20 text-[#ff7a00] text-xs rounded-full">Premium</span>
                      )}
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#ff7a00] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: AI Mentor & Activity */}
          <div className="space-y-6">
            {/* AI Mentor Chat */}
            <div className="glass-card rounded-2xl p-6 flex flex-col h-96">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold">AI Career Mentor</h2>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                        msg.role === "user"
                          ? "bg-[#ff7a00] text-white"
                          : "bg-white/10 text-gray-200"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask your AI mentor..."
                  className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-white text-sm placeholder-gray-500 outline-none border border-white/10 focus:border-[#ff7a00]/50"
                />
                <button
                  onClick={handleSend}
                  className="btn-primary px-3 py-2 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <div>
                      <div className="text-gray-300 text-sm">
                        <span className="font-medium text-white">{item.action}:</span> {item.item}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-[#ff7a00]/10 to-transparent border-[#ff7a00]/20">
              <TrendingUp className="w-8 h-8 text-[#ff7a00] mb-3" />
              <h3 className="text-white font-bold mb-2">Upgrade to Pro</h3>
              <p className="text-gray-400 text-sm mb-4">
                Unlock advanced AI insights, downloadable reports, and premium resources.
              </p>
              <Link href="/pricing" className="btn-primary px-4 py-2 text-sm block text-center">
                View Pro Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
