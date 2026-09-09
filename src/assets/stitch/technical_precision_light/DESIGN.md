---
name: Technical Precision Light
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5a4136'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a14000'
  primary: '#a14000'
  on-primary: '#ffffff'
  primary-container: '#ff6a00'
  on-primary-container: '#571f00'
  inverse-primary: '#ffb694'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#0053db'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e93ff'
  on-tertiary-container: '#002a78'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  code-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-ui:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  max-width-content: 80rem
---

## Brand & Style

This design system establishes an architectural, luminous, and hyper-organized aesthetic tailored for high-stakes engineering and infrastructure services. Departing decisively from archaic, dense industrial enterprise software and murky dark modes, it balances Swiss structural discipline with the radiant clarity of contemporary drafting software. 

The emotional tone is rigorous, reliable, and razor-sharp:
- **Tone:** Engineered, transparent, calibrated, and unmistakably competent.
- **Audience:** Plant managers, civil engineering clients, technical directors, and operations leads who value instant visibility, clarity over embellishment, and measurable precision.
- **Design Movement:** Clean Precision Minimalism infused with Architectural Grid aesthetics. High-luminance field surfaces provide breathability, while surgical 1px drafting lines, hairline divider grids, and high-visibility safety accents guide functional interaction.

## Colors

The palette simulates an immaculate technical blueprint workspace bathed in daylight. Pristine whites and crisp cold slates provide pure legibility and an uncluttered canvas, punctuated strictly by an industrial high-visibility safety orange for operational priority.

- **Primary Accent (`#FF6A00` - Industrial Safety Orange):** Reserved strictly for primary calls to action, operational state changes, active indicators, and high-priority critical alerts. It must never be diluted with pastel variations; it demands high situational attention.
- **Secondary Deep Base (`#0F172A` / `#1E293B` - Structural Slate & Navy):** Used for typography, strict framing geometry, high-contrast badges, and primary navigational scaffolding. Delivers definitive contrast ratios exceeding 12:1 against light surfaces.
- **Tertiary Accent (`#2563EB` - Blueprint Blue):** Employed for supplementary technical telemetry, informational metrics, schematics markers, and hyperlinked technical documentation.
- **Surface Architecture:**
  - `Surface Base`: `#FFFFFF` (pure canvas for work tables, data tables, and input elements).
  - `Surface Subdued`: `#F8FAFC` (app frame, canvas background, section alternating panels).
  - `Surface Elevated`: `#F1F5F9` (card backings, toolbars, docked control shelves).
- **Drafting Borders & Dividers (`#E2E8F0`):** Hairline precision rules defining modules, grids, and boundaries without visual weight.
- **Text & Semantic Hierarchy:**
  - `Text Primary`: `#0F172A` (maximum crispness for technical specs and data points).
  - `Text Muted`: `#64748B` (metadata, units of measurement, timestamps, inactive states).
  - `Border Strong`: `#CBD5E1` (interactive boundaries, focus framing).

## Typography

The typographic hierarchy combines geometric engineering authority with clinical readability:
- **Headlines (`Space Grotesk`):** Imparts an architectural, modern structural feel. Tightly tracked letterforms create commanding titles and sector labels without appearing decorative.
- **Body (`Manrope`):** Delivers open counters, neutral geometry, and high legibility across variable light conditions, long technical document reads, and interface copy.
- **Technical Readouts & Data (`JetBrains Mono`):** Dedicated to technical references, serial numbers, engineering tolerance limits, telemetry tables, code snippets, and capitalized micro-labels. Its monospaced proportions ensure numbers never jitter during live updates.

## Layout & Spacing

The layout is anchored on an 8pt base grid with a 12-column architectural fluid framework:
- **Desktop (>= 1280px):** 12 columns, 24px gutters (`gutter-desktop`), 48px outer margins (`margin-desktop`), with a maximum constrained content bounding box of 1280px (`max-width-content`). Uncluttered margins allow the luminous white canvas to feel expansive.
- **Tablet (768px - 1279px):** 8 columns, 24px gutters, 32px outer margins. Data panels collapse from tripartite arrangements to clean split views.
- **Mobile (<= 767px):** 4 columns, 16px gutters (`gutter-mobile`), 20px margins (`margin-mobile`). Complex tabular data reflows into single-column modular diagnostic cards.

