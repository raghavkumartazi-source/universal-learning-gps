import Link from "next/link";
import {
  UserPlus, Brain, BookOpen, TrendingUp, Award, ArrowRight,
  CheckCircle, MessageSquare, BarChart2, Sparkles
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up in seconds using Google or Email. Tell us about your current background, skills, education, and career aspirations. The more you share, the more personalized your experience.",
    details: [
      "Quick 5-minute onboarding",
      "Current skill assessment quiz",
      "Career goal selection from 200+ options",
      "Learning style preference setup",
    ],
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Generates Your Roadmap",
    description: "Our AI analyzes thousands of successful career paths, industry requirements, and learning resources to create a completely personalized roadmap — in under 30 seconds.",
    details: [
      "Instant AI-powered analysis",
      "Step-by-step learning phases",
      "Estimated timelines for each phase",
      "Skills and milestones defined",
    ],
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Start Learning with Curated Resources",
    description: "Follow your roadmap with hand-picked courses, tutorials, projects, and books. Access resources from Coursera, edX, Udemy, YouTube, and more — all in one place.",
    details: [
      "500+ integrated learning platforms",
      "Free and premium resources",
      "Video, text, and project-based learning",
      "Offline access for premium users",
    ],
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Get Guidance from Your AI Mentor",
    description: "Stuck on a concept or unsure about your next step? Chat with your AI Career Mentor 24/7. Get personalized advice, study strategies, and career guidance.",
    details: [
      "24/7 AI career guidance",
      "Personalized study plans",
      "Interview preparation tips",
      "Career transition strategies",
    ],
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Track Your Progress",
    description: "Monitor your learning journey through a beautiful personalized dashboard. See completed modules, skills acquired, time invested, and upcoming milestones.",
    details: [
      "Visual progress dashboard",
      "Skill acquisition tracking",
      "Learning streak rewards",
      "Milestone celebrations",
    ],
  },
  {
    number: "06",
    icon: Award,
    title: "Earn Certificates and Land Your Dream Role",
    description: "Complete your learning journey and earn verifiable certificates. Download your detailed learning report and showcase your achievements to potential employers.",
    details: [
      "Industry-recognized certificates",
      "Digital achievement badges",
      "Downloadable learning reports",
      "LinkedIn profile integration",
    ],
  },
];

const faqs = [
  {
    q: "How long does it take to generate a roadmap?",
    a: "Our AI generates your personalized roadmap in under 30 seconds. You can start learning immediately after signup.",
  },
  {
    q: "Can I change my career goal after starting?",
    a: "Absolutely! You can update your career goal anytime and the AI will generate a new optimized roadmap while preserving your progress.",
  },
  {
    q: "Are the learning resources free?",
    a: "Many resources are free. We curate both free and paid options, clearly labeling each. Premium plan users get access to exclusive paid course discounts.",
  },
  {
    q: "How accurate are the AI roadmaps?",
    a: "Our roadmaps are built on data from thousands of successful professionals and regularly updated with current industry requirements. 95% of users report they are highly relevant.",
  },
  {
    q: "Can I use this for any career?",
    a: "Yes! We support 200+ career paths including Software Engineering, Data Science, Design, Marketing, Finance, Healthcare, Engineering, and more.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-6">
            Your Path to Success in{" "}
            <span className="gradient-text">6 Simple Steps</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            From signup to landing your dream job, we guide you every step of the way with AI-powered intelligence.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff7a00] via-[#ff7a00]/50 to-transparent" />
            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-8">
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ff7a00]/30">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 glass-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[#ff7a00] text-sm font-bold">STEP {step.number}</span>
                        <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#ff7a00] flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">Create your free account and generate your personalized roadmap in minutes.</p>
          <Link href="/signup" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
