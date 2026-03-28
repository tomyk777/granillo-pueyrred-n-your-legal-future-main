import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://estudiojuridicogranillo.vercel.app/";
const siteName = "Abogados previsionales en Córdoba | Estudio Granillo Pueyrredón";
const siteDescription =
  "Estudio jurídico especializado en derecho previsional, seguridad social y asesoria legal en Córdoba. Jubilaciones, pensiones, moratorias y reajustes ANSES. Más de 25 años de experiencia.";
const logoUrl = new URL("/logo.png", siteUrl).toString();
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: logoUrl,
    },
    {
      "@type": "LegalService",
      "@id": `${siteUrl}#legalservice`,
      name: siteName,
      url: siteUrl,
      image: logoUrl,
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Duarte Quirós 620, 2° piso, oficina 5",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        postalCode: "5000",
        addressCountry: "AR",
      },
      telephone: "+5493513513178",
      areaOfPractice: ["Derecho previsional", "Jubilaciones", "Pensiones", "ANSES"],
      sameAs: ["https://www.instagram.com/estudiojuridicogranillo/"],
      areaServed: {
        "@type": "Place",
        name: "Córdoba, Argentina",
      },
      availableLanguage: ["es"],
      provider: {
        "@id": `${siteUrl}#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "es-AR",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "estudio juridico cordoba",
    "derecho previsional cordoba",
    "seguridad social cordoba",
    "asesoria legal",
    "jubilaciones y pensiones Córdoba",
    "abogados Córdoba",
    "abogados previsionales Córdoba",
    "jubilaciones Córdoba",
    "ANSES abogados",
    "moratoria previsional",
    "Estudio Juridio Granillo Pueyrredón",
    "pensiones Córdoba",
    "abogados de familia Córdoba",
    "accidentes de tránsito Córdoba"
  ],
  category: "Legal Services",
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [logoUrl],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const serializedJsonLd = JSON.stringify(jsonLd);

  return (
    <html lang="es">
      <body className={cormorant.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
