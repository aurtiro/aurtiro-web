# Task: Build aurtiro.com with AurOS Section + Portal Auth Gates

> Hand this file to Claude Code along with DESIGN_SYSTEM_WEB.md. Follow the design system exactly.

---

## What to build

A single-page marketing site at aurtiro.com (Next.js 14 App Router, deployed to Vercel) with five sections and two portal stub routes with auth gates.

Tech: Next.js 14, App Router, TypeScript, Tailwind CSS, CSS custom properties for design tokens. No component libraries. Ship dark mode only.

---

## Design tokens

Before writing any components, create `app/globals.css` with CSS custom properties matching DESIGN_SYSTEM_WEB.md exactly:

```
--color-emerald: #4DA882;
--color-blue: #5DAFE4;
--color-yellow: #E4C25D;
--color-purple: #B085E4;

--surface-page: #141514;
--surface-base: #1D1F1E;
--surface-card: #232625;
--surface-elevated: #282A29;
--surface-divider: #2E302F;

--text-primary: #F2F0EB;
--text-subtitle: #A8A8A2;
--text-body: #9E9E98;
--text-caption: #6B6B65;
--text-tertiary: #555555;
--text-muted: #4A4A46;

--radius-card: 14px;
--radius-button: 8px;
--radius-tag: 8px;
```

Fonts: Load Space Grotesk (lettermark), Inter (headlines/body, substitute for Satoshi), Geist (UI/nav/tags) via next/font/google. All three are available natively in next/font. When we later integrate Satoshi from Fontshare, Inter swaps out.

---

## Page structure

### 1. Nav (sticky, full-width)

