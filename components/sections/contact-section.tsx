"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Globe, MessageCircle, Send, Facebook, Instagram } from "lucide-react"
import { useTheme } from "../theme-provider"
import { cosmicCopy } from "@/data/cosmic.copy"
import { cosmicLinks } from "@/data/cosmic.links"

const contactInfo = [
  {
    id: "email",
    icon: Mail,
    value: cosmicLinks.contact.email.replace("mailto:", ""),
    href: cosmicLinks.contact.email,
    color: "#ff3366",
  },
  {
    id: "phone",
    icon: Phone,
    value: cosmicLinks.contact.phone.replace("tel:", ""),
    href: cosmicLinks.contact.phone,
    color: "#22c55e",
  },
  {
    id: "website",
    icon: Globe,
    value: new URL(cosmicLinks.contact.website).hostname,
    href: cosmicLinks.contact.website,
    color: "#0066ff",
  },
]

const socialLinks = [
  {
    id: "facebook",
    icon: Facebook,
    href: cosmicLinks.social.facebook,
    color: "#1877f2",
  },
  {
    id: "instagram",
    icon: Instagram,
    href: cosmicLinks.social.instagram,
    color: "#e4405f",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    href: cosmicLinks.social.whatsapp,
    color: "#25d366",
  },
  {
    id: "telegram",
    icon: Send,
    href: cosmicLinks.social.telegram,
    color: "#0088cc",
  },
]

export function ContactSection() {
  const { t } = useTheme()

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full quantum-glass text-sm text-primary mb-4">
            {t(cosmicCopy.contact.badge)}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t(cosmicCopy.contact.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(cosmicCopy.contact.description)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">{t(cosmicCopy.contact.infoTitle)}</h3>

            {contactInfo.map((item, index) => {
              const label = cosmicCopy.contact.infoItems.find((info) => info.id === item.id)?.label
              return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 quantum-glass rounded-xl"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div>
                  {label && <div className="text-sm text-muted-foreground">{t(label)}</div>}
                  <div className="font-medium">{item.value}</div>
                </div>
              </motion.a>
              )
            })}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">{t(cosmicCopy.contact.followTitle)}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const label = cosmicCopy.contact.socialItems.find((item) => item.id === social.id)?.label
                  return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center quantum-glass"
                    style={{ color: social.color }}
                    aria-label={label ? t(label) : undefined}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="quantum-glass rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t(cosmicCopy.contact.helpTitle)}</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              {t(cosmicCopy.contact.helpDescription)}
            </p>
            <motion.a
              href={cosmicLinks.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              {t(cosmicCopy.contact.helpCta)}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
