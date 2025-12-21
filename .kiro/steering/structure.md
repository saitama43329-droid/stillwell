# StillWell - Project Structure

## Directory Layout

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata, fonts, critical CSS
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── opengraph-image.tsx # Dynamic OG image generation
│   ├── about/              # About page
│   ├── blog/               # Blog listing and [slug] articles
│   ├── faq/                # FAQ page
│   ├── lessons/            # Lessons overview
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── start-journey/      # Contact/booking CTA page
│   └── view-lessons/       # Detailed lesson options
│
├── components/             # Reusable React components
│   ├── Icon.tsx            # Self-hosted SVG icon component
│   ├── LanguageSwitcher.tsx
│   └── TypingAnimation.tsx
│
├── lib/                    # Shared utilities and context
│   ├── translations.ts     # All UI text (EN/RU)
│   ├── articleContent.ts   # Blog article content
│   └── LanguageContext.tsx # Language state provider
│
├── public/                 # Static assets (all self-hosted)
│   ├── logoicon.png        # Site logo/favicon
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── fonts/              # Self-hosted fonts (woff2)
│   │   ├── fonts.css       # Font-face declarations
│   │   ├── Inter-Regular.woff2
│   │   ├── Inter-Medium.woff2
│   │   ├── Inter-SemiBold.woff2
│   │   ├── Inter-Bold.woff2
│   │   ├── SourceSerif-Regular.woff2
│   │   └── SourceSerif-Bold.woff2
│   └── icons/              # Self-hosted SVG icon sprite
│       └── icons.svg       # Icon sprite with all UI icons
```

## Architecture Patterns

### Internationalization
- Language stored in React Context (`LanguageContext`)
- Persisted to localStorage
- All text in `lib/translations.ts` with `en` and `ru` keys
- Components access via `useLanguage()` hook

### Page Structure
- Each page is a client component (`"use client"`)
- Common pattern: header → hero → content sections → CTA → footer
- Mobile menu implemented with DOM manipulation (getElementById)

### Styling Conventions
- Tailwind utility classes for layout
- Inline styles for brand colors (ensures Russia CDN compatibility)
- Responsive: mobile-first with xxs/xs/sm/md/lg/xl/2xl/3xl/4xl breakpoints
- Custom color classes: `bg-cream`, `text-sage`, `bg-terracotta`, etc.
- iOS-style utilities: `shadow-ios-*`, `rounded-ios-*`, `transition-tactile`
- Fluid typography for smallest devices: `text-fluid-*`
- Use `<Icon name="..." />` component instead of emojis for self-hosting

### Component Patterns
- Typing animation components defined inline in pages
- Shared components in `/components` are minimal
- No prop drilling - context for global state only
- Icon component uses SVG sprite from `/public/icons/icons.svg`
