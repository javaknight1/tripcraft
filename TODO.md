# TripCraft Build Progress Tracker

This file tracks the complete build of TripCraft following the step-by-step architecture in the v6 Arcane roadmap doc. Each task has enough implementation detail to pick up and continue without follow-up prompts.

**Last Updated:** 2026-03-09 (T003 complete: Environment & Config)
**Total Tasks:** T000–T054 (55 tasks)
**Current Task:** T004 — Supabase Schema
**Current Sprint:** S1 (Foundation) — In Progress
**Next Milestone:** S1 completion — working Next.js app with Supabase auth and profile onboarding

---

## Task Index

Quick reference for all tasks. Use the ID (e.g., "implement T007") to reference a task.

| ID   | Sprint | Priority | Type      | Title                                        | Description                                                                        |
|------|--------|----------|-----------|----------------------------------------------|------------------------------------------------------------------------------------|
| ~~T001~~ | ~~S1~~ | ~~P0~~ | ~~Setup~~ | ~~Shared TypeScript Types~~                  | ~~Single canonical types file — all tasks import from here~~                       |
| ~~T002~~ | ~~S1~~ | ~~P0~~ | ~~Setup~~ | ~~Project Scaffold~~                         | ~~Next.js 15, Tailwind, shadcn/ui, Vercel deploy~~                                 |
| ~~T003~~ | ~~S1~~ | ~~P0~~ | ~~Config~~ | ~~Environment & Config~~                     | ~~`.env.local`, Supabase client init, Anthropic client init~~                      |
| T004 | S1     | P0       | Backend   | Supabase Schema                              | Tables: profiles, trips, trip_blocks, share_links, affiliate_clicks                |
| T005 | S1     | P0       | Auth      | Supabase Auth                                | Google + magic link; session handling; protected route middleware                   |
| T006 | S1     | P0       | Frontend  | Profile Onboarding Flow                      | Post-signup preference wizard: activity interests, budget, pace, dietary            |
| T006 | S1     | P0       | Frontend  | Settings Profile Page                        | /settings/profile — reuses onboarding wizard UI for post-signup edits     |
| T007 | S2     | P0       | Frontend  | Intake Wizard — Steps 1 & 2                  | Flights + Accommodation steps with conditional field logic                          |
| T008 | S2     | P0       | Frontend  | Intake Wizard — Steps 3 & 4                  | Fixed Events repeater + Preferences card grid (pre-filled from profile)             |
| T009 | S2     | P0       | Backend   | AI Prompt Builder                            | Pure function: IntakeFormState + UserProfile → system/user prompt strings           |
| T010 | S2     | P0       | Backend   | AI Generation API Route                      | API route: auth check, call T009, stream Claude response, save to Supabase         |
| T011 | S2     | P0       | Frontend  | Streaming Output Handler                     | Parse streamed JSON tokens, render sections progressively                           |
| T012 | S3     | P0       | Frontend  | Trip Viewer Page                             | /trips/[id] page — assembles calendar, all output sections, and export buttons     |
| T013 | S3     | P0       | Frontend  | Calendar Grid Component                      | 10-color CSS Grid, 30-min rows, one column per day                                 |
| T014 | S3     | P0       | Frontend  | Anchor & Lock System                         | 🔒 icon logic, lock/unlock flow, anchor identification from AI                     |
| T015 | S3     | P0       | Frontend  | Free Time Blocks                             | Purple blocks with collapsible suggestion drawer (3–5 items)                       |
| T016 | S3     | P0       | Frontend  | Transport Block Shading                      | Light yellow = ground (5 sub-shades by mode); deep amber = flying                  |
| T017 | S3     | P0       | Frontend  | Drag-and-Drop — Core                         | dnd-kit setup, draggable/locked rules, drop onto empty slots                       |
| T018 | S3     | P1       | Frontend  | Drag-and-Drop — Conflict UI                  | Swap/push modal, gap-too-small handling, drop-onto-block behavior                  |
| T019 | S3     | P0       | Backend   | AI Re-optimization                           | Lightweight Claude call after each drag; transport recalculation                   |
| T020 | S3     | P0       | Frontend  | Undo History                                 | Last 10 drag actions undoable via Cmd+Z or Undo button                             |
| T021 | S4     | P0       | Frontend  | Output Section 02 — Walkthrough              | Prose day narrative with anchor callout blocks                                     |
| T022 | S4     | P0       | Frontend  | Output Sections 03–05                        | Food guide, money & budget, language guide renderers                               |
| T023 | S4     | P0       | Frontend  | Output Sections 06–07                        | Culture & etiquette and logistics renderers                                        |
| T024 | S4     | P0       | Frontend  | Affiliate Link Injection                     | Embed partner URLs into blocks at render time                                      |
| T025 | S4     | P0       | Backend   | Affiliate Click Tracking                     | Log clicks to affiliate_clicks table                                               |
| T026 | S4     | P0       | Export    | Excel Export                                 | SheetJS client-side export matching grid colors                                    |
| T027 | S4     | P0       | Frontend  | Settings / Profile Edit Page                 | /settings/profile — lets users update preferences after onboarding                 |
| T028 | S4     | P1       | Testing   | E2E Smoke Test                               | Full generation with real API; verify all 7 sections render                        |
| T029 | S4     | P0       | Launch    | Beta Launch                                  | Deploy to production, share with 10 beta users, PostHog live                       |
| T030 | S5     | P1       | Frontend  | Saved Trips Dashboard                        | List of past and upcoming trips, re-openable and re-exportable                     |
| T031 | S5     | P1       | Backend   | Shareable UUID Links                         | Generate public read-only URL per trip                                             |
| T032 | S5     | P1       | Frontend  | Public Share Page                            | /share/[slug] — read-only trip view for shared links                               |
| T033 | S5     | P1       | Export    | PDF Export                                   | Puppeteer server-side PDF of full 7-section brief                                  |
| T034 | S5     | P0       | Frontend  | Multi-Destination Intake UI                  | "Add another city" flow in intake wizard; per-destination form cards               |
| T035 | S5     | P0       | Frontend  | Multi-Destination Output                     | Per-city sections 03–07; transit day blocks between destinations                   |
| T036 | S5     | P1       | Backend   | Transit Days                                 | Full deep-amber day blocks for inter-city legs                                     |
| T037 | S5     | P1       | Frontend  | Block Regeneration                           | Tap block → 3 AI alternatives as card carousel                                     |
| T038 | S5     | P1       | Frontend  | Cross-Day Drag                               | Drag block to different day column with confirmation dialog                        |
| T039 | S5     | P2       | Backend   | Flight API Lookup                            | AviationStack: flight number → auto-populate times                                 |
| T040 | S5     | P2       | Frontend  | Emergency Re-route                           | "My ferry is cancelled" → AI generates updated plan                                |
| T041 | S6     | P1       | Feature   | Post-Trip Rating Email                       | Resend trigger 2–3 days after trip end date                                        |
| T042 | S6     | P1       | Frontend  | Block Rating UI                              | 1–5 star rating per block, pre-populated from trip                                 |
| T043 | S6     | P1       | Frontend  | Thumbs Up/Down Feedback                      | Quick per-block feedback logged immediately to DB                                  |
| T044 | S6     | P1       | Backend   | Preference Profile Learning                  | Refine profile from ratings + implicit signals (block swaps, cancellations)        |
| T045 | S6     | P1       | AI        | Personalized Generation                      | Inject updated preference profile into system prompt on future trips               |
| T046 | S6     | P0       | Payments  | Stripe Setup & Webhooks                      | Stripe products, prices, webhook handler syncing subscription state to Supabase    |
| T047 | S6     | P0       | Payments  | Tier Gating                                  | Generation count tracking, free tier limit enforcement, upgrade CTA                |
| T048 | S6     | P0       | Payments  | Pricing Page & Billing UI                    | /upgrade pricing page, Stripe Checkout session, /settings/billing portal           |
| T049 | S6     | P0       | Feature   | Anonymous Taste Generation                   | 1 generation, view-only, no export/save; upsell at bottom of output                |
| T050 | S6     | P2       | Frontend  | Group Trip View                              | Multiple travelers share one live schedule                                         |
| T051 | S7     | P2       | Mobile    | React Native + Expo                          | iOS + Android app; re-uses web logic                                               |
| T052 | S7     | P2       | Mobile    | Live Trip Mode                               | Current block highlighted, next block previewed                                    |
| T053 | S7     | P2       | Mobile    | Voice Modification                           | "We're going to the night market instead" → AI re-routes                           |
| T054 | S7     | P2       | Mobile    | Push Notifications                           | 30 min before activity; post-trip rating prompt                                    |
| T055 | S7     | P2       | Mobile    | Offline Mode                                 | SQLite local cache for schedule access without signal                              |
| T056 | S8     | P2       | Feature   | Real-Time Attraction Alerts                  | Notify if booked venue changes hours or closes (Google Places)                     |
| T057 | S8     | P2       | Feature   | Weather-Aware Scheduling                     | Detect rain forecast; surface indoor alternatives automatically                    |
| T058 | S8     | P2       | Feature   | Conflict Detection                           | Flag if attraction is closed on the day it's scheduled                             |

