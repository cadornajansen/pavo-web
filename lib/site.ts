function readSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL?.trim()
  if (!value) return undefined
  const url = new URL(value)
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.port ||
    !url.hostname.includes(".") ||
    /(^localhost$|\.localhost$|\.local$|\.test$|\.example$|^\d+\.\d+\.\d+\.\d+$)/i.test(
      url.hostname
    )
  ) {
    throw new Error(
      "SITE_URL must be the public HTTPS origin, without a path, port, credentials, query, or fragment."
    )
  }
  return url
}

export const siteUrl = readSiteUrl()
export const isIndexable =
  Boolean(siteUrl) &&
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production") &&
  process.env.SITE_INDEXABLE !== "false"
export const siteTitle = "PAVO — Offline Learning for Filipino Students"
export const siteDescription =
  "Discover PAVO: saved lessons, personal practice, teacher reports, and QR sharing. Learning support for Filipino students and families, even offline."