- Background: linear-gradient(180deg, rgba(45,48,47,0.85), rgba(35,38,37,0.65))
- Backdrop-filter: blur(24px)
- Left: Emerald dot (8px circle, #4DA882) + "AURTIRO" in Space Grotesk 400, letter-spacing 5px, inside glass container (4px radius, gradient rgba(255,255,255,0.07) to 0.02 at 135deg)
- Right nav links (Geist 400, 12.5px, --text-body): About, AurOS, Services, For Talent, For Hiring
- "For Talent" links to /talent (portal)
- "For Hiring" links to /clients (portal)
- CTA button "Connect": emerald text, emerald 8% opacity background, 4px radius

### 2. Hero

- Headline (Satoshi 500, large): "Built on systems. Led by people."
- Subheadline (Satoshi 400, --text-subtitle): "Aurtiro places engineers and engineering leaders with operator-grade precision and judgment algorithms can't replicate."
- CTA button: "See how we operate" (scrolls to AurOS section). Emerald fill, dark text.
- Below hero: the three pillar cards (Systems / Guidance / Outcome) as described in DESIGN_SYSTEM_WEB.md. Centered text, equal height, gradient background, emerald accent bar at top.

### 3. AurOS Section (the core of this build)

This section introduces AurOS as the operational backbone. It should feel like a technology company describing its platform, not a recruiting agency listing services.

**Section label:** "AUROS" in Geist 500, 11px, letter-spacing 1.5px, uppercase, --text-tertiary

**Section headline (Satoshi 500):** "The operating system behind every placement"

**Section body (Satoshi 400, --text-body, max-width 640px, centered):**
"AurOS is the intelligence layer that drives how we source, evaluate, and place candidates. Every interaction, every data point, every decision flows through a unified system designed for speed, signal, and precision."

**Then: a grid of 6 capability cards.** 14px radius, no borders, --surface-card background, 1.5rem padding. Each card has:
- A short label (Geist 500, 11px, uppercase, --text-tertiary)
- A title (Satoshi 500, --text-primary)
- A description (Satoshi 400, --text-body, 2-3 sentences)

The six cards:

1. Label: INTELLIGENCE
   Title: "Signal over noise"
   Body: "Every candidate interaction generates structured data. Call transcriptions, response patterns, and behavioral signals are indexed and scored. We know who is passively open, who is actively engaged, and who is about to move before they update their LinkedIn."

2. Label: SOURCING
   Title: "Timing and context, not job boards"
   Body: "We source from GitHub activity, conference talks, equity cliff timelines, and leadership changes. The best candidates are not applying anywhere. AurOS surfaces them at the moment they are most likely to be receptive."

3. Label: ENRICHMENT
   Title: "Deep profiles, built in real time"
   Body: "Every candidate profile is enriched with compensation benchmarks, technical depth assessments, team dynamics preferences, and cultural alignment indicators. What you get from us is not a resume. It is a full operating picture."

4. Label: WORKFLOW
   Title: "Sequenced, not scattered"
   Body: "Multi-touch outreach sequences are calibrated per candidate. Touchpoints are timed, channels are selected based on response probability, and every follow-up is informed by prior engagement data. Nothing is sent cold without context."

5. Label: EVALUATION
   Title: "Precision matching, not keyword filtering"
   Body: "Our matching engine weighs technical depth, leadership style, growth trajectory, and team composition fit. We do not match on skills lists. We match on whether this person will succeed in this specific role at this specific company."

6. Label: OPERATIONS
   Title: "Closed-loop accountability"
   Body: "Every placement is tracked through onboarding, 30/60/90 day milestones, and long-term retention. We measure our own performance with the same rigor we apply to candidate evaluation. Outcomes are not anecdotal. They are instrumented."

### 4. Services Section

**Section label:** "SERVICES" (same Geist treatment)
**Headline:** "Three tiers. One standard."

Three cards side by side, each with a colored tag:

1. **Engineering Talent**
   Tag: "Individual contributor" (Blue. Text: #8DC6EE, bg: #5DAFE4 at 10% opacity)
   Subtitle: "Forward Deployed, Full-Stack, Infrastructure, Platform"
   Body: "Senior and staff-level engineers placed with precision. We evaluate for technical depth, system design instinct, and ability to ship in complex environments."

2. **Engineering Leadership**
   Tag: "Leadership" (Yellow. Text: #EDD57E, bg: #E4C25D at 10% opacity)
   Subtitle: "VP Engineering, Head of Engineering, Staff+, Principal"
   Body: "Technical leaders who build and scale engineering organizations. We assess management philosophy, technical credibility, and organizational impact."

3. **Executive Search**
   Tag: "C-Level" (Purple. Text: #C9A6EE, bg: #B085E4 at 10% opacity)
   Subtitle: "CTO, CPO, SVP, VP Engineering"
   Body: "Executive placements for companies building foundational technology. Board-level references, deep technical diligence, full confidentiality."

### 5. Footer

- Background: rgba(30,32,31,0.5)
- Small emerald dot (5px) + "AURTIRO" in --text-muted
- "San Francisco" + "joe@aurtiro.com" in --text-muted
- Keep minimal

---

## Portal routes: /talent and /clients

### /talent (For Talent portal)

- Same nav as main site
- Centered card (max-width 420px, --surface-card, 14px radius) on --surface-base background
- Emerald dot + "AURTIRO" lettermark above the card
- Card headline (Satoshi 500): "Talent Portal"
- Card body (Satoshi 400, --text-body): "Track your candidacy, review opportunities, and communicate directly with your Aurtiro representative."
- Email input field (Geist 400, --surface-elevated bg, 8px radius, --text-body placeholder: "you@company.com")
- Continue button (emerald fill, dark text, full-width, 8px radius): "Continue"
- Below button (--text-caption, small): "Access is by invitation only. If you have been referred, enter the email your representative has on file."
- On submit: show a toast or inline message "Portal access coming soon. We will notify you when it is live." Do not actually authenticate anything.

### /clients (For Hiring portal)

- Identical layout to /talent except:
- Card headline: "Client Portal"
- Card body: "Review candidate shortlists, track search progress, and collaborate with your Aurtiro search team."
- Placeholder: "you@company.com"
- Below button: "Access is by invitation only. Your Aurtiro representative will provision your account."
- Same "coming soon" behavior on submit.

---

## Constraints

- Follow DESIGN_SYSTEM_WEB.md exactly. Do not deviate on colors, typography, radii, or component patterns.
- No em dashes anywhere in copy. Use periods, colons, or commas.
- No borders on any cards or containers.
- Tags use Light color stops for text, not Primary.
- Full tag labels always: "Individual contributor" not "IC".
- Glass effect on nav bar only. No glass on cards, modals, or other surfaces.
- Gradients only in nav glass, pillar cards, and logo glass container. Everything else is flat fills.
- Dark mode only. No light mode toggle.
- Responsive: should look good on desktop (1200px+) and not break on mobile, but optimize for desktop.
- Deploy to Vercel. The repo should have a vercel.json or be auto-detected as Next.js.

---

## File structure

```
aurtiro-web/
├── app/
│   ├── globals.css          # Design tokens + base styles
│   ├── layout.tsx           # Root layout, font loading, metadata
│   ├── page.tsx             # Main landing page (hero, AurOS, services, footer)
│   ├── talent/
│   │   └── page.tsx         # Talent portal auth gate
│   └── clients/
│       └── page.tsx         # Client portal auth gate
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Pillars.tsx          # Systems / Guidance / Outcome cards
│   ├── AurOS.tsx            # AurOS capability grid
│   ├── Services.tsx         # Three-tier service cards
│   ├── Footer.tsx
│   ├── PortalGate.tsx       # Shared auth gate component (used by both portals)
│   └── Tag.tsx              # Reusable tag/pill component
├── public/
│   └── favicon.svg          # Emerald dot
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Build phases with checkpoints

Build in this order. After each checkpoint, deploy a Vercel preview so progress is visible on mobile.

### Phase 1: Scaffold + Nav + Hero
1. `npx create-next-app@latest aurtiro-web --typescript --tailwind --app`
2. Set up globals.css with all design tokens
3. Load fonts via next/font/google (Space Grotesk, Inter, Geist)
4. Build Nav component
5. Build Hero + Pillars

**CHECKPOINT 1:** Run `npm run dev`, verify nav renders with glass effect and hero displays with pillar cards. Then run `npx vercel` (follow prompts to create project, deploy preview). Print the preview URL.

### Phase 2: AurOS + Services + Footer
6. Build AurOS section (section label + headline + 6 capability cards)
7. Build Services section (3 tier cards with colored tags)
8. Build Footer
9. Wire nav scroll links (About scrolls to hero, AurOS scrolls to AurOS section, Services scrolls to services)

**CHECKPOINT 2:** Run `npm run dev`, verify all sections render and nav scrolling works. Then run `npx vercel`. Print the preview URL.

### Phase 3: Portal routes
10. Build PortalGate shared component
11. Build /talent page using PortalGate
12. Build /clients page using PortalGate
13. Wire "For Talent" and "For Hiring" nav links to these routes

**CHECKPOINT 3:** Run `npm run dev`, verify both portal routes render and "coming soon" behavior works on submit. Then run `npx vercel`. Print the preview URL.

### Phase 4: Polish + go live
14. Verify all colors, fonts, radii match design system (spot-check every component)
15. Test responsive behavior at 1440px, 1024px, 768px, 375px
16. Verify no em dashes in any rendered text
17. Verify no borders on any cards or containers
18. Verify tags use Light color stops for text
19. Create favicon.svg (simple emerald circle)
20. Set metadata (title: "Aurtiro", description: positioning line)

**CHECKPOINT 4:** Final local verification. Then deploy to production:

```bash
# Deploy to production
npx vercel --prod

# Print the production URL
```

### Phase 5: DNS (requires Cloudflare API token)

If a Cloudflare API token is available in the environment (CLOUDFLARE_API_TOKEN and CLOUDFLARE_ZONE_ID), configure DNS:

```bash
# Add CNAME record pointing aurtiro.com to Vercel
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "aurtiro.com",
    "content": "cname.vercel-dns.com",
    "proxied": true
  }'

# Add www redirect
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "cname.vercel-dns.com",
    "proxied": true
  }'
```

Then add the custom domain in Vercel:
```bash
npx vercel domains add aurtiro.com
```

If no Cloudflare token is available, skip this phase and print instructions for manual DNS setup.

**CHECKPOINT 5:** Verify https://aurtiro.com loads correctly. Verify https://aurtiro.com/talent and https://aurtiro.com/clients load correctly. Print final status.

---

## Done criteria

1. `npm run dev` serves the site locally with all five sections rendering correctly
2. Nav links scroll to sections (About = hero, AurOS, Services) or navigate to portal routes
3. /talent and /clients show auth gate cards with "coming soon" behavior
4. All colors, fonts, radii, and component patterns match DESIGN_SYSTEM_WEB.md
5. No em dashes, no borders, no abbreviated tags
6. Responsive down to mobile without breaking
7. Five Vercel preview deploys were created (one per checkpoint)
8. Production deploy live at aurtiro.com (or Vercel URL if DNS not configured)
