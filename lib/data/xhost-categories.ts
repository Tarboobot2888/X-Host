export interface Category {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  icon: string
  color: string
  order: number
}

export const xhostCategories: Category[] = [
  {
    id: "dev-stack",
    name: "Dev Stack",
    nameEn: "Dev Stack",
    description: "بيئات تطوير احترافية للمشاريع",
    descriptionEn: "Professional development environments",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500",
    order: 1,
  },
  {
    id: "web-server",
    name: "Web Server",
    nameEn: "Web Server",
    description: "خوادم ويب عالية الأداء",
    descriptionEn: "High-performance web servers",
    icon: "🌐",
    color: "from-purple-500 to-pink-500",
    order: 2,
  },
  {
    id: "virtual-machines",
    name: "Virtual Machines - VPS",
    nameEn: "Virtual Machines - VPS",
    description: "آلات افتراضية خوادم خاصة",
    descriptionEn: "Virtual private servers",
    icon: "💻",
    color: "from-green-500 to-emerald-500",
    order: 3,
  },
  {
    id: "vps-ssh",
    name: "VPS - SSH",
    nameEn: "VPS - SSH",
    description: "خوادم SSH للتحكم الكامل",
    descriptionEn: "SSH virtual servers for full control",
    icon: "🔐",
    color: "from-orange-500 to-red-500",
    order: 4,
  },
  {
    id: "remote-desktop",
    name: "Remote Desktop - RDP",
    nameEn: "Remote Desktop - RDP",
    description: "سطح مكتب بعيد مع واجهة رسومية",
    descriptionEn: "Remote desktop with graphical interface",
    icon: "🖥️",
    color: "from-indigo-500 to-purple-500",
    order: 5,
  },
  {
    id: "bot-hosting",
    name: "Bot WhatsApp EN",
    nameEn: "Bot WhatsApp EN",
    description: "استضافة بوتات واتساب احترافية",
    descriptionEn: "Professional WhatsApp bot hosting",
    icon: "🤖",
    color: "from-teal-500 to-cyan-500",
    order: 6,
  },
]

export const getCategoryById = (id: string) => xhostCategories.find((cat) => cat.id === id)
export const getCategoryByName = (name: string) => xhostCategories.find((cat) => cat.name === name)
