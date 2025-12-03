# Technology Stack

## Framework & Core

- **Next.js 14**: React framework with App Router
- **React 18**: UI library with hooks-based state management
- **TypeScript 5**: Type-safe development

## Styling

- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

## Build System

- **Node.js**: Runtime environment
- **npm**: Package manager

## Common Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000
npm run dev -H 0.0.0.0  # Start dev server accessible on network

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint

# Quick Start (Windows)
run.bat              # Install dependencies and start dev server
```

## Deployment

- **Platform**: Netlify
- **Config**: netlify.toml in root
- **Build command**: `npm run build`
- **Output directory**: `.next`

## Key Dependencies

- No external UI libraries (custom components)
- No state management libraries (React Context API)
- No routing libraries (Next.js built-in)
- No animation libraries (CSS transitions and custom React hooks)
