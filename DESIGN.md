---
name: Grandmaster's Ledger
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  paper-white: '#FFFFFF'
  ink-black: '#0F172A'
  grandmaster-gold: '#D4AF37'
  slate-border: '#E2E8F0'
  deep-navy: '#1E293B'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-ui:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 32px
  container-max: 1200px
---

## Brand & Style

The design system is engineered to evoke the intellectual prestige and disciplined atmosphere of an elite chess academy. It targets serious practitioners, professionals, and aspiring masters who value strategic depth over gamified distractions.

The chosen style is **Editorial Minimalism**. It prioritizes extreme clarity, structured information hierarchy, and a high-contrast visual language that feels authoritative and institutional. By utilizing generous whitespace and a restricted, luxurious color palette, the system communicates a sense of quiet confidence and academic rigor. All elements are designed with a focus on structural integrity and legibility, ensuring an uncompromising commitment to WCAG accessibility.

## Colors

The palette is anchored by **Deep Midnight Blue (#0F172A)**, used for primary surfaces and typography to establish a stable, institutional foundation. **Crisp White (#FFFFFF)** provides the high-contrast background necessary for an editorial feel, while **Subtle Gold (#D4AF37)** is reserved exclusively for interactive accents, achievement markers, and high-priority calls to action.

Neutral tones are derived from a cool slate spectrum to maintain the professional aesthetic. Use `#F8FAFC` for subtle section backgrounds to break up the "paper" white surfaces without losing the clean, academic atmosphere.

## Typography

The typography system relies on **Inter**, a precise geometric sans-serif that ensures maximum legibility and a modern institutional feel. 

- **Display & Headlines:** Use tight letter-spacing and bold weights for a commanding presence.
- **Body Text:** Maintain generous line-heights to support long-form strategic analysis and academic reading.
- **Label Caps:** Small, uppercase labels with increased tracking should be used for metadata and eyebrow headlines to reinforce the editorial structure.
- **Notation:** For algebraic chess notation and move lists, a monospaced font (like Courier Prime) can be introduced to differentiate data from prose.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to maintain the feel of a printed academic journal, transitioning to a fluid model for mobile devices. 

- **Grid:** A 12-column grid with 24px gutters is the standard.
- **Vertical Rhythm:** Content should follow an 8px base unit for consistent vertical pacing.
- **Margins:** Large 32px or 48px page margins are encouraged to create a sense of focus and exclusivity.
- **Reflow:** On mobile, margins reduce to 16px and the grid collapses to a single column, ensuring that complex chess diagrams remain clear and readable.

## Elevation & Depth

To maintain the high-contrast editorial aesthetic, this design system avoids heavy shadows and skeuomorphism. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** Use flat colors to define hierarchy. Backgrounds are primarily white, with secondary content areas utilizing a very light slate gray.
- **Borders:** Instead of shadows, use 1px solid borders in `#E2E8F0` to define cards and containers.
- **Interactive Depth:** Only the primary buttons may use a very subtle, sharp 2px "drop" shadow to suggest a physical click, but otherwise, the UI remains strictly two-dimensional to favor a clean, document-like appearance.

## Shapes

The shape language is conservative and disciplined. A **Soft (0.25rem)** corner radius is applied to standard components like buttons and input fields to prevent the UI from feeling aggressive, while maintaining a sharp, professional edge.

- **Standard Elements:** 4px (0.25rem) radius.
- **Large Containers:** 8px (0.5rem) radius for cards.
- **Strict Square:** Use 0px radius for chess board squares and diagram containers to emphasize the precision of the game.

## Components

- **Buttons:** Primary buttons use Deep Midnight Blue with white text. Secondary buttons use a slate border with no fill. Gold is used only for the most critical actions (e.g., "Enroll Now").
- **Cards:** White background with a 1px slate border. No shadows. Used for lesson modules and coach profiles.
- **Input Fields:** Minimalist design with a 1px border. On focus, the border transitions to Deep Midnight Blue. Label text should use the `label-caps` style.
- **Chips:** Used for difficulty levels (Beginner, Intermediate, Master). Use a subtle light-gray fill with Deep Midnight Blue text.
- **Chess Diagrams:** Must be clear and high-contrast. Use the primary midnight blue and a light slate for the board squares to ensure the focus remains on the strategic positions.
- **Progress Indicators:** Use the Subtle Gold for progress bars to symbolize achievement and the path to mastery.
