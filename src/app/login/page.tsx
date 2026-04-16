"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Signed in successfully (demo mode).");
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={onSubmit} className="card space-y-4">
        <input type="email" required placeholder="Email" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <input type="password" required placeholder="Password" className="w-full rounded-xl border border-white/15 bg-[#121226] p-3" />
        <button type="submit" className="btn-primary w-full">Login with Email</button>
        <button type="button" className="btn-secondary w-full">Continue with Google</button>
        {message && <p className="text-sm text-[#FFB273]">{message}</p>}
      </form>
      <p className="text-sm text-white/75">
        No account? <Link href="/signup" className="text-[#FFB273]">Sign up</Link>
      </p>
    </div>
  );
}
