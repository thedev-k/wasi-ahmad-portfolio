# DESIGN.md — Visual Architecture & Design System

**Project:** Wasi Ahmad Photography — Flagship Digital Experience  
**Aesthetic Profile:** High-Fashion Editorial Wedding Craft × Warm Alabaster Minimalist Luxury  
**Inspiration Synthesis:**
- **Primary Archetype:** [Blissful](https://blissful.framer.website/) (Hero composition, typography cadence, staggered entrance animations, pricing cards, testimonials, interactive FAQ)
- **Secondary Features:** [Hart & Co](https://hartandco-template.framer.website/) ("Love Stories We've Had The Honor To Tell", "A Few Favorite Frames", Background & Contact ASCII Art, Monumental Editorial Footer)
- **Exclusions Honored:** Excluded Blissful's Recent Works, Behind the Lens, and Footer.

---

## 1. Visual Identity & Creative Direction

### Vibe & Texture Archetype
- **Archetype:** **Editorial Luxury & Tactile Paper Craft**
- **Atmospheric Palette:** Warm alabaster creams (`#FAF5EA`, `#FAF3E9`), deep espresso-tinted carbon blacks (`#0C0C0C`, `#1D1C1B`), warm sand accents (`#F2EBE3`), and muted brass/champagne hairlines (`#D5CFC6`, `#E1DBD2`).
- **Surface Texture:** An ultra-subtle monospace ASCII art texture overlay (`opacity: 0.035`, `pointer-events-none`) derived from the Hart & Co background identity, creating a physical, editorial paper feel without cluttering image focus.
- **Hardware Doppelrand (Double-Bezel) Architecture:** High-end cards and visual frames utilize nested concentric containers (outer protective hairline shell + inner tactile core) to evoke bespoke gallery-framed prints.

---

## 2. Color System & Design Tokens

### Primary Surfaces & Canvas
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--surface-primary` | `#FAF5EA` | Primary background canvas (warm, soft alabaster cream) |
| `--surface-secondary` | `#F2EBE3` | Secondary elevated surface, card backgrounds, alternating tiers |
| `--surface-cream-muted` | `#EEE7DD` | Deep cream for inset pills, borders, and input fields |
| `--surface-dark` | `#0C0C0C` | Carbon black for high-contrast inverted cards, badges, and footer |
| `--surface-dark-elevated`| `#181818` | Elevated dark card surfaces and modals |

### Typography & Ink
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--text-primary` | `#1D1C1B` | Primary reading ink (deep warm charcoal, avoids harsh `#000`) |
| `--text-secondary` | `#575552` | Subtitles, body descriptions, and narrative prose |
| `--text-muted` | `#88867F` | Metadata, date timestamps, image labels, and helper copy |
| `--text-inverse` | `#FAF5EA` | Text on dark containers and footer elements |
| `--text-inverse-muted` | `#A19F9A` | Secondary text on dark surfaces |

### Hairlines & Borders
| Token Name | Value | Role & Usage |
| :--- | :--- | :--- |
| `--border-hairline` | `rgba(29, 28, 27, 0.08)` | Ultra-fine 1px separator lines on light backgrounds |
| `--border-subtle` | `#E1DBD2` | Card outlines, input borders, button boundaries |
| `--border-accent` | `#D5CFC6` | Active hover borders and selected states |
| `--border-dark-hairline`| `rgba(255, 255, 255, 0.12)` | Hairline dividers and cards on dark footer/sections |

### Accents & Tactile Details
| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--accent-brass` | `#9B8B70` | Subtle warm metallic bronze for badge outlines, stars, highlights |
| `--accent-gold-soft` | `#C4A77D` | Secondary warm foil highlight |
| `--ascii-overlay` | `rgba(29, 28, 27, 0.035)` | Tiled character texture opacity |

---

## 3. Typography Hierarchy & Optical Sizing

The typographical system marries high-fashion variable serifs with clinical, modern geometric grotesks.

### Font Families
1. **Primary Editorial Display & Italic Serif:** `Crimson Text`
   - *Characteristics:* Timeless bookish elegance, high stroke contrast, graceful italic swashes, warm editorial feel.
   - *Application:* Hero headline displays, pull-quotes, section titles, romantic italic emphasis, couple narratives.
2. **Secondary Interface Sans-Serif:** `Inter`
   - *Characteristics:* High legibility at micro sizes, clean neutral geometry, balanced tracking.
   - *Application:* Navigation menus, buttons, metadata labels, body copy, specs, and form controls.
3. **Architectural Monospace:** `Space Mono`
   - *Characteristics:* Fixed-pitch geometry, vintage camera metadata feel.
   - *Application:* ASCII art containers, dates, event numbering (`01 // 03`), camera focal specs.

### Scale & Sizing Rules

```css
/* Fluid Typography Scale */
--text-hero: clamp(3.75rem, 8.5vw, 7.5rem);     /* 60px - 120px | Line-height: 0.95 | Tracking: -0.03em */
--text-h1: clamp(3.0rem, 6.5vw, 5.25rem);        /* 48px - 84px  | Line-height: 1.02 | Tracking: -0.025em */
--text-h2: clamp(2.25rem, 4.5vw, 3.75rem);       /* 36px - 60px  | Line-height: 1.08 | Tracking: -0.02em */
--text-h3: clamp(1.5rem, 2.75vw, 2.25rem);       /* 24px - 36px  | Line-height: 1.2  | Tracking: -0.015em */
--text-h4: clamp(1.25rem, 2.0vw, 1.625rem);      /* 20px - 26px  | Line-height: 1.3  | Tracking: -0.01em */
--text-body-large: clamp(1.125rem, 1.4vw, 1.25rem); /* 18px - 20px | Line-height: 1.6  | Tracking: 0 */
--text-body: 0.9375rem;                          /* 15px         | Line-height: 1.65 | Tracking: 0.01em */
--text-caption: 0.8125rem;                       /* 13px         | Line-height: 1.5  | Tracking: 0.03em */
--text-eyebrow: 0.6875rem;                       /* 11px         | Line-height: 1.4  | Tracking: 0.22em | UPPERCASE */
```

---

## 4. Spacing, Grids & Spatial Rhythm

* **Macro Spacing:**
  * Section Vertical Padding: `py-24` (96px) on tablet, `py-36` (144px) to `py-44` (176px) on desktop.
  * Container Max-Width: `max-w-7xl` (1280px) for standard grids; `max-w-screen-2xl` (1440px) for wide editorial photo carousels.
* **Micro Spacing:**
  * Component Gap: `gap-6` (24px) to `gap-12` (48px) for cards; `gap-3` (12px) for badge pill clusters.
  * Section Header Margin: `mb-16` (64px) to `mb-20` (80px) between title blocks and content grids.
* **Responsive Collapse Matrix:**
  * Breakpoint `md:` (768px): All multi-column grids collapse into `grid-cols-1`, horizontal margins adjust to `px-6`.
  * Breakpoint `lg:` (1024px): Split editorial columns engage (50/50 or 60/40).
  * Breakpoint `xl:` (1280px): Full panoramic layouts with floating micro-images.

---

## 5. Component Architecture (Haptic & Double-Bezel)

### A. The "Doppelrand" Gallery Frame (Cards & Images)
Never place images directly on raw backgrounds. Every photo card follows the two-tiered machined framework:
* **Outer Shell:**
  * Background: `rgba(29, 28, 27, 0.03)` on light surfaces; `rgba(255, 255, 255, 0.04)` on dark surfaces.
  * Border: `1px solid rgba(29, 28, 27, 0.08)` / `ring-1 ring-black/5`.
  * Padding: `p-2` (8px) or `p-2.5` (10px).
  * Corner Radius: `rounded-[2rem]` (32px).
* **Inner Core:**
  * Content: Image container with `rounded-[calc(2rem-0.625rem)]` (22px) concentric curvature.
  * Overflow: `overflow-hidden`.
  * Highlight: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]`.

### B. Nested "Island" Action Buttons
* **Structure:** Pill button (`rounded-full`, `px-7 py-3.5`), background `--surface-dark` (`#0C0C0C`), text `--text-inverse`.
* **The "Button-in-Button" Trailing Icon:** An internal circular housing (`w-8 h-8 rounded-full bg-white/15 flex items-center justify-center ml-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5`).
* **Secondary Island Button:** Transparent or `--surface-secondary`, hairline border `border border-[#D5CFC6]`, text `--text-primary`.

### C. Eyebrow Tag Pill
* Small capsule badge placed above major section titles:
  * CSS: `inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] uppercase font-medium tracking-[0.25em] text-[#575552]`
  * Subtle pulsing indicator dot: `w-1.5 h-1.5 rounded-full bg-[#9B8B70]`.

---

## 6. ASCII Art Graphic Blueprint (Hart & Co Integration)

The ASCII art system has two synchronized roles:

### 1. Ambient Background Micro-Texture
* **Asset:** `TaD6OagljgUWRQJiaiX0Be0OY.png` (or CSS monospace repeating pattern)
* **Application:** Positioned fixed or absolute behind key sections (Hero, Love Stories, Contact).
* **Styling:** `opacity-[0.03]`, `pointer-events-none`, `mix-blend-mode: multiply`, providing a tactile, archival texture that feels woven into the parchment surface.

### 2. Rotated Architectural ASCII Art Cards
Directly matching Hart & Co's avant-garde graphic layout, rotated standalone ASCII art illustrations sit as tactile anchors:
* **Contact Section Graphic Anchor:**
  * Asset: `HXVwuWTbofMzMKjuYEGtJIa3A.png`
  * Transform: `transform: rotate(90deg)`
  * Container: Inset within the contact form column with hairline border and soft rounded enclosure.
* **Awards / Love Stories Accent:**
  * Asset: `6aROwKplTnFzpFtPwEhRsqbdxY.png` / `61D5V0ycfWyFal8a0T59lTvLyc.png`
  * Transform: `transform: rotate(-90deg)` or `transform: rotate(50deg)`
  * Role: Breaks rectilinear digital monotony and provides a physical printmaker feel.

---

## 7. Motion Choreography & Kinetic Physics

Strictly adhering to `web-animation-design`, `apple-design`, and `gsap-core`:
* **Banned Transitions:** Standard `ease`, `linear`, or uncalibrated `ease-in-out`.
* **Primary Spring Curve:** `cubic-bezier(0.16, 1, 0.3, 1)` (Fluid Apple momentum).
* **Secondary Snappy Curve:** `cubic-bezier(0.32, 0.72, 0, 1)` (Micro-interactions, button hover tension).

### Specific Motion Behaviors
1. **Hero Word/Character Stagger:**
   * Text lines masked in overflow hidden wrappers.
   * Elements translate from `translateY(110%)` to `translateY(0%)` with a staggered delay of `0.04s` per line, accompanied by an opacity sweep over `900ms`.
2. **Parallax Image Levitation (Hero & Stories):**
   * Floating hero preview images employ subtle opposing vertical parallax on scroll (`y: -25px` and `y: 35px`) simulating three-dimensional spatial depth.
3. **Card Hover Dynamic:**
   * On cursor hover, the inner image scales smoothly (`scale-105`) over `800ms cubic-bezier(0.16, 1, 0.3, 1)`.
   * Outer shell elevates with an ambient diffused shadow (`shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)]`).
4. **Interactive Accordion (FAQ):**
   * CSS Grid height interpolation (`grid-template-rows: 0fr` to `1fr`) with zero layout reflow jank.
   * Plus-to-Minus icon rotation (`rotate-0` to `rotate-45`).

---

## 8. Landing Page Section-by-Section Blueprint

```
+-------------------------------------------------------------------------+
| [1. FLOATING ISLAND NAVIGATION]                                         |
| Logo: WASI AHMAD  |  Stories · Frames · Collections · Reviews · FAQ    |  [Check Availability ↗]
+-------------------------------------------------------------------------+
| [2. HERO SECTION — BLISSFUL CADENCE]                                    |
| Eyebrow: [•] LAHORE, PAKISTAN · EST. 2013                               |
| Title: "Where Love Stories Become Art."                                 |
| Subtitle: "Every timeless frame celebrates the connections, details,   |
|            and quiet emotions that make your celebration unforgettable."|
| Actions: [Explore Collections ↗]  [View Selected Frames]               |
| Floating Dual-Editorial Imagery with subtle tilt and parallax           |
+-------------------------------------------------------------------------+
| [3. BRAND CREDENTIALS STRIP — HART & CO RHYTHM]                         |
| "11+ Years of Stories" · "5.0 ★ Client Rating" · "87K+ Community"       |
| "Lahore · Islamabad · Dubai · Worldwide"                                |
+-------------------------------------------------------------------------+
| [4. LOVE STORIES WE'VE HAD THE HONOR TO TELL — HART & CO RECREATION]    |
| Section Header + Narrative Introduction                                 |
| Story 01: Zainab & Bilal — Haveli Barood Khana, Lahore (Barat)          |
| Story 02: Minahil & Farhan — Margalla Hills Estate, Islamabad (Nikkah)  |
| Story 03: Areeba & Daniyal — Royal Palm & Dubai Desert (Walima)         |
| Asymmetric layout · Double-bezel gallery cards · Date & Venue Pills     |
+-------------------------------------------------------------------------+
| [5. A FEW FAVORITE FRAMES — HART & CO RECREATION]                       |
| Section Header + Curated selection blurb                                |
| Staggered horizontal mosaic / interactive showcase                      |
| Frame 01: "The Golden Hour Veil" (Lahore Fort)                          |
| Frame 02: "Emotional Rukhsati Reflections" (Civil Lines)                |
| Frame 03: "Vintage Mercedes Grand Entrance" (DHA Phase 6)               |
| Frame 04: "Subtle Emerald & Heritage Heirlooms" (Gulberg)               |
+-------------------------------------------------------------------------+
| [6. WORDS FROM OUR COUPLES — BLISSFUL TESTIMONIAL CADENCE]              |
| Verified 5.0 Star Reviews (Minahil Shahid, Jamal Malhi, Ali Raza, etc.) |
| Minimalist triple-card quote layout with five-star markers              |
+-------------------------------------------------------------------------+
| [7. CURATED COLLECTIONS & INVESTMENT — BLISSFUL 3-TIER PRICING]         |
| Card 01: The Essential Collection (Single Event / Nikkah, 4h)           |
| Card 02: The Signature Wedding Story (Barat/Walima, 8h) [FEATURED]      |
| Card 03: The Royal Heritage Heirloom (Multi-Day 3-Day Wedding, 12h)     |
| Exact feature checks, delivery timelines, heirloom album inclusion      |
+-------------------------------------------------------------------------+
| [8. FREQUENTLY ASKED QUESTIONS — BLISSFUL INTERACTIVE ACCORDION]        |
| 6 Smooth expanding Q&As (Booking in advance, Turnaround, Travel, Style) |
+-------------------------------------------------------------------------+
| [9. INQUIRY & CONTACT SECTION — HART & CO ASCII SPLIT]                  |
| Left Column: Contact details, WhatsApp, Studio Address,                 |
|              Rotated 90° Monospace ASCII Art Graphic Card               |
| Right Column: Interactive Bridal Booking Inquiry Form                   |
+-------------------------------------------------------------------------+
| [10. MONUMENTAL FOOTER — HART & CO RECREATION]                          |
| Huge Serif Typography: "WASI AHMAD PHOTOGRAPHY"                         |
| Direct Booking Email & WhatsApp Links                                   |
| Studio: House #45-B, Military Accounts Society, Lahore, Pakistan        |
| Socials: Instagram (87K) · Facebook (34K) · Threads                     |
| Copyright & Fine Art Preservation Notice                                |
+-------------------------------------------------------------------------+
```

---

## 9. Performance & Accessibility Guardrails

1. **Hardware Acceleration:** All animations operate exclusively on `transform` and `opacity`. Zero animations triggering `layout` (e.g. `top`, `height`, `margin`).
2. **Filtered Blur Discipline:** `backdrop-blur` is restricted strictly to the floating navbar and modal overlays. It is forbidden on scrolling feed containers.
3. **Contrast Compliance:** All text tokens exceed WCAG AA contrast ratio (4.5:1 for body copy, 3:1 for large display).
4. **Reduced Motion Graceful Degradation:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
