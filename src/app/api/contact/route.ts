import { readJson, parseContact, apiError } from '@/lib/api-input';
let windowStart = 0;
let submissions = 0;
export async function POST(request: Request) {
  try {
    const input = parseContact(await readJson(request));
    if (input.website) return Response.json({ error: 'Unable to submit this message.' }, { status: 400 });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) return Response.json({ error: 'Contact delivery is not configured yet. Please try again later.' }, { status: 503 });
    if (Date.now() - windowStart > 300000) { windowStart = Date.now(); submissions = 0; }
    if (++submissions > 20) return Response.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: input.email,
        subject: 'Learning GPS contact request', text: `From: ${input.name} <${input.email}>\n\n${input.message}` }), signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error('Delivery failed.');
    const result = await response.json() as { id?: string };
    if (!result.id) throw new Error('Delivery was not acknowledged.');
    return Response.json({ message: 'Your message has been accepted for delivery.' });
  } catch (error) { return apiError(error); }
}