---

## Sprint Roadmap

### Sprint 1 — Foundation (Weeks 1–2)

- [x] **T001** — ~~Shared TypeScript types (`src/types/index.ts`)~~ COMPLETE ✓
- [x] **T002** — ~~Next.js 15 project, TypeScript, Tailwind, shadcn/ui, Vercel deploy~~ COMPLETE ✓
- [x] **T003** — ~~Environment config, Supabase client, Anthropic client~~ COMPLETE ✓
- [ ] **T004** — Supabase schema (profiles, trips, trip_blocks, share_links, affiliate_clicks)
- [ ] **T005** — Supabase Auth (Google + magic link, protected route middleware)
- [ ] **T006** — Profile onboarding flow (post-signup preference wizard)

- [ ] **T006** — Settings profile page (`/settings/profile` — reuse onboarding wizard)

### Sprint 2 — Intake & AI Core (Weeks 2–3)

- [ ] **T007** — Intake wizard steps 1 & 2 (Flights + Accommodation)
- [ ] **T008** — Intake wizard steps 3 & 4 (Fixed Events + Preferences, pre-filled from profile)
- [ ] **T009** — AI prompt builder (pure function: intake + profile → prompt strings)
- [ ] **T010** — AI generation API route (auth check, stream, save to Supabase)
- [ ] **T011** — Streaming output handler and progressive section rendering

### Sprint 3 — Calendar Grid & Editing (Weeks 3–4)

- [ ] **T012** — Trip viewer page (`/trips/[id]` — assembles all components)
- [ ] **T013** — 10-color calendar grid component
- [ ] **T014** — Anchor identification and lock/unlock system
- [ ] **T015** — Free time blocks with collapsible suggestion drawer
- [ ] **T016** — Transport block shading (5 ground sub-shades + deep amber)
- [ ] **T017** — Drag-and-drop core (dnd-kit setup, locked rules, empty-slot drops)
- [ ] **T018** — Drag-and-drop conflict UI (swap/push modal, gap-too-small handling)
- [ ] **T019** — AI re-optimization after drag (transport recalculation)
- [ ] **T020** — Undo history (last 10 actions)

### Sprint 4 — Output, Affiliates & Launch (Week 5)

- [ ] **T021** — Output Section 02: day-by-day walkthrough (prose + anchor callouts)
- [ ] **T022** — Output Sections 03–05: food, money, language
- [ ] **T023** — Output Sections 06–07: culture & etiquette, logistics
- [ ] **T024** — Affiliate link injection (Booking.com, Viator, Klook, Skyscanner, OpenTable)
- [ ] **T025** — Affiliate click tracking to DB
- [ ] **T026** — Excel export via SheetJS
- [ ] **T027** — Settings / profile edit page (`/settings/profile`)
- [ ] **T028** — E2E smoke test with real API
- [ ] **T029** — Production deploy, 10 beta users

### Sprint 5 — Multi-Destination & Sharing (Weeks 6–10)

- [ ] **T030** — Saved trips dashboard
- [ ] **T031** — Shareable UUID links (generate slug + save to DB)
- [ ] **T032** — Public share page (`/share/[slug]` read-only view)
- [ ] **T033** — PDF export via Puppeteer
- [ ] **T034** — Multi-destination intake UI ("Add another city" form flow)
- [ ] **T035** — Multi-destination output (per-city sections 03–07, transit days)
- [ ] **T036** — Transit day blocks for inter-city legs
- [ ] **T037** — Block regeneration (3 AI alternatives)
- [ ] **T038** — Cross-day drag-and-drop
- [ ] **T039** — AviationStack flight number lookup
- [ ] **T040** — Emergency re-route modification

### Sprint 6 — Preference Engine, Monetization & Anonymous Flow (Weeks 11–16)

- [ ] **T041** — Post-trip rating email (Resend)
- [ ] **T042** — Block rating UI (1–5 stars)
- [ ] **T043** — Thumbs up/down per-block feedback
- [ ] **T044** — Preference profile learning from ratings and implicit signals
- [ ] **T045** — Personalized generation (updated profile injected into prompt)
- [ ] **T046** — Stripe setup & webhooks (products, prices, webhook handler)
- [ ] **T047** — Tier gating (generation count, free tier limits, upgrade CTA)
- [ ] **T048** — Pricing page & billing UI (`/upgrade`, `/settings/billing`)
- [ ] **T049** — Anonymous taste generation (1 gen, view-only, upsell at output bottom)
- [ ] **T050** — Group trip view

### Sprint 7 — Mobile App (Weeks 17–28)

- [ ] **T051** — React Native + Expo scaffold (iOS + Android)
- [ ] **T052** — Live trip mode (current block highlighted)
- [ ] **T053** — Voice modification input
- [ ] **T054** — Push notifications
- [ ] **T055** — Offline mode (SQLite cache)

### Sprint 8 — Live Intelligence (Post-Launch)

- [ ] **T056** — Real-time attraction alerts (Google Places API)
- [ ] **T057** — Weather-aware scheduling (rain forecast → indoor alternatives)
- [ ] **T058** — Conflict detection (closed-day detection)

---

## Verified Complete

- [x] **T003** — Environment & Config — COMPLETE (2026-03-09). Installed `@supabase/supabase-js@2.99.0`, `@supabase/ssr@0.9.0`, `@anthropic-ai/sdk@0.78.0`. Created `src/lib/supabase/client.ts` (browser client via `createBrowserClient` with public anon key), `src/lib/supabase/server.ts` (server client via `createServerClient` with cookie-based auth + `createServiceClient` for admin operations using `SUPABASE_SERVICE_ROLE_KEY`), `src/lib/supabase/middleware.ts` (session refresh helper for Next.js middleware — used by T005), `src/lib/anthropic.ts` (Anthropic SDK instance export), `src/lib/affiliates.ts` (URL builders for Booking.com, Viator, Klook, Skyscanner, OpenTable with affiliate ID injection). All env vars already documented in `.env.example` from T002. All checks pass: `npm run type-check`, `npm run lint`, `npm run build`.

- [x] **T001** — Shared TypeScript Types — COMPLETE (2026-03-09). Created `src/types/index.ts` with all canonical type definitions: `BudgetLevel`, `TravelPace`, `GroupSize` literal types; `ActivityKey` (16 categories) and `ACTIVITY_CARDS` constant array; `UserProfile` interface (maps to Supabase `profiles` table with tier, Stripe, and generation tracking fields); `FlightInfo`, `AccommodationInput`, `DestinationInput`, `FixedEvent`, `TripPreferences`, `IntakeFormState` (intake wizard types); `BlockCategory` (12 categories), `TripBlock`, `BlockSuggestion`, `TripDay` (calendar grid types); all 7 `GeneratedSection` interfaces with supporting sub-types (`WalkthroughDay`, `AnchorCallout`, `FoodItem`, `DailyBudget`, `Phrase`, `EmergencyNumber`); `GeneratedTrip` combining all sections; `Trip` (Supabase row type); `BLOCK_COLOR` map (`BlockCategory` → Tailwind class). All checks pass: `npm run type-check`, `npm run lint`, `npm run build`.

