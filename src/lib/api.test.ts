import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { POST as roadmap } from '../app/api/roadmap/route';
import { POST as mentor } from '../app/api/mentor/route';
import { POST as contact } from '../app/api/contact/route';
import { generateRoadmap } from './roadmap';
import { parseRoadmap, readJson } from './api-input';
import { authenticatedClient } from './server-auth';
vi.mock('./server-auth', () => ({ authenticatedClient: vi.fn() }));
const request = (body: unknown) => new Request('http://localhost/api', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
beforeEach(() => { vi.stubEnv('OPENAI_API_KEY', ''); vi.stubEnv('OPENAI_MODEL', ''); vi.stubEnv('RESEND_API_KEY', ''); vi.stubEnv('CONTACT_FROM_EMAIL', ''); vi.stubEnv('CONTACT_TO_EMAIL', ''); });
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.clearAllMocks(); });

describe('roadmap validation', () => {
  it.each([null, [], { goal: 12, weeklyHours: 8 }, { goal: 'Software Engineer', skills: [], weeklyHours: 8 }, { goal: 'Software Engineer', weeklyHours: '8' }, { goal: 'Software Engineer', weeklyHours: -1 }, { goal: 'Software Engineer', weeklyHours: 81 }, { goal: 'unknown', weeklyHours: 10 }])('returns 400 for malformed input %j', async body => { expect((await roadmap(request(body))).status).toBe(400); });
  it('rejects nonfinite numbers before generation', () => { expect(() => parseRoadmap({ goal: 'Software Engineer', weeklyHours: NaN })).toThrow(); });
  it('accepts a supported goal and generates a finite plan', async () => { const response = await roadmap(request({ goal: 'Software Engineer', skills: 'Git', weeklyHours: 10 })); expect(response.status).toBe(200); expect((await response.json()).roadmap).toHaveLength(3); });
  it('handles malformed JSON and bounded chunked bodies', async () => {
    const broken = new Request('http://localhost', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' });
    expect((await roadmap(broken)).status).toBe(400);
    await expect(readJson(request({ skills: 'a'.repeat(17000) }))).rejects.toThrow('too large');
  });
});
describe('mentor modes', () => {
  it('labels the fallback honestly', async () => { const response = await mentor(request({ question: 'How do I begin?', goal: 'Software Engineer' })); expect(response.status).toBe(200); expect((await response.json()).mode).toBe('guided'); });
  it('does not call a paid provider without verified sign-in', async () => {
    vi.stubEnv('OPENAI_API_KEY', 'test-key'); vi.stubEnv('OPENAI_MODEL', 'test-model');
    vi.mocked(authenticatedClient).mockResolvedValue(null); const fetcher = vi.fn(); vi.stubGlobal('fetch', fetcher);
    expect((await mentor(request({ question: 'Hello' }))).status).toBe(401); expect(fetcher).not.toHaveBeenCalled();
  });
  it('enforces persistent quota before provider calls', async () => {
    vi.stubEnv('OPENAI_API_KEY', 'test-key'); vi.stubEnv('OPENAI_MODEL', 'test-model');
    vi.mocked(authenticatedClient).mockResolvedValue({ rpc: vi.fn().mockResolvedValue({ data: false, error: null }) } as never);
    const fetcher = vi.fn(); vi.stubGlobal('fetch', fetcher);
    expect((await mentor(request({ question: 'Hello' }))).status).toBe(429); expect(fetcher).not.toHaveBeenCalled();
  });
  it('extracts model output and keeps server secrets out of responses', async () => {
    vi.stubEnv('OPENAI_API_KEY', 'test-key'); vi.stubEnv('OPENAI_MODEL', 'test-model');
    vi.mocked(authenticatedClient).mockResolvedValue({ rpc: vi.fn().mockResolvedValue({ data: true, error: null }) } as never);
    const fetcher = vi.fn().mockResolvedValue(Response.json({ output: [{ type: 'reasoning' }, { type: 'message', content: [{ type: 'output_text', text: 'Start with Git.' }] }] })); vi.stubGlobal('fetch', fetcher);
    const response = await mentor(request({ question: 'How do I begin?' })); expect(await response.json()).toEqual({ reply: 'Start with Git.', mode: 'ai' });
    const sent = JSON.parse(fetcher.mock.calls[0][1].body); expect(sent.store).toBe(false); expect(sent.max_output_tokens).toBe(800);
  });
});
describe('contact delivery', () => {
  const input = { name: 'Test Learner', email: 'learner@example.test', message: 'Test message', website: '' };
  it('returns unavailable instead of fake success when not configured', async () => { expect((await contact(request(input))).status).toBe(503); });
  it('rejects invalid fields and honeypot submissions', async () => { expect((await contact(request({ ...input, email: 4 }))).status).toBe(400); expect((await contact(request({ ...input, website: 'bot' }))).status).toBe(400); });
  it('acknowledges only accepted delivery and handles provider rejection', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key'); vi.stubEnv('CONTACT_FROM_EMAIL', 'sender@example.test'); vi.stubEnv('CONTACT_TO_EMAIL', 'owner@example.test');
    const fetcher = vi.fn().mockResolvedValueOnce(Response.json({ id: 'test-mail' })).mockResolvedValueOnce(Response.json({ error: 'no' }, { status: 500 })); vi.stubGlobal('fetch', fetcher);
    expect((await contact(request(input))).status).toBe(200); expect((await contact(request(input))).status).toBe(502);
    const sent = JSON.parse(fetcher.mock.calls[0][1].body); expect(sent.to).toEqual(['owner@example.test']); expect(sent.reply_to).toBe(input.email);
  });
});


it('phase timelines end at the advertised duration with no gaps', () => {
  for (const hours of [1, 8.5, 10, 80]) {
    const plan = generateRoadmap('Software Engineer', '', hours);
    let next = 1;
    for (const step of plan.roadmap) {
      const [start, end] = step.timeline.replace('Weeks ', '').split('-').map(Number);
      expect(start).toBe(next); expect(end).toBeGreaterThanOrEqual(start); next = end + 1;
    }
    expect(next - 1).toBe(Number(plan.estimatedDuration.split(' ')[0]));
  }
});
