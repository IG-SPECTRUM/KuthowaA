import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuthowacreatives.com"),
  title: "Kuthowa Creatives | Premium Silk Bedding & Luxury Lifestyle Products",
  description: "Discover luxury Silk Pillowcases, bed runners, bonnets, and custom bedding handcrafted in Zambia. Make everyday comfort affordable. Order via WhatsApp today.",
  keywords: ["silk bedding", "Silk Pillowcase", "hair bonnet", "luxury bedding Zambia", "handcrafted bedding", "duvet covers", "Kuthowa Creatives", "Zambian craftsmanship"],
  openGraph: {
    title: "Kuthowa Creatives - Modern African Luxury silk products",
    description: "Experience the friction-free comfort of handcrafted Premium Silk bedding and bonnets. Elevate your home, Airbnb, or hotel today.",
    url: "https://kuthowacreatives.com",
    siteName: "Kuthowa Creatives",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 800,
        alt: "Luxurious silk bedding set styled with warm lighting",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuthowa Creatives - Modern African Luxury silk products",
    description: "Experience the friction-free comfort of handcrafted Premium Silk bedding and bonnets. Elevate your home, Airbnb, or hotel today.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kuthowacreatives.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kuthowa Creatives",
    "image": "https://kuthowacreatives.com/images/hero.jpg",
    "description": "Premium Silk bedding and luxury lifestyle products handcrafted in Zambia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lusaka City Market",
      "addressLocality": "Lusaka",
      "addressCountry": "ZM"
    },
    "telephone": "+260967046463",
    "url": "https://kuthowacreatives.com"
  };

  return (
    <html lang="en-ZM" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${outfit.variable} min-h-full font-body antialiased bg-cream text-charcoal flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
