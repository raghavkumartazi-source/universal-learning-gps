"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignUpPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Account created (demo mode). You can now generate a roadmap.");
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form onSubmit={onSubmit} className="card space-y-4">
        <input required placeholder="Full name" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <input type="email" required placeholder="Email" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <input type="password" minLength={8} required placeholder="Password" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <button type="submit" className="btn-primary w-full">Create Account</button>
        <button type="button" className="btn-secondary w-full">Sign up with Google</button>
        {message && <p className="text-sm text-[#FFB273]">{message}</p>}
      </form>
      <p className="text-sm text-white/75">
        Already registered? <Link href="/login" className="text-[#FFB273]">Login</Link>
      </p>
    </div>
  );
}
