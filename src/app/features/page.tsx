import Link from "next/link";
import {
  Sparkles, Target, Bot, BookOpen, BarChart3, Award,
  Shield, Globe, Clock, Cpu, Users, Zap, ArrowRight, CheckCircle
} from "lucide-react";

const mainFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered Learning Roadmaps",
    description: "Our advanced AI analyzes your career goal, current skills, and learning style to generate a completely personalized, step-by-step roadmap. Each roadmap includes timelines, milestones, and resource recommendations.",
    benefits: ["Personalized to your career goal", "Dynamic timelines", "Adaptive learning paths", "Regular roadmap updates"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description: "We compare your current skill set with industry requirements for your target role. Our AI identifies exactly which skills you are missing and provides a prioritized action plan to bridge those gaps.",
    benefits: ["Real-time industry benchmarking", "Prioritized skill recommendations", "Progress measurement", "Industry-specific requirements"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Career Mentor",
    description: "Your 24/7 AI-powered career coach. Ask questions about career paths, get personalized study plans, receive interview preparation tips, and get guidance on career transitions.",
    benefits: ["24/7 availability", "Personalized career advice", "Interview preparation", "Career transition support"],
    color: "from-[#ff7a00] to-yellow-500",
  },
  {
    icon: BookOpen,
    title: "Curated Learning Resources",
    description: "Access a carefully curated library of courses, tutorials, books, and projects from the world's best platforms including Coursera, edX, Udemy, YouTube, and more.",
    benefits: ["500+ integrated platforms", "Quality-vetted resources", "Free and paid options", "Downloadable materials"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking & Analytics",
    description: "A comprehensive dashboard showing your learning journey at a glance. Track completed modules, skills acquired, time invested, and upcoming milestones with beautiful visual analytics.",
    benefits: ["Visual progress bars", "Learning streaks", "Time tracking", "Performance analytics"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Certifications & Badges",
    description: "Earn industry-recognized certificates and skill badges upon completing modules and milestones. Download detailed learning reports to showcase your achievements to employers.",
    benefits: ["Verifiable certificates", "Achievement badges", "Downloadable reports", "LinkedIn integration"],
    color: "from-indigo-500 to-purple-500",
  },
];

const additionalFeatures = [
  { icon: Shield, title: "Secure Authentication", desc: "Google and Email login with enterprise-grade security" },
  { icon: Globe, title: "Multi-Language Support", desc: "Learn in your preferred language with global content" },
  { icon: Clock, title: "Flexible Scheduling", desc: "Learn at your own pace with adaptive scheduling" },
  { icon: Cpu, title: "Smart Recommendations", desc: "AI continuously improves your path based on progress" },
  { icon: Users, title: "Community Access", desc: "Connect with peers and mentors in study groups" },
  { icon: Zap, title: "Instant Roadmap", desc: "Generate your complete roadmap in under 30 seconds" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">Features</span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-6">
            Powerful Tools to{" "}
            <span className="gradient-text">Accelerate Your Growth</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Everything you need to plan, learn, and achieve your career goals — all in one intelligent platform.
          </p>
          <Link href="/signup" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
            Start for Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {mainFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{feature.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-[#ff7a00] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`glass-card rounded-2xl p-8 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${feature.color} opacity-20 flex items-center justify-center`}>
                  <feature.icon className="w-24 h-24 text-white opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              And Much <span className="gradient-text">More</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-6 hover-lift">
                <f.icon className="w-8 h-8 text-[#ff7a00] mb-3" />
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These <span className="gradient-text">Features?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">Join thousands of learners transforming their careers today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
