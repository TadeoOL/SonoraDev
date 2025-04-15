import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SonoraDevelopment - Soluciones de Software Innovadoras",
  description:
    "Desarrollamos software a medida que impulsa el crecimiento y la eficiencia de tu empresa. Expertos en desarrollo web, aplicaciones móviles y consultoría IT.",
  keywords:
    "desarrollo de software, desarrollo web, aplicaciones móviles, consultoría IT, Sonora, tecnología, programación, software a medida",
  authors: [{ name: "SonoraDevelopment" }],
  openGraph: {
    title: "SonoraDevelopment - Soluciones de Software Innovadoras",
    description: "Desarrollamos software a medida que impulsa el crecimiento y la eficiencia de tu empresa.",
    url: "https://sonoradevelopment.com",
    siteName: "SonoraDevelopment",
    locale: "es_MX",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'