- [x] **T002** — Project Scaffold — COMPLETE (2026-03-09). Scaffolded Next.js 16.1.6 with TypeScript, Tailwind CSS v4, App Router, Turbopack, ESLint, and `src/` directory via `create-next-app`. Initialized shadcn/ui v4 and installed 9 components: button, card, input, label, select, textarea, badge, progress, toggle. Installed `posthog-js` (init deferred). Added 19 TripCraft block color tokens to `@theme inline` block in `globals.css` (block-grey, block-white, 5 yellow transport shades, block-amber, block-purple, 3 orange shades, block-blue, 3 green shades, block-teal, 2 pink shades). Configured `next.config.ts` with `turbopack.root` using `resolve(__dirname)` for absolute path. Updated `layout.tsx` metadata: title "TripCraft — AI Travel Itinerary Planner". Created placeholder `page.tsx` with shadcn Card + Button verifying component library. Created `.env.example` with 11 Phase 1 env vars (Anthropic, Supabase, affiliate IDs, PostHog). Added `"type-check": "tsc --noEmit"` script. Fixed `.gitignore` to allow `.env.example` (scaffold's `.env*` pattern was too broad). Restored README.md, TODO.md, `.claude/`, `.vscode/` after scaffold. All checks pass: `npm run build`, `npm run lint`, `npm run type-check`.

---

## Detailed Tasks

---

### T001: Shared TypeScript Types

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Setup |
| Prerequisites | T002 |
| Description | Define all shared TypeScript types in a single canonical file. Every other task imports from here — never define types inline in component files. |

**Commit message:** `feat: add shared TypeScript types`

**File to create:** `src/types/index.ts`

**What to put here:** All types are documented in `CLAUDE.md` under "Shared TypeScript Types". Copy them verbatim into this file. Types include:
- `BudgetLevel`, `TravelPace`, `GroupSize`
- `UserProfile`
- `ActivityKey`, `ACTIVITY_CARDS`
- `IntakeFormState` and all sub-types (`DestinationInput`, `AccommodationInput`, `FixedEvent`, `TripPreferences`, `FlightInfo`)
- `BlockCategory`, `TripBlock`, `BlockSuggestion`, `TripDay`
- `GeneratedTrip` and all section types (`GeneratedSection01` through `GeneratedSection07`)
- `Trip` (Supabase row)

**Verification:** `npm run type-check` passes with zero errors.

**README update:** None — types are an internal implementation detail.

---

### T002: Project Scaffold

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Setup |
| Description | Bootstrap the Next.js project with all tooling configured |

**Commit message:** `chore: bootstrap Next.js 15 project with Tailwind and shadcn`

**Steps:**
```bash
npx create-next-app@latest tripcraft --typescript --tailwind --app --src-dir
cd tripcraft
npx shadcn@latest init
npx shadcn@latest add button card input label select textarea badge progress toggle
npm install posthog-js
```

**Files to configure:**
- `next.config.ts` — enable streaming, set env var exposure
- `tailwind.config.ts` — add TripCraft color tokens for all 10 block types
- `src/app/layout.tsx` — root layout with font and metadata
- `src/app/page.tsx` — placeholder landing / login redirect
- `.env.example` — document all required env vars
- `vercel.json` — project config (if needed)

**Verification:** `npm run dev` starts without errors. `npm run build` passes. Deploys to Vercel preview URL.

**README update:** Replace the `git clone` URL with the real repo URL once created. Add the Vercel preview URL under a `## Live Preview` section.

---

### T003: Environment & Config

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Config |
| Prerequisites | T002 |
| npm | `npm install @supabase/supabase-js @supabase/ssr @anthropic-ai/sdk` |
| Description | Set up environment variable handling, Supabase client, and Anthropic client |

**Commit message:** `feat: add Supabase and Anthropic client initialization`

**Files to create:**
- `src/lib/supabase/client.ts` — browser Supabase client (`NEXT_PUBLIC_` keys)
- `src/lib/supabase/server.ts` — server Supabase client (`SUPABASE_SERVICE_ROLE_KEY`)
- `src/lib/anthropic.ts` — Anthropic SDK instance, export `anthropic`
- `src/lib/affiliates.ts` — Affiliate URL builders per partner (Booking.com, Viator, Klook, Skyscanner, OpenTable)

**Environment variables required for Phase 1:**
```
ANTHROPIC_API_KEY
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
BOOKING_COM_AFFILIATE_ID
VIATOR_AFFILIATE_ID
KLOOK_AFFILIATE_ID
SKYSCANNER_AFFILIATE_ID
OPENTABLE_AFFILIATE_ID
NEXT_PUBLIC_POSTHOG_KEY
NEXT_PUBLIC_POSTHOG_HOST
```

**README update:** Expand the Environment Variables section to list all Phase 1 env vars with one-line descriptions.

---

### T004: Supabase Schema

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T003 |
| npm | None — schema applied via Supabase dashboard SQL editor |
| Description | Create all Supabase tables with RLS policies |

**Commit message:** `feat: add Supabase schema and RLS policies`

**Tables:**

```sql
-- User preference profiles (extends Supabase auth.users)
profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  activity_interests TEXT[] DEFAULT '{}',
  budget_level TEXT,
  travel_pace TEXT,
  dietary_restrictions TEXT[],
  dietary_notes TEXT,
  onboarding_complete BOOLEAN DEFAULT false,
  tier TEXT DEFAULT 'free',                    -- free | pro | one-time
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT,
  subscription_status TEXT,                    -- active | canceled | past_due
  generation_count INT DEFAULT 0,              -- resets monthly for free tier
  one_time_credits INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
)

trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles ON DELETE CASCADE,
  destinations JSONB NOT NULL,
  input_snapshot JSONB NOT NULL,
  output JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
)

trip_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips ON DELETE CASCADE,
  destination_id TEXT,
  day INT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  cost_local NUMERIC,
  is_anchor BOOLEAN DEFAULT false,
  affiliate_url TEXT,
  rating INT,
  thumbs TEXT
)

share_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL,
  is_public BOOLEAN DEFAULT true,
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
)

affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  trip_id UUID REFERENCES trips,
  block_id UUID REFERENCES trip_blocks,
  user_id UUID REFERENCES profiles,
  partner TEXT NOT NULL,
  clicked_at TIMESTAMPTZ DEFAULT now()
)
```

**RLS policies:**
- `profiles`: users can read and update only their own row
- `trips`: users can CRUD only their own trips
- `trip_blocks`: users can CRUD blocks belonging to their own trips
- `share_links`: publicly readable when `is_public = true`; writable only by trip owner
- `affiliate_clicks`: insert-only for authenticated users

**Trigger:** Create a `profiles` row automatically when a new user signs up via `auth.users` trigger.

**README update:** Add a `## Tech Stack` section listing: Next.js 15, Tailwind CSS, shadcn/ui, Supabase.

---

### T005: Supabase Auth

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Auth |
| Prerequisites | T003, T004 |
| npm | None — included in `@supabase/supabase-js` |
| Tests | `src/__tests__/auth.test.ts` — test middleware redirects unauthenticated requests to /login |
| Description | Google OAuth + magic link auth with session handling and protected route middleware |

**Commit message:** `feat: add Supabase Auth with Google and magic link`

**Files to create:**
- `src/middleware.ts` — intercept all non-public routes, redirect to `/login` if no session
- `src/app/(auth)/login/page.tsx` — login page with Google button + magic link email form
- `src/app/(auth)/register/page.tsx` — register page (same UI as login; Supabase handles it)
- `src/app/auth/callback/route.ts` — Supabase OAuth callback handler

**Protected routes:** `/dashboard`, `/trips/new`, `/trips/[id]`, `/settings`

**Public routes:** `/`, `/login`, `/register`, `/share/[slug]`, `/try`

**Post-login redirect logic:**
- If `profiles.onboarding_complete = false` → redirect to `/onboarding`
- Otherwise → redirect to `/dashboard`

**README update:** Add a `## Auth` section: *"Sign in with Google or magic link email. Account required to generate itineraries."*

---

### T006: Profile Onboarding Flow

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T005, T001 |
| Tests | `src/__tests__/onboarding.test.tsx` — test completing all steps sets `onboarding_complete = true`; test skip flow |
| Description | Post-signup preference wizard that populates the user's profile and pre-fills every future intake wizard |

**Commit message:** `feat: add profile onboarding wizard`

**Route:** `/onboarding`

**Flow:** Single-page stepped form. 4 steps, ~2–3 minutes.

**Step 1 — Activity Interests:** 16-card tap-to-toggle grid.
**Step 2 — Budget:** 4 radio cards: Backpacker ($) / Mid-Range ($$) / Comfortable ($$$) / Splurge ($$$$)
**Step 3 — Travel Pace:** 3 radio cards: Relaxed / Balanced / Packed — each shows a day-in-the-life description
**Step 4 — Dietary Restrictions:** Multi-select chips + free text

**On complete:** `PATCH /profiles` → set `onboarding_complete = true` → redirect to `/dashboard`

**Skip option:** "Skip for now" link at each step. Still sets `onboarding_complete = true`; preference fields remain null. Users update later via T027.

**Profile editing:** Same 4-step UI is reused on `/settings/profile` (T027).

**README update:** Add a `## Getting Started` section: *"After signing up, complete a 2-minute preference profile. These pre-fill every future trip."*

---

### T007: Intake Wizard — Steps 1 & 2

| Field | Value |
|---|---|
| Sprint | S2 — Intake & AI Core |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T005, T000 |
| npm | `npm install @radix-ui/react-toggle-group` (if not already via shadcn) |
| Tests | `src/__tests__/intake-steps-1-2.test.tsx` — test conditional field display; test multi-destination card addition |
| Description | Build the first two steps of the intake wizard: Flights and Accommodation |

**Commit message:** `feat: add intake wizard steps 1 and 2`

**Component structure:**
```
src/components/intake/
├── IntakeWizard.tsx           -- Parent with step state and IntakeFormState context
├── StepIndicator.tsx          -- Step 1/2/3/4 progress dots
├── steps/
│   ├── StepFlights.tsx        -- Step 1
│   └── StepAccommodation.tsx  -- Step 2
```

**Step 1 — Flights:**
- Destination city input (required)
- "Have you bought flights?" toggle: Yes / No / Still deciding
- If Yes: flight number (optional) OR manual time entry
- If No: approximate date range + number of days

**Step 2 — Accommodation:**
- "Have you booked accommodation?" toggle: Yes / No
- If Yes: name + address text fields
- If No: budget preference + style selector (hostel / budget hotel / mid-range / boutique / luxury)

**State:** All wizard state lives in a single `IntakeFormState` object in React context.

**README update:** Add a `## How It Works` section with the first 2 steps of the flow.

---

### T008: Intake Wizard — Steps 3 & 4

| Field | Value |
|---|---|
| Sprint | S2 — Intake & AI Core |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T007, T006 |
| Tests | `src/__tests__/intake-steps-3-4.test.tsx` — test profile pre-fill populates correct card selections; test Step 4 changes do not update the profile row in Supabase |
| Description | Fixed Events repeater and Preferences card grid, pre-filled from the user's profile |

**Commit message:** `feat: add intake wizard steps 3 and 4 with profile pre-fill`

**Step 3 — Fixed Events:**
- Prominent "Skip" button — most users have zero events
- Repeatable event card: Name, Date, Start time, End time, Location, Notes
- "Add another event" button
- Each event becomes a BLUE block with optional 🔒 anchor lock

**Step 4 — Preferences (pre-filled from profile):**
- Load user's `profiles` row on wizard mount; pre-select activity interests, budget, pace, dietary
- User reviews and tweaks per-trip — changes do NOT update their profile
- Additional trip-specific fields: Things to avoid, Must-include requests, Energy notes, Group size

**Pre-fill UX:** Banner at top of Step 4: *"Pre-filled from your profile — adjust anything for this trip."*

**README update:** Add step 3 to How It Works: *"Review your preferences (pre-filled from your profile) and adjust anything for this trip."*

---

### T009: AI Prompt Builder

| Field | Value |
|---|---|
| Sprint | S2 — Intake & AI Core |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T001 |
| Tests | `src/__tests__/prompt-builder.test.ts` — test system prompt includes all 10 AI rules; test user prompt serializes fixed events correctly; test arrival-fatigue signal present when arrival time is afternoon |
| Description | Pure function that takes IntakeFormState + UserProfile and returns system and user prompt strings for Claude. No API calls — pure transformation. |

**Commit message:** `feat: add AI prompt builder`

**File:** `src/lib/prompt.ts`

**Exports:**
```typescript
export function buildSystemPrompt(profile: UserProfile): string
export function buildUserPrompt(intake: IntakeFormState): string
```

**System prompt must include all 10 rules:**
1. Day 1 must reflect arrival fatigue if arriving afternoon or later
2. Never schedule back-to-back activities without a transport or buffer block
3. Fixed events are immovable — build the entire day around them, never modify their times
4. Every block must have a cost estimate in local currency — never USD, never omit
5. Factor jet lag for flights crossing more than 5 timezone hours
6. Last day must account for hotel checkout time and airport transfer buffer
7. Suggest hawker stalls and local food unless budget is 'splurge'
8. Transport durations must be realistic — use actual MRT/taxi times, not straight-line estimates
9. If travel pace is 'relaxed', leave at least 2 contiguous free-time hours per day
10. If nightlife is in interests, do not end every day at 9 PM

**System prompt also injects user profile:** activity interests, budget level, travel pace, dietary restrictions.

**User prompt structure:** Destination(s), dates, flights, accommodation, fixed events (labeled IMMOVABLE), trip-specific preference overrides.

**Output format instruction:** Instruct Claude to respond in the JSON structure matching `GeneratedTrip` from `@/types`. Include the full schema as a TypeScript type comment.

**README update:** None — prompt builder is an internal implementation detail.

---

### T010: AI Generation API Route

| Field | Value |
|---|---|
| Sprint | S2 — Intake & AI Core |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T009, T002, T004 |
| Tests | `src/__tests__/api-generate.test.ts` — test 401 when no session; test 429 when generation limit exceeded; test T009 prompt builder is called with correct args |
| Description | Next.js API route: auth check, call prompt builder, stream Claude response back to client, save completed trip to Supabase |

**Commit message:** `feat: add AI generation API route with streaming`

**File:** `src/app/api/generate/route.ts`

**Flow:**
1. Receive `POST` with full `IntakeFormState` JSON body
2. Auth check — 401 if no session
3. Generation limit check — 403 if free tier user has exceeded 2/month
4. Load user's preference profile from Supabase
5. Call `buildSystemPrompt(profile)` and `buildUserPrompt(intake)` from T009
6. Call `anthropic.messages.stream()` with `claude-sonnet-4-20250514`
7. Return `ReadableStream` with `Content-Type: text/event-stream`
8. On stream complete: save trip + blocks to Supabase, decrement generation credit

**README update:** Add step 4 to How It Works: *"TripCraft generates a complete trip plan — a color-coded schedule, plus food guide, money tips, language phrases, culture notes, and logistics. Streams in 15–25 seconds."* Add `claude-sonnet-4-20250514` to Tech Stack.

---

### T011: Streaming Output Handler

| Field | Value |
|---|---|
| Sprint | S2 — Intake & AI Core |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T010 |
| Tests | `src/__tests__/useGenerationStream.test.ts` — test skeleton shows while streaming; test each section renders on key completion; test error state on failed stream |
| Description | Parse the streamed token response and render each section as it completes |

**Commit message:** `feat: add streaming output handler and progressive section rendering`

**File:** `src/hooks/useGenerationStream.ts`

**Logic:**
- Open `fetch` with `ReadableStream` to `/api/generate`
- Accumulate tokens into a buffer
- Attempt `JSON.parse()` on completed section keys — catch partial JSON gracefully
- When a complete section key is parseable, dispatch to the section renderer
- Show skeleton loaders for sections still pending
- On stream complete: mark generation done, show export + share buttons

**Section render order:** `01_grid` → `02_walkthrough` → `03_food` → `04_money` → `05_language` → `06_culture` → `07_logistics`

**README update:** None — streaming is an implementation detail already covered by the How It Works step in T010.

---

### T012: Trip Viewer Page

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T011 |
| Tests | `src/__tests__/TripViewer.test.tsx` — test page loads a trip by ID from Supabase; test generation state shows loading UI; test completed trip shows calendar and all section tabs |
| Description | The `/trips/[id]` page — the main screen users spend their time on. Assembles the streaming output handler, calendar grid, all 7 output section renderers, and export buttons into one cohesive page. |

**Commit message:** `feat: add trip viewer page`

**File:** `src/app/trips/[id]/page.tsx`

**Page structure:**
```
/trips/[id]
├── TripHeader (trip title, destination(s), dates, share button)
├── GenerationStatus (shown while status = 'generating': progress bar + streaming section previews)
├── CalendarGrid (shown once generation complete)
├── SectionNav (tab bar: Walkthrough | Food | Money | Language | Culture | Logistics)
├── SectionBody (renders active section)
└── ExportBar (Excel download, PDF download — gated by tier)
```

**Loading states:**
- If `trip.status = 'generating'`: show progress bar with streaming section previews (uses `useGenerationStream`)
- If `trip.status = 'complete'`: load `trip.output` from DB and render directly (no streaming needed)
- If trip not found or not owned by current user: 404

**README update:** None — the trip viewer is the core product, already described in How It Works.

---

### T013: Calendar Grid Component

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T011 |
| npm | `npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities` |
| Tests | `src/__tests__/CalendarGrid.test.tsx` — test correct color class applied per BlockCategory; test block spans correct row range |
| Description | The core visual schedule grid — 10 colors, 30-min rows, one column per day |

**Commit message:** `feat: add 10-color calendar grid component`

**File:** `src/components/calendar/CalendarGrid.tsx`

**Layout:** CSS Grid. Rows = 30-minute increments (48 per day). Columns = one per trip day. Fixed time gutter on the left. Sticky header row with day labels and dates.

**Block rendering:** Each block spans the appropriate row range. Shows title, emoji, cost estimate. Tooltip on hover shows full description + tip.

**Color tokens (add to `tailwind.config.ts`):**
```
block-grey, block-white, block-yellow-walk, block-yellow-transit,
block-yellow-ride, block-yellow-drive, block-yellow-ferry,
block-amber, block-purple, block-orange-lt, block-orange,
block-orange-dk, block-blue, block-green-lt, block-green,
block-green-dk, block-teal, block-pink-lt, block-pink
```

**README update:** Add a `## Color System` section with the full 10-color table. Add step 5 to How It Works: *"Your itinerary is shown as a color-coded calendar grid."*

---

### T014: Anchor & Lock System

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T013 |
| Tests | `src/__tests__/LockSystem.test.tsx` — test flight blocks cannot be unlocked; test anchor unlock shows confirmation dialog; test max anchor count enforced per pace setting |
| Description | 🔒 icon display, lock/unlock confirmation flow, AI anchor identification |

**Commit message:** `feat: add anchor identification and lock/unlock system`

**Rules:**
- AI identifies anchors in generation JSON (`is_anchor: true`)
- Flights are ALWAYS locked — cannot be unlocked under any circumstance
- Anchors shown in their category color + 🔒 icon (not a separate color)
- Tap 🔒 on anchor → confirmation dialog: *"This is one of today's highlights — are you sure you want to move it?"*
- Tap 🔒 on flight → toast: *"Flight times can't be changed here"*
- Max 2 anchors for Relaxed pace; max 3 for Balanced/Packed

**README update:** Add one line to Color System: *"Anchor activities are shown with a 🔒 lock icon in their category color."*

---

### T015: Free Time Blocks

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T013 |
| Tests | `src/__tests__/FreeTimeBlock.test.tsx` — test drawer collapsed by default; test tapping suggestion converts block to correct category |
| Description | Purple free-time blocks with collapsible suggestion drawer (3–5 AI-ranked alternatives) |

**Commit message:** `feat: add free time blocks with suggestion drawer`

**Interaction:**
- Collapsed by default; tap header to expand
- Tap a suggestion → converts purple block to that activity's category color + recalculates transport
- Suggestions pre-generated at trip creation time (not on-demand)
- Ranked by: (1) preference profile fit, (2) proximity, (3) time required vs. available window

**README update:** Add to How It Works step 5: *"Purple blocks are free time — tap them to see AI-suggested activities ranked by your interests."*

---

### T016: Transport Block Shading

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T013 |
| Tests | `src/__tests__/blockColors.test.ts` — test all 19 BlockCategory values map to a defined Tailwind class in BLOCK_COLOR |
| Description | Five ground transport shades plus deep amber for flights |

**Commit message:** `feat: add transport block shading system`

**Ground transport shades (all light yellow family):**
- ☀️ Lightest — Walking (under 20 min)
- 🚇 Light — Public transit (MRT, subway, bus)
- 🚕 Medium — Taxi or rideshare (Grab, Uber)
- 🚗 Gold — Rental car / self-driving
- 🛳️ Amber-adjacent — Ferry or boat

**Flying:** Deep amber — always locked, always shows: flight number, route, departure/arrival times, duration.

**Block title always specifies mode** — the shade is a visual hint, the text confirms it.

**README update:** None — transport shading is a detail of the Color System already covered.

---

### T017: Drag-and-Drop — Core

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T012, T013 |
| npm | Already installed in T013 |
| Tests | `src/__tests__/DragDrop.test.tsx` — test locked blocks are not draggable; test drop onto white slot moves block; test drop onto flight block is rejected; test dragEnd triggers undo snapshot and reoptimize call |
| Description | dnd-kit setup, draggable/locked block rules, drop onto empty white/purple slots. The happy path — no conflicts. |

**Commit message:** `feat: add drag-and-drop core mechanics`

**Draggable blocks:** White, Purple, Orange (unlocked), Blue (unlocked), Green (unlocked), Teal, Pink

**Not draggable:** Any 🔒 block, Deep amber (flights always locked), Grey (dead time)

**Drop behavior (this task — empty slots only):**
- White slot → block moves, transport auto-recalculates (T019)
- Purple slot → block moves, free time shrinks or is absorbed

**On drag end:** (1) Snapshot current block array state into undo history (T020). (2) Fire T019 re-optimization call for the affected day.

**README update:** Add step 6 to How It Works: *"Drag any block to a new time slot. Transport times recalculate automatically. Last 10 moves are undoable."*

---

### T018: Drag-and-Drop — Conflict UI

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T016 |
| Tests | `src/__tests__/DragDropConflicts.test.tsx` — test swap modal appears when dropping onto occupied block; test "push down" moves subsequent blocks; test gap-too-small toast appears |
| Description | Conflict handling for drops onto occupied slots: swap/push modal, gap-too-small resolution. |

**Commit message:** `feat: add drag-and-drop conflict handling UI`

**Conflict scenarios:**

1. **Drop onto occupied block** → Modal: *"Swap positions with [block title]?"* or *"Push [block title] and everything after it down"*

2. **Gap too small** → Toast: *"Not enough room for [block]. Push everything down?"* with "Push down" / "Cancel" action buttons.

3. **Cross-day drag** — out of scope until T038. Reject with toast: *"Cross-day moves are coming soon."*

**README update:** None — conflict handling is a detail of the drag step already in How It Works.

---

### T019: AI Re-optimization

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T010, T016 |
| Tests | `src/__tests__/api-reoptimize.test.ts` — test 401 without session; test debounce fires only on dragEnd |
| Description | Lightweight Claude call after each drag to recalculate transport and flag conflicts |

**Commit message:** `feat: add AI re-optimization after drag`

**File:** `src/app/api/reoptimize/route.ts`

**Input:** Affected day's block array before + after positions

**Output:** Updated transport block durations, non-blocking conflict warnings (toast)

**Constraints:** Target < 5 seconds. Prompt covers only the affected day — not the full trip. Debounce: fire on `dragEnd` only.

**README update:** None — re-optimization is an implementation detail of the drag-and-drop step.

---

### T020: Undo History

| Field | Value |
|---|---|
| Sprint | S3 — Calendar Grid & Editing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T016 |
| Tests | `src/__tests__/useUndoHistory.test.ts` — test stack max 10; test undo restores previous block state; test button disabled when stack empty |
| Description | Last 10 drag actions undoable via Cmd+Z or visible Undo button |

**Commit message:** `feat: add undo history for drag actions`

**Implementation:** `history` stack (max 10) in React state. Each entry = full block array snapshot before the drag. Cmd+Z and Undo button both pop the stack and restore.

**UI:** Small "Undo" button top-right of the calendar. Disabled when stack is empty. Label shows last action: *"Undo: Moved 'Lunch at Hawker Centre'"*.

**README update:** None — undo is already covered in the How It Works drag step.

---

### T021: Output Section 02 — Day-by-Day Walkthrough

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T011, T013 |
| Tests | `src/__tests__/Section02Walkthrough.test.tsx` — test each day renders its label; test anchor blocks get callout treatment; test skeleton shown when data is null |
| Description | Prose narrative renderer for Section 02. Each day gets a heading and narrative paragraph; anchor blocks get a distinct callout card with arrival advice. |

**Commit message:** `feat: add Section 02 day-by-day walkthrough renderer`

**File:** `src/components/output/Section02Walkthrough.tsx`

**Layout per day:**
- Day heading: *"Day 2 — Wednesday Jun 4 · Gardens by the Bay + Chinatown"*
- Prose paragraph: 2–4 sentences of narrative from the AI
- Anchor callout cards: for each block where `is_anchor = true`:
  ```
  🔒 [Emoji] [Title]
  [Time range] · [Cost estimate]
  [Tip from the AI — practical arrival advice, what to know]
  ```
- Non-anchor blocks mentioned inline in the prose only

**Streaming:** Shimmer skeleton for day heading + prose while streaming. Anchor callout cards appear as data completes.

**README update:** Add a `## Output` section listing all 7 sections.

---

### T022: Output Sections 03–05

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T021 |
| Tests | `src/__tests__/OutputSections03to05.test.tsx` — test each section renders with valid mock data; test skeleton shown when null; test phrase table has correct column order |
| Description | Renderers for food guide, money & budget, and language guide — all primarily card or table-based. |

**Commit message:** `feat: add output section renderers 03 through 05`

`Section03Food` — card grid (2 cols desktop, 1 mobile). Each card: dish name, description, where to find, price range.

`Section04Money` — cash recommendation, ATM advice (DCC warning), card acceptance, daily budget table (user's tier highlighted), scam warnings list.

`Section05Language` — language + English prevalence summary, script overview (non-Latin destinations), phrase table (3 cols: phrase / phonetic / meaning, 15–20 rows), common signage grid.

**README update:** None — Output section already added in T021.

---

### T023: Output Sections 06–07

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T021 |
| Tests | `src/__tests__/OutputSections06to07.test.tsx` — test tipping section renders both "expected" and "offensive" content; test emergency numbers table renders all entries |
| Description | Renderers for culture & etiquette and logistics — the two most destination-specific advisory sections. |

**Commit message:** `feat: add output section renderers 06 and 07`

`Section06Culture` — tipping (when expected AND when offensive), dining rules, dress codes per context (temples/restaurants/beach), photography off-limits, bargaining norms, taboos.

`Section07Logistics` — SIM card recommendation, transport card, power adapter (plug type + voltage), visa requirements (US passport default), safety tips, emergency numbers table.

**README update:** None — Output section already added in T021.

---

### T024: Affiliate Link Injection

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T021, T003 |
| Tests | `src/__tests__/affiliates.test.ts` — test each partner URL builder produces a valid URL with correct affiliate ID; test 'partner link' label present on every affiliated block |
| Description | Embed affiliate partner URLs into relevant blocks at render time |

**Commit message:** `feat: add affiliate link injection to itinerary blocks`

**Partner mapping:**
- Teal (accommodation) → Booking.com search URL for destination + dates
- Green (activities) → Viator search URL for activity name + destination
- Yellow (transport passes) → Klook search URL
- Amber (flights — if no ticket yet) → Skyscanner search URL
- Orange (restaurants) → OpenTable / TheFork reservation link where available

**Link display:** *"🔗 Book"* badge on eligible blocks. *"partner link"* label for legal disclosure. Click: open new tab + log click to T025. Non-blocking.

**README update:** Add a `## Booking Links` section describing the affiliate partners.

---

### T025: Affiliate Click Tracking

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T025 |
| Tests | `src/__tests__/api-affiliate-click.test.ts` — test row inserted into affiliate_clicks; test failure does not block affiliate link from opening |
| Description | Log affiliate link clicks to the affiliate_clicks table for revenue attribution |

**Commit message:** `feat: add affiliate click tracking`

**File:** `src/app/api/affiliate-click/route.ts`

**On click:** Fire `POST /api/affiliate-click` with `{ block_id, trip_id, partner }` before opening the partner URL. Non-blocking — failure never prevents link from opening.

**README update:** None — click tracking is an internal implementation detail.

---

### T026: Excel Export

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Export |
| Prerequisites | T027, T003 |
| npm | `npm install xlsx` |
| Tests | `src/__tests__/excel.test.ts` — test output file is a valid xlsx; test cell colors match BLOCK_COLOR map; test one sheet per day |
| Description | Client-side .xlsx export matching the calendar grid colors via SheetJS |

**Commit message:** `feat: add color-coded Excel export via SheetJS`

**File:** `src/lib/export/excel.ts`

**Output:** One sheet per day. Columns: Time, Category, Title, Description, Cost (local). Cell background colors match the 10-color system. Merged cells for multi-slot blocks. Header row with day label and date. Final sheet: Food Guide summary table.

**README update:** Add a `## Export` section: *"Download your itinerary as a color-coded Excel file (.xlsx). One sheet per day."*

---

### T027: Settings / Profile Edit Page

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T007, T005 |
| Tests | `src/__tests__/SettingsProfile.test.tsx` — test page loads current profile values pre-filled; test saving updates the profiles row; test each field matches onboarding wizard fields exactly |
| Description | `/settings/profile` — lets users update their activity interests, budget, pace, and dietary preferences after onboarding. Reuses the same 4-step UI built in T006. |

**Commit message:** `feat: add settings profile edit page`

**File:** `src/app/settings/profile/page.tsx`

**Implementation:** This is mostly a composition task. The 4 onboarding step components (ActivityInterests, BudgetSelector, PaceSelector, DietaryRestrictions) already exist from T006. This page:
1. Loads the current user's `profiles` row on mount
2. Renders all 4 steps as a single scrollable page (not a stepped wizard — users want to see everything at once when editing)
3. "Save changes" button at the bottom — `PATCH /profiles` on submit
4. Toast on success: *"Profile updated — your next trip will be pre-filled with these preferences."*

**README update:** Add to the Auth/Getting Started section: *"Update your preferences anytime from Settings → Profile."*

---

### T028: E2E Smoke Test

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P1 — High |
| Type | Testing |
| Description | Full generation test with real Anthropic API to verify all 7 sections render correctly |

**Commit message:** `test: add E2E smoke test with real API`

**Script:** `scripts/smoke_test.ts`

- Hardcoded `IntakeFormState` (3-day Singapore trip as the canonical test case)
- Calls `/api/generate` and streams the response
- Verifies all 7 section keys are present in output
- Verifies block count > 0, anchor count 2–3, at least one transport block per day
- Logs total tokens used and estimated cost

**README update:** None — smoke test is a development tool.

---

### T029: Beta Launch

| Field | Value |
|---|---|
| Sprint | S4 — Output, Affiliates & Launch |
| Priority | P0 — Critical |
| Type | Launch |
| Description | Deploy to production, share with 10 beta users, set up monitoring |

**Commit message:** `chore: production deploy for beta launch`

**Checklist:**
- [ ] All env vars set in Vercel production environment
- [ ] Supabase RLS policies verified with a test account
- [ ] Auth flow tested end-to-end: signup → onboarding → generate → export
- [ ] PostHog firing on: `signup_complete`, `onboarding_complete`, `generation_started`, `generation_complete`, `excel_exported`, `affiliate_clicked`
- [ ] Error boundary on generation and calendar views
- [ ] Rate limiting on `/api/generate` (max 5 req/min per user)
- [ ] Smoke test passes against production URL
- [ ] Share with 10 beta testers with feedback collection channel

**Success metrics (30 days post-launch):**
- 500 itineraries generated
- 40% Excel export rate
- 25% return visit within 30 days

**README update:** Remove *"Status: In development"* → add live URL, Features section, Limitations (Beta) section.

---

### T030: Saved Trips Dashboard

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T004, T005 |
| Description | List of past and upcoming trips, re-openable and re-exportable |

---

### T031: Shareable UUID Links

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Backend |
| Prerequisites | T004 |
| Description | Generate a public read-only URL slug per trip, save to share_links table |

---

### T032: Public Share Page

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T031, T013, T021 |
| Tests | `src/__tests__/SharePage.test.tsx` — test page loads trip by slug without auth; test export buttons are hidden; test view_count is incremented on load |
| Description | `/share/[slug]` — read-only trip view for publicly shared links. No auth required. All 7 output sections visible. Export and edit buttons hidden. |

**Commit message:** `feat: add public share page`

**File:** `src/app/share/[slug]/page.tsx`

**Behavior:**
- Fetch trip from `share_links` by slug — 404 if not found or `is_public = false`
- Increment `view_count` on each load (fire-and-forget)
- Render full CalendarGrid + all 7 output sections (read-only — no drag, no lock/unlock)
- All export buttons hidden with tooltip: *"Sign in to export this itinerary"*
- "Plan your own trip" CTA at the bottom → links to `/try` or `/login`
- No header edit controls, no affiliate click tracking (anonymous views)

**README update:** Add to the Auth section: *"Share any trip via a public link — no account required to view."*

---

### T033: PDF Export

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Export |
| Prerequisites | T023 |
| Description | Puppeteer server-side PDF of full 7-section brief |

---

### T034: Multi-Destination Intake UI

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T008, T001 |
| Tests | `src/__tests__/multi-destination-intake.test.tsx` — test "Add another city" appends a new destination card; test removing a city card removes its accommodation card; test each destination gets its own date range |
| Description | Extend the intake wizard to support multiple destinations. Each destination gets its own flight info and accommodation card. |

**Commit message:** `feat: add multi-destination intake UI`

**Changes to Step 1 (StepFlights.tsx):**
- "Add another city" button below the first destination card
- Each destination: city name, outbound flight info, approximate dates
- Cards can be removed (minimum 1 destination)
- Destination order can be reordered (drag handle)
- Transit indicator between cities: *"You'll need to get from [City A] to [City B] — TripCraft will block this day"*

**Changes to Step 2 (StepAccommodation.tsx):** One accommodation card per destination, auto-synced to destination list.

**State:** `IntakeFormState.destinations` is already an array — no type changes needed.

---

### T035: Multi-Destination Output

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T034, T036, T026 |
| Tests | `src/__tests__/multi-destination-generation.test.ts` — test prompt includes all destinations in order; test transit days appear as full amber blocks; test per-city sections 03–07 carry their own destination label |
| Description | Update the AI prompt and output structure to handle multi-destination trips. Render per-city output sections with a destination tab selector. |

**Commit message:** `feat: add multi-destination generation and per-city output sections`

**Prompt changes:** When `destinations.length > 1`, format as an N-city trip with explicit transit day instructions. Per-city sections 03–07 keyed by destination index in the JSON output.

**Calendar:** Day column headers show city name when it changes. Transit days = full-height locked deep amber blocks.

**Output sections:** Tabs per destination for sections 03–07. Calendar stays unified.

---

### T036: Transit Days

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Backend |
| Prerequisites | T010 |
| Description | Full deep-amber day blocks for inter-city legs — always locked, always shows route and transport mode |

---

### T037: Block Regeneration

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T013 |
| Description | Tap any block → get 3 AI alternative activities as a card carousel; select one to swap it in |

---

### T038: Cross-Day Drag

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T017 |
| Description | Drag a block to a different day column with confirmation dialog and re-optimization |

---

### T039: Flight API Lookup

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P2 — Medium |
| Type | Backend |
| Prerequisites | T007 |
| Description | AviationStack integration: flight number → auto-populate departure/arrival times in intake Step 1 |

---

### T040: Emergency Re-route

| Field | Value |
|---|---|
| Sprint | S5 — Multi-Destination & Sharing |
| Priority | P2 — Medium |
| Type | Frontend |
| Prerequisites | T012 |
| Description | "My ferry is cancelled" → modal input → AI generates an updated plan for the rest of the day |

---

### T041: Post-Trip Rating Email

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P1 — High |
| Type | Feature |
| Prerequisites | T004 |
| Description | Resend trigger 2–3 days after trip end date, prompting user to rate blocks |

---

### T042: Block Rating UI

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T013, T041 |
| Description | 1–5 star rating per block, accessible from trip view and post-trip email link |

---

### T043: Thumbs Up/Down Feedback

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P1 — High |
| Type | Frontend |
| Prerequisites | T013 |
| Description | Quick per-block thumbs up/down feedback logged immediately to DB — lighter-weight alternative to star ratings |

---

### T044: Preference Profile Learning

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P1 — High |
| Type | Backend |
| Prerequisites | T042, T043 |
| Description | Refine user preference model from star ratings, thumbs feedback, and implicit signals (block swaps, cancellations) |

---

### T045: Personalized Generation

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P1 — High |
| Type | AI |
| Prerequisites | T044, T009 |
| Description | Inject learned preference signals into the T009 system prompt on future trip generations |

---

### T046: Stripe Setup & Webhooks

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P0 — Critical |
| Type | Payments |
| Prerequisites | T004, T005 |
| npm | `npm install stripe @stripe/stripe-js` |
| Tests | `src/__tests__/stripe-webhooks.test.ts` — test `checkout.session.completed` sets correct tier; test `customer.subscription.deleted` downgrades to free; test invalid webhook signature is rejected |
| Description | Create Stripe products and prices; build the webhook handler that keeps subscription state in sync with Supabase profiles. |

**Commit message:** `feat: add Stripe products and webhook handler`

**Stripe products:** Pro Monthly ($9/mo), Pro Annual ($69/yr), One-Time Trip ($4.99)

**Files:**
- `src/app/api/stripe/webhook/route.ts` — webhook handler
  - `checkout.session.completed` → set `tier`, store `stripe_customer_id`
  - `customer.subscription.deleted` → set `tier = 'free'`
  - `invoice.payment_failed` → email user (Resend), do not immediately downgrade
- `src/lib/stripe.ts` — Stripe SDK instance + customer ID helper

**Env vars:** `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_PRO_MONTHLY_PRICE_ID`, `STRIPE_PRO_ANNUAL_PRICE_ID`, `STRIPE_ONE_TIME_PRICE_ID`

**README update:** None — Stripe infrastructure is internal until the pricing UI (T048) ships.

---

### T047: Tier Gating

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P0 — Critical |
| Type | Backend |
| Prerequisites | T046, T010 |
| Tests | `src/__tests__/feature-gates.test.ts` — test free tier blocked after 2 generations; test pro tier not blocked; test one-time credit consumed on generation; test multi-destination blocked for free tier |
| Description | Enforce per-tier limits at the API level and surface upgrade prompts in the UI. |

**Commit message:** `feat: add generation limits and feature gate enforcement`

**Free tier limits:**
- Max 2 generations per calendar month (`generation_count`)
- Max 3-day trips
- Single destination only
- No PDF export, no saved trips

**Pro tier:** Unlimited generations, all trip lengths, multi-destination, PDF, saved trips.

**One-time tier:** 1 full-feature generation — decrement `one_time_credits` on use.

**Upgrade prompt pattern:** Structured error `{ "error": "limit_reached", "gate": "...", "upgradeUrl": "/upgrade" }` → client renders inline upgrade card (not a modal).

**Monthly reset:** pg_cron job resets `generation_count = 0` on the 1st of each month.

**README update:** Add a `## Pricing` section: Free (2 trips/month, 3-day max) / Pro ($9/month — unlimited) / One-time ($4.99/trip).

---

### T048: Pricing Page & Billing UI

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T046, T047 |
| Tests | `src/__tests__/pricing-page.test.tsx` — test Pro plan card shows correct price; test clicking "Upgrade" initiates Stripe checkout; test current plan is highlighted for logged-in users |
| Description | /upgrade pricing page, Stripe Checkout session creation, and /settings/billing portal for managing subscriptions. |

**Commit message:** `feat: add pricing page and billing UI`

**Files:**
- `src/app/upgrade/page.tsx` — pricing page (public, no auth required)
- `src/app/settings/billing/page.tsx` — billing management (requires auth)
- `src/app/api/stripe/create-checkout/route.ts` — creates Stripe Checkout Session

**Pricing page (`/upgrade`):** 3 plan cards (Free / Pro / One-Time). Monthly/annual toggle on Pro. Current plan highlighted for logged-in users. FAQ section.

**Billing page (`/settings/billing`):** Current plan + renewal date. "Manage Subscription" → Stripe Customer Portal. Remaining one-time credits display.

**README update:** Update the Pricing section with a direct link to `/upgrade`.

---

### T049: Anonymous Taste Generation

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P0 — Critical |
| Type | Feature |
| Description | Allow unauthenticated users to generate 1 itinerary (view-only) with an upsell prompt at the bottom |

**Commit message:** `feat: add anonymous taste generation with upsell`

**Route:** `/try`

**Rules:**
- No auth required
- 1 generation per browser session (sessionStorage) + 1/IP/24hrs server-side
- Full output rendered (all 7 sections) — the taste should be real, not watered-down
- Export buttons hidden / disabled with tooltip: *"Sign up free to download your itinerary"*
- Trip NOT saved to Supabase — lives in component state only

**Upsell placement:** Below Section 07, full-width callout card:
```
✈ Love this itinerary?

Sign up free to save your travel preferences and never answer these
questions again. Every future trip starts with your profile pre-filled.

  [Create Free Account]   [Sign In]
```

Not a modal. Not an interstitial. If user scrolls back to the calendar, a small persistent banner stays at the top: *"Sign up to save this trip."*

**README update:** Add to the Auth section: *"Want to try before signing up? Visit `/try` for one free preview generation — view-only, no account required."*

---

### T050: Group Trip View

| Field | Value |
|---|---|
| Sprint | S6 — Preference Engine, Monetization & Anonymous Flow |
| Priority | P2 — Medium |
| Type | Frontend |
| Prerequisites | T012 |
| Description | Multiple travelers can share one live schedule — real-time updates via Supabase Realtime subscriptions |

---

### T051: React Native + Expo

| Field | Value |
|---|---|
| Sprint | S7 — Mobile App |
| Priority | P2 — Medium |
| Type | Mobile |
| Prerequisites | T029 |
| Description | iOS + Android app scaffold; re-uses core web logic for generation and data access |

---

### T052: Live Trip Mode

| Field | Value |
|---|---|
| Sprint | S7 — Mobile App |
| Priority | P2 — Medium |
| Type | Mobile |
| Prerequisites | T051 |
| Description | Current block highlighted in real time; next block previewed; tap to see details |

---

### T053: Voice Modification

| Field | Value |
|---|---|
| Sprint | S7 — Mobile App |
| Priority | P2 — Medium |
| Type | Mobile |
| Prerequisites | T051 |
| Description | "We're going to the night market instead" → AI parses intent and re-routes the rest of the day |

---

### T054: Push Notifications

| Field | Value |
|---|---|
| Sprint | S7 — Mobile App |
| Priority | P2 — Medium |
| Type | Mobile |
| Prerequisites | T051 |
| Description | 30 min before activity start; post-trip rating prompt 2 days after trip end |

---

### T055: Offline Mode

| Field | Value |
|---|---|
| Sprint | S7 — Mobile App |
| Priority | P2 — Medium |
| Type | Mobile |
| Prerequisites | T051 |
| Description | SQLite local cache for schedule access without network signal |

---

### T056: Real-Time Attraction Alerts

| Field | Value |
|---|---|
| Sprint | S8 — Live Intelligence |
| Priority | P2 — Medium |
| Type | Feature |
| Prerequisites | T029 |
| Description | Notify user if a booked venue changes hours or closes (Google Places API change detection) |

---

### T057: Weather-Aware Scheduling

| Field | Value |
|---|---|
| Sprint | S8 — Live Intelligence |
| Priority | P2 — Medium |
| Type | Feature |
| Prerequisites | T029 |
| Description | Detect rain forecast for a scheduled outdoor activity; surface indoor alternatives automatically |

---

### T058: Conflict Detection

| Field | Value |
|---|---|
| Sprint | S8 — Live Intelligence |
| Priority | P2 — Medium |
| Type | Feature |
| Prerequisites | T029 |
| Description | Flag if a scheduled attraction is closed on the day it appears in the itinerary |

---

---

### T006: Settings Profile Page

| Field | Value |
|---|---|
| Sprint | S1 — Foundation |
| Priority | P0 — Critical |
| Type | Frontend |
| Prerequisites | T005 |
| npm | None |
| Tests | `src/__tests__/settings-profile.test.tsx` — test that saving updates profile row; test that changes do NOT trigger onboarding flow again |
| Description | The `/settings/profile` page where users can update their travel preferences after onboarding. Reuses the exact same 4-step UI from T005 (OnboardingWizard), but in an edit context rather than first-run context. |

**Commit message:** `feat: add settings profile page`

**Route:** `/settings/profile`

**Implementation:**
- Import and render `<OnboardingWizard mode="edit" />` (or equivalent prop to signal edit vs. first-run context)
- Pre-populate all 4 steps from the user's current `profiles` row on mount
- On save: `PATCH /profiles` — update changed fields only, do NOT modify `onboarding_complete`
- Success toast: *"Profile updated. Your next trip will use these preferences."*
- Cancel button: return to `/settings` without saving

**Differences from T005 onboarding:**
- No "Skip" link — this is intentional editing
- No redirect to `/dashboard` on save — stay on `/settings/profile`
- "Save preferences" button instead of "Get started"

**Settings nav:** Add `/settings/profile` link to the settings sidebar (or settings page if it's a simple list): *"Travel Preferences"* — appears next to account settings.

**README update:** Add to the Getting Started section: *"Update your preferences anytime from Settings → Travel Preferences."*

## Resolved Design Decisions

| Question | Decision |
|---|---|
| Auth gate | Login required before any generation. `/try` route is the anonymous exception (Phase 3). |
| Profile onboarding | Triggered immediately after signup. Collects: activity interests, budget, pace, dietary. Skippable. |
| Intake pre-fill | Step 4 preferences are pre-filled from profile. Changes are trip-specific and do not update the profile. |
| Anchor selection | AI-only at generation time. Users can unlock anchors but cannot promote arbitrary blocks to anchor status. |
| Suggestion drawer | Pre-generated at trip creation time. Not fetched on-demand. |
| AI re-optimization | Fires on `dragEnd` only. Debounced — not on intermediate drag positions. |
| Anonymous upsell | Placed below Section 07 output (after full itinerary visible). No modal. No interrupt. |
| Post-trip rating | Email-first via Resend (Phase 3). Mobile push added in Phase 4. |

---

## Open Questions

1. **Multi-destination transit:** Auto-recommend specific transport mode (flight vs. train vs. ferry) or just flag the gap and let user decide?
2. **Streaming format:** Raw token stream or sequential section-completion events?
3. **Affiliate disclosures:** Inline "partner link" label per block, or single footer disclosure for the page?
4. **Profile update from trip:** If user adjusts their preferences in Step 4 of intake, offer a "Save as my new defaults" option?

---

## Quick Reference

### Priority Levels
- **P0 — Critical:** Blocks other work or blocks launch
- **P1 — High:** Should be done in the current sprint
- **P2 — Medium:** Important but can wait for a later sprint

### Task Types
- **Setup** — Project scaffolding and bootstrapping
- **Config** — Environment variables and client initialization
- **Backend** — API routes, server logic, Supabase
- **Frontend** — React components and UI
- **AI** — Prompt engineering and AI integration
- **Export** — File generation (Excel, PDF)
- **Auth** — Authentication and authorization
- **Payments** — Stripe and billing
- **Mobile** — React Native / Expo
- **Feature** — Cross-cutting product feature
- **Testing** — Tests and verification
- **Launch** — Deployment and release

### Running Locally
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

### Key Files
```
src/
├── app/
│   ├── api/
│   │   ├── generate/route.ts        # AI generation streaming endpoint
│   │   ├── reoptimize/route.ts      # Post-drag re-optimization
│   │   ├── affiliate-click/route.ts # Click tracking
│   │   └── stripe/
│   │       ├── webhook/route.ts     # Stripe webhook handler
│   │       └── create-checkout/route.ts
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── onboarding/page.tsx          # Post-signup preference wizard
│   ├── dashboard/page.tsx           # Trip list
│   ├── upgrade/page.tsx             # Pricing page
│   ├── trips/
│   │   ├── new/page.tsx             # Intake wizard
│   │   └── [id]/page.tsx           # Trip viewer/editor
│   ├── share/[slug]/page.tsx        # Public read-only trip view
│   ├── try/page.tsx                 # Anonymous taste generation
│   └── settings/
│       ├── profile/page.tsx         # Profile editing
│       └── billing/page.tsx         # Subscription management
├── components/
│   ├── intake/                      # 4-step wizard
│   ├── onboarding/                  # Profile preference wizard
│   ├── calendar/                    # Grid + blocks
│   └── output/                      # Section renderers
├── hooks/
│   └── useGenerationStream.ts       # Streaming output handler
├── middleware.ts                    # Auth protection
└── lib/
    ├── anthropic.ts
    ├── prompt.ts                    # AI prompt builder
    ├── stripe.ts
    ├── supabase/
    ├── affiliates.ts
    └── export/excel.ts
```