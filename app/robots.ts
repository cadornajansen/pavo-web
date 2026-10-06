import type { MetadataRoute } from "next"
import { isIndexable, siteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return isIndexable && siteUrl
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", siteUrl).href,
      }
    : { rules: { userAgent: "*", disallow: "/" } }
}
