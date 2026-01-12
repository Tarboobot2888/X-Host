import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cairo, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { FloatingCartButton } from "@/components/floating-cart-button"
import { ThemeProvider } from "@/components/theme-provider"

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
  icons: {
    icon: "https://a.top4top.io/p_3605ck8qd0.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}

          {/* Global floating components */}
          <ScrollToTopButton />
          <FloatingCartButton />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
