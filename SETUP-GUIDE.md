# StillWell - Setup Guide for Domain & Icons

## 📋 Pre-Launch Setup Tasks

---

## 1. Google Search Console Verification

### When to Do This:
✅ **After** you have your domain name
✅ **After** you deploy the website to production

### Step-by-Step Instructions:

#### Step 1: Get Your Domain
1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Suggested domains:
   - `stillwell-english.com`
   - `stillwell-lessons.com`
   - `stillwell.ru` (for Russian audience)
   - `ksenia-english.com`

#### Step 2: Deploy Website
1. Deploy to Vercel/Netlify (recommended for Next.js)
2. Connect your domain to hosting
3. Wait for DNS to propagate (can take 24-48 hours)
4. Verify site is live at your domain

#### Step 3: Add to Google Search Console
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain (e.g., `https://stillwell-english.com`)
4. Choose verification method:

**Option A: HTML Tag (Easiest)**
- Google will give you a meta tag like:
  ```html
  <meta name="google-site-verification" content="ABC123XYZ..." />
  ```
- Copy the code (ABC123XYZ...)
- Open `app/layout.tsx`
- Find this line:
  ```typescript
  verification: {
    google: 'your-google-verification-code',
  },
  ```
- Replace `'your-google-verification-code'` with your actual code
- Deploy the update
- Go back to Search Console and click "Verify"

**Option B: DNS Record**
- Add TXT record to your domain DNS
- Easier if you have DNS access

#### Step 4: Submit Sitemap
1. After verification, go to "Sitemaps" in Search Console
2. Submit: `https://your-domain.com/sitemap.xml`
3. Google will start indexing your site

#### Step 5: Update Domain in Code
Replace `stillwell-english.com` with your actual domain in:
- `app/layout.tsx` (metadataBase)
- `public/sitemap.xml` (all URLs)
- `public/robots.txt` (sitemap URL)

**Files to Update:**
```typescript
// app/layout.tsx
metadataBase: new URL('https://YOUR-ACTUAL-DOMAIN.com'),

// public/sitemap.xml
<loc>https://YOUR-ACTUAL-DOMAIN.com/</loc>

// public/robots.txt
Sitemap: https://YOUR-ACTUAL-DOMAIN.com/sitemap.xml
```

---

## 2. Create PNG Icon Files

### Why PNG Icons?
- SVG favicon is already created ✅
- PNG icons needed for:
  - Android devices (192x192, 512x512)
  - iOS devices (apple-touch-icon)
  - PWA support
  - Better compatibility

### Option A: Use Online Tools (Easiest)

#### Method 1: Favicon Generator
1. Go to: https://realfavicongenerator.net/
2. Upload a logo or design (square, at least 512x512px)
3. Customize colors:
   - Background: `#8B9D83` (sage green)
   - Foreground: `#F5F1E8` (cream)
4. Click "Generate"
5. Download the package
6. Extract files to `/public/` folder:
   - `icon-192.png` → `/public/icon-192.png`
   - `icon-512.png` → `/public/icon-512.png`
   - `apple-touch-icon.png` → `/public/apple-touch-icon.png`

#### Method 2: Favicon.io
1. Go to: https://favicon.io/
2. Choose "Text" or "Image"
3. For text favicon:
   - Text: "SW" or "S"
   - Background: `#8B9D83`
   - Font: Georgia (serif)
   - Color: `#F5F1E8`
4. Download and extract to `/public/`

### Option B: Design Your Own

