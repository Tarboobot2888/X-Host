import type { CopyText } from "./cosmic.copy"

export interface PlanSpec {
  cpu: number
  ram: number
  disk: number
  db: number
}

export interface CosmicPlan {
  id: string
  name: CopyText
  subtitle: CopyText
  price: number
  period: "week" | "month"
  color: string
  popular?: boolean
  infinity?: boolean
  specs: PlanSpec
}

export const cosmicPlans: CosmicPlan[] = [
  {
    id: "free",
    name: { ar: "X-Host Free", en: "X-Host Free" },
    subtitle: { ar: "الكوكب التجريبي", en: "Trial Planet" },
    price: 25,
    period: "week",
    color: "#22c55e",
    specs: { cpu: 100, ram: 1000, disk: 1500, db: 1 },
  },
  {
    id: "spark",
    name: { ar: "X-Host Spark", en: "X-Host Spark" },
    subtitle: { ar: "كوكب الشرارة", en: "Spark Planet" },
    price: 50,
    period: "month",
    color: "#94a3b8",
    specs: { cpu: 200, ram: 2000, disk: 2500, db: 1 },
  },
  {
    id: "rise",
    name: { ar: "X-Host Rise", en: "X-Host Rise" },
    subtitle: { ar: "كوكب الصعود", en: "Rise Planet" },
    price: 100,
    period: "month",
    color: "#a16207",
    specs: { cpu: 400, ram: 6000, disk: 7000, db: 1 },
  },
  {
    id: "drive",
    name: { ar: "X-Host Drive", en: "X-Host Drive" },
    subtitle: { ar: "كوكب الدفع", en: "Drive Planet" },
    price: 125,
    period: "month",
    color: "#3b82f6",
    popular: true,
    specs: { cpu: 500, ram: 8000, disk: 10000, db: 1 },
  },
  {
    id: "boost",
    name: { ar: "X-Host Boost", en: "X-Host Boost" },
    subtitle: { ar: "كوكب التسارع", en: "Boost Planet" },
    price: 150,
    period: "month",
    color: "#1f2937",
    specs: { cpu: 600, ram: 10000, disk: 12000, db: 1 },
  },
  {
    id: "scale",
    name: { ar: "X-Host Scale", en: "X-Host Scale" },
    subtitle: { ar: "كوكب التوسع", en: "Scale Planet" },
    price: 175,
    period: "month",
    color: "#eab308",
    specs: { cpu: 700, ram: 12000, disk: 14000, db: 1 },
  },
  {
    id: "power",
    name: { ar: "X-Host Power", en: "X-Host Power" },
    subtitle: { ar: "كوكب القوة", en: "Power Planet" },
    price: 200,
    period: "month",
    color: "#ef4444",
    specs: { cpu: 800, ram: 14000, disk: 16000, db: 1 },
  },
  {
    id: "elite",
    name: { ar: "X-Host Elite", en: "X-Host Elite" },
    subtitle: { ar: "كوكب النخبة", en: "Elite Planet" },
    price: 225,
    period: "month",
    color: "#a855f7",
    specs: { cpu: 800, ram: 18000, disk: 20000, db: 1 },
  },
  {
    id: "titan",
    name: { ar: "X-Host Titan", en: "X-Host Titan" },
    subtitle: { ar: "كوكب العملاق", en: "Titan Planet" },
    price: 250,
    period: "month",
    color: "#f8fafc",
    specs: { cpu: 1000, ram: 20000, disk: 25000, db: 1 },
  },
  {
    id: "apex",
    name: { ar: "X-Host Apex", en: "X-Host Apex" },
    subtitle: { ar: "كوكب القمة", en: "Apex Planet" },
    price: 275,
    period: "month",
    color: "#dc2626",
    specs: { cpu: 1100, ram: 25000, disk: 30000, db: 1 },
  },
  {
    id: "infinity",
    name: { ar: "X-Host Infinity", en: "X-Host Infinity" },
    subtitle: { ar: "كوكب اللانهائية", en: "Infinity Planet" },
    price: 300,
    period: "month",
    color: "#06b6d4",
    infinity: true,
    specs: { cpu: 0, ram: 30000, disk: 50000, db: 1 },
  },
]
