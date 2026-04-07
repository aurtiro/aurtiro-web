# Aurtiro Design System: Web

> Drop this file into any web/marketing repo. It is the single source of truth for aurtiro.com and all client/candidate-facing pages.

---

## Brand Identity

- **Company:** Aurtiro (or·teer·oh)
- **Pillars:** Systems. Guidance. Outcome.
- **Positioning:** "Aurtiro places engineers and engineering leaders with operator-grade precision and judgment algorithms can't replicate."
- **Subtitle:** "Built on systems. Led by people. Every candidate represented has a reason."

### Services

1. **Engineering Talent** (Individual contributor tier, Blue)
   Forward Deployed, Full-Stack, Infrastructure, Platform

2. **Engineering Leadership** (Leadership tier, Yellow)
   VP Engineering, Head of Engineering, Staff+, Principal

3. **Executive Search** (C-Level tier, Purple)
   Chief Technology Officer, Chief Product Officer, SVP, VP Engineering, Principal Engineer, Staff Engineer

---

## Logo

- Emerald dot (#4DA882) at 65% of cap height + spaced "AURTIRO" in Space Grotesk 400
- Letter-spacing: 5px (nav size), 8-10px (full mark)
- Dot alone as favicon
- Nav container: dot + AURTIRO inside sharp-cornered glass container
  - Border-radius: 4px
  - Background: linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))
- On light backgrounds: use darker emerald #2E7A5E for both dot and text

---

## Colors

### Brand: Emerald

| Stop | Hex | Use |
|------|-----|-----|
| Dark bg | #162820 | Hover states on dark surfaces |
| Dark hover | #1E3D30 | Pressed states |
| **Primary** | **#4DA882** | **Logo, CTAs, active indicators** |
| Light | #7DC4A4 | Light mode accents |
| Light bg | #E6F5EE | Light mode backgrounds, favicon bg on light |

### Service Tier: Blue "Avionics"

| Stop | Hex | Use |
|------|-----|-----|
| Dark bg | #1A2D3D | — |
| Dark hover | #244058 | — |
| **Primary** | **#5DAFE4** | — |
| Light | #8DC6EE | **Tag text color** |
| Light bg | #E8F2FA | Light mode tag bg |

### Service Tier: Yellow "Caution"

| Stop | Hex | Use |
|------|-----|-----|
| Dark bg | #2D2718 | — |
| Dark hover | #453D20 | — |
| **Primary** | **#E4C25D** | — |
| Light | #EDD57E | **Tag text color** |
| Light bg | #FAF5E4 | Light mode tag bg |

### Service Tier: Purple "Marker"

| Stop | Hex | Use |
|------|-----|-----|
| Dark bg | #251E32 | — |
| Dark hover | #38304D | — |
| **Primary** | **#B085E4** | — |
| Light | #C9A6EE | **Tag text color** |
| Light bg | #F2ECFA | Light mode tag bg |

### Color Usage Rules

