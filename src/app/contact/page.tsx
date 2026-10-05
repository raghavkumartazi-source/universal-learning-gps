"use client";
import { FormEvent, useState } from 'react';
export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true); setMessage('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(data)) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? 'Message could not be sent.');
      setMessage(result.message); form.reset();
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Message could not be sent. Please try again.'); }
    finally { setBusy(false); }
  }
  const style = 'w-full rounded-xl border border-white/15 bg-[#121226] p-3';
  return <div className="space-y-6"><h1 className="text-3xl font-bold">Contact</h1>
    <form onSubmit={submit} className="card max-w-2xl space-y-4">
      <label className="block">Name<input name="name" autoComplete="name" required maxLength={100} className={style} /></label>
      <label className="block">Email<input name="email" type="email" autoComplete="email" required maxLength={254} className={style} /></label>
      <label className="block">Message<textarea name="message" required maxLength={5000} rows={5} className={style} /></label>
      <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button disabled={busy} className="btn-primary">{busy ? 'Sending…' : 'Send message'}</button>
      {message && <p role="status">{message}</p>}
    </form></div>;
}
