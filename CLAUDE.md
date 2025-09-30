# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Vortexx™ marketing website - a Next.js 15 application for an irrigation tire technology company. The site showcases revolutionary irrigation tire products engineered for center pivot systems.

**Tagline**: Driving Irrigation
**Provider**: AXON Tire and Wheel
**Website**: vortexxtire.com

## Product Lines

### Bi-Directional Radial
**Features:**
- Low soil compaction / low rutting
- Forward or reverse traction

**Sizes Available:**
- 380/85R24
- 290/85R38

### Radial
**Features:**
- Increased footprint
- Good traction

**Sizes Available:**
- 280/85R24
- 380/85R24
- 320/85R38

### Non-Directional
**Features:**
- Reduces downtime / combats ruts
- Forward or reverse traction

**Sizes Available:**
- 11.2x24
- 14.9x24
- 11.2x38

### Bias
**Features:**
- Cost effective

**Sizes Available:**
- 11.2x24
- 14.9x24
- 11.2x38

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack (runs on localhost:3000)
- `pnpm build` - Build production bundle with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Manager
- **Always use `pnpm`** - This project uses pnpm@10.9.0 as specified in package.json

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **React**: 19.1.0
- **UI Library**: shadcn/ui (New York style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Animation**: tw-animate-css

### Project Structure

```
vortexx/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Home page (imports section components)
│   └── globals.css      # Global styles with Tailwind v4 and CSS variables
├── components/
│   ├── navigation-header.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── products-section.tsx
│   ├── cta-section.tsx
│   ├── footer-section.tsx
│   └── ui/              # shadcn/ui components (accordion, button, card, etc.)
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── hooks/
│   └── use-mobile.ts    # Mobile detection hook
└── public/              # Static assets (logos, product images)
```

### Component Architecture

The homepage (`app/page.tsx`) is kept minimal and composed of section components:
- Each major page section is a separate component (hero-section, features-section, etc.)
- Component naming follows kebab-case convention (e.g., `navigation-header.tsx`)
- All section components are stored in `components/` (not in subdirectories)
- UI primitives from shadcn/ui are stored in `components/ui/`

### Path Aliases
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/utils` → `./lib/utils`
- `@/ui` → `./components/ui`

## Brand Guidelines

The Vortexx brand has specific color and design requirements (see VORTEXX_BRAND_GUIDELINES.md):

### Brand Colors
- **Rubber Black**: #000000
- **Gearbox Gray**: #343434
- **Aquifer Teal**: #188296 (primary brand color for links/accents)
- **Work Yellow**: #E9D342 (used for CTAs and buttons)

### Brand Fonts
- **KIONA**: Primary typeface (uppercase)
- **AACHEN**: Secondary typeface for print headlines

### Usage in Code
- The hex color values are used directly in Tailwind classes (e.g., `text-[#188296]`, `bg-[#E9D342]`)
- Maintain brand consistency when adding new components or features
- Logo file: `/public/VortexxLogo.svg`

## Styling Approach

### Tailwind CSS v4
- Uses CSS variables defined in `app/globals.css` with `@theme inline`
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *))`
- shadcn/ui components use CSS variables for theming (--primary, --accent, etc.)
- Border radius controlled via `--radius` variable (0.625rem)

### Custom Animations
- `spin-slow`: 8s linear infinite spin (defined in tailwind.config.ts)
- Additional animations available via tw-animate-css

## Development Notes

### Client Components
- Navigation and interactive components use `"use client"` directive
- Most section components are client components due to interactivity

### Image Optimization
- Uses Next.js `Image` component with priority loading for hero images
- SVG logos and images stored in `/public/`

### Responsive Design
- Mobile-first approach with breakpoints (md:, lg:)
- Mobile navigation menu with toggle state
- Container-based layout with responsive padding

## shadcn/ui Configuration

The project uses shadcn/ui with the following configuration:
- **Style**: new-york
- **Base color**: slate
- **CSS variables**: enabled
- **Icon library**: lucide-react
- **Components**: Extensive set including accordion, alert-dialog, button, card, carousel, chart, dialog, dropdown, etc.

To add new shadcn/ui components, they will be added to `components/ui/` with the configured aliases and styling.