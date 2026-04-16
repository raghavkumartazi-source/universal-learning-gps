import Link from "next/link";
import { CheckCircle, X, Zap, Building2, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started and exploring the platform.",
    icon: Sparkles,
    color: "from-gray-500 to-gray-600",
    features: [
      { text: "1 AI-generated roadmap", included: true },
      { text: "Basic skill gap analysis", included: true },
      { text: "Access to free resources only", included: true },
      { text: "Community forum access", included: true },
      { text: "Progress tracking (basic)", included: true },
      { text: "AI Career Mentor (5 messages/day)", included: true },
      { text: "Unlimited roadmaps", included: false },
      { text: "Premium course access", included: false },
      { text: "Downloadable certificates", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started Free",
    href: "/signup",
    popular: false,
  },
  {
    name: "Pro",
    price: "19",
    period: "per month",
    description: "For serious learners who want to accelerate their career growth.",
    icon: Zap,
    color: "from-[#ff7a00] to-[#ff9a3c]",
    features: [
      { text: "Unlimited AI-generated roadmaps", included: true },
      { text: "Advanced skill gap analysis", included: true },
      { text: "Access to all premium resources", included: true },
      { text: "Community forum + study groups", included: true },
      { text: "Advanced progress analytics", included: true },
      { text: "Unlimited AI Career Mentor", included: true },
      { text: "Downloadable certificates", included: true },
      { text: "Downloadable learning reports", included: true },
      { text: "Course discount partnerships", included: true },
      { text: "LinkedIn integration", included: true },
      { text: "Priority email support", included: true },
    ],
    cta: "Start Pro Plan",
    href: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Institutional",
    price: "99",
    period: "per month",
    description: "For universities, organizations, and enterprise teams.",
    icon: Building2,
    color: "from-blue-500 to-purple-600",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 50 user seats", included: true },
      { text: "Admin dashboard & analytics", included: true },
      { text: "Custom branding options", included: true },
      { text: "Bulk user management", included: true },
      { text: "Custom learning paths", included: true },
      { text: "API access", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SSO integration", included: true },
      { text: "SLA guarantee", included: true },
      { text: "24/7 phone support", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. You will retain access to Pro features until the end of your billing period.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes! We offer a 14-day free trial for the Pro plan. No credit card required to start your trial.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and PayPal. We also support UPI and net banking for Indian users.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any billing differences.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes! Students with a valid .edu email address get 50% off the Pro plan. Contact us with your student email to claim your discount.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-[#ff7a00] text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Start for free and upgrade when you are ready. No hidden fees, no surprises.
          </p>
          <p className="text-gray-400">
            All plans include a 14-day free trial of Pro features.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card rounded-2xl p-8 hover-lift ${
                  plan.popular ? "border-[#ff7a00]/50 border" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#ff7a00] to-[#ff9a3c] text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <Link
                  href={plan.href}
                  className={`block text-center py-3 rounded-xl font-semibold transition-all mb-8 ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-12 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Go <span className="gradient-text">Pro?</span>
          </h2>
          <p className="text-gray-400">
            Unlock the full potential of your learning journey with unlimited AI-powered features.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Faster Results", desc: "Pro users achieve their career goals 3x faster on average", icon: "⚡" },
            { label: "More Resources", desc: "Access 10,000+ premium courses and learning materials", icon: "📚" },
            { label: "Better Outcomes", desc: "95% of Pro users report landing better jobs or promotions", icon: "🎯" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2">{item.label}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Pricing <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Free <span className="gradient-text">Trial Today</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            No credit card required. 14 days of Pro features, absolutely free.
          </p>
          <Link href="/signup" className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
