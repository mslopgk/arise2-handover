# Project: ARISE PNU Website Redesign

## Architecture
- **Framework**: Next.js 14+ (React, App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Smooth Scrolling**: Lenis
- **Animation**: GSAP (GreenSock) with ScrollTrigger
- **Responsive Layout**: Mobile-first responsive grids, fluid typography, premium modern design matching analysis references.

## Code Layout
The Next.js project will be structured under `arise_pnu_redesign/` as follows:
```
arise_pnu_redesign/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout containing HTML, body, and meta
│   │   ├── page.tsx         # Main landing page assembling sections
│   │   └── globals.css      # Tailwind v4 import and global styles
│   ├── components/
│   │   ├── LenisProvider.tsx # Lenis smooth scroll initialization
│   │   ├── Hero.tsx         # Cinematic introduction & Vision
│   │   ├── Identity.tsx     # The 4 core axes table / cards
│   │   ├── Metrics.tsx      # Quantitative metrics & Funding architecture
│   │   ├── Aura.tsx         # A.U.R.A 2.0 framework
│   │   ├── Achievements.tsx # Major achievements, RoboCup 2025
│   │   ├── Roadmap.tsx      # 3-year interactive flowchart/timeline
│   │   └── Contact.tsx      # Location and contact info
│   └── lib/
│       └── utils.ts         # Helper functions
```

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|------|-------|-------------|--------|-----------------|
| M1 | Design Reference Analysis | Analyze 5 reference sites, write findings to `design.md` | None | IN_PROGRESS | 9e35bbc9-97da-4ec4-b720-896bce31fbef |
| M2 | E2E Testing Track Setup | Design and build E2E test suite (Tiers 1-4), generate `TEST_READY.md` | None | IN_PROGRESS | 82a15a2b-28dd-4082-bb0c-863b9e55bd6d |
| M3 | Project Boilerplate & Layout | Initialize Next.js, tailwind v4, Lenis, and setup layout framework | M1 | PLANNED | TBD |
| M4 | Content Implementation | Implement all structured content from `arise_about.md` with interactive visual elements | M3 | PLANNED | TBD |
| M5 | GSAP Scroll Animation & Pinning | Polish visual experience with GSAP scroll animation and pinning transitions | M4 | PLANNED | TBD |
| M6 | E2E Test Pass (Tiers 1-4) | Verify implementation passes all E2E test cases | M2, M5 | PLANNED | TBD |
| M7 | Adversarial Hardening (Tier 5) | Perform white-box analysis, fix coverage gaps and edge case bugs | M6 | PLANNED | TBD |

## Interface Contracts
- **Lenis Smooth Scroll**: Component must initialize Lenis globally and sync it with GSAP's ScrollTrigger via `ScrollTrigger.update()` on scroll events.
- **Scroll Pinning**: Interactive sections (like Metrics or Roadmap) must use GSAP ScrollTrigger pinning to allow users to interact with timelines/charts as they scroll vertically.
- **Tailwind v4 Integration**: Styling must use Tailwind CSS v4 syntax, declaring custom theme variables or utilities in `globals.css` using CSS variables if custom configurations are needed.
- **Dynamic Content Compliance**: All metrics (3,111억, 58명, QS 473위, 3개년 로드맵, etc.) must be rendered dynamically or as static text matching `arise_about.md` exactly, avoiding placeholder lorem ipsum text.
