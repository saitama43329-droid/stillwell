# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages
  /about               # About page
  /lessons             # Lessons overview page
  /privacy             # Privacy policy page
  /start-journey       # Contact/CTA page
  /terms               # Terms of service page
  /view-lessons        # Children's lessons page
  globals.css          # Global styles
  layout.tsx           # Root layout with metadata
  page.tsx             # Home page
  opengraph-image.tsx  # OG image generator

/components            # Reusable React components
  LanguageSwitcher.tsx # Language toggle (EN/RU)
  TypingAnimation.tsx  # Typing effect component

/lib                   # Utilities and context
  LanguageContext.tsx  # i18n context provider
  translations.ts      # All translation strings

/public                # Static assets
  favicon.svg
  manifest.json
  robots.txt
  sitemap.xml

/.kiro                 # Kiro configuration
  /steering            # AI assistant guidance docs
```

## Code Conventions

### Component Patterns

- **Client components**: Use `"use client"` directive for interactivity
- **Server components**: Default for static content
- **Hooks**: Custom hooks for reusable logic (typing animations)
- **Context**: React Context API for global state (language preference)

### Styling Patterns

- **Tailwind utilities**: Primary styling method
- **Custom colors**: Defined in tailwind.config.ts (cream, sage, charcoal, terracotta, warmWhite)
- **Responsive design**: Mobile-first with sm/md/lg breakpoints
- **Animations**: CSS transitions and custom React timing hooks

### Internationalization

- **Languages**: English (en) and Russian (ru)
- **Storage**: localStorage for language preference
- **Structure**: Nested translation objects in lib/translations.ts
- **Pattern**: `translations[language].section.key`

### Routing

- **File-based routing**: Next.js App Router convention
- **Navigation**: Next.js Link component for client-side transitions
- **Pages**: Each route has a page.tsx file

### State Management

- **Local state**: useState for component-level state
- **Global state**: React Context (LanguageContext)
- **Side effects**: useEffect for timers, localStorage, mounting

## Naming Conventions

- **Files**: PascalCase for components (LanguageSwitcher.tsx), lowercase for pages (page.tsx)
- **Components**: PascalCase function names
- **Variables**: camelCase
- **Constants**: camelCase for translation objects
- **CSS classes**: Tailwind utilities (kebab-case values)

## Key Architectural Decisions

- No external component libraries (custom implementations)
- Bilingual from the ground up (not an afterthought)
- SEO-first with comprehensive metadata
- Mobile-responsive with slide-out navigation
- WhatsApp integration for contact (no forms)
