const steps = [
  "Sign up and choose your target career goal.",
  "Enter your current skills and weekly learning time.",
  "Receive an AI-generated roadmap with milestones.",
  "Track progress in your dashboard and refine with mentor chat.",
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">How It Works</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step} className="card">
            <p className="mb-2 text-sm font-semibold text-[#FFB273]">Step {index + 1}</p>
            <p className="text-white/85">{step}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
