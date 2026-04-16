import Link from "next/link";
import { Target, Heart, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { TwitterXIcon, LinkedInIcon } from "@/components/SocialIcons";

const team = [
  {
    name: "Raghav Kumar",
    role: "Founder & CEO",
    bio: "Ex-Google engineer passionate about democratizing education through AI technology.",
    avatar: "RK",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ananya Patel",
    role: "Chief AI Officer",
    bio: "PhD in Machine Learning from IIT Bombay with 8 years of AI product experience.",
    avatar: "AP",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vikram Singh",
    role: "Head of Product",
    bio: "Previously at Coursera and LinkedIn. Building learning products for 10+ years.",
    avatar: "VS",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Preethi Nair",
    role: "Head of Learning Design",
    bio: "Former professor turned EdTech expert. Designed curriculum for 50K+ students.",
    avatar: "PN",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Engineering",
    bio: "Full-stack architect with experience at Amazon and multiple successful startups.",
    avatar: "AM",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Divya Sharma",
    role: "Head of Growth",
    bio: "Growth strategist who scaled multiple EdTech platforms to 1M+ users.",
    avatar: "DS",
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to make quality career guidance accessible to everyone, regardless of their background or location.",
  },
  {
    icon: Heart,
    title: "Learner-First",
    description: "Every feature we build starts with one question: how does this help our learners achieve their goals?",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We are building for learners worldwide, breaking down barriers to education and career advancement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push the boundaries of what AI can do to personalize and improve learning experiences.",
  },
];

const milestones = [
  { year: "2022", title: "Company Founded", desc: "Universal Learning GPS was born from a vision to democratize career guidance" },
  { year: "2023", title: "First 10,000 Users", desc: "Launched the beta platform and reached our first milestone of active learners" },
  { year: "2024", title: "AI Roadmap Generator v2", desc: "Launched our advanced AI that generates roadmaps in under 30 seconds" },
  { year: "2025", title: "50,000+ Learners", desc: "Crossed 50,000 active learners across 40+ countries worldwide" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-6">
            We Are on a Mission to{" "}
            <span className="gradient-text">Democratize Learning</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Universal Learning GPS was founded with a single belief: everyone deserves a clear, personalized path to their dream career, regardless of their starting point.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Universal Learning GPS was born out of frustration. Our founder, Raghav Kumar, spent months trying to figure out how to transition from a mechanical engineering background to software engineering. Despite the abundance of online resources, there was no clear map — just an overwhelming sea of options with no guidance.
                </p>
                <p>
                  He wanted something that could look at where you are, understand where you want to go, and give you a clear, step-by-step path with the best resources available. Like GPS for learning.
                </p>
                <p>
                  In 2022, with a team of passionate engineers, educators, and AI researchers, Universal Learning GPS was launched. Today, we serve 50,000+ learners across 40+ countries, helping them navigate their way to successful careers.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🧭</div>
              <div className="text-[#ff7a00] font-bold text-4xl mb-2">50K+</div>
              <div className="text-gray-400 mb-6">Learners worldwide</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "40+", label: "Countries" },
                  { value: "200+", label: "Career Paths" },
                  { value: "95%", label: "Success Rate" },
                  { value: "4.9★", label: "User Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff7a00] to-transparent hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {m.year.slice(2)}
                  </div>
                  <div className="glass-card rounded-xl p-6 flex-1">
                    <div className="text-[#ff7a00] font-bold text-sm mb-1">{m.year}</div>
                    <h3 className="text-white font-semibold mb-1">{m.title}</h3>
                    <p className="text-gray-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A diverse team of engineers, educators, and AI researchers united by the mission to transform how people learn and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-6 hover-lift text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-white font-bold">{member.name}</h3>
                <p className="text-[#ff7a00] text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-[#ff7a00] transition-colors">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-[#ff7a00] transition-colors">
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our <span className="gradient-text">Growing Community</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Be part of the movement to make quality education accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
