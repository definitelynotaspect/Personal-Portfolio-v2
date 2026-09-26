# Design Direction

## Three initial approaches

### Theme Name: Quiet Terminal
Very restrained editorial technology portfolio using warm neutrals, terminal details, and an asymmetric reading rhythm. It prioritizes clarity, craft, and a calm sense of technical confidence.
**Probability:** 0.07

### Theme Name: Signal / Grain
A darker, atmospheric portfolio using image grain, documentary framing, and amber signal accents. It leans cinematic while keeping the information architecture practical.
**Probability:** 0.04

### Theme Name: Field Notes
A light, paper-like interface with redacted snippets, research annotations, and modular case-study cards. It feels like a personal lab notebook translated into a polished digital portfolio.
**Probability:** 0.08

## Chosen approach: Quiet Terminal

### Design Movement
Contemporary editorial minimalism crossed with terminal UI culture and subtle Philippine material references.

### Core Principles
1. Make technical work feel tactile through monospace metadata, command-line fragments, and precise dividers.
2. Use editorial asymmetry instead of a copied portfolio grid: large statements offset by compact data panels.
3. Favor warm, human neutrals over cold blue-black technology defaults.
4. Keep every interaction legible, quick, and purposeful.

### Color Philosophy
The signature color is **burnt sampaguita** (`#b86f4b`): a muted terracotta that nods to barong embroidery and gives the interface a human, crafted pulse. Ink and parchment tones carry the core reading experience, while the dark mode becomes charcoal rather than pure black so surfaces retain depth. The theme switch changes atmosphere, not brand identity.

### Layout Paradigm
A vertical field-notes layout: sticky top navigation, a split hero with statement and portrait terminal, offset two-column about section, horizontally biased project rail, and a contact panel that reads like a final handoff note. Sections align to a shared reading line but intentionally break the center axis.

### Signature Elements
- ASCII portrait rendered from the supplied barong photograph.
- Terminal prompt labels and code-like content blocks as section framing devices.
- Fine ruled lines, paper grain, and one burnt-sampaguita accent used as a signal rather than decoration.

### Interaction Philosophy
Hover states reveal intent through small translations, accent rules, and command-like labels. Theme switching is a visible control with an accessible label. Project cards open with clear external-link affordances; tabs update the technical snapshot without page navigation.

### Animation
Use 180–260ms ease-out transitions for controls and cards. On first load, stagger hero content and section labels by 60ms. Project cards lift by 4px and brighten their border on hover. The ASCII portrait uses a soft scanline shimmer only when motion is allowed; reduced-motion users receive no shimmer.

### Typography System
Use **Newsreader** for expressive display headlines and **Manrope** for readable interface/body copy, with **IBM Plex Mono** for labels, code, and metadata. Headline hierarchy uses large, slightly tight Newsreader; body copy remains generous and calm; monospace is always uppercase or compact to create a technical index without becoming noisy.

### Brand Essence
A portfolio for a systems-minded builder who turns messy technical problems into calm, usable interfaces; distinctive because it combines human storytelling with terminal-level precision.
**Personality:** observant, warm, exacting.

### Brand Voice
Headlines are direct and lightly poetic. CTAs are active but not salesy. Microcopy sounds like a thoughtful engineer leaving useful breadcrumbs.

Example lines:
- “I make the complicated part feel obvious.”
- “Open the case study →”

### Wordmark & Logo
The wordmark is a compact uppercase `BARONG//LAB` lockup with a slash treated as a cursor, paired with a vertical embroidery-inspired mark. It should never use the brand name as plain default text without the cursor slash or mark.

### Signature Brand Color
**Burnt sampaguita — `#b86f4b`.**
