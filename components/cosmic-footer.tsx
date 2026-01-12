"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = [
  {
    title: "الخدمات",
    links: [
      { name: "بيئات التطوير", href: "/dev-environments" },
      { name: "خوادم الويب", href: "/web-servers" },
      { name: "الآلات الافتراضية", href: "/virtual-machines" },
      { name: "استضافة البوتات", href: "/bot-hosting" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { name: "من نحن", href: "/about" },
      { name: "الباقات", href: "/plans" },
      { name: "تواصل معنا", href: "/contact" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { name: "الدعم الفني", href: "/support" },
      { name: "مركز المساعدة", href: "/help-center" },
      { name: "الأسئلة الشائعة", href: "/faq" },
      { name: "حالة الخدمة", href: "/status" },
    ],
  },
  {
    title: "القانوني",
    links: [
      { name: "سياسة الخصوصية", href: "/privacy-policy" },
      { name: "الشروط", href: "/terms" },
      { name: "سياسة الاسترداد", href: "/refund-policy" },
    ],
  },
]

const socialLinks = [
  { 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    href: "https://www.facebook.com/profile.php?id=61586327270575",
    label: "Facebook"
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
      </svg>
    ),
    href: "https://www.instagram.com/tarboo455",
    label: "Instagram"
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
      </svg>
    ),
    href: "https://wa.me/+201016948771",
    label: "WhatsApp"
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.98-.43 1.93.24 1.6 1.73z"/>
      </svg>
    ),
    href: "https://t.me/x_host_cloud",
    label: "Telegram"
  },
]

export function CosmicFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800/30 bg-gradient-to-b from-slate-900/50 to-slate-950">
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">X</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-100">X-Host</div>
                  <div className="text-sm text-slate-400">استضافة المستقبل الرقمي</div>
                </div>
              </Link>
            </div>

            {/* Brand Description */}
            <p className="text-slate-300 mb-6 max-w-sm leading-relaxed">
              نحن لا نستضيف فقط... نحن نُشغّل المستقبل. كون رقمي كامل لاستضافة مشاريعك بأداء عالي وأمان محكم.
            </p>

            {/* Tagline */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/30 to-slate-900/20 border border-slate-700/30 rounded-lg">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-slate-300">"حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا"</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-b from-slate-800/30 to-slate-900/20 border border-slate-700/30 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-6 text-lg text-slate-100 relative">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 relative group inline-block"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 rounded-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8"
          style={{ originX: 0 }}
        ></motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-4">
            <div className="text-xs text-slate-400">
              © {currentYear} X-Host. جميع الحقوق محفوظة
            </div>
            
            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-4">
              <div className="h-4 w-px bg-slate-700/50"></div>
              <div className="text-xs text-slate-500">
                البريد الإلكتروني: <a href="mailto:support@x-host.site" className="text-slate-400 hover:text-blue-400 transition-colors">support@x-host.site</a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 md:gap-6 text-xs flex-wrap justify-center md:justify-end">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              سياسة الخصوصية
            </Link>
            <div className="w-px h-4 bg-slate-700/50 hidden sm:block"></div>
            <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
              الشروط والأحكام
            </Link>
            <div className="w-px h-4 bg-slate-700/50 hidden sm:block"></div>
            <Link
              href="/refund-policy"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              سياسة الاسترداد
            </Link>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-slate-800/20 to-slate-900/10 border border-slate-700/20 rounded-full">
            <svg className="w-3 h-3 text-blue-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span className="text-xs text-slate-500">جميع الخدمات تعمل بشكل طبيعي</span>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-900/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-900/5 to-transparent rounded-full blur-2xl"></div>
    </footer>
  )
}