#### Using Figma (Free):
1. Create 512x512px canvas
2. Design your icon:
   - Background: Sage green (#8B9D83)
   - Add "SW" text or simple logo
   - Keep it simple and recognizable
3. Export as PNG:
   - 512x512px → `icon-512.png`
   - 192x192px → `icon-192.png`
   - 180x180px → `apple-touch-icon.png`

#### Using Canva (Free):
1. Create custom size: 512x512px
2. Design icon with brand colors
3. Download as PNG
4. Resize for different sizes

#### Using Photoshop/GIMP:
1. Create 512x512px document
2. Design icon
3. Save as PNG
4. Resize to 192x192px and 180x180px

### Option C: Use the SVG Favicon

If you want to quickly convert the existing SVG:

1. Open `public/favicon.svg` in browser
2. Take screenshot at 512x512px
3. Use online tool to resize:
   - https://www.iloveimg.com/resize-image
   - Resize to 512x512, 192x192, 180x180
4. Save as PNG files

### Icon Design Guidelines:

**Colors to Use:**
- Primary: `#8B9D83` (sage green)
- Secondary: `#F5F1E8` (cream)
- Accent: `#C97D60` (terracotta)
- Text: `#2C2C2C` (charcoal)

**Design Tips:**
- Keep it simple (recognizable at small sizes)
- Use high contrast
- Avoid fine details
- Test at 32x32px to see if still clear
- Square format (no rounded corners in source)

**Suggested Designs:**
1. **Letters**: "SW" or "S" in serif font
2. **Symbol**: Book icon with leaf
3. **Abstract**: Geometric shapes in brand colors
4. **Minimal**: Just the sage green background with cream accent

### File Specifications:

```
icon-192.png
- Size: 192x192 pixels
- Format: PNG
- Color: RGB
- Transparency: Optional
- Use: Android devices, PWA

icon-512.png
- Size: 512x512 pixels
- Format: PNG
- Color: RGB
- Transparency: Optional
- Use: Android devices, PWA, high-res displays

apple-touch-icon.png
- Size: 180x180 pixels
- Format: PNG
- Color: RGB
- Transparency: No (use solid background)
- Use: iOS devices, Safari bookmarks
```

### After Creating Icons:

1. Place files in `/public/` folder:
   ```
   /public/
     ├── icon-192.png
     ├── icon-512.png
     ├── apple-touch-icon.png
     ├── favicon.svg (already exists)
     └── favicon.ico (optional)
   ```

2. Verify in `app/layout.tsx` (already configured):
   ```typescript
   <link rel="icon" href="/icon.svg" type="image/svg+xml" />
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   ```

3. Verify in `public/manifest.json` (already configured):
   ```json
   "icons": [
     {
       "src": "/icon-192.png",
       "sizes": "192x192",
       "type": "image/png"
     },
     {
       "src": "/icon-512.png",
       "sizes": "512x512",
       "type": "image/png"
     }
   ]
   ```

4. Test icons:
   - Deploy website
   - Open on mobile device
   - Add to home screen
   - Check if icon appears correctly

---

## 3. Quick Icon Creation Service

### Recommended: Use AI Tools

**Option 1: Use ChatGPT/DALL-E**
Prompt: "Create a simple, minimalist icon for an English learning website called StillWell. Use sage green (#8B9D83) background with cream (#F5F1E8) accents. Square format, 512x512px. Clean, professional, educational theme."

**Option 2: Use Midjourney**
Similar prompt, download and resize

**Option 3: Hire on Fiverr**
- Search "favicon design"
- $5-20 for professional icon
- Provide brand colors and style guide
- Get all sizes delivered

---

## 📋 Pre-Launch Checklist

### Before You Have Domain:
- [x] Website built and functional
- [x] SEO meta tags added (with placeholder domain)
- [x] SVG favicon created
- [ ] PNG icons created (can do now!)
- [x] Sitemap created (with placeholder domain)
- [x] Robots.txt created

### After You Get Domain:
- [ ] Purchase domain
- [ ] Deploy to hosting (Vercel/Netlify)
- [ ] Connect domain to hosting
- [ ] Update domain in all files
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Search Console
- [ ] Test all icons on devices
- [ ] Verify site is live and working

---

## 🚀 Deployment Options

### Recommended: Vercel (Best for Next.js)
1. Sign up: https://vercel.com
2. Connect GitHub repository
3. Deploy (automatic)
4. Add custom domain
5. Free SSL certificate included

### Alternative: Netlify
1. Sign up: https://netlify.com
2. Connect GitHub repository
3. Deploy
4. Add custom domain
5. Free SSL included

### Other Options:
- AWS Amplify
- Cloudflare Pages
- DigitalOcean App Platform

---

## 💡 Tips

### Domain Selection:
- Keep it short and memorable
- Use `.com` for international, `.ru` for Russian audience
- Check availability: https://namecheap.com
- Consider buying both `.com` and `.ru`

### Icon Creation:
- Don't overthink it - simple is better
- Test at small sizes (32x32px)
- Use brand colors consistently
- Can always update later

### Google Search Console:
- Takes 24-48 hours for indexing to start
- Check weekly for issues
- Monitor search performance
- Fix any errors reported

---

## 📞 Need Help?

### Icon Creation:
- Fiverr: $5-20 for professional design
- Upwork: Hire designer
- Reddit r/freedesign: Free community help

### Domain & Hosting:
- Vercel Support: https://vercel.com/support
- Netlify Support: https://netlify.com/support

### Google Search Console:
- Help Center: https://support.google.com/webmasters
- Community Forum: https://support.google.com/webmasters/community

---

**Status**: 📋 Ready for domain purchase and icon creation
**Next Step**: Create PNG icons (can do now) → Get domain → Deploy → Verify
