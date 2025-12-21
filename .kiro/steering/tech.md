# StillWell - Technical Stack

## Framework & Runtime
- Next.js 14 (App Router)
- React 18
- TypeScript 5 (strict mode)
- Node.js (see .nvmrc for version)

## Styling
- Tailwind CSS 3.4
- Self-hosted fonts: Inter (sans) + Source Serif (serif) in `/public/fonts/`
- Custom color tokens: cream, sage, charcoal, terracotta, warmWhite
- Custom breakpoints optimized for all devices (xxs: 280px to 4xl: 1536px)
- Critical CSS inlined in layout for Russia CDN reliability
- Self-hosted fonts and icons (no external CDN dependencies)

## Design System
- iOS-inspired tactile shadows: `shadow-ios-sm/md/lg/xl`
- iOS border radius: `rounded-ios-sm/md/lg/xl/2xl`
- Fluid typography: `text-fluid-xs` through `text-fluid-6xl`
- Premium transitions: `transition-tactile`, `press-effect`
- Glass morphism header: `.glass` class

## Build & Development

### Commands
```bash
npm run dev      # Start dev server (binds to 0.0.0.0)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

### Quick Start
```bash
run.bat          # Windows: installs deps and starts dev server
```

## Path Aliases
- `@/*` maps to project root (e.g., `@/lib/translations`)

## Deployment
- Configured for Vercel (vercel.json)
- Netlify support (netlify.toml)
- Static image optimization disabled for compatibility

## Key Dependencies
- No external UI libraries - custom components only
- No state management library - React Context for language
- No database - static content with translations

## Configuration Files
- `next.config.js` - Next.js config with security headers
- `tailwind.config.ts` - Custom theme colors and fonts
- `tsconfig.json` - TypeScript with strict mode
- `postcss.config.mjs` - PostCSS with Tailwind
