export const formatPrice = (price: number, currency = "EGP") => {
  return `${price.toLocaleString("ar-EG")} ${currency}`
}

export const formatCPU = (cpu: number | string) => {
  if (typeof cpu === "string") return cpu
  return `${cpu.toLocaleString("ar-EG")} vCores`
}

export const formatRAM = (ram: number) => {
  if (ram >= 1024) {
    return `${(ram / 1024).toLocaleString("ar-EG")} GB`
  }
  return `${ram.toLocaleString("ar-EG")} MB`
}

export const formatDisk = (disk: number) => {
  if (disk >= 1024) {
    return `${(disk / 1024).toLocaleString("ar-EG")} GB`
  }
  return `${disk.toLocaleString("ar-EG")} MB`
}

export const formatBillingPeriod = (billing: "weekly" | "monthly") => {
  return billing === "weekly" ? "أسبوعي" : "شهري"
}
