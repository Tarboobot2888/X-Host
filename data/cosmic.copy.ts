export type CopyText = {
  ar: string
  en: string
}

export const cosmicCopy = {
  brand: {
    name: { ar: "X-Host", en: "X-Host" },
    logoAlt: { ar: "شعار X-Host", en: "X-Host Logo" },
  },
  intro: {
    skip: { ar: "تخطي", en: "Skip" },
    replay: { ar: "إعادة العرض", en: "Replay" },
    loading: { ar: "جاري التشكّل...", en: "Stitching the cosmos..." },
    tagline: { ar: "الكون الرقمي", en: "Digital Universe" },
    messages: [
      { ar: "نحن لا نستضيف… نحن نُشغّل المستقبل", en: "We do not host… we power the future" },
      { ar: "سيرفرك يبدأ هنا", en: "Your server begins here" },
      { ar: "قوة – سرعة – تحكم كامل", en: "Power — Speed — Full Control" },
    ],
  },
  nav: {
    items: [
      { id: "home", label: { ar: "الرئيسية", en: "Home" }, href: "#home" },
      { id: "services", label: { ar: "خدماتنا", en: "Services" }, href: "#services" },
      { id: "pricing", label: { ar: "الباقات", en: "Pricing" }, href: "#pricing" },
      { id: "about", label: { ar: "من نحن", en: "About" }, href: "#about" },
      { id: "contact", label: { ar: "تواصل معنا", en: "Contact" }, href: "#contact" },
    ],
    login: { ar: "تسجيل الدخول", en: "Login" },
    signUp: { ar: "إنشاء حساب", en: "Sign Up" },
    autoTheme: { ar: "تلقائي", en: "Auto" },
    languageToggle: { ar: "ع", en: "EN" },
  },
  hero: {
    status: { ar: "جميع الأنظمة تعمل بكفاءة", en: "All Systems Operational" },
    headline: { ar: "كون رقمي للاستضافة", en: "Digital Hosting Universe" },
    description: {
      ar: "نحن لا نستضيف فقط... نحن نُشغّل المستقبل. سيرفراتك تبدأ هنا، في عالم من القوة والسرعة والتحكم الكامل.",
      en: "We don't just host... we power the future. Your servers start here, in a world of power, speed, and complete control.",
    },
    primaryCta: { ar: "ابدأ رحلتك الكونية", en: "Start Your Cosmic Journey" },
    secondaryCta: { ar: "اكتشف الخدمات", en: "Explore Services" },
    features: [
      {
        id: "speed",
        title: { ar: "سرعة فائقة", en: "Ultra Fast" },
        description: { ar: "أداء صاروخي يتفوق على المنافسين", en: "Rocket performance that beats competitors" },
      },
      {
        id: "security",
        title: { ar: "حماية كونية", en: "Cosmic Protection" },
        description: { ar: "أمان متعدد الطبقات لبياناتك", en: "Multi-layer security for your data" },
      },
      {
        id: "global",
        title: { ar: "انتشار عالمي", en: "Global Reach" },
        description: { ar: "خوادم موزعة حول العالم", en: "Servers distributed worldwide" },
      },
    ],
    trustedBy: { ar: "موثوق من آلاف المطورين", en: "Trusted by thousands of developers" },
  },
  services: {
    badge: { ar: "خدماتنا الكونية", en: "Our Cosmic Services" },
    title: { ar: "اختر مجرتك الرقمية", en: "Choose Your Digital Galaxy" },
    description: {
      ar: "مجموعة متكاملة من الخدمات السحابية لتشغيل مشاريعك بكفاءة",
      en: "A complete suite of cloud services to power your projects efficiently",
    },
    viewOptions: { ar: "عرض الخيارات", en: "View Options" },
    promoBadge: { ar: "عرض حصري", en: "Exclusive Offer" },
    promoTitle: { ar: "🚀 جرّب مجاناً لمدة 7 أيام!", en: "🚀 Try Free for 7 Days!" },
    promoDescription: {
      ar: "استخدم الكود: X-Host-Free واحصل على سيرفر كوني يدوم 7 أيام مكتملة",
      en: "Use code: X-Host-Free and get a cosmic server for 7 full days",
    },
    promoCta: { ar: "ابدأ الآن مجاناً", en: "Start Free Now" },
  },
  pricing: {
    badge: { ar: "باقات الاستضافة", en: "Hosting Plans" },
    title: { ar: "اختر كوكبك الرقمي", en: "Choose Your Digital Planet" },
    description: { ar: "كل باقة مصممة لتناسب احتياجات مشروعك", en: "Every plan designed to fit your project needs" },
    popular: { ar: "الأكثر طلباً", en: "Popular" },
    launch: { ar: "إنشاء سيرفر", en: "Create Server" },
    launching: { ar: "جاري الإطلاق...", en: "Launching..." },
    periodWeek: { ar: "أسبوع", en: "week" },
    periodMonth: { ar: "شهر", en: "month" },
    viewAll: { ar: "عرض جميع الباقات والمقارنة", en: "View all plans and compare" },
    compareHint: { ar: "قارن الكواكب قبل الإطلاق", en: "Compare planets before launch" },
    tooltipCpu: { ar: "أنوية المعالجة الافتراضية", en: "Virtual CPU cores" },
    tooltipRam: { ar: "ذاكرة تشغيل عالية السرعة", en: "High-speed RAM" },
    tooltipDisk: { ar: "تخزين SSD فائق", en: "Fast SSD storage" },
    tooltipDb: { ar: "قواعد بيانات MySQL", en: "MySQL databases" },
    unlimited: { ar: "غير محدود", en: "Unlimited" },
    currency: { ar: "ج.م", en: "EGP" },
    cpuUnit: { ar: "نواة", en: "vCores" },
    ramUnit: { ar: "ميجابايت RAM", en: "MB RAM" },
    diskUnit: { ar: "ميجابايت Disk", en: "MB Disk" },
    dbUnit: { ar: "MySQL", en: "MySQL" },
  },
  about: {
    badge: { ar: "من نحن", en: "About Us" },
    title: { ar: "نحن نُشغّل المستقبل", en: "We Power The Future" },
    description: {
      ar: "X-Host ليست مجرد شركة استضافة، بل هي كون رقمي كامل حيث تتحول أفكارك إلى واقع",
      en: "X-Host isn't just a hosting company, it's a complete digital universe where your ideas become reality",
    },
    stats: [
      { id: "clients", label: { ar: "عميل سعيد", en: "Happy Clients" } },
      { id: "servers", label: { ar: "سيرفر نشط", en: "Active Servers" } },
      { id: "uptime", label: { ar: "وقت التشغيل", en: "Uptime" } },
      { id: "support", label: { ar: "دعم فني", en: "Support" } },
    ],
    features: [
      {
        id: "performance",
        title: { ar: "أداء فائق السرعة", en: "Lightning Fast Performance" },
        description: { ar: "خوادم SSD NVMe مع شبكة 10Gbps لأقصى سرعة", en: "SSD NVMe servers with 10Gbps network for maximum speed" },
      },
      {
        id: "protection",
        title: { ar: "حماية متقدمة", en: "Advanced Protection" },
        description: { ar: "حماية DDoS متعددة الطبقات وجدار حماية ذكي", en: "Multi-layer DDoS protection and intelligent firewall" },
      },
      {
        id: "uptime",
        title: { ar: "وقت تشغيل 99.9%", en: "99.9% Uptime" },
        description: { ar: "ضمان استمرارية الخدمة على مدار الساعة", en: "Guaranteed service continuity around the clock" },
      },
      {
        id: "support",
        title: { ar: "دعم فني 24/7", en: "24/7 Support" },
        description: { ar: "فريق دعم متاح دائماً لمساعدتك", en: "Support team always available to help you" },
      },
      {
        id: "community",
        title: { ar: "مجتمع نشط", en: "Active Community" },
        description: { ar: "انضم لمجتمع من المطورين والمبدعين", en: "Join a community of developers and creators" },
      },
      {
        id: "quality",
        title: { ar: "جودة مضمونة", en: "Guaranteed Quality" },
        description: { ar: "أعلى معايير الجودة في الصناعة", en: "Highest quality standards in the industry" },
      },
    ],
    missionTitle: { ar: "رؤيتنا الكونية", en: "Our Cosmic Vision" },
    missionQuote: {
      ar: '"حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا، والمستقبل بالحاضر... في رحلة كونية واحدة، نحو آفاق لا محدودة."',
      en: '"Where imagination meets reality, dreams meet technology, and the future meets the present... in one cosmic journey, towards unlimited horizons."',
    },
  },
  contact: {
    badge: { ar: "تواصل معنا", en: "Contact Us" },
    title: { ar: "نحن هنا لمساعدتك", en: "We're Here to Help" },
    description: {
      ar: "فريقنا متاح على مدار الساعة للإجابة على استفساراتك",
      en: "Our team is available 24/7 to answer your questions",
    },
    infoTitle: { ar: "معلومات الاتصال", en: "Contact Information" },
    followTitle: { ar: "تابعنا على", en: "Follow Us On" },
    helpTitle: { ar: "تحتاج مساعدة فورية؟", en: "Need Immediate Help?" },
    helpDescription: {
      ar: "تواصل معنا عبر واتساب للحصول على دعم فوري من فريقنا المتخصص",
      en: "Contact us via WhatsApp for instant support from our specialized team",
    },
    helpCta: { ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" },
    infoItems: [
      { id: "email", label: { ar: "البريد الإلكتروني", en: "Email" } },
      { id: "phone", label: { ar: "رقم الهاتف", en: "Phone" } },
      { id: "website", label: { ar: "الموقع الرئيسي", en: "Main Website" } },
    ],
    socialItems: [
      { id: "facebook", label: { ar: "فيسبوك", en: "Facebook" } },
      { id: "instagram", label: { ar: "انستغرام", en: "Instagram" } },
      { id: "whatsapp", label: { ar: "واتساب", en: "WhatsApp" } },
      { id: "telegram", label: { ar: "تيليغرام", en: "Telegram" } },
    ],
  },
  footer: {
    description: {
      ar: "نحن لا نستضيف فقط... نحن نُشغّل المستقبل. كون رقمي كامل لاستضافة مشاريعك.",
      en: "We don't just host... we power the future. A complete digital universe for hosting your projects.",
    },
    rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
    privacy: { ar: "سياسة الخصوصية", en: "Privacy" },
    terms: { ar: "الشروط", en: "Terms" },
    motto: {
      ar: '"حيث يلتقي الخيال بالواقع، والأحلام بالتكنولوجيا"',
      en: '"Where imagination meets reality, dreams meet technology"',
    },
    sections: [
      {
        id: "services",
        title: { ar: "الخدمات", en: "Services" },
        links: [
          { id: "dev-stack", label: { ar: "بيئات التطوير", en: "Dev Stack" }, href: "#services" },
          { id: "web-servers", label: { ar: "خوادم الويب", en: "Web Servers" }, href: "#services" },
          { id: "vps", label: { ar: "الآلات الافتراضية", en: "VPS" }, href: "#services" },
          { id: "bots", label: { ar: "استضافة البوتات", en: "Bot Hosting" }, href: "#services" },
        ],
      },
      {
        id: "company",
        title: { ar: "الشركة", en: "Company" },
        links: [
          { id: "about", label: { ar: "من نحن", en: "About Us" }, href: "#about" },
          { id: "pricing", label: { ar: "الباقات", en: "Pricing" }, href: "#pricing" },
          { id: "contact", label: { ar: "تواصل معنا", en: "Contact" }, href: "#contact" },
        ],
      },
      {
        id: "support",
        title: { ar: "الدعم", en: "Support" },
        links: [
          { id: "help", label: { ar: "مركز المساعدة", en: "Help Center" }, href: "cloud" },
          { id: "faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "cloud" },
          { id: "status", label: { ar: "حالة الخدمة", en: "Status" }, href: "cloud" },
        ],
      },
    ],
  },
  floatingCta: {
    label: { ar: "ابدأ الآن", en: "Start Now" },
  },
  loader: {
    label: { ar: "جاري العبور عبر الثقب الدودي", en: "Traversing the wormhole" },
  },
} as const
