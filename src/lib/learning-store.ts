import type { RoadmapResult } from './roadmap';
import { getBrowserClient } from './supabase';
export type SavedPlan = { id: string; user_id: string; roadmap: RoadmapResult; completed: string[]; created_at: string };
async function account() {
  const client = getBrowserClient();
  if (!client) throw new Error('Saved plans are not configured yet.');
  const { data: { user }, error } = await client.auth.getUser();
  if (error || !user) throw new Error('Sign in to save and view your plans.');
  return { client, user };
}
export async function savePlan(roadmap: RoadmapResult) {
  const { client, user } = await account();
  const { data, error } = await client.from('learning_plans').insert({ user_id: user.id, roadmap, completed: [] }).select().single();
  if (error) throw new Error('Plan could not be saved. Please try again.');
  return data as SavedPlan;
}
export async function listPlans() {
  const { client, user } = await account();
  const { data, error } = await client.from('learning_plans').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(50);
  if (error) throw new Error('Saved plans could not be loaded.');
  return (data ?? []) as SavedPlan[];
}
export async function updateProgress(id: string, completed: string[]) {
  const { client, user } = await account();
  const { data, error } = await client.from('learning_plans').update({ completed }).eq('id', id).eq('user_id', user.id).select('id');
  if (error || !data?.length) throw new Error('Progress could not be saved.');
}
