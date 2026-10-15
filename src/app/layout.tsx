import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { companyConfig } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(companyConfig.productionCanonical),
  title: {
    default: companyConfig.meta.defaultTitle,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.meta.defaultDescription,
  applicationName: companyConfig.name,
  authors: [{ name: companyConfig.name, url: companyConfig.websiteUrl }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: companyConfig.productionCanonical,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: companyConfig.productionCanonical,
    siteName: companyConfig.name,
    title: companyConfig.meta.defaultTitle,
    description: companyConfig.meta.defaultDescription,
    images: [
      {
        url: "/brand/vensai-full-dark.png",
        width: 680,
        height: 480,
        alt: `${companyConfig.name} — ${companyConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyConfig.meta.defaultTitle,
    description: companyConfig.meta.defaultDescription,
    images: ["/brand/vensai-full-dark.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/vensai-symbol.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${companyConfig.productionCanonical}/#organization`,
        name: companyConfig.name,
        legalName: companyConfig.legalName,
        url: companyConfig.productionCanonical,
        logo: `${companyConfig.productionCanonical}/brand/vensai-symbol.png`,
        slogan: companyConfig.tagline,
        description: companyConfig.meta.defaultDescription,
        email: companyConfig.email,
        telephone: companyConfig.phone,
        sameAs: [
          companyConfig.socials.linkedin,
          companyConfig.socials.twitter,
          companyConfig.socials.instagram,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Client inquiries & technical solutions",
            email: companyConfig.email,
            telephone: companyConfig.phone,
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${companyConfig.productionCanonical}/#website`,
        url: companyConfig.productionCanonical,
        name: companyConfig.name,
        description: companyConfig.meta.defaultDescription,
        publisher: {
          "@id": `${companyConfig.productionCanonical}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-vensai-bg text-vensai-text antialiased selection:bg-vensai-violet selection:text-white flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-vensai-violet focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
