---
name: Lyrical Scholar
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#424750'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#727782'
  outline-variant: '#c2c7d2'
  surface-tint: '#1c60a3'
  primary: '#1c60a3'
  on-primary: '#ffffff'
  primary-container: '#7eb6ff'
  on-primary-container: '#004680'
  inverse-primary: '#a3c9ff'
  secondary: '#81515a'
  on-secondary: '#ffffff'
  secondary-container: '#fdbec9'
  on-secondary-container: '#7a4a54'
  tertiary: '#5e604d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b4b59e'
  on-tertiary-container: '#454735'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004882'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#f4b6c1'
  on-secondary-fixed: '#330f19'
  on-secondary-fixed-variant: '#663a43'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-padding: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system captures a "vintage-modern" essence, blending the nostalgic charm of a 1940s jazz lounge with the structured clarity of modern information systems. It targets a professional audience that values both technical rigor and artistic soul.

The aesthetic direction is **Minimalist-Tactile**. It utilizes expansive whitespace (cream and ivory) to create an "academic" breathing room, while employing soft, diffused shadows to give elements a delicate, paper-like presence. Visual interest is driven by fine-line floral illustrations—lilies, roses, and forget-me-nots—that act as organic anchors against the structured layout. The emotional response is one of calm, intellectual curiosity, and timeless elegance.

## Colors

The palette is rooted in a sophisticated trio of "Old-World" neutrals and "New-Age" pastels.

*   **Primary (Forget-me-not Blue):** Used for primary actions, subtle accents, and links. It represents the "systems" and "intellectual" depth of the portfolio.
*   **Secondary (Soft Pink):** Used for highlights, decorative floral motifs, and secondary interactions. It brings warmth and the "musical" personality to the fore.
*   **Backgrounds (Ivory & Cream):** The base layers utilize `#FAF9F6` (Ivory) for the main canvas and `#F5F5DC` (Beige/Cream) for container surfaces to avoid the harshness of pure white, reinforcing the vintage paper feel.
*   **Typography:** A deep charcoal-sepia (`#2D2926`) is used instead of pure black to maintain a soft, printed-ink appearance.

## Typography

This design system employs a dual-typeface strategy to represent the intersection of music and technology.

*   **Headings (Noto Serif):** Represents the "Laufey-inspired" musical and business side. It is classic, authoritative, and romantic. Use generous line heights for displays to evoke a sheet-music aesthetic.
*   **Body & UI (Manrope):** Represents the "Information Systems" side. It is a clean, balanced sans-serif that ensures high readability for technical case studies and data-driven content.
*   **Labels:** Small-caps are used for metadata and labels to provide an organizational, archival feel similar to library cataloging.

## Layout & Spacing

The layout follows a **Fixed Grid** model with an emphasis on asymmetrical balance. A 12-column grid is used for the main desktop view, but content is often offset to allow for floral illustrations to "bloom" in the margins.

*   **Rhythm:** An 8px base unit drives all spacing.
*   **Margins:** Generous outer margins (minimum 40px) ensure the content feels framed, like a page in an art book.
*   **Sectioning:** Large vertical gaps (120px+) distinguish different "chapters" of the portfolio, emphasizing a slow, intentional browsing experience.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering** rather than heavy borders.

*   **Shadows:** Use extremely soft, long-range shadows with a slight tint of the Primary Blue (`rgba(126, 182, 255, 0.08)`) to lift cards off the cream background.
*   **Layers:** High-priority content sits on Ivory surfaces, while supplementary information or "side-notes" reside on slightly darker Cream (`#F5F5DC`) containers.
*   **Glassmorphism:** Use subtle backdrop blurs (8px to 12px) for navigation bars to allow the floral background elements to remain visible as the user scrolls.

## Shapes

The shape language is **Soft** but structured. 

A 0.25rem (4px) base radius is applied to buttons and input fields to maintain a professional, "sharpened" academic look. Larger containers like cards use a 0.5rem (8px) radius to feel more approachable. Floral illustrations should never be contained in rigid boxes; they should break the "grid" and overlap edges to reinforce the dreamy, organic mood.

## Components

*   **Buttons:** Primary buttons use the Forget-me-not Blue with white text. Secondary buttons are "ghost" style with a Soft Pink border and Noto Serif labels.
*   **Cards:** Portfolio cards feature a soft shadow, Ivory background, and a small floral icon in the bottom right corner.
*   **Chips/Tags:** Used for technical skills, these utilize a Manrope SemiBold font on a very light pink background with no border.
*   **Inputs:** Minimalist bottom-border only for a "ledger" or "stationery" feel. The label stays in Manrope uppercase.
*   **Progress Indicators:** Vertical timelines (for resumes) use a delicate vine-and-leaf motif instead of standard lines and dots.
*   **Navigation:** A center-aligned, floating header with a blurred background and Noto Serif links.