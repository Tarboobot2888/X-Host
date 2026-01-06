"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Globe, MessageCircle, Send, Facebook, Instagram } from "lucide-react"
import { useTheme } from "../theme-provider"

const contactInfo = [
  {
    icon: Mail,
    labelAr: "البريد الإلكتروني",
    labelEn: "Email",
    value: "support@x-host.site",
    href: "mailto:support@x-host.site",
    color: "#ff3366",
  },
  {
    icon: Phone,
    labelAr: "رقم الهاتف",
    labelEn: "Phone",
    value: "+201016948771",
    href: "tel:+201016948771",
    color: "#22c55e",
  },
  {
    icon: Globe,
    labelAr: "الموقع الرئيسي",
    labelEn: "Main Website",
    value: "x-host.cloud",
    href: "https://x-host.cloud",
    color: "#0066ff",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    labelAr: "فيسبوك",
    labelEn: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586327270575",
    color: "#1877f2",
  },
  {
    icon: Instagram,
    labelAr: "انستغرام",
    labelEn: "Instagram",
    href: "https://www.instagram.com/tarboo455",
    color: "#e4405f",
  },
  {
    icon: MessageCircle,
    labelAr: "واتساب",
    labelEn: "WhatsApp",
    href: "https://wa.me/+201016948771",
    color: "#25d366",
  },
  {
    icon: Send,
    labelAr: "تيليغرام",
    labelEn: "Telegram",
    href: "https://t.me/x_host_cloud",
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
            {t("تواصل معنا", "Contact Us")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("نحن هنا لمساعدتك", "We're Here to Help")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "فريقنا متاح على مدار الساعة للإجابة على استفساراتك",
              "Our team is available 24/7 to answer your questions",
            )}
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
            <h3 className="text-2xl font-semibold mb-6">{t("معلومات الاتصال", "Contact Information")}</h3>

            {contactInfo.map((item, index) => (
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
                  <div className="text-sm text-muted-foreground">{t(item.labelAr, item.labelEn)}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">{t("تابعنا على", "Follow Us On")}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center quantum-glass"
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
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
            <h3 className="text-2xl font-bold mb-4">{t("تحتاج مساعدة فورية؟", "Need Immediate Help?")}</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              {t(
                "تواصل معنا عبر واتساب للحصول على دعم فوري من فريقنا المتخصص",
                "Contact us via WhatsApp for instant support from our specialized team",
              )}
            </p>
            <motion.a
              href="https://wa.me/+201016948771"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              {t("تواصل عبر واتساب", "Chat on WhatsApp")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
