import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "StillWell - Master English with Calm Confidence",
  description: "Premium English lessons for children aged 13 and below. Personal one-on-one instruction with experienced teacher Ksenia Volchemateva in Amazar, Russia.",
  keywords: "English lessons, English teacher, children English, Amazar, Ksenia Volchemateva, personal English tutor, English for kids, Zabaykalsky Krai",
  authors: [{ name: "Ksenia Volchemateva" }],
  creator: "StillWell English Lessons",
  publisher: "StillWell",
  metadataBase: new URL('https://stillwell-english.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "StillWell - Master English with Calm Confidence",
    description: "Premium English lessons for children aged 13 and below. Personal one-on-one instruction with experienced teacher Ksenia Volchemateva.",
    url: 'https://stillwell-english.com',
    siteName: 'StillWell English Lessons',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StillWell English Lessons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "StillWell - Master English with Calm Confidence",
    description: "Premium English lessons for children aged 13 and below.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Critical inline CSS for Russia - ensures colors and fonts load even if CDN is blocked
// Uses self-hosted Inter + Source Serif fonts
const criticalCSS = `
  :root {
    --color-cream: #F5F1E8;
    --color-sage: #8B9D83;
    --color-charcoal: #2C2C2C;
    --color-terracotta: #C97D60;
    --color-warmWhite: #FDFBF7;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-serif: 'Source Serif', Georgia, serif;
    --shadow-soft: 0 2px 8px rgba(44, 44, 44, 0.06), 0 1px 2px rgba(44, 44, 44, 0.04);
    --shadow-medium: 0 4px 16px rgba(44, 44, 44, 0.08), 0 2px 4px rgba(44, 44, 44, 0.04);
    --radius-lg: 16px;
    --radius-xl: 20px;
  }
  html, body {
    margin: 0;
    padding: 0;
    background-color: #F5F1E8 !important;
    color: #2C2C2C !important;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    letter-spacing: -0.01em;
  }
  * { box-sizing: border-box; }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
    letter-spacing: -0.02em;
  }
  .bg-cream { background-color: #F5F1E8 !important; }
  .bg-warmWhite { background-color: #FDFBF7 !important; }
  .bg-sage { background-color: #8B9D83 !important; }
  .bg-charcoal { background-color: #2C2C2C !important; }
  .bg-terracotta { background-color: #C97D60 !important; }
  .text-cream { color: #F5F1E8 !important; }
  .text-warmWhite { color: #FDFBF7 !important; }
  .text-sage { color: #8B9D83 !important; }
  .text-charcoal { color: #2C2C2C !important; }
  .text-terracotta { color: #C97D60 !important; }
  .border-sage { border-color: #8B9D83 !important; }
  .border-charcoal { border-color: #2C2C2C !important; }
  .font-serif { font-family: var(--font-serif) !important; }
  .font-sans { font-family: var(--font-sans) !important; }
  /* Ultra-responsive font scaling */
  @media (max-width: 280px) { html { font-size: 11px; } }
  @media (min-width: 281px) and (max-width: 320px) { html { font-size: 12px; } }
  @media (min-width: 321px) and (max-width: 360px) { html { font-size: 13px; } }
  @media (min-width: 361px) and (max-width: 390px) { html { font-size: 14px; } }
  @media (min-width: 391px) and (max-width: 430px) { html { font-size: 15px; } }
  /* iOS touch targets */
  @media (pointer: coarse) {
    button, a, [role="button"] { min-height: 44px; }
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <link rel="icon" href="/logoicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logoicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B9D83" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Self-hosted fonts - preload for performance */}
        <link rel="preload" href="/fonts/fonts.css" as="style" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        {/* Critical CSS inlined for Russia - loads before external CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: '#F5F1E8', color: '#2C2C2C' }}>
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "StillWell English Lessons",
              "description": "Premium English lessons for children aged 13 and below",
              "url": "https://stillwell-english.com",
              "logo": "https://stillwell-english.com/logo.png",
              "image": "https://stillwell-english.com/og-image.jpg",
              "telephone": "+79145251745",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amazar",
                "addressRegion": "Mogochinsky district, Zabaykalsky Krai",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "53.6333",
                "longitude": "123.5833"
              },
              "founder": {
                "@type": "Person",
                "name": "Ksenia Volchemateva",
                "jobTitle": "English Teacher"
              },
              "areaServed": "Zabaykalsky Krai, Russia",
              "availableLanguage": ["English", "Russian"],
              "priceRange": "Contact for pricing",
              "sameAs": [
                "https://wa.me/79145251745"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
