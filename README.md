# Universal Learning GPS

Curated career roadmaps, a personal progress dashboard and a learning mentor.

## Local setup

Use Node 22.12 or newer. Run `npm ci`, copy `.env.local.example` to `.env.local`, and run `npm run dev`. Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` before publishing.

## Services

- **Accounts and saved plans:** supply your Supabase URL and public anon key. Apply the migration in `supabase/migrations` to a backed-up/test project before deployment. Enable email confirmation and configure Site URL/redirect URLs for `/dashboard`. For Google login, enable the Google provider in Supabase and configure its OAuth credentials/authorized callback. The browser client handles auth redirects; data access is protected by owner RLS. No service-role key is used.
- **Contact:** configure `RESEND_API_KEY`, a verified `CONTACT_FROM_EMAIL` sender and your chosen `CONTACT_TO_EMAIL`. The form reports acceptance only after the provider acknowledges the email. Unconfigured delivery returns an error. A honeypot and an instance-wide 20 submissions/5-minute cap provide basic protection. Add a shared limiter or CAPTCHA before exposing a high-traffic form across multiple instances.
- **AI mentor:** configure server-only `OPENAI_API_KEY` and `OPENAI_MODEL` using a model enabled for your account. Requests require verified sign-in and the atomic database quota (20/user/UTC day). Provider failures consume quota to limit abuse. Answers use the Responses API with an 800-output-token cap, 20-second timeout and storage disabled. Questions are sent to OpenAI when this mode is enabled; tell users in your privacy notice. Without these variables, the UI clearly labels the existing rules as guided responses. No model or key is silently selected.

Roadmaps are generated from curated career tracks, not a model. A signed-in learner can explicitly save a roadmap, then mark phases complete on their dashboard. The dashboard displays their own stored progress rather than sample completion values. Up to 50 most recent saved plans are displayed; pagination and plan deletion are future enhancements.

No service credentials are included. Tests use synthetic data and stub provider responses; live email delivery, OAuth, database policies and model quality still need verification in your configured test environment. No database or live deployment is changed by the pull request.

Provider references: [Supabase Auth](https://supabase.com/docs/guides/auth), [Resend email API](https://resend.com/docs/api-reference/emails/send-email), [OpenAI text generation](https://developers.openai.com/api/docs/guides/text).

## Dependency maintenance

Next.js and its lint configuration are pinned to 16.3.8, and tests use Vitest 5.0.3 with current Vite tooling. The production dependency audit reports zero known advisories at this revision. The development-only Next ESLint glob dependency chain still reports the unpatched [braces denial-of-service advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm); keep lint inputs trusted and review upstream fixes. Avoid the suggested forced downgrade of Next lint tooling.
