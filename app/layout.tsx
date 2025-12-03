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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logoicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logoicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B9D83" />
      </head>
      <body className="font-sans antialiased">
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
