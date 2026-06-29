# Luzz Homepage Spec

## Objective

Rebuild the visible `https://luzzpickleball.com/` homepage as a static-first Next.js page with lightweight client-side interactions for the hero carousel, announcements, product tabs, and FAQ accordion.

## Required Visual Traits

- High-contrast white-on-image header over hero
- Condensed uppercase headings
- Dark navy base color `#242833`
- Accent blue `#0075da`
- Accent violet `#aa78e7`
- Light gray support background `#f6f6f6`

## Required Content Blocks

- Three hero slides using captured real artwork
- Four-item review marquee
- Three spotlight product tabs with real product cards
- `Luzz Go!` section using player collage and SVG logo
- Warranty banner copy and CTA
- Four review thumbnails
- Five collection tiles
- Universal collaboration split section
- Five FAQ items
- Six LUZZ TEAM cards
- Footer menus and policy links

## Asset Rules

- Use local assets under `public/images/luzzpickleball/`
- Use local SEO assets under `public/seo/luzzpickleball/`
- Use local fonts via `next/font/local`

## Interaction Rules

- Hero auto-advances and exposes manual controls
- Announcement bar rotates
- Spotlight section is tab-driven
- FAQ is accordion-driven
- Team and review rows remain horizontally scrollable on narrow viewports
