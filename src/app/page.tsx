"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Target,
  Map,
  BookOpen,
  BarChart3,
  Award,
  Bot,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Career Paths" },
  { value: "95%", label: "Success Rate" },
  { value: "4.9★", label: "User Rating" },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Roadmaps",
    description:
      "Generate personalized step-by-step learning paths based on your unique career goals and current skill level.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identify exactly which skills you are missing and get targeted recommendations to bridge those gaps.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Career Mentor",
    description:
      "Chat with your personal AI mentor for career advice, study plans, interview tips and guidance.",
    color: "from-[#ff7a00] to-yellow-500",
  },
  {
    icon: BookOpen,
    title: "Curated Resources",
    description:
      "Access courses from Coursera, edX, Udemy, YouTube and more, all organized in your learning path.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Visual dashboards, progress bars, and achievement badges to keep you motivated and on track.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Earn verifiable certificates upon completing learning milestones and share them with employers.",
    color: "from-indigo-500 to-purple-500",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    content:
      "Universal Learning GPS completely transformed my career. The AI roadmap was so accurate it identified exactly what I needed to learn to land my dream job.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist at Microsoft",
    content:
      "I tried many platforms but nothing compares to the personalization here. The AI mentor guided me through every step of my machine learning journey.",
    rating: 5,
    avatar: "RV",
  },
  {
    name: "Aisha Khan",
    role: "Product Manager at Flipkart",
    content:
      "The skill gap analysis saved me months of wasted time. I knew exactly where to focus and the curated resources were excellent.",
    rating: 5,
    avatar: "AK",
  },
];

const careerPaths = [
  "Software Engineer",
  "Data Scientist",
  "AI/ML Engineer",
  "Product Manager",
  "UX Designer",
  "DevOps Engineer",
  "Cybersecurity Analyst",
  "Electronics Engineer",
  "Entrepreneur",
  "Full Stack Developer",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff7a00]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ff7a00]/10 border border-[#ff7a00]/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#ff7a00]" />
            <span className="text-[#ff7a00] text-sm font-medium">
              AI-Powered Learning Platform
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Your Personalized
            <br />
            <span className="gradient-text">Roadmap to Success</span>
          </h1>

          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Navigate Your Future with AI. Discover what to learn, when to learn
            it, and how to achieve your career aspirations with intelligent,
            personalized guidance.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/signup"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2 animate-pulse-glow"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/roadmap"
              className="btn-secondary px-8 py-4 text-lg flex items-center gap-2"
            >
              <Map className="w-5 h-5" />
              Generate Your Roadmap
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {careerPaths.map((path) => (
              <span
                key={path}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#ff7a00]/50 hover:text-[#ff7a00] transition-colors cursor-pointer"
              >
                {path}
              </span>
            ))}
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-[#ff7a00] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with
              proven learning methodologies to accelerate your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">
              Process
            </span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Your Journey in{" "}
              <span className="gradient-text">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Users,
                title: "Sign Up",
                desc: "Create your free account and set your career goal",
              },
              {
                step: "02",
                icon: Sparkles,
                title: "AI Analysis",
                desc: "Our AI analyzes your profile and generates your roadmap",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Learn and Track",
                desc: "Follow your path and track progress in real-time",
              },
              {
                step: "04",
                icon: Award,
                title: "Achieve Goals",
                desc: "Land your dream role with verified skills and certifications",
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative text-center group">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#ff7a00]/50 to-transparent" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-[#ff7a00] font-bold text-sm mb-1">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="btn-secondary px-8 py-3 inline-flex items-center gap-2"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap CTA */}
      <section className="py-24 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a00]/10 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-[#ff7a00] mx-auto mb-4 animate-float" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to{" "}
                <span className="gradient-text">Generate Your Roadmap?</span>
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
                Tell us your career goal and let our AI create a personalized,
                step-by-step learning path just for you.
              </p>
              <Link
                href="/roadmap"
                className="btn-primary px-10 py-4 text-lg inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Generate Your Roadmap Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              What Our <span className="gradient-text">Learners Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#ff7a00] text-[#ff7a00]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#16213e] to-[#1a1a2e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Start Your Learning
            <br />
            <span className="gradient-text">Journey Today</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join over 50,000 learners who have already transformed their careers
            with Universal Learning GPS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No credit card required
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