- **Emerald** is the brand color. Used for: logo, primary CTA, nav CTA, active/connected indicators. Never used for service tier tagging.
- **Blue/Yellow/Purple** are service tier colors only on the marketing site. They appear on service tags and nowhere else.
- **Orange (#D4944D) and Red (#E06060)** do not appear on the marketing site.
- The three tier colors share the same HSL formula (saturation 72%, lightness 63%) for cohesive perceived luminance. They are a matched trio.

### Surfaces (dark mode primary)

| Surface | Hex | Use |
|---------|-----|-----|
| Page | #141514 | Absolute background, visible in margins/gaps |
| Base | #1D1F1E | Primary content container, page body |
| Surface | #232625 | Cards, rows, interactive elements |
| Elevated | #282A29 | Pillar cards, hover states, popovers |
| Divider | #2E302F | 0.5px separator lines only, never as fill |

### Text Hierarchy

| Level | Hex | Use |
|-------|-----|-----|
| Primary | #F2F0EB | Headlines, titles, active nav items |
| Subtitle | #A8A8A2 | Hero subtitles, secondary headlines |
| Body | #9E9E98 | Paragraph text, descriptions |
| Caption | #6B6B65 | Metadata, timestamps, helper text |
| Tertiary | #555555 | Section labels (uppercase, spaced) |
| Muted | #4A4A46 | Footer text, disabled states |

---

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Lettermark | Space Grotesk | 400 | Letter-spacing 5px nav, 8-10px full mark |
| Headlines | Satoshi | 500 | Marketing headlines, section titles, card headers |
| Body/subtitle | Satoshi | 400 | Paragraph copy, descriptions, subtitles |
| UI/labels/nav/tags | Geist | 400/500 | Nav links, section labels, tag text, buttons |
| Section labels | Geist | 500 | 11px, letter-spacing 1.5px, uppercase, tertiary color |

**Future:** custom Aurtiro typeface (roadmap item). Satoshi ships now.

---

## Components

### Cards
- Border-radius: 14px
- No borders ever. Differentiate through background fill only.
- Padding: 1.5rem to 1.75rem
- Gaps between cards: 14-16px

### Pillar Cards (Systems / Guidance / Outcome)
- Centered text, equal min-height (220px), justify-content: center
- Background: linear-gradient(180deg, Elevated 0%, Surface 100%)
- Emerald accent bar: 40px wide, 2px tall, centered at top, border-radius 0 0 2px 2px

### Buttons
- Border-radius: 8px, no borders
- Primary: emerald fill (#4DA882), dark text (#1D1F1E)
- Secondary: rgba fill (rgba(168,168,162,0.06)), subtitle text (#A8A8A2)
- Nav CTA: emerald text, emerald 8% opacity background, 4px radius

### Tags / Pills
- Border-radius: 8px
- Text: use Light color stop (not Primary) for luminance (#8DC6EE, #EDD57E, #C9A6EE)
- Background: primary color at 10-12% opacity
- Font: Geist 500, 10px, letter-spacing 0.5px
- **Always spell out full labels:** "Individual contributor" not "IC", "Leadership" not "LEAD", "C-Level" not "C"

### Section Dividers
- 0.5px line (#2E302F) with centered arrow-in-circle
- Circle: 32px diameter, fill rgba(46,48,47,0.5)
- Arrow: down chevron in caption color (#6B6B65)

### Nav Bar
- Full-width, edge to edge
- Background: linear-gradient(180deg, rgba(45,48,47,0.85), rgba(35,38,37,0.65))
- Backdrop-filter: blur(24px)
- AURTIRO in glass container (described in Logo section)
- No borders on any nav elements
- Nav links: Geist 400, 12.5px, body color (#9E9E98)

### Footer
- Background: rgba(30,32,31,0.5)
- Small dot (5px) + AURTIRO in muted color
- Location + email in muted color

---

## Visual Navigation: Gradients, Layers, Depth

### Surface elevation
5-layer depth system. Lighter = higher. No borders needed.

1. Page (#141514) — absolute background
2. Base (#1D1F1E) — content container
3. Surface (#232625) — cards, rows, objects
4. Elevated (#282A29) — pillar cards, hovers, popovers
5. Divider (#2E302F) — separator lines only

### Glass effect
- Nav bar only. Do not apply to cards, modals, or other surfaces.
- Creates a frosted layer that content scrolls behind.

### Gradient rules
Gradients are allowed in exactly 3 places:
1. Nav glass (translucent, described above)
2. Pillar cards (Elevated → Surface, top-lit effect)
3. Logo glass container (subtle white opacity, described in Logo section)

Everything else is flat fills. No gradients on buttons, cards, modals, or backgrounds.

### How color guides navigation
- The emerald dot is a constant brand anchor. Always visible in nav, footer, favicon. Never changes.
- Tags use Light color stops for text to glow against dark backgrounds.
- Active nav items use Primary text (#F2F0EB). Inactive use Body (#9E9E98).

---

## Copy Rules

- No em dashes. Use periods, colons, or commas.
- No borders on cards or containers.
- No repeated words in adjacent sentences.
- No abbreviations in user-facing tags.
- Brand vocabulary: intentional, efficiency, operational precision, signal, high-leverage, high-touch, intel, definitive, precise, advisory, perceptive, calibrated
- Brand references: Stripe (principles), Linear (craft), Superhuman (premium)
- Anti-references: Pilot (too loud), Hays/Robert Half (generic agency)

---

## Copy/Paste Prompt

```
Read DESIGN_SYSTEM_WEB.md in this repo.

Follow it exactly: Emerald brand color (#4DA882), Satoshi headlines, Geist UI, Space Grotesk lettermark, 14px radius cards with no borders, glass nav. Tags use light color stops for text. No em dashes in any copy. Full tag labels always.

Do not deviate from the color, typography, or component specs.
```
