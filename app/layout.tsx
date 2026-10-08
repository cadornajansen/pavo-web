import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import type { ReactNode } from "react"
import { isIndexable, siteDescription, siteTitle, siteUrl } from "@/lib/site"

import "./globals.css"

const nunito = localFont({
  src: "./fonts/nunito-latin-variable.woff2",
  weight: "200 1000",
  style: "normal",
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  applicationName: "PAVO",
  alternates: siteUrl ? { canonical: siteUrl.href } : undefined,
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "PAVO",
    title: "PAVO | Learning doesn’t stop. Even offline.",
    description: siteDescription,
    url: siteUrl?.href,
    images: [
      {
        url: "/social/pavo-share-v2.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "PAVO: Learning doesn’t stop. Even offline. Our peacock mascot carries books above a Philippine mountain landscape.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/social/pavo-share-v2.jpg",
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
      lang="en-PH"
      className={`${nunito.variable} scroll-pt-20 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] scheme-light lg:scroll-pt-24 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent`}
    >
      <body className="bg-background font-sans text-foreground antialiased selection:bg-highlight selection:text-foreground">
        {children}
      </body>
    </html>
  )
}
