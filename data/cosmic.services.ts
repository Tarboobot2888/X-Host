import type { CopyText } from "./cosmic.copy"

export interface CosmicSubService {
  id: string
  label: CopyText
  icon: string
  path: string
}

export interface CosmicService {
  id: string
  color: string
  icon: "code" | "globe" | "monitor" | "server" | "bot" | "settings"
  title: CopyText
  description: CopyText
  subServices: CosmicSubService[]
}

export const cosmicServices: CosmicService[] = [
  {
    id: "dev-stack",
    icon: "code",
    title: { ar: "بيئات التطوير", en: "Dev Stack" },
    description: { ar: "بيئات تطوير متكاملة لجميع اللغات", en: "Complete development environments for all languages" },
    color: "#00ffcc",
    subServices: [
      { id: "node", label: { ar: "Node.js", en: "Node.js" }, icon: "🟢", path: "dev-stack/node" },
      { id: "python", label: { ar: "Python", en: "Python" }, icon: "🐍", path: "dev-stack/python" },
      { id: "java", label: { ar: "Java", en: "Java" }, icon: "☕", path: "dev-stack/java" },
      { id: "next", label: { ar: "NextJS", en: "NextJS" }, icon: "▲", path: "dev-stack/next" },
      { id: "custom", label: { ar: "سكربتات مخصصة", en: "Custom Scripts" }, icon: "📜", path: "dev-stack/custom" },
    ],
  },
  {
    id: "web-servers",
    icon: "globe",
    title: { ar: "خوادم الويب", en: "Web Servers" },
    description: { ar: "استضافة ويب سريعة وموثوقة", en: "Fast and reliable web hosting" },
    color: "#0066ff",
    subServices: [
      { id: "lumenweb", label: { ar: "LumenWEB", en: "LumenWEB" }, icon: "💡", path: "web-servers/lumenweb" },
      { id: "nginx", label: { ar: "Nginx", en: "Nginx" }, icon: "🌐", path: "web-servers/nginx" },
      { id: "wordpress", label: { ar: "WordPress", en: "WordPress" }, icon: "📝", path: "web-servers/wordpress" },
    ],
  },
  {
    id: "vps",
    icon: "monitor",
    title: { ar: "الآلات الافتراضية", en: "Virtual Machines" },
    description: { ar: "VPS قوي بأنظمة متعددة", en: "Powerful VPS with multiple OS options" },
    color: "#6600ff",
    subServices: [
      { id: "ubuntu", label: { ar: "Ubuntu", en: "Ubuntu" }, icon: "🐧", path: "vps/ubuntu" },
      { id: "debian", label: { ar: "Debian", en: "Debian" }, icon: "🔴", path: "vps/debian" },
      { id: "alpine", label: { ar: "Alpine", en: "Alpine" }, icon: "🏔️", path: "vps/alpine" },
      { id: "fedora", label: { ar: "Fedora", en: "Fedora" }, icon: "🎩", path: "vps/fedora" },
    ],
  },
  {
    id: "rdp",
    icon: "server",
    title: { ar: "سطح المكتب البعيد", en: "Remote Desktop" },
    description: { ar: "وصول آمن لسطح المكتب", en: "Secure desktop access" },
    color: "#ff3366",
    subServices: [
      { id: "win10", label: { ar: "Windows 10", en: "Windows 10" }, icon: "🪟", path: "rdp/windows-10" },
      { id: "winserver", label: { ar: "Windows Server", en: "Windows Server" }, icon: "🖥️", path: "rdp/windows-server" },
      { id: "ubuntu-desktop", label: { ar: "Ubuntu Desktop", en: "Ubuntu Desktop" }, icon: "🖱️", path: "rdp/ubuntu-desktop" },
    ],
  },
  {
    id: "bots",
    icon: "bot",
    title: { ar: "استضافة البوتات", en: "Bot Hosting" },
    description: { ar: "تشغيل بوتاتك على مدار الساعة", en: "Run your bots 24/7" },
    color: "#ffcc00",
    subServices: [
      { id: "discord", label: { ar: "Discord Bots", en: "Discord Bots" }, icon: "🤖", path: "bots/discord" },
      { id: "telegram", label: { ar: "Telegram Bots", en: "Telegram Bots" }, icon: "📱", path: "bots/telegram" },
      { id: "custom", label: { ar: "Custom Bots", en: "Custom Bots" }, icon: "⚙️", path: "bots/custom" },
    ],
  },
  {
    id: "custom",
    icon: "settings",
    title: { ar: "حلول مخصصة", en: "Custom Solutions" },
    description: { ar: "حلول مصممة خصيصاً لك", en: "Solutions tailored just for you" },
    color: "#00ccff",
    subServices: [
      { id: "games", label: { ar: "خوادم ألعاب", en: "Game Servers" }, icon: "🎮", path: "custom/game-servers" },
      { id: "databases", label: { ar: "قواعد بيانات", en: "Databases" }, icon: "🗄️", path: "custom/databases" },
      { id: "enterprise", label: { ar: "حلول مؤسسية", en: "Enterprise" }, icon: "🏢", path: "custom/enterprise" },
    ],
  },
]
