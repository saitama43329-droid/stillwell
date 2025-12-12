# Elite Prompt for Fixing Russia CSS/CDN Issues

Use this prompt when you need to fix CSS loading issues for users in countries with CDN restrictions:

---

## The Prompt

```
I need to fix my website for users in Russia (or other countries with CDN restrictions) who see only black and white styling instead of my designed colors. The issue is that external CSS files are being blocked or loading too slowly.

Please implement a comprehensive fix that includes:

1. **Critical Inline CSS in HTML Head**
   - Add a <style> tag in the layout/head with all brand colors as CSS custom properties
   - Include base body styling (background, text color, font-family)
   - Add !important fallback classes for all color utilities

2. **Inline Style Attributes**
   - Add style={{}} props to all major sections (header, hero, features, footer)
   - Use hardcoded hex values, not Tailwind classes alone
   - Apply to: backgrounds, text colors, borders, SVG strokes

3. **CSS Custom Properties with Fallbacks**
   - Define :root variables for all brand colors
   - Use var(--color-name, #fallback) syntax throughout

4. **Enhanced Responsive Design**
   - Add extra-small breakpoint (xs: 360px) for foldable phones
   - Support devices as small as 280px (Galaxy Z Fold closed)
   - Ensure touch targets are minimum 44px
   - Add safe-area-inset support for notched devices

5. **Build Configuration**
   - Enable CSS optimization in Next.js/framework config
   - Add CORS headers for CSS files
   - Consider inlining critical CSS at build time

My brand colors are:
- [List your colors with hex values]

My framework is: [Next.js/React/Vue/etc.]
My deployment platform is: [Netlify/Vercel/etc.]

Please update all affected files and provide a testing checklist.
```

---

## Key Principles

1. **Never rely solely on external CSS** - Always have inline fallbacks
2. **Hardcode critical colors** - Don't trust CSS classes to load
3. **Test from restricted regions** - Use VPN or ask local users
4. **Consider alternative hosting** - Vercel/Cloudflare often work better than Netlify in Russia
5. **Mobile-first with extreme sizes** - Support 280px+ widths

## Quick Diagnostic

If users report "black and white" or "no styling":
- CSS file is blocked or timing out
- CDN is inaccessible from their region
- Solution: Inline critical styles in HTML

If users report "partial styling":
- Some CSS loaded, some didn't
- Solution: Add inline style attributes as fallbacks

If users report "slow loading then colors appear":
- CDN is throttled but not blocked
- Solution: Inline critical CSS for instant display
