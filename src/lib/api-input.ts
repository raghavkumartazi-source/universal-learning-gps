import { careerOptions } from './roadmap';

export class InputError extends Error {}
export function objectInput(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new InputError('Expected a JSON object.');
  return value as Record<string, unknown>;
}
export function textInput(value: unknown, field: string, max: number, required = true): string {
  if (value === undefined && !required) return '';
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new InputError(`Invalid ${field}.`);
  return value.trim();
}
export function parseRoadmap(value: unknown) {
  const body = objectInput(value);
  const goal = textInput(body.goal, 'career goal', 100);
  if (!careerOptions.includes(goal)) throw new InputError('Choose a supported career goal.');
  const skills = textInput(body.skills, 'skills', 2000, false);
  if (typeof body.weeklyHours !== 'number' || !Number.isFinite(body.weeklyHours) || body.weeklyHours < 1 || body.weeklyHours > 80) throw new InputError('Weekly hours must be between 1 and 80.');
  return { goal, skills, weeklyHours: body.weeklyHours };
}
export function parseMentor(value: unknown) {
  const body = objectInput(value);
  return { question: textInput(body.question, 'question', 2000), goal: textInput(body.goal ?? 'your career goal', 'goal', 100) };
}
export function parseContact(value: unknown) {
  const body = objectInput(value);
  const name = textInput(body.name, 'name', 100);
  const email = textInput(body.email, 'email', 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) throw new InputError('Enter a valid email address.');
  return { name, email, message: textInput(body.message, 'message', 5000), website: textInput(body.website, 'website', 100, false) };
}
export async function readJson(request: Request): Promise<unknown> {
  if (!request.headers.get('content-type')?.includes('application/json')) throw new InputError('Send JSON.');
  // Bounded read even when Content-Length is omitted.
  const reader = request.body?.getReader();
  if (!reader) throw new InputError('Missing request body.');
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16000) { await reader.cancel(); throw new InputError('Request is too large.'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new InputError('Invalid JSON.'); }
}
export function apiError(error: unknown) {
  if (error instanceof InputError) return Response.json({ error: error.message }, { status: 400 });
  return Response.json({ error: 'Service temporarily unavailable. Try again later.' }, { status: 502 });
}
