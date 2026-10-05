"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { getBrowserClient } from '@/lib/supabase';
export default function AuthForm({ signup = false }: { signup?: boolean }) {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const client = getBrowserClient();
    if (!client) { setMessage('Accounts are not configured yet. Roadmap previews remain available.'); return; }
    setBusy(true); setMessage('');
    try {
      const email = String(data.get('email') ?? '').trim();
      const password = String(data.get('password') ?? '');
      const result = signup ? await client.auth.signUp({ email, password, options: { data: { full_name: String(data.get('name') ?? '') }, emailRedirectTo: `${window.location.origin}/dashboard` } }) : await client.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (result.data.session) router.push('/dashboard');
      else setMessage('Check your email to confirm your account before signing in.');
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to sign in.'); }
    finally { setBusy(false); }
  }
  async function google() {
    const client = getBrowserClient();
    if (!client) { setMessage('Accounts are not configured yet.'); return; }
    setBusy(true);
    try {
      const { error } = await client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/dashboard` } });
      if (error) throw error;
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to start Google sign-in.'); }
    finally { setBusy(false); }
  }
  const style = 'w-full rounded-xl border border-white/15 bg-[#121226] p-3';
  return <div className="mx-auto max-w-md space-y-6">
    <h1 className="text-3xl font-bold">{signup ? 'Create an account' : 'Login'}</h1>
    <form onSubmit={submit} className="card space-y-4">
      {signup && <label className="block">Full name<input name="name" autoComplete="name" required maxLength={100} className={style} /></label>}
      <label className="block">Email<input name="email" type="email" autoComplete="email" required maxLength={254} className={style} /></label>
      <label className="block">Password<input name="password" type="password" autoComplete={signup ? 'new-password' : 'current-password'} minLength={signup ? 8 : undefined} required className={style} /></label>
      <button disabled={busy} className="btn-primary w-full">{busy ? 'Please wait…' : signup ? 'Create account' : 'Login with email'}</button>
      <button disabled={busy} type="button" onClick={google} className="btn-secondary w-full">Continue with Google</button>
      {message && <p role="status" className="text-sm text-[#FFB273]">{message}</p>}
    </form>
    <Link className="text-[#FFB273]" href={signup ? '/login' : '/signup'}>{signup ? 'Already registered? Login' : 'Create an account'}</Link>
  </div>;
}
