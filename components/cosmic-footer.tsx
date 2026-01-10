"use client"

import { useTheme } from "./theme-provider"
import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react"
import Image from "next/image"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"

const socialLinks = [
  { icon: Facebook, href: cosmicLinks.social.facebook },
  { icon: Instagram, href: cosmicLinks.social.instagram },
  { icon: MessageCircle, href: cosmicLinks.social.whatsapp },
  { icon: Send, href: cosmicLinks.social.telegram },
]

export function CosmicFooter() {
  const { t } = useTheme()

  return (
    <footer className="relative pt-20 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <Image src="/x-host-logo.svg" alt={t(cosmicCopy.brand.logoAlt)} width={44} height={44} className="object-contain" />
              <span className="text-xl font-bold text-cosmic-gradient">{t(cosmicCopy.brand.name)}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">
              {t(cosmicCopy.footer.description)}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg quantum-glass flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cosmicCopy.footer.sections.map((section) => (
            <div key={section.id}>
              <h4 className="font-semibold mb-4 text-sm">{t(section.title)}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href === "cloud" ? cosmicLinks.cloud : link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t(cosmicCopy.brand.name)}. {t(cosmicCopy.footer.rights)}
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href={cosmicLinks.privacy} className="hover:text-foreground transition-colors">
              {t(cosmicCopy.footer.privacy)}
            </Link>
            <Link href={cosmicLinks.terms} className="hover:text-foreground transition-colors">
              {t(cosmicCopy.footer.terms)}
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/60 italic">
            {t(cosmicCopy.footer.motto)}
          </p>
        </div>
      </div>
    </footer>
  )
}
