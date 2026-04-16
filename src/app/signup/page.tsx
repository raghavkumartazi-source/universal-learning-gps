"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";

const careerOptions = [
  "Software Engineer", "Data Scientist", "AI/ML Engineer", "Product Manager",
  "UX/UI Designer", "DevOps Engineer", "Cybersecurity Analyst", "Full Stack Developer",
  "Electronics Engineer", "Data Analyst", "Cloud Architect", "Entrepreneur",
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative w-full max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a00] to-[#ff9a3c] flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl">Universal Learning GPS</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-gray-400">Start your personalized learning journey for free</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-[#ff7a00] text-white" : "bg-white/10 text-gray-400"}`}>
                {step > s ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              {s < 2 && <div className={`w-12 h-0.5 ${step > s ? "bg-[#ff7a00]" : "bg-white/20"}`} />}
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          {step === 1 && (
            <>
              <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rahul Kumar"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-12 py-3 text-white placeholder-gray-500 outline-none focus:border-[#ff7a00]/50 transition-colors"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-gray-500 text-xs">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="text-[#ff7a00] hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#ff7a00] hover:underline">Privacy Policy</Link>
                </p>
              </form>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <h2 className="text-white font-bold text-xl mb-2">What is your career goal?</h2>
                <p className="text-gray-400 text-sm mb-4">
                  We will use this to generate your personalized learning roadmap.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {careerOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedGoal(option)}
                      className={`p-2 rounded-xl text-sm text-center transition-all ${
                        selectedGoal === option
                          ? "bg-[#ff7a00] text-white shadow-lg shadow-[#ff7a00]/30"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:border-[#ff7a00]/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-secondary px-4 py-3 flex-1">
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!selectedGoal || loading}
                  className="btn-primary py-3 flex-1 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Create Account <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#ff7a00] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
