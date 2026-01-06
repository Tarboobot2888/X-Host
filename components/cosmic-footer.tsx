"use client"

import { useTheme } from "./theme-provider"
import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react"

const footerLinks = [
  {
    titleAr: "الخدمات",
    titleEn: "Services",
    links: [
      { ar: "بيئات التطوير", en: "Dev Stack", href: "#services" },
      { ar: "خوادم الويب", en: "Web Servers", href: "#services" },
      { ar: "الآلات الافتراضية", en: "VPS", href: "#services" },
      { ar: "استضافة البوتات", en: "Bot Hosting", href: "#services" },
    ],
  },
  {
    titleAr: "الشركة",
    titleEn: "Company",
    links: [
      { ar: "من نحن", en: "About Us", href: "#about" },
      { ar: "الباقات", en: "Pricing", href: "#pricing" },
      { ar: "تواصل معنا", en: "Contact", href: "#contact" },
    ],
  },
  {
    titleAr: "الدعم",
    titleEn: "Support",
    links: [
      { ar: "مركز المساعدة", en: "Help Center", href: "https://x-host.cloud" },
      { ar: "الأسئلة الشائعة", en: "FAQ", href: "https://x-host.cloud" },
      { ar: "حالة الخدمة", en: "Status", href: "https://x-host.cloud" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586327270575" },
  { icon: Instagram, href: "https://www.instagram.com/tarboo455" },
  { icon: MessageCircle, href: "https://wa.me/+201016948771" },
  { icon: Send, href: "https://t.me/x_host_cloud" },
]

export function CosmicFooter() {
  const { t } = useTheme()

  return (
    <footer className="relative pt-20 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <img src="https://a.top4top.io/p_3605ck8qd0.png" alt="X-Host" className="w-11 h-11 object-contain" />
              <span className="text-xl font-bold text-cosmic-gradient">X-Host</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">
              {t(
                "نحن لا نستضيف فقط... نحن نُشغّل المستقبل. كون رقمي كامل لاستضافة مشاريعك.",
                "We don't just host... we power the future. A complete digital universe for hosting your projects.",
              )}
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

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-sm">{t(section.titleAr, section.titleEn)}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(link.ar, link.en)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} X-Host. {t("جميع الحقوق محفوظة", "All rights reserved")}
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="https://x-host.cloud" className="hover:text-foreground transition-colors">
              {t("سياسة الخصوصية", "Privacy")}
            </Link>
            <Link href="https://x-host.cloud" className="hover:text-foreground transition-colors">
              {t("الشروط", "Terms")}
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/60 italic">
            {t(
              '"حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا"',
              '"Where imagination meets reality, dreams meet technology"',
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
