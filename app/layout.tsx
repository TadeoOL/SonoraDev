import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SonoraDevelopment - Soluciones de Software Innovadoras",
  description:
    "Desarrollamos software a medida, chatbots de WhatsApp, landing pages y soluciones tecnológicas para impulsar tu negocio en Sonora, México.",
  keywords:
    "desarrollo de software, chatbots WhatsApp, landing pages, consultoría IT, Sonora, México",
  authors: [{ name: "SonoraDevelopment" }],
  openGraph: {
    title: "SonoraDevelopment - Soluciones de Software Innovadoras",
    description:
      "Desarrollamos software a medida, chatbots de WhatsApp, landing pages y soluciones tecnológicas para impulsar tu negocio en Sonora, México.",
    url: "https://sonoradev.com",
    siteName: "SonoraDevelopment",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tu-código-de-verificación-de-google",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SonoraDevelopment",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "MXN",
  },
  description:
    "Desarrollamos software a medida, chatbots de WhatsApp, landing pages y soluciones tecnológicas para impulsar tu negocio en Sonora, México.",
  provider: {
    "@type": "Organization",
    name: "SonoraDevelopment",
    email: "sonoradev.to@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Sonora",
      addressCountry: "MX",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
