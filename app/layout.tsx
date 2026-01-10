import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cairo, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "X-Host | الكون الرقمي للاستضافة",
  description: "X-Host: حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا. نحن لا نستضيف، نحن نُشغّل المستقبل.",
  keywords: ["استضافة", "سيرفرات", "VPS", "X-Host", "hosting", "servers"],
  authors: [{ name: "X-Host Team" }],
  metadataBase: new URL("https://x-host.cloud"),
  icons: {
    icon: "/x-host-logo.svg",
    apple: "/x-host-logo.svg",
  },
  openGraph: {
    title: "X-Host | الكون الرقمي للاستضافة",
    description: "X-Host: حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا. نحن لا نستضيف، نحن نُشغّل المستقبل.",
    url: "https://x-host.cloud",
    siteName: "X-Host",
    locale: "ar",
    type: "website",
    images: [
      {
        url: "/x-host-logo.svg",
        width: 512,
        height: 512,
        alt: "X-Host",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X-Host | الكون الرقمي للاستضافة",
    description: "X-Host: حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا. نحن لا نستضيف، نحن نُشغّل المستقبل.",
    images: ["/x-host-logo.svg"],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Script
          id="x-host-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "X-Host",
              url: "https://x-host.cloud",
              logo: "https://x-host.cloud/x-host-logo.svg",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586327270575",
                "https://www.instagram.com/tarboo455",
                "https://t.me/x_host_cloud",
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
