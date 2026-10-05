"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getBrowserClient } from '@/lib/supabase';
import { listPlans, updateProgress, type SavedPlan } from '@/lib/learning-store';
export default function DashboardPage() {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [message, setMessage] = useState('Loading your plans…');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    let generation = 0;
    const load = () => {
      const request = ++generation;
      setPlans([]); setMessage('Loading your plans…');
      listPlans().then(data => { if (active && request === generation) { setPlans(data); setMessage(data.length ? '' : 'No saved plans yet. Generate and save your first roadmap.'); } }).catch(error => { if (active && request === generation) setMessage(error.message); });
    };
    load();
    const subscription = getBrowserClient()?.auth.onAuthStateChange(() => { queueMicrotask(load); }).data.subscription;
    return () => { active = false; generation++; subscription?.unsubscribe(); };
  }, []);
  async function toggle(plan: SavedPlan, title: string) {
    if (busy) return;
    const completed = plan.completed.includes(title) ? plan.completed.filter(item => item !== title) : [...plan.completed, title];
    setBusy(true);
    try { await updateProgress(plan.id, completed); setPlans(items => items.map(item => item.id === plan.id ? { ...item, completed } : item)); setMessage('Progress saved.'); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to save progress.'); }
    finally { setBusy(false); }
  }
  async function signOut() {
    const client = getBrowserClient();
    if (!client) return;
    setBusy(true);
    const { error } = await client.auth.signOut();
    if (error) setMessage('Unable to sign out. Please try again.');
    else { setPlans([]); setMessage('Signed out.'); }
    setBusy(false);
  }
  return <div className="space-y-6">
    <h1 className="text-3xl font-bold">Your learning dashboard</h1>
    <div className="flex flex-wrap gap-3"><Link className="btn-primary" href="/roadmap-generator">Create a roadmap</Link><Link className="btn-secondary" href="/login">Sign in</Link><button disabled={busy} className="btn-secondary" onClick={signOut}>Sign out</button></div>
    {message && <p role="status">{message}</p>}
    {plans.map(plan => <section className="card space-y-4" key={plan.id}>
      <h2 className="text-xl font-semibold">{plan.roadmap.goal}</h2><p>{plan.completed.length} / {plan.roadmap.roadmap.length} phases complete</p>
      {plan.roadmap.roadmap.map(step => <label className="flex gap-3" key={step.title}><input type="checkbox" disabled={busy} checked={plan.completed.includes(step.title)} onChange={() => toggle(plan, step.title)} /><span>{step.title}<small className="block text-white/70">{step.outcome}</small></span></label>)}
    </section>)}
  </div>;
}
