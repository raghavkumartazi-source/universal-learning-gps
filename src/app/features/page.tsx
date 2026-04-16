import { BarChart3, BadgeCheck, BookOpen, Bot, BrainCircuit, GraduationCap } from "lucide-react";

const features = [
  { icon: BrainCircuit, title: "Roadmap Intelligence", description: "AI-generated plans personalized to your goal and available time." },
  { icon: BarChart3, title: "Progress Dashboard", description: "Track completed modules, milestones, and momentum." },
  { icon: GraduationCap, title: "Skill Gap Detection", description: "Discover missing skills and priority learning actions." },
  { icon: BookOpen, title: "Curated Learning", description: "Recommended resources from Coursera, edX, Udemy, YouTube, and more." },
  { icon: Bot, title: "Career Mentor", description: "Chat assistant for interview tips, study planning, and accountability." },
  { icon: BadgeCheck, title: "Achievements & Reports", description: "View badge progress and download learning reports." },
];

export default function FeaturesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Features</h1>
      <p className="max-w-3xl text-white/80">Built for focused growth with modern AI support and practical outcomes.</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="card">
            <Icon className="mb-3 h-6 w-6 text-[#FF7A00]" />
            <h2 className="mb-2 text-lg font-semibold">{title}</h2>
            <p className="text-white/75">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
