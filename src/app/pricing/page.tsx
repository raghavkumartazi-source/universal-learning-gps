const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["2 roadmap generations / month", "Basic dashboard", "Community resources"],
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: ["Unlimited AI roadmaps", "Advanced mentor insights", "Certification reports"],
  },
  {
    name: "Institutional",
    price: "Custom",
    features: ["University/organization onboarding", "Cohort analytics", "Dedicated support"],
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan, index) => (
          <article key={plan.name} className={`card ${index === 1 ? "border-[#FF7A00]/70" : ""}`}>
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="my-3 text-3xl font-bold text-[#FFB273]">{plan.price}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