Rhythm is maintained through generous vertical air. Dense information clusters (like telemetry tables or specification lists) are encapsulated within expansive macro-spacing to guarantee that each block retains immediate cognitive focus.

## Elevation & Depth

This design system avoids muddy, heavy drop shadows in favor of **Structural Flat Depth** and **Tonal Precision Layering**:
- **Borders over Shadows:** Hairline borders (`1px solid #E2E8F0`) establish depth and containment. Panels do not hover ambiguously; they snap precisely onto the drafting surface.
- **Tonal Stepping:**
  - `Layer 0 (Ground)`: `#F8FAFC` - Ambient canvas.
  - `Layer 1 (Substrate)`: `#FFFFFF` - Primary cards, panels, and data tables bordered by `#E2E8F0`.
  - `Layer 2 (Elevated)`: `#F1F5F9` - Flyouts, inspection panels, toolbars.
- **Micro-Shadows for Overlays Only:** Modals and dropdown menus utilize a crisp, ultra-subtle ambient drop shadow tinted with deep slate (`box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 1px 3px 0 rgba(15, 23, 42, 0.04)`), paired with a definitive `1px solid #CBD5E1` perimeter stroke.

## Shapes

The shape language reflects calibrated engineering instruments:
- **Base Curvature:** Subtle, controlled softness (`roundedness: 1` / `4px`). This prevents the UI from feeling abrasively brutalist while remaining strictly technical, functional, and disciplined.
- **Containers & Panels:** Cards, inspection tables, and interactive panels implement `rounded-md` (`6px`) with 1px drafting borders.
- **Form Controls & Triggers:** Buttons, search fields, text inputs, and segmented controls standardize on `rounded` (`4px`).
- **Capsule Formats (`rounded-full`):** Reserved exclusively for status indicators, operational telemetry pills, and alert counters to create an explicit distinction between structural data frames and dynamic status tags.

## Components

### Buttons
- **Primary:** High-visibility Safety Orange (`#FF6A00`) fill, pure white (`#FFFFFF`) bold label, 0 border, 4px corner radius. Hover transitions to `#E55F00`. Focus exhibits a 2px offset safety ring (`rgba(255, 106, 0, 0.35)`).
- **Secondary / Technical Outlined:** `#FFFFFF` background, 1px solid `#CBD5E1` border, `#0F172A` label text. Hover brings `#F8FAFC` fill and `#0F172A` border.
- **Tertiary Blueprint:** Ghost style, transparent fill, `#2563EB` text with underline on hover.
- **Sizes:** Standard 36px height for data-dense engineering screens; 44px for high-priority workflows.

### Chips & Status Indicators
- **Operational Tag:** JetBrains Mono uppercase (`label-caps`), padding `2px 8px`, 1px solid border.
  - *Normal/Active:* `#F0FDF4` background, `#16A34A` text, `#BBF7D0` border.
  - *Maintenance/Alert:* `#FFF7ED` background, `#FF6A00` text, `#FFEDD5` border.
  - *System Nominal:* `#F1F5F9` background, `#475569` text, `#E2E8F0` border.

### Cards & Modules
- Pristine `#FFFFFF` background, encased in `1px solid #E2E8F0`. Padding follows strict intervals: 24px internal padding for hero metrics, 16px for data modules.
- Header bars within cards are partitioned with an explicit horizontal hairline divider (`#E2E8F0`), maintaining separation between module title (Space Grotesk) and operational body data.

### Input Fields & Controls
- **Text Inputs:** Height 40px, `#FFFFFF` background, `1px solid #CBD5E1` border, 4px radius. Inner padding `8px 12px`. Placeholders in `#94A3B8`. Focus state shifts the border to `#0F172A` with a razor-thin 1px inset indicator.
- **Checkboxes & Radios:** Sharp 4px square or circle with `1px solid #94A3B8` inactive state. Active state fills with `#0F172A` or `#FF6A00` with high-contrast white checkmark icon.

### Technical Data Tables & Lists
- Crisp rows with `1px solid #F1F5F9` row dividers and alternating background subtle strips on hover (`#F8FAFC`).
- Header cells styled in JetBrains Mono (`label-caps`), `#64748B`, uppercase, padded `12px 16px`.
- Numerical tabular values set in JetBrains Mono (`code-data`) aligned right for optical comparison.