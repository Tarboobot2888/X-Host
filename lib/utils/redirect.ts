export const XHOST_CLOUD_URL = "https://x-host.cloud"

export const redirectToXHostCloud = (path = "/login") => {
  const url = `${XHOST_CLOUD_URL}${path}`
  if (typeof window !== "undefined") {
    window.location.href = url
  }
}

export const redirectToServerCreation = () => {
  redirectToXHostCloud("/login?redirect=/servers/create")
}

export const redirectToCreateServer = () => {
  redirectToXHostCloud("/servers/create")
}

export const getRedirectURL = (path = "/login"): string => {
  return `${XHOST_CLOUD_URL}${path}`
}
