# Reference Web Design Analysis (design.md)

This document analyzes the 5 reference websites provided in `ref.md` based on public design systems, source code, and captured scroll screenshots.

---

## 1. bymonolog (bymonolog.com)

*   **Vibe**: Dark Cinematic, Sophisticated Creative Portfolio
*   **Color Palette**:
    *   Primary Background: Pure off-black/charcoal (`#0a0a0a`, `#000000`)
    *   Primary Text: Off-white (`#f5f5f7`), Muted Grey (`#86868b`)
    *   Accent: High-contrast white or silver (`#ffffff`)
*   **Typography**:
    *   Headers: Bold display sans-serif (GT America / Neue Montreal style) with tight tracking (`tracking-tighter`) and line-height (`leading-none`).
    *   Body: Clean, high-legibility sans-serif.
    *   Metadata: Monospace font for small labels (e.g., `EST 2022`, `esc`).
*   **Layout Systems**:
    *   Asymmetric margins and large split screens (e.g., left headline, right large content or video).
    *   Grain overlay (`u-grain-animate`) continuously moving to provide a tactile paper texture.
*   **GSAP / Scroll Animations**:
    *   **Smooth Scroll**: Lenis integrated globally.
    *   **Text Reveal**: Splitting text into lines/words and revealing them with a vertical translation (`yPercent: 100` to `0`) and opacity fade as they enter the viewport.
    *   **Custom Cursor**: A dynamic bubble cursor tracking the mouse position with magnetic behavior and spring physics (`stiffness: 100`, `damping: 20`).

---

## 2. Yale Corporate Website Redesign (Behance Concept)

*   **Vibe**: Institutional Heritage, Academic Editorial
*   **Color Palette**:
    *   Primary Accent: Yale Blue (`#0f4d92`)
    *   Backgrounds: Off-white/cream/light gray (`#f8f9fa`, `#ffffff`)
    *   Text: Dark charcoal (`#212529`)
*   **Typography**:
    *   Headers: Premium serif (Georgia / Times New Roman / custom Yale New Roman alternative) to denote authority and legacy.
    *   Body: Highly readable sans-serif (Helvetica / Arial).
*   **Layout Systems**:
    *   Clean, structured multi-column grids (12-column layout).
    *   Spacious margins, heavy borders (`border-t-2 border-slate-900`) separating semantic sections.
*   **GSAP / Scroll Animations**:
    *   **Entrance Motion**: Restrained, elegant fade-in-up animations for cards and lists.
    *   **Header Pinning**: Nav bar shrinks or pins with smooth CSS transitions upon scroll direction change.

---

## 3. Tresmares Capital (tresmarescapital.com)

*   **Vibe**: Premium Corporate Finance, Clean Trust-First
*   **Color Palette**:
    *   Primary Brand: Deep Navy (`#0c2340`)
    *   Backgrounds: White (`#ffffff`), very light cool grey (`#f4f6f8`)
    *   Accents: Electric Blue/Cyan (`#0075c9`, `#005baa`)
*   **Typography**:
    *   Headers: Professional semi-bold sans-serif with geometric structure.
    *   Body: Clean sans-serif.
*   **Layout Systems**:
    *   Structured bento cards displaying financial solutions (Private Equity, Direct Lending, etc.).
    *   Grid cells highlighting key metrics with large numbers (`AUMs €2.3bn+`, `Ticket €5m-75m`).
*   **GSAP / Scroll Animations**:
    *   **Smooth Scroll**: Lenis integrated globally for fluid scrolling.
    *   **Path Animation**: Scroll-triggered drawing of the Pico Tres Mares mountain vector path (using `stroke-dashoffset` in GSAP ScrollTrigger).
    *   **Scroll Pinning**: Section pinning where a left column with category labels remains fixed while the right cards scroll vertically.

---

## 4. Cura Climate (curaclimate.com)

*   **Vibe**: Industrial Climate Tech, Modern Clean Energy
*   **Color Palette**:
    *   Backgrounds: Cool grey/bone (`#fafafa`, `#eceff1`) or deep forest charcoal (`#1e293b`)
    *   Primary Accent: Emerald Green/Teal (`#10b981`, `#0ea5e9`) representing decarbonization
    *   Text: Near-black (`#0f172a`)
*   **Typography**:
    *   Headers: Thick display sans-serif (Satoshi/Söhne style) with tight leading.
    *   Body: Muted functional body font.
*   **Layout Systems**:
    *   Bento grids and split layout blocks.
    *   Visual-heavy cards showing chemical/industrial processes.
*   **GSAP / Scroll Animations**:
    *   **Timeline Scrubbing**: GSAP ScrollTrigger linked to timelines showing green technology progress steps (as the user scrolls, components translate/scale into place).
    *   **Parallax**: Images in grid blocks sliding at different speeds (`data-speed`).

---

## 5. Daangn About (about.daangn.com)

*   **Vibe**: Friendly, Consumer-Oriented, Bright & Approachable
*   **Color Palette**:
    *   Primary Accent: Daangn Orange (`#ff7e36`)
    *   Backgrounds: Pure white (`#ffffff`), warm off-white (`#fcfaf7`)
    *   Text: Deep charcoal (`#212124`)
*   **Typography**:
    *   Headers: Friendly, rounded sans-serif (Seed Design System) with strong weight.
    *   Body: Soft, readable sans-serif.
*   **Layout Systems**:
    *   Highly modular cards with generous border-radius (`rounded-2xl` or `rounded-3xl`).
    *   Optimized spacing for mobile viewports (as a mobile-first startup).
*   **GSAP / Scroll Animations**:
    *   **Micro-interactions**: Subtle hover state scales (`scale-[1.02]`), springy slide-ins.
    *   **Lottie/Canvas animations**: Integration of friendly character animations or UI flows triggered on scroll entrance.
