import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"
import type { ReactNode } from "react"
import { isIndexable, siteDescription, siteTitle, siteUrl } from "@/lib/site"

import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "PAVO",
  alternates: siteUrl ? { canonical: siteUrl.href } : undefined,
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "PAVO",
    title: "Learning doesn’t stop when the internet does.",
    description: siteDescription,
    url: siteUrl?.href,
    images: [
      {
        url: "/social/pavo-og.jpg",
        width: 1200,
        height: 630,
        alt: "PAVO — Learning doesn’t stop when the internet does, with the PAVO peacock mascot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/social/pavo-og.jpg",
        alt: "PAVO — Learning doesn’t stop when the internet does.",
      },
    ],
  },
  icons: {
    icon: [16, 32, 48].map((size) => ({
      url: `/icons/icon-${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${nunito.variable} scroll-pt-6 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] scheme-light [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent`}
    >
      <body className="bg-background font-sans text-foreground antialiased selection:bg-highlight selection:text-foreground">
        {children}
      </body>
    </html>
  )
}
